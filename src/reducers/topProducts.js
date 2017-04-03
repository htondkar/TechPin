import * as actionTypes from '../actions/actionTypes';

export default function topProducts(state = [], action) {

    switch (action.type) {
  
        case actionTypes.INITIAL_TOP25_LOAD:
          return {
            topNew: action.topNew,
            topRanked: action.topRanked,
            randomProducts: action.randomProducts
          };
          break;

        default:
            return state;
    }
}
