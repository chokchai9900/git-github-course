# Git คืออะไร และการติดตั้ง

Git คือ **ระบบควบคุมเวอร์ชันแบบกระจาย (Distributed Version Control System - DVCS)**  
ใช้สำหรับติดตามและจัดการการเปลี่ยนแปลงของไฟล์ในโครงการ โดยเฉพาะโค้ดโปรแกรม

## แนวคิดหลักของ Git
- **Repository (Repo)**: ฐานข้อมูลเก็บประวัติทั้งหมด
- **Commit**: การบันทึก snapshot ของไฟล์ พร้อมข้อความ
- **Branch**: เส้นทางการพัฒนาที่แยกออกจากกัน
- **Merge**: การรวม branch
- **Remote**: repository ที่อยู่บน server เช่น GitHub

## ทำไมต้องใช้ Git
- ทำงานร่วมกันในทีมได้ง่าย
- ย้อนเวอร์ชันได้
- ทดลอง feature ได้โดยไม่กระทบงานหลัก

## การติดตั้ง Git
### บน macOS
```bash
brew install git
```
### บน Windows
ดาวน์โหลดจาก [git-scm.com](https://git-scm.com/download/win)
### บน Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install git
```

ตรวจสอบเวอร์ชัน:
```bash
git --version
```
