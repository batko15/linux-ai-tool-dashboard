"use client";

import { ToolSection } from "../tool-card";
import { systemTools } from "@/lib/dashboard-data";
import { Wrench } from "lucide-react";

export function SystemSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center">
          <Wrench className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">System Tools</h2>
          <p className="text-sm text-muted-foreground">Monitoring, Backups, Office, PDF, Notizen</p>
        </div>
      </div>
      <ToolSection title="System Werkzeuge" tools={systemTools} />
    </div>
  );
}
