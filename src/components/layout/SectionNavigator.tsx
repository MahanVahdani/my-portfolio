"use client";

import { useEffect, useState } from "react";
import {
  Home,
  UserRound,
  BriefcaseBusiness,
  Sparkles,
  FolderOpen,
  MessageSquareQuote,
  Mail,
} from "lucide-react";

import ThemeToggle from "@lib/theme/ThemeToggle";

type NavItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

type SectionNavigatorProps = {
  onCloseMenu?: () => void;
  compact?: boolean;
};

const navItems: NavItem[] = [
  { id: "hello", label: "Hello", icon: Home },
  { id: "about", label: "About", icon: UserRound },
  { id: "experiences", label: "Experiences", icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { id: "contact", label: "Contact", icon: Mail },
];

const SectionNavigator = ({
  onCloseMenu,
  compact = false,
}: SectionNavigatorProps) => {
  const [activeId, setActiveId] = useState("hello");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      if (!sections.length) return;

      const scrollY = window.scrollY;
      const isAtBottom =
        Math.ceil(window.innerHeight + scrollY) >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveId(navItems[navItems.length - 1].id);
        return;
      }

      const tripwire = scrollY + window.innerHeight / 3;

      let currentActiveId = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= tripwire) {
          currentActiveId = section.id;
        }
      }

      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const timeoutId = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActiveId(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    onCloseMenu?.();
  };

  return (
    <nav
      aria-label="Section navigation"
      className="flex flex-col items-start justify-evenly h-full gap-2 px-4 lg:px-2"
    >
      <ThemeToggle />

      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeId === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            aria-current={isActive ? "location" : undefined}
            className={`group relative flex h-11 items-center rounded-2xl px-3 transition-all duration-200 ${
              compact ? "w-11 justify-center px-0" : "w-full justify-start"
            } ${
              isActive
                ? "bg-primary/15 text-primary shadow-sm"
                : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
            }`}
          >
            <Icon className="h-5 w-5 shrink-0" />
            {!compact && <span className="ml-2 text-sm">{item.label}</span>}

            {compact && (
              <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-slate-950/90 px-3 py-1.5 text-xs text-white shadow-lg group-hover:block group-focus-visible:block dark:bg-slate-900/95">
                {item.label}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default SectionNavigator;
