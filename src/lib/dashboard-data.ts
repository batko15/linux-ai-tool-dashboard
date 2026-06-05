// Complete Linux AI Tool Dashboard Data
// System: BigCommunity Manjaro Linux | RTX 4070 | i5-12400F | 32GB RAM

export interface Tool {
  name: string;
  description: string;
  installCmd: string;
  category: string;
  source: "pacman" | "yay" | "flatpak" | "git" | "pip" | "custom";
  github?: string;
  homepage?: string;
  icon?: string;
}

export interface DesktopEntry {
  name: string;
  comment: string;
  exec: string;
  icon: string;
  terminal: boolean;
  categories: string;
}

export interface SystemInfo {
  distro: string;
  kernel: string;
  desktop: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  nvidiaDriver: string;
  vram: string;
  displayServer: string;
  ip: string;
}

export interface Section {
  id: string;
  label: string;
  icon: string;
}

export const systemInfo: SystemInfo = {
  distro: "BigCommunity based in Manjaro Linux 1.5.1 Barn",
  kernel: "7.0.10-2-cachyos",
  desktop: "COSMIC 1.32.0 (Smithay X WM)",
  cpu: "Intel Core i5-12400F (6C/12T, 3.3-4.4GHz)",
  gpu: "NVIDIA GeForce RTX 4070 (AD104, 12GB VRAM)",
  ram: "32 GiB DDR4",
  storage: "953.87 GiB NVMe (WR-G1000) + 58.59 GiB HDD",
  nvidiaDriver: "610.43.02",
  vram: "11.71 GiB",
  displayServer: "Wayland (X11 fallback via Smithay)",
  ip: "192.168.1.201 (enp3s0) / 192.168.1.204 (wlan)",
};

export const sections: Section[] = [
  { id: "overview", label: "System Overview", icon: "Monitor" },
  { id: "desktop", label: "Desktop Environment", icon: "LayoutDashboard" },
  { id: "themes", label: "Themes & Design", icon: "Palette" },
  { id: "ai", label: "AI / KI Tools", icon: "Brain" },
  { id: "dev", label: "Development", icon: "Code2" },
  { id: "terminal", label: "Terminal & Shell", icon: "TerminalSquare" },
  { id: "performance", label: "Performance", icon: "Gauge" },
  { id: "gaming", label: "Gaming", icon: "Gamepad2" },
  { id: "graphics", label: "Grafik & Design", icon: "Image" },
  { id: "media", label: "Audio & Video", icon: "Music" },
  { id: "network", label: "Netzwerk & VPN", icon: "Wifi" },
  { id: "security", label: "Sicherheit", icon: "Shield" },
  { id: "system", label: "System Tools", icon: "Wrench" },
  { id: "shortcuts", label: "Desktop Shortcuts", icon: "AppWindow" },
  { id: "script", label: "Script Generator", icon: "ScrollText" },
];

// ============ AI / KI Tools ============
export const aiTools: Tool[] = [
  {
    name: "Ollama",
    description: "Lokale LLM-Ausführung (Llama 3, Mistral, Phi-3, etc.)",
    installCmd: "yay -S ollama && ollama pull llama3:8b",
    category: "LLM Engine",
    source: "yay",
    github: "https://github.com/ollama/ollama",
    homepage: "https://ollama.com",
  },
  {
    name: "LM Studio",
    description: "GUI fuer lokale LLMs (Ollama-kompatibel)",
    installCmd: "yay -S lm-studio-bin",
    category: "LLM GUI",
    source: "yay",
    homepage: "https://lmstudio.ai",
  },
  {
    name: "Open WebUI",
    description: "ChatGPT-Interface fuer lokale Ollama-Modelle",
    installCmd: "git clone https://github.com/open-webui/open-webui.git ~/open-webui && cd ~/open-webui && docker compose up -d",
    category: "LLM Frontend",
    source: "git",
    github: "https://github.com/open-webui/open-webui",
  },
  {
    name: "Stable Diffusion WebUI (A1111)",
    description: "Custom AI Bildgenerierung mit massiven Erweiterungen",
    installCmd: "git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git ~/stable-diffusion-webui && cd ~/stable-diffusion-webui && ./webui.sh --xformers --medvram --opt-sdp-attention",
    category: "Image Gen",
    source: "git",
    github: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
  },
  {
    name: "ComfyUI",
    description: "Modulares Stable Diffusion Frontend (Node-basiert)",
    installCmd: "git clone https://github.com/comfyanonymous/ComfyUI.git ~/ComfyUI && cd ~/ComfyUI && pip install -r requirements.txt",
    category: "Image Gen",
    source: "git",
    github: "https://github.com/comfyanonymous/ComfyUI",
  },
  {
    name: "KoboldCPP",
    description: "Maechtiger Backend-Server fuer LLMs (CUDA-Beschleunigung)",
    installCmd: "git clone https://github.com/LostRuins/koboldcpp.git ~/koboldcpp && cd ~/koboldcpp && mkdir build && cd build && cmake .. -DKOBOLDCPY_CUDA=ON && make -j$(nproc)",
    category: "LLM Engine",
    source: "git",
    github: "https://github.com/LostRuins/koboldcpp",
  },
  {
    name: "Text Generation WebUI",
    description: "Beste Version fuer lokale LLMs mit Extensions",
    installCmd: "git clone https://github.com/oobabooga/text-generation-webui.git ~/text-generation-webui && cd ~/text-generation-webui && pip install -r requirements.txt",
    category: "LLM Frontend",
    source: "git",
    github: "https://github.com/oobabooga/text-generation-webui",
  },
  {
    name: "Whisper",
    description: "OpenAI Sprach-zu-Text (GPU-beschleunigt)",
    installCmd: "pip install git+https://github.com/openai/whisper.git",
    category: "Speech",
    source: "pip",
    github: "https://github.com/openai/whisper",
  },
  {
    name: "RAGFlow",
    description: "RAG (Retrieval-Augmented Generation) Framework",
    installCmd: "git clone https://github.com/infiniflow/ragflow.git ~/ragflow && cd ~/ragflow && pip install -r requirements.txt",
    category: "RAG",
    source: "git",
    github: "https://github.com/infiniflow/ragflow",
  },
  {
    name: "AnythingLLM",
    description: "Lokale LLM-Chat-UI mit RAG-Support",
    installCmd: "yay -S anything-llm",
    category: "LLM Frontend",
    source: "yay",
    github: "https://github.com/Mintplex-Labs/anything-llm",
  },
  {
    name: "PyTorch (CUDA)",
    description: "ML-Framework mit NVIDIA CUDA-Support",
    installCmd: "yay -S python-pytorch cuda",
    category: "ML Framework",
    source: "yay",
  },
  {
    name: "TensorFlow (GPU)",
    description: "ML-Framework mit GPU-Beschleunigung",
    installCmd: "yay -S python-tensorflow",
    category: "ML Framework",
    source: "yay",
  },
  {
    name: "JupyterLab",
    description: "Web-basiertes Notebook fuer Data Science",
    installCmd: "sudo pacman -S jupyterlab && pip install jupyterlab",
    category: "ML Framework",
    source: "pacman",
  },
];

