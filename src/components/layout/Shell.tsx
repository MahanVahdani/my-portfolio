import React from "react";
import ThemeToggle from "@/lib/theme/ThemeToggle";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>

      {children}
    </div>
  );
};

export default Shell;
