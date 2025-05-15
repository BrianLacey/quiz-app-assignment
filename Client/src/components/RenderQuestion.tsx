import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@headlessui/react";
import { IQuiz, ISelected, IState } from "../models";
import { addSelected } from "../slices/selectedSlice";

const RenderQuestion = ({ quiz }: { quiz: IQuiz }) => {
  const dispatch = useDispatch();
  const { question, allAnswers } = quiz;
  const [select, setSelect] = useState("");
  const selected: ISelected[] = useSelector((state: IState) => state.quiz);

  const handleSelected = (e) => {
    const { textContent } = e.target;
    setSelect(textContent);
    dispatch(addSelected({ question, answer: textContent }));
  };

  return (
    <div className="flex flex-col pl-8 gap-y-8 text-3xl">
      {question.replace(/&#039;/g, "'").replace(/&quot;/g, '"')}
      <div className="flex flex-row gap-x-8">
        {allAnswers.map((answer) => {
          return (
            <Button
              key={answer}
              className={`${
                // Figure out how to distinguish WHICH answer is getting compared here
                // Maybe filter method on selected declaration?
                // Need to change addSelected method to updateSelected.
                // Maybe change data structure of selected in store from array to object. 
                selected.answer === answer ? "bg-yellow-950 text-white" : ""
                // select === answer ? "bg-yellow-950 text-white" : ""
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