// ============ Desktop Environment ============
export const desktopTools: Tool[] = [
  {
    name: "KDE Plasma 6 (Vollversion)",
    description: "Maximale Anpassbarkeit + Performance + Wayland",
    installCmd: "sudo pacman -S plasma plasma-wayland-session kde-applications kde-system sddm sddm-kcm",
    category: "Desktop",
    source: "pacman",
  },
  {
    name: "Hyprland",
    description: "Dynamic Tiling + Wayland + Eye-Candy (Leichtgewichtig)",
    installCmd: "sudo pacman -S hyprland waybar swaync swayidle swaylock grim slurp wl-clipboard wf-recorder",
    category: "Window Manager",
    source: "pacman",
    github: "https://github.com/hyprwm/Hyprland",
  },
  {
    name: "GNOME 46",
    description: "Stabilitaet + Wayland-Default",
    installCmd: "sudo pacman -S gnome gnome-extra gnome-shell-extension-dash-to-panel gnome-tweaks gdm",
    category: "Desktop",
    source: "pacman",
  },
  {
    name: "Latte Dock",
    description: "Alternatives Dock mit Widgets fuer KDE",
    installCmd: "sudo pacman -S latte-dock",
    category: "KDE Plugin",
    source: "pacman",
  },
  {
    name: "KDE Connect",
    description: "Android-Integration (Dateien, Benachrichtigungen, etc.)",
    installCmd: "sudo pacman -S kdeconnect",
    category: "KDE Plugin",
    source: "pacman",
  },
  {
    name: "SDDM Display Manager",
    description: "KDE-Display Manager mit Wayland-Support",
    installCmd: "sudo pacman -S sddm sddm-kcm && sudo systemctl enable sddm --now",
    category: "Display Manager",
    source: "pacman",
  },
];

// ============ Themes & Design ============
export const themeTools: Tool[] = [
  {
    name: "Catppuccin KDE + GTK",
    description: "Modernes Catppuccin Mocha Theme (Dark Hacker-Look)",
    installCmd: "sudo pacman -S catppuccin-kde catppuccin-gtk-theme-mocha",
    category: "Global Theme",
    source: "pacman",
  },
  {
    name: "Papirus Icons",
    description: "Modernes, knappes Icon-Set",
    installCmd: "sudo pacman -S papirus-icon-theme",
    category: "Icons",
    source: "pacman",
  },
  {
    name: "Bibata Cursor",
    description: "Animierter Cursor (Rainbow/Modern)",
    installCmd: "sudo pacman -S bibata-cursor-theme",
    category: "Cursor",
    source: "pacman",
  },
  {
    name: "Kvantum Engine",
    description: "Theme-Engine fuer Qt-Apps",
    installCmd: "sudo pacman -S kvantum kvantum-manager",
    category: "Theme Engine",
    source: "pacman",
  },
  {
    name: "Sweet Theme",
    description: "Modernes Plasma-Theme",
    installCmd: "sudo pacman -S sweet-theme",
    category: "Plasma Theme",
    source: "pacman",
  },
  {
    name: "WhiteSur KDE",
    description: "macOS-Style Theme fuer KDE",
    installCmd: "yay -S whitesur-kde-git",
    category: "Global Theme",
    source: "yay",
  },
  {
    name: "Orchis Theme",
    description: "Modernes GTK/KDE Theme",
    installCmd: "yay -S orchis-kde-git",
    category: "Global Theme",
    source: "yay",
  },
  {
    name: "Matcha KDE",
    description: "Gruenes, modernes Theme",
    installCmd: "yay -S matcha-kde",
    category: "Global Theme",
    source: "yay",
  },
  {
    name: "SDDM Catppuccin",
    description: "Catppuccin Sperrbildschirm-Theme",
    installCmd: "yay -S sddm-theme-catppuccin-git",
    category: "Login Theme",
    source: "yay",
  },
  {
    name: "Flatery Icons",
    description: "Flaches, modernes Icon-Set",
    installCmd: "sudo pacman -S flatery-icon-theme",
    category: "Icons",
    source: "pacman",
  },
];

