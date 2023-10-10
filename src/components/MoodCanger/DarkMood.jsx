import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DarkMood = () => {
  const [theme, setTheme] = useState("dark");

  const toggletheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    window.localStorage.setItem("themeMood", theme);
    document.body.className = theme;
  }, [theme]);

  const data = window.localStorage.getItem("themeMood");
  useEffect(() => {
    setTheme(data);
  }, []);

  return (
    <Link
      className="link"
      onClick={() => {
        toggletheme();
      }}
    >
      {" "}
      <span>
        {" "}
        <FaMoon />{" "}
      </span>{" "}
    </Link>
  );
};

export default DarkMood;
