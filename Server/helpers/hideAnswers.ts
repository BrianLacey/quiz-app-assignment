import { IQuizDoc } from "../models";

const hideAnswers = (doc: IQuizDoc[]) => {
  return doc.map((item: IQuizDoc) => {
    const { correct_answer, incorrect_answers, type, ...rest } = item;
    const allAnswers = [...incorrect_answers, correct_answer].sort();
    return { ...rest, allAnswers };
  });
};

export default hideAnswers;
