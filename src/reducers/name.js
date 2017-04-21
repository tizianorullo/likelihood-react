import {NAME_UPDATE} from '../actions/name'

export default function(state = 0, action) {
  switch (action.type) {
    case NAME_UPDATE:
      return action.payload
      break
    default:
      return state
  }
}
