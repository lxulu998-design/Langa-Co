#!/bin/bash
# Helper to add a remote and push the current repo to GitHub
if [ -z "$1" ]; then
  echo "Usage: ./push_to_github.sh <git-remote-url>"
  echo "Example: ./push_to_github.sh git@github.com:youruser/langa-co.git"
  exit 1
fi
git remote add origin "$1"
git branch -M main
git push -u origin main
