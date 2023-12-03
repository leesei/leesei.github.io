---
title: Hugo
description: ""
created: 2017-05-09
updated: 2023-09-29
tags:
  - hugo
  - static-site
  - web
---

[Hugo :: A fast and modern static website engine](https://gohugo.io/)
[Comparing Static Site Engines with Brian Rinaldi - YouTube](https://www.youtube.com/watch?v=R-fJWOO1bjE)

[How to start a blog using Hugo](https://flaviocopes.com/start-blog-with-hugo/)

[Hacking Management](http://spf13.com/) Author's blog

[Hugo - Shortcodes](https://gohugo.io/extras/shortcodes/) = tags
[Hugo - Go Template Primer](https://gohugo.io/templates/go-templates/)
[Hugo - Taxonomy Overview](https://gohugo.io/taxonomies/overview/)
[Hugo - Syntax Highlighting](https://gohugo.io/extras/highlighting/)

<!--more-->

## CLI

[Hugo - Using Hugo](https://gohugo.io/overview/usage/)
[Hugo - Commands](https://gohugo.io/commands/)

```sh
yaourt -S hugo-bin pygmentize # for Arch

hugo help
hugo config
hugo new site <name>
hugo new post/<file.md>
hugo -v

# install themes, Hugo does not comes with default theme
git clone https://github.com/dim0627/hugo_theme_robust.git themes/hugo_theme_robust
# cd themes/hugo_theme_robust; git checkout b8ce466; cd ../../
git clone https://github.com/spf13/herring-cove.git themes/herring-cove

hugo server
hugo server --theme=<theme> --buildDrafts
```

## Config

[Hugo | Configure Hugo](https://gohugo.io/getting-started/configuration/)
[Hugo | Archetypes](https://gohugo.io/content-management/archetypes/)

```yaml
draft: false
isCJKLanguage: true
```

## Template

[Hugo | Templates](https://gohugo.io/templates/)
[Hugo | Front Matter](https://gohugo.io/content-management/front-matter/)
[text/template - The Go Programming Language](https://golang.org/pkg/text/template/)
[html/template - The Go Programming Language](https://golang.org/pkg/html/template/)

## Themes

[Hugo Themes Site](http://themes.gohugo.io/)
[spf13/hugoThemes: All Themes Hugo](https://github.com/spf13/hugoThemes/)

[spf13/HugoBasicExample: Example site to use with Hugo & Hugo Themes](https://github.com/spf13/HugoBasicExample)

I need:

- archive page (title only; link to months, see [jacman](http://wuchong.me/jacman/archives/))
- categories index page
- tags index page
- tags widget sorted by posts
- categories widget
- TOC

It's better to show tags and categories in archive and main index.

[Minos | Hugo Themes](https://themes.gohugo.io/themes/hugo-theme-minos/) side TOC, responsive, tags/categories index
[hugo-dusk | Hugo Themes](https://themes.gohugo.io/themes/hugo-dusk/) tags/categories index
[simple-a | Hugo Themes](https://themes.gohugo.io/themes/simple-a/) tags/categories index
[Hugo Bootstrap v4 Blog | Hugo Themes](https://themes.gohugo.io/themes/hugo-theme-bootstrap4-blog/) project and about
[Wave | Hugo Themes](https://themes.gohugo.io/themes/hugo-theme-wave/) tags/categories index
[Hello Programmer | Hugo Themes](https://themes.gohugo.io/themes/hugo-hello-programmer-theme/) TOC
[Mainroad | Hugo Themes](https://themes.gohugo.io/themes/mainroad/)
[halogenica/beautifulhugo: Theme for the Hugo static website generator](https://github.com/halogenica/beautifulhugo)

Portfolio themes:

Docs themes:
[Learn | Hugo Themes](https://themes.gohugo.io/themes/hugo-theme-learn/)
[DocuAPI | Hugo Themes](https://themes.gohugo.io/themes/docuapi/)
[Techdoc | Hugo Themes](https://themes.gohugo.io/themes/hugo-theme-techdoc/)

## Deployment

[Aerobatic - NPM scripts for building and deploying Hugo sites](https://www.aerobatic.com/blog/hugo-npm-buildtool-setup/)
[Hugo - Hosting on GitHub Pages](https://gohugo.io/tutorials/github-pages-blog/)

## Tutorial

[Hugo Website Tutorial with a Live Static E-Commerce Example - Snipcart](https://snipcart.com/blog/hugo-tutorial-static-site-ecommerce)

## Tips and Tricks

[Live Hugo Site search with Lunr.js - tips & tricks - Hugo Discussion](https://discuss.gohugo.io/t/live-hugo-site-search-with-lunr-js/2857/13)

[Fast, instant client side search for Hugo static site generator](https://gist.github.com/cmod/5410eae147e4318164258742dd053993)

[How to Make the Team Happy with Hugo and Headless | Kontent by Kentico.](https://kontent.ai/blog/hugo-and-headless-cms)

### Wikilink Support

[Hugo Wikilink Support | Quinn Casey](https://quinncasey.com/hugo-wikilink-support/)
[13rac1/goldmark-wikilink: A Wikilink extension for the goldmark markdown parser.](https://github.com/13rac1/goldmark-wikilink)

[Support wiki-style internal page links · Issue #3606 · gohugoio/hugo](https://github.com/gohugoio/hugo/issues/3606)
[bep/portable-hugo-links: A test repo to test out the new Markdown Render Hooks in Hugo 0.62.0](https://github.com/bep/portable-hugo-links/) transform

### Dump context

Add `layouts/index.html`

```
{{ range $k, $v := .Site.Params }}
    {{ $k }} : {{ $v }}
{{ end }}

{{ range $k, $v := .Site.taxonomy }}
    {{ $k }} : {{ $v }}
{{ end }}
```
