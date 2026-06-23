#!/usr/bin/env bash
set -euo pipefail

python3 -m pip install --upgrade pip
python3 -m pip install --user -r requirements.txt

echo ""
echo "PreTeXt setup complete."
python3 -m pretext --version
echo "Build with: python3 -m pretext build web"