import { parentPort, workerData } from 'worker_threads';
import { getCellSummarySimilarity } from './cell-summary-similarity-simsimd.js';

const { summaries, minSimilarity, topEdges, startIndex, endIndex } = workerData;

for (let i = startIndex; i <= endIndex; i++) {
  let similarities = [];
  for (let j = i + 1; j < summaries.length; j++) {
    let localMinimum = minSimilarity;
    const summaryA = summaries[i];
    const summaryB = summaries[j];
    const similarity = getCellSummarySimilarity(summaryA, summaryB);
    if (similarity > localMinimum) {
      if (topEdges < 1) {
        parentPort.postMessage({
          '@type': 'CellSummarySimilarity',
          cell_source_a: summaryA['cell_source'],
          cell_source_b: summaryB['cell_source'],
          similarity,
        });
      } else {
        similarities.push({
          '@type': 'CellSummarySimilarity',
          cell_source_a: summaryA['cell_source'],
          cell_source_b: summaryB['cell_source'],
          similarity,
        });
        if (similarities.length === topEdges) {
          localMinimum = Math.min(similarities.map((s) => s.similarity));
        }
      }
    }
  }
  if (similarities.length > 0) {
    if (similarities.length > topEdges) {
      similarities = similarities.sort((a, b) => b.similarity - a.similarity).slice(0, topEdges);
    }
    for (const item of similarities) {
      parentPort.postMessage(item);
    }
  }
}

process.exit();
