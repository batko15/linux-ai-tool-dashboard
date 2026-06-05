"use client";

import { ToolSection } from "../tool-card";
import { securityTools } from "@/lib/dashboard-data";
import { Shield } from "lucide-react";

export function SecuritySection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
          <Shield className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Sicherheit & Privacy</h2>
          <p className="text-sm text-muted-foreground">Antivirus, Encryption, Sandbox, Passwort-Manager</p>
        </div>
      </div>
      <ToolSection title="Security & Privacy Tools" tools={securityTools} />
    </div>
  );
}
