import {arrayMove} from 'react-sortable-hoc'

import {
  FEATURE_ADD,
  FEATURE_DELETE,
  FEATURE_UPDATE,
  FEATURE_SORT
} from '../actions/feature'

export default function(state = [], action) {
  switch (action.type) {
    case FEATURE_ADD:
      return state.concat([{
        id: action.payload,
        name: '',
        best: 0,
        worst: 0
      }])
    case FEATURE_DELETE:
      return state.filter(feature => feature.id !== action.payload.id)
    case FEATURE_UPDATE:
      return state.map(feature => {
        if (feature.id === action.payload.id) {
          feature = action.payload
        }
        return feature
      })
    case FEATURE_SORT:
      return arrayMove(state, action.payload.oldIndex, action.payload.newIndex)
    default:
      return state
  }
}
