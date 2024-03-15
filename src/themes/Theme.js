import React, { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";

const Theme = () => {
  const [theme, settheme] = useState("dark");

  const toggle_theme = () => {
    if (theme === "dark") {
      settheme("light");
    } else {
      settheme("dark");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <div className="theme" onClick={() => toggle_theme()}>
      <FiSun />
    </div>
  );
};

export default Theme;
