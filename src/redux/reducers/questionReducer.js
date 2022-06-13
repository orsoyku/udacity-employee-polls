import * as actionTypes from "../actions/actionTypes";

const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_QUESTIONS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.CREATE_QUESTION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case actionTypes.ANSWER_QUESTION:
      let result = {
        ...state,
        [action.payload.qid]: {
          ...state[action.payload.qid],
          [action.payload.answer]: {
            ...state[action.payload.qid][action.payload.answer],
            votes: state[action.payload.qid][
              action.payload.answer
            ].votes.concat([action.payload.authedUser]),
          },
        },
      };
      return result;
    default:
      return state;
  }
};

export default questionReducer;
