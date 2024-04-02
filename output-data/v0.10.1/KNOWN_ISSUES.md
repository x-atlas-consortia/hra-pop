## Excluded datasets 

- 1963 datasets for which an organ uberon code could not be determined based on the tissue

- 107 datasets with fewer than 100 rows

- 1 cellxgene collection without valid raw counts
  - https://api.cellxgene.cziscience.com/dp/v1/collections/fdebfda9-bb9a-4b4b-97e5-651097ea07b0

**Note:** Some of the above categories may overlap

## Failures

- 35 cases where the annotation tool predicts to few unique cells to allow for further processing with scanpy's `rank_genes_groups`

- 4 failures for azimuth all with the following error:

  ```
  Error in idx[i, ] <- res[[i]][[1]] : number of items to replace is not a multiple of replacement length
  ```

  - https://api.cellxgene.cziscience.com/dp/v1/collections/c8565c6a-01a1-435b-a549-f11b452a83a8#GW14$primary%20motor%20cortex
  - https://api.cellxgene.cziscience.com/dp/v1/collections/c8565c6a-01a1-435b-a549-f11b452a83a8#GW17$primary%20motor%20cortex
  - https://api.cellxgene.cziscience.com/dp/v1/collections/2a0b02c0-fea6-47bd-92b9-9b03f5d2580c#MM10$bone%20marrow
  - https://api.cellxgene.cziscience.com/dp/v1/collections/2a0b02c0-fea6-47bd-92b9-9b03f5d2580c#MM14$bone%20marrow
