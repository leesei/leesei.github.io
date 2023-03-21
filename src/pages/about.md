---
layout: ../layouts/AboutLayout.astro
title: "Behind the Curtain"
---

## Tech Stack

- TypeScript
- [Astro](https://astro.build/)
- [AstroPaper](https://github.com/satnaing/astro-paper)

  - @astrojs/react
  - @astrojs/tailwind
  - fuzzy search with [Fuse.js](https://fusejs.io/)
  - ...

## Posts Migration

I've long wanter to batch process the frontmatter of my posts.

- ditch categories and used tags and nested tags (`web/dev`, `typescript/runtime`).
- removed the time for posts' `date`
- rename `date` to `created` and `updated`
- fix null entry in tags (`[]` is used for empty tags)
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
[jonschlinkert/gray-matter](https://github.com/jonschlinkert/gray-matter) fits my purpose in first glance, but it has a full load of issues.
Finally I moved back to [vfile](https://unifiedjs.com/explore/package/vfile/) and used [yaml](https://eemeli.org/yaml/) for file output.

## Customizing AstroPaper

Due credits must be given to Astro and AstroPaper.
Astro make a great static site generator with:

- fast compile time
- clear error
- great API
- new Content Collections exposes raw data which I can manipulate with script
- great templating language

AstroPaper adopted many best practices. Though I do not agree with some of its decision it is highly customizable. It provide me a kick start and I completed these in 4 days (part time):

- [x] disable smartypants
- [x] TailwindCSS Typography customization
      remove `"` in `::before` and `::after` of `<blockquote>` (Markdown `>`)
- [x] line break  
       https://github.com/remarkjs/remark-breaks
- [x] links in new tab  
       https://github.com/rehypejs/rehype-external-links
- [x] resolve wiki link  
       https://github.com/landakram/remark-wiki-link  
       customize wiki link with `[[link]]`, `content` in `::before` and `::after`
      added trivial `pageResolver: name => [name]` so permalink will not be messed with
      slugify section
- [x] add `<Tag/>` in `<Card/>`
      convert `<Tag/>` from `.astro` to `.tsx`
- [x] use `post.slug` (filename) as `/post/{slug}`
      search also with `post.slug` (filename)
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
- [x] render `updated` date  
       Post lists sort by `updated || created`

## TODO

- [ ] save Workspace panel layout in VS Code
- [ ] TOC on right hand side  
       tracks location  
       `file.data.astro.frontmatter` in plugin  
       `Astro.props.frontmatter` in layout  
       https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically  
       https://github.com/withastro/docs
- [ ] MDX support?  
       https://github.com/mdx-js/mdx/tree/main/packages/remark-mdx
- [ ] link to edit post in github
- [ ] github issue as comments/discussion
- [ ] sort out post assets in Foam and Astro
- [ ] re-org tags
- [ ] overlay button to copy code?
- [ ] directives/admonition/callout? (alert, warn, info)  
       https://stackoverflow.com/questions/50544499/how-to-make-a-styled-markdown-admonition-box-in-a-github-gist use emoji  
       https://help.obsidian.md/Editing+and+formatting/Callouts
- [ ] github emoji
- [ ] embed Foam's graph view
- [ ] add languages for codeblock

      ```
      The language "autohotkey" doesn't exist, falling back to plaintext.
      The language "dockerfile" doesn't exist, falling back to plaintext.
      The language "logstash" doesn't exist, falling back to plaintext.
      The language "reg" doesn't exist, falling back to plaintext.
      ```
