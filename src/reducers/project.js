import BudgetReducer from './budget'
import RateReducer from './rate'
import FeaturesReducer from './features'

export default function(state, action) {
  return {
    ...state,
    budget: BudgetReducer(state.budget, action),
    rate: RateReducer(state.rate, action),
    features: FeaturesReducer(state.features, action)
  }
}
