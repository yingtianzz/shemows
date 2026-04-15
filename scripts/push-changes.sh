#!/bin/bash
cd /vercel/share/v0-project

# Configure git
git config user.name "v0[bot]"
git config user.email "v0[bot]@users.noreply.github.com"

# Add all changes
git add -A

# Check if there are any changes to commit
if git diff --cached --quiet; then
  echo "No changes to commit"
  exit 0
fi

# Commit changes
git commit -m "Configure project for Vercel deployment

- Add TanStack Start entry points (entry.server.tsx, entry.client.tsx)
- Create index.html template for Vite
- Update vercel.json with proper build configuration
- Enable SSR support for Vercel deployment"

# Push to current branch
git push origin HEAD

echo "Changes pushed to GitHub successfully!"
