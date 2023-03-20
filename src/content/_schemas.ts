import { z } from "astro:content";

export const postSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    created: z.date(),
    updated: z.date().optional(),
    type: z.enum(["note", "snippet"]).default("note"),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    ogImage: z.string().optional(),
    tags: z.array(z.string()),
  })
  .strict();

export type PostFrontmatter = z.infer<typeof postSchema>;
