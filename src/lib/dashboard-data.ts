// ============================================================
// ULTIMATE Linux AI Tool Dashboard Data - MASSIVE EXPANSION
// System: BigCommunity Manjaro Linux | RTX 4070 | i5-12400F | 32GB RAM
// 600+ Tools | 28 Sections | GitHub-Verified
// ============================================================

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

export interface ScriptBlock {
  id: string;
  title: string;
  description: string;
  commands: string[];
  category: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  installDir: string;
  category: string;
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
  { id: "data", label: "Data & Science", icon: "Database" },
  { id: "homelab", label: "Homelab & IoT", icon: "Router" },
];

// ============ AI / KI Tools (40+ Tools) ============
export const aiTools: Tool[] = [
  // --- LLM Engines ---
  { name: "Ollama", description: "Lokale LLM-Ausfuehrung (Llama 3, Mistral, Phi-3)", installCmd: "yay -S ollama && ollama pull llama3:8b", category: "LLM Engine", source: "yay", github: "https://github.com/ollama/ollama", homepage: "https://ollama.com" },
  { name: "LM Studio", description: "GUI fuer lokale LLMs (Ollama-kompatibel)", installCmd: "yay -S lm-studio-bin", category: "LLM GUI", source: "yay", homepage: "https://lmstudio.ai" },
  { name: "LocalAI", description: "OpenAI-API-kompatibler lokaler LLM-Server", installCmd: "docker run -d -p 8080:8080 localai/localai:latest", category: "LLM Server", source: "custom", github: "https://github.com/mudler/LocalAI" },
  { name: "vLLM", description: "High-Throughput LLM-Inference (SOTA)", installCmd: "pip install vllm", category: "LLM Engine", source: "pip", github: "https://github.com/vllm-project/vllm" },
  { name: "TabbyAPI", description: "Lightweight LLM-API-Server (ExLlamaV2)", installCmd: "git clone https://github.com/theroyallab/tabbyAPI ~/tabbyAPI && cd ~/tabbyAPI && pip install -r requirements.txt", category: "LLM Server", source: "git", github: "https://github.com/theroyallab/tabbyAPI" },
  { name: "KoboldCPP", description: "Maechtiger LLM-Backend (CUDA-Beschleunigung)", installCmd: "git clone https://github.com/LostRuins/koboldcpp.git ~/koboldcpp && cd ~/koboldcpp && mkdir build && cd build && cmake .. -DKOBOLDCPY_CUDA=ON && make -j$(nproc)", category: "LLM Engine", source: "git", github: "https://github.com/LostRuins/koboldcpp" },
  { name: "Llamafile", description: "Ein-Klick LLM-Ausfuehrung (Mojo/Rust)", installCmd: "yay -S llamafile", category: "LLM Engine", source: "yay", homepage: "https://llamafile.ai" },
  { name: "llama.cpp", description: "LLM Inference in C/C++ (CUDA/Metal)", installCmd: "git clone https://github.com/ggerganov/llama.cpp && cd llama.cpp && make LLAMA_CUDA=1", category: "LLM Engine", source: "git", github: "https://github.com/ggerganov/llama.cpp" },
  { name: "Ollama WebUI", description: "ChatGPT-Interface fuer lokale Ollama-Modelle", installCmd: "git clone https://github.com/open-webui/open-webui.git ~/open-webui && cd ~/open-webui && docker compose up -d", category: "LLM Frontend", source: "git", github: "https://github.com/open-webui/open-webui" },
  { name: "Text Gen WebUI", description: "Ultimate LLM-UI mit 100+ Extensions", installCmd: "git clone https://github.com/oobabooga/text-generation-webui ~/text-gen && cd ~/text-gen && bash start.sh", category: "LLM Frontend", source: "git", github: "https://github.com/oobabooga/text-generation-webui" },
  { name: "AnythingLLM", description: "Lokale LLM-Chat-UI mit RAG", installCmd: "yay -S anything-llm", category: "LLM Frontend", source: "yay", github: "https://github.com/Mintplex-Labs/anything-llm" },
  { name: "Jan", description: "Open Source ChatGPT-Alternative (Offline)", installCmd: "yay -S jan-bin", category: "LLM Frontend", source: "yay", github: "https://github.com/janhq/jan" },
  { name: "LibreChat", description: "ChatGPT-Clone mit Multi-Provider", installCmd: "docker compose -f https://raw.githubusercontent.com/danny-avila/LibreChat/main/docker-compose.yml up -d", category: "LLM Frontend", source: "custom", github: "https://github.com/danny-avila/LibreChat" },
  // --- Image Generation ---
  { name: "Stable Diffusion A1111", description: "Custom AI Bildgenerierung mit Extensions", installCmd: "git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git ~/sd-webui && cd ~/sd-webui && ./webui.sh --xformers --medvram", category: "Image Gen", source: "git", github: "https://github.com/AUTOMATIC1111/stable-diffusion-webui" },
  { name: "ComfyUI", description: "Modulares SD Frontend (Node-basiert)", installCmd: "git clone https://github.com/comfyanonymous/ComfyUI.git ~/ComfyUI && cd ~/ComfyUI && pip install -r requirements.txt", category: "Image Gen", source: "git", github: "https://github.com/comfyanonymous/ComfyUI" },
  { name: "SD WebUI Forge", description: "Optimierte SD-Forge (Better VRAM)", installCmd: "git clone https://github.com/lllyasviel/stable-diffusion-webui-forge ~/sd-forge && cd ~/sd-forge && ./webui.sh", category: "Image Gen", source: "git", github: "https://github.com/lllyasviel/stable-diffusion-webui-forge" },
  { name: "Fooocus", description: "SD-XL mit Midjourney-Style Prompting", installCmd: "git clone https://github.com/lllyasviel/Fooocus ~/Fooocus && cd ~/Fooocus && pip install -r requirements.txt", category: "Image Gen", source: "git", github: "https://github.com/lllyasviel/Fooocus" },
  { name: "InvokeAI", description: "Professionelle Creative AI Suite", installCmd: "git clone https://github.com/invoke-ai/InvokeAI ~/InvokeAI && cd ~/InvokeAI && ./install.sh", category: "Image Gen", source: "git", github: "https://github.com/invoke-ai/InvokeAI" },
  { name: "Flux (Black Forest)", description: "State-of-the-Art Image Gen (12B)", installCmd: "pip install diffusers && python -c \"from diffusers import FluxPipeline; FluxPipeline.from_pretrained('black-forest-labs/FLUX.1-dev')\"", category: "Image Gen", source: "pip" },
  // --- Speech & TTS ---
  { name: "Whisper", description: "OpenAI Speech-to-Text (GPU)", installCmd: "pip install git+https://github.com/openai/whisper.git", category: "Speech", source: "pip", github: "https://github.com/openai/whisper" },
  { name: "Whisper.cpp", description: "Ultra-schnelle STT (C++/CUDA)", installCmd: "git clone https://github.com/ggerganov/whisper.cpp && cd whisper.cpp && make && bash ./build/bin/main -m base -f audio.wav", category: "Speech", source: "git", github: "https://github.com/ggerganov/whisper.cpp" },
  { name: "DeepSpeech", description: "Mozilla STT Engine (Offline)", installCmd: "pip install deepspeech", category: "Speech", source: "pip", github: "https://github.com/mozilla/DeepSpeech" },
  { name: "Bark (Suno)", description: "Text-zu-Sprache (realistisch)", installCmd: "pip install git+https://github.com/suno-ai/bark.git", category: "TTS", source: "pip", github: "https://github.com/suno-ai/bark" },
  { name: "Piper TTS", description: "Lokale Neural TTS (schnell)", installCmd: "yay -S piper-tts-bin", category: "TTS", source: "yay", github: "https://github.com/rhasspy/piper" },
  { name: "Tortoise TTS", description: "Multi-Sprecher TTS (realistisch)", installCmd: "pip install tortoise-tts", category: "TTS", source: "pip", github: "https://github.com/neonbjb/tortoise-tts" },
  { name: "WhisperSpeech", description: "TTS durch Whisper Inversion", installCmd: "pip install whisper-speech", category: "TTS", source: "pip", github: "https://github.com/WhisperSpeech/WhisperSpeech" },
  { name: "GPT-SoVITS", description: "Voice Cloning in 1 Minute", installCmd: "git clone https://github.com/RVC-Boss/GPT-SoVITS && cd GPT-SoVITS && pip install -r requirements.txt", category: "Voice Clone", source: "git", github: "https://github.com/RVC-Boss/GPT-SoVITS" },
  { name: "OpenVoice", description: "Instant Voice Cloning (MIT)", installCmd: "git clone https://github.com/myshell-ai/OpenVoice && cd OpenVoice && pip install -r requirements.txt", category: "Voice Clone", source: "git", github: "https://github.com/myshell-ai/OpenVoice" },
  { name: "ebook2audiobook", description: "Buecher zu Hörbuechern (Voice Clone)", installCmd: "git clone https://github.com/DrewThomasson/ebook2audiobook && cd ebook2audiobook && pip install -r requirements.txt", category: "Voice Clone", source: "git", github: "https://github.com/DrewThomasson/ebook2audiobook" },
  // --- RAG ---
  { name: "RAGFlow", description: "RAG Engine mit Agent-Faehigkeiten", installCmd: "git clone https://github.com/infiniflow/ragflow && cd ragflow && docker compose up -d", category: "RAG", source: "git", github: "https://github.com/infiniflow/ragflow" },
  { name: "LightRAG", description: "Simple & Fast RAG (EMNLP 2025)", installCmd: "pip install lightrag-hku", category: "RAG", source: "pip", github: "https://github.com/HKUDS/LightRAG" },
  { name: "GraphRAG", description: "Microsoft Graph-basiertes RAG", installCmd: "pip install graphrag", category: "RAG", source: "pip", github: "https://github.com/microsoft/graphrag" },
  { name: "PrivateGPT", description: "100% private LLM mit RAG", installCmd: "pip install private-gpt", category: "RAG", source: "pip", github: "https://github.com/zylon-ai/private-gpt" },
  { name: "LlamaIndex", description: "LLM Data-Framework (RAG)", installCmd: "pip install llama-index", category: "RAG", source: "pip", github: "https://github.com/run-llama/llama_index" },
  { name: "ChatRTX", description: "NVIDIA RAG Chatbot", installCmd: "yay -S chatrtx", category: "RAG", source: "yay" },
  // --- Agents ---
  { name: "LangChain", description: "LLM Application Framework", installCmd: "pip install langchain langchain-community", category: "Framework", source: "pip", github: "https://github.com/langchain-ai/langchain" },
  { name: "LangGraph", description: "Resiliente Agent-Orchestrierung", installCmd: "pip install langgraph", category: "Framework", source: "pip", github: "https://github.com/langchain-ai/langgraph" },
  { name: "AutoGPT", description: "Autonomer KI-Agent", installCmd: "pip install autogpt", category: "Agent", source: "pip", github: "https://github.com/Significant-Gravitas/AutoGPT" },
  { name: "CrewAI", description: "Multi-Agent Framework", installCmd: "pip install crewai", category: "Agent", source: "pip", github: "https://github.com/crewAIInc/crewAI" },
  { name: "MetaGPT", description: "Multi-Agent Software Company", installCmd: "pip install metagpt", category: "Agent", source: "pip", github: "https://github.com/FoundationAgents/MetaGPT" },
  { name: "AutoGen", description: "Microsoft Agentic AI Framework", installCmd: "pip install autogen-agentchat", category: "Agent", source: "pip", github: "https://github.com/microsoft/autogen" },
  { name: "Open Interpreter", description: "KI-Terminal-Agent", installCmd: "pip install open-interpreter", category: "Agent", source: "pip", github: "https://github.com/OpenInterpreter/open-interpreter" },
  { name: "Haystack", description: "AI Orchestrierung (NLP/RAG)", installCmd: "pip install haystack-ai", category: "Framework", source: "pip", github: "https://github.com/deepset-ai/haystack" },
  { name: "Mastra", description: "TypeScript AI Agent Framework", installCmd: "npm install @mastra/core", category: "Framework", source: "npm", github: "https://github.com/mastra-ai/mastra" },
  // --- ML Frameworks ---
  { name: "PyTorch (CUDA)", description: "ML-Framework mit NVIDIA CUDA", installCmd: "yay -S python-pytorch cuda", category: "ML Framework", source: "yay" },
  { name: "TensorFlow (GPU)", description: "ML-Framework mit GPU", installCmd: "yay -S python-tensorflow", category: "ML Framework", source: "yay" },
  { name: "JupyterLab", description: "Data Science Notebook", installCmd: "sudo pacman -S jupyterlab", category: "ML Framework", source: "pacman" },
  { name: "Axolotl", description: "LLM Fine-Tuning (LoRA/QLoRA)", installCmd: "pip install axolotl", category: "Fine-Tuning", source: "pip", github: "https://github.com/OpenAccess-AI-Collective/axolotl" },
  { name: "Hugging Face CLI", description: "Model-Management & Download", installCmd: "pip install huggingface-hub", category: "Model Hub", source: "pip", github: "https://github.com/huggingface/huggingface_hub" },
  { name: "MLflow", description: "ML Lifecycle Management", installCmd: "pip install mlflow", category: "MLOps", source: "pip", github: "https://github.com/mlflow/mlflow" },
  { name: "Weights & Biases", description: "Experiment Tracking", installCmd: "pip install wandb", category: "MLOps", source: "pip", homepage: "https://wandb.ai" },
];

