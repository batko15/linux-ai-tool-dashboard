"use client";

import { CopyButton, DownloadButton } from "./copy-button";

interface CommandBlockProps {
  commands: string;
  title?: string;
  showDownload?: boolean;
  filename?: string;
}

export function CommandBlock({ commands, title, showDownload = false, filename = "script.sh" }: CommandBlockProps) {
  return (
    <div className="relative group rounded-lg overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border border-border rounded-t-lg border-b-0">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
          <div className="flex gap-1">
            <CopyButton text={commands} />
            {showDownload && <DownloadButton content={`#!/bin/bash\n${commands}`} filename={filename} />}
          </div>
        </div>
      )}
      <div className="relative">
        {!title && (
          <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
            <CopyButton text={commands} />
            {showDownload && <DownloadButton content={`#!/bin/bash\n${commands}`} filename={filename} />}
          </div>
        )}
        <pre className="bg-[#1e1e2e] text-[#cdd6f4] p-4 rounded-lg text-xs font-mono overflow-x-auto leading-relaxed scrollbar-thin">
          <code>{commands}</code>
        </pre>
      </div>
    </div>
  );
}

interface MultiCommandBlockProps {
  commands: string[];
  title?: string;
  showDownload?: boolean;
  filename?: string;
}

export function MultiCommandBlock({ commands, title, showDownload = false, filename = "script.sh" }: MultiCommandBlockProps) {
  const fullScript = commands.join("\n");
  return (
    <div className="relative group rounded-lg overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border border-border rounded-t-lg border-b-0">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
          <div className="flex gap-1">
            <CopyButton text={fullScript} />
            {showDownload && <DownloadButton content={`#!/bin/bash\n${fullScript}\n`} filename={filename} />}
          </div>
        </div>
      )}
      <div className="relative">
        {!title && (
          <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
            <CopyButton text={fullScript} />
            {showDownload && <DownloadButton content={`#!/bin/bash\n${fullScript}\n`} filename={filename} />}
          </div>
        )}
        <pre className="bg-[#1e1e2e] text-[#cdd6f4] p-4 rounded-lg text-xs font-mono overflow-x-auto leading-relaxed max-h-96 overflow-y-auto scrollbar-thin">
          <code>{commands.map((line, i) => (
            <span key={i}>
              {line.startsWith("#") ? (
                <span className="text-[#6c7086] italic">{line}</span>
              ) : line.startsWith("echo") || line.startsWith("cat") || line.startsWith("sudo tee") ? (
                <span className="text-[#a6e3a1]">{line}</span>
              ) : line === "" ? (
                "\n"
              ) : (
                <span className="text-[#89b4fa]">{line}</span>
              )}
              {"\n"}
            </span>
          ))}</code>
        </pre>
      </div>
    </div>
  );
}
