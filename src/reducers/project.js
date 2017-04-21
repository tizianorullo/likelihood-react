import NameReducer from './name'
import BudgetReducer from './budget'
import RateReducer from './rate'
import FeaturesReducer from './features'

export default function(state, action) {
  return {
    ...state,
    name: NameReducer(state.name, action),
    budget: BudgetReducer(state.budget, action),
    rate: RateReducer(state.rate, action),
    features: FeaturesReducer(state.features, action)
  }
}
