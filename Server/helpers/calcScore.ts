import { IWithCorrect } from "../models";

const calcScore = (withCorrect: IWithCorrect[]) => {
  const score = withCorrect.reduce((total, current) => {
    const { answer, correct_answer } = current;
    if (answer === correct_answer) {
      return ++total;
    } else {
      return total;
    }
  }, 0);
  return [
    ...withCorrect,
    { score: `You scored ${score} out of ${withCorrect.length}` },
  ];
};
export default calcScore;
