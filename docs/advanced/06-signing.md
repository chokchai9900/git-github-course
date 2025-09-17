# GPG/SSH Signing & Verified Commits

**GPG**
```bash
gpg --full-generate-key
gpg --list-secret-keys --keyid-format=long
git config --global user.signingkey <key-id>
git config --global commit.gpgsign true
```

**SSH**
- Add your SSH public key to GitHub.
- Use `git@github.com:<user>/<repo>.git`.
