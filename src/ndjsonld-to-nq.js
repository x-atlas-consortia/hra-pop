#!/usr/bin/env node

import { createWriteStream } from 'fs';
import jsonld from 'jsonld';
import rdfCanonize from 'rdf-canonize';
import { readJson, readLines } from './utils/json.js';

const CONTEXT = process.argv[2];
const INPUT = process.argv[3];
const OUTPUT = process.argv[4];

// Read in, add context, and expand JSON-LD data
const context = (await readJson(CONTEXT))['@context'];
const data = [];
for await (const line of readLines(INPUT)) {
  if (line) {
    const expanded = await jsonld.expand(JSON.parse(line), { expandContext: context });
    data.push(...expanded);
  }
}
// Convert JSON-LD to Quads
const quads = await jsonld.toRDF(data, { skipExpansion: true });

// Write quads to n-quad format
const stream = OUTPUT === '-' ? process.stdout : createWriteStream(OUTPUT, { autoClose: true });
for (const quad of quads) {
  const quadString = rdfCanonize.NQuads.serializeQuad(quad);
  stream.write(quadString);
}
stream.end();
