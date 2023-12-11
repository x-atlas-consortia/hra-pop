import { readFileSync, writeFileSync } from 'fs';

const DATASET_GRAPH = process.argv[2];
const COLLISIONS = process.argv[3];
const CORRIDORS = process.argv[4];
const DATASET_CELL_SUMMARIES = process.argv[5];
const EXTRACTION_SITE_CELL_SUMMARIES = process.argv[6];
const OUTPUT = process.argv[7];

const collisions = JSON.parse(readFileSync(COLLISIONS));
const corridors = JSON.parse(readFileSync(CORRIDORS));
const datasetSummaries = JSON.parse(readFileSync(DATASET_CELL_SUMMARIES));
const ruiSummaries = JSON.parse(readFileSync(EXTRACTION_SITE_CELL_SUMMARIES));
const donors = JSON.parse(readFileSync(DATASET_GRAPH));

const summaryLookup = datasetSummaries['@graph'].concat(ruiSummaries['@graph'])
  .reduce((acc, summary) => {
    const summaries = acc[summary['cell_source']] = acc[summary['cell_source']] || [];
    summaries.push(summary);
    delete summary.cell_source;
    return acc; 
  }, {});

// Add summary to an object if it exists in *-cell-sumaries.jsonld
function enrichWithSummaries(obj) {
  obj.summaries = summaryLookup[obj['@id']] || [];
}

const collisionLookup = collisions['@graph']
  .reduce((acc, collision) => (acc[collision['collision_source']] = collision, acc), {});

const corridorLookup = corridors['@graph']
  .reduce((acc, corridor) => (acc[corridor['corridor_source']] = corridor, acc), {});

function enrichRuiLocation(ruiLocation) {
  const collision = collisionLookup[ruiLocation['@id']];
  if (collision) {
    ruiLocation.all_collisions = ruiLocation.all_collisions ?? [];
    ruiLocation.all_collisions.push(collision);
    delete collision.collision_source;
  }

  const corridor = corridorLookup[ruiLocation['@id']];
  if (corridor) {
    ruiLocation.corridor = corridor;
    delete corridor.corridor_source;
  }

  enrichWithSummaries(ruiLocation);
}

// Find all datasets in rui_locations.jsonld and add cell summaries if they exist
for (const donor of donors['@graph']) {
  for (const block of donor.samples ?? []) {
    if (block.rui_location) {
      enrichRuiLocation(block.rui_location);
    }
    for (const section of block.sections ?? []) {
      (section.datasets ?? []).forEach(enrichWithSummaries);
    }
    (block.datasets ?? []).forEach(enrichWithSummaries);
  }
}

// Write out the new enriched_rui_locations.jsonld file
const jsonld = {
  ...JSON.parse(readFileSync('ccf-context.jsonld')),
  '@graph': donors['@graph'],
};
writeFileSync(OUTPUT, JSON.stringify(jsonld, null, 2));
