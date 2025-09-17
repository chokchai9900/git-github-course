# การตั้งค่า Git และ commit ครั้งแรก

## ตั้งค่าผู้ใช้
```bash
git config --global user.name "ชื่อของคุณ"
git config --global user.email "อีเมลของคุณ"
```

## สร้าง repository
```bash
mkdir my-first-repo
cd my-first-repo
git init
```

## Commit ครั้งแรก
```bash
echo "# โปรเจกต์แรกของฉัน" > README.md
git add README.md
git commit -m "เพิ่มไฟล์ README.md เป็น commit แรก"
```

## ดูประวัติ
```bash
git log --oneline
```
