"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "./copy-button";
import type { Tool } from "@/lib/dashboard-data";

interface ToolCardProps {
  tool: Tool;
}

const sourceColors: Record<string, string> = {
  pacman: "bg-green-500/20 text-green-400 border-green-500/30",
  yay: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  flatpak: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  git: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  pip: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  npm: "bg-red-500/20 text-red-400 border-red-500/30",
  cargo: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  custom: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};

const categoryColors: Record<string, string> = {
  "LLM Engine": "bg-teal-500/15 text-teal-400",
  "LLM GUI": "bg-cyan-500/15 text-cyan-400",
  "LLM Frontend": "bg-teal-500/15 text-teal-400",
  "Image Gen": "bg-pink-500/15 text-pink-400",
  "Speech": "bg-orange-500/15 text-orange-400",
  "RAG": "bg-yellow-500/15 text-yellow-400",
  "ML Framework": "bg-emerald-500/15 text-emerald-400",
  Desktop: "bg-violet-500/15 text-violet-400",
  "Window Manager": "bg-violet-500/15 text-violet-400",
  "KDE Plugin": "bg-violet-500/15 text-violet-400",
  "Display Manager": "bg-violet-500/15 text-violet-400",
  "Global Theme": "bg-pink-500/15 text-pink-400",
  Icons: "bg-amber-500/15 text-amber-400",
  Cursor: "bg-amber-500/15 text-amber-400",
  "Theme Engine": "bg-pink-500/15 text-pink-400",
  "Plasma Theme": "bg-pink-500/15 text-pink-400",
  "Login Theme": "bg-pink-500/15 text-pink-400",
  IDE: "bg-sky-500/15 text-sky-400",
  Editor: "bg-sky-500/15 text-sky-400",
  Database: "bg-sky-500/15 text-sky-400",
  Containers: "bg-teal-500/15 text-teal-400",
  Git: "bg-orange-500/15 text-orange-400",
  API: "bg-orange-500/15 text-orange-400",
  Terminal: "bg-green-500/15 text-green-400",
  Shell: "bg-green-500/15 text-green-400",
  "Shell Theme": "bg-green-500/15 text-green-400",
  "CLI Tool": "bg-green-500/15 text-green-400",
  "File Manager": "bg-amber-500/15 text-amber-400",
  Multiplexer: "bg-green-500/15 text-green-400",
  "System Info": "bg-violet-500/15 text-violet-400",
  CPU: "bg-orange-500/15 text-orange-400",
  Memory: "bg-amber-500/15 text-amber-400",
  Caching: "bg-sky-500/15 text-sky-400",
  "GPU Monitor": "bg-green-500/15 text-green-400",
  GPU: "bg-green-500/15 text-green-400",
  Storage: "bg-amber-500/15 text-amber-400",
  Launcher: "bg-rose-500/15 text-rose-400",
  Overlay: "bg-emerald-500/15 text-emerald-400",
  Performance: "bg-orange-500/15 text-orange-400",
  Compatibility: "bg-teal-500/15 text-teal-400",
  Recording: "bg-violet-500/15 text-violet-400",
  Painting: "bg-pink-500/15 text-pink-400",
  "Photo Editing": "bg-pink-500/15 text-pink-400",
  Vector: "bg-fuchsia-500/15 text-fuchsia-400",
  "3D": "bg-amber-500/15 text-amber-400",
  Video: "bg-violet-500/15 text-violet-400",
  RAW: "bg-amber-500/15 text-amber-400",
  DTP: "bg-rose-500/15 text-rose-400",
  "Video Player": "bg-violet-500/15 text-violet-400",
  "Audio Editor": "bg-cyan-500/15 text-cyan-400",
  DAW: "bg-teal-500/15 text-teal-400",
  "Music Player": "bg-pink-500/15 text-pink-400",
  "Audio Server": "bg-emerald-500/15 text-emerald-400",
  VPN: "bg-emerald-500/15 text-emerald-400",
  Analysis: "bg-sky-500/15 text-sky-400",
  Scanner: "bg-orange-500/15 text-orange-400",
  Remote: "bg-teal-500/15 text-teal-400",
  FTP: "bg-amber-500/15 text-amber-400",
  SSH: "bg-green-500/15 text-green-400",
  Cloud: "bg-sky-500/15 text-sky-400",
  Antivirus: "bg-green-500/15 text-green-400",
  Rootkit: "bg-red-500/15 text-red-400",
  Audit: "bg-orange-500/15 text-orange-400",
  Sandbox: "bg-amber-500/15 text-amber-400",
  MAC: "bg-violet-500/15 text-violet-400",
  Encryption: "bg-rose-500/15 text-rose-400",
  Passwords: "bg-amber-500/15 text-amber-400",
  Privacy: "bg-teal-500/15 text-teal-400",
  Messenger: "bg-sky-500/15 text-sky-400",
  Monitor: "bg-sky-500/15 text-sky-400",
  Management: "bg-violet-500/15 text-violet-400",
  Backup: "bg-emerald-500/15 text-emerald-400",
  Partition: "bg-amber-500/15 text-amber-400",
  Office: "bg-orange-500/15 text-orange-400",
  PDF: "bg-rose-500/15 text-rose-400",
  Notes: "bg-emerald-500/15 text-emerald-400",
  // Antigravity AI categories
  "Google AI": "bg-sky-500/15 text-sky-400",
  OpenAI: "bg-emerald-500/15 text-emerald-400",
  Anthropic: "bg-orange-500/15 text-orange-400",
  "Multi-Model": "bg-violet-500/15 text-violet-400",
  MCP: "bg-pink-500/15 text-pink-400",
  Data: "bg-cyan-500/15 text-cyan-400",
  Voice: "bg-rose-500/15 text-rose-400",
  "Multi-Provider": "bg-amber-500/15 text-amber-400",
  Agent: "bg-teal-500/15 text-teal-400",
  Workflows: "bg-fuchsia-500/15 text-fuchsia-400",
  // Deep Web categories
  Search: "bg-emerald-500/15 text-emerald-400",
  Scraper: "bg-amber-500/15 text-amber-400",
  Parser: "bg-yellow-500/15 text-yellow-400",
  Automation: "bg-violet-500/15 text-violet-400",
  Archive: "bg-sky-500/15 text-sky-400",
  GitHub: "bg-violet-500/15 text-violet-400",
  HTTP: "bg-cyan-500/15 text-cyan-400",
  "Version Manager": "bg-rose-500/15 text-rose-400",
  Cleaner: "bg-red-500/15 text-red-400",
  // Essential CLI categories
  "File View": "bg-green-500/15 text-green-400",
  Navigation: "bg-teal-500/15 text-teal-400",
  Prompt: "bg-pink-500/15 text-pink-400",
  Benchmark: "bg-orange-500/15 text-orange-400",
  Network: "bg-cyan-500/15 text-cyan-400",
  Docs: "bg-amber-500/15 text-amber-400",
  Environment: "bg-sky-500/15 text-sky-400",
  Markdown: "bg-violet-500/15 text-violet-400",
  Disk: "bg-amber-500/15 text-amber-400",
  System: "bg-slate-500/15 text-slate-400",
  // Browser categories
  Browser: "bg-sky-500/15 text-sky-400",
  Extension: "bg-violet-500/15 text-violet-400",
  // Wayland categories
  Bar: "bg-cyan-500/15 text-cyan-400",
  Launcher: "bg-sky-500/15 text-sky-400",
  Notifications: "bg-amber-500/15 text-amber-400",
  Screenshot: "bg-pink-500/15 text-pink-400",
  Lockscreen: "bg-violet-500/15 text-violet-400",
  Recording: "bg-rose-500/15 text-rose-400",
  Clipboard: "bg-green-500/15 text-green-400",
  Widgets: "bg-fuchsia-500/15 text-fuchsia-400",
  Utility: "bg-teal-500/15 text-teal-400",
  Theme: "bg-pink-500/15 text-pink-400",
  Wallpaper: "bg-amber-500/15 text-amber-400",
  // Self-Hosted categories
  Photos: "bg-pink-500/15 text-pink-400",
  Media: "bg-violet-500/15 text-violet-400",
  "Smart Home": "bg-emerald-500/15 text-emerald-400",
  Documents: "bg-amber-500/15 text-amber-400",
  Recipes: "bg-orange-500/15 text-orange-400",
  Bookmarks: "bg-sky-500/15 text-sky-400",
  Files: "bg-cyan-500/15 text-cyan-400",
  // DevOps categories
  Kubernetes: "bg-sky-500/15 text-sky-400",
  VM: "bg-amber-500/15 text-amber-400",
  Infrastructure: "bg-violet-500/15 text-violet-400",
  GitOps: "bg-emerald-500/15 text-emerald-400",
  "Reverse Proxy": "bg-orange-500/15 text-orange-400",
  "Web Server": "bg-teal-500/15 text-teal-400",
  // Privacy categories
  DNS: "bg-cyan-500/15 text-cyan-400",
  Identity: "bg-amber-500/15 text-amber-400",
  Proxy: "bg-violet-500/15 text-violet-400",
  Isolation: "bg-rose-500/15 text-rose-400",
  Tor: "bg-purple-500/15 text-purple-400",
  // New AI categories
  "LLM Server": "bg-teal-500/15 text-teal-400",
  "Model Hub": "bg-sky-500/15 text-sky-400",
  TTS: "bg-rose-500/15 text-rose-400",
  Framework: "bg-emerald-500/15 text-emerald-400",
  "Fine-Tuning": "bg-orange-500/15 text-orange-400",
  // New Dev categories
  Automation: "bg-violet-500/15 text-violet-400",
  Diff: "bg-sky-500/15 text-sky-400",
  // New Gaming categories
  "Steam Plugin": "bg-emerald-500/15 text-emerald-400",
  Chat: "bg-sky-500/15 text-sky-400",
  // New Graphics categories
  Viewer: "bg-cyan-500/15 text-cyan-400",
  Panorama: "bg-amber-500/15 text-amber-400",
  Fonts: "bg-fuchsia-500/15 text-fuchsia-400",
  Animation: "bg-pink-500/15 text-pink-400",
  Compositing: "bg-violet-500/15 text-violet-400",
  "Photo Manager": "bg-emerald-500/15 text-emerald-400",
  // New Media categories
  Streaming: "bg-rose-500/15 text-rose-400",
  Music: "bg-pink-500/15 text-pink-400",
  DJ: "bg-amber-500/15 text-amber-400",
  "Audio Synth": "bg-teal-500/15 text-teal-400",
  "Audio Routing": "bg-cyan-500/15 text-cyan-400",
  "Audio FX": "bg-orange-500/15 text-orange-400",
  // New Network categories
  Diagnostics: "bg-sky-500/15 text-sky-400",
  Speed: "bg-emerald-500/15 text-emerald-400",
  Torrent: "bg-amber-500/15 text-amber-400",
  WiFi: "bg-cyan-500/15 text-cyan-400",
  Tunnel: "bg-violet-500/15 text-violet-400",
  // New Security categories
  "Live OS": "bg-red-500/15 text-red-400",
  Scanner: "bg-orange-500/15 text-orange-400",
  FIM: "bg-rose-500/15 text-rose-400",
  Firewall: "bg-red-500/15 text-red-400",
  IPS: "bg-amber-500/15 text-amber-400",
  "2FA": "bg-cyan-500/15 text-cyan-400",
  // New System categories
  Logs: "bg-amber-500/15 text-amber-400",
  Optimizer: "bg-sky-500/15 text-sky-400",
  Cleaner: "bg-green-500/15 text-green-400",
  // Performance
  Gaming: "bg-red-500/15 text-red-400",
  Thermal: "bg-orange-500/15 text-orange-400",
  Power: "bg-amber-500/15 text-amber-400",
  "I/O": "bg-cyan-500/15 text-cyan-400",
  // Shell
  "Shell Tool": "bg-green-500/15 text-green-400",
  // AI IDE categories
  "IDE AI": "bg-teal-500/15 text-teal-400",
  "Developer AI": "bg-sky-500/15 text-sky-400",
};