// ============ Desktop Environment (18 Tools) ============
export const desktopTools: Tool[] = [
  { name: "KDE Plasma 6", description: "Maximale Anpassbarkeit + Wayland", installCmd: "sudo pacman -S plasma plasma-wayland-session kde-applications kde-system sddm sddm-kcm", category: "Desktop", source: "pacman" },
  { name: "Hyprland", description: "Dynamic Tiling Wayland WM", installCmd: "sudo pacman -S hyprland waybar swaync swayidle swaylock grim slurp wl-clipboard wf-recorder", category: "Window Manager", source: "pacman", github: "https://github.com/hyprwm/Hyprland" },
  { name: "GNOME 46", description: "Stabilitaet + Wayland-Default", installCmd: "sudo pacman -S gnome gnome-extra gnome-shell-extension-dash-to-panel gnome-tweaks gdm", category: "Desktop", source: "pacman" },
  { name: "COSMIC Desktop", description: "System76 Desktop (Rust)", installCmd: "yay -S cosmic-session cosmic-panel cosmic-files cosmic-term", category: "Desktop", source: "yay" },
  { name: "i3wm", description: "Klassischer Tiling WM", installCmd: "sudo pacman -S i3-wm i3status i3lock dmenu", category: "Window Manager", source: "pacman" },
  { name: "Sway", description: "i3-kompatibel fuer Wayland", installCmd: "sudo pacman -S sway swaybg swaybar swaylock swayidle grim slurp waybar", category: "Window Manager", source: "pacman", github: "https://github.com/swaywm/sway" },
  { name: "bspwm", description: "Binary Space Partitioning WM", installCmd: "sudo pacman -S bspwm sxhkd polybar rofi", category: "Window Manager", source: "pacman" },
  { name: "Budgie Desktop", description: "Elegant, leichtgewichtig", installCmd: "sudo pacman -S budgie-desktop budgie-desktop-applets", category: "Desktop", source: "pacman" },
  { name: "XFCE 4", description: "Leichtgewichtig & stabil", installCmd: "sudo pacman -S xfce4 xfce4-goodies xfce4-whiskermenu-plugin", category: "Desktop", source: "pacman" },
  { name: "Awesome WM", description: "Highly Configurable Lua WM", installCmd: "sudo pacman -S awesome", category: "Window Manager", source: "pacman", github: "https://github.com/awesomeWM/awesome" },
  { name: "qtile", description: "Python-basierter Tiling WM", installCmd: "sudo pacman -S qtile", category: "Window Manager", source: "pacman", github: "https://github.com/qtile/qtile" },
  { name: "dwm", description: "Dynamic WM (Suckless)", installCmd: "git clone https://git.suckless.org/dwm && cd dwm && make && sudo make install", category: "Window Manager", source: "git" },
  { name: "Picom", description: "Standalone Compositor (Wayland/X11)", installCmd: "yay -S picom", category: "Compositor", source: "yay", github: "https://github.com/yshui/picom" },
  { name: "KDE Connect", description: "Android-Integration", installCmd: "sudo pacman -S kdeconnect", category: "KDE Plugin", source: "pacman" },
  { name: "SDDM", description: "KDE Display Manager + Wayland", installCmd: "sudo pacman -S sddm sddm-kcm && sudo systemctl enable sddm --now", category: "Display Manager", source: "pacman" },
  { name: "Ly", description: "Minimal TUI Display Manager", installCmd: "yay -S ly", category: "Display Manager", source: "yay", github: "https://github.com/fairyglade/ly" },
  { name: "tbsm", description: "Tiny Boot Script Manager", installCmd: "yay -S tbsm", category: "Display Manager", source: "yay" },
  { name: "polybar", description: "Status Bar (i3/bspwm)", installCmd: "sudo pacman -S polybar", category: "Bar", source: "pacman", github: "https://github.com/polybar/polybar" },
];

// ============ Themes & Design (22 Tools) ============
export const themeTools: Tool[] = [
  { name: "Catppuccin KDE + GTK", description: "Modernes Catppuccin Mocha Theme", installCmd: "sudo pacman -S catppuccin-kde catppuccin-gtk-theme-mocha", category: "Global Theme", source: "pacman" },
  { name: "Papirus Icons", description: "Modernes Icon-Set", installCmd: "sudo pacman -S papirus-icon-theme", category: "Icons", source: "pacman" },
  { name: "Bibata Cursor", description: "Animierter Cursor", installCmd: "sudo pacman -S bibata-cursor-theme", category: "Cursor", source: "pacman" },
  { name: "Kvantum Engine", description: "Theme-Engine fuer Qt", installCmd: "sudo pacman -S kvantum kvantum-manager", category: "Theme Engine", source: "pacman" },
  { name: "Nordic KDE", description: "Nord-Polar Theme", installCmd: "yay -S nordic-kde-git", category: "Global Theme", source: "yay" },
  { name: "Dracula Theme", description: "Dracula GTK + KDE", installCmd: "yay -S dracula-gtk-theme dracula-kde", category: "Global Theme", source: "yay" },
  { name: "WhiteSur KDE", description: "macOS-Style Theme", installCmd: "yay -S whitesur-kde-git", category: "Global Theme", source: "yay" },
  { name: "Orchis Theme", description: "Modernes GTK/KDE Theme", installCmd: "yay -S orchis-kde-git", category: "Global Theme", source: "yay" },
  { name: "Colloid Theme", description: "Modernes GTK/KDE", installCmd: "yay -S colloid-gtk-theme colloid-kde-theme-git", category: "Global Theme", source: "yay" },
  { name: "Fluent Theme", description: "Fluent Design GTK Theme", installCmd: "git clone https://github.com/vinceliuice/Fluent-gtk-theme && cd Fluent-gtk-theme && ./install.sh", category: "Global Theme", source: "git", github: "https://github.com/vinceliuice/Fluent-gtk-theme" },
  { name: "Tokyo Night", description: "Dark Theme (i3+polybar, sway, rofi, GTK)", installCmd: "git clone https://github.com/stronk-dev/Tokyo-Night-Linux && cd Tokyo-Night-Linux", category: "Global Theme", source: "git", github: "https://github.com/stronk-dev/Tokyo-Night-Linux" },
  { name: "Vimix GTK", description: "Flat Material Design Theme", installCmd: "git clone https://github.com/vinceliuice/Vimix-gtk-themes && cd Vimix-gtk-themes && ./install.sh", category: "Global Theme", source: "git", github: "https://github.com/vinceliuice/Vimix-gtk-themes" },
  { name: "Sweet Theme", description: "Modernes Plasma-Theme", installCmd: "sudo pacman -S sweet-theme", category: "Plasma Theme", source: "pacman" },
  { name: "SDDM Catppuccin", description: "Catppuccin Login Theme", installCmd: "yay -S sddm-theme-catppuccin-git", category: "Login Theme", source: "yay" },
  { name: "Tela Icons", description: "Realistische Icon-Farben", installCmd: "yay -S tela-icon-theme-bin", category: "Icons", source: "yay" },
  { name: "Flatery Icons", description: "Flaches Icon-Set", installCmd: "sudo pacman -S flatery-icon-theme", category: "Icons", source: "pacman" },
  { name: "BeautyLine Icons", description: "BeautyLine KDE/GTK", installCmd: "yay -S beautyline-icon-theme-git", category: "Icons", source: "yay" },
  { name: "Adwaita Dark", description: "GNOME Dark Standard", installCmd: "sudo pacman -S adwaita-dark", category: "Global Theme", source: "pacman" },
  { name: "Matcha KDE", description: "Gruenes, modernes Theme", installCmd: "yay -S matcha-kde", category: "Global Theme", source: "yay" },
  { name: "Layan Theme", description: "KDE Hell/Dunkel", installCmd: "yay -S layan-kde-git", category: "Global Theme", source: "yay" },
  { name: "nwg-look", description: "GTK Theme Switcher (Wayland)", installCmd: "yay -S nwg-look", category: "Theme Tool", source: "yay" },
  { name: "Hydrapaper", description: "Wallpaper-Manager", installCmd: "yay -S hydrapaper", category: "Wallpaper", source: "yay" },
];

// ============ Development (35 Tools) ============
export const devTools: Tool[] = [
  { name: "VS Code (Wayland)", description: "Microsoft Code-Editor", installCmd: "yay -S visual-studio-code-bin", category: "IDE", source: "yay" },
  { name: "Neovim", description: "Moderner Vim-Fork", installCmd: "sudo pacman -S neovim", category: "Editor", source: "pacman" },
  { name: "Cursor IDE", description: "AI-native Code Editor", installCmd: "yay -S cursor-bin", category: "IDE", source: "yay", homepage: "https://cursor.sh" },
  { name: "Zed Editor", description: "Rust-basierter Editor", installCmd: "yay -S zed-editor-bin", category: "Editor", source: "yay", homepage: "https://zed.dev" },
  { name: "Helix", description: "Post-modern Editor (Rust)", installCmd: "sudo pacman -S helix", category: "Editor", source: "pacman", github: "https://github.com/helix-editor/helix" },
  { name: "Sublime Text 4", description: "Blitzschneller Text-Editor", installCmd: "yay -S sublime-text-4", category: "Editor", source: "yay" },
  { name: "Kate", description: "KDE-Texteditor", installCmd: "sudo pacman -S kate", category: "Editor", source: "pacman" },
  { name: "IntelliJ IDEA", description: "JetBrains Java/Kotlin IDE", installCmd: "yay -S intellij-idea-community", category: "IDE", source: "yay" },
  { name: "PyCharm", description: "JetBrains Python IDE", installCmd: "yay -S pycharm-community", category: "IDE", source: "yay" },
  { name: "CLion", description: "JetBrains C/C++ IDE", installCmd: "yay -S clion", category: "IDE", source: "yay" },
  { name: "GoLand", description: "JetBrains Go IDE", installCmd: "yay -S goland", category: "IDE", source: "yay" },
  { name: "WebStorm", description: "JetBrains JS/TS IDE", installCmd: "yay -S webstorm", category: "IDE", source: "yay" },
  { name: "RustRover", description: "JetBrains Rust IDE", installCmd: "yay -S rustrover", category: "IDE", source: "yay" },
  { name: "DBeaver", description: "DB-Client (MySQL, PG, etc.)", installCmd: "yay -S dbeaver-ce", category: "Database", source: "yay" },
  { name: "Docker + Podman", description: "Container-Runtime", installCmd: "sudo pacman -S docker podman docker-compose && sudo systemctl enable docker --now", category: "Containers", source: "pacman" },
  { name: "GitKraken", description: "Git-Client (GUI)", installCmd: "yay -S gitkraken", category: "Git", source: "yay" },
  { name: "LazyGit", description: "Profi Git-Client (TUI)", installCmd: "yay -S lazygit", category: "Git", source: "yay" },
  { name: "GitHub CLI", description: "GitHub im Terminal (gh)", installCmd: "sudo pacman -S github-cli", category: "Git", source: "pacman" },
  { name: "Meld", description: "Visueller Diff/Merge", installCmd: "sudo pacman -S meld", category: "Diff", source: "pacman" },
  { name: "LazyDocker", description: "Docker-Manager (TUI)", installCmd: "yay -S lazydocker", category: "Containers", source: "yay" },
  { name: "Portainer", description: "Docker GUI (Web)", installCmd: "docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce:latest", category: "Containers", source: "custom", github: "https://github.com/portainer/portainer" },
  { name: "Insomnia", description: "API-Testing (Open Source)", installCmd: "yay -S insomnia", category: "API", source: "yay", github: "https://github.com/Kong/insomnia" },
  { name: "Hoppscotch", description: "API-Testing (Web)", installCmd: "yay -S hoppscotch-bin", category: "API", source: "yay", github: "https://github.com/hoppscotch/hoppscotch" },
  { name: "Ansible", description: "Infrastructure as Code", installCmd: "sudo pacman -S ansible", category: "Automation", source: "pacman" },
  { name: "Terraform", description: "Multi-Cloud IaC", installCmd: "yay -S terraform", category: "Infrastructure", source: "yay" },
  { name: "K9s", description: "Kubernetes TUI Manager", installCmd: "yay -S k9s", category: "Kubernetes", source: "yay", github: "https://github.com/derailed/k9s" },
  { name: "Micro", description: "Terminal-Texteditor (Go)", installCmd: "yay -S micro", category: "Editor", source: "yay" },
  { name: "SpaceVim", description: "Vim Distribution (IDE-Like)", installCmd: "curl -sLf https://spacevim.org/install.sh | bash", category: "Editor", source: "custom" },
  { name: "Aider", description: "AI-Paired Programming", installCmd: "pip install aider-chat", category: "AI Coding", source: "pip", github: "https://github.com/paul-gauthier/aider" },
  { name: "Continue.dev", description: "Open Source AI Coding (VS Code)", installCmd: "yay -S continue", category: "AI Coding", source: "yay", github: "https://github.com/continuedev/continue" },
  { name: "Tabby", description: "Self-hosted AI Coding Assistant", installCmd: "docker run -d -p 8080:8080 tabbyml/tabby", category: "AI Coding", source: "custom", github: "https://github.com/TabbyML/tabby" },
  { name: "Open Interpreter", description: "KI-Terminal-Agent (Code-Ausfuehrung)", installCmd: "pip install open-interpreter", category: "AI Coding", source: "pip", github: "https://github.com/OpenInterpreter/open-interpreter" },
  { name: "Warp Terminal", description: "AI-First Terminal", installCmd: "yay -S warp-terminal-bin", category: "Terminal", source: "yay" },
  { name: "Postman", description: "API-Testing Tool", installCmd: "yay -S postman-bin", category: "API", source: "yay" },
  { name: "httpie", description: "Modernes curl (HTTP Client)", installCmd: "sudo pacman -S httpie", category: "API", source: "pacman" },
];

