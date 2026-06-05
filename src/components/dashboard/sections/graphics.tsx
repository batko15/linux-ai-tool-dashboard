"use client";

import { ToolSection } from "../tool-card";
import { graphicsTools } from "@/lib/dashboard-data";
import { ImageIcon } from "lucide-react";

export function GraphicsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center">
          <ImageIcon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Grafik & Design</h2>
          <p className="text-sm text-muted-foreground">Krita, GIMP, Blender, Kdenlive, Darktable</p>
        </div>
      </div>
      <ToolSection title="Grafik & Design Tools" tools={graphicsTools} />
    </div>
  );
}
