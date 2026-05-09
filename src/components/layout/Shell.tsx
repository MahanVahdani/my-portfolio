import React from "react";
import SectionNavigator from "./SectionNavigator";
import SidebarProfile from "./SidebarProfile";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full">
      {/* Left fixed area */}
      <aside
        className="w-62 h-120 fixed left-6 top-1/2 
        hidden -translate-y-1/2 lg:block xl:w-72"
      >
        <SidebarProfile />
      </aside>

      {/* Right fixed nav */}
      <aside
        className="fixed w-16 h-120 right-6 top-1/2 
        -translate-y-1/2 z-40 hidden lg:flex flex-col items-center"
      >
        <SectionNavigator />
      </aside>

      {/* Main content */}
      {/* <main className="mx-auto max-w-5xl px-6 py-20">{children}</main> */}
    </div>
  );
};

export default Shell;
