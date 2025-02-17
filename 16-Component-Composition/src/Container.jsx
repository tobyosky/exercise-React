import { useState } from "react";

export default function Container({ title, children }) {
  const [collapsed, setCollasped] = useState(false);

  function handleToggleCollapse() {
    setCollasped((e) => !e);
  }

  return (
    <div className="container">
      <div>
        {title}{" "}
        <button type="button" onClick={handleToggleCollapse}>
          Toggle
        </button>
      </div>
      <div className={!collapsed ? "content" : "content-hidden"}>
        {children}
      </div>
    </div>
  );
}
