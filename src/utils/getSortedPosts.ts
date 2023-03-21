import type { CollectionEntry } from "astro:content";

/**
 * Return posts sorted by `created` field
 * @param posts posts in `post/`
 */
const getSortedPosts = (posts: CollectionEntry<"post">[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort((a, b) => {
      const a_date = a.data.updated || a.data.created;
      const b_date = b.data.updated || b.data.created;
      return b_date.getTime() - a_date.getTime();
    });

export default getSortedPosts;
