import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailsPage";

export const Route = {
  HOME: {
    path: "/",
    title: "Home page",
  },
  ABOUT: {
    path: "/about",
    title: "About page",
  },
  CONTACT: {
    path: "/contact",
    title: "Contact page",
  },
  PRODUCT_LIST: {
    path: "/products",
    title: "Products page",
  },
  PRODUCT_DETAILS: {
    path: "/products/:id",
    title: "Product details",
    dynamicPath: (id: string) => `/products/${id}`,
  },
};

export const router = createBrowserRouter([
  {
    path: Route.HOME.path,
    element: <Layout />,
    children: [
      {
        path: Route.HOME.path,
        element: <HomePage />,
      },
      {
        path: Route.ABOUT.path,
        element: <AboutPage />,
      },
      {
        path: Route.CONTACT.path,
        element: <ContactPage />,
      },
      {
        path: Route.PRODUCT_LIST.path,
        element: <ProductsPage />,
      },
      {
        path: Route.PRODUCT_DETAILS.path,
        element: <ProductDetailPage />,
      },
    ],
  },
]);