// ============ Development ============
export const devTools: Tool[] = [
  {
    name: "VS Code (Wayland)",
    description: "Microsofts Code-Editor mit Wayland-Support",
    installCmd: "yay -S visual-studio-code-bin",
    category: "IDE",
    source: "yay",
  },
  {
    name: "Neovim",
    description: "Moderner Vim-Fork (Terminal-basiert)",
    installCmd: "sudo pacman -S neovim",
    category: "Editor",
    source: "pacman",
  },
  {
    name: "Kate",
    description: "KDE-Texteditor (leicht & schnell)",
    installCmd: "sudo pacman -S kate",
    category: "Editor",
    source: "pacman",
  },
  {
    name: "IntelliJ IDEA",
    description: "JetBrains IDE fuer Java/Kotlin",
    installCmd: "yay -S intellij-idea-community",
    category: "IDE",
    source: "yay",
  },
  {
    name: "PyCharm",
    description: "JetBrains IDE fuer Python",
    installCmd: "yay -S pycharm-community",
    category: "IDE",
    source: "yay",
  },
  {
    name: "CLion",
    description: "JetBrains IDE fuer C/C++",
    installCmd: "yay -S clion",
    category: "IDE",
    source: "yay",
  },
  {
    name: "DBeaver",
    description: "Datenbank-Client (MySQL, PostgreSQL, etc.)",
    installCmd: "yay -S dbeaver-ce",
    category: "Database",
    source: "yay",
  },
  {
    name: "Docker + Podman",
    description: "Container-Runtime & Management",
    installCmd: "sudo pacman -S docker podman docker-compose && sudo systemctl enable docker --now && sudo usermod -aG docker $USER",
    category: "Containers",
    source: "pacman",
  },
  {
    name: "GitKraken",
    description: "Git-Client (GUI)",
    installCmd: "yay -S gitkraken",
    category: "Git",
    source: "yay",
  },
  {
    name: "Postman",
    description: "API-Testing-Tool",
    installCmd: "yay -S postman-bin",
    category: "API",
    source: "yay",
  },
  {
    name: "LazyGit",
    description: "Profi Git-Client im Terminal",
    installCmd: "yay -S lazygit",
    category: "Git",
    source: "yay",
  },
  {
    name: "LazyDocker",
    description: "Profi Docker-Manager im Terminal",
    installCmd: "yay -S lazydocker",
    category: "Containers",
    source: "yay",
  },
];

// ============ Terminal & Shell ============
export const terminalTools: Tool[] = [
  {
    name: "Kitty Terminal",
    description: "GPU-beschleunigtes, modernes Terminal",
    installCmd: "sudo pacman -S kitty && git clone --depth 1 https://github.com/dexpota/kitty-themes.git ~/.config/kitty/kitty-themes",
    category: "Terminal",
    source: "pacman",
  },
  {
    name: "Alacritty",
    description: "GPU-beschleunigtes Terminal (Rust)",
    installCmd: "sudo pacman -S alacritty",
    category: "Terminal",
    source: "pacman",
  },
  {
    name: "WezTerm",
    description: "Cross-Platform Terminal (Lua-konfigurierbar)",
    installCmd: "yay -S wezterm",
    category: "Terminal",
    source: "yay",
  },
  {
    name: "Zsh + Oh-My-Zsh",
    description: "Erweiterte Shell mit Plugin-System",
    installCmd: 'sudo pacman -S zsh && sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended',
    category: "Shell",
    source: "custom",
  },
  {
    name: "Powerlevel10k",
    description: "Modernes Zsh-Theme mit Prompt-Config",
    installCmd: 'git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k',
    category: "Shell Theme",
    source: "git",
  },
  {
    name: "Exa (eza)",
    description: "Modernes ls mit Farben & Git-Icons",
    installCmd: "sudo pacman -S eza && alias ls='eza -la --git --color=always'",
    category: "CLI Tool",
    source: "pacman",
  },
  {
    name: "Bat",
    description: "Modernes cat mit Syntax-Highlighting",
    installCmd: "sudo pacman -S bat && alias cat='bat'",
    category: "CLI Tool",
    source: "pacman",
  },
  {
    name: "Fzf",
    description: "Fuzzy-Finder fuer Dateien & Befehle",
    installCmd: "sudo pacman -S fzf",
    category: "CLI Tool",
    source: "pacman",
  },
  {
    name: "Ranger",
    description: "Terminal-Dateimanager (Vim-Style)",
    installCmd: "sudo pacman -S ranger",
    category: "File Manager",
    source: "pacman",
  },
  {
    name: "Tmux",
    description: "Terminal-Multiplexer",
    installCmd: "sudo pacman -S tmux && git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm",
    category: "Multiplexer",
    source: "pacman",
  },
  {
    name: "Fastfetch",
    description: "Schneller Neofetch-Ersatz",
    installCmd: "yay -S fastfetch",
    category: "System Info",
    source: "yay",
  },
];

