import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function hanldeSeach() {
    if (inputValue.trim() !== "") {
      setUsers([...users, inputValue.trim()]);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(value) => setInputValue(value.target.value)}
      />
      <button type="button" onClick={hanldeSeach}>
        search
      </button>

      {users.length > 0 ? (
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
