import React, { useEffect } from "react";
import AuthForm from "../AuthForm/index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.loginReducer);
  useEffect(() => {
    auth.isAuthenticated ? navigate("/") : navigate("/login");
  }, [auth.isAuthenticated]);
  return (
    <React.Fragment>
      <AuthForm />
    </React.Fragment>
  );
};

export default LoginPage;
