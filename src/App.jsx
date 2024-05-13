import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("indigo")

  return (
    <div className="w-full h-screen duration-100"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-5 ">
        <div className="flex flex-wrap justify-center
        gap-5 shadow-lg bg-white px-4 py-2 rounded-3xl">

          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >pink</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2
          rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >green</button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-2
          rounded-full text-white shadow-8xl"
            style={{ backgroundColor: "orange" }}
          >orange</button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2
          rounded-full text-white shadow-8xl"
            style={{ backgroundColor: "pink" }}
          >pink</button>


        </div>
      </div>

    </div>
  )
}

export default App
