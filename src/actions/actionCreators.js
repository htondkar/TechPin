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
  // const sortedList = alphaSorter(response);
  // return {
  //   type: actionTypes.INITIAL_SORT,
  //   sortedList
  // }
  return new Promise((resolve, reject) => {
    resolve(alphaSorter(response))
  })
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

function successfulNewComment(commentData) {
  return {
    type: actionTypes.POST_NEW_COMMENT,
    commentData
  }
}

function successfulNewRate(response, productId) {
  const newRaters = 20;
  const newRating = response;
  return {
    type: actionTypes.SUCCESSFUL_NEW_RATE_SUBMIT,
    newRating: newRating,
    newRaters: newRaters,
    productId
  }
}

export function loadInitialData() {
  return dispatch => {
    return api.loadList()
      .then(response => {
        dispatch(initialLoadActionCreator(response));
        initialSortActionCreator(response).then( sortedList =>
          dispatch({
            type: actionTypes.INITIAL_SORT,
             sortedList
          })
        )
      })
  }
}

export function submitProduct(formData) {
  console.log(formData);
  //use real api here
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
  return dispatch => { ///////// NIAZ BE PRODUCT ID HAST BARAYE CALL
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
export function postNewRate(rate, productId, userName) {
  console.log(rate, productId, userName);
  return dispatch => {
    return api.postNewRate(rate, productId, userName)
      .then(
        (response) => {
          dispatch(successfulNewRate(response, productId))
          return Promise.resolve(response)
        },
        (error) => {
           return Promise.reject(error)
         }
       )
  }
}

export function OAuthLogIn(payLoad) {
  return dispatch => {
    return api.OAuthLogIn(payLoad)
      .then(
        (response) => {
          dispatch(successfulLogin(response.token, response.username))
          return Promise.resolve(response.username)
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
