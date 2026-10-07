import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const common = z.object({
  locale: z.enum(['en', 'zh']),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  translationKey: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  draft: z.boolean(),
});

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects', pattern: '**/*.md',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: common.extend({
    category: z.enum(['personal', 'course', 'learning']),
    role: z.string().min(1),
    kind: z.string().min(1),
    order: z.number().int(),
    featuredOrder: z.number().int().positive().optional(),
    tags: z.array(z.string()).max(5),
    links: z.array(z.object({
      kind: z.enum(['code', 'demo', 'report']),
      url: z.url().refine((url) => url.startsWith('https://'), 'Use an HTTPS resource URL'),
    })),
    source: z.url(),
  }),
});

const writing = defineCollection({
  loader: glob({
    base: './src/content/writing', pattern: '**/*.md',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: common.extend({
    type: z.string().min(1),
    date: z.iso.date().optional(),
    updated: z.iso.date().optional(),
  }).superRefine((entry, ctx) => {
    if (!entry.draft && !entry.date) {
      ctx.addIssue({ code: 'custom', message: 'Published writing needs a publication date', path: ['date'] });
    }
    if (entry.updated && entry.date && entry.updated < entry.date) {
      ctx.addIssue({ code: 'custom', message: 'Updated date precedes publication', path: ['updated'] });
    }
  }),
});

export const collections = { projects, writing };
