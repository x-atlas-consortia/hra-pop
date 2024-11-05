import { writeFileSync } from 'fs';
import { selectCsvRemote } from './utils/sparql.js';

const OUTPUT_CSV = process.argv[2];

const SPARQL_ENDPOINT = 'https://lod.humanatlas.io/sparql';
const MAPPING_TEMPLATE =
  'https://raw.githubusercontent.com/hubmapconsortium/hra-workflows/main/containers/{{TOOL}}/context/organ-mapping.json';
const TOOLS = ['azimuth', 'celltypist', 'popv'];

const values = [];
for (const tool of TOOLS) {
  const mapping = await fetch(MAPPING_TEMPLATE.replace('{{TOOL}}', tool)).then((r) => r.json());
  for (const organ of Object.keys(mapping)) {
    values.push({ tool, organ });
  }
}

const valuesRq = values.map(({ tool, organ }) => `("${tool}" ${organ})`).join(' ');

const query = `
PREFIX UBERON: <http://purl.obolibrary.org/obo/UBERON_>
PREFIX ccf: <http://purl.org/ccf/>
PREFIX HRA: <https://purl.humanatlas.io/collection/hra-api>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?organ
  (IF(SUM(?azimuth) > 0, 'x', '') as ?azimuth) 
  (IF(SUM(?celltypist) > 0, 'x', '') as ?celltypist) 
  (IF(SUM(?popv) > 0, 'x', '') as ?popv)
  (IF(SUM(?hasReferenceOrgan) > 0, 'x', '') as ?hasReferenceOrgan)
FROM HRA:
WHERE {
  VALUES (?tool ?organId) {
    ${valuesRq}
  }

  ?organId rdfs:label ?organ .
  
  OPTIONAL {
    {
      ?refOrgan ccf:representation_of ?organId .
    }
    UNION
    {
      ?refOrgan ccf:representation_of ?childOrgan .
      ?childOrgan ccf:ccf_part_of* ?organId .
    }
  }

  BIND (IF(?tool = 'azimuth', 1, 0)  as ?azimuth)
  BIND (IF(?tool = 'celltypist', 1, 0) as ?celltypist)
  BIND (IF(?tool = 'popv', 1, 0) as ?popv)
  BIND (IF(BOUND(?refOrgan), 1, 0) as ?hasReferenceOrgan)
}
GROUP BY ?organ
HAVING (!STRSTARTS(?organ, 'left') && !STRSTARTS(?organ, 'right'))
ORDER BY ?organ
`;

const csvString = await selectCsvRemote(query, SPARQL_ENDPOINT);
writeFileSync(OUTPUT_CSV, csvString);
