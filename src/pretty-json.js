#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { readJson } from './utils/json.js'

const inputFile = process.argv[2];
const outputFile = process.argv[3];

const input = await readJson(inputFile);
writeFileSync(outputFile, JSON.stringify(input, null, 1));
