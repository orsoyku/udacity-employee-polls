import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSuccess } from "./redux/actions/userActions";

const App = () => {
  const users = useSelector((state) => state.getUsersReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersSuccess());
  }, []);
  return <div className="App"></div>;
};

export default App;
