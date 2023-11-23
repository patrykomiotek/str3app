import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

export const Layout = () => {
  return (
    <ErrorBoundary>
      <div>
        <Menu />
        <Outlet />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
