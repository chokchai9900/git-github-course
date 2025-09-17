# การทำงานกับ remote และ GitHub

## เชื่อมต่อกับ GitHub
1) สร้าง repository บน GitHub (อย่าใส่ README เพื่อหลีกเลี่ยง conflict)  
2) เชื่อมต่อและ push
```bash
git remote add origin https://github.com/<คุณ>/<ชื่อ-repo>.git
git push -u origin main
```

## ดึงโค้ด
```bash
git fetch origin
git pull            # = fetch + merge (ของ branch ปัจจุบัน)
git clone https://github.com/<คุณ>/<ชื่อ-repo>.git
```

> 💡 **ทิป**: ใช้ Pull Request (PR) เพื่อขอ review ก่อน merge เข้าสู่ `main`