// ============ Performance ============
export const perfTools: Tool[] = [
  {
    name: "CPU Governor (Performance)",
    description: "CPU dauerhaft auf Maximum-Taktung",
    installCmd: "sudo pacman -S cpupower && echo 'GOVERNOR=\"performance\"' | sudo tee /etc/default/cpupower && sudo systemctl enable cpupower --now",
    category: "CPU",
    source: "pacman",
  },
  {
    name: "ZRAM (8GB)",
    description: "Komprimierter RAM-Swap (zstd, 8GB)",
    installCmd: 'sudo pacman -S zram-generator && echo -e "[zram0]\\nzram-size = 8192\\ncompression-algorithm = zstd\\nswap-priority = 100" | sudo tee /etc/systemd/zram-generator.conf && sudo systemctl restart systemd-zram-setup',
    category: "Memory",
    source: "pacman",
  },
  {
    name: "EarlyOOM",
    description: "Verhindert Systemabstuerze bei hohem RAM-Verbrauch",
    installCmd: "yay -S earlyoom && sudo systemctl enable earlyoom --now",
    category: "Memory",
    source: "yay",
  },
  {
    name: "Preload",
    description: "Laden haeufig genutzter Apps in RAM",
    installCmd: "sudo pacman -S preload && sudo systemctl enable preload --now",
    category: "Caching",
    source: "pacman",
  },
  {
    name: "NVTop",
    description: "NVIDIA GPU-Monitoring im Terminal (wie htop)",
    installCmd: "yay -S nvtop",
    category: "GPU Monitor",
    source: "yay",
  },
  {
    name: "NVIDIA Persistenced",
    description: "Verhindert Treiber-Neuladen (bessere Performance)",
    installCmd: "sudo systemctl enable nvidia-persistenced --now",
    category: "GPU",
    source: "custom",
  },
  {
    name: "Swappiness (10)",
    description: "Weniger Swap-Nutzung (bevorzugt RAM)",
    installCmd: 'echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.d/99-swappiness.conf && sudo sysctl -p',
    category: "Memory",
    source: "custom",
  },
  {
    name: "NVMe I/O Scheduler (none)",
    description: "Beste Performance fuer NVMe SSDs",
    installCmd: 'echo "none" | sudo tee /sys/block/nvme0n1/queue/scheduler',
    category: "Storage",
    source: "custom",
  },
];

// ============ Gaming ============
export const gamingTools: Tool[] = [
  {
    name: "Steam",
    description: "Steam-Client (Linux-Native)",
    installCmd: "sudo pacman -S steam",
    category: "Launcher",
    source: "pacman",
  },
  {
    name: "Lutris",
    description: "Game-Launcher fuer Windows-Spiele (Wine)",
    installCmd: "sudo pacman -S lutris",
    category: "Launcher",
    source: "pacman",
  },
  {
    name: "Heroic Games Launcher",
    description: "Epic Games / GOG-Launcher",
    installCmd: "yay -S heroic-games-launcher-bin",
    category: "Launcher",
    source: "yay",
  },
  {
    name: "MangoHud",
    description: "Performance-Overlay (FPS, CPU, RAM, VRAM)",
    installCmd: "yay -S mangohud",
    category: "Overlay",
    source: "yay",
  },
  {
    name: "GOverlay",
    description: "GUI fuer MangoHud-Konfiguration",
    installCmd: "yay -S goverlay",
    category: "Overlay",
    source: "yay",
  },
  {
    name: "Gamemode",
    description: "Performance-Boost fuer Spiele (Feral Interactive)",
    installCmd: "yay -S gamemode && sudo systemctl enable gamemoded --now",
    category: "Performance",
    source: "yay",
  },
  {
    name: "Gamescope",
    description: "Vulkan/Steam Deck Kompositor fuer bessere FPS",
    installCmd: "yay -S gamescope",
    category: "Performance",
    source: "yay",
  },
  {
    name: "Proton GE Custom",
    description: "Steam Proton mit zusaetzlichen Patches",
    installCmd: "yay -S proton-ge-custom-bin",
    category: "Compatibility",
    source: "yay",
  },
  {
    name: "Wine + Winetricks",
    description: "Windows-Emulation + DirectX-Pakete",
    installCmd: "sudo pacman -S wine wine-gecko wine-mono winetricks",
    category: "Compatibility",
    source: "pacman",
  },
  {
    name: "OBS Studio",
    description: "Streaming & Recording",
    installCmd: "sudo pacman -S obs-studio",
    category: "Recording",
    source: "pacman",
  },
  {
    name: "DXVK & VKD3D",
    description: "DirectX 9/10/11/12 zu Vulkan-Umsetzung",
    installCmd: "sudo pacman -S dxvk vkd3d",
    category: "Compatibility",
    source: "pacman",
  },
];

