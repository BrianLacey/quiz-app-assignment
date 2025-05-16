import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Intro from "./pages/Intro.tsx";
import QuizMaker from "./pages/QuizMaker.tsx";
import TakeQuiz from "./pages/TakeQuiz.tsx";
import Results from "./pages/Results.tsx";
import store from "./store.ts";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/quiz-maker" element={<QuizMaker />} />
          <Route path="/take-quiz" element={<TakeQuiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
