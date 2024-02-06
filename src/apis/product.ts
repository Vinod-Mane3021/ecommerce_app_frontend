import axios from "axios";

export const getProduct = async (id: string) => {
  try {
    const url = `http://localhost:4000/api/v1/product/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error while getting product", error);
  }
};
