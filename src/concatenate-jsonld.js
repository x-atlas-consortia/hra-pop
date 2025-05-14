import { readFileSync } from 'fs';
import { readJsonLd, writeJson } from './utils/json.js';

const REGISTRATION_URLS = process.argv.slice(2, -1);
const OUTPUT_JSONLD = process.argv.slice(-1)[0];

async function concatenateJsonLds(inputFiles) {
  let results = [];

  for (const inputFile of inputFiles) {
    const documents = await readJsonLd(inputFile);
    results = results.concat(documents['@graph']);
  }

  const jsonld = {
    ...JSON.parse(readFileSync('ccf-context.jsonld')),
    '@graph': results,
  };

  return jsonld;
}

const jsonld = await concatenateJsonLds(REGISTRATION_URLS);
await writeJson(OUTPUT_JSONLD, jsonld);
