export const fetchCategories = async () => {
  const response = await fetch("http://localhost:3001/api/categories", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw await response.json();
  } else {
    return response.json();
  }
};
