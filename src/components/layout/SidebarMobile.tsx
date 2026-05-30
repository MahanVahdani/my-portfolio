"use client";

import { useState } from "react";
import SectionNavigator from "@components/layout/SectionNavigator";
import GlassCard from "@ui/GlassCard";

const SidebarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <aside className="lg:hidden">
      <div
        id="mobile-sidebar"
        className={`fixed inset-y-0 left-0 z-50 w-72 overflow-hidden rounded-r-2xl bg-amber-400 transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">mahan</h1>

            <button type="button" onClick={closeMenu} aria-label="Close menu">
              |||
            </button>
          </div>

          <div className="mt-6">
            <SectionNavigator onCloseMenu={closeMenu} />
          </div>
        </div>
      </div>

      {!isMenuOpen && (
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-sidebar"
          className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center"
          onClick={openMenu}
        >
          <GlassCard className="p-2 rounded-2xl">+</GlassCard>
        </button>
      )}
    </aside>
  );
};

export default SidebarMobile;
