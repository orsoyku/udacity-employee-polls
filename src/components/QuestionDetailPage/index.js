import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import "./styles.css";
const QuestionDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const questions = useSelector((state) => {
    return Object.values(state.questionReducer);
  });
  const selectedQuestion = questions
    ? questions.find((question) => question.id === id)
    : null;
  const users = useSelector((state) => state.getUsersReducer);
  const selectedUser = users ? users[selectedQuestion.author] : null;
  const auth = useSelector((state) => state.loginReducer);
  const answeredQuestions = questions.filter(
    (question) =>
      question.optionOne.votes.includes(auth.id) ||
      question.optionTwo.votes.includes(auth.id)
  );

  const handleAnswer = (option) => {
    dispatch("kdkdkd(id,option)");
  };
  return (
    <>
      <div className="question-container">
        <img className="avatar" alt="avatar" src={selectedUser.avatarURL}></img>
        <h3 className="text">Would You Rather</h3>
        {answeredQuestions ? (
          <div className="option-text">
            <Button
              onClick={handleAnswer("ontionOne")}
              style={{ padding: "2vh", margin: "2vh" }}
              variant="success"
            >
              {selectedQuestion.optionOne.text}
            </Button>
            <Button
              onClick={handleAnswer("ontionTwo")}
              style={{ padding: "2vh", margin: "2vh" }}
              variant="success"
            >
              {selectedQuestion.optionTwo.text}
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
export default QuestionDetailPage;
