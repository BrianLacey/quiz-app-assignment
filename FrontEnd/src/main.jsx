import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import QuizMaker from "./pages/QuizMaker.tsx";
import { store } from "./store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/quiz-maker" element={<QuizMaker />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
