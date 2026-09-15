# Cloudflare Deployment Guide — AURA TATTOO STUDIO

This repository is optimized for deployment on **Cloudflare Pages**.

## Pre-requisites & Configuration
- **Node.js**: Version 20+
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **wrangler.jsonc**:
  ```json
  {
    "name": "tatoo",
    "compatibility_date": "2026-09-07",
    "pages_build_output_dir": "./dist"
  }
  ```

## Security Headers (`public/_headers`)
Contains edge HTTP response headers:
- Content-Security-Policy (CSP)
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Referrer-Policy: strict-origin-when-cross-origin

## SPA Routing & Redirects (`public/_redirects`)
- Rewrites all client-side routes to `index.html` with status `200`.
- The `postbuild` script also copies `dist/index.html` to `dist/200.html` to ensure zero 404 errors on deep linking.
