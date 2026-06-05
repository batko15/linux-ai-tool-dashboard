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
  Analysis: "bg-sky-500/15 text-sky-400",
  Office: "bg-orange-500/15 text-orange-400",
  PDF: "bg-rose-500/15 text-rose-400",
  Notes: "bg-emerald-500/15 text-emerald-400",
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
