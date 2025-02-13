import "./App.css";
import Color from "./components/Color";
import Colors from "./components/Colors";

function App() {
  const color = { id: 1, name: "red" };

  const colors = [
    { id: 1, name: "red" },
    { id: 2, name: "yellow" },
    { id: 3, name: "blue" },
    { id: 4, name: "green" },
  ];

  return (
    <>
      <ul>
        <Color color={color} />
      </ul>

      <Colors colors={colors} />
    </>
  );
}

export default App;
