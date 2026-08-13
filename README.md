# Eleventy Starter

A pre-configured [Eleventy](https://www.11ty.dev) starter for client websites. Includes Nunjucks templating, a Decap CMS blog, responsive images, and Netlify-ready deployment.

## Features

- **Eleventy 3** with Nunjucks layouts and reusable components
- **Decap CMS** blog at `/admin` for client content management
- **Global client data** in `src/_data/client.js` (name, contact, socials, domain)
- **Responsive images** via the `{% image %}` shortcode (`@11ty/eleventy-img`)
- **Automatic sitemap** and `robots.txt` generation
- **Utility scripts** to remove demo content, dark mode, or the CMS

## Quick Start

1. Clone the repository and open it in your editor.
2. Run `npm install`.
3. Run `npm start` to start the dev server (Eleventy + local Decap CMS proxy).
4. Fill out `src/_data/client.js` with your client's details.
5. Update design tokens in `src/assets/css/root.css`.
6. Edit pages in `src/` — not `public/` (that folder is generated on build).
7. Deploy to your hosting provider.

## Scripts

| Command | Description |
|---|---|
| `npm start` | Dev server with hot reload |
| `npm run build` | Production build to `public/` |
| `npm run preview` | Serve the production build locally |
| `npm run create-page -- "Page Name"` | Scaffold a new page (comma-separate for multiple) |
| `npm run remove-dark-mode` | Strip dark mode code |
| `npm run remove-decap` | Remove Decap CMS and optionally blog content |
| `npm run remove-demo` | Strip the template to a minimal starting point |

## Project Structure

```
.
├── scripts/              # Utility scripts (create-page, remove-*)
├── src/
│   ├── _data/client.js   # Global client/site data
│   ├── _includes/        # Layouts, sections, and components
│   ├── admin/            # Decap CMS config and dashboard
│   ├── assets/           # CSS, JS, images, fonts, favicons
│   ├── config/           # Eleventy plugins, filters, processors
│   ├── content/
│   │   ├── blog/         # Blog posts (managed via CMS)
│   │   └── pages/        # Site pages
│   ├── index.html        # Home page
│   ├── robots.html       # Generates robots.txt
│   └── sitemap.html      # Generates sitemap.xml
├── .eleventy.js
├── netlify.toml
└── package.json
```

### Key files

- **`src/_data/client.js`** — Site-wide data used in meta tags, footer, sitemap, and templates. Access values with `{{ client.email }}`, etc.
- **`src/_includes/layouts/base.html`** — Main layout with `<head>`, header, footer, and `<main>`.
- **`src/content/pages/_template.txt`** — Starting point for new pages.
- **`src/admin/config.yml`** — Decap CMS collections and backend config.

### Creating pages

Run `npm run create-page -- "About Us"` to generate:

- `src/content/pages/about-us.html` from the page template
- `src/assets/less/about-us.less` (add matching CSS in `src/assets/css/` as needed)

Existing pages are skipped rather than overwritten.

### Images

Use the `{% image %}` shortcode in templates for responsive, optimized WebP/JPEG output:

```njk
{% image "./src/assets/images/hero/hero.webp", "Hero image", "cs-picture", "eager" %}
```

## Deployment

The project includes a `netlify.toml` configured to run `npm run build` and publish the `public/` directory.

### Netlify

1. Sign in to [Netlify](https://www.netlify.com/) and import your GitHub repository.
2. Netlify should auto-detect the build settings from `netlify.toml`.
3. Deploy the site, then configure Decap CMS authentication (below).

### Decap CMS (DecapBridge)

This starter uses [DecapBridge](https://decapbridge.com/) for CMS authentication (Netlify Identity is no longer used).

1. Deploy your site first so the `/admin` URL is live.
2. Create a free account at [decapbridge.com](https://decapbridge.com/) and add your site.
3. Provide your GitHub repo (`user-or-org/repo-name`) and a fine-grained personal access token with **read-write** access to **Contents** and **Pull requests**.
4. Set the Decap CMS URL to your deployed admin path (e.g. `https://yoursite.netlify.app/admin/#/`).
5. Paste the backend snippet from the DecapBridge dashboard into `src/admin/config.yml`:

```yaml
backend:
  name: git-gateway
  repo: your-user/your-repo
  branch: main
  identity_url: https://auth.decapbridge.com/sites/your-site-id
  gateway_url: https://gateway.decapbridge.com
```

6. Push the change and test login at `/admin`. Invite clients from your DecapBridge dashboard.

For local CMS editing, `local_backend: true` is already enabled in `config.yml` — the dev server runs a local Decap proxy via `npm start`.

## License

See [LICENSE.md](LICENSE.md).
