import { fetchProducts } from "../services/products";
import { ProductDto } from "../types/products";
import { useApi } from "../../hooks/useApi";

export const ProductsList = () => {
  const { data, isLoading, isError } = useApi<ProductDto[]>(fetchProducts);

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
