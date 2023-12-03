VERSION="v0.4"

DEPRECATED_SPATIAL_CELL_SUMMARIES=input-data/${VERSION}/spatial-cell-summaries.jsonld
DEPRECATED_CORRIDORS=raw-data/${VERSION}/corridors.jsonld
DEPRECATED_SPATIAL_CELL_SUMMARY_DATASETS=input-data/${VERSION}/spatial-cell-summaries.csv

REGISTRATIONS="https://apps.humanatlas.io/hra-api/v1/hubmap/rui_locations.jsonld?token=${HUBMAP_TOKEN}&cache=true \
  https://apps.humanatlas.io/hra-api/v1/sennet/rui_locations.jsonld?token=${SENNET_TOKEN}&cache=true \
  https://apps.humanatlas.io/hra-api/v1/gtex/rui_locations.jsonld \
  https://hubmapconsortium.github.io/hra-registrations/federated/rui_locations.jsonld"

PUBLICATIONS="https://docs.google.com/spreadsheets/d/1MK9KMPAFRHN6aU_e1ghApcbABAdkLGRTiaSUkliLNnw/export?format=csv&gid=1240375199"
APPROVED_SOURCES="HuBMAP SenNet GTEx"

CELL_SUMMARIES="input-data/${VERSION}/bulk-cell-summaries.jsonld input-data/${VERSION}/spatial-cell-summaries.jsonld"
CELL_SUMMARY_DATASETS="input-data/${VERSION}/bulk-cell-summaries.csv input-data/${VERSION}/spatial-cell-summaries.csv"
