import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function hanldeSearch() {
    if (inputValue.trim() !== "" && !users.includes(inputValue.trim())) {
      setUsers([...users, inputValue.trim()]);
      setInputValue("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={hanldeSearch}>
        search
      </button>

      {users.length ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <GithubUser username={user} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Search a users</p>
      )}
    </div>
  );
}
