import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import { basename, join } from 'path';
import sh from 'shelljs';
import './utils/fetch-polyfill.js';
import { selectCsvRemote } from './utils/sparql.js';

const SPARQL_ENDPOINT = process.argv[2];
const OUT_DIR = process.argv[3];
const FILTER = process.argv.length === 5 ? process.argv[4] : undefined;

// Ensure reports output directory exists
sh.mkdir('-p', OUT_DIR);

// Go through each query in queries, run them, and save out the csv report to ../data/reports/
for (const queryFile of globSync('queries/*.rq').sort()) {
  const isLarge = queryFile.endsWith('.lg.rq');
  
  const reportName = basename(queryFile, isLarge ? '.lg.rq' : '.rq');
  if (FILTER && !reportName.includes(FILTER)) {
    continue;
  }

  const reportCsv = join(OUT_DIR, `${reportName}.csv`);
  console.log('Creating report:', reportName);
  
  if (isLarge) {
    sh.exec(`./src/sparql-select.sh ${SPARQL_ENDPOINT} ${queryFile} > ${reportCsv}`);
  } else {
    const query = readFileSync(queryFile).toString();
    const csvString = await selectCsvRemote(query, SPARQL_ENDPOINT);
    writeFileSync(reportCsv, csvString);
  }
}
