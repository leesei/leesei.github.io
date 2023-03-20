---
title: Web Frontend Frameworks
description: ""
created: 2022-08-23
tags:
  - frontend
  - javascript
  - web
  - web-dev
---

# Frontend Frameworks

[[aurelia]]
[[mithriljs]]
[[reactjs]]
[[solidjs]]
[[svelte]]
[[vuejs]]
[[reactive-programming#Reactive Extensions (Rx)]]

[Immutable User Interfaces (Lee Byron) - Full Stack Fest 2016 - YouTube](https://www.youtube.com/watch?v=pLvrZPSzHxo)
[Marco Rogers: Finding Patterns Across Front-end Frameworks [JSConf2014] - YouTube](https://www.youtube.com/watch?v=Bp3Jy177NvU)

[Six tips on front-end framework selection – Graeme Sutherland – Medium](https://medium.com/@grasuth/six-tips-on-front-end-framework-selection-c46f546d1250)
[I built a JavaScript framework - YouTube](https://www.youtube.com/watch?v=SJeBRW1QQMA)

[Front-end Hyperpolyglot](http://jeffcarp.github.io/frontend-hyperpolyglot/)
[Framework comparison - Mithril.js](http://mithril.js.org/framework-comparison.html)

[TechEmpower Framework Benchmarks](http://www.techempower.com/benchmarks/) [source](https://github.com/TechEmpower/FrameworkBenchmarks)
[krausest/js-framework-benchmark: A comparison of the perfomance of a few popular javascript frameworks](https://github.com/krausest/js-framework-benchmark)
[gothinkster/realworld: "The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more 🏅](https://github.com/gothinkster/realworld)

[Is it time to move on from Virtual DOM (React)? - JavaScript in Plain English - Medium](https://medium.com/javascript-in-plain-english/is-it-time-to-move-on-from-virtual-dom-reactjs-2c01afbf81fb)
[Reports of the Virtual DOM’s Death are Greatly Exaggerated](https://medium.com/javascript-in-plain-english/reports-of-the-virtual-doms-death-are-greatly-exaggerated-2206d00beead)

[Angular vs React vs Vue: Which Is the Best Choice for 2020?](https://levelup.gitconnected.com/angular-vs-react-vs-vue-which-is-the-best-choice-for-2020-81f577697c7e)

[Riot.js — A React-like user interface micro-library](http://riotjs.com/)
[Using Riot.js, a component-based UI library - LogRocket Blog](https://blog.logrocket.com/using-riot-js-component-based-ui-library/)

[Matt-Esch/virtual-dom](https://github.com/Matt-Esch/virtual-dom) inactive
[Moon](https://moonjs.org/) lightweight, inactive
[Choo](https://choo.io/) functional, inactive

[json2html • pure javascript HTML templating](http://www.json2html.com/)

[Inferno](https://infernojs.org/)
[infernojs/inferno: An extremely fast, React-like JavaScript library for building modern user interfaces](https://github.com/infernojs/inferno)

[Webix: JavaScript UI Library; HTML5 JS framework, 102 UI Web Widgets](https://webix.com/)

[jorgebucaran/hyperapp: The tiny framework for building hypertext applications.](https://github.com/jorgebucaran/hyperapp)
[aidenybai/lucia: 🙋‍♀️ 3kb library for tiny web apps](https://github.com/aidenybai/lucia)

[Back to HTML: Introducing Trimmings — Postlight — Digital Product Studio](https://postlight.com/trackchanges/back-to-html-introducing-trimmings)

[I created the exact same app in React and Vue. Here are the differences. [2019 Edition]](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-2019-edition-42ba2cab9e56)
[I created the exact same app in Vue and Svelte. Here are the differences.](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-vue-and-svelte-here-are-the-differences-c649f8d4ce0a)
[I created the exact same app in React and Svelte. Here are the differences.](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-svelte-here-are-the-differences-c0bd2cc9b3f8)

[A JavaScript library for building web user interfaces — Monkberry](http://monkberry.js.org/)
[3 Lightweight React Alternatives: Preact, VirtualDom & Deku](http://www.sitepoint.com/react-alternatives-preact-virtualdom-deku/)
[Vue vs Svelte: Comparing Framework Internals | Vue Mastery](https://www.vuemastery.com/blog/vue-vs-svelte-comparing-framework-internals/)

[Window.js](https://windowjs.org/)
[windowjs/windowjs: Window.js is an open-source Javascript runtime for desktop graphics programming.](https://github.com/windowjs/windowjs)

### Mitosis

[Mitosis Fiddle - compile to common frameworks, import from popular tools](https://mitosis.builder.io/)
[BuilderIO/mitosis: Write components once, run everywhere. Compiles to Vue, React, Solid, Angular, Svelte, and more.](https://github.com/builderio/mitosis)

### Tonic

[Tonic](https://tonicframework.dev/)
[optoolco/tonic: A Low Profile Component Framework. Stable, Minimal, Auditable, and Build-Tool-Free.](https://github.com/optoolco/tonic)

### Alpine JS

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

### Component

[markmead/alpinejs-component: Create reusable components with Alpine JS reactivity 🦑](https://github.com/markmead/alpinejs-component)
[javascript - Reusable Alpine.js components? - Stack Overflow](https://stackoverflow.com/questions/65710987/reusable-alpine-js-components)

[Lightweight Form Validation with Alpine.js and Iodine.js | CSS-Tricks](https://css-tricks.com/lightweight-form-validation-with-alpine-js-and-iodine-js/)
[Tabs - JS - Alpine Inline](https://epsi-rns.gitlab.io/frontend/2020/11/09/tabs-js-alpine-inline/)

#### State

[store() — Alpine.js](https://alpinejs.dev/globals/alpine-store)

[Persist — Alpine.js](https://alpinejs.dev/plugins/persist) localStorage

[ryangjchandler/spruce: A lightweight state management layer for Alpine.js. 🌲](https://github.com/ryangjchandler/spruce) for v2

[mattkingshott/iodine: A micro JavaScript validation library.](https://github.com/mattkingshott/iodine)
[Lightweight Form Validation with Alpine.js and Iodine.js | CSS-Tricks - CSS-Tricks](https://css-tricks.com/lightweight-form-validation-with-alpine-js-and-iodine-js/)

#### Ecosystem

[Extending — Alpine.js](https://alpinejs.dev/advanced/extending)

[alpine-collective/toolkit: A set of directives and magic properties for Alpine.js](https://github.com/alpine-collective/toolkit)

[markmead/alpinejs-tash: 🥸 Alpine JS plugin that lets you render text without the need of x-text](https://github.com/markmead/alpinejs-tash)

#### Tips and Tricks

[Multiple Alpinejs file causes error · Discussion #2894 · alpinejs/alpine](https://github.com/alpinejs/alpine/discussions/2894)

```js
Alpine.prefix("x-dd-"); //components will use x-dd-data="..."
```

#### v2

[Upgrade From V2 — Alpine.js](https://alpinejs.dev/upgrade-guide)

[alpine-collective/alpine-magic-helpers: A collection of magic properties and helper functions for use with Alpine.js](https://github.com/alpine-collective/alpine-magic-helpers)
[Let's build an ajax form with Alpine.js](https://dberri.com/lets-build-an-ajax-form-with-alpine-js/) v2

### Preact

[Preact | Preact: Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.](https://preactjs.com/)
[preactjs/preact: ⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM.](https://github.com/preactjs/preact)
[Getting started with PreactJS — A Step By Step Guide](https://blog.codeinfuse.com/getting-started-with-preactjs-a-step-by-step-guide-f3197f871753)
[Moving From React to Preact: A Developer’s Story – BitCraft – Medium](https://medium.com/bitcraft/moving-from-react-to-preact-a-developers-story-49994cfc56dc)

### Neo.mjs

[neo.mjs - Website](https://neomjs.github.io/pages/node_modules/neo.mjs/dist/production/apps/website/index.html#mainview=home) JSON based vDOM
[neomjs/neo: Create blazing fast multithreaded Web Apps](https://github.com/neomjs/neo)
[neo/CONCEPT.md at dev · neomjs/neo](https://github.com/neomjs/neo/blob/dev/.github/CONCEPT.md)

[Introduction Guide for neo.mjs — The webworkers driven UI framework | by Tobias Uhlig | Medium](https://tobiasuhlig.medium.com/introduction-guide-for-neo-mjs-the-webworkers-driven-ui-framework-a3f422218b0a)
[Web based multi-screen apps including drag & drop | by Tobias Uhlig | Mar, 2021 | Medium](https://tobiasuhlig.medium.com/web-based-multi-screen-apps-including-drag-drop-5e161da6507b)
[Cross-App Bundling — A Different Approach for Micro Frontends | by Tobias Uhlig | The Startup | Medium](https://medium.com/swlh/cross-app-bundling-a-different-approach-for-micro-frontends-e4f212b6a9a)
[Your benefits of working with JSON based virtual DOM | by Tobias Uhlig | DataSeries | Medium](https://medium.com/dataseries/your-benefits-of-working-with-json-based-virtual-dom-7318a983da9e)

[Create Blazing Fast Multi-Threading User Interfaces Outside Node.js | by Tobias Uhlig | Better Programming](https://betterprogramming.pub/create-blazing-fast-multithreading-user-interfaces-outside-of-nodejs-c4199b0023ec)
[How to create a webworkers driven multithreading App — Part 1 | by Tobias Uhlig | The Startup | Medium](https://medium.com/swlh/how-to-create-a-webworkers-driven-multithreading-app-part-1-fa0cc78a4237)
[How to create a webworkers driven multithreading App — Part 2 | by Tobias Uhlig | The Startup | Medium](https://medium.com/swlh/how-to-create-a-webworkers-driven-multithreading-app-part-2-3c5b3c2d1adb)

### OpenUI

[OpenUI5](https://openui5.org/)
[OpenUI5 - Wikiwand](https://www.wikiwand.com/en/OpenUI5)

[SAPUI5 vs. OpenUI5](https://help.sap.com/doc/saphelp_uiaddon20/2.05/en-US/59/82a9734748474aa8d4af9c3d8f31c0/content.htm)

[OpenUI5 - YouTube](https://www.youtube.com/channel/UCOlLpeus2uAJhmxjKHHGTgA)
