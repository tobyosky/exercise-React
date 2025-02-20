import { createContext } from "react";

export const LanguageContext = createContext(
  localStorage.getItem("language") || "en"
);
