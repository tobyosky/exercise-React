import "./App.css";
import Counter from "./components/Counter";
import FilteredList from "./components/FilteredList";

function App() {
  return (
    <>
      <Counter initialValue={2} />
      <FilteredList
        users={[
          { id: 1, name: "Antonio", age: 23 },
          { id: 2, name: "Francesco", age: 15 },
          { id: 3, name: "Giula", age: 17 },
          { id: 4, name: "Flavio", age: 28 },
          { id: 5, name: "Luca", age: 35 },
          { id: 5, name: "Maria", age: 55 },
        ]}
      />
    </>
  );
}

export default App;
