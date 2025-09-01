# Nic Recruiting Site (Vite + React + Tailwind + Framer Motion)

Apple-like, minimal recruiting landing page for D2D sales.

## One-Click GitHub Pages Deploy (no local tools required)

1) **Create a new GitHub repo** (public), e.g. `nic-recruiting-site`.
2) Click **Add file → Upload files** and upload the contents of this folder (or the ZIP).
3) Commit to the **main** branch.
4) Go to **Actions** tab → wait for **Deploy to GitHub Pages** workflow to finish.
5) Visit your site at: `https://<your-username>.github.io/<repo-name>/`

The workflow automatically builds with the proper base path.

## Customize
- Edit `src/content/site.ts` for your name, tagline, stats, story, and CTA link.
- Optional: change colors and spacing in `tailwind.config.js` and component files.
- Add more sections as needed (Testimonials, FAQs, Gallery, etc.).

## Local Dev (optional)
- Install Node.js (LTS), then:
  ```bash
  npm install
  npm run dev
  ```

## Tech
- Vite + React + TypeScript
- TailwindCSS
- Framer Motion animations
- GitHub Actions for Pages deploy
