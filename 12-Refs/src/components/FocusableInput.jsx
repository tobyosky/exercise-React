import { useEffect, useRef } from "react";

export default function FocusableInput() {
  const mountedRef = useRef(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("mounting del componente per la prima volta");
    } else {
      console.log("secondo mounting dettata dalla StrictMode");
    }

    inputRef.current?.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
}
