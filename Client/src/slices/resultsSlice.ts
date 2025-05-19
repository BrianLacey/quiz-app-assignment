import { createSlice } from "@reduxjs/toolkit";
import { IResults, IScore } from "../models";

const initialState: (IResults | IScore)[] = [];

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    addResults: (state, action) => [...action.payload],
    resetResults: (state) => initialState,
  },
});

export const { addResults, resetResults } = resultsSlice.actions;
export default resultsSlice.reducer;
