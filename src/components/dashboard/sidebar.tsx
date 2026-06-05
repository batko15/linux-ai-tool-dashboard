"use client";

import { useState, useEffect } from "react";
import { sections } from "@/lib/dashboard-data";
import {
  Monitor, LayoutDashboard, Palette, Brain, Code2, TerminalSquare,
  Gauge, Gamepad2, ImageIcon, Music, Wifi, Shield, Wrench, AppWindow, ScrollText,
  ChevronLeft, ChevronRight, Search, Command,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor, LayoutDashboard, Palette, Brain, Code2, TerminalSquare,
  Gauge, Gamepad2, ImageIcon, Music, Wifi, Shield, Wrench, AppWindow, ScrollText,
};

interface SidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = searchQuery
    ? sections.filter((s) => s.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : sections;

  return (
    <div
      className={`flex flex-col border-r border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 p-3 border-b border-border/50">
        {!collapsed && (
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
              <Command className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm font-bold truncate">Linux AI</h1>
              <p className="text-[10px] text-muted-foreground truncate">Tool Dashboard</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto">
            <Command className="h-4 w-4 text-white" />
          </div>
        )}
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="px-3 py-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 h-8 text-xs bg-muted/50 border-border/50"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2 py-1">
        <div className="space-y-0.5">
          {filteredSections.map((section) => {
            const Icon = iconMap[section.icon] || Monitor;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all duration-150 group ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent"
                } ${collapsed ? "justify-center px-2" : ""}`}
                title={collapsed ? section.label : undefined}
              >
                <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : ""}`} />
                {!collapsed && (
                  <span className="text-xs font-medium truncate">{section.label}</span>
                )}
              </button>
            );
          })}
        </div>
      </ScrollArea>

      {/* Collapse Toggle */}
      <div className="border-t border-border/50 p-2">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-center"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
        </Button>
      </div>
    </div>
  );
}
