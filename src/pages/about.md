---
layout: ../layouts/AboutLayout.astro
title: "Behind the Curtain"
---

## Tech Stack

- TypeScript
- [Astro](https://astro.build/)
- [AstroPaper](https://astro-paper.pages.dev/)
  - @astrojs/react
  - @astrojs/tailwind
  - fuzzy search with [Pagefind | Pagefind — Static low-bandwidth search at scale](https://pagefind.app/)
  - [Tag: release | AstroPaper](https://astro-paper.pages.dev/tags/release/)

- ...

## Posts Migration

My posts' frontmatter was defined by Hexo.
I've long wanter to batch process the frontmatter of my posts.

- ditch categories and used tags and nested tags (`web/dev`, `typescript/runtime`).
- removed the time for posts' `date`
- rename `date` to `created` and `updated`
- fix null entry in tags (`[]` will be used for empty tags)
- sort tags
- remove `toc` as it will be on by default
- output fits Astro's content schema

<table>
<tr style="text-align: center;">
<th>
Before
</th>
<th>
After
</th>
</tr>
<tr>
<td>

```yaml
---
title: Ancient Near East History
categories:
  - history
tags:
  - null
toc: true
date: 2020-01-23 10:41:46
---
```

</td>
<td>

```yaml
---
title: Ancient Near East History
description: ""
created: 2020-01-23
tags:
  - history
---
```

</td>
<tr>
<table>

I created a [tool](https://github.com/leesei/frontmatter-edit-bun) for frontmatter processing.

As mentioned in the README, I tried [selimrbd/py-obsidianmd](https://github.com/selimrbd/py-obsidianmd) first. But it was not flexible enough to support my flow of updating frontmatter.
I then moved to JavaScript ecosystem and wrote TypeScript right away with [Bun](https://bun.sh/).
I tried [unified](https://unifiedjs.com/explore/package/unified/) but the parsing or stringify changes the post content and it is disqualified.
Then I tried the low level [vfile](https://unifiedjs.com/explore/package/vfile/) and [vfile-matter](https://unifiedjs.com/explore/package/vfile-matter/), they don't have API for writing file so I skipped them.
[jonschlinkert/gray-matter](https://github.com/jonschlinkert/gray-matter) fits my purpose at first glance, but it has a full load of other issues.
Finally I moved back to [vfile](https://unifiedjs.com/explore/package/vfile/) and used [yaml](https://eemeli.org/yaml/) for file output.

## Customizing AstroPaper v2

> Forking form [satnaing/astro-paper@9e62b63](https://github.com/satnaing/astro-paper/commit/9e62b63) from 2023-03-17

[Astro 3.0 | Astro](https://astro.build/blog/astro-3/)
[AstroPaper 3.0 | AstroPaper](https://astro-paper.pages.dev/posts/astro-paper-v3/)

Due credits must be given to Astro and AstroPaper.
Astro make a great static site generator with:

- fast compile time
- clear error
- great API
- new Content Collections exposes raw data which I can manipulate with script
- great templating language

AstroPaper adopted many best practices. While I do not agree with some of its decisions, it is highly customizable. It provide me a kick start and I completed these in 4 days (part time):

- [x] rename `blog/` to `post/`
- [x] disable smartypants in `astro.config.mjs`
- [x] Post date in `content/_schemas.ts`
      `pubDatetime` -> `created`
      `modDatetime` -> `updated`
      use date only in `<Datetime>`
- [x] TailwindCSS Typography customization
      remove `"` in `::before` and `::after` of `<blockquote>` (Markdown `> `)
- [x] line break
      https://github.com/remarkjs/remark-breaks
- [x] links in new tab
      https://github.com/rehypejs/rehype-external-links
- [x] resolve wiki link
      https://github.com/landakram/remark-wiki-link
      customize wiki link with `[[link]]`, `content` in `::before` and `::after`
      added trivial `pageResolver: name => [name]` so permalink will not be messed with slugified section (in `[[post-slug#Section Title]]`)
- [x] add `<Tag/>` in `<Card/>`
      convert `<Tag/>` from `.astro` to `.tsx`
- [x] use `post.slug` (filename) as `/post/{slug}`
      add `post.slug` (filename) to `<Search>`
      _Note: slug defaults to filename in Astro v4_
- [x] layout tuning
      increase max width to `max-w-6xl`
      tune `<Header/>`'s nav (menubar) to `justify-end`
      give more room to site title
- [x] `remark-toc` hides until next `<p>`
      replace `remark-toc` with `@jsdevtools/rehype-toc` and `rehype-slug`
      added style customization
- [x] support special characters (e.g. `/`, `.`) in tags
      tags are slugified by default
      this change effectively introduced tag_slug
      add mapping of `tag_slug` <-> `tag` with `getTagsDB()`
- [x] rewritten `<Breadcrumb/>`  
       use props to determine what to render  
       no longer need to parse location
- [x] ogImage gen error for title with character "/" | "#" | "?"
      use `[slug].svg.ts` and add `slug` param to `src/utils/generateOgImage.tsx`
      use slug in `<PostDetails/>`'s `og:image` header
      `.png` takes too long to generate, use `.svg`

Handling of tags and WikiLinks are the most tricky.
I prioritize my UX in Foam so they will have to be slugified in the website to match the URLs.
AstroPaper and `remark-wiki-link` have their own take on how to slugify stuffs. I have to read their code and make it the way I wanted.

I gradually added these features:

- [x] use [React Icons](https://react-icons.github.io/react-icons/)
      pick the right icon that can be affected by `{text,fill}-skin-{base,accent}`
      Need to manually specify `/index` upon import, see [here](https://github.com/react-icons/react-icons/issues/509#issuecomment-1470087348)
- [x] render `updated` date
      Post lists sort by `updated || created`
      _Note: added in AstroPaper v4_
- [x] sort out post assets in Foam and Astro
      `_assets` in `post/` for Foam's preview
      with `_` prefix so Astro will ignore it
      all my posts refer to `./_assets/{path}`
      in `package.json:build` do a copy to `dist/`

## Customizing AstroPaper v6

> Forking form [satnaing/astro-paper@](https://github.com/satnaing/astro-paper/commit/) from 2026-xx-xx

Astro v4 to v6 introduced some major updates, so is AstroPaper

[Astro 4.0 | Astro](https://astro.build/blog/astro-4/)
[Astro 5.0 | Astro](https://astro.build/blog/astro-5/)
[Astro 6.0 | Astro](https://astro.build/blog/astro-6/)
[AstroPaper 4.0 | AstroPaper](https://astro-paper.pages.dev/posts/astro-paper-v4/)
[AstroPaper 5.0 | AstroPaper](https://astro-paper.pages.dev/posts/astro-paper-v5/)
[AstroPaper 6.0 | AstroPaper](https://astro-paper.pages.dev/posts/astro-paper-v6/)

- [x] rename `blog/` to `post/`
      _Note: moved from `src/data/blog/` to `src/content/posts/` in AstroPaper v6_
- [ ] disable dynamic OG image in `config.ts`
- [ ] disable smartypants
- [ ] Post date in `?.ts`
      `pubDatetime`->`created`
      `modDatetime`->`updated`
      use date only in`<Datetime>`
- [ ] update `slugify.ts`
      don't use `kebabcase()`
- [ ] support special characters (e.g. `/`, `.`) in tags
      tags are slugified by default
      this change effectively introduced tag_slug
      add mapping of `tag_slug` <-> `tag` with `getTagsDB()`
- [ ] TOC on right hand side
      and tracks location, (like [Docusaurus](https://docusaurus.io/docs/installation))
      `file.data.astro.frontmatter` in plugin
      `Astro.props.frontmatter` in layout
      https://github.com/withastro/docs
      https://github.com/withastro/starlight/blob/main/packages/starlight/utils/generateToC.ts (parse `PageProps.headings`, called while generating routes)
      https://medium.com/@rezahedi/how-to-build-table-of-contents-in-astro-and-sectionize-the-markdown-content-78bee84e6a7f
      https://www.npmjs.com/package/@hbsnow/rehype-sectionize
- [ ] PDF files
      use [Astro Content Layer](https://astro.build/blog/astro-5/#content-layer)?

## TODO

### Astro

- [ ] link to edit post in github
- [ ] github issue as comments/discussion
- [ ] add search to `/tags` Page
- [ ] directives/admonition/callout? (alert, warn, info)
      [How to make a styled Markdown admonition box in a GitHub Gist? - Stack Overflow](https://stackoverflow.com/questions/50544499/how-to-make-a-styled-markdown-admonition-box-in-a-github-gist) just use emoji?
      [Admonitions | Docusaurus](https://docusaurus.io/docs/markdown-features/admonitions)
      [Callouts - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Callouts)
- [ ] embed Foam's graph view (like Obsidian)
- [ ] overlay button to copy from codeblocks?
- [ ] add languages for codeblocks

```txt
The language "abc" doesn't exist, falling back to plaintext.
The language "autohotkey" doesn't exist, falling back to plaintext.
The language "conf" doesn't exist, falling back to plaintext.
The language "katex" doesn't exist, falling back to plaintext.
The language "logstash" doesn't exist, falling back to plaintext.
The language "txt" doesn't exist, falling back to plaintext.
The language "cucumber" doesn't exist, falling back to plaintext.
```

### Foam

- [ ] save Workspace panel layout in VS Code (use Profile?)
- [ ] suggest tag in frontmatter
- [ ] search in tag panel
- [ ] re-org tags
