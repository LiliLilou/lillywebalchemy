import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per experiment in src/content/experiments/.
// The file name becomes the URL: we-secure.md → /experiments/we-secure/
const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: z.object({
    code: z.string(), // e.g. "exp_01"
    title: z.string(),
    subtitle: z.string().optional(),
    year: z.string(),
    order: z.number(),
    featured: z.boolean().default(true), // show on the home page
    stack: z.enum(['Custom', 'WordPress', 'Webflow']), // used by the filter
    tags: z.array(z.string()),
    hook: z.string(), // one line for cards
    summary: z.string(), // intro paragraph on the case study page
    role: z.string(),
    with: z.string().optional(),
    live: z.string().url().optional(),
    repo: z.string().url().optional(),
    cover: z.string().optional(), // e.g. "/images/we-secure.jpg" in public/
    coverAlt: z.string().optional(),
    labNotes: z
      .array(z.object({ problem: z.string(), cause: z.string(), fix: z.string() }))
      .optional(),
    toolkit: z.string().optional(),
  }),
});

export const collections = { experiments };
