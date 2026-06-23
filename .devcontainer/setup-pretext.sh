#!/usr/bin/env bash
set -euo pipefail

python -m pip install --upgrade pip
python -m pip install --user "pretext[all]"

echo ""
echo "PreTeXt setup complete."
echo "Try: pretext --version"
echo "Then build with: pretext build web"
