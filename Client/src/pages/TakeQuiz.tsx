import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@headlessui/react";
import { Link } from "react-router";
import { changeLoading } from "../slices/loadingSlice";
import Loading from "../components/Loading";
import RenderQuestion from "../components/RenderQuestion";
import { submitAnswers } from "../services.ts/contentServices";
import { IState, ILoading, IQuiz, ISelected } from "../models";

const TakeQuiz = () => {
  const dispatch = useDispatch();
  const loading: ILoading = useSelector((state: IState) => state.loading);
  const quiz: IQuiz[] = useSelector((state: IState) => state.quiz);
  const selected: ISelected[] = useSelector((state: IState) => state.selected);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (quiz.length > 0) dispatch(changeLoading(false));
  }, [quiz]);

  useEffect(() => {
    if (selected.length === 5) {
      setDisabled(false);
    }
  }, [selected.length]);

  const submit = async() => {
    dispatch(changeLoading(true));
    await submitAnswers(selected);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-y-16 pt-24 text-yellow-950">
          <div className="flex justify-center text-4xl font-bold">Quiz</div>
          {quiz.map((item) => (
            <RenderQuestion quiz={item} key={item.question} />
          ))}
          <div className="flex justify-center">
            {disabled ? (
              <Button
                className="bg-zinc-300 text-black text-lg p-4.5 rounded-xl"
                disabled={disabled}
              >
                Submit
              </Button>
            ) : (
              <Link
                className="bg-yellow-950 text-white text-lg p-4.5 rounded-xl hover:bg-slate-900 active:p-3 active:mx-[9px] active:mt-1 active:text-base"
                to="/results"
                onClick={submit}
              >
                Submit
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TakeQuiz;
