import axios from 'axios';

export const baseUrl = 'http://185.117.22.106:8000';
const baseApiUrl = 'http://185.117.22.106:8000/api';

export default class techpinApi {

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

  static login(email, password) {
    return axios.post(`${baseApiUrl}/login`, {email, password});
    // .then(res => console.log(res));
  }

  static signup(first_name, email, password, confirm_password) {
    return axios.post(`${baseApiUrl}/signup`, {first_name, email, password, confirm_password});
    // .then(res => console.log(res));
  }

  static logout() {
    return axios.get(`${baseApiUrl}/logout`);
    // .then(res => console.log(res));
  }

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
    return axios.post(`${baseApiUrl}/products/add`, formData);
    // .then(res => console.log(res));
  }

}
