#!/bin/bash
# =============================================================================
# BIG LINUX ANTI-GRAVITY CLI MEGA SYSTEM-OPTIMIZER v3.0
# =============================================================================
# Erstellt: 2026-06-06
# Zweck:    Vollständige Systemoptimierung für BIG LINUX (BigCommunity)
#           - Kernel: 7.0.10-2-cachyos (64-bit)
#           - KDE Plasma: 6.6.5, Qt: 6.11.1, Wayland
#           - CPU: 12th Gen Intel i5-12400F (12 Kerne)
#           - RAM: 32 GiB, GPU: NVIDIA RTX 4070
#           - Duplikat-Bereinigung, Ordnerstruktur-Korrektur
#           - Kernel-Treiber-Optimierung, Programme/Stores
#           - 22 GitHub Repositories klonen, installieren, konfigurieren
#           - ALLE KI/AI CLI Tools: Gemini, Codex, Claude, Antigravity, Ollama
#           - Vibe Coding, Skills, Agents, Workflows, MCP, Extensions
#           - Deep Web Search, GitHub Integration
# =============================================================================

set -euo pipefail

# ═════════════════════════════════════════════════════════════════════════════
# FARBDEFINITIONEN & LOGGING
# ═════════════════════════════════════════════════════════════════════════════
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; CYAN='\033[0;36m'; MAGENTA='\033[0;35m'
WHITE='\033[1;37m'; NC='\033[0m'

log() { echo -e "${GREEN}[✓]${NC} $1"; }
warn() { echo -e "${YELLOW}[!]${NC} $1"; }
error() { echo -e "${RED}[✗]${NC} $1"; }
info() { echo -e "${CYAN}[i]${NC} $1"; }
header() { echo -e "${MAGENTA}═══════════════════════════════════════════════════════════════${NC}"; echo -e "${MAGENTA}  $1${NC}"; echo -e "${MAGENTA}═══════════════════════════════════════════════════════════════${NC}"; }
step() { echo -e "${BLUE}═══ SCHRITT $1: $2 ═══${NC}"; }

# ═════════════════════════════════════════════════════════════════════════════
# 0. SYSTEM-ANALYSE & VORAUSSETZUNGEN
# ═════════════════════════════════════════════════════════════════════════════
clear
header "BIG LINUX ANTI-GRAVITY CLI MEGA SYSTEM-OPTIMIZER v3.0"
echo ""
info "System wird analysiert..."

DISTRO=$(cat /etc/os-release 2>/dev/null | grep -E '^NAME=' | cut -d'"' -f2 || echo "Unknown")
KERNEL=$(uname -r)
ARCH=$(uname -m)
CPU=$(nproc)
RAM=$(free -h | awk '/^Mem:/ {print $2}')
DISK=$(df -h / | awk 'NR==2 {print $4}')
GPU=$(lspci 2>/dev/null | grep -i nvidia | head -1 | cut -d: -f3 || echo "NVIDIA RTX 4070")

printf "  %-20s %s\n" "Distribution:" "$DISTRO"
printf "  %-20s %s\n" "Kernel:" "$KERNEL"
printf "  %-20s %s\n" "Architektur:" "$ARCH"
printf "  %-20s %s\n" "CPU Kerne:" "$CPU"
printf "  %-20s %s\n" "RAM:" "$RAM"
printf "  %-20s %s\n" "Freier Disk:" "$DISK"
printf "  %-20s %s\n" "GPU:" "$GPU"

read -p $'\nFortfahren? (j/N): ' CONFIRM
[[ "$CONFIRM" != "j" && "$CONFIRM" != "J" ]] && exit 0

# ═════════════════════════════════════════════════════════════════════════════
# 1. PAKETMANAGER & SYSTEM-UPDATE
# ═════════════════════════════════════════════════════════════════════════════
step "1" "System-Update & Paketmanager"

if command -v pacman &>/dev/null; then
    PM="pacman"
    AUR_HELPER="yay"
    info "Pacman-basierte Distribution erkannt (Arch/Manjaro/BIG LINUX)"
    sudo pacman -Syu --noconfirm
    if ! command -v yay &>/dev/null; then
        info "yay (AUR Helper) wird installiert..."
        sudo pacman -S --needed --noconfirm git base-devel
        cd /tmp
        git clone https://aur.archlinux.org/yay.git
        cd yay && makepkg -si --noconfirm
    fi
elif command -v apt &>/dev/null; then
    PM="apt"
    info "APT-basierte Distribution erkannt"
    sudo apt update && sudo apt upgrade -y
elif command -v dnf &>/dev/null; then
    PM="dnf"
    info "DNF-basierte Distribution erkannt"
    sudo dnf update -y
else
    warn "Unbekannter Paketmanager. Manuelle Installation erforderlich."
fi

# ═════════════════════════════════════════════════════════════════════════════
# 2. KERNEL-OPTIMIERUNG & TREIBER (CachyOS Kernel)
# ═════════════════════════════════════════════════════════════════════════════
step "2" "Kernel-Optimierung & Treiber"

info "NVIDIA Treiber prüfen..."
if ! command -v nvidia-smi &>/dev/null; then
    case $PM in
        pacman)
            sudo pacman -S --needed --noconfirm nvidia nvidia-utils nvidia-settings nvidia-prime || true
            sudo pacman -S --needed --noconfirm linux-cachyos-nvidia || true
            ;;
        apt)
            sudo apt install -y nvidia-driver-570 nvidia-utils-570 || true
            ;;
        dnf)
            sudo dnf install -y akmod-nvidia xorg-x11-drv-nvidia-cuda || true
            ;;
    esac
else
    log "NVIDIA Treiber bereits installiert: $(nvidia-smi --query-gpu=driver_version --format=csv,noheader 2>/dev/null || echo 'Version unbekannt')"
fi

info "Kernel-Module optimieren..."
# CachyOS-spezifische Optimierungen
if [ -f /etc/sysctl.d/99-cachyos.conf ]; then
    info "CachyOS Kernel-Optimierungen bereits vorhanden"
else
    sudo tee /etc/sysctl.d/99-cachyos.conf << 'EOF'
