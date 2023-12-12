# HRApop

This repository has the code, input data, and draft results for HRApop construction. Final versions of the HRApop atlas are published to <https://lod.humanatlas.io/graph/hra-pop> (and <https://lod.humanatlas.io/graph/hra-pop-lq> for the lower-quality version). An ER Diagram of the resulting graph is [here](./er-diagram.mmd).

## Construction Algorithm

### Requirements

To run the construction algorithm, you will need the following installed:

1. A unix-like environment (Linux, WSL2 / Ubuntu For Windows, or Mac (untested))
2. Node.js v18+
3. Java 11 (for blazegraph-runner)
4. Docker (optional)

### Setup

1. Install node dependencies via `npm ci`, which also installs [blazegraph-runner](https://github.com/balhoff/blazegraph-runner/) into `node_modules/.bin` for querying and reports.

### Input

Each HRApop version is defined in a subdirectory of the input-data directory by version. A [config.sh](input-data/v0.3/config.sh) file is used to configure the sources and settings for the HRApop construction workflow.

In addition to the config.sh file, the input-data/$VERSION directory will have a few things:

- **registrations** A list of approved hra-dataset-graphs (previously rui_locations.jsonld)
- **cell summaries (bulk)** Output files from hra-workflows-runner (cell-summaries.jsonld and datasets.csv) for bulk datasets
- **cell summaries (spatial)** Spatial cell summaries (using a deprecated process at this point, but still needed)
- **publications** Publications in hra-dataset-graphs flat csv format. Currently pulled from a curated [Google Sheet](https://docs.google.com/spreadsheets/d/1MK9KMPAFRHN6aU_e1ghApcbABAdkLGRTiaSUkliLNnw/edit#gid=1240375199).

### Running

To start a workflow run, check the constants.sh to ensure it's including the right config.sh for your version. Then run [./logged-run.sh](./logged-run.sh) which will run the whole workflow and place a log.txt file in the correct subdirectory of output-data.

### Construction Workflow

| Script | Description |
| :-- | :-- |
| 00-setup-environment.sh | Additional environment setup (installs `blazegraph-runner`) |
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
| 75x-run-remote-reports.sh | Run reports against Atlas and Atlas LQ using the HRA-KG SPARQL server at <https://lod.humanatlas.io/sparql>. |
| 80-publish-results.sh | Compile the data for publication, including Atlas and Atlas LQ enriched dataset graphs, non-atlas-dataset-graph.csv (for tracking/improving datasets), and the reports generated against the atlases. |

### Output

Data is compiled to output-data/$VERSION.

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
