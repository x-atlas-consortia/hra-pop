import { createParseStream, createStringifyStream } from 'big-json';
import { createReadStream, createWriteStream, readFileSync } from 'fs';
import fetch from 'node-fetch';
import { createGunzip, createGzip, gunzipSync } from 'zlib';

export async function readJson(inputFile) {
  if (inputFile.startsWith('http://') || inputFile.startsWith('https://')) {
    const req = await fetch(inputFile);
    if (req.ok) {
      const data = await req.json();
      return data;
    } else {
      console.log('Error', req.status, 'getting data from', inputFile);
      return [];
    }
  } else if (inputFile.endsWith('.jsonl') || inputFile.endsWith('.jsonl.gz')) {
    return new Promise(async (resolve) => {
      const results = [];
      for await (const line of readLines(inputFile)) {
        if (line) {
          results.push(JSON.parse(line));
        }
      }
      resolve(results);
    });
  } else {
    return new Promise(async (resolve) => {
      let source = !inputFile || inputFile === '-' ? process.stdin : createReadStream(inputFile, { autoClose: true });
      if (inputFile?.endsWith('.gz')) {
        source = source.pipe(createGunzip());
      }
      const parseStream = createParseStream();
      parseStream.on('data', resolve);
      source.pipe(parseStream);
    });
  }
}

export async function readJsonLd(inputFile, context = undefined) {
  const data = await readJson(inputFile);
  if (Array.isArray(data)) {
    return {
      '@context': context,
      '@graph': data,
    };
  } else {
    return data;
  }
}

export function writeJson(outputFile, data) {
  if (
    (Array.isArray(data) || Array.isArray(data['@graph'])) &&
    (outputFile.endsWith('.jsonl') || outputFile.endsWith('.jsonl.gz'))
  ) {
    if (Array.isArray(data['@graph'])) {
      data = data['@graph'];
    }
    return writeLines(outputFile, data);
  } else {
    return new Promise((resolve) => {
      const jsonStream = createStringifyStream({ body: data });
      let output = createWriteStream(outputFile, { autoClose: true });
      if (outputFile.endsWith('.gz')) {
        const gzip = createGzip();
        gzip.pipe(output);
        output = gzip;
      }
      output.setMaxListeners(0);

      jsonStream.on('data', async function (chunk) {
        if (!output.write(chunk)) {
          // Drain buffer periodically
          await new Promise((resolve) => {
            output.once('drain', resolve);
          });
        }
      });
      jsonStream.on('end', function () {
        output.end();
        resolve();
      });
    });
  }
}

export async function* readLines(inputFile) {
  let inputStream = !inputFile || inputFile === '-' ? process.stdin : createReadStream(inputFile, { autoClose: true });
  if (inputFile?.endsWith('.gz')) {
    inputStream = inputStream.pipe(createGunzip());
  }
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  for await (const chunk of inputStream) {
    buffer += decoder.decode(chunk, { stream: true });
    let lines = buffer.split('\n');
    buffer = lines.pop();
    for (const line of lines) {
      yield line;
    }
  }
  if (buffer.length > 0) {
    yield buffer;
  }
}

export async function writeLines(outputFile, data) {
  let output = createWriteStream(outputFile, { autoClose: true });
  if (outputFile.endsWith('.gz')) {
    const gzip = createGzip();
    gzip.pipe(output);
    output = gzip;
  }
  for (const entry of data) {
    const content = JSON.stringify(entry);
    if (!output.write(content + '\n')) {
      // Drain buffer periodically
      await new Promise((resolve) => {
        output.once('drain', resolve);
      });
    }
  }
  output.end();
}

export async function* getJsonLdDocLines(inputFile) {
  let document = [];
  if (inputFile.startsWith('http')) {
    document = await fetch(inputFile, { follow: true }).then((r) => r.json());
  } else {
    if (inputFile.endsWith('.gz')) {
      document = JSON.parse(gunzipSync(readFileSync(inputFile)));
    } else {
      document = JSON.parse(readFileSync(inputFile));
    }
  }
  document = document['@graph'] || document;
  document = !document ? [] : Array.isArray(document) ? document : [document];
  for (const doc of document) {
    const line = JSON.stringify(doc);
    yield line;
  }
}
