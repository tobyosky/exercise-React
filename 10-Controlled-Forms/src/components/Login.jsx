import { useState } from "react";

function createFormData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export default function Login({ onLogin }) {
  const [data, setData] = useState(createFormData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); //per evitare il comportamento di default
    onLogin(data);
  }

  function handleReset() {
    setData(createFormData());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        name="remember"
        checked={data.remember}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        disabled={!data.username || !data.password}
        onClick={handleSubmit}
      >
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}
