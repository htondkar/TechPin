import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // to sync react router with redux store

import startUps from './startUps';
import auth from './auth';
import sortedList from './sortedList';
import categories from './categories';

const rootReducer = combineReducers({
  startUps,
  auth,
  sortedList,
  categories,
  routing: routerReducer
});

export default rootReducer;
