# Git hooks, worktrees, sparse checkout

## Hooks
สคริปต์ที่รันอัตโนมัติเมื่อเกิดเหตุการณ์ต่าง ๆ เช่น `pre-commit`, `pre-push`  
ใช้สำหรับตรวจโค้ด/รันเทสก่อนอนุญาตให้ commit/push

## Worktrees
เปิดหลายโฟลเดอร์ทำงานจาก repo เดียว (เหมาะเวลาแก้หลาย branch พร้อมกัน)
```bash
git worktree add ../wt-feature feature/login
```

## Sparse Checkout
ดึงมาเฉพาะบางไดเรกทอรีใน repo ใหญ่
```bash
git sparse-checkout init --cone
git sparse-checkout set src/app docs
```
