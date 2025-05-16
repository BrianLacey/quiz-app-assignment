import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../models";

const initialState: ICategory[] = [];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, action) => [...action.payload],
    removeCategories: (state, action) => {},
  },
});

export const { addCategories, removeCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
