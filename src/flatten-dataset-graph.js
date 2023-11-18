import { readFileSync, writeFileSync } from 'fs';
import fetch from 'node-fetch';
import Papa from 'papaparse';

const DS_GRAPHS = process.argv.slice(2, -1);
const OUTPUT_CSV = process.argv.slice(-1)[0];

async function flattenDatasetGraph(inputFile) {
  let donors = [];
  if (inputFile.startsWith('http')) {
    donors = await fetch(inputFile, { follow: true }).then((r) => r.json());
  } else {
    donors = JSON.parse(readFileSync(inputFile).toString());
  }
  const datasets = [];
  for (const donor of donors['@graph'] ?? donors) {
    for (const block of donor.samples ?? []) {
      for (const section of block.sections ?? []) {
        for (const dataset of section.datasets ?? []) {
          datasets.push({ donor, block, section, dataset });
        }
      }
      for (const dataset of block.datasets ?? []) {
        datasets.push({ donor, block, dataset });
      }
    }
  }

  const flatDatasets = [];
  for (const { donor, block, section, dataset } of datasets) {
    flatDatasets.push({
      dataset_id: dataset['@id'],
      dataset_link: dataset.link || '',
      dataset_technology: dataset.technology || '',
      publication: dataset.publication || dataset.publicationId || '',
      publication_title: dataset.publication_title || dataset.publicationTitle || '',
      publication_lead_author: dataset.publication_lead_author || dataset.publicationLeadAuthor || '',

      consortium_name: donor.consortium_name || '',
      provider_name: donor.provider_name || '',
      provider_uuid: donor.provider_uuid || '',

      donor_id: donor['@id'],
      donor_age: donor.age || '',
      donor_sex: donor.sex || '',
      donor_bmi: donor.bmi || '',
      donor_race: donor.race || '',

      rui_location: block.rui_location ? JSON.stringify(block.rui_location) : '',
      organ_id: '',
      block_id: block['@id'],
      section_id: section?.['@id'] ?? '',

      dataset_label: dataset.label || '',
      dataset_description: dataset.description || '',
      dataset_thumbnail: dataset.thumbnail || '',

      donor_link: donor.link || '',
      donor_label: donor.label || '',
      donor_description: donor.description || '',

      block_link: block.link || '',
      block_label: block.label || '',
      block_description: block.description || '',

      section_link: section?.link ?? '',
      section_label: section?.label ?? '',
      section_description: section?.description ?? '',
    });
  }

  return flatDatasets;
}

const flattened = (await Promise.all(DS_GRAPHS.map(flattenDatasetGraph))).reduce((acc, data) => acc.concat(data), []);
const datasetsCsv = Papa.unparse(flattened, { header: true });
writeFileSync(OUTPUT_CSV, datasetsCsv);
