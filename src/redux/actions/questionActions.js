import * as actionTypes from "./actionTypes";
import { _saveQuestion } from "../../utils/data";

export const createQuestion = (questionInfo) => (dispatch) => {
  _saveQuestion(questionInfo).then((response) => {
    console.log("response", response);
    dispatch({
      type: actionTypes.CREATE_QUESTION,
      payload: response,
    });
  });
};
