import { readFileSync, writeFileSync } from 'fs';
import Papa from 'papaparse';
import { gunzipSync, gzipSync } from 'zlib';

// Read and parse the CSV file
const datasets = Papa.parse(readFileSync('sc-transcriptomics-dataset-metadata.csv', 'utf-8'), { header: true }).data;

// Read and parse the gzipped JSON-LD file
const summariesBuffer = readFileSync('sc-transcriptomics-cell-summaries.jsonld.gz');
const summaries = JSON.parse(gunzipSync(summariesBuffer).toString('utf-8'));

const heart = 'UBERON:0000948';
const heartDatasets = new Set(datasets.filter((d) => d.organ === heart).map((d) => d.dataset_id));

const filteredSummaries = summaries['@graph'].filter(
  (s) => !(heartDatasets.has(s.cell_source) && s.annotation_method === 'popv')
);

console.log('Removed', summaries['@graph'].length - filteredSummaries.length, 'Heart Popv cell summaries');

summaries['@graph'] = filteredSummaries;

// Write the modified summaries to a gzipped JSON-LD file
const outputBuffer = gzipSync(JSON.stringify(summaries, null, 2));
writeFileSync('sc-transcriptomics-cell-summaries.jsonld.gz', outputBuffer);
