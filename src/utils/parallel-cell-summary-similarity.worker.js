import { parentPort, workerData } from 'worker_threads';
import { getCellSummarySimilarity } from './cell-summary-similarity.js';

const { summaries, minSimilarity, startIndex, endIndex } = workerData;

for (let i = startIndex; i <= endIndex; i++) {
  for (let j = i + 1; j < summaries.length; j++) {
    const summaryA = summaries[i];
    const summaryB = summaries[j];
    const similarity = getCellSummarySimilarity(summaryA, summaryB);
    if (similarity > minSimilarity) {
      parentPort.postMessage({
        '@type': 'CellSummarySimilarity',
        cell_source_a: summaryA['cell_source'],
        cell_source_b: summaryB['cell_source'],
        similarity,
      });
    }
  }
}

process.exit();
