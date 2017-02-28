
import * as actionTypes from './actionTypes';
import api from '../api/api';

function initialLoadActionCreator(response) {
  return {
    type: actionTypes.INITIAL_LOAD,
    list: response
  }
}

export function loadIntialData() {
  return dispatch => {
    return api.loadList()
      .then(response => dispatch(initialLoadActionCreator(response)))
  }
}

export function submitStartUp(formData) {
  return dispatch => {
    return api.submitStartUp(JSON.stringify(formData))
      .then(
        (response) => {
          console.log(response)
          return Promise.resolve()
        },
        (response) => {
           console.log(response)
           return Promise.reject(response)
         }
       )
  }
}
