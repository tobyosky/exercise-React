import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MouseClicker from "./components/MouseClicker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MouseClicker />
    </>
  );
}

export default App;
