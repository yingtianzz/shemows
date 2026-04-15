#!/bin/bash
cd /vercel/share/v0-project
git add src/entry.server.tsx src/entry.client.tsx src/router.tsx index.html vercel.json
git commit -m "Configure TanStack Start for Vercel deployment with SSR support"
git log -1 --oneline
