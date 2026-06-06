"use client";

import { ToolSection } from "../tool-card";
import { homelabTools } from "@/lib/dashboard-data";
import { Router } from "lucide-react";

export function HomelabSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
          <Router className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Homelab & IoT</h2>
          <p className="text-sm text-muted-foreground">Virtualisierung, NAS, Smart Home, IoT, Container-Infrastruktur</p>
        </div>
      </div>
      <ToolSection title="Homelab & IoT Tools" tools={homelabTools} description="Server-Infrastruktur, Smart Home, NAS, Monitoring, IoT Protokolle" />
    </div>
  );
}
