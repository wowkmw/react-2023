import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const props = "hahahah";

  return (
    <>
      <h1 className="text-white bg-slate-600 rounded-lg p-4 text-5xl">
        Vite with tailwind
      </h1>
      <Card myText={props} />
      <Card />
    </>
  );
}

export default App;
