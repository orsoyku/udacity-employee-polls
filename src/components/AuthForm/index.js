import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/actions/loginActions";
import "./styles.css";
const AuthForm = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    dispatch(login(loginInfo));
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleChange();
  };
  return (
    <div className="authForm">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="NameInput"
                  name="id"
                  placeholder="Enter name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
