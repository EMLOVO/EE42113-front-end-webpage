# Deploying this project to Cloudflare Pages

This repo is a Vite + React single-page app. I inspected your configuration and found:

- Build command: `npm run build` (package.json)
- Vite output directory: `build` (set in `vite.config.ts` via `build.outDir`)

Below are step-by-step instructions to publish to Cloudflare Pages and optional notes for using Cloudflare Workers (Wrangler) if you want server-side logic.

---

## Option A — Cloudflare Pages (recommended for static SPA)

1. Push your repo to a Git provider that Cloudflare Pages supports (GitHub, GitLab, or Bitbucket).
2. Go to https://dash.cloudflare.com and open **Pages**. Click **Create a project** and connect your Git provider.
3. Select the repository and branch you want to deploy.
4. In the build settings, use:
   - Framework preset: _None_ (or Vite if you prefer)
   - Build command: `npm run build`
   - Build output directory: `build`

   These match your project's `package.json` and `vite.config.ts` (outDir: `build`).

5. (Optional) Set environment variables in the Pages UI if your app needs any at build time.
6. Click **Save and Deploy**. Cloudflare will install dependencies and run the build. On success you’ll get a Pages URL.

7. SPA routing: If your site uses client-side routing, enable the Pages option to serve `index.html` for all routes (single-page app fallback). This is in the Pages project's Settings under **Build & deploy** -> **Advanced** -> **Serve a single-page app** (toggle on). If you prefer to handle this in-code, you can add a `404.html` that loads your app as a fallback.

8. Custom domain: Add a custom domain under **Settings -> Custom domains**. Follow the DNS steps Cloudflare shows and verify.

Notes:
- Cloudflare Pages will publish whatever is in the `build` directory after `npm run build`.
- If you need a specific Node version or package manager, configure the `engines` in `package.json` or use a `Cloudflare` build environment variable.

---

## Option B — Cloudflare Pages via CLI (Wrangler Pages)

If you prefer to deploy from your machine or CI, you can use `wrangler`:

1. Install Wrangler: `npm install -g wrangler` or `npm i -D wrangler`.
2. Login: `wrangler login` and follow the browser flow.
3. From your project root, build the site:

   ```powershell
   npm ci; npm run build
   ```

4. Publish the built site directory:

   ```powershell
   wrangler pages publish build --project-name=<project-name>
   ```

Replace `<project-name>` with your chosen Pages project name (or omit and set it in `wrangler.toml`).

---

## Option C — Cloudflare Workers (for dynamic backend or SSR)

If you want server-side logic or an edge worker in front of your app, you can use Wrangler + Workers. Minimal steps:

1. Install Wrangler: `npm i -D wrangler`.
2. `wrangler login` and `wrangler init --site my-site` to scaffold a site-backed worker. This creates a `wrangler.toml` and a `workers-site` deploy pipeline.
3. Update `wrangler.toml` with your account id and set `site.bucket = "build"`.
4. Build and publish:

   ```powershell
   npm ci; npm run build
   wrangler publish
   ```

This gives you more flexibility (middleware, API routes, redirects) but requires more setup (account id, service bindings, secrets, and potentially changes to your code to support edge responses).

---

## Quick checklist for you

- [ ] Confirm which Cloudflare product you prefer: Pages (static) or Workers (dynamic).
- [ ] Push your repo to a connected Git provider.
- [ ] In Cloudflare Pages set Build command = `npm run build` and Publish directory = `build`.
- [ ] Enable SPA fallback in Pages settings if your app uses client-side routing.

---

If you want, I can:
- Run `npm ci` and `npm run build` here to verify the build completes and confirm the `build` output contents.

I added a `wrangler.toml` template and a GitHub Actions workflow that will automatically build and publish the `build` directory to Cloudflare Pages when you push to `main`.

Automatic deploy via GitHub (what I added)

- A GitHub Action: `.github/workflows/deploy-pages.yml` — runs `npm ci`, `npm run build` and then uses `wrangler pages publish build --project-name=<project>` to publish.
 - A `wrangler.toml` template at the repo root (template only). Note: this file no longer configures a Workers Site; it's provided only as a placeholder. For Pages publishing you don't need a `wrangler.toml`.

What you need to do to finish (push + secrets)

1. Create a GitHub repository (or use an existing one) and push this project to `main`.
2. Add the following repository secrets (Repository -> Settings -> Secrets & variables -> Actions):
   - `CF_API_TOKEN` (Cloudflare API token with Pages write & account access)
   - `CF_ACCOUNT_ID` (your Cloudflare account ID)
   - `CF_PROJECT_NAME` (the Pages project name you created in the Cloudflare dashboard)

3. Push to `main`. The GitHub Action will run and (if the secrets are set correctly) publish the `build` directory to Pages.

Exact git commands to run locally (from your project root):

```powershell
git add .
git commit -m "chore: add Cloudflare Pages deployment workflow and wrangler config"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Replace `<your-username>/<your-repo>` with your GitHub repo path. If you already have a remote named `origin`, skip the `git remote add` step.

If you want, I can:
- Run `npm ci` and `npm run build` locally to verify the build output and report the `build` directory contents.
- Help you craft the exact Cloudflare API token permissions and the minimal token scope for Pages deployment.

Which action should I take next?