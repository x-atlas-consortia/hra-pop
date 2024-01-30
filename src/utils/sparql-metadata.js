import { Parser } from 'sparqljs';
import Papa from 'papaparse';

export function getSparqlMetadata(query, metadata, strict = false) {
  metadata = {
    ...metadata,
    ...getSparqlMetadataFromDecorators(query),
    query
  };
  try {
    const parser = new Parser();
    const parsed = parser.parse(query);
    metadata.method = parsed.queryType;
    if (metadata.method === 'SELECT') {
      metadata.columns = getColumns(parsed);
    }
    metadata.namedGraphs = getNamedGraphs(parsed);
  } catch (err) {
    metadata.warnings = ['Unparseable (like WITH clause) or invalid SPARQL query'];
    if (strict) {
      throw err;
    }
  }
  return metadata;
}

function getColumns(parsed) {
  const variables = parsed.variables ?? [];
  return variables.map((v) => v.value || v.variable?.value || undefined).filter((v) => !!v);
}

function getNamedGraphs(parsed) {
  const graphs = new Set([]);

  if (parsed.from?.default) {
    parsed.from.default.forEach((n) => graphs.add(n.value));
  }
  if (parsed.from?.named) {
    parsed.from.default.forEach((n) => graphs.add(n.value));
  }
  JSON.stringify(parsed, (_key, value) => {
    if (value && value?.name) {
      graphs.add(value.name.value);
    }
    return value;
  });
  return Array.from(graphs);
}

const DECORATORS = new Set(['summary', 'description', 'endpoint']);

export function getSparqlMetadataFromDecorators(query, decorators = DECORATORS) {
  const metadata = {};
  for (const line of query.split('\n')) {
    const matches = line.match(/\#\+\ ([a-z]+)\:\ (.*)/);
    if (matches?.index === 0) {
      const name = matches[1];
      if (decorators.has(name)) {
        metadata[name] = matches[2];
      }
    }
  }
  return metadata;
}

export function getCsvMetadata(csvString, metadata = {}) {
  const results = Papa.parse(csvString, { skipEmptyLines: true });
  metadata.rows = results.data.length;
  metadata.columns = results.data[0];
  if (metadata.rows > 10) {
    metadata.preview = results.data.slice(1, 6).concat([metadata.columns.map((_s) => '...')]);
  } else {
    metadata.preview = results.data.slice(1);
  }
  return metadata;
}
