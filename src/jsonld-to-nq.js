#!/usr/bin/env node

import { createWriteStream, readFileSync } from 'fs';
import jsonld from 'jsonld';
import rdfCanonize from 'rdf-canonize';

const INPUT = process.argv[2];
const OUTPUT = process.argv[3];

const data = JSON.parse(readFileSync(INPUT));
const quads = await jsonld.toRDF(data);
const stream = createWriteStream(OUTPUT);
for (const quad of quads) {
  stream.write(rdfCanonize.NQuads.serializeQuad(quad));
}
stream.end();
