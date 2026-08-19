"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import SectionNavigator from "@components/layout/SectionNavigator";
import GlassCard from "@ui/GlassCard";
import CopyButton from "@/components/ui/CopyButton";
import ProfileHireButton from "@components/sections/profile/ProfileHireButton";
import CoockieSettingButton from "@components/sections/profile/CoockieSettingButton";
import ProfileSocialLinks from "@components/sections/profile/ProfileSocialLinks";

const SidebarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <aside className="lg:hidden">
      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto rounded-r-2xl border-r border-surface-border bg-surface backdrop-blur-lg shadow-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex min-h-full flex-col justify-between">
          <div className="flex flex-col">
            {/* TOP SECTION: Flat glassmorphic header with subtle bottom divider */}
            <div
              className="flex flex-col bg-foreground/5 border-b border-black/10 dark:border-white/10 rounded-none pt-4 px-4 pb-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={portfolioConfig.profile.avatar}
                      alt={`${portfolioConfig.profile.name}'s profile avatar`}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1280px) 192px, 224px"
                    />
                  </div>

                  <div className="ml-3">
                    <h2 className="text-xl font-semibold leading-tight text-foreground">
                      {portfolioConfig.profile.name}
                    </h2>
                    <p className="text-sm text-muted">{portfolioConfig.profile.role}</p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="p-2 text-muted transition-colors hover:text-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-5 flex flex-col items-center gap-2 lg:gap-1">
                <ProfileSocialLinks links={portfolioConfig.profile.socialLinks} />
                <CopyButton value={portfolioConfig.profile.email}>{portfolioConfig.profile.email}</CopyButton>
              </div>
            </div>

            <nav className="mt-6">
              <SectionNavigator onCloseMenu={closeMenu} />
            </nav>
          </div>

          <div className="mt-6 flex flex-col gap-4 p-4">
            {/* Availability Badge */}
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                Available for work
              </span>
            </div>

            <ProfileHireButton onCloseMenu={() => setIsMenuOpen(false)} />
            <CoockieSettingButton />
          </div>
        </div>
      </div>

      {/* Trigger Button */}
      {!isMenuOpen && (
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-sidebar"
          className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center transition-transform hover:scale-105 active:scale-95"
          onClick={openMenu}
        >
          <GlassCard className="flex h-full w-full items-center justify-center rounded-2xl p-2 text-foreground">
            <Menu className="h-5 w-5" />
          </GlassCard>
        </button>
      )}
    </aside>
  );
};

export default SidebarMobile;
