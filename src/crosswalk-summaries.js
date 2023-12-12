import { readFileSync, writeFileSync } from 'fs';
import { gunzipSync, gzipSync } from 'zlib';
import Papa from 'papaparse';

const INPUT_GZ=process.argv[2];
const OUTPUT_GZ=process.argv[3];
const TOOL=process.argv[4];
const CROSSWALK=process.argv[5];
const COLUMN=TOOL[0].toUpperCase() + TOOL.slice(1) + '_Label';

const data = JSON.parse(gunzipSync(readFileSync(INPUT_GZ)));

const crosswalkRows = Papa.parse(readFileSync(CROSSWALK).toString(), { header: true }).data;
const crosswalk = crosswalkRows.reduce((acc, row) => {
  acc[row[COLUMN]] = row;
  return acc;
}, {});

let seen = 0;
let matches = 0;
for (const summary of data['@graph']) {
  if (summary.annotation_method === TOOL) {
    for (const summaryRow of summary.summary) {
      const match = crosswalk[summaryRow.cell_label];
      seen++;
      if (match) {
        summaryRow.cell_id = match.CL_ID;
        summaryRow.cell_label = match.Label;
        matches++;
      }
    }
  }
}

console.log(matches, seen);

writeFileSync(OUTPUT_GZ, gzipSync(JSON.stringify(data, null, 2)));