// ============ Graphics & Design ============
export const graphicsTools: Tool[] = [
  { name: "Krita", description: "Professionelle Malsoftware", installCmd: "sudo pacman -S krita", category: "Painting", source: "pacman" },
  { name: "GIMP", description: "Bildbearbeitung (Photoshop-Alternative)", installCmd: "sudo pacman -S gimp", category: "Photo Editing", source: "pacman" },
  { name: "Inkscape", description: "Vektorgrafik (Illustrator-Alternative)", installCmd: "sudo pacman -S inkscape", category: "Vector", source: "pacman" },
  { name: "Blender", description: "3D-Modellierung & Animation", installCmd: "sudo pacman -S blender", category: "3D", source: "pacman" },
  { name: "Kdenlive", description: "Video-Editing (KDE-Integration)", installCmd: "sudo pacman -S kdenlive", category: "Video", source: "pacman" },
  { name: "Shotcut", description: "Video-Editing (leicht & schnell)", installCmd: "sudo pacman -S shotcut", category: "Video", source: "pacman" },
  { name: "Darktable", description: "RAW-Bildbearbeitung (Lightroom-Alternative)", installCmd: "sudo pacman -S darktable", category: "RAW", source: "pacman" },
  { name: "RawTherapee", description: "RAW-Bildbearbeitung", installCmd: "sudo pacman -S rawtherapee", category: "RAW", source: "pacman" },
  { name: "Scribus", description: "Desktop-Publishing", installCmd: "sudo pacman -S scribus", category: "DTP", source: "pacman" },
];

// ============ Audio & Video Players ============
export const mediaTools: Tool[] = [
  { name: "MPV", description: "Leichtgewichtig, GPU-beschleunigt", installCmd: "sudo pacman -S mpv", category: "Video Player", source: "pacman" },
  { name: "VLC", description: "Universeller Media-Player", installCmd: "sudo pacman -S vlc", category: "Video Player", source: "pacman" },
  { name: "Haruna", description: "KDE-Integration, MPV-basiert", installCmd: "yay -S haruna", category: "Video Player", source: "yay" },
  { name: "Audacity", description: "Audio-Editing", installCmd: "sudo pacman -S audacity", category: "Audio Editor", source: "pacman" },
  { name: "Ardour", description: "Professionelle DAW", installCmd: "sudo pacman -S ardour", category: "DAW", source: "pacman" },
  { name: "LMMS", description: "Musikproduktion", installCmd: "sudo pacman -S lmms", category: "DAW", source: "pacman" },
  { name: "Strawberry", description: "Clementine-Fork (Modern)", installCmd: "yay -S strawberry", category: "Music Player", source: "yay" },
  { name: "Clementine", description: "Qt-basierter Musikplayer", installCmd: "sudo pacman -S clementine", category: "Music Player", source: "pacman" },
  { name: "PipeWire", description: "Audio-Server (Wayland-kompatibel)", installCmd: "sudo pacman -S pipewire pipewire-pulse wireplumber && sudo systemctl enable --now pipewire pipewire-pulse wireplumber", category: "Audio Server", source: "pacman" },
];

// ============ Network & VPN ============
export const networkTools: Tool[] = [
  { name: "WireGuard", description: "Modern & Schnell VPN", installCmd: "sudo pacman -S wireguard-tools", category: "VPN", source: "pacman" },
  { name: "OpenVPN", description: "OpenVPN-Protokoll", installCmd: "sudo pacman -S openvpn", category: "VPN", source: "pacman" },
  { name: "ProtonVPN", description: "Privacy-VPN-Client", installCmd: "yay -S protonvpn", category: "VPN", source: "yay" },
  { name: "Wireshark", description: "Netzwerk-Analyse (GUI)", installCmd: "sudo pacman -S wireshark-qt", category: "Analysis", source: "pacman" },
  { name: "Nmap", description: "Netzwerk-Scanner", installCmd: "sudo pacman -S nmap", category: "Scanner", source: "pacman" },
  { name: "Remmina", description: "Remote-Desktop (RDP, VNC, SSH)", installCmd: "sudo pacman -S remmina", category: "Remote", source: "pacman" },
  { name: "AnyDesk", description: "Remote-Desktop (propriaer)", installCmd: "yay -S anydesk-bin", category: "Remote", source: "yay" },
  { name: "FileZilla", description: "FTP/SFTP-Client", installCmd: "sudo pacman -S filezilla", category: "FTP", source: "pacman" },
  { name: "SSH + Mosh", description: "SSH mit besserer Latenz", installCmd: "sudo pacman -S openssh mosh && sudo systemctl enable sshd --now", category: "SSH", source: "pacman" },
  { name: "Rclone", description: "Cloud-Sync (Google Drive, Dropbox, etc.)", installCmd: "sudo pacman -S rclone", category: "Cloud", source: "pacman" },
];

