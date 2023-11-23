import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/products";
import { FieldValues } from "../types/dtos";
import { ProductForm } from "./ProductForm";
import { Route } from "../../routes";

export const CreateProduct = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data: FieldValues) => {
    try {
      const response = await createProduct(data);
      if (response.data.records[0].id) {
        navigate(
          Route.PRODUCT_DETAILS.dynamicPath(response.data.records[0].id)
        );
      }
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
