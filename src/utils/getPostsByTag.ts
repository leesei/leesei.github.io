import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getPostsByTag = (posts: CollectionEntry<"post">[], tag_slug: string) =>
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag_slug));

export default getPostsByTag;
