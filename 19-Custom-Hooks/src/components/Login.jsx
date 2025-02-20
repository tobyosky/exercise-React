import { useLogin } from "../utils/useLogin";

export default function Login() {
  const { user, handleSubmit, handleChange } = useLogin();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
