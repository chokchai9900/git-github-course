# Merge vs Rebase

- **Merge**: preserve history; creates a merge commit.
- **Rebase**: rewrite commits onto a new base; linear history.

```bash
# Merge
git switch main
git merge feature/x

# Rebase
git switch feature/x
git rebase main
```
