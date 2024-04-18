import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [color, setcolor] = useState("rgb(5 150 105)");
  const [count, setcount] = useState(0);

  function increment() {
    setcount((count) => count + 1);
  }
  function decrement() {
    setcount((count) => count - 1);
  }
  return (
    <>
      <div
        className="w-screen h-screen  flex flex-col"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-3xl font-bold self-center mt-5 py-5">
          Hello Arya! :- Your No. is {count}
        </h1>
        <div className="flex self-center">
          <div className="px-3">
            <Card
              username="Arya Bandhu"
              randomtext="this is a random text , Dont take Seriously !!"
            />
          </div>
          <div className="px-3">
            <Card
              username="Abhishek Kumar"
              randomtext="this text for Abhishek , dont take seriouslly , becouse its for fun !!"
            />
          </div>
        </div>
        <div className="flex self-center mt-2">
          <button className="mx-2 bg-green-600" onClick={increment}>
            Increment
          </button>
          <button className="mx-2 bg-rose-600" onClick={decrement}>
            Decrement
          </button>
        </div>

        <h3 className="text-m font-bold self-center my-2">
          Background Theme
        </h3>
        <div className="flex self-center mt-2 bg-teal-700 px-2 py-2 rounded-3xl" >
        <button className="mx-2 bg-fuchsia-800" onClick={() => setcolor("rgb(232 121 249)")}>
            Fuchsia
          </button>
          <button className="mx-2 bg-red-800" onClick={() => setcolor("rgb(248 113 113)")}>
            Red
          </button>
          <button className="mx-2 bg-amber-800" onClick={() => setcolor("rgb(251 191 36)")}>
            Amber
          </button>
          <button className="mx-2 bg-cyan-800" onClick={() => setcolor("rgb(34 211 238)")}>
            Cyan
          </button>
          <button className="mx-2 bg-violet-800" onClick={() => setcolor("rgb(167 139 250)")}>
            Violet
          </button>
          <button className="mx-2 bg-slate-800" onClick={() => setcolor("rgb(148 163 184)")}>
            Slate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
