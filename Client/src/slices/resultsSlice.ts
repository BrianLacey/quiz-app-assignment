import { createSlice } from "@reduxjs/toolkit";
import { IResults, IScore } from "../models";

const initialState: (IResults | IScore)[] = [];

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    addResults: (state, action) => [...action.payload],
    removeResults: (state, action) => {},
  },
});

export const { addResults, removeResults } = resultsSlice.actions;
export default resultsSlice.reducer;
