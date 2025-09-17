# Git คืออะไร และการติดตั้ง

**Git** คือระบบควบคุมเวอร์ชันแบบกระจาย (Distributed Version Control System - DVCS) ใช้ติดตามการเปลี่ยนแปลงของไฟล์ในโปรเจกต์
และช่วยให้ทำงานร่วมกันในทีมได้สะดวก

## แนวคิดหลัก
- **Repository (Repo)**: โฟลเดอร์โปรเจกต์ที่มีโฟลเดอร์ซ่อน `.git/` เก็บประวัติทั้งหมด
- **Commit**: การบันทึก snapshot ของไฟล์ พร้อมข้อความอธิบาย
- **Branch**: เส้นทางพัฒนาแยกจากกัน (เช่น `main`, `feature/login`)
- **Merge/Rebase**: นำการเปลี่ยนแปลงจากสาขาหนึ่งไปรวมกับอีกสาขา
- **Remote**: repo ที่อยู่บนเซิร์ฟเวอร์ เช่น GitHub

## ทำไมต้องใช้ Git
- ย้อนเวอร์ชันได้เมื่อพลาด
- ทำงานหลายฟีเจอร์พร้อมกันได้ด้วย branch
- ทำงานเป็นทีมแบบ PR/Review

## การติดตั้ง
### macOS
```bash
brew install git
```
### Windows
ดาวน์โหลด **Git for Windows** (มี Git Bash) จาก <https://git-scm.com/download/win>
### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install git
```

ตรวจสอบเวอร์ชัน:
```bash
git --version
```
