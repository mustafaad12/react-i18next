import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./lang";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // take the translation
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <h1>{t("welcome")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>arabic</button>
    </>
  );
}

export default App;
