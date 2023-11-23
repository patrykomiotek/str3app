import { Link } from "react-router-dom";
import { Route } from "../../routes";

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={Route.HOME.path}>Home</Link>
          </li>
          <li>
            <Link to={Route.PRODUCT_LIST.path}>Products</Link>
          </li>
          <li>
            <Link to={Route.ABOUT.path}>About</Link>
          </li>
          <li>
            <Link to={Route.CONTACT.path}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
