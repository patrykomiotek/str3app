import { api } from "../../services/config";
import { ProductsResponse } from "../types/products";

export const fetchProducts = () => {
  // parse
  return api.get<ProductsResponse>("/products"); // trow new InvalidBackedResponse
};
