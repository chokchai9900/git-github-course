# Setup & First Commit

**Identify yourself**
```bash
git config --global user.name  "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

**Create a repo**
```bash
mkdir my-app && cd my-app
git init
echo "# My App" > README.md
git add README.md
git commit -m "chore: initial commit"
```
