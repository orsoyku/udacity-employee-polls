import { combineReducers } from "redux";
import getUsersReducer from "./getUsersReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  getUsersReducer,
  loginReducer,
});

export default rootReducer;
