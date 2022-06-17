import * as actionTypes from "./actionTypes";
import { users } from "../../utils/data";

export const login = (userId) => (dispatch) => {
  debugger;
  if (Object.keys(users).includes(userId)) {
    alert("login is success");
    dispatch({
      type: actionTypes.LOGIN_REQUEST_CHECK,
      payload: { isAuthenticated: true, id: userId },
    });
  } else {
    alert("Username is wrong..");
  }
};

export const logOut = () => {
  return {
    type: actionTypes.LOGIN_REQUEST_CHECK,
    payload: { isAuthenticated: false, id: null },
  };
};
