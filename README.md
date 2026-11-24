# lillywebalchemy

Portfolio of Lilly, front-end developer with a QA mindset.
Custom code, WordPress and Webflow, tested like QA.

**Live:** https://lillywebalchemy.com · **Staging:** preview deploys from `develop`

## Stack

| | |
| --- | --- |
| Framework | [Astro](https://astro.build), static output |
| Motion | [GSAP](https://gsap.com) + ScrollTrigger, [Lenis](https://lenis.darkroom.engineering) smooth scroll |
| Content | Markdown content collection, one file per case study |
| Hosting | Vercel, preview deploys per branch |

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the build locally
```

Requires Node 18.20+ (Node 20 or 22 recommended).

## Project structure

```
src/
  data/site.ts              ← personal details, experience, skills (edit here)
  content/experiments/*.md  ← one case study per file
  pages/                    ← home, experiments, about, contact, 404
  layouts/Base.astro        ← head, header, footer, SEO tags
  components/Cover.astro    ← screenshot or placeholder
  scripts/motion.js         ← scramble, scroll reveals, smooth scroll
  styles/global.css         ← design tokens and all styles
public/                     ← favicon, OG image, screenshots, CV
```

## Adding an experiment

Create `src/content/experiments/my-project.md`. The file name becomes the URL (`/experiments/my-project/`). Copy the front matter from an existing file; `stack` must be `Custom`, `WordPress` or `Webflow` for the filter. `labNotes` is optional.

## Workflow

- `develop` → staging preview on Vercel
- `main` → production
- Feature branches → pull request into `develop`

## Accessibility and performance

- Respects `prefers-reduced-motion`: no scramble, smooth scroll or reveals
- Semantic HTML, skip link, visible focus states, screen-reader text for the scrambled headline
- Static HTML with JavaScript only for motion and the experiments filter
