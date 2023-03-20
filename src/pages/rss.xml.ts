import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import { slugify } from "@utils/slugify";
import { SITE } from "@config";

export async function get() {
  const posts = await getCollection("post");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data, slug }) => ({
      link: `posts/${slug}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.updated || data.created),
    })),
  });
}
