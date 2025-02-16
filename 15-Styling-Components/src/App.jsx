import "./App.css";
import Counter from "./components/Counter";
import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login";

function App() {
  function onLogin(data) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <InteractiveWelcome />
      <Login onLogin={onLogin} />
      <Counter />
    </>
  );
}

export default App;
