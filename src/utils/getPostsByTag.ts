import type { CollectionEntry } from "astro:content";
import { slugifyAll } from "./slugify";

const getPostsByTag = (posts: CollectionEntry<"post">[], tag_slug: string) =>
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag_slug));

export default getPostsByTag;
