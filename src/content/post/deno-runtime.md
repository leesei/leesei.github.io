---
title: Deno notes
description: ""
created: 2018-06-11
updated: 2024-03-18
tags:
  - deno
  - javascript/runtime
  - typescript
  - typescript/runtime
---

[Deno](https://deno.land/)
[denoland/deno: A secure TypeScript runtime on V8](https://github.com/denoland/deno)

- Deno is written in Rust
- [Search Results for 'deno' - crates.io: Rust Package Registry](https://crates.io/search?q=deno)
- making embedding Deno easy

[deno doc](https://doc.deno.land/)
[Introduction | Manual | Deno](https://deno.land/manual/introduction)
[Permissions | Manual | Deno](https://deno.land/manual/getting_started/permissions)

[10 Things I Regret About Node.js - Ryan Dahl - JSConf EU 2018 - YouTube](https://www.youtube.com/watch?v=M3BM9TB-8yA)
[Deno - HTTP 203 - YouTube](https://www.youtube.com/watch?v=SYkzk_j3yb0)
[Deno Crash Course - YouTube](https://www.youtube.com/watch?v=NHHhiqwcfRM) 2020-05
[Ryan Dahl's "My Dream Stack" at RemixConf 2022 - YouTube](https://www.youtube.com/watch?v=3NR9Spj0DmQ)
["What's next for Deno?" by Ryan Dahl (NodeCongress '23) - YouTube](https://www.youtube.com/watch?v=LVEGRj3RZSA)

[Forced Optimization - YouTube](https://www.youtube.com/watch?v=LVEGRj3RZSA)
["What to know about Deno 2.0" - YouTube](https://www.youtube.com/watch?v=5DX49vzLfqw)

[Deno: The next step in Node.js - DEV Community](https://dev.to/siddharthshyniben/deno-the-next-step-in-node-js-ij1)
[Building Your First Application With Deno](https://getstream.io/blog/build-deno-app/)

[What is Deno and will it Replace NodeJS? | by Fernando Doglio | Bits and Pieces](https://blog.bitsrc.io/what-is-deno-and-will-it-replace-nodejs-a13aa1734a74)
[Deno: Will It Replace Node.JS? - YouTube](https://www.youtube.com/watch?v=lcoU9jtsK24)
[Node.js Creator Blasts Node.js, Offers a Secure TypeScript-Based Alternative - The New Stack](https://thenewstack.io/node-js-creator-blasts-node-js-offers-a-secure-typescript-based-alternative/)
[First thoughts on Deno, the JavaScript/TypeScript run-time](https://43081j.com/2019/01/first-look-at-deno)

## Version History

[Deno 1.0 | Deno Blog](https://deno.com/blog/v1) 2020-05
[Deno 1.28: Featuring 1.3 Million New Modules](https://deno.com/blog/v1.28) 2022-11

## Awesome lists

[denolib/awesome-deno: Curated list of awesome things related to Deno](https://github.com/denolib/awesome-deno)
[denoone/awesome-deno: A curated list of awesome Deno frameworks, libraries, software and resources.](https://github.com/denoone/awesome-deno)
[Deno | Everything I know](https://wiki.nikiv.dev/web/deno)
[Awesome Deno 中文资源全图谱 · Deno 钻研之术](https://deno-tutorial.js.org/articles/ecology/awesome-deno-cn.html)

## Types

```sh
deno types
```

## Package Manager

[Deno Registry](https://deno.land/r)

[dnt - Deno to Node.js Transform | Manual | Deno](https://deno.land/manual@v1.36.4/advanced/publishing/dnt)
[denoland/dnt: Deno to npm package build tool.](https://github.com/denoland/dnt)

## Libraries

[[javascript-pipeline#bundle-for-browser]]

[Runtime APIs | Deno](https://deno.land/api)
[std | Deno](https://deno.land/std)
[denoland/deno_std: Deno standard library](https://github.com/denoland/deno_std)

[Third Party Modules | Deno](https://deno.land/x)
[denoland/deno_registry2: The backend for the deno.land/x service](https://github.com/denoland/deno_registry2)

[nest.land](https://nest.land/) decentralized storage
[deps.land - land of the Deno modules // deps.land](https://deps.land/)
[mod.land](https://mod.land/) CNAME to your site
[crux.land](https://crux.land/)

[denosaurs/denon: 👀 Monitor any changes in your Deno application and automatically restart.](https://github.com/denosaurs/denon) ~= nodemon, import map ~= import alias
[Use import maps in Deno with VSCode and Denon - DEV Community](https://dev.to/roelandmoors/use-import-maps-in-deno-with-vscode-and-denon-25c1)

### CLI

[Cliffy - Home](https://cliffy.io/)

[Altair-Bueno/chimera: A fantastic configuration library for Deno](https://github.com/Altair-Bueno/chimera)

[denosaurs/tabtab: 📎 Generate CLI completions for zsh, bash, and fish](https://github.com/denosaurs/tabtab)

[nsf/shell-util: Shell scripting helper functions for deno](https://github.com/nsf/shell-util)
[dsherret/dax: Cross platform shell tools for Deno inspired by zx.](https://github.com/dsherret/dax)

[Im-Beast/deno_tui: 🦕 Deno module for creating Terminal User Interfaces](https://github.com/Im-Beast/deno_tui)

### Database/ORM

[[sql#ORM (or not)]]

[Persist Data in Deno with npm using Prisma, Mongoose, Apollo, and more.](https://deno.com/blog/persistent-data-npm)

[halvardssm/deno-nessie: A modular Deno library for PostgreSQL, MySQL, MariaDB and SQLite migrations](https://github.com/halvardssm/deno-nessie)

[denoDB · MySQL, SQLite, MariaDB, PostgreSQL and MongoDB ORM for Deno](https://eveningkid.com/denodb-docs/)
[eveningkid/denodb: MySQL, SQLite, MariaDB, PostgreSQL and MongoDB ORM for Deno](https://github.com/eveningkid/denodb)

[Deno Drivers](https://github.com/denodrivers?type=source)
[denodrivers/postgres: PostgreSQL driver for Deno](https://github.com/denodrivers/postgres)
[denodrivers/mysql: MySQL driver for Deno](https://github.com/denodrivers/mysql)

[tilia | Deno](https://deno.land/x/tilia) NDJSON DB

## FFI

[Deno - YouTube](https://www.youtube.com/playlist?list=PL_2VhOvlMk4Uu0m4jD1dEqvyvYSzx9HyY)

[Getting Started w/ Deno & Rust - YouTube](https://www.youtube.com/watch?v=DFebtexgz6M) v1.26.1

[denoffi/denoffi: Deno Foreign Function Interface.](https://github.com/denoffi/denoffi)
[denosaurs/plug: 🔌 Deno FFI helper module](https://github.com/denosaurs/plug)

## App Frameworks

[[fresh]]

### Aleph.js

> inspired by Next.js

[Aleph.js](https://alephjs.org/)
[alephjs/aleph.js: The Full-stack Framework in Deno.](https://github.com/alephjs/aleph.js)

[Aleph.js: The Full-stack Framework in Deno](https://reactjsexample.com/aleph-js-the-full-stack-framework-in-deno/)

### crate

[crate](https://crate.land/)
[jordanreger/crate: a fullstack web framework built on deno!](https://github.com/jordanreger/crate)

## API Framework

[Building a Deno HTTPS Web Server with Self-Signed Certificate - YouTube](https://www.youtube.com/watch?v=I6TcBmNhB78)

[sebringrose/peko: Featherweight server/router framework + middleware and handler library 🐣](https://github.com/sebringrose/peko)

### Alosaur

[Alosaur | Alosaur](https://alosaur.com/)
[alosaur/alosaur: Alosaur - Deno web framework with many decorators](https://github.com/alosaur/alosaur)

### Oak

[oak | A middleware framework for handling HTTP with Deno 🐿️ 🦕](https://oakserver.github.io/oak/)
[oakserver/oak: A middleware framework for handling HTTP with Deno 🐿️ 🦕](https://github.com/oakserver/oak)

[awesome-oak | A list of community projects for oak](https://oakserver.github.io/awesome-oak/)
[cmorten/superoak: HTTP assertions for Oak made easy via SuperDeno. 🐿 🦕](https://github.com/cmorten/superoak)

### Drash

[Drash Land / Drash / Introduction](https://drash.land/drash/v2.x/getting-started/introduction)
[drashland/drash: A microframework for Deno's HTTP server with zero third-party dependencies](https://github.com/drashland/drash)

## Tips and Tricks

[Reload Deno cache after upgrading](https://www.secondstate.io/articles/reload-deno-cache/) errors in `std`

```sh
deno cache --reload my_app.ts
```

[Generate HTML on the server with Deno and JSX - DEV Community](https://dev.to/roelandmoors/generate-html-on-the-server-with-deno-and-jsx-429b)

[Using node modules in Deno. A bad practice but sometimes there is… | by Ada Rose Cannon | Samsung Internet Developers | Aug, 2020 | Medium](https://medium.com/samsung-internet-dev/using-node-modules-in-deno-2885600ed7a9)
