import React, { useEffect } from "react";
import AuthForm from "../AuthForm/index";
import { useSelector } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.loginReducer);
  const location = useLocation();
  useEffect(() => {
    if (auth.isAuthenticated) {
      if (location.state != undefined && 'from' in location.state) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    }


  }, [auth.isAuthenticated]);
  return (
    <React.Fragment>
      <AuthForm />
    </React.Fragment>
  );
};

export default LoginPage;
