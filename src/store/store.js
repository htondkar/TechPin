import {createStore, compose, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from '../reducers/index';
import {loadIntialData} from '../actions/actionCreators';
import thunk from 'redux-thunk';

// laod initial state
const defaultState = {
  startUps: [],
  auth: {authenticated: true},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(loadIntialData());

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
