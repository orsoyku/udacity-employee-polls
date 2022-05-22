import * as actionTypes from "./actionTypes";
import { _getUsers } from "../../utils/data";

export const getUsersSuccess = () => (dispatch) => {
  _getUsers().then((response) => {
    dispatch({ type: actionTypes.GET_USERS_SUCCESS, payload: response });
  });
};
