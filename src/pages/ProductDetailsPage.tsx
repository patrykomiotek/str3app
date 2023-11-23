import { useParams } from "react-router-dom";
import { ProductDetails } from "../features/Products/ProductDetails";

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
      <h1>Product details</h1>
      <ProductDetails id={id} />
    </div>
  );
};
