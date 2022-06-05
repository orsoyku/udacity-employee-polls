import React, { useEffect } from "react";
import { getQuestions } from "../../redux/actions/questionActions";
import { getUsersSuccess } from "../../redux/actions/userActions";
import { Alert } from "react-bootstrap";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import QuestionCard from "../QuestionCard/index";

const Home = () => {
  const users = useSelector((state) => state.getUsersReducer);
  const auth = useSelector((state) => state.loginReducer);
  console.log("usersss", users);
  const dispatch = useDispatch();

  const questions = useSelector((state) =>
    Object.values(state.questionReducer)
  );

  const answeredQuestions = questions.filter(
    (question) =>
      question.optionOne.votes.includes(auth.id) ||
      question.optionTwo.votes.includes(auth.id)
  );

  const newQuestions = questions.filter(
    (question) =>
      !question.optionOne.votes.includes(auth.id) &&
      !question.optionTwo.votes.includes(auth.id)
  );
  console.log("***", newQuestions);

  useEffect(() => {
    dispatch(getUsersSuccess());
    dispatch(getQuestions());
  }, []);

  return (
    <div>
      <section className="container">
        <div className="left-half">
          <h1>New Questions</h1>
          {newQuestions.length > 0 ? (
            newQuestions.map((newQuestion) => (
              <QuestionCard
                key={newQuestion.id}
                question={newQuestion}
                user={users[newQuestion.author]}
              />
            ))
          ) : (
            <Alert variant="success">
              <p className="mb-0">No new question...</p>
            </Alert>
          )}
        </div>
        <div className="right-half">
          <h1>Answered Questions</h1>
          {answeredQuestions?.length > 0 ? (
            answeredQuestions.map((answeredQuestion) => (
              <QuestionCard
                key={answeredQuestion.id}
                question={answeredQuestion}
                user={users[answeredQuestion.author]}
              />
            ))
          ) : (
            <Alert variant="success">
              <p className="mb-0">No answered question...</p>
            </Alert>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
