import * as actionTypes from "./actionTypes";

export const login = (authInfo) => {
  return { type: actionTypes.LOGIN_REQUEST_SUCCESS, payload: authInfo };
};
