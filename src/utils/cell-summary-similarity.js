import { dot, norm } from 'mathjs';

/**
 * A function to return a cosine sim for two vectors
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns cosine similarity between a and b
 */
function cosineSim(a, b) {
  return dot(a, b) / (norm(a) * norm(b));
}

function getCellCountsSimilarity(cellsA, cellsB) {
  const keySet = new Set(Object.keys(cellsA));
  let sharedKey = false;
  for (const key of Object.keys(cellsB)) {
    if (keySet.has(key)) {
      sharedKey = true;
    }
    keySet.add(key);
  }

  // Only compute cosine sim if there is at least one shared key
  if (sharedKey) {
    const keys = [...keySet];
    const valuesA = keys.map((key) => cellsA[key] ?? 0);
    const valuesB = keys.map((key) => cellsB[key] ?? 0);
    return cosineSim(valuesA, valuesB);
  } else {
    return 0;
  }
}

function getCellDistribution(summary) {
  return summary['summary'].reduce((acc, row) => ((acc[row['cell_id']] = row['percentage']), acc), {});
}

export function getCellSummarySimilarity(summaryA, summaryB) {
  const cellsA = getCellDistribution(summaryA);
  const cellsB = getCellDistribution(summaryB);
  return getCellCountsSimilarity(cellsA, cellsB);
}

export function* getAllCellSummarySimilarities(summaries, minSimilarity = 0) {
  for (let i = 0; i < summaries.length; i++) {
    for (let j = i + 1; j < summaries.length; j++) {
      const summaryA = summaries[i];
      const summaryB = summaries[j];
      const similarity = getCellSummarySimilarity(summaryA, summaryB);
      if (similarity > minSimilarity) {
        yield {
          '@type': 'CellSummarySimilarity',
          cell_source_a: summaryA['cell_source'],
          cell_source_b: summaryB['cell_source'],
          similarity,
        };
      }
    }
  }
}
