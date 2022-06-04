import * as actionTypes from "../actions/actionTypes";

const questionReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_QUESTIONS:
      return {};
    case actionTypes.CREATE_QUESTION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case actionTypes.ANSWER_QUESTION:
      return {};
    default:
      return state;
  }
};

export default questionReducer;
