import {RATE_UPDATE} from '../actions/rate'

export default function(state = 0, action) {
  switch (action.type) {
    case RATE_UPDATE:
      return action.payload
    default:
      return state
  }
}
