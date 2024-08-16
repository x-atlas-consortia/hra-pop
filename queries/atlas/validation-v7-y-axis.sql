.mode csv
SELECT DISTINCT sex, rui_location, dataset, tool,
  first_value(predicted_rui) OVER (PARTITION BY sex, rui_location, dataset, tool ORDER BY similarity DESC) as predicted_rui,
  first_value(similarity) OVER (PARTITION BY sex, rui_location, dataset, tool ORDER BY similarity DESC) as similarity
FROM read_csv('/dev/stdin')
