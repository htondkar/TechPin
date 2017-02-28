
import * as actionTypes from './actionTypes';
import api from '../api/api';

function initialLoadActionCreator(response) {
  return {
    type: actionTypes.INITIAL_LOAD,
    list: response
  }
}

export function loadIntialData() {
  return function (dispatch) {
    if (process.env.NODE_ENV === 'development') {
      return api.loadList()
      .then(response => dispatch(initialLoadActionCreator(response)))
    } else {
      dispatch(initialLoadActionCreator(api.loadList()))
    }
  }
}
