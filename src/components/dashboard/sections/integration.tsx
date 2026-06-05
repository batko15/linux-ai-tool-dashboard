"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CommandBlock } from "../command-block";
import { Download, Monitor, Package, Widget, TerminalSquare, Copy } from "lucide-react";
import { toast } from "sonner";

const standaloneDesktopFile = `[Desktop Entry]
Version=1.0
Type=Application
Name=Linux AI Tool Dashboard
Comment=Umfassendes Tool-Dashboard fuer BigCommunity/Manjaro
Exec=xdg-open %U/linux-ai-dashboard.html
Icon=utilities-system-monitor
Terminal=false
Categories=System;Monitor;Utility;
StartupNotify=true`;

const systemdService = `# systemd Service fuer lokalen Dashboard-Server
sudo tee /etc/systemd/system/linux-ai-dashboard.service > /dev/null << 'EOF'
[Unit]
Description=Linux AI Tool Dashboard
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=/opt/linux-ai-dashboard
ExecStart=/usr/bin/python3 -m http.server 8080 --bind 127.0.0.1
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable linux-ai-dashboard --now

# Dashboard oeffnen
xdg-open http://localhost:8080`;

const kdeWidget = `# KDE Plasma Widget Installations-Anleitung
# 1. Widget-Verzeichnis erstellen
mkdir -p ~/.local/share/plasma/plasmoids/linux-ai-dashboard

# 2. metadata.json erstellen
cat > ~/.local/share/plasma/plasmoids/linux-ai-dashboard/metadata.json << 'EOF'
{
  "KPlugin": {
    "Id": "linux-ai-dashboard",
    "Name": "Linux AI Dashboard",
    "Description": "Tool Dashboard Widget",
    "Icon": "utilities-system-monitor",
    "EnabledByDefault": true
  },
  "X-Plasma-API": "5.0",
  "X-Plasma-MainScript": "contents/ui/main.qml"
}
EOF

# 3. Alternativ: Web-Browser Widget nutzen
# Rechtsklick auf Panel -> Widget hinzufuegen -> "Web-Browser"
# URL: file:///home/$USER/linux-ai-dashboard.html`;

const localInstall = `# === LOKALE INSTALLATION ===

# 1. Standalone HTML in Home-Verzeichnis kopieren
cp linux-ai-dashboard.html ~/linux-ai-dashboard.html

# 2. Desktop-Shortcut erstellen
mkdir -p ~/Desktop
cat > ~/Desktop/linux-ai-dashboard.desktop << 'EOF'
[Desktop Entry]
Version=1.0
Type=Application
Name=Linux AI Dashboard
Comment=Anti-Gravity Tool Dashboard
Exec=xdg-open ~/linux-ai-dashboard.html
Icon=utilities-system-monitor
Terminal=false
Categories=System;
EOF
chmod +x ~/Desktop/linux-ai-dashboard.desktop

# 3. Systemweit verfuegbar machen
sudo cp ~/linux-ai-dashboard.html /usr/share/linux-ai-dashboard/
sudo cp ~/Desktop/linux-ai-dashboard.desktop /usr/share/applications/

echo "Dashboard installiert! Doppelklick auf Desktop-Icon."`;

export function IntegrationSection() {
  const handleDownloadStandalone = () => {
    window.open("/api/standalone", "_blank");
    toast.success("Standalone HTML wird heruntergeladen!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
          <Package className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">System Integration</h2>
          <p className="text-sm text-muted-foreground">Dashboard dauerhaft installieren als Programm, Widget, oder Service</p>
        </div>
      </div>

      {/* Method 1: Standalone HTML */}
      <Card className="bg-card/80 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <Monitor className="h-4 w-4 text-emerald-400" />
            Methode 1: Standalone HTML (Einfachste)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground mb-3">Herunterladen, doppelklicken, fertig. Kein Server noetig.</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <Button variant="default" size="sm" className="gap-2 bg-emerald-600 hover:bg-emerald-700" onClick={handleDownloadStandalone}>
              <Download className="h-3.5 w-3.5" />
              Standalone HTML herunterladen
            </Button>
            <Button variant="outline" size="sm" className="gap-2" onClick={() => {
              navigator.clipboard.writeText(window.location.origin + "/api/standalone");
              toast.success("Download-URL kopiert!");
            }}>
              <Copy className="h-3.5 w-3.5" />
              URL kopieren
            </Button>
          </div>
          <CommandBlock commands={standaloneDesktopFile} title=".desktop Datei" showDownload filename="linux-ai-dashboard.desktop" />
        </CardContent>
      </Card>

      {/* Method 2: Systemd Service */}
      <Card className="bg-card/80 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <TerminalSquare className="h-4 w-4 text-violet-400" />
            Methode 2: Systemd Service (Permanent)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground mb-3">Laeuft permanent im Hintergrund auf Port 8080. Startet automatisch beim Boot.</p>
          <CommandBlock commands={systemdService} title="Systemd Service" showDownload filename="linux-ai-dashboard.service.sh" />
        </CardContent>
      </Card>

      {/* Method 3: KDE Widget */}
      <Card className="bg-card/80 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <Widget className="h-4 w-4 text-pink-400" />
            Methode 3: KDE Plasma Widget
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground mb-3">Native KDE Widget oder Web-Browser Widget im Panel.</p>
          <CommandBlock commands={kdeWidget} title="KDE Widget Setup" showDownload filename="kde-widget-setup.sh" />
        </CardContent>
      </Card>

      {/* Method 4: Local Install */}
      <Card className="bg-card/80 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <Package className="h-4 w-4 text-amber-400" />
            Methode 4: Lokale Installation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground mb-3">Dashboard auf dem Desktop und im App-Menue verfuegbar.</p>
          <CommandBlock commands={localInstall} title="Komplette Installation" showDownload filename="local-install.sh" />
        </CardContent>
      </Card>

      {/* Install Commands Summary */}
      <Card className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30">
        <CardContent className="p-4">
          <h3 className="text-sm font-semibold text-amber-400 mb-2">Schnellstart (Empfehlung)</h3>
          <pre className="bg-[#1e1e2e] text-[#a6e3a1] text-[11px] font-mono p-3 rounded leading-relaxed">
{`# 1. Standalone HTML herunterladen (Button oben)
# 2. Doppelklick -> oeffnet im Browser
# 3. Bookmarks -> "Zum Startbildschirm hinzufuegen"
#    -> Permanentes Dashboard-Widget!`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
