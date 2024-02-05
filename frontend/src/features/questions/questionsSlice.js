import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import QuestionService from "../../services/QuestionService";

const initialState = {
  questions: [],
  isLoading: true,
  questionNumber: 0,
};

export const getQuestions = createAsyncThunk(
  "question/getQuestions",
  async () =>
    QuestionService.getQuestions()
      .then((res) => res.data)
      .catch((err) => console.log(err))
);

export const questionsSLice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestionNumber: (state) => {
      state.questionNumber += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload;
      })
      .addCase(getQuestions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setQuestion, setQuestionNumber } = questionsSLice.actions;
export default questionsSLice.reducer;
