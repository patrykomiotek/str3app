import { useState } from "react";
import "./App.css";
// import { Text as MyText } from "./ui";
import { Button, Text } from "./ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>Today is Wednesday</Text>
      <Button label="Click me" />
      {/* <Button label="Click me" bgColor="midnight-blue" color="clouds" /> */}
    </>
  );
}

export default App;
