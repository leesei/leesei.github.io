import type { CollectionEntry } from "astro:content";

/**
 * Return posts sorted by `created` field
 * @param posts posts in `post/`
 */
const getSortedPosts = (posts: CollectionEntry<"post">[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.created).getTime() / 1000) -
        Math.floor(new Date(a.data.created).getTime() / 1000)
    );

export default getSortedPosts;
