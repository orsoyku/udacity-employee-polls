import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion } from "../../redux/actions/questionActions";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Form, Button } from "react-bootstrap";

const NewQuestionForm = () => {
  const [options, setOptions] = useState({});
  const navigate = useNavigate();
  const auth = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const author = auth["id"];
      if (options.optionOneText && options.optionTwoText) {
        dispatch(createQuestion({ ...options, author }));
        alert("Submit is success..");
        navigate("/");
      } else {
        alert("Please enter options correctly..");
      }
    } catch (error) {
      alert("Ups,something went wrong, try again..");
    }
  };
  return (
    <div className="formContainer mt-5">
      <h2>Would You Rather</h2>
      <p>Create Your Own Poll</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Option</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="optionOneText"
            placeholder="Option One"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Second Option</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="optionTwoText"
            placeholder="Option Two"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewQuestionForm;
