import { ISelectedCategory, IDifficulty, ISelected } from "../models";

export const fetchContent = async (
  category: ISelectedCategory,
  difficulty: IDifficulty["name"]
) => {
  const response = await fetch(
    `http://localhost:3001/api/quiz?category=${category}&difficulty=${difficulty.toLowerCase()}&amount=5`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    throw await response.json();
  } else {
    return response.json();
  }
};

export const submitAnswers = async (answers: ISelected[]) => {
  const response = await fetch("http://localhost:3001/api/quiz/score", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(answers),
  });
  if (!response.ok) {
    throw await response.json();
  } else {
    return response.json();
  }
};
