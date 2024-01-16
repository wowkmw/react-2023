import { useState } from "react";
import "./App.css";

function App() {
  const defaultColor = "bg-gray-600";
  const [color, setColor] = useState(defaultColor);

  return (
    <div className={`w-screen h-screen duration-200 ${color}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-800 px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-blue-600 font-bold bg-white hover:bg-gray-200 transition duration-200"
            onClick={() => setColor("bg-blue-700")}
          >
            Toggle Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-green-600 font-bold bg-white hover:bg-gray-200 transition duration-200"
            onClick={() => setColor("bg-green-700")}
          >
            Toggle Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black font-bold bg-white hover:bg-gray-200 transition duration-200"
            onClick={() => setColor(defaultColor)}
          >
            Reset Background
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
