import { readFileSync, writeFileSync } from 'fs';
import { getAllSpatialEntityDistances } from './utils/spatial-entity-distance.js';

const REGISTRATIONS = process.argv[2];
const OUTPUT = process.argv[3];
const donors = JSON.parse(readFileSync(REGISTRATIONS))['@graph'];

const ruiLocations = [];
for (const donor of donors) {
  for (const block of donor['samples']) {
    const ruiLocation = block.rui_location;
    ruiLocations.push(ruiLocation);
  }
}
ruiLocations.sort((a, b) => a['@id'].localeCompare(b['@id']))

const results = [];
for await (const distance of getAllSpatialEntityDistances(ruiLocations)) {
  results.push(distance);
};

// Write out the new enriched_rui_locations.jsonld file
const jsonld = {
  ...JSON.parse(readFileSync('ccf-context.jsonld')),
  '@graph': results,
};
writeFileSync(OUTPUT, JSON.stringify(jsonld, null, 1));
