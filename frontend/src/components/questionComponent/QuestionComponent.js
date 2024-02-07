import React from "react";
import "./QuestionComponent.css";

const QuestionComponent = ({ question }) => {
  return <h1 className="question">{question}</h1>;
};

export default QuestionComponent;
