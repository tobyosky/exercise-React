import "./App.css";
import AlertClock from "./components/AlertClock";

function App() {
  function handleShowTime() {
    const timeNow = new Date();

    alert(`Current time is ${timeNow.toLocaleTimeString()}`);
  }

  return (
    <>
      <AlertClock label="Click me!" onClick={handleShowTime} />
    </>
  );
}

export default App;
