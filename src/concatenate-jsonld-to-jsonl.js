import { createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { getJsonLdDocLines, readLines } from './utils/json.js';

const INPUT_JSON_FILES = process.argv.slice(2, -1);
const OUTPUT_JSONL = process.argv.slice(-1)[0];

async function writeJsonLines(inputFiles, outputFile) {
  let outputStream =
    !outputFile || outputFile === '-' ? process.stdout : createWriteStream(outputFile, { autoClose: true });
  if (outputFile?.endsWith('.gz')) {
    const gzip = createGzip();
    gzip.pipe(outputStream);
    outputStream = gzip;
  }
  for (const inputFile of inputFiles) {
    let lineReader;
    if (inputFile.endsWith('.jsonl') || inputFile.endsWith('.jsonl.gz')) {
      lineReader = readLines(inputFile);
    } else {
      lineReader = getJsonLdDocLines(inputFile);
    }
    for await (const line of lineReader) {
      if (line && !outputStream.write(line + '\n')) {
        // Drain buffer periodically
        await new Promise((resolve) => {
          outputStream.once('drain', resolve);
        });
      }
    }
  }
  if (outputStream !== process.stdout) {
    outputStream.end();
  }
}

await writeJsonLines(INPUT_JSON_FILES, OUTPUT_JSONL);
