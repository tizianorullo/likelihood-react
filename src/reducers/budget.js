import {BUDGET_UPDATE} from '../actions/budget'

export default function(state = 0, action) {
  switch (action.type) {
    case BUDGET_UPDATE:
      return action.payload
      break
    default:
      return state
  }
}
