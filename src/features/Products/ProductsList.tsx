import { fetchProducts } from "../services/products";
import { ProductDto } from "../types/products";
import { useApi } from "../../hooks/useApi";
import { Route } from "../../routes";
import { Link } from "react-router-dom";

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
      {/* <h1>Products</h1> */}
      <div>
        <Link to={Route.CREATE_PRODUCT.path}>Create product</Link>
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
