# การใช้ .gitignore และ .gitattributes

## .gitignore
บอก Git ว่าไฟล์ไหนไม่ควรถูกติดตาม  
ตัวอย่างทั่วไป:
```
node_modules/
dist/
*.log
.env
.DS_Store
```

## .gitattributes
ควบคุมพฤติกรรมของ Git ต่อไฟล์ (เช่น line endings, diff, merge)
```
* text=auto
*.lock binary
*.psd binary
```

> 💡 **ทิป**: ตั้งค่า `.gitattributes` เพื่อให้ diff สวยขึ้นสำหรับไฟล์บางประเภท เช่น `*.sql diff=sql`
