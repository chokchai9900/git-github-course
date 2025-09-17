# การตั้งค่า Git และ commit ครั้งแรก

## ตั้งค่าผู้ใช้ (บันทึกใน commit)
```bash
git config --global user.name  "ชื่อของคุณ"
git config --global user.email "อีเมลของคุณ"
git config --global init.defaultBranch main
```

## สร้าง repo แรก
```bash
mkdir my-first-repo && cd my-first-repo
git init
echo "# โปรเจกต์แรกของฉัน" > README.md
git add README.md
git commit -m "เพิ่ม README.md เป็น commit แรก"
```

ตรวจสอบ:
```bash
git log --oneline
```

> 💡 **ทิป**: ใช้ข้อความ commit แบบกระชับ เช่น `feat: เพิ่มหน้า login`, `fix: แก้ error เวลาโหลดรูป`
