import ProjectReducer from './project'
import {PROJECT_FETCH, PROJECT_ADD, PROJECT_SELECT} from '../actions/project'

const initialState = {
  selectedProjectId: null,
  projects: []
}

function RootReducer(state = initialState, action) {
  switch (action.type) {
    case PROJECT_FETCH:
      return {
        ...state,
        projects: action.payload
      }
    case PROJECT_ADD:
      return {
        ...state,
        projects: state.projects.concat(action.payload)
      }
    case PROJECT_SELECT:
      return {
        ...state,
        selectedProjectId: action.payload,
        projects: state.projects.map(project => {
          if (project.id == action.payload) {
            return ProjectReducer(project, action)
          }
          return project
        })
      }
    default:
      return {
        ...state,
        projects: state.projects.map(project => {
          if (project.id == state.selectedProjectId) {
            return ProjectReducer(project, action)
          }
          return project
        })
      }
  }
}

export default RootReducer
