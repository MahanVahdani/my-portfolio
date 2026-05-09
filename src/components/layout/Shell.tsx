import React from "react";
import SectionNavigator from "./SectionNavigator";
import SidebarProfile from "./SidebarProfile";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:block">
      {/* Left fixed area */}
      <aside
        className="
          lg:fixed lg:left-6 lg:top-1/2 lg:-translate-y-1/2
          w-full lg:w-72 px-4 lg:px-0 pt-6 lg:pt-0
        "
      >
        <SidebarProfile />
      </aside>

      {/* Main content */}
      <main
        className="
        max-w-5xl px-4 lg:px-6 bg-amber-300
        py-10 lg:py-20 lg:ml-77.5 lg:mr-22.5
        "
      >
        {children}
      </main>

      {/* Right fixed nav */}
      <aside
        className="fixed w-16 h-120 right-6 top-1/2 
        -translate-y-1/2 z-40 hidden lg:flex flex-col items-center"
      >
        <SectionNavigator />
      </aside>
    </div>
  );
};

export default Shell;
