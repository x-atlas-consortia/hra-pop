# Summary of Reports

  ## Table of Contents

* atlas-ad-hoc
  * [Atlas AS with CT and B info from exp data (as-ct-b)](#as-ct-b)
  * [Atlas dataset tool, modality, and AS info (as-datasets-modality)](#as-datasets-modality)
  * [Atlas consortium breakdown (consortium-breakdown)](#consortium-breakdown)
  * [Datasets by modality (count-dataset-modality)](#count-dataset-modality)
  * [Kidney AS Cell Distributions (counts-for-kidney-as)](#counts-for-kidney-as)
  * [Bulk Tool-Organ-AS Cell Distributions (counts-for-tools-by-as)](#counts-for-tools-by-as)
  * [Atlas-level CxG collections (cxg-collections)](#cxg-collections)
  * [Atlas Datasets with a given Cell Type (datasets-with-adipocytes)](#datasets-with-adipocytes)
  * [Extraction Site Statistics (extraction-site-stats)](#extraction-site-stats)
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
  * [Table S1 (table-s1)](#table-s1)
  * [Table S2 (table-s2)](#table-s2)
  * [Table S3 (table-s3)](#table-s3)
  * [Table S4 (table-s4)](#table-s4)
  * [Table S5 (table-s5)](#table-s5)
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
* hra
  * [Count of Anatomical Structures by Organ (as-cnt-per-organ)](#as-cnt-per-organ)
  * [Count of Anatomical Structures (as-cnt)](#as-cnt)
  * [Cell types per annotation tool (count-ct-per-tool)](#count-ct-per-tool)
  * [Cell types per organ per annotation tool (ct-per-organ-per-tool)](#ct-per-organ-per-tool)
  * [Named graphs in the db (named-graphs)](#named-graphs)
* universe-ad-hoc
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
  * [dataset-cell-count-check](#dataset-cell-count-check)
  * [Dataset information (dataset-info)](#dataset-info)
  * [Dataset Publications (dataset-publications)](#dataset-publications)
  * [Universe Donor information (donor-info)](#donor-info)
  * [Universe Donors and Portals (donors-portals)](#donors-portals)
  * [Universe Extraction Sites with `slice_count`s Count (extraction-site-slices)](#extraction-site-slices)
  * [Universe Extraction Sites with `slice_count`s Count (extraction-sites)](#extraction-sites)
  * [Heart and Lung dataset info (heart-and-lung-datasets)](#heart-and-lung-datasets)
  * [Kidney and Lung dataset info (kidney-and-lung-datasets)](#kidney-and-lung-datasets)
  * [Popv cells information (popv-cells)](#popv-cells)
  * [RUI Registered H5AD Dataset and TB Count (rui-registered-datasets)](#rui-registered-datasets)
  * [Sample information (sample-info)](#sample-info)
  * [Spatial and bulk dataset breakdown (spatial-and-bulk-datasets-breakdown)](#spatial-and-bulk-datasets-breakdown)
  * [Spatial and bulk dataset information (spatial-and-bulk-datasets)](#spatial-and-bulk-datasets)
  * [Universe Spatial Placements (spatial-placements)](#spatial-placements)



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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>

SELECT ?sex ?tool  
  (SAMPLE(?_as_label) as ?as_label)
  (SAMPLE(?cell_label) AS ?cell_label)
  ?gene_label
  ?as ?cell_id
  (SUM(?_cell_count) AS ?cell_count)
  (AVG(xsd:decimal(?gene_expr)) as ?mean_gene_expr)
FROM CCF:
FROM HRApop:
WHERE {
  ?as ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:aggregates ?dataset 
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
  BIND (xsd:decimal(?count) AS ?_cell_count)

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
| Female | azimuth | kidney capsule | Descending Thin Limb Type 1 | ENSG00000280441.3 | http://purl.obolibrary.org/obo/UBERON_0002015 | http://purl.obolibrary.org/obo/CL_4030012 | 6055 | 1139.4583129882815 |
| Female | azimuth | kidney capsule | Inner Medullary Collecting Duct | ENSG00000280441.3 | http://purl.obolibrary.org/obo/UBERON_0002015 | http://purl.obolibrary.org/obo/CL_1000718 | 21425 | 191.4571075439453 |
| Female | azimuth | kidney capsule | Descending Thin Limb Type 1 | MT-CO3 | http://purl.obolibrary.org/obo/UBERON_0002015 | http://purl.obolibrary.org/obo/CL_4030012 | 155 | 166.96894836425785 |
| Female | azimuth | kidney capsule | Descending Thin Limb Type 1 | MT-RNR2 | http://purl.obolibrary.org/obo/UBERON_0002015 | http://purl.obolibrary.org/obo/CL_4030012 | 6210 | 127.1288843154907075 |
| Female | azimuth | kidney capsule | Descending Thin Limb Type 1 | MT-CO2 | http://purl.obolibrary.org/obo/UBERON_0002015 | http://purl.obolibrary.org/obo/CL_4030012 | 155 | 126.62272262573245 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

## atlas-ad-hoc

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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
FROM CCF:
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
  ?organId rdfs:label ?organ_label
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
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/846e56ed969922f1cb7a81619b175620 | celltypist | sc_transcriptomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/846e56ed969922f1cb7a81619b175620 | popv | sc_transcriptomics | sigmoid colon |
| Female | http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/153b0fe8575ff1a17768319ba6dbaa5c | sc_proteomics | sc_proteomics | sigmoid colon |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
    SELECT ?dataset ?sex ?modality (SUM(?_cell_count) as ?cell_count)
    WHERE {
      ?dataset ccf:has_cell_summary [
        ccf:sex ?sex ;
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
        ccf:has_cell_summary_row [
          ccf:cell_count ?_cell_count ;
        ] ;
      ] .
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
| Female | HCA | 40 | 659085 | sc_transcriptomics |
| Male | HCA | 42 | 799317 | sc_transcriptomics |
| Female | HuBMAP | 116 | 3340954 | sc_transcriptomics |
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
| Male | 314 | sc_transcriptomics |
| Female | 165 | sc_transcriptomics |
| Male | 54 | sc_proteomics |
| Female | 20 | sc_proteomics |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| Female | VHFLeftKidney | renal pyramid | Afferent / Efferent Arteriole Endothelial | http://purl.obolibrary.org/obo/CL_1000412 | 69.42424242424242424242 | 2291 |
| Female | VHFLeftKidney | renal pyramid | Ascending Thin Limb | http://purl.obolibrary.org/obo/CL_1001107 | 1128.13888888888888888889 | 40613 |
| Female | VHFLeftKidney | renal pyramid | Ascending Vasa Recta Endothelial | http://purl.obolibrary.org/obo/CL_1001131 | 283.5 | 9639 |
| Female | VHFLeftKidney | renal pyramid | B | http://purl.obolibrary.org/obo/CL_0000236 | 157.03846153846153846154 | 4083 |
| Female | VHFLeftKidney | renal pyramid | Classical Dendritic | http://purl.obolibrary.org/obo/CL_0000990 | 130.36363636363636363636 | 2868 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adipocyte | http://purl.obolibrary.org/obo/CL_0000136 | 20.5 | 738 |
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Arterial Endothelial | http://purl.obolibrary.org/obo/CL_1000413 | 85.16666666666666666667 | 3066 |
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Atrial Cardiomyocyte | http://purl.obolibrary.org/obo/CL_0002129 | 3.66666666666666666667 | 66 |
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | B | http://purl.obolibrary.org/obo/CL_0000236 | 20.83333333333333333333 | 750 |
| Female | azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Capillary Endothelial | http://purl.obolibrary.org/obo/CL_0002144 | 1361.66666666666666666667 | 49020 |
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837 | 9 |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX hgnc: <http://purl.bioontology.org/ontology/HGNC/>
PREFIX oboInOwl: <http://www.geneontology.org/formats/oboInOwl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>

SELECT DISTINCT ?source ?dataset ?organ ?as ?as_iri ?age ?sex ?bmi ?tool ?cell_type ?cell_type_label ?cell_type_count ?cell_type_percentage ?biomarker ?mean_expression_value
FROM CCF:
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
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$interventricular%20septum | heart | interventricular septum | http://purl.obolibrary.org/obo/UBERON_0002094 | 65 | Female | 30 | celltypist | CL:0000136 | Adip1 | 2 | 5.636978579481398E-4 | PLIN4 | 3.142290115356445 |
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$interventricular%20septum | heart | heart right ventricle | http://purl.obolibrary.org/obo/UBERON_0002080 | 65 | Female | 30 | celltypist | CL:0000136 | Adip1 | 2 | 5.636978579481398E-4 | PLIN4 | 3.142290115356445 |
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$interventricular%20septum | heart | Posteromedial head of posterior papillary muscle of left ventricle | http://purl.org/sig/ont/fma/fma7267 | 65 | Female | 30 | celltypist | CL:0000136 | Adip1 | 2 | 5.636978579481398E-4 | PLIN4 | 3.142290115356445 |
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$interventricular%20septum | heart | heart left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | 65 | Female | 30 | celltypist | CL:0000136 | Adip1 | 2 | 5.636978579481398E-4 | PLIN4 | 3.142290115356445 |
| HCA | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$interventricular%20septum | heart | interventricular septum | http://purl.obolibrary.org/obo/UBERON_0002094 | 65 | Female | 30 | celltypist | CL:0000136 | Adip1 | 2 | 5.636978579481398E-4 | MSH3 | 2.491420745849609 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| Male | 177 | 118 | 0 |
| Female | 116 | 84 | 0 |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| Female | GTEx | 7 | 47863 |
| Male | GTEx | 8 | 70113 |
| Female | NHLBI/LungMap | 2 | 29691 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| 553 | 282 |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
FROM CCF:
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
| azimuth | https://purl.org/ccf/ASCTB-TEMP_alveolar-m-proliferating | 3 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_descending-vasa-recta-endothelial | 210 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_interstitial-m-perivascular | 27 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_monocyte-derived-m | 43 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_non-classical-monocytes | 43 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

    # [] a ccf:SpatialPlacement ;
    #     ccf:placement_for ?rui_location ;
    #     ccf:placement_relative_to ?refOrgan .

    # BIND(EXISTS {
    #   GRAPH HRApop: {
    #     [] ccf:has_registration_location ?rui_location .
    #   }
    # } as ?in_atlas)
  }

  # GRAPH CCF: {
  #   ?refOrgan ccf:representation_of ?organIri .
  #   ?organIri rdfs:label ?organ .

  #   BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
  # }

  # FILTER (?in_atlas != TRUE)
}
ORDER BY ?sample DESC(?cell_count)

```

([View Source](../../queries/atlas/application-a1.rq))
</details>

#### Results ([View CSV File](reports/atlas/application-a1.csv))

| sample | rui_location | organ | organId | sex | tool | modality | cell_id | cell_label | cell_count | percentage_of_total |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| http://purl.org/ccf/HEA10#TissueBlock1 | http://purl.org/ccf/1.5/2a823e94-6653-4c8c-b270-0c75bd1a58e8 |  |  | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000775 | neutrophil | 35615.129088 | 0.3221992178513918 |
| http://purl.org/ccf/HEA10#TissueBlock1 | http://purl.org/ccf/1.5/2a823e94-6653-4c8c-b270-0c75bd1a58e8 |  |  | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000115 | Endothelial cells | 29598.75071999999 | 0.2645454545454545 |
| http://purl.org/ccf/HEA10#TissueBlock1 | http://purl.org/ccf/1.5/2a823e94-6653-4c8c-b270-0c75bd1a58e8 |  |  | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_1000398 | endothelial cell of hepatic sinusoid | 24858.882048 | 0.2248907292385553 |
| http://purl.org/ccf/HEA10#TissueBlock1 | http://purl.org/ccf/1.5/2a823e94-6653-4c8c-b270-0c75bd1a58e8 |  |  | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000182 | Hepatocytes | 23200.945152 | 0.2073636363636364 |
| http://purl.org/ccf/HEA10#TissueBlock1 | http://purl.org/ccf/1.5/2a823e94-6653-4c8c-b270-0c75bd1a58e8 |  |  | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/CL_0000182 | hepatocyte | 22773.746688 | 0.2060271451575799 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/a48f5033-3438-4550-8574-cdff3263fdfd#HTA11_6298$transverse%20colon | http://purl.obolibrary.org/obo/UBERON_0000059 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0001052 | celltypist | 0.43709568259006015 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/a48f5033-3438-4550-8574-cdff3263fdfd#HTA11_6298$transverse%20colon | http://purl.obolibrary.org/obo/UBERON_0000059 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0001157 | celltypist | 0.6643177172479141 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/a48f5033-3438-4550-8574-cdff3263fdfd#HTA11_6298$transverse%20colon | http://purl.obolibrary.org/obo/UBERON_0000059 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0001156 | celltypist | 0.36034060562270975 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/a48f5033-3438-4550-8574-cdff3263fdfd#HTA11_6298$transverse%20colon | http://purl.obolibrary.org/obo/UBERON_0000059 | Male | celltypist | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0001158 | celltypist | 0.3345633267275182 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/a48f5033-3438-4550-8574-cdff3263fdfd#HTA11_6298$transverse%20colon | http://purl.obolibrary.org/obo/UBERON_0000059 | Male | popv | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0001159 | popv | 0.736809129807988 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

      GRAPH CCF: {
        ?as ccf:ccf_asctb_type ?type .
        FILTER (?type = 'AS')
      }

      FILTER(EXISTS {
        GRAPH CCF: {
          ?cell_id ccf:ccf_asctb_type [] .
        }
      } || EXISTS {
        GRAPH CCF: {
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
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002080 | 0.91304347826086956522 |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002084 | 0.91304347826086956522 |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002094 | 0.91304347826086956522 |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002189 | 0.91304347826086956522 |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |  | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0004200 | 0.91304347826086956522 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | popv | sc_transcriptomics | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | popv | 0.4348592041203372 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | azimuth | sc_transcriptomics | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | azimuth | 0.3995249914805636 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | celltypist | sc_transcriptomics | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | azimuth | 0.3923236986417647 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | popv | sc_transcriptomics | http://purl.org/ccf/1.5/43e195fb-0f50-4b67-bff1-b74f68290fc6 | popv | 0.33302146693214213 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | popv | sc_transcriptomics | http://purl.org/ccf/1.5/db4f3eca-e9f8-4f9c-88a1-795a20dd0f84 | popv | 0.3330214669321421 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | azimuth | sc_transcriptomics | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231$lung | celltypist | 0.2192979496534804 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | azimuth | sc_transcriptomics | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$interventricular%20septum | celltypist | 0.14942334495096346 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | azimuth | sc_transcriptomics | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$heart%20left%20ventricle | celltypist | 0.1427913709596614 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | azimuth | sc_transcriptomics | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$heart%20left%20ventricle | azimuth | 0.18838010314710815 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | http://purl.obolibrary.org/obo/UBERON_0002048 | Female | celltypist | sc_transcriptomics | https://doi.org/10.1126/science.abl4290#GTEX-13N11-5030-SM-H5JDW | popv | 0.11670859370036668 |
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
| Female | sc_transcriptomics | 300 | 4077593 |
| Male | sc_transcriptomics | 315 | 11337582 |
| Male | sc_proteomics | 29 | 2061512 |
| Female | sc_proteomics | 29 | 555082 |


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
| Male | 340 | 13399094 |
| Female | 325 | 4632675 |


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
| https://entity.api.hubmapconsortium.org/entities/f0aa7e5d01c0d40f0b284cbf85eb8d03 | HuBMAP | TMC-CalTech | 55 | Female | 32.2 | White |
| https://entity.api.hubmapconsortium.org/entities/f84ff583687f3407636d8ce843b48ff0 | HuBMAP | TMC-Stanford | 37 | Male | 29.3 | White |
| https://entity.api.hubmapconsortium.org/entities/f8d963cab6bd10e2a4b8184ea8197fc1 | HuBMAP | TMC-UCSD | 57 | Female | 19.6 | White |
| https://entity.api.hubmapconsortium.org/entities/ff043e8a4b6d7b21620ad9f0978238d0 | HuBMAP | TMC-UCSD | 75 | Female | 32 | White |
| https://entity.api.hubmapconsortium.org/entities/ff831c86a141380f572fa9a2ba7cae52 | HuBMAP | TMC-UCSD | 25 | Female |  | White |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
    GRAPH CCF: {
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
  GRAPH CCF: {
    ?refOrgan ccf:representation_of ?organIri ;
      ccf:has_reference_organ ?refOrgan .

    ?organIri rdfs:label ?organ .
    BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
  }

  GRAPH CCF: {
    [] ccf:representation_of ?as1 ;
      ccf:has_reference_organ [
        ccf:representation_of ?organIri
      ] .
      
    ?as1 rdfs:label ?as1_label .
  }

  GRAPH CCF: {
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
| UBERON:0000059 | large intestine | Male | sc_proteomics | ascending colon | descending colon | 0.9906216712240895 | 18 | 19 |
| UBERON:0000059 | large intestine | Female | sc_transcriptomics | ascending colon | descending colon | 0.8638549322047777 | 18 | 19 |
| UBERON:0000059 | large intestine | Male | sc_transcriptomics | ascending colon | descending colon | 0.9764041466811242 | 18 | 19 |
| UBERON:0000059 | large intestine | Female | sc_proteomics | ascending colon | descending colon | 0.922481222625644 | 18 | 19 |
| UBERON:0000059 | large intestine | Male | sc_transcriptomics | descending colon | sigmoid colon | 0.8872728557545789 | 19 | 19 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
FROM CCF:
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

          GRAPH CCF: {
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
| UBERON:0000059 | large intestine | Female | sc_proteomics | sc_proteomics | 11 | 5 | 8 | 8 | 139 |
| UBERON:0000059 | large intestine | Male | sc_proteomics | sc_proteomics | 11 | 5 | 24 | 24 | 196 |
| UBERON:0002097 | skin of body | Female | sc_proteomics | sc_proteomics | 1 | 1 | 3 | 3 | 6 |
| UBERON:0002097 | skin of body | Male | sc_proteomics | sc_proteomics | 1 | 1 | 6 | 6 | 3 |
| UBERON:0002108 | small intestine | Female | sc_proteomics | sc_proteomics | 11 | 7 | 8 | 8 | 145 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
FROM CCF:
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
    OPTIONAL { ?donor ccf:sex ?donor_sex . } .
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
| HuBMAP |  |  |  |  |  | Female | 67 |  | White | 30.2 | small intestine | VH_F_Small_Intestine.glb |  | 1350 | 3 | 2 | Superior part of duodenum; Descending part of duodenum; duodenum | superior part of duodenum; descending part of duodenum | FMA:14926; FMA:14928; UBERON:0002114 | FMA:14926; FMA:14928 |  |  | https://portal.hubmapconsortium.org/browse/dataset/11678046b4e78f95762acc47d3074dc5 |  | celltypist |  | 11992 | 132 |  |
| HuBMAP |  |  |  |  |  | Female | 67 |  | White | 30.2 | small intestine | VH_F_Small_Intestine.glb |  | 1350 | 3 | 2 | Superior part of duodenum; Descending part of duodenum; duodenum | superior part of duodenum; descending part of duodenum | FMA:14926; FMA:14928; UBERON:0002114 | FMA:14926; FMA:14928 |  |  | https://portal.hubmapconsortium.org/browse/dataset/11678046b4e78f95762acc47d3074dc5 |  | popv |  | 11992 | 132 |  |
| HuBMAP |  |  |  |  |  | Female | 55 |  | White | 27.07 | left kidney | VH_F_Kidney_L.glb |  | 30 | 3 | 1 | renal column; hilum of kidney; renal medulla | renal pyramid | UBERON:0001284; UBERON:0008716; UBERON:0000362 | UBERON:0004200 |  |  | https://portal.hubmapconsortium.org/browse/dataset/55452bd302046918eaeeffa62c5b5f03 |  | azimuth |  | 25732 | 42 |  |
| HuBMAP |  |  |  |  |  | Female | 55 |  | White | 27.07 | left kidney | VH_F_Kidney_Left.glb |  | 30 | 3 | 1 | renal column; hilum of kidney; renal medulla | renal pyramid | UBERON:0001284; UBERON:0008716; UBERON:0000362 | UBERON:0004200 |  |  | https://portal.hubmapconsortium.org/browse/dataset/55452bd302046918eaeeffa62c5b5f03 |  | azimuth |  | 25732 | 42 |  |
| HuBMAP |  |  |  |  |  | Female | 55 |  | White | 27.07 | left kidney | VH_F_Kidney_L.glb |  | 30 | 3 | 1 | renal column; hilum of kidney; renal medulla | renal pyramid | UBERON:0001284; UBERON:0008716; UBERON:0000362 | UBERON:0004200 |  |  | https://portal.hubmapconsortium.org/browse/dataset/79f8c7ec1b200dfe5b46d0bcfec02bd7 |  | azimuth |  | 28664 | 39 |  |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?organ ?organ_id ?as_label ?as_volume
	?rui_location_one_as_count ?rui_location_count ?rui_locations_with_ct ?rui_locations_no_ct
	?ct_not_in_hra ?ct_in_hra ?ct_from_hra_only ?experimental_ct_count ?ct_labels_from_experimental_data ?predicted_cells_per_ct
FROM HRApop:
FROM CCF:
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
| VHFHeart | UBERON:0000948 | Posteromedial head of posterior papillary muscle of left ventricle | 4401.498768462402 | 0 | 1 | 36 | 0 | 8 | 42 | 0 | 50 | EC4_immune; CD4+T_naive; CD4+T_Th1; B; CD4+T_Th2; ILC; T/NK_cycling; Endothelial; cardiac endothelial cell; cardiac muscle cell; DC; CD8+T_te; hepatocyte; B_plasma; CD8+T_cytox; Mesothelial; NK_CD56hi; MAIT-like; gdT; CD4+T_Th17; Capillary Endothelial; EC2_cap; EC3_cap; EC1_cap; Arterial Endothelial; EC5_art; Lymphatic Endothelial; EC8_ln; CD8+T_trans; Macrophage; LYVE1+TIMD4+MP; macrophage; LYVE1+IGF1+MP; LYVE1+MP_cycling; Mast; Pericyte; PC1_vent; smooth muscle cell; Smooth Muscle; Fibroblast; FB1; FB4_activated; FB3; FB5; SMC1_basic; EC6_ven; T; Adipocyte; Adip1; Adip2; CD16+Mo; Monocyte/cDC; Neuronal; Neut; SAN_P_cell; CD4+T_Tfh; fibroblast of cardiac tissue; CD4+T_act; NK_CD16hi; CD4+T_reg; CD14+Mo; vCM1; NC1_glial; EC7_endocardial; Endocardial; Venous Endothelial; Atrial Cardiomyocyte; Ventricular Cardiomycoyte; aCM5; vCM3_stressed; NC2_glial_NGF+; vCM2; aCM1; NK; CD8+T_em; aCM2 | 391.875 |
| VHFHeart | UBERON:0000948 | heart left ventricle | 229312.7801882646 | 102 | 8 | 139 | 0 | 9 | 43 | 23 | 52 | cardiac muscle cell; CD4+T_Th1; DC; CD8+T_te; hepatocyte; B_plasma; CD8+T_cytox; Macrophage; LYVE1+IGF1+MP; macrophage; LYVE1+TIMD4+MP; LYVE1+MP_cycling; Mast; Fibroblast; FB1; FB2; FB4_activated; FB3; FB5; Smooth Muscle; smooth muscle cell; EC6_ven; SMC1_basic; T; Adip2; Adipocyte; Adip1; Adip3; CD16+Mo; Endocardial; EC7_endocardial; Venous Endothelial; NK; PC2_atria; Pericyte; PC1_vent; PC3_str; PC4_CMC-like; Lymphatic Endothelial; EC8_ln; vCM1; Ventricular Cardiomycoyte; vCM4; vCM3_stressed; vCM2; NC2_glial_NGF+; NC1_glial; NK_CD16hi; CD4+T_act; Atrial Cardiomyocyte; aCM1; aCM4; aCM2; aCM5; aCM3; CD14+Mo; fibroblast of cardiac tissue; CD4+T_reg; B; CD8+T_em; Neut; Purkinje_cell; Neuronal; Monocyte/cDC; SAN_P_cell; CD4+T_Tfh; AVN_P_cell; EC4_immune; Endothelial; EC10_CMC-like; EC9_FB-like; T/NK_cycling; CD4+T_Th2; ILC; NK_CD56hi; Mesothelial; Meso; MAIT-like; gdT; CD4+T_Th17; Capillary Endothelial; EC3_cap; EC1_cap; EC2_cap; CD8+T_trans; CD4+T_naive; cardiac endothelial cell; Arterial Endothelial; EC5_art | 478.73018356794735409812 |
| VHFHeart | UBERON:0000948 | heart right ventricle | 78714.75572486871 | 49 | 3 | 86 | 0 | 9 | 42 | 22 | 51 | T/NK_cycling; EC10_CMC-like; EC4_immune; Endothelial; CD4+T_naive; CD4+T_Th2; ILC; B; CD4+T_Th1; DC; cardiac endothelial cell; cardiac muscle cell; B_plasma; CD8+T_cytox; hepatocyte; CD8+T_te; Mesothelial; Meso; gdT; NK_CD56hi; MAIT-like; EC1_cap; Capillary Endothelial; EC2_cap; EC3_cap; CD4+T_Th17; CD8+T_trans; Venous Endothelial; NK; Arterial Endothelial; EC5_art; EC8_ln; Lymphatic Endothelial; FB3; Fibroblast; FB1; FB5; FB4_activated; Macrophage; LYVE1+IGF1+MP; macrophage; LYVE1+MP_cycling; MoMP; LYVE1+TIMD4+MP; Mast; smooth muscle cell; Smooth Muscle; PC2_atria; Pericyte; PC1_vent; PC3_str; SMC1_basic; EC6_ven; T; Adipocyte; Adip1; Adip2; CD16+Mo; Endocardial; EC7_endocardial; Neut; SAN_P_cell; CD4+T_Tfh; fibroblast of cardiac tissue; Ventricular Cardiomycoyte; vCM2; vCM1; vCM4; vCM3_stressed; Atrial Cardiomyocyte; aCM1; aCM5; aCM2; CD4+T_act; NK_CD16hi; CD4+T_reg; CD14+Mo; NC1_glial; NC2_glial_NGF+; Monocyte/cDC; CD8+T_em; Neuronal; AVN_P_cell | 392.43107095827126913196 |
| VHFHeart | UBERON:0000948 | interventricular septum | 65894.53465930313 | 0 | 2 | 37 | 0 | 8 | 42 | 19 | 50 | CD8+T_trans; cardiac endothelial cell; cardiac muscle cell; DC; Mesothelial; NK_CD56hi; B_plasma; CD8+T_cytox; CD4+T_Th2; ILC; EC4_immune; Endothelial; T/NK_cycling; CD4+T_naive; CD4+T_Th1; B; CD8+T_te; hepatocyte; Mast; Pericyte; PC1_vent; smooth muscle cell; Smooth Muscle; SMC1_basic; EC6_ven; T; Adipocyte; Adip1; Adip2; Lymphatic Endothelial; EC8_ln; macrophage; Macrophage; LYVE1+TIMD4+MP; LYVE1+IGF1+MP; LYVE1+MP_cycling; Fibroblast; FB1; FB4_activated; FB3; FB5; MAIT-like; gdT; CD4+T_Th17; vCM1; Ventricular Cardiomycoyte; vCM3_stressed; vCM2; Atrial Cardiomyocyte; aCM5; aCM1; aCM2; CD14+Mo; NK_CD16hi; CD4+T_reg; NC1_glial; NC2_glial_NGF+; CD4+T_act; Neuronal; Neut; SAN_P_cell; CD4+T_Tfh; fibroblast of cardiac tissue; CD8+T_em; Monocyte/cDC; Arterial Endothelial; EC5_art; EC7_endocardial; Endocardial; Venous Endothelial; NK; Capillary Endothelial; EC2_cap; EC3_cap; EC1_cap; CD16+Mo | 445.85415037425985923361 |
| VHFHeart | UBERON:0000948 | left cardiac atrium | 18115.96846829785 | 49 | 1 | 49 | 0 | 8 | 40 | 22 | 48 | Mast; hepatocyte; MAIT-like; EC1_cap; Capillary Endothelial; EC2_cap; EC3_cap; NK_CD56hi; CD8+T_te; B_plasma; ILC; T/NK_cycling; EC10_CMC-like; Endothelial; EC4_immune; CD4+T_Th2; CD4+T_Th1; B; cardiac endothelial cell; Neut; Purkinje_cell; CD4+T_Tfh; Atrial Cardiomyocyte; aCM1; aCM4; aCM3; Ventricular Cardiomycoyte; vCM1; vCM4; vCM2; NK_CD16hi; NC1_glial; CD14+Mo; CD8+T_trans; EC5_art; Arterial Endothelial; Lymphatic Endothelial; EC8_ln; FB2; Fibroblast; FB3; FB1; LYVE1+TIMD4+MP; macrophage; Macrophage; LYVE1+IGF1+MP; cardiac muscle cell; CD4+T_naive; DC; CD8+T_cytox; Meso; Mesothelial; smooth muscle cell; Smooth Muscle; SMC2_art; SMC1_basic; PC1_vent; Pericyte; PC2_atria; EC6_ven; Venous Endothelial; CD16+Mo; EC7_endocardial; Endocardial; T; Adip1; Adipocyte; Adip2; Monocyte/cDC; Neuronal; CD8+T_em; fibroblast of cardiac tissue; CD4+T_act; NK; CD4+T_reg | 218.99961494031574894109 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adipocyte | http://purl.obolibrary.org/obo/CL_0000136 | 20.5 | 738 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Arterial Endothelial | http://purl.obolibrary.org/obo/CL_1000413 | 85.16666666666666666667 | 3066 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Atrial Cardiomyocyte | http://purl.obolibrary.org/obo/CL_0002129 | 3.66666666666666666667 | 66 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| VHFLargeIntestine | ascending colon | B | https://purl.org/ccf/ASCTB-TEMP_b | 208 | 416 |
| VHFLargeIntestine | ascending colon | CD4+ T cell | https://purl.org/ccf/ASCTB-TEMP_cd4-t-cell | 876 | 1752 |
| VHFLargeIntestine | ascending colon | CD57+ Enterocyte | https://purl.org/ccf/ASCTB-TEMP_cd57-enterocyte | 0.5 | 1 |
| VHFLargeIntestine | ascending colon | CD66+ Enterocyte | https://purl.org/ccf/ASCTB-TEMP_cd66-enterocyte | 711.5 | 1423 |
| VHFLargeIntestine | ascending colon | CD7+ Immune | https://purl.org/ccf/ASCTB-TEMP_cd7-immune | 30 | 60 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?rui_location ?organ ?organ_label ?as_label ?as_id ?intersection_volume ?as_volume ?tissue_block_volume ?total_collision_percentage
FROM HRApop:
FROM CCF:
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
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | VHFHeart | heart | interventricular septum | http://purl.obolibrary.org/obo/UBERON_0002094 | 5531.625 | 65894.53465930313 | 7425 | 8.562 |
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | VHFHeart | heart | heart right ventricle | http://purl.obolibrary.org/obo/UBERON_0002080 | 883.5749999999999 | 78714.75572486868 | 7425 | 8.562 |
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | VHFHeart | heart | Posteromedial head of posterior papillary muscle of left ventricle | http://purl.org/sig/ont/fma/fma7267 | 631.125 | 4401.498768462402 | 7425 | 8.562 |
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | VHFHeart | heart | heart left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | 3549.1499999999996 | 229312.7801882646 | 7425 | 8.562 |
| http://purl.org/ccf/1.5/fdb0d1f7-94d5-4628-b345-dbe4975966fd | VHMHeart | heart | heart left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | 838.3499999999999 | 121604.2070274211 | 2430 | 8.463000000000001 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

    GRAPH CCF: {
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
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | celltypist | sc_transcriptomics | respiratory system | UBERON:0001004 | 0.7088413368145337 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | 0.6526895367717622 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | 0.6526895367717622 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | 0.6526895367717622 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | 0.6526895367717622 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>


SELECT ?sex ?sample ?dataset ?tool ?modality ?organ ?organId ?as_label ?as ?as_tool ?similarity ?as_in_collisions
FROM hra-pop:similarities
FROM HRApop:
FROM CCF:
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
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | azimuth | 0.26058099624506753 | false |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | popv | 0.15126936529973928 | false |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | celltypist | 0.1779539278308055 | false |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | right atrium | http://purl.obolibrary.org/obo/UBERON_0002078 | celltypist | 0.3638043356773411 | false |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | right atrium | http://purl.obolibrary.org/obo/UBERON_0002078 | azimuth | 0.33742456545889704 | false |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

      GRAPH CCF: {
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

      GRAPH CCF: {
        ?as ccf:ccf_asctb_type ?type .
        FILTER (?type = 'AS')
      }

      FILTER(EXISTS {
        GRAPH CCF: {
          ?cell_id ccf:ccf_asctb_type [] .
        }
      } || EXISTS {
        GRAPH CCF: {
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
| Female | http://purl.obolibrary.org/obo/UBERON_0001153 | sc_proteomics | sc_proteomics | 0.12 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001153 | celltypist | sc_transcriptomics | 0.01526717557251908397 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001153 | popv | sc_transcriptomics | 0.8 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001156 | sc_proteomics | sc_proteomics | 0.12 |
| Female | http://purl.obolibrary.org/obo/UBERON_0001156 | celltypist | sc_transcriptomics | 0.01526717557251908397 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

  GRAPH CCF: {
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

      GRAPH CCF: {
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
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$heart%20right%20ventricle_Block | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$heart%20right%20ventricle | popv | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0004200 | 0.08771929824561403509 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$heart%20right%20ventricle_Block | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$heart%20right%20ventricle | popv | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0001228 | 0.07017543859649122807 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$interventricular%20septum_Block | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$interventricular%20septum | azimuth | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002078 | 0.82608695652173913043 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$interventricular%20septum_Block | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$interventricular%20septum | azimuth | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002094 | 0.84782608695652173913 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$interventricular%20septum_Block | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H2$interventricular%20septum | azimuth | sc_transcriptomics | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002079 | 0.89130434782608695652 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

  GRAPH CCF: {
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

        GRAPH CCF: {
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

      GRAPH CCF: {
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
| Female | https://entity.api.hubmapconsortium.org/entities/96d320ccb24a968bc32571895cf1b05e | https://entity.api.hubmapconsortium.org/entities/061b6c8f8e76f9be125f0f93e7734642 | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.obolibrary.org/obo/UBERON_0001158 | 0.08396946564885496183 |
| Female | https://entity.api.hubmapconsortium.org/entities/96d320ccb24a968bc32571895cf1b05e | https://entity.api.hubmapconsortium.org/entities/061b6c8f8e76f9be125f0f93e7734642 | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.org/sig/ont/fma/fma14928 | 0.05343511450381679389 |
| Female | https://entity.api.hubmapconsortium.org/entities/96d320ccb24a968bc32571895cf1b05e | https://entity.api.hubmapconsortium.org/entities/061b6c8f8e76f9be125f0f93e7734642 | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.obolibrary.org/obo/UBERON_0002115 | 0.04580152671755725191 |
| Female | https://entity.api.hubmapconsortium.org/entities/96d320ccb24a968bc32571895cf1b05e | https://entity.api.hubmapconsortium.org/entities/061b6c8f8e76f9be125f0f93e7734642 | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.obolibrary.org/obo/UBERON_0002116 | 0.05343511450381679389 |
| Female | https://entity.api.hubmapconsortium.org/entities/96d320ccb24a968bc32571895cf1b05e | https://entity.api.hubmapconsortium.org/entities/061b6c8f8e76f9be125f0f93e7734642 | celltypist | sc_transcriptomics | large intestine | UBERON:0000059 | http://purl.obolibrary.org/obo/UBERON_0006082 | 0.01526717557251908397 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

  GRAPH CCF: {
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

      GRAPH CCF: {
        ?as ccf:ccf_asctb_type ?type .
        FILTER (?type = 'AS')
      }

      FILTER(EXISTS {
        GRAPH CCF: {
          ?cell_id ccf:ccf_asctb_type [] .
        }
      } || EXISTS {
        GRAPH CCF: {
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
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002084 | 0.76 | false |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | celltypist | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002084 | 0.76 | false |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | popv | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002084 | 0.76 | false |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002079 | 0.76 | false |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | celltypist | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002079 | 0.76 | false |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

    GRAPH CCF: {
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
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/95190b47-b491-448a-8e9b-06d804bf2aa1 | popv | 0.4695126274542235 | 39.186364069660776 |
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/95190b47-b491-448a-8e9b-06d804bf2aa1 | celltypist | 0.5506468965299427 | 39.186364069660776 |
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/a0ff0780-d666-42fe-8068-a3b41b1c6aa0 | celltypist | 0.2228228035262637 | 133.59845848416737 |
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/a0ff0780-d666-42fe-8068-a3b41b1c6aa0 | azimuth | 0.10443858652374632 | 133.59845848416737 |
| Male | https://entity.api.hubmapconsortium.org/entities/93ae03ede0ff261a8cb1f27345fabd3c | http://purl.org/ccf/1.5/594902fb-c4c1-47c3-b98e-3101b93a73e4 | https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | azimuth | sc_transcriptomics | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/aba1ebe3-af18-40cc-b536-b89843049ca5 | azimuth | 0.984737351635251 | 48.40379342572233 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
    
    GRAPH CCF: {
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
| https://entity.api.hubmapconsortium.org/entities/26e1f2991c6f67fa10e9670f1bc0da6a | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H5$heart%20left%20ventricle | 1 | Female | celltypist | sc_transcriptomics | heart | UBERON:0000948 | https://entity.api.hubmapconsortium.org/entities/26e1f2991c6f67fa10e9670f1bc0da6a | http://purl.org/ccf/1.5/04baf323-eda0-4f72-bea1-aa943aa70894 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H5$heart%20left%20ventricle | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | 1 | 58.40614287898149 |
| https://entity.api.hubmapconsortium.org/entities/35e9bf0f58152ceb6f4d01052ac8867d | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H5$heart%20left%20ventricle | 1 | Female | celltypist | sc_transcriptomics | heart | UBERON:0000948 | https://entity.api.hubmapconsortium.org/entities/35e9bf0f58152ceb6f4d01052ac8867d | http://purl.org/ccf/1.5/04baf323-eda0-4f72-bea1-aa943aa70894 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H5$heart%20left%20ventricle | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | 1 | 58.40614287898149 |
| https://entity.api.hubmapconsortium.org/entities/26e1f2991c6f67fa10e9670f1bc0da6a | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$heart%20left%20ventricle | 1 | Female | celltypist | sc_transcriptomics | heart | UBERON:0000948 | https://entity.api.hubmapconsortium.org/entities/26e1f2991c6f67fa10e9670f1bc0da6a | http://purl.org/ccf/1.5/04baf323-eda0-4f72-bea1-aa943aa70894 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$heart%20left%20ventricle | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | 1 | 58.40614287898149 |
| https://entity.api.hubmapconsortium.org/entities/35e9bf0f58152ceb6f4d01052ac8867d | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$heart%20left%20ventricle | 1 | Female | celltypist | sc_transcriptomics | heart | UBERON:0000948 | https://entity.api.hubmapconsortium.org/entities/35e9bf0f58152ceb6f4d01052ac8867d | http://purl.org/ccf/1.5/04baf323-eda0-4f72-bea1-aa943aa70894 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$heart%20left%20ventricle | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | 1 | 58.40614287898149 |
| https://entity.api.hubmapconsortium.org/entities/26e1f2991c6f67fa10e9670f1bc0da6a | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20right%20ventricle | 0.9901724014266446 | Female | popv | sc_transcriptomics | heart | UBERON:0000948 | https://entity.api.hubmapconsortium.org/entities/26e1f2991c6f67fa10e9670f1bc0da6a | http://purl.org/ccf/1.5/04baf323-eda0-4f72-bea1-aa943aa70894 | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20right%20ventricle | http://purl.org/ccf/1.5/1fe61622-ba53-47c9-967e-e764c21b8189 | 0.9901724014266446 | 55.80055742553114 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

  GRAPH CCF: {
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
      GRAPH CCF: {
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
    GRAPH CCF: {
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
| Female | sc_proteomics | sc_proteomics | 1192 | 3 | 26 |
| Male | sc_proteomics | sc_proteomics | 1192 | 3 | 26 |
| Female | azimuth | sc_transcriptomics | 1124 | 71 | 16 |
| Male | azimuth | sc_transcriptomics | 1119 | 76 | 17 |
| Female | celltypist | sc_transcriptomics | 1133 | 62 | 153 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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

  GRAPH CCF: {
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
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0002063 | AT2 | 758 | 0.1452942304006134 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0002062 | AT1 | 745 | 0.14280237684493 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | ASCTB-TEMP:non-classical-monocytes | Non-classical monocytes | 623 | 0.1194172896300556 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0002144 | EC general capillary | 561 | 0.1075330649798735 |
| Female | NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139$lung | azimuth | sc_transcriptomics | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0000913 | CD8 T cells | 478 | 0.09162353843204907 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="as-cnt-per-organ"></a>Count of Anatomical Structures by Organ (as-cnt-per-organ)

Count of Anatomical Structures that occur in the 3D Reference Organs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Count of Anatomical Structures by Organ
#+ description: Count of Anatomical Structures that occur in the 3D Reference Organs

PREFIX ccf: <http://purl.org/ccf/>
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>

SELECT (COUNT(DISTINCT(?as_id)) as ?as_count) ?organ
FROM CCF:
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
| 98 | VHFBloodVasculature |
| 98 | VHMBloodVasculature |
| 62 | VHFLung |
| 59 | VHMLung |
| 56 | VHFAllenBrain |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>

SELECT (COUNT(DISTINCT(?as_id)) as ?as_cnt)
FROM CCF:
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
| 519 |


### <a id="count-ct-per-tool"></a>Cell types per annotation tool (count-ct-per-tool)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell types per annotation tool
PREFIX ccf: <http://purl.org/ccf/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX CTAnn: <https://purl.humanatlas.io/graph/ctann-crosswalks>
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
FROM CCF:
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
        GRAPH HRApopTestData: {
          [] ccf:generates_dataset ?dataset .
          ?dataset ccf:has_cell_summary [] ;
            ccf:organ_id ?_organ_id .

          BIND(IRI(?_organ_id) as ?organ_id)
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
| blood | 2501 | 0 | 1 | 29 | 41 | 26 | 18 |  |
| blood vasculature | 3 | 244 | 1178 | 65 | 0 | 0 | 14 | x |
| bone marrow | 131 | 0 | 1 | 47 | 43 | 39 | 14 |  |
| breast mammary gland | 1 | 18 | 3 | 10 | 0 | 0 | 14 | x |
| eye | 192 | 96 | 41 | 58 | 0 | 0 | 27 | x |
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
| https://purl.humanatlas.io/ds-graph/hra-pop-full | 164312 |
| https://purl.humanatlas.io/graph/ccf | 557125 |
| https://purl.humanatlas.io/graph/ctann-crosswalks | 15442 |
| https://purl.humanatlas.io/graph/hra-pop | 1612839 |
| https://purl.humanatlas.io/graph/hra-pop#as-as-sims | 45810 |
| https://purl.humanatlas.io/graph/hra-pop#distances | 738112 |
| https://purl.humanatlas.io/graph/hra-pop#similarities | 141350211 |
| https://purl.humanatlas.io/graph/hra-pop#test-data | 9711349 |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
    ?dataset ccf:has_cell_summary [
      ccf:sex ?sex ;
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:has_cell_summary_row [
        ccf:cell_count ?cell_count ;
      ] ;
    ] .
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
| Female | HCA | 40 | 659085 | sc_transcriptomics |
| Male | HCA | 42 | 799317 | sc_transcriptomics |
| Female | HuBMAP | 116 | 3340954 | sc_transcriptomics |
| ... | ... | ... | ... | ... |

## universe-ad-hoc

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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| CxG | Female | 3118 | 0 | 2181 | 937 | 3118 | 937 | sc_transcriptomics | 18529082 |
| CxG | Male | 2995 | 0 | 2174 | 821 | 2995 | 821 | sc_transcriptomics | 20651194 |
| CxG | Unknown | 357 | 0 | 216 | 141 | 357 | 141 | sc_transcriptomics | 1804425 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| CxG | 6470 | 0 | 4571 | 1899 | 6470 | 1899 |
| GTEx | 74 | 15 | 50 | 9 | 9 | 59 |
| HCA | 229 | 82 | 65 | 82 | 82 | 147 |
| HIRN, ESPACE | 1 | 0 | 1 | 0 | 0 | 1 |
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
| 7291 | 9598 |


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
| 9598 |


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
| Female | 2777 | 12 |
| Male | 2456 | 13 |
| Unknown | 271 | 2 |


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
| Female | 3468 | 2770 |
| Male | 3446 | 2449 |
| Unknown | 433 | 345 |


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

SELECT (COUNT(DISTINCT ?donor) AS ?donor_count)
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

| donor_count |
| :--- |
| 2456 |
| 2777 |
| 345 |


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
| 93 |


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
| 560 |


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
| 1135 | 444 |


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
| 7749 |


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
| 560 |


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
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837 | 9 |


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
| https://entity.api.hubmapconsortium.org/entities/58167d0f778284d5b95af782bd8132da | -92300 | popv | 100527 | 8227 |
| https://entity.api.hubmapconsortium.org/entities/ee6e44b3e6cb77ef1806e722390a01a8 | -92300 | popv | 100527 | 8227 |
| https://entity.api.hubmapconsortium.org/entities/a39fed027b51d97f83cec90c63c44744 | -74910 | popv | 100957 | 26047 |
| https://entity.api.hubmapconsortium.org/entities/f7a8e78dea9cf70735059e8b4a179701 | -74906 | popv | 100957 | 26051 |
| https://entity.api.hubmapconsortium.org/entities/ca35382d67c90d4d9bca1ee16526b1d3 | -59481 | popv | 100608 | 41127 |
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
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$apex%20of%20heart | 10x | Data/Assay Types: 10x,  | celltypist | 21 |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$apex%20of%20heart | 10x | Data/Assay Types: 10x,  | popv | 6 |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20right%20ventricle | 10x | Data/Assay Types: 10x,  | azimuth | 14 |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20right%20ventricle | 10x | Data/Assay Types: 10x,  | celltypist | 24 |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D2$heart%20left%20ventricle | 10x | Data/Assay Types: 10x,  | celltypist | 26 |
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
| https://entity.api.hubmapconsortium.org/entities/0b528e5d674fadada32215c364f6fcaa |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/319aafd9420a0c1c6f175d6a2ef060a9 |  |  |  |
| https://entity.api.hubmapconsortium.org/entities/33fcecfcdb5a264554dc06db897cd4f8 | https://doi.org/10.1038/s41586-023-05915-x |  |  |
| https://entity.api.hubmapconsortium.org/entities/377df3da484d29fdde20ec020a76ba1b |  |  |  |
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
| https://entity.api.hubmapconsortium.org/entities/f0aa7e5d01c0d40f0b284cbf85eb8d03 | HuBMAP | TMC-CalTech | 55 | Female | 32.2 | White |
| https://entity.api.hubmapconsortium.org/entities/f84ff583687f3407636d8ce843b48ff0 | HuBMAP | TMC-Stanford | 37 | Male | 29.3 | White |
| https://entity.api.hubmapconsortium.org/entities/f8d963cab6bd10e2a4b8184ea8197fc1 | HuBMAP | TMC-UCSD | 57 | Female | 19.6 | White |
| https://entity.api.hubmapconsortium.org/entities/ff043e8a4b6d7b21620ad9f0978238d0 | HuBMAP | TMC-UCSD | 75 | Female | 32 | White |
| https://entity.api.hubmapconsortium.org/entities/ff831c86a141380f572fa9a2ba7cae52 | HuBMAP | TMC-UCSD | 25 | Female |  | White |
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
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/03f821b4-87be-4ff4-b65a-b5fc00061da7#NP26 | CxG |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/03f821b4-87be-4ff4-b65a-b5fc00061da7#NP27 | CxG |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/03f821b4-87be-4ff4-b65a-b5fc00061da7#NP35 | CxG |
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
| http://purl.org/ccf/1.5/23e9d58a-c93f-414b-baf9-3692ea20fd1c | 1 |
| http://purl.org/ccf/1.5/32214c14-bf21-4bf6-aea9-58ab721128ab | 1 |
| http://purl.org/ccf/1.5/3425fa0c-c5cb-4493-b6ba-41520334b13e | 1 |
| http://purl.org/ccf/1.5/37248725-6ed5-4589-ac5a-9951d1a783e7 | 1 |
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
| http://purl.org/ccf/1.5/825ec2b8-1291-4633-8a63-b35c7cd709bd |
| http://purl.org/ccf/1.5/82d414d4-59a7-4a61-9d86-278cb73a3ddd |
| http://purl.org/ccf/1.5/85765dd5-2197-4361-b4c6-c9d30186044a |
| http://purl.org/ccf/1.5/85ad9566-c363-4b61-a522-6576b253d9af |
| http://purl.org/ccf/1.5/87be07c9-cf37-4001-a589-e2c048b5d3f3 |
| ... |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?dataset ?organ ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?study_paper ?doi ?lead_author
FROM HRApopFull:
FROM CCF:
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
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#A61$atrioventricular%20node | Heart | 8 | false | true | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#A61$sinoatrial%20node | Heart | 3 | false | true | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#AH1$atrioventricular%20node | Heart | 5 | false | true | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#AH1$interventricular%20septum | Heart | 6 | false | true | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#AH1$sinoatrial%20node | Heart | 10 | false | true | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?dataset ?organ ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?study_paper ?doi ?lead_author
FROM HRApopFull:
FROM CCF:
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
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F16$kidney | Kidney | 26 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F17$kidney | Kidney | 31 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F35$kidney | Kidney | 21 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
| Male | https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F38$kidney | Kidney | 30 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
| Female | https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F41$kidney | Kidney | 28 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
FROM CCF:
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
| N/A | UBERON:0001723 | basal cell | https://purl.org/ccf/ASCTB-TEMP_basal-cell | basal cell | https://purl.org/ccf/ASCTB-TEMP_basal-cell |  | 6 | 12563 |
| N/A | UBERON:0001723 | capillary endothelial cell | https://purl.org/ccf/ASCTB-TEMP_capillary-endothelial-cell | capillary endothelial cell | https://purl.org/ccf/ASCTB-TEMP_capillary-endothelial-cell |  | 6 | 177 |
| N/A | UBERON:0001723 | endothelial cell of artery | https://purl.org/ccf/ASCTB-TEMP_endothelial-cell-of-artery | endothelial cell of artery | https://purl.org/ccf/ASCTB-TEMP_endothelial-cell-of-artery |  | 4 | 56 |
| N/A | UBERON:0001723 | endothelial cell of lymphatic vessel | https://purl.org/ccf/ASCTB-TEMP_endothelial-cell-of-lymphatic-vessel | endothelial cell of lymphatic vessel | https://purl.org/ccf/ASCTB-TEMP_endothelial-cell-of-lymphatic-vessel |  | 6 | 76 |
| N/A | UBERON:0001723 | epithelial cell | https://purl.org/ccf/ASCTB-TEMP_epithelial-cell | epithelial cell | https://purl.org/ccf/ASCTB-TEMP_epithelial-cell |  | 3 | 2122 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
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
| 2991 | 676 |


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
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D088_Donor_TissueBlock1 | Tissue Block | Registered 3/24/2023, Allen Wang, NHLBI/LungMap | 5 x 5 x 3 millimeter, 3 millimeter | https://data-browser.lungmap.net/explore/projects/20037472-ea1d-4ddb-9cd3-56a11a6f0f76 | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | 5 | 5 | 3 | Allen Wang | Allen | Wang |  | 0 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D139_Donor_TissueBlock1 | Tissue Block | Registered 3/24/2023, Allen Wang, NHLBI/LungMap | 5 x 5 x 3 millimeter, 3 millimeter | https://data-browser.lungmap.net/explore/projects/20037472-ea1d-4ddb-9cd3-56a11a6f0f76 | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | 5 | 5 | 3 | Allen Wang | Allen | Wang |  | 0 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D231_Donor_TissueBlock1 | Tissue Block | Registered 3/24/2023, Allen Wang, NHLBI/LungMap | 5 x 5 x 3 millimeter, 3 millimeter | https://data-browser.lungmap.net/explore/projects/20037472-ea1d-4ddb-9cd3-56a11a6f0f76 | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | 5 | 5 | 3 | Allen Wang | Allen | Wang |  | 0 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$apex%20of%20heart_Block | Tissue Block | Registered 10/15/2021, Michela Noseda, Broad Institute | 15 x 24 x 24 millimeter, 24 millimeter | https://doi.org/10.1038/s41586-020-2797-4 | http://purl.org/ccf/1.5/9abfed4e-2fde-4d80-a8aa-7439a106d895 | 15 | 24 | 24 | Michela Noseda | Michela | Noseda |  | 0 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$apex%20of%20heart_Block | Tissue Block | Registered 10/15/2021, Michela Noseda, Broad Institute | 15 x 24 x 24 millimeter, 24 millimeter | https://doi.org/10.1038/s41586-020-2797-4 | http://purl.org/ccf/1.5/9abfed4e-2fde-4d80-a8aa-7439a106d895 | 15 | 24 | 24 | Michela Noseda | Michela | Noseda |  | 0 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT ?organ ?side ?sex ?modality ?status (COUNT(DISTINCT(?dataset)) as ?dataset_count) (SUM(?cell_count) as ?cell_count)
FROM HRApopFull:
FROM CCF:
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
| blood |  | female | sc_transcriptomics | Non-Atlas | 1365 | 30879 |
| blood |  | male | sc_transcriptomics | Non-Atlas | 1081 | 24376 |
| blood |  | unknown | sc_transcriptomics | Non-Atlas | 55 | 1192 |
| blood vasculature |  | female | sc_transcriptomics | Non-Atlas | 1 | 12 |
| blood vasculature |  | male | sc_transcriptomics | Non-Atlas | 2 | 27 |
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
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX HRApopFull: <https://purl.humanatlas.io/ds-graph/hra-pop-full>
PREFIX HRApopTestData: <https://purl.humanatlas.io/graph/hra-pop#test-data>
PREFIX hra-pop: <https://purl.humanatlas.io/graph/hra-pop#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX hubmap: <https://entity.api.hubmapconsortium.org/entities/>
PREFIX rui: <http://purl.org/ccf/1.5/>

SELECT DISTINCT ?sex ?dataset ?modality ?organ ?side ?organ_id ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?study_paper ?doi ?lead_author
FROM HRApopFull:
FROM CCF:
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
| female | https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp3$alveolus%20of%20lung | sc_transcriptomics | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 40 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
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
| http://purl.org/ccf/1.5/825ec2b8-1291-4633-8a63-b35c7cd709bd_placement |
| http://purl.org/ccf/1.5/82d414d4-59a7-4a61-9d86-278cb73a3ddd_placement |
| http://purl.org/ccf/1.5/85765dd5-2197-4361-b4c6-c9d30186044a_placement |
| http://purl.org/ccf/1.5/85ad9566-c363-4b61-a522-6576b253d9af_placement |
| http://purl.org/ccf/1.5/87be07c9-cf37-4001-a589-e2c048b5d3f3_placement |
| ... |


  