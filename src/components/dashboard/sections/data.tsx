"use client";

import { ToolSection } from "../tool-card";
import { dataTools } from "@/lib/dashboard-data";
import { Database } from "lucide-react";

export function DataSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
          <Database className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Data & Science</h2>
          <p className="text-sm text-muted-foreground">Data Analysis, ML, Databases, Visualization, Dashboards</p>
        </div>
      </div>
      <ToolSection title="Data & Science Tools" tools={dataTools} description="Python Data Science, ML Frameworks, Databases, Visualization Tools" />
    </div>
  );
}
