import React from "react";
import SectionNavigator from "./SectionNavigator";
import SidebarProfile from "./SidebarProfile";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex justify-center px-4">
      {/* GLOBAL CONTAINER */}
      <div className="w-full max-w-360 grid grid-cols-1 lg:grid-cols-[280px_1fr_80px] gap-8 py-10 lg:py-20">
        {/* MOBILE FIRST + DESKTOP LEFT SIDEBAR */}
        <div className="lg:contents">
          {/* Mobile: show first */}
          <div className="block lg:hidden">
            <SidebarProfile />
          </div>

          {/* Desktop: left sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-1/2 -translate-y-1/2 h-122">
              <SidebarProfile />
            </div>
          </aside>
        </div>

        {/* Main content */}
        <main className="w-full">{children}</main>

        {/* Right nav */}
        <aside className="hidden lg:block">
          <div className="sticky top-1/2 -translate-y-1/2 flex justify-center h-122">
            <SectionNavigator />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Shell;
