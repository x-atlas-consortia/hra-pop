import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import { basename } from 'path';

const OUTPUT = process.argv[2];
const GLB_FILES = './deprecated-corridors/';

const BASE_URI = 'https://cns-iu.github.io/hra-cell-type-populations-supporting-information/data/corridors/';
const RUI_BASE = 'http://purl.org/ccf/1.5/';

const results = globSync(`${GLB_FILES}*.glb`).map((glbFile) => ({
  '@type': 'Corridor',
  file_format: 'model/gltf-binary',
  file: `${BASE_URI}${basename(glbFile)}`,
  corridor_source: `${RUI_BASE}${basename(glbFile, '.glb')}`,
}));

// Write out the new corridors.jsonld file
const jsonld = {
  ...JSON.parse(readFileSync('ccf-context.jsonld')),
  '@graph': results,
};
writeFileSync(OUTPUT, JSON.stringify(jsonld, null, 2));
