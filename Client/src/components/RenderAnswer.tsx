import { useSelector } from "react-redux";
import { Button } from "@headlessui/react";
import { IQuiz, IResults, IState } from "../models";

const RenderQuestion = ({ quiz }: { quiz: IQuiz }) => {
  const { question, allAnswers } = quiz;
  const [results]: IResults = useSelector(
    (state: IState) => state.results
  ).filter((item) => item.question === question);

  return (
    <div className="flex flex-col pl-8 gap-y-8 text-3xl">
      {question
        .replace(/&#039;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")}
      <div className="flex flex-row gap-x-8">
        {allAnswers.map((item) => {
          return (
            <Button
              key={item}
              className={`
                ${
                  results.correct_answer === item
                    ? "bg-green-500 text-white"
                    : results.answer === item &&
                      results.answer !== results.correct_answer
                    ? "bg-red-500 text-white"
                    : ""
                }
                 border-yellow-950 border-2 text-lg font-medium p-4.5 rounded-xl`}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default RenderQuestion;
