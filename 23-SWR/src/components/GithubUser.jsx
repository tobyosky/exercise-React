import { useRef, useState } from "react";
import { useGithubUser } from "../utils/useGithubUser";

export default function GithubUser() {
  const [searchUser, setSearchUser] = useState("");
  const {
    data: user,
    error,
    isLogin,
    handleReload,
  } = useGithubUser(searchUser);
  const inputRef = useRef(null);

  function handleSearch() {
    const value = inputRef.current.value.trim();
    if (value) {
      setSearchUser(value);
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="search a user..." />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      {isLogin && <p>loading...</p>}
      {error && <p>error: {error.message}</p>}
      {user && (
        <div>
          <h1>username: {user.login}</h1>
          {user.name ? (
            <p>name: {user.name}</p>
          ) : (
            <p>This user don't have a name</p>
          )}
          <button type="button" onClick={handleReload}>
            Reload Data
          </button>
        </div>
      )}
    </div>
  );
}
