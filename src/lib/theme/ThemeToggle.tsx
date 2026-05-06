"use client";

const ThemeToggle = () => {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");

    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border border-border bg-surface transition-colors"
      aria-label="Toggle theme"
    >
      🌙 / ☀️
    </button>
  );
};

export default ThemeToggle;