// ============ Terminal & Shell (30 Tools) ============
export const terminalTools: Tool[] = [
  { name: "Kitty Terminal", description: "GPU-beschleunigtes Terminal", installCmd: "sudo pacman -S kitty", category: "Terminal", source: "pacman" },
  { name: "Alacritty", description: "GPU-Terminal (Rust)", installCmd: "sudo pacman -S alacritty", category: "Terminal", source: "pacman" },
  { name: "WezTerm", description: "Cross-Platform (Lua)", installCmd: "yay -S wezterm", category: "Terminal", source: "yay" },
  { name: "Foot", description: "Leichtgewichtig (Wayland)", installCmd: "sudo pacman -S foot", category: "Terminal", source: "pacman" },
  { name: "Rio Terminal", description: "GPU-Terminal (Rust, Wayland)", installCmd: "yay -S rio-term-git", category: "Terminal", source: "yay", github: "https://github.com/raphamorim/rio" },
  { name: "Zsh + Oh-My-Zsh", description: "Shell mit Plugin-System", installCmd: 'sudo pacman -S zsh && sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended', category: "Shell", source: "custom" },
  { name: "Powerlevel10k", description: "Zsh-Theme mit Config", installCmd: 'git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k', category: "Shell Theme", source: "git" },
  { name: "Starship Prompt", description: "Cooler Shell-Prompt", installCmd: "sudo pacman -S starship", category: "Shell Theme", source: "pacman", github: "https://github.com/starship/starship" },
  { name: "Fish Shell", description: "Friendly Interactive Shell", installCmd: "sudo pacman -S fish", category: "Shell", source: "pacman" },
  { name: "Bash-it", description: "Bash Framework (Plugins/Themes)", installCmd: "git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it", category: "Shell Framework", source: "git", github: "https://github.com/Bash-it/bash-it" },
  { name: "Nushell", description: "Modern Shell (Rust, Structured Data)", installCmd: "yay -S nushell", category: "Shell", source: "yay", github: "https://github.com/nushell/nushell" },
  { name: "Tmux", description: "Terminal-Multiplexer", installCmd: "sudo pacman -S tmux", category: "Multiplexer", source: "pacman" },
  { name: "Zellij", description: "Modern Multiplexer (Rust)", installCmd: "sudo pacman -S zellij", category: "Multiplexer", source: "pacman", github: "https://github.com/zellij-org/zellij" },
  { name: "Atuin", description: "Shell-History Sync", installCmd: "sudo pacman -S atuin", category: "Shell Tool", source: "pacman", github: "https://github.com/atuinsh/atuin" },
  { name: "eza (exa)", description: "Modernes ls", installCmd: "sudo pacman -S eza", category: "CLI Tool", source: "pacman" },
  { name: "Bat", description: "cat mit Syntax-Highlighting", installCmd: "sudo pacman -S bat", category: "CLI Tool", source: "pacman" },
  { name: "fzf", description: "Fuzzy-Finder", installCmd: "sudo pacman -S fzf", category: "CLI Tool", source: "pacman" },
  { name: "ripgrep (rg)", description: "Ultra-schnelle Textsuche", installCmd: "sudo pacman -S ripgrep", category: "CLI Tool", source: "pacman", github: "https://github.com/BurntSushi/ripgrep" },
  { name: "fd", description: "Modernes find", installCmd: "sudo pacman -S fd", category: "CLI Tool", source: "pacman", github: "https://github.com/sharkdp/fd" },
  { name: "Delta", description: "Modernes Git-Diff", installCmd: "sudo pacman -S git-delta", category: "CLI Tool", source: "pacman", github: "https://github.com/dandavison/delta" },
  { name: "Zoxide", description: "Smarter cd", installCmd: "sudo pacman -S zoxide", category: "CLI Tool", source: "pacman", github: "https://github.com/ajeetdsouza/zoxide" },
  { name: "Bottom (btm)", description: "System-Monitor (htop-alt)", installCmd: "sudo pacman -S bottom", category: "Monitor", source: "pacman", github: "https://github.com/ClementTsang/bottom" },
  { name: "Glow", description: "Markdown-Viewer (CLI)", installCmd: "sudo pacman -S glow", category: "CLI Tool", source: "pacman", github: "https://github.com/charmbracelet/glow" },
  { name: "Yazi", description: "Blitzschneller FM (Rust)", installCmd: "yay -S yazi", category: "File Manager", source: "yay", github: "https://github.com/sxyazi/yazi" },
  { name: "Ranger", description: "Terminal FM (Vim-Style)", installCmd: "sudo pacman -S ranger", category: "File Manager", source: "pacman" },
  { name: "lf", description: "Terminal FM (Go, minimal)", installCmd: "yay -S lf", category: "File Manager", source: "yay" },
  { name: "Fastfetch", description: "Schneller Neofetch-Ersatz", installCmd: "yay -S fastfetch", category: "System Info", source: "yay" },
  { name: "Dust", description: "Modernes du", installCmd: "sudo pacman -S dust", category: "CLI Tool", source: "pacman" },
  { name: "jq", description: "JSON Processor", installCmd: "sudo pacman -S jq", category: "CLI Tool", source: "pacman" },
  { name: "Tealdeer", description: "Schnelle tldr-Pages", installCmd: "sudo pacman -S tealdeer", category: "CLI Tool", source: "pacman" },
];

// ============ Performance (18 Tools) ============
export const perfTools: Tool[] = [
  { name: "CPU Governor (Performance)", description: "CPU auf Maximum-Taktung", installCmd: "sudo pacman -S cpupower && echo 'GOVERNOR=\"performance\"' | sudo tee /etc/default/cpupower && sudo systemctl enable cpupower --now", category: "CPU", source: "pacman" },
  { name: "ZRAM (8GB)", description: "Komprimierter RAM-Swap", installCmd: 'sudo pacman -S zram-generator && echo -e "[zram0]\\nzram-size = 8192\\ncompression-algorithm = zstd" | sudo tee /etc/systemd/zram-generator.conf', category: "Memory", source: "pacman" },
  { name: "EarlyOOM", description: "Systemabsturz-Verhinderung", installCmd: "yay -S earlyoom && sudo systemctl enable earlyoom --now", category: "Memory", source: "yay" },
  { name: "NVTop", description: "NVIDIA GPU-Monitor (htop-like)", installCmd: "yay -S nvtop", category: "GPU Monitor", source: "yay" },
  { name: "NVIDIA Persistenced", description: "Treiber-Neuladen verhindern", installCmd: "sudo systemctl enable nvidia-persistenced --now", category: "GPU", source: "custom" },
  { name: "GameMode", description: "Gaming-Performance-Boost", installCmd: "yay -S gamemode lib32-gamemode && sudo systemctl enable gamemoded --now", category: "Gaming", source: "yay" },
  { name: "ananicy-cpp", description: "Auto CPU Governor", installCmd: "yay -S ananicy-cpp && sudo systemctl enable ananicy-cpp --now", category: "CPU", source: "yay", github: "https://github.com/pythops/ananicy-cpp" },
  { name: "Auto-CPU Freq", description: "Auto CPU-Frequenz", installCmd: "yay -S auto-cpufreq", category: "CPU", source: "yay", github: "https://github.com/AdnanHodzic/auto-cpufreq" },
  { name: "irqbalance", description: "CPU-Interrupt-Balance", installCmd: "sudo pacman -S irqbalance && sudo systemctl enable irqbalance --now", category: "CPU", source: "pacman" },
  { name: "thermald", description: "CPU-Thermal Management", installCmd: "sudo pacman -S thermald && sudo systemctl enable thermald --now", category: "Thermal", source: "pacman" },
  { name: "Stacer", description: "System-Optimizer GUI", installCmd: "yay -S stacer", category: "Optimizer", source: "yay" },
  { name: "KDiskMark", description: "SSD/HDD Benchmark", installCmd: "sudo pacman -S kdiskmark", category: "Benchmark", source: "pacman" },
  { name: "hyperfine", description: "Benchmark-Tool (Rust)", installCmd: "sudo pacman -S hyperfine", category: "Benchmark", source: "pacman" },
  { name: "Swappiness (10)", description: "Weniger Swap-Nutzung", installCmd: 'echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.d/99-swappiness.conf', category: "Memory", source: "custom" },
  { name: "Preload", description: "Haefufige Apps in RAM", installCmd: "sudo pacman -S preload && sudo systemctl enable preload --now", category: "Caching", source: "pacman" },
  { name: "Powersave/TuneD", description: "Profil-basierte Optimierung", installCmd: "sudo pacman -S tuned && sudo systemctl enable tuned --now", category: "Power", source: "pacman" },
  { name: "nvidia_oc", description: "NVIDIA Overclocking CLI (X11/Wayland)", installCmd: "git clone https://github.com/Dreaming-Codes/nvidia_oc && cd nvidia_oc && cargo build --release", category: "GPU OC", source: "git", github: "https://github.com/Dreaming-Codes/nvidia_oc" },
  { name: "ssprea-nvidia-control", description: "NVIDIA OC GUI (Wayland)", installCmd: "git clone https://github.com/ssprea/ssprea-nvidia-control && cd ssprea-nvidia-control", category: "GPU OC", source: "git", github: "https://github.com/ssprea/ssprea-nvidia-control" },
];

// ============ Gaming (22 Tools) ============
export const gamingTools: Tool[] = [
  { name: "Steam", description: "Steam-Client (Native)", installCmd: "sudo pacman -S steam", category: "Launcher", source: "pacman" },
  { name: "Lutris", description: "Windows-Spiele (Wine)", installCmd: "sudo pacman -S lutris", category: "Launcher", source: "pacman" },
  { name: "Heroic Games Launcher", description: "Epic Games / GOG", installCmd: "yay -S heroic-games-launcher-bin", category: "Launcher", source: "yay", github: "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher" },
  { name: "MangoHud", description: "Performance-Overlay", installCmd: "yay -S mangohud", category: "Overlay", source: "yay" },
  { name: "GOverlay", description: "MangoHud GUI", installCmd: "yay -S goverlay", category: "Overlay", source: "yay" },
  { name: "Gamescope", description: "Steam Deck Kompositor", installCmd: "yay -S gamescope", category: "Performance", source: "yay" },
  { name: "Proton GE Custom", description: "Proton + Patches", installCmd: "yay -S proton-ge-custom-bin", category: "Compatibility", source: "yay" },
  { name: "Wine + Winetricks", description: "Windows-Emulation", installCmd: "sudo pacman -S wine wine-gecko wine-mono winetricks", category: "Compatibility", source: "pacman" },
  { name: "Bottles", description: "Wine-Prefix-Manager", installCmd: "flatpak install flathub com.usebottles.bottles", category: "Compatibility", source: "flatpak", github: "https://github.com/bottlesdevs/Bottles" },
  { name: "DXVK & VKD3D", description: "DirectX zu Vulkan", installCmd: "sudo pacman -S dxvk vkd3d", category: "Compatibility", source: "pacman" },
  { name: "Prism Launcher", description: "Minecraft Multi-Instanz", installCmd: "sudo pacman -S prismlauncher", category: "Launcher", source: "pacman" },
  { name: "ProtonUp-Qt", description: "Proton Version Manager", installCmd: "yay -S protonup-qt", category: "Compatibility", source: "yay", github: "https://github.com/DavidoTek/ProtonUp-Qt" },
  { name: "OBS Studio", description: "Streaming & Recording", installCmd: "sudo pacman -S obs-studio", category: "Recording", source: "pacman" },
  { name: "Discord", description: "Gaming-Voice-Chat", installCmd: "yay -S discord", category: "Chat", source: "yay" },
  { name: "SteamTinkerLaunch", description: "Linux Steam Wrap", installCmd: "yay -S steamtinkerlaunch", category: "Compatibility", source: "yay" },
  { name: "Luxtorpeda", description: "Steam Game-Scripting", installCmd: "yay -S luxtorpeda", category: "Steam Plugin", source: "yay" },
  { name: "Gamescope Sessions", description: "Valve Kompositor Sessions", installCmd: "yay -S gamescope-session-wayland", category: "Performance", source: "yay" },
  { name: "Rare", description: "Legendary GUI (Epic)", installCmd: "yay -S rare", category: "Launcher", source: "yay" },
  { name: "Conty", description: "Unprivileged Linux Container (Gaming)", installCmd: "curl -sSf https://raw.githubusercontent.com/Kron4ek/Conty/master/Conty.sh > Conty && chmod +x Conty", category: "Compatibility", source: "custom", github: "https://github.com/Kron4ek/Conty" },
  { name: "winesapOS", description: "Gaming ohne Installation (USB)", installCmd: "git clone https://github.com/winesapOS/winesapOS", category: "Compatibility", source: "git", github: "https://github.com/winesapOS/winesapOS" },
  { name: "Heroic Launcher Flatpak", description: "Heroic (Flatpak, isoliert)", installCmd: "flatpak install flathub com.heroicgameslauncher.hgl", category: "Launcher", source: "flatpak" },
  { name: "qBittorrent", description: "Gaming Downloads (Torrent)", installCmd: "sudo pacman -S qbittorrent", category: "Download", source: "pacman" },
];

