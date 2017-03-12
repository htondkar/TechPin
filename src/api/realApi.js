import axios from 'axios';

// const baseUrl = 'http://www.techpin.ir/api';
const baseUrl = 'http://185.117.22.106:8000/api';

export default class techpinApi {

  static getTop25Products() {
    return axios.get(`${baseUrl}/products/top`);
    // .then(res => console.log(res));
  }

  static getAllProducts() {
    return axios.get(`${baseUrl}/products`);
    // .then(res => console.log(res));
  }

  static getAllcategories() {
    return axios.get(`${baseUrl}/categories`);
    // .then(res => console.log(res));
  }

  static getAllProductTypes() {
    return axios.get(`${baseUrl}/product_types`);
    // .then(res => console.log(res));
  }

  static getSingleProduct(slug) {
    return axios.get(`${baseUrl}/products/${slug}`);
    // .then(res => console.log(res));
  }

  static login(email, password) {
    return axios.post(`${baseUrl}/login`, {email, password});
    // .then(res => console.log(res));
  }

  static signup(first_name, email, password, confirm_password) {
    return axios.post(`${baseUrl}/signup`, {first_name, email, password, confirm_password});
    // .then(res => console.log(res));
  }

  static logout() {
    return axios.get(`${baseUrl}/logout`);
    // .then(res => console.log(res));
  }

  static postNewRate(slug, rate) {
    return axios.post(`${baseUrl}/products/${slug}/rate`, {rate});
    // .then(res => console.log(res));
  }

  static postNewComment(slug, text) {
    return axios.post(`${baseUrl}/products/${slug}/comments`, {text});
    // .then(res => console.log(res));
  }

  static postNewVersion(slug, formData) {
    return axios.post(`${baseUrl}/products/${slug}/versions/add`, formData);
    // .then(res => console.log(res));
  }

  static postNewProduct(formData) {
    return axios.post(`${baseUrl}/products/add`, formData);
    // .then(res => console.log(res));
  }

}
