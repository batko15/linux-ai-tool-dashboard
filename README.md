<div align="center">

<img src="public/banner.png" alt="Linux AI Tool Dashboard Banner" width="100%" />

# 🐧 Linux AI Tool Dashboard

**The Ultimate Manjaro Linux Power-User Command Center**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-New_York-18181B?logo=shadcn)](https://ui.shadcn.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Manjaro](https://img.shields.io/badge/Manjaro-Linux-35BF5C?logo=manjarolinux&logoColor=white)](https://manjaro.org/)
[![NVIDIA](https://img.shields.io/badge/NVIDIA-RTX_4070-76B900?logo=nvidia&logoColor=white)](https://www.nvidia.com/)

**200+ curated tools · 19 sections · Anti-Gravity AI v3.0 · One-click install commands**

[Features](#-features) · [Sections](#-dashboard-sections) · [Quick Start](#-quick-start) · [Tech Stack](#-tech-stack) · [Screenshots](#-screenshots) · [System](#-target-system) · [License](#-license)

</div>

---

## 🚀 Features

- **🖥️ System Overview** — Real-time system specs, hardware info, and network configuration at a glance
- **🧠 AI/KI Tools** — 13+ local AI tools (Ollama, Stable Diffusion, ComfyUI, Whisper, RAGFlow, PyTorch, TensorFlow, JupyterLab...)
- **🚀 Anti-Gravity AI v3.0** — 12 AI CLI agents (Gemini CLI, Claude Code, Codex CLI, Aider, MCPBundles...) + 22 GitHub repositories
- **🎮 Gaming Suite** — Steam, Lutris, Heroic, MangoHud, GameMode, Gamescope, Proton GE, Wine/DXVK/VKD3D
- **⚡ Performance Optimization** — CPU Governor, ZRAM, EarlyOOM, NVIDIA tuning, NVMe scheduler, swappiness
- **🎨 Themes & Design** — Catppuccin, Papirus, Bibata, Kvantum, WhiteSur, Orchis, Sweet themes
- **💻 Development** — VS Code, Neovim, JetBrains IDEs, Docker/Podman, GitKraken, Postman, LazyGit/Docker
- **🔧 19 Interactive Sections** — Each with copy-to-clipboard install commands, category filtering, and direct links
- **📱 Fully Responsive** — Mobile-first design with hamburger sidebar, works on any screen size
- **🎯 One-Click Commands** — Every tool has a ready-to-paste install command for Arch/Manjaro Linux
- **📜 Script Generator** — Built-in script blocks for NVIDIA optimization, Wayland setup, Zsh aliases, backups, systemd services
- **🔗 GitHub Integration** — Clone any recommended repo directly from the dashboard
- **🌙 Dark/Light Mode** — Next-themes powered with smooth transitions

---

## 📂 Dashboard Sections

| # | Section | Tools | Description |
|---|---------|-------|-------------|
| 1 | **System Overview** | — | CPU, GPU, RAM, storage, kernel, network specs |
| 2 | **Desktop Environment** | 6 | KDE Plasma 6, Hyprland, GNOME 46, Latte Dock, SDDM |
| 3 | **Themes & Design** | 10 | Catppuccin, Papirus, Bibata, Kvantum, WhiteSur, Orchis |
| 4 | **AI / KI Tools** | 13 | Ollama, LM Studio, Open WebUI, Stable Diffusion, ComfyUI, Whisper, PyTorch, TensorFlow |
| 5 | **Development** | 12 | VS Code, Neovim, JetBrains IDEs, Docker, GitKraken, Postman |
| 6 | **Terminal & Shell** | 10 | Kitty, Alacritty, WezTerm, Zsh, Powerlevel10k, fzf, tmux |
| 7 | **Performance** | 8 | CPU Governor, ZRAM, EarlyOOM, Preload, NVTop, NVIDIA tuning |
| 8 | **Gaming** | 11 | Steam, Lutris, Heroic, MangoHud, GameMode, Gamescope, Proton GE, Wine |
| 9 | **Graphics & Design** | 9 | Krita, GIMP, Inkscape, Blender, Kdenlive, Darktable |
| 10 | **Audio & Video** | 9 | MPV, VLC, Audacity, LMMS, PipeWire, Strawberry |
| 11 | **Network & VPN** | 10 | WireGuard, ProtonVPN, Wireshark, Nmap, Remmina, SSH/Mosh |
| 12 | **Security** | 11 | ClamAV, Lynis, Firejail, VeraCrypt, KeePassXC, Tor, Signal |
| 13 | **System Tools** | 15 | NetData, Cockpit, Timeshift, GParted, LibreOffice, Obsidian |
| 14 | **Desktop Shortcuts** | 10 | Ready-to-use .desktop entries for AI tools & utilities |
| 15 | **Script Generator** | 5 | NVIDIA, Wayland, Zsh, Backup, Systemd service scripts |
| 16 | **Anti-Gravity AI** | 12 | Gemini CLI, Claude Code, Codex CLI, Aider, ElevenLabs CLI |
| 17 | **GitHub Repos** | 22 | Curated AI/Dev repositories with clone commands |
| 18 | **Deep Web & Stores** | 8 | Flathub, Snap, AUR, AppImage sources |
| 19 | **System Integration** | — | systemd services, .desktop files, browser launcher |

> **200+ tools** with one-click install commands optimized for Manjaro/Arch Linux

---

## ⚡ Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Arch-based Linux distribution (Manjaro, EndeavourOS, CachyOS, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/batko15/linux-ai-tool-dashboard.git
cd linux-ai-tool-dashboard

# Install dependencies
bun install

# Start the development server
bun run dev
```

The dashboard will be available at `http://localhost:3000`

### Production Build

```bash
bun run build
bun run start
```

---

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript 5** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **shadcn/ui** | Component library (New York style) |
| **Framer Motion** | Smooth page transitions & animations |
| **Lucide React** | Icon system (150+ icons) |
| **Zustand** | Client-side state management |
| **TanStack Query** | Server state management |
| **Prisma** | Database ORM (SQLite) |
| **next-themes** | Dark/Light mode support |
| **Sonner** | Toast notifications |

---

## 📸 Screenshots

> 🖼️ Open the dashboard and explore all 19 interactive sections with smooth animations and responsive design.

### Dashboard Architecture

```
src/
├── app/
│   ├── page.tsx              # Main dashboard page
│   └── globals.css            # Global styles
├── components/
│   ├── dashboard/
│   │   ├── sidebar.tsx       # Collapsible sidebar with search
│   │   ├── tool-card.tsx      # Tool card with copy command
│   │   ├── command-block.tsx  # Script block component
│   │   ├── copy-button.tsx    # Copy-to-clipboard button
│   │   └── sections/          # 19 section components
│   │       ├── overview.tsx    # System specs
│   │       ├── ai.tsx         # AI/KI tools
│   │       ├── antigravity.tsx # Anti-Gravity CLI
│   │       ├── gaming.tsx     # Gaming tools
│   │       ├── performance.tsx # Performance tuning
│   │       └── ...            # + 15 more sections
│   └── ui/                    # shadcn/ui components
└── lib/
    └── dashboard-data.ts      # All tool data & system info
```

---

## 🖥️ Target System

This dashboard is optimized for the following hardware configuration:

| Component | Specification |
|-----------|---------------|
| **Distro** | BigCommunity Manjaro Linux 1.5.1 |
| **Kernel** | CachyOS 7.0.10-2 |
| **Desktop** | COSMIC 1.32.0 (Smithay X WM) |
| **CPU** | Intel Core i5-12400F (6C/12T, 3.3–4.4 GHz) |
| **GPU** | NVIDIA GeForce RTX 4070 (12 GB VRAM) |
| **RAM** | 32 GiB DDR4 |
| **Storage** | 953.87 GiB NVMe + 58.59 GiB HDD |
| **NVIDIA Driver** | 610.43.02 |
| **Display Server** | Wayland (X11 fallback via Smithay) |

> 📌 The dashboard works on **any** Linux system — the target specs shown are for the reference installation. All install commands are optimized for Arch-based distributions (Manjaro, EndeavourOS, Garuda, etc.)

---

## 🎨 Anti-Gravity AI v3.0

The Anti-Gravity module integrates cutting-edge AI CLI tools directly into your Linux workflow:

### AI CLI Agents (12 tools)
- **Gemini CLI** — Google AI with 1M+ token context window
- **Claude Code** — Anthropic's Claude with deep reasoning
- **Codex CLI** — OpenAI Codex (Rust-based, blazing fast)
- **Aider** — Local model integration with Git workflows
- **MCPBundles** — 700+ services for AI agents
- **ElevenLabs CLI** — TTS, STT, and voice cloning
- **Valyu CLI** — SEC filings, FRED, PubMed data access
- **Ollama** — Local LLM execution (Llama 3, Mistral, Phi-3)
- And more...

### Curated Repositories (22 repos)
- Multi-agent orchestration, SEO analysis, memory systems
- Proxy management, workflow automation, VS Code integration
- Each with one-click clone commands

### Local LLM Models
Pre-configured model recommendations:
| Model | Size | Best For |
|-------|------|----------|
| Llama 3 8B | 4.7 GB | General tasks |
| Mistral 7B | 4.1 GB | Fast responses |
| Phi-3 3.8B | 2.3 GB | Lightweight tasks |
| Code Llama 7B | 3.8 GB | Code generation |
| Gemma 2 9B | 5.5 GB | Latest & strongest |
| Qwen 2.5 7B | 4.4 GB | Multilingual |
| DeepSeek Coder 6.7B | 3.8 GB | Code specialist |

---

## 🛠️ Development

```bash
# Install dependencies
bun install

# Run development server (with logging)
bun run dev

# Run linter
bun run lint

# Database operations
bun run db:push      # Push schema
bun run db:generate # Generate Prisma client
```

---

## 🤝 Contributing

Contributions are welcome! This dashboard is designed to be extensible:

1. **Add a tool** — Edit `src/lib/dashboard-data.ts` and add a new entry to the appropriate array
2. **Add a section** — Create a new component in `src/components/dashboard/sections/` and register it in `src/app/page.tsx`
3. **Report bugs** — Open a [GitHub Issue](https://github.com/batko15/linux-ai-tool-dashboard/issues)

<details>
<summary>📖 Adding a New Tool</summary>

```typescript
// In src/lib/dashboard-data.ts, add to the appropriate array:

export const aiTools: Tool[] = [
  // ... existing tools
  {
    name: "Your Tool Name",
    description: "Brief description of the tool",
    installCmd: "yay -S your-tool-package",
    category: "Category Name",
    source: "yay", // pacman | yay | flatpak | git | pip | custom
    github: "https://github.com/user/repo",  // optional
    homepage: "https://tool-website.com",   // optional
  },
];
```

</details>

<details>
<summary>📖 Adding a New Section</summary>

```tsx
// 1. Create src/components/dashboard/sections/my-section.tsx
"use client";

export function MySection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-bold">My New Section</h2>
      </div>
      {/* Section content */}
    </div>
  );
}

// 2. Register in src/lib/dashboard-data.ts
export const sections: Section[] = [
  // ... existing sections
  { id: "my-section", label: "My Section", icon: "YourIcon" },
];

// 3. Import in src/app/page.tsx and add to sectionComponents
import { MySection } from "@/components/dashboard/sections/my-section";
// ...
const sectionComponents = {
  // ... existing
  "my-section": MySection,
};
```

</details>

---

## 📋 Key Highlights

- ✅ **200+ curated tools** across 19 categories
- ✅ **One-click install commands** for every tool
- ✅ **Copy-to-clipboard** functionality on all commands
- ✅ **Category filtering** within each section
- ✅ **GitHub/Homepage links** for every tool
- ✅ **Systemd service scripts** ready to deploy
- ✅ **NVIDIA GPU optimization** scripts included
- ✅ **Mobile responsive** with collapsible sidebar
- ✅ **Dark/Light mode** support
- ✅ **Smooth animations** via Framer Motion
- ✅ **Search** across all sections
- ✅ **MIT Licensed** — free to use and modify

---

<div align="center">

**Built with ❤️ for the Linux community**

**Manjaro Linux · NVIDIA RTX 4070 · Anti-Gravity AI v3.0**

[⭐ Star this repo](https://github.com/batko15/linux-ai-tool-dashboard) · [📋 Report Bug](https://github.com/batko15/linux-ai-tool-dashboard/issues) · [🍴 Fork](https://github.com/batko15/linux-ai-tool-dashboard/fork)

</div>
