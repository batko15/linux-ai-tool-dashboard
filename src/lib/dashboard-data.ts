// Complete Linux AI Tool Dashboard Data
// System: BigCommunity Manjaro Linux | RTX 4070 | i5-12400F | 32GB RAM

export interface Tool {
  name: string;
  description: string;
  installCmd: string;
  category: string;
  source: "pacman" | "yay" | "flatpak" | "git" | "pip" | "npm" | "cargo" | "custom";
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
  { id: "graphics", label: "Grafik & Design", icon: "ImageIcon" },
  { id: "media", label: "Audio & Video", icon: "Music" },
  { id: "network", label: "Netzwerk & VPN", icon: "Wifi" },
  { id: "security", label: "Sicherheit", icon: "Shield" },
  { id: "system", label: "System Tools", icon: "Wrench" },
  { id: "shortcuts", label: "Desktop Shortcuts", icon: "AppWindow" },
  { id: "antigravity", label: "Antigravity AI", icon: "Rocket" },
  { id: "repos", label: "GitHub Repos", icon: "GitBranch" },
  { id: "deepweb", label: "Deep Web & Stores", icon: "Globe" },
  { id: "integration", label: "System Integration", icon: "Package" },
  { id: "script", label: "Script Generator", icon: "ScrollText" },
  { id: "browsers", label: "Browser & Web", icon: "Globe" },
  { id: "wayland", label: "Wayland & WL Tools", icon: "Layers" },
  { id: "selfhosted", label: "Self-Hosted", icon: "Server" },
  { id: "devops", label: "DevOps & Infra", icon: "Container" },
  { id: "privacy", label: "Privacy & Anonym", icon: "EyeOff" },
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
  { name: "LocalAI", description: "OpenAI-API-kompatibler lokaler LLM-Server", installCmd: "git clone https://github.com/mudler/LocalAI ~/LocalAI && cd ~/LocalAI && docker compose up -d", category: "LLM Server", source: "git", github: "https://github.com/mudler/LocalAI" },
  { name: "vLLM", description: "High-Throughput LLM-Inference-Engine", installCmd: "pip install vllm", category: "LLM Engine", source: "pip", github: "https://github.com/vllm-project/vllm" },
  { name: "TabbyAPI", description: "Lightweight LLM-API-Server (ExLlamaV2)", installCmd: "git clone https://github.com/theroyallab/tabbyAPI ~/tabbyAPI && cd ~/tabbyAPI && pip install -r requirements.txt", category: "LLM Server", source: "git", github: "https://github.com/theroyallab/tabbyAPI" },
  { name: "text-generation-webui (oobabooga)", description: "Ultimate LLM-UI mit 100+ Extensions", installCmd: "git clone https://github.com/oobabooga/text-generation-webui ~/text-gen && cd ~/text-gen && bash start.sh", category: "LLM Frontend", source: "git", github: "https://github.com/oobabooga/text-generation-webui" },
  { name: "Llamafile", description: "Ein-Klick LLM-Ausfuehrung (Mojo/Rust)", installCmd: "yay -S llamafile", category: "LLM Engine", source: "yay", homepage: "https://llamafile.ai" },
  { name: "Hugging Face CLI", description: "Model-Management & Download", installCmd: "pip install huggingface-hub", category: "Model Hub", source: "pip", github: "https://github.com/huggingface/huggingface_hub" },
  { name: "Stable Diffusion WebUI Forge", description: "Optimierte SD-Forge mit better VRAM", installCmd: "git clone https://github.com/lllyasviel/stable-diffusion-webui-forge ~/sd-forge && cd ~/sd-forge && ./webui.sh", category: "Image Gen", source: "git", github: "https://github.com/lllyasviel/stable-diffusion-webui-forge" },
  { name: "Fooocus", description: "SD-XL mit Midjourney-Style Prompting", installCmd: "git clone https://github.com/lllyasviel/Fooocus ~/Fooocus && cd ~/Fooocus && pip install -r requirements.txt", category: "Image Gen", source: "git", github: "https://github.com/lllyasviel/Fooocus" },
  { name: "InvokeAI", description: "Professionelle Creative AI Suite", installCmd: "git clone https://github.com/invoke-ai/InvokeAI ~/InvokeAI && cd ~/InvokeAI && ./install.sh", category: "Image Gen", source: "git", github: "https://github.com/invoke-ai/InvokeAI" },
  { name: "Whisper.cpp", description: "Ultra-schnelle Speech-to-Text (C++/CUDA)", installCmd: "git clone https://github.com/ggerganov/whisper.cpp ~/whisper.cpp && cd ~/whisper.cpp && make && bash ./build/bin/main -m base -f audio.wav", category: "Speech", source: "git", github: "https://github.com/ggerganov/whisper.cpp" },
  { name: "Bark (Suno)", description: "Text-zu-Sprache (realistisch)", installCmd: "pip install git+https://github.com/suno-ai/bark.git", category: "TTS", source: "pip", github: "https://github.com/suno-ai/bark" },
  { name: "Piper TTS", description: "Lokale Neural TTS (schnell)", installCmd: "yay -S piper-tts-bin", category: "TTS", source: "yay", github: "https://github.com/rhasspy/piper" },
  { name: "Tortoise TTS", description: "Multi-Sprecher TTS (realistisch)", installCmd: "pip install tortoise-tts", category: "TTS", source: "pip", github: "https://github.com/neonbjb/tortoise-tts" },
  { name: "ChatRTX", description: "NVIDIA lokaler Chatbot (RAG)", installCmd: "yay -S chatrtx", category: "RAG", source: "yay", homepage: "https://developer.nvidia.com/chatrtx" },
  { name: "PrivateGPT", description: "100% private LLM mit RAG", installCmd: "pip install private-gpt", category: "RAG", source: "pip", github: "https://github.com/zylon-ai/private-gpt" },
  { name: "LlamaIndex", description: "LLM Data-Framework (RAG-Orchestrierung)", installCmd: "pip install llama-index", category: "RAG", source: "pip", github: "https://github.com/run-llama/llama_index" },
  { name: "LangChain", description: "LLM Application Framework", installCmd: "pip install langchain langchain-community", category: "Framework", source: "pip", github: "https://github.com/langchain-ai/langchain" },
  { name: "Axolotl", description: "LLM Fine-Tuning (LoRA/QLoRA)", installCmd: "pip install axolotl", category: "Fine-Tuning", source: "pip", github: "https://github.com/OpenAccess-AI-Collective/axolotl" },
  { name: "AutoGPT", description: "Autonomer KI-Agent", installCmd: "pip install autogpt", category: "Agent", source: "pip", github: "https://github.com/Significant-Gravitas/AutoGPT" },
  { name: "CrewAI", description: "Multi-Agent Framework", installCmd: "pip install crewai", category: "Agent", source: "pip", github: "https://github.com/crewAIInc/crewAI" },
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
  { name: "i3wm", description: "Klassischer Tiling Window Manager", installCmd: "sudo pacman -S i3-wm i3status i3lock dmenu", category: "Window Manager", source: "pacman" },
  { name: "Sway", description: "i3-kompatibel fuer Wayland", installCmd: "sudo pacman -S sway swaybg swaybar swaylock swayidle grim slurp waybar", category: "Window Manager", source: "pacman", github: "https://github.com/swaywm/sway" },
  { name: "bspwm", description: "Binary Space Partitioning WM", installCmd: "sudo pacman -S bspwm sxhkd polybar rofi", category: "Window Manager", source: "pacman" },
  { name: "COSMIC Desktop", description: "System76 Desktop (Rust-basiert)", installCmd: "yay -S cosmic-session cosmic-panel cosmic-files cosmic-term", category: "Desktop", source: "yay" },
  { name: "Budgie Desktop", description: "Elegant, leichtgewichtig", installCmd: "sudo pacman -S budgie-desktop budgie-desktop-applets", category: "Desktop", source: "pacman" },
  { name: "XFCE 4", description: "Leichtgewichtig & stabil", installCmd: "sudo pacman -S xfce4 xfce4-goodies xfce4-whiskermenu-plugin", category: "Desktop", source: "pacman" },
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
  { name: "Nordic KDE", description: "Nord-Polar Theme (dunkel, elegant)", installCmd: "yay -S nordic-kde-git", category: "Global Theme", source: "yay" },
  { name: "Dracula Theme", description: "Dracula GTK + KDE Theme", installCmd: "yay -S dracula-gtk-theme dracula-kde", category: "Global Theme", source: "yay" },
  { name: "Tela Icons", description: "Icon-Theme mit realistischen Farben", installCmd: "yay -S tela-icon-theme-bin", category: "Icons", source: "yay" },
  { name: "Adwaita Dark", description: "GNOME-Standard Dark Theme", installCmd: "sudo pacman -S adwaita-dark", category: "Global Theme", source: "pacman" },
  { name: "Graucho Icons", description: "Minimalistisches Icon-Set", installCmd: "yay -S graucho-icon-theme-git", category: "Icons", source: "yay" },
  { name: "BeautyLine Icons", description: "BeautyLine KDE/GTK Icons", installCmd: "yay -S beautyline-icon-theme-git", category: "Icons", source: "yay" },
  { name: "Colloid Theme", description: "Modernes GTK/KDE Theme", installCmd: "yay -S colloid-gtk-theme colloid-kde-theme-git", category: "Global Theme", source: "yay" },
  { name: "Layan Theme", description: "Modernes KDE Theme (Hell/Dunkel)", installCmd: "yay -S layan-kde-git", category: "Global Theme", source: "yay" },
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
  { name: "Cursor IDE", description: "AI-native Code Editor (VS Code Fork)", installCmd: "yay -S cursor-bin", category: "IDE", source: "yay", homepage: "https://cursor.sh" },
  { name: "Sublime Text 4", description: "Blitzschneller Text-Editor", installCmd: "yay -S sublime-text-4", category: "Editor", source: "yay" },
  { name: "Helix", description: "Post-modern Terminal-Editor (Rust)", installCmd: "sudo pacman -S helix", category: "Editor", source: "pacman", github: "https://github.com/helix-editor/helix" },
  { name: "Zed Editor", description: "Rust-basierter Editor (Sublime-Alternative)", installCmd: "yay -S zed-editor-bin", category: "Editor", source: "yay", homepage: "https://zed.dev" },
  { name: "GoLand", description: "JetBrains IDE fuer Go", installCmd: "yay -S goland", category: "IDE", source: "yay" },
  { name: "RustRover", description: "JetBrains IDE fuer Rust", installCmd: "yay -S rustrover", category: "IDE", source: "yay" },
  { name: "WebStorm", description: "JetBrains IDE fuer Web/JS/TS", installCmd: "yay -S webstorm", category: "IDE", source: "yay" },
  { name: "Insomnia", description: "API-Testing-Tool (Open Source)", installCmd: "yay -S insomnia", category: "API", source: "yay", github: "https://github.com/Kong/insomnia" },
  { name: "Hoppscotch", description: "Open Source API-Testing (Web)", installCmd: "yay -S hoppscotch-bin", category: "API", source: "yay", github: "https://github.com/hoppscotch/hoppscotch" },
  { name: "Ansible", description: "Infrastructure as Code (Automatisierung)", installCmd: "sudo pacman -S ansible", category: "Automation", source: "pacman" },
  { name: "Terraform", description: "Infrastructure as Code (Multi-Cloud)", installCmd: "yay -S terraform", category: "Infrastructure", source: "yay" },
  { name: "K9s", description: "Kubernetes Terminal UI Manager", installCmd: "yay -S k9s", category: "Kubernetes", source: "yay", github: "https://github.com/derailed/k9s" },
  { name: "Portainer", description: "Docker GUI Management (Web)", installCmd: "docker volume create portainer_data && docker run -d -p 8000:8000 -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest", category: "Containers", source: "custom", github: "https://github.com/portainer/portainer" },
  { name: "GitHub CLI", description: "GitHub im Terminal (gh)", installCmd: "sudo pacman -S github-cli", category: "Git", source: "pacman" },
  { name: "Meld", description: "Visueller Diff- und Merge-Tool", installCmd: "sudo pacman -S meld", category: "Diff", source: "pacman" },
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
  { name: "Starship Prompt", description: "Minimaler, cooler Shell-Prompt", installCmd: "sudo pacman -S starship && echo 'eval \"$(starship init zsh)\"' >> ~/.zshrc", category: "Shell Theme", source: "pacman", github: "https://github.com/starship/starship" },
  { name: "Zoxide", description: "Smarter cd (lernt von dir)", installCmd: "sudo pacman -S zoxide && echo 'eval \"$(zoxide init zsh)\"' >> ~/.zshrc", category: "CLI Tool", source: "pacman", github: "https://github.com/ajeetdsouza/zoxide" },
  { name: "Delta", description: "Modernes Git-Diff (Syntax-Highlighting)", installCmd: "sudo pacman -S git-delta && git config --global core.pager delta", category: "CLI Tool", source: "pacman", github: "https://github.com/dandavison/delta" },
  { name: "Ripgrep (rg)", description: "Ultra-schnelle Textsuche (grep-Alternative)", installCmd: "sudo pacman -S ripgrep", category: "CLI Tool", source: "pacman", github: "https://github.com/BurntSushi/ripgrep" },
  { name: "fd", description: "Modernes find (schneller, einfacher)", installCmd: "sudo pacman -S fd", category: "CLI Tool", source: "pacman", github: "https://github.com/sharkdp/fd" },
  { name: "Tealdeer", description: "Schnelle tldr-Pages (Community)", installCmd: "sudo pacman -S tealdeer && tealdeer --update", category: "CLI Tool", source: "pacman" },
  { name: "Hexyl", description: "Hex-Viewer im Terminal", installCmd: "sudo pacman -S hexyl", category: "CLI Tool", source: "pacman" },
  { name: "Bottom (btm)", description: "System-Monitor (htop-Alternative)", installCmd: "sudo pacman -S bottom", category: "Monitor", source: "pacman", github: "https://github.com/ClementTsang/bottom" },
  { name: "Zellij", description: "Modernes Terminal-Multiplexer (Rust)", installCmd: "sudo pacman -S zellij", category: "Multiplexer", source: "pacman", github: "https://github.com/zellij-org/zellij" },
  { name: "Atuin", description: "Shell-History Sync & Suche", installCmd: "sudo pacman -S atuin", category: "Shell Tool", source: "pacman", github: "https://github.com/atuinsh/atuin" },
  { name: "Fig (Amazon Q)", description: "Autocomplete im Terminal", installCmd: "yay -S amazon-q-cli-bin", category: "Shell Tool", source: "yay" },
  { name: "Glow", description: "Markdown-Viewer im Terminal", installCmd: "sudo pacman -S glow", category: "CLI Tool", source: "pacman", github: "https://github.com/charmbracelet/glow" },
  { name: "Yazi", description: "Blitzschneller Terminal-File-Manager (Rust)", installCmd: "yay -S yazi", category: "File Manager", source: "yay", github: "https://github.com/sxyazi/yazi" },
  { name: "Kalker", description: "Taschenrechner im Terminal", installCmd: "sudo pacman -S kalker", category: "CLI Tool", source: "pacman" },
  { name: "Dust", description: "Modernes du (Festplatten-Analyse)", installCmd: "sudo pacman -S dust", category: "CLI Tool", source: "pacman", github: "https://github.com/bootandy/dust" },
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
  { name: "GameMode + Feral", description: "System-Optimierung waehrend Gaming", installCmd: "yay -S gamemode lib32-gamemode && sudo systemctl enable gamemoded --now", category: "Gaming", source: "yay" },
  { name: "ananicy-cpp", description: "Auto CPU Governor (Community)", installCmd: "yay -S ananicy-cpp && sudo systemctl enable ananicy-cpp --now", category: "CPU", source: "yay", github: "https://github.com/pythops/ananicy-cpp" },
  { name: "irqbalance", description: "CPU-Interrupt-Balancing", installCmd: "sudo pacman -S irqbalance && sudo systemctl enable irqbalance --now", category: "CPU", source: "pacman" },
  { name: "iopc", description: "I/O Priority Controller", installCmd: "yay -S iopc", category: "I/O", source: "yay" },
  { name: "thermald", description: "CPU-Thermal Management", installCmd: "sudo pacman -S thermald && sudo systemctl enable thermald --now", category: "Thermal", source: "pacman" },
  { name: "Auto-CPU Freq", description: "Automatische CPU-Frequenz-Skalierung", installCmd: "yay -S auto-cpufreq", category: "CPU", source: "yay", github: "https://github.com/AdnanHodzic/auto-cpufreq" },
  { name: "Powersave/TuneD", description: "Profile-basierte System-Optimierung", installCmd: "sudo pacman -S tuned && sudo systemctl enable tuned --now", category: "Power", source: "pacman" },
  { name: "Stacer", description: "System-Optimizer GUI", installCmd: "yay -S stacer", category: "Optimizer", source: "yay" },
  { name: "Lact (AMD)", description: "AMD GPU Overclocking Tool", installCmd: "yay -S lact", category: "GPU", source: "yay" },
  { name: "Greenclip", description: "Clipboard-Manager (GPU-beschleunigt)", installCmd: "yay -S greenclip", category: "Utility", source: "yay" },
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
  { name: "Bottles", description: "Wine-Prefix-Manager (Easy Gaming)", installCmd: "flatpak install flathub com.usebottles.bottles", category: "Compatibility", source: "flatpak", homepage: "https://usebottles.com" },
  { name: "Prism Launcher", description: "Minecraft Launcher (Multi-Instanz)", installCmd: "sudo pacman -S prismlauncher", category: "Launcher", source: "pacman" },
  { name: "Rare", description: "Legendary GUI (Epic Games CLI)", installCmd: "yay -S rare", category: "Launcher", source: "yay" },
  { name: "Luxtorpeda", description: "Steam-Plugin fuer Game-Scripting", installCmd: "yay -S luxtorpeda", category: "Steam Plugin", source: "yay" },
  { name: "ProtonUp-Qt", description: "Proton-Version-Manager (GUI)", installCmd: "yay -S protonup-qt", category: "Compatibility", source: "yay", github: "https://github.com/DavidoTek/ProtonUp-Qt" },
  { name: "SteamTinkerLaunch", description: "Linux-Wrap fuer Steam-Spiele", installCmd: "yay -S steamtinkerlaunch", category: "Compatibility", source: "yay" },
  { name: "Lutris-Wine-GE", description: "Gaming-optimierte Wine-Version", installCmd: "yay -S lutris-wine-meta", category: "Compatibility", source: "yay" },
  { name: "OBS Studio + Plugins", description: "Streaming mit NVIDIA-Encoder", installCmd: "sudo pacman -S obs-studio obs-studio-plugin-obs-websocket wlrobs", category: "Recording", source: "pacman" },
  { name: "Discord", description: "Gaming-Voice-Chat", installCmd: "yay -S discord", category: "Chat", source: "yay" },
  { name: "Gamescope Sessions", description: "Valve Steam Deck Kompositor", installCmd: "yay -S gamescope-session-wayland gamescope-session-plus", category: "Performance", source: "yay" },
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
  { name: "Photoshop via Bottles", description: "Adobe Photoshop CC in Wine", installCmd: "flatpak install flathub com.usebottles.bottles && bottles import photoshop", category: "Photo Editing", source: "flatpak" },
  { name: "Nomacs", description: "Bildbetrachter (Qt, schnell)", installCmd: "sudo pacman -S nomacs", category: "Viewer", source: "pacman" },
  { name: "XnView MP", description: "Bild-Organizer & Viewer", installCmd: "yay -S xnviewmp", category: "Viewer", source: "yay" },
  { name: "Hugin", description: "Panorama-Stitching (FOSS)", installCmd: "sudo pacman -S hugin", category: "Panorama", source: "pacman" },
  { name: "Enblend", description: "Image Blending Tool", installCmd: "sudo pacman -S enblend-enfuse", category: "Panorama", source: "pacman" },
  { name: "FontForge", description: "Schriftart-Editor (FOSS)", installCmd: "sudo pacman -S fontforge", category: "Fonts", source: "pacman" },
  { name: "Pencil2D", description: "2D-Animation (traditionell)", installCmd: "sudo pacman -S pencil2d", category: "Animation", source: "pacman" },
  { name: "Synfig Studio", description: "2D-Animation (Vektor-basiert)", installCmd: "sudo pacman -S synfig-studio", category: "Animation", source: "pacman" },
  { name: "Natron", description: "Node-basierter Video-Compositor", installCmd: "yay -S natron", category: "Compositing", source: "yay" },
  { name: "digiKam", description: "Professionelle Foto-Verwaltung", installCmd: "sudo pacman -S digikam", category: "Photo Manager", source: "pacman" },
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
  { name: "OBS Studio", description: "Streaming & Recording (NVIDIA NVENC)", installCmd: "sudo pacman -S obs-studio", category: "Streaming", source: "pacman" },
  { name: "Audiotube", description: "YouTube Music Client (Qt)", installCmd: "yay -S audiotube", category: "Music Player", source: "yay" },
  { name: "Spotube", description: "Spotify Client ohne Premium", installCmd: "yay -S spotube", category: "Music Player", source: "yay", github: "https://github.com/KRTirtho/spotube" },
  { name: "Celluloid", description: "MPV-Frontend (GTK-basiert)", installCmd: "sudo pacman -S celluloid", category: "Video Player", source: "pacman" },
  { name: "Tenacity", description: "Audacity-Fork (offen)", installCmd: "yay -S tenacity", category: "Audio Editor", source: "yay" },
  { name: "MuseScore", description: "Notensatz-Software", installCmd: "sudo pacman -S musescore", category: "Music", source: "pacman" },
  { name: "Mixxx", description: "DJ-Software ( professionell)", installCmd: "sudo pacman -S mixxx", category: "DJ", source: "pacman" },
  { name: "Qsynth", description: "FluidSynth GUI (Soundfont-Player)", installCmd: "sudo pacman -S qsynth fluidsynth", category: "Audio Synth", source: "pacman" },
  { name: "Helvum", description: "Audio/PipeWire Patchbay", installCmd: "yay -S helvum", category: "Audio Routing", source: "yay" },
  { name: "EasyEffects", description: "PipeWire Audio-Effects (LADSPA/LV2)", installCmd: "sudo pacman -S easyeffects", category: "Audio FX", source: "pacman", github: "https://github.com/wwmm/easyeffects" },
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
  { name: "Tailscale", description: "Mesh VPN (Zero-Config WireGuard)", installCmd: "yay -S tailscale && sudo systemctl enable tailscaled --now", category: "VPN", source: "yay", homepage: "https://tailscale.com" },
  { name: "Pi-hole", description: "Netzwerk-weite Werbeblocker (Docker)", installCmd: "docker run -d --name pihole -e TZ=Europe/Berlin -p 80:80 -p 53:53 -p 53:53/udp pihole/pihole:latest", category: "DNS", source: "custom" },
  { name: "Cloudflare WARP", description: "1.1.1.1 VPN & DNS", installCmd: "yay -S cloudflare-warp-bin && warp-cli register && warp-cli connect", category: "VPN", source: "yay" },
  { name: "mtr", description: "Traceroute + Ping kombiniert", installCmd: "sudo pacman -S mtr", category: "Diagnostics", source: "pacman" },
  { name: "Speedtest CLI", description: "Internet-Geschwindigkeit testen", installCmd: "yay -S speedtest-cli", category: "Speed", source: "yay" },
  { name: "Transmission", description: "BitTorrent-Client (GUI + CLI)", installCmd: "sudo pacman -S transmission-gtk transmission-cli", category: "Torrent", source: "pacman" },
  { name: "qBittorrent", description: "BitTorrent-Client (Qt)", installCmd: "sudo pacman -S qbittorrent", category: "Torrent", source: "pacman" },
  { name: "Airgeddon", description: "WLAN-Audit-Tool", installCmd: "git clone https://github.com/v1s1t0r1sh3r3/airgeddon.git ~/airgeddon", category: "WiFi", source: "git", github: "https://github.com/v1s1t0r1sh3r3/airgeddon" },
  { name: "Ettercap", description: "Man-in-the-Middle Analyse", installCmd: "sudo pacman -S ettercap-graphical", category: "Analysis", source: "pacman" },
  { name: "Cloudflared", description: "Cloudflare Tunnel (Expose Local)", installCmd: "yay -S cloudflared", category: "Tunnel", source: "yay", homepage: "https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/" },
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
  { name: "Tails", description: "Amnesic Live System (USB)", installCmd: "yay -S tails", category: "Live OS", source: "yay", homepage: "https://tails.net" },
  { name: "Pass", description: "Password Manager (CLI, GPG)", installCmd: "sudo pacman -S pass", category: "Passwords", source: "pacman" },
  { name: "Nessus", description: "Vulnerability Scanner (Home)", installCmd: "yay -S nessus", category: "Scanner", source: "yay" },
  { name: "Tripwire", description: "File Integrity Monitor", installCmd: "sudo pacman -S tripwire", category: "FIM", source: "pacman" },
  { name: "Iptables-nft", description: "Firewall (nftables-basiert)", installCmd: "sudo pacman -S iptables-nft", category: "Firewall", source: "pacman" },
  { name: "UFW", description: "Uncomplicated Firewall", installCmd: "sudo pacman -S ufw && sudo ufw enable", category: "Firewall", source: "pacman" },
  { name: "CrowdSec", description: "Collaborative Intrusion Prevention", installCmd: "yay -S crowdsec", category: "IPS", source: "yay", github: "https://github.com/crowdsecurity/crowdsec" },
  { name: "Yubico Authenticator", description: "2FA mit YubiKey", installCmd: "yay -S yubioath-desktop", category: "2FA", source: "yay" },
  { name: "Keybase", description: "Verschluesselte Kommunikation", installCmd: "yay -S keybase-gui", category: "Encryption", source: "yay" },
  { name: "OnionShare", description: "Dateien anonym teilen (Tor)", installCmd: "yay -S onionshare", category: "Privacy", source: "yay", github: "https://github.com/onionshare/onionshare" },
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
  { name: "SpaceVim", description: "Vim Distribution (IDE-Like)", installCmd: "curl -sLf https://spacevim.org/install.sh | bash", category: "Editor", source: "custom" },
  { name: "Btop++", description: "Moderner System-Monitor (C++)", installCmd: "sudo pacman -S btop", category: "Monitor", source: "pacman", github: "https://github.com/aristocratos/btop" },
  { name: "KSystemLog", description: "KDE Log-Viewer", installCmd: "sudo pacman -S ksystemlog", category: "Logs", source: "pacman" },
  { name: "Back In Time", description: "Einfaches Backup (rsync + hardlinks)", installCmd: "sudo pacman -S backintime-qt", category: "Backup", source: "pacman" },
  { name: "Restic", description: "Sichere, effiziente Backups", installCmd: "sudo pacman -S restic", category: "Backup", source: "pacman" },
  { name: "KDiskMark", description: "SSD/HDD Benchmark (KDE)", installCmd: "sudo pacman -S kdiskmark", category: "Benchmark", source: "pacman" },
  { name: "Fio", description: "I/O Benchmark Tool (Terminal)", installCmd: "sudo pacman -S fio", category: "Benchmark", source: "pacman" },
  { name: "Stacer", description: "System-Optimizer & Cleaner", installCmd: "yay -S stacer", category: "Optimizer", source: "yay" },
  { name: "BleachBit", description: "System-Cleaner (CCleaner-Alternative)", installCmd: "sudo pacman -S bleachbit", category: "Cleaner", source: "pacman" },
  { name: "Geeqie", description: "Bildbetrachter & Organizer", installCmd: "sudo pacman -S geeqie", category: "Viewer", source: "pacman" },
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
  { name: "llama3.1:8b", size: "4.9 GB", description: "Meta Llama 3.1 - Latest" },
  { name: "mistral-nemo:12b", size: "7.2 GB", description: "Mistral Nemo - 128K Kontext" },
  { name: "qwen2.5-coder:7b", size: "4.4 GB", description: "Qwen Coder - Code-Spezialist" },
  { name: "llama3.3:70b-q4", size: "40 GB", description: "Llama 3.3 70B - Quantisiert" },
  { name: "phi4:14b", size: "8.8 GB", description: "Microsoft Phi-4 - Reasoning" },
  { name: "gemma2:27b-q4", size: "15.7 GB", description: "Google Gemma 2 27B - Stark" },
  { name: "deepseek-r1:14b-q4", size: "9.2 GB", description: "DeepSeek R1 - Reasoning" },
  { name: "mistral-small:24b", size: "14.5 GB", description: "Mistral Small - Effizient" },
  { name: "codestral:22b", size: "13.2 GB", description: "Mistral Codestral - Code" },
  { name: "starling-lm:7b-beta", size: "4.1 GB", description: "Starling - RLHF verfeinert" },
];

