# การใช้ bisect เพื่อตามหา commit ที่ผิดพลาด

ใช้วิธี binary search หา commit ที่ทำให้เกิดบั๊ก

```bash
git bisect start
git bisect bad HEAD
git bisect good v1.0.0     # หรือระบุ sha ที่แน่ใจว่าดี
# ทดสอบแต่ละขั้น แล้วสั่ง:
git bisect good
git bisect bad
git bisect reset
```
