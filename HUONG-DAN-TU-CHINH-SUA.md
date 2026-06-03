# Hướng dẫn tự chỉnh portfolio (không cần AI)

Tài liệu này dành cho **Le Kieu Duyen** — khi bạn muốn tự sửa nội dung trên GitHub, không qua công cụ AI. Site là **HTML tĩnh** (không WordPress, không database), nên việc “copy–sửa–đẩy lại” khá thẳng.

**Site live:** https://mayanvie.github.io  
**Đẩy lên GitHub lần đầu:** xem [HUONG-DAN-DAY-LEN-GITHUB.md](./HUONG-DAN-DAY-LEN-GITHUB.md)

---

## 1. Tự edit trên GitHub có tiện không?

**Có — với loại site này thì khá tiện**, nếu bạn chủ yếu đổi **chữ, link, ảnh, thêm mục mới** (không đổi layout phức tạp).

| Tiện | Hạn chế |
|------|---------|
| Mỗi trang = 1 file `.html`, mở là thấy nội dung | Sửa CSS (`style.css`) cần cẩn thận hơn (dễ lệch giao diện) |
| Thêm case study = thêm file trong `cases/` + link từ `work.html` | Không có “nút Add post” như Notion — phải copy khối HTML có sẵn |
| GitHub có nút **Edit** từng file trên web | Preview trên GitHub không giống 100% trang thật — nên xem lại sau 1–5 phút trên mayanvie.github.io |
| Miễn phí hosting qua GitHub Pages | Ảnh nặng làm trang chậm — nên resize ảnh trước khi upload |

**Cách làm quen dần (khuyên dùng):**

1. **GitHub Desktop** — sửa file trên máy bằng Notepad / VS Code → Commit → Push.  
2. Hoặc **sửa trực tiếp trên github.com** — vào file → biểu tượng bút → sửa → Commit changes.

**Xem trước trên máy (không cần internet public):**

- Double-click `MO-XEM-DEMO.bat`, hoặc  
- Chạy `serve-preview.ps1` → mở http://localhost:8765  
- Điện thoại cùng Wi‑Fi: mở `mobile-preview.html` để lấy QR.

---

## 2. Site đang kể câu chuyện gì?

Đây là **portfolio L&D / Learning Operations** cho vị trí tại Việt Nam — không phải blog đời sống, mà là **một luồng “tại sao mình làm việc này”**.

### Khung ba phần (xuyên suốt Home + Work)

1. **I listen** — Tutoring, dẫn triển lãm: đọc được khi người học “kẹt” nhưng không nói.  
2. **I structure** — Thiết kế onboarding, checklist, module: tuần đầu không phụ thuộc “ai trực ca đó”.  
3. **I keep learning** — Substack: học thuật về trí nhớ, động lực, người lớn học thế nào.

### Thông điệp chính gửi nhà tuyển dụng

- Bạn **chuyển hướng** sang Learning & Talent Operations (có nền Văn hóa học, startup, gallery, dạy tiếng Anh).  
- Bạn quan tâm **cả nội dung lẫn cảm giác an toàn** khi mới vào (How I Work).  
- Bạn có **một case đầy đủ nhất**: onboarding Art Experience Guide (portfolio reconstruction, trung thực là chưa ship sản phẩm thật).  
- Bạn **chưa chạy LMS enterprise** nhưng hiểu module, completion, enrollment — sẵn sàng học tool (iLearn, v.v.).  
- Bạn viết công khai trên Substack → chứng minh tư duy learning science.

### Từng trang — vai trò trong câu chuyện

| Trang | Vai trò |
|-------|---------|
| **Home** | Chào + ảnh + 3 thread + “Selected work” dẫn vào case chính |
| **Work** | Chi tiết 3 act; case onboarding; danh sách bài Substack |
| **How I Work** | Quy trình 5 bước + tool + đoạn LMS (trung thực về gap kỹ năng) |
| **About** | Lý do làm L&D, timeline CV, 3 strength |
| **cases/onboarding.html** | Case study dài — bằng chứng kỹ thuật |

**Điều site chưa kể (cố ý hoặc đang “coming soon”):** case facilitation (Act 1), screenshot vật liệu onboarding, nhiều dự án corporate — phần “In progress” trên Work đã ghi nhận.

---

## 3. Bản đồ file — sửa ở đâu?

