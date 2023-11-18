import { createWriteStream, readFileSync } from 'fs';
import { getAllCellSummarySimilarities } from './utils/cell-summary-similarity.js';

const CELL_SUMMARIES = process.argv.slice(2, -1);
const OUTPUT = process.argv.slice(-1)[0];

const allSummaries = CELL_SUMMARIES.map((path) => JSON.parse(readFileSync(path))['@graph'])
  .reduce((acc, arr) => acc.concat(arr), [])
  .sort((a, b) => a['cell_source'].localeCompare(b['cell_source']));

const results = createWriteStream(OUTPUT, { autoClose: true });

for (const result of getAllCellSummarySimilarities(allSummaries)) {
  results.write(JSON.stringify(result) + '\n');
}

results.close();
