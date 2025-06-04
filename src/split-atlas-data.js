import { readFileSync, writeFileSync } from 'fs';
import Papa from 'papaparse';
import { readJsonLd } from './utils/json.js';

const FLAT_DATASET_GRAPH = process.argv[2];
const CELL_SUMMARIES = process.argv[3];
const ATLAS_DATA = process.argv[4];
const ATLAS_LQ_DATA = process.argv[5];
const TEST_DATA = process.argv[6];
const NON_ATLAS_DATA = process.argv[7];
const ALL_DATA = process.argv[8];
const APPROVED_SOURCES = process.env.APPROVED_SOURCES || '';
const UTF8_BOM = '\uFEFF';

const approvedSources = new Set(APPROVED_SOURCES.split(/\W+/).filter((s) => !!s));
const summaries = await readJsonLd(CELL_SUMMARIES);
// const summaryLookup = new Set(summaries['@graph'].map((s) => s.cell_source));
const summaryLookup = summaries['@graph'].reduce((acc, summary) => {
  const src = summary.cell_source;
  if (!acc.has(src)) {
    acc.set(src, new Set());
  }
  acc.get(src).add(summary.modality);
  return acc;
}, new Map());
const { data } = Papa.parse(readFileSync(FLAT_DATASET_GRAPH).toString(), { header: true, skipEmptyLines: true });

async function enrichAllData(data) {
  const organIds = {};
  const ruiOrganIds = {};
  for (const row of data) {
    organIds[row.organ_id] = row.organ_id.replace('http://purl.obolibrary.org/obo/UBERON_', 'UBERON:');
    if (!row.organ_id && row.rui_location.startsWith('{')) {
      const rui = JSON.parse(row.rui_location);
      row.organ_id = rui.placement.target;
      ruiOrganIds[row.organ_id] = row.organ_id.replace('http://purl.org/ccf/latest/ccf.owl#', '');
    }
  }

  const values = Object.keys(organIds)
    .filter((id) => id.startsWith('http'))
    .map((id) => `(<${id}>)`)
    .join(' ');
  const ruiValues = Object.keys(ruiOrganIds)
    .filter((id) => id.startsWith('http'))
    .map((id) => `(<${id}>)`)
    .join(' ');
  const query = `SELECT DISTINCT ?organ_id ?organ WHERE {
      {
        VALUES (?organ_id) { ${values} }
        ?organ_id <http://www.w3.org/2000/01/rdf-schema#label> ?organ .
      }
      UNION
      {
        VALUES (?organ_id) { ${ruiValues} }
        ?organ_id <http://purl.org/ccf/representation_of> ?_organ_id .
        ?_organ_id <http://www.w3.org/2000/01/rdf-schema#label> ?organ .
      }
    }`;

  const resultString = await fetch('https://lod.humanatlas.io/sparql', {
    method: 'POST',
    headers: { Accept: 'text/csv', 'Content-Type': 'application/sparql-query' },
    body: query,
  }).then((r) => r.text());

  const { data: labels } = Papa.parse(resultString, { header: true, skipEmptyLines: true });

  const lookup = {};
  for (const { organ_id, organ } of labels) {
    lookup[organ_id] = organ;
  }

  return data.map((row) => ({
    organ: lookup[row.organ_id],
    modality: [...(summaryLookup.get(row.dataset_id) ?? ['Unknown'])],
    ...row,
  }));
}

const atlasData = [];
const atlasLqData = [];
const testData = [];
const nonAtlasData = [];
let allData = [];

for (const row of data) {
  const hasExtractionSite = !!row.rui_location;
  const hasCellSummary = summaryLookup.has(row.dataset_id);
  const hasPublication = !!row.publication;
  const hasApprovedSource = approvedSources.has(row.consortium_name);
  const isVerified = hasPublication || hasApprovedSource;
  const age = parseFloat(row.donor_age + '');
  const isAdult = !isNaN(age) && age >= 18;
  const maxDiamonds = 4;
  const diamonds =
    (hasExtractionSite ? 1 : 0) + (hasCellSummary ? 1 : 0) + (hasPublication ? 1 : 0) + (isAdult ? 1 : 0);
  const inAtlas = hasExtractionSite && hasCellSummary && isVerified && isAdult;

  // Find the highest quality datasets for the atlas
  if (inAtlas) {
    atlasData.push(row);
  }
  // Find datasets that have both an extraction site and a cell summary
  if (hasExtractionSite && hasCellSummary) {
    atlasLqData.push(row);
  }
  // Find datasets that have either a cell summary or an extraction site (but not the other)
  if ((hasExtractionSite && !hasCellSummary) || (hasCellSummary && !hasExtractionSite)) {
    testData.push(row);
  }

  const fullRow = {
    diamonds,
    inAtlas,
    hasExtractionSite,
    hasCellSummary,
    hasPublication,
    ...row,
  };
  // Output all datasets that need more data to be included in the atlas
  if (diamonds < maxDiamonds) {
    nonAtlasData.push(fullRow);
  }
  allData.push(fullRow);
}
nonAtlasData.sort((a, b) => b.diamonds - a.diamonds);
allData.sort((a, b) => b.diamonds - a.diamonds);
allData = await enrichAllData(allData);

writeFileSync(ATLAS_DATA, Papa.unparse(atlasData, { header: true }));
writeFileSync(ATLAS_LQ_DATA, Papa.unparse(atlasLqData, { header: true }));
writeFileSync(TEST_DATA, Papa.unparse(testData, { header: true }));
writeFileSync(NON_ATLAS_DATA, Papa.unparse(nonAtlasData, { header: true }));
writeFileSync(ALL_DATA, UTF8_BOM + Papa.unparse(allData, { header: true }));
