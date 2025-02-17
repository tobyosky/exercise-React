import { useState } from "react";

export default function Container({ title, children }) {
  const [collapsed, setCollasped] = useState(false);

  function handleToggleCollapse() {
    setCollasped((e) => !e);
  }

  return (
    <div className="container">
      <div>
        <button type="button" onClick={handleToggleCollapse}>
          {title}
        </button>
      </div>
      <div className={!collapsed ? "content" : "content-hidden"}>
        {children}
      </div>
    </div>
  );
}
