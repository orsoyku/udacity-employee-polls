import React from "react";

import { Route, Navigate } from "react-router-dom";
import TabBar from "../components/TabBar";

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
