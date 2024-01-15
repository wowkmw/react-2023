import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount((previousValue) => previousValue + 1);
  };
  const resetValue = () => {
    setCount(0);
  };
  return (
    <>
      <h1>A simple counter with React</h1>
      <h2>Count: {count}</h2>
      <button onClick={addValue} style={{ marginRight: "10px" }}>
        Increase
      </button>
      <button onClick={resetValue}>Reset</button>
    </>
  );
};

export default App;
