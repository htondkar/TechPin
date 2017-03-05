import * as actionTypes from '../actions/actionTypes';

export default function sortedList(state = [], action) {

    switch (action.type) {

        case actionTypes.INITIAL_LOAD:
          return action.list;
          break;

        default:
            return state;
    }
}