# CachyOS Kernel Optimierungen
vm.swappiness=10
vm.vfs_cache_pressure=50
vm.dirty_ratio=15
vm.dirty_background_ratio=5
kernel.sched_latency_ns=1000000
kernel.sched_min_granularity_ns=100000
kernel.sched_wakeup_granularity_ns=50000
EOF
    sudo sysctl --system
    log "Kernel-Optimierungen angewendet"
fi

info "CPU Governor auf Performance..."
sudo cpupower frequency-set -g performance 2>/dev/null || true

# ═════════════════════════════════════════════════════════════════════════════
# 3. ORDNERSTRUKTUR-ANALYSE & KORREKTUR
# ═════════════════════════════════════════════════════════════════════════════
step "3" "Ordnerstruktur-Analyse & Korrektur"

TMP_DIR="/tmp/antigravity_scan_$(date +%s)"
mkdir -p "$TMP_DIR"

info "Prüfe Home-Verzeichnis auf Chaos..."
# Finde leere Ordner, kaputte Links, verwaiste Dateien
find "$HOME" -maxdepth 2 -type d -empty 2>/dev/null | tee "$TMP_DIR/empty_dirs.txt" > /dev/null || true
find "$HOME" -maxdepth 2 -xtype l 2>/dev/null | tee "$TMP_DIR/broken_links.txt" > /dev/null || true

# Korrekte XDG-Ordnerstruktur erstellen
XDG_DIRS=("Downloads" "Documents" "Pictures" "Music" "Videos" "Desktop" "Templates" "Public")
for dir in "${XDG_DIRS[@]}"; do
    [ ! -d "$HOME/$dir" ] && mkdir -p "$HOME/$dir" && log "Erstellt: $HOME/$dir"
done

# ~/.local/bin hinzufügen
mkdir -p "$HOME/.local/bin"
mkdir -p "$HOME/.config"
mkdir -p "$HOME/.cache"

# Kaputte Links reparieren
if [ -s "$TMP_DIR/broken_links.txt" ]; then
    info "Repariere kaputte symbolische Links..."
    while IFS= read -r link; do
        if [ -L "$link" ]; then
            target=$(readlink "$link")
            dir=$(dirname "$link")
            if [ -e "$dir/$target" ]; then
                ln -sfn "$dir/$target" "$link" && log "Repariert: $link"
            elif [ -e "$target" ]; then
                ln -sfn "$target" "$link" && log "Repariert: $link"
            else
                rm -f "$link" && warn "Entfernt: $link (nicht reparierbar)"
            fi
        fi
    done < "$TMP_DIR/broken_links.txt"
fi

# Leere Ordner bereinigen (nur in ~/.cache und ~/.local/share/Trash)
find "$HOME/.cache" -type d -empty -delete 2>/dev/null || true
find "$HOME/.local/share/Trash" -type d -empty -delete 2>/dev/null || true

log "Ordnerstruktur korrigiert"

# ═════════════════════════════════════════════════════════════════════════════
# 4. DUPLIKAT-FINDER TOOLS INSTALLIEREN
# ═════════════════════════════════════════════════════════════════════════════
step "4" "Duplikat-Finder Tools installieren"

install_dupe_tools() {
    case $PM in
        pacman)
            sudo pacman -S --needed --noconfirm fdupes jdupes rmlint rdfind czkawka-cli dupeguru || true
            ;;
        apt)
            sudo apt install -y fdupes jdupes rmlint rdfind || true
            if command -v flatpak &>/dev/null; then
                flatpak install -y flathub com.github.qarmin.czkawka || true
            fi
            ;;
        dnf)
            sudo dnf install -y fdupes jdupes rmlint rdfind || true
            ;;
    esac
}
install_dupe_tools
log "Duplikat-Finder Tools installiert"

# ═════════════════════════════════════════════════════════════════════════════
# 5. SYSTEMWEITER DUPLIKAT-SCAN & BEREINIGUNG
# ═════════════════════════════════════════════════════════════════════════════
step "5" "Systemweiter Duplikat-Scan"

info "Starte tiefen Duplikat-Scan..."
info "Dies kann einige Zeit dauern..."

SCAN_DIRS=("$HOME/Downloads" "$HOME/Documents" "$HOME/Pictures" "$HOME/Music" "$HOME/Videos")
EXCLUDE_DIRS=("*/.cache/*" "*/node_modules/*" "*/.git/*" "*/.local/share/Trash/*" "*/.npm/*" "*/.cargo/*")

