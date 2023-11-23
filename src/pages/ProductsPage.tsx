import { Helmet } from "react-helmet-async";
import { ProductsList } from "../features/Products";
import { Route } from "../routes";

export const ProductsPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.PRODUCT_LIST.title}</title>
      </Helmet>
      <h1>Products</h1>
      <ProductsList />
    </div>
  );
};
