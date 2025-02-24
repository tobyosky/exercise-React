import { useEffect } from "react";
import { useGithubUserList } from "../utils/useGithubUserList";
import { Link, Outlet } from "react-router-dom";

export default function GithubUserList() {
  const { usersList, loading, FetchGithubUser } = useGithubUserList();

  useEffect(() => {
    FetchGithubUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (usersList) {
    return (
      <div>
        <ul>
          {usersList.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.login}</Link>
            </li>
          ))}
        </ul>

        <Outlet />
      </div>
    );
  }
}
