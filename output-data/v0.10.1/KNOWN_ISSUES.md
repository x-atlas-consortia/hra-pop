## Excluded datasets 

- 1963 datasets contains tissues that is not supported by any of the annotation tools.
  - [Unsupported tissue codes](#unsupported-tissue-codes) lists the unique tissue codes that are not supported.

- 107 datasets with fewer than 100 rows.

- 1 cellxgene collection without valid raw counts.
  - https://api.cellxgene.cziscience.com/dp/v1/collections/fdebfda9-bb9a-4b4b-97e5-651097ea07b0

**Note:** Some of the above categories may overlap.

## Failures

- 1 dataset is too large (10.53GiB h5ad file) to run through the annotation tools. Attempts to annotate the dataset failed even when the process was given 100GiB of RAM.

- 35 cases where the annotation tool predicts too few unique cells to allow for further processing with scanpy's `rank_genes_groups`.

- 4 datasets fail in azimuth all with the same error:

  ```
  Error in idx[i, ] <- res[[i]][[1]] : number of items to replace is not a multiple of replacement length
  ```

  - https://api.cellxgene.cziscience.com/dp/v1/collections/c8565c6a-01a1-435b-a549-f11b452a83a8#GW14$primary%20motor%20cortex
  - https://api.cellxgene.cziscience.com/dp/v1/collections/c8565c6a-01a1-435b-a549-f11b452a83a8#GW17$primary%20motor%20cortex
  - https://api.cellxgene.cziscience.com/dp/v1/collections/2a0b02c0-fea6-47bd-92b9-9b03f5d2580c#MM10$bone%20marrow
  - https://api.cellxgene.cziscience.com/dp/v1/collections/2a0b02c0-fea6-47bd-92b9-9b03f5d2580c#MM14$bone%20marrow

### Unsupported tissue codes

| term | label |
| -- | -- |
| CL:0000010 | cultured cell |
| CL:0000082 | epithelial cell of lung |
| CL:0000115 | endothelial cell |
| CL:0000351 | trophoblast cell |
| CL:0002322 | embryonic stem cell |
| CL:0002327 | mammary gland epithelial cell |
| CL:0002328 | bronchial epithelial cell |
| CL:0002334 | preadipocyte |
| CL:0002335 | brown preadipocyte |
| CL:0002633 | respiratory basal cell |
| CL:0010003 | epithelial cell of alveolus of lung |
| UBERON:0000004 | nose |
| UBERON:0000029 | lymph node |
| UBERON:0000030 | lamina propria |
| UBERON:0000056 | ureter |
| UBERON:0000088 | trophoblast |
| UBERON:0000160 | intestine |
| UBERON:0000175 | pleural effusion |
| UBERON:0000310 | breast |
| UBERON:0000328 | gut wall |
| UBERON:0000344 | mucosa |
| UBERON:0000451 | prefrontal cortex |
| UBERON:0000453 | decidua basalis |
| UBERON:0000473 | testis |
| UBERON:0000945 | stomach |
| UBERON:0000955 | brain |
| UBERON:0000956 | cerebral cortex |
| UBERON:0000977 | pleura |
| UBERON:0000988 | pons |
| UBERON:0000991 | gonad |
| UBERON:0000992 | ovary |
| UBERON:0001005 | respiratory airway |
| UBERON:0001040 | yolk sac |
| UBERON:0001043 | esophagus |
| UBERON:0001046 | hindgut |
| UBERON:0001049 | neural tube |
| UBERON:0001134 | skeletal muscle tissue |
| UBERON:0001161 | body of stomach |
| UBERON:0001162 | cardia of stomach |
| UBERON:0001165 | pyloric antrum |
| UBERON:0001388 | gastrocnemius |
| UBERON:0001542 | inguinal lymph node |
| UBERON:0001630 | muscle organ |
| UBERON:0001707 | nasal cavity |
| UBERON:0001728 | nasopharynx |
| UBERON:0001828 | gingiva |
| UBERON:0001831 | parotid gland |
| UBERON:0001832 | sublingual gland |
| UBERON:0001836 | saliva |
| UBERON:0001870 | frontal cortex |
| UBERON:0001871 | temporal lobe |
| UBERON:0001872 | parietal lobe |
| UBERON:0001873 | caudate nucleus |
| UBERON:0001874 | putamen |
| UBERON:0001875 | globus pallidus |
| UBERON:0001876 | amygdala |
| UBERON:0001880 | bed nucleus of stria terminalis |
| UBERON:0001882 | nucleus accumbens |
| UBERON:0001891 | midbrain |
| UBERON:0001893 | telencephalon |
| UBERON:0001898 | hypothalamus |
| UBERON:0001965 | substantia nigra pars compacta |
| UBERON:0001976 | epithelium of esophagus |
| UBERON:0001987 | placenta |
| UBERON:0002022 | insula |
| UBERON:0002023 | claustrum of brain |
| UBERON:0002037 | cerebellum |
| UBERON:0002046 | thyroid gland |
| UBERON:0002049 | vasculature |
| UBERON:0002110 | gallbladder |
| UBERON:0002129 | cerebellar cortex |
| UBERON:0002132 | dentate nucleus |
| UBERON:0002151 | pontine nuclear group |
| UBERON:0002185 | bronchus |
| UBERON:0002190 | subcutaneous adipose tissue |
| UBERON:0002228 | rib |
| UBERON:0002240 | spinal cord |
| UBERON:0002317 | white matter of cerebellum |
| UBERON:0002369 | adrenal gland |
| UBERON:0002372 | tonsil |
| UBERON:0002378 | muscle of abdomen |
| UBERON:0002382 | rectus abdominis muscle |
| UBERON:0002385 | muscle tissue |
| UBERON:0002429 | cervical lymph node |
| UBERON:0002436 | primary visual cortex |
| UBERON:0002450 | decidua |
| UBERON:0002563 | central nucleus of inferior colliculus |
| UBERON:0002630 | body of caudate nucleus |
| UBERON:0002657 | posterior parahippocampal gyrus |
| UBERON:0002661 | superior frontal gyrus |
| UBERON:0002663 | septal nuclear complex |
| UBERON:0002686 | angular gyrus |
| UBERON:0002728 | entorhinal cortex |
| UBERON:0002739 | medial dorsal nucleus of thalamus |
| UBERON:0002751 | inferior temporal gyrus |
| UBERON:0002771 | middle temporal gyrus |
| UBERON:0002883 | central amygdaloid nucleus |
| UBERON:0002981 | pulvinar nucleus |
| UBERON:0003017 | substantia innominata |
| UBERON:0003027 | cingulate cortex |
| UBERON:0003544 | brain white matter |
| UBERON:0003688 | omentum |
| UBERON:0003889 | fallopian tube |
| UBERON:0004023 | ganglionic eminence |
| UBERON:0004024 | medial ganglionic eminence |
| UBERON:0004025 | lateral ganglionic eminence |
| UBERON:0004026 | caudal ganglionic eminence |
| UBERON:0004070 | cerebellum vermis lobule |
| UBERON:0004167 | orbitofrontal cortex |
| UBERON:0004339 | vault of skull |
| UBERON:0004648 | esophagus muscularis mucosa |
| UBERON:0004725 | piriform cortex |
| UBERON:0005290 | myelencephalon |
| UBERON:0005343 | cortical plate |
| UBERON:0005406 | perirenal fat |
| UBERON:0006092 | cuneus cortex |
| UBERON:0006101 | Brodmann (1909) area 24 |
| UBERON:0006107 | basolateral amygdaloid nuclear complex |
| UBERON:0006108 | corticomedial nuclear complex |
| UBERON:0006479 | Brodmann (1909) area 38 |
| UBERON:0006483 | Brodmann (1909) area 46 |
| UBERON:0007106 | chorionic villus |
| UBERON:0007224 | medial entorhinal cortex |
| UBERON:0007225 | lateral entorhinal cortex |
| UBERON:0007644 | thoracic lymph node |
| UBERON:0007650 | esophagogastric junction |
| UBERON:0008612 | muscle of pelvic diaphragm |
| UBERON:0008933 | primary somatosensory cortex |
| UBERON:0008989 | submucosal esophageal gland |
| UBERON:0009472 | axilla |
| UBERON:0009834 | dorsolateral prefrontal cortex |
| UBERON:0009835 | anterior cingulate cortex |
| UBERON:0010225 | thalamic complex |
| UBERON:0010414 | omental fat pad |
| UBERON:0012168 | umbilical cord blood |
| UBERON:0012474 | hepatic cecum |
| UBERON:0012648 | ampulla of uterine tube |
| UBERON:0013473 | lower esophagus |
| UBERON:0013550 | Brodmann (1909) area 19 |
| UBERON:0013556 | Brodmann (1909) area 25 |
| UBERON:0013706 | bone spine |
| UBERON:0013756 | venous blood |
| UBERON:0014454 | visceral abdominal adipose tissue |
| UBERON:0014455 | subcutaneous abdominal adipose tissue |
| UBERON:0014614 | cervical spinal cord white matter |
| UBERON:0014648 | hemisphere part of cerebellar posterior lobe |
| UBERON:0016530 | parietal cortex |
| UBERON:0016538 | temporal cortex |
| UBERON:0016540 | occipital cortex |
| UBERON:0016632 | isthmus of fallopian tube |
| UBERON:0018303 | adrenal tissue |
| UBERON:0018707 | bladder organ |
| UBERON:0022232 | secondary visual cortex |
| UBERON:0034751 | primary auditory cortex |
| UBERON:0034891 | insular cortex |
| UBERON:0034892 | granular insular cortex |
| UBERON:0034893 | agranular insular cortex |
| UBERON:0035328 | upper outer quadrant of breast |
| UBERON:0039167 | bronchopulmonary lymph node |
| UBERON:8410010 | fimbria of uterine tube |
| UBERON:8440012 | cerebral nuclei |
