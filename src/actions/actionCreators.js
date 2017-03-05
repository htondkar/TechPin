import * as actionTypes from './actionTypes';
import api from '../api/api';
import alphaSorter from '../helpers/alphaSorter';

function initialLoadActionCreator(response) {
  return {
    type: actionTypes.INITIAL_LOAD,
    list: response
  }
}

function initialSortActionCreator(response) {
  const sortedList = alphaSorter(response);
  return {
    type: actionTypes.INITIAL_SORT,
    sortedList
  }
}

function successfulLogin(token) {
  return {
    type: actionTypes.SUCCESSFUL_LOGIN,
    token
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
      .then(response => {
        dispatch(initialLoadActionCreator(response));
        dispatch(initialSortActionCreator(response));
      })
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
          dispatch(successfulLogin(response))
          return Promise.resolve(response)
        },
        (response) => {
           dispatch(failedLogin(response))
           return Promise.reject(response)
         }
       )
  }
}


export function submitMoreInfoForm(formData) {
  return dispatch => {
    return api.editFormSubmit(formData) // instead of this start a new ajax call with and send the formdata
      .then(
        (response) => {
          return Promise.resolve(response)
        },
        (response) => {
           return Promise.reject(response)
         }
       )
  }
}
export function signupUser(formData) {
  return dispatch => {
    return api.signupUser(formData) // instead of this start a new ajax call with and send the formdata
      .then(
        (response) => {
          return Promise.resolve(response)
        },
        (response) => {
           return Promise.reject(response)
         }
       )
  }
}
export function logOut() {
  return {
    type: actionTypes.LOG_OUT,
  };
}
