import { readFileSync } from 'fs';
import Papa from 'papaparse';
import { readJsonLd, writeJson } from './utils/json.js';

const DATASET_GRAPH_CSV = process.argv[2];
const COLLISIONS = process.argv[3];
const AS_CELL_SUMMARIES = process.argv[4];
const OUTPUT = process.argv[5];

const asCellSummaries = await readJsonLd(AS_CELL_SUMMARIES);
const collisions = await readJsonLd(COLLISIONS);

const collisionLookup = (collisions['@graph'] || collisions).reduce(
  (acc, collision) => ((acc[collision['collision_source']] = collision.collisions || []), acc),
  {}
);

const asCellSummaryLookup = (asCellSummaries['@graph'] || asCellSummaries).reduce(
  (acc, summary) => ((acc[summary['cell_source']] = (acc[summary['cell_source']] || []).concat(summary)), acc),
  {}
);

const ruiCellSummaries = {};

function handleCellSummaries(sex, ruiLocation, collisions) {
  for (const collision of collisions) {
    const asIri = collision.as_id;
    const asSummaries = asCellSummaryLookup[asIri] ?? [];

    for (const asSummary of asSummaries.filter((s) => s.sex === sex)) {
      const modality = asSummary.modality;
      const annotation_method = asSummary.annotation_method;
      const summaryKey = ruiLocation + modality + annotation_method;

      const summary = (ruiCellSummaries[summaryKey] = ruiCellSummaries[summaryKey] || {
        '@type': 'CellSummary',
        cell_source: ruiLocation,
        sex,
        annotation_method,
        aggregated_summary_count: 0,
        aggregated_summaries: {},
        modality,
        summary: [],
      });
      summary.aggregated_summaries[asIri] = collision.percentage;

      const cellSummaryRows = asSummary?.summary ?? [];
      for (const cell of cellSummaryRows) {
        const weightedCellCount = cell.count * collision.percentage;

        let summaryRow = summary.summary.find((s) => s.cell_id === cell.cell_id);
        if (summaryRow) {
          summaryRow.count += weightedCellCount;
        } else {
          summaryRow = {
            '@type': 'CellSummaryRow',
            cell_id: cell.cell_id,
            cell_label: cell.cell_label,
            count: weightedCellCount,
            percentage: 0, // to be computed at the end
          };
          summary.summary.push(summaryRow);
        }
      }
    }
  }
}

function finalizeAsCellSummaries() {
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
for (const { donor_sex, rui_location } of data) {
  const rui_location_id = rui_location ? JSON.parse(rui_location)['@id'] : undefined;
  const collisions = collisionLookup[rui_location_id] || [];
  if (rui_location_id && collisions.length > 0) {
    handleCellSummaries(donor_sex, rui_location_id, collisions);
  }
}

const results = finalizeAsCellSummaries();

// Write out the new as-collisions.jsonld file
const jsonld = {
  ...JSON.parse(readFileSync('ccf-context.jsonld')),
  '@graph': results,
};
await writeJson(OUTPUT, jsonld);
