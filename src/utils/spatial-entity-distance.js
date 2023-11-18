import { distance } from 'mathjs';

const SPATIAL_PLACEMENT_LOOKUP = 'https://ccf-api.hubmapconsortium.org/v1/get-spatial-placement';
const GLOBAL_ENTITY_ID = 'http://purl.org/ccf/latest/ccf.owl#VHBothSexes';
const GLOBAL_POINT_CACHE = {};

async function getGlobalPoint(entity) {
  let point = GLOBAL_POINT_CACHE[entity['@id']];
  if (!point) {
    point = await fetch(SPATIAL_PLACEMENT_LOOKUP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        target_iri: GLOBAL_ENTITY_ID,
        rui_location: entity,
      }),
    })
      .catch((e) => console.log(e))
      .then((r) => r.json())
      .then((p) => [p.x_translation, p.y_translation, p.z_translation]);
    GLOBAL_POINT_CACHE[entity['@id']] = point;
  }
  return point;
}

function getPlacement(entity) {
  return Array.isArray(entity.placement) ? entity.placement[0] : entity.placement;
}

function getLocalPoint(entity) {
  const p = getPlacement(entity);
  return [p.x_translation, p.y_translation, p.z_translation];
}

export async function getSpatialEntityDistance(entityA, entityB) {
  const targetA = getPlacement(entityA).target;
  const targetB = getPlacement(entityB).target;

  let pointA;
  let pointB;
  if (targetA === targetB) {
    pointA = getLocalPoint(entityA);
    pointB = getLocalPoint(entityB);
  } else {
    pointA = await getGlobalPoint(entityA);
    pointB = await getGlobalPoint(entityB);
  }

  return distance(pointA, pointB);
}

export async function* getAllSpatialEntityDistances(entities, maxDistance = 10000) {
  for (let i = 0; i < entities.length; i++) {
    for (let j = i + 1; j < entities.length; j++) {
      const entityA = entities[i];
      const entityB = entities[j];
      const distance = await getSpatialEntityDistance(entityA, entityB);
      if (distance !== undefined && distance < maxDistance) {
        yield {
          '@type': 'SpatialEntityDistance',
          entity_a: entityA['@id'],
          entity_b: entityB['@id'],
          distance,
        };
      }
    }
  }
}
