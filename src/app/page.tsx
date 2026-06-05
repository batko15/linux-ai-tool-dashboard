"use client";

import { useState, useRef, useEffect } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { OverviewSection } from "@/components/dashboard/sections/overview";
import { DesktopSection } from "@/components/dashboard/sections/desktop";
import { ThemesSection } from "@/components/dashboard/sections/themes";
import { AISection } from "@/components/dashboard/sections/ai";
import { DevSection } from "@/components/dashboard/sections/dev";
import { TerminalSection } from "@/components/dashboard/sections/terminal";
import { PerformanceSection } from "@/components/dashboard/sections/performance";
import { GamingSection } from "@/components/dashboard/sections/gaming";
import { GraphicsSection } from "@/components/dashboard/sections/graphics";
import { MediaSection } from "@/components/dashboard/sections/media";
import { NetworkSection } from "@/components/dashboard/sections/network";
import { SecuritySection } from "@/components/dashboard/sections/security";
import { SystemSection } from "@/components/dashboard/sections/system";
import { ShortcutsSection } from "@/components/dashboard/sections/shortcuts";
import { ScriptSection } from "@/components/dashboard/sections/script";
import { AntigravitySection } from "@/components/dashboard/sections/antigravity";
import { ReposSection } from "@/components/dashboard/sections/repos";
import { DeepwebSection } from "@/components/dashboard/sections/deepweb";
import { IntegrationSection } from "@/components/dashboard/sections/integration";
import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "framer-motion";

const sectionComponents: Record<string, React.ComponentType> = {
  overview: OverviewSection,
  desktop: DesktopSection,
  themes: ThemesSection,
  ai: AISection,
  dev: DevSection,
  terminal: TerminalSection,
  performance: PerformanceSection,
  gaming: GamingSection,
  graphics: GraphicsSection,
  media: MediaSection,
  network: NetworkSection,
  security: SecuritySection,
  system: SystemSection,
  shortcuts: ShortcutsSection,
  script: ScriptSection,
  antigravity: AntigravitySection,
  repos: ReposSection,
  deepweb: DeepwebSection,
  integration: IntegrationSection,
};

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const mainRef = useRef<HTMLDivElement>(null);

  const ActiveComponent = sectionComponents[activeSection] || OverviewSection;

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className="h-screen flex bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <main ref={mainRef} className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4 md:p-6 pb-20 md:pb-24 pt-14 md:pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sticky Footer */}
        <footer className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t border-border/50 px-4 md:px-6 py-3">
          <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
              <span className="shrink-0">BigCommunity/Manjaro</span>
              <span className="text-border hidden sm:inline">|</span>
              <span className="shrink-0 hidden sm:inline">RTX 4070 &bull; i5-12400F &bull; 32GB</span>
              <span className="text-border hidden md:inline">|</span>
              <span className="shrink-0 hidden md:inline">CachyOS Kernel 7.0.10</span>
            </div>
            <span className="shrink-0">Linux AI Tool Dashboard</span>
          </div>
        </footer>
      </main>

      <Toaster position="top-right" />
    </div>
  );
}
