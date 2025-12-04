---
description: How to deploy the AeroBIA application
---

# Deployment Guide

You have two easy options to publish your site for free: **Vercel** (easiest) or **GitHub Pages**.

## Option 1: Vercel (Recommended)

1.  Create an account on [Vercel.com](https://vercel.com).
2.  Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```
3.  Run the deploy command in your project folder:
    ```bash
    vercel
    ```
4.  Follow the prompts (mostly just press Enter to accept defaults).

## Option 2: GitHub Pages

1.  Initialize Git (if not done):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Create a repository on GitHub.
3.  Link your local repo to GitHub:
    ```bash
    git remote add origin <YOUR_GITHUB_REPO_URL>
    git branch -M main
    git push -u origin main
    ```
4.  Install `gh-pages` package:
    ```bash
    npm install gh-pages --save-dev
    ```
5.  Add these scripts to `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
6.  Add `base` to `vite.config.js` (replace REPO_NAME with your repo name):
    ```js
    base: '/REPO_NAME/',
    ```
7.  Deploy:
    ```bash
    npm run deploy
    ```
