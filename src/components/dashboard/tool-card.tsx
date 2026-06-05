"use client";

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
  "LLM Engine": "bg-blue-500/15 text-blue-400",
  "LLM GUI": "bg-cyan-500/15 text-cyan-400",
  "LLM Frontend": "bg-teal-500/15 text-teal-400",
  "Image Gen": "bg-pink-500/15 text-pink-400",
  "Speech": "bg-orange-500/15 text-orange-400",
  "RAG": "bg-yellow-500/15 text-yellow-400",
  "ML Framework": "bg-emerald-500/15 text-emerald-400",
};

export function ToolCard({ tool }: ToolCardProps) {
  const srcColor = sourceColors[tool.source] || sourceColors.custom;
  const catColor = categoryColors[tool.category] || "bg-muted text-muted-foreground";

  return (
    <Card className="bg-card/80 border-border/50 hover:border-border transition-all group">
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
        {tool.github && (
          <a
            href={tool.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-muted-foreground hover:text-foreground mt-2 inline-flex items-center gap-1 transition-colors"
          >
            GitHub →
          </a>
        )}
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
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}
