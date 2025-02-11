import { useState } from "react";

export default function UncontrolledLogin() {
  const [isFormData, setIsFormData] = useState(false);

  function onLogin(event) {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const rememberMe = event.target.elements.namedItem("remember-me").checked;

    const data = {
      username,
      password,
      rememberMe,
    };

    console.log("data whit API DOM", data);
  }

  function loginWithFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      rememberMe: formData.get("remember-me") === "on" ? "true" : "false", //per impostare il valore on su true e il valore null su false
    };

    console.log("data with API FormData", data);
  }

  return (
    <form onSubmit={isFormData ? loginWithFormData : onLogin}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="remember-me" />
      <button type="submit" name="api-dom" onClick={() => setIsFormData(false)}>
        login DOM
      </button>
      <button
        type="button"
        name="api-formData"
        onClick={() => setIsFormData(true)}
      >
        login formData
      </button>
    </form>
  );
}
