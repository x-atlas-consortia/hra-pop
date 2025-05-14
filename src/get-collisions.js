import { existsSync, readFileSync } from 'fs';
import fetch from 'node-fetch';
import { readJson, readJsonLd, writeJson } from './utils/json.js';

const REGISTRATIONS = process.argv[2];
const OUTPUT = process.argv[3];
const COLLISION_CACHE = 'raw-data/collision-cache.jsonld';
const donors = await readJsonLd(REGISTRATIONS);
const API_ENDPOINT = process.env['API_ENDPOINT'] ?? 'https://apps.humanatlas.io/api/';
const API = `${API_ENDPOINT}v1/collisions`;

let collisionCache = {};
if (existsSync(COLLISION_CACHE)) {
  collisionCache = await readJson(COLLISION_CACHE);
}

function getCollisions(ruiLocation) {
  const id = ruiLocation['@id'];
  if (collisionCache[id]) {
    return collisionCache[id];
  } else {
    console.log(id);
    return fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ruiLocation),
    })
      .then((r) => r.json())
      .then(async (r) => {
        collisionCache[id] = r;
        await writeJson(COLLISION_CACHE, collisionCache);
        return r;
      })
      .catch((e) => {
        console.log(e, ruiLocation);
        delete collisionCache[id];
        return [];
      });
  }
}

// Find all datasets in rui_locations.jsonld and add run collision detection on them
const results = [];
let bad = 0;
let one = 0;
let other = 0;
for (const donor of donors['@graph']) {
  for (const block of donor.samples ?? []) {
    if (block.rui_location) {
      const collisions = (await getCollisions(block.rui_location)).filter(
        (c) => c.percentage_of_tissue_block > 0 && c.representation_of !== '-'
      );
      results.push({
        '@type': 'CollisionSummary',
        collision_source: block.rui_location['@id'],
        collision_method: 'MESH',
        collisions: collisions.map((c) => ({
          '@type': 'CollisionItem',
          reference_organ: block.rui_location.placement.target,
          as_3d_id: c.id,
          as_id: c.representation_of,
          as_label: c.label,
          as_volume: c.AS_volume,
          percentage: c.percentage_of_tissue_block,
        })),
      });

      if (collisions.length === 0) {
        bad++;
      } else if (collisions.length === 1) {
        one++;
      }
      if (collisions.length > 1) {
        other++;
      }
    }
  }
}

if (other > 0) {
  console.log(`${other} RUI locations had more than one collision`);
}
if (one > 0) {
  console.log(`${one} RUI locations had one collision`);
}
if (bad > 0) {
  console.log(`WARNING ${bad} RUI locations had zero collisions`);
}

// Write out the new collisions.jsonld file
const jsonld = {
  ...JSON.parse(readFileSync('ccf-context.jsonld')),
  '@graph': results,
};
await writeJson(OUTPUT, jsonld);

await writeJson(COLLISION_CACHE, collisionCache);
