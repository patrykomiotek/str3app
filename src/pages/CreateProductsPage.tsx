import { Helmet } from "react-helmet-async";
import { CreateProduct } from "../features/Products/CreateProduct";
import { Route } from "../routes";

export const CreateProductPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.CREATE_PRODUCT.title}</title>
      </Helmet>
      <h1>Create product</h1>
      <CreateProduct />
    </div>
  );
};
