import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import fetch from 'node-fetch';
import { join } from 'path';

const REGISTRATIONS = process.argv[2];
const OUTPUT = process.argv[3];
const VERSION = process.env.VERSION;
const BASE_URI = `https://cdn.humanatlas.io/digital-objects/graph/hra-pop/${VERSION}/assets/`;
const CORRIDOR_CACHE = 'raw-data/corridor-cache';
const CORRIDOR_DIR = `raw-data/${VERSION}/corridors`;
const donors = JSON.parse(readFileSync(REGISTRATIONS).toString());
const API = 'https://apps.humanatlas.io/api/v1/corridor';

if (!existsSync(CORRIDOR_CACHE)) {
  mkdirSync(CORRIDOR_CACHE);
}

if (!existsSync(CORRIDOR_DIR)) {
  mkdirSync(CORRIDOR_DIR);
}

async function getCorridor(ruiLocation) {
  const id = ruiLocation['@id'];
  const glbFile = `${id.split('/').slice(-1)[0]}.glb`;
  if (existsSync(join(CORRIDOR_CACHE, glbFile))) {
    cpSync(join(CORRIDOR_CACHE, glbFile), join(CORRIDOR_DIR, glbFile))
    return glbFile;
  } else {
    console.log(id);
    if (id === 'TODO: Call API when it has been deployed to production') {
      return fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ruiLocation),
      })
        .then((r) => r.arrayBuffer())
        .then((r) => {
          writeFileSync(join(CORRIDOR_CACHE, glbFile), Buffer.from(r));
          cpSync(join(CORRIDOR_CACHE, glbFile), join(CORRIDOR_DIR, glbFile))
          return glbFile;
        })
        .catch((e) => {
          console.log(e, ruiLocation);
          return undefined;
        });
    }
  }
}

// Find all datasets in rui_locations.jsonld and add run corridor generation on them
const results = [];
let bad = 0;
let good = 0;
for (const donor of donors['@graph']) {
  for (const block of donor.samples ?? []) {
    if (block.rui_location) {
      const glbFile = await getCorridor(block.rui_location);
      if (glbFile) {
        results.push({
          '@type': 'Corridor',
          file_format: 'model/gltf-binary',
          file: `${BASE_URI}${glbFile}`,
          corridor_source: block.rui_location['@id'],
        });
        good++;
      } else {
        bad++;
      }
    }
  }
}

if (good > 0) {
  console.log(`${good} RUI locations had a corridor`);
}
if (bad > 0) {
  console.log(`WARNING ${bad} RUI locations had no corridor`);
}

// Write out the new corridors.jsonld file
const jsonld = {
  ...JSON.parse(readFileSync('ccf-context.jsonld')),
  '@graph': results,
};
writeFileSync(OUTPUT, JSON.stringify(jsonld, null, 2));