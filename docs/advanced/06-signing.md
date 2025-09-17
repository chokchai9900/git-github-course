# การเซ็น commit ด้วย GPG/SSH

การเซ็น commit ทำให้เห็นตรา **Verified** และยืนยันแหล่งที่มา

## GPG
```bash
gpg --full-generate-key
gpg --list-secret-keys --keyid-format=long
git config --global user.signingkey <key-id>
git config --global commit.gpgsign true
```
อัปโหลด public key ไปที่ GitHub (Settings → SSH and GPG keys)

## SSH
- เพิ่ม SSH key ไปที่ GitHub
- ใช้ remote แบบ `git@github.com:<user>/<repo>.git`
