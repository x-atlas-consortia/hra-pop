import { existsSync, readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import Papa from 'papaparse';
import { basename } from 'path';
import sh from 'shelljs';
import { getHbmToUuidLookup } from './utils/hubmap-uuid-lookup.js';
const HUBMAP_TOKEN = process.env.HUBMAP_TOKEN;

const OUTPUT = process.argv[2];
const CSV_PATTERN = 'tissue-bar-graphs/csv/*/*.csv';
const MODALITY = 'bulk';
const BASE_IRI = 'ctpop_datasets:';

// A HuBMAP Token is required as some datasets are unpublished
if (!HUBMAP_TOKEN) {
  console.log('Please run `export HUBMAP_TOKEN=xxxYourTokenyyy` and try again.');
  process.exit();
}

// Check out the tissue-bar-graphs repo with summary csv files
if (!existsSync('tissue-bar-graphs')) {
  console.log('Getting static cell type summary csv files...');
  sh.exec('git clone https://github.com/hubmapconsortium/tissue-bar-graphs -b static');
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
    annotation_method: 'Ad-Hoc',
    modality,
    summary,
  };
}

const allCSVs = globSync(CSV_PATTERN);

const hbmLookup = await getHbmToUuidLookup(
  allCSVs.map((f) => basename(f, '.csv')).filter((id) => id.startsWith('HBM')),
  HUBMAP_TOKEN
);

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function isCxGId(id) {
  return uuidRegex.test(id.split('_')[0]);
}

function getDatasetIri(id) {
  let iri;
  id = id.startsWith('http') ? id : encodeURIComponent(id);
  if (id.startsWith('HBM')) {
    iri = hbmLookup[id];
  } else if (id.startsWith('GTEX-')) {
    iri = `https://doi.org/10.1126/science.abl4290#${id}`;
  } else if (isCxGId(id)) {
    iri = `https://api.cellxgene.cziscience.com/dp/v1/collections/${id}`;
  }
  if (!iri) {
    iri = `${BASE_IRI}${id}`;
  }
  return iri;
}

const seen = new Set();
const results = [];
for (const csvFile of allCSVs) {
  const id = basename(csvFile, '.csv');
  if (!seen.has(id)) {
    seen.add(id);
    const datasetIri = getDatasetIri(id);
    const summary = getCTSummary(csvFile, datasetIri, MODALITY);
    results.push(summary);
  } else {
    console.log(id, 'has a duplicate cell summary.');
  }
}

const jsonld = {
  ...JSON.parse(readFileSync('ccf-context.jsonld')),
  '@graph': results,
};
writeFileSync(OUTPUT, JSON.stringify(jsonld, null, 2));
