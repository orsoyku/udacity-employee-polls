import React from "react";
import { Alert } from "react-bootstrap";
import { calculateRates } from "../../utils/data";

const AnswerResultPage = ({ question, userId }) => {
  const optionOneVotes = question[0].optionOne.votes;
  const optionTwoVotes = question[0].optionTwo.votes;

  const chosenOptionOne = optionOneVotes.includes(userId);
  const chosenOptionTwo = optionTwoVotes.includes(userId);

  const rates = calculateRates(optionOneVotes, optionTwoVotes);

  return (
    <div>
      {!chosenOptionTwo && (
        <Alert style={{ width: "25rem", margin: "2vh" }} variant="success">
          <Alert.Heading>
            Selected option: {question[0].optionOne.text}
          </Alert.Heading>
          <p>{optionOneVotes.length} employees voted for this answer.</p>
          <hr />
          <p className="mb-0">
            Total Votes: {optionOneVotes.length + optionTwoVotes.length} - Rate:{" "}
            {rates.optionOneVoteRate}%
          </p>
        </Alert>
      )}
      {!chosenOptionOne && (
        <Alert style={{ width: "25rem", margin: "2vh" }} variant="success">
          <Alert.Heading>
            Selected option: {question[0].optionTwo.text}
          </Alert.Heading>
          <p>{optionTwoVotes.length} employees voted for this answer.</p>
          <hr />
          <p className="mb-0">{rates.optionTwoVoteRate}%</p>
        </Alert>
      )}
    </div>
  );
};

export default AnswerResultPage;
