import { createSlice } from "@reduxjs/toolkit";
import { ILoading } from "../models";

const initialState: ILoading = { loading: true };

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    changeLoading: (state, action) => action.payload,
  },
});

export const { changeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
