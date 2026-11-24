// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: set this to your real domain (used for canonical URLs, Open Graph and the sitemap).
export default defineConfig({
  site: 'https://lillywebalchemy.com',
  integrations: [sitemap()],
});
