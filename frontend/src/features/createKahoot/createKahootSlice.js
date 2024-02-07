import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: "",
  answer_1: "",
  answer_2: "",
  answer_3: "",
  answer_4: "",
  correct_answer: "",
  counter: 0
};

export const createKahootSlice = createSlice({
  name: "createKahoot",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setAnswer1: (state, action) => {
      state.answer_1 = action.payload;
    },
    setAnswer2: (state, action) => {
      state.answer_2 = action.payload;
    },
    setAnswer3: (state, action) => {
      state.answer_3 = action.payload;
    },
    setAnswer4: (state, action) => {
      state.answer_4 = action.payload;
    },
    setCorrectAnswer: (state, action) => {
        state.correct_answer = action.payload;
    },
    increment: (state) => {
        state.counter += 1
    }
  },
});

export const { setAnswer1, setQuestion, setAnswer2, setAnswer3, setAnswer4, setCorrectAnswer, increment } = createKahootSlice.actions;
export default createKahootSlice.reducer;
