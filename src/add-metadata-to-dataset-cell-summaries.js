import { readFileSync, writeFileSync } from 'fs';
import Papa from 'papaparse';

const DATASET_GRAPH_CSV = process.argv[2];
const CELL_SUMMARIES = process.argv[3];
const OUTPUT = process.argv[4];

const { data: datasets } = Papa.parse(readFileSync(DATASET_GRAPH_CSV).toString(), {
  header: true,
  skipEmptyLines: true,
});
const datasetLookup = datasets.reduce((acc, row) => ((acc[row.dataset_id] = row), acc), {});

function getRuiSex(ruiString) {
  let sex = 'Unknown';
  if (ruiString && ruiString.length > 0) {
    const rui = JSON.parse(ruiString);
    if (rui?.placement?.target?.startsWith('http://purl.org/ccf/latest/ccf.owl#VHF')) {
      sex = 'Female';
    } else if (rui?.placement?.target?.startsWith('http://purl.org/ccf/latest/ccf.owl#VHM')) {
      sex = 'Male';
    }
  }
  return sex;
}

const cellSummaries = JSON.parse(readFileSync(CELL_SUMMARIES));
for (const summary of cellSummaries['@graph']) {
  const dataset = datasetLookup[summary['cell_source']];
  if (dataset) {
    const sex = (dataset.donor_sex || '').toLowerCase();
    const ruiSex = getRuiSex(dataset.rui_location);
    switch (sex) {
      case 'female':
        summary.sex = 'Female';
        break;
      case 'male':
        summary.sex = 'Male';
        break;
      default:
        summary.sex = ruiSex;
        break;
    }
  }
}

writeFileSync(OUTPUT, JSON.stringify(cellSummaries, null, 2));