// ============ Security ============
export const securityTools: Tool[] = [
  { name: "ClamAV", description: "Antivirus (Open Source)", installCmd: "sudo pacman -S clamav freshclam && sudo freshclam && sudo systemctl enable clamav-freshclam --now", category: "Antivirus", source: "pacman" },
  { name: "Rkhunter", description: "Rootkit-Scanner", installCmd: "sudo pacman -S rkhunter && sudo rkhunter --update && sudo rkhunter --check", category: "Rootkit", source: "pacman" },
  { name: "Lynis", description: "System-Audit-Tool", installCmd: "yay -S lynis && sudo lynis audit system", category: "Audit", source: "yay" },
  { name: "Firejail", description: "Sandbox fuer Anwendungen", installCmd: "sudo pacman -S firejail && sudo firecfg", category: "Sandbox", source: "pacman" },
  { name: "AppArmor", description: "Mandatory Access Control", installCmd: "sudo pacman -S apparmor && sudo systemctl enable apparmor --now", category: "MAC", source: "pacman" },
  { name: "GnuPG", description: "Verschluesselung (PGP)", installCmd: "sudo pacman -S gnupg", category: "Encryption", source: "pacman" },
  { name: "VeraCrypt", description: "Festplatten-Verschluesselung", installCmd: "yay -S veracrypt", category: "Encryption", source: "yay" },
  { name: "KeePassXC", description: "Passwort-Manager (lokal)", installCmd: "sudo pacman -S keepassxc", category: "Passwords", source: "pacman" },
  { name: "Bitwarden", description: "Passwort-Manager (Cloud)", installCmd: "yay -S bitwarden", category: "Passwords", source: "yay" },
  { name: "Tor Browser", description: "Anonymer Browser", installCmd: "yay -S tor-browser", category: "Privacy", source: "yay" },
  { name: "Signal", description: "Messenger (E2E-Verschluesselung)", installCmd: "yay -S signal-desktop", category: "Messenger", source: "yay" },
  { name: "Element", description: "Matrix-Client", installCmd: "yay -S element-desktop", category: "Messenger", source: "yay" },
];

// ============ System Tools ============
export const systemTools: Tool[] = [
  { name: "htop / bpytop", description: "Prozess-Viewer (Terminal)", installCmd: "sudo pacman -S htop && yay -S bpytop", category: "Monitor", source: "pacman" },
  { name: "NetData", description: "Echtzeit-System-Monitoring (Web-UI)", installCmd: "yay -S netdata && sudo systemctl enable netdata --now", category: "Monitor", source: "yay" },
  { name: "Cockpit", description: "Web-basiertes System-Management", installCmd: "sudo pacman -S cockpit && sudo systemctl enable cockpit.socket --now", category: "Management", source: "pacman" },
  { name: "Glances", description: "System-Monitoring (Terminal/Web)", installCmd: "sudo pacman -S glances", category: "Monitor", source: "pacman" },
  { name: "Timeshift", description: "System-Backups (Snapshots)", installCmd: "sudo pacman -S timeshift", category: "Backup", source: "pacman" },
  { name: "BorgBackup", description: "Inkrementelle Backups", installCmd: "sudo pacman -S borg", category: "Backup", source: "pacman" },
  { name: "GParted", description: "Partitionierungstool", installCmd: "sudo pacman -S gparted", category: "Partition", source: "pacman" },
  { name: "KDE Partition Manager", description: "KDE-Partitionierungstool", installCmd: "sudo pacman -S partitionmanager", category: "Partition", source: "pacman" },
  { name: "Filelight", description: "Festplatten-Analyse (KDE)", installCmd: "sudo pacman -S filelight", category: "Analysis", source: "pacman" },
  { name: "Dolphin Plugins", description: "KIO-Fuse, Google Drive, Archive", installCmd: "sudo pacman -S dolphin-plugins kio-fuse kio-gdrive kio-archive", category: "File Manager", source: "pacman" },
  { name: "LibreOffice", description: "Office-Suite", installCmd: "sudo pacman -S libreoffice-fresh", category: "Office", source: "pacman" },
  { name: "OnlyOffice", description: "MS-Office-kompatibel", installCmd: "yay -S onlyoffice-desktopeditors", category: "Office", source: "yay" },
  { name: "Okular", description: "PDF-Viewer (KDE)", installCmd: "sudo pacman -S okular", category: "PDF", source: "pacman" },
  { name: "Obsidian", description: "Markdown-Notiz-App (lokal)", installCmd: "yay -S obsidian", category: "Notes", source: "yay" },
  { name: "Joplin", description: "Notiz-App (Markdown, E2E)", installCmd: "yay -S joplin-desktop", category: "Notes", source: "yay" },
];

