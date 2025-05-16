import { ISelectedCategory, IDifficulty, ISelected } from "../models";

export const fetchContent = async (
  category: ISelectedCategory,
  difficulty: IDifficulty["name"]
) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/quiz?category=${category}&difficulty=${difficulty.toLowerCase()}&amount=5`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const submitAnswers = async (answers: ISelected[]) => {
  try {
    const response = await fetch("http://localhost:3001/api/quiz/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
