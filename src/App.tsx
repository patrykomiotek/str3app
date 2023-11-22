import { useState } from "react";
import "./App.css";
import { Text } from "./ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>Today is Wednesday</Text>
    </>
  );
}

export default App;
