"use client";

import { ToolSection } from "../tool-card";
import { selfhostedTools } from "@/lib/dashboard-data";
import { Server } from "lucide-react";

const dockerSetup = `# Docker installieren (falls noch nicht vorhanden)
sudo pacman -S docker docker-compose
sudo systemctl enable docker --now
sudo usermod -aG docker $USER

# Docker Compose Verzeichnis erstellen
mkdir -p ~/docker-services && cd ~/docker-services`;

export function SelfhostedSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
          <Server className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Self-Hosted</h2>
          <p className="text-sm text-muted-foreground">Private Cloud, Media-Server, Smart Home, Monitoring</p>
        </div>
      </div>
      <ToolSection title="Self-Hosted Services" tools={selfhostedTools} description="Docker-basierte Services fuer dein eigenes Cloud-Setup" />
      <ToolSection title="Docker Setup" description="Voraussetzung fuer Self-Hosted Services">
        <div className="bg-[#1e1e2e] text-[#89b4fa] text-[11px] font-mono p-3 rounded-md whitespace-pre-wrap">{dockerSetup}</div>
      </ToolSection>
    </div>
  );
}
