import { SparqlEndpointFetcher } from 'fetch-sparql-endpoint';
import jsonld from 'jsonld';
import Papa from 'papaparse';

/**
 * Generator that returns SPARQL query results as an array of simple objects
 *
 * @param {string} query the SPARQL query as a string
 * @param {string} sparqlEndpoint the remote SPARQL endpoint to query
 * @returns array of objects
 */
export async function selectRemoteObjects(query, sparqlEndpoint) {
  const fetcher = new SparqlEndpointFetcher({ timeout: 16000000 });
  const stream = await fetcher.fetchBindings(sparqlEndpoint, query);
  return new Promise((resolve, _reject) => {
    const results = [];
    stream.on('data', (bindings) => {
      const result = Object.keys(bindings).reduce((acc, key) => ((acc[key] = bindings[key]?.value), acc), {});
      results.push(result);
    });
    stream.on('end', () => {
      resolve(results);
    });
  });
}

/**
 * Run a SPARQL query and return results in csv format
 *
 * @param {string} query the SPARQL query as a string
 * @param {string} sparqlEndpoint the remote SPARQL endpoint to query
 * @returns the results of the query in csv format
 */
export async function selectCsvRemote(query, sparqlEndpoint) {
  const fetcher = new SparqlEndpointFetcher({ timeout: 16000000 });
  const stream = await fetcher.fetchBindings(sparqlEndpoint, query);
  return new Promise((resolve, _reject) => {
    const results = [];
    let header;
    stream.on('variables', (variables) => (header = variables.map((v) => v.value)));
    stream.on('data', (bindings) => {
      const result = Object.keys(bindings).reduce((acc, key) => ((acc[key] = bindings[key]?.value), acc), {});
      results.push(result);
    });
    stream.on('end', () => {
      resolve(Papa.unparse(results, { header: true, columns: header }));
    });
  });
}

/**
 * Generator that constructs a JSON-LD object based on a SPARQL CONSTRUCT query
 *
 * @param {string} query the SPARQL query as a string
 * @param {string} sparqlEndpoint the remote SPARQL endpoint to query
 * @param {object | undefined} frameObj an optional frame object for json-ld
 * @returns a JSON-LD object
 */
export async function constructJsonLd(query, sparqlEndpoint, frameObj = undefined) {
  const fetcher = new SparqlEndpointFetcher({ timeout: 16000000 });
  const stream = await fetcher.fetchTriples(sparqlEndpoint, query);
  return new Promise((resolve, _reject) => {
    const results = [];
    stream.on('data', (quad) => {
      results.push(quad);
    });
    stream.on('end', () => {
      resolve(results);
    });
  })
    .then((data) => jsonld.fromRDF(data))
    .then((data) => {
      if (frameObj) {
        return jsonld.frame(data, frameObj);
      } else {
        return data;
      }
    });
}
