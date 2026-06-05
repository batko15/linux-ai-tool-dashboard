"use client";

import { ToolSection } from "../tool-card";
import { perfTools } from "@/lib/dashboard-data";
import { CommandBlock } from "../command-block";
import { Gauge } from "lucide-react";

const kernelParams = `# Kernel-Parameter hinzufuegen (GRUB)
sudo sed -i 's/GRUB_CMDLINE_LINUX_DEFAULT="/GRUB_CMDLINE_LINUX_DEFAULT="mitigations=off quiet splash nvidia-drm.modeset=1 i915.enable_psr=1 pcie_aspm=force /' /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg`;

const kwinPerf = `# KWin Latency auf "Niedrig" setzen
kwriteconfig5 --file kwinrc --group Compositing --key LatencyMode 0

# Plasma Cache auf 1024 MB
kwriteconfig5 --file kdeglobals --group KCacheConfig --key CacheSize 1024`;

export function PerformanceSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
          <Gauge className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Performance Optimierungen</h2>
          <p className="text-sm text-muted-foreground">CPU Governor, ZRAM, NVIDIA, NVMe I/O</p>
        </div>
      </div>

      <ToolSection title="Performance Tools & Tuning" tools={perfTools} />
      <CommandBlock commands={kernelParams} title="Kernel Parameter Optimierungen" />
      <CommandBlock commands={kwinPerf} title="KWin Performance" />
    </div>
  );
}