export function ToolCard({ tool }: ToolCardProps) {
  const srcColor = sourceColors[tool.source] || sourceColors.custom;
  const catColor = categoryColors[tool.category] || "bg-muted text-muted-foreground";

  return (
    <Card className="bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-200 group">
      <CardHeader className="pb-2 px-4 pt-4">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-semibold">{tool.name}</CardTitle>
          <div className="flex gap-1.5 shrink-0">
            <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${srcColor}`}>
              {tool.source}
            </Badge>
            <Badge variant="secondary" className={`text-[10px] px-1.5 py-0 ${catColor}`}>
              {tool.category}
            </Badge>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
      </CardHeader>
      <CardContent className="px-4 pb-3">
        <div className="flex items-end justify-between gap-2">
          <pre className="bg-[#1e1e2e] text-[#89b4fa] text-[11px] font-mono p-2.5 rounded-md overflow-x-auto flex-1 leading-relaxed">
            {tool.installCmd}
          </pre>
          <CopyButton text={tool.installCmd} />
        </div>
        <div className="flex items-center gap-3 mt-2">
          {tool.github && (
            <a
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-muted-foreground hover:text-primary mt-0 inline-flex items-center gap-1 transition-colors"
            >
              GitHub &rarr;
            </a>
          )}
          {tool.homepage && (
            <a
              href={tool.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-muted-foreground hover:text-primary mt-0 inline-flex items-center gap-1 transition-colors"
            >
              Homepage &rarr;
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface ToolSectionProps {
  title: string;
  description?: string;
  tools: Tool[];
}

export function ToolSection({ title, description, tools }: ToolSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Extract unique categories
  const categories = Array.from(new Set(tools.map((t) => t.category)));

  const filteredTools =
    activeCategory === "all"
      ? tools
      : tools.filter((t) => t.category === activeCategory);

  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>

      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-150 ${
              activeCategory === "all"
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-muted/50 text-muted-foreground border border-transparent hover:bg-muted"
            }`}
          >
            Alle ({tools.length})
          </button>
          {categories.map((cat) => {
            const count = tools.filter((t) => t.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "bg-muted/50 text-muted-foreground border border-transparent hover:bg-muted"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}
