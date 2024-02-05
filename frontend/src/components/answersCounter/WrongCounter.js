import React from "react";
import { useSelector } from "react-redux";

const WrongCounter = () => {
  const counter = useSelector((state) => state.answer.wrongAnswer);

  return <div>Wrong Answer {counter}</div>;
};

export default WrongCounter;
