#!/usr/bin/env python3
import subprocess
import os

os.chdir('/vercel/share/v0-project')

try:
    # Check git status
    result = subprocess.run(['git', 'log', '--oneline', '-5'], capture_output=True, text=True, timeout=10)
    print("[v0] Git log output:")
    print(result.stdout)
    if result.stderr:
        print("[v0] Git stderr:")
        print(result.stderr)
    
    # Check current branch
    branch = subprocess.run(['git', 'branch', '--show-current'], capture_output=True, text=True, timeout=10)
    print(f"[v0] Current branch: {branch.stdout.strip()}")
    
    # Check if there are uncommitted changes
    status = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True, timeout=10)
    print(f"[v0] Uncommitted changes: {len(status.stdout.strip().split(chr(10))) if status.stdout.strip() else 0}")
    
    # Check remote
    remote = subprocess.run(['git', 'remote', '-v'], capture_output=True, text=True, timeout=10)
    print("[v0] Git remotes:")
    print(remote.stdout)
    
except Exception as e:
    print(f"[v0] Error: {e}")
