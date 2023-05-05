---
title: Svelte
description: Svelte is a _compiler_ for frontend applications
created: 2019-12-16
updated: 2023-04-16
tags:
  - frontend
  - javascript
  - svelte
  - web
  - web-dev
---

> TODO: remove Svelte 2 articles prior to 2019-04

[Svelte • Cybernetically enhanced web apps](https://svelte.dev/)
[Introduction / Basics • Svelte Tutorial](https://svelte.dev/tutorial/basics)
[Introduction / Welcome to Svelte • Svelte Tutorial](https://learn.svelte.dev/)
[sveltejs/svelte: Cybernetically enhanced web apps](https://github.com/sveltejs/svelte)

It does not use virtual-DOM diffing. The generated code requires a thin run-time (think jQuery).
Svelte invalidates variables at build time to trigger a re-render. Have built-in:

- scoped styles
- linting (with a11y rules)
- unused CSS removal
- directives (transitions, binding and more)

Svelte 2 has better DX than React Hook
Svelte 3 adopted idea similar to React Hook

[Frameworks without the framework: why didn't we think of this sooner?](https://svelte.dev/blog/frameworks-without-the-framework)
[The Philosophy of Svelte](https://blog.scottlogic.com/2021/01/18/philosophy-of-svelte.html)

[Introduction / Basics • Svelte Tutorial](https://svelte.dev/tutorial/basics)
[The Svelte Handbook](https://flaviocopes.com/page/svelte-handbook/)
[Hello world • REPL • Svelte](https://svelte.dev/repl/hello-world?version=3)

[Rich Harris Teaches ThePrimeagen SvelteKit - YouTube](https://www.youtube.com/watch?v=RJTepwXirk8) 2023-02

[First time using Svelte, let's play Tic Tac Toe! - YouTube](https://www.youtube.com/watch?v=S_6ApOagzzM)

[A Guide to the Svelte Framework | Toptal](https://www.toptal.com/front-end/svelte-framework-guide)
[teimurjan/svelte-login-form](https://github.com/teimurjan/svelte-login-form)

## Commentary

[Vercel and Svelte: A Perfect Match for Web Developers – The New Stack](https://thenewstack.io/vercel-and-svelte-a-perfect-match-for-web-developers/) Svelte creator hired by Vercel @2021-12
[Why Typescript and Svelte are a match made in heaven](https://www.sanity.io/guides/using-typescript-with-svelte)

[Svelte is the most beautiful web framework I've ever seen - DEV Community 👩‍💻👨‍💻](https://dev.to/jesseskinner/svelte-is-the-most-beautiful-web-framework-i-ve-ever-seen-325f)
[Why Svelte won’t kill React. Is status quo to blame for that? Or is… | by Kit Isaev | JavaScript In Plain English | Medium](https://medium.com/javascript-in-plain-english/why-svelte-wont-kill-react-3cfdd940586a)
[Should you use Svelte in production? - LogRocket Blog](https://blog.logrocket.com/should-you-use-svelte-in-production/) 2022-10

## Comparison

[Why I Moved From React to Svelte and Why Others Will Follow - DZone Web Dev](https://dzone.com/articles/why-i-moved-from-react-to-svelte-and-others-will-f)
[Svelte vs React: Ending the Debate](https://massivepixel.io/blog/svelte-vs-react/)
[I created the exact same app in Vue and Svelte. Here are the differences.](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-vue-and-svelte-here-are-the-differences-c649f8d4ce0a)

## Conference

[Svelte Summit Fall 2021 - YouTube](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=12s)

[Rich Harris: Futuristic Web Development - YouTube](https://www.youtube.com/watch?v=qSfdtmcZ4d0&t=937s)

## Actions/Interactivity

[Svelte 3: Rethinking reactivity](https://svelte.dev/blog/svelte-3-rethinking-reactivity) 2019-04, Svelte 3 announcement
[Svelte Origins: A JavaScript Documentary - YouTube](https://www.youtube.com/watch?v=kMlkCYL9qo0)
[Rich Harris - Rethinking reactivity - YouTube](https://www.youtube.com/watch?v=AdNJ3fydeao)
Svelte 3 uses JavaScript label (`$:`) to declare computed (reactive) variables which makes the code very intuitive and spreadsheet-like. It also resembles React more.
[Svelte 3 Reaction & QuickStart Tutorial - YouTube](https://www.youtube.com/watch?v=043h4ugAj4c)
[Getting Started w/ Svelte 3 - YouTube](https://www.youtube.com/playlist?list=PL_2VhOvlMk4V4_52tpCnLhEEvRXfeFux6) 2021-11
[Truly reactive programming with Svelte 3.0 - LogRocket Blog](https://blog.logrocket.com/truly-reactive-programming-with-svelte-3-0-321b49b75969/)

[Introduction to Svelte Actions - LogRocket Blog](https://blog.logrocket.com/svelte-actions-introduction/) 2021-11

## Store

[Stores / Writable stores • Svelte Tutorial](https://svelte.dev/tutorial/writable-stores)
[How to work with props in Svelte](https://flaviocopes.com/svelte-props/)
[Cross-component State Management in Svelte](https://flaviocopes.com/svelte-state-management/)

## SvelteKit

> Server Side Rendering, Static Site Generation, app framework like Next.js for React

built with Vite

[SvelteKit • The fastest way to build Svelte apps](https://kit.svelte.dev/)
[sveltejs/kit: The fastest way to build Svelte apps](https://github.com/sveltejs/kit)

[What's the deal with SvelteKit?](https://svelte.dev/blog/whats-the-deal-with-sveltekit)
[My Evaluation of SvelteKit for Full-Stack Web App Development - Casey Primozic's Homepage](https://cprimozic.net/blog/trying-out-sveltekit/)
[How I built a blog with Svelte and SvelteKit - Matt Fantinel - Web Developer](https://fantinel.dev/blog-development-sveltekit/)s

[Implementing A Svelte Store In Rust](https://daveceddia.com/svelte-store-in-rust/)
[How I Built a Cross-Platform Desktop Application with Svelte, Redis, and Rust | CSS-Tricks - CSS-Tricks](https://css-tricks.com/how-i-built-a-cross-platform-desktop-application-with-svelte-redis-and-rust/)

~~## Sapper~~

> superseded by SvelteKit

[Sapper • The next small thing in web development](https://sapper.svelte.dev/)
[Sapper: Towards the ideal web app framework](https://svelte.dev/blog/sapper-towards-the-ideal-web-app-framework)
App framework for Svelte, with routing, SSR, code-splitting
[sveltejs/sapper: The next small thing in web development, powered by Svelte](https://github.com/sveltejs/sapper)

## Ecosystem

[Svelte Showcase - Made with Svelte](https://madewithsvelte.com/)

[tanepiper/svelte-formula: Zero-Configuration Reactive forms for Svelte](https://github.com/tanepiper/svelte-formula)

[Packaging • Docs • SvelteKit](https://kit.svelte.dev/docs/packaging)
