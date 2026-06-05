"use client";

import { ToolSection } from "../tool-card";
import { devTools } from "@/lib/dashboard-data";
import { CommandBlock } from "../command-block";
import { Code2 } from "lucide-react";

const neovimSetup = `# Neovim mit Plug installieren
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \\
  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

# Grundkonfiguration
mkdir -p ~/.config/nvim
cat > ~/.config/nvim/init.vim << 'NEOVIM'
set number
set relativenumber
set tabstop=4
set shiftwidth=4
set expandtab
set termguicolors
set background=dark
colorscheme gruvbox
call plug#begin('~/.local/share/nvim/plugged')
Plug 'neovim/nvim-lspconfig'
Plug 'hrsh7th/nvim-cmp'
Plug 'nvim-treesitter/nvim-treesitter'
Plug 'kyazdani42/nvim-tree.lua'
Plug 'nvim-lualine/lualine.nvim'
call plug#end()
NEOVIM`;

export function DevSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center">
          <Code2 className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Development</h2>
          <p className="text-sm text-muted-foreground">IDEs, Editoren, Docker, Git, API-Tools</p>
        </div>
      </div>

      <ToolSection title="Entwicklungswerkzeuge" tools={devTools} />
      <CommandBlock commands={neovimSetup} title="Neovim Setup mit Plugins" />
    </div>
  );
}
