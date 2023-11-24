import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const Basket = () => {
  const productCount = useSelector(
    (state: RootState) => state.basket.products.length
  );

  return (
    <span>
      <FontAwesomeIcon icon={faBasketShopping} className="cursor-pointer" />
      {productCount}
    </span>
  );
};
