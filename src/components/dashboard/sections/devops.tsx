"use client";

import { ToolSection } from "../tool-card";
import { devopsTools } from "@/lib/dashboard-data";
import { Container } from "lucide-react";

export function DevopsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
          <Container className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">DevOps & Infra</h2>
          <p className="text-sm text-muted-foreground">Kubernetes, Docker, Infrastructure as Code, Monitoring</p>
        </div>
      </div>
      <ToolSection title="DevOps & Infrastructure" tools={devopsTools} description="Container-Orchestrierung, GitOps, Monitoring und Web-Server" />
    </div>
  );
}
