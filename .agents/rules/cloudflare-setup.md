# Cloudflare Setup & Deployment Rules

## 1. Cloudflare Pages Configuration
- Build command: `npm run build`
- Build output directory: `dist`
- Deployment model: Cloudflare Pages (`wrangler.jsonc` specifies `pages_build_output_dir: "./dist"`, no `assets` block).

## 2. Security Headers (`public/_headers`)
Ensure `public/_headers` does NOT contain block comment syntax `/* ... */`:
```http
/*
  Content-Security-Policy: default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```

## 3. SPA Routing & 404 Prevention
- `public/_redirects` contains:
  ```redirects
  /* /index.html 200
  ```
- `package.json` includes a `postbuild` script that copies `dist/index.html` to `dist/200.html` to ensure sub-paths and direct refreshes resolve without 404 errors.
