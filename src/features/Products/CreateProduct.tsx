import { createProduct } from "../services/products";
import { FieldValues } from "../types/dtos";
import { ProductForm } from "./ProductForm";

export const CreateProduct = () => {
  const handleSubmit = async (data: FieldValues) => {
    try {
      const response = await createProduct(data);
      console.log(response);
    } catch {
      console.error("Oh no!");
    }
  };

  return (
    <div>
      {/* <h1>Create Product below</h1> */}
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};
