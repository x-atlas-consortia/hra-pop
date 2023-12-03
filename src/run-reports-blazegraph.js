import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import { basename, join } from 'path';
import sh from 'shelljs';

const JOURNAL = process.argv[2];
const OUT_DIR = process.argv[3];
const FILTER = process.argv.length === 5 ? process.argv[4] : undefined;

// Ensure reports output directory exists
sh.mkdir('-p', join(OUT_DIR, 'atlas'));
sh.mkdir('-p', join(OUT_DIR, 'atlas-lq'));

async function runQueries(graphName, dirName) {
  // Go through each query in queries, run them, and save out the csv report to ../data/reports/
  for (const queryFile of globSync('queries/*.rq').sort()) {
    const isLarge = queryFile.endsWith('.lg.rq');

    const reportName = basename(queryFile, isLarge ? '.lg.rq' : '.rq');
    if (FILTER && !reportName.includes(FILTER)) {
      continue;
    }

    const reportCsv = join(OUT_DIR, dirName, `${reportName}.csv`);
    console.log('Creating report:', reportName);

    const query = readFileSync(queryFile)
      .toString()
      .replaceAll('<https://purl.humanatlas.io/graph/hra-pop', `<https://purl.humanatlas.io/graph/${graphName}`);
    writeFileSync(`${reportCsv}.rq`, query);
  
    sh.exec(`blazegraph-runner --journal=${JOURNAL} select --outformat=json ${reportCsv}.rq ${reportCsv}.json`, {silent: true})
    sh.exec(`./src/sparql-json2csv.js ${reportCsv}.json ${reportCsv}`);
    sh.exec(`rm -f ${reportCsv}.json  ${reportCsv}.rq`);
  }
}

await Promise.all([runQueries('hra-pop', 'atlas'), runQueries('hra-pop-lq', 'atlas-lq')]);
