import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { fetchProducts } from "../services/products";
import { ProductDto } from "../types/products";
import { useApi } from "../../hooks/useApi";
import { Route } from "../../routes";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Button } from "../../ui";
import { useDispatch } from "react-redux";
import { add } from "./basketSlice";

export const ProductsList = () => {
  // const { data, isLoading, isError } = useApi<ProductDto[]>(fetchProducts);
  const { data, isLoading, isError, refetch } = useQuery<ProductDto[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const dispatch = useDispatch();

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
        <div className="mb-4 w-auto">
          <Link
            to={Route.CREATE_PRODUCT.path}
            className="bg-blue-500 hover:bg-blue-700 text-white hover:text-white font-bold py-2 px-4 rounded mr-4"
          >
            <span>Create product</span>
          </Link>
          <Button label="Refetch" onClick={() => refetch()} />
        </div>
        <ul>
          {data &&
            data.map((elem) => (
              <li key={elem.id}>
                <Link to={`${Route.PRODUCT_DETAILS.dynamicPath(elem.id)}`}>
                  {elem.fields.name}
                </Link>{" "}
                {elem.fields.description}
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  onClick={() => dispatch(add(elem))}
                  className="ml-2 cursor-pointer"
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
