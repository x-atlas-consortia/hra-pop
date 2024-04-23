import { readFileSync, writeFileSync } from 'fs';
import Papa from 'papaparse';

const INPUT_CSV = process.argv[2];
const OUTPUT_ASSAYS = process.argv[3];

const csvString = readFileSync(INPUT_CSV).toString();
const { data } = Papa.parse(csvString, { header: true, skipEmptyLines: true });

const assaySet = new Set();
for (const row of data) {
  if (row.assay_type) {
    let assays = [];
    if (row.assay_type.startsWith('[')) {
      assays = JSON.parse(row.assay_type).map((n) => n.label);
    } else {
      assays = [row.assay_type];
    }

    for (const assay of assays) {
      assaySet.add(assay);
    }
  }
}

const outString =
  'assay_type\n' +
  Array.from(assaySet)
    .map((assay) => `"${assay}"`)
    .sort()
    .join('\n');

writeFileSync(OUTPUT_ASSAYS, outString);
