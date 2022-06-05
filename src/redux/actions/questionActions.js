import * as actionTypes from "./actionTypes";
import { _saveQuestion, _getQuestions } from "../../utils/data";

export const createQuestion = (questionInfo) => (dispatch) => {
  _saveQuestion(questionInfo).then((response) => {
    dispatch({
      type: actionTypes.CREATE_QUESTION,
      payload: response,
    });
  });
};

export const getQuestions = () => (dispatch) => {
  _getQuestions().then((response) => {
    dispatch({ type: actionTypes.GET_QUESTIONS, payload: response });
  });
};
