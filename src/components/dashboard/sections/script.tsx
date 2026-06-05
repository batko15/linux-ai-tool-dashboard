"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadButton } from "../copy-button";
import { allScriptBlocks } from "@/lib/dashboard-data";
import { MultiCommandBlock } from "../command-block";
import { ScrollText, Download, Zap, Copy } from "lucide-react";

const fullScript = `#!/bin/bash
# ============================================
# ULTIMATES KDE PLASMA 6 SETUP
# Fuer: RTX 4070, i5-12400F, 32GB RAM
# System: BigCommunity/Manjaro Linux (CachyOS)
# ============================================

set -e
echo "=== Ultimatives Linux AI Setup ==="
echo "Dauer: ca. 1-2 Stunden"
echo ""

# --- 1. System Update ---
echo "[1/20] System-Update..."
sudo pacman -Syu --noconfirm

# --- 2. KDE Plasma 6 ---
echo "[2/20] KDE Plasma 6..."
sudo pacman -S --noconfirm plasma plasma-wayland-session kde-applications kde-system sddm sddm-kcm

# --- 3. NVIDIA ---
echo "[3/20] NVIDIA Optimierungen..."
sudo bash -c 'echo "options nvidia-drm modeset=1" > /etc/modprobe.d/nvidia.conf'
echo "export __GLX_VENDOR_LIBRARY_NAME=nvidia" >> ~/.profile
echo "export __NV_PRIME_RENDER_OFFLOAD=1" >> ~/.profile
sudo systemctl enable nvidia-persistenced --now
sudo nvidia-smi -pm 1

# --- 4. Performance ---
echo "[4/20] Performance Optimierungen..."
sudo pacman -S --noconfirm cpupower zram-generator preload
echo 'GOVERNOR="performance"' | sudo tee /etc/default/cpupower
sudo systemctl enable cpupower --now

# ZRAM
echo -e "[zram0]\\nzram-size = 8192\\ncompression-algorithm = zstd\\nswap-priority = 100" | sudo tee /etc/systemd/zram-generator.conf
sudo systemctl restart systemd-zram-setup

# Swappiness
echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.d/99-swappiness.conf
sudo sysctl -p

# NVMe I/O
echo "none" | sudo tee /sys/block/nvme0n1/queue/scheduler

# EarlyOOM
yay -S --noconfirm earlyoom
sudo systemctl enable earlyoom --now

# Preload
sudo systemctl enable preload --now

# --- 5. Themes ---
echo "[5/20] Themes & Icons..."
sudo pacman -S --noconfirm catppuccin-kde catppuccin-gtk-theme-mocha papirus-icon-theme bibata-cursor-theme kvantum kvantum-manager
yay -S --noconfirm whitesur-kde-git sweet-theme

# --- 6. KDE Plugins ---
echo "[6/20] KDE Plugins..."
sudo pacman -S --noconfirm latte-dock kdeconnect partitionmanager filelight

# --- 7. Terminal ---
echo "[7/20] Terminal & Shell..."
sudo pacman -S --noconfirm kitty alacritty zsh eza bat fzf ranger tmux
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

# Aliases
cat >> ~/.zshrc << 'ZSHEOF'
alias ls="eza -la --git --color=always"
alias cat="bat --style=plain"
alias update="sudo pacman -Syu && yay -Syu"
alias ai-start="ollama serve"
alias ai-chat="ollama run llama3:8b"
alias rr="ranger"
alias dg="lazydocker"
alias lg="lazygit"
ZSHEOF

# --- 8. Browser ---
echo "[8/20] Browser..."
sudo pacman -S --noconfirm firefox
yay -S --noconfirm librewolf-bin brave-bin
echo "MOZ_ENABLE_WAYLAND=1" | sudo tee -a /etc/environment

# --- 9. AI/KI ---
echo "[9/20] AI/KI Tools..."
yay -S --noconfirm ollama lm-studio-bin
ollama pull llama3:8b
ollama pull mistral:7b
ollama pull phi3:3.8b

# Stable Diffusion
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git ~/stable-diffusion-webui

# ComfyUI
git clone https://github.com/comfyanonymous/ComfyUI.git ~/ComfyUI

# KoboldCPP
git clone https://github.com/LostRuins/koboldcpp.git ~/koboldcpp

# Text Gen WebUI
git clone https://github.com/oobabooga/text-generation-webui.git ~/text-generation-webui

# --- 10. Development ---
echo "[10/20] Development..."
yay -S --noconfirm visual-studio-code-bin neovim
sudo pacman -S --noconfirm kate git docker
sudo systemctl enable docker --now
sudo usermod -aG docker $USER
yay -S --noconfirm lazygit lazydocker

# --- 11. Graphics ---
echo "[11/20] Grafik & Design..."
sudo pacman -S --noconfirm krita gimp inkscape blender kdenlive darktable

# --- 12. Media ---
echo "[12/20] Audio & Video..."
sudo pacman -S --noconfirm mpv vlc audacity

# --- 13. System Tools ---
echo "[13/20] System Tools..."
sudo pacman -S --noconfirm htop timeshift gparted libreoffice-fresh okular
yay -S --noconfirm netdata bpytop fastfetch
sudo systemctl enable netdata --now

# --- 14. Gaming ---
echo "[14/20] Gaming..."
sudo pacman -S --noconfirm steam lutris wine
yay -S --noconfirm heroic-games-launcher-bin mangohud goverlay gamemode proton-ge-custom-bin

# --- 15. Security ---
echo "[15/20] Sicherheit..."
sudo pacman -S --noconfirm clamav keepassxc gnupg
sudo freshclam
yay -S --noconfirm veracrypt bitwarden tor-browser

# --- 16. Network ---
echo "[16/20] Netzwerk..."
sudo pacman -S --noconfirm wireguard-tools openssh mosh remmina wireshark-qt nmap

# --- 17. Notes ---
echo "[17/20] Notizen..."
yay -S --noconfirm obsidian joplin-desktop

# --- 18. Desktop Shortcuts ---
echo "[18/20] Desktop Shortcuts..."
mkdir -p ~/Desktop
cat > ~/Desktop/Stable-Diffusion.desktop << 'DEOF'
[Desktop Entry]
Version=1.0
Type=Application
Name=Stable Diffusion
Exec=gnome-terminal --working-directory=$HOME/stable-diffusion-webui -- ./webui.sh --xformers --listen
Icon=inkscape
Terminal=true
Categories=Graphics;AI;
DEOF
chmod +x ~/Desktop/*.desktop

# --- 19. SDDM ---
echo "[19/20] SDDM Display Manager..."
sudo systemctl enable sddm --now

# --- 20. KWin Config ---
echo "[20/20] KWin Optimierungen..."
cat > ~/.config/kwinrc << 'KWINEOF'
[Compositing]
AllowTearing=false
LatencyMode=0
UseSyncToVBlank=true
WindowsBlockCompositing=false
KWINEOF

echo ""
echo "=== SETUP ABGESCHLOSSEN ==="
echo "Bitte System neu starten: sudo reboot"
`;

