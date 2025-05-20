import categoriesServices from "../services/categoriesService";
import contentServices from "../services/contentService";
import { categoriesData, contentData } from "../assets/mockData";

const seedDb = async () => {
  const [categories, content] = await Promise.allSettled([
    categoriesServices.readAll(),
    contentServices.readAll(),
  ]);
  let errors: { name: string; reason: Error }[] = [];
  [
    { ...categories, name: "categories", data: categoriesData },
    { ...content, name: "content", data: contentData },
  ].map((item) => {
    const { name, status, data } = item;
    if (status === "rejected") {
      errors.push({ name, reason: item.reason });
    }
    if (status === "fulfilled" && item.value.length < 1) {
      if (name === "categories") categoriesServices.seedDb(data);
      if (name === "content") contentServices.seedDb(data);
    }
  });
  if (errors.length > 0) {
    const errorLog = errors.map((error) => {
      const { name, reason } = error;
      return { name, reason: reason.message };
    });
    console.error("Errors: ", errorLog);
  }
};

export default seedDb;
