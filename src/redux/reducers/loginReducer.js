import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function loginReducer(state = initialState.AuthState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST_SUCCESS:
      //return {...state,login:true,data:action.payload}
      return action.payload;
    default: /*If no action, return initial state */
      return state;
  }
}
