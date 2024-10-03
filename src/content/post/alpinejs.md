---
title: Alpine.js
description: ""
created: 2023-04-01
updated: 2023-12-01
tags:
  - alpinejs
  - frontend
  - javascript
  - web
  - web-dev
---

> declarative , no bundler needed, good for Google App Script
> v3 released 2021-06

[Alpine.js](https://alpinejs.dev)
[alpinejs/alpine: A rugged, minimal framework for composing JavaScript behavior in your markup.](https://github.com/alpinejs/alpine)
[alpinejs/awesome-alpine: 🚀A curated list of awesome resources related to Alpine.](https://github.com/alpinejs/awesome-alpine)

[Alpine.js Playground - A set of ready to use Alpine.js examples with TailwindCSS](https://alpinejs.codewithhugo.com/)
[Alpine Toolbox - Resources and Examples for Alpine.js](https://www.alpinetoolbox.com/)

[Alpine Day 2021: Caleb Porzio - The Future Of Alpine - YouTube](https://www.youtube.com/watch?v=WixS4JXMwIQ)
[Alpine.js · Code with Hugo](https://codewithhugo.com/tags/alpinejs/)
[Alpine JS Tutorial: Learn Alpine JS in this interactive course](https://scrimba.com/learn/alpinejs)
[Let's Learn Alpinejs with Practical Projects - YouTube](https://www.youtube.com/playlist?list=PLB4AdipoHpxYxE4vGj5Vb3_rwV99LEN8r)

```html
<!-- `defer` is crucial -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
<!-- version lock -->
<script defer src="https://unpkg.com/alpinejs@3.4.2/dist/cdn.min.js"></script>
```

`x-data` attribute needed to declare an Alpine JS component
Self-closing tag not supported (`<div />`), <https://github.com/alpinejs/alpine/discussions/916#discussioncomment-147729>

```html
x-bind:attribute="expression" :attribute="expression"
x-on:eventName="expression" @eventName="expression"
```

[Introducing Alpine.js: A Tiny JavaScript Framework — Smashing Magazine](https://www.smashingmagazine.com/2020/03/introduction-alpinejs-javascript-framework/)
[Alpine.js Brings JavaScript Interactivity without Complexity to HTML – The New Stack](https://thenewstack.io/alpine-js-brings-javascript-interactivity-without-complexity-to-html/)
[Alpine.js: The JavaScript Framework That's Used Like jQuery, Written Like Vue, and Inspired by TailwindCSS | CSS-Tricks](https://css-tricks.com/alpine-js-the-javascript-framework-thats-used-like-jquery-written-like-vue-and-inspired-by-tailwindcss/)
[Practical Alpine.js: x-data data access & data fetching/AJAX examples · Code with Hugo](https://codewithhugo.com/alpinejs-x-data-fetching/)

## Starter Kit

[yhaefliger/YATAS: Yet Another Tailwind Alpine Starter](https://github.com/yhaefliger/YATAS) 11ty
[stefanfrede/11st-starter-kit: 11ty, powered by Vite with Tailwind CSS and Alpine.js.](https://github.com/stefanfrede/11st-starter-kit)

[Getting started with Alpine.js and TypeScript - DEV Community](https://dev.to/wtho/get-started-with-alpinejs-and-typescript-4dgf) Bonus round: Tailwindcss
[AlpineJSwithViteJS.md](https://gist.github.com/avermeulen/6790ffc7c86c464143ff79a3b57068ed)
[supertorpe/phaser3-dom-alpinejs: Phaser3 reactive DOM through Alpine.js](https://github.com/supertorpe/phaser3-dom-alpinejs)

## Component

[markmead/alpinejs-component: Reusable HTML components powered by Alpine JS reactivity 🛸](https://github.com/markmead/alpinejs-component)
[javascript - Reusable Alpine.js components? - Stack Overflow](https://stackoverflow.com/questions/65710987/reusable-alpine-js-components)

[Prebuilt Tailwind Components | Kutty](https://kutty.netlify.app/)

[Home | TA-Styled-Plugins](https://ta-styled-plugins.com/)

[vimeshjs/vimesh-ui: Vimesh UI is an ultra lightweight library to build UI components for Alpine.js](https://github.com/vimeshjs/vimesh-ui)
[vimeshjs/vimesh-headless: Alpine.js implementation of Tailwind Headless UI](https://github.com/vimeshjs/vimesh-headless)

[Lightweight Form Validation with Alpine.js and Iodine.js | CSS-Tricks](https://css-tricks.com/lightweight-form-validation-with-alpine-js-and-iodine-js/)
[Tabs - JS - Alpine Inline](https://epsi-rns.gitlab.io/frontend/2020/11/09/tabs-js-alpine-inline/)

## State

[store() — Alpine.js](https://alpinejs.dev/globals/alpine-store)

[Persist — Alpine.js](https://alpinejs.dev/plugins/persist) localStorage

[ryangjchandler/spruce: A lightweight state management layer for Alpine.js. 🌲](https://github.com/ryangjchandler/spruce) for v2

[mattkingshott/iodine: A micro JavaScript validation library.](https://github.com/mattkingshott/iodine)
[Lightweight Form Validation with Alpine.js and Iodine.js | CSS-Tricks - CSS-Tricks](https://css-tricks.com/lightweight-form-validation-with-alpine-js-and-iodine-js/)

## Ecosystem

[Extending — Alpine.js](https://alpinejs.dev/advanced/extending)
[rehhouari/alpine-typescript-plugin-template: A simple TypeScript template for Alpine.js plugins](https://github.com/rehhouari/alpine-typescript-plugin-template)
[alpinejs javascript · GitHub Topics](https://github.com/topics/alpinejs?l=javascript)
[alpinejs typescript · GitHub Topics](https://github.com/topics/alpinejs?l=typescript)
[marcreichel (marcreichel) / Repositories](https://github.com/marcreichel?tab=repositories&q=alpine-&type=source&language=&sort=)

[imacrayon/alpine-ajax: The missing Alpine.js attributes for interacting with your server.](https://github.com/imacrayon/alpine-ajax)
[hankhank10/alpine-fetch: Straightforward interactive HTTP requests from within your Alpine.JS markup](https://github.com/hankhank10/alpine-fetch)

[rehhouari/alpinejs-i18n: Easy i18n (Internationalization) for Alpine.js!](https://github.com/rehhouari/alpinejs-i18n)

[alpine-collective/toolkit: A set of directives and magic properties for Alpine.js](https://github.com/alpine-collective/toolkit)

[markmead/alpinejs-tash: Use a more familiar syntax when rendering Alpine JS `{variables}` 🚀](https://github.com/markmead/alpinejs-tash)

### Pinecone Router

[Pinecone Router | The exendable client-side router for Alpine.js](https://pinecone-router.github.io/router/)

[pinecone-router/router: The extendable client-side router for Alpine.js v3](https://github.com/pinecone-router/router)
[rehhouari/pinecone-example](https://github.com/rehhouari/pinecone-example)

[pinecone-router/middleware-views: Views rendering middleware for Pinecone Router](https://github.com/pinecone-router/middleware-views)
[rehhouari/pinecone-example-views: Demo/Example for Pinecone Router's Views middleware](https://github.com/rehhouari/pinecone-example-views)

## Tips and Tricks

[Multiple Alpinejs file causes error · Discussion #2894 · alpinejs/alpine](https://github.com/alpinejs/alpine/discussions/2894)

```js
Alpine.prefix("x-dd-"); //components will use x-dd-data="..."
```
