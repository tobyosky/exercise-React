import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import { LanguageContext } from "./components/LanguageContext";
import { useEffect } from "react";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  function handleSetLanguage(language) {
    setLanguage(language.target.value);
  }

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <select
        name="languages"
        id="languages-select"
        onChange={handleSetLanguage}
        value={language}
      >
        <option value="en">Inglese</option>
        <option value="it">Italiano</option>
      </select>

      <LanguageContext.Provider value={language}>
        <Hello />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
