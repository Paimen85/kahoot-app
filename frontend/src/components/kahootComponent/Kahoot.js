import React from "react";
import QuestionComponent from "../questionComponent/QuestionComponent";
import {
  getQuestions,
} from "../../features/questions/questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Answer from "../answerComponent/Answer";
import CorrectCounter from "../answersCounter/CorrectCounter";
import './kahoot.css'
import WrongCounter from "../answersCounter/WrongCounter";


const Kahoot = () => {
  const [hide, setHide] = React.useState(false);

  const { questions, questionNumber } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const startKahoot = () => {
    setHide(true);
  };
  return (
    <>
      {hide && <QuestionComponent question={questions[questionNumber].question} />}
      <Button className={hide ? "hide" : ""} onClick={() => startKahoot()}>
        Begin Kahoot
      </Button>
      {hide && (
        <>
          <CorrectCounter />
          <WrongCounter />
          <Answer />
        </>
      )}
    </>
  );
};

export default Kahoot;