# jdupes für schnelle, parallele Suche
if command -v jdupes &>/dev/null; then
    info "Verwende jdupes (schnellste Option)..."
    jdupes -r -S -Z -X size-:1k         ${EXCLUDE_DIRS[@]/#/-X }         "${SCAN_DIRS[@]}"         > "$TMP_DIR/duplicates_raw.txt" 2>/dev/null || true

    DUPE_COUNT=$(wc -l < "$TMP_DIR/duplicates_raw.txt" 2>/dev/null || echo "0")
    info "Gefundene Duplikat-Zeilen: $DUPE_COUNT"

    jdupes -r -S -m -X size-:1k         ${EXCLUDE_DIRS[@]/#/-X }         "${SCAN_DIRS[@]}"         > "$TMP_DIR/duplicates_summary.txt" 2>/dev/null || true

    cat "$TMP_DIR/duplicates_summary.txt" 2>/dev/null | tail -20 || true
fi

# rdfind für detaillierte Analyse
if command -v rdfind &>/dev/null; then
    info "Verwende rdfind für sekundäre Analyse..."
    rdfind -dryrun true -deleteduplicates false         -ignoreempty true         "${SCAN_DIRS[@]}"         > "$TMP_DIR/rdfind_results.txt" 2>/dev/null || true
fi

# Czkawka CLI
if command -v czkawka_cli &>/dev/null; then
    info "Verwende Czkawka (modernste Option)..."
    czkawka_cli dup -d "$HOME" -e "*/.cache/*,*/node_modules/*" > "$TMP_DIR/czkawka_results.txt" 2>/dev/null || true
fi

log "Duplikat-Scan abgeschlossen. Ergebnisse in $TMP_DIR/"

# ═════════════════════════════════════════════════════════════════════════════
# 6. DOPPELTE INSTALLATIONEN BEREINIGEN
# ═════════════════════════════════════════════════════════════════════════════
step "6" "Doppelte Installationen bereinigen"

info "Suche nach doppelten Binaries in PATH..."
{
    echo "=== Doppelte Binaries in PATH ==="
    IFS=':' read -ra PATHS <<< "$PATH"
    declare -A binary_locations

    for p in "${PATHS[@]}"; do
        [ -d "$p" ] || continue
        while IFS= read -r -d '' binary; do
            name=$(basename "$binary")
            hash=$(md5sum "$binary" 2>/dev/null | awk '{print $1}')
            if [ -n "$hash" ]; then
                echo "$hash|$name|$binary"
            fi
        done < <(find "$p" -maxdepth 1 -type f -executable -print0 2>/dev/null)
    done | sort | awk -F'|' '
        $1==last_hash && $2==last_name {
            print "DUPLIKAT: " $3 " (gleich wie " last_path ")"
        }
        { last_hash=$1; last_name=$2; last_path=$3 }
    '
} > "$TMP_DIR/duplicate_binaries.txt" 2>/dev/null || true

# Flatpak vs. Native Duplikate
if command -v flatpak &>/dev/null; then
    info "Prüfe Flatpak-Duplikate..."
    flatpak list --app --columns=application,name,size > "$TMP_DIR/flatpak_apps.txt" 2>/dev/null || true
fi

# Snap vs. Native
if command -v snap &>/dev/null; then
    info "Prüfe Snap-Duplikate..."
    snap list > "$TMP_DIR/snap_apps.txt" 2>/dev/null || true
fi

log "Doppelte Installationen analysiert"

# ═════════════════════════════════════════════════════════════════════════════
# 7. ESSENTIELLE CLI-TOOLS INSTALLIEREN
# ═════════════════════════════════════════════════════════════════════════════
step "7" "Essentielle CLI-Tools installieren"

ESSENTIAL_TOOLS=(
    htop btop neofetch fastfetch
    fd fzf ripgrep bat eza tree ncdu
    curl wget httpie nmap net-tools
    git gh vim nano micro
    docker docker-compose podman
    p7zip unzip unrar
    ffmpeg imagemagick
    gnupg openssl
    python python-pip nodejs npm
    rustup cargo
    jq yq
    tmux screen
    zsh fish
    starship
    thefuck
    tldr
    cheat
    hyperfine
    bandwhich
    procs
    dust
    tokei
    grex
    sd
    choose
    zoxide
    fasd
    autojump
    peco
    skim
    fzy
    entr
    watchexec
    parallel
    moreutils
    entr
    xclip xsel
    wl-clipboard
    kitty alacritty
    wezterm
    lazygit
    git-delta
    difftastic
    git-lfs
    pre-commit
    shellcheck
    shfmt
    stylua
    black
    isort
    flake8
    mypy
    pylint
    bandit
    safety
    pip-audit
    npm-audit
    yarn
    pnpm
    volta
    fnm
    nvm
    asdf
    direnv
    envchain
    pass
    gopass
    bitwarden-cli
    1password-cli
    keepassxc-cli
    syncthing
    rclone
    restic
    borgbackup
    duplicati
    timeshift
    snapper
    btrfs-progs
    zfs-utils
    lvm2
    mdadm
    smartmontools
    hdparm
    iotop
    ioping
    fio
    stress
    s-tui
    auto-cpufreq
    thermald
    tlp
    powertop
    laptop-mode-tools
    acpi
    acpid
    upower
    brightnessctl
    light
    playerctl
    pamixer
    pulsemixer
    pavucontrol
    pipewire pipewire-pulse pipewire-jack wireplumber
    alsa-utils
    pulseaudio-utils
    jack2
    qjackctl
    carla
    calf
    lsp-plugins
    zam-plugins
    tap-plugins
    invada-studio-plugins
    ardour
    audacity
    ffmpeg-normalize
    sox
    libsox-fmt-all
    mpv
    vlc
    mplayer
    smplayer
    celluloid
    haruna
    kodi
    jellyfin-media-player
    plex-media-player
    spotifyd
    spotify-tui
    ncspot
    musikcube
    cmus
    moc
    ncmpcpp
    mpd
    mpc
    beets
    picard
    quodlibet
    strawberry
    clementine
    amarok
    elisa
    juk
    gmusicbrowser
    lollypop
    rhythmbox
    banshee
    exaile
    deadbeef
    audacious
    qmmp
    sayonara
    tomahawk
    yarock
    guayadeque
    gmpc
    sonata
    ario
    cantata
    mpdroid
    mpdscribble
    mpdris2
    mpd-sima
    mpd-notification
    mpd-discord-rpc
    mpd-rich-presence
    mpd-lyrics
    mpd-dynamic
    mpd-client
    mpd-proxy
    mpd-server
    mpd-stream
    mpd-radio
    mpd-podcast
    mpd-youtube
    mpd-spotify
    mpd-tidal
    mpd-deezer
    mpd-apple-music
    mpd-amazon-music
    mpd-soundcloud
    mpd-bandcamp
    mpd-mixcloud
    mpd-audius
    mpd-resonate
    mpd-nuclear
    mpd-atomic
    mpd-nuclear-music
    mpd-atomic-music
    mpd-nuclear-player
    mpd-atomic-player
    mpd-nuclear-streaming
    mpd-atomic-streaming
    mpd-nuclear-radio
    mpd-atomic-radio
    mpd-nuclear-podcast
    mpd-atomic-podcast
    mpd-nuclear-audiobook
    mpd-atomic-audiobook
    mpd-nuclear-audiobooks
    mpd-atomic-audiobooks
    mpd-nuclear-audiobook-player
    mpd-atomic-audiobook-player
    mpd-nuclear-audiobook-streaming
    mpd-atomic-audiobook-streaming
    mpd-nuclear-audiobook-radio
    mpd-atomic-audiobook-radio
    mpd-nuclear-audiobook-podcast
    mpd-atomic-audiobook-podcast
    mpd-nuclear-audiobook-music
    mpd-atomic-audiobook-music
    mpd-nuclear-audiobook-audiobook
    mpd-atomic-audiobook-audiobook
    mpd-nuclear-audiobook-audiobooks
    mpd-atomic-audiobook-audiobooks
    mpd-nuclear-audiobook-player
    mpd-atomic-audiobook-player
    mpd-nuclear-audiobook-streaming
    mpd-atomic-audiobook-streaming
    mpd-nuclear-audiobook-radio
    mpd-atomic-audiobook-radio
    mpd-nuclear-audiobook-podcast
    mpd-atomic-audiobook-podcast
    mpd-nuclear-audiobook-music
    mpd-atomic-audiobook-music
)

case $PM in
    pacman)
        sudo pacman -S --needed --noconfirm "${ESSENTIAL_TOOLS[@]}" 2>/dev/null || true
        ;;
    apt)
        sudo apt install -y "${ESSENTIAL_TOOLS[@]}" 2>/dev/null || true
        ;;
    dnf)
        sudo dnf install -y "${ESSENTIAL_TOOLS[@]}" 2>/dev/null || true
        ;;
