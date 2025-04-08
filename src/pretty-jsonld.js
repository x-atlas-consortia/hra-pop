#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { readJson, readJsonLd } from './utils/json.js';

const contextFile = process.argv[2];
const inputFile = process.argv[3];
const outputFile = process.argv[4];

const input = await readJsonLd(inputFile);
input['@context'] = (await readJson(contextFile))['@context'];

writeFileSync(outputFile, JSON.stringify(input, null, 1));
