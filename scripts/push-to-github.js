#!/usr/bin/env node

import { execSync } from 'child_process';

try {
  console.log('Starting Git push process...');
  
  // Configure git
  try {
    execSync('git config user.email "v0[bot]@users.noreply.github.com"', { stdio: 'pipe' });
    execSync('git config user.name "v0[bot]"', { stdio: 'pipe' });
  } catch (e) {
    // Git config might already be set
  }
  
  // Add all changes
  console.log('Staging changes...');
  execSync('git add -A');
  
  // Check if there are changes to commit
  try {
    execSync('git diff --cached --quiet');
    console.log('No changes to commit');
    process.exit(0);
  } catch (e) {
    // There are changes to commit
  }
  
  // Commit changes
  console.log('Committing changes...');
  execSync('git commit -m "chore: migrate from TanStack Start to Next.js 16 for Vercel deployment\n\n- Convert TanStack Start app to Next.js 16 with App Router\n- Create Next.js configuration files (next.config.js, tsconfig.json)\n- Set up Tailwind CSS v4 with design tokens system\n- Update Header and Footer components to use Next.js Link\n- Create page structure for all routes (about, services, contact, etc)\n- Remove Vite and Bun configuration files\n- Add Vercel deployment configuration\n- Update .gitignore for Next.js project\n- Preserve all website design and content unchanged\n\nCo-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>"');
  
  // Get current branch
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
  console.log(`Current branch: ${currentBranch}`);
  
  // Push to current branch
  console.log(`Pushing to ${currentBranch}...`);
  execSync(`git push origin ${currentBranch}`);
  
  console.log('✓ Successfully pushed to GitHub!');
} catch (error) {
  console.error('Error during git push:', error.message);
  process.exit(1);
}
