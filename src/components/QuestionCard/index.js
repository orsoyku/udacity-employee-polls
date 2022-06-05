import React from "react";
import { Card, Button } from "react-bootstrap";

const QuestionCard = (props) => {
  console.log("props", props);
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img src={props.user.avatarURL} variant="top" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
