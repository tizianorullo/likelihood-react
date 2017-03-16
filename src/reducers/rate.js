import {RATE_UPDATE} from '../actions/rate'

const initialState = 1

export default function(state = initialState, action) {
  switch (action.type) {
    case RATE_UPDATE:
      return action.payload
      break
    default:

  }
  return state
}
