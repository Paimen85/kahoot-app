import React from "react";
import QuestionComponent from "../questionComponent/QuestionComponent";
import { getQuestions } from "../../features/questions/questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Answer from "../answerComponent/Answer";
import CorrectCounter from "../answersCounter/CorrectCounter";
import "./kahoot.css";
import WrongCounter from "../answersCounter/WrongCounter";
import { useNavigate } from "react-router-dom";

const Kahoot = () => {
  const [hide, setHide] = React.useState(false);
  const navigate = useNavigate()

  const { questions, questionNumber } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const token = sessionStorage.getItem('token')

  const startKahoot = () => {
    if (token && token !== "" && token !== undefined) {
      setHide(true);
    }
    else {
      navigate('/login')
    }
  };
  return (
    <>
      {hide && (
        <QuestionComponent question={questions[questionNumber].question} />
      )}
      <div className="btn-div">
        <Button className={hide ? "hide" : ""} onClick={() => startKahoot()}>
          Begin Kahoot
        </Button>
      </div>

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
