import { Link } from "react-router-dom";
import { Route } from "../../routes";
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";

export const Menu = () => {
  return (
    <div>
      <nav className="mb-8">
        <ul className="flex list-none">
          <li className="mr-3">
            <Link to={Route.HOME.path}>Home</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.PRODUCT_LIST.path}>Products</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.ABOUT.path}>About</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.CONTACT.path}>Contact</Link>
          </li>
          <li className="mr-3">
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  );
};
