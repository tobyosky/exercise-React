import { useState } from "react";
import Welcome from "./Welcome";

export default function InteractiveWelcome() {
  const [username, setUsername] = useState("");

  function handleUsernameInputChange(event) {
    const value = event.target.value;

    setUsername(value);
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleUsernameInputChange}
      />
      <Welcome name={username} />
    </div>
  );
}
