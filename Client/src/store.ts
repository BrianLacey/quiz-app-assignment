import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import loadingReducer from "./slices/loadingSlice";
import quizReducer from "./slices/quizSlice";
import selectedReducer from "./slices/selectedSlice";
import resultsReducer from "./slices/resultsSlice";

 const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    loading: loadingReducer,
    quiz: quizReducer,
    selected: selectedReducer,
    results: resultsReducer
  },
});

export default store;
