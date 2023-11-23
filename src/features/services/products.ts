import { api } from "../../services/config";
import { FieldValues } from "../types/dtos";
import { ProductDto, ProductsResponse } from "../types/products";

export const fetchProducts = async () => {
  // TODO: parse
  try {
    const response = await api.get<ProductsResponse>("/products");
    return response.data.records;
  } catch {
    // TODO:
    return [];
  }
};

export const fetchProduct = async (id: ProductDto["id"]) => {
  // TODO: parse
  try {
    const response = await api.get<ProductDto>(`/products/${id}`);
    return response.data;
  } catch {
    // TODO:
    return {} as ProductDto;
  }
};

export const createProduct = async (data: FieldValues) => {
  return api.post("/products", { records: [{ fields: data }] });
};
