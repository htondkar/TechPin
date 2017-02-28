import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // to sync react router with redux store

import startUps from './startUps';

const rootReducer = combineReducers({
  startUps,
  routing: routerReducer
});

export default rootReducer;
