import categoriesService from "../services/categoriesService";

const categoryFromIds = async (params: any) => {
  const { category, difficulty, amount } = params;
  console.log(category, difficulty, amount);
  try {
    const doc = await categoriesService.readAll();
    const data =
      doc &&
      doc.trivia_categories.find(
        (_category: any) => _category.id.toString() === category
      );
    const { name } = data;
    // call new function that will query content by above params
  } catch (e) {
    console.log(e);
  }
};

export default categoryFromIds;
