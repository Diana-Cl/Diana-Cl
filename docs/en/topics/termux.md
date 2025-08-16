---
layout: doc
outline: deep
lang: "en-US"
dir: "ltr"
title: "Termux"
description: "Complete Termux Guide — Basic and Advanced Commands"
date: 2023-06-26
editLink: true
head:
  - - meta
    - name: keywords
      content: Termux, Linux, Terminal, CMD, Powershell, Windows, Python, Bash, Shell script
---

# Complete Termux Guide — Basic and Advanced Commands

<br/> 

## Introduction

Termux [^1] is a powerful **Linux terminal emulator** for **Android** that allows you to run Linux commands and install various packages. This guide includes both basic and advanced commands for working with **Termux**.

<br><br/>

## Initial Setup (Highly Recommended!)

### Installing Fish Shell - Better Command Line Experience

Before starting, it is recommended to install `Fish Shell`. **Fish** is an intelligent and user-friendly **shell** that makes working with the command line much easier.

#### Advantages of Fish Shell

- **Advanced autocomplete**: Suggests commands based on history
- **Syntax highlighting**: Correct commands appear green, errors appear red
- **Smart suggestions**: Likely commands are shown while typing
- **Advanced history**: Easily search through command history
- **Easy configuration**: No complex setup required

#### Install Fish

**To install Fish Shell, run the following command:**

```bash
pkg install fish
```

**There are two ways to run Fish:**

1. Each time you start Termux, type `fish` and press **Enter** manually.
2. Set **fish** as your default **shell** so you don’t need to run it manually every time.

**Set Fish as the default shell:**

```bash
chsh -s fish
```

#### Using Fish

- **Autocomplete**: Press Tab
- **Command suggestion**: Use ← → keys to accept suggestions
- **History**: Use ↑ ↓ to search history
- **Exit Fish**: Type `exit` or press `Ctrl + D`

### Other Alternatives (Optional)

#### Zsh with Oh-My-Zsh

```bash
# Install Zsh
pkg install zsh

# Install Oh-My-Zsh (requires curl)
pkg install curl
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Initial Update

If you return to Termux after a long time, it is better to upgrade the system and packages to the latest version first.

```bash
# Update the system before starting
apt update && apt upgrade
```

<br/>

## Basic Commands

### Exit Termux
There are two ways to close Termux:
- Press `Ctrl + D`
- Type `exit` and press Enter

### File and Directory Management

#### View Directory Contents

```bash
# Show visible files and folders
ls

# Show all files including hidden ones
ls -a

# Show contents of a specific directory without entering it
ls -a storage/downloads/diana
```

#### Show Current Location

```bash
# Show current path
pwd
```

#### Navigate Between Directories

```bash
# Go back to the home directory
cd

# Go one level up
cd ..

# Go to a specific directory
cd storage/downloads/diana
```

#### Access Internal Storage

If you encounter a permission error when accessing internal storage, use:

```bash
termux-setup-storage
```

After running this command, a confirmation dialog will appear. Allow access.

#### Delete File or Directory

```bash
# Delete a file
rm FileName

# Delete a directory and its contents
rm -rf FolderName
```

<br/>

::: danger ⚠️ Warning

Be very careful when using `rm -rf`, as it deletes files permanently with no recovery.

:::

<br/>

### Create and Edit Files

#### Install nano Text Editor

```bash
pkg install nano
```

#### Create a New File

```bash
# Create new file
nano diana

# Create file with extension
nano diana.py
```

#### nano Control Keys

- `Ctrl + X` Exit editor
- `Y` Save file
- `N` Don’t save changes
- `Ctrl + O` Save without exiting

### Copy and Move Files

#### Copy File

```bash
# Copy file to destination
cp diana.txt storage/downloads
```

#### Move File (Cut & Paste)

```bash
# Move file to destination
mv diana.txt storage/downloads
```

<br/>

## Networking Tools

### Install Networking Tools

```bash
pkg install dnsutils
```

### Connectivity Test (Ping)

```bash
# Ping an IP address
ping 8.8.8.8

# Ping a domain
ping aparat.com

# Limited ping (10 times)
ping -c 10 8.8.8.8
```

### DNS Lookup

```bash
# Get IP of domain
nslookup nginx.nirevil.ir

# Get full DNS info
dig aparat.com

# Test DNS query speed
dig @8.8.8.8 google.com | grep "Query time"
```

<br/>

## Network Scanning

### Install and Use Nmap

```bash
# Install nmap
pkg install nmap

# Scan open ports
nmap YourIP/Domain

# Quick scan common ports
nmap -F target.com

# OS detection scan
nmap -O target.com
```

<br/>

## Download and Manage Files

### Download Files from Internet

```bash
# Install wget
pkg install wget

# Download file
wget https://example.com/file.zip

# Download file with specific name
wget -O newname.zip https://example.com/file.zip

# Download in background
wget -b https://example.com/largefile.zip
```

### Extract Compressed Files

```bash
# Install unzip
pkg install unzip

# Extract ZIP file
unzip filename.zip

# Extract to specific directory
unzip filename.zip -d /path/to/destination
```

<br/>

## Install Programming Languages

### Python

```bash
# Install Python 3
apt install python