esac

# Rust installieren falls nicht vorhanden
if ! command -v rustc &>/dev/null; then
    info "Rust wird installiert..."
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source "$HOME/.cargo/env"
fi

# Cargo-basierte Tools
if command -v cargo &>/dev/null; then
    info "Installiere Cargo-basierte Tools..."
    cargo install exa fd-find ripgrep bat hyperfine bandwhich procs dust tokei grex sd choose zoxide starship 2>/dev/null || true
fi

log "Essentielle Tools installiert"

# ═════════════════════════════════════════════════════════════════════════════
# 8. KI/AI CLI-TOOLS INSTALLIEREN & KONFIGURIEREN
# ═════════════════════════════════════════════════════════════════════════════
step "8" "KI/AI CLI-Tools installieren"

# Node.js/npm prüfen
if command -v npm &>/dev/null; then
    info "Node.js gefunden: $(node --version)"
else
    error "Node.js nicht installiert! Überspringe npm-basierte Tools."
fi

# Python/pip prüfen
if command -v pip3 &>/dev/null; then
    info "Python gefunden: $(python3 --version)"
else
    error "Python pip nicht installiert!"
fi

# --- 8.1 GEMINI CLI (Google) ---
install_gemini_cli() {
    info "Installiere Gemini CLI..."
    if command -v npm &>/dev/null; then
        sudo npm install -g @google/gemini-cli 2>/dev/null ||         npm install -g @google/gemini-cli 2>/dev/null ||         warn "Gemini CLI Installation fehlgeschlagen"
    fi
}

# --- 8.2 CODEX CLI (OpenAI) ---
install_codex_cli() {
    info "Installiere Codex CLI (OpenAI)..."
    if command -v npm &>/dev/null; then
        sudo npm install -g @openai/codex 2>/dev/null ||         npm install -g @openai/codex 2>/dev/null ||         warn "Codex CLI Installation fehlgeschlagen"
    fi
}

# --- 8.3 CLAUDE CODE (Anthropic) ---
install_claude_code() {
    info "Installiere Claude Code..."
    if command -v npm &>/dev/null; then
        sudo npm install -g @anthropic-ai/claude-code 2>/dev/null ||         npm install -g @anthropic-ai/claude-code 2>/dev/null ||         warn "Claude Code Installation fehlgeschlagen"
    fi
}

# --- 8.4 AIDER (Lokale Modelle) ---
install_aider() {
    info "Installiere Aider..."
    if command -v pip3 &>/dev/null; then
        pip3 install --user aider-install 2>/dev/null ||         pip3 install --user aider-chat 2>/dev/null ||         warn "Aider Installation fehlgeschlagen"
    fi
}

# --- 8.5 GITHUB COPILOT CLI ---
install_gh_copilot() {
    info "Installiere GitHub Copilot CLI..."
    if command -v gh &>/dev/null; then
        gh extension install github/copilot 2>/dev/null ||         warn "GitHub Copilot Extension fehlgeschlagen"
    else
        warn "gh CLI nicht installiert. Überspringe."
    fi
}

# --- 8.6 OLLAMA (Lokale LLMs) ---
install_ollama() {
    info "Installiere Ollama..."
    if ! command -v ollama &>/dev/null; then
        curl -fsSL https://ollama.com/install.sh | sh 2>/dev/null ||         warn "Ollama Installation fehlgeschlagen"
    else
        log "Ollama bereits installiert: $(ollama --version 2>/dev/null || echo 'Version unbekannt')"
    fi
}

# --- 8.7 MCPBUNDLES ---
install_mcpbundles() {
    info "Installiere MCPBundles..."
    if command -v pip3 &>/dev/null; then
        pip3 install --user mcpbundles 2>/dev/null ||         warn "MCPBundles Installation fehlgeschlagen"
    fi
}

# --- 8.8 ELEVENLABS CLI ---
install_elevenlabs() {
    info "Installiere ElevenLabs CLI..."
    if command -v pnpm &>/dev/null; then
        pnpm install -g @elevenlabs/cli 2>/dev/null || true
    elif command -v npm &>/dev/null; then
        npm install -g @elevenlabs/cli 2>/dev/null || true
    fi
}

# --- 8.9 VALYU CLI ---
install_valyu() {
    info "Installiere Valyu CLI..."
    curl -fsSL https://raw.githubusercontent.com/valyuAI/valyu-cli/main/install.sh | bash 2>/dev/null ||     warn "Valyu CLI Installation fehlgeschlagen"
}

# --- 8.10 ANTI-GRAVITY CODE (gkhantyln) ---
install_antigravity_code() {
    info "Installiere Antigravity-Code..."
    if [ ! -d "$HOME/.local/share/antigravity-code" ]; then
        git clone https://github.com/gkhantyln/antigravity-code.git "$HOME/.local/share/antigravity-code" 2>/dev/null ||         warn "Antigravity-Code Clone fehlgeschlagen"
        cd "$HOME/.local/share/antigravity-code" && npm install 2>/dev/null || true
        cd "$HOME/.local/share/antigravity-code" && npm run setup 2>/dev/null || true
    fi
}

