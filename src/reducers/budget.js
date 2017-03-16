import {BUDGET_UPDATE} from '../actions/budget'

const initialState = 10

export default function(state = initialState, action) {
  switch (action.type) {
    case BUDGET_UPDATE:
      return action.payload
      break
    default:

  }
  return state
}
