# Cherry-pick, reset และ reflog

## Cherry-pick
คัดลอก commit หนึ่งมาวางบน branch ปัจจุบัน
```bash
git cherry-pick <sha>
```

## Reset
```bash
git reset --soft HEAD~1   # เก็บไฟล์ไว้และ staged
git reset --mixed HEAD~1  # (ค่าเริ่มต้น) เก็บไฟล์ไว้ แต่ออกจาก staging
git reset --hard HEAD~1   # ทิ้งการแก้ไข
```

## Reflog
กู้ประวัติที่ดูเหมือนหายไป
```bash
git reflog
git switch -c rescue <sha>
```
