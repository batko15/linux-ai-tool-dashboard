"use client";

import { ToolSection } from "../tool-card";
import { gamingTools } from "@/lib/dashboard-data";
import { CommandBlock } from "../command-block";
import { Gamepad2 } from "lucide-react";

const mangoHudConfig = `cat > ~/.config/MangoHud/MangoHud.conf << 'EOF'
background_alpha=180
font_color=0xffffff
font_size=16
gpu_stats=true
cpu_stats=true
ram_stats=true
vram_stats=true
fps_stats=true
frame_time_stats=true
engine=opengl,vulkan,dxgi
position=top_left
width=300
height=200
EOF`;

const wineSetup = `# Wine Prefix erstellen & DirectX installieren
WINEPREFIX=~/.wine-games winecfg
winetricks corefonts vcrun2019 d3dcompiler_47 d3dx9_42 dxvk`;

export function GamingSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
          <Gamepad2 className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Gaming</h2>
          <p className="text-sm text-muted-foreground">Steam, Lutris, MangoHud, Proton - RTX 4070 optimiert</p>
        </div>
      </div>

      <ToolSection title="Gaming Tools & Launcher" tools={gamingTools} />
      <CommandBlock commands={mangoHudConfig} title="MangoHud Konfiguration" />
      <CommandBlock commands={wineSetup} title="Wine Gaming Setup" />
    </div>
  );
}
