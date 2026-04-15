import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

const projectRoot = '/vercel/share/v0-project';
const gitDir = path.join(projectRoot, '.git');

console.log('Checking git repository...');

try {
  // Change to project directory
  process.chdir(projectRoot);
  
  // Check if .git exists
  if (!existsSync(gitDir)) {
    console.log('Git directory not found. This appears to be a cloned project that needs git config.');
    console.log('Attempting to get git status...');
    try {
      const status = execSync('git status', { encoding: 'utf-8' });
      console.log('Git status:', status);
    } catch (e) {
      console.log('Git not initialized. Setting up git config...');
      execSync('git config --global user.email "v0[bot]@users.noreply.github.com"');
      execSync('git config --global user.name "v0[bot]"');
      console.log('Git config set');
    }
  }

  console.log('Adding all changes...');
  execSync('git add -A', { stdio: 'inherit' });

  console.log('Creating commit...');
  const commitMessage = `refactor: migrate from TanStack Start to Next.js 16 for Vercel deployment

- Convert project from Vite/TanStack Start to Next.js 16
- Update all routing from TanStack Router to Next.js App Router
- Update components to use Next.js Link instead of TanStack Link
- Add proper Next.js configuration (next.config.js, tsconfig.json)
- Create new app directory structure with all pages
- Add Tailwind CSS 4 configuration
- Remove Vite, Bun, and TanStack specific files
- Add Vercel deployment configuration
- Preserve all website design and content unchanged`;

  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

  console.log('Pushing to GitHub...');
  execSync('git push origin HEAD:fix-vercel-deployment', { stdio: 'inherit' });
  
  console.log('Successfully pushed to GitHub!');
} catch (error) {
  console.error('Error during git operations:', error.message);
  process.exit(1);
}
