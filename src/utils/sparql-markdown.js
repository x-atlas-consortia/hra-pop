import { readFileSync } from 'fs';
import { basename, relative } from 'path';
import { getCsvMetadata, getSparqlMetadata } from './sparql-metadata.js';

export function getSparqlMarkdown(baseDir, queryFile, csvFile, strict = false) {
  const query = readFileSync(queryFile).toString();
  const sparqlMetadata = getSparqlMetadata(
    query,
    {
      filename: basename(queryFile, '.rq'),
      path: relative(baseDir, queryFile),
    },
    strict
  );
  sparqlMetadata.title = sparqlMetadata.summary ? `${sparqlMetadata.summary} (${sparqlMetadata.filename})` : sparqlMetadata.filename
  let csvMetadata;
  if (csvFile) {
    const csvString = readFileSync(csvFile).toString();
    csvMetadata = getCsvMetadata(csvString, {
      filename: basename(csvFile, '.csv'),
      path: relative(baseDir, csvFile),
    });
  }
  const metadata = {
    md: asMarkdown(sparqlMetadata, csvMetadata),
    sparql: sparqlMetadata,
    csv: csvMetadata
  }
  return metadata;
}

function asMarkdown(sparql, csv) {
  let md = `
### <a id="${sparql.filename}"></a>${sparql.title}

${sparql.description || ''}

<details>
  <summary>View Sparql Query</summary>

\`\`\`sparql
${sparql.query}
\`\`\`

([View Source](${sparql.path}))
</details>
`;

  if (csv && csv.columns) {
    md += `
#### Results ([View CSV File](${csv.path}))

| ${csv.columns.join(' | ')} |
| ${csv.columns.map((_c) => ':---').join(' | ')} |
${csv.preview.map((row) => '| ' + row.join(' | ') + ' |').join('\n')}

`;
  } else if (sparql.columns) {
    md += `
#### Columns
| ${sparql.columns.join(' | ')} |
| ${sparql.columns.map((_c) => ':---').join(' | ')} |
| ${sparql.columns.map((_c) => '...').join(' | ')} |
`;
  }
  return md;
}
