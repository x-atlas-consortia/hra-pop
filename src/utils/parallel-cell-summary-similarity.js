import { cpus } from 'os';
import { Worker } from 'worker_threads';

const NUM_CORES = cpus().length;
const WORKER_FILE = new URL('./parallel-cell-summary-similarity.worker.js', import.meta.url);

export async function* getAllCellSummarySimilarities(summaries, minSimilarity = 0, numWorkers = NUM_CORES) {
  let workersDone = 0;
  const step = Math.floor(summaries.length / numWorkers);
  const results = [];
  for (let i = 0; i < numWorkers; i++) {
    const startIndex = i * step;
    const endIndex = i === numWorkers - 1 ? summaries.length - 1 : startIndex + step - 1;
    const worker = new Worker(WORKER_FILE, { workerData: { summaries, minSimilarity, startIndex, endIndex } });

    worker.on('message', function (result) {
      results.push(result);
    });
    worker.on('error', (err) => {
      console.error('Worker error:', err);
      worker.terminate();
    });
    worker.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
      }
      workersDone++;
    });
  }

  while (workersDone < numWorkers) {
    await new Promise((resolve) => setTimeout(resolve, 10));
    while (results.length > 0) {
      yield results.pop();
    }
  }
  while (results.length > 0) {
    yield results.pop();
  }
}
