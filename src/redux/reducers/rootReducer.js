import { combineReducers } from "redux";
import getUsersReducer from "./getUsersReducer";
import loginReducer from "./loginReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  getUsersReducer,
  loginReducer,
  questionReducer,
});

export default rootReducer;
