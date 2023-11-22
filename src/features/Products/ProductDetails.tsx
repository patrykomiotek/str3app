import { useEffect, useState } from "react";
import { fetchProduct } from "../services/products";
import { ProductDto } from "../types/products";

type Props = {
  id: string;
};

export const ProductDetails = ({ id }: Props) => {
  const [data, setData] = useState<ProductDto | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchProduct(id);
        setData(response.data);
      } catch (_error) {
        // if (error instanceof InvalidBackedResponse) {
        // }

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    void loadData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oh no, error!</p>;
  }

  return <h1>Product {data?.fields.name}</h1>;
};
