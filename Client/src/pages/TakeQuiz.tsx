import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@headlessui/react";
import { changeLoading } from "../slices/loadingSlice";
import Loading from "../components/Loading";
import RenderQuestion from "../components/RenderQuestion";
import { IState, ILoading, IQuiz } from "../models";

const TakeQuiz = () => {
  const dispatch = useDispatch();
  const loading: ILoading = useSelector((state: IState) => state.loading);
  const quiz: IQuiz[] = useSelector((state: IState) => state.quiz);

  useEffect(() => {
    if (quiz.length > 0) dispatch(changeLoading(false));
  }, [quiz]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-y-16 pt-24 text-yellow-950">
          <div className="flex justify-center text-4xl font-bold">Quiz</div>
          {quiz.map((item) => (
            <RenderQuestion quiz={item} key={item.question}  />
          ))}
        </div>
      )}
    </>
  );
};

export default TakeQuiz;