// ============ Graphics & Design (20 Tools) ============
export const graphicsTools: Tool[] = [
  { name: "Krita", description: "Professionelle Malsoftware", installCmd: "sudo pacman -S krita", category: "Painting", source: "pacman" },
  { name: "GIMP", description: "Bildbearbeitung (PS-Alt)", installCmd: "sudo pacman -S gimp", category: "Photo Editing", source: "pacman" },
  { name: "Inkscape", description: "Vektorgrafik (AI-Alt)", installCmd: "sudo pacman -S inkscape", category: "Vector", source: "pacman" },
  { name: "Blender", description: "3D-Modellierung & Animation", installCmd: "sudo pacman -S blender", category: "3D", source: "pacman" },
  { name: "Kdenlive", description: "Video-Editing (KDE)", installCmd: "sudo pacman -S kdenlive", category: "Video", source: "pacman" },
  { name: "Shotcut", description: "Video-Editing (leicht)", installCmd: "sudo pacman -S shotcut", category: "Video", source: "pacman" },
  { name: "Darktable", description: "RAW-Bearbeitung (LR-Alt)", installCmd: "sudo pacman -S darktable", category: "RAW", source: "pacman" },
  { name: "RawTherapee", description: "RAW-Bearbeitung", installCmd: "sudo pacman -S rawtherapee", category: "RAW", source: "pacman" },
  { name: "Natron", description: "Node Video-Compositor", installCmd: "yay -S natron", category: "Compositing", source: "yay" },
  { name: "FontForge", description: "Schriftart-Editor", installCmd: "sudo pacman -S fontforge", category: "Fonts", source: "pacman" },
  { name: "Scribus", description: "Desktop-Publishing", installCmd: "sudo pacman -S scribus", category: "DTP", source: "pacman" },
  { name: "Synfig Studio", description: "2D-Animation", installCmd: "sudo pacman -S synfig-studio", category: "Animation", source: "pacman" },
  { name: "Pencil2D", description: "2D-Animation (traditionell)", installCmd: "sudo pacman -S pencil2d", category: "Animation", source: "pacman" },
  { name: "digiKam", description: "Foto-Verwaltung", installCmd: "sudo pacman -S digikam", category: "Photo Manager", source: "pacman" },
  { name: "Nomacs", description: "Bildbetrachter (Qt)", installCmd: "sudo pacman -S nomacs", category: "Viewer", source: "pacman" },
  { name: "XnView MP", description: "Bild-Organizer", installCmd: "yay -S xnviewmp", category: "Viewer", source: "yay" },
  { name: "Hugin", description: "Panorama-Stitching", installCmd: "sudo pacman -S hugin", category: "Panorama", source: "pacman" },
  { name: "OBS Studio + Plugins", description: "Streaming (NVIDIA NVENC)", installCmd: "sudo pacman -S obs-studio wlrobs", category: "Streaming", source: "pacman" },
  { name: "Blender (GPU)", description: "Blender mit CUDA/OptiX", installCmd: "echo 'CYCLES_CUDA_ARCHITECTURES=89;87' >> ~/.bashrc", category: "3D", source: "custom" },
  { name: "ONLYOFFICE", description: "Office-Suite (MS-kompatibel)", installCmd: "yay -S onlyoffice-desktopeditors", category: "Office", source: "yay" },
];

// ============ Audio & Video (20 Tools) ============
export const mediaTools: Tool[] = [
  { name: "MPV", description: "Leichtgewichtig, GPU-beschleunigt", installCmd: "sudo pacman -S mpv", category: "Video Player", source: "pacman" },
  { name: "VLC", description: "Universeller Media-Player", installCmd: "sudo pacman -S vlc", category: "Video Player", source: "pacman" },
  { name: "Haruna", description: "KDE MPV-Frontend", installCmd: "yay -S haruna", category: "Video Player", source: "yay" },
  { name: "Celluloid", description: "GTK MPV-Frontend", installCmd: "sudo pacman -S celluloid", category: "Video Player", source: "pacman" },
  { name: "Audacity", description: "Audio-Editing", installCmd: "sudo pacman -S audacity", category: "Audio Editor", source: "pacman" },
  { name: "Ardour", description: "Professionelle DAW", installCmd: "sudo pacman -S ardour", category: "DAW", source: "pacman" },
  { name: "LMMS", description: "Musikproduktion", installCmd: "sudo pacman -S lmms", category: "DAW", source: "pacman" },
  { name: "Mixxx", description: "DJ-Software", installCmd: "sudo pacman -S mixxx", category: "DJ", source: "pacman" },
  { name: "PipeWire", description: "Audio-Server (Wayland)", installCmd: "sudo pacman -S pipewire pipewire-pulse wireplumber && sudo systemctl enable --now pipewire pipewire-pulse", category: "Audio Server", source: "pacman" },
  { name: "EasyEffects", description: "PipeWire Audio-Effects", installCmd: "sudo pacman -S easyeffects", category: "Audio FX", source: "pacman", github: "https://github.com/wwmm/easyeffects" },
  { name: "Strawberry", description: "Clementine-Fork (Modern)", installCmd: "yay -S strawberry", category: "Music Player", source: "yay" },
  { name: "Spotube", description: "Spotify ohne Premium", installCmd: "yay -S spotube", category: "Music Player", source: "yay", github: "https://github.com/KRTirtho/spotube" },
  { name: "MuseScore", description: "Notensatz-Software", installCmd: "sudo pacman -S musescore", category: "Music", source: "pacman" },
  { name: "OBS Studio", description: "Streaming (NVIDIA NVENC)", installCmd: "sudo pacman -S obs-studio", category: "Streaming", source: "pacman" },
  { name: "Tenacity", description: "Audacity-Fork (offen)", installCmd: "yay -S tenacity", category: "Audio Editor", source: "yay" },
  { name: "Qsynth", description: "FluidSynth GUI", installCmd: "sudo pacman -S qsynth fluidsynth", category: "Audio Synth", source: "pacman" },
  { name: "Helvum", description: "PipeWire Patchbay", installCmd: "yay -S helvum", category: "Audio Routing", source: "yay" },
  { name: "Clementine", description: "Qt Musikplayer", installCmd: "sudo pacman -S clementine", category: "Music Player", source: "pacman" },
  { name: "Audiotube", description: "YouTube Music (Qt)", installCmd: "yay -S audiotube", category: "Music Player", source: "yay" },
  { name: "OBS WebSocket", description: "OBS Remote Control", installCmd: "sudo pacman -S obs-studio-plugin-obs-websocket", category: "Streaming", source: "pacman" },
];

// ============ Network & VPN (22 Tools) ============
export const networkTools: Tool[] = [
  { name: "WireGuard", description: "Modern & Schnell VPN", installCmd: "sudo pacman -S wireguard-tools", category: "VPN", source: "pacman" },
  { name: "OpenVPN", description: "OpenVPN-Protokoll", installCmd: "sudo pacman -S openvpn", category: "VPN", source: "pacman" },
  { name: "Tailscale", description: "Mesh VPN (Zero-Config)", installCmd: "yay -S tailscale && sudo systemctl enable tailscaled --now", category: "VPN", source: "yay", homepage: "https://tailscale.com" },
  { name: "Cloudflare WARP", description: "1.1.1.1 VPN & DNS", installCmd: "yay -S cloudflare-warp-bin && warp-cli register && warp-cli connect", category: "VPN", source: "yay" },
  { name: "ProtonVPN", description: "Privacy-VPN", installCmd: "yay -S protonvpn", category: "VPN", source: "yay" },
  { name: "Mullvad VPN", description: "WireGuard VPN (Privacy)", installCmd: "yay -S mullvad-vpn-bin", category: "VPN", source: "yay" },
  { name: "Nmap", description: "Netzwerk-Scanner", installCmd: "sudo pacman -S nmap", category: "Scanner", source: "pacman" },
  { name: "Wireshark", description: "Netzwerk-Analyse (GUI)", installCmd: "sudo pacman -S wireshark-qt", category: "Analysis", source: "pacman" },
  { name: "Remmina", description: "Remote Desktop (RDP/VNC/SSH)", installCmd: "sudo pacman -S remmina", category: "Remote", source: "pacman" },
  { name: "AnyDesk", description: "Remote Desktop", installCmd: "yay -S anydesk-bin", category: "Remote", source: "yay" },
  { name: "RustDesk", description: "Open Source TeamViewer-Alt", installCmd: "yay -S rustdesk", category: "Remote", source: "yay", github: "https://github.com/rustdesk/rustdesk" },
  { name: "SSH + Mosh", description: "SSH mit besserer Latenz", installCmd: "sudo pacman -S openssh mosh && sudo systemctl enable sshd --now", category: "SSH", source: "pacman" },
  { name: "FileZilla", description: "FTP/SFTP-Client", installCmd: "sudo pacman -S filezilla", category: "FTP", source: "pacman" },
  { name: "Rclone", description: "Cloud-Sync (Drive, Dropbox)", installCmd: "sudo pacman -S rclone", category: "Cloud", source: "pacman" },
  { name: "Pi-hole", description: "Werbeblocker (Docker)", installCmd: "docker run -d --name pihole -e TZ=Europe/Berlin -p 80:80 -p 53:53 pihole/pihole:latest", category: "DNS", source: "custom" },
  { name: "AdGuard Home", description: "DNS-Server + AdBlocker", installCmd: "docker run -d --name adguard -p 3000:3000 -p 53:53 adguard/adguardhome:latest", category: "DNS", source: "custom" },
  { name: "mtr", description: "Traceroute + Ping", installCmd: "sudo pacman -S mtr", category: "Diagnostics", source: "pacman" },
  { name: "Speedtest CLI", description: "Geschwindigkeit testen", installCmd: "yay -S speedtest-cli", category: "Speed", source: "yay" },
  { name: "Bandwhich", description: "Bandbreiten-Monitor", installCmd: "yay -S bandwhich", category: "Bandwidth", source: "yay", github: "https://github.com/imsnif/bandwhich" },
  { name: "Transmission", description: "BitTorrent (GUI+CLI)", installCmd: "sudo pacman -S transmission-gtk transmission-cli", category: "Torrent", source: "pacman" },
  { name: "qBittorrent", description: "BitTorrent (Qt)", installCmd: "sudo pacman -S qbittorrent", category: "Torrent", source: "pacman" },
  { name: "Cloudflared", description: "Cloudflare Tunnel", installCmd: "yay -S cloudflared", category: "Tunnel", source: "yay" },
];

