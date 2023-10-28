import "./App.css";
import Main from "./Layout/Main";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  const language = i18n.language;

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "dark" : "light"
  );
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="dark:bg-[#2A262B] bg-white w-[1700px]">
      <Main
        clickHandle={clickHandle}
        changeTheme={changeTheme}
        theme={theme}
        setTheme={setTheme}
        language={language}
      />
    </div>
  );
}

export default App;
