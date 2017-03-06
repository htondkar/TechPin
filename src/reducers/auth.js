import * as actionTypes from '../actions/actionTypes';

export default function auth(state = [], action) {

    switch (action.type) {

        case actionTypes.SUCCESSFUL_LOGIN:
          return {authenticated: true, token: action.token, username: action.username};
          break;

        case actionTypes.LOG_OUT:
          return {authenticated: false, token: null, username: null};
          break;

        default:
            return state;
    }
}
