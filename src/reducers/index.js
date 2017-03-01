import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // to sync react router with redux store

import startUps from './startUps';
import auth from './auth';

const rootReducer = combineReducers({
  startUps,
  auth,
  routing: routerReducer
});

export default rootReducer;
