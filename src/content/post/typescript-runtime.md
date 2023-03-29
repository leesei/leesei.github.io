---
title: TypeScript Notes
description: Traditionally TypeScripts are compiled to JavaScript and run on Node.js/browser
created: 2014-12-11
tags:
  - comp.lang
  - javascript/runtime
  - typescript
  - typescript/runtime
---

[[deno]]
[[bun]]

## REPL

[Hopa - zero config CLI that runs JavaScript and TypeScript](https://krasimirtsonev.com/blog/article/hopa-javascript-typescript-runner)
[a7ul/esbuild-node-tsc: Build your Typescript Node.js projects using blazing fast esbuild](https://github.com/a7ul/esbuild-node-tsc)

## ts-node

[ts-node | ts-node](https://typestrong.org/ts-node/)
[TypeStrong/ts-node: TypeScript execution and REPL for node.js](https://github.com/TypeStrong/ts-node)
[Running TypeScript Scripts With Ease with ts-node ← Alligator.io](https://alligator.io/typescript/running-typescript-ts-node/)

## config

[tsconfig.json · TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
[Compiler Options · TypeScript](https://www.typescriptlang.org/docs/handbook/compiler-options.html) !important

`tsc --init` generates a default `tsconfig.json`
default `tsc` targets es2016, update these settings in `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "nodenext",
    "watch": true
  }
}
```
