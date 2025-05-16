import { useSelector, useDispatch } from "react-redux";
import { Button } from "@headlessui/react";
import { IQuiz, ISelected, IState } from "../models";
import { updateSelected } from "../slices/selectedSlice";

const RenderQuestion = ({ quiz }: { quiz: IQuiz }) => {
  const dispatch = useDispatch();
  const { question, allAnswers } = quiz;
  const [selected]: ISelected[] = useSelector((state: IState) => state.selected).filter((item) => item.question === question);

  const handleSelected = (e) => {
    const { textContent } = e.target;
    dispatch(updateSelected({ question, answer: textContent }));
  };

  return (
    <div className="flex flex-col pl-8 gap-y-8 text-3xl">
      {question.replace(/&#039;/g, "\'").replace(/&quot;/g, '\"').replace(/&amp;/g, "\&")}
      <div className="flex flex-row gap-x-8">
        {allAnswers.map((answer) => {
          return (
            <Button
              key={answer}
              className={`${
                selected?.answer === answer ? "bg-yellow-950 text-white" : ""
                } border-yellow-950 border-2 text-lg font-medium p-4.5 rounded-xl hover:border-slate-900 hover:bg-yellow-950 hover:text-white`}
              onClick={handleSelected}
            >
              {answer}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default RenderQuestion;
