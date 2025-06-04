import { createWriteStream } from 'fs';
import { readJsonLd } from './utils/json.js';
import { getAllSpatialEntityDistances } from './utils/spatial-entity-distance.js';

const REGISTRATIONS = process.argv[2];
const OUTPUT = process.argv[3];
const donors = (await readJsonLd(REGISTRATIONS))['@graph'];

const ruiLocationLookup = {};
for (const donor of donors) {
  for (const block of donor['samples']) {
    const ruiLocation = block.rui_location;
    ruiLocationLookup[ruiLocation['@id']] = ruiLocation;
  }
}
const ruiLocations = Object.values(ruiLocationLookup).sort((a, b) => a['@id'].localeCompare(b['@id']));

const results = createWriteStream(OUTPUT, { autoClose: true });

results.write(`@prefix Edge: <http://purl.org/ccf/SpatialEntityDistance> .
@prefix a: <http://purl.org/ccf/entity_a> .
@prefix b: <http://purl.org/ccf/entity_b> .
@prefix dist: <http://purl.org/ccf/distance> .

`);

for await (const result of getAllSpatialEntityDistances(ruiLocations)) {
  const a = result.entity_a;
  const b = result.entity_b;
  const dist = result.distance;
  const line = `[] a Edge: ; a: <${a}> ; b: <${b}> ; dist: ${dist} .\n`;

  if (!results.write(line)) {
    // Drain buffer periodically
    await new Promise((resolve) => {
      results.once('drain', resolve);
    });
  }
}

results.close();