```
mayanvie.github.io/
├── index.html          ← Trang chủ
├── work.html           ← Danh sách project / Substack
├── how-i-work.html     ← Quy trình + tools + LMS
├── about.html          ← Giới thiệu + timeline
├── cases/
│   └── onboarding.html ← Case study dài (copy file này khi thêm case mới)
├── css/
│   └── style.css       ← Màu, font, layout (chỉ sửa khi cần đổi giao diện)
├── images/
│   └── profile.png     ← Ảnh đại diện (đổi file hoặc upload ảnh mới, giữ tên hoặc sửa đường dẫn trong HTML)
├── cv/
│   └── resume.pdf      ← CV tải về
├── HUONG-DAN-DAY-LEN-GITHUB.md
└── HUONG-DAN-TU-CHINH-SUA.md   ← File này
```

**Menu trên mọi trang** nằm trong `<header class="site-header">` — nếu thêm trang mới, nhớ copy header/footer từ trang cũ.

---

## 4. Mở rộng — có dễ không?

### Thêm project / case study mới

**Mức dễ: trung bình** — copy template có sẵn, không cần code từ đầu.

1. Copy `cases/onboarding.html` → `cases/ten-case-moi.html`.  
2. Sửa tiêu đề, đoạn văn, link trong file mới.  
3. Trong `work.html`, Act 2 (I structure): copy khối `<article class="work-card">` … và đổi chữ + `href="cases/ten-case-moi.html"`.  
4. (Tuỳ chọn) Trên `index.html`, phần **Selected work**: copy `<article class="shape-card shape-card--wide">` hoặc thêm card thứ hai.  
5. Commit → đợi GitHub Pages cập nhật.

**Gợi ý:** Giữ nhãn **Portfolio reconstruction** / **Client work** / **Academic** cho trung thực với recruiter.

### Thêm kỹ năng / tool

| Muốn thêm | File |
|-----------|------|
| Tool (Notion, Sheets, …) | `how-i-work.html` — trong `<div class="skill-tags">`, thêm `<span class="tag">Tên tool</span>` |
| Strength “What I bring” | `about.html` — copy một `<article class="about-card">` … `</article>` |
| Kỹ năng trên CV | Chỉ cần đổi `cv/resume.pdf` — site không tự đồng bộ từ PDF |

**Mức dễ: dễ** — chỉ thêm dòng HTML trong khối có sẵn.

### Thêm bài Substack / bài viết khác

**Mức dễ: dễ.**

Trong `work.html`, Act 3, copy một `<article class="lab-card">` … `</article>`:

- Đổi `lab-date`, `h3`, mô tả `p`, và `href` link Substack.  
- Bài không phải Substack: vẫn dùng `lab-card`, link ra URL bài viết.

### Thêm timeline (việc mới, học thêm)

`about.html` — copy cả `<li class="path-timeline__item">` … `</li>`, sửa `<time>`, title, meta.

### Thêm trang hoàn toàn mới (ví dụ “Skills”)

1. Copy `about.html` → `skills.html`.  
2. Đổi nội dung trong `<main>`.  
3. Thêm link vào menu `<nav>` trên **mọi** file HTML.  
4. Upload file mới lên GitHub.

---

## 5. Quy trình sửa an toàn (checklist)

1. **Sửa trên máy** hoặc Edit trên GitHub.  
2. **Preview local** (`MO-XEM-DEMO.bat`) — click qua Home, Work, About, case study.  
3. **Kiểm tra:** nút Download CV, link Substack/LinkedIn, ảnh profile có hiện không.  
4. **Commit** với message rõ, ví dụ: `Update onboarding case copy` hoặc `Add Substack post Dec 2026`.  
5. Đợi **2–5 phút**, mở https://mayanvie.github.io (Ctrl+F5 để xóa cache).  

**Đừng đổi tên folder** `css`, `cases`, `images` — link trong HTML sẽ gãy.

---

## 6. Khi nào nên nhờ AI / dev lại?

- Đổi layout lớn (menu mới, blog tự động, đa ngôn ngữ).  
- Thêm animation / form liên hệ / CMS.  
- Sửa `style.css` mà trang vỡ trên mobile.  

Với **thêm chữ, project, bài, ảnh, PDF CV** — bạn có thể tự làm ổn trên GitHub.

---

## 7. Tóm tắt một dòng

Site đang kể: **“Mình nghe người học → bọc thành chương trình rõ ràng → học và viết liên tục; đây là bằng chứng (case + Substack + timeline).”**  
Công nghệ **HTML tĩnh + GitHub Pages** = sau này **tự sửa trên GitHub rất khả thi**, mở rộng project/bài/kỹ năng bằng **copy khối HTML có sẵn**.

---

*Cập nhật: tháng 6/2026 — khớp với phiên bản site hiện tại (About custom, step cards viền, Selected work không khung ngoài).*