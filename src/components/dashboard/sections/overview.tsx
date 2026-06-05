"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { systemInfo } from "@/lib/dashboard-data";
import { Monitor, Cpu, HardDrive, MemoryStick, Network, MonitorDot, Power, Thermometer } from "lucide-react";

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

export function OverviewSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
          <Monitor className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">System Overview</h2>
          <p className="text-sm text-muted-foreground">{systemInfo.distro}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card className="bg-card/80 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <MemoryStick className="h-4 w-4 text-amber-400" />
              <span className="text-xs text-muted-foreground font-medium">RAM Nutzung</span>
            </div>
            <div className="text-2xl font-bold text-amber-400">89.8%</div>
            <div className="text-xs text-muted-foreground mt-1">28.73 / 32 GiB</div>
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: "89.8%" }} />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/80 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <HardDrive className="h-4 w-4 text-sky-400" />
              <span className="text-xs text-muted-foreground font-medium">NVMe Speicher</span>
            </div>
            <div className="text-2xl font-bold text-sky-400">83%</div>
            <div className="text-xs text-muted-foreground mt-1">837 / 1012 GiB</div>
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-sky-400 rounded-full" style={{ width: "83%" }} />
            </div>
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
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-orange-400 rounded-full" style={{ width: "48%" }} />
            </div>
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
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-green-400 rounded-full" style={{ width: "97%" }} />
            </div>
          </CardContent>
        </Card>
      </div>

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
            <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">87% Storage Used</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
