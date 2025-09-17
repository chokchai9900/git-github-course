# Submodules vs Subtrees

Submodule:
```bash
git submodule add https://github.com/org/lib.git libs/lib
```
Subtree:
```bash
git subtree add --prefix=libs/lib https://github.com/org/lib.git main --squash
```
