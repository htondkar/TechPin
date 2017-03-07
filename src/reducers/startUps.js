import * as actionTypes from '../actions/actionTypes';

export default function startUps(state = [], action) {

    switch (action.type) {

        case actionTypes.INITIAL_LOAD:
          return action.list;
          break;

        case actionTypes.POST_NEW_COMMENT:
          let nextState = [...state];
          const index = nextState.findIndex(startUp => startUp.name === action.commentData.startupName);
          let startupToMutate = state[index];
          startupToMutate.comments.unshift(action.commentData);
          nextState[index] = startupToMutate;
          return nextState
          break;

        default:
            return state;
    }
}

// state.map(startup => {
//   if () {
//     let comments = startup.comments;
//     const newComment = {
//       author: action.commentData.author,
//       text: action.commentData.commentText,
//       date: action.commentData.date}
//     return startup.comments.push(newComment);
//   } else {
//     return startup;
//   }
// })
