import { fetchProducts } from "../services/products";
import { ProductDto } from "../types/products";
import { useApi } from "../../hooks/useApi";
import { Route } from "../../routes";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const ProductsList = () => {
  // const { data, isLoading, isError } = useApi<ProductDto[]>(fetchProducts);
  const { data, isLoading, isError } = useQuery<ProductDto[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    // dispatch(loadProducts())
  }, [data]);

  // result.

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oh no, error!</p>;
  }

  return (
    <>
      {/* <h1>Products</h1> */}
      <div className="mt-2">
        <Link
          to={Route.CREATE_PRODUCT.path}
          className="bg-blue-500 hover:bg-blue-700 text-white hover:text-white font-bold py-2 px-4 rounded"
        >
          <span>Create product</span>
        </Link>
        <ul>
          {data &&
            data.map((elem) => (
              <li key={elem.id}>
                <Link to={`${Route.PRODUCT_DETAILS.dynamicPath(elem.id)}`}>
                  {elem.fields.name}
                </Link>{" "}
                {elem.fields.description}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
