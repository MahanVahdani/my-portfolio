"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  console.log("isDark", isDark);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !isDark;

    setIsDark(next);

    if (next) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="w-full h-11 flex
      items-center justify-center transition-all
      duration-300 rounded-xl
      "
        aria-label="Toggle theme"
      >
        <div className="transition-all duration-300">
          {isDark ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          )}
        </div>
      </button>

      <div className="border-b w-full"></div>
    </>
  );
};

export default ThemeToggle;
