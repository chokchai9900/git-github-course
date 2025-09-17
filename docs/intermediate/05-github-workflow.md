# การทำงานร่วมกันบน GitHub (Issues, PR, Review)

## ขั้นตอนมาตรฐาน
1) เปิด **Issue** อธิบายงานที่จะทำ  
2) สร้าง **branch** เชื่อมโยงกับ issue นั้น  
3) push และเปิด **Pull Request** (PR)  
4) ขอ review, แก้ไขตามคอมเมนต์  
5) **Merge** (นิยมใช้ **Squash** เพื่อให้ประวัติสะอาด)

## การป้องกัน
- เปิด **branch protection**: บังคับ review และ CI ผ่านก่อน merge
- Require linear history (ทางทีม)

## อัตโนมัติ
- Labels, auto-assign, templates
- ใช้ **GitHub Actions** สำหรับ CI
