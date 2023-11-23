import { MouseEventHandler, useEffect, useRef } from "react";
// import { Text as MyText } from "./ui";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { router } from "./routes";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { store } from "./store";

import "./App.css";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary fallback={<p>Routing fallback!</p>}>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
              {/* <Text>Today is Wednesday</Text> */}
              {/* <Button label="Click me" /> */}
              {/* <Button label="Click me" bgColor="midnight-blue" color="clouds" /> */}
              {/* <Generator /> */}
              {/* <Counter /> */}
              {/* <RegistrationFormState /> */}
              {/* <RegistrationFormRefs /> */}
              {/* <RegistrationFormRefsLegacy /> */}
              {/* <MagicButton
        ref={buttonRef}
        label="Click me"
        onMouseEnter={handleMouseEnter}
      /> */}
              {/* <ProductsList /> */}
              {/* <ProductDetails id="rec5c99tUqiFYiLb8" /> */}
              {/* <ViewPort /> */}
              {/* <ProductForm /> */}
              {/* <CreateProduct /> */}
              <ReactQueryDevtools initialIsOpen={true} />
            </QueryClientProvider>
          </Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
