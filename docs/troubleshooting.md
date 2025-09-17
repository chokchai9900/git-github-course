# Troubleshooting

### commit ไปผิด branch
```
git switch branch-ที่ถูก
git cherry-pick <sha-ที่ต้องการ>
git switch branch-ที่ผิด
git reset --hard HEAD~1
```

### conflict เยอะ แก้ไม่ไหว
- ยกเลิก: `git merge --abort` หรือ `git rebase --abort`
- แบ่งย่อยงาน แล้วรวมทีละส่วน

### หายไปไหนไม่รู้
- ใช้ `git reflog` เพื่อหา sha แล้วสร้าง branch ช่วยกู้: `git switch -c rescue <sha>`

### push ไม่ได้
- ตามหลัง remote: `git pull --rebase` แล้ว `git push`
- นโยบายป้องกัน: เปิด PR แทนการ push ตรง
