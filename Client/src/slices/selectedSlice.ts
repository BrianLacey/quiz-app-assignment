import { createSlice } from "@reduxjs/toolkit";
import { ISelected } from "../models";

const initialState: ISelected[] = [];

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    addSelected: (state, action) => [...action.payload],
    removeSelected: (state, action) => {},
  },
});

export const { addSelected, removeSelected } = selectedSlice.actions;
export default selectedSlice.reducer;
