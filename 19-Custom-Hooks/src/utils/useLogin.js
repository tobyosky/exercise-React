import { useState } from "react";

const dataUsers = { username: "", password: "" };

export function useLogin() {
  const [user, setUser] = useState(dataUsers);

  function handleChange(e) {
    const { name, value } = e.target;
    const username = name === "username" ? value : user.username;
    const password = name === "password" ? value : user.password;

    setUser({ username, password });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!user.username?.trim() || !user.password?.trim()) {
      alert("fill in all fields");
      return;
    }

    console.log("User submitted:", user);
  }

  return { user, handleSubmit, handleChange };
}
