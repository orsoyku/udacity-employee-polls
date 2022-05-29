import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/loginActions";
import "./styles.css";
const AuthForm = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginInfo));
  };

  return (
    <div className="authForm">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="NameInput"
                  name="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
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
