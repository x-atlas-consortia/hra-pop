#!/usr/bin/env node

import { createWriteStream } from 'fs';
import jsonld from 'jsonld';
import rdfCanonize from 'rdf-canonize';
import { readJson, readLines } from './utils/json.js';

const CONTEXT = process.argv[2];
const INPUT = process.argv[3];
const OUTPUT = process.argv[4];

const stream = OUTPUT === '-' ? process.stdout : createWriteStream(OUTPUT, { autoClose: true });
const context = (await readJson(CONTEXT))['@context'];
let count = 0;
for await (const line of readLines(INPUT)) {
  if (line) {
    const expanded = await jsonld.expand(JSON.parse(line), { expandContext: context });
    const quads = await jsonld.toRDF(expanded, { skipExpansion: true });
    for (const quad of quads) {
      if (quad.subject.termType === 'BlankNode') {
        quad.subject.value = `_:d${count}b` + quad.subject.value.slice(3);
      }
      if (quad.object.termType === 'BlankNode') {
        quad.object.value = `_:d${count}b` + quad.object.value.slice(3);
      }
      const quadString = rdfCanonize.NQuads.serializeQuad(quad);
      stream.write(quadString);
    }
    count++;
  }
}
stream.end();
