"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <div
          className="h-11 w-full rounded-xl
        flex items-center justify-center"
        >
          <Moon className="h-5 w-5 text-slate-700" />
        </div>

        <div className="w-full border-b border-surface-border" />
      </>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="
          h-11 w-full rounded-xl
          flex items-center justify-center
          transition-all duration-300

        "
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-slate-700" />
        )}
      </button>

      <div className="w-full border-b border-surface-border" />
    </>
  );
};

export default ThemeToggle;
