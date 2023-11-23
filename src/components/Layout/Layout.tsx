import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Menu } from "./Menu";

export const Layout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};
