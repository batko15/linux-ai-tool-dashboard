"use client";

import { useState, useCallback } from "react";
import { Check, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

export function CopyButton({ text, className, variant = "ghost", size = "icon" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("In Zwischenablage kopiert!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Kopieren fehlgeschlagen");
    }
  }, [text]);

  return (
    <Button variant={variant} size={size} onClick={handleCopy} className={className}>
      {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
    </Button>
  );
}

interface DownloadButtonProps {
  content: string;
  filename: string;
  className?: string;
}

export function DownloadButton({ content, filename, className }: DownloadButtonProps) {
  const handleDownload = useCallback(() => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`${filename} heruntergeladen!`);
  }, [content, filename]);

  return (
    <Button variant="ghost" size="icon" onClick={handleDownload} className={className}>
      <Download className="h-3.5 w-3.5" />
    </Button>
  );
}
