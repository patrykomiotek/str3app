import { FieldValues } from "../types/dtos";
import { ProductForm } from "./ProductForm";

export const CreateProduct = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Create Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};
