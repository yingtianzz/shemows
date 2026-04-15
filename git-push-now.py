#!/usr/bin/env python3
import subprocess
import os

os.chdir('/vercel/share/v0-project')

try:
    # Check git status
    result = subprocess.run(['git', 'status'], capture_output=True, text=True)
    print("[GIT STATUS]")
    print(result.stdout)
    if result.stderr:
        print(result.stderr)
    
    # Add all files
    print("\n[ADDING FILES]")
    add_result = subprocess.run(['git', 'add', '.'], capture_output=True, text=True)
    print(add_result.stdout)
    if add_result.stderr:
        print(add_result.stderr)
    
    # Check what was added
    status_result = subprocess.run(['git', 'status', '--short'], capture_output=True, text=True)
    print("\n[STAGED CHANGES]")
    print(status_result.stdout)
    
    # Commit
    print("\n[COMMITTING]")
    commit_result = subprocess.run(
        ['git', 'commit', '-m', 'Migrate from TanStack Start/Vite to Next.js 16 for Vercel deployment'],
        capture_output=True,
        text=True
    )
    print(commit_result.stdout)
    if commit_result.stderr:
        print(commit_result.stderr)
    
    # Push to current branch
    print("\n[PUSHING]")
    push_result = subprocess.run(['git', 'push', 'origin', 'HEAD'], capture_output=True, text=True)
    print(push_result.stdout)
    if push_result.stderr:
        print(push_result.stderr)
    
    print("\n[SUCCESS] Code pushed to GitHub!")
    
except Exception as e:
    print(f"[ERROR] {e}")
