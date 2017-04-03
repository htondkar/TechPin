import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // to sync react router with redux store

import auth from './auth';
import allProducts from './allProducts';
import categories from './categories';
import productTypes from './productTypes';
import topProducts from './topProducts';
import singleProducts from './singleProducts';

const rootReducer = combineReducers({
  auth,
  allProducts,
  categories,
  productTypes,
  topProducts,
  singleProducts,
  routing: routerReducer
});

export default rootReducer;
