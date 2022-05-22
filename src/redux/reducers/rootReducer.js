import { combineReducers } from "redux";
import getUsersReducer from "./getUsersReducer";

const rootReducer = combineReducers({
  getUsersReducer,
});

export default rootReducer;
