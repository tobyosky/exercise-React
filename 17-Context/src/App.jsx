import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import { LanguageContext } from "./components/LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language.target.value);
  }

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
