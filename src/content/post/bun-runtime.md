---
title: Bun
description: Fast *all-in-one* JavaScript runtime
created: 2023-03-14
updated: 2026-05-22
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

[Bun 1.0 | Bun Blog](https://bun.sh/blog/bun-v1.0) 2023-09
[Bun 1.0 is here - YouTube](https://www.youtube.com/watch?v=BsnCpESUEqM)
[Bun Is Better Than I Hoped - YouTube](https://www.youtube.com/watch?v=dQkv5C-Lfkw) Theo

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

## Rust rewrite

Bun version 1.3.14 is expected to be the final release based on Zig

Bun was acquired by Anthropic late 2025, used Claude Code to rewrite Bun from Zug to Rust, citing Zig's slow build time, memory leaks and not accepting AI code as issue.
The generated Rust code was not idiomatic and full of `unsafe` blocks.

[Bun Was Rewritten in Rust. But the Code... - YouTube](https://www.youtube.com/watch?v=AMf6X0J8IeA)
[I wish this was clickbait - YouTube](https://www.youtube.com/watch?v=gILMoijqeGA)

## Comparison

[Bun, Node, and Deno: What's the Difference? - YouTube](https://www.youtube.com/watch?v=ApRGWUpW9wg)
[Bun: The JavaScript runtime taking on Node.js and Deno - LogRocket Blog](https://blog.logrocket.com/bun-javascript-runtime-taking-node-js-deno/)
[A first look at Bun: is it really 3x faster than Node.js and Deno? - DEV Community](https://dev.to/builderio/a-first-look-at-bun-is-it-really-3x-faster-than-nodejs-and-deno-45od)
[Node.js vs Deno vs Bun: A re-look at the performance when serving images | The JS runtimes](https://medium.com/deno-the-complete-reference/node-js-vs-deno-vs-bun-a-re-look-at-the-performance-when-serving-images-87a972c9257)
[Bun vs. Node.js | refine](https://refine.dev/blog/bun-js-vs-node/)

## Bundler

[The Bun Bundler | Bun Blog](https://bun.sh/blog/bun-bundler)
[Bundler - Bun](https://bun.com/docs/bundler)

### Single-file executable

[Single-file executable - Bun](https://bun.com/docs/bundler/executables)

```sh
bun build --compile --minify --sourcemap ./path/to/my/app.ts --outfile myapp
#  improve startup time
bun build --compile --minify --sourcemap --bytecode ./path/to/my/app.ts --outfile myapp
```

[Single-file executable - Bun](https://bun.com/docs/bundler/executables#full-stack-executables) web server plus assets

### Including binaries

1. **Bundle your application**  
   Use `bun build` to compile your JS/TS into an executable while specifying the external native binaries you want to exclude from the core bundle (so they remain referenced). [](https://github.com/oven-sh/bun/issues/15374)
2. **Embed files at build time**  
   Use Bun’s built-in `embeddedFiles` array to bundle the binary directly into the generated executable.
3. **Extract at runtime**  
   Have your application's entry point extract the embedded binary to a temporary system directory (e.g., `os.tmpdir()`) every time the executable launches.
4. **Update the import path**  
   Point your library requiring the native module (like `sharp` or `better-sqlite3`) to this new temporary path.

["bun build" does not embed binaries from node_modules correctly · Issue #15374 · oven-sh/bun](https://github.com/oven-sh/bun/issues/15374)

```js
import { file, write, $ } from "bun";
import { tmpdir } from "node:os";
import { join } from "node:path";

// Extract the embedded binary from the compiled executable
const tempDir = join(tmpdir(), "my-app-binaries");
const binaryPath = join(tempDir, "vendor-binary.node");

// embeddedFiles[0] represents the binary you bundled
await write(binaryPath, embeddedFiles[0]);

// Ensure execution permissions are set
await $`chmod 755 ${binaryPath}`;

// Load your library and force it to use the extracted binary
process.env.LIBRARY_BINARY_PATH = binaryPath;
import("./your-native-library.js");
```

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
[Single-file executable – Runtime | Bun Docs](https://bun.sh/docs/bundler/executables)

## App Framework

#web-framework

[Elysia - Fast, and friendly Bun web frameworks | Elysia.js](https://elysiajs.com/) tRPC, GQL, OpenAPI, JWT, type checks
[The BETH Stack: Build Hypermedia-Driven Web Apps with Great DX and Performance - YouTube](https://www.youtube.com/watch?v=cpzowDDJj24) Bun, Elysia, Turso, HTMX + Typed HTML

[Hono - Ultrafast web framework for the Edges](https://hono.dev/)

[Buchta](https://buchtajs.com/)

[Bun Crash Course 2023 with HTMX example - YouTube](https://www.youtube.com/watch?v=zNE5H6nOeCI) 2023-09

## Packages

[rgl/try-puppeteer-in-bun: try puppeteer in bun](https://github.com/rgl/try-puppeteer-in-bun)
[Fix `postinstall` and finish `trustedDependencies` · Issue #4959 · oven-sh/bun](https://github.com/oven-sh/bun/issues/4959) `trustedDependencies` is a workaround for non-whitelisted packages
[`bun add puppeteer` doesn't run postinstall script for trusted dependency · Issue #4705 · oven-sh/bun · GitHub](https://github.com/oven-sh/bun/issues/4705)

[Workaround](https://github.com/oven-sh/bun/issues/4705#issuecomment-1726000489):
`bunx @puppeteer/browsers install chrome@stable --path $HOME/.cache/puppeteer`
and set `PUPPETEER_EXECUTABLE_PATH` in `.env`
