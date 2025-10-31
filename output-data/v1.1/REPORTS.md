# Summary of Reports

  ## Table of Contents

* atlas-ad-hoc
  * [Atlas AS with CT and B info from exp data (as-ct-b)](#as-ct-b)
  * [Atlas dataset, extraction site, and AS (as-datasets-extraction-sites)](#as-datasets-extraction-sites)
  * [Atlas dataset tool, modality, and AS info (as-datasets-modality)](#as-datasets-modality)
  * [All biomarkers seen in Atlas Datasets (atlas-organ-cell-biomarker-scores)](#atlas-organ-cell-biomarker-scores)
  * [Cell Counts for Atlas Proteomics Datasets (atlas-sc-proteomics-cell-counts)](#atlas-sc-proteomics-cell-counts)
  * [Cell Counts for Atlas Transcriptomics Datasets (atlas-sc-transcriptomics-cell-counts)](#atlas-sc-transcriptomics-cell-counts)
  * [Cell Summaries by Anatomical Structure  (cell-types-in-anatomical-structurescts-per-as)](#cell-types-in-anatomical-structurescts-per-as)
  * [atlas cell type level mapping (cell-types-level-mapping-long)](#cell-types-level-mapping-long)
  * [atlas cell type level mapping (cell-types-level-mapping)](#cell-types-level-mapping)
  * [Cell Summaries by Dataset (cell-types-per-dataset)](#cell-types-per-dataset)
  * [Cell Summaries by Extraction Site  (cell-types-per-extraction-site)](#cell-types-per-extraction-site)
  * [Atlas consortium breakdown (consortium-breakdown)](#consortium-breakdown)
  * [Datasets by modality (count-dataset-modality)](#count-dataset-modality)
  * [Kidney AS Cell Distributions (counts-for-heart-as)](#counts-for-heart-as)
  * [Kidney AS Cell Distributions (counts-for-kidney-as)](#counts-for-kidney-as)
  * [Bulk Tool-Organ-AS Cell Distributions (counts-for-tools-by-as)](#counts-for-tools-by-as)
  * [Cell Summaries with Biomarker information by Dataset (ct-bm-per-dataset)](#ct-bm-per-dataset)
  * [Atlas-level CxG collections (cxg-collections)](#cxg-collections)
  * [data-provenance](#data-provenance)
  * [Atlas Datasets and their cell types and biomarkers (datasets-ct-bm-data)](#datasets-ct-bm-data)
  * [Atlas Datasets with a given Cell Type (datasets-with-adipocytes)](#datasets-with-adipocytes)
  * [Extraction Site Statistics (extraction-site-stats)](#extraction-site-stats)
  * [high-level-stats](#high-level-stats)
  * [Lung ctann cell summaries (lung-ctann-cell-summaries)](#lung-ctann-cell-summaries)
  * [Lung dataset cell summaries by ctann tool (lung-dataset-cell-summaries-by-ctann)](#lung-dataset-cell-summaries-by-ctann)
  * [FOO (lung-foo-collisions-as-ct-b)](#lung-foo-collisions-as-ct-b)
  * [Tissue Provider Counts (provider-breakdown)](#provider-breakdown)
  * [RUI Registered H5AD Dataset and TB Count (rui-registered-h5ad-datasets)](#rui-registered-h5ad-datasets)
  * [Unmapped cell types (unmapped-cell-ids)](#unmapped-cell-ids)
* atlas
  * [Application A1 (application-a1)](#application-a1)
  * [Application A2P1 (application-a2p1)](#application-a2p1)
  * [Application A2P2 (application-a2p2)](#application-a2p2)
  * [Application A2P3 (application-a2p3)](#application-a2p3)
  * [Application A2P4 (application-a2p4)](#application-a2p4)
  * [Count of Cells and unique Cell Types by Modality (cell-and-cell-type-count-by-modality)](#cell-and-cell-type-count-by-modality)
  * [Count of Cells and unique Cell Types (cell-and-cell-type-count)](#cell-and-cell-type-count)
  * [Atlas-level Donor information (donor-info)](#donor-info)
  * [Figure AS-AS Sim Data (figure-as-as-sim)](#figure-as-as-sim)
  * [Figure F4 (figure-f4)](#figure-f4)
  * [Table 1 (table-1)](#table-1)
  * [Table S1 (table-s1)](#table-s1)
  * [Table S2 (table-s2)](#table-s2)
  * [Table S3 (table-s3)](#table-s3)
  * [Table S4 (table-s4)](#table-s4)
  * [Table S5 (table-s5)](#table-s5)
  * [Validation of B mean expressions (validation-b-mean-expression)](#validation-b-mean-expression)
  * [Validation V1 (validation-v1)](#validation-v1)
  * [Validation V2P1 (validation-v2p1)](#validation-v2p1)
  * [Validation V2P2 (Extra 1) (validation-v2p2-extra1)](#validation-v2p2-extra1)
  * [Validation V2P2 (Extra 2) (validation-v2p2-extra2)](#validation-v2p2-extra2)
  * [Validation V2P2 (Extra 3) (validation-v2p2-extra3)](#validation-v2p2-extra3)
  * [Validation V2P2 (validation-v2p2)](#validation-v2p2)
  * [Validation V2P3 (validation-v2p3)](#validation-v2p3)
  * [Validation V3 Edges (validation-v3.edges)](#validation-v3.edges)
  * [Validation V3 Nodes (validation-v3.nodes)](#validation-v3.nodes)
  * [Validation V4 (validation-v4)](#validation-v4)
  * [Validation V5 (validation-v5)](#validation-v5)
  * [Validation V6 (validation-v6)](#validation-v6)
  * [Validation V7 (5 variables) (validation-v7-ctann-rui)](#validation-v7-ctann-rui)
  * [Validation V7 (x-axis) (validation-v7-x-axis-local)](#validation-v7-x-axis-local)
  * [Validation V7 (x-axis) (validation-v7-x-axis)](#validation-v7-x-axis)
  * [Validation V7 (y-axis) local version (validation-v7-y-axis-local)](#validation-v7-y-axis-local)
  * [Validation V7 (y-axis) (validation-v7-y-axis)](#validation-v7-y-axis)
* hra
  * [Count of Anatomical Structures by Organ (as-cnt-per-organ)](#as-cnt-per-organ)
  * [Count of Anatomical Structures (as-cnt)](#as-cnt)
  * [Count of Anatomical Structures per `sceneNode`s (as3d-with-id-count)](#as3d-with-id-count)
  * [AS, CT, and BM in the HRA (asctb-records)](#asctb-records)
  * [Cell types per annotation tool (count-ct-per-tool)](#count-ct-per-tool)
  * [Cell types per organ per annotation tool (ct-per-organ-per-tool)](#ct-per-organ-per-tool)
  * [Named graphs in the db (named-graphs)](#named-graphs)
* universe-ad-hoc
  * [AS, CT, BM, and mean Gene Expression from Azimuth in the HRA (asctb-expr-trios-az)](#asctb-expr-trios-az)
  * [Universe consortium breakdown (consortium-breakdown)](#consortium-breakdown)
  * [Universe consortium breakdown with cell count (count-consortium-breakdown)](#count-consortium-breakdown)
  * [Universe consortium breakdown (count-consortium-datasets)](#count-consortium-datasets)
  * [Universe Sample and Dataset Counts (count-dataset-samples)](#count-dataset-samples)
  * [Universe Dataset Count (count-datasets)](#count-datasets)
  * [Universe Donor and Portal Counts (count-donors-portals)](#count-donors-portals)
  * [Universe Donor and Sample Counts (count-donors-samples)](#count-donors-samples)
  * [Universe Donor Count (count-donors)](#count-donors)
  * [Universe Extraction Sites with `slice_count`s Count (count-extraction-sites-with-slice)](#count-extraction-sites-with-slice)
  * [Universe Extraction Site Count (count-extraction-sites)](#count-extraction-sites)
  * [Universe Samples with Description Counts (count-sample-description)](#count-sample-description)
  * [Universe Sample Count (count-samples)](#count-samples)
  * [Universe Spatial Placement Count (count-spatial-placements)](#count-spatial-placements)
  * [Universe CxG collections (cxg-collections)](#cxg-collections)
  * [data-provenance](#data-provenance)
  * [dataset-cell-count-check](#dataset-cell-count-check)
  * [Dataset information (dataset-info)](#dataset-info)
  * [Dataset Publications (dataset-publications)](#dataset-publications)
  * [Universe Donor information (donor-info)](#donor-info)
  * [Universe Donors and Portals (donors-portals)](#donors-portals)
  * [Universe Extraction Sites with `slice_count`s Count (extraction-site-slices)](#extraction-site-slices)
  * [Universe Extraction Sites with `slice_count`s Count (extraction-sites)](#extraction-sites)
  * [ftu-datasets-anxa10](#ftu-datasets-anxa10)
  * [Heart and Lung dataset info (heart-and-lung-datasets)](#heart-and-lung-datasets)
  * [Popv cells information (hepatocyte-popv-datasets)](#hepatocyte-popv-datasets)
  * [high-level-stats](#high-level-stats)
  * [HTAN dataset info (htan-datasets)](#htan-datasets)
  * [Kidney and Lung dataset info (kidney-and-lung-datasets)](#kidney-and-lung-datasets)
  * [Popv cells information (popv-cells)](#popv-cells)
  * [RUI Registered H5AD Dataset and TB Count (rui-registered-datasets)](#rui-registered-datasets)
  * [Sample information (sample-info)](#sample-info)
  * [All Datasets Sankey Data (sankey)](#sankey)
  * [Spatial and bulk dataset breakdown (spatial-and-bulk-datasets-breakdown)](#spatial-and-bulk-datasets-breakdown)
  * [Spatial and bulk dataset information (spatial-and-bulk-datasets)](#spatial-and-bulk-datasets)
  * [Universe Spatial Placements (spatial-placements)](#spatial-placements)
  * [All biomarkers seen in Atlas Datasets (universe-organ-cell-biomarker-scores)](#universe-organ-cell-biomarker-scores)
  * [Cell Counts for Universe Proteomics Datasets (universe-sc-proteomics-cell-counts)](#universe-sc-proteomics-cell-counts)
  * [Cell Counts for Universe Transcriptomics Datasets (universe-sc-transcriptomics-cell-counts)](#universe-sc-transcriptomics-cell-counts)
  * [Cell Counts for Universe Transcriptomics Datasets (universe-sc-transcriptomics-cell-instance-counts)](#universe-sc-transcriptomics-cell-instance-counts)
  * [Unmapped cell types (unmapped-cell-ids)](#unmapped-cell-ids)



### <a id="as-ct-b"></a>Atlas AS with CT and B info from exp data (as-ct-b)

Atlas-level AS with cell type and biomarker information, including mean gene expression, derived from experimental data.

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Atlas AS with CT and B info from exp data
#+ description: Atlas-level AS with cell type and biomarker information, including mean gene expression, derived from experimental data.

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>

SELECT ?sex ?tool  
  (SAMPLE(?_as_label) as ?as_label)
  (SAMPLE(?cell_label) AS ?cell_label)
  ?gene_label
  ?as ?cell_id
  (SUM(?_cell_count) AS ?cell_count)
  (AVG(xsd:decimal(?gene_expr)) as ?mean_gene_expr)
FROM HRA:
FROM HRApop:
WHERE {
  ?as ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:aggregates [
        ccf:cell_source ?dataset ;
        ccf:percentage_of_total ?percent ;
      ] ;
    ] .
  ?as ccf:ccf_pref_label ?_as_label .
  ?dataset ccf:has_cell_summary [
    ccf:sex ?sex ;
    ccf:cell_annotation_method ?tool ;
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_id ;
      ccf:cell_label ?cell_label ;
      ccf:cell_count ?count ;
      ccf:gene_expr [
        ccf:gene_label ?gene_label ;
        ccf:mean_gene_expr_value ?gene_expr ;
      ]
    ]
  ] .
  BIND (xsd:decimal(?count * ?percent) AS ?_cell_count)

  FILTER(STRSTARTS(STR(?as), STR(UBERON:)) || STRSTARTS(STR(?as), STR(FMA:)))
}
GROUP BY ?sex ?as ?tool ?cell_id ?gene_label
ORDER BY ?tool ?sex ?as_label DESC(?mean_gene_expr)

```

([View Source](../../queries/atlas-ad-hoc/as-ct-b.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/as-ct-b.csv))

| sex | tool | as_label | cell_label | gene_label | as | cell_id | cell_count | mean_gene_expr |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |


## atlas-ad-hoc

### <a id="as-datasets-extraction-sites"></a>Atlas dataset, extraction site, and AS (as-datasets-extraction-sites)

For each atlas dataset, get extraction site and AS collisions

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Atlas dataset, extraction site, and AS
#+ description: For each atlas dataset, get extraction site and AS collisions

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX ccf3d: <http://purl.org/ccf/latest/ccf.owl#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX ctpop-graph: <https://purl.humanatlas.io/graph/ctpop>
PREFIX ctpop: <https://purl.humanatlas.io/graph/ctpop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

# dataset_id | extraction site IRI | anatomical structure IRI | anatomical structure label
SELECT DISTINCT
  ?dataset
	?rui_location
  ?as_label
	?as_id
  ?organId
  ?organ_label
  ?refOrgan
  ?refOrganAs

FROM HRApop:
FROM HRA:
WHERE {
  {
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  ?dataset ccf:has_cell_summary [
    ccf:sex ?sex ;
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
  ] .

  ?rui_location ccf:has_collision_summary [
      ccf:has_collision_item [
          ccf:as_id ?refOrganAs ;
          ccf:as_label ?as_label ;
					ccf:as_id ?as_id;
          ccf:has_reference_organ ?refOrgan
      ]
  ] .

  ?refOrgan ccf:representation_of ?organId .
  ?organId rdfs:label ?organ_label .
}
ORDER BY ?dataset

```

([View Source](../../queries/atlas-ad-hoc/as-datasets-extraction-sites.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/as-datasets-extraction-sites.csv))

| dataset | rui_location | as_label | as_id | organId | organ_label | refOrgan | refOrganAs |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | Cartilage of segmental bronchus | http://purl.org/sig/ont/fma/fma62662 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHMLung | http://purl.org/sig/ont/fma/fma62662 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | Lateral segmental bronchus | http://purl.org/sig/ont/fma/fma7402 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHMLung | http://purl.org/sig/ont/fma/fma7402 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D175$lung | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | Cartilage of segmental bronchus | http://purl.org/sig/ont/fma/fma62662 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHMLung | http://purl.org/sig/ont/fma/fma62662 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D175$lung | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | Lateral segmental bronchus | http://purl.org/sig/ont/fma/fma7402 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHMLung | http://purl.org/sig/ont/fma/fma7402 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | Lateral segmental bronchus | http://purl.org/sig/ont/fma/fma7402 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHFLungV1.1 | http://purl.org/sig/ont/fma/fma7402 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="as-datasets-modality"></a>Atlas dataset tool, modality, and AS info (as-datasets-modality)

Each atlas dataset's tool, modality, and basic reference organ information

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Atlas dataset tool, modality, and AS info
#+ description: Each atlas dataset's tool, modality, and basic reference organ information

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX ccf3d: <http://purl.org/ccf/latest/ccf.owl#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX ctpop-graph: <https://purl.humanatlas.io/graph/ctpop>
PREFIX ctpop: <https://purl.humanatlas.io/graph/ctpop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

# anatomical structure IRI | dataset_id | modality
SELECT
  ?sex
  ?organId
  ?organ_label
  ?refOrgan
  ?refOrganAs
  ?dataset
  ?tool
  ?modality
  ?as_label
FROM HRApop:
FROM HRA:
WHERE {
  {
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  ?dataset ccf:has_cell_summary [
    ccf:sex ?sex ;
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
  ] .

  ?rui_location ccf:has_collision_summary [
      ccf:has_collision_item [
          ccf:as_id ?refOrganAs ;
          ccf:as_label ?as_label ;
          ccf:has_reference_organ ?refOrgan
      ]
  ] .

  ?refOrgan ccf:representation_of ?organId .
  ?organId rdfs:label ?organ_label .
}
ORDER BY ?refOrgan

```

([View Source](../../queries/atlas-ad-hoc/as-datasets-modality.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/as-datasets-modality.csv))

| sex | organId | organ_label | refOrgan | refOrganAs | dataset | tool | modality | as_label |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/061b6c8f8e76f9be125f0f93e7734642 | celltypist | sc_transcriptomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/061b6c8f8e76f9be125f0f93e7734642 | popv | sc_transcriptomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/061b6c8f8e76f9be125f0f93e7734642 | pan-human-azimuth | sc_transcriptomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/153b0fe8575ff1a17768319ba6dbaa5c | sc_proteomics | sc_proteomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/846e56ed969922f1cb7a81619b175620 | celltypist | sc_transcriptomics | sigmoid colon |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="atlas-organ-cell-biomarker-scores"></a>All biomarkers seen in Atlas Datasets (atlas-organ-cell-biomarker-scores)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: All biomarkers seen in Atlas Datasets

PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT ?organ ?cell_id (SAMPLE(?cell_label) as ?cell_label) 
  ?biomarker_label (SAMPLE(?biomarker_id) as ?biomarker_id)
  (MAX(?expr_value) as ?max_expr)
FROM HRApop:
FROM HRA:
WHERE {
  {
    ?sample ccf:comes_from ?donor .
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:comes_from ?donor .
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  {
    ?dataset ccf:organ_id ?reportedOrganIriString .
    BIND(IRI(?reportedOrganIriString) as ?reportedOrganIri)

    OPTIONAL {
      ?reportedOrganIri rdfs:label ?reportedOrganRdfsLabel .
    }
    OPTIONAL {
      ?reportedOrganIri ccf:ccf_pref_label ?reportedOrganCcfLabel .
    }
    BIND(IF(BOUND(?reportedOrganRdfsLabel), ?reportedOrganRdfsLabel, ?reportedOrganCcfLabel) as ?organ)
  }

  [] ccf:generates_dataset ?dataset .
  ?dataset ccf:has_cell_summary [
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_id ;
      ccf:cell_label ?raw_cell_label ;
      ccf:gene_expr [
        ccf:gene_label ?biomarker_label ;
        ccf:gene_id ?biomarker_id ;
        ccf:mean_gene_expr_value ?expr_value 
        ;
      ]
    ]
  ] .

  OPTIONAL { 
    ?cell_id rdfs:label ?proper_cell_label .
  }
  BIND(COALESCE(?proper_cell_label, ?raw_cell_label) as ?cell_label)
}
GROUP BY ?organ ?cell_id ?biomarker_label
ORDER BY ?organ ?cell_id DESC(?max_expr)

```

([View Source](../../queries/atlas-ad-hoc/atlas-organ-cell-biomarker-scores.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/atlas-organ-cell-biomarker-scores.csv))

| organ | cell_id | cell_label | biomarker_label | biomarker_id | max_expr |
| :--- | :--- | :--- | :--- | :--- | :--- |



### <a id="atlas-sc-proteomics-cell-counts"></a>Cell Counts for Atlas Proteomics Datasets (atlas-sc-proteomics-cell-counts)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Counts for Atlas Proteomics Datasets

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT 
  (COUNT(DISTINCT(?dataset)) as ?atlas_sc_proteomics_dataset_count)
  (SUM(?dataset_cell_count) as ?atlas_sc_proteomics_cell_count)
FROM HRApop:
# FROM HRApopTestData:
WHERE {
  {
    SELECT ?dataset (MAX(?total_cell_count) as ?dataset_cell_count)
    WHERE {
      {
        SELECT ?dataset ?tool (SUM(?cell_count) as ?total_cell_count)
        WHERE {
          ?dataset a ccf:Dataset ;
          ccf:has_cell_summary [
            ccf:cell_annotation_method ?tool ;
            ccf:has_cell_summary_row [
              ccf:cell_id ?cell_id ;
              ccf:cell_count ?cell_count ;
            ] ;
          ] .
          FILTER(?tool = 'sc_proteomics')
        }
        GROUP BY ?dataset ?tool
      }
    }
    GROUP BY ?dataset
  }
}

```

([View Source](../../queries/atlas-ad-hoc/atlas-sc-proteomics-cell-counts.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/atlas-sc-proteomics-cell-counts.csv))

| atlas_sc_proteomics_dataset_count | atlas_sc_proteomics_cell_count |
| :--- | :--- |
| 113 | 34658829 |


### <a id="atlas-sc-transcriptomics-cell-counts"></a>Cell Counts for Atlas Transcriptomics Datasets (atlas-sc-transcriptomics-cell-counts)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Counts for Atlas Transcriptomics Datasets

PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT
  (COUNT(DISTINCT(?dataset)) as ?atlas_sc_transcriptomics_dataset_count)
  (SUM(?dataset_cell_count) as ?atlas_sc_transcriptomics_cell_count)
  (SUM(?preannotated_cell_count) as ?atlas_sc_transcriptomics_preannotated_cell_count)
FROM HRApop:
# FROM HRApopTestData:
WHERE {
  {
    SELECT ?dataset (SAMPLE(?preannotated_cell_count) as ?preannotated_cell_count) (MAX(?total_cell_count) as ?dataset_cell_count)
    WHERE {
      {
        SELECT ?dataset ?tool (MAX(xsd:integer(STR(?preannotated_cell_count))) as ?preannotated_cell_count) (SUM(?cell_count) as ?total_cell_count)
        WHERE {
          ?dataset a ccf:Dataset ;
          ccf:cell_count ?preannotated_cell_count ;
          ccf:has_cell_summary [
            ccf:cell_annotation_method ?tool ;
            ccf:has_cell_summary_row [
              ccf:cell_id ?cell_id ;
              ccf:cell_count ?cell_count ;
            ] ;
          ] .
          FILTER(?tool != 'sc_proteomics')
        }
        GROUP BY ?dataset ?tool
      }
    }
    GROUP BY ?dataset
  }
}

```

([View Source](../../queries/atlas-ad-hoc/atlas-sc-transcriptomics-cell-counts.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/atlas-sc-transcriptomics-cell-counts.csv))

| atlas_sc_transcriptomics_dataset_count | atlas_sc_transcriptomics_cell_count | atlas_sc_transcriptomics_preannotated_cell_count |
| :--- | :--- | :--- |
| 565 | 9498511 | 9733868 |


### <a id="cell-types-in-anatomical-structurescts-per-as"></a>Cell Summaries by Anatomical Structure  (cell-types-in-anatomical-structurescts-per-as)

Computes the cell summaries for each organ by anatomical strcutrure.

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Summaries by Anatomical Structure 
#+ description: Computes the cell summaries for each organ by anatomical strcutrure.

PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?organ ?as ?as_label ?sex ?tool ?modality ?cell_id ?cell_label ?cell_count ?cell_percentage ?dataset_count
FROM HRA:
FROM HRApop:
WHERE {
  ?as ccf:has_cell_summary [ 
      ccf:cell_annotation_method ?tool ;
      ccf:cell_source_label ?as_label ;
      ccf:sex ?sex ;
      ccf:modality ?modality ;
      ccf:aggregated_summary_count ?dataset_count ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
        ccf:cell_label ?cell_label ;
        ccf:cell_count ?cell_count ;
        ccf:percentage_of_total ?cell_percentage ;
    ]
  ] .
  FILTER(STRSTARTS(STR(?as), STR(UBERON:)) || STRSTARTS(STR(?as), STR(FMA:)))
  
  ?refOrganPiece ccf:representation_of ?as ;
      ccf:has_reference_organ ?refOrgan .
  ?refOrgan ccf:organ_owner_sex ?sex .
  ?refOrgan skos:prefLabel ?organ .
}
ORDER BY ?sex ?as ?tool DESC(?cell_count)

```

([View Source](../../queries/atlas-ad-hoc/cell-types-in-anatomical-structurescts-per-as.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/cell-types-in-anatomical-structurescts-per-as.csv))

| organ | as | as_label | sex | tool | modality | cell_id | cell_label | cell_count | cell_percentage | dataset_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| large intestine | http://purl.obolibrary.org/obo/UBERON_0001052 | rectum | Female | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_1000347 | Colonocyte | 1.224 | 0.1499816198995222 | 3 |
| large intestine | http://purl.obolibrary.org/obo/UBERON_0001052 | rectum | Female | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000987 | IgA plasma cell | 1.182 | 0.1448351917657151 | 3 |
| large intestine | http://purl.obolibrary.org/obo/UBERON_0001052 | rectum | Female | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_4030026 | BEST4+ epithelial | 0.7010000000000001 | 0.08589633623330481 | 3 |
| large intestine | http://purl.obolibrary.org/obo/UBERON_0001052 | rectum | Female | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000896 | Activated CD4 T | 0.6900000000000001 | 0.08454846219826008 | 3 |
| large intestine | http://purl.obolibrary.org/obo/UBERON_0001052 | rectum | Female | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000798 | TRGV2 gdT | 0.502 | 0.06151206959931385 | 3 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="cell-types-level-mapping-long"></a>atlas cell type level mapping (cell-types-level-mapping-long)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: atlas cell type level mapping

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?cell_label ?cell_id ?level ?level_cell_id ?level_cell_label
FROM HRA:
FROM <https://purl.humanatlas.io/vocab/cl>
FROM <https://purl.humanatlas.io/vocab/pcl>
WHERE {
  # Select cell types to map
  GRAPH HRApop: {
    [] ccf:has_cell_summary [
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
      ]
    ] .
    FILTER(!STRSTARTS(STR(?cell_id), 'https://purl.org/ccf/ASCTB-TEMP'))
  }
  ?cell_id rdfs:label ?cell_label .

  # Match to leveled cell types
  VALUES (?lvl_cell_id ?level) {
    (CL:0002320 "L1") # connective tissue cell
    (CL:0000148 "L1") # melanocyte
    (CL:0000988 "L1") # hematopoietic cell
    (CL:0000349 "L1") # extraembryonic cell
    (CL:0000039 "L1") # germ line cell
    (CL:0001035 "L1") # bone cell
    (CL:0002319 "L1") # neural cell
    (CL:0000115 "L1") # endothelial cell
    (CL:0000034 "L1") # stem cell
    (CL:0002320 "L1") # connective tissue cell
    (CL:0000187 "L1") # muscle cell
    (CL:0000066 "L1") # epithelial cell

    (CL:0000136 "L2") # adipocyte
    (CL:0000576 "L2") # monocyte
    (CL:0000152 "L2") # exocrine cell
    (CL:0000081 "L2") # blood cell
    (CL:0000125 "L2") # glial cell
    (CL:0000235 "L2") # macrophage
    (CL:0000451 "L2") # dendritic cell
    (CL:0000236 "L2") # B cell
    (CL:0000499 "L2") # stromal cell
    (CL:0000084 "L2") # T cell
    (CL:0000540 "L2") # neuron
  }
  ?cell_id (rdfs:subClassOf|rdf:type)* ?lvl_cell_id .
  ?lvl_cell_id rdfs:label ?lvl_cell_label .

  BIND(COALESCE(?lvl_cell_id, CL:0000000) as ?level_cell_id)
  BIND(COALESCE(?lvl_cell_label, 'no mapped parent cell') as ?level_cell_label)
}
ORDER BY ?cell_label ?level ?level_cell_label

```

([View Source](../../queries/atlas-ad-hoc/cell-types-level-mapping-long.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/cell-types-level-mapping-long.csv))

| cell_label | cell_id | level | level_cell_id | level_cell_label |
| :--- | :--- | :--- | :--- | :--- |
| intestinal tuft cell | http://purl.obolibrary.org/obo/CL_0019032 | L1 | http://purl.obolibrary.org/obo/CL_0000066 | epithelial cell |
| intestine goblet cell | http://purl.obolibrary.org/obo/CL_0019031 | L1 | http://purl.obolibrary.org/obo/CL_0000066 | epithelial cell |
| tracheobronchial goblet cell | http://purl.obolibrary.org/obo/CL_0019003 | L1 | http://purl.obolibrary.org/obo/CL_0000066 | epithelial cell |
| transit amplifying cell of gut | http://purl.obolibrary.org/obo/CL_4047017 | L1 | http://purl.obolibrary.org/obo/CL_0000066 | epithelial cell |
| B cell | http://purl.obolibrary.org/obo/CL_0000236 | L1 | http://purl.obolibrary.org/obo/CL_0000988 | hematopoietic cell |
| ... | ... | ... | ... | ... |


### <a id="cell-types-level-mapping"></a>atlas cell type level mapping (cell-types-level-mapping)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: atlas cell type level mapping

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT ?cell_label ?cell_id
  (SAMPLE(?level_1_cell_id) as ?level_1_cell_id) (SAMPLE(?level_1_cell_label) as ?level_1_cell_label)
  (SAMPLE(?level_2_cell_id) as ?level_2_cell_id) (SAMPLE(?level_2_cell_label) as ?level_2_cell_label)
FROM HRA:
FROM <https://purl.humanatlas.io/vocab/cl>
FROM <https://purl.humanatlas.io/vocab/pcl>
WHERE {
  # Select cell types to map
  GRAPH HRApop: {
    [] ccf:has_cell_summary [
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
      ]
    ] .
    FILTER(!STRSTARTS(STR(?cell_id), 'https://purl.org/ccf/ASCTB-TEMP'))
  }
  ?cell_id rdfs:label ?cell_label .
  
  # Match to level 1 cell types
  OPTIONAL {
    VALUES (?l1_cell_id) {
      (CL:0002320) # connective tissue cell
      (CL:0000148) # melanocyte
      (CL:0000988) # hematopoietic cell
      (CL:0000349) # extraembryonic cell
      (CL:0000988) # hematopoietic cell
      (CL:0000039) # germ line cell
      (CL:0001035) # bone cell
      (CL:0000988) # hematopoietic cell
      (CL:0002319) # neural cell
      (CL:0000988) # hematopoietic cell
      (CL:0000988) # hematopoietic cell
      (CL:0000988) # hematopoietic cell
      (CL:0000115) # endothelial cell
      (CL:0000034) # stem cell
      (CL:0002320) # connective tissue cell
      (CL:0000187) # muscle cell
      (CL:0000988) # hematopoietic cell
      (CL:0002319) # neural cell
      (CL:0000066) # epithelial cell
    }
    ?cell_id (rdfs:subClassOf|rdf:type)* ?l1_cell_id .
    ?l1_cell_id rdfs:label ?l1_cell_label .
  }

  # Match to level 2 cell types
  OPTIONAL {
    VALUES (?l2_cell_id) {
      (CL:0000136) # adipocyte
      (CL:0000576) # monocyte
      (CL:0000152) # exocrine cell
      (CL:0000081) # blood cell
      (CL:0000125) # glial cell
      (CL:0000235) # macrophage
      (CL:0000451) # dendritic cell
      (CL:0000236) # B cell
      (CL:0000499) # stromal cell
      (CL:0000084) # T cell
      (CL:0000540) # neuron
    }
    ?cell_id (rdfs:subClassOf|rdf:type)* ?l2_cell_id .
    ?l2_cell_id rdfs:label ?l2_cell_label .
  }

  BIND(COALESCE(?l1_cell_id, CL:0000000) as ?level_1_cell_id)
  BIND(COALESCE(?l1_cell_label, 'no mapped parent cell') as ?level_1_cell_label)

  BIND(COALESCE(?l2_cell_id, ?l1_cell_id, CL:0000000) as ?level_2_cell_id)
  BIND(COALESCE(?l2_cell_label, ?l1_cell_label, 'no mapped parent cell') as ?level_2_cell_label)
}
GROUP BY ?cell_id ?cell_label
ORDER BY ?cell_id

```

([View Source](../../queries/atlas-ad-hoc/cell-types-level-mapping.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/cell-types-level-mapping.csv))

| cell_label | cell_id | level_1_cell_id | level_1_cell_label | level_2_cell_id | level_2_cell_label |
| :--- | :--- | :--- | :--- | :--- | :--- |
| cell | http://purl.obolibrary.org/obo/CL_0000000 | http://purl.obolibrary.org/obo/CL_0000000 | no mapped parent cell | http://purl.obolibrary.org/obo/CL_0000000 | no mapped parent cell |
| oocyte | http://purl.obolibrary.org/obo/CL_0000023 | http://purl.obolibrary.org/obo/CL_0000039 | germ line cell | http://purl.obolibrary.org/obo/CL_0000039 | germ line cell |
| stem cell | http://purl.obolibrary.org/obo/CL_0000034 | http://purl.obolibrary.org/obo/CL_0000034 | stem cell | http://purl.obolibrary.org/obo/CL_0000034 | stem cell |
| hematopoietic stem cell | http://purl.obolibrary.org/obo/CL_0000037 | http://purl.obolibrary.org/obo/CL_0000988 | hematopoietic cell | http://purl.obolibrary.org/obo/CL_0000988 | hematopoietic cell |
| megakaryocyte-erythroid progenitor cell | http://purl.obolibrary.org/obo/CL_0000050 | http://purl.obolibrary.org/obo/CL_0000988 | hematopoietic cell | http://purl.obolibrary.org/obo/CL_0000988 | hematopoietic cell |
| ... | ... | ... | ... | ... | ... |


### <a id="cell-types-per-dataset"></a>Cell Summaries by Dataset (cell-types-per-dataset)

Computes the cell summaries for each organ by dataset.

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Summaries by Dataset
#+ description: Computes the cell summaries for each organ by dataset.

PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?organ_id ?organ ?dataset ?sex ?tool ?modality ?cell_id ?cell_label ?cell_count ?cell_percentage 
FROM HRA:
FROM HRApop:
WHERE {
  {
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  ?dataset ccf:has_cell_summary [ 
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
        ccf:cell_label ?raw_cell_label ;
        ccf:cell_count ?cell_count ;
        ccf:percentage_of_total ?cell_percentage ;
    ]
  ] .

  [] a ccf:SpatialPlacement ;
    ccf:placement_relative_to ?refOrgan ;
    ccf:placement_for ?rui_location .

  ?refOrgan owl:sameAs* [
    ccf:representation_of ?organ_id ;
    ccf:organ_owner_sex ?sex ;
    skos:prefLabel ?organ
  ] .

  ?organ_id rdfs:label ?organ_label .

  OPTIONAL { ?cell_id rdfs:label ?rdfs_cell_label . }
  BIND(COALESCE(?rdfs_cell_label, ?raw_cell_label) as ?cell_label)
}
ORDER BY ?sex ?tool ?dataset DESC(?cell_count)

```

([View Source](../../queries/atlas-ad-hoc/cell-types-per-dataset.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/cell-types-per-dataset.csv))

| organ_id | organ | dataset | sex | tool | modality | cell_id | cell_label | cell_count | cell_percentage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| http://purl.obolibrary.org/obo/UBERON_0000948 | heart | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$left%20cardiac%20atrium | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0002129 | Atrial Cardiomyocyte | 430 | 0.4029990627928772 |
| http://purl.obolibrary.org/obo/UBERON_0000948 | heart | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$left%20cardiac%20atrium | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000057 | fibroblast | 368 | 0.344892221180881 |
| http://purl.obolibrary.org/obo/UBERON_0000948 | heart | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$left%20cardiac%20atrium | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000669 | pericyte | 156 | 0.1462043111527647 |
| http://purl.obolibrary.org/obo/UBERON_0000948 | heart | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$left%20cardiac%20atrium | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0002573 | Schwann cell | 31 | 0.02905342080599813 |
| http://purl.obolibrary.org/obo/UBERON_0000948 | heart | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$left%20cardiac%20atrium | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0002144 | capillary endothelial cell | 29 | 0.02717900656044986 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="cell-types-per-extraction-site"></a>Cell Summaries by Extraction Site  (cell-types-per-extraction-site)

Computes the cell summaries for each organ by extraction site.

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Summaries by Extraction Site 
#+ description: Computes the cell summaries for each organ by extraction site.

PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?organ_id ?organ ?extraction_site ?sex ?tool ?modality ?cell_id ?cell_label ?cell_count ?cell_percentage 
FROM HRA:
FROM HRApop:
WHERE {
  [] ccf:has_registration_location ?extraction_site .

  ?extraction_site ccf:has_cell_summary [ 
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
        ccf:cell_label ?raw_cell_label ;
        ccf:cell_count ?cell_count ;
        ccf:percentage_of_total ?cell_percentage ;
    ]
  ] .

  [] a ccf:SpatialPlacement ;
    ccf:placement_relative_to ?refOrgan ;
    ccf:placement_for ?extraction_site .

  ?refOrgan owl:sameAs* [
    ccf:representation_of ?organ_id ;
    ccf:organ_owner_sex ?sex ;
    skos:prefLabel ?organ
  ] .

  ?organ_id rdfs:label ?organ_label .

  OPTIONAL { ?cell_id rdfs:label ?rdfs_cell_label . }
  BIND(COALESCE(?rdfs_cell_label, ?raw_cell_label) as ?cell_label)
}
ORDER BY ?sex ?tool ?extraction_site DESC(?cell_count)

```

([View Source](../../queries/atlas-ad-hoc/cell-types-per-extraction-site.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/cell-types-per-extraction-site.csv))

| organ_id | organ | extraction_site | sex | tool | modality | cell_id | cell_label | cell_count | cell_percentage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| http://purl.obolibrary.org/obo/UBERON_0004538 | Left kidney | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_1000718 | kidney inner medulla collecting duct principal cell | 43917 | 0.2176457761346404 |
| http://purl.obolibrary.org/obo/UBERON_0004538 | Left kidney | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_4030016 | epithelial cell of early distal convoluted tubule | 27466 | 0.1361171957855507 |
| http://purl.obolibrary.org/obo/UBERON_0004538 | Left kidney | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_1001108 | kidney loop of Henle medullary thick ascending limb epithelial cell | 14671 | 0.07270717903479994 |
| http://purl.obolibrary.org/obo/UBERON_0004538 | Left kidney | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_1000768 | kidney connecting tubule epithelial cell | 13768 | 0.06823205241300016 |
| http://purl.obolibrary.org/obo/UBERON_0004538 | Left kidney | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | Female | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_1001107 | kidney loop of Henle thin ascending limb epithelial cell | 12818 | 0.06352400114975568 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="consortium-breakdown"></a>Atlas consortium breakdown (consortium-breakdown)

For each consortium in the atlas, show the number of contributed datasets, cells, and modality

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Atlas consortium breakdown
#+ description: For each consortium in the atlas, show the number of contributed datasets, cells, and modality

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX iftu: <https://hubmapconsortium.github.io/hra-ui/apps/ftu-ui/assets/TEMP/2d-ftu-illustrations.jsonld>

SELECT ?sex ?consortium (COUNT(DISTINCT(?dataset)) as ?dataset_count) (SUM(?cell_count) as ?cell_count) ?modality
FROM HRApop:
WHERE {
  ?donor
    ccf:consortium_name ?consortium ;
    ccf:tissue_provider_name ?provider .

  {
    ?sample ccf:comes_from ?donor .
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:comes_from ?donor .
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  {
    SELECT ?dataset ?sex ?modality (MAX(?total_cell_count) as ?cell_count)
    WHERE {
      {
        SELECT ?dataset ?sex ?modality (SUM(?cell_count) as ?total_cell_count)
        WHERE {
          ?dataset a ccf:Dataset ;
  			    ccf:has_cell_summary [
              ccf:sex ?sex ;
              ccf:cell_annotation_method ?tool ;
              ccf:modality ?modality ;
              ccf:has_cell_summary_row [
                ccf:cell_count ?cell_count ;
              ] ;
            ] .
        }
        GROUP BY ?dataset ?sex ?modality ?tool
      }
    }
    GROUP BY ?dataset ?sex ?modality
  }
  
}
GROUP BY ?sex ?consortium ?modality
ORDER BY ?consortium ?sex

```

([View Source](../../queries/atlas-ad-hoc/consortium-breakdown.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/consortium-breakdown.csv))

| sex | consortium | dataset_count | cell_count | modality |
| :--- | :--- | :--- | :--- | :--- |
| Female | GTEx | 7 | 47863 | sc_transcriptomics |
| Male | GTEx | 8 | 70113 | sc_transcriptomics |
| Female | HCA | 70 | 422351 | sc_transcriptomics |
| Male | HCA | 59 | 362641 | sc_transcriptomics |
| Female | HuBMAP | 28 | 10396211 | sc_proteomics |
| ... | ... | ... | ... | ... |


### <a id="count-dataset-modality"></a>Datasets by modality (count-dataset-modality)

Counts the unique number of datasets by modality used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Datasets by modality
#+ description: Counts the unique number of datasets by modality used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT ?sex (COUNT(DISTINCT ?dataset) AS ?dataset_ct) ?modality 
FROM HRApop:
WHERE {
  ?dataset a ccf:Dataset;
    ccf:has_cell_summary [
      ccf:sex ?sex ;
  		ccf:modality ?modality
    ] .
}
GROUP BY ?sex ?modality

```

([View Source](../../queries/atlas-ad-hoc/count-dataset-modality.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/count-dataset-modality.csv))

| sex | dataset_ct | modality |
| :--- | :--- | :--- |
| Male | 318 | sc_transcriptomics |
| Male | 83 | sc_proteomics |
| Female | 248 | sc_transcriptomics |
| Female | 30 | sc_proteomics |


### <a id="counts-for-heart-as"></a>Kidney AS Cell Distributions (counts-for-heart-as)

Kidney anatomical structures with associated cell types and average/sum counts of cell types

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Kidney AS Cell Distributions
#+ description: Kidney anatomical structures with associated cell types and average/sum counts of cell types

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?sex ?organ ?as_label ?cell_label
	(COUNT(DISTINCT(?dataset)) as ?dataset_count)
	(SAMPLE(?cell_id) as ?cell_id)
	(AVG(?cell_count) as ?mean_cell_count)
	(SUM(?cell_count) as ?cell_count)
FROM HRApop:
WHERE {
	?dataset a ccf:Dataset .
	?dataset ccf:has_cell_summary [
		ccf:sex ?sex ;
		ccf:cell_annotation_method ?tool ;
		ccf:modality ?modality ;
		ccf:has_cell_summary_row [
			ccf:cell_id ?cell_id ;
			ccf:cell_label ?cell_label	;
			ccf:cell_count ?cell_count ;
		] ;
	] .

	{
		?sample ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	} UNION {
		?block ccf:subdivided_into_sections ?sample .
		?block ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	}

	?rui_location a ccf:SpatialEntity .
	?rui_location ccf:has_collision_summary [
		ccf:has_collision_item [
			ccf:as_id ?as_id ;
			ccf:as_label ?as_label ;
			ccf:as_volume ?as_volume ;
			ccf:has_reference_organ ?ref_organ ;
		]
	]
	BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
	#FILTER (?as_label='renal papilla' || ?as_label = 'renal pyramid')
	FILTER(STRENDS(?organ, 'Heart'))
}
GROUP BY ?sex ?organ ?as_label ?cell_label
ORDER BY ?sex ?organ ?as_label ?cell_label

```

([View Source](../../queries/atlas-ad-hoc/counts-for-heart-as.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/counts-for-heart-as.csv))

| sex | organ | as_label | cell_label | dataset_count | cell_id | mean_cell_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip1 | 4 | http://purl.obolibrary.org/obo/CL_0000136 | 33.25 | 798 |
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip2 | 2 | http://purl.obolibrary.org/obo/CL_0000136 | 20 | 240 |
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adipocyte | 6 | http://purl.obolibrary.org/obo/CL_0000136 | 20.16666666666666666667 | 1452 |
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Aerocyte | 1 | http://purl.obolibrary.org/obo/CL_4028003 | 1 | 6 |
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Alveolar macrophage | 1 | http://purl.obolibrary.org/obo/CL_0000583 | 1 | 6 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="counts-for-kidney-as"></a>Kidney AS Cell Distributions (counts-for-kidney-as)

Kidney anatomical structures with associated cell types and average/sum counts of cell types

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Kidney AS Cell Distributions
#+ description: Kidney anatomical structures with associated cell types and average/sum counts of cell types

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?sex ?organ ?as_label ?cell_label
	(SAMPLE(?cell_id) as ?cell_id)
	(AVG(?cell_count) as ?mean_cell_count)
	(SUM(?cell_count) as ?cell_count)
FROM HRApop:
WHERE {
	?dataset a ccf:Dataset .
	?dataset ccf:has_cell_summary [
		ccf:sex ?sex ;
		ccf:cell_annotation_method ?tool ;
		ccf:modality ?modality ;
		ccf:has_cell_summary_row [
			ccf:cell_id ?cell_id ;
			ccf:cell_label ?cell_label	;
			ccf:cell_count ?cell_count ;
		] ;
	] .

	{
		?sample ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	} UNION {
		?block ccf:subdivided_into_sections ?sample .
		?block ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	}

	?rui_location a ccf:SpatialEntity .
	?rui_location ccf:has_collision_summary [
		ccf:has_collision_item [
			ccf:as_id ?as_id ;
			ccf:as_label ?as_label ;
			ccf:as_volume ?as_volume ;
			ccf:has_reference_organ ?ref_organ ;
		]
	]
	BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
	FILTER (?as_label='renal papilla' || ?as_label = 'renal pyramid')
}
GROUP BY ?sex ?organ ?as_label ?cell_label
ORDER BY ?sex ?organ ?as_label ?cell_label

```

([View Source](../../queries/atlas-ad-hoc/counts-for-kidney-as.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/counts-for-kidney-as.csv))

| sex | organ | as_label | cell_label | cell_id | mean_cell_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | VHFLeftKidney | renal papilla | Alveolar macrophage | http://purl.obolibrary.org/obo/CL_0000583 | 1 | 2 |
| Female | VHFLeftKidney | renal papilla | Arterial EC | http://purl.obolibrary.org/obo/CL_1000413 | 6 | 12 |
| Female | VHFLeftKidney | renal papilla | Ascending Thin Limb | http://purl.obolibrary.org/obo/CL_1001107 | 668.5 | 1337 |
| Female | VHFLeftKidney | renal papilla | Ascending Vasa Recta Endothelial | http://purl.obolibrary.org/obo/CL_1001131 | 354.5 | 709 |
| Female | VHFLeftKidney | renal papilla | Basal cell of bladder | http://purl.obolibrary.org/obo/CL_0000646 | 116 | 232 |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="counts-for-tools-by-as"></a>Bulk Tool-Organ-AS Cell Distributions (counts-for-tools-by-as)

Organ anatomical structures with associated cell types and average/sum counts of cell types by bulk annotation tool

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Bulk Tool-Organ-AS Cell Distributions
#+ description: Organ anatomical structures with associated cell types and average/sum counts of cell types by bulk annotation tool

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?sex ?tool ?organ ?as_label ?cell_label
	(SAMPLE(?cell_id) as ?cell_id)
	(AVG(?cell_count) as ?mean_cell_count)
	(SUM(?cell_count) as ?cell_count)
FROM HRApop:
WHERE {
	?dataset a ccf:Dataset .
	?dataset ccf:has_cell_summary [
		ccf:sex ?sex ;
		ccf:cell_annotation_method ?tool ;
		ccf:modality ?modality ;
		ccf:has_cell_summary_row [
			ccf:cell_id ?cell_id ;
			ccf:cell_label ?cell_label	;
			ccf:cell_count ?cell_count ;
		] ;
	] .

	{
		?sample ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	} UNION {
		?block ccf:subdivided_into_sections ?sample .
		?block ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	}

	?rui_location a ccf:SpatialEntity .
	?rui_location ccf:has_collision_summary [
		ccf:has_collision_item [
			ccf:as_id ?as_id ;
			ccf:as_label ?as_label ;
			ccf:as_volume ?as_volume ;
			ccf:has_reference_organ ?ref_organ ;
		]
	]
	BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
	FILTER (?modality = 'sc_transcriptomics')
}
GROUP BY ?sex ?tool ?organ ?as_label ?cell_label
ORDER BY ?sex ?tool ?organ ?as_label ?cell_label

```

([View Source](../../queries/atlas-ad-hoc/counts-for-tools-by-as.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/counts-for-tools-by-as.csv))

| sex | tool | organ | as_label | cell_label | cell_id | mean_cell_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adipocyte | http://purl.obolibrary.org/obo/CL_0000136 | 20.16666666666666666667 | 726 |
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Arterial Endothelial | http://purl.obolibrary.org/obo/CL_1000413 | 84.33333333333333333333 | 3036 |
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Atrial Cardiomyocyte | http://purl.obolibrary.org/obo/CL_0002129 | 4 | 72 |
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | B | http://purl.obolibrary.org/obo/CL_0000236 | 20.16666666666666666667 | 726 |
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Capillary Endothelial | http://purl.obolibrary.org/obo/CL_0002144 | 1359.16666666666666666667 | 48930 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="ct-bm-per-dataset"></a>Cell Summaries with Biomarker information by Dataset (ct-bm-per-dataset)

Computes the cell summaries plus biomarkers and their mean gene expression for each organ by dataset.

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Summaries with Biomarker information by Dataset
#+ description: Computes the cell summaries plus biomarkers and their mean gene expression for each organ by dataset.

PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?organ_id ?organ ?dataset ?sex ?tool ?modality ?cell_id ?cell_label ?cell_count ?cell_percentage
  ?biomarker_id ?biomarker_label ?mean_gene_expr_value
FROM HRA:
FROM HRApop:
WHERE {
  {
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  ?dataset ccf:has_cell_summary [ 
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_id ;
      ccf:cell_label ?raw_cell_label ;
      ccf:cell_count ?cell_count ;
      ccf:percentage_of_total ?cell_percentage ;
      ccf:gene_expr [
        ccf:gene_label ?biomarker_label ;
        ccf:gene_id ?biomarker_id ;
        ccf:mean_gene_expr_value ?mean_gene_expr_value ;
      ]
    ]
  ] .

  [] a ccf:SpatialPlacement ;
    ccf:placement_relative_to ?refOrgan ;
    ccf:placement_for ?rui_location .

  ?refOrgan owl:sameAs* [
    ccf:representation_of ?organ_id ;
    ccf:organ_owner_sex ?sex ;
    skos:prefLabel ?organ
  ] .

  ?organ_id rdfs:label ?organ_label .

  OPTIONAL { ?cell_id rdfs:label ?rdfs_cell_label . }
  BIND(COALESCE(?rdfs_cell_label, ?raw_cell_label) as ?cell_label)
}
ORDER BY ?sex ?tool ?dataset DESC(?cell_count)

```

([View Source](../../queries/atlas-ad-hoc/ct-bm-per-dataset.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/ct-bm-per-dataset.csv))

| organ_id | organ | dataset | sex | tool | modality | cell_id | cell_label | cell_count | cell_percentage | biomarker_id | biomarker_label | mean_gene_expr_value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |



### <a id="cxg-collections"></a>Atlas-level CxG collections (cxg-collections)

Atlas-level CellxGene collections and number of datasets extracted from each

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Atlas-level CxG collections
#+ description: Atlas-level CellxGene collections and number of datasets extracted from each

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT ?collection (COUNT(DISTINCT(?dataset)) as ?dataset_count)
FROM HRApop:
WHERE {
  [] ccf:generates_dataset ?dataset .
  FILTER(STRSTARTS(STR(?dataset), 'https://api.cellxgene.cziscience.com'))
  BIND(STRBEFORE(STR(?dataset), '#') as ?_collection)
  BIND(IF(STRLEN(?_collection) = 0, STRBEFORE(STR(?dataset), '_'), ?_collection) as ?collection)
}
GROUP BY ?collection
ORDER BY DESC(?dataset_count)

```

([View Source](../../queries/atlas-ad-hoc/cxg-collections.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/cxg-collections.csv))

| collection | dataset_count |
| :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72 | 82 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5 | 47 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837 | 3 |


### <a id="data-provenance"></a>data-provenance



<details>
  <summary>View Sparql Query</summary>

```sparql
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT ?label ?count
FROM HRA:
FROM HRApop:
WHERE {
  {
    SELECT ("HuBMAP datasets" as ?label) (COUNT(DISTINCT ?dataset) as ?count) (1 as ?order)
    WHERE {
      ?dataset a ccf:Dataset .
      FILTER(STRSTARTS(STR(?dataset), "https://entity.api.hubmapconsortium.org/entities/"))
    }
  }
  UNION
  {
    SELECT ("SenNet datasets" as ?label) (COUNT(DISTINCT ?dataset) as ?count) (2 as ?order)
    WHERE {
      ?dataset a ccf:Dataset .
      FILTER(STRSTARTS(STR(?dataset), "https://entity.api.sennetconsortium.org/entities/"))
    }
  }
  UNION
  {
    SELECT ("tissue donors" as ?label) (COUNT(DISTINCT ?donor) as ?count) (3 as ?order)
    WHERE {
      ?donor a ccf:Donor .
    }
  }
  UNION
  {
    SELECT ("organs" as ?label) (COUNT(DISTINCT ?organ) as ?count) (4 as ?order)
    WHERE {
      ?as ccf:has_cell_summary [] .
      [] ccf:representation_of ?as ;
        ccf:has_reference_organ [
          ccf:representation_of ?organ ;
        ] .
    }
  }
  UNION
  {
    SELECT ("anatomical structures" as ?label) (COUNT(DISTINCT ?as) as ?count) (5 as ?order)
    WHERE {
      ?as ccf:has_cell_summary [] .
      [] ccf:representation_of ?as .
    }
  }
  UNION
  {
    SELECT ("cells" as ?label) (SUM(?cell_count) as ?count) (6 as ?order)
    WHERE {
      [] a ccf:Dataset ;
         ccf:has_cell_summary [
            ccf:has_cell_summary_row [
              ccf:cell_count ?cell_count ;
            ] ;
         ] .
    }
  }
}
ORDER BY ?order


```

([View Source](../../queries/atlas-ad-hoc/data-provenance.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/data-provenance.csv))

| label | count |
| :--- | :--- |
| HuBMAP datasets | 401 |
| SenNet datasets | 93 |
| tissue donors | 170 |
| organs | 22 |
| anatomical structures | 97 |
| cells | 52390545 |


### <a id="datasets-ct-bm-data"></a>Atlas Datasets and their cell types and biomarkers (datasets-ct-bm-data)

Atlas Datasets and their cell types and biomarkers. There is one CT-BM expression per row. Used for a 

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Atlas Datasets and their cell types and biomarkers
#+ description: Atlas Datasets and their cell types and biomarkers. There is one CT-BM expression per row. Used for a 

PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX hgnc: <http://purl.bioontology.org/ontology/HGNC/>
PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?source ?dataset ?organ ?age ?sex ?bmi ?tool ?cell_type ?cell_type_label ?cell_type_count ?cell_type_percentage ?biomarker ?mean_expression_value
FROM HRA:
FROM HRApop:
WHERE {
  ?donor ccf:consortium_name ?source .

  OPTIONAL {
    ?donor ccf:age ?age .
  }
  OPTIONAL {
    ?donor ccf:bmi ?bmi .
  }

  {
    ?sample ccf:comes_from ?donor .
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:comes_from ?donor .
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  {
    ?dataset ccf:organ_id ?reportedOrganIriString .
    BIND(IRI(?reportedOrganIriString) as ?reportedOrganIri)

    OPTIONAL {
      ?reportedOrganIri rdfs:label ?reportedOrganRdfsLabel .
    }
    OPTIONAL {
      ?reportedOrganIri ccf:ccf_pref_label ?reportedOrganCcfLabel .
    }
    BIND(IF(BOUND(?reportedOrganRdfsLabel), ?reportedOrganRdfsLabel, ?reportedOrganCcfLabel) as ?organ)
  }

  ?dataset ccf:has_cell_summary [
    ccf:sex ?sex ;
    ccf:cell_annotation_method ?tool ;
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_id ;
      ccf:cell_id ?_celltype_iri ;
      ccf:cell_label ?cell_type_label ;
      ccf:cell_count ?cell_type_count ;
      ccf:percentage_of_total ?cell_type_percentage ;
      ccf:gene_expr [
        ccf:gene_label ?gene_label ;
        ccf:mean_gene_expr_value ?gene_expr ;
      ]
    ]
  ] .

  OPTIONAL {
    GRAPH <https://purl.humanatlas.io/vocab/hgnc> {
      ?hgnc oboInOwl:hasDbXref ?bmref ;
        hgnc:symbol ?biomarker_label .
      FILTER(STR(?bmref) = STR(?gene_label) || STR(?bmref) = STRBEFORE(?gene_label, '.'))
    }
  }

  BIND(IF(BOUND(?biomarker_label), ?biomarker_label, ?gene_label) as ?biomarker)
  BIND(REPLACE(STR(?cell_id), STR(CL:), 'CL:') as ?cell_type)
  BIND(xsd:decimal(?gene_expr) as ?mean_expression_value)
}

```

([View Source](../../queries/atlas-ad-hoc/datasets-ct-bm-data.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/datasets-ct-bm-data.csv))

| source | dataset | organ | age | sex | bmi | tool | cell_type | cell_type_label | cell_type_count | cell_type_percentage | biomarker | mean_expression_value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |



### <a id="datasets-with-adipocytes"></a>Atlas Datasets with a given Cell Type (datasets-with-adipocytes)

Atlas Datasets that have a given Cell Type. There is one CT-BM expression per row.

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Atlas Datasets with a given Cell Type
#+ description: Atlas Datasets that have a given Cell Type. There is one CT-BM expression per row.

#+ defaults:
#+   - celltype: http://purl.obolibrary.org/obo/CL_0000136

PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX hgnc: <http://purl.bioontology.org/ontology/HGNC/>
PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?source ?dataset ?organ ?as ?as_iri ?age ?sex ?bmi ?tool ?cell_type ?cell_type_label ?cell_type_count ?cell_type_percentage ?biomarker ?mean_expression_value
FROM HRA:
FROM HRApop:
WHERE {
  VALUES (?_celltype_iri) {
    (<http://purl.obolibrary.org/obo/CL_0000136>)
  }
 
  ?donor ccf:consortium_name ?source .

  OPTIONAL {
    ?donor ccf:age ?age .
  }
  OPTIONAL {
    ?donor ccf:bmi ?bmi .
  }

  {
    ?sample ccf:comes_from ?donor .
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:comes_from ?donor .
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }
  
  ?rui_location ccf:has_collision_summary [
    ccf:has_collision_item [
      ccf:as_id ?as_iri ;
      ccf:as_label ?as ;
    ]
  ] .

  {
    ?dataset ccf:organ_id ?reportedOrganIriString .
    BIND(IRI(?reportedOrganIriString) as ?reportedOrganIri)

    OPTIONAL {
      ?reportedOrganIri rdfs:label ?reportedOrganRdfsLabel .
    }
    OPTIONAL {
      ?reportedOrganIri ccf:ccf_pref_label ?reportedOrganCcfLabel .
    }
    BIND(IF(BOUND(?reportedOrganRdfsLabel), ?reportedOrganRdfsLabel, ?reportedOrganCcfLabel) as ?organ)
  }

  ?dataset ccf:has_cell_summary [
    ccf:sex ?sex ;
    ccf:cell_annotation_method ?tool ;
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_id ;
      ccf:cell_id ?_celltype_iri ;
      ccf:cell_label ?cell_type_label ;
      ccf:cell_count ?cell_type_count ;
      ccf:percentage_of_total ?cell_type_percentage ;
      ccf:gene_expr [
        ccf:gene_label ?gene_label ;
        ccf:mean_gene_expr_value ?gene_expr ;
      ]
    ]
  ] .

  OPTIONAL {
    GRAPH <https://purl.humanatlas.io/vocab/hgnc> {
      ?hgnc oboInOwl:hasDbXref ?bmref ;
        hgnc:symbol ?biomarker_label .
      FILTER(STR(?bmref) = STR(?gene_label) || STR(?bmref) = STRBEFORE(?gene_label, '.'))
    }
  }

  BIND(IF(BOUND(?biomarker_label), ?biomarker_label, ?gene_label) as ?biomarker)
  BIND(REPLACE(STR(?cell_id), STR(CL:), 'CL:') as ?cell_type)
  BIND(xsd:decimal(?gene_expr) as ?mean_expression_value)
}

```

([View Source](../../queries/atlas-ad-hoc/datasets-with-adipocytes.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/datasets-with-adipocytes.csv))

| source | dataset | organ | as | as_iri | age | sex | bmi | tool | cell_type | cell_type_label | cell_type_count | cell_type_percentage | biomarker | mean_expression_value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |



### <a id="extraction-site-stats"></a>Extraction Site Statistics (extraction-site-stats)

Count of extraction sites, sites with one as, and sites with no as in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Extraction Site Statistics
#+ description: Count of extraction sites, sites with one as, and sites with no as in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT
  ?sex
	(COUNT(?rui_location) as ?rui_location_count)
	(SUM(IF(?rui_location_collision_count = 1, 1, 0)) as ?rui_location_one_as_count)
	(SUM(IF(?rui_location_ct_count = 0,1,0)) as ?rui_locations_no_ct)
FROM HRApop:
WHERE {
  	{ # Subquery from https://triplydb.com/bherr/-/queries/rui-location-counts
      SELECT 
      ?sex
      ?rui_location 
      (COALESCE(?rui_location_dataset_count,0) as ?rui_location_dataset_count)
      (COALESCE(?rui_location_collision_count,0) as ?rui_location_collision_count)
      (COALESCE(?rui_location_ct_count, 0) as ?rui_location_ct_count)
      (COALESCE(?rui_location_hra_ct_count,0) as ?rui_location_hra_ct_count)
      WHERE {
        # Select all rui locations
        ?rui_location a ccf:SpatialEntity .
        ?sample ccf:has_registration_location ?rui_location .

        OPTIONAL
        { # Get number of collisions per rui location
          SELECT ?rui_location (COUNT(DISTINCT(?as_label)) as ?rui_location_collision_count)
          WHERE {
            ?rui_location a ccf:SpatialEntity .
            ?rui_location ccf:has_collision_summary [
                ccf:has_collision_item [
                  ccf:as_label ?as_label ;
                  ccf:as_volume ?as_volume ;
                  ccf:has_reference_organ ?ref_organ ;
                  ]
            ] .
          }
          GROUP BY ?rui_location
        }
        OPTIONAL
        { # Get number of cell types and hra cell types per rui location
          SELECT ?sex ?rui_location (COUNT(DISTINCT(?cell_label)) as ?rui_location_ct_count) (COUNT(DISTINCT(?hra_ct_id)) as ?rui_location_hra_ct_count)
          WHERE {
            ?dataset a ccf:Dataset .
            ?dataset ccf:has_cell_summary [
              ccf:sex ?sex ;
              ccf:cell_annotation_method ?tool ;
              ccf:modality ?modality ;
              ccf:has_cell_summary_row [
                ccf:cell_id ?cell_id ;
                ccf:cell_label ?cell_label ;
                ccf:cell_count ?cell_count ;
              ]
            ] .

            {
              ?sample ccf:comes_from ?donor .
              ?sample ccf:has_registration_location ?rui_location .
              ?sample ccf:generates_dataset ?dataset .
            } UNION {
              ?block ccf:comes_from ?donor .
              ?block ccf:subdivided_into_sections ?sample .
              ?block ccf:has_registration_location ?rui_location .
              ?sample ccf:generates_dataset ?dataset .
            }

            OPTIONAL {
              ?hra_ct_id rdfs:label ?hra_ct_label .
              FILTER (?hra_ct_id = ?cell_id)
              # FILTER (?hra_ct_id = ?cell_id || ?hra_ct_label = ?cell_label)
            }
          }
          GROUP BY ?sex ?rui_location
        }
        OPTIONAL
        { # Get number of datasets associated with a RUI location
          SELECT ?rui_location (COUNT(DISTINCT(?dataset)) as ?rui_location_dataset_count)
          WHERE {
            ?dataset a ccf:Dataset .

            {
              ?sample ccf:comes_from ?donor .
              ?sample ccf:has_registration_location ?rui_location .
              ?sample ccf:generates_dataset ?dataset .
            } UNION {
              ?block ccf:comes_from ?donor .
              ?block ccf:subdivided_into_sections ?sample .
              ?block ccf:has_registration_location ?rui_location .
              ?sample ccf:generates_dataset ?dataset .
            }
          }
          GROUP BY ?rui_location
        }
      }
      # GROUP BY ?rui_location
    }
}
GROUP BY ?sex
```

([View Source](../../queries/atlas-ad-hoc/extraction-site-stats.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/extraction-site-stats.csv))

| sex | rui_location_count | rui_location_one_as_count | rui_locations_no_ct |
| :--- | :--- | :--- | :--- |
| Female | 211 | 132 | 0 |
| Male | 240 | 153 | 0 |


### <a id="high-level-stats"></a>high-level-stats



<details>
  <summary>View Sparql Query</summary>

```sparql
SELECT ?label ?count
FROM <https://purl.humanatlas.io/graph/hra-pop>
WHERE {
  # hint:Query hint:analytic "true" .

  {
    SELECT ("nodes" as ?label) (COUNT(DISTINCT(?s)) as ?count)
    WHERE {
      {
        ?s ?p1 [] .
      }
      UNION
      {
        [] ?p2 ?s .
        FILTER(isIRI(?s)) 
      }
    }
  }
  UNION
  {
    SELECT ("edges" as ?label) (COUNT(*) as ?count)
    WHERE {
      ?s ?p ?o .
    }
  }
  # UNION
  # {
  #   SELECT ("# Edge Types" as ?label) (COUNT(DISTINCT(?p)) as ?count)
  #   WHERE {
  #     ?s ?p ?o .
  #   }
  # }
}
ORDER BY DESC(?label)


```

([View Source](../../queries/atlas-ad-hoc/high-level-stats.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/high-level-stats.csv))

| label | count |
| :--- | :--- |
| nodes | 120438 |
| edges | 704507 |


### <a id="lung-ctann-cell-summaries"></a>Lung ctann cell summaries (lung-ctann-cell-summaries)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Lung ctann cell summaries

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?tool ?cell_id ?cell_label 
  (SUM(?count) as ?count)
  (AVG(?percentage_of_total) as ?avg_percentage_of_total)
FROM HRApop:
FROM HRA:
WHERE {
  VALUES (?organIri ?organ) {
    (<http://purl.obolibrary.org/obo/UBERON_0002182> "Lung") # Main Bronchus
    (<http://purl.obolibrary.org/obo/UBERON_0002048> "Lung") # Lung
    (<http://purl.obolibrary.org/obo/UBERON_0001004> "Lung") # Respiratory System
  }

  [] ccf:generates_dataset ?dataset .

  OPTIONAL {
    {
      ?sample ccf:comes_from ?donor .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:comes_from ?donor .
      ?block ccf:subdivided_into_sections ?sample .
      ?sample ccf:generates_dataset ?dataset .
    }

    ?donor ccf:consortium_name ?portal ;
      ccf:sex ?sex .
  }

  {
    SELECT ?dataset ?rui_location ?ruiOrganIri
    WHERE {
      {
        ?sample ccf:comes_from ?donor .
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:comes_from ?donor .
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .

      ?ref_organ ccf:representation_of ?refOrganIri .
      ?refOrganIri ccf:ccf_part_of* ?ruiOrganIri .
    }
  }
  UNION
  {
    ?dataset ccf:organ_id ?reportedOrganIri .
  }

  {
    ?dataset ccf:has_cell_summary [
      ccf:cell_annotation_method ?tool ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
        ccf:cell_label ?cell_summary_label ;
        ccf:cell_count ?count ;
        ccf:percentage_of_total ?percentage_of_total ;
      ]
    ];
  }

  OPTIONAL {
    ?cell_id rdfs:label ?cell_rdfs_label .
  }

  BIND(COALESCE(?cell_rdfs_label, ?cell_summary_label) as ?cell_label)

  BIND (IF(BOUND(?ruiOrganIri) && ?ruiOrganIri = ?organIri, ?organIri,
    IF(BOUND(?reportedOrganIri) && ?reportedOrganIri = STR(?organIri), ?organIri, false)) as ?organ_id)

  FILTER(?organ_id = ?organIri)
  FILTER(?tool != 'sc_proteomics')
}
GROUP BY ?tool ?cell_id ?cell_label
ORDER BY ?tool DESC(?count)

```

([View Source](../../queries/atlas-ad-hoc/lung-ctann-cell-summaries.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/lung-ctann-cell-summaries.csv))

| tool | cell_id | cell_label | count | avg_percentage_of_total |
| :--- | :--- | :--- | :--- | :--- |
| azimuth | http://purl.obolibrary.org/obo/CL_4028002 | alveolar capillary type 1 endothelial cell | 1334266 | 0.18014791128391067 |
| azimuth | http://purl.obolibrary.org/obo/CL_0002062 | pulmonary alveolar type 1 cell | 1198194 | 0.2379875954752073 |
| azimuth | http://purl.obolibrary.org/obo/CL_0002145 | multiciliated columnar cell of tracheobronchial tree | 461964 | 0.08214288716969399 |
| azimuth | http://purl.obolibrary.org/obo/CL_0002063 | pulmonary alveolar type 2 cell | 444728 | 0.11160520893278603 |
| azimuth | http://purl.obolibrary.org/obo/CL_4028004 | alveolar type 1 fibroblast cell | 343128 | 0.07781781481766686 |
| ... | ... | ... | ... | ... |


### <a id="lung-dataset-cell-summaries-by-ctann"></a>Lung dataset cell summaries by ctann tool (lung-dataset-cell-summaries-by-ctann)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Lung dataset cell summaries by ctann tool

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?dataset ?tool ?cell_id ?cell_label ?count ?percentage_of_total
FROM HRApop:
FROM HRA:
WHERE {
  VALUES (?organIri ?organ) {
    (<http://purl.obolibrary.org/obo/UBERON_0002182> "Lung") # Main Bronchus
    (<http://purl.obolibrary.org/obo/UBERON_0002048> "Lung") # Lung
    (<http://purl.obolibrary.org/obo/UBERON_0001004> "Lung") # Respiratory System
  }

  [] ccf:generates_dataset ?dataset .

  OPTIONAL {
    {
      ?sample ccf:comes_from ?donor .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:comes_from ?donor .
      ?block ccf:subdivided_into_sections ?sample .
      ?sample ccf:generates_dataset ?dataset .
    }

    ?donor ccf:consortium_name ?portal ;
      ccf:sex ?sex .
  }

  {
    SELECT ?dataset ?rui_location ?ruiOrganIri
    WHERE {
      {
        ?sample ccf:comes_from ?donor .
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:comes_from ?donor .
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .

      ?ref_organ ccf:representation_of ?refOrganIri .
      ?refOrganIri ccf:ccf_part_of* ?ruiOrganIri .
    }
  }
  UNION
  {
    ?dataset ccf:organ_id ?reportedOrganIri .
  }

  {
    ?dataset ccf:has_cell_summary [
      ccf:cell_annotation_method ?tool ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
        ccf:cell_label ?cell_summary_label ;
        ccf:cell_count ?count ;
        ccf:percentage_of_total ?percentage_of_total ;
      ]
    ];
  }

  OPTIONAL {
    ?cell_id rdfs:label ?cell_rdfs_label .
  }

  BIND(COALESCE(?cell_rdfs_label, ?cell_summary_label) as ?cell_label)

  BIND (IF(BOUND(?ruiOrganIri) && ?ruiOrganIri = ?organIri, ?organIri,
    IF(BOUND(?reportedOrganIri) && ?reportedOrganIri = STR(?organIri), ?organIri, false)) as ?organ_id)

  FILTER(?organ_id = ?organIri)
  FILTER(?tool != 'sc_proteomics')
}
ORDER BY ?dataset ?tool DESC(?count)

```

([View Source](../../queries/atlas-ad-hoc/lung-dataset-cell-summaries-by-ctann.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/lung-dataset-cell-summaries-by-ctann.csv))

| dataset | tool | cell_id | cell_label | count | percentage_of_total |
| :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | azimuth | http://purl.obolibrary.org/obo/CL_0002063 | pulmonary alveolar type 2 cell | 916 | 0.2327827191867853 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | azimuth | http://purl.obolibrary.org/obo/CL_4028002 | alveolar capillary type 1 endothelial cell | 714 | 0.1814485387547649 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | azimuth | http://purl.obolibrary.org/obo/CL_0002062 | pulmonary alveolar type 1 cell | 661 | 0.1679796696315121 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | azimuth | http://purl.obolibrary.org/obo/CL_0000875 | non-classical monocyte | 378 | 0.09606099110546379 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | azimuth | http://purl.obolibrary.org/obo/CL_1001603 | lung macrophage | 224 | 0.05692503176620076 |
| ... | ... | ... | ... | ... | ... |


### <a id="lung-foo-collisions-as-ct-b"></a>FOO (lung-foo-collisions-as-ct-b)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: FOO

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?organ ?as_label ?ct_label ?gene_symbol ?as ?ct ?gene
WHERE {
  # Get AS of interest
  {
    SELECT DISTINCT ?organ ?as ?as_label
    WHERE {
      VALUES (?refOrganAs ?organ) {
        (<http://purl.obolibrary.org/obo/UBERON_0002113> "Kidney")
        (<http://purl.obolibrary.org/obo/UBERON_0001004> "Lung") # Respiratory System
        (<http://purl.obolibrary.org/obo/UBERON_0002108> "Small Intestine")
        (<http://purl.obolibrary.org/obo/UBERON_0000059> "Large Intestine")
      }

      { GRAPH HRApop: { ?as ccf:has_cell_summary [ ] . } }
      UNION
      { [] ccf:collides_with ?as . }

      GRAPH HRA: {
        ?as rdfs:label ?as_label .
        [] ccf:representation_of ?as .
        ?as ccf:ccf_part_of* ?refOrganAs .
      }

      FILTER(?as != <http://purl.obolibrary.org/obo/UBERON_0002048> && ?as != ?refOrganAs)
    }
  }

  # Lookup CT + B for the AS via ASCT+B tables
  GRAPH HRA: {
    [] a ccf:AsctbRecord ;
      ccf:anatomical_structure [
        ccf:source_concept ?as 
      ];
      ccf:cell_type [
        ccf:source_concept ?ct 
      ];
      ccf:gene_marker [
        ccf:source_concept ?gene 
      ] .

    # Alternative that only looks up CT+B specifically assigned to that AS, does not include children
    # [] a ccf:CellMarkerDescriptor ;
    #   ccf:primary_anatomical_structure ?as ;
    #   ccf:primary_cell_type ?ct ;
    #   ccf:biomarker ?gene .

    ?ct rdfs:label ?ct_label .
    ?gene rdfs:label ?gene_symbol .
  }
}

```

([View Source](../../queries/atlas-ad-hoc/lung-foo-collisions-as-ct-b.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/lung-foo-collisions-as-ct-b.csv))

| organ | as_label | ct_label | gene_symbol | as | ct | gene |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Large Intestine | descending colon | intestinal crypt stem cell of large intestine | LGR5 | http://purl.obolibrary.org/obo/UBERON_0001158 | http://purl.obolibrary.org/obo/CL_0009016 | http://identifiers.org/hgnc/4504 |
| Large Intestine | descending colon | neuroendocrine cell | INSL5 | http://purl.obolibrary.org/obo/UBERON_0001158 | http://purl.obolibrary.org/obo/CL_0000165 | http://identifiers.org/hgnc/6088 |
| Large Intestine | descending colon | neuroendocrine cell | INSM1 | http://purl.obolibrary.org/obo/UBERON_0001158 | http://purl.obolibrary.org/obo/CL_0000165 | http://identifiers.org/hgnc/6090 |
| Large Intestine | descending colon | myofibroblast cell | ACTA2 | http://purl.obolibrary.org/obo/UBERON_0001158 | http://purl.obolibrary.org/obo/CL_0000186 | http://identifiers.org/hgnc/130 |
| Large Intestine | descending colon | pericryptal fibroblastic sheath | ACTA2 | http://purl.obolibrary.org/obo/UBERON_0001158 | https://purl.org/ccf/ASCTB-TEMP_pericryptal-fibroblastic-sheath | http://identifiers.org/hgnc/130 |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="provider-breakdown"></a>Tissue Provider Counts (provider-breakdown)

The count of datasets and cells processed per tissue provider in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Tissue Provider Counts
#+ description: The count of datasets and cells processed per tissue provider in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX iftu: <https://hubmapconsortium.github.io/hra-ui/apps/ftu-ui/assets/TEMP/2d-ftu-illustrations.jsonld>

SELECT ?sex ?provider (COUNT(DISTINCT(?dataset)) as ?dataset_count) (SUM(?cell_count) as ?cell_count)
FROM HRApop:
WHERE {
  ?donor
    ccf:consortium_name ?consortium ;
    ccf:tissue_provider_name ?provider ;
    ccf:sex ?sex .
  
  {
    ?sample ccf:comes_from ?donor .
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:comes_from ?donor .
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  ?dataset ccf:has_cell_summary [
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
    ccf:has_cell_summary_row [
      ccf:cell_count ?cell_count ;
    ] ;
  ] .
}
GROUP BY ?provider ?sex
ORDER BY ?provider ?sex

```

([View Source](../../queries/atlas-ad-hoc/provider-breakdown.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/provider-breakdown.csv))

| sex | provider | dataset_count | cell_count |
| :--- | :--- | :--- | :--- |
| Female | Broad Institute | 40 | 651491 |
| Male | Broad Institute | 42 | 787681 |
| Female | GTEx | 7 | 143389 |
| Male | GTEx | 8 | 183482 |
| Male | Harvard University | 25 | 12758141 |
| ... | ... | ... | ... |


### <a id="rui-registered-h5ad-datasets"></a>RUI Registered H5AD Dataset and TB Count (rui-registered-h5ad-datasets)

Count of all rui-registered h5ad datasets and tissue blocks

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: RUI Registered H5AD Dataset and TB Count
#+ description: Count of all rui-registered h5ad datasets and tissue blocks

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT (COUNT(DISTINCT ?dataset) as ?rui_registered_h5ad_datasets) 
  (COUNT(DISTINCT ?block) as ?rui_registered_h5ad_tissue_blocks) 
FROM HRApop:
WHERE {
  ?rui_location a ccf:SpatialEntity .
  ?dataset a ccf:Dataset .

  {
    ?block ccf:has_registration_location ?rui_location .
    ?block ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }
}

```

([View Source](../../queries/atlas-ad-hoc/rui-registered-h5ad-datasets.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/rui-registered-h5ad-datasets.csv))

| rui_registered_h5ad_datasets | rui_registered_h5ad_tissue_blocks |
| :--- | :--- |
| 679 | 423 |


### <a id="unmapped-cell-ids"></a>Unmapped cell types (unmapped-cell-ids)

Cell types per tool that are not in cell ontology yet and the number of datasets affected

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Unmapped cell types
#+ description: Cell types per tool that are not in cell ontology yet and the number of datasets affected

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX ccf3d: <http://purl.org/ccf/latest/ccf.owl#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX ctpop-graph: <https://purl.humanatlas.io/graph/ctpop>
PREFIX ctpop: <https://purl.humanatlas.io/graph/ctpop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?tool ?organ ?cell_label (COUNT(DISTINCT(?dataset)) as ?dataset_count)
FROM HRApop:
FROM HRA:
WHERE {
    [] ccf:cell_id ?cell_id .
    FILTER(STRSTARTS(STR(?cell_id), "https://purl.org/ccf/ASCTB-TEMP_"))

    ?dataset a ccf:Dataset ;
      ccf:has_cell_summary [
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
        ccf:has_cell_summary_row [
          ccf:cell_id ?cell_id ;
          ccf:cell_label ?cell_label
        ] ;
      ] .

    OPTIONAL {
      ?dataset ccf:organ_id ?organ_iri .
    }

    BIND(IF(BOUND(?organ_iri), REPLACE(STR(?organ_iri), STR(UBERON:), 'UBERON:'), 'unknown') as ?organ)
}
GROUP BY ?tool ?organ ?cell_label
ORDER BY ?tool ?organ ?cell_label

```

([View Source](../../queries/atlas-ad-hoc/unmapped-cell-ids.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/unmapped-cell-ids.csv))

| tool | organ | cell_label | dataset_count |
| :--- | :--- | :--- | :--- |



### <a id="application-a1"></a>Application A1 (application-a1)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Application A1
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sample ?rui_location ?organ ?organId ?sex ?tool ?modality ?cell_id ?cell_label ?cell_count ?percentage_of_total
WHERE {
  GRAPH HRApopTestData: {
    ?sample ccf:has_registration_location ?rui_location .
    ?rui_location ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
        ccf:cell_label ?cell_label ;
        ccf:cell_count ?cell_count ;
        ccf:percentage_of_total ?percentage_of_total
      ]
    ] .

    [] a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?refOrgan .

    # BIND(EXISTS {
    #   GRAPH HRApop: {
    #     [] ccf:has_registration_location ?rui_location .
    #   }
    # } as ?in_atlas)
  }

  GRAPH HRA: {
    {
      SELECT ?refOrgan ?organIri (SAMPLE(?organ_) as ?organ)
      WHERE {
        ?refOrgan ccf:representation_of ?organIri .
        ?organIri rdfs:label ?organ_ .
      }
      GROUP BY ?refOrgan ?organIri
    }
  }
  BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)

  # FILTER (?in_atlas != TRUE)
}
ORDER BY ?sample DESC(?cell_count)

```

([View Source](../../queries/atlas/application-a1.rq))
</details>

#### Results ([View CSV File](reports/atlas/application-a1.csv))

| sample | rui_location | organ | organId | sex | tool | modality | cell_id | cell_label | cell_count | percentage_of_total |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000738 | immune | 39.1935 | 0.3755136743658778 |
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000173 | delta | 34.97835000000001 | 0.3351282414623778 |
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000115 | endothelial cell | 30.00891 | 0.2875159416182514 |
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000763 | myeloid cell | 29.60958 | 0.2836899532379198 |
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000171 | alpha_immature | 28.97361 | 0.2775967124840584 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

## atlas

### <a id="application-a2p1"></a>Application A2P1 (application-a2p1)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Application A2P1
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?dataset ?reported_organ ?sex ?tool ?modality ?as ?as_tool ?similarity
WHERE {
  GRAPH hra-pop:similarities {
    {
      [] ccf:modality ?modality ;
          ccf:cell_source_a_sex ?sex ;
          ccf:cell_source_b_sex ?sex ;
          ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?as_tool ;
          ccf:cell_source_a ?dataset ;
          ccf:cell_source_b ?as ;
          ccf:similarity ?similarity .
    }
    UNION 
    {
      [] ccf:modality ?modality ;
          ccf:cell_source_a_sex ?sex ;
          ccf:cell_source_b_sex ?sex ;
          ccf:cell_source_a_tool ?as_tool ;
          ccf:cell_source_b_tool ?tool ;
          ccf:cell_source_a ?as ;
          ccf:cell_source_b ?dataset ;
          ccf:similarity ?similarity .
    }

    FILTER (
      STRSTARTS(STR(?as), 'http://purl.obolibrary.org/obo/') ||
      STRSTARTS(STR(?as), 'http://purl.org/sig/ont/fma/fma')
    )

    FILTER EXISTS  {
      GRAPH hra-pop:test-data {
        ?dataset a ccf:Dataset ;
          ccf:has_cell_summary [];
      }
    }
  }

  OPTIONAL {
    GRAPH hra-pop:test-data {
      ?dataset ccf:organ_id ?reported_organ .
    }
  }
}

```

([View Source](../../queries/atlas/application-a2p1.rq))
</details>

#### Results ([View CSV File](reports/atlas/application-a2p1.csv))

| dataset | reported_organ | sex | tool | modality | as | as_tool | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/05e3d0fc-c9dd-4f14-9163-2b242b3bb5c2#Hu0326$optic%20disc | http://purl.obolibrary.org/obo/UBERON_0000970 | Male | pan-human-azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0000998 | popv | 0.6357434376496731 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/05e3d0fc-c9dd-4f14-9163-2b242b3bb5c2#Hu0326$optic%20disc | http://purl.obolibrary.org/obo/UBERON_0000970 | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002097 | popv | 0.6573402642748174 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/05e3d0fc-c9dd-4f14-9163-2b242b3bb5c2#Hu0326$optic%20disc | http://purl.obolibrary.org/obo/UBERON_0000970 | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_7500033 | popv | 0.8381624542129487 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/05e3d0fc-c9dd-4f14-9163-2b242b3bb5c2#Hu0326$optic%20disc | http://purl.obolibrary.org/obo/UBERON_0000970 | Male | pan-human-azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_8410025 | popv | 0.6357434376496731 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/05e3d0fc-c9dd-4f14-9163-2b242b3bb5c2#Hu0326$optic%20disc | http://purl.obolibrary.org/obo/UBERON_0000970 | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_8410026 | popv | 0.3110633809777451 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="application-a2p2"></a>Application A2P2 (application-a2p2)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Application A2P2
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?dataset ?reported_organ ?tool ?modality ?as (?shared_ds_cell_types / ?total_ds_cell_types as ?pct_hra_ct_overlap)
WHERE {
  GRAPH hra-pop:test-data {
    ?dataset ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
    ] .

    OPTIONAL { ?dataset ccf:organ_id ?reported_organ . }
  }

  {
    SELECT ?dataset ?sex ?tool ?modality (COUNT(DISTINCT(?dataset_cell_label)) as ?total_ds_cell_types)
    WHERE {
      GRAPH hra-pop:test-data {
        ?dataset ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
              ccf:cell_label ?dataset_cell_label ;
          ]
        ] .
      }
    }
    GROUP BY ?dataset ?sex ?tool ?modality
  }

  {
    SELECT ?dataset ?as ?sex ?tool ?modality (COUNT(DISTINCT(?cell_label)) as ?shared_ds_cell_types)
    WHERE {
      GRAPH hra-pop:test-data {
        ?dataset ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
              ccf:cell_id ?cell_id ;
              ccf:cell_label ?cell_label ;
          ]
        ] .

        GRAPH HRApop: {
          ?as ccf:has_cell_summary [
            ccf:sex ?sex ;
            ccf:cell_annotation_method ?tool ;
            ccf:modality ?modality ;
          ] .
        }

        FILTER(
          STRSTARTS(STR(?as), 'http://purl.obolibrary.org/obo/') ||
          STRSTARTS(STR(?as), 'http://purl.org/sig/ont/fma/fma')
        )
      }

      GRAPH HRA: {
        ?as ccf:ccf_asctb_type ?type .
        FILTER (?type = 'AS')
      }

      FILTER(EXISTS {
        GRAPH HRA: {
          ?cell_id ccf:ccf_asctb_type [] .
        }
      } || EXISTS {
        GRAPH HRA: {
          [] ccf:ccf_asctb_type [] ;
            rdfs:label ?cell_label .
        }
      })
    }
    GROUP BY ?dataset ?as ?sex ?tool ?modality
  }
}
ORDER BY ?sex ?dataset DESC(?pct_hra_ct_overlap)

```

([View Source](../../queries/atlas/application-a2p2.rq))
</details>

#### Columns
| dataset | reported_organ | tool | modality | as | pct_hra_ct_overlap |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ... | ... | ... | ... | ... | ... |

### <a id="application-a2p3"></a>Application A2P3 (application-a2p3)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Application A2P3
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>


SELECT ?dataset ?reported_organ ?sex ?tool ?modality ?corridor ?corridor_tool ?similarity 
WHERE {
  GRAPH hra-pop:similarities {
    {
      [] ccf:modality ?modality ;
         ccf:cell_source_a_sex ?sex ;
         ccf:cell_source_b_sex ?sex ;
         ccf:cell_source_a_tool ?tool ;
         ccf:cell_source_b_tool ?corridor_tool ;
         ccf:cell_source_a ?dataset ;
         ccf:cell_source_b ?corridor ;
         ccf:similarity ?similarity .
    } UNION {
      [] ccf:modality ?modality ;
         ccf:cell_source_a_sex ?sex ;
         ccf:cell_source_b_sex ?sex ;
         ccf:cell_source_a_tool ?corridor_tool ;
         ccf:cell_source_b_tool ?tool ;
         ccf:cell_source_a ?corridor ;
         ccf:cell_source_b ?dataset ;
         ccf:similarity ?similarity .
    }

    FILTER (STRSTARTS(STR(?corridor), 'http://purl.org/ccf/1.5/'))

    FILTER EXISTS  {
      GRAPH hra-pop:test-data {
        ?dataset a ccf:Dataset ;
          ccf:has_cell_summary [];
      }
    }
  }

  OPTIONAL {
    GRAPH hra-pop:test-data {
      ?dataset ccf:organ_id ?reported_organ .
    }
  }
}
ORDER BY ?dataset DESC(?similarity)

```

([View Source](../../queries/atlas/application-a2p3.rq))
</details>

#### Results ([View CSV File](reports/atlas/application-a2p3.csv))

| dataset | reported_organ | sex | tool | modality | corridor | corridor_tool | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/00109df5-7810-4542-8db5-2288c46e0424#A549$pulmonary%20alveolar%20epithelial%20cell | http://purl.obolibrary.org/obo/UBERON_0000322 | Male | pan-human-azimuth | sc_transcriptomics | http://purl.org/ccf/1.5/ca23f77c-a3cd-453f-bbe9-2d8d1514fc8e | pan-human-azimuth | 0.6637287106267582 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/00109df5-7810-4542-8db5-2288c46e0424#MCF7$mammary%20gland%20epithelial%20cell | http://purl.obolibrary.org/obo/UBERON_0002327 | Female | pan-human-azimuth | sc_transcriptomics | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | pan-human-azimuth | 0.790301018104335 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/00109df5-7810-4542-8db5-2288c46e0424#MCF7$mammary%20gland%20epithelial%20cell | http://purl.obolibrary.org/obo/UBERON_0002327 | Female | pan-human-azimuth | sc_transcriptomics | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | pan-human-azimuth | 0.6458308722583892 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | azimuth | sc_transcriptomics | http://purl.org/ccf/1.5/50709361-c670-4ccf-9322-e65b57b3ea8f | azimuth | 0.6650250598871916 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | azimuth | sc_transcriptomics | http://purl.org/ccf/1.5/e7d21a48-63dd-45d8-aedd-e4abed52d5d8 | azimuth | 0.4451082743353988 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="application-a2p4"></a>Application A2P4 (application-a2p4)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Application A2P4
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?dataset ?reported_organ ?sex ?tool ?modality ?atlas_dataset ?atlas_dataset_tool ?similarity 
WHERE {
  GRAPH HRApop: {
    SELECT DISTINCT ?atlas_dataset ?sex 
    WHERE {
      ?atlas_dataset a ccf:Dataset ;
      ccf:has_cell_summary [
        ccf:sex ?sex ;
      ] .
      hint:SubQuery hint:runOnce true .
    }    
  }

  GRAPH hra-pop:test-data {
    SELECT DISTINCT ?dataset ?sex (COALESCE(?reported_organ, 'Unknown') as ?reported_organ)
    WHERE {
      ?dataset a ccf:Dataset ;
      ccf:has_cell_summary [
        ccf:sex ?sex ;
      ] .

      OPTIONAL { ?dataset ccf:organ_id ?reported_organ . }
      hint:SubQuery hint:runOnce true .
    }
  }

  GRAPH hra-pop:similarities {
    {
      [] ccf:modality ?modality ;
         ccf:cell_source_a_sex ?sex ;
         ccf:cell_source_b_sex ?sex ;
         ccf:cell_source_a_tool ?tool ;
         ccf:cell_source_b_tool ?atlas_dataset_tool ;
         ccf:cell_source_a ?dataset ;
         ccf:cell_source_b ?atlas_dataset ;
         ccf:similarity ?similarity .
    } UNION {
      [] ccf:modality ?modality ;
         ccf:cell_source_a_sex ?sex ;
         ccf:cell_source_b_sex ?sex ;
         ccf:cell_source_a_tool ?atlas_dataset_tool ;
         ccf:cell_source_b_tool ?tool ;
         ccf:cell_source_a ?atlas_dataset ;
         ccf:cell_source_b ?dataset ;
         ccf:similarity ?similarity .
    }
  }
}
#ORDER BY ?dataset DESC(?similarity)

```

([View Source](../../queries/atlas/application-a2p4.rq))
</details>

#### Results ([View CSV File](reports/atlas/application-a2p4.csv))

| dataset | reported_organ | sex | tool | modality | atlas_dataset | atlas_dataset_tool | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/fe0e718d-2ee9-42cc-894b-0b490f437dfd#Hs255$subcutaneous%20adipose%20tissue | http://purl.obolibrary.org/obo/UBERON_0002190 | Female | pan-human-azimuth | sc_transcriptomics | https://entity.api.hubmapconsortium.org/entities/71477f504b0069828a368009fa3ab1ad | popv | 0.8757411249951574 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/fe0e718d-2ee9-42cc-894b-0b490f437dfd#Hs266$omental%20fat%20pad | http://purl.obolibrary.org/obo/UBERON_0010414 | Male | pan-human-azimuth | sc_transcriptomics | https://entity.api.hubmapconsortium.org/entities/de78115cc476af9422f916ddfbccbfb6 | azimuth | 0.9624142073289295 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/a3ffde6c-7ad2-498a-903c-d58e732f7470#GTEX-1HSMQ$lingula%20of%20left%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Male | celltypist | sc_transcriptomics | https://entity.api.hubmapconsortium.org/entities/e81c9c9753998b2ca69e8bceadf2409d | popv | 0.7428559095919199 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/a3ffde6c-7ad2-498a-903c-d58e732f7470#GTEX-1HSMQ$lingula%20of%20left%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Male | azimuth | sc_transcriptomics | https://entity.api.sennetconsortium.org/entities/e7a600225b568feba7418cd2c9c125fa | azimuth | 0.7178597502774247 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/a3ffde6c-7ad2-498a-903c-d58e732f7470#GTEX-1HSMQ$lingula%20of%20left%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Male | celltypist | sc_transcriptomics | https://entity.api.hubmapconsortium.org/entities/37ccf28cb5c06e8ba076f587ee4e50be | celltypist | 0.9511283713310108 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="cell-and-cell-type-count-by-modality"></a>Count of Cells and unique Cell Types by Modality (cell-and-cell-type-count-by-modality)

Number of processed cells and unique cell types by modality that are included in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Count of Cells and unique Cell Types by Modality
#+ description: Number of processed cells and unique cell types by modality that are included in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT
  ?sex
  ?modality
  (COUNT(DISTINCT(?cell_id)) as ?unique_cell_type_count)
  (SUM(?cell_count) as ?cell_count)
FROM HRApop:
WHERE {
  [] a ccf:Dataset ;
    ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
        ccf:cell_count ?cell_count ;
      ] ;
    ] .
}
GROUP BY ?sex ?modality

```

([View Source](../../queries/atlas/cell-and-cell-type-count-by-modality.rq))
</details>

#### Results ([View CSV File](reports/atlas/cell-and-cell-type-count-by-modality.csv))

| sex | modality | unique_cell_type_count | cell_count |
| :--- | :--- | :--- | :--- |
| Male | sc_transcriptomics | 348 | 11791288 |
| Male | sc_proteomics | 53 | 19277608 |
| Female | sc_transcriptomics | 335 | 5940428 |
| Female | sc_proteomics | 44 | 15381221 |


### <a id="cell-and-cell-type-count"></a>Count of Cells and unique Cell Types (cell-and-cell-type-count)

Number of processed cells and unique cell types that are included in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Count of Cells and unique Cell Types
#+ description: Number of processed cells and unique cell types that are included in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT
  ?sex
  (COUNT(DISTINCT(?cell_id)) as ?unique_cell_type_count)
  (SUM(?cell_count) as ?cell_count)
FROM HRApop:
WHERE {
  [] a ccf:Dataset ;
    ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
        ccf:cell_count ?cell_count ;
      ] ;
    ] .
}
GROUP BY ?sex
```

([View Source](../../queries/atlas/cell-and-cell-type-count.rq))
</details>

#### Results ([View CSV File](reports/atlas/cell-and-cell-type-count.csv))

| sex | unique_cell_type_count | cell_count |
| :--- | :--- | :--- |
| Male | 352 | 31068896 |
| Female | 339 | 21321649 |


### <a id="donor-info"></a>Atlas-level Donor information (donor-info)

Atlas-level donor information, including provider name, age, sex, bmi, and race

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Atlas-level Donor information
#+ description: Atlas-level donor information, including provider name, age, sex, bmi, and race

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?donor ?consortium ?tissue_provider ?age ?sex ?bmi ?race
FROM HRApop:
WHERE {
  ?donor a ccf:Donor .
  OPTIONAL { ?donor ccf:consortium_name ?consortium . }
  OPTIONAL { ?donor ccf:tissue_provider_name ?tissue_provider . }
  OPTIONAL { ?donor ccf:age ?age . }
  OPTIONAL { ?donor ccf:sex ?sex . }
  OPTIONAL { ?donor ccf:bmi ?bmi . }
  OPTIONAL { ?donor ccf:race ?race . }
}

```

([View Source](../../queries/atlas/donor-info.rq))
</details>

#### Results ([View CSV File](reports/atlas/donor-info.csv))

| donor | consortium | tissue_provider | age | sex | bmi | race |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://entity.api.hubmapconsortium.org/entities/c37ed0a5fa384dceb5d8914e221e9f08 | HuBMAP | RTI-General Electric | 72 | Male | 27.4 | White |
| https://entity.api.hubmapconsortium.org/entities/cc561d0d3840fe8482938208fe032a54 | HuBMAP | TMC-UConn | 31 | Female | 29.4 | Black or African American |
| https://entity.api.hubmapconsortium.org/entities/d15df1013d0948b4416a88fec00f5385 | HuBMAP | TMC-UCSD | 59 | Male | 22.57 | White |
| https://entity.api.hubmapconsortium.org/entities/d37df2cad4e80dc368763caefccf7140 | HuBMAP | TMC-UConn | 49 | Male | 31.2 | White |
| https://entity.api.hubmapconsortium.org/entities/d3ad6409d2ad37ef7dbcc90ccc199f68 | HuBMAP | TMC-Stanford | 78 | Male | 35.1 | Black or African American |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="figure-as-as-sim"></a>Figure AS-AS Sim Data (figure-as-as-sim)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Figure AS-AS Sim Data
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?organId ?organ ?sex ?modality ?as1_label ?as2_label ?cosine_sim ?as1_dataset_count ?as2_dataset_count

WITH {
  SELECT ?refOrganAs (COUNT(DISTINCT(?dataset)) as ?as_dataset_count)
  WHERE  {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?rui_location ccf:has_collision_summary [
          ccf:has_collision_item [
              ccf:as_id ?refOrganAs ;
          ]
      ] .
    }
  }
  GROUP BY ?refOrganAs
} AS %as_data

WITH {
  SELECT ?sex ?modality ?as1 ?as2 (AVG(?similarity) as ?cosine_sim)
  WHERE {
    GRAPH HRA: {
      [] ccf:representation_of ?as1 .
      [] ccf:representation_of ?as2 .
    }

    GRAPH hra-pop:as-as-sims {
      [] ccf:modality ?modality ;
        ccf:cell_source_a ?as1 ;
        ccf:cell_source_b ?as2 ;
        ccf:cell_source_a_sex ?sex ;
        ccf:cell_source_b_sex ?sex ;
        ccf:similarity ?similarity .
    }
  }
  GROUP BY ?sex ?modality ?as1 ?as2
} AS %sims

WHERE {
  GRAPH HRA: {
    ?refOrgan ccf:representation_of ?organIri ;
      ccf:has_reference_organ ?refOrgan .

    ?organIri rdfs:label ?organ .
    BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
  }

  GRAPH HRA: {
    [] ccf:representation_of ?as1 ;
      ccf:has_reference_organ [
        ccf:representation_of ?organIri
      ] .
      
    ?as1 rdfs:label ?as1_label .
  }

  GRAPH HRA: {
    [] ccf:representation_of ?as2 ;
      ccf:has_reference_organ [
        ccf:representation_of ?organIri
      ] .

    ?as2 rdfs:label ?as2_label .
  }

  {
    SELECT (?refOrganAs as ?as1) (?as_dataset_count as ?as1_dataset_count)
    WHERE {
      INCLUDE %as_data
    }
  }

  {
    SELECT (?refOrganAs as ?as2) (?as_dataset_count as ?as2_dataset_count)
    WHERE {
      INCLUDE %as_data
    }
  }

  INCLUDE %sims
}
# ORDER BY ?organ DESC(?cosine_sim)

```

([View Source](../../queries/atlas/figure-as-as-sim.rq))
</details>

#### Results ([View CSV File](reports/atlas/figure-as-as-sim.csv))

| organId | organ | sex | modality | as1_label | as2_label | cosine_sim | as1_dataset_count | as2_dataset_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UBERON:0004539 | right kidney | Male | sc_transcriptomics | kidney pyramid | hilum of kidney | 0.2946064250819930003125 | 81 | 2 |
| UBERON:0004538 | left kidney | Male | sc_transcriptomics | kidney pyramid | hilum of kidney | 0.2946064250819930003125 | 81 | 2 |
| UBERON:0004539 | right kidney | Male | sc_transcriptomics | kidney capsule | hilum of kidney | 0.28649101047461770283 | 7 | 2 |
| UBERON:0004538 | left kidney | Male | sc_transcriptomics | kidney capsule | hilum of kidney | 0.28649101047461770283 | 7 | 2 |
| UBERON:0004539 | right kidney | Male | sc_transcriptomics | outer cortex of kidney | hilum of kidney | 0.343377074090326342467 | 46 | 2 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="figure-f4"></a>Figure F4 (figure-f4)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Figure F4
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT
	?organId
  ?organ
  ?sex
  ?modality
  ?tool

  (SAMPLE(?total_organ_as_count) as ?total_organ_as_count)
  (SAMPLE(?organ_as_count_with_collisions) as ?organ_as_count_with_collisions)
  (COUNT(DISTINCT(?rui_location)) as ?rui_location_count)
	(COUNT(DISTINCT(?dataset)) as ?dataset_count)
  (COUNT(DISTINCT(?nonAtlasDataset)) as ?non_atlas_dataset_count)
FROM HRApop:
FROM HRA:
WHERE {
  {
    SELECT ?organIri ?sex (?dataset as ?nonAtlasDataset)
    WHERE {
      {
        SELECT ?dataset ?sex ?rui_location ?ruiOrganIri
        WHERE {
          GRAPH HRApopFull: {
            {
              ?sample ccf:comes_from ?donor .
              ?sample ccf:has_registration_location ?rui_location .
              ?sample ccf:generates_dataset ?dataset .
            } UNION {
              ?block ccf:comes_from ?donor .
              ?block ccf:subdivided_into_sections ?sample .
              ?block ccf:has_registration_location ?rui_location .
              ?sample ccf:generates_dataset ?dataset .
            }

            ?placement a ccf:SpatialPlacement ;
              ccf:placement_for ?rui_location ;
              ccf:placement_relative_to ?ref_organ .
          }

          GRAPH HRA: {
            ?ref_organ ccf:representation_of ?refOrganIri ;
              ccf:organ_owner_sex ?sex .
            ?refOrganIri ccf:ccf_part_of* ?ruiOrganIri .
          }
        }
      }
      UNION
      {
        GRAPH HRApopFull: {
          {
            ?sample ccf:comes_from ?donor .
            ?sample ccf:has_registration_location ?rui_location .
            ?sample ccf:generates_dataset ?dataset .
          } UNION {
            ?block ccf:comes_from ?donor .
            ?block ccf:subdivided_into_sections ?sample .
            ?block ccf:has_registration_location ?rui_location .
            ?sample ccf:generates_dataset ?dataset .
          }

          ?dataset ccf:organ_id ?reportedOrganIri .
          ?donor ccf:sex ?sex .
        }
      }

      BIND (IF(BOUND(?ruiOrganIri), ?ruiOrganIri,
        IF(BOUND(?reportedOrganIri), URI(?reportedOrganIri), false)) as ?organIri)

      FILTER NOT EXISTS {
        GRAPH HRApop: {
          ?dataset ccf:has_cell_summary [];
        }
      }
      FILTER(?organIri != false)
    }
  }

  {
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  ?dataset ccf:has_cell_summary [
    ccf:sex ?sex ;
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
  ] .

  [] a ccf:SpatialPlacement ;
    ccf:placement_for ?rui_location ;
    ccf:placement_relative_to ?refOrgan .

  ?refOrgan ccf:representation_of ?organIri ;
        ccf:organ_owner_sex ?sex .

  {
    SELECT ?organIri ?sex (COUNT(DISTINCT(?refOrganAsIri)) as ?total_organ_as_count)
    WHERE {
      ?refOrgan ccf:representation_of ?organIri ;
        ccf:organ_owner_sex ?sex .
      ?refOrganAs ccf:has_reference_organ ?refOrgan ;
        ccf:representation_of ?refOrganAsIri .
    }
    GROUP BY ?organIri ?sex 
  }

  {
    SELECT ?organIri ?sex (COUNT(DISTINCT(?refOrganAsIri)) as ?organ_as_count_with_collisions) 
      WHERE {
        [] ccf:has_collision_summary [
          ccf:has_collision_item [
              ccf:as_id ?refOrganAsIri ;
              ccf:has_reference_organ ?refOrgan
          ]
        ] .

        ?refOrgan ccf:representation_of ?organIri ;
          ccf:organ_owner_sex ?sex .
    }
    GROUP BY ?organIri ?sex 
  }
  
  ?organIri rdfs:label ?organ .
  BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
}
GROUP BY ?organId ?organ ?sex ?modality ?tool
ORDER BY ?modality ?organ ?sex

```

([View Source](../../queries/atlas/figure-f4.rq))
</details>

#### Results ([View CSV File](reports/atlas/figure-f4.csv))

| organId | organ | sex | modality | tool | total_organ_as_count | organ_as_count_with_collisions | rui_location_count | dataset_count | non_atlas_dataset_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UBERON:0000059 | large intestine | Female | sc_proteomics | sc_proteomics | 11 | 7 | 6 | 6 | 64 |
| UBERON:0000059 | large intestine | Male | sc_proteomics | sc_proteomics | 11 | 6 | 25 | 49 | 267 |
| UBERON:0002509 | mesenteric lymph node | Female | sc_proteomics | sc_proteomics | 8 | 6 | 2 | 2 | 6 |
| UBERON:0002509 | mesenteric lymph node | Male | sc_proteomics | sc_proteomics | 8 | 7 | 3 | 3 | 8 |
| UBERON:0001264 | pancreas | Female | sc_proteomics | sc_proteomics | 6 | 5 | 8 | 8 | 202 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="table-1"></a>Table 1 (table-1)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table 1
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT
  ?portal
  ?sex
  ?modality
  (COUNT(DISTINCT(?study_paper)) as ?studies)
  (COUNT(DISTINCT(?donor)) as ?donors)
  (COUNT(DISTINCT(?organ_iri)) as ?organs)
  (COUNT(DISTINCT(?block)) as ?tissue_blocks)
  (COUNT(DISTINCT(?section)) as ?tissue_sections)
  (COUNT(DISTINCT(?dataset)) as ?datasets)
  (COUNT(DISTINCT(?cell_iri)) as ?cell_types)
  (SUM(?cell_count) as ?cells)
FROM HRApop:
FROM HRA:
WHERE {
  ?donor a ccf:Donor ;
    ccf:consortium_name ?portal .

  # Relationships 
  {
    ?block ccf:comes_from ?donor .
    ?block ccf:has_registration_location ?rui_location .
    ?block ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:comes_from ?donor .
    ?block ccf:subdivided_into_sections ?section .
    ?block ccf:has_registration_location ?rui_location .
    ?section ccf:generates_dataset ?dataset .
  }

  OPTIONAL { ?dataset ccf:publication_title ?study_paper . }

  # RUI Location Placement
  {
    ?placement a ccf:SpatialPlacement ;
      ccf:placement_for ?rui_location ;
      ccf:placement_relative_to ?ref_organ .
  }

  # Ref Organ Name
  {
    ?ref_organ ccf:representation_of ?organ_iri .
    ?organ_iri rdfs:label ?organ_name .
  }

  # Cells
  {
    ?dataset ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_iri ;
        ccf:cell_count ?cell_count ;
      ] ;
    ] .
  }
}
GROUP BY ?portal ?sex ?modality
ORDER BY ?portal ?sex ?modality

```

([View Source](../../queries/atlas/table-1.rq))
</details>

#### Results ([View CSV File](reports/atlas/table-1.csv))

| portal | sex | modality | studies | donors | organs | tissue_blocks | tissue_sections | datasets | cell_types | cells |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GTEx | Female | sc_transcriptomics | 1 | 6 | 4 | 7 | 0 | 7 | 149 | 143389 |
| GTEx | Male | sc_transcriptomics | 1 | 5 | 4 | 8 | 0 | 8 | 188 | 183482 |
| HCA | Female | sc_transcriptomics | 2 | 16 | 11 | 70 | 0 | 70 | 242 | 1033222 |
| HCA | Male | sc_transcriptomics | 2 | 12 | 9 | 56 | 0 | 59 | 223 | 995859 |
| HuBMAP | Female | sc_proteomics | 0 | 8 | 4 | 28 | 8 | 28 | 27 | 35527756 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="table-s1"></a>Table S1 (table-s1)

Report of all datasets used in CTPop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S1
#+ description: Report of all datasets used in CTPop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT
  ?portal
  ?study_paper
  ?doi
  ?lead_author
  ?is_azimuth_reference
  (STRAFTER(STR(?donor), '#') as ?donor_id)
  ?donor_sex
  ?donor_age
  ?donor_development_stage
  ?donor_race
  ?donor_bmi
  ?organ_name
  ?organ_name_glb_file
  (STRAFTER(STR(?sample), '#') as ?tissue_block_id)
  ?tissue_block_volume
  ?collisions_bb
  ?collisions_mesh
  ?list_of_colliding_anatomical_structures_bb
  ?list_of_colliding_anatomical_structures_mesh
  ?list_of_colliding_anatomical_structures_bb_ids
  ?list_of_colliding_anatomical_structures_mesh_ids
  (STRAFTER(STR(?dataset), '#') as ?dataset_id)
  (STRAFTER(STR(?dataset), '#') as ?unique_dataset_id)
  (?dataset_link as ?link_to_raw_data)
  (?dataset_modality as ?bulk_or_spatial)
  (?tool as ?cell_type_annotation_tool)
  ?omap_id
  ?number_of_cells_total
  ?number_of_unique_cell_types
  ?hubmap_dataset_publication_status
FROM HRApop:
FROM HRA:
WHERE {

  # Relationships 
  {
    ?sample ccf:comes_from ?donor .
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:comes_from ?donor .
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  # Data extracted from Donors
  {
    ?donor a ccf:Donor ;
      ccf:consortium_name ?portal ;
      ccf:tissue_provider_name ?tissue_provider .

    OPTIONAL { ?donor ccf:development_stage ?donor_development_stage . } .
    OPTIONAL { ?donor ccf:race ?donor_race . } .
    OPTIONAL { ?donor ccf:age ?donor_age . } .
    OPTIONAL { ?donor ccf:bmi ?donor_bmi . } .
  }

  # Data extracted from RUI Locations
  {
    [] ccf:has_registration_location ?rui_location .
  
    # RUI Location
    {
      ?rui_location a ccf:SpatialEntity ;
        ccf:x_dimension ?rui_x ;
        ccf:y_dimension ?rui_y ;
        ccf:z_dimension ?rui_z .

      BIND(?rui_x * ?rui_y * ?rui_z as ?tissue_block_volume)
    }

    # RUI Location Placement
    {
      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .
    }

    # Ref Organ Name
    {
      ?ref_organ ccf:representation_of ?organ_iri .
      ?ref_organ ccf:organ_owner_sex ?ref_organ_sex .
      ?organ_iri rdfs:label ?organ_name .
    }

    # Ref Organ GLB File
    {
      ?some_ref_organ a ?organ_iri ;
        ccf:organ_owner_sex ?ref_organ_sex ;
        ccf:has_object_reference [
          ccf:file_name ?organ_name_glb_file
        ] .
    }

    OPTIONAL {
      SELECT ?rui_location
        (COUNT(?as_id) as ?collisions_bb)
        (GROUP_CONCAT(DISTINCT(?as_label); separator="; ") as ?list_of_colliding_anatomical_structures_bb)
        (GROUP_CONCAT(DISTINCT(?as_id); separator="; ") as ?list_of_colliding_anatomical_structures_bb_ids)
      WHERE {
        ?rui_location ccf:collides_with ?as_iri .
        ?as_iri rdfs:label ?as_label .

        [] a ccf:SpatialPlacement ;
          ccf:placement_for ?rui_location ;
          ccf:placement_relative_to [
            ccf:representation_of ?organ_iri ;
          ] .

        # Filter out obvious anatomical structures including body and the reference organ
        FILTER (?as_label != 'body proper' && ?as_iri != ?organ_iri)

        BIND(REPLACE(REPLACE(REPLACE(STR(?as_iri), 'http://purl.obolibrary.org/obo/', ''), '_', ':'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?as_id)
      }
      GROUP BY ?rui_location
    }

    # RUI Location Collision Summary
    OPTIONAL {
      SELECT ?rui_location
        (COUNT(?as_id) as ?collisions_mesh)
        (GROUP_CONCAT(DISTINCT(?as_label); separator="; ") as ?list_of_colliding_anatomical_structures_mesh)
        (GROUP_CONCAT(DISTINCT(?as_id); separator="; ") as ?list_of_colliding_anatomical_structures_mesh_ids)
      WHERE {
        ?rui_location ccf:has_collision_summary [
          ccf:has_collision_item [
            ccf:as_label ?as_label ;
            ccf:as_id ?as_iri
          ]
        ] .

        BIND(REPLACE(REPLACE(REPLACE(STR(?as_iri), 'http://purl.obolibrary.org/obo/', ''), '_', ':'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?as_id)
      }
      GROUP BY ?rui_location
    }
  }
  
  # Data extracted from Dataset
  {
    ?dataset a ccf:Dataset ;
      ccf:url ?dataset_link .
  }

  OPTIONAL { ?dataset ccf:publication_title ?study_paper . }
  OPTIONAL { ?dataset ccf:publication ?doi . }
  OPTIONAL { ?dataset ccf:publication_lead_author ?lead_author . }
  OPTIONAL { ?dataset hra-pop:is_azimuth_reference ?is_azimuth_reference . }
  OPTIONAL { ?dataset hra-pop:omap_id ?omap_id . }
  OPTIONAL { ?dataset hra-pop:hubmap_dataset_publication_status ?hubmap_dataset_publication_status . }
  OPTIONAL { ?dataset hra-pop:excluded_from_atlas_construction ?excluded_from_atlas_construction . }
  OPTIONAL { ?dataset hra-pop:reason_for_exclusion ?reason_for_exclusion . }

  # Dataset Cell Summary
  OPTIONAL {
    ?dataset ccf:has_cell_summary [
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:sex ?donor_sex ;
    ] .

    {
      SELECT ?dataset 
        (SUM(?cell_count) as ?number_of_cells_total)
        (COUNT(DISTINCT(?cell_id)) as ?number_of_unique_cell_types)
      WHERE {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_id ?cell_id ;
            ccf:cell_count ?cell_count ;
          ]
        ] .
      }
      GROUP BY ?dataset
    }
  }
}
ORDER BY ?unique_dataset_id

```

([View Source](../../queries/atlas/table-s1.rq))
</details>

#### Results ([View CSV File](reports/atlas/table-s1.csv))

| portal | study_paper | doi | lead_author | is_azimuth_reference | donor_id | donor_sex | donor_age | donor_development_stage | donor_race | donor_bmi | organ_name | organ_name_glb_file | tissue_block_id | tissue_block_volume | collisions_bb | collisions_mesh | list_of_colliding_anatomical_structures_bb | list_of_colliding_anatomical_structures_mesh | list_of_colliding_anatomical_structures_bb_ids | list_of_colliding_anatomical_structures_mesh_ids | dataset_id | unique_dataset_id | link_to_raw_data | bulk_or_spatial | cell_type_annotation_tool | omap_id | number_of_cells_total | number_of_unique_cell_types | hubmap_dataset_publication_status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SenNet |  |  |  |  | Donor1 | Female | 55 |  |  | 31.8 | mesenteric lymph node | 3d-nih-f-lymph-node.glb | Donor1_TissueBlock1 | 682.5 | 4 | 6 | medulla of lymph node; capsule of lymph node; lymph node T cell domain; lymph node follicle | lymph node follicle; capsule of lymph node; Lymph vasculature; medulla of lymph node; efferent lymphatic vessel; lymph node T cell domain | UBERON:0002007; UBERON:0002194; UBERON:0010417; UBERON:0010748 | UBERON:0010748; UBERON:0002194; UBERON:0004536; UBERON:0002007; UBERON:0010397; UBERON:0010417 |  |  | https://data.sennetconsortium.org/dataset?uuid=4f0d1913fda94d02e82d928951dbcdab |  | sc_proteomics |  | 3158210 | 25 |  |
| SenNet |  |  |  |  | Donor4 | Female | 25 |  |  | 21 | mesenteric lymph node | 3d-nih-f-lymph-node.glb | Donor4_TissueBlock1 | 211.25 | 4 | 6 | medulla of lymph node; capsule of lymph node; lymph node T cell domain; lymph node follicle | lymph node follicle; capsule of lymph node; Lymph vasculature; medulla of lymph node; efferent lymphatic vessel; lymph node T cell domain | UBERON:0002007; UBERON:0002194; UBERON:0010417; UBERON:0010748 | UBERON:0010748; UBERON:0002194; UBERON:0004536; UBERON:0002007; UBERON:0010397; UBERON:0010417 |  |  | https://data.sennetconsortium.org/dataset?uuid=231a3d0cc7fb7506194109b68caa0b6a |  | sc_proteomics |  | 1826800 | 25 |  |
| HuBMAP |  |  |  |  |  | Male | 37 |  | White | 29.3 | small intestine | 3d-vh-m-small-intestine.glb |  | 1800 | 1 | 1 | duodenum | descending part of duodenum | UBERON:0002114 | FMA:14928 |  |  | https://portal.hubmapconsortium.org/browse/dataset/266d58d22549461cd454c32084b9f7fe |  | celltypist |  | 7479 | 82 |  |
| HuBMAP |  |  |  |  |  | Male | 37 |  | White | 29.3 | small intestine | 3d-vh-m-small-intestine.glb |  | 1800 | 1 | 1 | duodenum | descending part of duodenum | UBERON:0002114 | FMA:14928 |  |  | https://portal.hubmapconsortium.org/browse/dataset/266d58d22549461cd454c32084b9f7fe |  | popv |  | 7479 | 82 |  |
| HuBMAP |  |  |  |  |  | Male | 37 |  | White | 29.3 | small intestine | 3d-vh-m-small-intestine.glb |  | 1800 | 1 | 1 | duodenum | descending part of duodenum | UBERON:0002114 | FMA:14928 |  |  | https://portal.hubmapconsortium.org/browse/dataset/266d58d22549461cd454c32084b9f7fe |  | pan-human-azimuth |  | 7479 | 82 |  |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="table-s2"></a>Table S2 (table-s2)

Anatomical Structures in HRA, their volume, and predicted CT populations

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S2
#+ description: Anatomical Structures in HRA, their volume, and predicted CT populations

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?organ ?organ_id ?as_label ?as_volume
	?rui_location_one_as_count ?rui_location_count ?rui_locations_with_ct ?rui_locations_no_ct
	?ct_not_in_hra ?ct_in_hra ?ct_from_hra_only ?experimental_ct_count ?ct_labels_from_experimental_data ?predicted_cells_per_ct
FROM HRApop:
FROM HRA:
WHERE {
  {
    SELECT ?organ ?as_label (AVG(?as_volume) as ?as_volume)
    WHERE {
      ?rui_location a ccf:SpatialEntity .
      ?rui_location ccf:has_collision_summary [
          ccf:has_collision_item [
            ccf:as_id ?as_id ;
            ccf:as_label ?as_label ;
            ccf:as_volume ?as_volume ;
            ccf:has_reference_organ ?ref_organ ;
          ]
      ] .
      BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
    }
    GROUP BY ?organ ?as_label
  }

  {
    SELECT ?organ ?organ_id
    WHERE {
      ?ref_organ ccf:representation_of ?organ_iri .

      BIND (REPLACE(REPLACE(STR(?organ_iri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organ_id)
      BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
    }
  }
  
  {
    SELECT ?organ ?as_label
    	(SUM(IF(?rui_location_collision_count = 1,1,0)) as ?rui_location_one_as_count)
    	(COUNT(DISTINCT(?rui_location)) as ?rui_location_count)
    	(SUM(IF(?rui_location_ct_count > 0,1,0)) as ?rui_locations_with_ct)
    	(SUM(IF(?rui_location_ct_count = 0,1,0)) as ?rui_locations_no_ct)
    WHERE {
      ?rui_location a ccf:SpatialEntity .
      ?rui_location ccf:has_collision_summary [
          ccf:has_collision_item [
            ccf:as_label ?as_label ;
            ccf:has_reference_organ ?ref_organ ;
          ]
      ] .

      { # Subquery from https://triplydb.com/bherr/-/queries/rui-location-counts
        SELECT ?rui_location 
            (COALESCE(?rui_location_dataset_count,0) as ?rui_location_dataset_count)
            (COALESCE(?rui_location_collision_count,0) as ?rui_location_collision_count)
            (COALESCE(?rui_location_ct_count, 0) as ?rui_location_ct_count)
            (COALESCE(?rui_location_hra_ct_count,0) as ?rui_location_hra_ct_count)
        WHERE {
          # Select all rui locations
          ?rui_location a ccf:SpatialEntity .
          ?sample ccf:has_registration_location ?rui_location .

          OPTIONAL
          { # Get number of collisions per rui location
            SELECT ?rui_location (COUNT(DISTINCT(?as_label)) as ?rui_location_collision_count)
            WHERE {
              ?rui_location a ccf:SpatialEntity .
              ?rui_location ccf:has_collision_summary [
                  ccf:has_collision_item [
                    ccf:as_label ?as_label ;
                    ccf:as_volume ?as_volume ;
                    ccf:has_reference_organ ?ref_organ ;
                  ]
              ] .
            }
            GROUP BY ?rui_location
          }
          OPTIONAL
          { # Get number of cell types and hra cell types per rui location
            SELECT ?rui_location (COUNT(DISTINCT(?cell_label)) as ?rui_location_ct_count) (COUNT(DISTINCT(?hra_ct_id)) as ?rui_location_hra_ct_count)
            WHERE {
              ?dataset a ccf:Dataset .
              ?dataset ccf:has_cell_summary [
                ccf:cell_annotation_method ?tool ;
                ccf:modality ?modality ;
                ccf:has_cell_summary_row [
                  ccf:cell_id ?cell_id ;
                  ccf:cell_label ?cell_label ;
                  ccf:cell_count ?cell_count ;
                ]
              ] .

              {
                ?sample ccf:has_registration_location ?rui_location .
                ?sample ccf:generates_dataset ?dataset .
              } UNION {
                ?block ccf:subdivided_into_sections ?sample .
                ?block ccf:has_registration_location ?rui_location .
                ?sample ccf:generates_dataset ?dataset .
              }

              OPTIONAL {
                ?hra_ct_id rdfs:label ?hra_ct_label .
                FILTER (?hra_ct_id = ?cell_id)
                # FILTER (?hra_ct_id = ?cell_id || ?hra_ct_label = ?cell_label)
              }
            }
            GROUP BY ?rui_location
          }
          OPTIONAL
          { # Get number of datasets associated with a RUI location
            SELECT ?rui_location (COUNT(DISTINCT(?dataset)) as ?rui_location_dataset_count)
            WHERE {
              ?dataset a ccf:Dataset .

              {
                ?sample ccf:has_registration_location ?rui_location .
                ?sample ccf:generates_dataset ?dataset .
              } UNION {
                ?block ccf:subdivided_into_sections ?sample .
                ?block ccf:has_registration_location ?rui_location .
                ?sample ccf:generates_dataset ?dataset .
              }
            }
            GROUP BY ?rui_location
          }
        }
        # GROUP BY ?rui_location
      }
      BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
    }
    GROUP BY ?organ ?as_label
  }
  
  { # Subquery from https://triplydb.com/bherr/-/queries/as-ct-counts
    SELECT ?organ ?as_label
        (COUNT(DISTINCT(?cell_id)) - COUNT(DISTINCT(?hra_ct_id)) as ?ct_not_in_hra)
        (COUNT(DISTINCT(?hra_ct_id)) as ?ct_in_hra)
        (COUNT(DISTINCT(?hra_exclusive_ct_id)) as ?ct_from_hra_only)
        (COUNT(DISTINCT(?cell_id)) as ?experimental_ct_count)
        (GROUP_CONCAT(DISTINCT(?cell_label); separator="; ") as ?ct_labels_from_experimental_data)
        (AVG(?cell_count) as ?predicted_cells_per_ct)
    WHERE {
      ?rui_location a ccf:SpatialEntity .
      ?dataset a ccf:Dataset .

      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?rui_location ccf:has_collision_summary [
          ccf:has_collision_item [
            ccf:as_id ?as_id ;
            ccf:as_label ?as_label ;
            ccf:has_reference_organ ?ref_organ ;
          ]
      ] .

      ?dataset ccf:has_cell_summary [
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
        ccf:has_cell_summary_row [
          ccf:cell_id ?cell_id ;
          ccf:cell_label ?cell_label ;
          ccf:cell_count ?cell_count ;
        ]
      ] .

      OPTIONAL {
        ?hra_ct_id rdfs:label ?hra_ct_label .
        FILTER (?hra_ct_id = ?cell_id)
        # FILTER (?hra_ct_id = ?cell_id || ?hra_ct_label = ?cell_label)
      }

      OPTIONAL {
        ?hra_exclusive_ct_id ccf:ccf_located_in ?as_id .
        FILTER (?hra_exclusive_ct_id != ?cell_id)
        # FILTER (?hra_ct_id = ?cell_id || ?hra_ct_label = ?cell_label)
      }
      BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
    }
    GROUP BY ?organ ?as_label
    ORDER BY ?organ ?as_label ?cell_label
  }
}
ORDER BY ?organ ?as_label

```

([View Source](../../queries/atlas/table-s2.rq))
</details>

#### Results ([View CSV File](reports/atlas/table-s2.csv))

| organ | organ_id | as_label | as_volume | rui_location_one_as_count | rui_location_count | rui_locations_with_ct | rui_locations_no_ct | ct_not_in_hra | ct_in_hra | ct_from_hra_only | experimental_ct_count | ct_labels_from_experimental_data | predicted_cells_per_ct |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| VHFHeart | UBERON:0000948 | Posteromedial head of posterior papillary muscle of left ventricle | 4401.498768462402 | 0 | 1 | 36 | 0 | 10 | 76 | 0 | 86 | T/NK_cycling; B; cDC1; CD8+T_cytox; CD4+T_reg; Treg cell; Mammillary body neuron; MAIT-like; Ganglion cell; CD4+T_Th2; Capillary EC; EC3_cap; EC1_cap; Capillary Endothelial; CD8+T_trans; CD8+T_te; EC4_immune; Endothelial���mesenchymal transition EC; Endothelial; EC2_cap; Arterial EC; Arterial Endothelial; EC5_art; Lymphatic Endothelial; EC8_ln; Lymphatic EC; Fibroblast; FB3; PCOLCE2 fibroblast; FB4_activated; FB5; SCN7A fibroblast; FB1; ILC; Macrophage; LYVE1+TIMD4+MP; LYVE1 macrophage; LYVE1+IGF1+MP; DIAPH3+ macrophage; Mast; Mast cell; CD16 monocyte; CD4+T_naive; Naive CD4 T cell; Neut; Neutrophil; Pericyte; PC1_vent; Plasma cell; B_plasma; SMC1_basic; Vascular smooth muscle cell; EC6_ven; Venous EC; Myofibroblast; Adip2; Adipocyte; Adip1; Endocardial; EC7_endocardial; Endocardial cell; cDC2; CD4+T_Tfh; CD8+T_em; Monocyte/cDC; Monocyte/DC; CD14 monocyte; LYVE1+MP_cycling; KLRB1 cytotoxic CD4 T; Double negative T cell; HSC; Platelet; MPP; CXCL14 inhibitory neuron; Amacrine cell; Memory T cell; Horizontal cell; GZMB CD8 T cell; KLRB1 CD8 T cell; DC; Fetal HBG+ erythrocyte; Memory B cell; Naive B cell; NK; pDC; Smooth Muscle; T; Mesothelial; Tfh cell; Neuronal; Venous Endothelial; Glial cell of intestine; Cycling T/NK cell; SAN_P_cell; NK_CD56hi; CD56 NK cell; Memory CD4 T cell; D1 medium spiny neuron; Naive T cell; Cone-OFF-bipolar cell; Microglia; Aerocyte; Astrocyte; SV2C inhibitory neuron; abT (entry) cell; gdT; MAIT cell; CD4+T_Th1; CD4+T_Th17; CD16+Mo; Alveolar macrophage; Ventricular Cardiomycoyte; Atrial Cardiomyocyte; vCM2; NC1_glial; aCM5; CD4+T_act; CD14+Mo; M1 macrophage; GZMK CD8 T cell; Late hemoglobin+ erythroblast; NK_CD16hi; Atrial cardiomyocyte; CD16 NK cell; Ventricular cardiomyocyte; vCM3_stressed; vCM1; NC2_glial_NGF+; aCM2 | 244.28947368421052631579 |
| VHFHeart | UBERON:0000948 | heart left ventricle | 229312.7801882646 | 102 | 7 | 138 | 0 | 13 | 82 | 23 | 95 | Metallothionein+ fibroblast; PCOLCE2 fibroblast; FB5; Fibroblast; FB1; SCN7A fibroblast; FB2; CFD+MGP+ fibroblast; FB4_activated; FB3; POSTN fibroblast; ILC; Macrophage; LYVE1 macrophage; LYVE1+TIMD4+MP; LYVE1+IGF1+MP; DIAPH3+ macrophage; Mast; Mast cell; CD16 monocyte; EC10_CMC-like; Endothelial���mesenchymal transition EC; EC4_immune; Endothelial; CD8+T_te; Arterial Endothelial; EC5_art; Arterial EC; Lymphatic Endothelial; EC8_ln; Lymphatic EC; B; cDC1; MAIT-like; Ganglion cell; CD4+T_Th2; T/NK_cycling; Endocardial; EC7_endocardial; Endocardial cell; CD8+T_em; Monocyte/cDC; Monocyte/DC; HSC; VIP inhibitory neuron; Platelet; MPP; CD8+T_trans; Ventricular cardiomyocyte; T; Mesothelial; Meso; GATA4+ mesothelial cell; CRABP1+ mesothelial cell; NK; Tissue-resident NK cell; pDC; Smooth Muscle; CD8+T_cytox; Treg cell; CD4+T_reg; Mammillary body neuron; Capillary Endothelial; EC3_cap; Capillary EC; EC1_cap; EC2_cap; AVN_P_cell; Hofbauer cell; KLRB1 cytotoxic CD4 T; GZMK cytotoxic CD4 T cell; Double negative T cell; CD14 monocyte; LYVE1+MP_cycling; Amacrine cell; Glial cell of intestine; Cycling T/NK cell; SAN_P_cell; NK_CD56hi; CD56 NK cell; gdT; MAIT cell; Purkinje_cell; CD16+Mo; Alveolar macrophage; Memory CD4 T cell; CD4+T_naive; Naive CD4 T cell; Neutrophil; Neut; Pericyte; PC3_str; PC1_vent; PC4_CMC-like; PC2_atria; Plasma cell; B_plasma; Cone-OFF-bipolar cell; Microglia; Aerocyte; Astrocyte; CXCL14 inhibitory neuron; L5/6 excitatory neuron; SST inhibitory neuron; KLRB1 CD8 T cell; GZMB CD8 T cell; DC; mregDC; Memory B cell; Naive B cell; Fetal HBG+ erythrocyte; Myofibroblast; cDC2; CD4+T_Tfh; Adipocyte; Adip3; Adip2; Adip1; Neuronal; Tfh cell; Venous Endothelial; Germinal center B cell; SV2C inhibitory neuron; abT (entry) cell; Eccentric medium spiny neuron; AVN_bundle_cell; Rod-bipolar cell; SMC1_basic; Vascular smooth muscle cell; EC6_ven; Venous EC; Horizontal cell; NK_CD16hi; CD16 NK cell; M1 macrophage; Ventricular Cardiomycoyte; vCM1; vCM4; vCM2; vCM3_stressed; NC1_glial; NC2_glial_NGF+; CD4+T_act; Atrial cardiomyocyte; Atrial Cardiomyocyte; aCM1; aCM2; aCM4; aCM5; aCM3; CD14+Mo; GZMK CD8 T cell; Late hemoglobin+ erythroblast; Memory T cell; CD4+T_Th1; CD4+T_Th17; D1 medium spiny neuron; Naive T cell | 293.50362366425885021790 |
| VHFHeart | UBERON:0000948 | heart right ventricle | 73521.72645229718 | 49 | 2 | 85 | 0 | 11 | 78 | 22 | 89 | Treg cell; CD4+T_reg; Mammillary body neuron; MAIT-like; Ganglion cell; CD4+T_Th2; T/NK_cycling; B; cDC1; CD8+T_cytox; ILC; SMC1_basic; Vascular smooth muscle cell; EC6_ven; Venous EC; Myofibroblast; CD4+T_Tfh; Adipocyte; Adip1; Adip2; Neutrophil; Neut; Pericyte; PC3_str; PC2_atria; PC1_vent; Plasma cell; B_plasma; Endocardial; EC7_endocardial; Endocardial cell; Monocyte/cDC; Monocyte/DC; Amacrine cell; Horizontal cell; KLRB1 CD8 T cell; GZMB CD8 T cell; Memory T cell; DC; Fetal HBG+ erythrocyte; LYVE1+MP_cycling; AVN_P_cell; KLRB1 cytotoxic CD4 T; Double negative T cell; HSC; Platelet; MPP; CXCL14 inhibitory neuron; Naive B cell; NK; Tissue-resident NK cell; Aerocyte; Astrocyte; SV2C inhibitory neuron; Macrophage; LYVE1 macrophage; MoMP; LYVE1+TIMD4+MP; LYVE1+IGF1+MP; DIAPH3+ macrophage; Mast; Mast cell; CD16 monocyte; CD4+T_naive; Naive CD4 T cell; Fibroblast; FB3; PCOLCE2 fibroblast; FB1; Metallothionein+ fibroblast; FB4_activated; FB5; SCN7A fibroblast; EC8_ln; Lymphatic Endothelial; Lymphatic EC; CD8+T_em; Atrial cardiomyocyte; Atrial Cardiomyocyte; aCM1; aCM5; aCM2; CD4+T_act; NK_CD16hi; CD16 NK cell; CD14+Mo; M1 macrophage; GZMK CD8 T cell; Late hemoglobin+ erythroblast; Ventricular cardiomyocyte; Ventricular Cardiomycoyte; vCM4; vCM1; vCM2; vCM3_stressed; NC1_glial; NC2_glial_NGF+; Rod-bipolar cell; Glial cell of intestine; Cycling T/NK cell; SAN_P_cell; NK_CD56hi; CD56 NK cell; gdT; MAIT cell; CD4+T_Th1; CD4+T_Th17; CD16+Mo; Alveolar macrophage; Memory CD4 T cell; Skeletal muscle cell; D1 medium spiny neuron; Capillary EC; EC1_cap; EC2_cap; Capillary Endothelial; EC3_cap; CD8+T_trans; CD8+T_te; EC10_CMC-like; Endothelial���mesenchymal transition EC; EC4_immune; Endothelial; Arterial Endothelial; EC5_art; Arterial EC; Mesothelial; Meso; CRABP1+ mesothelial cell; Tfh cell; Neuronal; Venous Endothelial; abT (entry) cell; Cone-OFF-bipolar cell; Microglia; cDC2; Naive T cell; CD14 monocyte; T; Memory B cell; Smooth Muscle; pDC | 232.89498831726666013739 |
| VHFHeart | UBERON:0000948 | interventricular septum | 65894.53465930313 | 0 | 1 | 36 | 0 | 10 | 76 | 19 | 86 | CD8+T_trans; CD8+T_te; EC4_immune; Endothelial���mesenchymal transition EC; Endothelial; Plasma cell; B_plasma; SMC1_basic; Vascular smooth muscle cell; Myofibroblast; cDC2; Cone-OFF-bipolar cell; Microglia; NK_CD56hi; CD56 NK cell; gdT; MAIT cell; CD4+T_Th1; CD4+T_naive; Naive CD4 T cell; Pericyte; PC1_vent; Neut; Neutrophil; EC6_ven; Venous EC; CD4+T_Th2; Capillary Endothelial; EC3_cap; Capillary EC; EC1_cap; EC2_cap; Aerocyte; Astrocyte; SV2C inhibitory neuron; Fibroblast; FB3; PCOLCE2 fibroblast; FB4_activated; FB5; SCN7A fibroblast; FB1; ILC; Macrophage; LYVE1+TIMD4+MP; LYVE1 macrophage; LYVE1+IGF1+MP; DIAPH3+ macrophage; Mast; Mast cell; CD16 monocyte; pDC; Smooth Muscle; T; Mesothelial; Tfh cell; Neuronal; KLRB1 cytotoxic CD4 T; Double negative T cell; HSC; Platelet; MPP; CXCL14 inhibitory neuron; Amacrine cell; Memory T cell; Horizontal cell; GZMB CD8 T cell; KLRB1 CD8 T cell; DC; Fetal HBG+ erythrocyte; Memory B cell; Naive B cell; NK; Venous Endothelial; Glial cell of intestine; Mammillary body neuron; MAIT-like; Ganglion cell; Monocyte/cDC; Monocyte/DC; CD8+T_em; CD4+T_Tfh; Adipocyte; Adip1; Adip2; Cycling T/NK cell; SAN_P_cell; CD4+T_Th17; CD16+Mo; T/NK_cycling; B; cDC1; CD8+T_cytox; CD4+T_reg; Treg cell; Alveolar macrophage; Memory CD4 T cell; D1 medium spiny neuron; Naive T cell; CD14 monocyte; LYVE1+MP_cycling; CD4+T_act; Arterial EC; EC5_art; Arterial Endothelial; EC8_ln; Lymphatic Endothelial; Lymphatic EC; Endocardial; EC7_endocardial; Endocardial cell; abT (entry) cell; CD16 NK cell; NK_CD16hi; Ventricular Cardiomycoyte; vCM2; vCM3_stressed; vCM1; Atrial Cardiomyocyte; aCM5; Atrial cardiomyocyte; aCM2; NC1_glial; NC2_glial_NGF+; CD14+Mo; Ventricular cardiomyocyte; Late hemoglobin+ erythroblast; GZMK CD8 T cell; M1 macrophage | 242.00282240555796786800 |
| VHFHeart | UBERON:0000948 | left cardiac atrium | 21499.01206134312 | 49 | 1 | 49 | 0 | 10 | 66 | 22 | 76 | Arterial Endothelial; EC5_art; Arterial EC; Lymphatic EC; Lymphatic Endothelial; EC8_ln; MAIT-like; Ganglion cell; CD4+T_Th2; Capillary Endothelial; EC2_cap; Capillary EC; EC1_cap; EC3_cap; CD8+T_trans; CD8+T_te; EC10_CMC-like; Endothelial���mesenchymal transition EC; Endothelial; EC4_immune; cDC1; CD8+T_cytox; Treg cell; CD4+T_reg; Mammillary body neuron; CD14 monocyte; LYVE1+MP_cycling; KLRB1 cytotoxic CD4 T; G2/M phase myeloid cell; Amacrine cell; Memory T cell; Horizontal cell; KLRB1 CD8 T cell; GZMB CD8 T cell; DC; mregDC; Fetal HBG+ erythrocyte; Memory B cell; CD16 monocyte; CD4+T_naive; Naive CD4 T cell; Neut; Neutrophil; Pericyte; PC1_vent; PC2_atria; Plasma cell; B_plasma; NK; Tissue-resident NK cell; pDC; Smooth Muscle; T; CRABP1+ mesothelial cell; Mesothelial; Meso; Neuronal; Venous Endothelial; Glial cell of intestine; Cycling T/NK cell; Naive B cell; SMC1_basic; Vascular smooth muscle cell; SMC2_art; EC6_ven; Venous EC; Myofibroblast; cDC2; CD4+T_Tfh; Adipocyte; Adip1; Adip2; NK_CD56hi; CD56 NK cell; Purkinje_cell; CD4+T_Th1; CD16+Mo; abT (entry) cell; Atrial Cardiomyocyte; aCM4; Atrial cardiomyocyte; aCM1; aCM3; CD14+Mo; NC1_glial; vCM4; Ventricular Cardiomycoyte; vCM1; vCM2; M1 macrophage; Ventricular cardiomyocyte; Late hemoglobin+ erythroblast; CD16 NK cell; NK_CD16hi; GZMK CD8 T cell; Astrocyte; Fibroblast; FB1; PCOLCE2 fibroblast; FB2; FB3; Metallothionein+ fibroblast; SCN7A fibroblast; CXCL14 inhibitory neuron; PLCH1 L4/5 excitatory neuron; Mast cell; Mast; CD4+T_act; Endocardial; EC7_endocardial; Endocardial cell; CD8+T_em; Monocyte/cDC; Monocyte/DC; Naive T cell; Microglia; D1 medium spiny neuron; Alveolar macrophage; Memory CD4 T cell; ILC; Macrophage; LYVE1+IGF1+MP; LYVE1 macrophage; LYVE1+TIMD4+MP; T/NK_cycling; B | 134.41628742514970059880 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="table-s3"></a>Table S3 (table-s3)

(Bulk) Anatomical Structures in HRA, cell types, and average/sum counts of CTs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S3
#+ description: (Bulk) Anatomical Structures in HRA, cell types, and average/sum counts of CTs

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?organ ?as_label ?cell_label
	(SAMPLE(?cell_id) as ?cell_id)
	(AVG(?cell_count) as ?mean_cell_count)
	(SUM(?cell_count) as ?cell_count)
FROM HRApop:
WHERE {
	?dataset a ccf:Dataset .
	?dataset ccf:has_cell_summary [
		ccf:cell_annotation_method ?tool ;
		ccf:modality ?modality ;
		ccf:has_cell_summary_row [
			ccf:cell_id ?cell_id ;
			ccf:cell_label ?cell_label	;
			ccf:cell_count ?cell_count ;
		] ;
	] .

	{
		?sample ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	} UNION {
		?block ccf:subdivided_into_sections ?sample .
		?block ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	}

	?rui_location a ccf:SpatialEntity .
	?rui_location ccf:has_collision_summary [
		ccf:has_collision_item [
			ccf:as_id ?as_id ;
			ccf:as_label ?as_label ;
			ccf:as_volume ?as_volume ;
			ccf:has_reference_organ ?ref_organ ;
		]
	]
	BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
	FILTER (?modality = 'sc_transcriptomics')
}
GROUP BY ?organ ?as_label ?cell_label
ORDER BY ?organ ?as_label ?cell_label

```

([View Source](../../queries/atlas/table-s3.rq))
</details>

#### Results ([View CSV File](reports/atlas/table-s3.csv))

| organ | as_label | cell_label | cell_id | mean_cell_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip1 | http://purl.obolibrary.org/obo/CL_0000136 | 33.25 | 798 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip2 | http://purl.obolibrary.org/obo/CL_0000136 | 20 | 240 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adipocyte | http://purl.obolibrary.org/obo/CL_0000136 | 20.16666666666666666667 | 1452 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Aerocyte | http://purl.obolibrary.org/obo/CL_4028003 | 1 | 6 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Alveolar macrophage | http://purl.obolibrary.org/obo/CL_0000583 | 1 | 6 |
| ... | ... | ... | ... | ... | ... |


### <a id="table-s4"></a>Table S4 (table-s4)

(Spatial) Anatomical Structures in HRA, cell types, and average/sum counts of CTs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S4
#+ description: (Spatial) Anatomical Structures in HRA, cell types, and average/sum counts of CTs

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?organ ?as_label ?cell_label
	(SAMPLE(?cell_id) as ?cell_id)
	(AVG(?cell_count) as ?mean_cell_count)
	(SUM(?cell_count) as ?cell_count)
FROM HRApop:
WHERE {
	?dataset a ccf:Dataset .
	?dataset ccf:has_cell_summary [
		ccf:cell_annotation_method ?tool ;
		ccf:modality ?modality ;
		ccf:has_cell_summary_row [
			ccf:cell_id ?cell_id ;
			ccf:cell_label ?cell_label	;
			ccf:cell_count ?cell_count ;
		] ;
	] .

	{
		?sample ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	} UNION {
		?block ccf:subdivided_into_sections ?sample .
		?block ccf:has_registration_location ?rui_location .
		?sample ccf:generates_dataset ?dataset .
	}

	?rui_location a ccf:SpatialEntity .
	?rui_location ccf:has_collision_summary [
		ccf:has_collision_item [
			ccf:as_id ?as_id ;
			ccf:as_label ?as_label ;
			ccf:as_volume ?as_volume ;
			ccf:has_reference_organ ?ref_organ ;
		]
	]
	BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
	FILTER (?modality = 'sc_proteomics')
}
GROUP BY ?organ ?as_label ?cell_label
ORDER BY ?organ ?as_label ?cell_label

```

([View Source](../../queries/atlas/table-s4.rq))
</details>

#### Results ([View CSV File](reports/atlas/table-s4.csv))

| organ | as_label | cell_label | cell_id | mean_cell_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- |
| VHFLargeIntestine | ascending colon | b cell | http://purl.obolibrary.org/obo/CL_0000236 | 208 | 416 |
| VHFLargeIntestine | ascending colon | dendritic cell | http://purl.obolibrary.org/obo/CL_0000451 | 299.5 | 599 |
| VHFLargeIntestine | ascending colon | endothelial cell | http://purl.obolibrary.org/obo/CL_0000115 | 1259 | 2518 |
| VHFLargeIntestine | ascending colon | endothelial cell of lymphatic vessel | http://purl.obolibrary.org/obo/CL_0002138 | 498.5 | 997 |
| VHFLargeIntestine | ascending colon | enterocyte | http://purl.obolibrary.org/obo/CL_0000584 | 2651 | 5302 |
| ... | ... | ... | ... | ... | ... |


### <a id="table-s5"></a>Table S5 (table-s5)

RUI Location - Anatomical Structure intersections

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S5
#+ description: RUI Location - Anatomical Structure intersections

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?rui_location ?organ ?organ_label ?as_label ?as_id ?intersection_volume ?as_volume ?tissue_block_volume ?total_collision_percentage
FROM HRApop:
FROM HRA:
WHERE {
	# Get tissue block volume
	?rui_location a ccf:SpatialEntity ;
		ccf:x_dimension ?rui_x ;
		ccf:y_dimension ?rui_y ;
		ccf:z_dimension ?rui_z .

	BIND(?rui_x * ?rui_y * ?rui_z as ?tissue_block_volume)
	
	?rui_location a ccf:SpatialEntity .
	?rui_location ccf:has_collision_summary [
		ccf:has_collision_item [
			ccf:as_id ?as_id ;
			ccf:as_label ?as_label ;
			ccf:as_volume ?as_volume ;
			ccf:has_reference_organ ?ref_organ ;
			ccf:percentage_of_total ?percentage ;
		]
	] .

	{
		SELECT ?rui_location (SUM(?percentage) as ?total_collision_percentage)
		WHERE {
			?rui_location a ccf:SpatialEntity .
			?rui_location ccf:has_collision_summary [
				ccf:has_collision_item [
					ccf:percentage_of_total ?percentage ;
				]
			] .
		}
		GROUP BY ?rui_location
	}

	# get label for reference organ
	?ref_organ ccf:representation_of ?organId .
	?organId rdfs:label ?organ_label

	BIND (?tissue_block_volume * ?percentage as ?intersection_volume)
	BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.1", "") as ?organ)
}
# ORDER BY ?organ ?rui_location DESC(?as_volume)
ORDER BY DESC(?total_collision_percentage)

```

([View Source](../../queries/atlas/table-s5.rq))
</details>

#### Results ([View CSV File](reports/atlas/table-s5.csv))

| rui_location | organ | organ_label | as_label | as_id | intersection_volume | as_volume | tissue_block_volume | total_collision_percentage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| http://purl.org/ccf/1.5/6f7f3ddd-9889-4bad-8bfc-8340c7b6af8b | VHFLungV1.2 | respiratory system | Right Posterior Basal Bronchopulmonary Segment | http://purl.org/sig/ont/fma/fma7362 | 1000 | 21222.82563556622 | 1000 | 15 |
| http://purl.org/ccf/1.5/74a3fc30-9e4b-44d5-b70e-43b56550aac0 | VHFLeftOvary | left ovary | Left ovary | http://purl.obolibrary.org/obo/UBERON_0002119 | 12.209999999999999 | 1000.789660247758 | 15 | 12.209999999999999 |
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | VHFHeart | heart | heart right ventricle | http://purl.obolibrary.org/obo/UBERON_0002080 | 1017.225 | 73521.72645229718 | 7425 | 8.67 |
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | VHFHeart | heart | heart left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | 3549.1499999999996 | 229312.7801882646 | 7425 | 8.67 |
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | VHFHeart | heart | Posteromedial head of posterior papillary muscle of left ventricle | http://purl.org/sig/ont/fma/fma7267 | 631.125 | 4401.498768462402 | 7425 | 8.67 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-b-mean-expression"></a>Validation of B mean expressions (validation-b-mean-expression)

Atlas Datasets and their cell types and biomarkers. There is one CT-BM expression per row.

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation of B mean expressions
#+ description: Atlas Datasets and their cell types and biomarkers. There is one CT-BM expression per row.

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT
  ?tool
  ?modality
  ?organ_id
  ?organ_label
  ?dataset_id
  ?cell_id
  ?cell_label
  ?gene_label
  ?mean_gene_expression_value
FROM HRApop:
FROM HRA:
WHERE {
  ?dataset_id rdf:type ccf:Dataset ;
    ccf:organ_id ?organ_iri ;
    ccf:has_cell_summary [
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_iri ;
      ccf:cell_label ?cell_label ;
      ccf:gene_expr [
        ccf:gene_label ?gene_label ;
        ccf:mean_gene_expr_value ?mean_gene_expression_value ;
      ]
    ]
  ] .

  ?organ_iri rdfs:label ?organ_label .
  BIND(REPLACE(REPLACE(STR(?organ_iri), STR(UBERON:), 'UBERON:'), STR(FMA:), 'FMA:') as ?organ_id)
  BIND(REPLACE(REPLACE(STR(?cell_iri), STR(CL:), 'CL:'), STR(ASCTB-TEMP:), 'ASCTB-TEMP:') as ?cell_id)
}

```

([View Source](../../queries/atlas/validation-b-mean-expression.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-b-mean-expression.csv))

| tool | modality | organ_id | organ_label | dataset_id | cell_id | cell_label | gene_label | mean_gene_expression_value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |



### <a id="validation-v1"></a>Validation V1 (validation-v1)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V1
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId ?similarity

WITH {
  SELECT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId
  WHERE {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?dataset ccf:has_cell_summary [
        ccf:sex ?sex ;
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
      ] .

      [] a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?refOrgan .
    }

    GRAPH HRA: {
      ?refOrgan ccf:representation_of ?organIri .
      ?organIri rdfs:label ?organ .

      BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
    }
  }
} AS %data

WITH {
  SELECT ?sex ?rui_location ?dataset ?tool ?similarity
  WHERE {
    GRAPH HRApop: {
      ?dataset a ccf:Dataset .
      [] ccf:has_registration_location ?rui_location .
    }

    GRAPH hra-pop:similarities {
      {
        [] ccf:cell_source_a_sex ?sex ;
          ccf:cell_source_b_sex ?sex ; 
          ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?tool ;
          ccf:cell_source_a ?rui_location ;
          ccf:cell_source_b ?dataset ;
          ccf:similarity ?similarity .
      }
      UNION
      {
        [] ccf:cell_source_a_sex ?sex ;
          ccf:cell_source_b_sex ?sex ;
          ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?tool ;
          ccf:cell_source_a ?dataset ;
          ccf:cell_source_b ?rui_location ;
          ccf:similarity ?similarity .
      }
    }
  }
} AS %sims

WHERE {
  INCLUDE %data
  INCLUDE %sims
}

```

([View Source](../../queries/atlas/validation-v1.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v1.csv))

| sex | sample | rui_location | dataset | tool | modality | organ | organId | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | https://entity.api.hubmapconsortium.org/entities/9b742d4829e0a39e5cb3215371702cb6 | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | https://entity.api.hubmapconsortium.org/entities/254801a318687281ba3e473569d89a45 | azimuth | sc_transcriptomics | left kidney | UBERON:0004538 | 0.8360686530421331 |
| Female | https://entity.api.hubmapconsortium.org/entities/9b742d4829e0a39e5cb3215371702cb6 | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | https://entity.api.hubmapconsortium.org/entities/254801a318687281ba3e473569d89a45 | pan-human-azimuth | sc_transcriptomics | left kidney | UBERON:0004538 | 0.8818869621577088 |
| Female | https://entity.api.hubmapconsortium.org/entities/07ab65c10f6e94154267acfdb2f983f3 | http://purl.org/ccf/1.5/8f99a469-7d51-46dc-919d-2e002eeae868 | https://entity.api.hubmapconsortium.org/entities/1b5c7d45cb0e475b73f9280d092d34a5 | azimuth | sc_transcriptomics | left kidney | UBERON:0004538 | 0.7920346538417296 |
| Female | https://entity.api.hubmapconsortium.org/entities/07ab65c10f6e94154267acfdb2f983f3 | http://purl.org/ccf/1.5/8f99a469-7d51-46dc-919d-2e002eeae868 | https://entity.api.hubmapconsortium.org/entities/1b5c7d45cb0e475b73f9280d092d34a5 | pan-human-azimuth | sc_transcriptomics | left kidney | UBERON:0004538 | 0.9245033055149469 |
| Female | https://entity.api.hubmapconsortium.org/entities/b3d2d191603dfd4586181d62ad151b63 | http://purl.org/ccf/1.5/04baf323-eda0-4f72-bea1-aa943aa70894 | https://entity.api.hubmapconsortium.org/entities/26e1f2991c6f67fa10e9670f1bc0da6a | celltypist | sc_transcriptomics | heart | UBERON:0000948 | 0.9631892469699562 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p1"></a>Validation V2P1 (validation-v2p1)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V2P1
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>


SELECT ?sex ?sample ?dataset ?tool ?modality ?organ ?organId ?as_label ?as ?as_tool ?similarity ?as_in_collisions
FROM hra-pop:similarities
FROM HRApop:
FROM HRA:
WHERE {
  {
    ?dataset a ccf:Dataset .
    [] ccf:modality ?modality ;
        ccf:cell_source_a_sex ?sex ;
        ccf:cell_source_b_sex ?sex ;
        ccf:cell_source_a_tool ?tool ;
        ccf:cell_source_b_tool ?as_tool ;
        ccf:cell_source_a ?dataset ;
        ccf:cell_source_b ?as ;
        ccf:similarity ?similarity .
  } UNION {
    ?dataset a ccf:Dataset .
    [] ccf:modality ?modality ;
        ccf:cell_source_a_sex ?sex ;
        ccf:cell_source_b_sex ?sex ;
        ccf:cell_source_a_tool ?as_tool ;
        ccf:cell_source_b_tool ?tool ;
        ccf:cell_source_a ?as ;
        ccf:cell_source_b ?dataset ;
        ccf:similarity ?similarity .
  }

  FILTER (
    STRSTARTS(STR(?as), 'http://purl.obolibrary.org/obo/') ||
    STRSTARTS(STR(?as), 'http://purl.org/sig/ont/fma/fma')
  )

  ?as ccf:ccf_pref_label ?as_label .

  {
    ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  ?dataset ccf:has_cell_summary [
    ccf:sex ?sex ;
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
  ] .

  [] a ccf:SpatialPlacement ;
    ccf:placement_for ?rui_location ;
    ccf:placement_relative_to ?refOrgan .

  ?refOrgan ccf:representation_of ?organIri .
  ?organIri rdfs:label ?organ .

  BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)

  BIND (EXISTS {
    ?rui_location ccf:has_collision_summary [
      ccf:has_collision_item [
        ccf:as_id ?as
      ]
    ]
  } as ?as_in_collisions)
}
ORDER BY ?sample

```

([View Source](../../queries/atlas/validation-v2p1.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p1.csv))

| sex | sample | dataset | tool | modality | organ | organId | as_label | as | as_tool | similarity | as_in_collisions |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Male | http://purl.org/ccf/1.5/fb73e18b-9ddc-4fdf-b9a6-4b7735e5017b#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/0f1ddcb41a484adbda759c0c79097a02#D265-LLL-7A7-12 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | ascending colon | http://purl.obolibrary.org/obo/UBERON_0001156 | sc_proteomics | 0.24700065998171372 | false |
| Male | http://purl.org/ccf/1.5/fb73e18b-9ddc-4fdf-b9a6-4b7735e5017b#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/0f1ddcb41a484adbda759c0c79097a02#D265-LLL-7A7-12 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | transverse colon | http://purl.obolibrary.org/obo/UBERON_0001157 | sc_proteomics | 0.3323219693011046 | false |
| Male | http://purl.org/ccf/1.5/fb73e18b-9ddc-4fdf-b9a6-4b7735e5017b#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/0f1ddcb41a484adbda759c0c79097a02#D265-LLL-7A7-12 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | descending colon | http://purl.obolibrary.org/obo/UBERON_0001158 | sc_proteomics | 0.31867686097561077 | false |
| Male | http://purl.org/ccf/1.5/fb73e18b-9ddc-4fdf-b9a6-4b7735e5017b#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/0f1ddcb41a484adbda759c0c79097a02#D265-LLL-7A7-12 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | skin | http://purl.obolibrary.org/obo/UBERON_0002097 | sc_proteomics | 0.516068438275515 | false |
| Male | http://purl.org/ccf/1.5/fb73e18b-9ddc-4fdf-b9a6-4b7735e5017b#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/0f1ddcb41a484adbda759c0c79097a02#D265-LLL-7A7-12 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | skin of body | http://purl.obolibrary.org/obo/UBERON_0002097 | sc_proteomics | 0.516068438275515 | false |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p2-extra1"></a>Validation V2P2 (Extra 1) (validation-v2p2-extra1)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V2P2 (Extra 1)
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?as ?tool ?modality (?shared_as_cell_types / ?total_as_cell_types as ?pct_hra_ct_overlap)
WHERE {
  {
    SELECT ?sex ?as ?tool ?modality (COUNT(DISTINCT(?cell_label)) as ?total_as_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?as ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?cell_label ;
          ]
        ] .

        FILTER (
          STRSTARTS(STR(?as), 'http://purl.obolibrary.org/obo/') ||
          STRSTARTS(STR(?as), 'http://purl.org/sig/ont/fma/fma')
        )
      }

      GRAPH HRA: {
        ?as ccf:ccf_asctb_type ?type .
        FILTER (?type = 'AS')
      }
    }
    GROUP BY ?sex ?as ?tool ?modality
  }

  {
    SELECT ?sex ?as ?tool ?modality (COUNT(DISTINCT(?cell_label)) as ?shared_as_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?as ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_id ?cell_id ;
            ccf:cell_label ?cell_label ;
          ]
        ] .

        FILTER (
          STRSTARTS(STR(?as), 'http://purl.obolibrary.org/obo/') ||
          STRSTARTS(STR(?as), 'http://purl.org/sig/ont/fma/fma')
        )
      }

      GRAPH HRA: {
        ?as ccf:ccf_asctb_type ?type .
        FILTER (?type = 'AS')
      }

      FILTER(EXISTS {
        GRAPH HRA: {
          ?cell_id ccf:ccf_asctb_type [] .
        }
      } || EXISTS {
        GRAPH HRA: {
          [] ccf:ccf_asctb_type [] ;
            rdfs:label ?cell_label .
        }
      })
    }
    GROUP BY ?sex ?dataset ?tool ?modality ?as
  }
}
ORDER BY ?sex ?as ?modality ?tool

```

([View Source](../../queries/atlas/validation-v2p2-extra1.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p2-extra1.csv))

| sex | as | tool | modality | pct_hra_ct_overlap |
| :--- | :--- | :--- | :--- | :--- |
| Female | http://purl.obolibrary.org/obo/UBERON_0001052 | celltypist | sc_transcriptomics | 0.58666666666666666667 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001052 | pan-human-azimuth | sc_transcriptomics | 0.79166666666666666667 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001052 | popv | sc_transcriptomics | 0.8125 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001069 | azimuth | sc_transcriptomics | 1 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001069 | celltypist | sc_transcriptomics | 1 |
| ... | ... | ... | ... | ... |


### <a id="validation-v2p2-extra2"></a>Validation V2P2 (Extra 2) (validation-v2p2-extra2)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V2P2 (Extra 2)
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?sample ?dataset ?tool ?modality ?organ ?organId ?as (?shared_ds_cell_types / ?total_ds_cell_types as ?pct_hra_ct_overlap)
WHERE {
  GRAPH HRApop: {
    {
      ?sample ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:subdivided_into_sections ?sample .
      ?block ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    }

    ?dataset ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
    ] .

    [] a ccf:SpatialPlacement ;
      ccf:placement_for ?rui_location ;
      ccf:placement_relative_to ?refOrgan .
  }

  GRAPH HRA: {
    ?refOrgan ccf:representation_of ?organIri .
    ?organIri rdfs:label ?organ .

    BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
  }

  {
    SELECT ?sex ?dataset (COUNT(DISTINCT(?dataset_cell_label)) as ?total_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?dataset_cell_label ;
          ]
        ] .
      }
    }
    GROUP BY ?sex ?dataset
  }

  {
    SELECT ?sex ?dataset ?as (COUNT(DISTINCT(?cell_label)) as ?shared_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?cell_label ;
          ]
        ] .

        ?as ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?cell_label ;
          ]
        ] .

        FILTER (
          STRSTARTS(STR(?as), 'http://purl.obolibrary.org/obo/') ||
          STRSTARTS(STR(?as), 'http://purl.org/sig/ont/fma/fma')
        )
      }

      GRAPH HRA: {
        ?as ccf:ccf_asctb_type ?type .
        FILTER (?type = 'AS')
      }
    }
    GROUP BY ?sex ?dataset ?as
  }
}

```

([View Source](../../queries/atlas/validation-v2p2-extra2.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p2-extra2.csv))

| sex | sample | dataset | tool | modality | organ | organId | as | pct_hra_ct_overlap |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | https://entity.api.hubmapconsortium.org/entities/ad3e61806f5ba9593787559560c050ea | https://doi.org/10.6084/m9.figshare.29669648.v1#P3-7A | sc_proteomics | sc_proteomics | pancreas | UBERON:0001264 | http://purl.obolibrary.org/obo/UBERON_0002097 | 0.25 |
| Female | https://entity.api.hubmapconsortium.org/entities/ad3e61806f5ba9593787559560c050ea | https://doi.org/10.6084/m9.figshare.29669648.v1#P3-7A | sc_proteomics | sc_proteomics | pancreas | UBERON:0001264 | http://purl.obolibrary.org/obo/UBERON_0001156 | 0.25 |
| Female | https://entity.api.hubmapconsortium.org/entities/ad3e61806f5ba9593787559560c050ea | https://doi.org/10.6084/m9.figshare.29669648.v1#P3-7A | sc_proteomics | sc_proteomics | pancreas | UBERON:0001264 | http://purl.obolibrary.org/obo/UBERON_0001153 | 0.25 |
| Female | https://entity.api.hubmapconsortium.org/entities/ad3e61806f5ba9593787559560c050ea | https://doi.org/10.6084/m9.figshare.29669648.v1#P3-7A | sc_proteomics | sc_proteomics | pancreas | UBERON:0001264 | http://purl.obolibrary.org/obo/UBERON_0001158 | 0.25 |
| Female | https://entity.api.hubmapconsortium.org/entities/ad3e61806f5ba9593787559560c050ea | https://doi.org/10.6084/m9.figshare.29669648.v1#P3-7A | sc_proteomics | sc_proteomics | pancreas | UBERON:0001264 | http://purl.obolibrary.org/obo/UBERON_0001159 | 0.25 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p2-extra3"></a>Validation V2P2 (Extra 3) (validation-v2p2-extra3)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V2P2 (Extra 3)
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?sample ?dataset ?tool ?modality ?organ ?organId ?as (?shared_ds_cell_types / ?total_ds_cell_types as ?pct_hra_ct_overlap)
WHERE {
  GRAPH HRApop: {
    {
      ?sample ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:subdivided_into_sections ?sample .
      ?block ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    }

    ?dataset ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
    ] .

    [] a ccf:SpatialPlacement ;
      ccf:placement_for ?rui_location ;
      ccf:placement_relative_to ?refOrgan .
  }

  GRAPH HRA: {
    ?refOrgan ccf:representation_of ?organIri .
    ?organIri rdfs:label ?organ .

    BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
  }

  {
    SELECT ?sex ?dataset (COUNT(DISTINCT(?dataset_cell_label)) as ?total_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?dataset_cell_label ;
          ]
        ] .
      }
    }
    GROUP BY ?sex ?dataset
  }

  {
    SELECT ?sex ?dataset ?as (COUNT(DISTINCT(?ct_cell_label)) as ?shared_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_id ?cell_id ;
            ccf:cell_label ?cell_label ;
          ]
        ] .

        ?as ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_id ?cell_id ;
            ccf:cell_label ?cell_label ;
          ]
        ] .

        GRAPH HRA: {
          ?cell_id ccf:ccf_asctb_type ?ct_type ;
              rdfs:label ?ct_cell_label .
          FILTER (?ct_type = 'CT')
          #FILTER (?ct_id = ?cell_id || LCASE(?ct_cell_label) = LCASE(?cell_label))
        }

        FILTER (
          STRSTARTS(STR(?as), 'http://purl.obolibrary.org/obo/') ||
          STRSTARTS(STR(?as), 'http://purl.org/sig/ont/fma/fma')
        )
      }

      GRAPH HRA: {
        ?as ccf:ccf_asctb_type ?as_type .
        FILTER (?as_type = 'AS')
      }
    }
    GROUP BY ?sex ?dataset ?as
  }
}

```

([View Source](../../queries/atlas/validation-v2p2-extra3.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p2-extra3.csv))

| sex | sample | dataset | tool | modality | organ | organId | as | pct_hra_ct_overlap |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | https://entity.api.hubmapconsortium.org/entities/251e2e18951b2be556fcb756f1806f03 | https://entity.api.hubmapconsortium.org/entities/d1d10cfa18d059a96365998fe6406ca9 | pan-human-azimuth | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.org/sig/ont/fma/fma14929 | 0.42222222222222222222 |
| Female | https://entity.api.hubmapconsortium.org/entities/251e2e18951b2be556fcb756f1806f03 | https://entity.api.hubmapconsortium.org/entities/d1d10cfa18d059a96365998fe6406ca9 | pan-human-azimuth | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.obolibrary.org/obo/UBERON_0002094 | 0.19259259259259259259 |
| Female | https://entity.api.hubmapconsortium.org/entities/251e2e18951b2be556fcb756f1806f03 | https://entity.api.hubmapconsortium.org/entities/d1d10cfa18d059a96365998fe6406ca9 | pan-human-azimuth | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.obolibrary.org/obo/UBERON_0001284 | 0.17777777777777777778 |
| Female | https://entity.api.hubmapconsortium.org/entities/251e2e18951b2be556fcb756f1806f03 | https://entity.api.hubmapconsortium.org/entities/d1d10cfa18d059a96365998fe6406ca9 | pan-human-azimuth | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.obolibrary.org/obo/UBERON_0001223 | 0.09629629629629629630 |
| Female | https://entity.api.hubmapconsortium.org/entities/251e2e18951b2be556fcb756f1806f03 | https://entity.api.hubmapconsortium.org/entities/d1d10cfa18d059a96365998fe6406ca9 | pan-human-azimuth | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.obolibrary.org/obo/UBERON_0002015 | 0.15555555555555555556 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p2"></a>Validation V2P2 (validation-v2p2)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V2P2
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?sample ?dataset ?tool ?modality ?organ ?organId ?as (?shared_ds_cell_types / ?total_ds_cell_types as ?pct_hra_ct_overlap) ?as_in_collisions
WHERE {
  GRAPH HRApop: {
    {
      ?sample ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:subdivided_into_sections ?sample .
      ?block ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    }

    ?dataset ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
    ] .

    [] a ccf:SpatialPlacement ;
      ccf:placement_for ?rui_location ;
      ccf:placement_relative_to ?refOrgan .
  }

  GRAPH HRA: {
    ?refOrgan ccf:representation_of ?organIri .
    ?organIri rdfs:label ?organ .

    BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
  }

  {
    SELECT ?sex ?dataset (COUNT(DISTINCT(?dataset_cell_label)) as ?total_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?dataset_cell_label ;
          ]
        ] .
      }
    }
    GROUP BY ?sex ?dataset
  }

  {
    SELECT ?sex ?dataset ?as (COUNT(DISTINCT(?cell_label)) as ?shared_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_id ?cell_id ;
            ccf:cell_label ?cell_label ;
          ]
        ] .

        ?as ccf:has_cell_summary [
          ccf:sex ?sex ;
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
        ] .

        FILTER(
          STRSTARTS(STR(?as), 'http://purl.obolibrary.org/obo/') ||
          STRSTARTS(STR(?as), 'http://purl.org/sig/ont/fma/fma')
        )
      }

      GRAPH HRA: {
        ?as ccf:ccf_asctb_type ?type .
        FILTER (?type = 'AS')
      }

      FILTER(EXISTS {
        GRAPH HRA: {
          ?cell_id ccf:ccf_asctb_type [] .
        }
      } || EXISTS {
        GRAPH HRA: {
          [] ccf:ccf_asctb_type [] ;
            rdfs:label ?cell_label .
        }
      })
    }
    GROUP BY ?sex ?dataset ?as
  }

  BIND (EXISTS {
    GRAPH HRApop: {
      ?rui_location ccf:has_collision_summary [
        ccf:has_collision_item [
          ccf:as_id ?as
        ]
      ]
    }
  } as ?as_in_collisions)
}
ORDER BY ?sex ?sample DESC(?pct_hra_ct_overlap)

```

([View Source](../../queries/atlas/validation-v2p2.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p2.csv))

| sex | sample | dataset | tool | modality | organ | organId | as | pct_hra_ct_overlap | as_in_collisions |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0001069 | 0.77777777777777777778 | false |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | celltypist | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0001069 | 0.77777777777777777778 | false |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0001069 | 0.77777777777777777778 | false |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | pan-human-azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0001069 | 0.77777777777777777778 | false |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0001150 | 0.77777777777777777778 | false |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p3"></a>Validation V2P3 (validation-v2p3)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V2P3
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId ?corridor ?corridor_tool ?similarity ?distance 

WITH {
  SELECT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId
  WHERE {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?dataset ccf:has_cell_summary [
        ccf:sex ?sex ;
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
      ] .

      [] a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?refOrgan .
    }

    GRAPH HRA: {
      ?refOrgan ccf:representation_of ?organIri .
      ?organIri rdfs:label ?organ .

      BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
    }
  }
} AS %data

WITH {
  SELECT ?rui_location ?corridor ?distance
  WHERE {
    GRAPH hra-pop:distances {
      {
        [] a ccf:SpatialEntityDistance;
          ccf:entity_a ?corridor ;
          ccf:entity_b ?rui_location ;
          ccf:distance ?distance1 .
      } UNION {
        [] a ccf:SpatialEntityDistance;
          ccf:entity_a ?rui_location ;
          ccf:entity_b ?corridor ;
          ccf:distance ?distance1 .
      }

      FILTER EXISTS {
        GRAPH HRApop: {
          [] ccf:has_registration_location ?corridor .
        }
      }

      FILTER EXISTS {
        GRAPH HRApop: {
          [] ccf:has_registration_location ?rui_location .
        }
      }

      BIND(xsd:decimal(?distance1) as ?distance)
    }
  }
} AS %distances

WITH {
  SELECT ?sex ?corridor ?dataset ?tool ?corridor_tool ?similarity
  WHERE {
    GRAPH HRApop: {
      ?dataset a ccf:Dataset .
      [] ccf:has_registration_location ?corridor .
    }
    
    GRAPH hra-pop:similarities {
      {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?corridor_tool ;
            ccf:cell_source_a ?dataset ;
            ccf:cell_source_b ?corridor ;
            ccf:similarity ?similarity .
      } UNION {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?corridor_tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?corridor ;
            ccf:cell_source_b ?dataset ;
            ccf:similarity ?similarity .
      }
    }
  }
} AS %sims

WHERE {
  INCLUDE %data
  INCLUDE %sims
  INCLUDE %distances
}

```

([View Source](../../queries/atlas/validation-v2p3.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p3.csv))

| sex | sample | rui_location | dataset | tool | modality | organ | organId | corridor | corridor_tool | similarity | distance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Male | https://entity.api.hubmapconsortium.org/entities/3ed9afdc57afaf994670afccb55f3aad | http://purl.org/ccf/1.5/82566926-7a8f-43a7-9f6a-ae0c463d7a1d | https://entity.api.hubmapconsortium.org/entities/0b0ef5c2b8786644f0b6bdef1c1d7a4f | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.org/ccf/1.5/23e9d58a-c93f-414b-baf9-3692ea20fd1c | celltypist | 0.6797790926998607 | 170.1978283681963 |
| Male | https://entity.api.hubmapconsortium.org/entities/3ed9afdc57afaf994670afccb55f3aad | http://purl.org/ccf/1.5/82566926-7a8f-43a7-9f6a-ae0c463d7a1d | https://entity.api.hubmapconsortium.org/entities/0b0ef5c2b8786644f0b6bdef1c1d7a4f | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.org/ccf/1.5/09681d25-f08d-40ff-81cb-a731610aa84d | celltypist | 0.9259227833647002 | 0 |
| Male | https://entity.api.hubmapconsortium.org/entities/3ed9afdc57afaf994670afccb55f3aad | http://purl.org/ccf/1.5/82566926-7a8f-43a7-9f6a-ae0c463d7a1d | https://entity.api.hubmapconsortium.org/entities/0b0ef5c2b8786644f0b6bdef1c1d7a4f | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.org/ccf/1.5/37248725-6ed5-4589-ac5a-9951d1a783e7 | celltypist | 0.627491448392745 | 167.33787046160532 |
| Male | https://entity.api.hubmapconsortium.org/entities/3ed9afdc57afaf994670afccb55f3aad | http://purl.org/ccf/1.5/82566926-7a8f-43a7-9f6a-ae0c463d7a1d | https://entity.api.hubmapconsortium.org/entities/0b0ef5c2b8786644f0b6bdef1c1d7a4f | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.org/ccf/1.5/3b2cb9ee-2a6f-4fb3-bc1b-dbd192d3163c | celltypist | 0.627491448392745 | 167.33787046160532 |
| Male | https://entity.api.hubmapconsortium.org/entities/3ed9afdc57afaf994670afccb55f3aad | http://purl.org/ccf/1.5/82566926-7a8f-43a7-9f6a-ae0c463d7a1d | https://entity.api.hubmapconsortium.org/entities/0b0ef5c2b8786644f0b6bdef1c1d7a4f | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.org/ccf/1.5/2ae3cef9-6621-46da-b056-da7bfbadc13b | celltypist | 0.7905326258072389 | 226.7634884356386 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v3.edges"></a>Validation V3 Edges (validation-v3.edges)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V3 Edges
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT 
  (?datasetA as ?source)
  (?datasetB as ?target)
  (?similarity as ?weight)
  ?sex ?tool ?modality ?organ ?organId
  ?datasetA ?entityA ?datasetB ?entityB
  ?similarity ?distance

WITH {
  SELECT ?sex ?tool ?modality ?organ ?organId 
    ?datasetA ?entityA ?datasetB ?entityB
  WHERE {
    GRAPH HRApop: {
      ?entityA a ccf:SpatialEntity .
      ?entityB a ccf:SpatialEntity .
      FILTER(STR(?entityA) < STR(?entityB))

      {
        ?sampleA ccf:has_registration_location ?entityA .
        ?sampleA ccf:generates_dataset ?datasetA .
      } UNION {
        ?blockA ccf:subdivided_into_sections ?sampleA .
        ?blockA ccf:has_registration_location ?entityA .
        ?sampleA ccf:generates_dataset ?datasetA .
      }

      {
        ?sampleB ccf:has_registration_location ?entityB .
        ?sampleB ccf:generates_dataset ?datasetB .
      } UNION {
        ?blockB ccf:subdivided_into_sections ?sampleB .
        ?blockB ccf:has_registration_location ?entityB .
        ?sampleB ccf:generates_dataset ?datasetB .
      }

      ?datasetA ccf:has_cell_summary [
        ccf:sex ?sex ;
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
      ] .

      ?datasetB ccf:has_cell_summary [
        ccf:sex ?sex ;
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
      ] .

      # Sample A
      [] a ccf:SpatialPlacement ;
          ccf:placement_for ?entityA ;
          ccf:placement_relative_to ?refOrgan .

      # Sample B
      [] a ccf:SpatialPlacement ;
          ccf:placement_for ?entityB ;
          ccf:placement_relative_to ?refOrgan .
    }
    
    GRAPH HRA: {
      ?refOrgan ccf:representation_of ?organIri .
      ?organIri rdfs:label ?organ .
      BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
    }
  }
} AS %data

WITH {
  SELECT *
  WHERE {
    GRAPH HRApop: {
      ?entityA a ccf:SpatialEntity .
      ?entityB a ccf:SpatialEntity .
      FILTER(STR(?entityA) < STR(?entityB))
    }
    GRAPH hra-pop:distances {
      [] a ccf:SpatialEntityDistance;
        ccf:entity_a ?entityA ;
        ccf:entity_b ?entityB ;
        ccf:distance ?distance .
    }
  }
} AS %distances

WITH {
  SELECT ?sex ?tool ?entityA ?entityB ?similarity
  WHERE {
    GRAPH HRApop: {
      ?entityA a ccf:SpatialEntity .
      ?entityB a ccf:SpatialEntity .
      FILTER(STR(?entityA) < STR(?entityB))
    }

    GRAPH hra-pop:similarities {
      [] ccf:cell_source_a_sex ?sex ;
        ccf:cell_source_b_sex ?sex ;
        ccf:cell_source_a_tool ?tool ;
        ccf:cell_source_b_tool ?tool ;
        ccf:cell_source_a ?entityA ;
        ccf:cell_source_b ?entityB ;
        ccf:similarity ?similarity .
    }
  }
} AS %sims

WHERE {
  INCLUDE %data
  INCLUDE %sims
  INCLUDE %distances  
}

```

([View Source](../../queries/atlas/validation-v3.edges.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v3.edges.csv))

| source | target | weight | sex | tool | modality | organ | organId | datasetA | entityA | datasetB | entityB | similarity | distance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$heart%20right%20ventricle | 0.9682371713412943 | Female | azimuth | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$heart%20right%20ventricle | http://purl.org/ccf/1.5/1fe61622-ba53-47c9-967e-e764c21b8189 | 0.9682371713412943 | 50.052965111032634 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$interventricular%20septum | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H7$heart%20right%20ventricle | 0.9682371713412943 | Female | azimuth | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H7$heart%20right%20ventricle | http://purl.org/ccf/1.5/1fe61622-ba53-47c9-967e-e764c21b8189 | 0.9682371713412943 | 50.052965111032634 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H7$heart%20right%20ventricle | 0.9682371713412943 | Female | azimuth | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H7$heart%20right%20ventricle | http://purl.org/ccf/1.5/1fe61622-ba53-47c9-967e-e764c21b8189 | 0.9682371713412943 | 50.052965111032634 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H7$interventricular%20septum | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20right%20ventricle | 0.9682371713412943 | Female | azimuth | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H7$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20right%20ventricle | http://purl.org/ccf/1.5/1fe61622-ba53-47c9-967e-e764c21b8189 | 0.9682371713412943 | 50.052965111032634 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H7$interventricular%20septum | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D4$heart%20right%20ventricle | 0.9682371713412943 | Female | azimuth | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H7$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D4$heart%20right%20ventricle | http://purl.org/ccf/1.5/1fe61622-ba53-47c9-967e-e764c21b8189 | 0.9682371713412943 | 50.052965111032634 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v3.nodes"></a>Validation V3 Nodes (validation-v3.nodes)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V3 Nodes
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT
  ?sex
  (?dataset as ?id)
  (?organ as ?label)
  ?dataset ?modality ?entity ?organ ?organId
WHERE {
  GRAPH HRApop: {
    ?entity a ccf:SpatialEntity .

    {
      ?sample ccf:has_registration_location ?entity .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:subdivided_into_sections ?sample .
      ?block ccf:has_registration_location ?entity .
      ?sample ccf:generates_dataset ?dataset .
    }

    ?dataset ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:modality ?modality ;
    ] .
  }

  GRAPH hra-pop:similarities
  {
    {
      [] ccf:cell_source_a ?entity ;
    } UNION {
      [] ccf:cell_source_b ?entity ;
    }

    FILTER EXISTS {
      GRAPH HRApop: {
        ?entity a ccf:SpatialEntity .
      }
    }
  }

  GRAPH HRApop: {
    [] a ccf:SpatialPlacement ;
        ccf:placement_for ?entity ;
        ccf:placement_relative_to ?refOrgan .
  }

  GRAPH HRA: {
    ?refOrgan ccf:representation_of ?organIri .
    ?organIri rdfs:label ?organ .

    BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
  }
}
ORDER BY ?id

```

([View Source](../../queries/atlas/validation-v3.nodes.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v3.nodes.csv))

| sex | id | label | dataset | modality | entity | organ | organId |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | sc_transcriptomics | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D175$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D175$lung | sc_transcriptomics | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | sc_transcriptomics | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | respiratory system | UBERON:0001004 |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$apex%20of%20heart | heart | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$apex%20of%20heart | sc_transcriptomics | http://purl.org/ccf/1.5/9abfed4e-2fde-4d80-a8aa-7439a106d895 | heart | UBERON:0000948 |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20left%20ventricle | heart | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20left%20ventricle | sc_transcriptomics | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | heart | UBERON:0000948 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v4"></a>Validation V4 (validation-v4)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V4
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT
  ?sex
  ?tool 
  ?modality
  (SAMPLE(?asctb_only) as ?asctb_only)
  (SUM(IF(?in_asctb, 1, 0)) as ?both) 
  (SUM(IF(?in_asctb, 0, 1)) as ?exp_only)
WHERE {
  GRAPH HRApop: {
    SELECT DISTINCT ?sex ?tool ?modality ?cell_id
    WHERE {
      [] ccf:has_cell_summary [
        ccf:sex ?sex ;
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
        ccf:has_cell_summary_row [
          ccf:cell_id ?cell_id ;
        ]
      ] .
    }
  }

  {
    SELECT ?sex ?tool ?modality 
      (COUNT(DISTINCT(?asctb_cell_id)) as ?asctb_only)
    WHERE {
      GRAPH HRA: {
        SELECT DISTINCT ?asctb_cell_id
        WHERE {
          ?asctb_cell_id ccf:ccf_asctb_type ?type .
          FILTER (?type = 'CT')
        } 
      }

      GRAPH HRApop: {
        SELECT DISTINCT ?sex ?tool ?modality
        WHERE {
          [] ccf:has_cell_summary [
            ccf:sex ?sex ;
            ccf:cell_annotation_method ?tool ;
            ccf:modality ?modality ;
          ] .
        }
      }

      FILTER (NOT EXISTS { 
        GRAPH HRApop: {
          SELECT DISTINCT ?sex ?tool ?modality ?asctb_cell_id
          WHERE {
            [] ccf:has_cell_summary [
              ccf:sex ?sex ;
              ccf:cell_annotation_method ?tool ;
              ccf:modality ?modality ;
              ccf:has_cell_summary_row [
                ccf:cell_id ?asctb_cell_id ;
              ]
            ] .
          }
        }
       })
    }
    GROUP BY ?sex ?tool ?modality
  }
  
  BIND(EXISTS {
    GRAPH HRA: {
      SELECT DISTINCT ?cell_id
      WHERE {
        ?cell_id ccf:ccf_asctb_type ?type .
        FILTER (?type = 'CT')
      }
    }
  } as ?in_asctb)
}
GROUP BY ?sex ?tool ?modality
ORDER BY ?modality ?tool ?sex

```

([View Source](../../queries/atlas/validation-v4.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v4.csv))

| sex | tool | modality | asctb_only | both | exp_only |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Female | sc_proteomics | sc_proteomics | 1269 | 34 | 10 |
| Male | sc_proteomics | sc_proteomics | 1261 | 42 | 11 |
| Female | azimuth | sc_transcriptomics | 1215 | 88 | 18 |
| Male | azimuth | sc_transcriptomics | 1212 | 91 | 19 |
| Female | celltypist | sc_transcriptomics | 1198 | 105 | 67 |
| ... | ... | ... | ... | ... | ... |


### <a id="validation-v5"></a>Validation V5 (validation-v5)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V5
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT
  ?sex
  ?consortium_name
  ?dataset
  ?tool
  ?modality
  ?reported_organ
  ?organ
  ?organId
  ?rui_location_volume
  ?cell_id
  ?cell_label
  ?cell_count
  ?percentage
WHERE {
  GRAPH HRApop: {
    ?entity a ccf:SpatialEntity .
    
    {
      ?sample ccf:comes_from ?donor .
      ?sample ccf:has_registration_location ?entity .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:comes_from ?donor .
      ?block ccf:subdivided_into_sections ?sample .
      ?block ccf:has_registration_location ?entity .
      ?sample ccf:generates_dataset ?dataset .
    }
    
    ?donor ccf:consortium_name ?consortium_name .

    OPTIONAL { ?dataset ccf:organ_id ?reported_organ . }
    
    ?entity ccf:x_dimension ?x ;
            ccf:y_dimension ?y ;
            ccf:z_dimension ?z .
  
    BIND(?x * ?y * ?z as ?rui_location_volume)
    ?dataset ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_iri ;
        ccf:cell_label ?cell_label ;
        ccf:cell_count ?cell_count ;
        ccf:percentage_of_total ?percentage
      ]
    ] .
    BIND(REPLACE(REPLACE(STR(?cell_iri), STR(CL:), 'CL:'), STR(ASCTB-TEMP:), 'ASCTB-TEMP:') as ?cell_id)
  }

  GRAPH HRApop: {
    [] a ccf:SpatialPlacement ;
        ccf:placement_for ?entity ;
        ccf:placement_relative_to ?refOrgan .
  }

  GRAPH HRA: {
    ?refOrgan ccf:representation_of ?organIri .
    ?organIri rdfs:label ?organ .

    BIND(REPLACE(REPLACE(STR(?organIri), STR(UBERON:), 'UBERON:'), STR(FMA:), 'FMA:') as ?organId)
  }
}
ORDER BY ?sex ?dataset ?tool ?modality DESC(?percentage)

```

([View Source](../../queries/atlas/validation-v5.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v5.csv))

| sex | consortium_name | dataset | tool | modality | reported_organ | organ | organId | rui_location_volume | cell_id | cell_label | cell_count | percentage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0002063 | AT2 | 1064 | 0.2273504273504273 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0002062 | AT1 | 826 | 0.1764957264957265 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0000625 | CD8 T cells | 329 | 0.0702991452991453 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:4028002 | EC general capillary | 288 | 0.06153846153846154 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0000875 | Non-classical monocytes | 256 | 0.0547008547008547 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v6"></a>Validation V6 (validation-v6)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V6
#+ description:

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT
  ?sex
  ?tool
  ?modality
  ?organ
  ?organId
  ?as
  ?as_id
  ?cell_id
  ?cell_label
  ?cell_count
  ?percentage
  ?asct_relation_in_asctb_table
  ?indirect_asct_relation_in_asctb_table
FROM HRApop:
FROM HRA:
WHERE {
  hint:Query hint:analytic "true" .

  ?as3d_id
    ccf:has_reference_organ ?ref_organ ;
    ccf:representation_of ?as_iri .

  ?as_iri ccf:has_cell_summary [
    ccf:sex ?sex ;
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_iri ;
      ccf:cell_label ?cell_label_summary ;
      ccf:cell_count ?cell_count ;
      ccf:percentage_of_total ?percentage
    ]
  ] .

  OPTIONAL {
    ?cell_iri rdfs:label ?cell_label_ontology .
  }
  BIND(COALESCE(?cell_label_ontology, ?cell_label_summary) as ?cell_label)
  BIND(REPLACE(REPLACE(STR(?cell_iri), STR(CL:), 'CL:'), STR(ASCTB-TEMP:), 'ASCTB-TEMP:') as ?cell_id)

  ?ref_organ ccf:representation_of ?organIri .
  ?organIri rdfs:label ?organ .
  BIND(REPLACE(REPLACE(STR(?organIri), STR(UBERON:), 'UBERON:'), STR(FMA:), 'FMA:') as ?organId)

  ?as_iri rdfs:label ?as .
  BIND(REPLACE(REPLACE(STR(?as_iri), STR(UBERON:), 'UBERON:'), STR(FMA:), 'FMA:') as ?as_id)

  OPTIONAL {
    ?as_iri ccf:has_cell_summary [] .
    ?as_child_iri ccf:ccf_part_of* ?as_iri .
    FILTER(?as_iri != ?as_child_iri)
    hint:SubQuery hint:runOnce true .
  }

  BIND(EXISTS { 
    ?cell_iri ccf:ccf_located_in ?as_iri .
  } as ?asct_relation_in_asctb_table)

  BIND(EXISTS {
    ?cell_iri ccf:ccf_located_in ?as_child_iri .
  } as ?indirect_asct_relation_in_asctb_table)
}

```

([View Source](../../queries/atlas/validation-v6.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v6.csv))

| sex | tool | modality | organ | organId | as | as_id | cell_id | cell_label | cell_count | percentage | asct_relation_in_asctb_table | indirect_asct_relation_in_asctb_table |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Male | celltypist | sc_transcriptomics | respiratory system | UBERON:0001004 | Left posterior basal segmental bronchus | FMA:7508 | CL:4028004 | alveolar type 1 fibroblast cell | 9968.45 | 0.03098580840680888 | false | true |
| Female | pan-human-azimuth | sc_transcriptomics | Left knee | FMA:24978 | Articular disk of knee joint | FMA:64019 | CL:0000788 | naive B cell | 8.633999999999999 | 0.002154738365498432 | false | true |
| Male | pan-human-azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | Lateral bronchopulmonary segment | FMA:7361 | CL:0000934 | CD4-positive, alpha-beta cytotoxic T cell | 2 | 8.511000468105026E-5 | false | true |
| Female | pan-human-azimuth | sc_transcriptomics | large intestine | UBERON:0000059 | rectum | UBERON:0001052 | CL:0000235 | macrophage | 0.08700000000000001 | 0.01146849459530715 | true | true |
| Male | pan-human-azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | Lateral bronchopulmonary segment | FMA:7361 | CL:0000136 | adipocyte | 2 | 8.511000468105026E-5 | false | true |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v7-ctann-rui"></a>Validation V7 (5 variables) (validation-v7-ctann-rui)

Various top similarity variables

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V7 (5 variables)
#+ description: Various top similarity variables

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId
  ?datasetVsRuiSim
  ?datasetVsTopPredictedRuiSim ?ruiVsTopPredictedRuiSim 
  ?datasetVsTopPredictedDatasetSim ?ruiVsTopPredictedDatasetSim

WITH {
  SELECT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId
  WHERE {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?dataset ccf:has_cell_summary [
        ccf:sex ?sex ;
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
      ] .

      [] a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?refOrgan .
    }

    GRAPH HRA: {
      ?refOrgan ccf:representation_of ?organIri .
      ?organIri rdfs:label ?organ .

      BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
    }
  }
} AS %data

WITH {
  SELECT ?sex ?dataset ?tool (MAX(?similarity) as ?datasetVsTopPredictedRuiSim)
  WHERE {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }
      [] ccf:has_registration_location ?predicted_rui .
      FILTER (?rui_location != ?predicted_rui)
    }
    
    GRAPH hra-pop:similarities {
      {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?dataset ;
            ccf:cell_source_b ?predicted_rui ;
            ccf:similarity ?similarity .
      } UNION {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?predicted_rui ;
            ccf:cell_source_b ?dataset ;
            ccf:similarity ?similarity .
      }
    }
  }
  GROUP BY ?sex ?dataset ?tool
} AS %sims1

WITH {
  SELECT ?sex ?rui_location ?tool (MAX(?similarity) as ?ruiVsTopPredictedRuiSim)
  WHERE {
    GRAPH HRApop: {
      [] ccf:has_registration_location ?predicted_rui .
      [] ccf:has_registration_location ?rui_location .
      FILTER (?rui_location != ?predicted_rui)
    }
    
    GRAPH hra-pop:similarities {
      {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?rui_location ;
            ccf:cell_source_b ?predicted_rui ;
            ccf:similarity ?similarity .
      } UNION {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?predicted_rui ;
            ccf:cell_source_b ?rui_location ;
            ccf:similarity ?similarity .
      }
    }
  }
  GROUP BY ?sex ?rui_location ?tool
} AS %sims2

WITH {
  SELECT ?sex ?dataset ?tool (MAX(?similarity) as ?datasetVsTopPredictedDatasetSim)
  WHERE {
    GRAPH HRApop: {
      ?dataset a ccf:Dataset .
      ?similar_dataset a ccf:Dataset .
      FILTER (?dataset != ?similar_dataset)
    }
    
    GRAPH hra-pop:similarities {
      {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?dataset ;
            ccf:cell_source_b ?similar_dataset ;
            ccf:similarity ?similarity .
      } UNION {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?similar_dataset ;
            ccf:cell_source_b ?dataset ;
            ccf:similarity ?similarity .
      }
    }
  }
  GROUP BY ?sex ?dataset ?tool
} AS %sims3

WITH {
  SELECT ?sex ?rui_location ?tool (MAX(?similarity) as ?ruiVsTopPredictedDatasetSim)
  WHERE {

    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }
      ?similar_dataset a ccf:Dataset .
      FILTER (?dataset != ?similar_dataset)
    }
    
    GRAPH hra-pop:similarities {
      {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?rui_location ;
            ccf:cell_source_b ?similar_dataset ;
            ccf:similarity ?similarity .
      } UNION {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?similar_dataset ;
            ccf:cell_source_b ?rui_location ;
            ccf:similarity ?similarity .
      }
    }
  }
  GROUP BY ?sex ?rui_location ?tool
} AS %sims4

WITH {
  SELECT ?sex ?dataset ?tool (MAX(?similarity) as ?datasetVsRuiSim)
  WHERE {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }
    }
    
    GRAPH hra-pop:similarities {
      {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?dataset ;
            ccf:cell_source_b ?rui_location ;
            ccf:similarity ?similarity .
      } UNION {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?rui_location ;
            ccf:cell_source_b ?dataset ;
            ccf:similarity ?similarity .
      }
    }
  }
  GROUP BY ?sex ?dataset ?tool
} AS %sims5

WHERE {
  hint:Query hint:analytic "true" .

  INCLUDE %data
  INCLUDE %sims1
  INCLUDE %sims2
  INCLUDE %sims3
  INCLUDE %sims4
  INCLUDE %sims5
}
ORDER BY ?sex ?organ ?dataset ?tool

```

([View Source](../../queries/atlas/validation-v7-ctann-rui.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v7-ctann-rui.csv))

| sex | sample | rui_location | dataset | tool | modality | organ | organId | datasetVsRuiSim | datasetVsTopPredictedRuiSim | ruiVsTopPredictedRuiSim | datasetVsTopPredictedDatasetSim | ruiVsTopPredictedDatasetSim |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | https://entity.api.hubmapconsortium.org/entities/8a1c2977cbb0f5e3f898a3bfa2e95aeb | http://purl.org/ccf/1.5/016e1d91-9c07-46b7-8441-2975df328fb3 | https://entity.api.hubmapconsortium.org/entities/365d954aadc27b928c1e92a838b952f8 | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9820052922823399 | 0.9809214776227404 | 0.9999832400379405 | 0.9909275740462946 | 0.9935996764958218 |
| Female | https://entity.api.hubmapconsortium.org/entities/5618b44c286af71b9fcda4c322fc1f52 | http://purl.org/ccf/1.5/463d2148-5b77-47cb-b2d1-94f05769b73d | https://entity.api.hubmapconsortium.org/entities/5fc97f5cb77f786b629692f9f9281075 | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9779194356679424 | 0.9762569703483417 | 0.9999689593297186 | 0.9901293049989558 | 0.9985325071302515 |
| Female | https://entity.api.hubmapconsortium.org/entities/9ffdc5eedcb578854e9a3205f34ba88e | http://purl.org/ccf/1.5/7f475c89-1b7e-4238-819f-6a8b216d3322 | https://entity.api.hubmapconsortium.org/entities/7754aa5ebde628b5e92705e33e74a4ef | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9860034599000703 | 0.9848019095808287 | 0.9999689593297186 | 0.9878233020092457 | 0.9988388848244156 |
| Female | https://entity.api.hubmapconsortium.org/entities/7837bb654b7c0dbf0fa0a60f7cef491d | http://purl.org/ccf/1.5/a8339ba3-15b1-456c-8eec-455e31f19686 | https://entity.api.hubmapconsortium.org/entities/ade8d4ca1fd95afbafdc78a2461bab9c | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.993025598346775 | 0.9935996764958218 | 0.9999832400379405 | 0.9909275740462946 | 0.9809214776227404 |
| Female | https://entity.api.hubmapconsortium.org/entities/5618b44c286af71b9fcda4c322fc1f52 | http://purl.org/ccf/1.5/463d2148-5b77-47cb-b2d1-94f05769b73d | https://entity.api.hubmapconsortium.org/entities/c0b5fe827b4aac2941d9d84f9a952051 | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9985325071302515 | 0.9988388848244156 | 0.9999689593297186 | 0.9878233020092457 | 0.9985325071302515 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v7-x-axis-local"></a>Validation V7 (x-axis) (validation-v7-x-axis-local)

x-axis compares input dataset vs input rui cell summaries

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V7 (x-axis)
#+ description: x-axis compares input dataset vs input rui cell summaries

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId ?datasetVsRuiSim

WITH {
  SELECT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId
  WHERE {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?dataset ccf:has_cell_summary [
        ccf:sex ?sex ;
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
      ] .

      [] a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?refOrgan .
    }

    GRAPH HRA: {
      ?refOrgan ccf:representation_of ?organIri .
      ?organIri rdfs:label ?organ .

      BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
    }
  }
} AS %data

WITH {
  SELECT ?sex ?dataset ?tool (MAX(?similarity) as ?datasetVsRuiSim)
  WHERE {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }
    }
    
    GRAPH hra-pop:similarities-local {
      {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?dataset ;
            ccf:cell_source_b ?rui_location ;
            ccf:similarity ?similarity .
      } UNION {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?rui_location ;
            ccf:cell_source_b ?dataset ;
            ccf:similarity ?similarity .
      }
    }
  }
  GROUP BY ?sex ?dataset ?tool
} AS %sims

WHERE {
  hint:Query hint:analytic "true" .

  INCLUDE %data
  INCLUDE %sims
}
ORDER BY ?sex ?organ ?dataset ?tool

```

([View Source](../../queries/atlas/validation-v7-x-axis-local.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v7-x-axis-local.csv))

| sex | sample | rui_location | dataset | tool | modality | organ | organId | datasetVsRuiSim |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | https://entity.api.hubmapconsortium.org/entities/5618b44c286af71b9fcda4c322fc1f52 | http://purl.org/ccf/1.5/463d2148-5b77-47cb-b2d1-94f05769b73d | https://entity.api.hubmapconsortium.org/entities/5fc97f5cb77f786b629692f9f9281075 | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9682375675518908 |
| Female | https://entity.api.hubmapconsortium.org/entities/5618b44c286af71b9fcda4c322fc1f52 | http://purl.org/ccf/1.5/463d2148-5b77-47cb-b2d1-94f05769b73d | https://entity.api.hubmapconsortium.org/entities/c0b5fe827b4aac2941d9d84f9a952051 | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9682375675518908 |
| Female | https://doi.org/10.1126/science.abl4896#TSP27_Mammary | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP27$mammary%20gland | pan-human-azimuth | sc_transcriptomics | Set of lactiferous glands in left breast | FMA:57991 | 0.8329639920322625 |
| Female | https://doi.org/10.1126/science.abl4896#TSP27_Mammary | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP27$mammary%20gland | popv | sc_transcriptomics | Set of lactiferous glands in left breast | FMA:57991 | 0.8658856891148441 |
| Female | https://doi.org/10.1126/science.abl4896#TSP4_Mammary_L | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP4$mammary%20gland | pan-human-azimuth | sc_transcriptomics | Set of lactiferous glands in left breast | FMA:57991 | 0.8329639920322625 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v7-x-axis"></a>Validation V7 (x-axis) (validation-v7-x-axis)

x-axis compares input dataset vs input rui cell summaries

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V7 (x-axis)
#+ description: x-axis compares input dataset vs input rui cell summaries

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId ?datasetVsRuiSim

WITH {
  SELECT ?sex ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId
  WHERE {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?dataset ccf:has_cell_summary [
        ccf:sex ?sex ;
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
      ] .

      [] a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?refOrgan .
    }

    GRAPH HRA: {
      ?refOrgan ccf:representation_of ?organIri .
      ?organIri rdfs:label ?organ .

      BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
    }
  }
} AS %data

WITH {
  SELECT ?sex ?dataset ?tool (MAX(?similarity) as ?datasetVsRuiSim)
  WHERE {
    GRAPH HRApop: {
      {
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }
    }
    
    GRAPH hra-pop:similarities {
      {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?dataset ;
            ccf:cell_source_b ?rui_location ;
            ccf:similarity ?similarity .
      } UNION {
        []  ccf:cell_source_a_sex ?sex ;
            ccf:cell_source_b_sex ?sex ;
            ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?tool ;
            ccf:cell_source_a ?rui_location ;
            ccf:cell_source_b ?dataset ;
            ccf:similarity ?similarity .
      }
    }
  }
  GROUP BY ?sex ?dataset ?tool
} AS %sims

WHERE {
  hint:Query hint:analytic "true" .

  INCLUDE %data
  INCLUDE %sims
}
ORDER BY ?sex ?organ ?dataset ?tool

```

([View Source](../../queries/atlas/validation-v7-x-axis.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v7-x-axis.csv))

| sex | sample | rui_location | dataset | tool | modality | organ | organId | datasetVsRuiSim |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | https://entity.api.hubmapconsortium.org/entities/8a1c2977cbb0f5e3f898a3bfa2e95aeb | http://purl.org/ccf/1.5/016e1d91-9c07-46b7-8441-2975df328fb3 | https://entity.api.hubmapconsortium.org/entities/365d954aadc27b928c1e92a838b952f8 | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9820052922823399 |
| Female | https://entity.api.hubmapconsortium.org/entities/5618b44c286af71b9fcda4c322fc1f52 | http://purl.org/ccf/1.5/463d2148-5b77-47cb-b2d1-94f05769b73d | https://entity.api.hubmapconsortium.org/entities/5fc97f5cb77f786b629692f9f9281075 | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9779194356679424 |
| Female | https://entity.api.hubmapconsortium.org/entities/9ffdc5eedcb578854e9a3205f34ba88e | http://purl.org/ccf/1.5/7f475c89-1b7e-4238-819f-6a8b216d3322 | https://entity.api.hubmapconsortium.org/entities/7754aa5ebde628b5e92705e33e74a4ef | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9860034599000703 |
| Female | https://entity.api.hubmapconsortium.org/entities/7837bb654b7c0dbf0fa0a60f7cef491d | http://purl.org/ccf/1.5/a8339ba3-15b1-456c-8eec-455e31f19686 | https://entity.api.hubmapconsortium.org/entities/ade8d4ca1fd95afbafdc78a2461bab9c | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.993025598346775 |
| Female | https://entity.api.hubmapconsortium.org/entities/5618b44c286af71b9fcda4c322fc1f52 | http://purl.org/ccf/1.5/463d2148-5b77-47cb-b2d1-94f05769b73d | https://entity.api.hubmapconsortium.org/entities/c0b5fe827b4aac2941d9d84f9a952051 | pan-human-azimuth | sc_transcriptomics | Right knee | FMA:24977 | 0.9985325071302515 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v7-y-axis-local"></a>Validation V7 (y-axis) local version (validation-v7-y-axis-local)

y-axis compares input rui vs top predicted rui cell summaries

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V7 (y-axis) local version
#+ description: y-axis compares input rui vs top predicted rui cell summaries

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?sex ?rui_location ?dataset ?tool ?predicted_rui ?similarity
WHERE {
  hint:Query hint:analytic "true" .

  GRAPH HRApop: {
    {
      ?sample ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:subdivided_into_sections ?sample .
      ?block ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    }
    [] ccf:has_registration_location ?predicted_rui .
    FILTER (?rui_location != ?predicted_rui)
  }
  
  GRAPH hra-pop:similarities-local {
    {
      []  ccf:cell_source_a_sex ?sex ;
          ccf:cell_source_b_sex ?sex ;
          ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?tool ;
          ccf:cell_source_a ?dataset ;
          ccf:cell_source_b ?predicted_rui ;
          ccf:similarity ?similarity .
    } UNION {
      []  ccf:cell_source_a_sex ?sex ;
          ccf:cell_source_b_sex ?sex ;
          ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?tool ;
          ccf:cell_source_a ?predicted_rui ;
          ccf:cell_source_b ?dataset ;
          ccf:similarity ?similarity .
    }
  }
}
ORDER BY ?sex ?rui_location ?dataset ?tool DESC(?similarity)

```

([View Source](../../queries/atlas/validation-v7-y-axis-local.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v7-y-axis-local.csv))

| sex | rui_location | dataset | tool | predicted_rui | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Female | http://purl.org/ccf/1.5/52c4948d-bdc2-4201-a991-61a2c0a565c0 | https://entity.api.hubmapconsortium.org/entities/e65175561b4b17da5352e3837aa0e497 | azimuth | http://purl.org/ccf/1.5/c5e652ed-7e40-41de-bfc0-a73f05a0c66a | 0.8981513777101882 |
| Female | http://purl.org/ccf/1.5/6f74a57b-41ce-4581-a206-2e84b58c1c98 | https://entity.api.hubmapconsortium.org/entities/59249f23ecdcc975c90de9a1956a5285 | azimuth | http://purl.org/ccf/1.5/72ea5aad-4be7-4478-afc0-7736bc0d90e3 | 0.9446719843598409 |
| Female | http://purl.org/ccf/1.5/6f7f3ddd-9889-4bad-8bfc-8340c7b6af8b | https://entity.api.sennetconsortium.org/entities/95b6b7b0c6c2250aa284aa12d89c9174 | celltypist | http://purl.org/ccf/1.5/049f27a1-1e84-4f8a-a47e-48a0879b8652 | 0.8214264002847594 |
| Female | http://purl.org/ccf/1.5/74c8746d-be53-493d-9a2a-1edbe24f0d16 | https://entity.api.hubmapconsortium.org/entities/8c1ad4c380ae5477d0b7875fa47e867e | celltypist | http://purl.org/ccf/1.5/e240c0a4-5e53-4464-8320-ad775f2c4bf7 | 0.9932089835467737 |
| Female | http://purl.org/ccf/1.5/8f99a469-7d51-46dc-919d-2e002eeae868 | https://entity.api.hubmapconsortium.org/entities/81c50251d7f1aa85eeb6c03be44443a6 | pan-human-azimuth | http://purl.org/ccf/1.5/52c4948d-bdc2-4201-a991-61a2c0a565c0 | 0.6978794901647054 |
| ... | ... | ... | ... | ... | ... |


### <a id="validation-v7-y-axis"></a>Validation V7 (y-axis) (validation-v7-y-axis)

y-axis compares input rui vs top predicted rui cell summaries

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Validation V7 (y-axis)
#+ description: y-axis compares input rui vs top predicted rui cell summaries

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?sex ?rui_location ?dataset ?tool ?predicted_rui ?similarity
WHERE {
  hint:Query hint:analytic "true" .

  GRAPH HRApop: {
    {
      ?sample ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:subdivided_into_sections ?sample .
      ?block ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    }
    [] ccf:has_registration_location ?predicted_rui .
    FILTER (?rui_location != ?predicted_rui)
  }
  
  GRAPH hra-pop:similarities {
    {
      []  ccf:cell_source_a_sex ?sex ;
          ccf:cell_source_b_sex ?sex ;
          ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?tool ;
          ccf:cell_source_a ?dataset ;
          ccf:cell_source_b ?predicted_rui ;
          ccf:similarity ?similarity .
    } UNION {
      []  ccf:cell_source_a_sex ?sex ;
          ccf:cell_source_b_sex ?sex ;
          ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?tool ;
          ccf:cell_source_a ?predicted_rui ;
          ccf:cell_source_b ?dataset ;
          ccf:similarity ?similarity .
    }
  }
}
ORDER BY ?sex ?rui_location ?dataset ?tool DESC(?similarity)

```

([View Source](../../queries/atlas/validation-v7-y-axis.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v7-y-axis.csv))

| sex | rui_location | dataset | tool | predicted_rui | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Female | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20left%20ventricle | pan-human-azimuth | http://purl.org/ccf/1.5/1fe61622-ba53-47c9-967e-e764c21b8189 | 0.968177477329598 |
| Female | http://purl.org/ccf/1.5/32214c14-bf21-4bf6-aea9-58ab721128ab | https://entity.api.hubmapconsortium.org/entities/9e28cdbdb5bc5b3cf7299f13635eebc9 | sc_proteomics | http://purl.org/ccf/1.5/43e195fb-0f50-4b67-bff1-b74f68290fc6 | 0.8432659493879373 |
| Female | http://purl.org/ccf/1.5/6f7f3ddd-9889-4bad-8bfc-8340c7b6af8b | https://entity.api.sennetconsortium.org/entities/2ea06c61810a32b092a3f681f18a1a45 | celltypist | http://purl.org/ccf/1.5/965b263e-b1b5-44c3-86ef-bb682091be05 | 0.671532166922419 |
| Female | http://purl.org/ccf/1.5/8f99a469-7d51-46dc-919d-2e002eeae868 | https://entity.api.hubmapconsortium.org/entities/6fdfde6f88e34294b3cd58e070ebcba2 | pan-human-azimuth | http://purl.org/ccf/1.5/731ade72-cdb7-4262-8be1-859396820dfd | 0.9033800660310551 |
| Female | http://purl.org/ccf/1.5/d194f593-af76-4ee7-84a6-00f7531d47cf | https://entity.api.hubmapconsortium.org/entities/e45724a72ab0e7d7b283451836dd983e | sc_proteomics | http://purl.org/ccf/1.5/4af4b1bd-c71d-4ade-a9f6-47b2ccc9f5bb | 0.8717010488248942 |
| ... | ... | ... | ... | ... | ... |


### <a id="as-cnt-per-organ"></a>Count of Anatomical Structures by Organ (as-cnt-per-organ)

Count of Anatomical Structures that occur in the 3D Reference Organs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Count of Anatomical Structures by Organ
#+ description: Count of Anatomical Structures that occur in the 3D Reference Organs

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>

SELECT (COUNT(DISTINCT(?as_id)) as ?as_count) ?organ
FROM HRA:
WHERE {
  ?as3d
    ccf:has_reference_organ ?ref_organ ;
    ccf:representation_of ?as_id .

    BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.[0-9]$", "", "i") as ?organ)
}
GROUP BY ?organ 
ORDER BY DESC(?as_count)

```

([View Source](../../queries/hra/as-cnt-per-organ.rq))
</details>

#### Results ([View CSV File](reports/hra/as-cnt-per-organ.csv))

| as_count | organ |
| :--- | :--- |
| 100 | https://purl.humanatlas.io/ref-organ/blood-vasculature-female/v1.3#primary |
| 99 | https://purl.humanatlas.io/ref-organ/blood-vasculature-male/v1.3#primary |
| 62 | https://purl.humanatlas.io/ref-organ/lung-female/v1.4#primary |
| 59 | https://purl.humanatlas.io/ref-organ/lung-male/v1.4#primary |
| 58 | https://purl.humanatlas.io/ref-organ/brain-male/v1.4#primary |
| ... | ... |

## hra

### <a id="as-cnt"></a>Count of Anatomical Structures (as-cnt)

Count of Anatomical Structures that occur in the 3D Reference Organs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Count of Anatomical Structures
#+ description: Count of Anatomical Structures that occur in the 3D Reference Organs

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>

SELECT (COUNT(DISTINCT(?as_id)) as ?as_cnt)
FROM HRA:
WHERE {
  ?as3d
    ccf:has_reference_organ ?ref_organ ;
    ccf:representation_of ?as_id .
}

```

([View Source](../../queries/hra/as-cnt.rq))
</details>

#### Results ([View CSV File](reports/hra/as-cnt.csv))

| as_cnt |
| :--- |
| 556 |


### <a id="as3d-with-id-count"></a>Count of Anatomical Structures per `sceneNode`s (as3d-with-id-count)

Count of `sceneNode`s in the 3D Reference Organs that have an ontology ID

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Count of Anatomical Structures per `sceneNode`s
#+ description: Count of `sceneNode`s in the 3D Reference Organs that have an ontology ID

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>

SELECT (COUNT(?as3d) as ?as_count)
FROM HRA:
WHERE {
  SELECT DISTINCT ?as3d WHERE {
    ?as3d ccf:has_reference_organ ?y .
    ?as3d ccf:representation_of ?z .
    FILTER(!CONTAINS(STR(?y), '/united-'))
    FILTER (str(?as3d) != str(?y))
  }
}
```

([View Source](../../queries/hra/as3d-with-id-count.rq))
</details>

#### Results ([View CSV File](reports/hra/as3d-with-id-count.csv))

| as_count |
| :--- |
| 1283 |


### <a id="asctb-records"></a>AS, CT, and BM in the HRA (asctb-records)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: AS, CT, and BM in the HRA

PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX has_characterizing_biomarker_set: <http://purl.obolibrary.org/obo/RO_0015004>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>

SELECT DISTINCT ?as_label ?ct_label ?bm_label ?as ?ct ?bm ?bmType
FROM HRA:
WHERE {
  ?ct ccf:ccf_located_in ?as . # Get cell types located in an anatomical structure

  # Find all sets of biomarkers that characterize a cell type
  ?ct rdfs:subClassOf [
    owl:onProperty has_characterizing_biomarker_set: ;
    owl:someValuesFrom [ owl:intersectionOf ?bmSetId ]] .
  ?bmSetId rdf:rest*/rdf:first [
    owl:onProperty ccf:has_marker_component ;
    owl:someValuesFrom ?bm
  ] .

  # Get biomarker type
  ?bm ccf:ccf_biomarker_type ?bmType .

  ?as ccf:ccf_pref_label ?as_label .
  ?ct ccf:ccf_pref_label ?ct_label .
  ?bm ccf:ccf_pref_label ?bm_label .
}
ORDER BY ?as_label

```

([View Source](../../queries/hra/asctb-records.rq))
</details>

#### Results ([View CSV File](reports/hra/asctb-records.csv))

| as_label | ct_label | bm_label | as | ct | bm | bmType |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle | alpha smooth muscle actin | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | protein |
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle cell | Alpha smooth muscle actin | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | protein |
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle | Alpha smooth muscle actin | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | protein |
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle cell | Smooth Muscle Actin | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | protein |
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle | Smooth Muscle Actin | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | protein |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="count-ct-per-tool"></a>Cell types per annotation tool (count-ct-per-tool)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell types per annotation tool
PREFIX ccf: <http://purl.org/ccf/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX CTAnn: <https://purl.humanatlas.io/graph/ctann-crosswalks>

SELECT ?tool (COUNT(DISTINCT(?organ_id)) as ?organ_count) (COUNT(DISTINCT(?cell_id)) as ?cell_type_count)
FROM CTAnn:
WHERE {
  [] a ccf:AnnotationItem ;
    ccf:organ_id ?organ_id ;
    ccf:tool ?tool ;
    ccf:cell_id ?cell_id ;
  .
}
GROUP BY ?tool

```

([View Source](../../queries/hra/count-ct-per-tool.rq))
</details>

#### Results ([View CSV File](reports/hra/count-ct-per-tool.csv))

| tool | organ_count | cell_type_count |
| :--- | :--- | :--- |
| azimuth | 22 | 338 |
| celltypist | 24 | 297 |
| popv | 27 | 240 |
| pan-human-azimuth | 1 | 216 |


### <a id="ct-per-organ-per-tool"></a>Cell types per organ per annotation tool (ct-per-organ-per-tool)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell types per organ per annotation tool
PREFIX ccf: <http://purl.org/ccf/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX CTAnn: <https://purl.humanatlas.io/graph/ctann-crosswalks>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT ?Organ
  ?H5AD
  ?AS3D
  ?AS
  ?CT
  ?Azimuth
  ?CellTypist
  ?popV
  (IF(?AS3D > 0, 'x', '') as ?hasReferenceOrgan)
FROM HRA:
FROM CTAnn:
WHERE {
  {
    SELECT ?organ_id 
    	(SUM(IF(?tool = 'azimuth', ?cell_type_count, 0)) as ?Azimuth)
	    (SUM(IF(?tool = 'celltypist', ?cell_type_count, 0)) as ?CellTypist)
    	(SUM(IF(?tool = 'popv', ?cell_type_count, 0)) as ?popV)
    WHERE {
      {
        SELECT ?organ_id ?tool (COUNT(DISTINCT(?cell_id)) as ?cell_type_count)
        WHERE {
          ?annotation a ccf:AnnotationItem ;
            ccf:tool ?tool ;
            ccf:organ_id ?organ_id ;
            ccf:organ_level ?organ_level ;
            ccf:cell_id ?cell_id ;
          .
        }
        GROUP BY ?organ_id ?tool
      }
    }
    GROUP BY ?organ_id
  }

  {
    SELECT ?organ_id (SAMPLE(?_Organ) as ?Organ)
    WHERE {
      ?annotation a ccf:AnnotationItem ; ccf:organ_id ?organ_id .
      OPTIONAL {
        ?organ_id ccf:ccf_pref_label ?OrganPrefLabel .
      }
      OPTIONAL {
        ?organ_id rdfs:label ?OrganRdfsLabel .
      }
      BIND(STR(COALESCE(?OrganPrefLabel, ?OrganRdfsLabel, IF(?organ_id = <http://purl.obolibrary.org/obo/UBERON_0001134>, 'skeletal muscle tissue', ?organ_id))) as ?_Organ)
    }
    GROUP BY ?organ_id
  }
  
  {
    SELECT ?organ_id (COUNT(DISTINCT(?refOrganAs)) as ?AS3D) 
    WHERE {
      ?annotation a ccf:AnnotationItem ; ccf:organ_id ?organ_id .
      OPTIONAL {
        [] ccf:representation_of ?organ_id ;
          ccf:has_reference_organ ?refOrganIri .

        ?refOrganAs a ccf:SpatialEntity ;
          ccf:has_reference_organ ?refOrganIri .
      }
      OPTIONAL {
        [] ccf:representation_of [
          ccf:ccf_part_of ?organ_id
        ] ;
        ccf:has_reference_organ ?refOrganIri .

        ?refOrganAs a ccf:SpatialEntity ;
          ccf:has_reference_organ ?refOrganIri .
      }
    }
    GROUP BY ?organ_id
  }

  {
    SELECT ?organ_id (COUNT(DISTINCT(?child)) as ?AS)
    WHERE {
      ?annotation a ccf:AnnotationItem ; ccf:organ_id ?organ_id .
      OPTIONAL {
        ?organ_id ^ccf:ccf_part_of* ?child .
      }
    }
    GROUP BY ?organ_id
  }

  {
    SELECT ?organ_id (COUNT(DISTINCT(?ct)) as ?CT)
    WHERE {
      ?annotation a ccf:AnnotationItem ; ccf:organ_id ?organ_id .
      OPTIONAL {
        ?organ_id ^ccf:ccf_part_of* ?child .
        ?ct ccf:ccf_located_in ?child .
      }
    }
    GROUP BY ?organ_id
  }

  {
    SELECT ?organ_id (COUNT(DISTINCT(?dataset)) as ?H5AD) 
    WHERE {
      ?annotation a ccf:AnnotationItem ; ccf:organ_id ?organ_id .

      OPTIONAL {
        {
          GRAPH HRApopTestData: {
            [] ccf:generates_dataset ?dataset .
            ?dataset ccf:has_cell_summary [
                ccf:modality ?modality ;
              ] ;
              ccf:organ_id ?_organ_id .
            BIND(IRI(?_organ_id) as ?organ_id)
            FILTER(?modality = 'sc_transcriptomics')
          }
        }
        UNION
        {
          GRAPH HRApop: {
            [] ccf:generates_dataset ?dataset .
            ?dataset ccf:has_cell_summary [
                ccf:modality ?modality ;
              ] ;
              ccf:organ_id ?_organ_id .
            BIND(IRI(?_organ_id) as ?organ_id)
            FILTER(?modality = 'sc_transcriptomics')
          }
        }
      }
    }
    GROUP BY ?organ_id
  }

  FILTER(?Organ != 'respiratory system')
}
ORDER BY ?Organ

```

([View Source](../../queries/hra/ct-per-organ-per-tool.rq))
</details>

#### Results ([View CSV File](reports/hra/ct-per-organ-per-tool.csv))

| Organ | H5AD | AS3D | AS | CT | Azimuth | CellTypist | popV | hasReferenceOrgan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Bone marrow | 236 | 0 | 1 | 47 | 171 | 168 | 151 |  |
| Islet of Langerhans | 85 | 0 | 1 | 12 | 147 | 147 | 147 |  |
| Pancreas | 21 | 12 | 29 | 34 | 12 | 9 | 14 | x |
| Primary motor cortex | 165 | 0 | 1 | 139 | 147 | 147 | 147 |  |
| Small Intestine | 345 | 23 | 48 | 35 | 147 | 147 | 154 | x |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="named-graphs"></a>Named graphs in the db (named-graphs)

All named graphs in the queried SPARQL database

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Named graphs in the db
#+ description: All named graphs in the queried SPARQL database

SELECT ?graph (COUNT(*) as ?triples) WHERE {
  GRAPH ?graph {
    ?s ?p ?o .
  }
}
GROUP BY ?graph
ORDER BY ?graph

```

([View Source](../../queries/hra/named-graphs.rq))
</details>

#### Results ([View CSV File](reports/hra/named-graphs.csv))

| graph | triples |
| :--- | :--- |
| https://purl.humanatlas.io/collection/hra-api | 2006982 |
| https://purl.humanatlas.io/ds-graph/hra-pop-full | 308644 |
| https://purl.humanatlas.io/graph/ctann-crosswalks | 20185 |
| https://purl.humanatlas.io/graph/hra-pop | 704507 |
| https://purl.humanatlas.io/graph/hra-pop#as-as-sims | 636831 |
| https://purl.humanatlas.io/graph/hra-pop#distances | 5851620 |
| https://purl.humanatlas.io/graph/hra-pop#similarities | 244443411 |
| https://purl.humanatlas.io/graph/hra-pop#similarities-local | 244483380 |
| https://purl.humanatlas.io/graph/hra-pop#test-data | 4377105 |


### <a id="asctb-expr-trios-az"></a>AS, CT, BM, and mean Gene Expression from Azimuth in the HRA (asctb-expr-trios-az)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: AS, CT, BM, and mean Gene Expression from Azimuth in the HRA

PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX has_characterizing_biomarker_set: <http://purl.obolibrary.org/obo/RO_0015004>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>

SELECT DISTINCT ?as_label ?ct_label ?bm_label ?as ?ct ?bm ?bmType ?avg_mean_gene_expr
WHERE {
  {
    SELECT ?as ?ct ?bm (AVG(?gene_expr) as ?avg_mean_gene_expr)
      (SAMPLE(?ct_label) as ?ct_label)
      (SAMPLE(?bm_label) as ?bm_label)
    WHERE {
      [ ] rdf:type ccf:Dataset ;
          ccf:organ_id ?as_ ;
          ccf:has_cell_summary [
            ccf:cell_annotation_method ?tool ;
            ccf:modality ?modality ;
            ccf:has_cell_summary_row [
              ccf:cell_id ?ct ;
              ccf:cell_label ?ct_label ;
              ccf:gene_expr [
                ccf:gene_id ?bm ;
                ccf:gene_label ?bm_label ;
                ccf:mean_gene_expr_value ?gene_expr ;
              ]
            ]
          ] .
      BIND(IRI(STR(?as_)) as ?as)
      FILTER(?tool = 'azimuth')
    }
    GROUP BY ?as ?ct ?bm
  }

  OPTIONAL { ?as ccf:ccf_pref_label ?as_label . }

  BIND("gene" as ?bmType)
}
ORDER BY ?as_label

```

([View Source](../../queries/universe-ad-hoc/asctb-expr-trios-az.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/asctb-expr-trios-az.csv))

| as_label | ct_label | bm_label | as | ct | bm | bmType | avg_mean_gene_expr |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |


## universe-ad-hoc

### <a id="consortium-breakdown"></a>Universe consortium breakdown (consortium-breakdown)

For each consortium in the universe of datasets, show the number of contributed datasets, cells, and modality

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe consortium breakdown
#+ description: For each consortium in the universe of datasets, show the number of contributed datasets, cells, and modality

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX iftu: <https://hubmapconsortium.github.io/hra-ui/apps/ftu-ui/assets/TEMP/2d-ftu-illustrations.jsonld>

SELECT ?sex ?consortium (COUNT(DISTINCT(?dataset)) as ?dataset_count) (SUM(?cell_count) as ?cell_count) ?modality
FROM HRApop:
FROM HRApopTestData:
FROM HRApopFull:
WHERE {
  ?donor ccf:consortium_name ?consortium ;
    ccf:sex ?sex .

  {
    ?sample ccf:comes_from ?donor .
    # ?sample ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:comes_from ?donor .
    ?block ccf:subdivided_into_sections ?sample .
    # ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }

  OPTIONAL {
    SELECT ?dataset ?sex ?modality (MAX(?total_cell_count) as ?cell_count)
    WHERE {
      {
        SELECT ?dataset ?sex ?modality (SUM(?cell_count) as ?total_cell_count)
        WHERE {
          ?dataset a ccf:Dataset ;
          ccf:has_cell_summary [
            ccf:sex ?sex ;
            ccf:cell_annotation_method ?tool ;
            ccf:modality ?modality ;
            ccf:has_cell_summary_row [
              ccf:cell_count ?cell_count ;
            ] ;
          ] .
        }
        GROUP BY ?dataset ?sex ?modality ?tool
      }
    }
    GROUP BY ?dataset ?sex ?modality
  }
}
GROUP BY ?sex ?consortium ?modality
ORDER BY ?consortium ?sex

```

([View Source](../../queries/universe-ad-hoc/consortium-breakdown.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/consortium-breakdown.csv))

| sex | consortium | dataset_count | cell_count | modality |
| :--- | :--- | :--- | :--- | :--- |
| Female | GTEx | 7 | 47863 | sc_transcriptomics |
| Male | GTEx | 8 | 70113 | sc_transcriptomics |
| Female | HCA | 70 | 422351 | sc_transcriptomics |
| Male | HCA | 59 | 362641 | sc_transcriptomics |
| Female | HuBMAP | 28 | 10396211 | sc_proteomics |
| ... | ... | ... | ... | ... |


### <a id="count-consortium-breakdown"></a>Universe consortium breakdown with cell count (count-consortium-breakdown)

For each consortium in the universe of datasets, show the number of contributed datasets, cells, and modality

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe consortium breakdown with cell count
#+ description: For each consortium in the universe of datasets, show the number of contributed datasets, cells, and modality

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX iftu: <https://hubmapconsortium.github.io/hra-ui/apps/ftu-ui/assets/TEMP/2d-ftu-illustrations.jsonld>

SELECT ?consortium
  (COALESCE(?sex, 'Unknown') as ?sex)
  ?dataset_count
  (COALESCE(?atlas_dataset_count, 0) as ?atlas_dataset_count)
  (COALESCE(?test_dataset_count, 0) as ?test_dataset_count)
  (COALESCE(?excluded_dataset_count, 0) as ?excluded_dataset_count)
  (COALESCE(?no_rui_dataset_count, 0) as ?no_rui_dataset_count)
  (COALESCE(?no_summary_dataset_count, 0) as ?no_summary_dataset_count)
  (COALESCE(?modality, 'N/A') as ?modality)
  (COALESCE(?atlas_cell_count, 0) + COALESCE(?test_cell_count, 0) as ?cell_count)
WHERE {
  {
    SELECT ?consortium ?sex
      (COUNT(DISTINCT(?dataset)) as ?dataset_count)
    WHERE {
      GRAPH HRApopFull: {
        ?donor ccf:consortium_name ?consortium ;
          ccf:sex ?sex .

        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }
      }
    }
    GROUP BY ?consortium ?sex
  }

  OPTIONAL {
    SELECT ?consortium ?sex ?modality (SUM(xsd:decimal(?cell_count)) as ?atlas_cell_count)
    WHERE {
      GRAPH HRApop: {
        ?donor ccf:consortium_name ?consortium ;
          ccf:sex ?sex .

        {
          ?sample ccf:comes_from ?donor .
          ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }

        {
          ?dataset ccf:has_cell_summary [
            ccf:cell_annotation_method ?tool ;
            ccf:modality ?modality ;
            ccf:has_cell_summary_row [
              ccf:cell_count ?cell_count ;
            ] ;
          ] .
        }
      }
    }
    GROUP BY ?consortium ?sex ?modality
  }

  OPTIONAL {
    SELECT ?consortium ?sex ?modality (SUM(xsd:decimal(?cell_count)) as ?test_cell_count)
    WHERE {
      GRAPH HRApopTestData: {
        ?donor ccf:consortium_name ?consortium ;
          ccf:sex ?sex .

        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }

        {
          ?dataset ccf:has_cell_summary [
            ccf:cell_annotation_method ?tool ;
            ccf:modality ?modality ;
            ccf:has_cell_summary_row [
              ccf:cell_count ?cell_count ;
            ] ;
          ] .
        }
      }
    }
    GROUP BY ?consortium ?sex ?modality
  }

  OPTIONAL {
    SELECT ?consortium ?sex
      (COUNT(DISTINCT(?atlas_dataset)) as ?atlas_dataset_count)
    WHERE {
      GRAPH HRApop: {
        ?donor ccf:consortium_name ?consortium ;
          ccf:sex ?sex .

        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?atlas_dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?atlas_dataset .
        }
      }
    }
    GROUP BY ?consortium ?sex
  }

  OPTIONAL {
    SELECT ?consortium ?sex
      (COUNT(DISTINCT(?test_dataset)) as ?test_dataset_count)
    WHERE {
      GRAPH HRApopTestData: {
        ?donor ccf:consortium_name ?consortium ;
          ccf:sex ?sex .

        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?test_dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?test_dataset .
        }
      }
    }
    GROUP BY ?consortium ?sex
  }

  OPTIONAL {
    SELECT ?consortium ?sex
      (COUNT(DISTINCT(?dataset)) as ?excluded_dataset_count)
    WHERE {
      GRAPH HRApopFull: {
        ?donor ccf:consortium_name ?consortium ;
          ccf:sex ?sex .

        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }
      }

      FILTER(NOT EXISTS {
        GRAPH HRApop: {
          [] ccf:generates_dataset ?dataset;
        }
      } && NOT EXISTS {
        GRAPH HRApopTestData: {
          [] ccf:generates_dataset ?dataset;
        }
      })
    }
    GROUP BY ?consortium ?sex
  }

  OPTIONAL {
    SELECT ?consortium ?sex
      (COUNT(DISTINCT(?dataset)) as ?no_rui_dataset_count)
    WHERE {
      GRAPH HRApopFull: {
        ?donor ccf:consortium_name ?consortium ;
          ccf:sex ?sex .

        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }

        FILTER(NOT EXISTS {
          ?donor ccf:consortium_name ?consortium .
          {
            ?sample ccf:comes_from ?donor .
            ?sample ccf:has_registration_location ?rui_location .
            ?sample ccf:generates_dataset ?dataset .
          } UNION {
            ?block ccf:comes_from ?donor .
            ?block ccf:subdivided_into_sections ?sample .
            ?block ccf:has_registration_location ?rui_location .
            ?sample ccf:generates_dataset ?dataset .
          }
        })
      }
    }
    GROUP BY ?consortium ?sex
  }

  OPTIONAL {
    SELECT ?consortium ?sex
      (COUNT(DISTINCT(?dataset)) as ?no_summary_dataset_count)
    WHERE {
      GRAPH HRApopFull: {
        ?donor ccf:consortium_name ?consortium ;
          ccf:sex ?sex .

        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }
      }

      FILTER(NOT EXISTS {
        GRAPH HRApop: {
          ?dataset ccf:has_cell_summary [] .
        }
      } && NOT EXISTS {
        GRAPH HRApopTestData: {
          ?dataset ccf:has_cell_summary [] .
        }
      })
    }
    GROUP BY ?consortium ?sex
  }
}
ORDER BY ?consortium ?sex

```

([View Source](../../queries/universe-ad-hoc/count-consortium-breakdown.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-consortium-breakdown.csv))

| consortium | sex | dataset_count | atlas_dataset_count | test_dataset_count | excluded_dataset_count | no_rui_dataset_count | no_summary_dataset_count | modality | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| <Consortium Name> | Female | 106 | 0 | 106 | 0 | 0 | 106 | N/A | 0 |
| Allen Institute for Brain Science | Female | 5 | 0 | 5 | 0 | 0 | 5 | N/A | 0 |
| Allen Institute for Brain Science | Male | 5 | 0 | 5 | 0 | 0 | 5 | N/A | 0 |
| CxG | Female | 4635 | 0 | 4633 | 2 | 4635 | 2 | sc_transcriptomics | 46322701 |
| CxG | Male | 4761 | 0 | 4754 | 7 | 4761 | 7 | sc_transcriptomics | 54306428 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="count-consortium-datasets"></a>Universe consortium breakdown (count-consortium-datasets)

For each consortium in the universe of datasets, show the number of contributed datasets, cells, and modality

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe consortium breakdown
#+ description: For each consortium in the universe of datasets, show the number of contributed datasets, cells, and modality

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX iftu: <https://hubmapconsortium.github.io/hra-ui/apps/ftu-ui/assets/TEMP/2d-ftu-illustrations.jsonld>

SELECT ?consortium 
  ?dataset_count
  (COALESCE(?atlas_dataset_count, 0) as ?atlas_dataset_count)
  (COALESCE(?test_dataset_count, 0) as ?test_dataset_count)
  (COALESCE(?excluded_dataset_count, 0) as ?excluded_dataset_count)
  (COALESCE(?no_rui_dataset_count, 0) as ?no_rui_dataset_count)
  (COALESCE(?no_summary_dataset_count, 0) as ?no_summary_dataset_count)
WHERE {
  {
    SELECT ?consortium
      (COUNT(DISTINCT(?dataset)) as ?dataset_count)
    WHERE {
      GRAPH HRApopFull: {
        ?donor ccf:consortium_name ?consortium .

        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }
      }
    }
    GROUP BY ?consortium
  }

  OPTIONAL {
    SELECT ?consortium
      (COUNT(DISTINCT(?atlas_dataset)) as ?atlas_dataset_count)
    WHERE {
      GRAPH HRApop: {
        ?donor ccf:consortium_name ?consortium .
        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?atlas_dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?atlas_dataset .
        }
      }
    }
    GROUP BY ?consortium
  }

  OPTIONAL {
    SELECT ?consortium
      (COUNT(DISTINCT(?test_dataset)) as ?test_dataset_count)
    WHERE {
      GRAPH HRApopTestData: {
        ?donor ccf:consortium_name ?consortium .
        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?test_dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?test_dataset .
        }
      }
    }
    GROUP BY ?consortium
  }

  OPTIONAL {
    SELECT ?consortium
      (COUNT(DISTINCT(?dataset)) as ?excluded_dataset_count)
    WHERE {
      GRAPH HRApopFull: {
        ?donor ccf:consortium_name ?consortium .

        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }
      }

      FILTER(NOT EXISTS {
        GRAPH HRApop: {
          [] ccf:generates_dataset ?dataset;
        }
      } && NOT EXISTS {
        GRAPH HRApopTestData: {
          [] ccf:generates_dataset ?dataset;
        }
      })
    }
    GROUP BY ?consortium
  }

  OPTIONAL {
    SELECT ?consortium
      (COUNT(DISTINCT(?dataset)) as ?no_rui_dataset_count)
    WHERE {
      GRAPH HRApopFull: {
        ?donor ccf:consortium_name ?consortium .
        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }

        FILTER(NOT EXISTS {
          ?donor ccf:consortium_name ?consortium .
          {
            ?sample ccf:comes_from ?donor .
            ?sample ccf:has_registration_location ?rui_location .
            ?sample ccf:generates_dataset ?dataset .
          } UNION {
            ?block ccf:comes_from ?donor .
            ?block ccf:subdivided_into_sections ?sample .
            ?block ccf:has_registration_location ?rui_location .
            ?sample ccf:generates_dataset ?dataset .
          }
        })
      }
    }
    GROUP BY ?consortium
  }

  OPTIONAL {
    SELECT ?consortium
      (COUNT(DISTINCT(?dataset)) as ?no_summary_dataset_count)
    WHERE {
      GRAPH HRApopFull: {
        ?donor ccf:consortium_name ?consortium .
        {
          ?sample ccf:comes_from ?donor .
          # ?sample ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        } UNION {
          ?block ccf:comes_from ?donor .
          ?block ccf:subdivided_into_sections ?sample .
          # ?block ccf:has_registration_location ?rui_location .
          ?sample ccf:generates_dataset ?dataset .
        }
      }

      FILTER(NOT EXISTS {
        GRAPH HRApop: {
          ?dataset ccf:has_cell_summary [] .
        }
      } && NOT EXISTS {
        GRAPH HRApopTestData: {
          ?dataset ccf:has_cell_summary [] .
        }
      })
    }
    GROUP BY ?consortium
  }
}
ORDER BY ?consortium

```

([View Source](../../queries/universe-ad-hoc/count-consortium-datasets.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-consortium-datasets.csv))

| consortium | dataset_count | atlas_dataset_count | test_dataset_count | excluded_dataset_count | no_rui_dataset_count | no_summary_dataset_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| <Consortium Name> | 106 | 0 | 106 | 0 | 0 | 106 |
| Allen Institute for Brain Science | 10 | 0 | 10 | 0 | 0 | 10 |
| CxG | 10102 | 0 | 10091 | 11 | 10102 | 11 |
| GTEx | 74 | 15 | 59 | 0 | 9 | 50 |
| GUDMAP | 12 | 0 | 12 | 0 | 0 | 12 |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="count-dataset-samples"></a>Universe Sample and Dataset Counts (count-dataset-samples)

Counts the unique number of samples and associated datasets considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Sample and Dataset Counts
#+ description: Counts the unique number of samples and associated datasets considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT (COUNT(DISTINCT ?sample) AS ?sample_count) (COUNT(DISTINCT ?dataset) AS ?dataset_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?sample a ccf:Sample ;
    ccf:generates_dataset ?dataset .
}

```

([View Source](../../queries/universe-ad-hoc/count-dataset-samples.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-dataset-samples.csv))

| sample_count | dataset_count |
| :--- | :--- |
| 13289 | 18131 |


### <a id="count-datasets"></a>Universe Dataset Count (count-datasets)

Counts the unique number of datasets considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Dataset Count
#+ description: Counts the unique number of datasets considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT (COUNT(DISTINCT ?dataset) AS ?dataset_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?dataset a ccf:Dataset.
}

```

([View Source](../../queries/universe-ad-hoc/count-datasets.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-datasets.csv))

| dataset_count |
| :--- |
| 18131 |


### <a id="count-donors-portals"></a>Universe Donor and Portal Counts (count-donors-portals)

Counts the unique number of donors and portal/consortia considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Donor and Portal Counts
#+ description: Counts the unique number of donors and portal/consortia considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT ?sex (COUNT(DISTINCT ?donor) AS ?donor_count) (COUNT(DISTINCT ?consortium_name) AS ?portal_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?donor a ccf:Donor ;
    ccf:consortium_name ?consortium_name ;
    ccf:sex ?sex .
}
GROUP BY ?sex
ORDER BY ?sex
```

([View Source](../../queries/universe-ad-hoc/count-donors-portals.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-donors-portals.csv))

| sex | donor_count | portal_count |
| :--- | :--- | :--- |
| Female | 4080 | 16 |
| Male | 3911 | 17 |
| Unknown | 529 | 1 |


### <a id="count-donors-samples"></a>Universe Donor and Sample Counts (count-donors-samples)

Counts the unique number of donors and samples considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Donor and Sample Counts
#+ description: Counts the unique number of donors and samples considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT ?sex (COUNT(DISTINCT ?sample) AS ?sample_count) (COUNT(DISTINCT ?donor) AS ?donor_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?sample ccf:comes_from ?donor .
  ?donor ccf:sex ?sex .
}
GROUP BY ?sex
ORDER BY ?sex

```

([View Source](../../queries/universe-ad-hoc/count-donors-samples.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-donors-samples.csv))

| sex | sample_count | donor_count |
| :--- | :--- | :--- |
| Female | 5999 | 4073 |
| Male | 5826 | 3904 |
| Unknown | 1072 | 895 |


### <a id="count-donors"></a>Universe Donor Count (count-donors)

Counts the unique number of donors considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Donor Count
#+ description: Counts the unique number of donors considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT ?sex (COUNT(DISTINCT ?donor) AS ?donor_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?donor a ccf:Donor ;
    ccf:sex ?sex .
}
GROUP BY ?sex
ORDER BY ?sex

```

([View Source](../../queries/universe-ad-hoc/count-donors.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-donors.csv))

| sex | donor_count |
| :--- | :--- |
| Female | 4080 |
| Male | 3911 |
| Unknown | 895 |


### <a id="count-extraction-sites-with-slice"></a>Universe Extraction Sites with `slice_count`s Count (count-extraction-sites-with-slice)

Counts the unique number of extraction sites considered or used in HRApop that have a ccf:slice_count > 0

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Extraction Sites with `slice_count`s Count
#+ description: Counts the unique number of extraction sites considered or used in HRApop that have a ccf:slice_count > 0

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT (COUNT(DISTINCT ?spatial_entity) as ?extraction_site_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?spatial_entity a ccf:SpatialEntity;
    ccf:slice_count ?slice_count .
  FILTER (?slice_count > 0)
}

```

([View Source](../../queries/universe-ad-hoc/count-extraction-sites-with-slice.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-extraction-sites-with-slice.csv))

| extraction_site_count |
| :--- |
| 175 |


### <a id="count-extraction-sites"></a>Universe Extraction Site Count (count-extraction-sites)

Counts the unique number of extraction sites considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Extraction Site Count
#+ description: Counts the unique number of extraction sites considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT (COUNT(DISTINCT ?spatial_entity) as ?extraction_site_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?spatial_entity a ccf:SpatialEntity .
}

```

([View Source](../../queries/universe-ad-hoc/count-extraction-sites.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-extraction-sites.csv))

| extraction_site_count |
| :--- |
| 1257 |


### <a id="count-sample-description"></a>Universe Samples with Description Counts (count-sample-description)

Counts the unique number of samples with descriptions considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Samples with Description Counts
#+ description: Counts the unique number of samples with descriptions considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT (COUNT(DISTINCT ?sample) AS ?sample_count) (COUNT(DISTINCT ?description) AS ?description_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?sample a ccf:Sample ;
    rdfs:comment ?description .
}

```

([View Source](../../queries/universe-ad-hoc/count-sample-description.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-sample-description.csv))

| sample_count | description_count |
| :--- | :--- |
| 3608 | 648 |


### <a id="count-samples"></a>Universe Sample Count (count-samples)

Counts the unique number of samples (tissue block or tissue section) considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Sample Count
#+ description: Counts the unique number of samples (tissue block or tissue section) considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT (COUNT(DISTINCT ?sample) as ?sample_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?sample a ccf:Sample .
}

```

([View Source](../../queries/universe-ad-hoc/count-samples.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-samples.csv))

| sample_count |
| :--- |
| 14883 |


### <a id="count-spatial-placements"></a>Universe Spatial Placement Count (count-spatial-placements)

Counts the unique number of spatial placements considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Spatial Placement Count
#+ description: Counts the unique number of spatial placements considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT (COUNT(DISTINCT ?spatial_placement) AS ?spatial_placement_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?spatial_placement a ccf:SpatialPlacement .
}

```

([View Source](../../queries/universe-ad-hoc/count-spatial-placements.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/count-spatial-placements.csv))

| spatial_placement_count |
| :--- |
| 1279 |


### <a id="cxg-collections"></a>Universe CxG collections (cxg-collections)

Universe CellxGene collections and number of datasets extracted from each

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe CxG collections
#+ description: Universe CellxGene collections and number of datasets extracted from each

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT ?collection (COUNT(DISTINCT(?dataset)) as ?dataset_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  [] ccf:generates_dataset ?dataset .
  FILTER(STRSTARTS(STR(?dataset), 'https://api.cellxgene.cziscience.com'))
  BIND(STRBEFORE(STR(?dataset), '#') as ?_collection)
  BIND(IF(STRLEN(?_collection) = 0, STRBEFORE(STR(?dataset), '_'), ?_collection) as ?collection)
}
GROUP BY ?collection
ORDER BY DESC(?dataset_count)

```

([View Source](../../queries/universe-ad-hoc/cxg-collections.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/cxg-collections.csv))

| collection | dataset_count |
| :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72 | 82 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5 | 47 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837 | 3 |


### <a id="data-provenance"></a>data-provenance



<details>
  <summary>View Sparql Query</summary>

```sparql
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT ?label ?count
FROM HRA:
FROM HRApop:
FROM HRApopFull:
FROM HRApopTestData:
WHERE {
  {
    SELECT ("HuBMAP datasets" as ?label) (COUNT(DISTINCT ?dataset) as ?count) (1 as ?order)
    WHERE {
      ?dataset a ccf:Dataset .
      FILTER(STRSTARTS(STR(?dataset), "https://entity.api.hubmapconsortium.org/entities/"))
    }
  }
  UNION
  {
    SELECT ("SenNet datasets" as ?label) (COUNT(DISTINCT ?dataset) as ?count) (2 as ?order)
    WHERE {
      ?dataset a ccf:Dataset .
      FILTER(STRSTARTS(STR(?dataset), "https://entity.api.sennetconsortium.org/entities/"))
    }
  }
  UNION
  {
    SELECT ("tissue donors" as ?label) (COUNT(DISTINCT ?donor) as ?count) (3 as ?order)
    WHERE {
      ?donor a ccf:Donor .
    }
  }
  UNION
  {
    SELECT ("organs" as ?label) (COUNT(DISTINCT ?organ) as ?count) (4 as ?order)
    WHERE {
      ?as ccf:has_cell_summary [] .
      [] ccf:representation_of ?as ;
        ccf:has_reference_organ [
          ccf:representation_of ?organ ;
        ] .
    }
  }
  UNION
  {
    SELECT ("anatomical structures" as ?label) (COUNT(DISTINCT ?as) as ?count) (5 as ?order)
    WHERE {
      ?as ccf:has_cell_summary [] .
      [] ccf:representation_of ?as .
    }
  }
  UNION
  {
    SELECT ("cells" as ?label) (SUM(?cell_count) as ?count) (6 as ?order)
    WHERE {
      [] a ccf:Dataset ;
         ccf:has_cell_summary [
            ccf:has_cell_summary_row [
              ccf:cell_count ?cell_count ;
            ] ;
         ] .
    }
  }
}
ORDER BY ?order


```

([View Source](../../queries/universe-ad-hoc/data-provenance.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/data-provenance.csv))

| label | count |
| :--- | :--- |
| HuBMAP datasets | 401 |
| SenNet datasets | 93 |
| tissue donors | 170 |
| organs | 22 |
| anatomical structures | 97 |
| cells | 52390545 |


### <a id="dataset-cell-count-check"></a>dataset-cell-count-check



<details>
  <summary>View Sparql Query</summary>

```sparql
PREFIX ccf: <http://purl.org/ccf/>
PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT DISTINCT ?dataset ?count_dx ?tool ?cell_count ?tool_cell_count
FROM HRApop:
FROM HRApopTestData:
FROM HRApopFull:
WHERE {
  ?dataset ccf:cell_count ?cell_count ;
  ccf:gene_count ?gene_count ;
    a ccf:Dataset .

  OPTIONAL {
    SELECT ?dataset ?tool (SUM(?cell_count) as ?tool_cell_count)
    WHERE {
      ?dataset ccf:has_cell_summary [
        ccf:cell_annotation_method ?tool ;
        ccf:has_cell_summary_row [
          ccf:cell_count ?cell_count ;
        ] ;
      ] .
    }
    GROUP BY ?dataset ?tool
  }

  BIND(xsd:integer(COALESCE(?tool_cell_count, ?cell_count)) - xsd:integer(?cell_count) as ?count_dx)

  FILTER(BOUND(?tool_cell_count))
  # FILTER(BOUND(?tool_cell_count) && ?count_dx < 0)
}
ORDER BY ?count_dx ?dataset ?tool

```

([View Source](../../queries/universe-ad-hoc/dataset-cell-count-check.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/dataset-cell-count-check.csv))

| dataset | count_dx | tool | cell_count | tool_cell_count |
| :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/00109df5-7810-4542-8db5-2288c46e0424#A549$pulmonary%20alveolar%20epithelial%20cell |  | pan-human-azimuth | 143015 | 61266 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/00109df5-7810-4542-8db5-2288c46e0424#K562$cultured%20cell |  | pan-human-azimuth | 146752 | 79052 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/00109df5-7810-4542-8db5-2288c46e0424#MCF7$mammary%20gland%20epithelial%20cell |  | pan-human-azimuth | 292010 | 113085 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-LN$lymph%20node |  | pan-human-azimuth | 26027 | 11060 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-LN$lymph%20node |  | popv | 26027 | 23541 |
| ... | ... | ... | ... | ... |


### <a id="dataset-info"></a>Dataset information (dataset-info)

Dataset technology, description, annotation method, and cell type counts

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Dataset information
#+ description: Dataset technology, description, annotation method, and cell type counts

PREFIX ccf: <http://purl.org/ccf/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT DISTINCT ?sex ?dataset ?technology ?description ?annotation_method (COUNT(DISTINCT ?cell_id) as ?unique_cell_type_count)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?dataset a ccf:Dataset.
  OPTIONAL {
    ?dataset ccf:technology ?technology ;
      rdfs:comment ?description ;
  }
  OPTIONAL {
    ?dataset ccf:has_cell_summary ?cell_summary .
    ?cell_summary ccf:cell_annotation_method ?annotation_method ;
                  ccf:sex ?sex ;
                  ccf:has_cell_summary_row [
                    ccf:cell_id ?cell_id
                  ] .
  }
}
GROUP BY ?sex ?dataset ?technology ?description ?annotation_method

```

([View Source](../../queries/universe-ad-hoc/dataset-info.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/dataset-info.csv))

| sex | dataset | technology | description | annotation_method | unique_cell_type_count |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Male | https://entity.api.hubmapconsortium.org/entities/21043afd6be7ec258f8a9fa1577c41b5 | RNAseq | Dataset Type: RNAseq [Salmon] | pan-human-azimuth | 27 |
| Male | https://entity.api.hubmapconsortium.org/entities/e488c9a612abf6fedef3cea5e7bb6141 | RNAseq | Dataset Type: RNAseq [Salmon] | celltypist | 48 |
| Male | https://entity.api.hubmapconsortium.org/entities/e488c9a612abf6fedef3cea5e7bb6141 | RNAseq | Dataset Type: RNAseq [Salmon] | popv | 32 |
| Male | https://entity.api.hubmapconsortium.org/entities/e488c9a612abf6fedef3cea5e7bb6141 | RNAseq | Dataset Type: RNAseq [Salmon] | pan-human-azimuth | 49 |
| Female | https://entity.api.hubmapconsortium.org/entities/eb961e5dc50239d35f5398903c64e2b9 | RNAseq | Dataset Type: RNAseq [Salmon] | pan-human-azimuth | 29 |
| ... | ... | ... | ... | ... | ... |


### <a id="dataset-publications"></a>Dataset Publications (dataset-publications)

Dataset publication information

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Dataset Publications
#+ description: Dataset publication information

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT DISTINCT ?dataset ?publication ?publication_lead_author ?publication_title
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?sample ccf:generates_dataset ?dataset .
  OPTIONAL { ?dataset ccf:publication ?publication . }
  OPTIONAL { ?dataset ccf:publication_lead_author ?publication_lead_author . }
  OPTIONAL { ?dataset ccf:publication_title ?publication_title . }
}

```

([View Source](../../queries/universe-ad-hoc/dataset-publications.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/dataset-publications.csv))

| dataset | publication | publication_lead_author | publication_title |
| :--- | :--- | :--- | :--- |
| https://entity.api.hubmapconsortium.org/entities/0b0ef5c2b8786644f0b6bdef1c1d7a4f |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/0b528e5d674fadada32215c364f6fcaa |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/0b590c9e3a62178da592e85572e2f1bf |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/0b6f63f2bd61a8c091fc7afc0f318ad1 |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/148d6445ed0cda5cabae377829013b4c |  |  |  |
| ... | ... | ... | ... |


### <a id="donor-info"></a>Universe Donor information (donor-info)

Universe donor information, including provider name, age, sex, bmi, and race

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Donor information
#+ description: Universe donor information, including provider name, age, sex, bmi, and race

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT DISTINCT ?donor ?consortium ?tissue_provider ?age ?sex ?bmi ?race
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?donor a ccf:Donor .
  OPTIONAL { ?donor ccf:consortium_name ?consortium . }
  OPTIONAL { ?donor ccf:tissue_provider_name ?tissue_provider . }
  OPTIONAL { ?donor ccf:age ?age . }
  OPTIONAL { ?donor ccf:sex ?sex . }
  OPTIONAL { ?donor ccf:bmi ?bmi . }
  OPTIONAL { ?donor ccf:race ?race . }
}

```

([View Source](../../queries/universe-ad-hoc/donor-info.rq))
</details>

#### Results ([View CSV File](reports/atlas/donor-info.csv))

| donor | consortium | tissue_provider | age | sex | bmi | race |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://entity.api.hubmapconsortium.org/entities/c37ed0a5fa384dceb5d8914e221e9f08 | HuBMAP | RTI-General Electric | 72 | Male | 27.4 | White |
| https://entity.api.hubmapconsortium.org/entities/cc561d0d3840fe8482938208fe032a54 | HuBMAP | TMC-UConn | 31 | Female | 29.4 | Black or African American |
| https://entity.api.hubmapconsortium.org/entities/d15df1013d0948b4416a88fec00f5385 | HuBMAP | TMC-UCSD | 59 | Male | 22.57 | White |
| https://entity.api.hubmapconsortium.org/entities/d37df2cad4e80dc368763caefccf7140 | HuBMAP | TMC-UConn | 49 | Male | 31.2 | White |
| https://entity.api.hubmapconsortium.org/entities/d3ad6409d2ad37ef7dbcc90ccc199f68 | HuBMAP | TMC-Stanford | 78 | Male | 35.1 | Black or African American |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="donors-portals"></a>Universe Donors and Portals (donors-portals)

Donors and portal/consortia considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Donors and Portals
#+ description: Donors and portal/consortia considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT DISTINCT ?sex ?donor ?consortium_name
FROM HRApop:
FROM HRApopFull:
WHERE {
    ?donor a ccf:Donor ;
        ccf:consortium_name ?consortium_name ;
        ccf:sex ?sex .
}
ORDER BY ?sex ?consortium_name

```

([View Source](../../queries/universe-ad-hoc/donors-portals.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/donors-portals.csv))

| sex | donor | consortium_name |
| :--- | :--- | :--- |
| Female | http://purl.org/ccf/10.1016/j.celrep.2022.111838#Donor1 | <Consortium Name> |
| Female | http://purl.org/ccf/10.1016/j.celrep.2022.111838#Donor2 | <Consortium Name> |
| Female | http://purl.org/ccf/10.1016/j.celrep.2022.111838#Donor3 | <Consortium Name> |
| Female | http://purl.org/ccf/10.1016/j.celrep.2022.111838#Donor4 | <Consortium Name> |
| Female | http://purl.org/ccf/10.1016/j.celrep.2022.111838#Donor5 | <Consortium Name> |
| ... | ... | ... |


### <a id="extraction-site-slices"></a>Universe Extraction Sites with `slice_count`s Count (extraction-site-slices)

extraction sites with `slice_counts` considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Extraction Sites with `slice_count`s Count
#+ description: extraction sites with `slice_counts` considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT DISTINCT ?spatial_entity ?slice_count
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?spatial_entity ccf:slice_count ?slice_count .
}

```

([View Source](../../queries/universe-ad-hoc/extraction-site-slices.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/extraction-site-slices.csv))

| spatial_entity | slice_count |
| :--- | :--- |
| http://purl.org/ccf/1.5/09681d25-f08d-40ff-81cb-a731610aa84d | 1 |
| http://purl.org/ccf/1.5/0b234d74-b8f9-449f-8416-ef10e33d2f7f | 1 |
| http://purl.org/ccf/1.5/23e9d58a-c93f-414b-baf9-3692ea20fd1c | 1 |
| http://purl.org/ccf/1.5/32214c14-bf21-4bf6-aea9-58ab721128ab | 1 |
| http://purl.org/ccf/1.5/3425fa0c-c5cb-4493-b6ba-41520334b13e | 1 |
| ... | ... |


### <a id="extraction-sites"></a>Universe Extraction Sites with `slice_count`s Count (extraction-sites)

extraction sites considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Extraction Sites with `slice_count`s Count
#+ description: extraction sites considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT DISTINCT ?extraction_site
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?extraction_site a ccf:SpatialEntity.
}

```

([View Source](../../queries/universe-ad-hoc/extraction-sites.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/extraction-sites.csv))

| extraction_site |
| :--- |
| http://purl.org/ccf/1.5/65f3b03b-1eb1-487d-8c02-c4d107cc9400 |
| http://purl.org/ccf/1.5/66e31648-94e6-4c22-ac76-2fdef2133aff |
| http://purl.org/ccf/1.5/67e5f7e1-7b82-4aff-890e-9f8fc1f5c89b |
| http://purl.org/ccf/1.5/69fc9f2f-4fd2-44ce-8e48-dbc5e19f1516 |
| http://purl.org/ccf/1.5/6a6392a9-8ac1-4666-a684-83d310ca055f |
| ... |


### <a id="ftu-datasets-anxa10"></a>ftu-datasets-anxa10



<details>
  <summary>View Sparql Query</summary>

```sparql
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT *
FROM HRApopTestData:
FROM HRApop:
WHERE {
  ?dataset ccf:has_cell_summary [
    ccf:cell_annotation_method ?tool ;
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_id ;
      ccf:cell_label ?cell_label ;
      ccf:cell_count ?cell_count ;
      ccf:gene_expr [
        ccf:gene_id ?gene_id ;
        ccf:gene_label ?gene_label ;
        ccf:mean_gene_expr_value ?gene_expr ;
      ]
    ]
  ] .
  FILTER(?gene_label = "ANXA10")
}

```

([View Source](../../queries/universe-ad-hoc/ftu-datasets-anxa10.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/ftu-datasets-anxa10.csv))

| tool | cell_id | cell_label | cell_count | gene_id | gene_label | gene_expr | dataset |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |



### <a id="heart-and-lung-datasets"></a>Heart and Lung dataset info (heart-and-lung-datasets)

Heart and lung datasets considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Heart and Lung dataset info
#+ description: Heart and lung datasets considered or used in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?dataset ?organ ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?study_paper ?doi ?lead_author
FROM HRApopFull:
FROM HRA:
WHERE {
  VALUES (?organIri ?organ) {
    (<http://purl.obolibrary.org/obo/UBERON_0000948> "Heart") # Heart
    (<http://purl.obolibrary.org/obo/UBERON_0002182> "Lung") # Main Bronchus
    (<http://purl.obolibrary.org/obo/UBERON_0002048> "Lung") # Lung
    (<http://purl.obolibrary.org/obo/UBERON_0001004> "Lung") # Respiratory System
  }

  [] ccf:generates_dataset ?dataset .

  OPTIONAL { ?dataset ccf:publication ?doi . }
  OPTIONAL { ?dataset ccf:publication_title ?study_paper . }
  OPTIONAL { ?dataset ccf:publication_lead_author ?lead_author . }

  OPTIONAL {
    {
      ?sample ccf:comes_from ?donor .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:comes_from ?donor .
      ?block ccf:subdivided_into_sections ?sample .
      ?sample ccf:generates_dataset ?dataset .
    }

    ?donor ccf:consortium_name ?portal ;
      ccf:sex ?sex .
  }

  {
    SELECT ?dataset ?rui_location ?ruiOrganIri
    WHERE {
      {
        ?sample ccf:comes_from ?donor .
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:comes_from ?donor .
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .

      ?ref_organ ccf:representation_of ?refOrganIri .
      ?refOrganIri ccf:ccf_part_of* ?ruiOrganIri .
    }
  }
  UNION
  {
    ?dataset ccf:organ_id ?reportedOrganIri .
  }

  OPTIONAL {
    SELECT ?dataset (SAMPLE(?cell_count_by_tool) as ?cell_count)
    WHERE {
      {
        SELECT ?dataset ?tool (COUNT(?count) as ?cell_count_by_tool)
        WHERE {
          {
            GRAPH HRApop: {
              ?dataset ccf:has_cell_summary [
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
          UNION
          {
            GRAPH hra-pop:test-data {
              ?dataset ccf:has_cell_summary [
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
        }
        GROUP BY ?dataset ?tool
      }
    }
    GROUP BY ?dataset
  }

  BIND (IF(BOUND(?ruiOrganIri) && ?ruiOrganIri = ?organIri, ?organIri,
    IF(BOUND(?reportedOrganIri) && ?reportedOrganIri = STR(?organIri), ?organIri, false)) as ?organ_id)

  BIND (BOUND(?portal) && (?portal = 'HuBMAP' || ?portal = 'SenNet' || ?portal = 'GTEx') as ?in_high_quality_portal)

  BIND (EXISTS {
    GRAPH HRApop: {
      ?dataset ccf:has_cell_summary [];
    }
  } as ?in_atlas)
  BIND (BOUND(?rui_location) as ?has_extraction_site)
  BIND (EXISTS {
    {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [];
      }
    }
    UNION
    {
      GRAPH hra-pop:test-data {
        ?dataset ccf:has_cell_summary [];
      }
    }
  } as ?has_cell_summary)
  BIND (BOUND(?doi) as ?has_publication)

  FILTER(?organ_id = ?organIri)
}
ORDER BY ?organ ?portal ?dataset

```

([View Source](../../queries/universe-ad-hoc/heart-and-lung-datasets.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/heart-and-lung-datasets.csv))

| sex | dataset | organ | cell_count | in_atlas | has_cell_summary | has_extraction_site | has_publication | in_high_quality_portal | portal | study_paper | doi | lead_author |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | http://purl.org/ccf/GTEX-13N11-5002-SM-H5JDV | Heart |  | false | false | true | false | true | GTEx |  |  |  |
| Male | http://purl.org/ccf/GTEX-15RIE-5015-SM-H8L6X | Heart |  | false | false | true | false | true | GTEx |  |  |  |
| Female | http://purl.org/ccf/GTEX-1ICG6-5003-SM-GHS9A | Heart |  | false | false | true | false | true | GTEx |  |  |  |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-13N11-5002 | Heart |  | false | false | true | true | true | GTEx | Single-nucleus cross-tissue molecular reference maps toward understanding disease gene function | 10.1126/science.abl4294 |  |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-13N11-5002-SM-H5JDV | Heart | 40 | true | true | true | true | true | GTEx | Single-nucleus cross-tissue molecular reference maps toward understanding disease gene function | https://doi.org/10.1126/science.abl4290 | G��kcen Eraslan |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="hepatocyte-popv-datasets"></a>Popv cells information (hepatocyte-popv-datasets)

Information about cells mapped via Popv considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Popv cells information
#+ description: Information about cells mapped via Popv considered or used in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?dataset
  (REPLACE(?organLabel, "skin of body", "skin") as ?Organ_Label)
  (REPLACE(STR(?organ_id), STR(UBERON:), "UBERON:") as ?Organ_ID)
  (?cell_label as ?Annotation_Label)
  (REPLACE(STR(?cell_id), STR(CL:), "CL:") AS ?Annotation_Label_ID)
  (?cell_label as ?CL_Label)
  (REPLACE(STR(?cell_id), STR(CL:), "CL:") AS ?CL_ID)
  # ("" as ?CL_Match)
  # (COUNT(DISTINCT(?dataset)) as ?dataset_count)
  (?count as ?cell_count)
FROM HRA:
FROM HRApop:
FROM HRApopTestData:
WHERE {
  VALUES (?cell_id) {
    (CL:0000182)
  }
  VALUES (?organ_id) {
    (UBERON:0000948)
  }
  [] ccf:generates_dataset ?dataset .

  ?dataset ccf:has_cell_summary [
    ccf:cell_annotation_method ?tool ;
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_id ;
      ccf:cell_label ?cell_label ;
      ccf:cell_count ?count ;
    ]
  ] .

  OPTIONAL {
    SELECT ?dataset ?refOrganIri 
      (COALESCE(?refOrganRdfsLabel, ?refOrganCcfLabel) as ?refOrganLabel)
    WHERE {
      {
        ?sample ccf:comes_from ?donor .
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:comes_from ?donor .
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .

      ?ref_organ ccf:representation_of ?refOrganIri .
      
      OPTIONAL {
        ?refOrganIri rdfs:label ?refOrganRdfsLabel .
      }
      OPTIONAL {
        ?refOrganIri ccf:ccf_pref_label ?refOrganCcfLabel .
      }
    }
  }

  OPTIONAL {
    ?dataset ccf:organ_id ?_reportedOrganIri .
    BIND(IRI(?_reportedOrganIri) as ?reportedOrganIri)

    OPTIONAL {
      ?reportedOrganIri rdfs:label ?reportedOrganRdfsLabel .
    }
    OPTIONAL {
      ?reportedOrganIri ccf:ccf_pref_label ?reportedOrganCcfLabel .
    }
    BIND(IF(BOUND(?reportedOrganRdfsLabel), ?reportedOrganRdfsLabel, ?reportedOrganCcfLabel) as ?reportedOrganLabel)
  }

  BIND (COALESCE(?reportedOrganIri, ?refOrganIri, 'N/A') as ?organ_id)
  BIND (STR(COALESCE(?reportedOrganLabel, ?refOrganLabel, 'N/A')) as ?organLabel)
  FILTER (?tool = "popv")
}
# GROUP BY ?organLabel ?organ_id ?cell_id
# ORDER BY ?Organ_Label ?Annotation_Label

```

([View Source](../../queries/universe-ad-hoc/hepatocyte-popv-datasets.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/hepatocyte-popv-datasets.csv))

| dataset | Organ_Label | Organ_ID | Annotation_Label | Annotation_Label_ID | CL_Label | CL_ID | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |



### <a id="high-level-stats"></a>high-level-stats



<details>
  <summary>View Sparql Query</summary>

```sparql
SELECT ?label ?count
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/graph/hra-pop#test-data>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  # hint:Query hint:analytic "true" .

  {
    SELECT ("nodes" as ?label) (COUNT(DISTINCT(?s)) as ?count)
    WHERE {
      {
        ?s ?p1 [] .
      }
      UNION
      {
        [] ?p2 ?s .
        FILTER(isIRI(?s)) 
      }
    }
  }
  UNION
  {
    SELECT ("edges" as ?label) (COUNT(*) as ?count)
    WHERE {
      ?s ?p ?o .
    }
  }
  # UNION
  # {
  #   SELECT ("# Edge Types" as ?label) (COUNT(DISTINCT(?p)) as ?count)
  #   WHERE {
  #     ?s ?p ?o .
  #   }
  # }
}
ORDER BY DESC(?label)


```

([View Source](../../queries/universe-ad-hoc/high-level-stats.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/high-level-stats.csv))

| label | count |
| :--- | :--- |
| nodes | 120438 |
| edges | 704507 |


### <a id="htan-datasets"></a>HTAN dataset info (htan-datasets)

HTAN datasets considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: HTAN dataset info
#+ description: HTAN datasets considered or used in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?dataset ?organ ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?provider ?study_paper ?doi ?lead_author
FROM HRApopFull:
FROM HRA:
WHERE {
  [] ccf:generates_dataset ?dataset .

  OPTIONAL { ?dataset ccf:publication ?doi . }
  OPTIONAL { ?dataset ccf:publication_title ?study_paper . }
  OPTIONAL { ?dataset ccf:publication_lead_author ?lead_author . }

  OPTIONAL {
    {
      ?sample ccf:comes_from ?donor .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:comes_from ?donor .
      ?block ccf:subdivided_into_sections ?sample .
      ?sample ccf:generates_dataset ?dataset .
    }

    ?donor ccf:consortium_name ?portal ;
      ccf:tissue_provider_name ?provider ;
      ccf:sex ?sex .
  }

  {
    SELECT ?dataset ?rui_location ?ruiOrganIri
    WHERE {
      {
        ?sample ccf:comes_from ?donor .
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:comes_from ?donor .
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .

      ?ref_organ ccf:representation_of ?refOrganIri .
      ?refOrganIri ccf:ccf_part_of* ?ruiOrganIri .
    }
  }
  UNION
  {
    ?dataset ccf:organ_id ?reportedOrganIri .
  }

  OPTIONAL {
    SELECT ?dataset (SAMPLE(?cell_count_by_tool) as ?cell_count)
    WHERE {
      {
        SELECT ?dataset ?tool (COUNT(?count) as ?cell_count_by_tool)
        WHERE {
          {
            GRAPH HRApop: {
              ?dataset ccf:has_cell_summary [
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
          UNION
          {
            GRAPH hra-pop:test-data {
              ?dataset ccf:has_cell_summary [
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
        }
        GROUP BY ?dataset ?tool
      }
    }
    GROUP BY ?dataset
  }

  BIND (IF(BOUND(?ruiOrganIri) && ?ruiOrganIri = ?organIri, ?organIri,
    IF(BOUND(?reportedOrganIri) && ?reportedOrganIri = STR(?organIri), ?organIri, false)) as ?organ_id)

  BIND (BOUND(?portal) && (?portal = 'HuBMAP' || ?portal = 'SenNet' || ?portal = 'GTEx') as ?in_high_quality_portal)

  BIND (EXISTS {
    GRAPH HRApop: {
      ?dataset ccf:has_cell_summary [];
    }
  } as ?in_atlas)
  BIND (BOUND(?rui_location) as ?has_extraction_site)
  BIND (EXISTS {
    {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [];
      }
    }
    UNION
    {
      GRAPH hra-pop:test-data {
        ?dataset ccf:has_cell_summary [];
      }
    }
  } as ?has_cell_summary)
  BIND (BOUND(?doi) as ?has_publication)

  FILTER(CONTAINS(STR(?study_paper), 'HTAN') || CONTAINS(STR(?provider), 'HTAN'))
}
ORDER BY ?doi DESC(?cell_count)

```

([View Source](../../queries/universe-ad-hoc/htan-datasets.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/htan-datasets.csv))

| sex | dataset | organ | cell_count | in_atlas | has_cell_summary | has_extraction_site | has_publication | in_high_quality_portal | portal | provider | study_paper | doi | lead_author |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU1293$axilla |  | 73 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU1311$lung |  | 49 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU1080$adrenal%20gland |  | 48 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU255$brain |  | 48 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU701$brain |  | 47 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="kidney-and-lung-datasets"></a>Kidney and Lung dataset info (kidney-and-lung-datasets)

Kidney and lung datasets considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Kidney and Lung dataset info
#+ description: Kidney and lung datasets considered or used in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?dataset ?organ ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?study_paper ?doi ?lead_author
FROM HRApopFull:
FROM HRA:
WHERE {
  VALUES (?organIri ?organ) {
    (<http://purl.obolibrary.org/obo/UBERON_0002182> "Lung") # Main Bronchus
    (<http://purl.obolibrary.org/obo/UBERON_0002048> "Lung") # Lung
    (<http://purl.obolibrary.org/obo/UBERON_0001004> "Lung") # Respiratory System
    (<http://purl.obolibrary.org/obo/UBERON_0002113> "Kidney" ) # Kidney
    (<http://purl.obolibrary.org/obo/UBERON_0004538> "Kidney") # Left Kidney
    (<http://purl.obolibrary.org/obo/UBERON_0004539> "Kidney") # Right Kidney
  }

  [] ccf:generates_dataset ?dataset .

  OPTIONAL { ?dataset ccf:publication ?doi . }
  OPTIONAL { ?dataset ccf:publication_title ?study_paper . }
  OPTIONAL { ?dataset ccf:publication_lead_author ?lead_author . }

  OPTIONAL {
    {
      ?sample ccf:comes_from ?donor .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:comes_from ?donor .
      ?block ccf:subdivided_into_sections ?sample .
      ?sample ccf:generates_dataset ?dataset .
    }

    ?donor ccf:consortium_name ?portal ;
      ccf:sex ?sex .
  }

  {
    SELECT ?dataset ?rui_location ?ruiOrganIri
    WHERE {
      {
        ?sample ccf:comes_from ?donor .
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:comes_from ?donor .
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .

      ?ref_organ ccf:representation_of ?refOrganIri .
      ?refOrganIri ccf:ccf_part_of* ?ruiOrganIri .
    }
  }
  UNION
  {
    ?dataset ccf:organ_id ?reportedOrganIri .
  }

  OPTIONAL {
    SELECT ?dataset (SAMPLE(?cell_count_by_tool) as ?cell_count)
    WHERE {
      {
        SELECT ?dataset ?tool (COUNT(?count) as ?cell_count_by_tool)
        WHERE {
          {
            GRAPH HRApop: {
              ?dataset ccf:has_cell_summary [
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
          UNION
          {
            GRAPH hra-pop:test-data {
              ?dataset ccf:has_cell_summary [
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
        }
        GROUP BY ?dataset ?tool
      }
    }
    GROUP BY ?dataset
  }

  BIND (IF(BOUND(?ruiOrganIri) && ?ruiOrganIri = ?organIri, ?organIri,
    IF(BOUND(?reportedOrganIri) && ?reportedOrganIri = STR(?organIri), ?organIri, false)) as ?organ_id)

  BIND (BOUND(?portal) && (?portal = 'HuBMAP' || ?portal = 'SenNet' || ?portal = 'GTEx') as ?in_high_quality_portal)

  BIND (EXISTS {
    GRAPH HRApop: {
      ?dataset ccf:has_cell_summary [];
    }
  } as ?in_atlas)
  BIND (BOUND(?rui_location) as ?has_extraction_site)
  BIND (EXISTS {
    {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [];
      }
    }
    UNION
    {
      GRAPH hra-pop:test-data {
        ?dataset ccf:has_cell_summary [];
      }
    }
  } as ?has_cell_summary)
  BIND (BOUND(?doi) as ?has_publication)

  FILTER(?organ_id = ?organIri)
}
ORDER BY ?organ ?portal ?dataset

```

([View Source](../../queries/universe-ad-hoc/kidney-and-lung-datasets.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/kidney-and-lung-datasets.csv))

| sex | dataset | organ | cell_count | in_atlas | has_cell_summary | has_extraction_site | has_publication | in_high_quality_portal | portal | study_paper | doi | lead_author |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Female | https://gtexportal.org/home/tissue/Kidney_Cortex#FDonors_TissueBlock1_TissueBlock1_Dataset1 | Kidney |  | false | false | true | false | true | GTEx |  |  |  |
| Male | https://gtexportal.org/home/tissue/Kidney_Cortex#MDonors_TissueBlock1_TissueBlock1_Dataset1 | Kidney |  | false | false | true | false | true | GTEx |  |  |  |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP2$kidney | Kidney | 27 | true | true | true | true | false | HCA | Tabula Sapiens | https://doi.org/10.1126/science.abl4896 | undefined undefined |
| Female | http://purl.org/ccf/ctpop_datasets:HBM243.TTRM.823 | Kidney |  | false | false | true | false | true | HuBMAP |  |  |  |
| Male | http://purl.org/ccf/ctpop_datasets:HBM297.XVDG.492 | Kidney |  | false | false | true | false | true | HuBMAP |  |  |  |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="popv-cells"></a>Popv cells information (popv-cells)

Information about cells mapped via Popv considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Popv cells information
#+ description: Information about cells mapped via Popv considered or used in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT 
  (REPLACE(?organLabel, "skin of body", "skin") as ?Organ_Label)
  (REPLACE(STR(?organ_id), STR(UBERON:), "UBERON:") as ?Organ_ID)
  (SAMPLE(?cell_label) as ?Annotation_Label)
  (REPLACE(STR(?cell_id), STR(CL:), "CL:") AS ?Annotation_Label_ID)
  (SAMPLE(?cell_label) as ?CL_Label)
  (REPLACE(STR(?cell_id), STR(CL:), "CL:") AS ?CL_ID)
  ("" as ?CL_Match)
  (COUNT(DISTINCT(?dataset)) as ?dataset_count)
  (SUM(?count) as ?cell_count)
FROM HRA:
FROM HRApop:
FROM HRApopTestData:
WHERE {
  [] ccf:generates_dataset ?dataset .

  ?dataset ccf:has_cell_summary [
    ccf:cell_annotation_method ?tool ;
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_id ;
      ccf:cell_label ?cell_label ;
      ccf:cell_count ?count ;
    ]
  ] .

  OPTIONAL {
    SELECT ?dataset ?refOrganIri 
      (COALESCE(?refOrganRdfsLabel, ?refOrganCcfLabel) as ?refOrganLabel)
    WHERE {
      {
        ?sample ccf:comes_from ?donor .
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:comes_from ?donor .
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .

      ?ref_organ ccf:representation_of ?refOrganIri .
      
      OPTIONAL {
        ?refOrganIri rdfs:label ?refOrganRdfsLabel .
      }
      OPTIONAL {
        ?refOrganIri ccf:ccf_pref_label ?refOrganCcfLabel .
      }
    }
  }

  OPTIONAL {
    ?dataset ccf:organ_id ?_reportedOrganIri .
    BIND(IRI(?_reportedOrganIri) as ?reportedOrganIri)

    OPTIONAL {
      ?reportedOrganIri rdfs:label ?reportedOrganRdfsLabel .
    }
    OPTIONAL {
      ?reportedOrganIri ccf:ccf_pref_label ?reportedOrganCcfLabel .
    }
    BIND(IF(BOUND(?reportedOrganRdfsLabel), ?reportedOrganRdfsLabel, ?reportedOrganCcfLabel) as ?reportedOrganLabel)
  }

  BIND (COALESCE(?reportedOrganIri, ?refOrganIri, 'N/A') as ?organ_id)
  BIND (STR(COALESCE(?reportedOrganLabel, ?refOrganLabel, 'N/A')) as ?organLabel)
  FILTER (?tool = "popv")
}
GROUP BY ?organLabel ?organ_id ?cell_id
ORDER BY ?Organ_Label ?Annotation_Label

```

([View Source](../../queries/universe-ad-hoc/popv-cells.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/popv-cells.csv))

| Organ_Label | Organ_ID | Annotation_Label | Annotation_Label_ID | CL_Label | CL_ID | CL_Match | dataset_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| adipose tissue | UBERON:0001013 | B cell | CL:0000236 | B cell | CL:0000236 |  | 29 | 8969 |
| adipose tissue | UBERON:0001013 | T cell | CL:0000084 | T cell | CL:0000084 |  | 30 | 32921 |
| adipose tissue | UBERON:0001013 | endothelial cell | CL:0000115 | endothelial cell | CL:0000115 |  | 35 | 10257 |
| adipose tissue | UBERON:0001013 | fibroblast | CL:0000057 | fibroblast | CL:0000057 |  | 33 | 37672 |
| adipose tissue | UBERON:0001013 | leukocyte | CL:0000738 | leukocyte | CL:0000738 |  | 34 | 5368 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="rui-registered-datasets"></a>RUI Registered H5AD Dataset and TB Count (rui-registered-datasets)

Count of all rui-registered h5ad datasets and tissue blocks

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: RUI Registered H5AD Dataset and TB Count
#+ description: Count of all rui-registered h5ad datasets and tissue blocks

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT (COUNT(DISTINCT ?dataset) as ?rui_registered_datasets) 
  (COUNT(DISTINCT ?block) as ?rui_registered_tissue_blocks)
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?rui_location a ccf:SpatialEntity .
  ?dataset a ccf:Dataset .

  {
    ?block ccf:has_registration_location ?rui_location .
    ?block ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:subdivided_into_sections ?sample .
    ?block ccf:has_registration_location ?rui_location .
    ?sample ccf:generates_dataset ?dataset .
  }
}

```

([View Source](../../queries/universe-ad-hoc/rui-registered-datasets.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/rui-registered-datasets.csv))

| rui_registered_datasets | rui_registered_tissue_blocks |
| :--- | :--- |
| 7120 | 1722 |


### <a id="sample-info"></a>Sample information (sample-info)

Sample with associated extraction site metadata, anatomical structure, and cell counts in data considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Sample information
#+ description: Sample with associated extraction site metadata, anatomical structure, and cell counts in data considered or used in HRApop

## TODO: This query is a little wonky and needs reworked

PREFIX ccf: <http://purl.org/ccf/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT ?sample ?sample_type ?label ?description ?link 
  ?extraction_site ?x_dimension ?y_dimension ?z_dimension 
  ?creator ?creator_first_name ?creator_last_name
  ?as_id (COUNT(DISTINCT ?cell_id) as ?unique_cell_type_count)
FROM HRApop:
FROM HRApopFull:
FROM HRApopTestData:
WHERE {
  ?sample a ccf:Sample.
  ?sample ccf:sample_type ?sample_type.
  ?sample rdfs:label ?label.
  ?sample rdfs:comment ?description.
  ?sample ccf:url ?link.
  ?sample ccf:has_registration_location ?extraction_site.
  ?extraction_site ccf:x_dimension ?x_dimension.
  ?extraction_site ccf:y_dimension ?y_dimension.
  ?extraction_site ccf:z_dimension ?z_dimension.
  ?extraction_site dcterms:creator ?creator.
  ?extraction_site ccf:creator_first_name ?creator_first_name.
  ?extraction_site ccf:creator_last_name ?creator_last_name.

  OPTIONAL {
      ?extraction_site ccf:has_collision_summary ?collision_summary.
      ?collisionsummary ccf:has_collision_item ?collision.
      ?collision ccf:reference_organ ?reference_organ.
      ?collision ccf:as_3d_id ?as_3d_id.
      ?collision ccf:as_id ?as_id.
      ?collision ccf:as_label ?as_label.

      ?extraction_site ccf:has_cell_summary ?cell_summary .
      ?cell_summary ccf:has_cell_summary_row ?cell_summary_row .
      ?cell_summary_row ccf:cell_id ?cell_id .
    }
}
GROUP BY ?sample ?sample_type ?label ?description ?link ?extraction_site ?x_dimension ?y_dimension ?z_dimension ?creator ?creator_first_name ?creator_last_name ?as_id
```

([View Source](../../queries/universe-ad-hoc/sample-info.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/sample-info.csv))

| sample | sample_type | label | description | link | extraction_site | x_dimension | y_dimension | z_dimension | creator | creator_first_name | creator_last_name | as_id | unique_cell_type_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://entity.api.sennetconsortium.org/entities/01930f25a3c363434ac0621a9bf32c98 | Tissue Block | Registered 6/10/2024, Andrew Watts, TMC - University of Pittsburgh | 7 x 4 x 4 millimeter, 4 millimeter, 1 Sections | https://data.sennetconsortium.org/sample?uuid=01930f25a3c363434ac0621a9bf32c98 | http://purl.org/ccf/1.5/f4b938a5-0085-404c-a4e2-9dcb6b80a7c2 | 7 | 4 | 4 | AlexisCosta | Alexis | Costa |  | 0 |
| https://entity.api.sennetconsortium.org/entities/49873efd0582e8400ad02440ac2f0c4f | Tissue Block | Registered 9/18/2024, Andrew Watts, TMC - University of Pittsburgh | 12 x 10 x 4 millimeter, 4 millimeter, 1 Sections | https://data.sennetconsortium.org/sample?uuid=49873efd0582e8400ad02440ac2f0c4f | http://purl.org/ccf/1.5/eb8b86ed-d5ed-4e89-96cd-772e7632d14c | 12 | 10 | 4 | Alexis Costa | Alexis | Costa |  | 0 |
| https://entity.api.sennetconsortium.org/entities/56bc9c978de38bb47d0eb4af1fd39228 | Tissue Block | Registered 6/10/2024, Andrew Watts, TMC - University of Pittsburgh | 13 x 15 x 5 millimeter, 5 millimeter, 1 Sections | https://data.sennetconsortium.org/sample?uuid=56bc9c978de38bb47d0eb4af1fd39228 | http://purl.org/ccf/1.5/fc8b1092-f0c0-42c2-a9b9-ec46636eba6e | 13 | 15 | 5 | AlexisCosta | Alexis | Costa |  | 0 |
| https://entity.api.sennetconsortium.org/entities/786ecfe62fdb88703b2863d243bf42d2 | Tissue Block | Registered 10/16/2024, Andrew Watts, TMC - University of Pittsburgh | 11 x 9 x 5 millimeter, 5 millimeter, 1 Sections | https://data.sennetconsortium.org/sample?uuid=786ecfe62fdb88703b2863d243bf42d2 | http://purl.org/ccf/1.5/eeb93a42-968a-44f6-a633-5d6b64303d85 | 11 | 9 | 5 | Alexis Costa | Alexis | Costa |  | 0 |
| https://entity.api.sennetconsortium.org/entities/78c6735a80d6fd1d837a217bbeee3c73 | Tissue Block | Registered 6/10/2024, Andrew Watts, TMC - University of Pittsburgh | 10 x 12 x 5 millimeter, 5 millimeter, 1 Sections | https://data.sennetconsortium.org/sample?uuid=78c6735a80d6fd1d837a217bbeee3c73 | http://purl.org/ccf/1.5/eecbda16-28c4-4655-9cbd-dafb60a34671 | 10 | 12 | 5 | AlexisCosta | Alexis | Costa |  | 0 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="sankey"></a>All Datasets Sankey Data (sankey)

Report of all datasets used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: All Datasets Sankey Data
#+ description: Report of all datasets used in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT
  ?portal
  ?study_paper
  ?doi
  ?lead_author
  ?is_azimuth_reference
  (STRAFTER(STR(?donor), '#') as ?donor_id)
  ?donor_sex
  ?donor_age
  ?donor_development_stage
  ?donor_race
  ?donor_bmi
  ?organ_name
  ?organ_name_glb_file
  (STRAFTER(STR(?block), '#') as ?tissue_block_id)
  ?tissue_block_volume
  ?collisions_bb
  ?collisions_mesh
  ?list_of_colliding_anatomical_structures_bb
  ?list_of_colliding_anatomical_structures_mesh
  ?list_of_colliding_anatomical_structures_bb_ids
  ?list_of_colliding_anatomical_structures_mesh_ids
  (STR(?dataset) as ?dataset_id)
  (STR(?dataset) as ?unique_dataset_id)
  (?dataset_link as ?link_to_h5ad_file)
  (?dataset_modality as ?sc_transcriptomics_or_sc_proteomics)
  (?tool as ?cell_type_annotation_tool)
  ?omap_id
  ?number_of_cells_total
  ?number_of_unique_cell_types
  ?hubmap_dataset_publication_status
  (BOUND(?rui_location) as ?is_rui_registered)
  ?is_atlas_dataset
FROM HRApop:
FROM HRApopFull:
FROM HRApopTestData:
FROM HRA:
WHERE {

  # Relationships 
  {
    ?block ccf:comes_from ?donor .
    ?block ccf:generates_dataset ?dataset .
  } UNION {
    ?block ccf:comes_from ?donor .
    ?block ccf:subdivided_into_sections ?section .
    ?section ccf:generates_dataset ?dataset .
  }

  BIND(EXISTS {
    GRAPH HRApop: {
      ?dataset a ccf:Dataset .
    }
  } as ?is_atlas_dataset)

  # Data extracted from Donors
  {
    ?donor a ccf:Donor ;
      ccf:consortium_name ?portal ;
      ccf:tissue_provider_name ?tissue_provider .

    OPTIONAL { ?donor ccf:development_stage ?donor_development_stage . } .
    OPTIONAL { ?donor ccf:race ?donor_race . } .
    OPTIONAL { ?donor ccf:age ?donor_age . } .
    OPTIONAL { ?donor ccf:bmi ?donor_bmi . } .
    OPTIONAL { ?donor ccf:sex ?donor_sex . } .
  }

  # Data extracted from RUI Locations
  OPTIONAL {
    ?block ccf:has_registration_location ?rui_location .
  
    # RUI Location
    {
      ?rui_location a ccf:SpatialEntity ;
        ccf:x_dimension ?rui_x ;
        ccf:y_dimension ?rui_y ;
        ccf:z_dimension ?rui_z .

      BIND(?rui_x * ?rui_y * ?rui_z as ?tissue_block_volume)
    }

    # RUI Location Placement
    {
      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .
    }

    # Ref Organ Name
    {
      ?ref_organ ccf:representation_of ?organ_iri .
      ?organ_iri rdfs:label ?organ_name .
    }

    # Ref Organ GLB File
    {
      ?some_ref_organ a ?organ_iri ;
        ccf:organ_owner_sex ?donor_sex ;
        ccf:has_object_reference [
          ccf:file_name ?organ_name_glb_file
        ] .
    }

    OPTIONAL {
      SELECT ?rui_location
        (COUNT(?as_id) as ?collisions_bb)
        (GROUP_CONCAT(DISTINCT(?as_label); separator="; ") as ?list_of_colliding_anatomical_structures_bb)
        (GROUP_CONCAT(DISTINCT(?as_id); separator="; ") as ?list_of_colliding_anatomical_structures_bb_ids)
      WHERE {
        ?rui_location ccf:collides_with ?as_iri .
        ?as_iri rdfs:label ?as_label .

        [] a ccf:SpatialPlacement ;
          ccf:placement_for ?rui_location ;
          ccf:placement_relative_to [
            ccf:representation_of ?organ_iri ;
          ] .

        # Filter out obvious anatomical structures including body and the reference organ
        FILTER (?as_label != 'body proper' && ?as_iri != ?organ_iri)

        BIND(REPLACE(REPLACE(REPLACE(STR(?as_iri), 'http://purl.obolibrary.org/obo/', ''), '_', ':'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?as_id)
      }
      GROUP BY ?rui_location
    }

    # RUI Location Collision Summary
    OPTIONAL {
      SELECT ?rui_location
        (COUNT(?as_id) as ?collisions_mesh)
        (GROUP_CONCAT(DISTINCT(?as_label); separator="; ") as ?list_of_colliding_anatomical_structures_mesh)
        (GROUP_CONCAT(DISTINCT(?as_id); separator="; ") as ?list_of_colliding_anatomical_structures_mesh_ids)
      WHERE {
        ?rui_location ccf:has_collision_summary [
          ccf:has_collision_item [
            ccf:as_label ?as_label ;
            ccf:as_id ?as_iri
          ]
        ] .

        BIND(REPLACE(REPLACE(REPLACE(STR(?as_iri), 'http://purl.obolibrary.org/obo/', ''), '_', ':'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?as_id)
      }
      GROUP BY ?rui_location
    }
  }
  
  # Data extracted from Dataset
  {
    ?dataset a ccf:Dataset ;
      ccf:url ?dataset_link .
  }

  OPTIONAL { ?dataset ccf:publication_title ?study_paper . }
  OPTIONAL { ?dataset ccf:publication ?doi . }
  OPTIONAL { ?dataset ccf:publication_lead_author ?lead_author . }
  OPTIONAL { ?dataset hra-pop:is_azimuth_reference ?is_azimuth_reference . }
  OPTIONAL { ?dataset hra-pop:omap_id ?omap_id . }
  OPTIONAL { ?dataset hra-pop:hubmap_dataset_publication_status ?hubmap_dataset_publication_status . }
  OPTIONAL { ?dataset hra-pop:excluded_from_atlas_construction ?excluded_from_atlas_construction . }
  OPTIONAL { ?dataset hra-pop:reason_for_exclusion ?reason_for_exclusion . }

  # Dataset Cell Summary
  OPTIONAL {
    ?dataset ccf:has_cell_summary [
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:sex ?donor_sex ;
    ] .

    {
      SELECT ?dataset 
        (SUM(?cell_count) as ?number_of_cells_total)
        (COUNT(DISTINCT(?cell_id)) as ?number_of_unique_cell_types)
      WHERE {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_id ?cell_id ;
            ccf:cell_count ?cell_count ;
          ]
        ] .
      }
      GROUP BY ?dataset
    }
  }
}
ORDER BY ?unique_dataset_id

```

([View Source](../../queries/universe-ad-hoc/sankey.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/sankey.csv))

| portal | study_paper | doi | lead_author | is_azimuth_reference | donor_id | donor_sex | donor_age | donor_development_stage | donor_race | donor_bmi | organ_name | organ_name_glb_file | tissue_block_id | tissue_block_volume | collisions_bb | collisions_mesh | list_of_colliding_anatomical_structures_bb | list_of_colliding_anatomical_structures_mesh | list_of_colliding_anatomical_structures_bb_ids | list_of_colliding_anatomical_structures_mesh_ids | dataset_id | unique_dataset_id | link_to_h5ad_file | sc_transcriptomics_or_sc_proteomics | cell_type_annotation_tool | omap_id | number_of_cells_total | number_of_unique_cell_types | hubmap_dataset_publication_status | is_rui_registered | is_atlas_dataset |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| HCA |  |  |  |  | TSP27 | Female | 56 |  |  |  | small intestine | 3d-vh-f-small-intestine.glb | TSP27_duodenum | 274320.0 | 7 | 6 | jejunum; Descending part of duodenum; Horizontal part of duodenum; duodenum; duodenal ampulla; Superior part of duodenum; Sphincter of hepatopancreatic ampulla | superior part of duodenum; duodenal ampulla | UBERON:0002115; FMA:14928; FMA:14929; UBERON:0002114; UBERON:0013644; FMA:14926; FMA:15077 | FMA:7206; UBERON:0013644 | hhttps://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP27$duodenum | hhttps://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP27$duodenum | https://cellxgene.cziscience.com/e/a357414d-2042-4eb5-95f0-c58604a18bdd.cxg/ |  |  |  |  |  |  | true | false |
| KPMP |  | http://dx.doi.org/10.1681/ASN.2016091027 |  |  | Donor1 | Male |  |  |  |  | right kidney | 3d-vh-m-kidney-r.glb | Donor1_TissueBlock1 | 1.9794047017195975 | 1 |  | kidney |  | UBERON:0002113 |  | http://dx.doi.org/10.1681/ASN.2016091027#Donor1_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027#Donor1_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027 |  |  |  |  |  |  | true | false |
| KPMP |  | http://dx.doi.org/10.1681/ASN.2016091027 |  |  | Donor2 | Male |  |  |  |  | right kidney | 3d-vh-m-kidney-r.glb | Donor2_TissueBlock1 | 0.5009041281806214 | 1 |  | kidney |  | UBERON:0002113 |  | http://dx.doi.org/10.1681/ASN.2016091027#Donor2_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027#Donor2_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027 |  |  |  |  |  |  | true | false |
| KPMP |  | http://dx.doi.org/10.1681/ASN.2016091027 |  |  | Donor3 | Male |  |  |  |  | right kidney | 3d-vh-m-kidney-r.glb | Donor3_TissueBlock1 | 0.49626275595351454 | 1 |  | kidney |  | UBERON:0002113 |  | http://dx.doi.org/10.1681/ASN.2016091027#Donor3_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027#Donor3_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1016/j.trsl.2017.07.006 |  |  |  |  |  |  | true | false |
| HRA |  |  |  |  | Donor1 | Female | 38 |  |  |  | mesenteric lymph node | 3d-nih-f-lymph-node.glb | Donor1_TissueBlock1 | 2508 | 7 | 6 | medulla of lymph node; capsule of lymph node; lymph vasculature; efferent lymphatic vessel; lymph node T cell domain; lymph node follicle; afferent lymphatic vessel | lymph node T cell domain; efferent lymphatic vessel; Lymph vasculature; medulla of lymph node; capsule of lymph node; lymph node follicle | UBERON:0002007; UBERON:0002194; UBERON:0004536; UBERON:0010397; UBERON:0010417; UBERON:0010748; UBERON:0010396 | UBERON:0010417; UBERON:0010397; UBERON:0004536; UBERON:0002007; UBERON:0002194; UBERON:0010748 | http://purl.org/ccf/1.5/omap-1#Donor1_TissueBlock1_TissueBlock1_Dataset1 | http://purl.org/ccf/1.5/omap-1#Donor1_TissueBlock1_TissueBlock1_Dataset1 | https://hubmapconsortium.github.io/ccf-releases/v1.4/docs/omap/omap-1-human-lymph-node-ibex.html |  |  |  |  |  |  | true | false |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="spatial-and-bulk-datasets-breakdown"></a>Spatial and bulk dataset breakdown (spatial-and-bulk-datasets-breakdown)

Dataset and processed cell counts by organ, side, sex, and modality of datasets considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Spatial and bulk dataset breakdown
#+ description: Dataset and processed cell counts by organ, side, sex, and modality of datasets considered or used in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?organ ?side ?sex ?modality ?status (COUNT(DISTINCT(?dataset)) as ?dataset_count) (SUM(?cell_count) as ?cell_count)
FROM HRApopFull:
FROM HRA:
WHERE {
  VALUES (?organLabel ?organ ?side) {
    ("blood" "blood" "")
    ("blood vasculature" "blood vasculature" "")
    ("bone marrow" "bone marrow" "")
    ("brain" "brain" "")
    ("eye" "eye" "")
    ("heart" "heart" "")
    ("kidney" "kidney" "")
    ("large intestine" "large intestine" "")
    ("left kidney" "kidney" "left")
    ("left ureter" "ureter" "left")
    ("liver" "liver" "")
    ("lung" "lung" "")
    ("lymph node" "lymph node" "")
    ("male reproductive system" "male reproductive system" "")
    ("mammary gland" "mammary gland" "")
    ("mesenteric lymph node" "lymph node" "")
    ("pancreas" "pancreas" "")
    ("prostate gland" "prostate gland" "")
    ("respiratory system" "lung" "")
    ("right kidney" "kidney" "right")
    ("right mammary gland" "mammary gland" "right")
    ("skin of body" "skin" "")
    ("skin" "skin" "")
    ("small intestine" "small intestine" "")
    ("spleen" "spleen" "")
    ("thymus" "thymus" "")
    ("trachea" "trachea" "")
    ("urinary bladder" "urinary bladder" "")
    ("uterus" "uterus" "")
  }
  [] ccf:generates_dataset ?dataset .

  OPTIONAL { ?dataset ccf:publication ?doi . }
  OPTIONAL { ?dataset ccf:publication_title ?study_paper . }
  OPTIONAL { ?dataset ccf:publication_lead_author ?lead_author . }

  OPTIONAL {
    {
      ?sample ccf:comes_from ?donor .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:comes_from ?donor .
      ?block ccf:subdivided_into_sections ?sample .
      ?sample ccf:generates_dataset ?dataset .
    }
    ?donor ccf:consortium_name ?portal ;
      ccf:sex ?donorSex .
  }

  {
    SELECT ?dataset ?rui_location ?ruiOrganIri ?ruiOrganLabel ?ruiOrganSex ?ruiOrganSide
    WHERE {
      {
        ?sample ccf:comes_from ?donor .
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:comes_from ?donor .
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .

      ?ref_organ ccf:representation_of ?refOrganIri .
      ?refOrganIri ccf:ccf_part_of* ?ruiOrganIri .

      ?refOrganIri ccf:ccf_pref_label ?ruiOrganLabel .
      ?ref_organ ccf:organ_owner_sex ?ruiOrganSex .
      OPTIONAL {
        ?ref_organ ccf:organ_side ?ruiOrganSide .
      }
    }
  }
  UNION
  {
    ?dataset ccf:organ_id ?_reportedOrganIri .
    BIND(IRI(?_reportedOrganIri) as ?reportedOrganIri)
    OPTIONAL {
      ?reportedOrganIri rdfs:label ?reportedOrganLabel .
    }
    OPTIONAL {
      ?donor ccf:sex ?reportedSex .
    }
  }

  OPTIONAL {
    SELECT ?cellSummarySex ?dataset ?modality (MAX(?cell_count_by_tool) as ?cell_count)
    WHERE {
      {
        SELECT ?cellSummarySex ?dataset ?modality ?tool (COUNT(?count) as ?cell_count_by_tool)
        WHERE {
          {
            GRAPH HRApop: {
              ?dataset ccf:has_cell_summary [
                ccf:sex ?cellSummarySex ;
                ccf:modality ?modality ;
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
          UNION
          {
            GRAPH HRApopTestData: {
              ?dataset ccf:has_cell_summary [
                ccf:sex ?cellSummarySex ;
                ccf:modality ?modality ;
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
        }
        GROUP BY ?cellSummarySex ?dataset ?modality ?tool
      }
    }
    GROUP BY ?cellSummarySex ?dataset ?modality
  }

  BIND (IF(BOUND(?ruiOrganIri), ?ruiOrganIri,
    IF(BOUND(?reportedOrganIri), ?reportedOrganIri, "N/A")) as ?organ_id)

  BIND (STR(IF(BOUND(?ruiOrganLabel), ?ruiOrganLabel,
    IF(BOUND(?reportedOrganLabel), ?reportedOrganLabel, ?reportedOrganIri))) as ?organLabel)

  BIND (LCASE(COALESCE(?donorSex, ?ruiOrganSex, ?reportedSex, ?cellSummarySex, 'Unknown')) as ?sex)

  BIND (BOUND(?portal) && (?portal = 'HuBMAP' || ?portal = 'SenNet' || ?portal = 'GTEx') as ?in_high_quality_portal)

  BIND (EXISTS {
    GRAPH HRApop: {
      ?dataset ccf:has_cell_summary [];
    }
  } as ?in_atlas)
  BIND (BOUND(?rui_location) as ?has_extraction_site)
  BIND (EXISTS {
    {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [];
      }
    }
    UNION
    {
      GRAPH HRApopTestData: {
        ?dataset ccf:has_cell_summary [];
      }
    }
  } as ?has_cell_summary)
  BIND (BOUND(?doi) as ?has_publication)

  BIND(IF(?in_atlas, "Atlas", "Non-Atlas") as ?status)
  FILTER(?has_cell_summary)
}
GROUP BY ?organ ?side ?sex ?modality ?status
ORDER BY ?organ ?side ?sex ?modality ?status

```

([View Source](../../queries/universe-ad-hoc/spatial-and-bulk-datasets-breakdown.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/spatial-and-bulk-datasets-breakdown.csv))

| organ | side | sex | modality | status | dataset_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| blood |  | female | sc_transcriptomics | Non-Atlas | 1577 | 37099 |
| blood |  | male | sc_transcriptomics | Non-Atlas | 1225 | 29271 |
| blood |  | unknown | sc_transcriptomics | Non-Atlas | 59 | 1414 |
| blood vasculature |  | female | sc_transcriptomics | Non-Atlas | 21 | 547 |
| blood vasculature |  | male | sc_transcriptomics | Non-Atlas | 26 | 669 |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="spatial-and-bulk-datasets"></a>Spatial and bulk dataset information (spatial-and-bulk-datasets)

Datasets and processed cell counts with organ, side, sex, and modality considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Spatial and bulk dataset information
#+ description: Datasets and processed cell counts with organ, side, sex, and modality considered or used in HRApop

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?dataset ?modality ?organ ?side ?organ_id ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?study_paper ?doi ?lead_author
FROM HRApopFull:
FROM HRA:
WHERE {
  VALUES (?organLabel ?organ ?side) {
    ("blood" "blood" "")
    ("blood vasculature" "blood vasculature" "")
    ("bone marrow" "bone marrow" "")
    ("brain" "brain" "")
    ("eye" "eye" "")
    ("heart" "heart" "")
    ("kidney" "kidney" "")
    ("large intestine" "large intestine" "")
    ("left kidney" "kidney" "left")
    ("left ureter" "ureter" "left")
    ("liver" "liver" "")
    ("lung" "lung" "")
    ("lymph node" "lymph node" "")
    ("male reproductive system" "male reproductive system" "")
    ("mammary gland" "mammary gland" "")
    ("mesenteric lymph node" "lymph node" "")
    ("pancreas" "pancreas" "")
    ("prostate gland" "prostate gland" "")
    ("respiratory system" "lung" "")
    ("right kidney" "kidney" "right")
    ("right mammary gland" "mammary gland" "right")
    ("skin of body" "skin" "")
    ("skin" "skin" "")
    ("small intestine" "small intestine" "")
    ("spleen" "spleen" "")
    ("thymus" "thymus" "")
    ("trachea" "trachea" "")
    ("urinary bladder" "urinary bladder" "")
    ("uterus" "uterus" "")
  }
  [] ccf:generates_dataset ?dataset .

  OPTIONAL { ?dataset ccf:publication ?doi . }
  OPTIONAL { ?dataset ccf:publication_title ?study_paper . }
  OPTIONAL { ?dataset ccf:publication_lead_author ?lead_author . }

  OPTIONAL {
    {
      ?sample ccf:comes_from ?donor .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:comes_from ?donor .
      ?block ccf:subdivided_into_sections ?sample .
      ?sample ccf:generates_dataset ?dataset .
    }
    ?donor ccf:consortium_name ?portal ;
      ccf:sex ?donorSex .
  }

  {
    SELECT ?dataset ?rui_location ?ruiOrganIri ?ruiOrganLabel ?ruiOrganSex ?ruiOrganSide
    WHERE {
      {
        ?sample ccf:comes_from ?donor .
        ?sample ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      } UNION {
        ?block ccf:comes_from ?donor .
        ?block ccf:subdivided_into_sections ?sample .
        ?block ccf:has_registration_location ?rui_location .
        ?sample ccf:generates_dataset ?dataset .
      }

      ?placement a ccf:SpatialPlacement ;
        ccf:placement_for ?rui_location ;
        ccf:placement_relative_to ?ref_organ .

      ?ref_organ ccf:representation_of ?refOrganIri .
      ?refOrganIri ccf:ccf_part_of* ?ruiOrganIri .

      ?refOrganIri ccf:ccf_pref_label ?ruiOrganLabel .
      ?ref_organ ccf:organ_owner_sex ?ruiOrganSex .
      OPTIONAL {
        ?ref_organ ccf:organ_side ?ruiOrganSide .
      }
    }
  }
  UNION
  {
    ?dataset ccf:organ_id ?_reportedOrganIri .
    BIND(IRI(?_reportedOrganIri) as ?reportedOrganIri)
    OPTIONAL {
      ?reportedOrganIri rdfs:label ?reportedOrganLabel .
    }
    OPTIONAL {
      ?donor ccf:sex ?reportedSex .
    }
  }

  OPTIONAL {
    SELECT ?cellSummarySex ?dataset ?modality (MAX(?cell_count_by_tool) as ?cell_count)
    WHERE {
      {
        SELECT ?cellSummarySex ?dataset ?modality ?tool (COUNT(?count) as ?cell_count_by_tool)
        WHERE {
          {
            GRAPH HRApop: {
              ?dataset ccf:has_cell_summary [
                ccf:sex ?cellSummarySex ;
                ccf:modality ?modality ;
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
          UNION
          {
            GRAPH HRApopTestData: {
              ?dataset ccf:has_cell_summary [
                ccf:sex ?cellSummarySex ;
                ccf:modality ?modality ;
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
        }
        GROUP BY ?cellSummarySex ?dataset ?modality ?tool
      }
    }
    GROUP BY ?cellSummarySex ?dataset ?modality
  }

  BIND (IF(BOUND(?ruiOrganIri), ?ruiOrganIri,
    IF(BOUND(?reportedOrganIri), ?reportedOrganIri, "N/A")) as ?organ_id)

  BIND (STR(IF(BOUND(?ruiOrganLabel), ?ruiOrganLabel,
    IF(BOUND(?reportedOrganLabel), ?reportedOrganLabel, ?reportedOrganIri))) as ?organLabel)

  BIND (LCASE(COALESCE(?donorSex, ?ruiOrganSex, ?reportedSex, ?cellSummarySex, 'Unknown')) as ?sex)

  BIND (BOUND(?portal) && (?portal = 'HuBMAP' || ?portal = 'SenNet' || ?portal = 'GTEx') as ?in_high_quality_portal)

  BIND (EXISTS {
    GRAPH HRApop: {
      ?dataset ccf:has_cell_summary [];
    }
  } as ?in_atlas)
  BIND (BOUND(?rui_location) as ?has_extraction_site)
  BIND (EXISTS {
    {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [];
      }
    }
    UNION
    {
      GRAPH HRApopTestData: {
        ?dataset ccf:has_cell_summary [];
      }
    }
  } as ?has_cell_summary)
  BIND (BOUND(?doi) as ?has_publication)

  FILTER(?has_cell_summary)
}
ORDER BY ?dataset

```

([View Source](../../queries/universe-ad-hoc/spatial-and-bulk-datasets.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/spatial-and-bulk-datasets.csv))

| sex | dataset | modality | organ | side | organ_id | cell_count | in_atlas | has_cell_summary | has_extraction_site | has_publication | in_high_quality_portal | portal | study_paper | doi | lead_author |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| unknown | https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-LN$lymph%20node | sc_transcriptomics | lymph node |  | http://purl.obolibrary.org/obo/UBERON_0002509 | 43 | false | true | false | true | false | CxG | Spatially mapping T cell receptors and transcriptomes | https://doi.org/10.1016/j.immuni.2022.09.002 | Sophia Liu |
| female | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 43 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| female | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp2$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 41 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| female | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp3$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 41 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| male | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#NL1$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 43 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="spatial-placements"></a>Universe Spatial Placements (spatial-placements)

Spatial placements considered or used in HRApop

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Universe Spatial Placements
#+ description: Spatial placements considered or used in HRApop

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>

SELECT DISTINCT ?spatial_placement
FROM HRApop:
FROM HRApopFull:
WHERE {
  ?spatial_placement a ccf:SpatialPlacement .
}

```

([View Source](../../queries/universe-ad-hoc/spatial-placements.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/spatial-placements.csv))

| spatial_placement |
| :--- |
| http://purl.org/ccf/1.5/0060612c-6d95-47d8-a8d0-0443fff344e9_placement |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227_placement |
| http://purl.org/ccf/1.5/00f945be-8604-4382-834d-707a37498a9a_placement |
| http://purl.org/ccf/1.5/016e1d91-9c07-46b7-8441-2975df328fb3_placement |
| http://purl.org/ccf/1.5/049f27a1-1e84-4f8a-a47e-48a0879b8652_placement |
| ... |


### <a id="universe-organ-cell-biomarker-scores"></a>All biomarkers seen in Atlas Datasets (universe-organ-cell-biomarker-scores)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: All biomarkers seen in Atlas Datasets

PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT ?organ ?cell_id (SAMPLE(?cell_label) as ?cell_label) 
  ?biomarker_label (SAMPLE(?biomarker_id) as ?biomarker_id)
  (MAX(?expr_value) as ?max_expr)
FROM HRApop:
FROM HRApopFull:
FROM HRApopTestData:
FROM HRA:
WHERE {
  OPTIONAL {
    {
      ?sample ccf:comes_from ?donor .
      ?sample ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    } UNION {
      ?block ccf:comes_from ?donor .
      ?block ccf:subdivided_into_sections ?sample .
      ?block ccf:has_registration_location ?rui_location .
      ?sample ccf:generates_dataset ?dataset .
    }
  }

  {
    ?dataset ccf:organ_id ?reportedOrganIriString .
    BIND(IRI(?reportedOrganIriString) as ?reportedOrganIri)

    OPTIONAL {
      ?reportedOrganIri rdfs:label ?reportedOrganRdfsLabel .
    }
    OPTIONAL {
      ?reportedOrganIri ccf:ccf_pref_label ?reportedOrganCcfLabel .
    }
    BIND(IF(BOUND(?reportedOrganRdfsLabel), ?reportedOrganRdfsLabel, ?reportedOrganCcfLabel) as ?organ)
  }

  [] ccf:generates_dataset ?dataset .
  ?dataset ccf:has_cell_summary [
    ccf:has_cell_summary_row [
      ccf:cell_id ?cell_id ;
      ccf:cell_label ?raw_cell_label ;
      ccf:gene_expr [
        ccf:gene_label ?biomarker_label ;
        ccf:gene_id ?biomarker_id ;
        ccf:mean_gene_expr_value ?expr_value 
        ;
      ]
    ]
  ] .

  OPTIONAL { 
    ?cell_id rdfs:label ?proper_cell_label .
  }
  BIND(COALESCE(?proper_cell_label, ?raw_cell_label) as ?cell_label)
}
GROUP BY ?organ ?cell_id ?biomarker_label
ORDER BY ?organ ?cell_id DESC(?max_expr)

```

([View Source](../../queries/universe-ad-hoc/universe-organ-cell-biomarker-scores.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/universe-organ-cell-biomarker-scores.csv))

| organ | cell_id | cell_label | biomarker_label | biomarker_id | max_expr |
| :--- | :--- | :--- | :--- | :--- | :--- |
| mesenteric lymph node | http://purl.obolibrary.org/obo/CL_0000084 | T cell | MALAT1 | ASCTB-TEMP:malat1 | 7.723395319040889 |
| mesenteric lymph node | http://purl.obolibrary.org/obo/CL_0000084 | T cell | HIVEP2 | ASCTB-TEMP:hivep2 | 3.551944966810432 |
| mesenteric lymph node | http://purl.obolibrary.org/obo/CL_0000084 | T cell | SMARCA2 | ASCTB-TEMP:smarca2 | 3.140955048539206 |
| mesenteric lymph node | http://purl.obolibrary.org/obo/CL_0000084 | T cell | IL7R | ASCTB-TEMP:il7r | 2.939625891700795 |
| mesenteric lymph node | http://purl.obolibrary.org/obo/CL_0000084 | T cell | TSHZ2 | ASCTB-TEMP:tshz2 | 2.751362171402745 |
| ... | ... | ... | ... | ... | ... |


### <a id="universe-sc-proteomics-cell-counts"></a>Cell Counts for Universe Proteomics Datasets (universe-sc-proteomics-cell-counts)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Counts for Universe Proteomics Datasets

PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT 
  (COUNT(DISTINCT(?dataset)) as ?universe_sc_proteomics_dataset_count)
  (SUM(?dataset_cell_count) as ?universe_sc_proteomics_cell_count)
FROM HRApop:
FROM HRApopTestData:
WHERE {
  {
    SELECT ?dataset (MAX(?total_cell_count) as ?dataset_cell_count)
    WHERE {
      {
        SELECT ?dataset ?tool (SUM(?cell_count) as ?total_cell_count)
        WHERE {
          ?dataset a ccf:Dataset ;
          ccf:has_cell_summary [
            ccf:cell_annotation_method ?tool ;
            ccf:has_cell_summary_row [
              ccf:cell_id ?cell_id ;
              ccf:cell_count ?cell_count ;
            ] ;
          ] .
          FILTER(?tool = 'sc_proteomics')
        }
        GROUP BY ?dataset ?tool
      }
    }
    GROUP BY ?dataset
  }
}

```

([View Source](../../queries/universe-ad-hoc/universe-sc-proteomics-cell-counts.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/universe-sc-proteomics-cell-counts.csv))

| universe_sc_proteomics_dataset_count | universe_sc_proteomics_cell_count |
| :--- | :--- |
| 330 | 36348900 |


### <a id="universe-sc-transcriptomics-cell-counts"></a>Cell Counts for Universe Transcriptomics Datasets (universe-sc-transcriptomics-cell-counts)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Counts for Universe Transcriptomics Datasets

PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT
  (COUNT(DISTINCT(?dataset)) as ?universe_sc_transcriptomics_dataset_count)
  (SUM(?dataset_cell_count) as ?universe_sc_transcriptomics_cell_count)
  (SUM(?preannotated_cell_count) as ?universe_sc_transcriptomics_preannotated_cell_count)
FROM HRApop:
FROM HRApopTestData:
WHERE {
  {
    SELECT ?dataset (SAMPLE(?preannotated_cell_count) as ?preannotated_cell_count) (MAX(?total_cell_count) as ?dataset_cell_count)
    WHERE {
      {
        SELECT ?dataset ?tool (MAX(xsd:integer(STR(?preannotated_cell_count))) as ?preannotated_cell_count) (SUM(?cell_count) as ?total_cell_count)
        WHERE {
          ?dataset a ccf:Dataset ;
          ccf:cell_count ?preannotated_cell_count ;
          ccf:has_cell_summary [
            ccf:cell_annotation_method ?tool ;
            ccf:has_cell_summary_row [
              ccf:cell_id ?cell_id ;
              ccf:cell_count ?cell_count ;
            ] ;
          ] .
          FILTER(?tool != 'sc_proteomics')
        }
        GROUP BY ?dataset ?tool
      }
    }
    GROUP BY ?dataset
  }
}

```

([View Source](../../queries/universe-ad-hoc/universe-sc-transcriptomics-cell-counts.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/universe-sc-transcriptomics-cell-counts.csv))

| universe_sc_transcriptomics_dataset_count | universe_sc_transcriptomics_cell_count | universe_sc_transcriptomics_preannotated_cell_count |
| :--- | :--- | :--- |
| 11158 | 66252990 | 71825835 |


### <a id="universe-sc-transcriptomics-cell-instance-counts"></a>Cell Counts for Universe Transcriptomics Datasets (universe-sc-transcriptomics-cell-instance-counts)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Counts for Universe Transcriptomics Datasets

PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>

SELECT
  (COUNT(DISTINCT(?dataset)) as ?universe_sc_transcriptomics_dataset_count)
  (SUM(?dataset_cell_count) as ?universe_sc_transcriptomics_cell_instance_count)
FROM HRApop:
FROM HRApopTestData:
WHERE {
  {
    SELECT ?dataset (SUM(?total_cell_count) as ?dataset_cell_count)
    WHERE {
      {
        SELECT ?dataset ?tool (SUM(?cell_count) as ?total_cell_count)
        WHERE {
          ?dataset a ccf:Dataset ;
          ccf:cell_count ?preannotated_cell_count ;
          ccf:has_cell_summary [
            ccf:cell_annotation_method ?tool ;
            ccf:has_cell_summary_row [
              ccf:cell_id ?cell_id ;
              ccf:cell_count ?cell_count ;
            ] ;
          ] .
          FILTER(?tool != 'sc_proteomics')
        }
        GROUP BY ?dataset ?tool
      }
    }
    GROUP BY ?dataset
  }
}

```

([View Source](../../queries/universe-ad-hoc/universe-sc-transcriptomics-cell-instance-counts.rq))
</details>

#### Results ([View CSV File](reports/universe-ad-hoc/universe-sc-transcriptomics-cell-instance-counts.csv))

| universe_sc_transcriptomics_dataset_count | universe_sc_transcriptomics_cell_instance_count |
| :--- | :--- |
| 11158 | 128436544 |


### <a id="unmapped-cell-ids"></a>Unmapped cell types (unmapped-cell-ids)

Cell types per tool that are not in cell ontology yet and the number of datasets affected

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Unmapped cell types
#+ description: Cell types per tool that are not in cell ontology yet and the number of datasets affected

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ASCTB-TEMP: <https://purl.org/ccf/ASCTB-TEMP_>
PREFIX CL: <http://purl.obolibrary.org/obo/CL_>
PREFIX FMA: <http://purl.org/sig/ont/fma/fma>
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX ccf3d: <http://purl.org/ccf/latest/ccf.owl#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX ctpop-graph: <https://purl.humanatlas.io/graph/ctpop>
PREFIX ctpop: <https://purl.humanatlas.io/graph/ctpop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?tool ?organ ?cell_label (COUNT(DISTINCT(?dataset)) as ?dataset_count)
FROM HRApop:
FROM HRA:
FROM HRApopTestData:
WHERE {
    [] ccf:cell_id ?cell_id .
    FILTER(STRSTARTS(STR(?cell_id), "https://purl.org/ccf/ASCTB-TEMP_"))

    ?dataset a ccf:Dataset ;
      ccf:has_cell_summary [
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
        ccf:has_cell_summary_row [
          ccf:cell_id ?cell_id ;
          ccf:cell_label ?cell_label
        ] ;
      ] .

    OPTIONAL {
      ?dataset ccf:organ_id ?organ_iri .
    }

    BIND(IF(BOUND(?organ_iri), REPLACE(STR(?organ_iri), STR(UBERON:), 'UBERON:'), 'unknown') as ?organ)
}
GROUP BY ?tool ?organ ?cell_label
ORDER BY ?tool ?organ ?cell_label

```

([View Source](../../queries/universe-ad-hoc/unmapped-cell-ids.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/unmapped-cell-ids.csv))

| tool | organ | cell_label | dataset_count |
| :--- | :--- | :--- | :--- |



  