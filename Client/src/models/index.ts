export interface IState {
  categories: ICategory[];
  loading: ILoading;
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
