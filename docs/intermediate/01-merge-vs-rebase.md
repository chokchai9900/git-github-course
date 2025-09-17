# ความแตกต่างระหว่าง merge และ rebase

**Merge** จะสร้าง merge commit และรักษารูปร่างประวัติเดิม  
**Rebase** จะยก commit ของเราไปวางบนฐานใหม่ เพื่อให้ประวัติดูเป็นเส้นตรง

```bash
# Merge
git switch main
git merge feature/x

# Rebase
git switch feature/x
git rebase main
```

### ใช้เมื่อไรดี?
- ใช้ **merge** เมื่อ branch ถูกแชร์กับทีม เพื่อลดความเสี่ยง
- ใช้ **rebase** เพื่อเก็บกวาดประวัติส่วนตัวก่อนเปิด PR

> ⚠️ **อย่า rebase branch ที่เผยแพร่แล้ว** (มีคนอื่นดึงไปใช้)