// ============ Anti-Gravity CLI Mega System-Optimizer v3.0 ============

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  installDir: string;
  category: string;
}

// ============ Antigravity AI CLI Tools ============
export const antigravityCliTools: Tool[] = [
  { name: "Gemini CLI", description: "Google KI, 1M+ Token Kontext", installCmd: "npm install -g @anthropic-ai/gemini-cli 2>/dev/null || pip install gemini-cli", category: "Google AI", source: "custom", homepage: "https://ai.google.dev" },
  { name: "Codex CLI", description: "OpenAI Codex, Rust-basiert", installCmd: "npm install -g @openai/codex", category: "OpenAI", source: "custom", homepage: "https://openai.com/codex" },
  { name: "Claude Code", description: "Anthropic Claude, tiefes Reasoning", installCmd: "npm install -g @anthropic-ai/claude-code", category: "Anthropic", source: "custom", homepage: "https://claude.ai" },
  { name: "Aider", description: "Lokale Modelle, Git-Integration", installCmd: "pip install aider-chat", category: "Multi-Model", source: "pip", github: "https://github.com/paul-gauthier/aider" },
  { name: "MCPBundles", description: "700+ Services fuer AI Agents", installCmd: "npm install -g mcpbundles", category: "MCP", source: "custom" },
  { name: "Valyu CLI", description: "SEC-Filings, FRED, PubMed Daten", installCmd: "pip install valyu-cli", category: "Data", source: "pip" },
  { name: "ElevenLabs CLI", description: "TTS, STT, Voice Cloning", installCmd: "pip install elevenlabs", category: "Voice", source: "pip", homepage: "https://elevenlabs.io" },
  { name: "Antigravity Code", description: "Multi-Provider Failover", installCmd: "git clone https://github.com/antigravity-research/antigravity-code ~/.local/share/antigravity-code && cd ~/.local/share/antigravity-code && npm install && npm run setup", category: "Multi-Provider", source: "git" },
  { name: "Gemini Antigravity", description: "Terminal AI Agent", installCmd: "git clone https://github.com/antigravity-research/gemini-antigravity-cli ~/.local/share/gemini-antigravity && cd ~/.local/share/gemini-antigravity && npm install && npm link", category: "Agent", source: "git" },
  { name: "Antigravity Harness", description: "Multi-Agent Team", installCmd: "git clone https://github.com/antigravity-research/antigravity-cli-harness ~/.local/share/antigravity-cli-harness && cd ~/.local/share/antigravity-cli-harness && npm install && npm link", category: "Multi-Agent", source: "git" },
  { name: "Oh-My-Antigravity (oma)", description: "Workflow Pack", installCmd: "git clone https://github.com/antigravity-research/oh-my-antigravity ~/.local/share/oh-my-antigravity && cd ~/.local/share/oh-my-antigravity && npm install && npm link", category: "Workflows", source: "git" },
  { name: "Ollama (lokale LLMs)", description: "Llama 3, Mistral, Phi-3 lokal", installCmd: "yay -S ollama && ollama pull llama3:8b", category: "LLM Engine", source: "yay", github: "https://github.com/ollama/ollama" },
  { name: "Continue.dev", description: "Open Source AI Coding Assistant (VS Code)", installCmd: "npm install -g @continue/cli", category: "IDE AI", source: "npm", github: "https://github.com/continuedev/continue" },
  { name: "Open Interpreter", description: "KI-Terminal-Agent (Code-Ausfuehrung)", installCmd: "pip install open-interpreter", category: "Agent", source: "pip", github: "https://github.com/OpenInterpreter/open-interpreter" },
  { name: "Phind Model", description: "Dev-spezifischer LLM Agent", installCmd: "npm install -g @phind/model", category: "Developer AI", source: "npm" },
  { name: "Tabby", description: "Self-hosted AI Coding Assistant", installCmd: "docker run -d -p 8080:8080 tabbyml/tabby", category: "IDE AI", source: "custom", github: "https://github.com/TabbyML/tabby" },
  { name: "Codeium", description: "AI Code Completion (Open Source)", installCmd: "yay -S codeium", category: "IDE AI", source: "yay" },
  { name: "Twinny", description: "VS Code AI Plugin (Ollama)", installCmd: "yay -S twinny", category: "IDE AI", source: "yay" },
  { name: "Devika", description: "Open Source Devin-Alternative", installCmd: "git clone https://github.com/stitionai/devika.git ~/devika && cd ~/devika && pip install -r requirements.txt", category: "Agent", source: "git", github: "https://github.com/stitionai/devika" },
  { name: "OpenDevin", description: "Autonomer Software-Entwickler", installCmd: "git clone https://github.com/opendevin/opendevin.git ~/opendevin && cd ~/opendevin && pip install -r requirements.txt", category: "Agent", source: "git", github: "https://github.com/opendevin/opendevin" },
  { name: "Cline (Claude Dev)", description: "Autonomous Coding Agent (VS Code)", installCmd: "npm install -g @cline/cline", category: "Agent", source: "npm" },
  { name: "PearAI", description: "AI-native Open Source IDE", installCmd: "yay -S pearai-bin", category: "IDE AI", source: "yay" },
];

