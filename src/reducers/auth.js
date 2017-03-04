import * as actionTypes from '../actions/actionTypes';

export default function auth(state = [], action) {

    switch (action.type) {

        case actionTypes.SUCCESSFUL_LOGIN:
          return {authenticated: true, token: action.token};
          break;

        case actionTypes.LOG_OUT:
          return {authenticated: false, token: null};
          break;

        default:
            return state;
    }
}
