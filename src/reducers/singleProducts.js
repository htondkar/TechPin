import * as actionTypes from '../actions/actionTypes';

export default function singleProducts(state = [], action) {

    switch (action.type) {

        case actionTypes.SINGLE_PAGE_LOAD:
          // let product = {}
          // product[action.product.slug] = action.product
          // return Object.assign({}, state, product);
          // break;
          return [...state, action.product];
          break;

        default:
            return state;
    }
}
