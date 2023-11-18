# HRApop

## Process

### INPUT:

- [registrations] A list of approved hra-dataset-graphs (previously rui_locations.jsonld)
- [cell summaries] Output files from hra-workflows-runner (cell-summaries.jsonld and datasets.csv)
- [cell summaries] Spatial cell summaries repo (deprecated, but still needed)
- [publications] Publications in hra-dataset-graphs flat csv format from Dan
  - https://docs.google.com/spreadsheets/d/1MK9KMPAFRHN6aU_e1ghApcbABAdkLGRTiaSUkliLNnw/edit#gid=1240375199

### WORKFLOW:

- 10. Get universe of registrations
  - Compute corridors
  - Compute collisions
  - Compute rui location distances
- 20. Get universe of cell summaries
  - Get universe of cell summaries (bulk)
  - Get universe of cell summaries (spatial)
- 30. Get publications
- 40. Combine / normalize universe-dataset-graph.jsonld
- 45. Split out atlas and non-atlas data (atlas-dataset-graph.jsonld and non-atlas-dataset-graph.jsonld)
- 50. Generate AS cell summaries from atlas and universe data
- 55. Compute extraction site (AS, AS-low-quality, and DS) cell summaries
- 58. Compute cell summary similarities
- 60. Combine full results
- 70. Load graphs into blazegraph (for validation and testing)
- 75. Run reports
- 80. Compile results for publication

### OUTPUT:

- hra-pop-graph.jsonld
- hra-pop-lq-graph.jsonld
- non-atlas-dataset-graph.csv (non-3-diamond datasets for Dan to improve)
- reports/*.csv
