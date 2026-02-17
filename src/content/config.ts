import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const diary = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/diary" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, diary };
