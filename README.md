# HRApop

## Process

### INPUT:

- [registrations] A list of approved hra-dataset-graphs (previously rui_locations.jsonld)
- [cell summaries] Output files from hra-workflows-runner (cell-summaries.jsonld and datasets.csv)
- [cell summaries] Spatial cell summaries repo (deprecated, but still needed)
- [publications] Publications in hra-dataset-graphs flat csv format from Dan
  - https://docs.google.com/spreadsheets/d/1MK9KMPAFRHN6aU_e1ghApcbABAdkLGRTiaSUkliLNnw/edit#gid=1240375199

### WORKFLOW:

| Script | Description |
| :-- | :-- |
| 05-build-deprecated-cell-summaries.sh | Get cell summaries via old CTPop method |
| 05-build-deprecated-corridors.sh | Get manually generated corridors (to eventually be replaced by a web service) |
| 05-build-deprecated-registrations.sh | Get registrations (hra-dataset-graphs) via old CTPop method |
| 10-process-registrations.sh | Combine registrations and compute collisions and euclidian distances |
| 20-process-cell-summaries.sh | Combine cell summaries and unflatten dataset metadata to hra-dataset-graph.jsonld format |
| 30-process-publications.sh | Unflatten publication metadata to hra-dataset-graph.jsonld format |
| 40-normalize-dataset-graph.sh | Combine and deduplicate registrations, cell summary, and publication datasets into a single full-dataset-graph.jsonld |
| 45-split-dataset-graph.sh | Split full-dataset-graph.jsonld into atlas (3 diamond datasets), atlas-lq (2 diamond, extraction site + cell summary datasets), test (1 diamond, extraction site OR cell summary datasets), and non-atlas datasets (anything not 3 diamond as a flat csv for tracking/improving) |
| 50-generate-as-cell-summaries.sh | Compute the AS Cell Summaries for Atlas and Atlas LQ |
| 55-generate-extraction-site-cell-summaries.sh | Compute Cell Summaries for Extraction Sites for Atlas, Atlas LQ, and Test data (using Atlas and Atlas LQ AS Cell Summaries) |
| 58-compute-cell-summary-similarities.sh | Compute cell summary similarities between all cell summaries generated. |
| 60-enrich-dataset-graphs.sh | For Atlas, Atlas LQ, and test data, add collisions, corridors, and cell summaries to there dataset-graphs to generate *-enriched-dataset-graph.jsonld files |
| 70-create-internal-blazegraph.sh | Load *-enriched-dataset-graph.jsonld files, extraction site distances, and cell summary similarities into a Blazegraph db for querying. |
| 75-run-reports.sh | Run reports against the generated blazegraph db using Atlas and Atlas LQ |
| 80-publish-results.sh | Compile the data for publication, including Atlas and Atlas LQ enriched dataset graphs, non-atlas-dataset-graph.csv (for tracking/improving datasets), and the reports generated against the atlases. |

### OUTPUT:

Atlas (3 Diamond Datasets):

- atlas-as-cell-summaries.jsonld
- atlas-enriched-dataset-graph.jsonld
- reports/atlas/*.csv

Atlas LQ (2 Diamond Datasets):

- atlas-lq-as-cell-summaries.jsonld
- atlas-lq-enriched-dataset-graph.jsonld
- reports/atlas-lq/*.csv

All Non-3 Diamond Datasets:

- non-atlas-dataset-graph.csv (non-3-diamond datasets for tracking/improving datasets)
