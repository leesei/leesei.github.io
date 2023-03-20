import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkBreaks from "remark-breaks";
import remarkWikiLink from "remark-wiki-link";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeToc from "@jsdevtools/rehype-toc";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import { slugify } from "./src/utils/slugify";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          hrefTemplate: permalink => {
            const [path, hash] = permalink.split("#");
            // path, being filename, is already slugified
            return hash
              ? path
                ? `/posts/${path}#${slugify(hash)}` // link to section other post
                : `#${slugify(hash)}` // link to section in same post
              : `/posts/${path}`; // link to other post
          },
          // the default pageResolver messed up the permalink
          // `(name) => [name.replace(/ /g, '_').toLowerCase()]`
          pageResolver: name => [name],
        },
      ],
      remarkBreaks,
    ],
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["nofollow"] }],
      rehypeSlug,
      [rehypeToc, { position: "afterbegin" }],
      rehypeAutolinkHeadings,
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    smartypants: false,
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
