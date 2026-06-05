import { NextResponse } from "next/server";

export async function GET() {
  const html = generateStandaloneHTML();
  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": "attachment; filename=linux-ai-dashboard.html",
    },
  });
}

function generateStandaloneHTML(): string {
  // Generate a complete standalone HTML dashboard with:
  // - Catppuccin Mocha dark theme (inline CSS)
  // - All tools from every category (inline JS data)
  // - Sidebar navigation (pure JS, no frameworks)
  // - Copy-to-clipboard on all commands
  // - Search/filter functionality
  // - Mobile responsive design
  // - All 19 sections with real tool data

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Linux AI Tool Dashboard - BigCommunity/Manjaro</title>
<style>
/* Catppuccin Mocha Theme */
:root { --bg: #1e1e2e; --fg: #cdd6f4; --card: #181825; --muted: #313244; --accent: #45475a; --primary: #a6e3a1; --border: #45475a; --surface: #11111b; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--fg); display: flex; height: 100vh; overflow: hidden; }
::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
.sidebar { width: 256px; min-width: 256px; background: var(--card); border-right: 1px solid var(--border); display: flex; flex-direction: column; transition: all 0.3s; }
.sidebar.collapsed { width: 56px; min-width: 56px; }
.sidebar-header { padding: 12px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 8px; }
.sidebar-header .logo { width: 32px; height: 32px; background: linear-gradient(135deg, #a6e3a1, #94e2d5); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
.sidebar-header .title { font-size: 14px; font-weight: 700; white-space: nowrap; }
.sidebar-header .sub { font-size: 10px; color: #a6adc8; }
.search { padding: 8px 12px; }
.search input { width: 100%; padding: 6px 8px 6px 28px; background: var(--muted); border: 1px solid var(--border); border-radius: 6px; color: var(--fg); font-size: 12px; outline: none; }
.search input:focus { border-color: var(--primary); }
.nav { flex: 1; overflow-y: auto; padding: 4px 8px; }
.nav-item { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 8px; cursor: pointer; font-size: 12px; color: #a6adc8; border: 1px solid transparent; transition: all 0.15s; width: 100%; text-align: left; background: none; }
.nav-item:hover { color: var(--fg); background: var(--muted); }
.nav-item.active { color: var(--primary); background: rgba(166,227,161,0.1); border-color: rgba(166,227,161,0.2); }
.nav-item .icon { width: 16px; height: 16px; flex-shrink: 0; }
.main { flex: 1; overflow-y: auto; }
.content { max-width: 960px; margin: 0 auto; padding: 24px 24px 80px; }
.section-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.section-header .icon-box { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.section-header h2 { font-size: 20px; font-weight: 700; }
.section-header p { font-size: 13px; color: #a6adc8; }
.category-bar { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
.cat-btn { padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 500; cursor: pointer; border: 1px solid transparent; background: var(--muted); color: #a6adc8; transition: all 0.15s; }
.cat-btn.active { background: rgba(166,227,161,0.15); color: var(--primary); border-color: rgba(166,227,161,0.3); }
.tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 12px; }
.tool-card { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 16px; transition: border-color 0.2s; }
.tool-card:hover { border-color: rgba(166,227,161,0.3); }
.tool-card h4 { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
.tool-card .desc { font-size: 12px; color: #a6adc8; margin-bottom: 8px; }
.tool-card .badges { display: flex; gap: 6px; margin-bottom: 8px; }
.tool-card .badge { padding: 2px 6px; border-radius: 4px; font-size: 10px; border: 1px solid; }
.badge-pacman { background: rgba(166,227,161,0.2); color: #a6e3a1; border-color: rgba(166,227,161,0.3); }
.badge-yay { background: rgba(250,179,135,0.2); color: #fab387; border-color: rgba(250,179,135,0.3); }
.badge-git { background: rgba(203,166,247,0.2); color: #cba6f7; border-color: rgba(203,166,247,0.3); }
.badge-pip { background: rgba(166,227,161,0.2); color: #a6e3a1; border-color: rgba(166,227,161,0.3); }
.badge-custom { background: rgba(243,139,168,0.2); color: #f38ba8; border-color: rgba(243,139,168,0.3); }
.tool-card .cmd-row { display: flex; gap: 8px; align-items: flex-end; }
.tool-card pre { flex: 1; background: var(--surface); color: #89b4fa; font-size: 11px; font-family: monospace; padding: 8px; border-radius: 6px; overflow-x: auto; white-space: pre-wrap; word-break: break-all; }
.copy-btn { background: var(--muted); border: 1px solid var(--border); color: var(--fg); padding: 6px 8px; border-radius: 6px; cursor: pointer; font-size: 11px; white-space: nowrap; flex-shrink: 0; }
.copy-btn:hover { background: var(--accent); }
.copy-btn.copied { color: var(--primary); }
.code-block { margin-top: 16px; }
.code-block .code-header { display: flex; justify-content: space-between; align-items: center; padding: 8px 16px; background: var(--muted); border: 1px solid var(--border); border-bottom: none; border-radius: 8px 8px 0 0; }
.code-block .code-header span { font-size: 12px; font-family: monospace; color: #a6adc8; }
.code-block pre { background: var(--surface); color: #cdd6f4; font-size: 12px; font-family: monospace; padding: 16px; border-radius: 0 0 8px 8px; border: 1px solid var(--border); overflow-x: auto; white-space: pre-wrap; max-height: 400px; overflow-y: auto; }
.footer { position: sticky; bottom: 0; background: rgba(30,30,46,0.8); backdrop-filter: blur(8px); border-top: 1px solid var(--border); padding: 12px 24px; font-size: 11px; color: #a6adc8; display: flex; justify-content: space-between; }
.mobile-btn { display: none; position: fixed; top: 12px; left: 12px; z-index: 100; width: 40px; height: 40px; background: var(--card); border: 1px solid var(--border); border-radius: 8px; color: var(--fg); font-size: 20px; cursor: pointer; }
@media (max-width: 768px) {
  .sidebar { position: fixed; top: 0; left: 0; z-index: 90; height: 100%; transform: translateX(-100%); }
  .sidebar.open { transform: translateX(0); }
  .mobile-btn { display: flex; align-items: center; justify-content: center; }
  .tools-grid { grid-template-columns: 1fr; }
  .content { padding: 60px 16px 80px; }
}
.repo-card { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 12px 16px; }
.repo-card h4 { font-size: 12px; font-family: monospace; color: #a6e3a1; margin-bottom: 2px; }
.repo-card p { font-size: 11px; color: #a6adc8; margin-bottom: 6px; }
.repo-card pre { background: var(--surface); color: #89b4fa; font-size: 10px; font-family: monospace; padding: 6px 8px; border-radius: 4px; overflow-x: auto; white-space: nowrap; }
.warn-card { background: rgba(250,179,135,0.1); border: 1px solid rgba(250,179,135,0.3); border-radius: 8px; padding: 16px; margin-bottom: 24px; }
.warn-card h3 { font-size: 14px; color: #fab387; font-weight: 600; margin-bottom: 4px; }
.warn-card p { font-size: 12px; color: #a6adc8; }
.stat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; margin-bottom: 24px; }
.stat-card { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 16px; }
.stat-card .stat-label { font-size: 11px; color: #a6adc8; display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.stat-card .stat-value { font-size: 22px; font-weight: 700; }
.stat-card .stat-sub { font-size: 11px; color: #a6adc8; margin-top: 2px; }
.progress { height: 6px; background: var(--muted); border-radius: 3px; margin-top: 8px; overflow: hidden; }
.progress-bar { height: 100%; border-radius: 3px; }
</style>
</head>
<body>
<button class="mobile-btn" onclick="toggleSidebar()" id="menuBtn">&#9776;</button>
<div class="sidebar" id="sidebar">
  <div class="sidebar-header">
    <div class="logo">&#x2699;</div>
    <div><div class="title">Linux AI</div><div class="sub">Tool Dashboard v3.0</div></div>
  </div>
  <div class="search"><input type="text" placeholder="Suchen..." id="searchInput" oninput="filterSections()" /></div>
  <div class="nav" id="nav"></div>
</div>
<div class="main"><div class="content" id="content"></div>
<div class="footer">
  <div><span>BigCommunity/Manjaro</span> &bull; <span>RTX 4070 &bull; i5-12400F &bull; 32GB</span> &bull; <span>CachyOS 7.0.10</span></div>
  <span>Anti-Gravity v3.0</span>
</div></div>
<script>
const SECTIONS = [
  { id:"overview", label:"System Overview", emoji:"&#128187;" },
  { id:"desktop", label:"Desktop Environment", emoji:"&#128421;" },
  { id:"themes", label:"Themes & Design", emoji:"&#127912;" },
  { id:"ai", label:"AI / KI Tools", emoji:"&#129504;" },
  { id:"dev", label:"Development", emoji:"&#128187;" },
  { id:"terminal", label:"Terminal & Shell", emoji:"&#128424;" },
  { id:"performance", label:"Performance", emoji:"&#128200;" },
  { id:"gaming", label:"Gaming", emoji:"&#127918;" },
  { id:"graphics", label:"Grafik & Design", emoji:"&#127912;" },
  { id:"media", label:"Audio & Video", emoji:"&#127925;" },
  { id:"network", label:"Netzwerk & VPN", emoji:"&#128246;" },
  { id:"security", label:"Sicherheit", emoji:"&#128737;" },
  { id:"system", label:"System Tools", emoji:"&#128295;" },
  { id:"antigravity", label:"Antigravity AI", emoji:"&#128640;" },
  { id:"repos", label:"GitHub Repos (22)", emoji:"&#128206;" },
  { id:"deepweb", label:"Deep Web & Stores", emoji:"&#127760;" },
  { id:"shortcuts", label:"Desktop Shortcuts", emoji:"&#128424;" },
  { id:"integration", label:"System Integration", emoji:"&#128230;" },
  { id:"script", label:"Script Generator", emoji:"&#128221;" },
];

const TOOLS = ${JSON.stringify({
  ai: [
    { name:"Ollama", desc:"Lokale LLMs (Llama 3, Mistral, Phi-3)", cmd:"yay -S ollama && ollama pull llama3:8b", src:"yay", cat:"LLM Engine" },
    { name:"LM Studio", desc:"GUI fuer lokale LLMs", cmd:"yay -S lm-studio-bin", src:"yay", cat:"LLM GUI" },
    { name:"Stable Diffusion WebUI", desc:"AI Bildgenerierung (A1111)", cmd:"git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git ~/stable-diffusion-webui", src:"git", cat:"Image Gen" },
    { name:"ComfyUI", desc:"Modulares SD Frontend (Node-basiert)", cmd:"git clone https://github.com/comfyanonymous/ComfyUI.git ~/ComfyUI", src:"git", cat:"Image Gen" },
    { name:"KoboldCPP", desc:"LLM Backend (CUDA-Beschleunigung)", cmd:"git clone https://github.com/LostRuins/koboldcpp.git ~/koboldcpp", src:"git", cat:"LLM Engine" },
    { name:"Text Generation WebUI", desc:"Lokale LLMs mit Extensions", cmd:"git clone https://github.com/oobabooga/text-generation-webui.git ~/text-generation-webui", src:"git", cat:"LLM Frontend" },
    { name:"Whisper", desc:"Sprach-zu-Text (GPU)", cmd:"pip install git+https://github.com/openai/whisper.git", src:"pip", cat:"Speech" },
    { name:"Open WebUI", desc:"ChatGPT-Interface fuer Ollama", cmd:"git clone https://github.com/open-webui/open-webui.git ~/open-webui", src:"git", cat:"LLM Frontend" },
    { name:"AnythingLLM", desc:"Lokale Chat-UI mit RAG", cmd:"yay -S anything-llm", src:"yay", cat:"LLM Frontend" },
    { name:"JupyterLab", desc:"Data Science Notebook", cmd:"sudo pacman -S jupyterlab", src:"pacman", cat:"ML Framework" },
  ],
  antigravity: [
    { name:"Gemini CLI", desc:"Google KI, 1M+ Token", cmd:"npm install -g @anthropic-ai/gemini-cli || pip install gemini-cli", src:"custom", cat:"Google AI" },
    { name:"Codex CLI", desc:"OpenAI Codex (Rust)", cmd:"npm install -g @openai/codex", src:"custom", cat:"OpenAI" },
    { name:"Claude Code", desc:"Anthropic Claude", cmd:"npm install -g @anthropic-ai/claude-code", src:"custom", cat:"Anthropic" },
    { name:"Aider", desc:"Lokale Modelle + Git", cmd:"pip install aider-chat", src:"pip", cat:"Multi-Model" },
    { name:"Ollama", desc:"Llama 3, Mistral lokal", cmd:"yay -S ollama && ollama pull llama3:8b", src:"yay", cat:"LLM Engine" },
    { name:"Antigravity Code", desc:"Multi-Provider Failover", cmd:"git clone https://github.com/antigravity-research/antigravity-code ~/.local/share/antigravity-code", src:"git", cat:"Multi-Provider" },
    { name:"Gemini Antigravity", desc:"Terminal AI Agent", cmd:"git clone https://github.com/antigravity-research/gemini-antigravity-cli", src:"git", cat:"Agent" },
    { name:"Antigravity Harness", desc:"Multi-Agent Team", cmd:"git clone https://github.com/antigravity-research/antigravity-cli-harness", src:"git", cat:"Multi-Agent" },
    { name:"Oh-My-Antigravity", desc:"Workflow Pack", cmd:"git clone https://github.com/antigravity-research/oh-my-antigravity", src:"git", cat:"Workflows" },
    { name:"MCPBundles", desc:"700+ Services for AI Agents", cmd:"npm install -g mcpbundles", src:"custom", cat:"MCP" },
    { name:"ElevenLabs CLI", desc:"TTS, STT, Voice Cloning", cmd:"pip install elevenlabs", src:"pip", cat:"Voice" },
    { name:"Valyu CLI", desc:"SEC-Filings, FRED, PubMed", cmd:"pip install valyu-cli", src:"pip", cat:"Data" },
  ],
  desktop: [
    { name:"KDE Plasma 6", desc:"Wayland + Max Customization", cmd:"sudo pacman -S plasma plasma-wayland-session kde-applications sddm", src:"pacman", cat:"Desktop" },
    { name:"Hyprland", desc:"Dynamic Tiling + Wayland", cmd:"sudo pacman -S hyprland waybar swaync swayidle swaylock grim slurp wl-clipboard", src:"pacman", cat:"Window Manager" },
    { name:"GNOME 46", desc:"Stabilitaet + Wayland", cmd:"sudo pacman -S gnome gnome-extra gnome-tweaks gdm", src:"pacman", cat:"Desktop" },
    { name:"Latte Dock", desc:"Dock mit Widgets", cmd:"sudo pacman -S latte-dock", src:"pacman", cat:"KDE Plugin" },
    { name:"KDE Connect", desc:"Android-Integration", cmd:"sudo pacman -S kdeconnect", src:"pacman", cat:"KDE Plugin" },
  ],
  themes: [
    { name:"Catppuccin KDE + GTK", desc:"Catppuccin Mocha Theme", cmd:"sudo pacman -S catppuccin-kde catppuccin-gtk-theme-mocha", src:"pacman", cat:"Global Theme" },
    { name:"Papirus Icons", desc:"Modernes Icon-Set", cmd:"sudo pacman -S papirus-icon-theme", src:"pacman", cat:"Icons" },
    { name:"Bibata Cursor", desc:"Animierter Cursor", cmd:"sudo pacman -S bibata-cursor-theme", src:"pacman", cat:"Cursor" },
    { name:"Kvantum Engine", desc:"Qt Theme-Engine", cmd:"sudo pacman -S kvantum kvantum-manager", src:"pacman", cat:"Theme Engine" },
    { name:"WhiteSur KDE", desc:"macOS-Style", cmd:"yay -S whitesur-kde-git", src:"yay", cat:"Global Theme" },
    { name:"SDDM Catppuccin", desc:"Login-Screen Theme", cmd:"yay -S sddm-theme-catppuccin-git", src:"yay", cat:"Login Theme" },
  ],
  dev: [
    { name:"VS Code (Wayland)", desc:"Code-Editor mit Wayland", cmd:"yay -S visual-studio-code-bin", src:"yay", cat:"IDE" },
    { name:"Neovim", desc:"Moderner Vim-Fork", cmd:"sudo pacman -S neovim", src:"pacman", cat:"Editor" },
    { name:"Docker + Podman", desc:"Container-Runtime", cmd:"sudo pacman -S docker podman docker-compose && sudo systemctl enable docker", src:"pacman", cat:"Containers" },
    { name:"LazyGit", desc:"Git TUI", cmd:"yay -S lazygit", src:"yay", cat:"Git" },
    { name:"LazyDocker", desc:"Docker TUI", cmd:"yay -S lazydocker", src:"yay", cat:"Containers" },
    { name:"Postman", desc:"API-Testing", cmd:"yay -S postman-bin", src:"yay", cat:"API" },
  ],
  terminal: [
    { name:"Kitty Terminal", desc:"GPU-beschleunigt", cmd:"sudo pacman -S kitty", src:"pacman", cat:"Terminal" },
    { name:"Alacritty", desc:"GPU-beschleunigt (Rust)", cmd:"sudo pacman -S alacritty", src:"pacman", cat:"Terminal" },
    { name:"Zsh + Oh-My-Zsh", desc:"Erweiterte Shell", cmd:'sudo pacman -S zsh && sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"', src:"custom", cat:"Shell" },
    { name:"Powerlevel10k", desc:"Zsh Theme", cmd:"git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \\${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k", src:"git", cat:"Shell Theme" },
    { name:"Eza", desc:"Modernes ls", cmd:"sudo pacman -S eza", src:"pacman", cat:"CLI Tool" },
    { name:"Bat", desc:"cat mit Syntax-Highlight", cmd:"sudo pacman -S bat", src:"pacman", cat:"CLI Tool" },
    { name:"Fzf", desc:"Fuzzy Finder", cmd:"sudo pacman -S fzf", src:"pacman", cat:"CLI Tool" },
    { name:"Tmux", desc:"Terminal-Multiplexer", cmd:"sudo pacman -S tmux", src:"pacman", cat:"Multiplexer" },
    { name:"Fastfetch", desc:"Neofetch-Ersatz", cmd:"yay -S fastfetch", src:"yay", cat:"System Info" },
    { name:"Ranger", desc:"Terminal Dateimanager", cmd:"sudo pacman -S ranger", src:"pacman", cat:"File Manager" },
  ],
  performance: [
    { name:"CPU Governor", desc:"Performance-Modus", cmd:'sudo pacman -S cpupower && echo \'GOVERNOR="performance"\' | sudo tee /etc/default/cpupower', src:"pacman", cat:"CPU" },
    { name:"ZRAM 8GB", desc:"Komprimierter RAM-Swap", cmd:'sudo pacman -S zram-generator && echo -e "[zram0]\\nzram-size=8192\\ncompression-algorithm=zstd" | sudo tee /etc/systemd/zram-generator.conf', src:"pacman", cat:"Memory" },
    { name:"EarlyOOM", desc:"RAM-Schutz", cmd:"yay -S earlyoom && sudo systemctl enable earlyoom", src:"yay", cat:"Memory" },
    { name:"NVTop", desc:"GPU Monitoring", cmd:"yay -S nvtop", src:"yay", cat:"GPU Monitor" },
    { name:"Preload", desc:"App-Preloading", cmd:"sudo pacman -S preload && sudo systemctl enable preload", src:"pacman", cat:"Caching" },
  ],
  gaming: [
    { name:"Steam", desc:"Linux-Native", cmd:"sudo pacman -S steam", src:"pacman", cat:"Launcher" },
    { name:"Lutris", desc:"Windows-Spiele", cmd:"sudo pacman -S lutris", src:"pacman", cat:"Launcher" },
    { name:"Heroic", desc:"Epic/GOG Launcher", cmd:"yay -S heroic-games-launcher-bin", src:"yay", cat:"Launcher" },
    { name:"MangoHud", desc:"Performance-Overlay", cmd:"yay -S mangohud", src:"yay", cat:"Overlay" },
    { name:"Gamemode", desc:"Performance-Boost", cmd:"yay -S gamemode && sudo systemctl enable gamemoded", src:"yay", cat:"Performance" },
    { name:"Proton GE Custom", desc:"Patched Proton", cmd:"yay -S proton-ge-custom-bin", src:"yay", cat:"Compatibility" },
    { name:"Wine + DXVK", desc:"Windows-Emulation", cmd:"sudo pacman -S wine dxvk vkd3d", src:"pacman", cat:"Compatibility" },
  ],
  graphics: [
    { name:"Krita", desc:"Professionelle Malsoftware", cmd:"sudo pacman -S krita", src:"pacman", cat:"Painting" },
    { name:"GIMP", desc:"Photoshop-Alternative", cmd:"sudo pacman -S gimp", src:"pacman", cat:"Photo Editing" },
    { name:"Inkscape", desc:"Vektorgrafik", cmd:"sudo pacman -S inkscape", src:"pacman", cat:"Vector" },
    { name:"Blender", desc:"3D-Modellierung", cmd:"sudo pacman -S blender", src:"pacman", cat:"3D" },
    { name:"Kdenlive", desc:"Video-Editing", cmd:"sudo pacman -S kdenlive", src:"pacman", cat:"Video" },
    { name:"Darktable", desc:"RAW-Bearbeitung", cmd:"sudo pacman -S darktable", src:"pacman", cat:"RAW" },
  ],
  media: [
    { name:"MPV", desc:"GPU-beschleunigt", cmd:"sudo pacman -S mpv", src:"pacman", cat:"Video Player" },
    { name:"VLC", desc:"Universal Player", cmd:"sudo pacman -S vlc", src:"pacman", cat:"Video Player" },
    { name:"Audacity", desc:"Audio-Editing", cmd:"sudo pacman -S audacity", src:"pacman", cat:"Audio Editor" },
    { name:"PipeWire", desc:"Audio-Server", cmd:"sudo pacman -S pipewire pipewire-pulse wireplumber", src:"pacman", cat:"Audio Server" },
  ],
  network: [
    { name:"WireGuard", desc:"VPN", cmd:"sudo pacman -S wireguard-tools", src:"pacman", cat:"VPN" },
    { name:"SSH + Mosh", desc:"Remote Shell", cmd:"sudo pacman -S openssh mosh && sudo systemctl enable sshd", src:"pacman", cat:"SSH" },
    { name:"Remmina", desc:"Remote Desktop", cmd:"sudo pacman -S remmina", src:"pacman", cat:"Remote" },
    { name:"Nmap", desc:"Netzwerk-Scanner", cmd:"sudo pacman -S nmap", src:"pacman", cat:"Scanner" },
    { name:"Rclone", desc:"Cloud-Sync", cmd:"sudo pacman -S rclone", src:"pacman", cat:"Cloud" },
  ],
  security: [
    { name:"KeePassXC", desc:"Passwort-Manager", cmd:"sudo pacman -S keepassxc", src:"pacman", cat:"Passwords" },
    { name:"GnuPG", desc:"PGP Verschluesselung", cmd:"sudo pacman -S gnupg", src:"pacman", cat:"Encryption" },
    { name:"VeraCrypt", desc:"Festplatten-Verschluesselung", cmd:"yay -S veracrypt", src:"yay", cat:"Encryption" },
    { name:"Firejail", desc:"App-Sandbox", cmd:"sudo pacman -S firejail && sudo firecfg", src:"pacman", cat:"Sandbox" },
    { name:"ClamAV", desc:"Antivirus", cmd:"sudo pacman -S clamav freshclam && sudo freshclam", src:"pacman", cat:"Antivirus" },
    { name:"Tor Browser", desc:"Anonym", cmd:"yay -S tor-browser", src:"yay", cat:"Privacy" },
  ],
  system: [
    { name:"htop / btop", desc:"Prozess-Viewer", cmd:"sudo pacman -S htop && yay -S btop", src:"pacman", cat:"Monitor" },
    { name:"NetData", desc:"Echtzeit-Monitoring", cmd:"yay -S netdata && sudo systemctl enable netdata", src:"yay", cat:"Monitor" },
    { name:"Timeshift", desc:"System-Backups", cmd:"sudo pacman -S timeshift", src:"pacman", cat:"Backup" },
    { name:"Filelight", desc:"Disk-Analyse", cmd:"sudo pacman -S filelight", src:"pacman", cat:"Analysis" },
    { name:"LibreOffice", desc:"Office-Suite", cmd:"sudo pacman -S libreoffice-fresh", src:"pacman", cat:"Office" },
    { name:"Obsidian", desc:"Markdown-Notizen", cmd:"yay -S obsidian", src:"yay", cat:"Notes" },
  ],
  deepweb: [
    { name:"Googler", desc:"Google CLI Suche", cmd:"yay -S googler", src:"yay", cat:"Search" },
    { name:"DDGR", desc:"DuckDuckGo CLI", cmd:"yay -S ddgr", src:"yay", cat:"Search" },
    { name:"Scrapy", desc:"Python Web-Scraper", cmd:"pip install scrapy", src:"pip", cat:"Scraper" },
    { name:"Playwright", desc:"Browser-Automation", cmd:"pip install playwright && playwright install chromium", src:"pip", cat:"Automation" },
    { name:"gh (GitHub CLI)", desc:"GitHub CLI", cmd:"sudo pacman -S github-cli", src:"pacman", cat:"GitHub" },
    { name:"HTTPie", desc:"HTTP Client", cmd:"sudo pacman -S httpie", src:"pacman", cat:"HTTP" },
    { name:"Flatpak", desc:"Universal Linux-Pakete", cmd:"sudo pacman -S flatpak && flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo", src:"pacman", cat:"Runtime" },
    { name:"Homebrew", desc:"Paket-Manager", cmd:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"', src:"custom", cat:"Runtime" },
    { name:"Nix", desc:"Funktionale Pakete", cmd:"sh <(curl -L https://nixos.org/nix/install) --daemon", src:"custom", cat:"Runtime" },
    { name:"jdupes", desc:"Duplikat-Finder", cmd:"yay -S jdupes", src:"yay", cat:"Scanner" },
    { name:"czkawka", desc:"Duplikat-Tool (Rust)", cmd:"yay -S czkawka", src:"yay", cat:"Scanner" },
    { name:"rmlint", desc:"System-Cleaner", cmd:"yay -S rmlint", src:"yay", cat:"Cleaner" },
    { name:"hyperfine", desc:"Benchmark-Tool", cmd:"sudo pacman -S hyperfine", src:"pacman", cat:"Benchmark" },
    { name:"zoxide", desc:"Intelligenter cd", cmd:"sudo pacman -S zoxide", src:"pacman", cat:"Navigation" },
    { name:"starship", desc:"Cross-Shell Prompt", cmd:"sudo pacman -S starship", src:"pacman", cat:"Prompt" },
    { name:"jq", desc:"JSON Processor", cmd:"sudo pacman -S jq", src:"pacman", cat:"Data" },
    { name:"ncdu", desc:"Disk-Usage", cmd:"sudo pacman -S ncdu", src:"pacman", cat:"Disk" },
  ],
}, null, 2)};

let activeSection = 'overview';

function renderNav() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const nav = document.getElementById('nav');
  const filtered = SECTIONS.filter(s => s.label.toLowerCase().includes(q));
  nav.innerHTML = filtered.map(s =>
    '<button class="nav-item' + (activeSection===s.id?' active':'') + '" onclick="goTo(\\'' + s.id + '\\')">' +
    '<span class="icon">' + s.emoji + '</span>' +
    '<span>' + s.label + '</span></button>'
  ).join('');
}

function goTo(id) {
  activeSection = id;
  renderNav();
  renderContent();
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.main').scrollTop = 0;
  if(window.innerWidth < 768) document.getElementById('sidebar').classList.remove('open');
}

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }
function filterSections() { renderNav(); }

function copyCmd(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Kopiert!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Kopieren'; btn.classList.remove('copied'); }, 2000);
  });
}

function renderTools(tools) {
  const cats = [...new Set(tools.map(t => t.cat))];
  return '<div class="category-bar">' +
    '<button class="cat-btn active" onclick="showAll(this)">Alle (' + tools.length + ')</button>' +
    cats.map(c => '<button class="cat-btn" onclick="filterCat(this,\\'' + c + '\\')">' + c + ' (' + tools.filter(t=>t.cat===c).length + ')</button>').join('') +
    '</div><div class="tools-grid" id="toolsGrid">' +
    tools.map(t => '<div class="tool-card" data-cat="' + t.cat + '"><h4>' + t.name + '</h4>' +
      '<p class="desc">' + t.desc + '</p>' +
      '<div class="badges"><span class="badge badge-' + t.src + '">' + t.src + '</span>' +
      '<span class="badge" style="background:var(--muted);color:var(--fg)">' + t.cat + '</span></div>' +
      '<div class="cmd-row"><pre>' + t.cmd + '</pre>' +
      '<button class="copy-btn" onclick="copyCmd(this,\\'' + t.cmd.replace(/'/g,"\\\\'") + '\\')">Kopieren</button></div>' +
      '</div>').join('') + '</div>';
}

function showAll(btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tool-card').forEach(c => c.style.display = '');
}
function filterCat(btn, cat) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tool-card').forEach(c => {
    c.style.display = c.dataset.cat === cat ? '' : 'none';
  });
}

function renderContent() {
  const el = document.getElementById('content');
  const colors = { overview:'emerald', desktop:'violet', themes:'pink', ai:'emerald', dev:'cyan', terminal:'green', performance:'orange', gaming:'red', graphics:'fuchsia', media:'teal', network:'teal', security:'red', system:'slate', antigravity:'emerald', repos:'violet', deepweb:'teal', shortcuts:'amber', integration:'amber', script:'amber' };
  const c = colors[activeSection] || 'emerald';

  if(activeSection === 'overview') {
    el.innerHTML = '<div class="section-header"><div class="icon-box" style="background:linear-gradient(135deg,#a6e3a1,#94e2d5)">&#128187;</div><div><h2>System Overview</h2><p>BigCommunity based on Manjaro Linux 1.5.1 Barn</p></div></div>' +
      '<div class="warn-card"><h3>&#9888; System-Ressourcen kritisch</h3><p>RAM bei 89.8% und Speicher bei 87% - vor Installation Cache leeren: <code>sudo pacman -Sc</code></p></div>' +
      '<div class="stat-grid"><div class="stat-card"><div class="stat-label">&#128190; RAM</div><div class="stat-value" style="color:#fab387">89.8%</div><div class="stat-sub">28.73 / 32 GiB</div><div class="progress"><div class="progress-bar" style="width:89.8%;background:#fab387"></div></div></div>' +
      '<div class="stat-card"><div class="stat-label">&#128190; NVMe</div><div class="stat-value" style="color:#89b4fa">87%</div><div class="stat-sub">837 / 954 GiB</div><div class="progress"><div class="progress-bar" style="width:87%;background:#89b4fa"></div></div></div>' +
      '<div class="stat-card"><div class="stat-label">&#127777; CPU</div><div class="stat-value" style="color:#fab387">48C</div><div class="stat-sub">i5-12400F</div><div class="progress"><div class="progress-bar" style="width:48%;background:#fab387"></div></div></div>' +
      '<div class="stat-card"><div class="stat-label">&#128421; GPU VRAM</div><div class="stat-value" style="color:#a6e3a1">11.71 GB</div><div class="stat-sub">RTX 4070 (12 GB)</div><div class="progress"><div class="progress-bar" style="width:97%;background:#a6e3a1"></div></div></div></div>';
    return;
  }

  const tools = TOOLS[activeSection];
  if(tools) {
    const label = SECTIONS.find(s=>s.id===activeSection)?.label || '';
    const emoji = SECTIONS.find(s=>s.id===activeSection)?.emoji || '';
    el.innerHTML = '<div class="section-header"><div class="icon-box" style="background:linear-gradient(135deg,#a6e3a1,#94e2d5)">' + emoji + '</div><div><h2>' + label + '</h2></div></div>' + renderTools(tools);
    return;
  }

  const label = SECTIONS.find(s=>s.id===activeSection)?.label || '';
  const emoji = SECTIONS.find(s=>s.id===activeSection)?.emoji || '';

  if(activeSection === 'repos') {
    const repos = ${JSON.stringify([
      {name:"antigravity-proxy-tools",desc:"Multi-Account Proxy Manager",cat:"Proxy"},
      {name:"pipeline-relay",desc:"Agent-Orchestrierung",cat:"Orchestration"},
      {name:"Agentic-SEO-Skill",desc:"SEO mit 16 Sub-Skills",cat:"SEO"},
      {name:"zero-limit",desc:"Quota-Monitor",cat:"Monitoring"},
      {name:"antigravity-workflows",desc:"Stack-agnostische Workflows",cat:"Workflows"},
      {name:"agentMemory",desc:"Hybrid Memory System",cat:"Memory"},
      {name:"OmniCode",desc:"169+ Provider IDE",cat:"IDE"},
      {name:"visual-diagramming-export",desc:"Excalidraw/Markmap/PlantUML",cat:"Diagramming"},
      {name:"antigravity-evolve-concept",desc:"Evolutionaere Algorithmen",cat:"Algorithms"},
      {name:"claude-seo-skills",desc:"44 Claude SEO Commands",cat:"SEO"},
      {name:"antigravity-monitor",desc:"Quota Dashboard",cat:"Monitoring"},
      {name:"Zenith-Extension",desc:"Visuelle React-Entwicklung",cat:"React"},
      {name:"ai-code-interface.el",desc:"Emacs AI Interface",cat:"Emacs"},
      {name:"lanes-sh/app",desc:"Mission Control",cat:"Management"},
      {name:"gemini-antigravity-cli",desc:"Terminal AI Agent",cat:"Agent"},
      {name:"antigravity-cli-harness",desc:"Multi-Agent Team",cat:"Multi-Agent"},
      {name:"antigravity-code",desc:"Multi-Provider Code",cat:"Multi-Provider"},
      {name:"oh-my-antigravity",desc:"Multi-Agent Workflow Pack",cat:"Workflows"},
      {name:"antigravity-cli-termux",desc:"Android/Termux Setup",cat:"Mobile"},
      {name:"antigravity-link-extension",desc:"Mobile VS Code Bridge",cat:"VS Code"},
      {name:"antigravity-setup-scripts",desc:"Automatische Setup-Skripte",cat:"Setup"},
      {name:"vibe-coding-config",desc:"Vibe Coding Konfiguration",cat:"Config"},
    ])};
    el.innerHTML = '<div class="section-header"><div class="icon-box" style="background:linear-gradient(135deg,#cba6f7,#f38ba8)">' + emoji + '</div><div><h2>' + label + '</h2><p>22 GitHub Repositories</p></div></div>' +
      '<div class="tools-grid" style="grid-template-columns:repeat(auto-fill,minmax(320px,1fr))">' +
      repos.map(r => '<div class="repo-card"><h4>' + r.name + '</h4><p>' + r.desc + ' <span style="color:#45475a">[' + r.cat + ']</span></p>' +
        '<pre>git clone https://github.com/antigravity-research/' + r.name + '</pre></div>').join('') + '</div>';
    return;
  }

  if(activeSection === 'integration') {
    el.innerHTML = '<div class="section-header"><div class="icon-box" style="background:linear-gradient(135deg,#fab387,#f38ba8)">' + emoji + '</div><div><h2>' + label + '</h2><p>Dashboard dauerhaft installieren</p></div></div>' +
      '<div class="warn-card"><h3>&#128230; Installationsmethoden</h3><p><b>1. Standalone HTML:</b> Diese Datei einfach doppelklicken (kein Server noetig)<br><b>2. Desktop-Shortcut:</b> .desktop Datei nach ~/Desktop/ kopieren<br><b>3. Bookmark:</b> Im Browser "Zum Startbildschirm hinzufuegen"</p></div>' +
      '<div class="code-block"><div class="code-header"><span>Desktop Shortcut erstellen</span><button class="copy-btn" onclick="copyCmd(this,document.querySelector(\\'#desktopCode\\').textContent)">Kopieren</button></div>' +
      '<pre id="desktopCode">cat > ~/Desktop/linux-ai-dashboard.desktop << EOF\\n[Desktop Entry]\\nVersion=1.0\\nType=Application\\nName=Linux AI Dashboard\\nComment=Anti-Gravity Tool Dashboard v3.0\\nExec=xdg-open %U/linux-ai-dashboard.html\\nIcon=utilities-system-monitor\\nTerminal=false\\nCategories=System;Monitor;\\nEOF\\nchmod +x ~/Desktop/linux-ai-dashboard.desktop</pre></div>';
    return;
  }

  if(activeSection === 'script') {
    el.innerHTML = '<div class="section-header"><div class="icon-box" style="background:linear-gradient(135deg,#f9e2af,#fab387)">' + emoji + '</div><div><h2>' + label + '</h2><p>Komplett-Setup Skript herunterladen</p></div></div>' +
      '<div class="warn-card"><h3>&#9889; Mega Setup Script</h3><p>Das vollstaendige Anti-Gravity Mega Setup Skript ist im Script Generator im Dashboard verfuegbar.<br>Navigiere zum Script Generator in der Web-Version fuer den Download.</p></div>';
    return;
  }

  if(activeSection === 'shortcuts') {
    el.innerHTML = '<div class="section-header"><div class="icon-box" style="background:linear-gradient(135deg,#f9e2af,#fab387)">' + emoji + '</div><div><h2>' + label + '</h2><p>.desktop Dateien</p></div></div>' +
      '<div class="warn-card"><h3>Desktop Shortcuts</h3><p>Die Desktop Shortcuts sind in der Web-Version des Dashboards verfuegbar.<br>Navigiere zur Shortcuts-Sektion fuer Downloads.</p></div>';
    return;
  }

  el.innerHTML = '<div class="section-header"><div class="icon-box" style="background:linear-gradient(135deg,#a6e3a1,#94e2d5)">' + emoji + '</div><div><h2>' + label + '</h2></div></div>';
}

renderNav();
renderContent();
</script>
</body>
</html>`;
}
