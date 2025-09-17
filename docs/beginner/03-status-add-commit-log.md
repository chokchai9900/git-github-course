# ทำงานกับไฟล์: status, add, commit, log

## วัฏจักรไฟล์สามสถานะ
- **Working directory**: ไฟล์ที่แก้ไขในเครื่อง
- **Staging area (index)**: ไฟล์ที่คัดเลือกไว้สำหรับ commit
- **Repository**: ประวัติที่ถูก commit แล้ว

## คำสั่งหลัก
```bash
git status
git add <ไฟล์>                 # เพิ่มเข้า staging
git restore --staged <ไฟล์>     # เอาออกจาก staging
git commit -m "ข้อความ"
git log --oneline --graph --decorate
git show HEAD                   # ดู commit ล่าสุด
git diff                        # ดูความต่างก่อน staging
git diff --staged               # ดูความต่างที่ staging
```
> 🧪 **ลองทำ**: แก้ไฟล์เดิม, ใช้ `git add -p` เพื่อเลือกบรรทัดที่จะ commit ทีละส่วน
