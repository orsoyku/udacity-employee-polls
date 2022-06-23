import { combineReducers } from "redux";
import getUsersReducer from "./getUsersReducer";
import usersReducer from "./userReducer";
import loginReducer from "./loginReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  getUsersReducer,
  usersReducer,
  loginReducer,
  questionReducer,
});

export default rootReducer;
