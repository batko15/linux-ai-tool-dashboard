"use client";

import { ToolSection } from "../tool-card";
import { waylandTools } from "@/lib/dashboard-data";
import { Layers } from "lucide-react";

export function WaylandSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
          <Layers className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Wayland & WL Tools</h2>
          <p className="text-sm text-muted-foreground">Wayland-native Tools, Bars, Launcher, Widgets</p>
        </div>
      </div>
      <ToolSection title="Wayland Tools" tools={waylandTools} description="Kompatible Tools fuer Hyprland, Sway, COSMIC & Co." />
    </div>
  );
}
