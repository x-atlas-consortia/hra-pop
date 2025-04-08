import { readFileSync } from 'fs';
import Papa from 'papaparse';
import { readJsonLd, writeJson } from './utils/json.js';

const DATASET_GRAPH_CSV = process.argv[2];
const CELL_SUMMARIES = process.argv[3];
const OUTPUT = process.argv[4];

const summaries = await readJsonLd(CELL_SUMMARIES);
const summaryLookup = summaries['@graph'].reduce((lookup, summary) => {
  const id = summary['cell_source'];
  lookup[id] = lookup[id] || [];
  lookup[id].push(summary);
  return lookup;
}, {});

const ruiCellSummaries = {};

function handleCellSummaries(sex, id, summaries) {
  for (const dsSummary of summaries) {
    const modality = dsSummary.modality;
    const annotation_method = dsSummary.annotation_method;
    const summaryKey = id + modality + annotation_method;
    const cellSummaryRows = dsSummary.summary;

    const summary = (ruiCellSummaries[summaryKey] = ruiCellSummaries[summaryKey] || {
      '@type': 'CellSummary',
      cell_source: id,
      sex,
      annotation_method,
      aggregated_summary_count: 0,
      aggregated_summaries: {},
      modality,
      summary: [],
    });
    summary.aggregated_summaries[dsSummary.cell_source] = 1;

    for (const cell of cellSummaryRows) {
      let summaryRow = summary.summary.find((s) => s.cell_id === cell.cell_id);
      if (summaryRow) {
        summaryRow.count += cell.count;
      } else {
        summaryRow = {
          '@type': 'CellSummaryRow',
          cell_id: cell.cell_id,
          cell_label: cell.cell_label,
          count: cell.count,
          percentage: 0, // to be computed at the end
        };
        summary.summary.push(summaryRow);
      }
    }
  }
}

function finalizeCellSummaries() {
  return Object.values(ruiCellSummaries).map((summary) => {
    const cellCount = summary.summary.reduce((acc, s) => acc + s.count, 0);
    summary.summary.forEach((s) => (s.percentage = s.count / cellCount));
    summary.aggregated_summary_count = Object.keys(summary.aggregated_summaries).length;
    summary.aggregated_summaries = Object.entries(summary.aggregated_summaries).map(
      ([aggregated_cell_source, percentage]) => ({
        aggregated_cell_source,
        percentage,
      })
    );
    return summary;
  });
}

const { data } = Papa.parse(readFileSync(DATASET_GRAPH_CSV).toString(), { header: true, skipEmptyLines: true });
for (const { donor_sex, dataset_id, rui_location } of data) {
  const rui_location_id = rui_location ? JSON.parse(rui_location)['@id'] : undefined;
  const summaries = summaryLookup[dataset_id] || [];
  if (rui_location_id && summaries.length > 0) {
    handleCellSummaries(donor_sex, rui_location_id, summaries);
  }
}

const results = finalizeCellSummaries();

// Write out the new rui-location-cell-summaries.jsonld file
const jsonld = {
  ...JSON.parse(readFileSync('ccf-context.jsonld')),
  '@graph': results,
};
writeJson(OUTPUT, jsonld);
