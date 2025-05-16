import { createSlice } from "@reduxjs/toolkit";
import { IQuiz } from "../models";

const initialState: IQuiz[] = [];

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz: (state, action) => [...action.payload],
    removeQuiz: (state, action) => {},
  },
});

export const { addQuiz, removeQuiz } = quizSlice.actions;
export default quizSlice.reducer;