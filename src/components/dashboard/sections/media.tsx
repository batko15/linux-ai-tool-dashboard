"use client";

import { ToolSection } from "../tool-card";
import { mediaTools } from "@/lib/dashboard-data";
import { Music } from "lucide-react";

export function MediaSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
          <Music className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Audio & Video</h2>
          <p className="text-sm text-muted-foreground">MPV, VLC, Audacity, DAW, PipeWire</p>
        </div>
      </div>
      <ToolSection title="Media Player & Audio Tools" tools={mediaTools} />
    </div>
  );
}
