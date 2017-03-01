import * as actionTypes from '../actions/actionTypes';

export default function auth(state = [], action) {

    switch (action.type) {

        case actionTypes.SUCCESSFUL_LOGIN:
          return {authenticated: true};
          break;

        case actionTypes.SUCCESSFUL_LOGOUT:
          return {authenticated: false};
          break;

        default:
            return state;
    }
}
