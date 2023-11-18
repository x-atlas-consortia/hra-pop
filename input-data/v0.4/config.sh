VERSION="v0.4"
MINIMUM_DIAMONDS=3 # Set to 3 when we have enough publications

DEPRECATED_SPATIAL_CELL_SUMMARIES=input-data/${VERSION}/spatial-cell-summaries.jsonld
DEPRECATED_BULK_CELL_SUMMARIES=input-data/${VERSION}/bulk-cell-summaries.jsonld
DEPRECATED_CORRIDORS=raw-data/${VERSION}/corridors.jsonld
DEPRECATED_REGISTRATIONS=input-data/${VERSION}/ctpop-registrations.jsonld

REGISTRATIONS="https://apps.humanatlas.io/hra-api/v1/hubmap/rui_locations.jsonld \
  https://apps.humanatlas.io/hra-api/v1/sennet/rui_locations.jsonld \
  https://ccf-api.hubmapconsortium.org/v1/gtex/rui_locations.jsonld \
  https://hubmapconsortium.github.io/hra-registrations/federated/rui_locations.jsonld \
  ${DEPRECATED_REGISTRATIONS}"

PUBLICATIONS="https://docs.google.com/spreadsheets/d/1MK9KMPAFRHN6aU_e1ghApcbABAdkLGRTiaSUkliLNnw/export?format=csv&gid=1240375199"

CELL_SUMMARIES="input-data/${VERSION}/bulk-cell-summaries.jsonld input-data/${VERSION}/spatial-cell-summaries.jsonld"
CELL_SUMMARY_DATASETS="input-data/${VERSION}/bulk-cell-summaries.csv"
