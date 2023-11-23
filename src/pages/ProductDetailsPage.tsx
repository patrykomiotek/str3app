import { useParams } from "react-router-dom";
import { ProductDetails } from "../features/Products/ProductDetails";
import { Helmet } from "react-helmet-async";
import { Route } from "../routes";

type Params = {
  id: string;
};

export const ProductDetailPage = () => {
  const { id } = useParams<Params>();

  if (!id) {
    return "Not found";
  }

  return (
    <div>
      <Helmet>
        <title>{Route.PRODUCT_DETAILS.title}</title>
      </Helmet>
      <h1>Product details</h1>
      <ProductDetails id={id} />
    </div>
  );
};
