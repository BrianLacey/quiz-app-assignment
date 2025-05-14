import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import loadingReducer from "./slices/loadingSlice";

 const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    loading: loadingReducer,
  },
});

export default store;
