import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import LoginPage from "../components/LoginPage";
import TabBar from "../components/TabBar";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact component={<LoginPage />}></Route>
        {/* <Route path="/login" element={<PrivateRoute component={LoginPage} />} /> */}
        <PrivateRoute path="/login" exact component={LoginPage}></PrivateRoute>
      </Routes>
    </div>
  );
};

export default AppRouter;
