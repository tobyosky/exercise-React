import "./App.css";
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
    </>
  );
}

export default App;
