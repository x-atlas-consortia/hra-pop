import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import { basename, dirname, join } from 'path';
import sh from 'shelljs';
import './utils/fetch-polyfill.js';
import { selectCsvRemote } from './utils/sparql.js';

const SPARQL_ENDPOINT = process.argv[2];
const OUT_DIR = process.argv[3];
const COMPUTE_LQ = process.argv[4] === 'true';
const FILTER = process.argv.length === 6 ? process.argv[5] : undefined;

async function runQueries(graphName, dirName) {
  // Go through each query in queries, run them, and save out the csv report to ../data/reports/
  for (const queryFile of globSync('queries/*/*.rq').sort()) {
    const isLarge = queryFile.endsWith('.lg.rq');

    const reportName = basename(queryFile, isLarge ? '.lg.rq' : '.rq');
    if (FILTER && !reportName.includes(FILTER)) {
      continue;
    }

    // Ensure output directory exists
    const reportDir = join(OUT_DIR, dirName, basename(dirname(queryFile)));
    sh.mkdir('-p', reportDir);

    const reportCsv = join(reportDir, `${reportName}.csv`);
    console.log('Creating report:', reportName);

    if (isLarge) {
      sh.exec(`./src/sparql-select.sh ${SPARQL_ENDPOINT} ${queryFile} > ${reportCsv}`);
    } else {
      const query = readFileSync(queryFile)
        .toString()
        .replaceAll('<https://purl.humanatlas.io/graph/hra-pop', `<https://purl.humanatlas.io/graph/${graphName}`);

      const csvString = await selectCsvRemote(query, SPARQL_ENDPOINT);
      writeFileSync(reportCsv, csvString);
    }
  }
}

const runs = [runQueries('hra-pop', '.')];

if (COMPUTE_LQ) {
  runs.push(runQueries('hra-pop-lq', 'lq'))
}

await Promise.all(runs);
