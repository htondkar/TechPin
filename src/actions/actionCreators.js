
import * as actionTypes from './actionTypes';
import api from '../api/api';

function initialLoadActionCreator(response) {
  return {
    type: actionTypes.INITIAL_LOAD,
    list: response
  }
}

function successfulLogin() {
  return {
    type: actionTypes.SUCCESSFUL_LOGIN,
  }
}
function failedLogin(response) {
  return {
    type: actionTypes.FAILED_LOGIN,
    response
  }
}

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
export function authenticate(username, password) {
  return dispatch => {
    return api.fakeaAuthenticate()
      .then(
        (response) => {
          dispatch(successfulLogin())
          return Promise.resolve()
        },
        (response) => {
           dispatch(failedLogin(response))
           return Promise.reject(response)
         }
       )
  }
}
