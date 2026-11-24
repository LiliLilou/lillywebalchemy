---
code: exp_02
title: 360dialog blog
subtitle: + AI publishing
year: '2026'
order: 2
stack: WordPress
tags: [WordPress, Reverse proxy, WPML, MCP]
hook: A WordPress blog living invisibly inside a Framer site, now with AI publishing.
summary: I made a WordPress blog run invisibly under a Framer site's domain, through a reverse proxy and in four languages, then added an AI drafting workflow on top.
role: Sole developer + QA
with: Freelance, Jungle Creatives
live: https://360dialog.com/blog/
cover: /images/360dialog.webp
toolkit: curl -I · curl -L · HTTP status codes · CORS headers · redirect chains · custom PHP MU plugins
labNotes:
  - problem: Redirect loops, origin domain leaking
    cause: WordPress 301s, including the automatic trailing-slash redirect, sent readers to the origin domain
    fix: Reworked Location headers, WordPress URL settings and rewrite rules so the public URL always holds
  - problem: 'Editor failing: "Updating failed", "Failed to fetch"'
    cause: Origin and public domains disagreed on REST API paths and CORS; 404 and 429 errors on the way
    fix: Tested /wp-json vs /blog/wp-json, OPTIONS preflight and response headers; aligned the REST config and caught WordPress silently resetting it
  - problem: Stale content after publishing
    cause: 'Three cache layers: LiteSpeed on origin, Framer''s proxy cache, mismatched TTLs and headers'
    fix: Wrote an MU plugin controlling Cache-Control per post, purged LiteSpeed, verified with curl (Age 0, ttl=0, revalidation)
  - problem: Wrong language URLs
    cause: WPML generated /de/blog/ instead of /blog/de/
    fix: Fixed the URL structure so translations, internal links and the language switcher work through the proxy
  - problem: Staging redirecting to live
    cause: Staging inherited production config, and a URL-fix MU plugin rewrote URLs to production
    fix: Separated WP_HOME, WP_SITEURL, wp-config.php and MU plugins per environment; kept staging publish from overwriting URL settings
  - problem: Origin domain at risk in search
    cause: WordPress's own domain could be indexed, duplicating content
    fix: Pointed canonicals, sitemap, robots rules and internal links at the public domain
  - problem: Exposed admin surface
    cause: Login and site details publicly visible
    fix: 'Hardened access: extra authentication on login, a new least-privilege admin setup, 2FA and security monitoring'
---

## Context

360dialog is an official Meta Solution Partner for the WhatsApp Business API. Their main site runs on Framer, but the blog needed WordPress: multilingual content (English, German, Spanish, Brazilian Portuguese) and a real editorial workflow.

## My role

Freelance with Jungle Creatives, as the sole developer and QA on the implementation side. I owned the proxy integration, server-level debugging, WordPress configuration and the AI publishing workflow.

## The challenge

WordPress assumes it owns its domain. Served through a proxy at 360dialog.com/blog, it kept fighting back: redirects, a broken editor, stale caches, wrong language URLs and the risk of Google indexing the wrong domain.

## AI publishing with Claude

I integrated Claude through a WordPress MCP server, so the team drafts blog posts with AI straight into WordPress. The rollout was QA-first: tested on staging, full backup before production, 2FA for the operator account and a separate low-privilege account for the public byline.

## Result

One seamless site for readers, a four-language blog that ships new posts regularly, search traffic consolidated on the public domain, and an AI-assisted publishing workflow running in production.
