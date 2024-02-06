import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "../features/questions/questionsSlice";
import answersSlice from "../features/answers/answersSlice";
import loginSlice from "../features/login/loginSlice";
import createKahootSlice from "../features/createKahoot/createKahootSlice";

export const store = configureStore({
    reducer: {
        question: questionsSlice,
        answer: answersSlice,
        login: loginSlice,
        createKahoot: createKahootSlice
    }
})