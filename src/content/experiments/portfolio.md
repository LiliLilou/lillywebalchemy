---
code: exp_04
title: This portfolio
year: '2026'
order: 4
featured: false
stack: Custom
tags: [Astro, GSAP, Lenis, Vercel]
hook: Astro, GSAP and a staging-to-live git workflow. Source on GitHub.
summary: The site you are on. Designed, built and tested by me, with motion that stays fast and a git workflow that mirrors a real team.
role: Design, development + QA
repo: https://github.com/LiliLilou/lillywebalchemy
cover: /images/portfolio.webp
coverAlt: About page of this portfolio with a green line-art portrait
---

## Stack

Static-first Astro, so pages ship as plain HTML and CSS, with JavaScript only where motion needs it. GSAP and Lenis handle the headline scramble, scroll reveals and smooth scrolling.

## Details that matter

- Motion respects `prefers-reduced-motion`: visitors who turn animations off get a calm, complete site
- Case studies are Markdown files in a content collection, so adding a project means adding one file
- Semantic HTML, keyboard focus states and a skip link

## Workflow

- `develop` branch deploys to a staging preview on Vercel
- Merging into `main` ships to production
- Small, descriptive commits, tracked through GitHub issues
