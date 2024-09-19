import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("");

  return (
    <>
      <div className={`w-full h-screen bg-${bgColor}-500`}>
        {/* control-bar */}

        <div className="fixed bg-white bg-opacity-70 bottom-10 w-full max-w-lg mx-auto right-0 left-0 p-4 rounded-lg border-solid border-2 border-slate-700 font-mono font-semibold shadow-lg ">
          <div className="text-center mb-5 font-medium">
            Click the buttons to switch the background color
          </div>
          <div className="flex justify-center gap-5 ">
            <button
              onClick={() => setBgColor("amber")}
              className="bg-amber-500 py-1 px-5 rounded-full hover:bg-amber-400 hover:shadow-md"
            >
              Amber
            </button>

            <button
              onClick={() => setBgColor("lime")}
              className="bg-lime-500  py-1 px-5 rounded-full
            hover:bg-lime-400 hover:shadow-md
            "
            >
              Lime
            </button>
            <button
              onClick={() => setBgColor("teal")}
              className="bg-teal-500  py-1 px-5 rounded-full
            hover:bg-teal-400 hover:shadow-md
            "
            >
              Teal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
