import React from "react";
import QuestionService from "../../services/QuestionService";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuestion,
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setAnswer4,
  setCorrectAnswer,
} from "../../features/createKahoot/createKahootSlice";
import { Link } from "react-router-dom";

const CreateKahoot = () => {
  const dispatch = useDispatch();
  const { question, answer_1, answer_2, answer_3, answer_4, correct_answer } =
    useSelector((state) => state.createKahoot);

  const addQuestion = async (e) => {
    e.preventDefault();
    await QuestionService.addQuestion()
      .then()
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-5 offset-md-3">
            <div className="card">
              <h2 className="text-center">Add Question</h2>
              <div className="card-body">
                <form onSubmit={(e) => addQuestion(e)}>
                  <div className="form-group mb-3">
                    <label htmlFor="question" className="form-label">
                      Question:
                    </label>
                    <input
                      type="text"
                      name="question"
                      className="form-control"
                      placeholder="Add Question"
                      value={question}
                      onChange={(e) => dispatch(setQuestion(e.target.value))}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="answer_1" className="form-label">
                      Answer 1:
                    </label>
                    <input
                      type="text"
                      name="answer_1"
                      className="form-control"
                      placeholder="Answer 1"
                      value={answer_1}
                      onChange={(e) => dispatch(setAnswer1(e.target.value))}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="answer_2" className="form-label">
                      Answer 2:
                    </label>
                    <input
                      type="text"
                      name="answer_2"
                      className="form-control"
                      placeholder="Answer 2"
                      value={answer_2}
                      onChange={(e) => dispatch(setAnswer2(e.target.value))}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="answer_3" className="form-label">
                      Answer 3:
                    </label>
                    <input
                      type="text"
                      name="answer_3"
                      className="form-control"
                      placeholder="Answer 3"
                      value={answer_3}
                      onChange={(e) => dispatch(setAnswer3(e.target.value))}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="answer_4" className="form-label">
                      Answer 4:
                    </label>
                    <input
                      type="text"
                      name="answer_4"
                      className="form-control"
                      placeholder="Answer 4"
                      value={answer_4}
                      onChange={(e) => dispatch(setAnswer4(e.target.value))}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="correct_answer" className="form-label">
                      Correct Answer:
                    </label>
                    <input
                      type="text"
                      name="correct_answer"
                      className="form-control"
                      placeholder="Correct Answer"
                      value={correct_answer}
                      onChange={(e) => dispatch(setCorrectAnswer(e.target.value))}
                      required
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-2">
                      <button type="submit" className="btn btn-success">
                        Save
                      </button>
                    </div>
                    <div className="col-sm-2">
                      <Link
                        type="submit"
                        className="btn btn-warning"
                        to={"/login"}
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateKahoot;
