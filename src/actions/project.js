export const PROJECT_FETCH = 'PROJECT_FETCH'
export const PROJECT_ADD = 'PROJECT_ADD'
export const PROJECT_SELECT = 'PROJECT_SELECT'

export function fetchProjects(initialState = []) {
  return {
    type: PROJECT_FETCH,
    payload: initialState
  }
}

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
