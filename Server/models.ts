export interface IQuizDoc {
  category: string;
  difficulty: string;
  question: string;
  type: string;
  incorrect_answers: string[];
  correct_answer: string;
}

export interface ISelected {
  question: string;
  answer: string;
}

export interface IWithCorrect {
  question: string;
  answer: string;
  correct_answer: string;
}
