import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGithubUserList } from "../utils/useGithubUserList";

export default function ShowGithubUser() {
  const { usersList, loading, FetchGithubUser } = useGithubUserList();
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    FetchGithubUser();
  }, []);

  useEffect(() => {
    if (usersList) {
      const userFilter = usersList.find((user) => user.id == id);
      setSelectedUser(userFilter);
    }
  }, [usersList, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (selectedUser) {
    return (
      <div>
        <img
          src={selectedUser.avatar_url}
          alt={`img of user: ${selectedUser.login}`}
          width={100}
          height={100}
        />
        <h2>username: {selectedUser.login}</h2>

        <button type="button" onClick={() => navigate("/users")}>
          Back
        </button>
      </div>
    );
  }
}
