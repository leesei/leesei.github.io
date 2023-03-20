import { getCollection } from "astro:content";
import generateOgImage from "@utils/generateOgImage";
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params, props }) => ({
  body: await generateOgImage(props.ogTitle, params.slug),
});
 
const postImportResult = await getCollection("post", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  const paths = posts
    .filter(({ data }) => !data.ogImage)
    .map(({ data, slug }) => ({
      params: { slug },
      props: { ogTitle: data.title },
    }));
  return paths;
}
