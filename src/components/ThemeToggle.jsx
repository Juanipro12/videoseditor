// ThemeToggle.jsx
import { Fragment, useEffect, useState } from "preact/compat";

const ThemeToggle = () => {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  let theme = isLocalStorageAvailable
    ? localStorage.getItem("theme") || "light"
    : "light";

  const toggleTheme = () => {
    theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("theme", theme);

    if (isLocalStorageAvailable) {
      localStorage.setItem("theme", theme);
    }

    // Force re-render by changing the state
    setDummyState(Math.random());
  };

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const [dummyState, setDummyState] = useState(null);

  return (
    <Fragment>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "🌞 Light"}
      </button>
      <style jsx>{`
        button {
          cursor: pointer;
          background: none;
          border: none;
          font-size: 16px;
          padding: 5px;
        }
      `}</style>
    </Fragment>
  );
};

export default ThemeToggle;
