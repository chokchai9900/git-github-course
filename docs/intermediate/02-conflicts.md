# การแก้ conflict

Conflict เกิดเมื่อมีการแก้ไขบรรทัดเดียวกันต่าง branch

## ขั้นตอน
```bash
git merge featureX   # หรือ rebase
# แก้ไฟล์ที่ conflict ให้เหลือโค้ดที่ต้องการ
git add <ไฟล์>
git commit           # หรือ: git rebase --continue
```

## เครื่องมือช่วย
- VS Code merge editor
- `git mergetool`

> 💡 **ทิป**: rebase จาก `main` บ่อย ๆ ก่อนเปิด PR เพื่อลดโอกาสเกิด conflict ใหญ่
