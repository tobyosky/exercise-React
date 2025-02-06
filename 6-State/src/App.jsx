import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter initialValue={5} increment={5} />
    </>
  );
}

export default App;