// ============ GitHub Repositories ============
export const githubRepos: GitHubRepo[] = [
  { name: "antigravity-proxy-tools", description: "Multi-Account Proxy Manager", url: "https://github.com/antigravity-research/antigravity-proxy-tools", installDir: "~/Projects/antigravity-repos/antigravity-proxy-tools", category: "Proxy" },
  { name: "pipeline-relay", description: "Agent-Orchestrierung", url: "https://github.com/antigravity-research/pipeline-relay", installDir: "~/Projects/antigravity-repos/pipeline-relay", category: "Orchestration" },
  { name: "Agentic-SEO-Skill", description: "SEO-Analyse mit 16 Sub-Skills", url: "https://github.com/antigravity-research/Agentic-SEO-Skill", installDir: "~/Projects/antigravity-repos/Agentic-SEO-Skill", category: "SEO" },
  { name: "zero-limit", description: "Quota-Monitor", url: "https://github.com/antigravity-research/zero-limit", installDir: "~/Projects/antigravity-repos/zero-limit", category: "Monitoring" },
  { name: "antigravity-workflows", description: "Stack-agnostische Workflows", url: "https://github.com/antigravity-research/antigravity-workflows", installDir: "~/Projects/antigravity-repos/antigravity-workflows", category: "Workflows" },
  { name: "agentMemory", description: "Hybrid Memory System", url: "https://github.com/antigravity-research/agentMemory", installDir: "~/Projects/antigravity-repos/agentMemory", category: "Memory" },
  { name: "antigravity-link-extension", description: "Mobile VS Code Bridge", url: "https://github.com/antigravity-research/antigravity-link-extension", installDir: "~/Projects/antigravity-repos/antigravity-link-extension", category: "VS Code" },
  { name: "OmniCode", description: "169+ Provider IDE", url: "https://github.com/antigravity-research/OmniCode", installDir: "~/Projects/antigravity-repos/OmniCode", category: "IDE" },
  { name: "visual-diagramming-export", description: "Excalidraw/Markmap/PlantUML", url: "https://github.com/antigravity-research/visual-diagramming-export", installDir: "~/Projects/antigravity-repos/visual-diagramming-export", category: "Diagramming" },
  { name: "antigravity-evolve-concept", description: "Evolutionaere Algorithmen", url: "https://github.com/antigravity-research/antigravity-evolve-concept", installDir: "~/Projects/antigravity-repos/antigravity-evolve-concept", category: "Algorithms" },
  { name: "claude-seo-skills", description: "44 Claude SEO Commands", url: "https://github.com/antigravity-research/claude-seo-skills", installDir: "~/Projects/antigravity-repos/claude-seo-skills", category: "SEO" },
  { name: "antigravity-monitor", description: "Quota Dashboard", url: "https://github.com/antigravity-research/antigravity-monitor", installDir: "~/Projects/antigravity-repos/antigravity-monitor", category: "Monitoring" },
  { name: "Zenith-Extension", description: "Visuelle React-Entwicklung", url: "https://github.com/antigravity-research/Zenith-Extension", installDir: "~/Projects/antigravity-repos/Zenith-Extension", category: "React" },
  { name: "ai-code-interface.el", description: "Emacs AI Interface", url: "https://github.com/antigravity-research/ai-code-interface.el", installDir: "~/Projects/antigravity-repos/ai-code-interface.el", category: "Emacs" },
  { name: "lanes-sh/app", description: "Mission Control fuer Agents", url: "https://github.com/lanes-sh/app", installDir: "~/Projects/antigravity-repos/lanes-app", category: "Management" },
  { name: "oh-my-antigravity", description: "Multi-Agent Workflow Pack", url: "https://github.com/antigravity-research/oh-my-antigravity", installDir: "~/Projects/antigravity-repos/oh-my-antigravity", category: "Workflows" },
  { name: "gemini-antigravity-cli", description: "Terminal AI Agent", url: "https://github.com/antigravity-research/gemini-antigravity-cli", installDir: "~/Projects/antigravity-repos/gemini-antigravity-cli", category: "Agent" },
  { name: "antigravity-cli-termux", description: "Android/Termux Setup", url: "https://github.com/antigravity-research/antigravity-cli-termux", installDir: "~/Projects/antigravity-repos/antigravity-cli-termux", category: "Mobile" },
  { name: "antigravity-cli-harness", description: "Multi-Agent Team Scaffold", url: "https://github.com/antigravity-research/antigravity-cli-harness", installDir: "~/Projects/antigravity-repos/antigravity-cli-harness", category: "Multi-Agent" },
  { name: "antigravity-code", description: "Multi-Provider Code CLI", url: "https://github.com/antigravity-research/antigravity-code", installDir: "~/Projects/antigravity-repos/antigravity-code", category: "Multi-Provider" },
  { name: "vibe-coding-config", description: "Vibe Coding Konfiguration", url: "https://github.com/antigravity-research/vibe-coding-config", installDir: "~/Projects/antigravity-repos/vibe-coding-config", category: "Config" },
  { name: "antigravity-setup-scripts", description: "Automatische Setup-Skripte", url: "https://github.com/antigravity-research/antigravity-setup-scripts", installDir: "~/Projects/antigravity-repos/antigravity-setup-scripts", category: "Setup" },
  { name: "awesome-linux-software", description: "Curated Linux Software List", url: "https://github.com/luong-komorebi/Awesome-Linux-Software", installDir: "~/Projects/awesome/linux-software", category: "Awesome List" },
  { name: "awesome-selfhosted", description: "Self-Hosted Software Directory", url: "https://github.com/awesome-selfhosted/awesome-selfhosted", installDir: "~/Projects/awesome/selfhosted", category: "Awesome List" },
  { name: "awesome-cli-apps", description: "CLI Apps Collection", url: "https://github.com/agarrharr/awesome-cli-apps", installDir: "~/Projects/awesome/cli-apps", category: "Awesome List" },
  { name: "awesome-wayland", description: "Wayland Resources List", url: "https://github.com/rcalixte/awesome-wayland", installDir: "~/Projects/awesome/wayland", category: "Awesome List" },
  { name: "awesome-kde", description: "KDE Apps & Extensions", url: "https://github.com/francoism90/awesome-kde", installDir: "~/Projects/awesome/kde", category: "Awesome List" },
  { name: "awesome-llm", description: "Large Language Model Resources", url: "https://github.com/hannibal046/Awesome-LLM", installDir: "~/Projects/awesome/llm", category: "Awesome List" },
  { name: "awesome-local-ai", description: "Local AI Tools Collection", url: "https://github.com/janhq/awesome-local-ai", installDir: "~/Projects/awesome/local-ai", category: "Awesome List" },
  { name: "neovim-ai-plugins", description: "Neovim AI Plugin Directory", url: "https://github.com/ColinKennedy/neovim-ai-plugins", installDir: "~/Projects/awesome/nvim-ai", category: "Neovim" },
  { name: "hyprland-wiki", description: "Hyprland Official Wiki", url: "https://github.com/hyprwm/hyprland-wiki", installDir: "~/Projects/wiki/hyprland", category: "Wiki" },
  { name: "archlinux-awesome", description: "Arch Linux Awesome Configs", url: "https://github.com/awesome-streamers/awesome-streamerrc", installDir: "~/Projects/awesome/awesomewm", category: "Window Manager" },
];

