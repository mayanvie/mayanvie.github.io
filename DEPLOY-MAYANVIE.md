# Deploy notes — mayanvie.github.io

## Current hosting (temporary)

This portfolio is published on **Logos52/mayanvie.github.io** while the site is being set up.

**Preview URL (works now):** https://logos52.github.io/mayanvie.github.io/

GitHub Pages for a user/org site only serves at `https://<owner>.github.io` when the repository name matches that pattern (e.g. `mayanvie/mayanvie.github.io`). A repo named `mayanvie.github.io` under **Logos52** is a **project site**, so the public URL is under the Logos52 account, not `mayanvie.github.io`.

## What you need for https://mayanvie.github.io

1. Sign in to GitHub as **mayanvie** (your personal account).
2. Create a **new public** repository named exactly: `mayanvie.github.io`
   - Do **not** add a README on create (this folder already has the site).
3. Choose **one** of these options:

### Option A — Transfer the repo (if GitHub allows)

- On **Logos52/mayanvie.github.io** → **Settings** → **Danger Zone** → **Transfer ownership** → transfer to user **mayanvie**.
- After transfer, enable **Pages**: Settings → Pages → branch `main`, folder `/ (root)`.
- Wait 1–5 minutes; open https://mayanvie.github.io

### Option B — Re-upload / push from your machine

- Copy everything from this project folder to the new repo (drag-and-drop upload, GitHub Desktop, or `git push`).
- Enable Pages on `main` as above.

### Option C — Fork is not enough

Forking to **mayanvie** does **not** give you `https://mayanvie.github.io` unless the repo on **mayanvie** is literally named `mayanvie.github.io`.

## After you own the repo

| Task | Where |
|------|--------|
| First-time GitHub steps (Vietnamese) | [HUONG-DAN-DAY-LEN-GITHUB.md](./HUONG-DAN-DAY-LEN-GITHUB.md) |
| Self-edit content | [HUONG-DAN-TU-CHINH-SUA.md](./HUONG-DAN-TU-CHINH-SUA.md) |
| CV PDF | `cv/resume.pdf` |
| Profile photo | `images/profile.png` |

## Deploy log

- **2026-06-03:** Full portfolio pushed to `Logos52/mayanvie.github.io` (branch `main`) via automated deploy. Commit message: *Deploy Le Kieu Duyen L&D portfolio*.

---

Questions: check repo **Issues** or edit this file with your own notes after go-live.