import { readFileSync, writeFileSync } from 'fs';
import Papa from 'papaparse';

const FLAT_DATASET_GRAPH = process.argv[2];
const CELL_SUMMARIES = process.argv[3];
const ATLAS_DATA = process.argv[4];
const ATLAS_LQ_DATA = process.argv[5];
const TEST_DATA = process.argv[6];
const NON_ATLAS_DATA = process.argv[7];
const APPROVED_SOURCES = process.env.APPROVED_SOURCES || '';

const approvedSources = new Set(APPROVED_SOURCES.split(/\W+/).filter(s => !!s));
const summaries = JSON.parse(readFileSync(CELL_SUMMARIES).toString());
const summaryLookup = new Set(summaries['@graph'].map((s) => s.cell_source));
const { data } = Papa.parse(readFileSync(FLAT_DATASET_GRAPH).toString(), { header: true, skipEmptyLines: true });

const atlasData = [];
const atlasLqData = [];
const testData = [];
const nonAtlasData = [];

for (const row of data) {
  const hasExtractionSite = !!row.rui_location;
  const hasCellSummary = summaryLookup.has(row.dataset_id);
  const hasPublication = !!row.publication;
  const hasApprovedSource = approvedSources.has(row.consortium_name);
  const isVerified = hasPublication || hasApprovedSource;
  const maxDiamonds = 3;
  const diamonds = (hasExtractionSite ? 1 : 0) + (hasCellSummary ? 1 : 0) + (hasPublication ? 1 : 0);

  // Find the highest quality datasets for the atlas
  if (hasExtractionSite && hasCellSummary && isVerified) {
    atlasData.push(row);
  }
  // Find datasets that have both an extraction site and a cell summary
  if (hasExtractionSite && hasCellSummary) {
    atlasLqData.push(row);
  }
  // Find datasets that have either a cell summary or an extraction site (but not the other)
  if ((hasExtractionSite && !hasCellSummary) || (hasCellSummary && !hasExtractionSite)) {
    testData.push(row);
  }
  // Output all datasets that need more data to be included in the atlas
  if (diamonds < maxDiamonds) {
    nonAtlasData.push({
      diamonds,
      hasExtractionSite,
      hasCellSummary,
      hasPublication,
      ...row,
    });
  }
}
nonAtlasData.sort((a, b) => b.diamonds - a.diamonds);

writeFileSync(ATLAS_DATA, Papa.unparse(atlasData, { header: true }));
writeFileSync(ATLAS_LQ_DATA, Papa.unparse(atlasLqData, { header: true }));
writeFileSync(TEST_DATA, Papa.unparse(testData, { header: true }));
writeFileSync(NON_ATLAS_DATA, Papa.unparse(nonAtlasData, { header: true }));