# or
pkg install python

# Check installed version
python --version
python3 --version
```

### PHP

```bash
# Install PHP
apt install php

# or
pkg install php

# Check version
php --version
```

### Node.js

```bash
pkg install nodejs npm
```

### Git

```bash
pkg install git
```

<br/>

## Code Management with Git

::: info Git

Git is a distributed version control system used for managing code and collaborating on projects.

:::

### Git Initial Setup

```bash
# Set username
git config --global user.name "Your Name"

# Set email
git config --global user.email "your.email@example.com"

# Check settings
git config --list
```

### Clone Repository

```bash
# Clone repo from GitHub
git clone https://github.com/username/repository.git

# Clone to specific directory
git clone https://github.com/username/repo.git my-folder

# Clone only latest commit (less size)
git clone --depth 1 https://github.com/username/repo.git
```

### Basic Git Commands

```bash
# Check repo status
git status

# Add files to staging area
git add filename
git add .        # all files
git add *.py     # Python files

# Commit changes
git commit -m "Description message"

# Push changes to remote
git push origin main

# Pull latest changes
git pull origin main

# Show commit history
git log
git log --oneline  # summary
```

### Branch Management

```bash
# Show branches
git branch

# Create new branch
git branch new-feature

# Switch to branch
git checkout new-feature

# Create and switch at same time
git checkout -b new-feature

# Merge branch
git checkout main
git merge new-feature

# Delete branch
git branch -d new-feature
```

<br/>

### Manage Remote Repository

```bash
# Show remotes
git remote -v

# Add new remote
git remote add origin https://github.com/username/repo.git

# Change remote URL
git remote set-url origin https://github.com/username/new-repo.git
```

<br/>

### Useful Git Tricks

```bash
# Undo file changes
git checkout -- filename

# Remove file from Git (not system)
git rm --cached filename

# Show differences
git diff
git diff --staged

# Amend last commit
git commit --amend -m "New message"

# Rollback to previous commit
git reset --soft HEAD~1  # keep changes
git reset --hard HEAD~1  # remove changes
```

<br/>

### Working with GitHub from Termux

For cloning private repos or pushing changes, you need authentication:

```bash
# Use Personal Access Token (recommended)
git clone https://token@github.com/username/private-repo.git

# Or set credential helper
git config --global credential.helper store
```

<br/>

::: danger Important Note

For cloning large repositories from GitHub, it is recommended to use `--depth 1` to download only the latest commit.

:::

<br/>

## Package Management

### Update System

```bash
# Update package lists and install upgrades
apt update && apt upgrade

# or
pkg update && pkg upgrade
```

### Search and Install Packages

```bash
# Search package
pkg search package_name

# Show package info
pkg show package_name

# Uninstall package
pkg uninstall package_name
```

<br/>

## Useful Tips and Tricks

### Command History

```bash
# Show command history
history

# Run last command again
!!

# Search in history
Ctrl + R
```

### Process Management

```bash
# Show running processes
ps aux

# Kill process
kill PID

# Show system resource usage
top
```

### Useful Shortcuts

- `Ctrl + C` Stop current process
- `Ctrl + Z` Suspend process
- `Ctrl + L` Clear terminal
- `Tab` Autocomplete
- `↑/↓`: Browse command history

<br/>

## Common Issues Fixes

### Storage Access Issue  
If you cannot access internal storage:

1. Run `termux-setup-storage`
2. Allow access in confirmation dialog
3. Try again

### Package Installation Issue

```bash
# Clear cache
apt clean

# Update repo list
apt update

# Check storage space
df -h
```

### Set Timezone

```bash
pkg install tzdata
```

<br><br/>

## Download Links

|  **Source**  |     **Download Link**    |
|:--------:| -------------------:|
| F-Droid  | [Get it Now][1] |
| GitHub | [Get it Now][2] |
| Google Play | [Get it Now][3] |
| ISH Shell for IOS | [Get it Now][4] |
| How to fix the installation error of Termux packages on Android 5/6 | [Fix Error s][5] |

> I strongly recommend installing Termux only from the project’s GitHub repo or at most from F-Droid. The Google Play version is a complete disaster: full of strange bugs, commands don’t execute properly, packages don’t update, it’s frustrating. The best choice for any open-source app is always GitHub. Just look for the **Releases** section in the repo.

<br>

## Additional Resources

**For further learning:**

- [Official Docs][6]
- [GitHub Repo][7]
- [Termux Wiki][8]

[^1]: Doesn’t matter how you pronounce the app name: Termux or Termax, both are correct. Australians and British prefer "Termax," Americans more often say "Termux." It comes from Linux Terminal. Don’t worry too much. You can even call it "Asghar" if you like. <br/>

[1]: https://f-droid.org/en/packages/com.termux
[2]: https://github.com/termux/termux-app/releases
[3]: https://play.google.com/store/apps/details?id=com.termux
[4]: https://apps.apple.com/us/app/ish-shell/id1436902243
[5]: https://t.me/F_NiREvil/5040
[6]: https://termux.dev
[7]: https://github.com/termux/termux-app
[8]: https://wiki.termux.com
