# Hooks, Worktrees, Sparse Checkout

Hooks in `.git/hooks/`.

```bash
git worktree add ../wt feature/x

git sparse-checkout init --cone
git sparse-checkout set src docs
```
