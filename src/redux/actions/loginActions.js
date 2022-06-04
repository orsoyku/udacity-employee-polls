import * as actionTypes from "./actionTypes";
import { users } from "../../utils/data";

export const login = (creds) => (dispatch) => {
  const { name, password } = creds;
  if (Object.keys(users).includes(name)) {
    const user = users[name];
    if (user.password === password) {
      alert("login is success");
      dispatch({
        type: actionTypes.LOGIN_REQUEST_SUCCESS,
        payload: { isAuthenticated: true, id: user.id },
      });
    }
    else{
      alert("password or username is wrong..")
    }
  }
};
