import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSuccess } from "./redux/actions/userActions";
import AuthForm from "./components/AuthForm";

const App = () => {
  const users = useSelector((state) => state.getUsersReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersSuccess());
  }, []);
  return <div className="App">
    <AuthForm></AuthForm>
  </div>;
};

export default App;
