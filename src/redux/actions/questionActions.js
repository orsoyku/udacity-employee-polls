import * as actionTypes from "./actionTypes";
import { _saveQuestion, _saveQuestionAnswer } from "../../utils/data";
import { addAnswerToUser } from "./userActions";

export const answerQuestion = (question) => {
  return { type: actionTypes.ANSWER_QUESTION, payload: question };
};

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
  debugger
  if (authedUser && qid && answer) {
    _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(answerQuestion({authedUser, qid, answer}))
      dispatch(addAnswerToUser({authedUser, qid, answer}))
    });
  }
};


