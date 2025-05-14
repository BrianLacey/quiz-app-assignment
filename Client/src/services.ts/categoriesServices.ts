export const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