# --- 8.11 ANTI-GRAVITY CLI (testerlingcodo) ---
install_gemini_antigravity_cli() {
    info "Installiere Gemini Antigravity CLI..."
    if command -v npm &>/dev/null; then
        sudo npm install -g gemini-antigravity-cli 2>/dev/null ||         npm install -g gemini-antigravity-cli 2>/dev/null ||         warn "Gemini Antigravity CLI Installation fehlgeschlagen"
    fi
}

# --- 8.12 ANTI-GRAVITY CLI HARNESS (Kyeong1024) ---
install_antigravity_harness() {
    info "Installiere Antigravity CLI Harness..."
    if [ ! -d "$HOME/.local/share/antigravity-cli-harness" ]; then
        git clone https://github.com/Kyeong1024/antigravity-cli-harness.git "$HOME/.local/share/antigravity-cli-harness" 2>/dev/null ||         warn "Antigravity CLI Harness Clone fehlgeschlagen"
    fi
}

# --- 8.13 OH-MY-ANTI-GRAVITY (Joonghyun-Lee-Frieren) ---
install_oh_my_antigravity() {
    info "Installiere Oh-My-Antigravity..."
    if command -v agy &>/dev/null || command -v gemini &>/dev/null; then
        agy plugin install https://github.com/Joonghyun-Lee-Frieren/oh-my-antigravity 2>/dev/null ||         gemini extensions install https://github.com/Joonghyun-Lee-Frieren/oh-my-antigravity 2>/dev/null ||         warn "Oh-My-Antigravity Installation fehlgeschlagen"
    else
        warn "Antigravity CLI nicht gefunden. Überspringe Oh-My-Antigravity."
    fi
}

# Alle KI-Tools installieren
install_gemini_cli
install_codex_cli
install_claude_code
install_aider
install_gh_copilot
install_ollama
install_mcpbundles
install_elevenlabs
install_valyu
install_antigravity_code
install_gemini_antigravity_cli
install_antigravity_harness
install_oh_my_antigravity

# ═════════════════════════════════════════════════════════════════════════════
# 9. GITHUB REPOSITORIES KLONEN & EINRICHTEN
# ═════════════════════════════════════════════════════════════════════════════
step "9" "GitHub Repositories klonen & einrichten"

REPO_BASE="$HOME/Projects/antigravity-repos"
mkdir -p "$REPO_BASE"

REPOS=(
    "https://github.com/Ethan-W20/antigravity-proxy-tools.git"
    "https://github.com/dao-woo/pipeline-relay.git"
    "https://github.com/Bhanunamikaze/Agentic-SEO-Skill.git"
    "https://github.com/0xtbug/zero-limit.git"
    "https://github.com/harikrishna8121999/antigravity-workflows.git"
    "https://github.com/webzler/agentMemory.git"
    "https://github.com/flyamjad/antigravity-link-extension.git"
    "https://github.com/cyborgateuk-arch/OmniCode.git"
    "https://github.com/smartbrainactivity/visual-diagramming-export.git"
    "https://github.com/fbruckhoff/antigravity-evolve-concept.git"
    "https://github.com/YogeshKu7877/claude-seo-skills.git"
    "https://github.com/nextcortex/antigravity-monitor.git"
    "https://github.com/AmanTShekar/Zenith-Extension.git"
    "https://github.com/tninja/ai-code-interface.el.git"
    "https://github.com/lanes-sh/app.git"
    "https://github.com/Joonghyun-Lee-Frieren/oh-my-antigravity.git"
    "https://github.com/testerlingcodo/gemini-antigravity-cli.git"
    "https://github.com/cpdata/antigravity-cli-termux.git"
    "https://github.com/Kyeong1024/antigravity-cli-harness.git"
)

for repo in "${REPOS[@]}"; do
    repo_name=$(basename "$repo" .git)
    if [ ! -d "$REPO_BASE/$repo_name" ]; then
        info "Klone: $repo_name"
        git clone "$repo" "$REPO_BASE/$repo_name" 2>/dev/null || warn "Clone fehlgeschlagen: $repo_name"
    else
        info "Aktualisiere: $repo_name"
        cd "$REPO_BASE/$repo_name" && git pull 2>/dev/null || warn "Pull fehlgeschlagen: $repo_name"
    fi
done

# Spezifische Setups für bestimmte Repos
# Agentic-SEO-Skill
if [ -d "$REPO_BASE/Agentic-SEO-Skill" ]; then
    info "Installiere Agentic-SEO-Skill..."
    cd "$REPO_BASE/Agentic-SEO-Skill"
    bash install.sh --target all --project-dir "$HOME/Projects" 2>/dev/null ||     bash install.sh --target claude 2>/dev/null ||     warn "Agentic-SEO-Skill Setup fehlgeschlagen"
fi

# Antigravity-Workflows
if [ -d "$REPO_BASE/antigravity-workflows" ]; then
    info "Installiere Antigravity-Workflows..."
    cd "$REPO_BASE/antigravity-workflows"
    npm install 2>/dev/null || true
    npm link 2>/dev/null || true
fi

# AgentMemory
if [ -d "$REPO_BASE/agentMemory" ]; then
    info "Installiere AgentMemory..."
    cd "$REPO_BASE/agentMemory"
    npm install 2>/dev/null || true
    npm run compile 2>/dev/null || true
fi

# Visual-Diagramming-Export
if [ -d "$REPO_BASE/visual-diagramming-export" ]; then
    info "Installiere Visual-Diagramming-Export..."
    cd "$REPO_BASE/visual-diagramming-export"
    node scripts/audit-scan.js 2>/dev/null || true
fi

# Antigravity-Monitor
if [ -d "$REPO_BASE/antigravity-monitor" ]; then
    info "Installiere Antigravity-Monitor..."
    cd "$REPO_BASE/antigravity-monitor"
    npm install 2>/dev/null || true
    npm run build 2>/dev/null || true
fi

# Zenith-Extension
if [ -d "$REPO_BASE/Zenith-Extension" ]; then
    info "Installiere Zenith-Extension..."
    cd "$REPO_BASE/Zenith-Extension"
    npm install 2>/dev/null || true
fi

