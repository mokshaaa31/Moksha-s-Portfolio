# Moksha — Portfolio (Lavender Editorial)

Personal portfolio for Mokshagna Maddasani. React 18 · Vite · TypeScript · Tailwind CSS 3 · GSAP (ScrollTrigger).
Fonts are self-hosted via Fontsource (Bodoni Moda + Inter), so no external font requests.

## Commands

Install dependencies:

```bash
npm install
```

Start the dev server (http://localhost:5173):

```bash
npm run dev
```

Type-check and build to `dist/`:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub), then import it at vercel.com/new. Vercel auto-detects Vite
   (build: `npm run build`, output: `dist`). `vercel.json` already rewrites all routes to `index.html`.
2. Or from the CLI: `npx vercel` (preview) then `npx vercel --prod`.
3. After the first deploy, if your domain differs from `portfolio-two-chi-sfvua2pvd6.vercel.app`, update the
   `canonical`, `og:url`, `og:image` and `twitter:image` URLs in `index.html`.

## Where to edit content

All copy lives in `src/data/` (`profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `education.ts`,
`certifications.ts`). Components in `src/components/` only render that data.

- Hero avatar: `public/images/avatars/professional.webp` (illustration; swap via `src/data/profile.ts`)
- Resume: `public/resume.pdf`
- Social card: `public/og-image.jpg` (1200×630)
- Design tokens (colors, frame, type): `src/styles/globals.css` `:root`
