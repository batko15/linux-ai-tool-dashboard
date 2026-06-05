"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyButton } from "../copy-button";
import { githubRepos } from "@/lib/dashboard-data";
import { GitBranch, Download, ExternalLink, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const cloneAllScript = `# Alle 22 Repositories klonen
mkdir -p ~/Projects/antigravity-repos
cd ~/Projects/antigravity-repos

# Repos klonen
${githubRepos.map(r => `git clone ${r.url} ${r.name} 2>/dev/null || echo "Skip: ${r.name}"`).join('\n')}

echo "=== Alle Repos geklont ==="`;

export function ReposSection() {
  const allCategories = Array.from(new Set(githubRepos.map(r => r.category)));
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
          <GitBranch className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">22 GitHub Repositories</h2>
          <p className="text-sm text-muted-foreground">Antigravity-Research: Agents, Workflows, Skills, IDEs</p>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-500/30">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <GitBranch className="h-5 w-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-violet-400">Alle Repos auf einmal klonen</h3>
                <p className="text-xs text-muted-foreground mt-1">Klont alle 22 Repos nach ~/Projects/antigravity-repos/</p>
              </div>
            </div>
            <CopyButton text={cloneAllScript} />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-1.5">
        {allCategories.map(cat => (
          <Badge key={cat} variant="secondary" className="text-[10px]">{cat}</Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto">
        {githubRepos.map((repo) => (
          <Card key={repo.name} className="bg-card/80 border-border/50 group hover:border-primary/30 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xs font-mono font-semibold text-emerald-400 truncate">{repo.name}</h4>
                    <Badge variant="outline" className="text-[9px] px-1 py-0 shrink-0">{repo.category}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{repo.description}</p>
                  <pre className="bg-[#1e1e2e] text-[#89b4fa] text-[10px] font-mono p-1.5 rounded truncate">
                    git clone {repo.url}
                  </pre>
                </div>
                <div className="flex flex-col gap-1 shrink-0">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