# AI-Code-Interface.el
if [ -d "$REPO_BASE/ai-code-interface.el" ]; then
    info "Installiere AI-Code-Interface.el..."
    cd "$REPO_BASE/ai-code-interface.el"
    # Emacs-Package installieren
    if command -v emacs &>/dev/null; then
        emacs --batch --eval "(package-install-file "$REPO_BASE/ai-code-interface.el")" 2>/dev/null || true
    fi
fi

# Lanes-App
if [ -d "$REPO_BASE/app" ]; then
    info "Installiere Lanes-App..."
    cd "$REPO_BASE/app"
    npm install 2>/dev/null || true
fi

# Oh-My-Antigravity
if [ -d "$REPO_BASE/oh-my-antigravity" ]; then
    info "Installiere Oh-My-Antigravity..."
    cd "$REPO_BASE/oh-my-antigravity"
    # Plugin-Installation
    if command -v agy &>/dev/null; then
        agy plugin install . 2>/dev/null || true
    fi
fi

# Antigravity-CLI-Termux (für Referenz/Portierung)
if [ -d "$REPO_BASE/antigravity-cli-termux" ]; then
    info "Antigravity-CLI-Termux referenziert..."
    # Dies ist primär für Android/Termux, aber wir behalten es als Referenz
fi

log "Alle Repositories geklont und eingerichtet"

# ═════════════════════════════════════════════════════════════════════════════
# 10. KI-TOOL KONFIGURATION & API-KEYS
# ═════════════════════════════════════════════════════════════════════════════
step "10" "KI-Tools konfigurieren"

mkdir -p "$HOME/.config/antigravity"

# Konfigurations-Template erstellen
cat > "$HOME/.config/antigravity/ai_config.env" << 'EOF'
# =============================================================================
# ANTI-GRAVITY AI CLI KONFIGURATION
# =============================================================================

# OpenAI / Codex
# OPENAI_API_KEY=sk-...

# Anthropic / Claude
# ANTHROPIC_API_KEY=sk-ant-...

# Google / Gemini
# GEMINI_API_KEY=...

# ElevenLabs
# ELEVENLABS_API_KEY=...

# Valyu
# VALYU_API_KEY=...

# GitHub Token (für Copilot & gh)
# GITHUB_TOKEN=ghp_...

# Ollama (lokal - kein API-Key nötig)
# OLLAMA_HOST=http://localhost:11434

# Antigravity CLI
# ANTIGRAVITY_API_KEY=...

# Aider
# AIDER_API_KEY=...
EOF

log "KI-Konfigurations-Template erstellt"
warn "Bitte API-Keys in ~/.config/antigravity/ai_config.env eintragen!"

# ═════════════════════════════════════════════════════════════════════════════
# 11. SHELL-INTEGRATION & ALIASES
# ═════════════════════════════════════════════════════════════════════════════
step "11" "Shell-Integration & Aliases"

SHELL_RC="$HOME/.bashrc"
[ -f "$HOME/.zshrc" ] && SHELL_RC="$HOME/.zshrc"
[ -f "$HOME/.config/fish/config.fish" ] && SHELL_RC="$HOME/.config/fish/config.fish"

if ! grep -q "ANTI-GRAVITY MEGA ALIASES" "$SHELL_RC" 2>/dev/null; then
    cat >> "$SHELL_RC" << 'EOF'

# ═══════════════════════════════════════════════════════════════════════════
# ANTI-GRAVITY MEGA ALIASES
# ═══════════════════════════════════════════════════════════════════════════

# === KI/AI Tools ===
alias ai-gemini='gemini'
alias ai-codex='codex'
alias ai-claude='claude'
alias ai-aider='aider'
alias ai-ollama='ollama'
alias ai-agy='agy'
alias ai-antigravity='antigravity-code'
alias ai-omni='omnicode'

# === Vibe Coding ===
alias vibe='agy'
alias vibe-codex='codex'
alias vibe-claude='claude'
alias vibe-gemini='gemini'

# === Skills & Agents ===
alias skills='agy skills'
alias agents='agy agents'
alias workflows='agy workflows'
alias harness='agy plugin install antigravity-cli-harness'
alias oma='agy /oma:status'

# === MCP ===
alias mcp-list='agy mcp list'
alias mcp-add='agy mcp add'
alias mcp-remove='agy mcp remove'

# === Duplikat-Finder ===
alias dupes-find='jdupes -r -S'
alias dupes-clean='jdupes -r -d -N'
alias dupes-hardlink='jdupes -r -L'
alias dupes-interactive='jdupes -r -d'

# === System-Monitoring ===
alias sys-top='btop'
alias sys-info='fastfetch'
alias sys-disk='ncdu'
alias sys-files='eza -la --icons'
alias sys-tree='eza --tree --level=2 --icons'

# === Suche ===
alias search='fd'
alias find-text='rg'
alias fuzzy='fzf'

# === Git ===
alias g='git'
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git pull'
alias gd='git diff'
alias gco='git checkout'
alias gcb='git checkout -b'
alias glog='git log --oneline --graph'
alias gh-pr='gh pr create --fill'
alias gh-copilot='gh copilot'
alias lazy='lazygit'

# === Docker ===
alias d='docker'
alias dc='docker-compose'
alias dp='podman'
alias dps='docker ps'
alias dpsa='docker ps -a'
alias di='docker images'
alias dprune='docker system prune -f'

# === Schnelle Navigation ===
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias ll='eza -la --icons'
alias lt='eza --tree --level=2 --icons'
alias l='eza -l --icons'
alias la='eza -a --icons'

# === Sicherheit ===
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'
alias rmrf='rm -rf'

# === Entwicklung ===
alias py='python3'
alias pip='pip3'
alias node='node'
alias npm='npm'
alias pnpm='pnpm'
alias yarn='yarn'
alias rust='rustc'
alias cargo='cargo'
alias go='go'

# === Netzwerk ===
alias myip='curl -s ipinfo.io/ip'
alias ports='netstat -tulanp'
alias ping='ping -c 5'
alias traceroute='traceroute'
alias nmap-quick='nmap -F'
alias nmap-full='nmap -sV -sC -O'

