import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!theme) return null;

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <FaSun
        className={`text-yellow-500 transition-all duration-300 ${
          theme === "dark" ? "opacity-40" : "opacity-100"
        }`}
      />

      <input
        type="checkbox"
        className="toggle border-2 border-primary bg-secondary checked:bg-primary transition-all duration-300"
        checked={theme === "dark"}
        onChange={handleToggle}
      />

      <FaMoon
        className={`text-blue-400 transition-all duration-300 ${
          theme === "light" ? "opacity-40" : "opacity-100"
        }`}
      />
    </label>
  );
};

export default ThemeToggle;
