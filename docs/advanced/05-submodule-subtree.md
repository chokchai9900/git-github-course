# Submodule และ subtree

## Submodule
ลิงก์ repo ภายนอกเข้ามาที่ path หนึ่ง และล็อกที่ commit เฉพาะ
```bash
git submodule add https://github.com/org/lib.git libs/lib
git submodule update --init --recursive
```

## Subtree
นำโค้ดจาก repo ภายนอกมาเก็บในประวัติของ repo เรา สะดวกกับ CI
```bash
git subtree add --prefix=libs/lib https://github.com/org/lib.git main --squash
```
