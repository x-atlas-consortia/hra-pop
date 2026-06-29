.mode csv
SELECT DISTINCT
  'cell' AS "AS/1",
  'CL:0000000' AS "AS/1/ID",
  'cell' AS "AS/1/LABEL",

  IF(level_1_cell_id = 'CL:0000000', '', COALESCE(level_1_cell_label, 'unmapped')) AS "AS/2",
  IF(level_1_cell_id = 'CL:0000000', '', COALESCE(REPLACE(level_1_cell_id, 'http://purl.obolibrary.org/obo/CL_', 'CL:'), '')) AS "AS/2/ID",
  IF(level_1_cell_id = 'CL:0000000', '', COALESCE(level_1_cell_label, '')) AS "AS/2/LABEL",

  IF(level_1_cell_id = level_2_cell_id, '', COALESCE(level_2_cell_label, '')) AS "AS/3",
  IF(level_1_cell_id = level_2_cell_id, '', COALESCE(REPLACE(level_2_cell_id, 'http://purl.obolibrary.org/obo/CL_', 'CL:'), '')) AS "AS/3/ID",
  IF(level_1_cell_id = level_2_cell_id, '', COALESCE(level_2_cell_label, '')) AS "AS/3/LABEL",

  IF(cell_id = level_2_cell_id or cell_id = level_1_cell_id, '', cell_label) AS "AS/4",
  IF(cell_id = level_2_cell_id or cell_id = level_1_cell_id, '', REPLACE(cell_id, 'http://purl.obolibrary.org/obo/CL_', 'CL:')) AS "AS/4/ID",
  IF(cell_id = level_2_cell_id or cell_id = level_1_cell_id, '', cell_label) AS "AS/4/LABEL",

  REPLACE(tool, 'sc_proteomics', 'vccf') AS "CT/1",
  modality AS "BGene/1"
FROM read_csv('/dev/stdin')
