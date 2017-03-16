import { combineReducers } from 'redux';

import BudgetReducer from './budget'
import RateReducer from './rate'
import FeaturesReducer from './features'

const rootReducer = combineReducers({
  budget: BudgetReducer,
  rate: RateReducer,
  features: FeaturesReducer,
});

export default rootReducer;
