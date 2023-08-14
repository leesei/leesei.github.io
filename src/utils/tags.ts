import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";

export const getUniqueTags = (posts: CollectionEntry<"post">[]) => {
  let tags = new Set<string>();
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  filteredPosts.forEach((post) => {
    tags = new Set([...tags, ...post.data.tags.map((tag) => slugifyStr(tag))]);
  });
  return [...tags];
};

/**
 * Return posts sorted by `created` field
 * @param tags_db tags listing of `posts`
 */
// TODO: make `tags` as a `Map` of tag to posts count
export const getTagsDB = (posts: CollectionEntry<"post">[]) => {
  let tags = new Set<string>();
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  filteredPosts.forEach((post) => {
    tags = new Set([...tags, ...post.data.tags]);
  });
  const tag_slugs = [...tags].map((tag) => slugifyStr(tag));
  const tag_to_slug = new Map([...tags].map((tag, i) => [tag, tag_slugs[i]]));
  const slug_to_tag = new Map(
    [...tag_slugs].map((slug, i) => [slug, [...tags][i]]),
  );

  return {
    tags: [...tags],
    tag_slugs,
    tag_to_slug,
    slug_to_tag,
  };
};
