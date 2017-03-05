import * as actionTypes from '../actions/actionTypes';

export default function startUps(state = [], action) {

    switch (action.type) {

        case actionTypes.INITIAL_SORT:
          return action.sortedList;
          break;

        default:
            return state;
    }
}