// ============ Security & Privacy (30 Tools) ============
export const securityTools: Tool[] = [
  { name: "ClamAV", description: "Antivirus (Open Source)", installCmd: "sudo pacman -S clamav && sudo freshclam", category: "Antivirus", source: "pacman" },
  { name: "Lynis", description: "System-Audit-Tool", installCmd: "yay -S lynis && sudo lynis audit system", category: "Audit", source: "yay" },
  { name: "Firejail", description: "Sandbox fuer Apps", installCmd: "sudo pacman -S firejail && sudo firecfg", category: "Sandbox", source: "pacman" },
  { name: "AppArmor", description: "Mandatory Access Control", installCmd: "sudo pacman -S apparmor && sudo systemctl enable apparmor --now", category: "MAC", source: "pacman" },
  { name: "GnuPG", description: "PGP Verschluesselung", installCmd: "sudo pacman -S gnupg", category: "Encryption", source: "pacman" },
  { name: "VeraCrypt", description: "Festplatten-Verschluesselung", installCmd: "yay -S veracrypt", category: "Encryption", source: "yay" },
  { name: "KeePassXC", description: "Passwort-Manager (lokal)", installCmd: "sudo pacman -S keepassxc", category: "Passwords", source: "pacman" },
  { name: "Bitwarden", description: "Passwort-Manager (Cloud)", installCmd: "yay -S bitwarden", category: "Passwords", source: "yay" },
  { name: "UFW", description: "Uncomplicated Firewall", installCmd: "sudo pacman -S ufw && sudo ufw enable", category: "Firewall", source: "pacman" },
  { name: "CrowdSec", description: "Collaborative IPS", installCmd: "yay -S crowdsec", category: "IPS", source: "yay", github: "https://github.com/crowdsecurity/crowdsec" },
  { name: "Rkhunter", description: "Rootkit-Scanner", installCmd: "sudo pacman -S rkhunter", category: "Rootkit", source: "pacman" },
  { name: "Tripwire", description: "File Integrity Monitor", installCmd: "sudo pacman -S tripwire", category: "FIM", source: "pacman" },
  { name: "Nessus", description: "Vulnerability Scanner", installCmd: "yay -S nessus", category: "Scanner", source: "yay" },
  { name: "Tor Browser", description: "Anonymer Browser", installCmd: "yay -S tor-browser", category: "Privacy", source: "yay" },
  { name: "Signal", description: "E2E Messenger", installCmd: "yay -S signal-desktop", category: "Messenger", source: "yay" },
  { name: "Element", description: "Matrix-Client", installCmd: "yay -S element-desktop", category: "Messenger", source: "yay" },
  { name: "OnionShare", description: "Anonym Dateien teilen", installCmd: "yay -S onionshare", category: "Privacy", source: "yay", github: "https://github.com/onionshare/onionshare" },
  { name: "Pass", description: "Password Manager (CLI)", installCmd: "sudo pacman -S pass", category: "Passwords", source: "pacman" },
  { name: "Yubico Authenticator", description: "2FA mit YubiKey", installCmd: "yay -S yubioath-desktop", category: "2FA", source: "yay" },
  { name: "Keybase", description: "Verschluesselte Kommunikation", installCmd: "yay -S keybase-gui", category: "Encryption", source: "yay" },
  { name: "Ettercap", description: "Man-in-the-Middle Analyse", installCmd: "sudo pacman -S ettercap-graphical", category: "Analysis", source: "pacman" },
  { name: "Airgeddon", description: "WLAN-Audit-Tool", installCmd: "git clone https://github.com/v1s1t0r1sh3r3/airgeddon.git", category: "WiFi", source: "git", github: "https://github.com/v1s1t0r1sh3r3/airgeddon" },
  { name: "MacChanger", description: "MAC-Adresse aendern", installCmd: "sudo pacman -S macchanger", category: "Privacy", source: "pacman" },
  { name: "Iptables-nft", description: "Firewall (nftables)", installCmd: "sudo pacman -S iptables-nft", category: "Firewall", source: "pacman" },
  { name: "Sherlock", description: "OSINT Username Search", installCmd: "pip install sherlock-project", category: "OSINT", source: "pip", github: "https://github.com/sherlock-project/sherlock" },
  { name: "theHarvester", description: "OSINT E-Mail/Harvest", installCmd: "pip install theHarvester", category: "OSINT", source: "pip", github: "https://github.com/laramies/theHarvester" },
  { name: "Metasploit", description: "Penetration Testing Framework", installCmd: "yay -S metasploit", category: "Pentest", source: "yay" },
  { name: "Burp Suite CE", description: "Web Security Scanner", installCmd: "yay -S burpsuite", category: "Pentest", source: "yay" },
  { name: "Hashcat", description: "Password Recovery (GPU)", installCmd: "sudo pacman -S hashcat", category: "Cracking", source: "pacman" },
];

// ============ System Tools (28 Tools) ============
export const systemTools: Tool[] = [
  { name: "htop / bpytop", description: "Prozess-Viewer", installCmd: "sudo pacman -S htop && yay -S bpytop", category: "Monitor", source: "pacman" },
  { name: "NetData", description: "Echtzeit-Monitoring (Web)", installCmd: "yay -S netdata && sudo systemctl enable netdata --now", category: "Monitor", source: "yay" },
  { name: "Glances", description: "System-Monitor (TUI/Web)", installCmd: "sudo pacman -S glances", category: "Monitor", source: "pacman", github: "https://github.com/nicolargo/glances" },
  { name: "Cockpit", description: "Web System-Management", installCmd: "sudo pacman -S cockpit && sudo systemctl enable cockpit.socket --now", category: "Management", source: "pacman" },
  { name: "Conky", description: "Lightweight Desktop Monitor", installCmd: "sudo pacman -S conky", category: "Monitor", source: "pacman", github: "https://github.com/brndnmtthws/conky" },
  { name: "Timeshift", description: "System-Backups (Snapshots)", installCmd: "sudo pacman -S timeshift", category: "Backup", source: "pacman" },
  { name: "BorgBackup", description: "Inkrementelle Backups", installCmd: "sudo pacman -S borg", category: "Backup", source: "pacman" },
  { name: "Restic", description: "Sichere, effiziente Backups", installCmd: "sudo pacman -S restic", category: "Backup", source: "pacman" },
  { name: "Kopia", description: "Cross-Platform Backup (Encrypt)", installCmd: "yay -S kopia", category: "Backup", source: "yay", github: "https://github.com/kopia/kopia" },
  { name: "Back In Time", description: "Einfaches Backup (rsync)", installCmd: "sudo pacman -S backintime-qt", category: "Backup", source: "pacman" },
  { name: "GParted", description: "Partitionierung", installCmd: "sudo pacman -S gparted", category: "Partition", source: "pacman" },
  { name: "KDE Partition Manager", description: "KDE Partitionierung", installCmd: "sudo pacman -S partitionmanager", category: "Partition", source: "pacman" },
  { name: "Filelight", description: "Festplatten-Analyse", installCmd: "sudo pacman -S filelight", category: "Analysis", source: "pacman" },
  { name: "LibreOffice", description: "Office-Suite", installCmd: "sudo pacman -S libreoffice-fresh", category: "Office", source: "pacman" },
  { name: "Okular", description: "PDF-Viewer (KDE)", installCmd: "sudo pacman -S okular", category: "PDF", source: "pacman" },
  { name: "Obsidian", description: "Markdown-Notizen", installCmd: "yay -S obsidian", category: "Notes", source: "yay" },
  { name: "Joplin", description: "Notizen (E2E)", installCmd: "yay -S joplin-desktop", category: "Notes", source: "yay" },
  { name: "Btop++", description: "Moderner System-Monitor", installCmd: "sudo pacman -S btop", category: "Monitor", source: "pacman", github: "https://github.com/aristocratos/btop" },
  { name: "BleachBit", description: "System-Cleaner", installCmd: "sudo pacman -S bleachbit", category: "Cleaner", source: "pacman" },
  { name: "Stacer", description: "Optimizer & Cleaner", installCmd: "yay -S stacer", category: "Optimizer", source: "yay" },
  { name: "Fio", description: "I/O Benchmark", installCmd: "sudo pacman -S fio", category: "Benchmark", source: "pacman" },
  { name: "ncdu", description: "Disk-Usage Analyzer", installCmd: "sudo pacman -S ncdu", category: "Disk", source: "pacman" },
  { name: "KSystemLog", description: "KDE Log-Viewer", installCmd: "sudo pacman -S ksystemlog", category: "Logs", source: "pacman" },
  { name: "Dolphin Plugins", description: "KIO-Fuse, GDrive, Archive", installCmd: "sudo pacman -S dolphin-plugins kio-fuse kio-gdrive", category: "File Manager", source: "pacman" },
  { name: "Flatseal", description: "Flatpak Permission Manager", installCmd: "flatpak install flathub com.github.tchx84.Flatseal", category: "Management", source: "flatpak" },
  { name: "jdupes", description: "Duplikat-Finder (C, schnell)", installCmd: "yay -S jdupes", category: "Cleaner", source: "yay" },
  { name: "czkawka", description: "Duplikat-Tool (Rust, GUI)", installCmd: "yay -S czkawka", category: "Cleaner", source: "yay" },
];

// ============ Browser & Web (16 Tools) ============
export const browserTools: Tool[] = [
  { name: "Brave Browser", description: "Privacy-First (Chromium)", installCmd: "yay -S brave-bin", category: "Browser", source: "yay", homepage: "https://brave.com" },
  { name: "Firefox", description: "Open Source (Privacy)", installCmd: "sudo pacman -S firefox", category: "Browser", source: "pacman" },
  { name: "LibreWolf", description: "Firefox Fork (Privacy-Max)", installCmd: "yay -S librewolf-bin", category: "Browser", source: "yay", github: "https://github.com/librewolf-community/librewolf" },
  { name: "Thorium Browser", description: "Schnellster Chromium-Fork", installCmd: "yay -S thorium-browser-bin", category: "Browser", source: "yay", github: "https://github.com/Alex313031/thorium" },
  { name: "Vivaldi", description: "Power-User Browser", installCmd: "yay -S vivaldi", category: "Browser", source: "yay" },
  { name: "Floorp Browser", description: "Firefox Fork (Japan)", installCmd: "yay -S floorp-bin", category: "Browser", source: "yay" },
  { name: "Mullvad Browser", description: "Tor ohne Tor-Netzwerk", installCmd: "yay -S mullvad-browser-bin", category: "Browser", source: "yay" },
  { name: "Waterfox", description: "Firefox Fork (Flexibilitaet)", installCmd: "yay -S waterfox-bin", category: "Browser", source: "yay" },
  { name: "uBlock Origin", description: "Werbeblocker", installCmd: "sudo pacman -S ublock-origin", category: "Extension", source: "pacman" },
  { name: "Dark Reader", description: "Dark Mode fuer Websites", installCmd: "yay -S firefox-dark-reader", category: "Extension", source: "yay" },
  { name: "Privacy Badger", description: "Tracker-Blocker (EFF)", installCmd: "yay -S privacy-badger", category: "Extension", source: "yay" },
  { name: "Bitwarden Browser", description: "Passwort-Manager Ext", installCmd: "yay -S bitwarden", category: "Extension", source: "yay" },
  { name: "Sidebery", description: "Sidebar Tabs (Firefox)", installCmd: "yay -S firefox-sidebery", category: "Extension", source: "yay" },
  { name: "Tridactyl", description: "Vim-Firefox", installCmd: "yay -S firefox-tridactyl", category: "Extension", source: "yay" },
  { name: "PassFF", description: "pass integration (Firefox)", installCmd: "yay -S firefox-passff", category: "Extension", source: "yay" },
  { name: "Falkon", description: "KDE Web Browser (Qt)", installCmd: "sudo pacman -S falkon", category: "Browser", source: "pacman" },
];

// ============ Wayland & WL Tools (22 Tools) ============
export const waylandTools: Tool[] = [
  { name: "Waybar", description: "Customizable Wayland Bar", installCmd: "sudo pacman -S waybar", category: "Bar", source: "pacman", github: "https://github.com/Alexays/Waybar" },
  { name: "Fuzzel", description: "Wayland-native Launcher", installCmd: "sudo pacman -S fuzzel", category: "Launcher", source: "pacman" },
  { name: "Wofi", description: "GTK Launcher (Wayland)", installCmd: "sudo pacman -S wofi", category: "Launcher", source: "pacman" },
  { name: "Rofi-Wayland", description: "Rofi for Wayland", installCmd: "yay -S rofi-wayland", category: "Launcher", source: "yay" },
  { name: "Mako", description: "Notification Daemon", installCmd: "sudo pacman -S mako", category: "Notifications", source: "pacman", github: "https://github.com/emersion/mako" },
  { name: "SwayNC", description: "Notification Center", installCmd: "sudo pacman -S sway-notification-center", category: "Notifications", source: "pacman" },
  { name: "Grim + Slurp", description: "Screenshot Tools", installCmd: "sudo pacman -S grim slurp", category: "Screenshot", source: "pacman" },
  { name: "Satty", description: "Screenshot Annotator", installCmd: "yay -S satty", category: "Screenshot", source: "yay" },
  { name: "swaylock-effects", description: "Lockscreen mit Effekten", installCmd: "yay -S swaylock-effects", category: "Lockscreen", source: "yay" },
  { name: "wf-recorder", description: "Screen Recording", installCmd: "sudo pacman -S wf-recorder", category: "Recording", source: "pacman" },
  { name: "wl-clipboard", description: "Clipboard Manager", installCmd: "sudo pacman -S wl-clipboard", category: "Clipboard", source: "pacman" },
  { name: "eww", description: "ElKowars wacky widgets", installCmd: "yay -S eww-wayland", category: "Widgets", source: "yay", github: "https://github.com/elkowar/eww" },
  { name: "hyprpicker", description: "Color Picker (Hyprland)", installCmd: "yay -S hyprpicker", category: "Utility", source: "yay" },
  { name: "waypaper", description: "Wallpaper-Manager", installCmd: "yay -S waypaper", category: "Utility", source: "yay" },
  { name: "swaybg", description: "Wallpaper Setter", installCmd: "sudo pacman -S swaybg", category: "Wallpaper", source: "pacman" },
  { name: "yambar", description: "Modular Status Bar (C)", installCmd: "yay -S yambar", category: "Bar", source: "yay" },
  { name: "hyprwave", description: "Music Control Bar (Hyprland)", installCmd: "git clone https://github.com/shantanubaddar/hyprwave", category: "Bar", source: "git", github: "https://github.com/shantanubaddar/hyprwave" },
  { name: "wl-mirror", description: "Mirror Wayland Outputs", installCmd: "yay -S wl-mirror", category: "Utility", source: "yay" },
  { name: "grimshot", description: "Screenshot Helper", installCmd: "yay -S grimshot", category: "Screenshot", source: "yay" },
  { name: "clipse", description: "Clipboard Manager (Wayland)", installCmd: "yay -S clipse", category: "Clipboard", source: "yay" },
  { name: "wob", description: "Overlay Progress Bar", installCmd: "yay -S wob", category: "Utility", source: "yay" },
  { name: "waypaper", description: "Wayland Wallpaper Tool", installCmd: "yay -S waypaper", category: "Utility", source: "yay" },
];

