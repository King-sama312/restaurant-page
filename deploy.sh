#!/bin/bash

# Safe Odin Project deployment script
# Works in WSL/Linux

# 1️⃣ Build the project
echo "🚀 Building the site..."
npm run build || { echo "❌ Build failed!"; exit 1; }

# 2️⃣ Stage dist folder (optional commit)
git add dist -f
git commit -m "Deploy updated site" || echo "ℹ️ No changes to commit"

# 3️⃣ Push dist folder to gh-pages without switching branches
echo "📤 Pushing dist/ to gh-pages..."
git push origin `git subtree split --prefix dist main`:gh-pages --force || { echo "❌ Push failed!"; exit 1; }

echo "✅ Deployment complete! Your site should be live."
