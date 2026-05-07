import React from "react";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full">
      {/* Left fixed area */}
      <div className="fixed left-6 top-1/2 hidden -translate-y-1/2 xl:block">
        <aside className="w-72">Sidebar</aside>
      </div>

      {/* Right fixed nav */}
      <div className="fixed right-6 top-1/2 hidden -translate-y-1/2 xl:block">
        <aside className="w-20">Nav</aside>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-5xl px-6 py-20">{children}</main>
    </div>
  );
};

export default Shell;