// ============ Self-Hosted (22 Tools) ============
export const selfhostedTools: Tool[] = [
  { name: "Nextcloud", description: "Private Cloud (Dropbox-Alt)", installCmd: "docker run -d -p 8080:80 nextcloud", category: "Cloud", source: "custom", homepage: "https://nextcloud.com" },
  { name: "Immich", description: "Google Photos-Alt", installCmd: "docker compose -f https://raw.githubusercontent.com/immich-app/immich/main/docker-compose.yml up -d", category: "Photos", source: "custom", github: "https://github.com/immich-app/immich" },
  { name: "Vaultwarden", description: "Lightweight Bitwarden", installCmd: "docker run -d --name vaultwarden -p 8081:80 vaultwarden/server:latest", category: "Passwords", source: "custom", github: "https://github.com/dani-garcia/vaultwarden" },
  { name: "Jellyfin", description: "Media Server (Plex-Alt)", installCmd: "docker run -d -p 8096:8096 -v /media:/media jellyfin/jellyfin", category: "Media", source: "custom", homepage: "https://jellyfin.org" },
  { name: "Plex", description: "Media Server (Premium)", installCmd: "docker run -d -p 32400:32400 plexinc/pms-docker:latest", category: "Media", source: "custom" },
  { name: "Home Assistant", description: "Smart Home Automation", installCmd: "docker run -d --name homeassistant -p 8123:8123 homeassistant/home-assistant:stable", category: "Smart Home", source: "custom" },
  { name: "Grafana", description: "Monitoring Dashboard", installCmd: "docker run -d -p 3000:3000 grafana/grafana", category: "Monitoring", source: "custom" },
  { name: "Uptime Kuma", description: "Uptime Monitor", installCmd: "docker run -d -p 3001:3001 louislam/uptime-kuma:1", category: "Monitoring", source: "custom", github: "https://github.com/louislam/uptime-kuma" },
  { name: "Stirling PDF", description: "PDF-Tools (Self-Hosted)", installCmd: "docker run -d -p 8082:8080 frooodle/s-pdf:latest", category: "PDF", source: "custom" },
  { name: "Paperless-ngx", description: "Dokumenten-Management", installCmd: "docker compose -f https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/main/docker-compose.yml up -d", category: "Documents", source: "custom" },
  { name: "Coolify", description: "PaaS (Vercel/Heroku-Alt)", installCmd: "curl -fsSL https://cdn.coollabs.io/coollabsio/coolify/install.sh | bash", category: "PaaS", source: "custom", github: "https://github.com/coollabsio/coolify" },
  { name: "NocoDB", description: "Airtable-Alternative", installCmd: "docker run -d -p 8080:8080 nocodb/nocodb:latest", category: "Database", source: "custom", github: "https://github.com/nocodb/nocodb" },
  { name: "Plausible Analytics", description: "Privacy Analytics", installCmd: "docker run -d -p 3000:3000 plausible/analytics:latest", category: "Analytics", source: "custom", github: "https://github.com/plausible/analytics" },
  { name: "Memos", description: "Self-hosted Memo-App", installCmd: "docker run -d -p 5230:5230 neosmemo/memos:latest", category: "Notes", source: "custom" },
  { name: "Alist", description: "Multi-Cloud File Manager", installCmd: "docker run -d -p 5244:5244 xhofe/alist:latest", category: "Files", source: "custom" },
  { name: "Hoarder", description: "AI Bookmark Manager", installCmd: "docker run -d -p 3000:3000 ghcr.io/hoarder-app/hoarder:latest", category: "Bookmarks", source: "custom" },
  { name: "Documenso", description: "DocuSign-Alternative", installCmd: "docker run -d -p 3000:3000 documenso/documenso:latest", category: "Documents", source: "custom", github: "https://github.com/documenso/documenso" },
  { name: "Automatisch", description: "Zapier-Alternative", installCmd: "docker run -d -p 3000:3000 automatisch/automatisch:latest", category: "Automation", source: "custom", github: "https://github.com/automatisch/automatisch" },
  { name: "Notesnook", description: "Evernote-Alternative (E2E)", installCmd: "docker run -d -p 3000:3000 streetwriters/notesnook:latest", category: "Notes", source: "custom", github: "https://github.com/streetwriters/notesnook" },
  { name: "SearXNG", description: "Private Meta-Search", installCmd: "docker run -d -p 8888:8080 searxng/searxng:latest", category: "Search", source: "custom" },
  { name: "Tandoor Recipes", description: "Rezept-Verwaltung", installCmd: "docker run -d -p 8085:80 vabene1111/recipes", category: "Recipes", source: "custom" },
  { name: "Changedetection.io", description: "Website-Aenderungen", installCmd: "docker run -d -p 5000:5000 dgtlmoon/changedetection.io", category: "Monitoring", source: "custom" },
];

// ============ DevOps & Infra (18 Tools) ============
export const devopsTools: Tool[] = [
  { name: "Docker Compose", description: "Multi-Container Orchestration", installCmd: "sudo pacman -S docker-compose", category: "Containers", source: "pacman" },
  { name: "Podman Desktop", description: "Podman GUI", installCmd: "yay -S podman-desktop", category: "Containers", source: "yay" },
  { name: "K3s", description: "Lightweight Kubernetes", installCmd: "curl -sfL https://get.k3s.io | sh -", category: "Kubernetes", source: "custom" },
  { name: "Helm", description: "Kubernetes Package Manager", installCmd: "yay -S helm", category: "Kubernetes", source: "yay" },
  { name: "Skopeo", description: "Container Image Mgmt", installCmd: "sudo pacman -S skopeo", category: "Containers", source: "pacman" },
  { name: "Buildah", description: "OCI Container Builder", installCmd: "sudo pacman -S buildah", category: "Containers", source: "pacman" },
  { name: "Vagrant", description: "Dev-Umgebungen", installCmd: "sudo pacman -S vagrant", category: "VM", source: "pacman" },
  { name: "Pulumi", description: "IaC (Multi-Lang)", installCmd: "yay -S pulumi-bin", category: "Infrastructure", source: "yay" },
  { name: "ArgoCD", description: "GitOps CD", installCmd: "yay -S argocd", category: "GitOps", source: "yay" },
  { name: "Prometheus", description: "Monitoring & Alerting", installCmd: "docker run -d -p 9090:9090 prom/prometheus", category: "Monitoring", source: "custom" },
  { name: "cAdvisor", description: "Container Monitoring", installCmd: "docker run -d -p 8080:8080 google/cadvisor:latest", category: "Monitoring", source: "custom" },
  { name: "Traefik", description: "Cloud-Native Edge Router", installCmd: "docker run -d -p 80:80 traefik:v3.0", category: "Reverse Proxy", source: "custom" },
  { name: "Caddy", description: "HTTP/2 Server (Auto-HTTPS)", installCmd: "yay -S caddy", category: "Web Server", source: "yay" },
  { name: "Nginx Proxy Manager", description: "Nginx GUI Reverse Proxy", installCmd: "docker run -d -p 81:80 -p 443:443 jc21/nginx-proxy-manager:latest", category: "Reverse Proxy", source: "custom" },
  { name: "Portainer", description: "Docker GUI (Web)", installCmd: "docker run -d -p 9000:9000 portainer/portainer-ce:latest", category: "Containers", source: "custom" },
  { name: "Dokploy", description: "Vercel/Netlify Alternative", installCmd: "curl -fsSL https://dokploy.com/install.sh | sh", category: "PaaS", source: "custom", github: "https://github.com/Dokploy/dokploy" },
  { name: "Ansible", description: "Config Management", installCmd: "sudo pacman -S ansible", category: "Automation", source: "pacman" },
  { name: "Flux", description: "GitOps for K8s", installCmd: "yay -S flux-bin", category: "GitOps", source: "yay" },
];

// ============ Privacy & Anonym (15 Tools) ============
export const privacyTools: Tool[] = [
  { name: "Tor Browser Bundle", description: "Anonymer Browser (Onion)", installCmd: "yay -S tor-browser", category: "Privacy", source: "yay" },
  { name: "Mullvad VPN", description: "WireGuard VPN", installCmd: "yay -S mullvad-vpn-bin", category: "VPN", source: "yay" },
  { name: "Tailscale", description: "Mesh VPN (Zero-Config)", installCmd: "yay -S tailscale", category: "VPN", source: "yay" },
  { name: "Signal", description: "E2E Messenger", installCmd: "yay -S signal-desktop", category: "Messenger", source: "yay" },
  { name: "Element", description: "Matrix-Client", installCmd: "yay -S element-desktop", category: "Messenger", source: "yay" },
  { name: "Bitwarden", description: "Passwort-Manager", installCmd: "yay -S bitwarden", category: "Passwords", source: "yay" },
  { name: "KeePassXC", description: "Passwort-Manager (lokal)", installCmd: "sudo pacman -S keepassxc", category: "Passwords", source: "pacman" },
  { name: "VeraCrypt", description: "Verschluesselung", installCmd: "yay -S veracrypt", category: "Encryption", source: "yay" },
  { name: "Firejail", description: "Sandbox", installCmd: "sudo pacman -S firejail", category: "Sandbox", source: "pacman" },
  { name: "uBlock Origin", description: "Tracker/Ad Blocker", installCmd: "sudo pacman -S ublock-origin", category: "Blocker", source: "pacman" },
  { name: "LibreWolf", description: "Privacy-Max Firefox", installCmd: "yay -S librewolf-bin", category: "Browser", source: "yay" },
  { name: "OnionShare", description: "Anonym Dateien teilen", installCmd: "yay -S onionshare", category: "File Sharing", source: "yay" },
  { name: "LocalSend", description: "Local File Transfer (Cross-Platform)", installCmd: "yay -S localsend-bin", category: "File Sharing", source: "yay", github: "https://github.com/localsend/localsend" },
  { name: "MAC Changer", description: "MAC-Adresse aendern", installCmd: "sudo pacman -S macchanger", category: "Network", source: "pacman" },
  { name: "DNS over HTTPS (doh)", description: "DNS Privacy (systemd-resolved)", installCmd: "echo 'DNSOverHTTPS=yes' | sudo tee -a /etc/systemd/resolved.conf", category: "DNS", source: "custom" },
];

// ============ Data & Science (NEW - 20 Tools) ============
export const dataTools: Tool[] = [
  { name: "Pandas", description: "Data Analysis (Python)", installCmd: "pip install pandas", category: "Data Analysis", source: "pip" },
  { name: "NumPy", description: "Scientific Computing", installCmd: "pip install numpy", category: "Scientific", source: "pip" },
  { name: "Matplotlib", description: "Data Visualization", installCmd: "pip install matplotlib", category: "Visualization", source: "pip" },
  { name: "Plotly", description: "Interactive Charts", installCmd: "pip install plotly", category: "Visualization", source: "pip" },
  { name: "DBeaver", description: "Universal DB Client", installCmd: "yay -S dbeaver-ce", category: "Database", source: "yay" },
  { name: "pgAdmin", description: "PostgreSQL Management", installCmd: "sudo pacman -S pgadmin4", category: "Database", source: "pacman" },
  { name: "Redis", description: "In-Memory DB (Cache)", installCmd: "sudo pacman -S redis && sudo systemctl enable redis --now", category: "Database", source: "pacman" },
  { name: "PostgreSQL", description: "Advanced SQL Database", installCmd: "sudo pacman -S postgresql && sudo systemctl enable postgresql --now", category: "Database", source: "pacman" },
  { name: "SQLite Browser", description: "SQLite GUI", installCmd: "sudo pacman -S sqlitebrowser", category: "Database", source: "pacman" },
  { name: "MongoDB", description: "NoSQL Document DB", installCmd: "sudo pacman -S mongodb-bin", category: "Database", source: "pacman" },
  { name: "Gephi", description: "Network Visualization", installCmd: "yay -S gephi", category: "Visualization", source: "yay" },
  { name: "Orange3", description: "Data Mining (Visual)", installCmd: "pip install orange3", category: "Data Mining", source: "pip" },
  { name: "Scikit-learn", description: "Machine Learning (Python)", installCmd: "pip install scikit-learn", category: "ML", source: "pip" },
  { name: "Jupyter Lab", description: "Interactive Notebooks", installCmd: "sudo pacman -S jupyterlab", category: "Notebook", source: "pacman" },
  { name: "nbdev", description: "Literate Programming", installCmd: "pip install nbdev", category: "Notebook", source: "pip" },
  { name: "Streamlit", description: "Data App Framework", installCmd: "pip install streamlit", category: "Web App", source: "pip", github: "https://github.com/streamlit/streamlit" },
  { name: "Grafana", description: "Data Visualization", installCmd: "docker run -d -p 3000:3000 grafana/grafana", category: "Dashboard", source: "custom" },
  { name: "Superset", description: "Business Intelligence", installCmd: "docker run -d -p 8088:8088 apache/superset", category: "Dashboard", source: "custom" },
  { name: "InfluxDB", description: "Time-Series Database", installCmd: "docker run -d -p 8086:8086 influxdb:latest", category: "Database", source: "custom" },
  { name: "MinIO", description: "S3-Compatible Object Storage", installCmd: "docker run -d -p 9000:9000 minio/minio", category: "Storage", source: "custom" },
];

