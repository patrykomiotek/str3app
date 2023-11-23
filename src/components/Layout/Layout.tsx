import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { ThemeSwitcher } from "../Theme/ThemeSwitcher";

export const Layout = () => {
  return (
    <ErrorBoundary>
      <div>
        <ThemeSwitcher />
        <Menu />
        <Outlet />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
