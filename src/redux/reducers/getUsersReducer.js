import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function getUsersReducer(state = initialState.users, action) {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return [...state, action.payload];
    default: /*If no action, return initial state */
      return state;
  }
}
