"use client";

import { ToolSection } from "../tool-card";
import { browserTools } from "@/lib/dashboard-data";
import { Globe } from "lucide-react";

export function BrowsersSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center">
          <Globe className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Browser & Web</h2>
          <p className="text-sm text-muted-foreground">Privacy-Browser, Extensions, Web-Tools</p>
        </div>
      </div>
      <ToolSection title="Browser & Extensions" tools={browserTools} description="Privacy-fokussierte Browser und nuetzliche Web-Erweiterungen" />
    </div>
  );
}
