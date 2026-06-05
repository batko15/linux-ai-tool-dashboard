"use client";

import { ToolSection } from "../tool-card";
import { aiTools, ollamaModels } from "@/lib/dashboard-data";
import { CommandBlock } from "../command-block";
import { Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ollamaModelsCmd = `ollama pull llama3:8b
ollama pull mistral:7b
ollama pull phi3:3.8b
ollama pull codellama:7b
ollama pull gemma2:9b
ollama pull qwen2.5:7b
ollama pull deepseek-coder:6.7b`;

const ollamaRunCmd = `export OLLAMA_GPU=1
ollama serve &
ollama run llama3:8b`;

const sdSetup = `cd ~/stable-diffusion-webui
./webui.sh --xformers --medvram --opt-sdp-attention --listen --port 7860
# Browser: http://localhost:7860`;

export function AISection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold">AI / KI Tools</h2>
          <p className="text-sm text-muted-foreground">Ollama, Stable Diffusion, ComfyUI, KoboldCPP</p>
        </div>
      </div>

      <ToolSection title="AI & KI Werkzeuge" tools={aiTools} />

      <Card className="bg-card/80 border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold">Ollama Modelle (RTX 4070 12GB)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {ollamaModels.map((m) => (
              <div key={m.name} className="flex items-center justify-between p-2.5 rounded-md bg-muted/50 border border-border/50">
                <div>
                  <p className="text-xs font-mono font-medium">{m.name}</p>
                  <p className="text-[10px] text-muted-foreground">{m.description}</p>
                </div>
                <span className="text-[10px] text-muted-foreground shrink-0">{m.size}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <CommandBlock commands={ollamaModelsCmd} title="Ollama Modelle herunterladen" />
      <CommandBlock commands={ollamaRunCmd} title="Ollama Chat starten" />
      <CommandBlock commands={sdSetup} title="Stable Diffusion WebUI starten (GPU)" />
    </div>
  );
}
