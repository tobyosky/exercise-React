import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UncontrolledLogin from "./components/UncontrolledLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UncontrolledLogin />
    </>
  );
}

export default App;