// ============ Deep Web & Search Tools ============
export const deepWebTools: Tool[] = [
  { name: "Googler", description: "Google Suche im Terminal", installCmd: "yay -S googler", category: "Search", source: "yay" },
  { name: "DDGR (DuckDuckGo)", description: "DuckDuckGo CLI Suche", installCmd: "yay -S ddgr", category: "Search", source: "yay" },
  { name: "Scrapy", description: "Python Web-Scraper", installCmd: "pip install scrapy", category: "Scraper", source: "pip", github: "https://github.com/scrapy/scrapy" },
  { name: "BeautifulSoup4", description: "HTML/XML Parser", installCmd: "pip install beautifulsoup4 lxml", category: "Parser", source: "pip" },
  { name: "Playwright", description: "Browser-Automation (Python)", installCmd: "pip install playwright && playwright install chromium", category: "Automation", source: "pip", homepage: "https://playwright.dev" },
  { name: "WaybackPy", description: "Wayback Machine CLI", installCmd: "pip install waybackpy", category: "Archive", source: "pip" },
  { name: "gh (GitHub CLI)", description: "GitHub CLI + Extensions", installCmd: "sudo pacman -S github-cli && gh extension install github/gh-copilot", category: "GitHub", source: "pacman" },
  { name: "ripgrep (rg)", description: "Ultra-schnell Datei-Suche (Rust)", installCmd: "sudo pacman -S ripgrep", category: "Search", source: "pacman" },
  { name: "fd (find)", description: "Modernes find-Alternative (Rust)", installCmd: "sudo pacman -S fd", category: "Search", source: "pacman" },
  { name: "HTTPie", description: "Modernes curl (HTTP Client)", installCmd: "sudo pacman -S httpie", category: "HTTP", source: "pacman" },
];

