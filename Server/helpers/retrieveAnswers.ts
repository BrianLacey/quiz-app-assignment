import { ISelected } from "../models";
import contentServices from "../services/contentService";

const retrieveAnswers = (selections: ISelected[]) => {
  return Promise.all(
    selections.map(async (item) => {
      const [correct_answer] = await contentServices.readByQ(item.question);
      return { ...item, ...correct_answer };
    })
  );
};
export default retrieveAnswers;
