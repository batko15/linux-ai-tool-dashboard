"use client";

import { ToolSection } from "../tool-card";
import { privacyTools } from "@/lib/dashboard-data";
import { EyeOff } from "lucide-react";

export function PrivacySection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
          <EyeOff className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Privacy & Anonym</h2>
          <p className="text-sm text-muted-foreground">Tor, I2P, DNS-Tools, Werbeblocker, VPN</p>
        </div>
      </div>
      <ToolSection title="Privacy & Anonymitaet" tools={privacyTools} description="Werkzeuge fuer maximale Privatsphaere und Anonymitaet" />
    </div>
  );
}
