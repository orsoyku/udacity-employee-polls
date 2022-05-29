import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import TabBar from "../components/TabBar";

const PrivateRoute = ({ isAuthenticated, component, ...rest }) => {
  const auth = useSelector((state) => console.log("22", state));
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return;
          <div>
            <TabBar />
            <component {...rest} />;
          </div>;
        }
        return <Navigate to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
