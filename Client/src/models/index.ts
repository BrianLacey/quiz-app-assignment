export interface IState {
  categories: ICategory[];
  loading: ILoading;
  quiz: IQuiz[];
  selected: ISelected[];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IDifficulty {
  id: number;
  name: "Easy" | "Medium" | "Hard";
}

export interface ILoading {
  loading: boolean;
}

export type ISelectedCategory = number;

export type ISelectedDifficulty = number;

export interface IQuiz {
  category: string;
  difficulty: string;
  question: string;
  type: string;
  allAnswers: string[];
}

export interface ISelected {
  question: string;
  answer: string;
}