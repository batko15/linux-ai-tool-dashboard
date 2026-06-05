"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyButton, DownloadButton } from "../copy-button";
import { desktopShortcuts } from "@/lib/dashboard-data";
import { AppWindow, Download, Copy } from "lucide-react";
import { toast } from "sonner";

function generateDesktopFile(entry: typeof desktopShortcuts[0]): string {
  return `[Desktop Entry]
Version=1.0
Type=Application
Name=${entry.name}
Comment=${entry.comment}
Exec=${entry.exec}
Icon=${entry.icon}
Terminal=${entry.terminal}
Categories=${entry.categories}
`;
}

export function ShortcutsSection() {
  const handleDownloadAll = () => {
    desktopShortcuts.forEach((entry) => {
      const content = generateDesktopFile(entry);
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${entry.name.replace(/\s+/g, "-").toLowerCase()}.desktop`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
    toast.success(`${desktopShortcuts.length} .desktop Dateien heruntergeladen!`);
  };

  const allDesktopContent = desktopShortcuts.map(generateDesktopFile).join("\n---\n\n");

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
          <AppWindow className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold">Desktop Shortcuts</h2>
          <p className="text-sm text-muted-foreground">.desktop Dateien fuer den Desktop als Schnellstart</p>
        </div>
        <div className="flex gap-2">
          <DownloadButton content={allDesktopContent} filename="all-shortcuts.desktop" />
          <Button variant="outline" size="sm" onClick={handleDownloadAll} className="gap-2">
            <Download className="h-4 w-4" />
            Alle herunterladen
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {desktopShortcuts.map((entry) => (
          <Card key={entry.name} className="bg-card/80 border-border/50 group">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold">{entry.name}</h4>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                      {entry.terminal ? "Terminal" : "GUI"}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{entry.comment}</p>
                  <pre className="bg-[#1e1e2e] text-[#a6e3a1] text-[11px] font-mono p-2 rounded overflow-x-auto">
                    Exec={entry.exec}
                  </pre>
                </div>
                <div className="flex gap-1 shrink-0">
                  <CopyButton text={generateDesktopFile(entry)} />
                  <DownloadButton content={generateDesktopFile(entry)} filename={`${entry.name.replace(/\s+/g, "-").toLowerCase()}.desktop`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card/80 border-border/50">
        <CardContent className="p-4">
          <h4 className="text-sm font-semibold mb-2">Installation</h4>
          <pre className="bg-[#1e1e2e] text-[#89b4fa] text-xs font-mono p-3 rounded leading-relaxed">
{`# Desktop-Dateien in ~/Desktop/ kopieren
cp *.desktop ~/Desktop/

# Ausfuehrbar machen
chmod +x ~/Desktop/*.desktop

# Oder systemweit (fuer alle User)
sudo cp *.desktop /usr/share/applications/`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
