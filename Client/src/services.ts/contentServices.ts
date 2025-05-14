import { ISelectedCategory, IDifficulty } from "../models";

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
