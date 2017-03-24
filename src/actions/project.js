import database from './database';

export const PROJECT_ADD = 'PROJECT_ADD'
export const PROJECT_SELECT = 'PROJECT_SELECT'

// export function addProject(id) {
//   const newProject = {
//     id,
//     name: 'New Project ' + id,
//     features: []
//   }
//   return dispatch => {
//     database.ref('/projects').push(
//       newProject
//     ).then(() => {
//       dispatch({
//         type: PROJECT_ADD,
//         payload: newProject
//       })
//     })
//   }
// }

export function addProject(id) {
  const newProject = {
    id,
    name: 'New Project ' + id,
    features: []
  }
  return {
    type: PROJECT_ADD,
    payload: newProject
  }
}

export function selectProject(projectId) {
  return {
    type: PROJECT_SELECT,
    payload: projectId
  }
}

// export function fetchFeatures() {
//   return dispatch => {
//     database.ref('/features').once('value', snap => {
//       return dispatch({
//          type: FEATURE_FETCH,
//          payload: snap.val()
//        })
//     })
//   }
// }
