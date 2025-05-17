import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import Loading from "../components/Loading";
import RenderAnswer from "../components/RenderAnswer";
import { changeLoading } from "../slices/loadingSlice";
import { resetCategories } from "../slices/categoriesSlice";
import { resetQuiz } from "../slices/quizSlice";
import { resetSelected } from "../slices/selectedSlice";
import { resetResults } from "../slices/resultsSlice";
import { IState, ILoading, IQuiz, IScore } from "../models";

const Results = () => {
  const dispatch = useDispatch();
  const loading: ILoading = useSelector((state: IState) => state.loading);
  const quiz: IQuiz[] = useSelector((state: IState) => state.quiz);
  const results = useSelector((state: IState) => state.results);
  const [quizScore, setQuizScore] = useState<string>("");

  useEffect(() => {
    if (results.length > 0) {
      const getScore: IScore[] = results.filter((item) => {
        const keys = Object.keys(item);
        return keys.includes("score");
      });
      const [{ score }] = getScore;
      setQuizScore(score);
    };
  }, [results]);

  useEffect(() => {
    if (quizScore) { dispatch(changeLoading(false)) }
  }, [quizScore]);

  const scoreColor = () => {
    let color = "";
    switch (quizScore) {
      case "You scored 0 out of 5":
      case "You scored 1 out of 5":
        color = "bg-red-500 text-white";
        break;
      case "You scored 2 out of 5":
      case "You scored 3 out of 5":
        color = "bg-yellow-300 text-black";
        break;
      case "You scored 4 out of 5":
      case "You scored 5 out of 5":
        color = "bg-green-500 text-white";
        break;
      default:
        color = "";
    }
    return color;
  };

  const handleReset = () => {
    dispatch(changeLoading(true));
    dispatch(resetCategories())
    dispatch(resetQuiz())
    dispatch(resetSelected())
    dispatch(resetResults())
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-y-16 pt-24 text-yellow-950">
      <div className="flex justify-center text-4xl font-bold">Results</div>
      {quiz.map((item) => (
        <RenderAnswer quiz={item} key={item.question} />
      ))}
      <div className="flex flex-col justify-center gap-y-4">
        <div className="flex justify-center">
          <div className={`flex justify-center w-128 p-1 rounded-xl ${scoreColor()}`}>
            {quizScore}
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            className="flex justify-center bg-yellow-950 text-white w-64 text-lg p-4.5 rounded-xl hover:bg-slate-900 active:p-3 active:mx-[9px] active:mt-1 active:text-base"
            to="/quiz-maker"
            onClick={handleReset}
          >
            Create a new quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
