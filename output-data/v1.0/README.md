# HRApop v1.0

HRApop is part of the Human Reference Atlas (HRA) <https://humanatlas.io> and published in the HRA Knowledge Graph (HRA-KG). HRApop v1.0 was generated on Wed Jun  4 01:57:01 EDT 2025. Users should use the data published to the HRA-KG at <https://lod.humanatlas.io/graph/hra-pop/v1.0/>. The full dataset graph of all datasets considered for HRApop v1.0 without enrichment is also available at <https://lod.humanatlas.io/ds-graph/hra-pop-full/v1.0/>.

Primary outputs which make up the official HRApop:

* Anatomical Structure (AS) Cell Summaries: [atlas-as-cell-summaries.jsonld](atlas-as-cell-summaries.jsonld)
* Atlas Enriched Dataset Graph: [atlas-enriched-dataset-graph.jsonld](atlas-enriched-dataset-graph.jsonld)

Secondary outputs include:

* [non-atlas-dataset-graph.csv](non-atlas-dataset-graph.csv) which captures the universe of datasets gathered during creation of the HRApop v1.0 that are missing either a publication, extraction site, or cell summary. This is used to inform additional data gathering for the next release.
* [REPORTS.md](REPORTS.md) includes a report of all the reports generated as part of the HRApop generation process. It shows the SPARQL queries used, output, and associated documentation.
* [log.txt](log.txt) is a raw processing log showing the output of the workflow as it generated the HRApop v1.0.
* [CREATION_DATE](CREATION_DATE) was generated at the conclusion of the worfkwlow run.
