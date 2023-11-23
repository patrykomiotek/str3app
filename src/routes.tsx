import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailsPage";
import { CreateProductPage } from "./pages/CreateProductsPage";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

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
  CREATE_PRODUCT: {
    path: "/products/create",
    title: "Create product",
  },
  PRODUCT_DETAILS: {
    path: "/products/:id",
    title: "Product details",
    dynamicPath: (id: string) => `/products/${id}`,
  },
  PRODUCT_LIST: {
    path: "/products",
    title: "Products page",
  },
};

export const router = createBrowserRouter([
  {
    path: Route.HOME.path,
    element: <Layout />,
    // errorElement: <ErrorBoundary />,
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
        path: Route.CREATE_PRODUCT.path,
        element: <CreateProductPage />,
      },
      {
        path: Route.PRODUCT_DETAILS.path,
        element: <ProductDetailPage />,
      },
    ],
  },
]);
