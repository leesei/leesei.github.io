---
title: TypeScript Runtime
description: Traditionally TypeScripts are compiled to JavaScript and run on Node.js/browser
created: 2014-12-11
updated: 2025-09-23
tags:
  - comp/lang
  - javascript/runtime
  - typescript
  - typescript/runtime
---

[[deno-runtime]]
[[bun-runtime]]

## REPL

[Hopa - zero config CLI that runs JavaScript and TypeScript](https://krasimirtsonev.com/blog/article/hopa-javascript-typescript-runner)
[a7ul/esbuild-node-tsc: Build your Typescript Node.js projects using blazing fast esbuild](https://github.com/a7ul/esbuild-node-tsc)

## ts-node

[ts-node | ts-node](https://typestrong.org/ts-node/)
[TypeStrong/ts-node: TypeScript execution and REPL for node.js](https://github.com/TypeStrong/ts-node)
[Running TypeScript Scripts With Ease with ts-node ← Alligator.io](https://alligator.io/typescript/running-typescript-ts-node/)

## config

[tsconfig.json · TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
[Compiler Options · TypeScript](https://www.typescriptlang.org/docs/handbook/compiler-options.html) ❗!important
[Unlocking the Power of TypeScript’s Compiler Configuration by covering the Must-Know Specifics of tsconfig.json | ITNEXT](https://itnext.io/unlocking-the-power-of-typescripts-compiler-configuration-ddf8772205eb)

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
