import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { remove } from "./basketSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const OrderSummary = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.basket.products);

  return (
    <div>
      <ul>
        {products.map((elem, index) => (
          <li key={`${elem.id}-${index}`}>
            {elem.fields.name}{" "}
            <FontAwesomeIcon
              icon={faMinusCircle}
              onClick={() => dispatch(remove(elem.id))}
              className="ml-2 cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
