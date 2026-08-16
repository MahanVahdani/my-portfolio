import type { ReactNode } from "react";
import AnimatedBackground from "@/app/AnimatedBackground";
import SectionNavigator from "@/components/layout/SectionNavigator";
import SidebarProfile from "@/components/layout/SidebarProfile";
import SidebarMobile from "@/components/layout/SidebarMobile";
import GlassCard from "@/components/ui/GlassCard";

const Shell = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AnimatedBackground />

      <div className="flex min-h-screen w-full justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-[1400px] grid-cols-1 gap-8 py-10 lg:grid-cols-[280px_minmax(0,1fr)_80px] lg:py-20">
          <div className="block lg:hidden">
            <SidebarProfile />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-1/2 h-122 -translate-y-1/2">
              <SidebarProfile />
            </div>
          </aside>

          <main className="w-full min-w-0">{children}</main>

          <aside className="hidden lg:block">
            <div className="sticky top-1/2 flex h-122 -translate-y-1/2 justify-center">
              <GlassCard className="rounded-2xl p-2">
                <SectionNavigator compact />
              </GlassCard>
            </div>
          </aside>

          <SidebarMobile />
        </div>
      </div>
    </>
  );
};

export default Shell;
