import { existsSync, readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import Papa from 'papaparse';
import { basename } from 'path';
import sh from 'shelljs';
import { getHbmToUuidLookup } from './utils/hubmap-uuid-lookup.js';
import { writeJson } from './utils/json.js';

const OUTPUT = process.argv[2];
const OUTPUT_CSV = process.argv[3];
const CSV_PATTERN = 'hra-ct-summaries-mx-spatial-data/**/cell_type_counts/*.csv';
const MODALITY = 'sc_proteomics';
const BASE_IRI = 'https://purl.humanatlas.io/graph/hra-pop#datasets_';
const HUBMAP_TOKEN = process.env.HUBMAP_TOKEN;

// Check out the hra-ct-summaries-mx-spatial-data repo with spatial summary csv files
if (!existsSync('hra-ct-summaries-mx-spatial-data')) {
  console.log('Getting static spatial cell type summary csv files...');
  sh.exec('git clone https://github.com/cns-iu/hra-ct-summaries-mx-spatial-data');
}

/**
 * Normalize cell type ids, generating one if needed
 *
 * @param {string} id a cell type ID or undefined
 * @param {*} label a cell type label
 * @returns a normalized, ontology friendly cell type id
 */
function normalizeCellType(id, label) {
  if (!id && label) {
    const suffix = label
      .toLowerCase()
      .trim()
      .replace(/\W+/g, '-')
      .replace(/[^a-z0-9-]+/g, '');
    id = `ASCTB-TEMP:${suffix}`; // expands to `https://purl.org/ccf/ASCTB-TEMP_${suffix}`;
  }
  return id;
}

/**
 * Get a cell type summary csv and convert it to a jsonld-compatible format
 *
 * @param {string} path path to a CSV file
 * @param {string} datasetIri the dataset iri for this summary
 * @returns a cell summary in jsonld format
 */
function getCTSummary(path, datasetIri, modality = undefined) {
  const rows = Papa.parse(readFileSync(path).toString(), { header: true }).data;
  const summary = rows
    .map((r) => ({
      '@type': 'CellSummaryRow',
      cell_id: normalizeCellType(r.cell_type_ontology_id, r.cell_type),
      cell_label: r.cell_type,
      count: +r.count,
    }))
    .filter((r) => r.cell_label || r.cell_id);
  const maxCount = summary.reduce((acc, s) => acc + s.count, 0);
  summary.forEach((s) => (s.percentage = s.count / maxCount));

  return {
    '@type': 'CellSummary',
    cell_source: datasetIri,
    annotation_method: 'sc_proteomics',
    modality,
    summary,
  };
}

const allCSVs = globSync(CSV_PATTERN);

const hbmLookup = await getHbmToUuidLookup(
  allCSVs.map((f) => basename(f, '.csv')).filter((id) => id.startsWith('HBM')),
  HUBMAP_TOKEN
);

const seen = new Set();
const results = [];
for (const csvFile of allCSVs) {
  const id = basename(csvFile, '.csv');
  if (!hbmLookup[id]) {
    console.log(id, 'no longer exists (was deleted at HuBMAP).');
  } else if (!seen.has(id)) {
    seen.add(id);
    const datasetIri = hbmLookup[id] || `${BASE_IRI}${id}`;
    const summary = getCTSummary(csvFile, datasetIri, MODALITY);
    results.push(summary);
  } else {
    console.log(id, 'has a duplicate cell summary.');
  }
}

const metadataResults = results.map((summary) => {
  const id = summary.cell_source;
  return {
    donor_id: `${id}$TEMP_DONOR`,
    block_id: `${id}$TEMP_BLOCK`,
    dataset_id: id,
  };
});

const jsonld = {
  ...JSON.parse(readFileSync('ccf-context.jsonld')),
  '@graph': results,
};
await writeJson(OUTPUT, jsonld);

const metadataCsv = Papa.unparse(metadataResults, { header: true });
writeFileSync(OUTPUT_CSV, metadataCsv);
