"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { systemInfo } from "@/lib/dashboard-data";
import {
  Monitor, Cpu, HardDrive, MemoryStick, Network, MonitorDot, Power, Thermometer,
  AlertTriangle, CheckCircle2, XCircle, Zap,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const stats = [
  { label: "CPU", value: systemInfo.cpu, icon: Cpu, color: "text-emerald-400" },
  { label: "GPU", value: systemInfo.gpu, icon: Monitor, color: "text-green-400" },
  { label: "RAM", value: systemInfo.ram, icon: MemoryStick, color: "text-amber-400" },
  { label: "Speicher", value: systemInfo.storage, icon: HardDrive, color: "text-sky-400" },
  { label: "Kernel", value: systemInfo.kernel, icon: Power, color: "text-violet-400" },
  { label: "Desktop", value: systemInfo.desktop, icon: MonitorDot, color: "text-pink-400" },
  { label: "NVIDIA Treiber", value: systemInfo.nvidiaDriver, icon: Thermometer, color: "text-orange-400" },
  { label: "Netzwerk", value: systemInfo.ip, icon: Network, color: "text-teal-400" },
];

const healthChecks = [
  { label: "Wayland aktiv", status: "ok" as const },
  { label: "NVIDIA Driver OK", status: "ok" as const },
  { label: "CachyOS Kernel", status: "ok" as const },
  { label: "RAM Nutzung kritisch (89.8%)", status: "warn" as const },
  { label: "Speicher fast voll (87%)", status: "warn" as const },
  { label: "ZRAM aktiv", status: "unknown" as const },
  { label: "EarlyOOM aktiv", status: "unknown" as const },
  { label: "SDDM konfiguriert", status: "unknown" as const },
];

export function OverviewSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
          <Monitor className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">System Overview</h2>
          <p className="text-sm text-muted-foreground">{systemInfo.distro}</p>
        </div>
      </div>

      {/* Critical Warnings */}
      <Card className="bg-amber-500/10 border-amber-500/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-amber-400">System-Ressourcen kritisch</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                RAM bei 89.8% und Speicher bei 87% - vor der Installation neuer Pakete sollten 
                unnoetige Prozesse beendet und Speicherplatz freigegeben werden. 
                Verwende <code className="text-amber-400 bg-muted px-1 rounded">sudo pacman -Sc</code> zum 
                Paket-Cache leeren und <code className="text-amber-400 bg-muted px-1 rounded">sudo journalctl --vacuum-size=100M</code> zum Log-Cleanup.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resource Gauges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card className="bg-card/80 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <MemoryStick className="h-4 w-4 text-amber-400" />
              <span className="text-xs text-muted-foreground font-medium">RAM Nutzung</span>
            </div>
            <div className="text-2xl font-bold text-amber-400">89.8%</div>
            <div className="text-xs text-muted-foreground mt-1">28.73 / 32 GiB</div>
            <Progress value={89.8} className="mt-2 h-1.5" />
          </CardContent>
        </Card>
        <Card className="bg-card/80 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <HardDrive className="h-4 w-4 text-sky-400" />
              <span className="text-xs text-muted-foreground font-medium">NVMe Speicher</span>
            </div>
            <div className="text-2xl font-bold text-sky-400">87%</div>
            <div className="text-xs text-muted-foreground mt-1">837 / 954 GiB</div>
            <Progress value={87} className="mt-2 h-1.5" />
          </CardContent>
        </Card>
        <Card className="bg-card/80 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Thermometer className="h-4 w-4 text-orange-400" />
              <span className="text-xs text-muted-foreground font-medium">CPU Temperatur</span>
            </div>
            <div className="text-2xl font-bold text-orange-400">48°C</div>
            <div className="text-xs text-muted-foreground mt-1">i5-12400F (Max: 100°C)</div>
            <Progress value={48} className="mt-2 h-1.5" />
          </CardContent>
        </Card>
        <Card className="bg-card/80 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Monitor className="h-4 w-4 text-green-400" />
              <span className="text-xs text-muted-foreground font-medium">GPU VRAM</span>
            </div>
            <div className="text-2xl font-bold text-green-400">11.71 GB</div>
            <div className="text-xs text-muted-foreground mt-1">RTX 4070 (12 GB Total)</div>
            <Progress value={97} className="mt-2 h-1.5" />
          </CardContent>
        </Card>
      </div>

      {/* Health Checks */}
      <Card className="bg-card/80 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold">System-Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {healthChecks.map((check) => (
              <div key={check.label} className="flex items-center gap-2 p-2 rounded-md bg-muted/30">
                {check.status === "ok" && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />}
                {check.status === "warn" && <AlertTriangle className="h-3.5 w-3.5 text-amber-400 shrink-0" />}
                {check.status === "unknown" && <XCircle className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0" />}
                <span className={`text-xs ${check.status === "unknown" ? "text-muted-foreground/60" : ""}`}>
                  {check.label}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hardware Configuration */}
      <Card className="bg-card/80 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold">Hardware Konfiguration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-start gap-3 py-1">
                <stat.icon className={`h-4 w-4 mt-0.5 shrink-0 ${stat.color}`} />
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                  <p className="text-sm font-medium truncate">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-card/80 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald-400" />
            Schnellaktionen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { label: "System Update", cmd: "sudo pacman -Syu && yay -Syu" },
              { label: "RAM Cleanup", cmd: "sudo pacman -Sc && sudo journalctl --vacuum-size=100M" },
              { label: "GPU Status", cmd: "nvidia-smi" },
              { label: "Disk Usage", cmd: "df -h && du -sh ~/* | sort -rh | head -20" },
            ].map((action) => (
              <div
                key={action.label}
                className="flex items-center justify-between p-2.5 rounded-md bg-muted/30 border border-border/50 group cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(action.cmd);
                }}
                title="Klicken zum Kopieren"
              >
                <span className="text-xs font-medium">{action.label}</span>
                <code className="text-[10px] text-muted-foreground font-mono max-w-[200px] truncate">
                  {action.cmd}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Badges */}
      <Card className="bg-card/80 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold">System Badges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Wayland</Badge>
            <Badge variant="outline" className="bg-violet-500/10 text-violet-400 border-violet-500/20">NVIDIA 610.43.02</Badge>
            <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20">CachyOS Kernel</Badge>
            <Badge variant="outline" className="bg-pink-500/10 text-pink-400 border-pink-500/20">COSMIC Desktop</Badge>
            <Badge variant="outline" className="bg-sky-500/10 text-sky-400 border-sky-500/20">HDMI 49&quot; Samsung</Badge>
            <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">6C / 12T</Badge>
            <Badge variant="outline" className="bg-teal-500/10 text-teal-400 border-teal-500/20">2.5GbE + WiFi AC</Badge>
            <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">87% Storage</Badge>
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">12GB VRAM</Badge>
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">RTX 4070</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
