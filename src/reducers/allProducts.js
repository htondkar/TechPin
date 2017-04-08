import * as actionTypes from '../actions/actionTypes';

export default function allProducts(state = [], action) {

    switch (action.type) {

        case actionTypes.LOAD_ALL_PRODUCTS:
          return action.allProducts.products;
          break;

          case actionTypes.SUCCESSFUL_NEW_RATE_SUBMIT:
         //there are duplicate items in different categories
          const indexInNew = state.topNew && state.topNew.findIndex(product => product.slug === action.slug);
          const indexInTopRanked = state.topNew && state.topRanked.findIndex(product => product.slug === action.slug);
          const indexInRandomProducts = state.topNew && state.randomProducts.findIndex(product => product.slug === action.slug);

          var startupToMutateInNew, startupToMutateInTopRanked, startupToMutateInRandomProducts,
              newRandomProducts, newTopNew, newTopRanked
          
          
          if(indexInNew !== -1) {
            startupToMutateInNew = state.topNew[indexInNew]
            startupToMutateInNew.rate_count = action.newRateCount
            startupToMutateInNew.average_p_rate = action.newRating
            newTopNew = [...state.topNew.slice(0, indexInNew), startupToMutateInNew, ...state.slice(indexInNew + 1)]
          }
          if(indexInTopRanked !== -1) {
            startupToMutateInTopRanked = state.topRanked[indexInTopRanked]
            startupToMutateInTopRanked.rate_count = action.newRateCount
            startupToMutateInTopRanked.average_p_rate = action.newRating
            newTopRanked = [...state.topRanked.slice(0, indexInTopRanked), startupToMutateInTopRanked, ...state.slice(indexInTopRanked + 1)]
          }
          if(indexInRandomProducts !== -1) {
            startupToMutateInRandomProducts = state.randomProducts[indexInRandomProducts]
            startupToMutateInRandomProducts.rate_count = action.newRateCount
            startupToMutateInRandomProducts.average_p_rate = action.newRating
            newRandomProducts = [...state.randomProducts.slice(0, indexInRandomProducts), startupToMutateInRandomProducts, ...state.slice(indexInRandomProducts + 1)]
          }
          return [...newTopNew, ...newTopRanked, ...newRandomProducts];
        break;

        default:
            return state;
    }
}
