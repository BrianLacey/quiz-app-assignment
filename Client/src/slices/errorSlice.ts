import { createSlice } from "@reduxjs/toolkit";
import { IError } from "../models";

const initialState: IError = {
  isOpen: false,
  message: "",
};

const errorSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    updateError: (state, action) => action.payload,
    resetError: (state) => initialState,
  },
});

export const { updateError, resetError } = errorSlice.actions;
export default errorSlice.reducer;
