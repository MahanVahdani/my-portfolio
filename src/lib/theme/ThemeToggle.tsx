"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a simple loader for the skeleton state
  if (!mounted) {
    return (
      <div className="h-11 w-full flex items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin text-muted" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex flex-col items-center w-full">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(
          "h-11 w-full rounded-xl flex items-center justify-center transition-all duration-500",
          "hover:bg-primary/10 group active:scale-95",
        )}
        aria-label="Toggle theme"
      >
        <div className="relative h-5 w-5">
          <Sun
            className={cn(
              "absolute inset-0 h-5 w-5 text-yellow-400 transition-all duration-500 transform",
              isDark ? "rotate-0 scale-100" : "rotate-90 scale-0 opacity-0",
            )}
          />
          <Moon
            className={cn(
              "absolute inset-0 h-5 w-5 text-slate-700 transition-all duration-500 transform",
              isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100",
            )}
          />
        </div>

        <p className="block ml-2 lg:hidden lg:m-0">Day/Night</p>
      </button>

      <div className="w-full border-b border-surface-border mt-1" />
    </div>
  );
};

export default ThemeToggle;
