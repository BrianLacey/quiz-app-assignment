import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router";
import { changeLoading } from "../slices/loadingSlice";
import { addResults } from "../slices/resultsSlice";
import { resetError, updateError } from "../slices/errorSlice";
import Loading from "../components/Loading";
import RenderQuestion from "../components/RenderQuestion";
import Alert from "../components/Alert";
import NotFound from "./NotFound";
import { submitAnswers } from "../services.ts/contentServices";
import { IState, ILoading, IQuiz, ISelected } from "../models";

const TakeQuiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading: ILoading = useSelector((state: IState) => state.loading);
  const quiz: IQuiz[] = useSelector((state: IState) => state.quiz);
  const selected: ISelected[] = useSelector((state: IState) => state.selected);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    dispatch(changeLoading(false));
  }, []);

  useEffect(() => {
    if (selected.length === 5) {
      setDisabled(false);
    }
  }, [selected.length]);

  const closeAlert = () => {
    dispatch(resetError());
  };

  const submit = async () => {
    dispatch(changeLoading(true));
    try {
      dispatch(addResults(await submitAnswers(selected)));
      navigate("/results");
    } catch (error) {
      dispatch(changeLoading(false));
      dispatch(updateError({ isOpen: true, message: error.message }));
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : quiz.length > 0 ? (
        <>
          <Alert onClose={closeAlert} />
          <div className="flex flex-col gap-y-16 pt-24 text-yellow-950">
            <div className="flex justify-center text-4xl font-bold">Quiz</div>
            {quiz.map((item) => (
              <RenderQuestion quiz={item} key={item.question} />
            ))}
            <div className="flex justify-center">
              <Button
                className="bg-yellow-950 text-white text-lg p-4 rounded-xl hover:bg-slate-900 active:p-3 active:mx-[9px] active:mt-1 active:text-base disabled:bg-zinc-300 disabled:text-black"
                disabled={disabled}
                onClick={submit}
              >
                Submit
              </Button>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default TakeQuiz;
