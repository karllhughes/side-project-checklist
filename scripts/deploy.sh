if [ -n "$GITHUB_API_KEY" ]; then
  cd "$TRAVIS_BUILD_DIR"
  git checkout -b gh-pages
  git add .
  git -c user.name='travis' -c user.email='travis' commit -m init
  # Make sure to make the output quiet, or else the API token will leak!
  # This works because the API key can replace your password.
  git push -f -q https://karllhughes:$GITHUB_API_KEY@github.com/karllhughes/side-project-checklist gh-pages &2>/dev/null
  cd "$TRAVIS_BUILD_DIR"
  echo "Build and push complete."
fi
echo "Script complete."
