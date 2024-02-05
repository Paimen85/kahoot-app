import React from "react";
import "./answerComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionNumber } from "../../features/questions/questionsSlice";
import {
  incrementCorrect,
  incrementWrong,
} from "../../features/answers/answersSlice";

const Answer = () => {
  const dispatch = useDispatch();
  const { questionNumber, questions } = useSelector((state) => state.question);
  const { correctAnswer, wrongAnswer } = useSelector((state) => state.answer);

  const answer_1 = useSelector(
    (state) => state.question.questions[questionNumber].answer_1
  );
  const answer_2 = useSelector(
    (state) => state.question.questions[questionNumber].answer_2
  );
  const answer_3 = useSelector(
    (state) => state.question.questions[questionNumber].answer_3
  );
  const answer_4 = useSelector(
    (state) => state.question.questions[questionNumber].answer_4
  );

  const onClickHandler = (e) => {
    if (questionNumber < questions.length - 1) {
      dispatch(setQuestionNumber());
    }

    if (correctAnswer + wrongAnswer <= questions.length - 1) {
      if (e.target.innerText === questions[questionNumber].correct_answer) {
        dispatch(incrementCorrect());
      }

      if (e.target.innerText !== questions[questionNumber].correct_answer) {
        dispatch(incrementWrong());
      }
    }
  };

  return (
    <>
      <button className="answer_btn btn_1" onClick={(e) => onClickHandler(e)} >
        {answer_1}
      </button>
      <button className="answer_btn btn_2" onClick={(e) => onClickHandler(e)} >
        {answer_2}
      </button>
      <button className="answer_btn btn_3" onClick={(e) => onClickHandler(e)} >
        {answer_3}
      </button>
      <button className="answer_btn btn_4" onClick={(e) => onClickHandler(e)} >
        {answer_4}
      </button>
    </>
  );
};

export default Answer;
