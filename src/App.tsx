import { useState } from "react";
import "./App.css";
// import { Text as MyText } from "./ui";
import { Button, Text } from "./ui";
import { Generator } from "./components/Generator";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>Today is Wednesday</Text>
      <Button label="Click me" />
      {/* <Button label="Click me" bgColor="midnight-blue" color="clouds" /> */}
      <Generator />
      <Counter />
    </>
  );
}

export default App;
