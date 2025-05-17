import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../models";

const initialState: ICategory[] = [];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, action) => [...action.payload],
    resetCategories: (state) => [],
  },
});

export const { addCategories, resetCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
