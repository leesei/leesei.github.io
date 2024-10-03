---
title: Remote Procedure Call (RPC)
description: ""
created: 2018-08-02
updated: 2024-08-14
tags:
  - comp/lang
  - rpc
  - web-dev
---

[[grpc]]
[[web-socket]]

[Remote procedure call - Wikiwand](http://omni.wikiwand.com/en/Remote_procedure_call)
Usually an interface description language ([IDL](#idl)) is used to define the data sent over the wire. The IDL that can usually generate bindings for multiple languages.

[Understanding RPC (tour of API protocols, gRPC nodejs walkthrough, and Apache Arrow Flight)](https://main.grokoverflow.com/posts/2022/02-understanding-rpc-node-walkthrough)
[A Brief History of API: RPC, REST, GraphQL, tRPC - DEV Community 👩‍💻👨‍💻](https://dev.to/zenstack/a-brief-history-of-api-rpc-rest-graphql-trpc-fme)

Message queues can be used for RPC calls.

[[message-queue]]

> nanomsg and zeromq's REQREP can also be used for RPC

## zerorpc

[zerorpc](http://www.zerorpc.io/) MessagePack + ZeroMQ
[zerorpc](https://github.com/0rpc) Org
[Build reliable, traceable, distributed systems with ZeroMQ - YouTube](https://www.youtube.com/watch?v=9G6-GksU7Ko)

## tRPC

> can be embedded in Next.js

[[nextjs#T3 App]]

[tRPC - Move Fast and Break Nothing. End-to-end typesafe APIs made easy. | tRPC](https://trpc.io/) uses `zod`
[Awesome tRPC Collection | tRPC](https://trpc.io/docs/awesome-trpc)

[Let's Learn tRPC!](https://www.learnwithjason.dev/let-s-learn-trpc)
[Let's Learn tRPC! - YouTube](https://www.youtube.com/watch?v=GryES84SSEU)
[Build a full-stack TypeScript app using tRPC and React - LogRocket Blog](https://blog.logrocket.com/build-full-stack-typescript-app-trpc-react/)
[Chris Bautista: Making typesafe APIs easy with tRPC - YouTube](https://www.youtube.com/watch?v=2LYM8gf184U)

[First Look at Create T3 App w/ Christopher Ehrlich - YouTube](https://www.youtube.com/watch?v=-CWarVQDtEg)
[How tRPC really works - YouTube](https://www.youtube.com/watch?v=x4mu-jOiA0Q)
[Advanced tRPC - Callers, functions, and gSSP - YouTube](https://www.youtube.com/watch?v=G2ZzmgShHgQ)

- should not call tRPC procedure in tRPC, extract the common logic to a function
- use `createProxySSGHelpers()`'s `prefetch()`/`fetch()` to call tRPC procedure in `getServerSideProps()`

[Is GraphQL DEAD?? tRPC VS GQL - YouTube](https://www.youtube.com/watch?v=KIJUUtWjl48)

[Build a Public tRPC API: trpc-openapi vs ts-rest](https://catalins.tech/public-api-trpc/)
[jlalmes/trpc-openapi: OpenAPI support for tRPC 🧩](https://github.com/jlalmes/trpc-openapi)

[🪄 | ts-rest](https://ts-rest.com/)
[GitHub - ts-rest/ts-rest: RPC-like client, contract, and server implementation for a pure REST API](https://github.com/ts-rest/ts-rest)
[I Never Want to Create APIs Any Other Way - YouTube](https://www.youtube.com/watch?v=tjfEkaPiKQQ)

## RSocket

[RSocket](http://rsocket.io/)
[RPC Thunder Dome – Netifi – Medium](https://medium.com/netifi/rpc-thunder-dome-3103e2449957)
[Give REST a Rest with RSocket](https://www.infoq.com/articles/give-rest-a-rest-rsocket)

[Differences between gRPC and RSocket - Netifi - Medium](https://medium.com/netifi/differences-between-grpc-and-rsocket-e736c954e60)

[RSocket: Reactive Streaming Service Networking with Ryland Degnan - Software Engineering Daily](https://softwareengineeringdaily.com/2019/01/22/rsocket-reactive-streaming-service-networking-with-ryland-degnan/)

## Scuttlebutt

[Secure Scuttlebutt Consortium](https://github.com/ssbc)
[The definitive guide to Secure Scuttlebutt – clebertech-en – Medium](https://medium.com/clebertech-en/the-definitive-guide-to-secure-scuttlebutt-a1b3a3fd73f6)
[Secure Scuttlebutt - Scuttlebot](http://scuttlebot.io/more/protocols/secure-scuttlebutt.html)
[Scuttlebutt Protocol Guide](https://ssbc.github.io/scuttlebutt-protocol-guide/index.html)
[ssbc/scuttlebutt-guide: A collection of links to known resources!](https://github.com/ssbc/scuttlebutt-guide)

[Scuttlebutt · GitBook](https://www.scuttlebutt.nz/) Patchwork client

Patchwork is a user interface for displaying messages from the distributed database (Scuttlebot) to the user, and to allow the user to add new messages. The underlying protocol supports arbitrary message types, Patchwork exposes a UI for interacting with a subset of them. Anyone could write and use other UIs while still contributing to the same database. [Patchbay](https://github.com/ssbc/patchbay) for example is a more developer-centric frontend.

[Scuttlebot peer-to-peer log store](http://scuttlebot.io/) used as a database, identity provider, and messaging system
[dominictarr/sbot-web](https://github.com/dominictarr/sbot-web)

## TARS

[TARS,rpc framework by tencent](https://tars.tencent.com/base/tars_index/en/index.html)
[TarsCloud/Tars: Tars is a highly performance rpc framework based on naming service using tars protocol and provides a semi-automatic operation platform.](https://github.com/TarsCloud/Tars)

## Dubbo

RPC framework created by Alibaba.

[DUBBO](http://dubbo.io/)
[dubbo (@dubbo) on GitBook · GitBook](https://www.gitbook.com/@dubbo)

[alibaba/dubbo: Dubbo is a high-performance, java based, open source RPC framework](https://github.com/alibaba/dubbo)

## ICE

> GPLv2

[Internet Communications Engine - Wikiwand](https://omni.wikiwand.com/en/Internet_Communications_Engine)
[ZeroC - Network Your Software](https://zeroc.com/)

## JSON-RPC

[JSON-RPC](https://www.jsonrpc.org/)
[simple is better - JSON-RPC](http://www.simple-is-better.org/rpc/index.html)

## SOAP

[SOAP - Wikiwand](https://omni.wikiwand.com/en/SOAP)
[How to Perform SOAP Requests With Node.js - Better Programming - Medium](https://medium.com/better-programming/how