// ============ Program Stores / Package Managers ============
export const programStores: Tool[] = [
  { name: "Flatpak", description: "Universal Linux-Pakete", installCmd: "sudo pacman -S flatpak && flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo", category: "Runtime", source: "pacman" },
  { name: "Snap", description: "Canonicals Paket-Manager", installCmd: "sudo pacman -S snapd && sudo systemctl enable --now snapd.socket", category: "Runtime", source: "pacman" },
  { name: "AppImage", description: "Portable Linux-Apps", installCmd: "yay -S appimagelauncher", category: "Runtime", source: "yay" },
  { name: "Homebrew (Linuxbrew)", description: "macOS-Paketmanager fuer Linux", installCmd: "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"", category: "Runtime", source: "custom" },
  { name: "Nix", description: "Funktionale Paketverwaltung", installCmd: "sh <(curl -L https://nixos.org/nix/install) --daemon", category: "Runtime", source: "custom" },
  { name: "asdf", description: "Multi-Runtime Version Manager", installCmd: "git clone https://github.com/asdf-vm/asdf.git ~/.asdf --depth 1", category: "Version Manager", source: "git" },
];

// ============ Duplicate Cleaner Tools ============
export const duplicateTools: Tool[] = [
  { name: "jdupes", description: "Extrem schneller Duplikat-Finder (C)", installCmd: "yay -S jdupes", category: "Scanner", source: "yay" },
  { name: "rdfind", description: "Redundant Data Finder", installCmd: "sudo pacman -S rdfind", category: "Scanner", source: "pacman" },
  { name: "czkawka", description: "GUI + CLI Duplikat-Tool (Rust)", installCmd: "yay -S czkawka", category: "Scanner", source: "yay" },
  { name: "fdupes", description: "Klassischer Duplikat-Finder", installCmd: "sudo pacman -S fdupes", category: "Scanner", source: "pacman" },
  { name: "rmlint", description: "Umfassender System-Cleaner", installCmd: "yay -S rmlint", category: "Cleaner", source: "yay" },
];

// ============ Essential CLI Tools ============
export const essentialCliTools: Tool[] = [
  { name: "htop", description: "Interaktiver Prozess-Viewer", installCmd: "sudo pacman -S htop", category: "System", source: "pacman" },
  { name: "btop", description: "Moderne System-Monitoring", installCmd: "yay -S btop", category: "System", source: "yay" },
  { name: "fzf", description: "Fuzzy Finder", installCmd: "sudo pacman -S fzf", category: "Search", source: "pacman" },
  { name: "fd", description: "Schnelle find-Alternative (Rust)", installCmd: "sudo pacman -S fd", category: "Search", source: "pacman" },
  { name: "ripgrep", description: "Ultra-schnell grep (Rust)", installCmd: "sudo pacman -S ripgrep", category: "Search", source: "pacman" },
  { name: "bat", description: "cat mit Syntax-Highlighting", installCmd: "sudo pacman -S bat", category: "File View", source: "pacman" },
  { name: "eza", description: "Modernes ls (exa-Fork)", installCmd: "sudo pacman -S eza", category: "File View", source: "pacman" },
  { name: "zoxide", description: "Intelligenter cd (Rust)", installCmd: "sudo pacman -S zoxide", category: "Navigation", source: "pacman" },
  { name: "starship", description: "Cross-Shell Prompt", installCmd: "sudo pacman -S starship", category: "Prompt", source: "pacman" },
  { name: "hyperfine", description: "Benchmark-Tool (Rust)", installCmd: "sudo pacman -S hyperfine", category: "Benchmark", source: "pacman" },
  { name: "bandwhich", description: "Netzwerk-Bandbreite Monitor (Rust)", installCmd: "yay -S bandwhich", category: "Network", source: "yay" },
  { name: "procs", description: "Modernes ps-Alternative (Rust)", installCmd: "yay -S procs", category: "System", source: "yay" },
  { name: "dust", description: "Modernes du-Alternative (Rust)", installCmd: "yay -S du-dust", category: "Disk", source: "yay" },
  { name: "tldr", description: "Vereinfachte Man-Pages", installCmd: "yay -S tealdeer", category: "Docs", source: "yay" },
  { name: "theFuck", description: "Command-Korrektur (thefuck)", installCmd: "pip install thefuck", category: "Shell", source: "pip" },
  { name: "direnv", description: "Umgebungs-Manager", installCmd: "sudo pacman -S direnv", category: "Environment", source: "pacman" },
  { name: "jq", description: "JSON Processor (CLI)", installCmd: "sudo pacman -S jq", category: "Data", source: "pacman" },
  { name: "micro", description: "Terminal-Texteditor (Go)", installCmd: "yay -S micro", category: "Editor", source: "yay" },
  { name: "glow", description: "Markdown Renderer (CLI)", installCmd: "yay -S glow", category: "Markdown", source: "yay" },
  { name: "ncdu", description: "Disk-Usage Analyzer (NCurses)", installCmd: "sudo pacman -S ncdu", category: "Disk", source: "pacman" },
];

// ============ Browser & Web ============
export const browserTools: Tool[] = [
  { name: "Brave Browser", description: "Privacy-First Browser (Chromium-basiert)", installCmd: "yay -S brave-bin", category: "Browser", source: "yay", homepage: "https://brave.com" },
  { name: "Firefox", description: "Open Source Browser (Privacy-fokussiert)", installCmd: "sudo pacman -S firefox", category: "Browser", source: "pacman" },
  { name: "Vivaldi", description: "Power-User Browser (Chromium)", installCmd: "yay -S vivaldi", category: "Browser", source: "yay", homepage: "https://vivaldi.com" },
  { name: "Thorium Browser", description: "Schnellster Chromium-Fork", installCmd: "yay -S thorium-browser-bin", category: "Browser", source: "yay", github: "https://github.com/Alex313031/thorium" },
  { name: "LibreWolf", description: "Firefox Fork (Privacy-maximal)", installCmd: "yay -S librewolf-bin", category: "Browser", source: "yay", github: "https://github.com/librewolf-community/librewolf" },
  { name: "Waterfox", description: "Firefox Fork (Flexibilitaet)", installCmd: "yay -S waterfox-bin", category: "Browser", source: "yay", homepage: "https://waterfox.net" },
  { name: "Mullvad Browser", description: "Tor ohne Tor-Netzwerk", installCmd: "yay -S mullvad-browser-bin", category: "Browser", source: "yay" },
  { name: "Floorp Browser", description: "Firefox Fork (Japan, viele Features)", installCmd: "yay -S floorp-bin", category: "Browser", source: "yay" },
  { name: "uBlock Origin", description: "Werbeblocker (Firefox/Chrome)", installCmd: "sudo pacman -S ublock-origin", category: "Extension", source: "pacman" },
  { name: "Dark Reader", description: "Dark Mode fuer alle Websites", installCmd: "yay -S firefox-dark-reader", category: "Extension", source: "yay" },
  { name: "Bitwarden Browser", description: "Passwort-Manager Browser-Extension", installCmd: "yay -S bitwarden", category: "Extension", source: "yay" },
  { name: "Privacy Badger", description: "Tracker-Blocker (EFF)", installCmd: "yay -S privacy-badger", category: "Extension", source: "yay" },
];

// ============ Wayland & WL Tools ============
export const waylandTools: Tool[] = [
  { name: "Waybar", description: "Highly Customizable Wayland Bar", installCmd: "sudo pacman -S waybar", category: "Bar", source: "pacman", github: "https://github.com/Alexays/Waybar" },
  { name: "Rofi-Wayland", description: "Application Launcher (Wayland)", installCmd: "yay -S rofi-wayland", category: "Launcher", source: "yay" },
  { name: "Fuzzel", description: "Application Launcher (Wayland-native)", installCmd: "sudo pacman -S fuzzel", category: "Launcher", source: "pacman", github: "https://codeberg.org/dnkl/fuzzel" },
  { name: "Wofi", description: "GTK Application Launcher (Wayland)", installCmd: "sudo pacman -S wofi", category: "Launcher", source: "pacman" },
  { name: "Mako", description: "Notification Daemon (Wayland)", installCmd: "sudo pacman -S mako", category: "Notifications", source: "pacman", github: "https://github.com/emersion/mako" },
  { name: "SwayNC", description: "Notification Center (Wayland)", installCmd: "sudo pacman -S sway-notification-center", category: "Notifications", source: "pacman" },
  { name: "Grim + Slurp", description: "Screenshot Tools (Wayland)", installCmd: "sudo pacman -S grim slurp", category: "Screenshot", source: "pacman" },
  { name: "swaylock-effects", description: "Lockscreen mit Effekten (Wayland)", installCmd: "yay -S swaylock-effects", category: "Lockscreen", source: "yay" },
  { name: "wf-recorder", description: "Screen Recording (Wayland)", installCmd: "sudo pacman -S wf-recorder", category: "Recording", source: "pacman" },
  { name: "wl-clipboard", description: "Clipboard-Manager (Wayland)", installCmd: "sudo pacman -S wl-clipboard", category: "Clipboard", source: "pacman" },
  { name: "yambar", description: "Modular Status Bar (C)", installCmd: "yay -S yambar", category: "Bar", source: "yay", github: "https://codeberg.org/dnkl/yambar" },
  { name: "eww", description: "ElKowars wacky widgets (GTK)", installCmd: "yay -S eww-wayland", category: "Widgets", source: "yay", github: "https://github.com/elkowar/eww" },
  { name: "hyprpicker", description: "Color Picker (Hyprland)", installCmd: "yay -S hyprpicker", category: "Utility", source: "yay" },
  { name: "waypaper", description: "Wallpaper-Manager (Wayland)", installCmd: "yay -S waypaper", category: "Utility", source: "yay" },
  { name: "nwg-look", description: "GTK Theme Switcher (Wayland)", installCmd: "yay -S nwg-look", category: "Theme", source: "yay" },
  { name: "swaybg", description: "Wallpaper Setter (Sway/Wayland)", installCmd: "sudo pacman -S swaybg", category: "Wallpaper", source: "pacman" },
  { name: "foot", description: "Leichtgewichtiger Terminal (Wayland)", installCmd: "sudo pacman -S foot", category: "Terminal", source: "pacman" },
  { name: "Satty", description: "Screenshot-Annotator (Wayland)", installCmd: "yay -S satty", category: "Screenshot", source: "yay" },
];

// ============ Self-Hosted ============
export const selfhostedTools: Tool[] = [
  { name: "Nextcloud", description: "Private Cloud (Dropbox-Alternative)", installCmd: "docker run -d -p 8080:80 nextcloud", category: "Cloud", source: "custom", homepage: "https://nextcloud.com" },
  { name: "Immich", description: "Google Photos-Alternative (Self-Hosted)", installCmd: "docker compose -f https://raw.githubusercontent.com/immich-app/immich/main/docker-compose.yml up -d", category: "Photos", source: "custom", github: "https://github.com/immich-app/immich" },
  { name: "Vaultwarden", description: "Lightweight Bitwarden Server", installCmd: "docker run -d --name vaultwarden -v /vw-data/:/data/ -p 8081:80 vaultwarden/server:latest", category: "Passwords", source: "custom", github: "https://github.com/dani-garcia/vaultwarden" },
  { name: "Jellyfin", description: "Media Server (Plex-Alternative)", installCmd: "docker run -d -p 8096:8096 -v /config:/config -v /media:/media jellyfin/jellyfin", category: "Media", source: "custom", homepage: "https://jellyfin.org" },
  { name: "Plex", description: "Media Server (Premium)", installCmd: "docker run -d -p 32400:32400 -p 1900:1900/udp -p 5353:5353/udp plexinc/pms-docker:latest", category: "Media", source: "custom" },
  { name: "Home Assistant", description: "Smart Home Automation", installCmd: "docker run -d --name homeassistant -p 8123:8123 homeassistant/home-assistant:stable", category: "Smart Home", source: "custom", homepage: "https://home-assistant.io" },
  { name: "Grafana", description: "Monitoring Dashboard", installCmd: "docker run -d -p 3000:3000 grafana/grafana", category: "Monitoring", source: "custom", homepage: "https://grafana.com" },
  { name: "Uptime Kuma", description: "Uptime Monitor (Beautiful UI)", installCmd: "docker run -d -p 3001:3001 louislam/uptime-kuma:1", category: "Monitoring", source: "custom", github: "https://github.com/louislam/uptime-kuma" },
  { name: "Stirling PDF", description: "PDF-Tools (Self-Hosted)", installCmd: "docker run -d -p 8082:8080 frooodle/s-pdf:latest", category: "PDF", source: "custom", github: "https://github.com/Stirling-Tools/Stirling-PDF" },
  { name: "Alist", description: "Multi-Cloud File Manager", installCmd: "docker run -d -p 5244:5244 xhofe/alist:latest", category: "Files", source: "custom", github: "https://github.com/alist-org/alist" },
  { name: "Memos", description: "Self-hosted Memo-App", installCmd: "docker run -d -p 5230:5230 neosmemo/memos:latest", category: "Notes", source: "custom", github: "https://github.com/usememos/memos" },
  { name: "Hoarder", description: "AI Bookmark-Manager", installCmd: "docker run -d -p 3000:3000 ghcr.io/hoarder-app/hoarder:latest", category: "Bookmarks", source: "custom" },
  { name: "Paperless-ngx", description: "Dokumenten-Management", installCmd: "docker compose -f https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/main/docker-compose.yml up -d", category: "Documents", source: "custom", homepage: "https://paperless-ngx.com" },
  { name: "Tandoor Recipes", description: "Rezept-Verwaltung", installCmd: "docker run -d -p 8085:80 vabene1111/recipes", category: "Recipes", source: "custom", github: "https://github.com/vabene1111/recipes" },
  { name: "Changedetection.io", description: "Website-Aenderungen ueberwachen", installCmd: "docker run -d -p 5000:5000 dgtlmoon/changedetection.io", category: "Monitoring", source: "custom" },
];

// ============ DevOps & Infra ============
export const devopsTools: Tool[] = [
  { name: "Docker Compose", description: "Multi-Container Orchestration", installCmd: "sudo pacman -S docker-compose", category: "Containers", source: "pacman" },
  { name: "K3s", description: "Lightweight Kubernetes", installCmd: "curl -sfL https://get.k3s.io | sh -", category: "Kubernetes", source: "custom", homepage: "https://k3s.io" },
  { name: "Podman Desktop", description: "Podman GUI (Docker-Alternative)", installCmd: "yay -S podman-desktop", category: "Containers", source: "yay" },
  { name: "Skopeo", description: "Container Image Management", installCmd: "sudo pacman -S skopeo", category: "Containers", source: "pacman" },
  { name: "Buildah", description: "OCI Container Builder", installCmd: "sudo pacman -S buildah", category: "Containers", source: "pacman" },
  { name: "Vagrant", description: "Dev-Umgebungen (Virtualbox/libvirt)", installCmd: "sudo pacman -S vagrant", category: "VM", source: "pacman" },
  { name: "Pulumi", description: "Infrastructure as Code (Multi-Lang)", installCmd: "yay -S pulumi-bin", category: "Infrastructure", source: "yay", homepage: "https://pulumi.com" },
  { name: "Helm", description: "Kubernetes Package Manager", installCmd: "yay -S helm", category: "Kubernetes", source: "yay" },
  { name: "ArgoCD", description: "GitOps CD for Kubernetes", installCmd: "yay -S argocd", category: "GitOps", source: "yay" },
  { name: "Flux", description: "GitOps Tool for Kubernetes", installCmd: "yay -S flux-bin", category: "GitOps", source: "yay" },
  { name: "Jaeger", description: "Distributed Tracing", installCmd: "docker run -d -p 16686:16686 jaegertracing/all-in-one:latest", category: "Monitoring", source: "custom" },
  { name: "Prometheus", description: "Monitoring & Alerting", installCmd: "docker run -d -p 9090:9090 prom/prometheus", category: "Monitoring", source: "custom", homepage: "https://prometheus.io" },
  { name: "cAdvisor", description: "Container Monitoring", installCmd: "docker run -d -p 8080:8080 google/cadvisor:latest", category: "Monitoring", source: "custom" },
  { name: "Traefik", description: "Cloud-Native Edge Router / Reverse Proxy", installCmd: "docker run -d -p 80:80 -p 8080:8080 traefik:v3.0", category: "Reverse Proxy", source: "custom", homepage: "https://traefik.io" },
  { name: "Caddy", description: "HTTP/2 Web Server (Auto-HTTPS)", installCmd: "yay -S caddy", category: "Web Server", source: "yay", homepage: "https://caddyserver.com" },
];

// ============ Privacy & Anonym ============
export const privacyTools: Tool[] = [
  { name: "Tor Browser Bundle", description: "Anonymer Browser (Onion-Routing)", installCmd: "yay -S tor-browser", category: "Browser", source: "yay" },
  { name: "I2P", description: "Anonymous Overlay Network", installCmd: "sudo pacman -S i2pd", category: "Network", source: "pacman" },
  { name: "Tailscale", description: "Zero-Config Mesh VPN (WireGuard)", installCmd: "yay -S tailscale && sudo systemctl enable tailscaled --now", category: "VPN", source: "yay" },
  { name: "Pi-hole", description: "Netzwerk-Werbeblocker (DNS)", installCmd: "docker run -d --name pihole -e TZ=Europe/Berlin -p 80:80 -p 53:53 -p 53:53/udp pihole/pihole:latest", category: "DNS", source: "custom" },
  { name: "AdGuard Home", description: "DNS-Sinkhole & Werbeblocker", installCmd: "docker run -d --name adguard -p 3000:3000 adguard/adguardhome:latest", category: "DNS", source: "custom", homepage: "https://adguard.com" },
  { name: "NextDNS", description: "Cloud-DNS (Privacy + Parental)", installCmd: "yay -S nextdns", category: "DNS", source: "yay" },
  { name: "Encrypted DNS (DoH)", description: "DNS-over-HTTPS (systemd-resolved)", installCmd: "sudo pacman -S systemd-resolved && sudo systemctl enable systemd-resolved", category: "DNS", source: "pacman" },
  { name: "MAC Changer", description: "MAC-Adresse aendern", installCmd: "sudo pacman -S macchanger", category: "Identity", source: "pacman" },
  { name: "Proxychains-ng", description: "Proxy-Fuercing fuer Apps", installCmd: "sudo pacman -S proxychains-ng", category: "Proxy", source: "pacman" },
  { name: "Whonix Gateway", description: "Isolierte Tor-VM", installCmd: "yay -S whonix-gateway", category: "Isolation", source: "yay" },
  { name: "FileVault (LUKS)", description: "Full-Disk-Verschluesselung", installCmd: "sudo pacman -S cryptsetup && sudo cryptsetup luksFormat /dev/nvme0n1", category: "Encryption", source: "pacman" },
  { name: "Obfs4Proxy", description: "Tor Bridge (Zensur-Umgehung)", installCmd: "yay -S obfs4proxy", category: "Tor", source: "yay" },
];
