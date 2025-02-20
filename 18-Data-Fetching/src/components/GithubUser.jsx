import { useEffect, useState } from "react";
import "../GithubUser.css";

export default function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function userFetch(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`User not found (HTTP ${response.status})`);
      }

      console.log(data);
      setUser(data);
    } catch (error) {
      setError(error);
      console.log(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    userFetch(username);
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An Error occurrend: {error.message}</div>;
  }

  if (user) {
    return (
      <div className="card">
        <img src={user.avatar_url} alt={`img of GitHub user ${user.login}`} />
        <h1>name: {user.name || "this user doesn't have a name"}</h1>
        <h2>username: {user.login}</h2>
      </div>
    );
  }
}
