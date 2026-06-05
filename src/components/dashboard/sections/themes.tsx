"use client";

import { ToolSection } from "../tool-card";
import { themeTools } from "@/lib/dashboard-data";
import { CommandBlock } from "../command-block";
import { Palette } from "lucide-react";

const applyTheme = `# Theme anwenden (KDE)
# Systemeinstellungen -> Erscheinungsbild -> Global Theme -> Catppuccin Mocha

# Oder per CLI:
lookandfeeltool -a org.kde.breezedark.desktop

# Icons
kwriteconfig5 --file kdeglobals --group General --key IconTheme Papirus

# Cursor
kwriteconfig5 --file kdeglobals --group General --key CursorTheme bibata-rainbow

# Neustart
systemctl --user restart plasma-plasmashell.service`;

export function ThemesSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
          <Palette className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Themes & Design</h2>
          <p className="text-sm text-muted-foreground">Catppuccin Mocha, Papirus, Bibata</p>
        </div>
      </div>

      <ToolSection title="Themes, Icons & Cursor" description="Dark-Mode Look" tools={themeTools} />
      <CommandBlock commands={applyTheme} title="Theme Anwenden (KDE)" />
    </div>
  );
}
