import database from './database';

export const FEATURE_FETCH = 'FEATURE_FETCH'
export const FEATURE_UPDATE = 'FEATURE_UPDATE'
export const FEATURE_SORT = 'FEATURE_SORT'
export const FEATURE_ADD = 'FEATURE_ADD'
export const FEATURE_DELETE = 'FEATURE_DELETE'

export function fetchFeatures() {
  return dispatch => {
    database.ref('/features').once('value', snap => {
      return dispatch({
         type: FEATURE_FETCH,
         payload: snap.val()
       })
    })
  }
}

export function updateFeature(feature) {
  return {
    type: FEATURE_UPDATE,
    payload: feature
  }
}

export function sortFeature(oldIndex, newIndex) {
  return {
    type: FEATURE_SORT,
    payload: {oldIndex, newIndex}
  }
}

export function addFeature(id) {
  return {
    type: FEATURE_ADD,
    payload: id
  }
}

export function deleteFeature(feature) {
  return {
    type: FEATURE_DELETE,
    payload: feature
  }
}
