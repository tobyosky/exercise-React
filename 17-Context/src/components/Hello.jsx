import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Hello() {
  const language = useContext(LanguageContext);

  return <h2>{language === "en" ? "Hello World" : "Ciao, Mondo"}</h2>;
}
