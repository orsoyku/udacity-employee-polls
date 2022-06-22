import * as actionTypes from "./actionTypes";
import { _saveQuestion, _saveQuestionAnswer } from "../../utils/data";

export const createQuestion = (questionInfo) => (dispatch) => {
  _saveQuestion(questionInfo).then((response) => {
    dispatch({
      type: actionTypes.CREATE_QUESTION,
      payload: response,
    });
    dispatch({
      type: actionTypes.ADD_QUESTION_TO_USER,
      payload: response,
    });
  });
};

export const saveQuestionAnswer = (authedUser, qid, answer) => (dispatch) => {
  if (authedUser && qid && answer) {
    _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch({
        type: actionTypes.ANSWER_QUESTION,
        payload: { authedUser, qid, answer },
      });
      dispatch({
        type: actionTypes.ADD_ANSWER_TO_USER,
        payload: { authedUser, qid, answer },
      });
    });
  }
};
