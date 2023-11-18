import { createWriteStream, readFileSync } from 'fs';
import { getAllCellSummarySimilarities } from './utils/cell-summary-similarity.js';

const CELL_SUMMARIES = process.argv.slice(2, -1);
const OUTPUT = process.argv.slice(-1)[0];

const summaryLookup = {};
for (const path of CELL_SUMMARIES) {
  const summaries = JSON.parse(readFileSync(path))['@graph'];
  for (const summary of summaries) {
    const id = summary.cell_source;
    summaryLookup[id] = summary;
  }
}

const allSummaries = Object.values(summaryLookup)
  .sort((a, b) => a['cell_source'].localeCompare(b['cell_source']));

const results = createWriteStream(OUTPUT, { autoClose: true });

results.write(`@prefix Edge: <http://purl.org/ccf/CellSummarySimilarity> .
@prefix a: <http://purl.org/ccf/cell_source_a> .
@prefix b: <http://purl.org/ccf/cell_source_b> .
@prefix sim: <http://purl.org/ccf/similarity> .

`);

for (const result of getAllCellSummarySimilarities(allSummaries)) {
  const a = result.cell_source_a;
  const b = result.cell_source_b;
  const sim = result.similarity;
  results.write(`[] a Edge: ; a: <${a}> ; b: <${b}> ; sim: ${sim} .\n`);
}

results.close();
