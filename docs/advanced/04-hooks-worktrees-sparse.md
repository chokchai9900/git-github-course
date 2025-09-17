# Hooks, Worktrees, Sparse Checkout

**Hooks**: `.git/hooks/pre-commit` etc.  
**Worktrees**:
```bash
git worktree add ../wt-feature feature/login
```
**Sparse**:
```bash
git sparse-checkout init --cone
git sparse-checkout set src docs
```
