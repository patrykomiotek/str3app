import { fetchProduct } from "../services/products";
import { ProductDto } from "../types/products";
import { useApi } from "../../hooks/useApi";

type Props = {
  id: string;
};

export const ProductDetails = ({ id }: Props) => {
  const { data, isLoading, isError } = useApi<ProductDto>(() =>
    fetchProduct(id)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oh no, error!</p>;
  }

  return <h1>Product {data?.fields.name}</h1>;
};
