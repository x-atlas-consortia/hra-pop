export async function getXConsortiaEntities(field, endpoint, prefix, token) {
  return fetch(endpoint, {
    method: 'POST',
    headers: token
      ? { 'Content-type': 'application/json', Authorization: `Bearer ${token}` }
      : { 'Content-type': 'application/json' },
    body: JSON.stringify({
      version: true,
      from: 0,
      size: 10000,
      query: {
        terms: {
          'entity_type.keyword': ['Sample', 'Dataset'],
        },
      },
      _source: {
        includes: ['uuid', field],
      },
    }),
  })
    .then((r) => r.json())
    .then((r) => r.hits.hits.map((n) => n._source))
    .then((r) =>
      r.reduce((acc, row) => {
        acc.add(`${prefix}${row.uuid}`);
        acc.add(row[field]);
        return acc;
      }, new Set())
    );
}

export async function getHBMEntities(token) {
  return getXConsortiaEntities(
    'hubmap_id',
    'https://search.api.hubmapconsortium.org/v3/portal/search',
    'https://entity.api.hubmapconsortium.org/entities/',
    token
  );
}

export async function getSNTEntities(token) {
  return getXConsortiaEntities(
    'sennet_id',
    'https://search.api.sennetconsortium.org/entities/search',
    'https://entity.api.sennetconsortium.org/entities/',
    token
  );
}

export async function getPublicXConsortiaEntities() {
  const [hubmap, sennet] = await Promise.all([getHBMEntities(), getSNTEntities()]);
  return new Set([...hubmap, ...sennet]);
}
