import { readFileSync, writeFileSync } from 'fs';

const template = readFileSync('src/README-TEMPLATE.md').toString();
const VERSION = process.argv[2];
const CREATION_DATE = process.argv[3];
const OUTPUT = process.argv[4];

const md = template.replace(/\{\{VERSION\}\}/g, VERSION).replace(/\{\{CREATION\_DATE\}\}/g, CREATION_DATE);

writeFileSync(OUTPUT, md);
