import { readFileSync, writeFileSync } from 'fs';
import fetch from 'node-fetch';
import Papa from 'papaparse';

const FLATTENED_GRAPHS = process.argv.slice(2, -1);
const OUTPUT_JSONLD = process.argv.slice(-1)[0];

class DatasetGraph {
  constructor() {
    this.donors = {};
    this.blocks = {};
    this.sections = {};
    this.datasets = {};
    this.linked = new Set();
    this.extraDonorProps = ['consortium_name', 'provider_name', 'provider_uuid'];
    this.extraDatasetProps = ['publication', 'publication_title', 'publication_lead_author', 'organ_id'];
  }

  setMetadata(obj, flat, prefix, extraProps = undefined) {
    for (const [key, value] of Object.entries(flat)) {
      const prop = key.replace(prefix, '');
      const goodProp = prop !== 'id' && (key.startsWith(prefix) || (extraProps && extraProps.includes(prop)));
      if (goodProp && value && !obj.hasOwnProperty(prop)) {
        obj[prop] = value;
      }
    }
    return obj;
  }

  getObject(flat, objects, prefix, type, relationships = undefined, sampleType = undefined, extraProps = undefined) {
    const id = flat[`${prefix}id`];
    if (id) {
      if (!objects[id]) {
        const obj = (objects[id] = {
          '@id': id,
          '@type': type,
        });
        for (const rel of relationships ?? []) {
          obj[rel] = [];
        }
        if (sampleType) {
          obj.sample_type = sampleType;
        }
      }
      return this.setMetadata(objects[id], flat, prefix, extraProps);
    } else {
      return undefined;
    }
  }

  link(obj) {
    const id = obj?.['@id'] ?? undefined;
    if (id) {
      this.linked.add(id);
    }
  }
  isLinked(obj) {
    const id = obj?.['@id'] ?? undefined;
    return id && this.linked.has(id);
  }

  addFlatDataset(flat) {
    if (!flat.donor_id) {
      flat.donor_id = flat.block_id || flat.dataset_id;
    }
    const donor = this.getObject(flat, this.donors, 'donor_', 'Donor', ['samples'], undefined, this.extraDonorProps);
    const block = this.getObject(flat, this.blocks, 'block_', 'Sample', ['datasets', 'sections'], 'Tissue Block');
    const section = this.getObject(flat, this.sections, 'section_', 'Sample', ['datasets'], 'Tissue Section');
    const dataset = this.getObject(
      flat,
      this.datasets,
      'dataset_',
      'Dataset',
      undefined,
      undefined,
      this.extraDatasetProps
    );

    if (donor && block && !this.isLinked(block)) {
      this.link(block);
      donor.samples.push(block);
    }
    if (block && !block.rui_location && flat.rui_location) {
      block.rui_location = JSON.parse(flat.rui_location);
    }
    if (block && section && !this.isLinked(section)) {
      this.link(section);
      block.sections.push(section);
    }
    if (block && section && dataset && !this.isLinked(dataset)) {
      this.link(dataset);
      section.datasets.push(dataset);
    } else if (block && !section && dataset && !this.isLinked(dataset)) {
      this.link(dataset);
      block.datasets.push(dataset);
    }
  }

  toJsonLd() {
    return {
      '@context': 'https://hubmapconsortium.github.io/ccf-ontology/ccf-context.jsonld',
      '@graph': Object.values(this.donors),
    };
  }
}

async function unflattenDatasetGraph(inputFile, graph) {
  let csvString;
  if (inputFile.startsWith('http')) {
    csvString = await fetch(inputFile, { follow: true }).then((r) => r.text());
  } else {
    csvString = readFileSync(inputFile).toString();
  }
  const { data } = Papa.parse(csvString, { header: true, skipEmptyLines: true });
  for (const flat of data) {
    graph.addFlatDataset(flat);
  }
}

async function unflattenDatasetGraphs(inputFiles) {
  const graph = new DatasetGraph();
  for (const inputFile of inputFiles) {
    await unflattenDatasetGraph(inputFile, graph);
  }
  return graph.toJsonLd();
}

const jsonld = await unflattenDatasetGraphs(FLATTENED_GRAPHS);
writeFileSync(OUTPUT_JSONLD, JSON.stringify(jsonld, null, 2));
