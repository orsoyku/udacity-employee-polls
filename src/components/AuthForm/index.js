import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/loginActions";
import { Form } from "react-bootstrap";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const [loginInfo, setLoginInfo] = useState("");
  const navigate = useNavigate();
  const users = Object.values(useSelector((state) => state.getUsersReducer));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    debugger
    setLoginInfo(e.target.value);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (loginInfo !== "") {
      dispatch(login(loginInfo));
    } else {
      alert("Please select a user...");
      navigate("/login");
    }
  };

  return (
    <div className="authForm">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <Form.Select data-testid="cred" size="lg" name="cred" onChange={handleChange}>
                  <option value="">Please select a user...</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <button data-testid="submitButton" disabled={loginInfo === ""} type="submit" className="btn btn-primary mt-2">
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
