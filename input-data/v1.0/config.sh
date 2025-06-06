VERSION="v1.0"

REGISTRATIONS="https://apps.humanatlas.io/api/ds-graph/hubmap?token=${HUBMAP_TOKEN} \
  https://apps.humanatlas.io/api/ds-graph/sennet?token=${SENNET_TOKEN} \
  https://apps.humanatlas.io/api/ds-graph/gtex \
  https://hubmapconsortium.github.io/hra-registrations/federated/rui_locations.jsonld \
  https://hubmapconsortium.github.io/hra-registrations/vccf-federated/rui_locations.jsonld \
  https://hubmapconsortium.github.io/hra-registrations/staging/kpmp-kidney-jain-2023/rui_locations.jsonld"

PUBLICATIONS="https://docs.google.com/spreadsheets/d/1MK9KMPAFRHN6aU_e1ghApcbABAdkLGRTiaSUkliLNnw/export?format=csv&gid=1240375199"
APPROVED_SOURCES="HuBMAP SenNet GTEx"

CELL_SUMMARIES="input-data/${VERSION}/sc-transcriptomics-cell-summaries.jsonl.gz input-data/${VERSION}/sc-proteomics-cell-summaries.jsonld"
CELL_SUMMARY_DATASETS="input-data/${VERSION}/sc-transcriptomics-dataset-metadata.csv input-data/${VERSION}/sc-proteomics-dataset-metadata.csv"

export API_ENDPOINT="http://localhost:3000/"
