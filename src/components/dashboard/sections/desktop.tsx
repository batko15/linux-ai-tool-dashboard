"use client";

import { ToolSection } from "../tool-card";
import { desktopTools } from "@/lib/dashboard-data";
import { CommandBlock } from "../command-block";
import { LayoutDashboard } from "lucide-react";

const kdeConfig = `cat > ~/.config/kwinrc << 'EOF'
[Compositing]
AllowTearing=false
AnimationSpeed=0
CompositingMode=2
EnableCompositing=true
LatencyMode=0
UseSyncToVBlank=true
WindowsBlockCompositing=false

[Effect-Blur]
Enabled=true
Strength=8

[Effect-Slide]
Enabled=true
Duration=150

[Effect-Fade]
Enabled=true
Duration=150

[Effect-PresentWindows]
Enabled=true
Border=2
EOF`;

const sddmCmd = `sudo systemctl enable sddm --now
# Im SDDM Login-Screen: "Plasma (Wayland)" auswaehlen`;

export function DesktopSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
          <LayoutDashboard className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Desktop Environment</h2>
          <p className="text-sm text-muted-foreground">KDE Plasma 6, Hyprland, GNOME</p>
        </div>
      </div>

      <ToolSection title="Desktop-Umgebungen & Window Manager" description="Empfehlung: KDE Plasma 6" tools={desktopTools} />
      <CommandBlock commands={sddmCmd} title="SDDM Display Manager" />
      <CommandBlock commands={kdeConfig} title="KWin Compositor Optimierungen" />
    </div>
  );
}
