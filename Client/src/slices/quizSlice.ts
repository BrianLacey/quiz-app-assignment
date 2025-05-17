import { createSlice } from "@reduxjs/toolkit";
import { IQuiz } from "../models";

const initialState: IQuiz[] = [];

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz: (state, action) => [...action.payload],
    resetQuiz: (state) => [],
  },
});

export const { addQuiz, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;