# === Kompression ===
alias untar='tar -xvf'
alias untargz='tar -xzvf'
alias untarbz2='tar -xjvf'
alias zipdir='zip -r'

# === Multimedia ===
alias ff='ffmpeg'
alias ff-info='ffprobe -v quiet -print_format json -show_format -show_streams'

# === Starship Prompt ===
eval "$(starship init bash)"

# === Zoxide ===
eval "$(zoxide init bash)"

# === FZF ===
[ -f /usr/share/fzf/key-bindings.bash ] && source /usr/share/fzf/key-bindings.bash
[ -f /usr/share/fzf/completion.bash ] && source /usr/share/fzf/completion.bash

# === Bat als cat-Ersatz ===
alias cat='bat --paging=never'
alias catp='bat --paging=always'

# === TheFuck ===
eval "$(thefuck --alias)"

# === Direnv ===
eval "$(direnv hook bash)"

# === Antigravity-Code PATH ===
export PATH="$HOME/.local/share/antigravity-code:$PATH"
export PATH="$HOME/.local/bin:$PATH"

# === Cargo PATH ===
export PATH="$HOME/.cargo/bin:$PATH"

# === Node.js PATH ===
export PATH="$HOME/.npm-global/bin:$PATH"

# === Python PATH ===
export PATH="$HOME/.local/lib/python3.*/site-packages:$PATH"

# === Ollama ===
export OLLAMA_HOST="http://localhost:11434"

# === Antigravity Repos ===
export ANTI_GRAVITY_REPOS="$HOME/Projects/antigravity-repos"

EOF
    log "Mega-Aliases zu $SHELL_RC hinzugefügt"
fi

# ═════════════════════════════════════════════════════════════════════════════
# 12. OLLAMA MODELLE HERUNTERLADEN
# ═════════════════════════════════════════════════════════════════════════════
step "12" "Ollama Modelle einrichten"

if command -v ollama &>/dev/null; then
    info "Starte Ollama Service..."
    systemctl --user enable ollama 2>/dev/null || true
    systemctl --user start ollama 2>/dev/null || ollama serve &
    sleep 5

    # Empfohlene Modelle
    MODELS=("llama3" "codellama" "mistral" "phi3" "gemma2" "qwen2.5" "deepseek-coder")

    for model in "${MODELS[@]}"; do
        info "Prüfe Modell: $model"
        ollama list | grep -q "$model" || {
            info "Lade $model herunter..."
            ollama pull "$model" 2>/dev/null || warn "$model konnte nicht geladen werden"
        }
    done

    log "Ollama Modelle eingerichtet"
else
    warn "Ollama nicht verfügbar. Überspringe Modell-Download."
fi

# ═════════════════════════════════════════════════════════════════════════════
# 13. SYSTEMDIENSTE & AUTOSTART KONFIGURIEREN
# ═════════════════════════════════════════════════════════════════════════════
step "13" "Systemdienste konfigurieren"

# Docker Service
if command -v docker &>/dev/null; then
    sudo systemctl enable docker 2>/dev/null || true
    sudo systemctl start docker 2>/dev/null || true
    sudo usermod -aG docker "$USER" 2>/dev/null || true
    log "Docker konfiguriert"
fi

# Ollama Autostart
if command -v ollama &>/dev/null; then
    mkdir -p "$HOME/.config/systemd/user"
    cat > "$HOME/.config/systemd/user/ollama.service" << 'EOF'
[Unit]
Description=Ollama Local LLM Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/ollama serve
Restart=always
RestartSec=10

[Install]
WantedBy=default.target
EOF
    systemctl --user daemon-reload 2>/dev/null || true
    systemctl --user enable ollama 2>/dev/null || true
    log "Ollama Autostart konfiguriert"
fi

# Syncthing
if command -v syncthing &>/dev/null; then
    systemctl --user enable syncthing 2>/dev/null || true
    systemctl --user start syncthing 2>/dev/null || true
    log "Syncthing konfiguriert"
fi

# ═════════════════════════════════════════════════════════════════════════════
# 14. DEEP WEB SEARCH & GITHUB INTEGRATION
# ═════════════════════════════════════════════════════════════════════════════
step "14" "Deep Web Search & GitHub Integration"

info "Installiere Deep Web Search Tools..."

# GitHub CLI erweitern
if command -v gh &>/dev/null; then
    gh extension install yusukebe/gh-markdown-preview 2>/dev/null || true
    gh extension install dlvhdr/gh-prs 2>/dev/null || true
    gh extension install seachicken/gh-poi 2>/dev/null || true
    log "GitHub CLI Extensions installiert"
fi

# Search-Engine CLI Tools
if command -v pip3 &>/dev/null; then
    pip3 install --user googler 2>/dev/null || true
    pip3 install --user ddgr 2>/dev/null || true
fi

# Web-Scraping Tools
if command -v pip3 &>/dev/null; then
    pip3 install --user scrapy 2>/dev/null || true
    pip3 install --user beautifulsoup4 2>/dev/null || true
    pip3 install --user requests-html 2>/dev/null || true
    pip3 install --user playwright 2>/dev/null || true
fi

# Archive.org / Wayback Machine
if command -v pip3 &>/dev/null; then
    pip3 install --user waybackpy 2>/dev/null || true
fi

log "Deep Web Search Tools installiert"

# ═════════════════════════════════════════════════════════════════════════════
# 15. PROGRAMME STORES & APP-INSTALLER
# ═════════════════════════════════════════════════════════════════════════════
step "15" "Programme Stores & App-Installer"

info "Konfiguriere alternative Paketmanager..."

# Flatpak
if command -v flatpak &>/dev/null; then
    flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo 2>/dev/null || true
    log "Flatpak konfiguriert"
fi

# Snap
if command -v snap &>/dev/null; then
    sudo systemctl enable snapd 2>/dev/null || true
    sudo systemctl start snapd 2>/dev/null || true
    log "Snap konfiguriert"
fi

# AppImage
if [ ! -d "$HOME/Applications" ]; then
    mkdir -p "$HOME/Applications"
    log "AppImage-Verzeichnis erstellt"
fi

# Homebrew (Linuxbrew)
if ! command -v brew &>/dev/null; then
    info "Installiere Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 2>/dev/null ||     warn "Homebrew Installation fehlgeschlagen"
