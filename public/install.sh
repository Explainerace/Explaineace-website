#!/usr/bin/env bash
# FocusLens Remote Web Installer for macOS
# Usage: curl -fsSL https://explainerace.up.railway.app/install.sh | bash
set -euo pipefail

DEST_DIR="$HOME/.focuslens"
DOWNLOAD_URL="https://explainerace.up.railway.app/downloads/FocusLens-macOS.zip"
TMP_ZIP="/tmp/FocusLens-macOS.zip"

echo "============================================================"
echo "          🔭 FocusLens macOS Web Installer                  "
echo "============================================================"
echo ""

# Verify OS
if [[ "$(uname -s)" != "Darwin" ]]; then
    echo "❌ FocusLens is exclusively built for macOS (Apple Silicon & Intel)."
    exit 1
fi

echo "1/4 📥 Downloading FocusLens package..."
curl -fsSL "$DOWNLOAD_URL" -o "$TMP_ZIP"

echo "2/4 📦 Extracting to $DEST_DIR..."
rm -rf "$DEST_DIR"
mkdir -p "$DEST_DIR"
unzip -q "$TMP_ZIP" -d "$DEST_DIR"
rm -f "$TMP_ZIP"

echo "3/4 ⚙️ Setting permissions..."
cd "$DEST_DIR"
chmod +x ./install.sh ./scripts/*.sh ./FocusLens-Installer.command 2>/dev/null || true

echo "4/4 🚀 Running installer & configuring macOS application..."
./install.sh <<< "y"

echo ""
echo "🎉 FocusLens is now fully installed on your Mac!"