export function ScriptSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center">
          <ScrollText className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Script Generator</h2>
          <p className="text-sm text-muted-foreground">Komplett-Skript und einzelne Konfigurationsbloecke</p>
        </div>
      </div>

      {/* Full Script Download */}
      <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/30">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-emerald-400">Komplett-Setup Skript</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Alles in einem: KDE Plasma, NVIDIA, Themes, AI-Tools, Gaming, Security (ca. 1-2 Stunden)
                </p>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <DownloadButton content={fullScript} filename="ultimate-linux-setup.sh" />
              <Button
                variant="default"
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 gap-2"
                onClick={() => {
                  navigator.clipboard.writeText(fullScript);
                }}
              >
                <Copy className="h-3.5 w-3.5" />
                Script kopieren
              </Button>
            </div>
          </div>
          <div className="mt-3 bg-[#1e1e2e] text-[#6c7086] text-[11px] font-mono p-3 rounded leading-relaxed max-h-48 overflow-y-auto">
            {fullScript.split("\n").slice(0, 20).map((line, i) => (
              <div key={i}>{line || "\u00A0"}</div>
            ))}
            <div className="text-center text-muted-foreground mt-1">... ({fullScript.split("\n").length} Zeilen gesamt)</div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Script Blocks */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Einzelne Konfigurationsbloecke</h3>
        {allScriptBlocks.map((block) => (
          <MultiCommandBlock
            key={block.id}
            commands={block.commands}
            title={`${block.title} (${block.category})`}
            showDownload
            filename={`${block.id}-config.sh`}
          />
        ))}
      </div>
    </div>
  );
}
