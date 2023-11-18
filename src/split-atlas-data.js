import { readFileSync, writeFileSync } from 'fs';
import Papa from 'papaparse';

const MINIMUM_DIAMONDS = parseInt(process.argv[2]);
const FLAT_DATASET_GRAPH = process.argv[3];
const CELL_SUMMARIES = process.argv[4];
const ATLAS_DATA = process.argv[5];
const NON_ATLAS_DATA = process.argv[6];

const summaries = JSON.parse(readFileSync(CELL_SUMMARIES).toString());
const summaryLookup = new Set(summaries['@graph'].map((s) => s.cell_source));
const { data } = Papa.parse(readFileSync(FLAT_DATASET_GRAPH).toString(), { header: true, skipEmptyLines: true });

const atlasData = [];
const nonAtlasData = [];

for (const row of data) {
  const hasExtractionSite = !!row.rui_location;
  const hasCellSummary = summaryLookup.has(row.dataset_id);
  const hasPublication = !!row.publication;
  const maxDiamonds = 3;
  const diamonds = (hasExtractionSite ? 1 : 0) + (hasCellSummary ? 1 : 0) + (hasPublication ? 1 : 0);

  if (hasExtractionSite && hasCellSummary && (MINIMUM_DIAMONDS < maxDiamonds || hasPublication)) {
    atlasData.push(row);
  }
  if (diamonds < maxDiamonds) {
    nonAtlasData.push({
      diamonds,
      ...row,
    });
  }
}
nonAtlasData.sort((a, b) => b.diamonds - a.diamonds);

writeFileSync(ATLAS_DATA, Papa.unparse(atlasData, { header: true }));
writeFileSync(NON_ATLAS_DATA, Papa.unparse(nonAtlasData, { header: true }));
