import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSuccess } from "./redux/actions/userActions";
import { login } from "./redux/actions/loginActions";

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginReducer from "./redux/reducers/loginReducer";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.loginReducer);
  console.log(auth);
  useEffect(() => {
    dispatch(getUsersSuccess());
    auth.isAuthenticated ? navigate("/") : navigate("/login");
  }, [auth.isAuthenticated]);
  return (
    <div className="App">
      {/* <TabBar />
      <Routes>
        <Route path="/" exact element={<LoginPage />}></Route>
        <Route path="/login" exact element={<LoginPage />}></Route>
      </Routes> */}
    </div>
  );
};

export default App;
