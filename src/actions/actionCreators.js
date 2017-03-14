import * as actionTypes from './actionTypes';
import api from '../api/api';
import techpinApi from '../api/realApi';
import alphaSorter from '../helpers/alphaSorter';


//************************// Action Creators and helpers //************************//

function initialLoadActionCreator(response) {
  return {
    type: actionTypes.INITIAL_LOAD,
    list: response
  }
}

function singleProductActionCreator(product) {
  return {
    type: actionTypes.SINGLE_PAGE_LOAD,
    product
  }
}

function allProductsActionCreator(allProducts) {
  return {
    type: actionTypes.LOAD_ALL_PRODUCTS,
    allProducts
  }
}

function initialLoadTop25ActionCreator(response) {
  return {
    type: actionTypes.INITIAL_TOP25_LOAD,
    topNew: response.top_new,
    topRanked: response.top_ranked,
    randomProducts: response.random_products
  }
}

//this is depricated
function initialSortActionCreator(response) {
  return new Promise((resolve, reject) => {
    resolve(alphaSorter(response))
  })
}


function successfulLogin(response) {
  return {
    type: actionTypes.SUCCESSFUL_LOGIN,
    response
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

//************************//  Async Actions //************************//

//******** PART 1: Initial Loadings ********//


//first api call
export function loadIntialCategories() {
  return dispatch => {
    return techpinApi.getAllcategories()
    .then(
      (response) => {
        dispatch({type: actionTypes.INITIAL_CATEGORIES_LOAD, categories: response.data.categories});
        return Promise.resolve();
      },
      (error) => {
        return Promise.reject(error);
      }
    )
  }
}

//second api call
export function loadIntialProductTypes() {
  return dispatch => {
    return techpinApi.getAllProductTypes()
    .then(
      (response) => {
        dispatch({type: actionTypes.INITIAL_PRODUCT_TYPES_LOAD, productTypes: response.data.product_types});
        return Promise.resolve();
      },
      (error) => {
        return Promise.reject(error);
      }
    )
  }
}

//third initial call
export function initialLoadTop25() {
  return dispatch => {
    return techpinApi.getTop25Products()
      .then(response => {
        dispatch(initialLoadTop25ActionCreator(response.data));
        return Promise.resolve(response.data)
      })
  }
}


//******** PART 2: On Demand Calls ********//

export function submitProduct(formData) {
  console.log(formData);
  //use real api here
  return dispatch => {
    return techpinApi.postNewProduct(formData)
      .then(
        (response) => {
          console.log(response.data);
          return Promise.resolve()
        },
        (response) => {
           return Promise.reject(response)
         }
       )
  }
}

export function authenticate(username, password) {
  return dispatch => {
    return techpinApi.login(username, password)
      .then(
        (response) => {
          console.log(response);
          if (response.data.success) {
            const authData = {
              'api-token': response.data['api-token'],
              username: response.data.user.username
            }
            localStorage.setItem('techpin', JSON.stringify(authData))
            dispatch(successfulLogin(response.data))
          }
          return Promise.resolve(response.data)
        },
        (response) => {
           dispatch(failedLogin(response.data))
           return Promise.reject(response.data)
         }
       )
  }
}

export function getSingleProduct(slug) {
  return dispatch => {
    return techpinApi.getSingleProduct(slug)
      .then(
        (response) => {
          dispatch(singleProductActionCreator(response.data))
          return Promise.resolve(response.data)
        },
        (response) => {
           return Promise.reject(response.data)
         }
       )
  }
}

export function getAllProducts() {
  return dispatch => {
    return techpinApi.getAllProducts()
      .then(
        (response) => {
          dispatch(allProductsActionCreator(response.data))
          return Promise.resolve(response.data.products)
        },
        (error) => {
           return Promise.reject(error)
         }
       )
  }
}


export function submitAddNewVersion(formData) {
  //this is a form data, to access data in it, you should use it's methods
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
    return techpinApi.signup(formData) // instead of this start a new ajax call with and send the formdata
      .then(
        (response) => {
          return Promise.resolve(response.data)
        },
        (response) => {
           return Promise.reject(response.data)
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
    return techpinApi.googleLogin(payLoad.tokenId)
      .then(
        (response) => {
          const authData = {
            'api-token': response['api-token'],
            username: response.user.username
          }
          localStorage.setItem('techpin', JSON.stringify(authData))
          dispatch(successfulLogin(response.data))
          return Promise.resolve(response.data)
        },
        (error) => {
           return Promise.reject(error)
         }
       )
  }
}

export function logOut() {
  localStorage.removeItem('techpin')
  techpinApi.logout()
  return {
    type: actionTypes.LOG_OUT,
  };
}

export function wasAuthed(authObject) {
  return {
    type: actionTypes.WAS_LOGGED_IN,
    response: authObject
  }
}
