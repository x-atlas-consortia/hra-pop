#!/usr/bin/env node

import { createWriteStream } from 'fs';
import jsonld from 'jsonld';
import rdfCanonize from 'rdf-canonize';
import { readJson, readJsonLd } from './utils/json.js';

const CONTEXT = process.argv[2];
const INPUT = process.argv[3];
const OUTPUT = process.argv[4];

const data = await readJsonLd(INPUT);
data['@context'] = (await readJson(CONTEXT))['@context'];
const quads = await jsonld.toRDF(data);
const stream = createWriteStream(OUTPUT);
for (const quad of quads) {
  stream.write(rdfCanonize.NQuads.serializeQuad(quad));
}
stream.end();
