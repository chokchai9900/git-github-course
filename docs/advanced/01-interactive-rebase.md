# การใช้ interactive rebase

ใช้เพื่อจัดระเบียบ commit ก่อน merge (เช่น รวม commit เล็ก ๆ ให้เป็นก้อนเดียว)

```bash
git rebase -i HEAD~5
# เลือก: pick / reword / squash / fixup ตามต้องการ
```

แนวทางเขียนข้อความ commit:
- ใช้คำสั่ง (imperative): "เพิ่ม", "แก้", "ลบ"
- commit หนึ่งควรมีการเปลี่ยนแปลงหนึ่งเรื่อง
