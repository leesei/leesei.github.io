---
title: JavaScript Pipeline
description: ""
created: 2015-12-21
tags:
  - bundler
  - web
  - web-dev
---

Bundling and transpiling is a solved problem in 2023. We went from writing build scripts in Grunt, Gulp, Browserify, Webpack, Rollup, Snowpack to turnkey solutions and templates projects today.

[Understanding JavaScript Modules: Bundling & Transpiling](http://www.sitepoint.com/javascript-modules-bundling-transpiling/)
[Modern JavaScript Explained For Dinosaurs – Node.js Collection – Medium](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)
[These tools will help you write clean code](https://www.freecodecamp.org/news/these-tools-will-help-you-write-clean-code-da4b5401f68e)

[Prepack · Partial evaluator for JavaScript](https://prepack.io/) AOT optimization at build time

---

# CodeMod

[facebook/jscodeshift: A JavaScript codemod toolkit.](https://github.com/facebook/jscodeshift)
[cpojer/js-codemod: Codemod scripts to transform code to next generation JS](https://github.com/cpojer/js-codemod)
[facebook/codemod: Codemod is a tool/library to assist you with large-scale codebase refactors that can be partially automated but still require human oversight and occasional intervention. Codemod was developed at Facebook and released as open source.](https://github.com/facebook/codemod)

[A Codemod Survival Guide | benmccormick.org](https://benmccormick.org/2018/06/18/codemod-survival/)
[Codemods: A Quick and Easy Way to Automate Code Refactoring — SitePoint](https://www.sitepoint.com/getting-started-with-codemods/)
[Refactoring With Codemods and jscodeshift | Toptal](https://www.toptal.com/javascript/write-code-to-rewrite-your-code)
[Effective JavaScript Codemods – Christoph Pojer – Medium](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb)
[reactjs/react-codemod: React codemod scripts](https://github.com/reactjs/react-codemod)

[Christoph Pojer: Evolving Complex Systems Incrementally | JSConf EU 2015 - YouTube](https://www.youtube.com/watch?v=d0pOgY8__JM)
[Master the Art of the AST & Take Control of Your JS (English) - YouTube](https://www.youtube.com/watch?v=Xt7PFzOBTPk)

---

# Bundlers

[Comparing the New Generation of Build Tools | CSS-Tricks - CSS-Tricks](https://css-tricks.com/comparing-the-new-generation-of-build-tools/) 2022-01
[Modular JavaScript: A Beginners Guide to SystemJS & jspm](http://www.sitepoint.com/modular-javascript-systemjs-jspm/)
[21 Javascript Bundlers 🚀 | Hacker Noon](https://hackernoon.com/21-javascript-bundlers-az2h31c1)

[Modular JavaScript: A Beginners Guide to SystemJS & jspm](https://www.sitepoint.com/modular-javascript-systemjs-jspm/)

[pkg.module · rollup/rollup Wiki](https://github.com/rollup/rollup/wiki/pkg.module) instruct bundlers to use ES2015 modules

## Bundle size

[Reduce Your bundle.js File Size By Doing This One Thing](https://lacke.mn/reduce-your-bundle-js-file-size/)
[samccone/coverage-ext: Generate code coverage for any webpage](https://github.com/samccone/coverage-ext)

[BundlePhobia ❘ cost of adding a npm package](https://bundlephobia.com/)
[danvk/source-map-explorer: Analyze and debug space usage through source maps](https://github.com/danvk/source-map-explorer)
[LironEr/bundlemon: Monitor your bundle size](https://github.com/LironEr/bundlemon)

## Browserslist

[browserslist/browserslist: 🦔 Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env](https://github.com/browserslist/browserslist)

[Browserslist](https://browserslist.dev/)

## Bundle for Browser

> ESM bundles are also useful for Deno and modern browser

[[deno]]

[UNPKG](https://unpkg.com/) UMD
[Skypack: search millions of open source JavaScript packages](https://www.skypack.dev/) ESM
[ESM>CDN](https://esm.sh/) allows aliasing, ESM
[jsDelivr - A free, fast, and reliable CDN for JS and open source](https://www.jsdelivr.com/) good for Asia, CJS, ESM
[Hosted Libraries | Google Developers](https://developers.google.com/speed/libraries/)
[cdnjs - The #1 free and open source CDN built to make life easier for developers](https://cdnjs.com/) CloudFlare
[Microsoft Ajax Content Delivery Network Assets | Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/ajax/cdn/overview)
[Official CDN of Bootstrap and Font Awesome · BootstrapCDN](https://www.bootstrapcdn.com/) MaxCDN

[mikeal/brrp: ESM bundle npm modules for browsers and nodejs](https://github.com/mikeal/brrp)

## All-in-one dev server

Modern build chain should support

- Hot Module Reload (HMR)
- serving ES Module is dev
- module splitting and lazy loading
- fast speed (esbuild and swc fast)

[Create React App](https://create-react-app.dev/) is dead
Vite and Next.js replaced it with more features

[Introduction · Neutrino](https://neutrino.js.org/)
[Modern JavaScript Apps with Neutrino](https://davidwalsh.name/neutrino)

[insin/nwb: A toolkit for React, Preact, Inferno & vanilla JS apps, React libraries and other npm modules for the web, with no configuration (until you need it)](https://github.com/insin/nwb)

[Next.js by Vercel - The React Framework](https://nextjs.org/) [GitHub](https://github.com/vercel/next.js)

[microsite/getting-started.md at main · natemoo-re/microsite](https://github.com/natemoo-re/microsite/blob/main/docs/getting-started.md) using Snowpack, Preact

[Introduction – TSDX](https://tsdx.io/)
[jaredpalmer/tsdx: Zero-config CLI for TypeScript package development](https://github.com/jaredpalmer/tsdx) Rollup

[fwilkerson/microenvi: Bundle, serve, and hot reload with one command](https://github.com/fwilkerson/microenvi) microbundle

---

[[vite]]

# esbuild

[esbuild - An extremely fast JavaScript bundler](https://esbuild.github.io/) built with Go, used in Snowpack
[esbuild - Next-generation JavaScript bundler | refine](https://refine.dev/blog/what-is-esbuild/)
[tsup](https://tsup.egoist.sh/) Bundle your TypeScript library with no config, powered by esbuild

# WMR

[WMR: Tiny all-in-one development tool for modern web apps.](https://wmr.dev/)
[preactjs/wmr: 👩‍🚀 The tiny all-in-one development tool for modern web apps.](https://github.com/preactjs/wmr)

[The Preact Team Releases WMR to Simplify Modern Web App Development](https://www.infoq.com/news/2021/02/preact-wmr-release/)

# Turborepo

[Turborepo](https://turborepo.org/) TypeScript monorepo, used Turbopack
[vercel/turborepo: The High-performance Build System for JavaScript & TypeScript Codebases](https://github.com/vercel/turborepo)

[What is Turborepo and Why Should You Care? | refine](https://refine.dev/blog/how-to-use-turborepo/)

[From Go To RUST: The story of Turborepo - YouTube](https://www.youtube.com/watch?v=eOCxuHp76yA)

# Turbopack

[Turbopack - The successor to Webpack](https://turbo.build/pack) caches source files during build, good for large project

# PWA

[PWA](https://pwa.cafe/)

# Rollup.js

[rollup.js](http://rollupjs.org/)
[rollup.js guide](http://rollupjs.org/guide/)
[rollup/awesome: ⚡️ Delightful Rollup Plugins, Packages, and Resources](https://github.com/rollup/awesome)

[rollup.js](https://rollupjs.org/guide/en/#plugins)
[rollup/plugins: 🍣 The one-stop shop for official Rollup plugins](https://github.com/rollup/plugins)

[rollup/rollup-starter-app: Bare-bones example of how to create an application using Rollup](https://github.com/rollup/rollup-starter-app)
[rollup/rollup-starter-lib: Bare-bones example of how to create a library using Rollup](https://github.com/rollup/rollup-starter-lib)

[Webpack and Rollup: the same but different – webpack – Medium](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)

# Parcel

[📦 Parcel](https://parceljs.org/)
[parcel-bundler/awesome-parcel: 🔗 A curated list of awesome Parcel resources, libraries, tools and boilerplates](https://github.com/parcel-bundler/awesome-parcel)

[Everything You Need To Know About Parcel: The Blazing Fast Web App Bundler 🚀](https://www.freecodecamp.org/news/all-you-need-to-know-about-parcel-dbe151b70082)
[Parcel vs webpack - Jakob Lind](http://blog.jakoblind.no/parcel-webpack/)

[Using Parcel as a Bundler for React Applications | CSS-Tricks](https://css-tricks.com/using-parcel-as-a-bundler-for-react-applications/)
[Parcel.js — Easy JavaScript Bundling | by Christopher Shaffer | Better Programming](https://betterprogramming.pub/parcel-js-easy-javascript-bundling-ecddac0783f7)

[Parcel bundler: Like Webpack but effortless | InfoWorld](https://www.infoworld.com/article/3337242/javascript/parcel-bundler-like-webpack-but-effortless.html)
[Parcel bundler: Testing Parcel’s asset support | InfoWorld](https://www.infoworld.com/article/3338085/javascript/parcel-bundler-testing-parcels-asset-support.html)
[Parcel bundler: Production builds and best practices | InfoWorld](https://www.infoworld.com/article/3340378/javascript/parcel-bundler-production-builds-and-best-practices.html)

# Rome

[Rome Toolchain](https://rome.tools/)
[Deep dive into Rome: Linting, compiling, and bundling - LogRocket Blog](https://blog.logrocket.com/deep-dive-into-rome-linting-compiling-and-bundling/)

# swc

[swc](https://swc.rs/) with Rust

# hq

[hqjs](https://hqjs.org/)

# microbundle

[developit/microbundle: 📦 Zero-configuration bundler for tiny modules.](https://github.com/developit/microbundle)
[Zero-Config Monorepo for a React Component Library in 2019](https://medium.com/@MattBlackDev/zero-config-monorepo-for-a-react-component-library-in-2019-dd9137bdd0a6)

Example:
[JReinhold/mdx-deck-live-code: A component for mdx-deck to live code in your slides. 🤯](https://github.com/JReinhold/mdx-deck-live-code)
[philipp-spiess/react-recomponent: 🥫 Reason-style reducer components for React using ES6 classes.](https://github.com/philipp-spiess/react-recomponent)

Uses convention in `package.json` to specify output:

```json
"main": "./dist/foo.umd.js", // legacy UMD output (for Node & CDN use)
"exports": "./dist/foo.modern.js", // modern ES2017 output
"module": "./dist/foo.module.js", // legacy ES Modules output (for bundlers)
"source": "src/foo.js",         // custom entry module (same as 1st arg to microbundle)
"types": "dist/foo.d.ts",       // TypeScript typings
```

# FuseBox

[FuseBox - Blazing fast js bundler/loader with super powers](https://fuse-box.org/)
[fuse-box/fuse-box: A blazing fast js bundler/loader with a comprehensive API](https://github.com/fuse-box/fuse-box)

# Packem

[Packem – A precompiled JavaScript module bundler](https://packem.github.io/)
[packem/packem: 📦⚡ A precompiled JavaScript module bundler](https://github.com/packem/packem)

[Introducing Packem: a super fast experimental bundler written in Rust](https://www.freecodecamp.org/news/introducing-packem-a-super-fast-experimental-bundler-written-in-rust-e981af875517)
