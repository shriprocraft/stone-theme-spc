# Serverbyt Deployment Guide — Shri Pro Craft

## Deployment method: static site (Next.js static export)

`next.config.ts` sets `output: "export"`, `trailingSlash: true` and `images.unoptimized: true`.
The project has no `src/app/api` routes and no server-side runtime features, so `npm run build`
produces a self-contained `out/` folder of plain HTML/CSS/JS. `serverbyt-deployment.zip` is
the contents of that folder, built from the current source (including the new Shri Pro Craft favicon).

**No Node.js, database or build step is needed on the server.** Because Serverbyt's Node.js
support has not been verified, static hosting is the safe choice.

## What is in the ZIP

Files sit at the ZIP root (no nested folder): `index.html`, `404.html`, `.htaccess`,
`robots.txt`, `sitemap.xml`, `icon.png`, `apple-icon.png`, `_next/` (hashed JS/CSS/fonts),
one folder per page (`about/`, `contact/`, `growth-engine/…`, `industries/`, …) and the
image assets from `public/`.

Not included (not needed for static hosting): `src/`, `node_modules/`, `.next/`, `.env*`,
`package.json`, lockfiles, `prisma/`, `db/`, `Caddyfile`, tests, docs, logs.

## Upload and extract (cPanel / File Manager)

1. Log in to the Serverbyt control panel and open **File Manager**.
2. Go to the domain's web root (commonly `public_html`, or the add-on domain's folder — confirm in the panel).
3. Upload `serverbyt-deployment.zip`.
4. Extract it into that web root. `index.html`, `.htaccess` and `_next/` must be directly in
   the web root. If they ended up in a sub-folder, move the contents up one level.
5. Enable **Show hidden files** so you can confirm `.htaccess` exists.
6. Delete the ZIP after extracting.

## Dependencies, build, start

None on the server. Do **not** run `npm install` or set a startup command.
To update the site later: run `npm run build` locally and re-upload the new `out/` contents.

## Environment variables

None are needed on the server. Nothing reads variables at runtime on a static site.
Variables the code can use are applied **at build time on your own machine**, if you want them:

| Variable | Purpose | Notes |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Interactive Google Map (`ShriProCraftMap.tsx`) | Baked into the JS at build. Not set in this build, so the map uses its no-key fallback. Restrict the key by HTTP referrer if you add one. |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `GOOGLE_PLACES_API_REFERRER`, `GOOGLE_REVIEWS_CACHE_TTL` | Live Google reviews (`src/lib/googleReviews.ts`) | Server-only; unused on static hosting. The site shows its 7 bundled reviews. |

The contact form posts directly to Web3Forms using the access key in
`src/components/sections/ContactForm.tsx` (a public client-side key by design).

## Domain and HTTPS

- Point the domain's DNS (A record or nameservers) at Serverbyt as instructed in the panel.
- Issue/enable a free SSL certificate (AutoSSL / Let's Encrypt) if the panel offers one.
- To force HTTPS, use the panel's toggle if present, or add at the top of `.htaccess`:
  ```apache
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  ```
- `sitemap.xml` and `robots.txt` reference `https://shriprocraft.com` — confirm this is your final domain.

## Nginx hosting (if Serverbyt uses Nginx without `.htaccess`)

`.htaccess` is ignored on Nginx. Use:
```nginx
root /path/to/extracted;
index index.html;
location / { try_files $uri $uri/ $uri/index.html =404; }
error_page 404 /404.html;
```

## Confirm in the Serverbyt panel (not verified)

- Web server type (Apache/LiteSpeed honour `.htaccess`; Nginx does not).
- Exact web-root folder for your domain.
- Whether AutoSSL / Force HTTPS is available.
- Whether the upload size limit allows a ~21 MB ZIP (otherwise upload via FTP and extract in the panel).

## Known item

The header/footer "Insights" link points to `/insights`, which has no page in the build and
shows the custom 404.
