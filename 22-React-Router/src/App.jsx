import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Counter from "./pages/Counter";
import GithubUserList from "./pages/GithubUserList";
import ShowGithubUser from "./pages/ShowGithubUser";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Welcome</Link> | <Link to="/counter">Counter</Link> |
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Antonio" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":id" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<h1>"Not Found"</h1>} />
      </Routes>
    </>
  );
}

export default App;
