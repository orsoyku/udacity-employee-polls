import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion } from "../../redux/actions/questionActions";
import "./styles.css";
import { Form, Button } from "react-bootstrap";

const NewQuestionForm = () => {
  const [options, setOptions] = useState({});
  const auth = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const author = auth["id"];

    dispatch(createQuestion({ ...options, author }));
  };
  debugger;
  const answer = useSelector((state) => {
    console.log(state);
  });

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
