# การใช้ Git LFS

ใช้จัดการไฟล์ใหญ่/ไบนารีไม่ให้ทำให้ repo บวม

```bash
git lfs install
git lfs track "*.png"
git add .gitattributes
git add image.png
git commit -m "track ภาพด้วย LFS"
git push
```
