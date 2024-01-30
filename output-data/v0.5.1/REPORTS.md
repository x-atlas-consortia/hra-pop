# Summary of Reports

  ## Table of Contents

* ad-hoc
  * [as-datasets-modality](#as-datasets-modality)
  * [Cell Summaries By FTU (consortium-breakdown)](#consortium-breakdown)
  * [count-universe-datasets](#count-universe-datasets)
  * [count-universe-donors-portals](#count-universe-donors-portals)
  * [count-universe-donors](#count-universe-donors)
  * [count-universe-samples](#count-universe-samples)
  * [count-universe-se-with-slice](#count-universe-se-with-slice)
  * [count-universe-se](#count-universe-se)
  * [count-universe-sp](#count-universe-sp)
  * [Table S3 (counts-for-kidney-as)](#counts-for-kidney-as)
  * [Table S3 (counts-for-tools-by-as)](#counts-for-tools-by-as)
  * [Count of Cells and unique Cell Types (counts-paper)](#counts-paper)
  * [dataset-info](#dataset-info)
  * [dataset-pub](#dataset-pub)
  * [dataset-sample](#dataset-sample)
  * [donor-info](#donor-info)
  * [donor-portal](#donor-portal)
  * [donor-sample](#donor-sample)
  * [heart-and-lung-datasets](#heart-and-lung-datasets)
  * [kidney-and-lung-datasets](#kidney-and-lung-datasets)
  * [Test query that finds all named graphs in the loaded SPARQL database (named-graphs)](#named-graphs)
  * [Cell Summaries By FTU (provider-breakdown)](#provider-breakdown)
  * [RUI Location Statistics (rui-location-stats)](#rui-location-stats)
  * [RUI Registered H5AD Dataset Statistics (rui-registered-h5ad-datasets)](#rui-registered-h5ad-datasets)
  * [sample-description](#sample-description)
  * [sample-info](#sample-info)
  * [sc-and-spatial-count](#sc-and-spatial-count)
  * [se-slices](#se-slices)
  * [spatial-and-bulk-datasets-breakdown](#spatial-and-bulk-datasets-breakdown)
  * [spatial-and-bulk-datasets](#spatial-and-bulk-datasets)
  * [spatial-enity](#spatial-enity)
  * [spatial-placement](#spatial-placement)
  * [unmapped-cell-ids](#unmapped-cell-ids)
* atlas
  * [application-a1](#application-a1)
  * [application-a2p1](#application-a2p1)
  * [application-a2p2](#application-a2p2)
  * [application-a2p3](#application-a2p3)
  * [application-a2p4](#application-a2p4)
  * [figure-as-as-sim](#figure-as-as-sim)
  * [figure-f4](#figure-f4)
  * [Table S1 (table-s1)](#table-s1)
  * [Table S2 (table-s2)](#table-s2)
  * [Table S3 (table-s3)](#table-s3)
  * [Table S4 (table-s4)](#table-s4)
  * [Table S5 (table-s5)](#table-s5)
  * [validation-v1](#validation-v1)
  * [validation-v2p1](#validation-v2p1)
  * [validation-v2p2-extra1](#validation-v2p2-extra1)
  * [validation-v2p2-extra2](#validation-v2p2-extra2)
  * [validation-v2p2-extra3](#validation-v2p2-extra3)
  * [validation-v2p2](#validation-v2p2)
  * [validation-v2p3](#validation-v2p3)
  * [validation-v3.edges](#validation-v3.edges)
  * [validation-v3.nodes](#validation-v3.nodes)
  * [validation-v4](#validation-v4)
  * [validation-v5](#validation-v5)
* hra
  * [Count of Anatomical Structures (as-cnt-per-organ)](#as-cnt-per-organ)
  * [Count of Anatomical Structures (as-cnt)](#as-cnt)



### <a id="as-datasets-modality"></a>as-datasets-modality



<details>
  <summary>View Sparql Query</summary>

```sparql
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
FROM <https://purl.org/ccf/releases/2.2.1/ccf.owl>
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

([View Source](../../queries/ad-hoc/as-datasets-modality.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/as-datasets-modality.csv))

| organId | organ_label | refOrgan | refOrganAs | dataset | tool | modality | as_label |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/153b0fe8575ff1a17768319ba6dbaa5c | spatial | spatial | sigmoid colon |
| http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/846e56ed969922f1cb7a81619b175620 | popv | sc_bulk | sigmoid colon |
| http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/be9a0e3119ea00dc156eff7ca346f46e | popv | sc_bulk | sigmoid colon |
| http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001158 | https://entity.api.hubmapconsortium.org/entities/7edbff53248f2a2c8e74f5f955681734 | popv | sc_bulk | descending colon |
| http://purl.obolibrary.org/obo/UBERON_0000059 | large intestine | http://purl.org/ccf/latest/ccf.owl#VHFColon | http://purl.obolibrary.org/obo/UBERON_0001159 | https://entity.api.hubmapconsortium.org/entities/061b6c8f8e76f9be125f0f93e7734642 | popv | sc_bulk | sigmoid colon |
| ... | ... | ... | ... | ... | ... | ... | ... |

## ad-hoc

### <a id="consortium-breakdown"></a>Cell Summaries By FTU (consortium-breakdown)

Computes the cell summaries for each FTU. The Blazegraph version reduces the amount of code duplication.

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Summaries By FTU
#+ description: Computes the cell summaries for each FTU. The Blazegraph version reduces the amount of code duplication.

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX iftu: <https://hubmapconsortium.github.io/hra-ui/apps/ftu-ui/assets/TEMP/2d-ftu-illustrations.jsonld>

SELECT ?consortium (COUNT(DISTINCT(?dataset)) as ?dataset_count) (SUM(?cell_count) as ?cell_count) ?modality
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

  ?dataset ccf:has_cell_summary [
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
    ccf:has_cell_summary_row [
      ccf:cell_count ?cell_count ;
    ] ;
  ] .
}
GROUP BY ?consortium ?modality
ORDER BY ?consortium

```

([View Source](../../queries/ad-hoc/consortium-breakdown.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/consortium-breakdown.csv))

| consortium | dataset_count | cell_count | modality |
| :--- | :--- | :--- | :--- |
| GTEx | 16 | 267059 | sc_bulk |
| HCA | 82 | 1458402 | sc_bulk |
| HuBMAP | 524 | 19971882 | sc_bulk |
| HuBMAP | 74 | 2616594 | spatial |
| NHLBI/LungMap | 9 | 139500 | sc_bulk |
| SenNet | 2 | 43735 | sc_bulk |


### <a id="count-universe-datasets"></a>count-universe-datasets



<details>
  <summary>View Sparql Query</summary>

```sparql
# Count the unique number of datasets 

PREFIX ccf: <http://purl.org/ccf/>

SELECT (COUNT(DISTINCT ?dataset) AS ?dataset_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
    ?dataset a ccf:Dataset.
}

```

([View Source](../../queries/ad-hoc/count-universe-datasets.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/count-universe-datasets.csv))

| dataset_ct |
| :--- |
| 10522 |


### <a id="count-universe-donors-portals"></a>count-universe-donors-portals



<details>
  <summary>View Sparql Query</summary>

```sparql
# Count the unique number of Donors and portals

PREFIX ccf: <http://purl.org/ccf/>

SELECT (COUNT(DISTINCT ?donor) AS ?donor_ct) (COUNT(DISTINCT ?consortium_name) AS ?consortium_name_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
    ?donor a ccf:Donor.
    ?donor ccf:consortium_name ?consortium_name
}

```

([View Source](../../queries/ad-hoc/count-universe-donors-portals.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/count-universe-donors-portals.csv))

| donor_ct | consortium_name_ct |
| :--- | :--- |
| 6653 | 14 |


### <a id="count-universe-donors"></a>count-universe-donors



<details>
  <summary>View Sparql Query</summary>

```sparql
# Count the unique number of Donors 

PREFIX ccf: <http://purl.org/ccf/>

SELECT (COUNT(DISTINCT ?donor) AS ?donor_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
    ?donor a ccf:Donor.
}

```

([View Source](../../queries/ad-hoc/count-universe-donors.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/count-universe-donors.csv))

| donor_ct |
| :--- |
| 6727 |


### <a id="count-universe-samples"></a>count-universe-samples



<details>
  <summary>View Sparql Query</summary>

```sparql
# Count the unique number of Samples 

PREFIX ccf: <http://purl.org/ccf/>

SELECT (COUNT(DISTINCT ?sample) as ?sample_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  ?sample a ccf:Sample
}

```

([View Source](../../queries/ad-hoc/count-universe-samples.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/count-universe-samples.csv))

| sample_ct |
| :--- |
| 7709 |


### <a id="count-universe-se-with-slice"></a>count-universe-se-with-slice



<details>
  <summary>View Sparql Query</summary>

```sparql
# Count the unique number of SpatialEntity with slice_count

PREFIX ccf: <http://purl.org/ccf/>

SELECT (count(DISTINCT ?spatial_entity) as ?se_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
    ?spatial_entity a ccf:SpatialEntity.
    ?spatial_entity ccf:slice_count ?slice_count.
    FILTER (?slice_count > 0)
}
```

([View Source](../../queries/ad-hoc/count-universe-se-with-slice.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/count-universe-se-with-slice.csv))

| se_ct |
| :--- |
| 106 |


### <a id="count-universe-se"></a>count-universe-se



<details>
  <summary>View Sparql Query</summary>

```sparql
# Count the unique number of Spatial Entities

PREFIX ccf: <http://purl.org/ccf/>

SELECT (count(DISTINCT ?spatial_entity) as ?se_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
    ?spatial_entity a ccf:SpatialEntity.
}
```

([View Source](../../queries/ad-hoc/count-universe-se.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/count-universe-se.csv))

| se_ct |
| :--- |
| 731 |


### <a id="count-universe-sp"></a>count-universe-sp



<details>
  <summary>View Sparql Query</summary>

```sparql
# Count the unique number of Spatial Placement

PREFIX ccf: <http://purl.org/ccf/>

SELECT (COUNT(DISTINCT ?spatial_placement) AS ?sp_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
    ?spatial_placement a ccf:SpatialPlacement.
}

```

([View Source](../../queries/ad-hoc/count-universe-sp.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/count-universe-sp.csv))

| sp_ct |
| :--- |
| 731 |


### <a id="counts-for-kidney-as"></a>Table S3 (counts-for-kidney-as)

(Bulk) Anatomical Structures in HRA v1.3, cell types, and average/sum counts of CTs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S3
#+ description: (Bulk) Anatomical Structures in HRA v1.3, cell types, and average/sum counts of CTs

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
	FILTER (?as_label='renal papilla' || ?as_label = 'renal pyramid')
}
GROUP BY ?organ ?as_label ?cell_label
ORDER BY ?organ ?as_label ?cell_label

```

([View Source](../../queries/ad-hoc/counts-for-kidney-as.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/counts-for-kidney-as.csv))

| organ | as_label | cell_label | cell_id | mean_cell_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- |
| VHFLeftKidney | renal pyramid | B cell | http://purl.obolibrary.org/obo/CL_0000236 | 200.5 | 6015 |
| VHFLeftKidney | renal pyramid | Descending Vasa Recta Endothelial  | https://purl.org/ccf/ASCTB-TEMP_descending-vasa-recta-endothelial | 553 | 27097 |
| VHFLeftKidney | renal pyramid | Peritubular Capilary Endothelial  | https://purl.org/ccf/ASCTB-TEMP_peritubular-capilary-endothelial | 228.56521739130434782609 | 10514 |
| VHFLeftKidney | renal pyramid | Schwann cell | http://purl.obolibrary.org/obo/CL_0002573 | 9.93103448275862068966 | 288 |
| VHFLeftKidney | renal pyramid | T cell | http://purl.obolibrary.org/obo/CL_0000084 | 109.91836734693877551020 | 5386 |
| ... | ... | ... | ... | ... | ... |


### <a id="counts-for-tools-by-as"></a>Table S3 (counts-for-tools-by-as)

(Bulk) Anatomical Structures in HRA v1.3, cell types, and average/sum counts of CTs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S3
#+ description: (Bulk) Anatomical Structures in HRA v1.3, cell types, and average/sum counts of CTs

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

SELECT ?tool ?organ ?as_label ?cell_label
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
	FILTER (?modality = 'sc_bulk')
}
GROUP BY ?tool ?organ ?as_label ?cell_label
ORDER BY ?tool ?organ ?as_label ?cell_label

```

([View Source](../../queries/ad-hoc/counts-for-tools-by-as.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/counts-for-tools-by-as.csv))

| tool | organ | as_label | cell_label | cell_id | mean_cell_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | B cell | http://purl.obolibrary.org/obo/CL_0000236 | 20.83333333333333333333 | 750 |
| azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Schwann cell | http://purl.obolibrary.org/obo/CL_0002573 | 49.66666666666666666667 | 1788 |
| azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | T cell | http://purl.obolibrary.org/obo/CL_0000084 | 75.16666666666666666667 | 2706 |
| azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | capillary endothelial cell | http://purl.obolibrary.org/obo/CL_0002144 | 1361.66666666666666666667 | 49020 |
| azimuth | VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | endocardial cell | http://purl.obolibrary.org/obo/CL_0002350 | 10.6 | 318 |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="counts-paper"></a>Count of Cells and unique Cell Types (counts-paper)

Count of Cells and unique Cell Types that occur in the Enriched RUI Locations

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Count of Cells and unique Cell Types
#+ description: Count of Cells and unique Cell Types that occur in the Enriched RUI Locations

PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX ccf: <http://purl.org/ccf/>

SELECT
  (COUNT(DISTINCT(?cell_id)) as ?unique_cell_type_count)
  (SUM(?cell_count) as ?cell_count)
FROM HRApop:
WHERE {
  [] a ccf:Dataset ;
    ccf:has_cell_summary [
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
      ccf:has_cell_summary_row [
        ccf:cell_id ?cell_id ;
        ccf:cell_count ?cell_count ;
      ] ;
    ] .
}

```

([View Source](../../queries/ad-hoc/counts-paper.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/counts-paper.csv))

| unique_cell_type_count | cell_count |
| :--- | :--- |
| 338 | 24497172 |


### <a id="dataset-info"></a>dataset-info



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query the information of Datasets

PREFIX ccf: <http://purl.org/ccf/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?dataset ?technology ?description ?annotation_method (count(DISTINCT ?cell_id) as ?ct_cnt)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  ?dataset a ccf:Dataset.
  OPTIONAL {
        ?dataset ccf:technology ?technology.
        ?dataset rdfs:comment ?description.
        ?dataset ccf:has_cell_summary ?cell_summary.
        ?cell_summary ccf:cell_annotation_method ?annotation_method.
        ?cell_summary ccf:has_cell_summary_row ?cell_summary_row .
        ?cell_summary_row ccf:cell_id ?cell_id .
    }
}
GROUP BY ?dataset ?technology ?description ?annotation_method

```

([View Source](../../queries/ad-hoc/dataset-info.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/dataset-info.csv))

| dataset | technology | description | annotation_method | ct_cnt |
| :--- | :--- | :--- | :--- | :--- |
| https://entity.api.hubmapconsortium.org/entities/8cdb42ed1194255c74c8462b99bbd7ef | RNAseq | Dataset Type: RNAseq [Salmon] | azimuth | 30 |
| https://entity.api.hubmapconsortium.org/entities/045a7d6bcca6e1d22c7f6dee032ce25a | RNAseq | Dataset Type: RNAseq [Salmon] | azimuth | 30 |
| https://entity.api.hubmapconsortium.org/entities/176edb4b0e16059522f6f087576fbeec | RNAseq | Dataset Type: RNAseq [Salmon] | popv | 31 |
| https://entity.api.hubmapconsortium.org/entities/149e1be22a4961f9c6240480710836a3 | RNAseq | Dataset Type: RNAseq [Salmon] | azimuth | 43 |
| https://entity.api.hubmapconsortium.org/entities/0430a44e418219aafce608f4286b2a9b | Slide-seq | Dataset Type: Slide-seq [Salmon] | azimuth | 46 |
| ... | ... | ... | ... | ... |


### <a id="dataset-pub"></a>dataset-pub



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query Datasets and associated publications

PREFIX ccf: <http://purl.org/ccf/>

SELECT DISTINCT ?dataset ?publication ?publication_lead_author ?publication_title
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  ?sample ccf:generates_dataset ?dataset.
  OPTIONAL {
      ?dataset ccf:publication ?publication.
      ?dataset ccf:publication_lead_author ?publication_lead_author.
      ?dataset ccf:publication_title ?publication_title.
    }
}

```

([View Source](../../queries/ad-hoc/dataset-pub.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/dataset-pub.csv))

| dataset | publication | publication_lead_author | publication_title |
| :--- | :--- | :--- | :--- |
| https://doi.org/10.1126/science.abl4290#GTEX-1HSMQ-5005-SM-GKSJF | https://doi.org/10.1126/science.abl4290 | Gökcen Eraslan | Single-nucleus cross-tissue molecular reference maps toward understanding disease gene function |
| https://doi.org/10.1126/science.abl4290#GTEX-1HSMQ-5007-SM-GKSJG | https://doi.org/10.1126/science.abl4290 | Gökcen Eraslan | Single-nucleus cross-tissue molecular reference maps toward understanding disease gene function |
| https://doi.org/10.1126/science.abl4290#GTEX-1HSMQ-5014-SM-GKSJI | https://doi.org/10.1126/science.abl4290 | Gökcen Eraslan | Single-nucleus cross-tissue molecular reference maps toward understanding disease gene function |
| https://doi.org/10.1126/science.abl4290#GTEX-1I1GU-5006-SM-G8XQC | https://doi.org/10.1126/science.abl4290 | Gökcen Eraslan | Single-nucleus cross-tissue molecular reference maps toward understanding disease gene function |
| https://doi.org/10.1126/science.abl4290#GTEX-1ICG6-5003-SM-GHS9A | https://doi.org/10.1126/science.abl4290 | Gökcen Eraslan | Single-nucleus cross-tissue molecular reference maps toward understanding disease gene function |
| ... | ... | ... | ... |


### <a id="dataset-sample"></a>dataset-sample



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query Samples and associated datasets

PREFIX ccf: <http://purl.org/ccf/>

SELECT (COUNT(DISTINCT ?sample) AS ?sample_ct) (COUNT(DISTINCT ?dataset) AS ?dataset_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  ?sample a ccf:Sample.
  ?sample ccf:generates_dataset ?dataset
}

```

([View Source](../../queries/ad-hoc/dataset-sample.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/dataset-sample.csv))

| sample_ct | dataset_ct |
| :--- | :--- |
| 7084 | 10522 |


### <a id="donor-info"></a>donor-info



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query the information of Donors 

PREFIX ccf: <http://purl.org/ccf/>

SELECT DISTINCT ?d_url ?d_tissue_provider_name ?d_age ?d_sex ?d_race
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  ?d_url a ccf:Donor.
  OPTIONAL {
      ?d_url ccf:tissue_provider_name ?d_tissue_provider_name .
      ?d_url ccf:age ?d_age .
      ?d_url ccf:sex ?d_sex .
      ?d_url ccf:race ?d_race .
    }
}

```

([View Source](../../queries/ad-hoc/donor-info.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/donor-info.csv))

| d_url | d_tissue_provider_name | d_age | d_sex | d_race |
| :--- | :--- | :--- | :--- | :--- |
| https://entity.api.hubmapconsortium.org/entities/b98fceee74b721925c833424a5bd63d4 | TMC-UCSD | 53 | Male | White |
| https://entity.api.hubmapconsortium.org/entities/be425f8a2963dda1d3a7a0c79de5e466 | TMC-Stanford | 24 | Female | White |
| https://entity.api.hubmapconsortium.org/entities/c37ed0a5fa384dceb5d8914e221e9f08 | RTI-General Electric | 72 | Male | White |
| https://entity.api.hubmapconsortium.org/entities/d386672d8d067ee117a086710cfbde5a | TMC-Florida | 21 | Female | Black or African American |
| https://entity.api.hubmapconsortium.org/entities/d3ad6409d2ad37ef7dbcc90ccc199f68 | TMC-Stanford | 78 | Male | Black or African American |
| ... | ... | ... | ... | ... |


### <a id="donor-portal"></a>donor-portal



<details>
  <summary>View Sparql Query</summary>

```sparql
# Count the unique number of Donors 

PREFIX ccf: <http://purl.org/ccf/>

SELECT DISTINCT ?donor ?consortium_name
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
    ?donor a ccf:Donor.
    ?donor ccf:consortium_name ?consortium_name
}

```

([View Source](../../queries/ad-hoc/donor-portal.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/donor-portal.csv))

| donor | consortium_name |
| :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$apex%20of%20heart_Block | CxG |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$heart%20left%20ventricle_Block | CxG |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$heart%20right%20ventricle_Block | CxG |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$interventricular%20septum_Block | CxG |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#H6$left%20cardiac%20atrium_Block | CxG |
| ... | ... |


### <a id="donor-sample"></a>donor-sample



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query Samples and associated donors

PREFIX ccf: <http://purl.org/ccf/>

SELECT (COUNT(DISTINCT ?sample) AS ?sample_ct) (COUNT(DISTINCT ?donor) AS ?donor_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  ?sample ccf:comes_from ?donor
}

```

([View Source](../../queries/ad-hoc/donor-sample.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/donor-sample.csv))

| sample_ct | donor_ct |
| :--- | :--- |
| 7211 | 6645 |


### <a id="heart-and-lung-datasets"></a>heart-and-lung-datasets



<details>
  <summary>View Sparql Query</summary>

```sparql
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


SELECT DISTINCT ?dataset ?organ ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?study_paper ?doi ?lead_author
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

    ?donor ccf:consortium_name ?portal .
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

([View Source](../../queries/ad-hoc/heart-and-lung-datasets.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/heart-and-lung-datasets.csv))

| dataset | organ | cell_count | in_atlas | has_cell_summary | has_extraction_site | has_publication | in_high_quality_portal | portal | study_paper | doi | lead_author |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#A61$atrioventricular%20node | Heart |  | false | false | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#A61$sinoatrial%20node | Heart | 3 | false | true | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#AH1$atrioventricular%20node | Heart |  | false | false | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#AH1$interventricular%20septum | Heart |  | false | false | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| https://api.cellxgene.cziscience.com/dp/v1/collections/3116d060-0a8e-4767-99bb-e866badea1ed#AH1$sinoatrial%20node | Heart |  | false | false | false | true | false | CxG | Spatially resolved multiomics of human cardiac niches | https://doi.org/10.1038/s41586-023-06311-1 | Kazumasa Kanemaru |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="kidney-and-lung-datasets"></a>kidney-and-lung-datasets



<details>
  <summary>View Sparql Query</summary>

```sparql
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


SELECT DISTINCT ?dataset ?organ ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?study_paper ?doi ?lead_author
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

    ?donor ccf:consortium_name ?portal .
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

([View Source](../../queries/ad-hoc/kidney-and-lung-datasets.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/kidney-and-lung-datasets.csv))

| dataset | organ | cell_count | in_atlas | has_cell_summary | has_extraction_site | has_publication | in_high_quality_portal | portal | study_paper | doi | lead_author |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F16$kidney | Kidney | 26 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
| https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F17$kidney | Kidney | 31 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
| https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F35$kidney | Kidney | 21 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
| https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F38$kidney | Kidney | 30 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
| https://api.cellxgene.cziscience.com/dp/v1/collections/120e86b4-1195-48c5-845b-b98054105eec#F41$kidney | Kidney | 28 | false | true | false | true | false | CxG | Spatiotemporal immune zonation of the human kidney | https://doi.org/10.1126/science.aat5031 | Benjamin J. Stewart |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="named-graphs"></a>Test query that finds all named graphs in the loaded SPARQL database (named-graphs)



<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Test query that finds all named graphs in the loaded SPARQL database

SELECT ?graph (COUNT(*) as ?triples) WHERE {
  GRAPH ?graph {
    ?s ?p ?o .
  }
}
GROUP BY ?graph
ORDER BY ?graph

```

([View Source](../../queries/ad-hoc/named-graphs.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/named-graphs.csv))

| graph | triples |
| :--- | :--- |
| https://purl.humanatlas.io/ds-graph/hra-pop-full | 170266 |
| https://purl.humanatlas.io/graph/ccf | 557125 |
| https://purl.humanatlas.io/graph/hra-pop | 1384714 |
| https://purl.humanatlas.io/graph/hra-pop#as-as-sims | 44968 |
| https://purl.humanatlas.io/graph/hra-pop#distances | 3508600 |
| https://purl.humanatlas.io/graph/hra-pop#full-dataset | 170266 |
| https://purl.humanatlas.io/graph/hra-pop#similarities | 47431580 |
| https://purl.humanatlas.io/graph/hra-pop#test-data | 5674333 |


### <a id="provider-breakdown"></a>Cell Summaries By FTU (provider-breakdown)

Computes the cell summaries for each FTU. The Blazegraph version reduces the amount of code duplication.

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Cell Summaries By FTU
#+ description: Computes the cell summaries for each FTU. The Blazegraph version reduces the amount of code duplication.

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>
PREFIX HRApop: <https://purl.humanatlas.io/graph/hra-pop>
PREFIX iftu: <https://hubmapconsortium.github.io/hra-ui/apps/ftu-ui/assets/TEMP/2d-ftu-illustrations.jsonld>

SELECT ?provider (COUNT(DISTINCT(?dataset)) as ?dataset_count) (SUM(?cell_count) as ?cell_count)
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

  ?dataset ccf:has_cell_summary [
    ccf:cell_annotation_method ?tool ;
    ccf:modality ?modality ;
    ccf:has_cell_summary_row [
      ccf:cell_count ?cell_count ;
    ] ;
  ] .
}
GROUP BY ?provider
ORDER BY ?provider

```

([View Source](../../queries/ad-hoc/provider-breakdown.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/provider-breakdown.csv))

| provider | dataset_count | cell_count |
| :--- | :--- | :--- |
| Broad Institute | 82 | 1458402 |
| GTEx | 16 | 267059 |
| NHLBI/LungMap | 9 | 139500 |
| RTI-General Electric | 10 | 13489 |
| TMC-CalTech | 26 | 3042770 |
| TMC-Florida | 14 | 123301 |
| TMC-Stanford | 148 | 2901694 |
| TMC-UCSD | 400 | 16507222 |
| Washington University TMC | 2 | 43735 |


### <a id="rui-location-stats"></a>RUI Location Statistics (rui-location-stats)

Various aggregate statistics around rui locations

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: RUI Location Statistics
#+ description: Various aggregate statistics around rui locations

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
	(COUNT(?rui_location) as ?rui_location_count)
	(SUM(IF(?rui_location_collision_count = 1, 1, 0)) as ?rui_location_one_as_count)
	(SUM(IF(?rui_location_ct_count = 0,1,0)) as ?rui_locations_no_ct)
FROM HRApop:
WHERE {
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
          GROUP BY ?rui_location
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

```

([View Source](../../queries/ad-hoc/rui-location-stats.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/rui-location-stats.csv))

| rui_location_count | rui_location_one_as_count | rui_locations_no_ct |
| :--- | :--- | :--- |
| 331 | 215 | 0 |


### <a id="rui-registered-h5ad-datasets"></a>RUI Registered H5AD Dataset Statistics (rui-registered-h5ad-datasets)

Count of all rui-registered h5ad datasets

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: RUI Registered H5AD Dataset Statistics
#+ description: Count of all rui-registered h5ad datasets

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
FROM HRApop:
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
}

```

([View Source](../../queries/ad-hoc/rui-registered-h5ad-datasets.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/rui-registered-h5ad-datasets.csv))

| rui_registered_h5ad_datasets |
| :--- |
| 707 |


### <a id="sample-description"></a>sample-description



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query Samples and associated description

PREFIX ccf: <http://purl.org/ccf/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT (COUNT(DISTINCT ?sample) AS ?sample_ct) (COUNT(DISTINCT ?description) AS ?description_ct)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  ?sample a ccf:Sample .
  ?sample rdfs:comment ?description .
}
```

([View Source](../../queries/ad-hoc/sample-description.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/sample-description.csv))

| sample_ct | description_ct |
| :--- | :--- |
| 1293 | 505 |


### <a id="sample-info"></a>sample-info



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query the information of Samples

PREFIX ccf: <http://purl.org/ccf/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?sample ?s_sample_type ?s_label ?s_description ?s_link ?rui_location_url ?x_dimension ?y_dimension ?z_dimension ?creator ?creator_first_name ?creator_last_name ?as_id (count(DISTINCT ?cell_id) as ?ct_cnt)
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  ?sample a ccf:Sample.
  ?sample ccf:sample_type ?s_sample_type.
  ?sample rdfs:label ?s_label.
  ?sample rdfs:comment ?s_description.
  ?sample ccf:url ?s_link.
  ?sample ccf:has_registration_location ?rui_location_url.
  ?rui_location_url ccf:x_dimension ?x_dimension.
  ?rui_location_url ccf:y_dimension ?y_dimension.
  ?rui_location_url ccf:z_dimension ?z_dimension.
  ?rui_location_url dcterms:creator ?creator.
  ?rui_location_url ccf:creator_first_name ?creator_first_name.
  ?rui_location_url ccf:creator_last_name ?creator_last_name.
  


  OPTIONAL {
      ?rui_location_url ccf:has_collision_summary ?collision_summary.
      ?collisionsummary ccf:has_collision_item ?collision.
      ?collision ccf:reference_organ ?reference_organ.
      ?collision ccf:as_3d_id ?as_3d_id.
      ?collision ccf:as_id ?as_id.
      ?collision ccf:as_label ?as_label.

      ?rui_location_url ccf:has_cell_summary ?cell_summary .
      ?cell_summary ccf:has_cell_summary_row ?cell_summary_row .
      ?cell_summary_row ccf:cell_id ?cell_id .
    }
}
GROUP BY ?sample ?s_sample_type ?s_label ?s_description ?s_link ?rui_location_url ?x_dimension ?y_dimension ?z_dimension ?creator ?creator_first_name ?creator_last_name ?as_id
```

([View Source](../../queries/ad-hoc/sample-info.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/sample-info.csv))

| sample | s_sample_type | s_label | s_description | s_link | rui_location_url | x_dimension | y_dimension | z_dimension | creator | creator_first_name | creator_last_name | as_id | ct_cnt |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://entity.api.hubmapconsortium.org/entities/8d2acd5b31c953a5507da41df918ec2e | Tissue Block | Registered 10/19/2021, daniel cotter, TMC-Stanford | 20 x 50 x 5 millimeter, 1 millimeter, 1 Sections | https://portal.hubmapconsortium.org/browse/sample/8d2acd5b31c953a5507da41df918ec2e | http://purl.org/ccf/1.5/fc556dba-cfb0-490d-913b-d76717762142 | 20 | 50 | 5 | Yiing Lin | Yiing | Lin |  | 0 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D1$heart%20left%20ventricle_Block | Tissue Block | Registered 10/15/2021, Michela Noseda, Broad Institute | 15 x 14 x 14 millimeter, 14 millimeter | https://doi.org/10.1038/s41586-020-2797-4 | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | 15 | 14 | 14 | Michela Noseda | Michela | Noseda |  | 0 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$heart%20left%20ventricle_Block | Tissue Block | Registered 10/15/2021, Michela Noseda, Broad Institute | 15 x 14 x 14 millimeter, 14 millimeter | https://doi.org/10.1038/s41586-020-2797-4 | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | 15 | 14 | 14 | Michela Noseda | Michela | Noseda |  | 0 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D4$heart%20left%20ventricle_Block | Tissue Block | Registered 10/15/2021, Michela Noseda, Broad Institute | 15 x 14 x 14 millimeter, 14 millimeter | https://doi.org/10.1038/s41586-020-2797-4 | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | 15 | 14 | 14 | Michela Noseda | Michela | Noseda |  | 0 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D5$heart%20left%20ventricle_Block | Tissue Block | Registered 10/15/2021, Michela Noseda, Broad Institute | 15 x 14 x 14 millimeter, 14 millimeter | https://doi.org/10.1038/s41586-020-2797-4 | http://purl.org/ccf/1.5/2156f837-2ab2-4305-8e7f-8084249e91cd | 15 | 14 | 14 | Michela Noseda | Michela | Noseda |  | 0 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="sc-and-spatial-count"></a>sc-and-spatial-count



<details>
  <summary>View Sparql Query</summary>

```sparql
# Count the unique number of datasets by modality
PREFIX ccf: <http://purl.org/ccf/>

SELECT (COUNT(DISTINCT ?dataset) AS ?dataset_ct) ?modality 
FROM <https://purl.humanatlas.io/graph/hra-pop>

WHERE {
    ?dataset a ccf:Dataset;
  ccf:has_cell_summary 
      [
  		ccf:modality ?modality
    ]
    
}

GROUP BY ?modality
```

([View Source](../../queries/ad-hoc/sc-and-spatial-count.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/sc-and-spatial-count.csv))

| dataset_ct | modality |
| :--- | :--- |
| 633 | sc_bulk |
| 74 | spatial |


### <a id="se-slices"></a>se-slices



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query the list of Spatial Entities and slice_count

PREFIX ccf: <http://purl.org/ccf/>

SELECT DISTINCT ?spatial_entity ?slice_count
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
  ?spatial_entity ccf:slice_count ?slice_count
}

```

([View Source](../../queries/ad-hoc/se-slices.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/se-slices.csv))

| spatial_entity | slice_count |
| :--- | :--- |
| http://purl.org/ccf/1.5/59867860-9efb-4b03-9405-802bd852e351 | 26 |
| http://purl.org/ccf/1.5/82572eb0-a95a-4a29-88d3-98c53fa565b9 | 26 |
| http://purl.org/ccf/1.5/8ddd44c4-c431-4eaf-82f1-05c62c7b6d95 | 26 |
| http://purl.org/ccf/1.5/9e569bdb-0948-48ae-88d8-c21161ce3d65 | 26 |
| http://purl.org/ccf/1.5/b1c840c9-4f96-4d2c-8471-f5c2ed64b4e4 | 26 |
| ... | ... |


### <a id="spatial-and-bulk-datasets-breakdown"></a>spatial-and-bulk-datasets-breakdown



<details>
  <summary>View Sparql Query</summary>

```sparql
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

SELECT ?organ ?side ?sex ?modality ?status (COUNT(DISTINCT(?dataset)) as ?dataset_cnt) (SUM(?cell_count) as ?cell_cnt)
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
    ?donor ccf:consortium_name ?portal .
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
    SELECT ?dataset ?modality (MAX(?cell_count_by_tool) as ?cell_count)
    WHERE {
      {
        SELECT ?dataset ?modality ?tool (COUNT(?count) as ?cell_count_by_tool)
        WHERE {
          {
            GRAPH HRApop: {
              ?dataset ccf:has_cell_summary [
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
            GRAPH hra-pop:test-data {
              ?dataset ccf:has_cell_summary [
                ccf:modality ?modality ;
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
        }
        GROUP BY ?dataset ?modality ?tool
      }
    }
    GROUP BY ?dataset ?modality
  }

  BIND (IF(BOUND(?ruiOrganIri), ?ruiOrganIri,
    IF(BOUND(?reportedOrganIri), ?reportedOrganIri, "N/A")) as ?organ_id)

  BIND (STR(IF(BOUND(?ruiOrganLabel), ?ruiOrganLabel,
    IF(BOUND(?reportedOrganLabel), ?reportedOrganLabel, ?reportedOrganIri))) as ?organLabel)

  BIND (LCASE(IF(BOUND(?ruiOrganSex), ?ruiOrganSex,
    IF(BOUND(?reportedSex), ?reportedSex, "unknown"))) as ?sex)

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

  BIND(IF(?in_atlas, "Atlas", "Non-Atlas") as ?status)
  FILTER(?has_cell_summary)
}
GROUP BY ?organ ?side ?sex ?modality ?status
ORDER BY ?organ ?side ?sex ?modality ?status

```

([View Source](../../queries/ad-hoc/spatial-and-bulk-datasets-breakdown.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/spatial-and-bulk-datasets-breakdown.csv))

| organ | side | sex | modality | status | dataset_cnt | cell_cnt |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| blood |  | female | sc_bulk | Non-Atlas | 1332 | 31040 |
| blood |  | male | sc_bulk | Non-Atlas | 1037 | 24201 |
| blood |  | unknown | sc_bulk | Non-Atlas | 35 | 761 |
| blood vasculature |  | female | sc_bulk | Non-Atlas | 5 | 74 |
| blood vasculature |  | male | sc_bulk | Non-Atlas | 5 | 100 |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="spatial-and-bulk-datasets"></a>spatial-and-bulk-datasets



<details>
  <summary>View Sparql Query</summary>

```sparql
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

SELECT DISTINCT ?dataset ?modality ?sex ?organ ?side ?organ_id ?cell_count ?in_atlas ?has_cell_summary ?has_extraction_site ?has_publication ?in_high_quality_portal ?portal ?study_paper ?doi ?lead_author
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
    ?donor ccf:consortium_name ?portal .
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
    SELECT ?dataset ?modality (MAX(?cell_count_by_tool) as ?cell_count)
    WHERE {
      {
        SELECT ?dataset ?modality ?tool (COUNT(?count) as ?cell_count_by_tool)
        WHERE {
          {
            GRAPH HRApop: {
              ?dataset ccf:has_cell_summary [
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
            GRAPH hra-pop:test-data {
              ?dataset ccf:has_cell_summary [
                ccf:modality ?modality ;
                ccf:cell_annotation_method ?tool ;
                ccf:has_cell_summary_row [
                  ccf:cell_count ?count ;
                ]
              ];
            }
          }
        }
        GROUP BY ?dataset ?modality ?tool
      }
    }
    GROUP BY ?dataset ?modality
  }

  BIND (IF(BOUND(?ruiOrganIri), ?ruiOrganIri,
    IF(BOUND(?reportedOrganIri), ?reportedOrganIri, "N/A")) as ?organ_id)

  BIND (STR(IF(BOUND(?ruiOrganLabel), ?ruiOrganLabel,
    IF(BOUND(?reportedOrganLabel), ?reportedOrganLabel, ?reportedOrganIri))) as ?organLabel)

  BIND (LCASE(IF(BOUND(?ruiOrganSex), ?ruiOrganSex,
    IF(BOUND(?reportedSex), ?reportedSex, "unknown"))) as ?sex)

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

  FILTER(?has_cell_summary)
}
ORDER BY ?dataset

```

([View Source](../../queries/ad-hoc/spatial-and-bulk-datasets.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/spatial-and-bulk-datasets.csv))

| dataset | modality | sex | organ | side | organ_id | cell_count | in_atlas | has_cell_summary | has_extraction_site | has_publication | in_high_quality_portal | portal | study_paper | doi | lead_author |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-LN$lymph%20node | sc_bulk | unknown | lymph node |  | http://purl.obolibrary.org/obo/UBERON_0000029 | 94 | false | true | false | true | false | CxG | Spatially mapping T cell receptors and transcriptomes | https://doi.org/10.1016/j.immuni.2022.09.002 | Sophia Liu |
| https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-TON$tonsil | sc_bulk | unknown | lung |  | http://purl.obolibrary.org/obo/UBERON_0001004 | 47 | false | true | false | true | false | CxG | Spatially mapping T cell receptors and transcriptomes | https://doi.org/10.1016/j.immuni.2022.09.002 | Sophia Liu |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp1$alveolus%20of%20lung | sc_bulk | female | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 32 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp2$alveolus%20of%20lung | sc_bulk | female | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 33 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| https://api.cellxgene.cziscience.com/dp/v1/collections/03cdc7f4-bd08-49d0-a395-4487c0e5a168#Emp3$alveolus%20of%20lung | sc_bulk | female | lung |  | http://purl.obolibrary.org/obo/UBERON_0002048 | 32 | false | true | false | true | false | CxG | Emphysema Cell Atlas | https://doi.org/10.1016/j.immuni.2023.01.032 | Chaoqun Wang |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="spatial-enity"></a>spatial-enity



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query the list of Spatial Entities in hra-pop

PREFIX ccf: <http://purl.org/ccf/>

SELECT DISTINCT ?spatial_entity
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
    ?spatial_entity a ccf:SpatialEntity.
}
```

([View Source](../../queries/ad-hoc/spatial-enity.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/spatial-enity.csv))

| spatial_entity |
| :--- |
| http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 |
| http://purl.org/ccf/1.5/0364c64a-5b0a-493f-a5ee-3adfc837211c |
| http://purl.org/ccf/1.5/04baf323-eda0-4f72-bea1-aa943aa70894 |
| http://purl.org/ccf/1.5/05310dee-180d-4e59-8c58-b101d12f4c73 |
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc |
| ... |


### <a id="spatial-placement"></a>spatial-placement



<details>
  <summary>View Sparql Query</summary>

```sparql
# Query the list of Spatial Placements in hra-pop

PREFIX ccf: <http://purl.org/ccf/>

SELECT DISTINCT ?spatial_placement
FROM <https://purl.humanatlas.io/graph/hra-pop>
FROM <https://purl.humanatlas.io/ds-graph/hra-pop-full>
WHERE {
    ?spatial_placement a ccf:SpatialPlacement.
}


```

([View Source](../../queries/ad-hoc/spatial-placement.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/spatial-placement.csv))

| spatial_placement |
| :--- |
| http://purl.org/ccf/1.5/61d8f7d6-9097-4de0-9d46-4e41de2f2f4f_placement |
| http://purl.org/ccf/1.5/69658d04-5cec-4b57-92d0-20f69927840c_placement |
| http://purl.org/ccf/1.5/69d8165e-dce4-4144-9985-8a8f8ae21b4c_placement |
| http://purl.org/ccf/1.5/6ac1278c-a82d-4f1d-aa17-5c52d9f31dc2_placement |
| http://purl.org/ccf/1.5/6af30778-5444-4431-8617-2419778ad873_placement |
| ... |


### <a id="unmapped-cell-ids"></a>unmapped-cell-ids



<details>
  <summary>View Sparql Query</summary>

```sparql
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
FROM <https://purl.org/ccf/releases/2.2.1/ccf.owl>
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

([View Source](../../queries/ad-hoc/unmapped-cell-ids.rq))
</details>

#### Results ([View CSV File](reports/ad-hoc/unmapped-cell-ids.csv))

| tool | cell_id | dataset_count |
| :--- | :--- | :--- |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_descending-vasa-recta-endothelial | 269 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_monocyte-derived-m | 124 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_non-classical-monocytes | 123 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_peritubular-capilary-endothelial | 259 |
| azimuth | https://purl.org/ccf/ASCTB-TEMP_transitional-club-at2 | 122 |
| ... | ... | ... |


### <a id="application-a1"></a>application-a1



<details>
  <summary>View Sparql Query</summary>

```sparql
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


SELECT DISTINCT ?sample ?rui_location ?organ ?organId ?tool ?modality ?cell_id ?cell_label ?cell_count ?percentage_of_total
WHERE {
  GRAPH hra-pop:test-data {
    ?sample ccf:has_registration_location ?rui_location .
    ?rui_location ccf:has_cell_summary [
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

    BIND(EXISTS {
      GRAPH HRApop: {
        [] ccf:has_registration_location ?rui_location .
      }
    } as ?in_atlas)
  }

  GRAPH CCF: {
    ?refOrgan ccf:representation_of ?organIri .
    ?organIri rdfs:label ?organ .

    BIND(REPLACE(REPLACE(STR(?organIri), 'http://purl.obolibrary.org/obo/UBERON_', 'UBERON:'), 'http://purl.org/sig/ont/fma/fma', 'FMA:') as ?organId)
  }

  FILTER (?in_atlas != TRUE)
}
ORDER BY ?sample DESC(?cell_count)

```

([View Source](../../queries/atlas/application-a1.rq))
</details>

#### Results ([View CSV File](reports/atlas/application-a1.csv))

| sample | rui_location | organ | organId | tool | modality | cell_id | cell_label | cell_count | percentage_of_total |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| http://purl.org/ccf/1.5/omap-1#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/70c2341b-2506-4b86-99bb-8e65f5015137 | mesenteric lymph node | UBERON:0002509 | popv | sc_bulk | http://purl.obolibrary.org/obo/CL_0000236 | B cell | 1884.517896 | 0.4535748321331516 |
| http://purl.org/ccf/1.5/omap-1#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/70c2341b-2506-4b86-99bb-8e65f5015137 | mesenteric lymph node | UBERON:0002509 | popv | sc_bulk | http://purl.obolibrary.org/obo/CL_0000084 | T cell | 562.053444 | 0.135277726496135 |
| http://purl.org/ccf/1.5/omap-1#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/70c2341b-2506-4b86-99bb-8e65f5015137 | mesenteric lymph node | UBERON:0002509 | popv | sc_bulk | http://purl.obolibrary.org/obo/CL_0001050 | effector CD8-positive, alpha-beta T cell | 501.05988 | 0.1205975021208592 |
| http://purl.org/ccf/1.5/omap-1#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/70c2341b-2506-4b86-99bb-8e65f5015137 | mesenteric lymph node | UBERON:0002509 | popv | sc_bulk | http://purl.obolibrary.org/obo/CL_0001044 | effector CD4-positive, alpha-beta T cell | 496.8608960000001 | 0.119586870453751 |
| http://purl.org/ccf/1.5/omap-1#Donor1_TissueBlock1 | http://purl.org/ccf/1.5/70c2341b-2506-4b86-99bb-8e65f5015137 | mesenteric lymph node | UBERON:0002509 | popv | sc_bulk | http://purl.obolibrary.org/obo/CL_0001065 | innate lymphoid cell | 358.509044 | 0.08628768121314599 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

## atlas

### <a id="application-a2p1"></a>application-a2p1



<details>
  <summary>View Sparql Query</summary>

```sparql
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


SELECT ?dataset ?reported_organ ?tool ?modality ?as ?as_tool ?similarity
WHERE {
  GRAPH hra-pop:similarities {
    {
      [] ccf:modality ?modality ;
          ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?as_tool ;
          ccf:cell_source_a ?dataset ;
          ccf:cell_source_b ?as ;
          ccf:similarity ?similarity .
    }
    UNION 
    {
      [] ccf:modality ?modality ;
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

| dataset | reported_organ | tool | modality | as | as_tool | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/17481d16-ee44-49e5-bcf0-28c0780d8c4a#2119$ileum | http://purl.obolibrary.org/obo/UBERON_0002108 | popv | sc_bulk | http://purl.org/sig/ont/fma/fma7386 | popv | 0.20427132170168977 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/17481d16-ee44-49e5-bcf0-28c0780d8c4a#2119$ileum | http://purl.obolibrary.org/obo/UBERON_0002108 | popv | sc_bulk | http://purl.org/sig/ont/fma/fma7398 | popv | 0.23068336243602566 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/17481d16-ee44-49e5-bcf0-28c0780d8c4a#2119$ileum | http://purl.obolibrary.org/obo/UBERON_0002108 | popv | sc_bulk | http://purl.org/sig/ont/fma/fma14930 | popv | 0.6510493070679673 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/17481d16-ee44-49e5-bcf0-28c0780d8c4a#2119$ileum | http://purl.obolibrary.org/obo/UBERON_0002108 | popv | sc_bulk | http://purl.org/sig/ont/fma/fma14928 | popv | 0.6314288549335451 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/17481d16-ee44-49e5-bcf0-28c0780d8c4a#2119$ileum | http://purl.obolibrary.org/obo/UBERON_0002108 | popv | sc_bulk | http://purl.org/sig/ont/fma/fma7360 | popv | 0.13751622587416143 |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="application-a2p2"></a>application-a2p2



<details>
  <summary>View Sparql Query</summary>

```sparql
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
      ccf:cell_annotation_method ?tool ;
      ccf:modality ?modality ;
    ] .

    OPTIONAL { ?dataset ccf:organ_id ?reported_organ . }
  }

  {
    SELECT ?dataset ?tool ?modality (COUNT(DISTINCT(?dataset_cell_label)) as ?total_ds_cell_types)
    WHERE {
      GRAPH hra-pop:test-data {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
              ccf:cell_label ?dataset_cell_label ;
          ]
        ] .
      }
    }
    GROUP BY ?dataset ?tool ?modality
  }

  {
    SELECT ?dataset ?as ?tool ?modality (COUNT(DISTINCT(?cell_label)) as ?shared_ds_cell_types)
    WHERE {
      GRAPH hra-pop:test-data {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
              ccf:cell_id ?cell_id ;
              ccf:cell_label ?cell_label ;
          ]
        ] .

        GRAPH HRApop: {
          ?as ccf:has_cell_summary [
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
    GROUP BY ?dataset ?as ?tool ?modality
  }
}
ORDER BY ?dataset DESC(?pct_hra_ct_overlap)

```

([View Source](../../queries/atlas/application-a2p2.rq))
</details>

#### Results ([View CSV File](reports/atlas/application-a2p2.csv))

| dataset | reported_organ | tool | modality | as | pct_hra_ct_overlap |
| :--- | :--- | :--- | :--- | :--- | :--- |
| http://purl.org/ccf/1.5/000408ff-5c1a-4f08-9565-9175e32c47ac |  | popv | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0002078 | 0.95 |
| http://purl.org/ccf/1.5/000408ff-5c1a-4f08-9565-9175e32c47ac |  | popv | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0002097 | 0.95 |
| http://purl.org/ccf/1.5/000408ff-5c1a-4f08-9565-9175e32c47ac |  | popv | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0002115 | 0.95 |
| http://purl.org/ccf/1.5/000408ff-5c1a-4f08-9565-9175e32c47ac |  | popv | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0002194 | 0.95 |
| http://purl.org/ccf/1.5/000408ff-5c1a-4f08-9565-9175e32c47ac |  | popv | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0010397 | 0.95 |
| ... | ... | ... | ... | ... | ... |


### <a id="application-a2p3"></a>application-a2p3



<details>
  <summary>View Sparql Query</summary>

```sparql
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


SELECT ?dataset ?reported_organ ?tool ?modality ?corridor ?corridor_tool ?similarity 
WHERE {
  GRAPH hra-pop:similarities {
    {
      [] ccf:modality ?modality ;
         ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?corridor_tool ;
         ccf:cell_source_a ?dataset ;
         ccf:cell_source_b ?corridor ;
         ccf:similarity ?similarity .
    } UNION {
      [] ccf:modality ?modality ;
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

| dataset | reported_organ | tool | modality | corridor | corridor_tool | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-TON$tonsil | http://purl.obolibrary.org/obo/UBERON_0001004 | azimuth | sc_bulk | http://purl.org/ccf/1.5/e7d21a48-63dd-45d8-aedd-e4abed52d5d8 | azimuth | 0.5259850807566603 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-TON$tonsil | http://purl.obolibrary.org/obo/UBERON_0001004 | azimuth | sc_bulk | http://purl.org/ccf/1.5/76c77da1-c978-48fe-b30b-aeff33a5d054 | azimuth | 0.48525033417172064 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-TON$tonsil | http://purl.obolibrary.org/obo/UBERON_0001004 | azimuth | sc_bulk | http://purl.org/ccf/1.5/f1c3f780-6627-4c56-aada-97cb158f540d | azimuth | 0.4783313127234715 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-TON$tonsil | http://purl.obolibrary.org/obo/UBERON_0001004 | azimuth | sc_bulk | http://purl.org/ccf/1.5/527bfb3c-5cea-4131-a73a-72687feb8024 | azimuth | 0.47253938277490665 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/02b01703-bf1b-48de-b99a-23bef8cccc81#VS-TON$tonsil | http://purl.obolibrary.org/obo/UBERON_0001004 | azimuth | sc_bulk | http://purl.org/ccf/1.5/f4a116d7-f844-4d4a-bc8f-632151125313 | azimuth | 0.4719911524310897 |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="application-a2p4"></a>application-a2p4



<details>
  <summary>View Sparql Query</summary>

```sparql
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

SELECT ?dataset ?reported_organ ?tool ?modality ?atlas_dataset ?atlas_dataset_tool ?similarity 
WHERE {
  GRAPH hra-pop:similarities {
    {
      [] ccf:modality ?modality ;
         ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?atlas_dataset_tool ;
         ccf:cell_source_a ?dataset ;
         ccf:cell_source_b ?atlas_dataset ;
         ccf:similarity ?similarity .
    } UNION {
      [] ccf:modality ?modality ;
         ccf:cell_source_a_tool ?atlas_dataset_tool ;
          ccf:cell_source_b_tool ?tool ;
         ccf:cell_source_a ?atlas_dataset ;
         ccf:cell_source_b ?dataset ;
         ccf:similarity ?similarity .
    }

    FILTER EXISTS  {
      GRAPH HRApop: {
        ?atlas_dataset a ccf:Dataset ;
          ccf:has_cell_summary [];
      }
    }
    
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
#ORDER BY ?dataset DESC(?similarity)

```

([View Source](../../queries/atlas/application-a2p4.rq))
</details>

#### Columns
| dataset | reported_organ | tool | modality | atlas_dataset | atlas_dataset_tool | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ... | ... | ... | ... | ... | ... | ... |

### <a id="figure-as-as-sim"></a>figure-as-as-sim



<details>
  <summary>View Sparql Query</summary>

```sparql
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

SELECT DISTINCT ?organId ?organ ?modality ?as1_label ?as2_label ?cosine_sim ?as1_dataset_count ?as2_dataset_count

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
  SELECT ?modality ?as1 ?as2 (AVG(?similarity) as ?cosine_sim)
  WHERE {
    GRAPH CCF: {
      [] ccf:representation_of ?as1 .
      [] ccf:representation_of ?as2 .
    }

    GRAPH hra-pop:as-as-sims {
      [] ccf:modality ?modality ;
        ccf:cell_source_a ?as1 ;
        ccf:cell_source_b ?as2 ;
        ccf:similarity ?similarity .
    }
  }
  GROUP BY ?modality ?as1 ?as2
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

| organId | organ | modality | as1_label | as2_label | cosine_sim | as1_dataset_count | as2_dataset_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UBERON:0000059 | large intestine | spatial | ascending colon | sigmoid colon | 0.9814216913943868 | 18 | 19 |
| UBERON:0000059 | large intestine | sc_bulk | ascending colon | sigmoid colon | 0.9244812229982519 | 18 | 19 |
| UBERON:0000059 | large intestine | sc_bulk | transverse colon | sigmoid colon | 0.9375048309865631 | 17 | 19 |
| UBERON:0000059 | large intestine | spatial | transverse colon | sigmoid colon | 0.96189869064484 | 17 | 19 |
| UBERON:0000059 | large intestine | spatial | rectum | transverse colon | 0.9631133090258124 | 13 | 17 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="figure-f4"></a>figure-f4



<details>
  <summary>View Sparql Query</summary>

```sparql
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
| FMA:57987 | Set of lactiferous glands in right breast | Female | sc_bulk | popv | 9 | 1 | 1 | 3 | 4 |
| UBERON:0000948 | heart | Female | sc_bulk | azimuth | 17 | 6 | 11 | 48 | 96 |
| UBERON:0000948 | heart | Female | sc_bulk | popv | 17 | 6 | 11 | 48 | 96 |
| UBERON:0000948 | heart | Female | sc_bulk | celltypist | 17 | 6 | 11 | 48 | 96 |
| UBERON:0000948 | heart | Male | sc_bulk | popv | 17 | 5 | 18 | 67 | 155 |
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
| HuBMAP |  |  |  |  |  | Male | 23 |  | White | 23.1 | respiratory system | 3d-vh-m-lung.glb |  | 1500 | 4 | 2 | lung; left lung; upper lobe of left lung; Left apical bronchopulmonary segment | Left posterior bronchopulmonary segment; Left apical bronchopulmonary segment | UBERON:0002048; UBERON:0002168; UBERON:0008952; FMA:7385 | FMA:7386; FMA:7385 |  |  | https://portal.hubmapconsortium.org/browse/dataset/93e233e001463fea35d8617c34da098c |  | azimuth |  | 26947 | 100 |  |
| HuBMAP |  |  |  |  |  | Male | 23 |  | White | 23.1 | respiratory system | VH_M_Lung.glb |  | 1500 | 4 | 2 | lung; left lung; upper lobe of left lung; Left apical bronchopulmonary segment | Left posterior bronchopulmonary segment; Left apical bronchopulmonary segment | UBERON:0002048; UBERON:0002168; UBERON:0008952; FMA:7385 | FMA:7386; FMA:7385 |  |  | https://portal.hubmapconsortium.org/browse/dataset/93e233e001463fea35d8617c34da098c |  | azimuth |  | 26947 | 100 |  |
| HuBMAP |  |  |  |  |  | Male | 23 |  | White | 23.1 | respiratory system | 3d-vh-m-lung.glb |  | 1500 | 4 | 2 | lung; left lung; upper lobe of left lung; Left apical bronchopulmonary segment | Left posterior bronchopulmonary segment; Left apical bronchopulmonary segment | UBERON:0002048; UBERON:0002168; UBERON:0008952; FMA:7385 | FMA:7386; FMA:7385 |  |  | https://portal.hubmapconsortium.org/browse/dataset/93e233e001463fea35d8617c34da098c |  | popv |  | 26947 | 100 |  |
| HuBMAP |  |  |  |  |  | Male | 23 |  | White | 23.1 | respiratory system | VH_M_Lung.glb |  | 1500 | 4 | 2 | lung; left lung; upper lobe of left lung; Left apical bronchopulmonary segment | Left posterior bronchopulmonary segment; Left apical bronchopulmonary segment | UBERON:0002048; UBERON:0002168; UBERON:0008952; FMA:7385 | FMA:7386; FMA:7385 |  |  | https://portal.hubmapconsortium.org/browse/dataset/93e233e001463fea35d8617c34da098c |  | popv |  | 26947 | 100 |  |
| HuBMAP |  |  |  |  |  | Male |  |  |  |  | respiratory system | 3d-vh-m-lung.glb |  | 1000 | 4 | 2 | lung; left lung; upper lobe of left lung; Left posterior bronchopulmonary segment | Left posterior bronchopulmonary segment; Left apical bronchopulmonary segment | UBERON:0002048; UBERON:0002168; UBERON:0008952; FMA:7386 | FMA:7386; FMA:7385 |  |  | https://portal.hubmapconsortium.org/browse/dataset/a0bfd09a989530ba348d64499adf6a6b |  | azimuth |  | 10493 | 80 |  |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="table-s2"></a>Table S2 (table-s2)

Anatomical Structures in HRA v1.3, their volume, and predicted CT populations

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S2
#+ description: Anatomical Structures in HRA v1.3, their volume, and predicted CT populations

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
| VHFHeart | UBERON:0000948 | Posteromedial head of posterior papillary muscle of left ventricle | 4401.498768462402 | 0 | 1 | 36 | 0 | 68 | 24 | 0 | 92 | innate lymphoid cell; cardiac endothelial cell; cardiac muscle cell; dendritic cell, human; hepatocyte; B cell; capillary endothelial cell; endocardial cell; endothelial cell; endothelial cell of artery; endothelial cell of lymphatic vessel; kidney interstitial fibroblast; macrophage; endothelial cell of venule; fat cell; natural killer cell; pericyte; Schwann cell; smooth muscle cell; mast cell; mesothelial cell; myeloid cell; T cell; gamma-delta T cell; CD8+T_trans; Purkinje_cell; EC5_art; CD4+T_Th1; CD4+T_Th2; EC7_endocardial; PC1_vent; regular ventricular cardiac myocyte; Adip1; FB3; EC8_ln; CD14+Mo; PC4_CMC-like; LYVE1+IGF1+MP; MoMP; EC2_cap; NK_CD16hi; vCM4; T/NK_cycling; FB2; NC1_glial; CD4+T_Th17; FB4_activated; EC10_CMC-like; aCM2; Adip2; vCM2; aCM3; FB1; Mast; SMC1_basic; CD4+T_Tfh; SAN_P_cell; CD8+T_te; FB5; Neut; CD4+T_act; EC4_immune; LYVE1+TIMD4+MP; LYVE1+MP_cycling; CD4+T_naive; B; PC2_atria; FB6; aCM5; MAIT-like; CD4+T_reg; CD8+T_em; aCM1; B_plasma; SMC2_art; Adip4; CD8+T_cytox; vCM1; EC3_cap; NC3_glial; NC2_glial_NGF+; vCM3_stressed; NK_CD56hi; EC9_FB-like; PC3_str; EC6_ven; vCM5; CD16+Mo; EC1_cap; Adip3; regular atrial cardiac myocyte; fibroblast of cardiac tissue | 267.53829321663019693654 |
| VHFHeart | UBERON:0000948 | heart left ventricle | 229312.7801882646 | 102 | 8 | 139 | 0 | 75 | 24 | 23 | 99 | innate lymphoid cell; cardiac endothelial cell; cardiac muscle cell; dendritic cell, human; capillary endothelial cell; hepatocyte; B cell; endocardial cell; endothelial cell of artery; endothelial cell; kidney interstitial fibroblast; endothelial cell of lymphatic vessel; endothelial cell of venule; fat cell; macrophage; mast cell; mesothelial cell; myeloid cell; natural killer cell; pericyte; Schwann cell; smooth muscle cell; T/NK_cycling; CD4+T_Th17; aCM2; Adip2; Meso; FB2; EC8_ln; LYVE1+MP_cycling; FB4_activated; FB5; NC1_glial; NC2_glial_NGF+; EC10_CMC-like; gamma-delta T cell; regular ventricular cardiac myocyte; regular atrial cardiac myocyte; fibroblast of cardiac tissue; SMC1_basic; LYVE1+TIMD4+MP; vCM3_stressed; Neut; EC4_immune; aCM3; T cell; EC9_FB-like; Adip1; PC1_vent; FB3; Mast; CD16+Mo; CD8+T_em; CD4+T_naive; vCM1; CD8+T_trans; aCM4; NK_CD16hi; EC7_endocardial; PC4_CMC-like; PC3_str; SMC2_art; PC2_atria; EC2_cap; Purkinje_cell; EC5_art; CD4+T_Th1; CD4+T_Th2; vCM4; EC3_cap; EC6_ven; EC1_cap; MoMP; FB1; vCM2; CD8+T_cytox; LYVE1+IGF1+MP; CD4+T_act; B_plasma; B; aCM1; CD14+Mo; MAIT-like; CD8+T_te; NK_CD56hi; CD4+T_Tfh; SAN_P_cell; Adip3; vCM5; Adip4; FB6; NC6_schwann; NC4_glial; AVN_bundle_cell; AVN_P_cell; aCM5; NC3_glial; CD4+T_reg; NC5_glial | 323.17252198067932390035 |
| VHFHeart | UBERON:0000948 | heart right ventricle | 78714.75572486871 | 49 | 3 | 86 | 0 | 71 | 24 | 22 | 95 | mast cell; mesothelial cell; myeloid cell; natural killer cell; pericyte; kidney interstitial fibroblast; dendritic cell, human; hepatocyte; cardiac muscle cell; B cell; capillary endothelial cell; endocardial cell; endothelial cell; innate lymphoid cell; cardiac endothelial cell; endothelial cell of lymphatic vessel; EC9_FB-like; regular atrial cardiac myocyte; MAIT-like; aCM5; CD4+T_reg; aCM1; NC3_glial; fibroblast of cardiac tissue; endothelial cell of venule; fat cell; macrophage; endothelial cell of artery; Schwann cell; SAN_P_cell; vCM1; CD8+T_em; EC6_ven; Adip3; B_plasma; PC2_atria; vCM5; Adip4; SMC2_art; B; CD8+T_cytox; CD14+Mo; LYVE1+IGF1+MP; MoMP; T/NK_cycling; FB2; NK_CD56hi; AVN_P_cell; gamma-delta T cell; NC2_glial_NGF+; EC4_immune; CD4+T_naive; CD8+T_trans; Purkinje_cell; EC5_art; CD4+T_Th1; CD4+T_Th2; EC7_endocardial; PC1_vent; regular ventricular cardiac myocyte; Mast; Adip1; FB3; EC8_ln; EC2_cap; LYVE1+TIMD4+MP; CD16+Mo; FB5; LYVE1+MP_cycling; smooth muscle cell; T cell; EC1_cap; NK_CD16hi; FB6; SMC1_basic; EC3_cap; PC3_str; vCM4; NC1_glial; CD4+T_Th17; FB4_activated; EC10_CMC-like; aCM2; Adip2; PC4_CMC-like; vCM2; aCM3; FB1; CD4+T_Tfh; CD8+T_te; Neut; CD4+T_act; Meso; aCM4; vCM3_stressed | 263.56526520051746442432 |
| VHFHeart | UBERON:0000948 | interventricular septum | 65894.53465930313 | 0 | 2 | 37 | 0 | 68 | 24 | 19 | 92 | cardiac muscle cell; cardiac endothelial cell; dendritic cell, human; hepatocyte; MoMP; EC2_cap; NK_CD16hi; vCM4; gamma-delta T cell; CD8+T_trans; Purkinje_cell; EC5_art; CD4+T_Th1; CD4+T_Th2; EC7_endocardial; PC1_vent; regular ventricular cardiac myocyte; Adip1; FB3; EC8_ln; CD14+Mo; PC4_CMC-like; LYVE1+IGF1+MP; T/NK_cycling; FB2; NC1_glial; CD4+T_Th17; FB4_activated; EC10_CMC-like; aCM2; Adip2; vCM2; aCM3; FB1; Mast; SMC1_basic; CD4+T_Tfh; SAN_P_cell; CD8+T_te; FB5; Neut; CD4+T_act; EC4_immune; vCM5; LYVE1+TIMD4+MP; LYVE1+MP_cycling; smooth muscle cell; capillary endothelial cell; endocardial cell; endothelial cell; endothelial cell of artery; endothelial cell of lymphatic vessel; endothelial cell of venule; fat cell; kidney interstitial fibroblast; macrophage; mast cell; mesothelial cell; myeloid cell; B cell; regular atrial cardiac myocyte; T cell; pericyte; Schwann cell; PC3_str; NC2_glial_NGF+; CD4+T_naive; CD16+Mo; EC1_cap; Adip3; EC6_ven; PC2_atria; B_plasma; Adip4; vCM1; FB6; MAIT-like; SMC2_art; B; aCM5; CD4+T_reg; CD8+T_em; aCM1; CD8+T_cytox; EC3_cap; NC3_glial; vCM3_stressed; NK_CD56hi; EC9_FB-like; fibroblast of cardiac tissue; innate lymphoid cell; natural killer cell | 304.71734083316030880160 |
| VHFHeart | UBERON:0000948 | left cardiac atrium | 18115.96846829785 | 49 | 1 | 49 | 0 | 70 | 23 | 22 | 93 | EC8_ln; aCM4; FB4_activated; NK_CD16hi; Meso; NK_CD56hi; EC7_endocardial; aCM1; CD8+T_em; EC2_cap; CD8+T_cytox; LYVE1+MP_cycling; vCM4; cardiac muscle cell; vCM1; fibroblast of cardiac tissue; NC6_schwann; Purkinje_cell; CD4+T_Th2; Neut; CD4+T_Th1; aCM2; EC4_immune; Mast; SMC2_art; B; Adip2; EC1_cap; FB5; aCM3; T/NK_cycling; PC2_atria; NC1_glial; FB6; LYVE1+TIMD4+MP; EC3_cap; FB3; CD4+T_naive; NC2_glial_NGF+; FB2; Adip1; MAIT-like; vCM2; CD4+T_act; Adip4; B_plasma; CD4+T_Tfh; hepatocyte; endocardial cell; endothelial cell; endothelial cell of artery; endothelial cell of lymphatic vessel; endothelial cell of venule; fat cell; kidney interstitial fibroblast; macrophage; PC1_vent; aCM5; CD14+Mo; PC4_CMC-like; CD16+Mo; EC10_CMC-like; SMC1_basic; EC5_art; LYVE1+IGF1+MP; FB1; CD8+T_te; Adip3; CD8+T_trans; PC3_str; EC6_ven; MoMP; dendritic cell, human; B cell; capillary endothelial cell; natural killer cell; pericyte; smooth muscle cell; Schwann cell; T cell; regular atrial cardiac myocyte; regular ventricular cardiac myocyte; mast cell; mesothelial cell; myeloid cell; SAN_P_cell; vCM5; AVN_P_cell; vCM3_stressed; CD4+T_reg; NC4_glial; innate lymphoid cell; cardiac endothelial cell | 149.79795775877116425205 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="table-s3"></a>Table S3 (table-s3)

(Bulk) Anatomical Structures in HRA v1.3, cell types, and average/sum counts of CTs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S3
#+ description: (Bulk) Anatomical Structures in HRA v1.3, cell types, and average/sum counts of CTs

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
	FILTER (?modality = 'sc_bulk')
}
GROUP BY ?organ ?as_label ?cell_label
ORDER BY ?organ ?as_label ?cell_label

```

([View Source](../../queries/atlas/table-s3.rq))
</details>

#### Results ([View CSV File](reports/atlas/table-s3.csv))

| organ | as_label | cell_label | cell_id | mean_cell_count | cell_count |
| :--- | :--- | :--- | :--- | :--- | :--- |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip1 | https://purl.org/ccf/ASCTB-TEMP_adip1 | 11.2 | 336 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip2 | https://purl.org/ccf/ASCTB-TEMP_adip2 | 13 | 468 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip3 | https://purl.org/ccf/ASCTB-TEMP_adip3 | 26.5 | 318 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | Adip4 | https://purl.org/ccf/ASCTB-TEMP_adip4 | 2 | 24 |
| VHFHeart | Posteromedial head of posterior papillary muscle of left ventricle | B | https://purl.org/ccf/ASCTB-TEMP_b | 22.5 | 540 |
| ... | ... | ... | ... | ... | ... |


### <a id="table-s4"></a>Table S4 (table-s4)

(Spatial) Anatomical Structures in HRA v1.3, cell types, and average/sum counts of CTs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Table S4
#+ description: (Spatial) Anatomical Structures in HRA v1.3, cell types, and average/sum counts of CTs

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
	FILTER (?modality = 'spatial')
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
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | VHFHeart | heart | heart left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | 3549.1499999999996 | 229312.7801882646 | 7425 | 8.562 |
| http://purl.org/ccf/1.5/05c11830-1526-4472-bd12-ea24dbcfd3cc | VHFHeart | heart | Posteromedial head of posterior papillary muscle of left ventricle | http://purl.org/sig/ont/fma/fma7267 | 631.125 | 4401.498768462402 | 7425 | 8.562 |
| http://purl.org/ccf/1.5/fdb0d1f7-94d5-4628-b345-dbe4975966fd | VHMHeart | heart | heart left ventricle | http://purl.obolibrary.org/obo/UBERON_0002084 | 838.3499999999999 | 121604.2070274211 | 2430 | 8.463000000000001 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v1"></a>validation-v1



<details>
  <summary>View Sparql Query</summary>

```sparql
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


SELECT ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId ?similarity

WITH {
  SELECT ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId
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
  SELECT ?rui_location ?dataset ?tool ?similarity
  WHERE {
    GRAPH HRApop: {
      ?dataset a ccf:Dataset .
      [] ccf:has_registration_location ?rui_location .
    }

    GRAPH hra-pop:similarities {
      {
        [] ccf:cell_source_a_tool ?tool ;
          ccf:cell_source_b_tool ?tool ;
          ccf:cell_source_a ?rui_location ;
          ccf:cell_source_b ?dataset ;
          ccf:similarity ?similarity .
      }
      UNION
      {
        [] ccf:cell_source_a_tool ?tool ;
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

| sample | rui_location | dataset | tool | modality | organ | organId | similarity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium_Block | http://purl.org/ccf/1.5/ca476545-5b98-476c-b2fd-1b8e1708faed | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium | celltypist | sc_bulk | heart | UBERON:0000948 | 0.687484082461894 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium_Block | http://purl.org/ccf/1.5/ca476545-5b98-476c-b2fd-1b8e1708faed | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium | celltypist | sc_bulk | heart | UBERON:0000948 | 0.687484082461894 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium_Block | http://purl.org/ccf/1.5/ca476545-5b98-476c-b2fd-1b8e1708faed | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium | celltypist | sc_bulk | heart | UBERON:0000948 | 0.687484082461894 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium_Block | http://purl.org/ccf/1.5/ca476545-5b98-476c-b2fd-1b8e1708faed | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium | celltypist | sc_bulk | heart | UBERON:0000948 | 0.687484082461894 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium_Block | http://purl.org/ccf/1.5/ca476545-5b98-476c-b2fd-1b8e1708faed | https://api.cellxgene.cziscience.com/dp/v1/collections/b52eb423-5d0d-4645-b217-e1c6d38b2e72#D11$right%20cardiac%20atrium | celltypist | sc_bulk | heart | UBERON:0000948 | 0.687484082461894 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p1"></a>validation-v2p1



<details>
  <summary>View Sparql Query</summary>

```sparql
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


SELECT ?sample ?dataset ?tool ?modality ?organ ?organId ?as ?as_tool ?similarity ?as_in_collisions
FROM hra-pop:similarities
FROM HRApop:
FROM CCF:
WHERE {
  {
    ?dataset a ccf:Dataset .
    [] ccf:modality ?modality ;
        ccf:cell_source_a_tool ?tool ;
        ccf:cell_source_b_tool ?as_tool ;
        ccf:cell_source_a ?dataset ;
        ccf:cell_source_b ?as ;
        ccf:similarity ?similarity .
  } UNION {
    ?dataset a ccf:Dataset .
    [] ccf:modality ?modality ;
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

| sample | dataset | tool | modality | organ | organId | as | as_tool | similarity | as_in_collisions |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | celltypist | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/sig/ont/fma/fma7402 | celltypist | 0.8212281694877405 | true |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | popv | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/sig/ont/fma/fma7402 | celltypist | 0.4671757244355689 | true |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/sig/ont/fma/fma7402 | celltypist | 0.1920492501516258 | true |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | celltypist | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/sig/ont/fma/fma7402 | popv | 0.4489457030465336 | true |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | celltypist | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/sig/ont/fma/fma7402 | azimuth | 0.2056078918989647 | true |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p2-extra1"></a>validation-v2p2-extra1



<details>
  <summary>View Sparql Query</summary>

```sparql
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

SELECT DISTINCT ?as ?tool ?modality (?shared_as_cell_types / ?total_as_cell_types as ?pct_hra_ct_overlap)
WHERE {
  {
    SELECT ?as ?tool ?modality (COUNT(DISTINCT(?cell_label)) as ?total_as_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?as ccf:has_cell_summary [
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
    GROUP BY ?as ?tool ?modality
  }

  {
    SELECT ?as ?tool ?modality (COUNT(DISTINCT(?cell_label)) as ?shared_as_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?as ccf:has_cell_summary [
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
    GROUP BY ?dataset ?tool ?modality ?as
  }
}
ORDER BY ?as ?modality ?tool

```

([View Source](../../queries/atlas/validation-v2p2-extra1.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p2-extra1.csv))

| as | tool | modality | pct_hra_ct_overlap |
| :--- | :--- | :--- | :--- |
| http://purl.obolibrary.org/obo/UBERON_0001052 | popv | sc_bulk | 0.8 |
| http://purl.obolibrary.org/obo/UBERON_0001052 | spatial | spatial | 0.12 |
| http://purl.obolibrary.org/obo/UBERON_0001153 | popv | sc_bulk | 0.8 |
| http://purl.obolibrary.org/obo/UBERON_0001153 | spatial | spatial | 0.12 |
| http://purl.obolibrary.org/obo/UBERON_0001156 | popv | sc_bulk | 0.8 |
| ... | ... | ... | ... |


### <a id="validation-v2p2-extra2"></a>validation-v2p2-extra2



<details>
  <summary>View Sparql Query</summary>

```sparql
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

SELECT DISTINCT ?sample ?dataset ?tool ?modality ?organ ?organId ?as (?shared_ds_cell_types / ?total_ds_cell_types as ?pct_hra_ct_overlap)
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
    SELECT ?dataset (COUNT(DISTINCT(?dataset_cell_label)) as ?total_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?dataset_cell_label ;
          ]
        ] .
      }
    }
    GROUP BY ?dataset
  }

  {
    SELECT ?dataset ?as (COUNT(DISTINCT(?cell_label)) as ?shared_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?cell_label ;
          ]
        ] .

        ?as ccf:has_cell_summary [
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
    GROUP BY ?dataset ?as
  }
}

```

([View Source](../../queries/atlas/validation-v2p2-extra2.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p2-extra2.csv))

| sample | dataset | tool | modality | organ | organId | as | pct_hra_ct_overlap |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://entity.api.hubmapconsortium.org/entities/6dfb4bf4c1b1086c3bfa260c5d8b8f79 | https://entity.api.hubmapconsortium.org/entities/c616de3ce57804ede2dd519a1c8addf2 | azimuth | sc_bulk | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002084 | 1 |
| https://entity.api.hubmapconsortium.org/entities/6dfb4bf4c1b1086c3bfa260c5d8b8f79 | https://entity.api.hubmapconsortium.org/entities/c616de3ce57804ede2dd519a1c8addf2 | azimuth | sc_bulk | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002189 | 0.08 |
| https://entity.api.hubmapconsortium.org/entities/6dfb4bf4c1b1086c3bfa260c5d8b8f79 | https://entity.api.hubmapconsortium.org/entities/c616de3ce57804ede2dd519a1c8addf2 | azimuth | sc_bulk | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002080 | 1 |
| https://entity.api.hubmapconsortium.org/entities/6dfb4bf4c1b1086c3bfa260c5d8b8f79 | https://entity.api.hubmapconsortium.org/entities/c616de3ce57804ede2dd519a1c8addf2 | azimuth | sc_bulk | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002015 | 0.08 |
| https://entity.api.hubmapconsortium.org/entities/6dfb4bf4c1b1086c3bfa260c5d8b8f79 | https://entity.api.hubmapconsortium.org/entities/c616de3ce57804ede2dd519a1c8addf2 | azimuth | sc_bulk | heart | UBERON:0000948 | http://purl.obolibrary.org/obo/UBERON_0002079 | 1 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p2-extra3"></a>validation-v2p2-extra3



<details>
  <summary>View Sparql Query</summary>

```sparql
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

SELECT DISTINCT ?sample ?dataset ?tool ?modality ?organ ?organId ?as (?shared_ds_cell_types / ?total_ds_cell_types as ?pct_hra_ct_overlap)
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
    SELECT ?dataset (COUNT(DISTINCT(?dataset_cell_label)) as ?total_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?dataset_cell_label ;
          ]
        ] .
      }
    }
    GROUP BY ?dataset
  }

  {
    SELECT ?dataset ?as (COUNT(DISTINCT(?ct_cell_label)) as ?shared_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_id ?cell_id ;
            ccf:cell_label ?cell_label ;
          ]
        ] .

        ?as ccf:has_cell_summary [
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
    GROUP BY ?dataset ?as
  }
}

```

([View Source](../../queries/atlas/validation-v2p2-extra3.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p2-extra3.csv))

| sample | dataset | tool | modality | organ | organId | as | pct_hra_ct_overlap |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://entity.api.hubmapconsortium.org/entities/0a558711c6b9d5b9029717d722a2c31c | https://entity.api.hubmapconsortium.org/entities/d363e6062d4962bc7ef44d1d94afec62 | azimuth | sc_bulk | right kidney | UBERON:0004539 | http://purl.obolibrary.org/obo/UBERON_0002015 | 0.90243902439024390244 |
| https://entity.api.hubmapconsortium.org/entities/0a558711c6b9d5b9029717d722a2c31c | https://entity.api.hubmapconsortium.org/entities/d363e6062d4962bc7ef44d1d94afec62 | azimuth | sc_bulk | right kidney | UBERON:0004539 | http://purl.obolibrary.org/obo/UBERON_0002094 | 0.09756097560975609756 |
| https://entity.api.hubmapconsortium.org/entities/3d2bc79885fc7720f77fddd2c23f02e5 | https://entity.api.hubmapconsortium.org/entities/f71249f6e349fb9a99a3d4f08541cab4 | popv | sc_bulk | spleen | UBERON:0002106 | http://purl.org/sig/ont/fma/fma14930 | 0.125 |
| https://entity.api.hubmapconsortium.org/entities/3d2bc79885fc7720f77fddd2c23f02e5 | https://entity.api.hubmapconsortium.org/entities/f71249f6e349fb9a99a3d4f08541cab4 | popv | sc_bulk | spleen | UBERON:0002106 | http://purl.obolibrary.org/obo/UBERON_0001157 | 0.125 |
| https://entity.api.hubmapconsortium.org/entities/3d2bc79885fc7720f77fddd2c23f02e5 | https://entity.api.hubmapconsortium.org/entities/f71249f6e349fb9a99a3d4f08541cab4 | popv | sc_bulk | spleen | UBERON:0002106 | http://purl.obolibrary.org/obo/UBERON_0001156 | 0.125 |
| ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p2"></a>validation-v2p2



<details>
  <summary>View Sparql Query</summary>

```sparql
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

SELECT DISTINCT ?sample ?dataset ?tool ?modality ?organ ?organId ?as (?shared_ds_cell_types / ?total_ds_cell_types as ?pct_hra_ct_overlap) ?as_in_collisions
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
    SELECT ?dataset (COUNT(DISTINCT(?dataset_cell_label)) as ?total_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_label ?dataset_cell_label ;
          ]
        ] .
      }
    }
    GROUP BY ?dataset
  }

  {
    SELECT ?dataset ?as (COUNT(DISTINCT(?cell_label)) as ?shared_ds_cell_types)
    WHERE {
      GRAPH HRApop: {
        ?dataset ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_id ?cell_id ;
            ccf:cell_label ?cell_label ;
          ]
        ] .

        ?as ccf:has_cell_summary [
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
    GROUP BY ?dataset ?as
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
ORDER BY ?sample DESC(?pct_hra_ct_overlap)

```

([View Source](../../queries/atlas/validation-v2p2.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v2p2.csv))

| sample | dataset | tool | modality | organ | organId | as | pct_hra_ct_overlap | as_in_collisions |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | celltypist | sc_bulk | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002078 | 0.47674418604651162791 | false |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | popv | sc_bulk | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002078 | 0.47674418604651162791 | false |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002078 | 0.47674418604651162791 | false |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | celltypist | sc_bulk | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002079 | 0.47674418604651162791 | false |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | popv | sc_bulk | respiratory system | UBERON:0001004 | http://purl.obolibrary.org/obo/UBERON_0002079 | 0.47674418604651162791 | false |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v2p3"></a>validation-v2p3



<details>
  <summary>View Sparql Query</summary>

```sparql
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


SELECT ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId ?corridor ?corridor_tool ?similarity ?distance 

WITH {
  SELECT ?sample ?rui_location ?dataset ?tool ?modality ?organ ?organId
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
  SELECT ?corridor ?dataset ?tool ?corridor_tool ?similarity
  WHERE {
    GRAPH HRApop: {
      ?dataset a ccf:Dataset .
      [] ccf:has_registration_location ?corridor .
    }
    
    GRAPH hra-pop:similarities {
      {
        []  ccf:cell_source_a_tool ?tool ;
            ccf:cell_source_b_tool ?corridor_tool ;
            ccf:cell_source_a ?dataset ;
            ccf:cell_source_b ?corridor ;
            ccf:similarity ?similarity .
      } UNION {
        []  ccf:cell_source_a_tool ?corridor_tool ;
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

| sample | rui_location | dataset | tool | modality | organ | organId | corridor | corridor_tool | similarity | distance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/0364c64a-5b0a-493f-a5ee-3adfc837211c | azimuth | 0.854784281103895 | 145.98120502653757 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/0cd47185-8e8a-4f56-a167-bf93de928553 | azimuth | 0.7893440592888246 | 762.0229249026119 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/0cd47185-8e8a-4f56-a167-bf93de928553 | popv | 0.1558423158456274 | 762.0229249026119 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/0364c64a-5b0a-493f-a5ee-3adfc837211c | popv | 0.22823074220352488 | 145.98120502653757 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032_Donor_TissueBlock1 | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | respiratory system | UBERON:0001004 | http://purl.org/ccf/1.5/3545c186-aafd-4477-adc5-6ee21219cf87 | celltypist | 0.12459478642434751 | 838.129444754135 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v3.edges"></a>validation-v3.edges



<details>
  <summary>View Sparql Query</summary>

```sparql
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
  ?tool ?modality ?organ ?organId
  ?datasetA ?entityA ?datasetB ?entityB
  ?similarity ?distance

WITH {
  SELECT ?tool ?modality ?organ ?organId 
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
        ccf:cell_annotation_method ?tool ;
        ccf:modality ?modality ;
      ] .

      ?datasetB ccf:has_cell_summary [
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
  SELECT ?tool ?entityA ?entityB ?similarity
  WHERE {
    GRAPH HRApop: {
      ?entityA a ccf:SpatialEntity .
      ?entityB a ccf:SpatialEntity .
      FILTER(STR(?entityA) < STR(?entityB))
    }

    GRAPH hra-pop:similarities {
      [] ccf:cell_source_a_tool ?tool ;
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

| source | target | weight | tool | modality | organ | organId | datasetA | entityA | datasetB | entityB | similarity | distance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://entity.api.hubmapconsortium.org/entities/254801a318687281ba3e473569d89a45 | https://entity.api.hubmapconsortium.org/entities/75356313b18a160c4cb1c1ee0cad5cb6 | 0.9999935406646516 | azimuth | sc_bulk | left kidney | UBERON:0004538 | https://entity.api.hubmapconsortium.org/entities/254801a318687281ba3e473569d89a45 | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | https://entity.api.hubmapconsortium.org/entities/75356313b18a160c4cb1c1ee0cad5cb6 | http://purl.org/ccf/1.5/0838235d-f0e1-406b-8133-429be147408d | 0.9999935406646516 | 49.91420381013805 |
| https://entity.api.hubmapconsortium.org/entities/eb961e5dc50239d35f5398903c64e2b9 | https://entity.api.hubmapconsortium.org/entities/75356313b18a160c4cb1c1ee0cad5cb6 | 0.9999935406646516 | azimuth | sc_bulk | left kidney | UBERON:0004538 | https://entity.api.hubmapconsortium.org/entities/eb961e5dc50239d35f5398903c64e2b9 | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | https://entity.api.hubmapconsortium.org/entities/75356313b18a160c4cb1c1ee0cad5cb6 | http://purl.org/ccf/1.5/0838235d-f0e1-406b-8133-429be147408d | 0.9999935406646516 | 49.91420381013805 |
| https://entity.api.hubmapconsortium.org/entities/eb961e5dc50239d35f5398903c64e2b9 | https://entity.api.hubmapconsortium.org/entities/f0ba359ac01382540c1e5fe5d043e9f1 | 0.9999884709560732 | azimuth | sc_bulk | left kidney | UBERON:0004538 | https://entity.api.hubmapconsortium.org/entities/eb961e5dc50239d35f5398903c64e2b9 | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | https://entity.api.hubmapconsortium.org/entities/f0ba359ac01382540c1e5fe5d043e9f1 | http://purl.org/ccf/1.5/14b3cd07-fd94-4aac-a467-6a287ca0d4b2 | 0.9999884709560732 | 48.031301939464434 |
| https://entity.api.hubmapconsortium.org/entities/254801a318687281ba3e473569d89a45 | https://entity.api.hubmapconsortium.org/entities/f0ba359ac01382540c1e5fe5d043e9f1 | 0.9999884709560732 | azimuth | sc_bulk | left kidney | UBERON:0004538 | https://entity.api.hubmapconsortium.org/entities/254801a318687281ba3e473569d89a45 | http://purl.org/ccf/1.5/007eb4d9-1694-4380-99e1-4aba832d9227 | https://entity.api.hubmapconsortium.org/entities/f0ba359ac01382540c1e5fe5d043e9f1 | http://purl.org/ccf/1.5/14b3cd07-fd94-4aac-a467-6a287ca0d4b2 | 0.9999884709560732 | 48.031301939464434 |
| https://entity.api.hubmapconsortium.org/entities/a0bfd09a989530ba348d64499adf6a6b | https://entity.api.hubmapconsortium.org/entities/2ea554a5a203a6c468431e652823ca1e | 0.967858271490919 | azimuth | sc_bulk | respiratory system | UBERON:0001004 | https://entity.api.hubmapconsortium.org/entities/a0bfd09a989530ba348d64499adf6a6b | http://purl.org/ccf/1.5/0364c64a-5b0a-493f-a5ee-3adfc837211c | https://entity.api.hubmapconsortium.org/entities/2ea554a5a203a6c468431e652823ca1e | http://purl.org/ccf/1.5/0f4be9aa-dfce-414f-9d40-47cb38f5eee8 | 0.967858271490919 | 112.47467013510195 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v3.nodes"></a>validation-v3.nodes



<details>
  <summary>View Sparql Query</summary>

```sparql
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

| id | label | dataset | modality | entity | organ | organId |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | sc_bulk | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D046$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D046$lung | sc_bulk | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D062$lung | sc_bulk | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D088$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D088$lung | sc_bulk | http://purl.org/ccf/1.5/6acd66b8-2659-4626-bef9-a80f135489ad | respiratory system | UBERON:0001004 |
| https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | respiratory system | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D122$lung | sc_bulk | http://purl.org/ccf/1.5/da60f474-614a-4e0a-adbe-521ba44c7bf0 | respiratory system | UBERON:0001004 |
| ... | ... | ... | ... | ... | ... | ... |


### <a id="validation-v4"></a>validation-v4



<details>
  <summary>View Sparql Query</summary>

```sparql
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
  ?tool 
  ?modality
  (COUNT(DISTINCT(?asctb)) as ?asctb_only) 
  (COUNT(DISTINCT(?both)) as ?both) 
  (COUNT(DISTINCT(?exp)) as ?exp_only)
WHERE {
  # Get CTs only in ASCT+B
  {
    SELECT DISTINCT ?tool ?modality ?asctb {
      GRAPH CCF: {
        ?asctb ccf:ccf_asctb_type ?type .
      }
      GRAPH HRApop: {
        [] ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
        ]
      }
      FILTER (?type = 'CT')
      FILTER NOT EXISTS {
        GRAPH HRApop: {
          [] ccf:has_cell_summary [
            ccf:cell_annotation_method ?tool ;
            ccf:modality ?modality ;
            ccf:has_cell_summary_row [
              ccf:cell_id ?asctb ;
            ]
          ] .
        }
      }
    }
  }

  # Get CTs only in Experimental Data
  {
    SELECT DISTINCT ?tool ?modality ?exp {
      GRAPH HRApop: {
        [] ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
          ccf:has_cell_summary_row [
            ccf:cell_id ?exp ;
          ]
        ] .
      }
      FILTER NOT EXISTS {
        GRAPH CCF:{
          ?exp ccf:ccf_asctb_type ?type .
        }
        FILTER (?type = 'CT')
      }
    }
  }

  # Get CTs in Both
  {
    SELECT DISTINCT ?tool ?modality ?both {
      GRAPH CCF: {
        ?both ccf:ccf_asctb_type ?type .
      }
      GRAPH HRApop: {
        [] ccf:has_cell_summary [
          ccf:cell_annotation_method ?tool ;
          ccf:modality ?modality ;
        ]
      }
      FILTER (?type = 'CT')
      FILTER EXISTS {
        SELECT ?tool ?modality ?both {
          GRAPH HRApop: {
            [] ccf:has_cell_summary [
              ccf:cell_annotation_method ?tool ;
              ccf:modality ?modality ;
              ccf:has_cell_summary_row [
                ccf:cell_id ?both ;
              ]
            ] .
          }
        }
      }
    }
  }
}
GROUP BY ?tool ?modality
```

([View Source](../../queries/atlas/validation-v4.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v4.csv))

| tool | modality | asctb_only | both | exp_only |
| :--- | :--- | :--- | :--- | :--- |
| azimuth | sc_bulk | 1123 | 72 | 20 |
| popv | sc_bulk | 1130 | 65 | 20 |
| celltypist | sc_bulk | 1174 | 21 | 157 |
| spatial | spatial | 1192 | 3 | 26 |


### <a id="validation-v5"></a>validation-v5



<details>
  <summary>View Sparql Query</summary>

```sparql
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
ORDER BY ?dataset ?tool ?modality DESC(?percentage)

```

([View Source](../../queries/atlas/validation-v5.rq))
</details>

#### Results ([View CSV File](reports/atlas/validation-v5.csv))

| consortium_name | dataset | tool | modality | reported_organ | organ | organId | rui_location_volume | cell_id | cell_label | cell_count | percentage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:4028006 | alveolar type 2 fibroblast cell | 832 | 0.1674044265593561 |
| NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:4028004 | alveolar type 1 fibroblast cell | 742 | 0.1492957746478873 |
| NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0000583 | alveolar macrophage | 693 | 0.1394366197183099 |
| NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0002144 | capillary endothelial cell | 684 | 0.137625754527163 |
| NHLBI/LungMap | https://api.cellxgene.cziscience.com/dp/v1/collections/625f6bf4-2f33-4942-962e-35243d284837#D032$lung | azimuth | sc_bulk | http://purl.obolibrary.org/obo/UBERON_0002048 | respiratory system | UBERON:0001004 | 75 | CL:0002553 | fibroblast of lung:alveolar | 637 | 0.128169014084507 |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |


### <a id="as-cnt-per-organ"></a>Count of Anatomical Structures (as-cnt-per-organ)

Count of Anatomical Structures that occur in the 3D Reference Organs

<details>
  <summary>View Sparql Query</summary>

```sparql
#+ summary: Count of Anatomical Structures
#+ description: Count of Anatomical Structures that occur in the 3D Reference Organs

PREFIX ccf: <http://purl.org/ccf/>
PREFIX CCF: <https://purl.humanatlas.io/graph/ccf>

SELECT (COUNT(DISTINCT(?as_id)) as ?as_cnt) ?organ
FROM CCF:
WHERE {
  ?as3d
    ccf:has_reference_organ ?ref_organ ;
    ccf:representation_of ?as_id .

    BIND (REPLACE(REPLACE(REPLACE(STR(?ref_organ), "http://purl.org/ccf/latest/ccf.owl#", ""), "Colon", "LargeIntestine"), "V1.[0-9]$", "", "i") as ?organ)
}
GROUP BY ?organ 
ORDER BY DESC(?as_cnt)

```

([View Source](../../queries/hra/as-cnt-per-organ.rq))
</details>

#### Results ([View CSV File](reports/atlas/as-cnt-per-organ.csv))

| as_cnt | organ |
| :--- | :--- |
| 98 | VHFBloodVasculature |
| 98 | VHMBloodVasculature |
| 62 | VHFLung |
| 59 | VHMLung |
| 56 | VHMAllenBrain |
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

#### Results ([View CSV File](reports/atlas/as-cnt.csv))

| as_cnt |
| :--- |
| 519 |


  