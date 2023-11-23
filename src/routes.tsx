import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailsPage";
import { CreateProductPage } from "./pages/CreateProductsPage";
import { GeneratorPage } from "./pages/GeneratorPage";
import { StepperPage } from "./pages/StepperPage";
import { AuthPage } from "./pages/AuthPage";
import { RegistrationFormStatePage } from "./pages/RegistrationFormRefsPage";
import { RegistrationFormRefsPage } from "./pages/RegistrationFormStatePage";
import { CounterPage } from "./pages/CounterPage";
import { ViewPortPage } from "./pages/ViewPortPage";
import { MagicButtonPage } from "./pages/MagicButtonPage";

export const Route = {
  HOME: {
    path: "/",
    title: "Home",
  },
  ABOUT: {
    path: "/about",
    title: "About",
  },
  CONTACT: {
    path: "/contact",
    title: "Contact",
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
    title: "Products",
  },
  GENERATOR: {
    path: "/generator",
    title: "Generator",
  },
  STEPPER: {
    path: "/stepper",
    title: "Stepper",
  },
  AUTH: {
    path: "/auth",
    title: "Auth",
  },
  REGISTRATION_FORM_STATE: {
    path: "/registration-form-state",
    title: "Registration form state",
  },
  REGISTRATION_FORM_REFS: {
    path: "/registration-form-refs",
    title: "Registration form refs",
  },
  COUNTER: {
    path: "/counter",
    title: "Counter",
  },
  VIEWPORT: {
    path: "/viewport",
    title: "View Port",
  },
  MAGIC_BUTTON: {
    path: "/magic-button",
    title: "Magic Button",
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
      {
        path: Route.GENERATOR.path,
        element: <GeneratorPage />,
      },
      {
        path: Route.STEPPER.path,
        element: <StepperPage />,
      },
      {
        path: Route.AUTH.path,
        element: <AuthPage />,
      },
      {
        path: Route.REGISTRATION_FORM_STATE.path,
        element: <RegistrationFormStatePage />,
      },
      {
        path: Route.REGISTRATION_FORM_REFS.path,
        element: <RegistrationFormRefsPage />,
      },
      {
        path: Route.COUNTER.path,
        element: <CounterPage />,
      },
      {
        path: Route.VIEWPORT.path,
        element: <ViewPortPage />,
      },
      {
        path: Route.MAGIC_BUTTON.path,
        element: <MagicButtonPage />,
      },
    ],
  },
]);