// ============ Desktop Shortcuts (.desktop files) ============
export const desktopShortcuts: DesktopEntry[] = [
  {
    name: "Stable Diffusion (A1111)",
    comment: "Custom AI Image Generation",
    exec: "gnome-terminal --working-directory=$HOME/stable-diffusion-webui -- ./webui.sh --xformers --listen --port 7860",
    icon: "inkscape",
    terminal: true,
    categories: "Graphics;AI;",
  },
  {
    name: "ComfyUI",
    comment: "Modular AI Image Generation",
    exec: "gnome-terminal --working-directory=$HOME/ComfyUI -- python main.py --listen --port 8188",
    icon: "blender",
    terminal: true,
    categories: "Graphics;AI;",
  },
  {
    name: "Text Gen AI (Oobabooga)",
    comment: "Custom LLM Runner",
    exec: "gnome-terminal --working-directory=$HOME/text-generation-webui -- bash -c 'source venv/bin/activate; python server.py --chat --listen; exec bash'",
    icon: "accessories-text-editor",
    terminal: true,
    categories: "Network;AI;",
  },
  {
    name: "Ollama",
    comment: "Local LLM Server",
    exec: "gnome-terminal -- ollama serve",
    icon: "computer",
    terminal: true,
    categories: "System;AI;",
  },
  {
    name: "KoboldCPP",
    comment: "Local LLM Inference (GPU)",
    exec: "gnome-terminal --working-directory=$HOME/koboldcpp/build -- ./koboldcpp",
    icon: "applications-engineering",
    terminal: true,
    categories: "System;AI;",
  },
  {
    name: "LazyDocker",
    comment: "Docker TUI Manager",
    exec: "gnome-terminal -- lazydocker",
    icon: "docker",
    terminal: true,
    categories: "System;",
  },
  {
    name: "LazyGit",
    comment: "Git TUI Manager",
    exec: "gnome-terminal -- lazygit",
    icon: "git-cola",
    terminal: true,
    categories: "Development;",
  },
  {
    name: "Kitty Terminal",
    comment: "GPU-accelerated Terminal",
    exec: "kitty",
    icon: "terminal",
    terminal: false,
    categories: "System;TerminalEmulator;",
  },
  {
    name: "Ranger",
    comment: "Terminal File Manager",
    exec: "gnome-terminal -- ranger",
    icon: "system-file-manager",
    terminal: true,
    categories: "System;FileManager;",
  },
  {
    name: "NetData Dashboard",
    comment: "Real-time System Monitoring",
    exec: "xdg-open http://localhost:19999",
    icon: "utilities-system-monitor",
    terminal: false,
    categories: "System;Monitor;",
  },
];

// ============ Script Blocks ============
export interface ScriptBlock {
  id: string;
  title: string;
  description: string;
  commands: string[];
  category: string;
}

export const nvidiaScript: ScriptBlock = {
  id: "nvidia",
  title: "NVIDIA RTX 4070 Optimierungen",
  description: "Treiber-Konfiguration, Power Management, GPU-Beschleunigung",
  category: "GPU",
  commands: [
    '# NVIDIA Persistenced (verhindert Treiber-Neuladen)',
    'sudo systemctl enable nvidia-persistenced --now',
    '',
    '# Power Management: Prefer Maximum Performance',
    'sudo nvidia-smi -pm 1',
    'sudo nvidia-smi -pl 350',
    '',
    '# Fan Control (manuell, 60%)',
    'sudo nvidia-settings -a "[gpu:0]/GPUFanControlState=1"',
    'sudo nvidia-settings -a "[fan:0]/GPUTargetFanSpeed=60"',
    '',
    '# Environment Variables (fuer CUDA)',
    'echo "export __GLX_VENDOR_LIBRARY_NAME=nvidia" >> ~/.profile',
    'echo "export __NV_PRIME_RENDER_OFFLOAD=1" >> ~/.profile',
    'echo "export __GLX_RENDERER_DEVICE_ID=10de:2786" >> ~/.profile',
  ],
};

export const waylandScript: ScriptBlock = {
  id: "wayland",
  title: "Wayland-Optimierungen",
  description: "Alle Apps auf Wayland umstellen (QT, SDL, Mozilla)",
  category: "Display Server",
  commands: [
    '# Qt-Apps auf Wayland',
    'echo "QT_QPA_PLATFORM=wayland" | sudo tee -a /etc/environment',
    '',
    '# SDL-Apps auf Wayland',
    'echo "SDL_VIDEODRIVER=wayland" | sudo tee -a /etc/environment',
    '',
    '# Firefox Wayland',
    'echo "MOZ_ENABLE_WAYLAND=1" | sudo tee -a /etc/environment',
    '',
    '# Clutter auf Wayland',
    'echo "CLUTTER_BACKEND=wayland" | sudo tee -a /etc/environment',
  ],
};