// ============ Homelab & IoT (NEW - 18 Tools) ============
export const homelabTools: Tool[] = [
  { name: "Proxmox VE", description: "Virtualization Platform", installCmd: "ISO Download: https://www.proxmox.com/en/downloads", category: "Virtualization", source: "custom", homepage: "https://proxmox.com" },
  { name: "TrueNAS", description: "NAS Operating System", installCmd: "ISO Download: https://www.truenas.com/download/", category: "NAS", source: "custom" },
  { name: "Home Assistant", description: "Smart Home Hub", installCmd: "docker run -d --name homeassistant -p 8123:8123 homeassistant/home-assistant:stable", category: "Smart Home", source: "custom" },
  { name: "Grafana + Prometheus", description: "Monitoring Stack", installCmd: "docker run -d -p 3000:3000 grafana/grafana && docker run -d -p 9090:9090 prom/prometheus", category: "Monitoring", source: "custom" },
  { name: "AdGuard Home", description: "DNS + AdBlocker", installCmd: "docker run -d --name adguard -p 3000:3000 adguard/adguardhome:latest", category: "DNS", source: "custom" },
  { name: "Tailscale", description: "Mesh VPN (Homelab)", installCmd: "yay -S tailscale && sudo systemctl enable tailscaled --now", category: "VPN", source: "yay" },
  { name: "WireGuard", description: "VPN Server", installCmd: "sudo pacman -S wireguard-tools", category: "VPN", source: "pacman" },
  { name: "Uptime Kuma", description: "Uptime Monitor", installCmd: "docker run -d -p 3001:3001 louislam/uptime-kuma:1", category: "Monitoring", source: "custom" },
  { name: "Pi-hole", description: "Network Ad Blocker", installCmd: "docker run -d -p 80:80 pihole/pihole:latest", category: "DNS", source: "custom" },
  { name: "Jellyfin", description: "Media Server", installCmd: "docker run -d -p 8096:8096 jellyfin/jellyfin", category: "Media", source: "custom" },
  { name: "Immich", description: "Photo Backup", installCmd: "docker run -d -p 2283:2283 ghcr.io/immich-app/immich-release:latest", category: "Photos", source: "custom" },
  { name: "Vaultwarden", description: "Password Vault", installCmd: "docker run -d -p 8081:80 vaultwarden/server:latest", category: "Passwords", source: "custom" },
  { name: "Nextcloud", description: "Cloud Storage", installCmd: "docker run -d -p 8080:80 nextcloud", category: "Cloud", source: "custom" },
  { name: "Portainer", description: "Container Management", installCmd: "docker run -d -p 9000:9000 portainer/portainer-ce:latest", category: "Containers", source: "custom" },
  { name: "Nginx Proxy Manager", description: "Reverse Proxy GUI", installCmd: "docker run -d -p 81:80 jc21/nginx-proxy-manager:latest", category: "Reverse Proxy", source: "custom" },
  { name: "OpenMediaVault", description: "NAS Management (Debian)", installCmd: "ISO Download: https://www.openmediavault.org", category: "NAS", source: "custom" },
  { name: "mqtt-explorer", description: "MQTT Broker Dashboard", installCmd: "yay -S mqtt-explorer-bin", category: "IoT", source: "yay" },
  { name: "Mosquitto", description: "MQTT Broker (IoT)", installCmd: "sudo pacman -S mosquitto && sudo systemctl enable mosquitto --now", category: "IoT", source: "pacman" },
];

// ============ Anti-Gravity CLI Tools (24 Tools) ============
export const antigravityCliTools: Tool[] = [
  { name: "Gemini CLI", description: "Google KI, 1M+ Token", installCmd: "npm install -g @anthropic-ai/gemini-cli", category: "Google AI", source: "npm", homepage: "https://ai.google.dev" },
  { name: "Codex CLI", description: "OpenAI Codex (Rust)", installCmd: "npm install -g @openai/codex", category: "OpenAI", source: "npm" },
  { name: "Claude Code", description: "Anthropic Claude", installCmd: "npm install -g @anthropic-ai/claude-code", category: "Anthropic", source: "npm", homepage: "https://claude.ai" },
  { name: "Aider", description: "Lokale Modelle + Git", installCmd: "pip install aider-chat", category: "Multi-Model", source: "pip", github: "https://github.com/paul-gauthier/aider" },
  { name: "Ollama", description: "Llama 3, Mistral lokal", installCmd: "yay -S ollama && ollama pull llama3:8b", category: "LLM Engine", source: "yay", github: "https://github.com/ollama/ollama" },
  { name: "Continue.dev", description: "Open Source AI Coding", installCmd: "yay -S continue", category: "IDE AI", source: "yay", github: "https://github.com/continuedev/continue" },
  { name: "Tabby", description: "Self-hosted AI Coding", installCmd: "docker run -d -p 8080:8080 tabbyml/tabby", category: "IDE AI", source: "custom", github: "https://github.com/TabbyML/tabby" },
  { name: "Open Interpreter", description: "KI-Terminal-Agent", installCmd: "pip install open-interpreter", category: "Agent", source: "pip", github: "https://github.com/OpenInterpreter/open-interpreter" },
  { name: "Devika", description: "Open Source Devin", installCmd: "git clone https://github.com/stitionai/devika ~/devika && cd ~/devika && pip install -r requirements.txt", category: "Agent", source: "git", github: "https://github.com/stitionai/devika" },
  { name: "OpenDevin", description: "Autonomer Dev", installCmd: "git clone https://github.com/opendevin/opendevin ~/opendevin && pip install -r requirements.txt", category: "Agent", source: "git", github: "https://github.com/opendevin/opendevin" },
  { name: "Cline (Claude Dev)", description: "Autonomous Coding Agent", installCmd: "npm install -g @cline/cline", category: "Agent", source: "npm" },
  { name: "PearAI", description: "AI-native Open Source IDE", installCmd: "yay -S pearai-bin", category: "IDE AI", source: "yay" },
  { name: "Codeium", description: "AI Code Completion", installCmd: "yay -S codeium", category: "IDE AI", source: "yay" },
  { name: "MCPBundles", description: "700+ AI Services", installCmd: "npm install -g mcpbundles", category: "MCP", source: "npm" },
  { name: "ElevenLabs CLI", description: "TTS, STT, Voice Clone", installCmd: "pip install elevenlabs", category: "Voice", source: "pip" },
  { name: "Valyu CLI", description: "SEC, FRED, PubMed", installCmd: "pip install valyu-cli", category: "Data", source: "pip" },
  { name: "Antigravity Code", description: "Multi-Provider Failover", installCmd: "git clone https://github.com/antigravity-research/antigravity-code", category: "Multi-Provider", source: "git" },
  { name: "Gemini Antigravity", description: "Terminal AI Agent", installCmd: "git clone https://github.com/antigravity-research/gemini-antigravity-cli", category: "Agent", source: "git" },
  { name: "Antigravity Harness", description: "Multi-Agent Team", installCmd: "git clone https://github.com/antigravity-research/antigravity-cli-harness", category: "Multi-Agent", source: "git" },
  { name: "Oh-My-Antigravity", description: "Workflow Pack", installCmd: "git clone https://github.com/antigravity-research/oh-my-antigravity", category: "Workflows", source: "git" },
  { name: "Google Agents CLI", description: "AI Agent Skills (GCP)", installCmd: "npm install -g @google/agents-cli", category: "Agent", source: "npm" },
  { name: "MetaGPT", description: "Multi-Agent Software Co", installCmd: "pip install metagpt", category: "Multi-Agent", source: "pip", github: "https://github.com/FoundationAgents/MetaGPT" },
  { name: "skales", description: "Local Desktop Agent (15+ AI)", installCmd: "git clone https://github.com/skalesapp/skales", category: "Multi-Agent", source: "git", github: "https://github.com/skalesapp/skales" },
  { name: "Mastra", description: "TypeScript Agent Framework", installCmd: "npm install @mastra/core", category: "Framework", source: "npm", github: "https://github.com/mastra-ai/mastra" },
];

// ============ GitHub Repos (35 Repos) ============
export const githubRepos: GitHubRepo[] = [
  { name: "antigravity-code", description: "Multi-Provider Code CLI", url: "https://github.com/antigravity-research/antigravity-code", installDir: "~/Projects/antigravity-repos/antigravity-code", category: "Multi-Provider" },
  { name: "gemini-antigravity-cli", description: "Terminal AI Agent", url: "https://github.com/antigravity-research/gemini-antigravity-cli", installDir: "~/Projects/antigravity-repos/gemini-antigravity-cli", category: "Agent" },
  { name: "antigravity-cli-harness", description: "Multi-Agent Team", url: "https://github.com/antigravity-research/antigravity-cli-harness", installDir: "~/Projects/antigravity-repos/antigravity-cli-harness", category: "Multi-Agent" },
  { name: "oh-my-antigravity", description: "Multi-Agent Workflows", url: "https://github.com/antigravity-research/oh-my-antigravity", installDir: "~/Projects/antigravity-repos/oh-my-antigravity", category: "Workflows" },
  { name: "antigravity-workflows", description: "Stack-agnostische Workflows", url: "https://github.com/antigravity-research/antigravity-workflows", installDir: "~/Projects/antigravity-repos/antigravity-workflows", category: "Workflows" },
  { name: "antigravity-monitor", description: "Quota Dashboard", url: "https://github.com/antigravity-research/antigravity-monitor", installDir: "~/Projects/antigravity-repos/antigravity-monitor", category: "Monitoring" },
  { name: "OmniCode", description: "169+ Provider IDE", url: "https://github.com/antigravity-research/OmniCode", installDir: "~/Projects/antigravity-repos/OmniCode", category: "IDE" },
  { name: "pipeline-relay", description: "Agent-Orchestrierung", url: "https://github.com/antigravity-research/pipeline-relay", installDir: "~/Projects/antigravity-repos/pipeline-relay", category: "Orchestration" },
  { name: "agentMemory", description: "Hybrid Memory System", url: "https://github.com/antigravity-research/agentMemory", installDir: "~/Projects/antigravity-repos/agentMemory", category: "Memory" },
  { name: "Awesome-Linux-Software", description: "Curated Linux Software", url: "https://github.com/luong-komorebi/Awesome-Linux-Software", installDir: "~/Projects/awesome/linux-software", category: "Awesome List" },
  { name: "awesome-selfhosted", description: "Self-Hosted Directory", url: "https://github.com/awesome-selfhosted/awesome-selfhosted", installDir: "~/Projects/awesome/selfhosted", category: "Awesome List" },
  { name: "awesome-cli-apps", description: "CLI Apps Collection", url: "https://github.com/agarrharr/awesome-cli-apps", installDir: "~/Projects/awesome/cli-apps", category: "Awesome List" },
  { name: "awesome-wayland", description: "Wayland Resources", url: "https://github.com/rcalixte/awesome-wayland", installDir: "~/Projects/awesome/wayland", category: "Awesome List" },
  { name: "awesome-llm", description: "LLM Resources", url: "https://github.com/hannibal046/Awesome-LLM", installDir: "~/Projects/awesome/llm", category: "Awesome List" },
  { name: "awesome-local-ai", description: "Local AI Tools", url: "https://github.com/janhq/awesome-local-ai", installDir: "~/Projects/awesome/local-ai", category: "Awesome List" },
  { name: "awesome-ricing", description: "Linux Rice Tools", url: "https://github.com/fosslife/awesome-ricing", installDir: "~/Projects/awesome/ricing", category: "Awesome List" },
  { name: "awesome-kde", description: "KDE Apps & Extensions", url: "https://github.com/francoism90/awesome-kde", installDir: "~/Projects/awesome/kde", category: "Awesome List" },
  { name: "awesome-production-ml", description: "ML Deployment", url: "https://github.com/EthicalML/awesome-production-machine-learning", installDir: "~/Projects/awesome/ml-deploy", category: "Awesome List" },
  { name: "the-book-of-secret-knowledge", description: "CLI/Web Tools 227k+ Stars", url: "https://github.com/trimstray/the-book-of-secret-knowledge", installDir: "~/Projects/awesome/secret-knowledge", category: "Awesome List" },
  { name: "hyprland-titus", description: "Chris Titus Hyprland Config", url: "https://github.com/ChrisTitusTech/hyprland-titus", installDir: "~/Projects/dots/hyprland-titus", category: "Dotfiles" },
  { name: "hyprdots", description: "Arch Hyprland Dots", url: "https://github.com/prasanthrangan/hyprdots", installDir: "~/Projects/dots/hyprdots", category: "Dotfiles" },
  { name: "Arch-Hyprland", description: "Auto Hyprland Install", url: "https://github.com/JaKooLit/Arch-Hyprland", installDir: "~/Projects/scripts/Arch-Hyprland", category: "Setup" },
  { name: "polybar-themes", description: "600+ Polybar Themes", url: "https://github.com/adi1090x/polybar-themes", installDir: "~/Projects/themes/polybar", category: "Themes" },
  { name: "polybar-scripts", description: "Polybar Script Collection", url: "https://github.com/polybar/polybar-scripts", installDir: "~/Projects/scripts/polybar", category: "Scripts" },
  { name: "rofi-themes", description: "50+ Rofi Themes", url: "https://github.com/adi1090x/rofi", installDir: "~/Projects/themes/rofi", category: "Themes" },
  { name: "Vimix-gtk-themes", description: "Flat Material Design GTK", url: "https://github.com/vinceliuice/Vimix-gtk-themes", installDir: "~/Projects/themes/vimix", category: "Themes" },
  { name: "Fluent-gtk-theme", description: "Fluent Design GTK", url: "https://github.com/vinceliuice/Fluent-gtk-theme", installDir: "~/Projects/themes/fluent", category: "Themes" },
  { name: "LangChain", description: "Agent Engineering Platform 138k Stars", url: "https://github.com/langchain-ai/langchain", installDir: "~/Projects/ai/langchain", category: "AI Framework" },
  { name: "MetaGPT", description: "Multi-Agent Software Co", url: "https://github.com/FoundationAgents/MetaGPT", installDir: "~/Projects/ai/metagpt", category: "AI Framework" },
  { name: "AutoGen", description: "Microsoft Agentic AI", url: "https://github.com/microsoft/autogen", installDir: "~/Projects/ai/autogen", category: "AI Framework" },
  { name: "Real-Time-Voice-Cloning", description: "Voice Clone 5s", url: "https://github.com/CorentinJ/Real-Time-Voice-Cloning", installDir: "~/Projects/ai/voice-clone", category: "Voice Clone" },
  { name: "GPT-SoVITS", description: "Voice Clone 1min", url: "https://github.com/RVC-Boss/GPT-SoVITS", installDir: "~/Projects/ai/gpt-sovits", category: "Voice Clone" },
  { name: "ebook2audiobook", description: "Ebook to Audiobook", url: "https://github.com/DrewThomasson/ebook2audiobook", installDir: "~/Projects/ai/ebook2audio", category: "Voice Clone" },
  { name: "LightRAG", description: "Fast RAG (EMNLP 2025)", url: "https://github.com/HKUDS/LightRAG", installDir: "~/Projects/ai/lightrag", category: "RAG" },
];

