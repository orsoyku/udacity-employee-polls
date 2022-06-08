import * as actionTypes from "./actionTypes";
import {
  _saveQuestion,
  _getQuestions,
  _saveQuestionAnswer,
} from "../../utils/data";

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

export const saveQuestionAnswer = (authedUser, qid, answer) => (dispatch) => {
  _saveQuestionAnswer(authedUser, qid, answer).then((response) => {
    dispatch({ type: actionTypes.SAVE_QUESTION_ANSWER, payload: response });
  });
};
