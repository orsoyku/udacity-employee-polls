import * as actionTypes from "../actions/actionTypes";

export default function usersReducer(state = {}, action) {
  debugger
  switch (action.type) {
    case actionTypes.ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.payload.author]: {
          ...state[action.payload.author],
          questions: state[action.payload.author].questions.concat([
            action.payload.id,
          ]),
        },
      };
    case actionTypes.ADD_ANSWER_TO_USER:
      return {
        ...state,
        [action.payload.authedUser]: {
          ...state[action.payload.authedUser],
          answers: {
            ...state[action.payload.authedUser].answers,
            [action.payload.qid]: action.payload.answer,
          },
        },
      };
    default: /*If no action, return initial state */
      return state;
  }
}

