import * as actionTypes from "./actionTypes";
import { _getUsers } from "../../utils/data";

export const getUsersSuccess = () => (dispatch) => {
  _getUsers().then((response) => {
    dispatch({ type: actionTypes.GET_USERS_SUCCESS, payload: response });
  });
};

export const addQuestionToUser = (question) => {
  return { type: actionTypes.ADD_QUESTION_TO_USER, payload: question };
};

export const addAnswerToUser = (question) => {
  return { type: actionTypes.ADD_ANSWER_TO_USER, payload: question };
};


