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

function successfulLogin(token, username) {
  return {
    type: actionTypes.SUCCESSFUL_LOGIN,
    token,
    username
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

function successfulNewComment(commentData) {
  return {
    type: actionTypes.POST_NEW_COMMENT,
    commentData
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
          return Promise.resolve()
        },
        (response) => {
           return Promise.reject(response)
         }
       )
  }
}
export function loadIntialCategories() {
  return dispatch => {
    return api.getCategories()
      .then(
        (response) => {
          dispatch({type: actionTypes.INITIAL_CATEGORIES_LOAD, categories: response});
          return Promise.resolve();
        },
        (error) => {
           return Promise.reject(error);
         }
       )
  }
}
export function authenticate(username, password) {
  return dispatch => {
    return api.fakeaAuthenticate()
      .then(
        (response) => {
          dispatch(successfulLogin(response, username))
          return Promise.resolve(response)
        },
        (error) => {
           dispatch(failedLogin(error))
           return Promise.reject(error)
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
export function postNewComment(commentData) {
  return dispatch => {
    return api.postNewComment(commentData)
      .then(
        (response) => {
          dispatch(successfulNewComment(commentData))
          return Promise.resolve(response)
        },
        (error) => {
           return Promise.reject(error)
         }
       )
  }
}

export function logOut() {
  return {
    type: actionTypes.LOG_OUT,
  };
}
