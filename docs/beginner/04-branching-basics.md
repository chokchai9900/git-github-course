# การใช้งาน branch เบื้องต้น

## สร้าง/สลับ branch
```bash
git branch feature/login
git switch feature/login         # หรือ: git checkout -b feature/login
```

## รวมงาน (merge)
```bash
git switch main
git merge feature/login
```

## ลบ branch
```bash
git branch -d feature/login
```

> 💡 **ทิป**: ตั้งชื่อ branch ให้สื่อความหมาย เช่น `feature/payment`, `fix/crash-on-startup` และทำงานอย่างละเรื่องต่อ branch
