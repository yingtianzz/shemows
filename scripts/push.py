#!/usr/bin/env python3
import subprocess
import os
import sys

# Change to project directory
os.chdir('/vercel/share/v0-project')

try:
    # Check git status
    print("Checking git status...")
    result = subprocess.run(['git', 'status'], capture_output=True, text=True)
    print(result.stdout)
    
    # Add all changes
    print("\nAdding all changes...")
    subprocess.run(['git', 'add', '.'], check=True)
    
    # Check what's staged
    print("\nChanges staged for commit:")
    result = subprocess.run(['git', 'diff', '--cached', '--name-only'], capture_output=True, text=True)
    print(result.stdout)
    
    # Get current branch
    print("\nGetting current branch...")
    result = subprocess.run(['git', 'branch', '--show-current'], capture_output=True, text=True)
    current_branch = result.stdout.strip()
    print(f"Current branch: {current_branch}")
    
    # Commit changes
    print("\nCommitting changes...")
    commit_msg = "chore: migrate from TanStack Start to Next.js 16 for Vercel deployment\n\n- Replace TanStack Start with Next.js 16 App Router\n- Update components to use Next.js Link and routing\n- Add proper Next.js configuration (next.config.js, tsconfig.json)\n- Remove Vite, bunfig, and TanStack configs\n- Add Vercel deployment configuration\n- Preserve all existing design and content\n- Update package.json with Next.js dependencies"
    
    subprocess.run(['git', 'commit', '-m', commit_msg], check=True)
    
    # Push to current branch
    print(f"\nPushing to {current_branch}...")
    subprocess.run(['git', 'push', 'origin', current_branch], check=True)
    
    print("\n✅ Successfully pushed to GitHub!")
    
except subprocess.CalledProcessError as e:
    print(f"❌ Git error: {e}")
    sys.exit(1)
except Exception as e:
    print(f"❌ Error: {e}")
    sys.exit(1)
