import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "../features/questions/questionsSlice";
import answersSlice from "../features/answers/answersSlice";

export const store = configureStore({
    reducer: {
        question: questionsSlice,
        answer: answersSlice
    }
})