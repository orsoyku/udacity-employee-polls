import { combineReducers } from "redux";
import usersReducer from "./userReducer";
import loginReducer from "./loginReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  usersReducer,
  loginReducer,
  questionReducer,
});

export default rootReducer;
