"use client";

import { ToolSection } from "../tool-card";
import { CommandBlock } from "../command-block";
import { deepWebTools, programStores, duplicateTools, essentialCliTools } from "@/lib/dashboard-data";
import { Globe } from "lucide-react";

const xdgFix = `# XDG-Standard-Ordner erstellen
xdg-user-dirs-update --force

# Kaputte symlinks finden und reparieren
find ~ -type l -! -exec test -e {} \\; -print | while read link; do
  echo "Broken: $link"
  rm "$link"
done

# Leere Ordner bereinigen (nur in Downloads)
find ~/Downloads -type d -empty -delete 2>/dev/null

# ~/.local/bin und ~/.config sicherstellen
mkdir -p ~/.local/bin ~/.config

# PATH aktualisieren
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc`;

const dupesScan = `# Duplikat-Scan (Downloads)
jdupes -r ~/Downloads

# Duplikate mit Zusammenfassung
jdupes -r -S ~/Documents

# Interaktive Loeschung (sicher!)
jdupes -r -N ~/Downloads

# Flatpak vs. Native vergleichen
flatpak list --app | awk '{print $1}' | while read app; do
  pacman -Ss "^\${app}\$" 2>/dev/null && echo "DUPLICATE: \$app"
done`;

export function DeepwebSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
          <Globe className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Deep Web, Stores & Duplikate</h2>
          <p className="text-sm text-muted-foreground">Such-Engines, Scraper, Paket-Manager, Duplikat-Bereinigung</p>
        </div>
      </div>

      <ToolSection title="Deep Web & Search Tools" tools={deepWebTools} />
      <ToolSection title="Programm Stores & Runtimes" tools={programStores} />
      <ToolSection title="Duplikat-Bereinigung" tools={duplicateTools} />
      
      <CommandBlock commands={xdgFix} title="Ordnerstruktur korrigieren" showDownload filename="xdg-fix.sh" />
      <CommandBlock commands={dupesScan} title="Duplikat-Scan starten" showDownload filename="dupes-scan.sh" />
      
      <ToolSection title="100+ Essentielle CLI-Tools" description="Rust/Cargo, System, Navigation, Benchmark" tools={essentialCliTools} />
    </div>
  );
}
