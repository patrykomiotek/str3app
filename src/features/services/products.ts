import { ZodError, z } from "zod";
import { api } from "../../services/config";
import { FieldValues } from "../types/dtos";
import { ProductDto, ProductsResponse } from "../types/products";

const productsSchema = z.array(
  z.object({
    id: z.string(),
    fields: z.object({
      name: z.string(),
      description: z.string(),
      price: z.number(),
    }),
  })
);

export const fetchProducts = async () => {
  try {
    const response = await api.get<ProductsResponse>("/products");

    const result = productsSchema.parse(response.data.records);
    console.log("result", result);

    return response.data.records;
  } catch (error) {
    console.error(error);
    if (error instanceof ZodError) {
      // TODO: return valid data or something else
    }

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
