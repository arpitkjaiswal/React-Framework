import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 bg-white px-4 py-3 rounded-3xl shadow-lg">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setBgColor("blue")}
          >
            Blue
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setBgColor("red")}
          >
            Red
          </button>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setBgColor("green")}
          >
            Green
          </button>

          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            onClick={() => setBgColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;