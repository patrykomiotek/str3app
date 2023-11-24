import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

export const Layout = () => {
  return (
    <div>
      <Menu />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};
