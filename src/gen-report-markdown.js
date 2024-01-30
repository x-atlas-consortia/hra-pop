import { writeFileSync } from 'fs';
import { globSync } from 'glob';
import { basename, dirname } from 'path';
import { getSparqlMarkdown } from './utils/sparql-markdown.js';

const MD_FILE = process.argv[2];
const QUERIES_DIR = process.argv[3];
const REPORTS_DIR = process.argv[4];

export function reportMarkdown(mdFile, queriesDir, reportsDir) {
  let toc = '';
  let reports = '';

  let lastSubdir;
  const baseDir = dirname(mdFile);
  for (const queryFile of globSync(`${queriesDir}/**/*.rq`).sort()) {
    const reportName = basename(queryFile, '.rq');
    const subdir = basename(dirname(queryFile));
    const csvFile = globSync(`${reportsDir}/**/${reportName}.csv`)
      .sort()
      .find((p) => !!p);
    const results = getSparqlMarkdown(baseDir, queryFile, csvFile, false);
    reports += results.md;

    if (subdir != lastSubdir) {
      toc += `* ${subdir}\n`;
      reports += `## ${subdir}\n`;
      lastSubdir = subdir;
    }
    toc += `  * [${results.sparql.title}](#${reportName})\n`;
  }

  const md = `# Summary of Reports

  ## Table of Contents

${toc}

${reports}
  `;

  writeFileSync(mdFile, md);
}

reportMarkdown(MD_FILE, QUERIES_DIR, REPORTS_DIR);
