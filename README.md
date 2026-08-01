# Personal Website

Website cá nhân minimalist, xây bằng [Astro](https://astro.build), deploy lên
GitHub Pages qua GitHub Actions.

## Cấu trúc project

```
site.config.mjs           ← Nguồn thông tin duy nhất: tên, headline, social links, domain
src/
  assets/                   Ảnh thật (headshot...) — đi qua Astro <Image>, tự convert webp/avif
  content/blog/             Bài viết blog (Markdown/MDX)
  content.config.ts         Schema cho Content Collections
  data/                     Dữ liệu Skills, Experience, Projects, Certifications
  components/               Header, Footer, Hero, Skills, Experience, Projects, Certifications
  layouts/                  BaseLayout (SEO, theme), BlogPostLayout
  pages/                    index.astro (trang chủ), blog/ (danh sách + chi tiết bài viết)
  styles/global.css         Design tokens (màu, spacing, type scale), dark/light mode
public/                     Static assets phục vụ nguyên trạng (favicon, cv.pdf, og-image.png)
scripts/make-og.mjs         Sinh public/og-image.png (chạy `npm run og`)
.github/workflows/deploy.yml  Workflow build + deploy lên GitHub Pages
```

## 1. Cài đặt & chạy local

Yêu cầu Node.js ≥ 18.

```bash
npm install
npm run dev
```

Mở `http://localhost:4321`.

Build thử (kiểm tra type-check + build production):

```bash
npm run build
npm run preview
```

## 2. Điền nội dung của bạn

Nội dung thật đã được điền. Sửa ở các file sau — không cần đụng vào component:

| Nội dung | File |
|---|---|
| Tên, headline, tagline, email, LinkedIn, GitHub, đường dẫn CV | `site.config.mjs` |
| Kỹ năng theo nhóm | `src/data/skills.ts` |
| Kinh nghiệm làm việc (timeline) | `src/data/experience.ts` |
| Chứng chỉ | `src/data/certifications.ts` |
| Dự án/portfolio | `src/data/projects.ts` |
| CV (file PDF thật) | đặt file tại `public/cv.pdf` |
| Ảnh chia sẻ mạng xã hội (OG image, 1200×630px) | `npm run og` — sinh lại `public/og-image.png` từ `scripts/make-og.mjs` |
| Ảnh chân dung (headshot) | đặt file tại `src/assets/portrait.jpg` — xem `src/assets/README.md` để biết yêu cầu crop/ánh sáng |
| Favicon | thay `public/favicon.svg` nếu muốn logo/monogram riêng |

### Viết bài blog mới

Tạo file `.md` hoặc `.mdx` trong `src/content/blog/`, ví dụ `data-modeling-101.md`:

```md
---
title: "Tiêu đề bài viết"
description: "Một câu mô tả ngắn, dùng cho SEO và trang danh sách."
pubDate: 2026-02-01
tags: ["dbt", "bigquery"]
---

Nội dung bài viết ở đây...
```

Đặt `draft: true` trong frontmatter nếu muốn ẩn bài khỏi trang `/blog` mà vẫn xem thử qua URL trực tiếp.

## 3. Deploy lên GitHub Pages (username.github.io)

1. Tạo repo GitHub **tên chính xác là `<username>.github.io`** (repo public).
2. Trong `site.config.mjs`, sửa `GITHUB_USERNAME` thành username thật của bạn.
3. Push code lên repo:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

4. Vào repo trên GitHub → **Settings → Pages** → mục "Build and deployment" → **Source: GitHub Actions**.
5. Push này (hoặc lần push kế tiếp lên nhánh `main`) sẽ tự động chạy workflow trong `.github/workflows/deploy.yml` và deploy site.
6. Sau vài phút, site chạy tại `https://<username>.github.io`.

> Nếu nhánh mặc định của bạn là `master` thay vì `main`, sửa `branches: [main]` trong `.github/workflows/deploy.yml` cho khớp.

## 4. Chuyển sang custom domain sau này

Khi bạn mua domain riêng (vd `yourname.dev`), chỉ cần:

1. Trong `site.config.mjs`, sửa:
   ```js
   export const SITE_URL = "https://yourname.dev";
   export const BASE = "/";
   ```
2. Tạo file `public/CNAME` chỉ chứa domain đó (một dòng, không có `https://`):
   ```
   yourname.dev
   ```
3. Ở registrar (nơi mua domain), trỏ DNS về GitHub Pages theo [hướng dẫn chính thức của GitHub](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
4. Vào repo → Settings → Pages → điền custom domain, bật "Enforce HTTPS".
5. Commit + push. Không cần sửa gì khác trong project — mọi link nội bộ, sitemap, canonical URL đều tự lấy từ `SITE_URL`/`BASE`.

## Ghi chú kỹ thuật

- **SEO**: meta tags, Open Graph, Twitter card, `sitemap-index.xml` (qua `@astrojs/sitemap`), và `robots.txt` được tạo tự động — tất cả đọc `site.config.mjs`, không hardcode domain ở nơi khác.
- **Dark/Light mode**: script inline chống flash khi load trang, lưu lựa chọn vào `localStorage`, mặc định theo `prefers-color-scheme` của hệ thống.
- **Không dùng UI framework** (React/Vue...) — toàn bộ là Astro components (`.astro`), zero JS runtime ngoại trừ vài script nhỏ (theme toggle, mobile menu, scroll-reveal animation). Build nhẹ, tải nhanh.
- **Accessibility**: focus ring rõ ràng, target chạm tối thiểu 44×44px, tôn trọng `prefers-reduced-motion`, contrast đạt WCAG AA.
- **Design tokens**: mọi `font-size` đều trỏ về thang `--text-*` trong `global.css`, mọi khoảng cách trỏ về `--space-*`. Nhịp dọc của section điều khiển bằng `--section-padding` / `--section-heading-gap` — đổi ở một chỗ, cả trang đổi theo.
- **Ảnh**: file trong `src/assets/` đi qua `<Image>`/`<Picture>` (tự sinh webp/avif, đặt sẵn width/height, lazy-load). File trong `public/` được phục vụ nguyên trạng, **không** qua bước tối ưu này.
- **Projects mở rộng thế nào**: `PROJECTS[0]` render thành card lớn (kèm sơ đồ kiến trúc), các mục sau render thành lưới card gọn. Thêm project thứ 2 chỉ cần thêm object vào `src/data/projects.ts`, không phải sửa layout.
- **Skills có nhãn độ sâu**: mỗi nhóm mang `level: "Core" | "Actively building"` — nói thẳng cái gì đã vững qua nhiều năm, cái gì đang xây. Nhóm không có `level` (Domain Expertise) là ngữ cảnh, không phải mức thành thạo.
