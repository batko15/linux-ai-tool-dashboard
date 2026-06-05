"use client";

import { ToolSection } from "../tool-card";
import { networkTools } from "@/lib/dashboard-data";
import { CommandBlock } from "../command-block";
import { Wifi } from "lucide-react";

const wgSetup = `# WireGuard Beispiel-Konfiguration
sudo pacman -S wireguard-tools
sudo wg genkey | tee /etc/wireguard/privatekey | wg pubkey > /etc/wireguard/publickey
sudo chmod 600 /etc/wireguard/privatekey

# Konfiguration erstellen
sudo tee /etc/wireguard/wg0.conf > /dev/null << EOF
[Interface]
PrivateKey = $(cat /etc/wireguard/privatekey)
Address = 10.0.0.1/24
ListenPort = 51820

[Peer]
PublicKey = <PEER_PUBLIC_KEY>
AllowedIPs = 10.0.0.2/32
Endpoint = <SERVER_IP>:51820
PersistentKeepalive = 25
EOF

# WireGuard starten
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0`;

export function NetworkSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
          <Wifi className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Netzwerk & VPN</h2>
          <p className="text-sm text-muted-foreground">WireGuard, SSH, Remote Desktop, Cloud Sync</p>
        </div>
      </div>

      <ToolSection title="Netzwerk Tools" tools={networkTools} />
      <CommandBlock commands={wgSetup} title="WireGuard VPN Setup" />
    </div>
  );
}
