import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const QuestionDetailPage = (props) => {
  const { id } = useParams();
  const questionIds = useSelector((state) => {
    return Object.keys(state.questionReducer);
  });
  const selectedQuestion = questionIds.find((questionId) => questionId === id);
  console.log(selectedQuestion);
  return <div>QuestionDetailPage</div>;
};
export default QuestionDetailPage;
