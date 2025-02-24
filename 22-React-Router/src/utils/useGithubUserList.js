import { useState } from "react";

export function useGithubUserList() {
  const [usersList, setUserList] = useState(null);
  const [loading, setLoading] = useState(true);

  async function FetchGithubUser() {
    try {
      setLoading(true);
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { usersList, loading, FetchGithubUser };
}
