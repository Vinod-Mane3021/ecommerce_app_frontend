import axios from "axios";
const getProducts = async (
  name,
  minPrice,
  maxPrice,
  page,
  categories,
  brands,
) => {
  const baseUrl = "http://localhost:4000/api/v1/"
  const pageSize = 50;
  const url = `${baseUrl}/products?name=${name}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&pageSize=${pageSize}&categories=${categories.join("&categories=")}&brands=${brands.join("&brands=")}`;
  const response = await axios.get(url);
  const data = response.data;
  console.log("data length :", data)
  return data.data;
};


getProducts(
  "", // name
  0, // min price
  Number.MAX_SAFE_INTEGER, // max price
  1, // page number
  ["New In", "Women'", "Clothing"], // categories
  [] // brand
)
