VERSION="v0.11.1"

DEPRECATED_SPATIAL_CELL_SUMMARIES=input-data/${VERSION}/spatial-cell-summaries.jsonld
DEPRECATED_SPATIAL_CELL_SUMMARY_DATASETS=input-data/${VERSION}/spatial-dataset-metadata.csv
DEPRECATED_CORRIDORS=raw-data/${VERSION}/corridors.jsonld

REGISTRATIONS="https://apps.humanatlas.io/api/ds-graph/hubmap?token=${HUBMAP_TOKEN} \
  https://apps.humanatlas.io/api/ds-graph/sennet?token=${SENNET_TOKEN} \
  https://apps.humanatlas.io/api/ds-graph/gtex \
  https://hubmapconsortium.github.io/hra-registrations/federated/rui_locations.jsonld"

PUBLICATIONS="https://docs.google.com/spreadsheets/d/1MK9KMPAFRHN6aU_e1ghApcbABAdkLGRTiaSUkliLNnw/export?format=csv&gid=1240375199"
APPROVED_SOURCES="HuBMAP SenNet GTEx"

CELL_SUMMARIES="input-data/${VERSION}/bulk-cell-summaries.jsonld.gz input-data/${VERSION}/spatial-cell-summaries.jsonld"
CELL_SUMMARY_DATASETS="input-data/${VERSION}/bulk-dataset-metadata.csv input-data/${VERSION}/spatial-dataset-metadata.csv"
