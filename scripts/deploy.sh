if [ -n "$GITHUB_API_KEY" ]; then
  # cd "$TRAVIS_BUILD_DIR"
  cd web
  git clone https://karllhughes:$GITHUB_API_KEY@github.com/karllhughes/side-project-checklist
  git checkout -b deploy
  npm install
  npm run gen:products
  npm run gen:checklists
  git add -A
  git -c user.name='travis' -c user.email='travis' commit -m init
  # git push -f -q https://karllhughes:$GITHUB_API_KEY@github.com/karllhughes/side-project-checklist gh-pages &2>/dev/null
  # cd "$TRAVIS_BUILD_DIR"
  echo "Build and push complete."
fi
echo "Script complete."
