import React from "react";
import "./answerComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionNumber } from "../../features/questions/questionsSlice";
import {
  incrementCorrect,
  incrementWrong,
} from "../../features/answers/answersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <button className="answer_btn btn_1" onClick={(e) => onClickHandler(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(270)"
          height="32"
          width="32"
          viewBox="0 0 384 512"
        >
          <path
            fill="#fff"
            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
          />
        </svg>{" "}
        {answer_1}
      </button>
      <button className="answer_btn btn_2" onClick={(e) => onClickHandler(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="32"
          viewBox="0 0 600 512"
        >
          <path
            fill="#fff"
            d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"
          />
        </svg>{" "}
        {answer_2}
      </button>
      <button className="answer_btn btn_3" onClick={(e) => onClickHandler(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="32"
          viewBox="0 0 600 512"
        >
          <path
            fill="#fff"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
          />
        </svg>{" "}
        {answer_3}
      </button>
      <button className="answer_btn btn_4" onClick={(e) => onClickHandler(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="32"
          viewBox="0 0 384 512"
        >
          <path
            fill="#fff"
            d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
          />
        </svg>{" "}
        {answer_4}
      </button>
    </>
  );
};

export default Answer;
