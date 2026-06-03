# Git local trên Windows — tài khoản **mayanvie** (riêng với MCP/AI)

Trên máy bạn có thể dùng **hai kênh GitHub khác nhau**:

| Kênh | Tài khoản thường gặp | Dùng khi nào |
|------|----------------------|--------------|
| **MCP GitHub trong Grok/Cursor** | Có thể là Logos52 (hoặc account đã auth sẵn) | AI push/sửa repo qua công cụ — **không** thay thế Git trên máy |
| **Git trên Windows (local)** | **mayanvie** — bạn tự cấu hình | Bạn tự `commit` / `push` portfolio từ folder `mayanvie.github.io` |

Hai kênh **không tự đồng bộ**. Muốn site ở https://mayanvie.github.io thì push phải từ tài khoản **mayanvie** qua Git local (hoặc upload trên web khi đăng nhập mayanvie).

---

## Bước 0 — Cài Git (máy bạn chưa có `git` trong PATH)

1. Tải **Git for Windows**: https://git-scm.com/download/win  
2. Cài mặc định, tick **Git Credential Manager** (GCM).  
3. Mở PowerShell mới, chạy: `git --version` — phải ra số phiên bản.

(Tuỳ chọn) **GitHub Desktop**: https://desktop.github.com — dễ quản lý nhiều tài khoản, vẫn nên hiểu Git cơ bản.

---

## Bước 1 — Chỉ định identity **chỉ trong folder portfolio**

Không cần đổi Git global của cả máy (tránh lẫn với account khác).

Mở PowerShell:

```powershell
cd C:\Users\Administrator\mayanvie.github.io
git init
git config user.name "Le Kieu Duyen"
git config user.email "kieuduyen.contact@gmail.com"
```

Kiểm tra (chỉ repo này):

```powershell
git config --local --list
```

File lưu tại: `mayanvie.github.io\.git\config` — đây là **local settings** của project.

---

## Bước 2 — Đăng nhập GitHub **mayanvie** (chọn 1 cách)

### Cách A — HTTPS + Git Credential Manager (dễ nhất)

1. Trên GitHub (đăng nhập **mayanvie**): tạo repo **`mayanvie.github.io`** (public).  
2. Trong folder portfolio:

```powershell
git remote add origin https://github.com/mayanvie/mayanvie.github.io.git
git add .
git commit -m "Initial portfolio"
git push -u origin main
```

3. Lần đầu `push`, Windows/GCM mở cửa sổ đăng nhập → chọn **mayanvie** (không chọn Logos52).  
4. Nếu nhầm account: **Windows Settings → Accounts → Email & accounts** hoặc GCM:

```powershell
git credential-manager github logout
git credential-manager github login
```

Chọn đúng tài khoản **mayanvie** khi login lại.

**Mẹo tránh lẫn account HTTPS:** bật credential theo đường dẫn repo:

```powershell
git config credential.useHttpPath true
```

Mỗi user/repo có thể lưu token riêng.

**Token (nếu GitHub bắt PAT thay mật khẩu):**  
mayanvie → Settings → Developer settings → Personal access tokens → tạo token (quyền `repo`), dùng làm password khi push.

---

### Cách B — SSH key riêng cho mayanvie (ổn định lâu dài)

1. Tạo key **chỉ cho mayanvie**:

```powershell
ssh-keygen -t ed25519 -C "kieuduyen.contact@gmail.com" -f "$env:USERPROFILE\.ssh\id_ed25519_mayanvie"
```

2. File `C:\Users\Administrator\.ssh\config` (tạo nếu chưa có):

```
Host github.com-mayanvie
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_mayanvie
  IdentitiesOnly yes
```

3. Copy public key:

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519_mayanvie.pub | Set-Clipboard
```

4. GitHub **mayanvie** → Settings → SSH and GPG keys → New SSH key → dán.  
5. Remote dùng host alias:

```powershell
cd C:\Users\Administrator\mayanvie.github.io
git remote add origin git@github.com-mayanvie:mayanvie/mayanvie.github.io.git
git push -u origin main
```

Account **Logos52** có thể giữ SSH/key khác — không đụng file `id_ed25519_mayanvie`.

---

## Bước 3 — Repo đích và Pages

- Tên repo user site: **`mayanvie.github.io`** (đúng chữ, public).  
- Sau push: Settings → Pages → branch **main**, folder **/ (root)**.  
- Site: https://mayanvie.github.io  

**Không** dùng repo `Logos52/mayanvie.github.io` cho URL mayanvie.github.io (đó là account khác). Nếu đã có bản copy trên Logos52 và không cần, có thể xóa repo đó trên GitHub Logos52.

---

## Bước 4 — Script nhanh trên máy bạn

Chạy một lần (sau khi cài Git):

```powershell
powershell -ExecutionPolicy Bypass -File "C:\Users\Administrator\mayanvie.github.io\git-setup-mayanvie.ps1"
```

Script chỉ: `git init` + `user.name` / `user.email` local + nhắc thêm `remote`. **Không** tự push.

---

## Khi làm việc với AI (Grok)

Trước khi nhờ AI push lên GitHub, nói rõ:

- «Chỉ hướng dẫn / chỉ push nếu dùng tài khoản **mayanvie**»  
- Hoặc: «Không push — tớ tự push local»

MCP đang auth account nào: AI có thể kiểm tra bằng `get_me` — nếu không phải mayanvie thì **không** push thay bạn.

---

## Tóm tắt

1. Cài Git + Credential Manager.  
2. `git config` **local** trong `mayanvie.github.io` (tên + email của bạn).  
3. Đăng nhập **mayanvie** (HTTPS lần đầu push, hoặc SSH key riêng).  
4. Remote → `mayanvie/mayanvie.github.io` → push → bật Pages.  

Như vậy máy Windows dùng **credentials local của mayanvie**, tách khỏi tài khoản MCP (ví dụ Logos52).