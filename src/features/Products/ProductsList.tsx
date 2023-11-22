import { useEffect, useState } from "react";
import { fetchProducts } from "../services/products";
import { ProductDto } from "../types/products";

export const ProductsList = () => {
  const [data, setData] = useState<ProductDto[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchProducts();
        setData(response.data.records);
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

  return (
    <>
      <h1>Products</h1>
      <div>
        <ul>
          {data &&
            data.map((elem) => (
              <li key={elem.id}>
                {elem.fields.name} {elem.fields.description}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
