import { createWriteStream, readFileSync } from 'fs';
import { getAllCellSummarySimilarities } from './utils/cell-summary-similarity.js';

const CELL_SUMMARIES = process.argv.slice(2, -1);
const OUTPUT = process.argv.slice(-1)[0];
const MIN_SIMILARITY = 0.1;

const summaryLookup = {};
for (const path of CELL_SUMMARIES) {
  const summaries = JSON.parse(readFileSync(path))['@graph'];
  for (const summary of summaries) {
    const modality = summary.modality;
    const tool = summary.annotation_method;

    const lookup = (summaryLookup[modality] = summaryLookup[modality] || {});
    const id = `${summary.cell_source}||||${tool}`;
    summary.cell_source = id;
    lookup[id] = summary;
  }
}

const results = createWriteStream(OUTPUT, { autoClose: true });

results.write(`@prefix Edge: <http://purl.org/ccf/CellSummarySimilarity> .
@prefix a: <http://purl.org/ccf/cell_source_a> .
@prefix b: <http://purl.org/ccf/cell_source_b> .
@prefix sim: <http://purl.org/ccf/similarity> .
@prefix mod: <http://purl.org/ccf/modality> .
@prefix toolA: <http://purl.org/ccf/cell_source_a_tool> .
@prefix toolB: <http://purl.org/ccf/cell_source_b_tool> .

`);

for (const modality of Object.keys(summaryLookup)) {
  const allSummaries = Object.values(summaryLookup[modality]).sort((a, b) =>
    a['cell_source'].localeCompare(b['cell_source'])
  );

  console.log(modality, allSummaries.length);

  for (const result of getAllCellSummarySimilarities(allSummaries, MIN_SIMILARITY)) {
    const [a, toolA] = result.cell_source_a.split('||||');
    const [b, toolB] = result.cell_source_b.split('||||');
    const sim = result.similarity;
    if (a !== b) {
      const line = `[] a Edge:; mod: "${modality}"; toolA: "${toolA}"; toolB: "${toolB}"; a: <${a}>; b: <${b}>; sim: ${sim} .\n`;

      if (!results.write(line)) {
        // Drain buffer periodically
        await new Promise((resolve) => {
          results.once('drain', resolve);
        });
      }
    }
  }
}

results.close();
