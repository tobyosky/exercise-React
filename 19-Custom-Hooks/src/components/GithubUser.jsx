import { useState } from "react";
import { useGithubUser } from "../utils/useGithubUser";

export default function GithubUser() {
  const { user, loading, error, userFetch } = useGithubUser();
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="search a user..."
      />
      <button type="button" onClick={() => userFetch(inputValue.trim())}>
        Search
      </button>
      {loading && <p>loading...</p>}
      {error && <p>error: {error.message}</p>}
      {user && (
        <div>
          <h1>username: {user.login}</h1>
          <p>name: {user.name}</p>
        </div>
      )}
    </div>
  );
}
