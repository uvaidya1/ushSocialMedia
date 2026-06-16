# Ushma — Portfolio Site

Personal portfolio for Ushma: Workday Finance consultant transitioning into growth, marketing & content strategy. Built with React + Vite + Tailwind CSS.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Recharts** — TikTok growth charts
- **gh-pages** — GitHub Pages deployment

## Local development

```bash
npm install
npm run dev
# → http://localhost:5173/ushSocialMedia/
```

## Deploy to GitHub Pages

1. Make sure your GitHub remote is set:
   ```bash
   git remote add origin https://github.com/<your-username>/ushSocialMedia.git
   ```

2. Push `main` branch first:
   ```bash
   git push -u origin main
   ```

3. Deploy to the `gh-pages` branch:
   ```bash
   npm run deploy
   ```
   This runs `vite build` then pushes `dist/` to the `gh-pages` branch automatically.

4. In your GitHub repo → **Settings → Pages**, set source branch to `gh-pages` / `/ (root)`.

5. Live at: `https://<your-username>.github.io/ushSocialMedia/`

## Sections

| Section | Component |
|---|---|
| Hero | `src/components/Hero.jsx` |
| About | `src/components/About.jsx` |
| TikTok Growth Case Study | `src/components/CaseStudy.jsx` |
| Content Strategy | `src/components/Strategy.jsx` |
| Work Experience | `src/components/Experience.jsx` |
| Tools | `src/components/Tools.jsx` |
| Contact | `src/components/Contact.jsx` |

## Customising

- **Real metrics** → edit data arrays at the top of `CaseStudy.jsx`
- **LinkedIn URL** → update `href` in `Contact.jsx`
- **Email** → update `mailto:` in `Contact.jsx`
- **Base URL** → change `base` in `vite.config.js` and `homepage` in `package.json` if the repo name changes
