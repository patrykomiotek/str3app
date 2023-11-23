import { MouseEventHandler, useEffect, useRef, useState } from "react";
import "./App.css";
// import { Text as MyText } from "./ui";
import { Button, Text } from "./ui";
import { Generator } from "./components/Generator";
import { Counter } from "./components/Counter";
import { RegistrationFormState } from "./components/RegistrationFormState";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs";
import { RegistrationFormRefsLegacy } from "./components/RegistrationFormRefsLegacy";
import { MagicButton } from "./ui/MagicButton";
import { ProductsList } from "./features/Products/ProductsList";
import { ProductDetails } from "./features/Products/ProductDetails";
import { ViewPort } from "./components/ViewPort";
import { ProductForm } from "./features/Products/ProductForm";
import { CreateProduct } from "./features/Products/CreateProduct";

function App() {
  // const [count, setCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#c0392b";
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#27ae60";
    }
  };

  return (
    <>
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
      <ProductsList />
      {/* <ProductDetails id="rec5c99tUqiFYiLb8" /> */}
      {/* <ViewPort /> */}
      {/* <ProductForm /> */}
      {/* <CreateProduct /> */}
    </>
  );
}

export default App;
