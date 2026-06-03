# Hướng dẫn đưa portfolio lên GitHub (đơn giản)

Site của bạn nằm trong thư mục: `mayanvie.github.io`

Sau khi đẩy lên GitHub đúng cách, trang sẽ hiện tại:

**https://mayanvie.github.io**

---

## Bước 1 — Tạo repository trên GitHub

1. Đăng nhập [github.com](https://github.com) (tài khoản **mayanvie**).
2. Bấm **New repository** (nút xanh).
3. **Repository name:** gõ chính xác `mayanvie.github.io` (không thêm chữ khác).
4. Chọn **Public**.
5. **Không** tick "Add a README" (thư mục máy bạn đã có file rồi).
6. Bấm **Create repository**.

---

## Bước 2 — Copy file từ máy lên GitHub

### Cách A — Kéo thả (dễ nhất)

1. Trên trang repo mới tạo, chọn **uploading an existing file**.
2. Mở thư mục `C:\Users\Administrator\mayanvie.github.io` trên máy.
3. Kéo **toàn bộ** file và folder vào (trừ file `.git` nếu có).
4. Commit message: `Add portfolio site`
5. Bấm **Commit changes**.

### Cách B — Dùng GitHub Desktop (nếu sau này hay sửa)

1. Tải [GitHub Desktop](https://desktop.github.com/).
2. **File → Add local repository** → chọn folder `mayanvie.github.io`.
3. **Publish repository** → tên `mayanvie.github.io`.
4. Mỗi lần sửa xong: **Commit** → **Push origin**.

---

## Bước 3 — Bật GitHub Pages (thường tự bật)

1. Vào repo → **Settings** → **Pages** (menu trái).
2. **Source:** Deploy from a branch.
3. **Branch:** `main` (hoặc `master`) → folder **/ (root)**.
4. Save.

Đợi 1–5 phút, refresh **https://mayanvie.github.io**

---

## Thêm CV sau

1. Xuất CV ra file PDF.
2. Đặt tên **`resume.pdf`**.
3. Copy vào folder `cv/` trong project.
4. Upload lại lên GitHub (hoặc push bằng Desktop).

Nút **Download CV** sẽ tự hoạt động.

---

## Cập nhật nội dung sau này

| Muốn sửa | File |
|----------|------|
| Trang chủ | `index.html` |
| Danh sách work | `work.html` |
| Case onboarding | `cases/onboarding.html` |
| Cách làm việc | `how-i-work.html` |
| Giới thiệu | `about.html` |
| Màu, font, nút | `css/style.css` |

Sửa file → upload/push lại → đợi vài phút trang cập nhật.

---

## Lỗi thường gặp

| Vấn đề | Cách xử lý |
|--------|------------|
| Trang 404 | Tên repo phải đúng `mayanvie.github.io`; file `index.html` phải ở **gốc** repo |
| Nút CV không tải được | Chưa có `cv/resume.pdf` — thêm file PDF |
| Trang trắng / lỗi | Kiểm tra tên file, không đổi tên folder `css` |

---

Cần hỗ trợ thêm: gửi screenshot màn hình lỗi hoặc link repo.