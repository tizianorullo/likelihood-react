import {arrayMove} from 'react-sortable-hoc'

import {
  FEATURE_ADD,
  FEATURE_DELETE,
  FEATURE_UPDATE,
  FEATURE_SORT
} from '../actions/feature'

const initialState = [
  {id: 1, name: 'My Feature 1', best: 1, worst: 2},
  {id: 2, name: 'My Feature 2', best: 2, worst: 3},
  {id: 3, name: 'My Feature 3', best: 1, worst: 3},
  {id: 4, name: 'My Feature 4', best: 3, worst: 5},
  {id: 5, name: 'My Feature 5', best: 2, worst: 4},
  {id: 6, name: 'My Feature 6', best: 1, worst: 7}
]

export default function(state = initialState, action) {
  switch (action.type) {
    case FEATURE_ADD:
      const id = Math.max(...state.map(feature => feature.id)) + 1
      return state.concat([{id}])
      break
    case FEATURE_DELETE:
      return state.filter(feature => feature.id !== action.payload.id)
      break
    case FEATURE_UPDATE:
      return state.map(feature => {
        if (feature.id === action.payload.id) {
          feature = action.payload
        }
        return feature
      })
      break
    case FEATURE_SORT:
      return arrayMove(state, action.payload.oldIndex, action.payload.newIndex)
      break
    default:
      return state
  }
}
