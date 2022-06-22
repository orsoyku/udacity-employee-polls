import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AnswerResultpage from "../AnswerResultPage/index";
import { Button } from "react-bootstrap";
import { saveQuestionAnswer } from "../../redux/actions/questionActions";
import "./styles.css";
const QuestionDetailPage = () => {
  const [disabledStatus, setDisabledStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const questions = useSelector((state) => {
    return Object.values(state.questionReducer);
  });
  debugger
  const selectedQuestion = questions
    ? questions.find((question) => question.id === id)
    : null;

  const users = useSelector((state) => state.getUsersReducer);
  const selectedUser = users ? users[selectedQuestion.author] : null;
  const auth = useSelector((state) => state.loginReducer);

  const answeredQuestionsStatus = selectedQuestion.optionOne.votes.includes(auth.id) || selectedQuestion.optionTwo.votes.includes(auth.id)

 
  const handleAnswer = (option) => {
    const author = auth["id"];
    dispatch(saveQuestionAnswer(author, id, option));
    navigate("/questions/" + id);
    setDisabledStatus(true);
  };

  return (
    <>
      <div className="question-container">
        <img className="avatar" alt="avatar" src={selectedUser.avatarURL}></img>
        <h3 className="text">Would You Rather</h3>
        <div className="option-text">
          <Button
            onClick={() => handleAnswer("optionOne")}
            style={{ padding: "2vh", margin: "2vh" }}
            variant="success"
            disabled={disabledStatus}
          >
            {selectedQuestion.optionOne.text}
          </Button>
          <Button
            onClick={() => handleAnswer("optionTwo")}
            style={{ padding: "2vh", margin: "2vh" }}
            variant="success"
            disabled={disabledStatus}
          >
            {selectedQuestion.optionTwo.text}
          </Button>
        </div>
        {answeredQuestionsStatus && (
          <AnswerResultpage userId={auth.id} question={selectedQuestion} />
        )}
      </div>
    </>
  );
};
export default QuestionDetailPage;
