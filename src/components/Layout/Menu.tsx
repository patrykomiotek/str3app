import { Link } from "react-router-dom";
import { Route } from "../../routes";
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";
import { Basket } from "@components/Basket";

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
          {/* <li className="mr-3">
            <Link to={Route.ABOUT.path}>About</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.CONTACT.path}>Contact</Link>
          </li> */}
          <li className="mr-3">
            <Link to={Route.GENERATOR.path}>Generator</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.STEPPER.path}>Stepper</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.AUTH.path}>Auth</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.REGISTRATION_FORM_STATE.path}>
              Registration state
            </Link>
          </li>
          <li className="mr-3">
            <Link to={Route.REGISTRATION_FORM_REFS.path}>
              Registration refs
            </Link>
          </li>
          <li className="mr-3">
            <Link to={Route.COUNTER.path}>Counter</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.VIEWPORT.path}>ViewPort</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.MAGIC_BUTTON.path}>Magic Button</Link>
          </li>
          <li className="mr-3">
            <Link to={Route.ORDER_SUMMARY.path}>
              <Basket />
            </Link>
          </li>
          <li className="mr-3">
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  );
};
