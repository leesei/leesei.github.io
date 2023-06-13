---
title: Bun
description: Fast *all-in-one* JavaScript runtime
created: 2023-03-14
tags:
  - javascript/runtime
  - package-manager
  - typescript
  - typescript/runtime
---

- written in Zig
- bind to JavaScript Core
- built-in TypeScript support (the JS parser supports TS)
- built-in bundler, transpiler
- built-in high performance package manager
- built-in `dotenv`

[Bun - fast JavaScript & CSS bundler](https://bun.sh/)
[oven-sh/bun: Incredibly fast JavaScript runtime, bundler, transpiler and package manager – all in one.](https://github.com/oven-sh/bun)

[NextJS Was Too Slow...So He Made Bun??! Jarred Sumner & The Story Of Bun - YouTube](https://www.youtube.com/watch?v=rL4qpniIR7o) Theo's interview
[Getting started with Bun and React - LogRocket Blog](https://blog.logrocket.com/getting-started-bun-react/)
[Let's create a next.js app with bun - DEV Community](https://dev.to/ashirbadgudu/lets-create-a-nextjs-app-with-bun-48l6)
[Bun vs. Node.js | refine](https://refine.dev/blog/bun-js-vs-node/)

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
[Bun vs. Node.js | refine](https://refine.dev/blog/bun-js-vs-node/)

## Bundler

[The Bun Bundler | Bun Blog](https://bun.sh/blog/bun-bundler)

Can this be used to build frontend app?

## Package Manager

Bun has builtin package manager

```sh
$ bun

  install                         Install dependencies for a package.json (bun i)
  add       @shumai/shumai        Add a dependency to package.json (bun a)
  link                            Link an npm package globally
  remove    backbone              Remove a dependency from package.json (bun rm)
  unlink                          Globally unlink an npm package
  pm                              More commands for managing packages

$ bun pm
bun pm - package manager related commands

  bun pm bin          print the path to bin folder
  bun pm -g bin       print the global path to bin folder
  bun pm ls           list the dependency tree according to the current lockfile
  bun pm ls --all     list the entire dependency tree according to the current lockfile
  bun pm hash         generate & print the hash of the current lockfile
  bun pm hash-string  print the string used to hash the lockfile
  bun pm hash-print   print the hash stored in the current lockfile
  bun pm cache        print the path to the cache folder
  bun pm cache rm     clear the cache
```

## Ecosystem

[apvarun/awesome-bun: ⚡️ A curated list of awesome things related to Bun](https://github.com/apvarun/awesome-bun)

[Node.js – Ecosystem | Bun Docs](https://bun.sh/docs/ecosystem/nodejs) standard libraries are improving to match Node

[theseyan/bkg: Package Bun apps into a single executable](https://github.com/theseyan/bkg)

## App Framework

#web-framework

[Elysia - Fast, and friendly Bun web frameworks | Elysia.js](https://elysiajs.com/) tRPC, GQL, OpenAPI, JWT, type checks

[Buchta](https://buchtajs.com/)