export const zshAliasesScript: ScriptBlock = {
  id: "zsh-aliases",
  title: "Zsh Aliases & Optimierungen",
  description: "Produktivitaets-Boost fuer die Shell",
  category: "Shell",
  commands: [
    '# Bessere ls/cat Befehle',
    'echo \'alias ls="eza -la --git --color=always"\' >> ~/.zshrc',
    'echo \'alias cat="bat --style=plain"\' >> ~/.zshrc',
    '',
    '# System-Aliases',
    'echo \'alias update="sudo pacman -Syu && yay -Syu"\' >> ~/.zshrc',
    'echo \'alias ai-start="ollama serve"\' >> ~/.zshrc',
    'echo \'alias ai-chat="ollama run llama3:8b"\' >> ~/.zshrc',
    'echo \'alias rr="ranger"\' >> ~/.zshrc',
    'echo \'alias nv="nvim"\' >> ~/.zshrc',
    'echo \'alias py="python"\' >> ~/.zshrc',
    'echo \'alias dg="lazydocker"\' >> ~/.zshrc',
    'echo \'alias lg="lazygit"\' >> ~/.zshrc',
    '',
    '# FZF Integration',
    'echo "source /usr/share/fzf/key-bindings.zsh" >> ~/.zshrc',
    '',
    '# Zsh neu laden',
    'source ~/.zshrc',
  ],
};

export const backupScript: ScriptBlock = {
  id: "backup",
  title: "Automatisches Backup-Skript",
  description: "Taegliches Backup mit Cron-Job",
  category: "System",
  commands: [
    '# Backup-Skript erstellen',
    'cat > ~/backup.sh << \'EOF\'',
    '#!/bin/bash',
    'BACKUP_DIR="/mnt/backup"',
    'DATE=$(date +%Y-%m-%d_%H-%M-%S)',
    'BACKUP_NAME="backup_$DATE.tar.gz"',
    'mkdir -p "$BACKUP_DIR"',
    'tar -czvf "$BACKUP_DIR/$BACKUP_NAME" --exclude="$BACKUP_DIR" --exclude="/home/$USER/.cache" --exclude="/home/$USER/.local/share/Trash" /home/$USER /etc',
    'find "$BACKUP_DIR" -name "backup_*.tar.gz" -mtime +30 -delete',
    'echo "Backup erstellt: $BACKUP_NAME" >> "$BACKUP_DIR/backup.log"',
    'EOF',
    'chmod +x ~/backup.sh',
    '',
    '# Cron-Job (taeglich um 2 Uhr)',
    'echo "0 2 * * * /home/$USER/backup.sh" | crontab -',
  ],
};

export const autostartScript: ScriptBlock = {
  id: "autostart",
  title: "Autostart Systemd-Dienste",
  description: "Ollama, Stable Diffusion, ComfyUI als Dienste",
  category: "Services",
  commands: [
    '# Ollama als Systemd-Dienst',
    'sudo tee /etc/systemd/system/ollama.service > /dev/null << \'EOF\'',
    '[Unit]',
    'Description=Ollama LLM Service',
    'After=network.target',
    '',
    '[Service]',
    'User=$USER',
    'ExecStart=/usr/bin/ollama serve',
    'Restart=always',
    'RestartSec=5',
    '',
    '[Install]',
    'WantedBy=multi-user.target',
    'EOF',
    'sudo systemctl enable ollama.service --now',
    '',
    '# Stable Diffusion WebUI als Systemd-Dienst',
    'sudo tee /etc/systemd/system/stable-diffusion.service > /dev/null << \'EOF\'',
    '[Unit]',
    'Description=Stable Diffusion WebUI',
    'After=network.target',
    '',
    '[Service]',
    'User=$USER',
    'WorkingDirectory=/home/$USER/stable-diffusion-webui',
    'ExecStart=/home/$USER/stable-diffusion-webui/webui.sh --xformers --medvram',
    'Restart=always',
    'RestartSec=5',
    '',
    '[Install]',
    'WantedBy=multi-user.target',
    'EOF',
    'sudo systemctl enable stable-diffusion.service --now',
  ],
};

export const allScriptBlocks: ScriptBlock[] = [
  nvidiaScript,
  waylandScript,
  zshAliasesScript,
  backupScript,
  autostartScript,
];

// ============ Ollama Models ============
export const ollamaModels = [
  { name: "llama3:8b", size: "4.7 GB", description: "Meta Llama 3 - Allgemein" },
  { name: "mistral:7b", size: "4.1 GB", description: "Mistral - Effizient & schnell" },
  { name: "phi3:3.8b", size: "2.3 GB", description: "Microsoft Phi-3 - Klein & maechtig" },
  { name: "codellama:7b", size: "3.8 GB", description: "Code Llama - Code-Generation" },
  { name: "gemma2:9b", size: "5.5 GB", description: "Google Gemma 2 - Neu & stark" },
  { name: "qwen2.5:7b", size: "4.4 GB", description: "Alibaba Qwen 2.5 - Multilingual" },
  { name: "deepseek-coder:6.7b", size: "3.8 GB", description: "DeepSeek Coder - Code-Spezialist" },
];
