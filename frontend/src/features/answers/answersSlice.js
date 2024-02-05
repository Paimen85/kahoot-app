import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    correctAnswer: 0,
    wrongAnswer: 0
}

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers:{
        incrementCorrect: (state) => {
            state.correctAnswer += 1
        },
        incrementWrong: (state) => {
            state.wrongAnswer += 1
        },
    }
})

export const {incrementCorrect, incrementWrong} = answersSlice.actions
export default answersSlice.reducer