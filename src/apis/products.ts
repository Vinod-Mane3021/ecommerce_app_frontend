import axios from "axios";
import { useParams } from "next/navigation";

export interface ProductsProps {
  size: number;
  data: ProductType[];
}

export interface ProductType {
  id: number;
  image: string;
  name: string;
  brand: string;
  retail_price: number;
  discounted_price: number;
  discount: number;
}

export const getProducts = async (
  name: string,
  minPrice: number,
  maxPrice: number,
  page: number,
  pageSize: number,
  categories: Array<string>,
  brands: Array<string>,
) => {
  const baseUrl = "http://localhost:4000/api/v1/"

  // console.log("name: " + name)
  // console.log("minPrice: " + minPrice)
  // console.log("maxPrice: " + maxPrice)
  // console.log("page: " + page)
  // console.log("pageSize: " + pageSize)
  // console.log("categories: " + categories)

  // const pageSize = 50;
  const categoriesQuery = categories.map(category => `categories=${category}`).join('&')
  const url = `${baseUrl}/product?minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&pageSize=${pageSize}&${categoriesQuery}`;
  console.log("URI : ", url)
  const response = await axios.get(url);
  const data = response.data;
  console.log("data length :", data)
  return data.data;
};






  // const url = `${baseUrl}/products?name=${name}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&pageSize=${pageSize}&categories=${categories.join("&categories=")}&brands=${brands.join("&brands=")}`;