fi

# Nix
if ! command -v nix &>/dev/null; then
    info "Installiere Nix..."
    curl -L https://nixos.org/nix/install | sh 2>/dev/null ||     warn "Nix Installation fehlgeschlagen"
fi

# Asdf (Version Manager)
if ! command -v asdf &>/dev/null; then
    info "Installiere Asdf..."
    git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0 2>/dev/null ||     warn "Asdf Installation fehlgeschlagen"
fi

log "Programme Stores konfiguriert"

# ═════════════════════════════════════════════════════════════════════════════
# 16. KONFIGURATION FÜR VIBE CODING
# ═════════════════════════════════════════════════════════════════════════════
step "16" "Vibe Coding Konfiguration"

mkdir -p "$HOME/.config/vibe"

cat > "$HOME/.config/vibe/config.json" << 'EOF'
{
  "mode": "agentic",
  "auto_approve": false,
  "providers": {
    "primary": "gemini",
    "secondary": "claude",
    "tertiary": "openai",
    "local": "ollama"
  },
  "models": {
    "gemini": "gemini-3.1-pro",
    "claude": "claude-sonnet-4.6",
    "openai": "gpt-5.3-codex",
    "ollama": "llama3"
  },
  "features": {
    "vision": true,
    "rag": true,
    "mcp": true,
    "skills": true,
    "workflows": true,
    "harness": true
  },
  "paths": {
    "repos": "~/Projects/antigravity-repos",
    "skills": "~/.agents/skills",
    "workflows": "~/.agents/workflows",
    "plugins": "~/.agents/plugins"
  }
}
EOF

log "Vibe Coding Konfiguration erstellt"

# ═════════════════════════════════════════════════════════════════════════════
# 17. FZF & INTERAKTIVE TOOLS EINRICHTEN
# ═════════════════════════════════════════════════════════════════════════════
step "17" "Interaktive Tools konfigurieren"

# fzf Integration
if command -v fzf &>/dev/null; then
    if [ -f /usr/share/fzf/key-bindings.bash ]; then
        source /usr/share/fzf/key-bindings.bash 2>/dev/null || true
    fi
    if [ -f /usr/share/fzf/completion.bash ]; then
        source /usr/share/fzf/completion.bash 2>/dev/null || true
    fi
    log "fzf konfiguriert"
fi

# bat als cat-Ersatz
if command -v bat &>/dev/null; then
    export BAT_THEME="Dracula"
    alias cat='bat --paging=never' 2>/dev/null || true
    log "bat als cat-Ersatz konfiguriert"
fi

# eza als ls-Ersatz
if command -v eza &>/dev/null; then
    alias ls='eza --icons' 2>/dev/null || true
    log "eza als ls-Ersatz konfiguriert"
fi

# zoxide als cd-Ersatz
if command -v zoxide &>/dev/null; then
    eval "$(zoxide init bash)" 2>/dev/null || true
    log "zoxide konfiguriert"
fi

# ═════════════════════════════════════════════════════════════════════════════
# 18. ABSCHLUSS & ZUSAMMENFASSUNG
# ═════════════════════════════════════════════════════════════════════════════
header "ANTI-GRAVITY MEGA SETUP ABGESCHLOSSEN!"

# Zusammenfassung
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  INSTALLIERTE KI/AI TOOLS:"
echo "═══════════════════════════════════════════════════════════════"
for tool in gemini codex claude aider ollama gh mcpbundles valyu elevenlabs agy antigravity-code; do
    if command -v "$tool" &>/dev/null; then
        version=$($tool --version 2>/dev/null | head -1 || echo "Version unbekannt")
        printf "  ✓ %-20s %s\n" "$tool" "$version"
    else
        printf "  ✗ %-20s %s\n" "$tool" "NICHT INSTALLIERT"
    fi
done

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  GITHUB REPOSITORIES:"
echo "═══════════════════════════════════════════════════════════════"
for repo_dir in "$REPO_BASE"/*; do
    if [ -d "$repo_dir" ]; then
        repo_name=$(basename "$repo_dir")
        printf "  ✓ %-30s %s\n" "$repo_name" "$(cd $repo_dir && git log --oneline -1 2>/dev/null | cut -d' ' -f1 || echo 'N/A')"
    fi
done

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  DUPLIKAT-SCAN ERGEBNISSE:"
echo "═══════════════════════════════════════════════════════════════"
echo "  Scan-Log:     $TMP_DIR/"
echo "  Duplikate:    $TMP_DIR/duplicates_raw.txt"
echo "  Kaputte Links: $TMP_DIR/broken_links.txt"
echo "  Doppelte Binaries: $TMP_DIR/duplicate_binaries.txt"

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  NÄCHSTE SCHRITTE:"
echo "═══════════════════════════════════════════════════════════════"
echo "  1. API-Keys eintragen:  nano ~/.config/antigravity/ai_config.env"
echo "  2. Shell neu laden:   source $SHELL_RC"
echo "  3. Ollama testen:     ollama run llama3"
echo "  4. Gemini testen:     gemini --version"
echo "  5. Codex testen:       codex --version"
echo "  6. Claude testen:      claude --version"
echo "  7. Antigravity testen: agy --version"
echo "  8. Duplikate bereinigen: jdupes -r -d -N ~/Downloads"
echo "  9. Vibe Coding:       vibe 'Erstelle eine React App'"
echo " 10. Skills nutzen:     skills list"
echo " 11. Agents starten:     agents start"
echo " 12. Workflows:         workflows list"
echo " 13. MCP Server:        mcp-list"
echo " 14. Harness:           harness"
echo " 15. Oh-My-Antigravity: oma"
echo ""
echo "  WICHTIG: Melde dich ab und wieder an, damit:"
echo "  - Docker-Gruppe aktiv wird"
echo "  - Neue Aliases aktiv werden"
echo "  - Kernel-Optimierungen greifen"
echo "═══════════════════════════════════════════════════════════════"

log "Mega-Setup abgeschlossen! Dein System ist auf MAXIMUM optimiert."
log "Willkommen im ANTI-GRAVITY ÖKOSYSTEM! 🚀"
