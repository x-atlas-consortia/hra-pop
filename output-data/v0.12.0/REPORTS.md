# Summary of Reports

  ## Table of Contents

* atlas-ad-hoc
  * [Atlas AS with CT and B info from exp data (as-ct-b)](#as-ct-b)
  * [Atlas dataset, extraction site, and AS (as-datasets-extraction-sites)](#as-datasets-extraction-sites)
  * [Atlas dataset tool, modality, and AS info (as-datasets-modality)](#as-datasets-modality)
  * [Cell Counts for Atlas Proteomics Datasets (atlas-sc-proteomics-cell-counts)](#atlas-sc-proteomics-cell-counts)
  * [Cell Counts for Atlas Transcriptomics Datasets (atlas-sc-transcriptomics-cell-counts)](#atlas-sc-transcriptomics-cell-counts)
  * [Atlas consortium breakdown (consortium-breakdown)](#consortium-breakdown)
  * [Datasets by modality (count-dataset-modality)](#count-dataset-modality)
  * [Kidney AS Cell Distributions (counts-for-heart-as)](#counts-for-heart-as)
  * [Kidney AS Cell Distributions (counts-for-kidney-as)](#counts-for-kidney-as)
  * [Bulk Tool-Organ-AS Cell Distributions (counts-for-tools-by-as)](#counts-for-tools-by-as)
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
  * [Cell Counts for Universe Proteomics Datasets (universe-sc-proteomics-cell-counts)](#universe-sc-proteomics-cell-counts)
  * [Cell Counts for Universe Transcriptomics Datasets (universe-sc-transcriptomics-cell-counts)](#universe-sc-transcriptomics-cell-counts)
  * [Cell Counts for Universe Transcriptomics Datasets (universe-sc-transcriptomics-cell-instance-counts)](#universe-sc-transcriptomics-cell-instance-counts)



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
| Female | azimuth | Body of pancreas | endothelial | B2M | http://purl.obolibrary.org/obo/UBERON_0001150 | http://purl.obolibrary.org/obo/CL_0000115 | 16.905000000000003 | 4.596137523651123 |
| Female | azimuth | Body of pancreas | ductal | SLC4A4 | http://purl.obolibrary.org/obo/UBERON_0001150 | http://purl.obolibrary.org/obo/CL_0002079 | 66.990000000000006 | 4.298223972320557 |
| Female | azimuth | Body of pancreas | acinar | GP2 | http://purl.obolibrary.org/obo/UBERON_0001150 | http://purl.obolibrary.org/obo/CL_0002064 | 37.800000000000003 | 4.182102680206299 |
| Female | azimuth | Body of pancreas | immune | B2M | http://purl.obolibrary.org/obo/UBERON_0001150 | http://purl.obolibrary.org/obo/CL_0000738 | 6.4050000000000006 | 4.053146839141846 |
| Female | azimuth | Body of pancreas | endothelial | HLA-B | http://purl.obolibrary.org/obo/UBERON_0001150 | http://purl.obolibrary.org/obo/CL_0000115 | 16.905000000000003 | 4.029723644256592 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

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
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | Cartilage of segmental bronchus | http://purl.org/sig/ont/fma/fma62662 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHMLung | http://purl.org/sig/ont/fma/fma62662 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | Lateral segmental bronchus | http://purl.org/sig/ont/fma/fma7402 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHMLung | http://purl.org/sig/ont/fma/fma7402 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D046$lung | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | Cartilage of segmental bronchus | http://purl.org/sig/ont/fma/fma62662 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHMLung | http://purl.org/sig/ont/fma/fma62662 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D046$lung | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | Lateral segmental bronchus | http://purl.org/sig/ont/fma/fma7402 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHMLung | http://purl.org/sig/ont/fma/fma7402 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | Cartilage of segmental bronchus | http://purl.org/sig/ont/fma/fma62662 | http://purl.obolibrary.org/obo/UBERON_0001004 | respiratory system | http://purl.org/ccf/latest/ccf.owl#VHMLung | http://purl.org/sig/ont/fma/fma62662 |
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
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/153b0fe8575ff1a17768319ba6dbaa5c | sc_proteomics | sc_proteomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/846e56ed969922f1cb7a81619b175620 | celltypist | sc_transcriptomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/846e56ed969922f1cb7a81619b175620 | popv | sc_transcriptomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/be9a0e3119ea00dc156eff7ca346f46e | celltypist | sc_transcriptomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/be9a0e3119ea00dc156eff7ca346f46e | popv | sc_transcriptomics | sigmoid colon |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


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
| 107 | 17547511 |


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
| 525 | 10541300 | 10553618 |


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
| Female | HCA | 50 | 323276 | sc_transcriptomics |
| Male | HCA | 53 | 345881 | sc_transcriptomics |
| Female | HuBMAP | 23 | 1514227 | sc_proteomics |
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
| Male | 336 | sc_transcriptomics |
| Male | 84 | sc_proteomics |
| Female | 23 | sc_proteomics |
| Female | 189 | sc_transcriptomics |


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
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip1 | 4 | http://purl.obolibrary.org/obo/CL_0000136 | 33 | 792 |
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip2 | 2 | http://purl.obolibrary.org/obo/CL_0000136 | 20.5 | 246 |
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adipocyte | 6 | http://purl.obolibrary.org/obo/CL_0000136 | 20.16666666666666666667 | 726 |
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Arterial Endothelial | 6 | http://purl.obolibrary.org/obo/CL_1000413 | 84.33333333333333333333 | 3036 |
| Female | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Atrial Cardiomyocyte | 3 | http://purl.obolibrary.org/obo/CL_0002129 | 4 | 72 |
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
| Female | VHFLeftKidney | renal papilla | Afferent / Efferent Arteriole Endothelial | http://purl.obolibrary.org/obo/CL_1000412 | 1 | 2 |
| Female | VHFLeftKidney | renal papilla | Ascending Thin Limb | http://purl.obolibrary.org/obo/CL_1001107 | 442.75 | 1771 |
| Female | VHFLeftKidney | renal papilla | Ascending Vasa Recta Endothelial | http://purl.obolibrary.org/obo/CL_1001131 | 201.25 | 805 |
| Female | VHFLeftKidney | renal papilla | Connecting Tubule | http://purl.obolibrary.org/obo/CL_1000768 | 1008.75 | 4035 |
| Female | VHFLeftKidney | renal papilla | Cortical Collecting Duct Principal | http://purl.obolibrary.org/obo/CL_1000714 | 140.75 | 563 |
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/bcb61471-2a44-4d00-a0af-ff085512674c | 27 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5 | 21 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837 | 9 |


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
| HuBMAP datasets | 453 |
| SenNet datasets | 0 |
| tissue donors | 146 |
| organs | 16 |
| anatomical structures | 54 |
| cells | 33385403 |


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
| HuBMAP | https://entity.api.hubmapconsortium.org/entities/41dab04d801d21bfc99328c9e249cc68 | kidney | 55 | Female | 27.07 | azimuth | CL:4030012 | Descending Thin Limb Type 1 | 1920 | 0.07467330429371499 | TPM1 | 0.4729166626930237 |
| HuBMAP | https://entity.api.hubmapconsortium.org/entities/41dab04d801d21bfc99328c9e249cc68 | kidney | 55 | Female | 27.07 | azimuth | CL:4030016 | Distal Convoluted Tubule Type 1 | 1654 | 0.06432794026135656 | MTCO1P12 | 0.01406024768948555 |
| HuBMAP | https://entity.api.hubmapconsortium.org/entities/41dab04d801d21bfc99328c9e249cc68 | kidney | 55 | Female | 27.07 | azimuth | CL:4030016 | Distal Convoluted Tubule Type 1 | 1654 | 0.06432794026135656 | MTATP6P1 | 0.01831451430916786 |
| HuBMAP | https://entity.api.hubmapconsortium.org/entities/41dab04d801d21bfc99328c9e249cc68 | kidney | 55 | Female | 27.07 | azimuth | CL:4030016 | Distal Convoluted Tubule Type 1 | 1654 | 0.06432794026135656 | MTND1P23 | 0.008968623355031013 |
| HuBMAP | https://entity.api.hubmapconsortium.org/entities/41dab04d801d21bfc99328c9e249cc68 | kidney | 55 | Female | 27.07 | azimuth | CL:4030016 | Distal Convoluted Tubule Type 1 | 1654 | 0.06432794026135656 | MTND2P28 | 0.001813783426769078 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


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
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$interventricular%20septum | heart | heart left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | 40 | Female | 20 | azimuth | CL:0000136 | Adipocyte | 6 | 0.001462701121404193 | ACSL1 | 1.486510038375854 |
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$interventricular%20septum | heart | Posteromedial head of posterior papillary muscle of left ventricle | http://purl.org/sig/ont/fma/fma7267 | 40 | Female | 20 | azimuth | CL:0000136 | Adipocyte | 6 | 0.001462701121404193 | ACSL1 | 1.486510038375854 |
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$interventricular%20septum | heart | interventricular septum | http://purl.obolibrary.org/obo/UBERON_0002094 | 40 | Female | 20 | azimuth | CL:0000136 | Adipocyte | 6 | 0.001462701121404193 | ACSL1 | 1.486510038375854 |
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$interventricular%20septum | heart | heart right ventricle | http://purl.obolibrary.org/obo/UBERON_0002080 | 40 | Female | 20 | azimuth | CL:0000136 | Adipocyte | 6 | 0.001462701121404193 | ACSL1 | 1.486510038375854 |
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$interventricular%20septum | heart | heart left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | 40 | Female | 20 | azimuth | CL:0000136 | Adipocyte | 6 | 0.001462701121404193 | EBF1 | 1.924927592277527 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


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
| Female | 143 | 94 | 0 |
| Male | 203 | 141 | 0 |


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
| nodes | 336215 |
| edges | 1742529 |


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
| azimuth | http://purl.obolibrary.org/obo/CL_4028002 | alveolar capillary type 1 endothelial cell | 1067162 | 0.20635211284985772 |
| azimuth | http://purl.obolibrary.org/obo/CL_0002062 | pulmonary alveolar type 1 cell | 691252 | 0.16732765597774443 |
| azimuth | http://purl.obolibrary.org/obo/CL_0002063 | pulmonary alveolar type 2 cell | 329056 | 0.16737024873141443 |
| azimuth | http://purl.obolibrary.org/obo/CL_0002145 | ciliated columnar cell of tracheobronchial tree | 286048 | 0.04575379809584197 |
| azimuth | http://purl.obolibrary.org/obo/CL_4028004 | alveolar type 1 fibroblast cell | 200622 | 0.07531732398027378 |
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | http://purl.obolibrary.org/obo/CL_0002063 | pulmonary alveolar type 2 cell | 838 | 0.1686116700201207 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | http://purl.obolibrary.org/obo/CL_0002062 | pulmonary alveolar type 1 cell | 740 | 0.1488933601609658 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | http://purl.obolibrary.org/obo/CL_0000583 | alveolar macrophage | 697 | 0.1402414486921529 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | http://purl.obolibrary.org/obo/CL_4028002 | alveolar capillary type 1 endothelial cell | 473 | 0.09517102615694165 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | http://purl.obolibrary.org/obo/CL_4028004 | alveolar type 1 fibroblast cell | 470 | 0.09456740442655935 |
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
| Large Intestine | descending colon | lymphocyte of large intestine lamina propria | IL2RA | http://purl.obolibrary.org/obo/UBERON_0001158 | http://purl.obolibrary.org/obo/CL_0009018 | http://identifiers.org/hgnc/6008 |
| Large Intestine | descending colon | lymphocyte of large intestine lamina propria | FOXP3 | http://purl.obolibrary.org/obo/UBERON_0001158 | http://purl.obolibrary.org/obo/CL_0009018 | http://identifiers.org/hgnc/6106 |
| Large Intestine | descending colon | Schwann cell | NCAM1 | http://purl.obolibrary.org/obo/UBERON_0001158 | http://purl.obolibrary.org/obo/CL_0002573 | http://identifiers.org/hgnc/7656 |
| Large Intestine | descending colon | mast cell | SLC16A1 | http://purl.obolibrary.org/obo/UBERON_0001158 | http://purl.obolibrary.org/obo/CL_0000097 | http://identifiers.org/hgnc/10922 |
| Large Intestine | descending colon | mature neutrophil | FCGR3A | http://purl.obolibrary.org/obo/UBERON_0001158 | http://purl.obolibrary.org/obo/CL_0000096 | http://identifiers.org/hgnc/3619 |
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
| Female | Broad Institute | 40 | 659085 |
| Male | Broad Institute | 42 | 799317 |
| Female | GTEx | 7 | 123723 |
| Male | GTEx | 8 | 143256 |
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
| 632 | 335 |


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

SELECT ?tool ?cell_id (COUNT(DISTINCT(?dataset)) as ?dataset_count)
FROM HRApop:
FROM HRA:
WHERE {
    ?dataset a ccf:Dataset ;
      ccf:has_cell_summary [
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
        ccf:has_cell_summary_row [
          ccf:cell_id ?cell_id ;
        ] ;
      ] .

    FILTER(STRSTARTS(STR(?cell_id), "https://purl.org/ccf/ASCTB-TEMP_"))
}
GROUP BY ?tool ?cell_id
ORDER BY ?tool ?cell_id

```

([View Source](../../queries/atlas-ad-hoc/unmapped-cell-ids.rq))
</details>

#### Results ([View CSV File](reports/atlas-ad-hoc/unmapped-cell-ids.csv))

| tool | cell_id | dataset_count |
| :--- | :--- | :--- |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_alveolar-m-proliferating | 4 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_descending-vasa-recta-endothelial | 229 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_interstitial-m-perivascular | 30 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_monocyte-derived-m | 46 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_non-classical-monocytes | 46 |
| ... | ... | ... |


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
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000171 | beta_immature | 48.57036 | 0.4653535496669973 |
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000738 | immune | 39.1935 | 0.3755136743658778 |
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000173 | delta | 35.33331 | 0.3385291200226725 |
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000115 | endothelial cell | 30.00891 | 0.2875159416182514 |
| http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/168abaaf-f115-4606-a655-8821b294d8bb | pancreas | UBERON:0001264 | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000763 | myeloid cell | 29.60958 | 0.2836899532379198 |
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/8f17ac63-aaba-44b5-9b78-60f121da4c2f#patient5$arch%20of%20aorta | http://purl.obolibrary.org/obo/UBERON_0000948 | Male | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002084 | celltypist | 0.2939366900821853 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/8f17ac63-aaba-44b5-9b78-60f121da4c2f#patient5$arch%20of%20aorta | http://purl.obolibrary.org/obo/UBERON_0000948 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002084 | celltypist | 0.2144767265005954 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/8f17ac63-aaba-44b5-9b78-60f121da4c2f#patient5$arch%20of%20aorta | http://purl.obolibrary.org/obo/UBERON_0000948 | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002084 | popv | 0.7048590764430861 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/8f17ac63-aaba-44b5-9b78-60f121da4c2f#patient5$arch%20of%20aorta | http://purl.obolibrary.org/obo/UBERON_0000948 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002084 | popv | 0.12638321330894964 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/8f17ac63-aaba-44b5-9b78-60f121da4c2f#patient5$arch%20of%20aorta | http://purl.obolibrary.org/obo/UBERON_0000948 | Male | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002084 | popv | 0.26552936927987947 |
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

#### Results ([View CSV File](reports/atlas/application-a2p2.csv))

| dataset | reported_organ | tool | modality | as | pct_hra_ct_overlap |
| :--- | :--- | :--- | :--- | :--- | :--- |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002189 | 0.91666666666666666667 |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0004200 | 0.91666666666666666667 |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0001222 | 0.91666666666666666667 |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002080 | 0.91666666666666666667 |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0001223 | 0.91666666666666666667 |
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | azimuth | sc_transcriptomics | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | azimuth | 0.5945058338067988 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | popv | sc_transcriptomics | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | popv | 0.4955606177578255 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | celltypist | sc_transcriptomics | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | celltypist | 0.38586832722843384 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | popv | sc_transcriptomics | http://purl.org/ccf/1.5/db4f3eca-e9f8-4f9c-88a1-795a20dd0f84 | popv | 0.3538539869523319 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | popv | sc_transcriptomics | http://purl.org/ccf/1.5/43e195fb-0f50-4b67-bff1-b74f68290fc6 | popv | 0.35385398695233183 |
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/edb893ee-4066-4128-9aec-5eb2b03f8287#Kim_Lee_2020_P0025$lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Male | popv | sc_transcriptomics | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | 0.12270939764303289 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/dde06e0f-ab3b-46be-96a2-a8082383c4a1#232_233$blood | http://purl.obolibrary.org/obo/UBERON_0000178 | Male | azimuth | sc_transcriptomics | https://entity.api.hubmapconsortium.org/entities/046251c94ea0e79ee935dd3de57e093c | popv | 0.277799624572146 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b1a879f6-5638-48d3-8f64-f6592c1b1561#F45$skin%20of%20body | http://purl.obolibrary.org/obo/UBERON_0002097 | Female | celltypist | sc_transcriptomics | https://entity.api.hubmapconsortium.org/entities/6f1b0a72a5e10af1474cec9a8804b8f5 | popv | 0.26268592329674256 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/edb893ee-4066-4128-9aec-5eb2b03f8287#Kim_Lee_2020_P0025$lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Male | azimuth | sc_transcriptomics | https://entity.api.hubmapconsortium.org/entities/d171ff8d83f707ecca64ff159c7160a7 | popv | 0.2943780419964578 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/edb893ee-4066-4128-9aec-5eb2b03f8287#Kim_Lee_2020_P0025$lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Male | azimuth | sc_transcriptomics | https://entity.api.hubmapconsortium.org/entities/5d111a1db2f18d507d23e79b993e1e4a | popv | 0.12253741479334297 |
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
| Male | sc_transcriptomics | 351 | 11519607 |
| Female | sc_proteomics | 45 | 1514227 |
| Male | sc_proteomics | 57 | 16033284 |
| Female | sc_transcriptomics | 335 | 4318285 |


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
| Male | 382 | 27552891 |
| Female | 359 | 5832512 |


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
| https://entity.api.hubmapconsortium.org/entities/56d58e095b39bace799a08131d331a99 | HuBMAP | RTI-General Electric | 53 | Female | 37.2 | White |
| https://entity.api.hubmapconsortium.org/entities/5c4208e2f2715c56ee8dc82b5f1b90c0 | HuBMAP | TMC-UCSD | 63 | Female | 36.5 | White |
| https://entity.api.hubmapconsortium.org/entities/613776ac210f65a63462ce6f926f4557 | HuBMAP | TMC-UCSD | 29 | Male | 42.3 | White |
| https://entity.api.hubmapconsortium.org/entities/61948ab02c6e4849c2522d953694df5d | HuBMAP | TMC-UCSD | 57 | Male | 36.5 | White |
| https://entity.api.hubmapconsortium.org/entities/63108adadd97a60ea7bdc84498384069 | HuBMAP | RTI-General Electric | 33 | Female | 24.3 | White |
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
| UBERON:0004539 | right kidney | Male | sc_transcriptomics | renal column | kidney pyramid | 0.7280132027935851 | 12 | 87 |
| UBERON:0004539 | right kidney | Female | sc_transcriptomics | renal column | kidney pyramid | 0.6935104212414164 | 12 | 87 |
| UBERON:0004539 | right kidney | Female | sc_transcriptomics | renal papilla | kidney pyramid | 0.7023000568513608 | 9 | 87 |
| UBERON:0004538 | left kidney | Male | sc_transcriptomics | renal column | kidney pyramid | 0.7280132027935851 | 12 | 87 |
| UBERON:0004538 | left kidney | Female | sc_transcriptomics | renal column | kidney pyramid | 0.6935104212414164 | 12 | 87 |
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
| UBERON:0000059 | large intestine | Female | sc_proteomics | sc_proteomics | 11 | 5 | 6 | 6 | 68 |
| UBERON:0000059 | large intestine | Male | sc_proteomics | sc_proteomics | 11 | 5 | 25 | 49 | 230 |
| UBERON:0001004 | respiratory system | Female | sc_proteomics | sc_proteomics | 62 | 1 | 1 | 1 | 268 |
| UBERON:0001004 | respiratory system | Male | sc_proteomics | sc_proteomics | 59 | 1 | 1 | 1 | 308 |
| UBERON:0002097 | skin of body | Male | sc_proteomics | sc_proteomics | 1 | 1 | 2 | 2 | 12 |
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
| GTEx | Female | sc_transcriptomics | 1 | 6 | 4 | 7 | 0 | 7 | 114 | 123723 |
| GTEx | Male | sc_transcriptomics | 1 | 5 | 4 | 8 | 0 | 8 | 131 | 143256 |
| HCA | Female | sc_transcriptomics | 2 | 13 | 6 | 50 | 0 | 50 | 107 | 765108 |
| HCA | Male | sc_transcriptomics | 2 | 12 | 6 | 51 | 0 | 53 | 104 | 897842 |
| HuBMAP | Female | sc_proteomics | 0 | 8 | 5 | 23 | 11 | 23 | 45 | 1514227 |
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
| HuBMAP |  |  |  |  |  | Female | 5 |  | Black or African American | 29.28 | urinary bladder | 3d-vh-f-urinary-bladder.glb |  | 96 | 1 |  | fundus of urinary bladder |  | UBERON:0006082 |  |  |  | https://portal.hubmapconsortium.org/browse/dataset/cae2beaf3926759549dbf4128d6b5ebd |  | popv |  | 5917 | 14 |  |
| HuBMAP |  |  |  |  |  | Male | 65 |  | White | 30.3 | left kidney | 3d-vh-m-kidney-l.glb |  | 12 | 6 |  | kidney pyramid; renal papilla; renal pelvis; major calyx; minor calyx; kidney calyx |  | UBERON:0004200; UBERON:0001228; UBERON:0001224; UBERON:0001226; UBERON:0001227; UBERON:0006517 |  |  |  | https://portal.hubmapconsortium.org/browse/dataset/fae9a1f2e7abefca2203765a3c7a5ba1 |  | azimuth |  | 10999 | 18 |  |
| HuBMAP |  |  |  |  |  | Female | 54 |  | Black or African American | 53.06 | right kidney | 3d-vh-f-kidney-r.glb |  | 8 | 8 |  | outer cortex of kidney; renal column; kidney pyramid; renal papilla; kidney capsule; hilum of kidney; renal medulla; cortex of kidney |  | UBERON:0002189; UBERON:0001284; UBERON:0004200; UBERON:0001228; UBERON:0002015; UBERON:0008716; UBERON:0000362; UBERON:0001225 |  |  |  | https://portal.hubmapconsortium.org/browse/dataset/ad693f99fb9006e68a53e97598da1509 |  | azimuth |  | 6994 | 28 |  |
| HuBMAP |  |  |  |  |  | Female | 67 |  | White | 30.2 | small intestine | 3d-vh-f-small-intestine.glb |  | 1350 | 1 | 1 | duodenum | descending part of duodenum | UBERON:0002114 | FMA:14928 |  |  | https://portal.hubmapconsortium.org/browse/dataset/11678046b4e78f95762acc47d3074dc5 |  | popv |  | 11992 | 133 |  |
| HuBMAP |  |  |  |  |  | Female | 67 |  | White | 30.2 | small intestine | 3d-vh-f-small-intestine.glb |  | 1350 | 2 | 2 | jejunum; duodenum | ascending part of duodenum; horizontal part of duodenum | UBERON:0002115; UBERON:0002114 | FMA:14930; FMA:14929 |  |  | https://portal.hubmapconsortium.org/browse/dataset/f6eb890063d13698feb11d39fa61e45a |  | celltypist |  | 11956 | 130 |  |
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
| VHFHeart | UBERON:0000948 | Posteromedial head of posterior papillary muscle of left ventricle | 4401.498768462402 | 0 | 1 | 36 | 0 | 6 | 44 | 0 | 50 | Adip1; Adipocyte; Adip2; Endocardial; EC7_endocardial; NK; cardiac endothelial cell; cardiac muscle cell; B; SMC1_basic; EC6_ven; T; NK_CD56hi; MAIT-like; Capillary Endothelial; EC3_cap; EC2_cap; EC1_cap; fibroblast of cardiac tissue; hepatocyte; B_plasma; Lymphatic Endothelial; EC8_ln; Fibroblast; FB1; FB3; FB4_activated; FB5; macrophage; Macrophage; LYVE1+IGF1+MP; LYVE1+TIMD4+MP; LYVE1+MP_cycling; Arterial Endothelial; EC5_art; PC1_vent; Pericyte; smooth muscle cell; Smooth Muscle; Mast; Venous Endothelial; Neuronal; Monocyte/cDC; CD8+T_trans; CD8+T_te; EC4_immune; Endothelial; T/NK_cycling; CD8+T_cytox; CD16+Mo; Mesothelial; CD8+T_em; Neut; CD4+T_Th1; DC; CD4+T_Tfh; CD4+T_reg; CD4+T_Th17; ILC; CD4+T_naive; CD4+T_act; NK_CD16hi; NC1_glial; vCM1; Atrial Cardiomyocyte; vCM2; Ventricular Cardiomycoyte; aCM5; CD14+Mo; vCM3_stressed; NC2_glial_NGF+; aCM2; aCM1; CD4+T_Th2; gdT; SAN_P_cell | 391.875 |
| VHFHeart | UBERON:0000948 | heart left ventricle | 229312.7801882646 | 102 | 7 | 138 | 0 | 7 | 46 | 23 | 53 | cardiac endothelial cell; CD8+T_te; EC10_CMC-like; EC4_immune; Endothelial; EC9_FB-like; T/NK_cycling; B_plasma; NK_CD56hi; Neut; CD4+T_Th1; Monocyte/cDC; CD8+T_trans; T; NK; cardiac muscle cell; fibroblast of cardiac tissue; SMC1_basic; EC6_ven; MAIT-like; Neuronal; Venous Endothelial; hepatocyte; smooth muscle cell; Smooth Muscle; EC1_cap; Capillary Endothelial; EC3_cap; EC2_cap; EC5_art; Arterial Endothelial; FB1; Fibroblast; FB2; FB4_activated; FB5; FB3; EC8_ln; Lymphatic Endothelial; AVN_P_cell; vCM4; Ventricular Cardiomycoyte; vCM1; vCM2; vCM3_stressed; Atrial Cardiomyocyte; aCM2; aCM1; aCM4; aCM3; aCM5; CD8+T_cytox; CD16+Mo; Meso; Mesothelial; CD8+T_em; DC; CD4+T_Tfh; CD4+T_reg; CD4+T_Th17; CD4+T_naive; ILC; CD14+Mo; NC2_glial_NGF+; NC1_glial; CD4+T_act; NK_CD16hi; LYVE1+TIMD4+MP; macrophage; Macrophage; LYVE1+IGF1+MP; LYVE1+MP_cycling; Mast; Pericyte; PC1_vent; PC3_str; PC2_atria; PC4_CMC-like; Purkinje_cell; gdT; SAN_P_cell; Adip1; Adipocyte; Adip3; Adip2; Endocardial; EC7_endocardial; B; CD4+T_Th2; AVN_bundle_cell | 464.57821173300734716280 |
| VHFHeart | UBERON:0000948 | heart right ventricle | 73521.72645229718 | 49 | 2 | 85 | 0 | 6 | 45 | 22 | 51 | Adip1; Adipocyte; Adip2; B; EC7_endocardial; Endocardial; SMC1_basic; NK; EC6_ven; T; fibroblast of cardiac tissue; cardiac endothelial cell; cardiac muscle cell; hepatocyte; B_plasma; MAIT-like; NK_CD56hi; EC1_cap; Capillary Endothelial; EC2_cap; EC3_cap; EC5_art; Arterial Endothelial; EC4_immune; EC10_CMC-like; Endothelial; Mesothelial; Meso; CD8+T_em; T/NK_cycling; EC8_ln; Lymphatic Endothelial; FB1; Fibroblast; FB3; FB4_activated; FB5; macrophage; Macrophage; LYVE1+IGF1+MP; LYVE1+TIMD4+MP; LYVE1+MP_cycling; MoMP; Mast; Pericyte; PC3_str; PC1_vent; PC2_atria; Smooth Muscle; smooth muscle cell; Venous Endothelial; CD8+T_te; Neuronal; Monocyte/cDC; CD8+T_trans; CD14+Mo; CD4+T_act; Ventricular Cardiomycoyte; vCM1; vCM2; vCM4; vCM3_stressed; aCM1; Atrial Cardiomyocyte; aCM5; aCM2; NC1_glial; NC2_glial_NGF+; NK_CD16hi; CD4+T_reg; CD4+T_Th17; ILC; CD16+Mo; CD8+T_cytox; CD4+T_Tfh; Neut; CD4+T_Th1; DC; gdT; SAN_P_cell; AVN_P_cell; CD4+T_naive; CD4+T_Th2 | 367.65603574792456136508 |
| VHFHeart | UBERON:0000948 | interventricular septum | 65894.53465930313 | 0 | 1 | 36 | 0 | 6 | 44 | 19 | 50 | Adip1; Adipocyte; Adip2; Pericyte; PC1_vent; CD4+T_Tfh; CD4+T_reg; CD4+T_Th17; ILC; SMC1_basic; Mast; Lymphatic Endothelial; EC8_ln; Fibroblast; FB1; FB3; FB4_activated; FB5; CD8+T_em; Neut; CD4+T_Th1; DC; MAIT-like; Atrial Cardiomyocyte; aCM1; aCM5; aCM2; NK_CD16hi; CD14+Mo; Ventricular Cardiomycoyte; vCM1; vCM2; vCM3_stressed; NC2_glial_NGF+; NC1_glial; CD4+T_act; EC6_ven; T; NK; cardiac endothelial cell; fibroblast of cardiac tissue; hepatocyte; CD4+T_Th2; gdT; SAN_P_cell; Smooth Muscle; smooth muscle cell; Venous Endothelial; Neuronal; Monocyte/cDC; CD8+T_trans; CD8+T_te; EC4_immune; Endothelial; T/NK_cycling; CD8+T_cytox; CD16+Mo; Mesothelial; cardiac muscle cell; NK_CD56hi; B_plasma; Capillary Endothelial; EC3_cap; EC2_cap; EC1_cap; Endocardial; EC7_endocardial; B; Arterial Endothelial; EC5_art; Macrophage; LYVE1+IGF1+MP; LYVE1+TIMD4+MP; macrophage; LYVE1+MP_cycling; CD4+T_naive | 390.04174573055028462998 |
| VHFHeart | UBERON:0000948 | left cardiac atrium | 21499.01206134312 | 49 | 1 | 49 | 0 | 6 | 42 | 22 | 48 | Smooth Muscle; smooth muscle cell; B; Mast; T; NK; cardiac endothelial cell; cardiac muscle cell; fibroblast of cardiac tissue; EC6_ven; Macrophage; LYVE1+TIMD4+MP; macrophage; LYVE1+IGF1+MP; hepatocyte; B_plasma; NK_CD56hi; MAIT-like; EC1_cap; Capillary Endothelial; EC3_cap; EC2_cap; Arterial Endothelial; EC5_art; Fibroblast; FB2; FB1; FB3; Lymphatic Endothelial; EC8_ln; Purkinje_cell; Atrial Cardiomyocyte; aCM1; aCM4; aCM3; Ventricular Cardiomycoyte; vCM1; vCM4; vCM2; NC1_glial; CD4+T_act; NK_CD16hi; CD14+Mo; ILC; CD4+T_naive; Monocyte/cDC; CD8+T_trans; CD8+T_te; EC10_CMC-like; Endothelial; EC4_immune; T/NK_cycling; CD8+T_cytox; CD16+Mo; Mesothelial; Meso; CD8+T_em; Neut; Neuronal; Endocardial; EC7_endocardial; Adipocyte; Adip1; Adip2; SMC2_art; SMC1_basic; Venous Endothelial; Pericyte; PC1_vent; PC2_atria; CD4+T_Th1; DC; CD4+T_Th2; CD4+T_Tfh; CD4+T_reg | 219.00320883070209215762 |
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
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip1 | http://purl.obolibrary.org/obo/CL_0000136 | 33 | 792 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip2 | http://purl.obolibrary.org/obo/CL_0000136 | 20.5 | 246 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adipocyte | http://purl.obolibrary.org/obo/CL_0000136 | 20.16666666666666666667 | 726 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Arterial Endothelial | http://purl.obolibrary.org/obo/CL_1000413 | 84.33333333333333333333 | 3036 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Atrial Cardiomyocyte | http://purl.obolibrary.org/obo/CL_0002129 | 4 | 72 |
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
| VHFLargeIntestine | ascending colon | B | http://purl.obolibrary.org/obo/CL_0000236 | 208 | 416 |
| VHFLargeIntestine | ascending colon | CD4+ T cell | http://purl.obolibrary.org/obo/CL_0000624 | 876 | 1752 |
| VHFLargeIntestine | ascending colon | CD57+ Enterocyte | http://purl.obolibrary.org/obo/CL_4033092 | 1 | 1 |
| VHFLargeIntestine | ascending colon | CD66+ Enterocyte | http://purl.obolibrary.org/obo/CL_0000584 | 711.5 | 1423 |
| VHFLargeIntestine | ascending colon | CD7+ Immune | http://purl.obolibrary.org/obo/CL_0001028 | 30 | 60 |
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
| http://purl.org/ccf/1.5/2b922426-d192-47fb-ba8e-1921ea21fe4c | VHMLeftKidney | left kidney | outer cortex of kidney | http://purl.obolibrary.org/obo/UBERON_0002189 | 11 | 119898.4423074725 | 11 | 13 |
| http://purl.org/ccf/1.5/461a8adc-10d3-4518-8dd2-d2daccaa128b | VHFLeftKidney | left kidney | outer cortex of kidney | http://purl.obolibrary.org/obo/UBERON_0002189 | 9.0 | 132321.2564316727 | 10 | 12.600000000000003 |
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
| celltypist | sc_transcriptomics | UBERON:0002108 | small intestine | https://entity.api.hubmapconsortium.org/entities/0b528e5d674fadada32215c364f6fcaa | ASCTB-TEMP:ec-cells-tac1- | EC cells (TAC1+) | ADAM28 | 0.5254343748092651 |
| celltypist | sc_transcriptomics | UBERON:0002108 | small intestine | https://entity.api.hubmapconsortium.org/entities/0b528e5d674fadada32215c364f6fcaa | ASCTB-TEMP:ec-cells-tac1- | EC cells (TAC1+) | LINC01619 | 1.892333269119263 |
| popv | sc_transcriptomics | UBERON:0002106 | spleen | https://entity.api.hubmapconsortium.org/entities/d48b7990d638dbede870ae9c1976e475 | CL:0000860 | classical monocyte | HSP90AA1 | 5.25025085571203 |
| popv | sc_transcriptomics | UBERON:0002106 | spleen | https://entity.api.hubmapconsortium.org/entities/d48b7990d638dbede870ae9c1976e475 | CL:0000860 | classical monocyte | FTL | 6.317324500097307 |
| popv | sc_transcriptomics | UBERON:0002106 | spleen | https://entity.api.hubmapconsortium.org/entities/d48b7990d638dbede870ae9c1976e475 | CL:0000860 | classical monocyte | TMSB10 | 4.647212229350673 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


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
| Male | https://doi.org/10.48698/3z31-8924#18-312_TissueBlock1 | http://purl.org/ccf/1.5/2b922426-d192-47fb-ba8e-1921ea21fe4c | https://api.cellxgene.cziscience.com/dp/v1/collections/bcb61471-2a44-4d00-a0af-ff085512674c#18-312$cortex%20of%20kidney | azimuth | sc_transcriptomics | left kidney | UBERON:0004538 | 0.48224133261719965 |
| Male | https://doi.org/10.48698/3z31-8924#18-312_TissueBlock1 | http://purl.org/ccf/1.5/2b922426-d192-47fb-ba8e-1921ea21fe4c | https://api.cellxgene.cziscience.com/dp/v1/collections/bcb61471-2a44-4d00-a0af-ff085512674c#18-312$cortex%20of%20kidney | azimuth | sc_transcriptomics | left kidney | UBERON:0004538 | 0.48224133261719965 |
| Male | https://doi.org/10.48698/3z31-8924#18-312_TissueBlock1 | http://purl.org/ccf/1.5/2b922426-d192-47fb-ba8e-1921ea21fe4c | https://api.cellxgene.cziscience.com/dp/v1/collections/bcb61471-2a44-4d00-a0af-ff085512674c#18-312$cortex%20of%20kidney | azimuth | sc_transcriptomics | left kidney | UBERON:0004538 | 0.48224133261719965 |
| Male | https://doi.org/10.48698/3z31-8924#18-312_TissueBlock1 | http://purl.org/ccf/1.5/2b922426-d192-47fb-ba8e-1921ea21fe4c | https://api.cellxgene.cziscience.com/dp/v1/collections/bcb61471-2a44-4d00-a0af-ff085512674c#18-312$cortex%20of%20kidney | azimuth | sc_transcriptomics | left kidney | UBERON:0004538 | 0.48224133261719965 |
| Male | https://doi.org/10.48698/3z31-8924#18-312_TissueBlock1 | http://purl.org/ccf/1.5/2b922426-d192-47fb-ba8e-1921ea21fe4c | https://api.cellxgene.cziscience.com/dp/v1/collections/bcb61471-2a44-4d00-a0af-ff085512674c#18-312$cortex%20of%20kidney | azimuth | sc_transcriptomics | left kidney | UBERON:0004538 | 0.48224133261719965 |
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
| Female | http://purl.org/ccf/1.5/aed760ae-295a-43fc-b6cd-abdf6f012975#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/bff180755a5da7c036e5250c94f1ebd7#D115-RLL-10A3-40 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | skin | http://purl.obolibrary.org/obo/UBERON_0002097 | sc_proteomics | 0.11735582283141632 | false |
| Female | http://purl.org/ccf/1.5/aed760ae-295a-43fc-b6cd-abdf6f012975#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/bff180755a5da7c036e5250c94f1ebd7#D115-RLL-10A3-40 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | skin of body | http://purl.obolibrary.org/obo/UBERON_0002097 | sc_proteomics | 0.11735582283141632 | false |
| Male | http://purl.org/ccf/1.5/fb73e18b-9ddc-4fdf-b9a6-4b7735e5017b#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/0f1ddcb41a484adbda759c0c79097a02#D265-LLL-7A7-12 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | skin | http://purl.obolibrary.org/obo/UBERON_0002097 | sc_proteomics | 0.10490218596258533 | false |
| Male | http://purl.org/ccf/1.5/fb73e18b-9ddc-4fdf-b9a6-4b7735e5017b#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/0f1ddcb41a484adbda759c0c79097a02#D265-LLL-7A7-12 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | skin of body | http://purl.obolibrary.org/obo/UBERON_0002097 | sc_proteomics | 0.10490218596258533 | false |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | popv | 0.17129655592398316 | false |
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
| Female | http://purl.obolibrary.org/obo/UBERON_0001069 | azimuth | sc_transcriptomics | 1 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001069 | celltypist | sc_transcriptomics | 1 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001069 | popv | sc_transcriptomics | 0.90909090909090909091 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001150 | azimuth | sc_transcriptomics | 1 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001150 | celltypist | sc_transcriptomics | 1 |
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
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A_TissueBlock | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A | azimuth | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002078 | 0.90566037735849056604 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A_TissueBlock | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A | azimuth | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0001248 | 0.01886792452830188679 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A_TissueBlock | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A | azimuth | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0006082 | 0.03773584905660377358 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A_TissueBlock | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A | celltypist | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002094 | 0.83018867924528301887 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A_TissueBlock | https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A | celltypist | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0004200 | 0.09433962264150943396 |
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
| Male | https://entity.api.hubmapconsortium.org/entities/3135de0b9f359f09f9e6891784b88cae | https://entity.api.hubmapconsortium.org/entities/148d6445ed0cda5cabae377829013b4c | celltypist | sc_transcriptomics | small intestine | UBERON:0002108 | http://purl.obolibrary.org/obo/UBERON_0001150 | 0.015625 |
| Male | https://entity.api.hubmapconsortium.org/entities/3135de0b9f359f09f9e6891784b88cae | https://entity.api.hubmapconsortium.org/entities/148d6445ed0cda5cabae377829013b4c | celltypist | sc_transcriptomics | small intestine | UBERON:0002108 | http://purl.org/sig/ont/fma/fma14517 | 0.015625 |
| Male | https://entity.api.hubmapconsortium.org/entities/3135de0b9f359f09f9e6891784b88cae | https://entity.api.hubmapconsortium.org/entities/148d6445ed0cda5cabae377829013b4c | celltypist | sc_transcriptomics | small intestine | UBERON:0002108 | http://purl.obolibrary.org/obo/UBERON_0001151 | 0.015625 |
| Male | https://entity.api.hubmapconsortium.org/entities/3135de0b9f359f09f9e6891784b88cae | https://entity.api.hubmapconsortium.org/entities/148d6445ed0cda5cabae377829013b4c | celltypist | sc_transcriptomics | small intestine | UBERON:0002108 | http://purl.obolibrary.org/obo/UBERON_0001069 | 0.015625 |
| Male | https://entity.api.hubmapconsortium.org/entities/3135de0b9f359f09f9e6891784b88cae | https://entity.api.hubmapconsortium.org/entities/148d6445ed0cda5cabae377829013b4c | celltypist | sc_transcriptomics | small intestine | UBERON:0002108 | http://purl.obolibrary.org/obo/UBERON_0010373 | 0.015625 |
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
| Female | http://purl.org/ccf/1.5/aed760ae-295a-43fc-b6cd-abdf6f012975#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/bff180755a5da7c036e5250c94f1ebd7#D115-RLL-10A3-40 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002115 | 0.57142857142857142857 | false |
| Female | http://purl.org/ccf/1.5/aed760ae-295a-43fc-b6cd-abdf6f012975#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/bff180755a5da7c036e5250c94f1ebd7#D115-RLL-10A3-40 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | http://purl.org/sig/ont/fma/fma14928 | 0.57142857142857142857 | false |
| Female | http://purl.org/ccf/1.5/aed760ae-295a-43fc-b6cd-abdf6f012975#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/bff180755a5da7c036e5250c94f1ebd7#D115-RLL-10A3-40 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | http://purl.org/sig/ont/fma/fma14929 | 0.57142857142857142857 | false |
| Female | http://purl.org/ccf/1.5/aed760ae-295a-43fc-b6cd-abdf6f012975#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/bff180755a5da7c036e5250c94f1ebd7#D115-RLL-10A3-40 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | http://purl.org/sig/ont/fma/fma14930 | 0.57142857142857142857 | false |
| Female | http://purl.org/ccf/1.5/aed760ae-295a-43fc-b6cd-abdf6f012975#TissueSection1 | https://entity.api.hubmapconsortium.org/entities/bff180755a5da7c036e5250c94f1ebd7#D115-RLL-10A3-40 | sc_proteomics | sc_proteomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0001159 | 0.57142857142857142857 | false |
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
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | celltypist | 0.3061584053469334 | 5.855527730273338 |
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | celltypist | 0.3061584053469334 | 5.855527730273338 |
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | celltypist | 0.3061584053469334 | 5.855527730273338 |
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | celltypist | 0.3061584053469334 | 5.855527730273338 |
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | celltypist | 0.3061584053469334 | 5.855527730273338 |
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | https://entity.api.hubmapconsortium.org/entities/8b65acdfecc504e9a96c84643c3ab02c | 0.9994799798116535 | Female | popv | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://entity.api.hubmapconsortium.org/entities/8b65acdfecc504e9a96c84643c3ab02c | http://purl.org/ccf/1.5/16e98d8c-8983-48c2-bb41-7b1cfbbf2e4a | 0.9994799798116535 | 33.70811169436818 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D4$interventricular%20septum | https://entity.api.hubmapconsortium.org/entities/22684b9011fc5aea5cb3f89670a461e8 | 0.9994799798116535 | Female | popv | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D4$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://entity.api.hubmapconsortium.org/entities/22684b9011fc5aea5cb3f89670a461e8 | http://purl.org/ccf/1.5/16e98d8c-8983-48c2-bb41-7b1cfbbf2e4a | 0.9994799798116535 | 33.70811169436818 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$interventricular%20septum | https://entity.api.hubmapconsortium.org/entities/22684b9011fc5aea5cb3f89670a461e8 | 0.9994799798116535 | Female | popv | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://entity.api.hubmapconsortium.org/entities/22684b9011fc5aea5cb3f89670a461e8 | http://purl.org/ccf/1.5/16e98d8c-8983-48c2-bb41-7b1cfbbf2e4a | 0.9994799798116535 | 33.70811169436818 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | https://entity.api.hubmapconsortium.org/entities/22684b9011fc5aea5cb3f89670a461e8 | 0.9994799798116535 | Female | popv | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://entity.api.hubmapconsortium.org/entities/22684b9011fc5aea5cb3f89670a461e8 | http://purl.org/ccf/1.5/16e98d8c-8983-48c2-bb41-7b1cfbbf2e4a | 0.9994799798116535 | 33.70811169436818 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20right%20ventricle | 0.6943214324989697 | Female | celltypist | sc_transcriptomics | heart | UBERON:0000948 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20right%20ventricle | http://purl.org/ccf/1.5/1fe61622-ba53-47c9-967e-e764c21b8189 | 0.6943214324989697 | 50.05296332885795 |
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
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | sc_transcriptomics | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D046$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D046$lung | sc_transcriptomics | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | sc_transcriptomics | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D088$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D088$lung | sc_transcriptomics | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | respiratory system | UBERON:0001004 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | sc_transcriptomics | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
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
| Female | sc_proteomics | sc_proteomics | 1264 | 24 | 21 |
| Male | sc_proteomics | sc_proteomics | 1257 | 31 | 26 |
| Female | azimuth | sc_transcriptomics | 1207 | 81 | 14 |
| Male | azimuth | sc_transcriptomics | 1200 | 88 | 17 |
| Female | celltypist | sc_transcriptomics | 1217 | 71 | 157 |
| Male | celltypist | sc_transcriptomics | 1213 | 75 | 158 |
| Female | popv | sc_transcriptomics | 1219 | 69 | 27 |
| Male | popv | sc_transcriptomics | 1213 | 75 | 29 |


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
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0002063 | AT2 | 760 | 0.1456775924861031 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0002062 | AT1 | 733 | 0.1405022043319916 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | ASCTB-TEMP:non-classical-monocytes | Non-classical monocytes | 571 | 0.1094498754073222 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:4028002 | EC general capillary | 523 | 0.1002491853555683 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | ASCTB-TEMP:monocyte-derived-m | Monocyte-derived M�� | 508 | 0.09737396971439524 |
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
      ccf:cell_label ?cell_label ;
      ccf:cell_count ?cell_count ;
      ccf:percentage_of_total ?percentage
    ]
  ] .

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
| Female | celltypist | sc_transcriptomics | heart | UBERON:0000948 | Posteromedial head of posterior papillary muscle of left ventricle | FMA:7267 | CL:0000625 | CD8+T_trans | 4.08 | 0.00117776959882223 | false | true |
| Female | celltypist | sc_transcriptomics | heart | UBERON:0000948 | Posteromedial head of posterior papillary muscle of left ventricle | FMA:7267 | CL:0000913 | CD8+T_em | 2.04 | 5.888847994111151E-4 | false | true |
| Female | azimuth | sc_transcriptomics | heart | UBERON:0000948 | Posteromedial head of posterior papillary muscle of left ventricle | FMA:7267 | CL:0000077 | Mesothelial | 2.04 | 5.888847994111152E-4 | false | true |
| Female | sc_proteomics | sc_proteomics | large intestine | UBERON:0000059 | transverse colon | UBERON:0001157 | CL:0002138 | Lymphatic | 269.64 | 0.03290687661458974 | true | true |
| Female | azimuth | sc_transcriptomics | right ureter | UBERON:0001222 | right ureter | UBERON:0001222 | CL:1000714 | Cortical Collecting Duct Principal | 4.626 | 6.66740748972108E-4 | false | true |
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
| Female | https://doi.org/10.1126/science.abl4896#TSP27_Mammary | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP27$mammary%20gland | popv | sc_transcriptomics | Set of lactiferous glands in left breast | FMA:57991 | 0.9844336104077923 | 0.9699363912904732 | 0.9522296152251098 | 0.9660011057153749 | 0.9844336104077923 |
| Female | https://doi.org/10.1126/science.abl4896#TSP4_Mammary_L | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP4$mammary%20gland | popv | sc_transcriptomics | Set of lactiferous glands in left breast | FMA:57991 | 0.940350050833952 | 0.8323975484633092 | 0.9522296152251098 | 0.8659182539918154 | 0.9844336104077923 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1CAMS-5015-SM-HPJ3C_TissueBlock | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | https://doi.org/10.1126/science.abl4290#GTEX-1CAMS-5015-SM-HPJ3C | popv | sc_transcriptomics | Set of lactiferous glands in right breast | FMA:57987 | 0.9506744436795436 | 0.9315848920149736 | 0.9522296152251098 | 0.9955102268514313 | 0.9699363912904732 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1MCC2-5013-SM-HPJ3D_TissueBlock | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | https://doi.org/10.1126/science.abl4290#GTEX-1MCC2-5013-SM-HPJ3D | popv | sc_transcriptomics | Set of lactiferous glands in right breast | FMA:57987 | 0.9496246576727394 | 0.930789180329042 | 0.9522296152251098 | 0.9955102268514313 | 0.9699363912904732 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1R9PN-5002-SM-HD2MC_TissueBlock | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | https://doi.org/10.1126/science.abl4290#GTEX-1R9PN-5002-SM-HD2MC | popv | sc_transcriptomics | Set of lactiferous glands in right breast | FMA:57987 | 0.937868402914985 | 0.8628305193162954 | 0.9522296152251098 | 0.8598620767578671 | 0.9699363912904732 |
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
| Female | https://doi.org/10.1126/science.abl4896#TSP27_Mammary | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP27$mammary%20gland | popv | sc_transcriptomics | Set of lactiferous glands in left breast | FMA:57991 | 0.8659182539918154 |
| Female | https://doi.org/10.1126/science.abl4896#TSP4_Mammary_L | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP4$mammary%20gland | popv | sc_transcriptomics | Set of lactiferous glands in left breast | FMA:57991 | 0.8659182539918154 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1CAMS-5015-SM-HPJ3C_TissueBlock | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | https://doi.org/10.1126/science.abl4290#GTEX-1CAMS-5015-SM-HPJ3C | popv | sc_transcriptomics | Set of lactiferous glands in right breast | FMA:57987 | 0.8919094278119016 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1MCC2-5013-SM-HPJ3D_TissueBlock | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | https://doi.org/10.1126/science.abl4290#GTEX-1MCC2-5013-SM-HPJ3D | popv | sc_transcriptomics | Set of lactiferous glands in right breast | FMA:57987 | 0.918273022596381 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1R9PN-5002-SM-HD2MC_TissueBlock | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | https://doi.org/10.1126/science.abl4290#GTEX-1R9PN-5002-SM-HD2MC | popv | sc_transcriptomics | Set of lactiferous glands in right breast | FMA:57987 | 0.7851910338166384 |
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
| Female | https://doi.org/10.1126/science.abl4896#TSP27_Mammary | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP27$mammary%20gland | popv | sc_transcriptomics | Set of lactiferous glands in left breast | FMA:57991 | 0.9844336104077923 |
| Female | https://doi.org/10.1126/science.abl4896#TSP4_Mammary_L | http://purl.org/ccf/1.5/d8ed19a3-2960-472f-a1ed-189cdbb71fdc | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP4$mammary%20gland | popv | sc_transcriptomics | Set of lactiferous glands in left breast | FMA:57991 | 0.940350050833952 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1CAMS-5015-SM-HPJ3C_TissueBlock | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | https://doi.org/10.1126/science.abl4290#GTEX-1CAMS-5015-SM-HPJ3C | popv | sc_transcriptomics | Set of lactiferous glands in right breast | FMA:57987 | 0.9506744436795436 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1MCC2-5013-SM-HPJ3D_TissueBlock | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | https://doi.org/10.1126/science.abl4290#GTEX-1MCC2-5013-SM-HPJ3D | popv | sc_transcriptomics | Set of lactiferous glands in right breast | FMA:57987 | 0.9496246576727394 |
| Female | https://doi.org/10.1126/science.abl4290#GTEX-1R9PN-5002-SM-HD2MC_TissueBlock | http://purl.org/ccf/1.5/3b5d2036-3c56-4cf8-808f-462c9e3681e5 | https://doi.org/10.1126/science.abl4290#GTEX-1R9PN-5002-SM-HD2MC | popv | sc_transcriptomics | Set of lactiferous glands in right breast | FMA:57987 | 0.937868402914985 |
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
| Female | http://purl.org/ccf/1.5/52c4948d-bdc2-4201-a991-61a2c0a565c0 | https://entity.api.hubmapconsortium.org/entities/e65175561b4b17da5352e3837aa0e497 | azimuth | http://purl.org/ccf/1.5/c5e652ed-7e40-41de-bfc0-a73f05a0c66a | 0.8981513783759341 |
| Female | http://purl.org/ccf/1.5/8f99a469-7d51-46dc-919d-2e002eeae868 | https://entity.api.hubmapconsortium.org/entities/79f8c7ec1b200dfe5b46d0bcfec02bd7 | azimuth | http://purl.org/ccf/1.5/e88dfa31-cb6b-4eaa-b16c-e5c97de2701e | 0.8004130645651407 |
| Male | http://purl.org/ccf/1.5/3bf6e5a0-a04d-498e-89b1-b2c2562e4483 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D7$right%20cardiac%20atrium | azimuth | http://purl.org/ccf/1.5/9bd653dd-2309-4ecc-b4c8-e9f3de4bf8ca | 0.819036131577553 |
| Male | http://purl.org/ccf/1.5/42b97dcb-2033-40ea-82a2-319a1e30dca2 | https://entity.api.hubmapconsortium.org/entities/50f466268d42ee8ebf929757ed670d12 | sc_proteomics | http://purl.org/ccf/1.5/79a10f00-84e0-4b8e-8622-485973df3773 | 0.7487857597217131 |
| Male | http://purl.org/ccf/1.5/d51b9d67-837f-4451-a6c6-0b63c7879736 | https://entity.api.hubmapconsortium.org/entities/9aed52d22e30b893045fd1f79b3663fb | popv | http://purl.org/ccf/1.5/f15f5400-2ef9-45fc-bf0f-72f14d6f8f9e | 0.9706291473635574 |
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
| Female | http://purl.org/ccf/1.5/e4853294-071d-4bef-bff3-2fd52a5c6af0 | https://entity.api.hubmapconsortium.org/entities/ccbad4ffd323265937b842ea36ada4ad | azimuth | http://purl.org/ccf/1.5/2a9e525a-4ad9-4085-bca9-31a2d0512008 | 0.9379485061957571 |
| Female | http://purl.org/ccf/1.5/e88dfa31-cb6b-4eaa-b16c-e5c97de2701e | https://entity.api.hubmapconsortium.org/entities/c1a0c043d0a986d71552091cc1b09742 | azimuth | http://purl.org/ccf/1.5/85ad9566-c363-4b61-a522-6576b253d9af | 0.7889896442532057 |
| Male | http://purl.org/ccf/1.5/830da174-80d2-436e-ae02-4e36a3eedd43 | https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5#TSP14$skin%20of%20chest | popv | http://purl.org/ccf/1.5/cce37703-e4e8-454c-a0c4-4ff58652ab8f | 0.8112502516252704 |
| Male | http://purl.org/ccf/1.5/f1790d4b-bbc0-434c-b8ed-f21e8b8be903 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D7$heart%20right%20ventricle | popv | http://purl.org/ccf/1.5/ce5f3bd0-f091-49fe-8fe5-67004848078b | 0.9528800325356728 |
| Male | http://purl.org/ccf/1.5/f15f5400-2ef9-45fc-bf0f-72f14d6f8f9e | https://entity.api.hubmapconsortium.org/entities/ca35382d67c90d4d9bca1ee16526b1d3 | azimuth | http://purl.org/ccf/1.5/d662fd53-e925-4921-8d8b-bc91eed1519b | 0.9745116967105212 |
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
| 524 |


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
| 1224 |


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
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle cell | Alpha smooth muscle actin | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | gene |
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle cell | Alpha smooth muscle actin | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | protein |
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle | Alpha smooth muscle actin | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | gene |
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle | Alpha smooth muscle actin | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | protein |
| Accessory pancreatic duct (Duct of Santorini) | smooth muscle cell | aSMA | http://purl.obolibrary.org/obo/UBERON_0005429 | http://purl.obolibrary.org/obo/CL_0000192 | http://identifiers.org/hgnc/130 | gene |
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
| popv | 22 | 134 |
| azimuth | 9 | 247 |
| celltypist | 13 | 214 |


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
| Pancreas | 14 | 12 | 29 | 34 | 11 | 9 | 14 | x |
| Small Intestine | 297 | 23 | 43 | 35 | 0 | 0 | 16 | x |
| Uterus | 49 | 10 | 65 | 33 | 0 | 0 | 13 | x |
| blood | 2793 | 0 | 1 | 29 | 41 | 26 | 18 |  |
| blood vasculature | 26 | 248 | 1089 | 68 | 0 | 0 | 14 | x |
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
| https://purl.humanatlas.io/collection/hra-api | 1792004 |
| https://purl.humanatlas.io/ds-graph/hra-pop-full | 250280 |
| https://purl.humanatlas.io/graph/ctann-crosswalks | 15442 |
| https://purl.humanatlas.io/graph/hra-pop | 1742529 |
| https://purl.humanatlas.io/graph/hra-pop#as-as-sims | 65907 |
| https://purl.humanatlas.io/graph/hra-pop#distances | 2236652 |
| https://purl.humanatlas.io/graph/hra-pop#similarities | 186993342 |
| https://purl.humanatlas.io/graph/hra-pop#similarities-local | 186978420 |
| https://purl.humanatlas.io/graph/hra-pop#test-data | 12400042 |


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
| Bone marrow | Plasma | FKBP11 | http://purl.obolibrary.org/obo/UBERON_0002371 | http://purl.obolibrary.org/obo/CL_0000786 | HGNC:18624 | gene | 2.6414601253224657 |
| Bone marrow | Plasma | HSPA5 | http://purl.obolibrary.org/obo/UBERON_0002371 | http://purl.obolibrary.org/obo/CL_0000786 | HGNC:5238 | gene | 3.5855785846710204 |
| Bone marrow | Plasma | SNORA52 | http://purl.obolibrary.org/obo/UBERON_0002371 | http://purl.obolibrary.org/obo/CL_0000786 | HGNC:32645 | gene | 2.386926651000977 |
| Bone marrow | Plasma | TNFRSF17 | http://purl.obolibrary.org/obo/UBERON_0002371 | http://purl.obolibrary.org/obo/CL_0000786 | HGNC:11913 | gene | 0.9909540627683912 |
| Bone marrow | Plasma | GAS6 | http://purl.obolibrary.org/obo/UBERON_0002371 | http://purl.obolibrary.org/obo/CL_0000786 | HGNC:4168 | gene | 0.1335976719856262 |
| ... | ... | ... | ... | ... | ... | ... | ... |

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
| Female | HCA | 50 | 323276 | sc_transcriptomics |
| Male | HCA | 53 | 345881 | sc_transcriptomics |
| Female | HuBMAP | 23 | 1514227 | sc_proteomics |
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
| Allen Institute for Brain Science | Female | 5 | 0 | 5 | 0 | 0 | 5 | N/A | 0 |
| Allen Institute for Brain Science | Male | 5 | 0 | 5 | 0 | 0 | 5 | N/A | 0 |
| CxG | Female | 4250 | 0 | 2781 | 1469 | 4250 | 1469 | sc_transcriptomics | 21993476 |
| CxG | Male | 4217 | 0 | 2946 | 1271 | 4217 | 1271 | sc_transcriptomics | 26875178 |
| CxG | Unknown | 708 | 0 | 355 | 353 | 708 | 353 | sc_transcriptomics | 3007134 |
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
| Allen Institute for Brain Science | 10 | 0 | 10 | 0 | 0 | 10 |
| CxG | 9175 | 0 | 6082 | 3093 | 9175 | 3093 |
| GTEx | 74 | 15 | 50 | 9 | 9 | 59 |
| GUDMAP | 12 | 0 | 12 | 0 | 0 | 12 |
| HCA | 283 | 103 | 98 | 82 | 82 | 180 |
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
| 11159 | 14543 |


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
| 14543 |


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
| Female | 3683 | 14 |
| Male | 3450 | 15 |
| Unknown | 531 | 1 |


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
| Female | 4981 | 3676 |
| Male | 4978 | 3443 |
| Unknown | 817 | 640 |


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
| Female | 3683 |
| Male | 3450 |
| Unknown | 640 |


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
| 131 |


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
| 909 |


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
| 2890 | 534 |


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
| 12377 |


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
| 909 |


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
| https://api.cellxgene.cziscience.com/dp/v1/collections/bcb61471-2a44-4d00-a0af-ff085512674c | 27 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/e5f58829-1a66-40b5-a624-9046778e74f5 | 21 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837 | 9 |


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
| HuBMAP datasets | 453 |
| SenNet datasets | 0 |
| tissue donors | 146 |
| organs | 16 |
| anatomical structures | 54 |
| cells | 33385403 |


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
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung |  | azimuth | 11297 | 11297 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung |  | celltypist | 11297 | 11297 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung |  | popv | 11297 | 11297 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp2$alveolus%20of%20lung |  | azimuth | 9268 | 9268 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp2$alveolus%20of%20lung |  | celltypist | 9268 | 9268 |
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
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H4$right%20cardiac%20atrium | 10x | Data/Assay Types: 10x,  | celltypist | 29 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H4$right%20cardiac%20atrium | 10x | Data/Assay Types: 10x,  | popv | 6 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H4$heart%20right%20ventricle | 10x | Data/Assay Types: 10x,  | azimuth | 16 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H4$heart%20right%20ventricle | 10x | Data/Assay Types: 10x,  | celltypist | 25 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D7$heart%20left%20ventricle | 10x | Data/Assay Types: 10x,  | popv | 6 |
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
| https://entity.api.hubmapconsortium.org/entities/2ae126ab16c264352b2d3d2607236b97 |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/2b57ac6fea7aa96d26d2685a297a4e7a |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/2c718a10905c5941d4cc134a7027f808 |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/2cd4eabca0b653af7f3b79534b2d641f |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/2eca1430db3b9a4129bff717925fe932 |  |  |  |
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
| https://entity.api.hubmapconsortium.org/entities/56d58e095b39bace799a08131d331a99 | HuBMAP | RTI-General Electric | 53 | Female | 37.2 | White |
| https://entity.api.hubmapconsortium.org/entities/5c4208e2f2715c56ee8dc82b5f1b90c0 | HuBMAP | TMC-UCSD | 63 | Female | 36.5 | White |
| https://entity.api.hubmapconsortium.org/entities/613776ac210f65a63462ce6f926f4557 | HuBMAP | TMC-UCSD | 29 | Male | 42.3 | White |
| https://entity.api.hubmapconsortium.org/entities/61948ab02c6e4849c2522d953694df5d | HuBMAP | TMC-UCSD | 57 | Male | 36.5 | White |
| https://entity.api.hubmapconsortium.org/entities/63108adadd97a60ea7bdc84498384069 | HuBMAP | RTI-General Electric | 33 | Female | 24.3 | White |
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
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/367d95c0-0eb0-4dae-8276-9407239421ee#H18.30.001_Donor | Allen Institute for Brain Science |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/367d95c0-0eb0-4dae-8276-9407239421ee#H200.1023_Donor | Allen Institute for Brain Science |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/0a77d4c0-d5d0-40f0-aa1a-5e1429bcbd7e#pig_donor | CxG |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/0a77d4c0-d5d0-40f0-aa1a-5e1429bcbd7e#R229 | CxG |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/0a77d4c0-d5d0-40f0-aa1a-5e1429bcbd7e#R239 | CxG |
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
| http://purl.org/ccf/1.5/e7cded2f-3002-479d-8023-6a62d2f90840 | 1 |
| http://purl.org/ccf/1.5/e811d221-7718-4534-92de-73738b25c993 | 1 |
| http://purl.org/ccf/1.5/eaa8b4d9-1cee-4aa8-aa73-fe67b544365a | 1 |
| http://purl.org/ccf/1.5/ee7d1253-4ab3-46ab-96ca-cef5c9863641 | 1 |
| http://purl.org/ccf/1.5/ee91b4a1-de53-44b9-b0e6-dd23605e2652 | 1 |
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
| http://purl.org/ccf/1.5/17e2d1d5-fef4-4bed-8884-13a8c5f6e55d |
| http://purl.org/ccf/1.5/182ca45e-8190-4709-a3af-def316572e09 |
| http://purl.org/ccf/1.5/18a43fde-687e-4074-afe7-5af1accd9909 |
| http://purl.org/ccf/1.5/19a9f5af-c334-4e5d-a5f8-4ac2128d0eb5 |
| http://purl.org/ccf/1.5/19d06baf-65cc-4530-a0eb-5fcd9b98bcce |
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
| azimuth | http://purl.obolibrary.org/obo/CL_4033048 | Suprabasal | 683 | HGNC:534 | ANXA10 | 3.416055679321289 | https://api.cellxgene.cziscience.com/dp/v1/collections/6282a908-f162-44a2-99a3-8a942e4271b2#Salahudeen_Nat_2020_GSM2855478_Lung_2_1$alveolar%20sac |
| azimuth | http://purl.obolibrary.org/obo/CL_4033048 | Suprabasal | 718 | HGNC:534 | ANXA10 | 3.411623477935791 | https://api.cellxgene.cziscience.com/dp/v1/collections/6282a908-f162-44a2-99a3-8a942e4271b2#Salahudeen_Nat_2020_GSM2855479_Lung_2_2$alveolar%20sac |
| azimuth | http://purl.obolibrary.org/obo/CL_4033048 | Suprabasal | 756 | HGNC:534 | ANXA10 | 3.461290121078491 | https://api.cellxgene.cziscience.com/dp/v1/collections/6282a908-f162-44a2-99a3-8a942e4271b2#Salahudeen_Nat_2020_GSM2855481_Lung_2_4$alveolar%20sac |
| azimuth | http://purl.obolibrary.org/obo/CL_4033048 | Suprabasal | 731 | HGNC:534 | ANXA10 | 3.5226149559021 | https://api.cellxgene.cziscience.com/dp/v1/collections/6282a908-f162-44a2-99a3-8a942e4271b2#Salahudeen_Nat_2020_GSM2855480_Lung_2_3$alveolar%20sac |
| azimuth | http://purl.obolibrary.org/obo/CL_0002063 | AT2 | 14 | HGNC:534 | ANXA10 | 6.742026805877686 | https://api.cellxgene.cziscience.com/dp/v1/collections/6282a908-f162-44a2-99a3-8a942e4271b2#He_Cell_2022_ASCL1_overexpression$lung |
| ... | ... | ... | ... | ... | ... | ... | ... |


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
| Female | https://doi.org/10.1126/science.abl4290#GTEX-13N11-5002-SM-H5JDV | Heart | 20 | true | true | true | true | true | GTEx | Single-nucleus cross-tissue molecular reference maps toward understanding disease gene function | https://doi.org/10.1126/science.abl4290 | G��kcen Eraslan |
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/20eea6c8-9d64-42c9-9b6f-c11b5249e0e9#donor_2207$apex%20of%20heart | heart | UBERON:0000948 | hepatocyte | CL:0000182 | hepatocyte | CL:0000182 | 1 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/20eea6c8-9d64-42c9-9b6f-c11b5249e0e9#donor_2336$apex%20of%20heart | heart | UBERON:0000948 | hepatocyte | CL:0000182 | hepatocyte | CL:0000182 | 1 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/20eea6c8-9d64-42c9-9b6f-c11b5249e0e9#donor_2336$heart%20left%20ventricle | heart | UBERON:0000948 | hepatocyte | CL:0000182 | hepatocyte | CL:0000182 | 4 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/20eea6c8-9d64-42c9-9b6f-c11b5249e0e9#donor_2336$heart%20right%20ventricle | heart | UBERON:0000948 | hepatocyte | CL:0000182 | hepatocyte | CL:0000182 | 6 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/20eea6c8-9d64-42c9-9b6f-c11b5249e0e9#donor_2336$interventricular%20septum | heart | UBERON:0000948 | hepatocyte | CL:0000182 | hepatocyte | CL:0000182 | 3 |
| ... | ... | ... | ... | ... | ... | ... | ... |


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
| nodes | 336215 |
| edges | 1742529 |


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
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU675$lung |  | 38 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU682$lung |  | 38 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU1262$lung |  | 37 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU1170$lung |  | 35 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/62e8f058-9c37-48bc-9200-e767f318a8ec#RU426$lung |  | 35 | false | true | false | true | false | CxG | CxG | HTAN MSK - Single cell profiling reveals novel tumor and myeloid subpopulations in small cell lung cancer | https://doi.org/10.1016/j.ccell.2021.09.008 | Joseph M. Chan |
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
| adipose tissue | UBERON:0001013 | B cell | https://purl.org/ccf/ASCTB-TEMP_b-cell | B cell | https://purl.org/ccf/ASCTB-TEMP_b-cell |  | 6 | 3122 |
| adipose tissue | UBERON:0001013 | T cell | https://purl.org/ccf/ASCTB-TEMP_t-cell | T cell | https://purl.org/ccf/ASCTB-TEMP_t-cell |  | 7 | 8289 |
| adipose tissue | UBERON:0001013 | endothelial cell | https://purl.org/ccf/ASCTB-TEMP_endothelial-cell | endothelial cell | https://purl.org/ccf/ASCTB-TEMP_endothelial-cell |  | 7 | 2673 |
| adipose tissue | UBERON:0001013 | fibroblast | https://purl.org/ccf/ASCTB-TEMP_fibroblast | fibroblast | https://purl.org/ccf/ASCTB-TEMP_fibroblast |  | 6 | 6968 |
| adipose tissue | UBERON:0001013 | leukocyte | https://purl.org/ccf/ASCTB-TEMP_leukocyte | leukocyte | https://purl.org/ccf/ASCTB-TEMP_leukocyte |  | 6 | 382 |
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
| 5171 | 1260 |


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
| https://doi.org/10.1161/CIRCRESAHA.120.318458#Donor11_TissueBlock1 | Tissue Block | Registered 2/18/2021, Peter Hanna, UCLA/SPARC | 10 x 10 x 10 millimeter, 10 millimeter | https://doi.org/10.1161/CIRCRESAHA.120.318458 | http://purl.org/ccf/1.5/da9a6669-973c-4bee-97e1-7430d21796f8 | 10 | 10 | 10 | Peter Hanna | Peter | Hanna |  | 0 |
| https://sparc.science/datasets/390/version/1?datasetDetailsTab=abstract&path=files/primary/sub-DH09292020#Donor1_TissueBlock13 | Tissue Block | Basal Sept | 10 x 10 x 10 millimeter, 10 millimeter | https://sparc.science/datasets/390/version/1?datasetDetailsTab=files&path=files/primary/sub-DH09292020/sam-20210206-BasalSeptum | http://purl.org/ccf/1.5/da9a6669-973c-4bee-97e1-7430d21796f8 | 10 | 10 | 10 | Peter Hanna | Peter | Hanna |  | 0 |
| https://doi.org/10.1161/CIRCRESAHA.120.318458#Donor4_TissueBlock1 | Tissue Block | Registered 2/18/2021, Peter Hanna, UCLA/SPARC | 10 x 10 x 10 millimeter, 10 millimeter | https://doi.org/10.1161/CIRCRESAHA.120.318458 | http://purl.org/ccf/1.5/ee4110ca-9ea3-4580-a79c-30471359f11c | 10 | 10 | 10 | Peter Hanna | Peter | Hanna |  | 0 |
| https://doi.org/10.1161/CIRCRESAHA.120.318458#Donor7_TissueBlock1 | Tissue Block | Registered 2/18/2021, Peter Hanna, UCLA/SPARC | 10 x 10 x 10 millimeter, 10 millimeter | https://doi.org/10.1161/CIRCRESAHA.120.318458 | http://purl.org/ccf/1.5/e1a870bc-d965-4324-b691-55ebac9f2f89 | 10 | 10 | 10 | Peter Hanna | Peter | Hanna |  | 0 |
| https://sparc.science/datasets/390/version/1?datasetDetailsTab=abstract&path=files/primary/sub-DH09292020#Donor1_TissueBlock14 | Tissue Block | Basal Post LV | 10 x 10 x 10 millimeter, 10 millimeter | https://sparc.science/datasets/390/version/1?datasetDetailsTab=files&path=files/primary/sub-DH09292020/sam-20210207-BasalPostLV | http://purl.org/ccf/1.5/e1a870bc-d965-4324-b691-55ebac9f2f89 | 10 | 10 | 10 | Peter Hanna | Peter | Hanna |  | 0 |
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
| KPMP |  | http://dx.doi.org/10.1681/ASN.2016091027 |  |  | Donor1 | Male |  |  |  |  | right kidney | 3d-vh-m-kidney-r.glb | Donor1_TissueBlock1 | 1.9794047017195975 | 1 |  | kidney |  | UBERON:0002113 |  | http://dx.doi.org/10.1681/ASN.2016091027#Donor1_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027#Donor1_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027 |  |  |  |  |  |  | true | false |
| KPMP |  | http://dx.doi.org/10.1681/ASN.2016091027 |  |  | Donor2 | Male |  |  |  |  | right kidney | 3d-vh-m-kidney-r.glb | Donor2_TissueBlock1 | 0.5009041281806214 | 1 |  | kidney |  | UBERON:0002113 |  | http://dx.doi.org/10.1681/ASN.2016091027#Donor2_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027#Donor2_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027 |  |  |  |  |  |  | true | false |
| KPMP |  | http://dx.doi.org/10.1681/ASN.2016091027 |  |  | Donor3 | Male |  |  |  |  | right kidney | 3d-vh-m-kidney-r.glb | Donor3_TissueBlock1 | 0.49626275595351454 | 1 |  | kidney |  | UBERON:0002113 |  | http://dx.doi.org/10.1681/ASN.2016091027#Donor3_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1681/ASN.2016091027#Donor3_TissueBlock1_TissueBlock1_Dataset1 | http://dx.doi.org/10.1016/j.trsl.2017.07.006 |  |  |  |  |  |  | true | false |
| HRA |  |  |  |  | Donor1 | Female | 38 |  |  |  | mesenteric lymph node | 3d-nih-f-lymph-node.glb | Donor1_TissueBlock1 | 2508 | 7 | 6 | medulla of lymph node; capsule of lymph node; lymph vasculature; afferent lymphatic vessel; efferent lymphatic vessel; lymph node T cell domain; lymph node follicle | lymph node T cell domain; efferent lymphatic vessel; Lymph vasculature; medulla of lymph node; capsule of lymph node; lymph node follicle | UBERON:0002007; UBERON:0002194; UBERON:0004536; UBERON:0010396; UBERON:0010397; UBERON:0010417; UBERON:0010748 | UBERON:0010417; UBERON:0010397; UBERON:0004536; UBERON:0002007; UBERON:0002194; UBERON:0010748 | http://purl.org/ccf/1.5/omap-1#Donor1_TissueBlock1_TissueBlock1_Dataset1 | http://purl.org/ccf/1.5/omap-1#Donor1_TissueBlock1_TissueBlock1_Dataset1 | https://hubmapconsortium.github.io/ccf-releases/v1.4/docs/omap/omap-1-human-lymph-node-ibex.html |  |  |  |  |  |  | true | false |
| HIRN, ESPACE |  | https://doi.org/10.5281/zenodo.7742474 |  |  | Donor1 | Male |  |  |  |  | pancreas | 3d-vh-m-pancreas.glb | Donor1_TissueBlock1 | 0.2512805 | 1 | 1 | tail of pancreas | tail of pancreas | UBERON:0001151 | UBERON:0001151 | http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1_TissueBlock1_Dataset1 | http://purl.org/ccf/1.5/omap-6#Donor1_TissueBlock1_TissueBlock1_Dataset1 | https://zenodo.org/record/7742474 |  |  |  |  |  |  | true | false |
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
| blood |  | female | sc_transcriptomics | Non-Atlas | 1537 | 33788 |
| blood |  | male | sc_transcriptomics | Non-Atlas | 1197 | 26060 |
| blood |  | unknown | sc_transcriptomics | Non-Atlas | 59 | 1273 |
| blood vasculature |  | female | sc_transcriptomics | Non-Atlas | 10 | 112 |
| blood vasculature |  | male | sc_transcriptomics | Non-Atlas | 16 | 174 |
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
| female | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 36 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| female | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp2$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 36 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| female | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp3$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 41 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| male | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#NL1$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 36 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| male | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#NL2$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 39 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
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
| http://purl.org/ccf/1.5/67e5f7e1-7b82-4aff-890e-9f8fc1f5c89b_placement |
| http://purl.org/ccf/1.5/680357ea-b006-4db6-b7c8-4b06061c89d2_placement |
| http://purl.org/ccf/1.5/6904a86d-aadb-4959-9aac-54afa7e2bf2b_placement |
| http://purl.org/ccf/1.5/695e5488-41ae-459c-9b3b-824cb501b818_placement |
| http://purl.org/ccf/1.5/69c1a97a-63bb-434d-a2d0-1511905d25da_placement |
| ... |


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
| 107 | 17547511 |


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
| 6631 | 38423786 | 38493626 |


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
| 6631 | 67783273 |


  