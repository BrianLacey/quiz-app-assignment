import { array, object, string } from "yup";

const userSelection = object({
  question: string().required(),
  answer: string().required(),
});

export const resultsSchema = array().length(5).of(userSelection).required();
