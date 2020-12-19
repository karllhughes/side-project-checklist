if [ -n "$GITHUB_API_KEY" ]; then
  cd "$TRAVIS_BUILD_DIR"
  git clone https://karllhughes:$GITHUB_API_KEY@github.com/portable-cto/side-project-checklist
  cd side-project-checklist
  git checkout gh-pages
  git merge master
  npm install
  git add -A
  git -c user.name='travis' -c user.email='travis' commit -m init
  git push -f -q https://karllhughes:$GITHUB_API_KEY@github.com/portable-cto/side-project-checklist gh-pages &2>/dev/null
  cd "$TRAVIS_BUILD_DIR"
  echo "Build and push complete."
fi
echo "Script complete."
