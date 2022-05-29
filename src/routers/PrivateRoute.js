import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import TabBar from "../components/TabBar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(Component);
  const auth = useSelector((state) => console.log("auth", state));
  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          /**isAuthenticated */
          return;
          <div>
            <TabBar />
            <Component {...rest} />;
          </div>;
        }
        return <Navigate to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
