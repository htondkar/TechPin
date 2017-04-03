import axios from 'axios';
import querystring from 'querystring'

export var baseUrl = 'http://185.117.22.106:8000';
var baseApiUrl = 'http://185.117.22.106:8000/api';

var config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*'
  },
}

export default class techpinApi {

  //get methods

  static getTop25Products() {
    return axios.get(`${baseApiUrl}/products/top`);
    // .then(res => console.log(res));
  }

  static getAllProducts() {
    return axios.get(`${baseApiUrl}/products`);
    // .then(res => console.log(res));
  }

  static getAllcategories() {
    return axios.get(`${baseApiUrl}/categories`);
    // .then(res => console.log(res));
  }

  static getAllProductTypes() {
    return axios.get(`${baseApiUrl}/product_types`);
    // .then(res => console.log(res));
  }

  static getSingleProduct(slug) {
    return axios.get(`${baseApiUrl}/products/${slug}`);
    // .then(res => console.log(res));
  }

  //// authentication

  static login(email, password) {

    return axios.post(`${baseApiUrl}/login`, `email=${email}&password=${password}`, config)
  }

  static googleLogin(tokenId) {
    return axios.post(`${baseApiUrl}/google-login`, `idtoken=${tokenId}`, config)
  }

  static signup(formData) {
    return axios.post(`${baseApiUrl}/signup`,
      `first_name=${formData.first_name}
      &email=${formData.email}
      &password=${formData.password}
      &confirm_password=${formData.confirm_password}`,
      config);
  }

  static logout() {
    return axios.get(`${baseApiUrl}/logout`);
    // .then(res => console.log(res));
  }

//user interactions

  static postNewRate(slug, rate) {
    return axios.post(`${baseApiUrl}/products/${slug}/rate`, {rate});
    // .then(res => console.log(res));
  }

  static postNewComment(slug, text) {
    return axios.post(`${baseApiUrl}/products/${slug}/comments`, {text});
    // .then(res => console.log(res));
  }

  static postNewVersion(slug, formData) {
    return axios.post(`${baseApiUrl}/products/${slug}/versions/add`, formData);
    // .then(res => console.log(res));
  }

  static postNewProduct(formData) {
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*'
      },
    }

    const qs = querystring.stringify(formData);
    console.log(qs);
    return axios.post(`${baseApiUrl}/products/add`, qs, config)
      .then(res => console.log(res));
  }

}
