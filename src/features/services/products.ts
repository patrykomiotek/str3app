import { api } from "../../services/config";
import { ProductDto, ProductsResponse } from "../types/products";

export const fetchProducts = () => {
  // TODO: parse
  return api.get<ProductsResponse>("/products"); // trow new InvalidBackedResponse
};

export const fetchProduct = (id: ProductDto["id"]) => {
  // TODO: parse
  return api.get<ProductDto>(`/products/${id}`); // trow new InvalidBackedResponse
};
