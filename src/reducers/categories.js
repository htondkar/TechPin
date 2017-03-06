import * as actionTypes from '../actions/actionTypes';

export default function categories(state = [], action) {

    switch (action.type) {

        case actionTypes.INITIAL_CATEGORIES_LOAD:
          return [...action.categories];
          break;

        default:
            return state;
    }
}
