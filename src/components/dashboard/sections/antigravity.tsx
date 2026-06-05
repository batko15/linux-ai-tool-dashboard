"use client";

import { ToolSection } from "../tool-card";
import { CommandBlock } from "../command-block";
import { antigravityCliTools } from "@/lib/dashboard-data";
import { Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const aiConfigSetup = `# AI Config Verzeichnis erstellen
mkdir -p ~/.config/antigravity

# API Config Datei erstellen
cat > ~/.config/antigravity/ai_config.env << 'EOF'
# === ANTI-GRAVITY AI CONFIG ===
# Trage hier deine API-Keys ein!

# Google Gemini
export GEMINI_API_KEY="your-gemini-key-here"

# OpenAI
export OPENAI_API_KEY="your-openai-key-here"

# Anthropic Claude
export ANTHROPIC_API_KEY="your-claude-key-here"

# ElevenLabs
export ELEVENLABS_API_KEY="your-elevenlabs-key-here"
EOF

# Config in Shell laden
echo 'source ~/.config/antigravity/ai_config.env' >> ~/.zshrc`;

const vibeConfig = `# Vibe Coding Konfiguration
mkdir -p ~/.config/vibe
cat > ~/.config/vibe/config.json << 'EOF'
{
  "providers": ["gemini", "claude", "codex", "ollama"],
  "auto_approve": true,
  "vision": true,
  "rag": true,
  "mcp": true,
  "skills": true,
  "workflows": true,
  "harness": true,
  "default_model": "claude-sonnet-4-20250514",
  "fallback_chain": ["claude", "gemini", "codex", "ollama"],
  "max_tokens": 8192,
  "temperature": 0.7
}
EOF`;

const shellAliases = `# Anti-Gravity Shell Aliases (50+)
cat >> ~/.zshrc << 'EOF'
# === AI TOOL ALIASES ===
alias ai-gemini="gemini"
alias ai-codex="codex"
alias ai-claude="claude"
alias ai-aider="aider"
alias ai-ollama="ollama"
alias ai-agy="antigravity-code"
alias vibe="vibe-coding"

# Skills & Agents
alias skills-list="ls ~/.agents/skills/"
alias skills-add="mkdir -p ~/.agents/skills"
alias agents-start="harness start"
alias workflows-list="oma list"
alias harness="antigravity-cli-harness"
alias oma="oh-my-antigravity status"

# MCP
alias mcp-list="ls ~/.config/mcp/servers/"
alias mcp-add="mcp add-server"

# Duplikate
alias dupes-find="jdupes -r"
alias dupes-clean="jdupes -r -N"
alias dupes-hardlink="jdupes -r -L"

# System
alias sys-top="btop"
alias sys-info="fastfetch"
alias sys-disk="ncdu"
alias sys-mon="glances"
alias sys-temp="sensors"

# Git
alias g="git"
alias gs="git status"
alias gl="git log --oneline"
alias gp="git push"
alias gpl="git pull"

# Docker
alias dc="docker compose"
alias d="docker"
alias dps="docker ps"
alias di="docker images"
alias dlogs="docker logs"

# Network
alias myip="curl -s ifconfig.me"
alias ports="ss -tlnp"
alias pingtest="ping -c 4 8.8.8.8"

# Quick Navigation
alias ..="cd .."
alias ...="cd ../.."
alias home="cd ~"
alias proj="cd ~/Projects"
alias repos="cd ~/Projects/antigravity-repos"
EOF`;

export function AntigravitySection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
          <Rocket className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Antigravity AI CLI</h2>
          <p className="text-sm text-muted-foreground">12 KI-Tools, Vibe Coding, MCP, Multi-Agent</p>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-emerald-500/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Rocket className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-emerald-400">Anti-Gravity CLI Mega System-Optimizer v3.0</h3>
              <p className="text-xs text-muted-foreground mt-1">12 AI CLI Tools, 22 GitHub Repos, 100+ essentielle CLI-Tools, Vibe Coding, Deep Web Search, Duplikat-Bereinigung, Shell-Integration</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <ToolSection title="12 AI CLI Tools" description="Gemini, Codex, Claude, Aider, Ollama + Multi-Agent" tools={antigravityCliTools} />
      
      <CommandBlock commands={aiConfigSetup} title="API-Keys konfigurieren" showDownload filename="ai-config-setup.sh" />
      <CommandBlock commands={vibeConfig} title="Vibe Coding Konfiguration" showDownload filename="vibe-config-setup.sh" />
      <CommandBlock commands={shellAliases} title="50+ Shell Aliases" showDownload filename="antigravity-aliases.sh" />
    </div>
  );
}
