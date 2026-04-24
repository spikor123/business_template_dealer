# Self-Hosting Guide: Urban Crest Realty

This guide provides instructions for deploying and hosting the Business Template Dealer site on your own infrastructure.

## 1. Prerequisites
- **Node.js**: Ensure you have Node.js 18+ installed.
- **Environment Variables**: Make sure your `.env` file is configured with the live `VITE_ADMIN_APPS_SCRIPT_URL`.

## 2. Production Build
Run the following command in the project root to generate the optimized production bundle:
```bash
npm run build
```
The output will be in the `dist/` folder. This folder contains all the static assets (HTML, JS, CSS, Images) ready for deployment.

---

## 3. Deployment Options

### Option A: Static Hosting (Vercel / Netlify)
These are the easiest options. Simply connect your Git repository or upload the `dist/` folder.

**Crucial Note for SPA Routing:**
Because this is a Single Page Application (SPA), you must redirect all requests to `index.html`.

- **Vercel**: Create a `vercel.json` in the project root:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
- **Netlify**: Create a `public/_redirects` file:
  ```text
  /* /index.html 200
  ```

### Option B: VPS / Dedicated Server (Nginx)
If you are using Nginx on a Linux server, use the following configuration block:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/your/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Option C: Shared Hosting (Apache)
If your host uses Apache, create a `.htaccess` file in the `dist` folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 4. Post-Deployment Checklist
1. **SSL Certificate**: Ensure HTTPS is enabled (e.g., via Let's Encrypt).
2. **Admin URL**: Test your `/admin-a7f9k2x` route (or your customized admin slug) to ensure it can still communicate with Google Apps Script.
3. **CORS**: If the admin panel fails to save, check if your Google Apps Script has any CORS restrictions (usually not an issue for Apps Script web apps).
