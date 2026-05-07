import React from "react";
import SectionNavigator from "./SectionNavigator";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full">
      {/* Left fixed area */}
      <div className="fixed left-6 top-1/2 hidden -translate-y-1/2 xl:block">
        <aside className="w-72">Sidebar</aside>
      </div>

      {/* Right fixed nav */}
      <aside
        className="fixed right-6 top-1/2 -translate-y-1/2 w-16
                  z-40 hidden lg:flex flex-col items-center"
      >
        <SectionNavigator />
      </aside>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-6 py-20">{children}</main>
    </div>
  );
};

export default Shell;
