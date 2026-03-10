---
title: Markdown
description: ""
created: 2015-04-23
updated: 2025-11-18
tags:
  - comp/lang
  - markdown
  - unifiedjs
---

> many Markdown tools are in the [[unifiedjs]] ecosystem

[Markdown Guide](https://www.markdownguide.org/)

[Books in Browsers 2014: Peter Armstrong, LeanPub - YouTube](https://www.youtube.com/watch?t=176&v=VOCYL-FNbr0)
[Mastering Markdown - YouTube](https://www.youtube.com/playlist?list=PLu8EoSxDXHP7v7K5nZSMo9XWidbJ_Bns3) video series by Web Bos
[Markdown Tutorial - Introduction](https://commonmark.org/help/tutorial/)

[BubuAnabelas/awesome-markdown: Delightful Markdown stuff.](https://github.com/BubuAnabelas/awesome-markdown)
[mundimark/awesome-markdown: A collection of awesome markdown goodies (libraries, services, editors, tools, cheatsheets, etc.)](https://github.com/mundimark/awesome-markdown)

[Lightweight markup language - Wikiwand](https://www.wikiwand.com/en/Lightweight_markup_language)
[Is HTML a Humane Markup Language?](http://blog.codinghorror.com/is-html-a-humane-markup-language/)
[黑暗執行緒 分類檢視：markdown](https://blog.darkthread.net/blog/category/markdown)

[CommonMark](http://commonmark.org/)
[CommonMark Spec](https://spec.commonmark.org/current/)

[List of CommonMark Implementations · commonmark/CommonMark Wiki](https://github.com/commonmark/CommonMark/wiki/list-of-commonmark-implementations)
[babelmark3 | Compare Markdown Implementations](https://babelmark.github.io/)

[nonplain](https://github.com/nonplain) Plaintext files, with metadata; also supports Markdown

## Learn

[Daring Fireball: Markdown Syntax Documentation](https://daringfireball.net/projects/markdown/syntax)
[Markdown Tutorial](https://www.markdowntutorial.com/)
[Introduction | Mastering Markdown](https://roachhd.gitbooks.io/master-markdown/content/)
[Writing on GitHub - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github)
[Basic writing and formatting syntax - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[Markdown - GitBook Documentation](https://docs.gitbook.com/editing-content/markdown)
[Getting Started with Markdown | Programming Historian](https://programminghistorian.org/en/lessons/getting-started-with-markdown)

[Markdown Cheatsheet · adam-p/markdown-here Wiki](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
[The Printable Markdown Cheat Sheet for Beginners and Experts](https://www.makeuseof.com/tag/printable-markdown-cheat-sheet/)

[How can the backtick character ` be included in code? - Meta Stack Exchange](http://meta.stackexchange.com/questions/55437/how-can-the-backtick-character-be-included-in-code)

## Editors

> well, use VSCode + Markdown All in One + Marp + Foam

[Minimalist Online Markdown Editor](http://markdown.pioul.fr/)
[Editor.md - Open source online Markdown editor.](http://editor.md.ipandao.com/en.html)
[Online Markdown Editor - Dillinger, the Last Markdown Editor ever.](https://dillinger.io/)
[Md2All](http://md.aclickall.com/)

[Editing GFM-editor/editor.md at master · leesei/GFM-editor](https://github.com/leesei/GFM-editor/edit/master/editor.md)

[StackEdit](https://stackedit.io/app#)

[Markdown Tables generator - TablesGenerator.com](https://www.tablesgenerator.com/markdown_tables)
[markdownTables](https://jmalarcon.github.io/markdowntables/)

[[self-hosting#HedgeDoc]]

### Haroopad

[Haroopad - The Next Document processor based on Markdown](http://pad.haroopress.com/)
[rhiokim/haroopad](https://github.com/rhiokim/haroopad)

## IETF Draft

[danyork/writing-internet-drafts-in-markdown: A presentation (in Markdown) for the IETF Hub Boston on June 12, 2018.](https://github.com/danyork/writing-internet-drafts-in-markdown)

[mmarkdown/mmark: Mmark: a powerful markdown processor in Go geared towards the IETF](https://github.com/mmarkdown/mmark)
[xml2rfc · PyPI](https://pypi.org/project/xml2rfc/)

```sh
% ./mmark rfc/3514.md > x.xml
% xml2rfc --v3 --text x.xml
```

## Converters

[Recipage](https://suka.js.org/recipage/) markdown loader with decent theming
[kivikakk/comrak: CommonMark + GFM compatible Markdown parser and renderer](https://github.com/kivikakk/comrak)
[rvagg/archived-gfm2html: Convert a GitHub style Markdown file to HTML, complete with inline CSS](https://github.com/rvagg/archived-gfm2html) obsolete

[showdownjs/showdown: A bidirectional Markdown to HTML to Markdown converter written in Javascript](https://github.com/showdownjs/showdown)
[KrauseFx/markdown-to-html-github-style: Generate a simple HTML page based on a markdown file, that looks like GitHub's stylesheet](https://github.com/KrauseFx/markdown-to-html-github-style) uses showdown 1.9

[mixu/markdown-styles: Markdown to static HTML generator and multiple CSS themes for Markdown](https://github.com/mixu/markdown-styles)

[otsaloma/markdown-css: Stylesheets for Markdown to HTML conversion](https://github.com/otsaloma/markdown-css)
[sindresorhus/github-markdown-css: The minimal amount of CSS to replicate the GitHub Markdown style](https://github.com/sindresorhus/github-markdown-css)

[charmbracelet/glow: Render markdown on the CLI, with pizzazz! 💅🏻](https://github.com/charmbracelet/glow)
[paper-terminal — command-line utility in Rust // Lib.rs](https://lib.rs/crates/paper-terminal)

[NotNinja/europa: Pure JavaScript library for converting HTML into valid Markdown](https://github.com/NotNinja/europa)

[BlackGlory/copycat: 🌳 Copy content from web powerful than ever before.](https://github.com/BlackGlory/copycat) CopyCat Chrome Extension

### MarkItDown

[Microsoft Open Sourced MarkItDown: An AI Tool to Convert All Files into Markdown for Seamless Integration and Analysis - MarkTechPost](https://www.marktechpost.com/2024/12/18/microsoft-open-sourced-markitdown-an-ai-tool-to-convert-all-files-into-markdown-for-seamless-integration-and-analysis/)
[microsoft/markitdown: Python tool for converting files and office documents to Markdown.](https://github.com/microsoft/markitdown)

## Parsers

[Choosing the Right Markdown Parser | CSS-Tricks - CSS-Tricks](https://css-tricks.com/choosing-right-markdown-parser/)

[micromark/micromark: the smallest commonmark (optionally gfm) compliant markdown parser that exists; new foundation for @unifiedjs (hundreds of projects w/ billions of downloads for dealing w/ content)](https://github.com/micromark/micromark)

[jonschlinkert/remarkable: Markdown parser, done right. Commonmark support, extensions, syntax plugins, high speed - all in one. Gulp and metalsmith plugins available. Used by Facebook, Docusaurus and many others! Use https://github.com/breakdance/breakdance for HTML-to-markdown conversion. Use https://github.com/jonschlinkert/markdown-toc to generate a table of contents.](https://github.com/jonschlinkert/remarkable) extensible

[chjj/marked](https://github.com/chjj/marked)

[phenomic/markdown-as-json](https://github.com/phenomic/markdown-as-json)

[LeaVerou/md-block: A custom element for rendering stylable (light DOM) Markdown](https://github.com/LeaVerou/md-block) `<md-block>`

[BlackGlory/rmdast: 🌳 Renderable Markdown Abstract Syntax Tree.](https://github.com/BlackGlory/rmdast)
[syntax-tree/mdast at 4.0.0](https://github.com/syntax-tree/mdast/tree/4.0.0)

[rsms/markdown-wasm: Markdown parser and HTML generator implemented in WebAssembly, based on md4c](https://github.com/rsms/markdown-wasm)
[Markdown-Wasm, a Very Fast Markdown Parser Written in WebAssembly](https://www.infoq.com/news/2020/10/markdown-wasm-fast-parser/)
[markdown-wasm demo](https://rsms.me/markdown-wasm/)

[markdown-it-py — markdown-it-py](https://markdown-it-py.readthedocs.io/en/latest/)
[executablebooks/markdown-it-py: Markdown parser, done right. 100% CommonMark support, extensions, syntax plugins & high speed. Now in Python!](https://github.com/executablebooks/markdown-it-py)

[Mistune documentation](https://mistune.lepture.com/en/latest/index.html) parse as AST, does not return source line numbers
[lepture/mistune: A fast yet powerful Python Markdown parser with renderers and plugins.](https://github.com/lepture/mistune)

[yuin/goldmark: A markdown parser written in Go. Easy to extend, standard(CommonMark) compliant, well structured.](https://github.com/yuin/goldmark)
[yuin/goldmark-emoji: An emoji extension for the goldmark markdown parser](https://github.com/yuin/goldmark-emoji)

[charmbracelet/glamour: Stylesheet-based markdown rendering for your CLI apps 💇🏻‍♀️](https://github.com/charmbracelet/glamour)

### Markdown-it

[markdown-it/markdown-it: Markdown parser, done right. 100% CommonMark support, extensions, syntax plugins & high speed](https://github.com/markdown-it/markdown-it) extensible
[markdown-it API documentation](https://markdown-it.github.io/markdown-it/)

[keywords:markdown-it-plugin - npm search](https://www.npmjs.com/search?q=keywords:markdown-it-plugin)

## Frontmatter

[frontmatter · GitHub Topics](https://github.com/topics/frontmatter)

[frontmatter - Topics - unified](https://unifiedjs.com/explore/topic/frontmatter/)
[remark-frontmatter - unified](https://unifiedjs.com/explore/package/remark-frontmatter/)
[remark-parse-frontmatter - unified](https://unifiedjs.com/explore/package/remark-parse-frontmatter/) provides validation

[micromark/micromark-extension-frontmatter: micromark extension to support frontmatter (YAML, TOML, etc)](https://github.com/micromark/micromark-extension-frontmatter)

[jonschlinkert/gray-matter: Smarter YAML front matter parser](https://github.com/jonschlinkert/gray-matter)

[Python Frontmatter — Python Frontmatter 1.0.0 documentation](https://python-frontmatter.readthedocs.io/en/latest/index.html)

[py-obsidianmd](https://selimrbd.github.io/py-obsidianmd/)
[selimrbd/py-obsidianmd: Python interface to your Obsidian notes](https://github.com/selimrbd/py-obsidianmd)
[[py-obsidianmd] A python library to modify your Obsidian notes in batch - YouTube](https://www.youtube.com/watch?v=gRPBAKiu37Y)

## Linters

[DavidAnson/markdownlint: A Node.js style checker and lint tool for Markdown/CommonMark files.](https://github.com/DavidAnson/markdownlint)

[prettier/prettier: Prettier is an opinionated code formatter.](https://github.com/prettier/prettier) uses unified for Markdown support

[webhintio/markdown-link-validator: Validate markdown links](https://github.com/webhintio/markdown-link-validator/tree/main)

## Renderers

[charmbracelet/glow: Render markdown on the CLI, with pizzazz! 💅🏻](https://github.com/charmbracelet/glow)
[Read and Organize Markdown Files in Linux Terminal With Glow - It's FOSS](https://itsfoss.com/glow-cli-tool-markdown/)

[LeaVerou/md-block: A custom element for rendering stylable (light DOM) Markdown](https://github.com/LeaVerou/md-block)

[Better Markdown Parser in PHP](https://parsedown.org/)
[markdown-browser/index.php at master · websemantics/markdown-browser](https://github.com/websemantics/markdown-browser/blob/master/index.php)
[websemantics/markdown-browser-plus: Github flavoured, local file browser for viewing your project's markdown documentation files.](https://github.com/websemantics/markdown-browser-plus)

## Presentations

[[presentation]]

## Tools

[AutoMD - Markdown, Automated.](https://automd.unjs.io/)

[jaywcjlove/markdown-to-html-cli: Command line tool that converts markdown to HTML.](https://github.com/jaywcjlove/markdown-to-html-cli)

[Mmark: powerful markdown parser](https://mmark.miek.nl/)
[mmarkdown/mmark: Mmark: a powerful markdown processor in Go geared towards the IETF](https://github.com/mmarkdown/mmark) parser and renderer
[Learning-Go-zh-cn/Makefile at master · mikespook/Learning-Go-zh-cn](https://github.com/mikespook/Learning-Go-zh-cn/blob/master/Makefile) sample Makefile
