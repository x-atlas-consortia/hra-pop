import { readFileSync, writeFileSync } from 'fs';
import Papa from 'papaparse';
import { readJsonLd, writeJson } from './utils/json.js';
import { getPublicXConsortiaEntities } from './utils/xconsortia-entities.js';

const IN_FILE = process.argv[2];
const OUT_FILE = process.argv[3];

function readCsv(file) {
  const { data } = Papa.parse(readFileSync(file).toString(), { header: true, skipEmptyLines: true });
  return data;
}

function writeCsv(file, data) {
  const csvString = Papa.unparse(data, { header: true });
  writeFileSync(file, csvString);
}

function isXConsortiaEntity(entity) {
  return (
    entity.startsWith('HBM') ||
    entity.startsWith('SNT') ||
    entity.startsWith('https://entity.api.hubmapconsortium.org/entities/') ||
    entity.startsWith('https://entity.api.sennetconsortium.org/entities/')
  );
}

function filterCsv(inFile, outFile, entities) {
  const data = readCsv(inFile).filter((row) => {
    const ds = row.dataset_id;
    return (isXConsortiaEntity(ds) && entities.has(ds)) || !isXConsortiaEntity(ds);
  });
  writeCsv(outFile, data);
}

async function filterJSON(inFile, outFile, entities) {
  const data = await readJsonLd(inFile);
  data['@graph'] = data['@graph'].filter((row) => {
    const ds = row.cell_source;
    return (isXConsortiaEntity(ds) && entities.has(ds)) || !isXConsortiaEntity(ds);
  });
  await writeJson(outFile, data);
}

const entities = await getPublicXConsortiaEntities();

if (IN_FILE.endsWith('.csv')) {
  filterCsv(IN_FILE, OUT_FILE, entities);
} else {
  await filterJSON(IN_FILE, OUT_FILE, entities);
}
