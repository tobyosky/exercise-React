import "./App.css";
import Clock from "./components/Clock";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter initialValue={2} increment={2} />
      <Clock />
    </>
  );
}

export default App;
