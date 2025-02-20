import "./App.css";
import Counter from "./components/Counter";
import CurrentLocation from "./components/CurrentLocation";
import GithubUser from "./components/GithubUser";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Counter initialValue={0} />
      <Login />
      <GithubUser />
      <CurrentLocation />
    </>
  );
}

export default App;
