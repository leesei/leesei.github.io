---
title: Bun
description: Fast *all-in-one* JavaScript runtime
created: 2023-03-14
tags:
  - javascript/runtime
  - typescript
  - typescript/runtime
---

- written in Zig
- bind to JavaScript Core
- built-in TypeScript support
- built-in bundler, transpiler
- built-in high performance package manage
- built-in `dotenv`

[Bun - fast JavaScript & CSS bundler](https://bun.sh/)
[oven-sh/bun: Incredibly fast JavaScript runtime, bundler, transpiler and package manager – all in one.](https://github.com/oven-sh/bun)

[Getting started with Bun and React - LogRocket Blog](https://blog.logrocket.com/getting-started-bun-react/)
[Let's create a next.js app with bun - DEV Community](https://dev.to/ashirbadgudu/lets-create-a-nextjs-app-with-bun-48l6)

```sh
npm install -g bun
curl -fsSL https://bun.sh/install | bash

bunx bun-repl

bun init
bun create new-template-name ./app

# package management
bun pm ls
bun install <package>
bun add <package>
```

[SFNode Meetup: Bun with Jarred Sumner - YouTube](https://www.youtube.com/watch?v=eF48Ar-JjT8)
[JS FASTER THAN RUST??? (Probably not but still) HOW IS BUN SO FAST - YouTube](https://www.youtube.com/watch?v=Rp5yvwX7orE)

## Comparison

[Bun, Node, and Deno: What's the Difference? - YouTube](https://www.youtube.com/watch?v=ApRGWUpW9wg)
[Bun: The JavaScript runtime taking on Node.js and Deno - LogRocket Blog](https://blog.logrocket.com/bun-javascript-runtime-taking-node-js-deno/)
[A first look at Bun: is it really 3x faster than Node.js and Deno? - DEV Community](https://dev.to/builderio/a-first-look-at-bun-is-it-really-3x-faster-than-nodejs-and-deno-45od)
[Node.js vs Deno vs Bun: A re-look at the performance when serving images | The JS runtimes](https://medium.com/deno-the-complete-reference/node-js-vs-deno-vs-bun-a-re-look-at-the-performance-when-serving-images-87a972c9257)

## Ecosystem

[apvarun/awesome-bun: ⚡️ A curated list of awesome things related to Bun](https://github.com/apvarun/awesome-bun)

[Node.js – Ecosystem | Bun Docs](https://bun.sh/docs/ecosystem/nodejs) standard libraries are improving to match Node

[theseyan/bkg: Package Bun apps into a single executable](https://github.com/theseyan/bkg)