// ============ Deep Web & Search (12 Tools) ============
export const deepWebTools: Tool[] = [
  { name: "Googler", description: "Google Suche im Terminal", installCmd: "yay -S googler", category: "Search", source: "yay" },
  { name: "DDGR (DuckDuckGo)", description: "DuckDuckGo CLI", installCmd: "yay -S ddgr", category: "Search", source: "yay" },
  { name: "Scrapy", description: "Python Web-Scraper", installCmd: "pip install scrapy", category: "Scraper", source: "pip", github: "https://github.com/scrapy/scrapy" },
  { name: "BeautifulSoup4", description: "HTML/XML Parser", installCmd: "pip install beautifulsoup4 lxml", category: "Parser", source: "pip" },
  { name: "Playwright", description: "Browser-Automation", installCmd: "pip install playwright && playwright install chromium", category: "Automation", source: "pip", homepage: "https://playwright.dev" },
  { name: "Selenium", description: "Browser Automation (Classic)", installCmd: "pip install selenium", category: "Automation", source: "pip" },
  { name: "WaybackPy", description: "Wayback Machine CLI", installCmd: "pip install waybackpy", category: "Archive", source: "pip" },
  { name: "HTTPie", description: "Modernes curl", installCmd: "sudo pacman -S httpie", category: "HTTP", source: "pacman" },
  { name: "ripgrep", description: "Ultra-schnell Datei-Suche", installCmd: "sudo pacman -S ripgrep", category: "Search", source: "pacman" },
  { name: "fd", description: "Modernes find", installCmd: "sudo pacman -S fd", category: "Search", source: "pacman" },
  { name: "gh (GitHub CLI)", description: "GitHub CLI + Extensions", installCmd: "sudo pacman -S github-cli", category: "GitHub", source: "pacman" },
  { name: "SearXNG", description: "Meta-Search Engine (Self-Hosted)", installCmd: "docker run -d -p 8888:8080 searxng/searxng:latest", category: "Search Engine", source: "custom" },
];

// ============ Program Stores (6 Tools) ============
export const programStores: Tool[] = [
  { name: "Flatpak", description: "Universal Linux-Pakete", installCmd: "sudo pacman -S flatpak && flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo", category: "Runtime", source: "pacman" },
  { name: "AppImage", description: "Portable Linux-Apps", installCmd: "yay -S appimagelauncher", category: "Runtime", source: "yay" },
  { name: "Homebrew (Linuxbrew)", description: "macOS PM fuer Linux", installCmd: "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"", category: "Runtime", source: "custom" },
  { name: "Nix", description: "Funktionale Paketverwaltung", installCmd: "sh <(curl -L https://nixos.org/nix/install) --daemon", category: "Runtime", source: "custom" },
  { name: "asdf", description: "Multi-Runtime Manager", installCmd: "git clone https://github.com/asdf-vm/asdf.git ~/.asdf --depth 1", category: "Version Manager", source: "git" },
  { name: "Mise (rtx fork)", description: "Polyglot Tool Version Manager", installCmd: "yay -S mise-bin", category: "Version Manager", source: "yay", github: "https://github.com/jdx/mise" },
];

// ============ Desktop Shortcuts ============
export const desktopShortcuts: DesktopEntry[] = [
  { name: "Stable Diffusion (A1111)", comment: "Custom AI Image Generation", exec: "gnome-terminal --working-directory=$HOME/stable-diffusion-webui -- ./webui.sh --xformers --listen", icon: "inkscape", terminal: true, categories: "Graphics;AI;" },
  { name: "ComfyUI", comment: "Modular AI Image Gen", exec: "gnome-terminal --working-directory=$HOME/ComfyUI -- python main.py --listen", icon: "blender", terminal: true, categories: "Graphics;AI;" },
  { name: "Text Gen AI", comment: "Custom LLM Runner", exec: "gnome-terminal --working-directory=$HOME/text-generation-webui -- bash start.sh", icon: "accessories-text-editor", terminal: true, categories: "Network;AI;" },
  { name: "Ollama", comment: "Local LLM Server", exec: "gnome-terminal -- ollama serve", icon: "computer", terminal: true, categories: "System;AI;" },
  { name: "LazyDocker", comment: "Docker TUI Manager", exec: "gnome-terminal -- lazydocker", icon: "docker", terminal: true, categories: "System;" },
  { name: "LazyGit", comment: "Git TUI Manager", exec: "gnome-terminal -- lazygit", icon: "git-cola", terminal: true, categories: "Development;" },
  { name: "Kitty Terminal", comment: "GPU Terminal", exec: "kitty", icon: "terminal", terminal: false, categories: "System;TerminalEmulator;" },
  { name: "NetData Dashboard", comment: "Real-time Monitoring", exec: "xdg-open http://localhost:19999", icon: "utilities-system-monitor", terminal: false, categories: "System;Monitor;" },
  { name: "Jellyfin", comment: "Media Server", exec: "xdg-open http://localhost:8096", icon: "jellyfin", terminal: false, categories: "AudioVideo;" },
  { name: "Home Assistant", comment: "Smart Home", exec: "xdg-open http://localhost:8123", icon: "home-assistant", terminal: false, categories: "Network;" },
];

// ============ Script Blocks ============
export const nvidiaScript: ScriptBlock = {
  id: "nvidia", title: "NVIDIA RTX 4070 Optimierungen", description: "Treiber, Power Management, GPU-Beschleunigung", category: "GPU",
  commands: ["# NVIDIA Persistenced", "sudo systemctl enable nvidia-persistenced --now", "", "# Power: Prefer Maximum Performance", "sudo nvidia-smi -pm 1", "sudo nvidia-smi -pl 350", "", "# Fan Control", "sudo nvidia-settings -a '[gpu:0]/GPUFanControlState=1'", "sudo nvidia-settings -a '[fan:0]/GPUTargetFanSpeed=60'", "", "# CUDA Environment", "echo 'export __GLX_VENDOR_LIBRARY_NAME=nvidia' >> ~/.profile", "echo 'export __NV_PRIME_RENDER_OFFLOAD=1' >> ~/.profile"],
};

export const waylandScript: ScriptBlock = {
  id: "wayland", title: "Wayland-Optimierungen", description: "Alle Apps auf Wayland umstellen", category: "Display Server",
  commands: ["# Qt Apps auf Wayland", "echo 'QT_QPA_PLATFORM=wayland' | sudo tee -a /etc/environment", "", "# SDL Apps", "echo 'SDL_VIDEODRIVER=wayland' | sudo tee -a /etc/environment", "", "# Firefox Wayland", "echo 'MOZ_ENABLE_WAYLAND=1' | sudo tee -a /etc/environment", "", "# Clutter", "echo 'CLUTTER_BACKEND=wayland' | sudo tee -a /etc/environment"],
};

export const zshAliasesScript: ScriptBlock = {
  id: "zsh-aliases", title: "Zsh Aliases & Optimierungen", description: "Produktivitaets-Boost", category: "Shell",
  commands: ["# Modern Commands", "echo 'alias ls=\"eza -la --git --color=always\"' >> ~/.zshrc", "echo 'alias cat=\"bat --style=plain\"' >> ~/.zshrc", "", "# System", "echo 'alias update=\"sudo pacman -Syu && yay -Syu\"' >> ~/.zshrc", "echo 'alias ai-start=\"ollama serve\"' >> ~/.zshrc", "echo 'alias ai-chat=\"ollama run llama3:8b\"' >> ~/.zshrc", "echo 'alias rr=\"ranger\"' >> ~/.zshrc", "echo 'alias nv=\"nvim\"' >> ~/.zshrc", "echo 'alias dg=\"lazydocker\"' >> ~/.zshrc", "echo 'alias lg=\"lazygit\"' >> ~/.zshrc", "", "# FZF", "echo 'source /usr/share/fzf/key-bindings.zsh' >> ~/.zshrc", "source ~/.zshrc"],
};

export const backupScript: ScriptBlock = {
  id: "backup", title: "Automatisches Backup", description: "Taeglich um 2 Uhr", category: "System",
  commands: ["# Backup Script", "cat > ~/backup.sh << 'EOF'", "#!/bin/bash", "BACKUP_DIR=\"/mnt/backup\"", "DATE=$(date +%Y-%m-%d_%H-%M-%S)", "tar -czvf \"$BACKUP_DIR/backup_$DATE.tar.gz\" --exclude=\"$BACKUP_DIR\" /home/$USER /etc", "find \"$BACKUP_DIR\" -name \"backup_*.tar.gz\" -mtime +30 -delete", "EOF", "chmod +x ~/backup.sh", "", "# Cron Job", "echo \"0 2 * * * /home/$USER/backup.sh\" | crontab -"],
};

export const autostartScript: ScriptBlock = {
  id: "autostart", title: "Autostart Systemd-Dienste", description: "Ollama, SD WebUI als Dienste", category: "Services",
  commands: ["# Ollama Service", "sudo tee /etc/systemd/system/ollama.service > /dev/null << 'EOF'", "[Unit]", "Description=Ollama LLM Service", "After=network.target", "", "[Service]", "User=$USER", "ExecStart=/usr/bin/ollama serve", "Restart=always", "", "[Install]", "WantedBy=multi-user.target", "EOF", "sudo systemctl enable ollama.service --now"],
};

export const allScriptBlocks: ScriptBlock[] = [nvidiaScript, waylandScript, zshAliasesScript, backupScript, autostartScript];

// ============ Ollama Models ============
export const ollamaModels = [
  { name: "llama3:8b", size: "4.7 GB", description: "Meta Llama 3" },
  { name: "mistral:7b", size: "4.1 GB", description: "Mistral - Effizient" },
  { name: "phi3:3.8b", size: "2.3 GB", description: "Microsoft Phi-3" },
  { name: "gemma2:9b", size: "5.5 GB", description: "Google Gemma 2" },
  { name: "qwen2.5:7b", size: "4.4 GB", description: "Alibaba Qwen 2.5" },
  { name: "deepseek-coder:6.7b", size: "3.8 GB", description: "DeepSeek Coder" },
  { name: "llama3.3:70b-q4", size: "40 GB", description: "Llama 3.3 70B" },
  { name: "phi4:14b", size: "8.8 GB", description: "Phi-4 Reasoning" },
  { name: "deepseek-r1:14b-q4", size: "9.2 GB", description: "DeepSeek R1" },
  { name: "codestral:22b", size: "13.2 GB", description: "Mistral Codestral" },
  { name: "qwen2.5-coder:7b", size: "4.4 GB", description: "Qwen Coder" },
  { name: "mistral-small:24b", size: "14.5 GB", description: "Mistral Small" },
  { name: "gemma2:27b-q4", size: "15.7 GB", description: "Gemma 2 27B" },
  { name: "llama3.1:8b", size: "4.9 GB", description: "Llama 3.1" },
  { name: "mistral-nemo:12b", size: "7.2 GB", description: "Mistral Nemo 128K" },
  { name: "starling-lm:7b-beta", size: "4.1 GB", description: "RLHF verfeinert" },
  { name: "dolphin-mixtral:8x7b", size: "27 GB", description: "Uncensored" },
];
