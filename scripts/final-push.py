#!/usr/bin/env python3
import subprocess
import os
import sys

os.chdir('/vercel/share/v0-project')

try:
    # Check git status
    print("Checking git status...")
    result = subprocess.run(['git', 'status'], capture_output=True, text=True)
    print(result.stdout)
    
    # Check current branch
    print("\nChecking current branch...")
    branch_result = subprocess.run(['git', 'branch', '--show-current'], capture_output=True, text=True)
    current_branch = branch_result.stdout.strip()
    print(f"Current branch: {current_branch}")
    
    # Check remote
    print("\nChecking remote...")
    remote_result = subprocess.run(['git', 'remote', '-v'], capture_output=True, text=True)
    print(remote_result.stdout)
    
    # Add all files
    print("\nAdding all files...")
    subprocess.run(['git', 'add', '.'], check=True)
    print("Files added!")
    
    # Check status again
    print("\nStatus after add:")
    result = subprocess.run(['git', 'status'], capture_output=True, text=True)
    print(result.stdout)
    
    # Commit
    print("\nCommitting changes...")
    commit_msg = "Migrate from TanStack Start/Vite to Next.js 16 for Vercel deployment"
    subprocess.run([
        'git', 'commit', 
        '-m', commit_msg,
        '--author=v0[bot] <v0[bot]@users.noreply.github.com>'
    ], check=True)
    print("Changes committed!")
    
    # Push
    print(f"\nPushing to {current_branch}...")
    push_result = subprocess.run(['git', 'push', 'origin', current_branch], capture_output=True, text=True)
    print(push_result.stdout)
    if push_result.stderr:
        print("STDERR:", push_result.stderr)
    
    print("\n✅ Successfully pushed to GitHub!")
    sys.exit(0)
    
except subprocess.CalledProcessError as e:
    print(f"Error: {e}")
    print(f"stdout: {e.stdout}")
    print(f"stderr: {e.stderr}")
    sys.exit(1)
except Exception as e:
    print(f"Unexpected error: {e}")
    sys.exit(1)
