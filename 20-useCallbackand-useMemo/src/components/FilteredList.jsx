import { useMemo } from "react";

export default function FilteredList({ users }) {
  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div>
      <h2>Filtered List:</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            Name: {user.name}, age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
