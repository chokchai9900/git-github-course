# การทำงานอัตโนมัติด้วย GitHub Actions

ตัวอย่าง workflow ขั้นต่ำ (รันทันทีเมื่อมี Pull Request)

```yaml
name: ci
on:
  pull_request:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Run your tests here"
```

คำแนะนำ:
- ป้องกัน branch `main` ให้ต้องผ่าน CI ก่อน merge
- ใช้ secrets/environments สำหรับ deploy
