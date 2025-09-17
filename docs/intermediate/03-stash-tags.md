# การใช้ stash, tag และ release

## เก็บงานชั่วคราวด้วย stash
```bash
git stash push -m "WIP: ปรับ UI หน้า login"
git stash list
git stash show -p stash@{0}
git stash apply stash@{0}   # หรือ: pop
```

## สร้าง tag สำหรับ release
```bash
git tag v1.0.0                      # แบบ lightweight
git tag -a v1.0.0 -m "รุ่นแรก"     # แบบ annotated
git push origin v1.0.0
```
คำแนะนำ: ใช้ annotated tag สำหรับ release เพราะมี metadata ครบ
