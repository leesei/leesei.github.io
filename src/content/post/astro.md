---
title: Astro
description: ""
created: 2023-03-04
tags:
  - javascript
  - static-site
  - typescript
  - web
  - web-dev
  - web-framework
---

> Static Site Generation, multiple templates

[Astro](https://astro.build/)
[Getting Started 🚀 Astro Documentation](https://docs.astro.build/getting-started)
[A Look at Building with Astro | CSS-Tricks](https://css-tricks.com/a-look-at-building-with-astro/)
[Tag Archive astro](https://daily-dev-tips.com/tags/astro/)

[Astro 2.0 | Astro](https://astro.build/blog/astro-2/) 2023-01
[Astro just Launched.... Could it be the ultimate web framework? - YouTube](https://www.youtube.com/watch?v=gxBkghlglTg)
[Building a multi-framework dashboard with Astro - LogRocket Blog](https://blog.logrocket.com/building-multi-framework-dashboard-with-astro/)
[Your First Steps with the Astro Framework: A Quickstart Guide](https://www.danywalls.com/your-first-steps-with-the-astro-framework-a-quickstart-guide)

[Astro Crash Course in 20 Minutes! - YouTube](https://www.youtube.com/watch?v=zrPVTf761OI) 2022-12
[Astro Crash Course - YouTube](https://www.youtube.com/playlist?list=PLtLXFsdHI8JSX0qJsHfMDSTR3taqvXa5S) 2021-2022

## Server-side Rendering

[Server-side Rendering 🚀 Astro Documentation](https://docs.astro.build/en/guides/server-side-rendering/)
[Endpoints 🚀 Astro Documentation](https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes)

[Unlock New Possibilities with Hybrid Rendering | Astro](https://astro.build/blog/hybrid-rendering/) opt-in pre-rendering in SSR

## Static Site Generation

> for blogs and documentations

[Introducing Content Collections: Type-Safe Markdown in Astro 2.0 | Astro](https://astro.build/blog/introducing-content-collections/)
[Astro 2.0 👨‍🚀🚀 Content Collections API Deep Dive - YouTube](https://www.youtube.com/watch?v=zUmqmuSvJMs)

[Build your first Astro Blog 🚀 Astro Documentation](https://docs.astro.build/en/tutorial/0-introduction/)
[Authoring Content 🚀 Astro Documentation](https://docs.astro.build/en/guides/content/)
[Content Collections 🚀 Astro Documentation](https://docs.astro.build/en/guides/content-collections/)
[Markdown & MDX 🚀 Astro Documentation](https://docs.astro.build/en/guides/markdown-content/)
[Configuration Reference 🚀 Astro Documentation](https://docs.astro.build/en/reference/configuration-reference/#markdown-options) Markdown Options

[getStaticPaths() - API Reference 🚀 Astro Documentation](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)

[Astro Blog Example - StackBlitz](https://stackblitz.com/edit/github-mczy46?file=README.md)

[docs/api-reference.mdx at main · withastro/docs](https://github.com/withastro/docs)

[Build a blog with Astro, Vite, and MDX - LogRocket Blog](https://blog.logrocket.com/build-blog-astro-vite-mdx/)
[#08: Build a Blog - With Astro! - DEV Community](https://dev.to/azure/08-build-a-blog-with-astro-1lb2)

- disable `smartypants`

## Hybrid Rendering

[Unlock New Possibilities with Hybrid Rendering | Astro](https://astro.build/blog/hybrid-rendering/)

## Templates

[Install Astro with the Automatic CLI 🚀 Astro Documentation](https://docs.astro.build/en/install/auto/#starter-templates)

[astro.new](https://astro.new/)
[Search · astro starter](https://github.com/search?o=desc&q=astro+starter&s=stars&type=Repositories)

I need:

- syntax highlighting
- Fuzzy search
- archive page (title only; link to months, see [jacman](http://wuchong.me/jacman/archives/))
- tags index page
- tags widget sorted by posts
- TOC with location tracking on the side
- WikiLinks
- [bonus] published date
- [bonus] last updated date
- [bonus] Foam Graph

It's better to show tags in archive and main index.

### Shortlist

[Blog | Astro](https://astro.build/themes/details/blog/) Official, best practices

[AstroPaper | Astro](https://astro.build/themes/details/astro-paper/) Fuzzy search (FuseJS), TailwindCSS, TOC
[Astro Boilerplate | Astro](https://astro.build/themes/details/astro-boilerplate/)

[Accessible Astro Starter | Astro](https://astro.build/themes/details/accessible-astro-starter/) MDX, components

[Blogster Bubblegum | Astro](https://astro.build/themes/details/blogster-bubblegum/) Markdoc
[Blogster Sleek | Astro](https://astro.build/themes/details/blogster-sleek/) Markdoc

[Hello Astro | Astro](https://astro.build/themes/details/hello-astro/) Fuzzy search (Algolia), MDX, TailwindCSS

[Astro Blog Markdown | Astro](https://astro.build/themes/details/astro-blog-markdown/) Svelte, MDsveX, modified date

[Astro WordPress Starter | Astro](https://astro.build/themes/details/astro-wordpress-starter/) WPGraphQL

### Writing Templates

[Layouts 🚀 Astro Documentation](https://docs.astro.build/en/core-concepts/layouts/#markdown-layout-props)
[astro/examples at main · withastro/astro](https://github.com/withastro/astro/tree/main/examples)
`blog/`, `docs/`, `framework-*/`, `with-mdx/`

[docs/api-reference.mdx at main · withastro/docs](https://github.com/withastro/docs) in `src/utils/`:

- generate ToC in layout
- GitHub edit link

[API Reference 🚀 Astro Documentation](https://docs.astro.build/en/reference/api-reference/) `Astro`, `<Debug />`