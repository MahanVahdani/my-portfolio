import React from "react";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-3
          sm:px-5
          lg:px-8
          xl:px-10
          "
      >
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">Sidebar</aside>

          {/* Main Content */}
          <main className="flex-1 py-12 md:py-20">{children}</main>

          {/* Right Navigation */}
          <aside className="hidden xl:block w-20 shrink-0">Nav</aside>
        </div>
      </div>
    </div>
  );
};

export default Shell;
