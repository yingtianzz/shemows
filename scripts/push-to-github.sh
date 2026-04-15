#!/bin/bash
set -e

echo "Starting Git push process..."

# Configure git if needed
git config user.email "v0[bot]@users.noreply.github.com" 2>/dev/null || true
git config user.name "v0[bot]" 2>/dev/null || true

# Add all changes
echo "Staging changes..."
git add -A

# Check if there are changes to commit
if git diff --cached --quiet; then
  echo "No changes to commit"
  exit 0
fi

# Commit changes
echo "Committing changes..."
git commit -m "chore: migrate from TanStack Start to Next.js 16 for Vercel deployment

- Convert TanStack Start app to Next.js 16 with App Router
- Create Next.js configuration files (next.config.js, tsconfig.json)
- Set up Tailwind CSS v4 with design tokens system
- Update Header and Footer components to use Next.js Link
- Create page structure for all routes (about, services, contact, etc)
- Remove Vite and Bun configuration files
- Add Vercel deployment configuration
- Update .gitignore for Next.js project
- Preserve all website design and content unchanged

Co-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>"

# Get current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

# Push to current branch
echo "Pushing to $CURRENT_BRANCH..."
git push origin $CURRENT_BRANCH

echo "✓ Successfully pushed to GitHub!"
