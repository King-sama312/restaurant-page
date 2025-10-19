#!/bin/bash

# 1️⃣ Build the site
echo "Building the site..."
npm run build

# 2️⃣ Switch to gh-pages branch
echo "Switching to gh-pages branch..."
git checkout gh-pages

# 3️⃣ Merge latest main
echo "Merging main into gh-pages..."
git merge main --no-edit

# 4️⃣ Push dist folder to gh-pages
echo "Pushing dist folder to gh-pages..."
git add dist -f
git commit -m "Deploy updated site" || echo "No changes to commit"
git subtree push --prefix dist origin gh-pages

# 5️⃣ Switch back to main
echo "Switching back to main branch..."
git checkout main

echo "✅ Deployment complete!"
