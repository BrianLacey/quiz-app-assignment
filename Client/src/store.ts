import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import loadingReducer from "./slices/loadingSlice";
import quizReducer from "./slices//quizSlice";
import selectedReducer from "./slices//selectedSlice";

 const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    loading: loadingReducer,
    quiz: quizReducer,
    selected: selectedReducer
  },
});

export default store;
