import React from "react";
import { useSelector } from "react-redux";

const CorrectCounter = () => {
  const counter = useSelector((state) => state.answer.correctAnswer);

  return <div>Correct Answer {counter}</div>;
};

export default CorrectCounter;
