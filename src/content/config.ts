import { defineCollection } from "astro:content";
import { postSchema } from "./_schemas";

const post = defineCollection({
  schema: postSchema,
});

export const collections = { post };
