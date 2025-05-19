import categoriesService from "../services/categoriesService";

const categoryFromIds = async (category: string) => {
  try {
    const [data] = await categoriesService.readById(parseInt(category));
    const { name } = data;
    return name;
  } catch (error) {
    throw error;
  }
};

export default categoryFromIds;
