import { useState } from "react";

export function useGithubUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function userFetch(username) {
    try {
      if (!username) return;

      setLoading(true);
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

  return { user, loading, error, userFetch };
}
