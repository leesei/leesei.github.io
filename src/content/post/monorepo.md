---
title: Monorepo
description: Monorepo and tools
created: 2023-06-14
updated: 2024-03-23
tags:
  - app
  - git
  - meta
  - nx
  - shell-tool
  - turborepo
---

> many of these discussions are on Node.js/Frontend dev

[[nodejs-runtime#Local Dev Dependency]]

[Mono-repo or multi-repo? Why choose one, when you can have both?](https://medium.com/@patrickleet/mono-repo-or-multi-repo-why-choose-one-when-you-can-have-both-e9c77bd0c668) `meta`
[Repo style wars: mono vs multi](http://www.gigamonkeys.com/mono-vs-multi/)
[Why Google and Meta Put Billion Lines of Code In 1 Repository? - YouTube](https://www.youtube.com/watch?v=x3cANGNPyx0)

[Advantages of monorepos](https://danluu.com/monorepo/)
[Pros and Cons of Using Monorepos - FOSSA](https://fossa.com/blog/pros-cons-using-monorepos/)
[babel/monorepo.md at master · babel/babel](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)
[Monorepos: Please don’t!. Here we are at the beginning of 2019… | by Matt Klein | Medium](https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b)
[Monorepo: please do!. You should choose a monorepo because… | by Adam Jacob | Medium](https://medium.com/@adamhjk/monorepo-please-do-3657e08a4b70)
[Monorepos in JavaScript & TypeScript](https://www.robinwieruch.de/javascript-monorepos/)

[Rush](https://rushjs.io/) by Microsoft

[Zero-Config Monorepo for a React Component Library in 2019](https://medium.com/@MattBlackDev/zero-config-monorepo-for-a-react-component-library-in-2019-dd9137bdd0a6) yarn + microbundle + babel
[philipp-spiess/react-recomponent: 🥫 Reason-style reducer components for React using ES6 classes.](https://github.com/philipp-spiess/react-recomponent) microbundle + babel

[martpie/next-transpile-modules: Next.js plugin to transpile code from node_modules](https://github.com/martpie/next-transpile-modules)
[martpie/monorepo-typescript-next-the-sane-way: A monorepo example using TypeScript and Next.js](https://github.com/martpie/monorepo-typescript-next-the-sane-way)

## Turborepo

[[javascript-pipeline#Turborepo]]

[Learn how to build a monorepo in Next.js - LogRocket Blog](https://blog.logrocket.com/build-monorepo-next-js/)

## Nx

[Nx: Smart, Extensible Build Framework](https://nx.dev/)
[Nx Quickstart - How to Scale a JavaScript Project - YouTube](https://www.youtube.com/watch?v=VUyBY72mwrQ)
[Building ⚛️ React Micro Frontends Monorepo with NX in 5 min | by Vitalii Shevchuk | Feb, 2022 | Level Up Coding](https://levelup.gitconnected.com/building-%EF%B8%8F-react-micro-frontends-monorepo-with-nx-10bf564f03fe)
[Nx Quickstart - How to Scale a JavaScript Project - YouTube](https://www.youtube.com/watch?v=VUyBY72mwrQ)
[The Nx Iceberg - YouTube](https://www.youtube.com/watch?v=qG9fD508ufY)
[Architects Delight: Enforcing Layers and Project Boundaries with Nx - DEV Community](https://dev.to/this-is-learning/architects-delight-enforcing-layers-and-project-boundaries-with-nx-2d8o)

## Meta

[Developing a plugin for meta. In my last post, I introduced meta and… | by Patrick Lee Scott | Medium](https://patrickleet.medium.com/developing-a-plugin-for-meta-bd2e9c39882d)
[mateodelnorte/meta: tool for turning many repos into a meta repo. why choose many repos or a monolithic repo, when you can have both with a meta repo?](https://github.com/mateodelnorte/meta)
[mateodelnorte/loop: loop through commands in fun and amazing ways!](https://github.com/mateodelnorte/loop)

## myrepos/mr

[myrepos](https://myrepos.branchable.com/)
[Managing multiple repositories using mr – Aditya Basu](https://www.adityabasu.me/blog/2015/04/mr-tool/)

## repo

[repo](https://gerrit.googlesource.com/git-repo/+/refs/heads/master/README.md)
[Repo Command Reference | Android Open Source Project](https://source.android.com/setup/develop/repo)

```sh
# requires python
curl https://storage.googleapis.com/git-repo-downloads/repo > repo
chmod a+x ~/bin/repo
```

Integrates git repo with review system (Gerrit).
