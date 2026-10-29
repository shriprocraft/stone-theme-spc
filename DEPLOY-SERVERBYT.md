# Deploying shri-pro-craft-serverbyt.zip to Serverbyt

The deliverable is **`shri-pro-craft-serverbyt.zip`** (in the project root). It contains the
finished static website — the entire contents of the `out/` folder produced by `next build`
(Next.js static export). No Node.js, no database, no build step is needed on the server:
upload the files and the site works.

**ZIP verified:** 280 entries · 9.91 MB · 0 path errors · `index.html`, `.htaccess`,
`sitemap.xml`, `robots.txt`, `404.html`, 34 hashed `_next/static` assets, all 33 pages +
2 case-study pages included. Clean URLs (`/about/`, `/contact/`, …) resolve on Apache and
Nginx without any rewrite rules (`trailingSlash: true` build).

---

## Option A — cPanel / shared hosting (most Serverbyt plans)

1. Log in to Serverbyt → open **cPanel**.
2. Open **File Manager** and enter the site's web root (usually `public_html`).
   If the domain is an Addon domain, use its own folder (e.g. `public_html/shriprocraft.com`).
3. If the domain is an Addon domain, use its own folder (e.g. `public_html/shriprocraft.com`).
4. Click **Upload** and upload `shri-pro-craft-serverbyt.zip`.
5. Back in File Manager: right-click the zip → **Extract** → extract into the web root
   (`/public_html`). You should now see `index.html`, `.htaccess`, `_next/`, etc. directly
   inside the web root (not nested inside another folder — if they are, move the *contents*
   of the extracted folder up one level).
6. Optional but recommended (SSL panel setting): enable **Force HTTPS Redirect**
   in cPanel → Domains, or add these two lines at the top of `.htaccess`:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```
7. Visit your domain — the homepage should load. Test `/about/`, `/contact/` and a wrong URL
   (should show the site's custom 404 page).

> If a "Your connection is not private / not secure" warning appears before the SSL is
> active, issue the free **AutoSSL / Let's Encrypt** certificate in cPanel → SSL/TLS Status.

## Option B — Nginx / VPS on Serverbyt

Point the site's `root` at the extracted folder. Clean URLs need the standard try_files line:

```nginx
server {
    listen 443 ssl;
    server_name shriprocraft.com;
    root /var/www/shriprocraft;   # = extracted zip contents
    index index.html;

    location / {
        try_files $uri $uri/ $uri/index.html =404;
    }

    location /_next/static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

## Option C — Node.js hosting (if your Serverbyt plan runs Node apps)

Static files don't need Node, but if you prefer to serve through it:

```bash
npm install -g serve
serve out -l $PORT        # or: npx serve out -l 3000
```

Set the app's start command to `npx serve out` and the document root / working directory to
the extracted folder.

---

## What works out of the box

| Feature | Status on static hosting |
|---|---|
| All 35 pages + both case studies | ✅ pre-rendered HTML |
| Contact form | ✅ submits directly to Web3Forms from the browser (no server code needed) — enquiries are emailed to the configured Web3Forms inbox |
| Google Reviews marquee | ✅ shows the 7 verified Google reviews; automatically upgrades to live Places-API data if the site is ever hosted with a backend again |
| Clean URLs (`/about/`, `/growth-engine/seo/`) | ✅ work on Apache & Nginx with zero config |
| Custom 404 page | ✅ `404.html` + `.htaccess ErrorDocument` |
| `sitemap.xml` + `robots.txt` | ✅ included, point at https://shriprocraft.com |
| Gzip + cache headers | ✅ via bundled `.htaccess` (Apache); Nginx usually enables gzip globally |

## Notes / follow-ups (not hosting blockers)

- The header/footer **"Insights"** link points to `/insights`, which is intentionally not in
  the build (no Insights page exists yet — see worklog Tasks 16–17). It currently returns the
  custom 404. Either add the page before launch or remove the nav item.
- The contact form's email delivery is configured by the Web3Forms access key inside
  `src/components/sections/ContactForm.tsx`; submissions go to the Web3Forms account's inbox.
- Rebuild/redeploy any time with `npm run build` in this project, then re-zip the `out/`
  folder contents.
