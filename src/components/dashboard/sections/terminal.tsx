"use client";

import { ToolSection } from "../tool-card";
import { terminalTools } from "@/lib/dashboard-data";
import { CommandBlock } from "../command-block";
import { TerminalSquare } from "lucide-react";

const p10kSetup = `# Powerlevel10k installieren
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \\
  \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

# Theme in .zshrc setzen
sed -i 's/^ZSH_THEME=.*/ZSH_THEME="powerlevel10k\\/powerlevel10k"/' ~/.zshrc

# Powerlevel10k Konfigurator starten
p10k configure`;

const zshConfig = `# Oh-My-Zsh installieren
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# Aliase hinzufuegen
cat >> ~/.zshrc << 'EOF'
alias ls="eza -la --git --color=always"
alias cat="bat --style=plain"
alias update="sudo pacman -Syu && yay -Syu"
alias ai-start="ollama serve"
alias ai-chat="ollama run llama3:8b"
alias rr="ranger"
alias nv="nvim"
alias dg="lazydocker"
alias lg="lazygit"
EOF

source ~/.zshrc`;

export function TerminalSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <TerminalSquare className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Terminal & Shell</h2>
          <p className="text-sm text-muted-foreground">Kitty, Zsh, Powerlevel10k, Fzf, Tmux</p>
        </div>
      </div>

      <ToolSection title="Terminal, Shell & CLI Tools" tools={terminalTools} />
      <CommandBlock commands={zshConfig} title="Zsh + Oh-My-Zsh Setup" />
      <CommandBlock commands={p10kSetup} title="Powerlevel10k Installieren" />
    </div>
  );
}
