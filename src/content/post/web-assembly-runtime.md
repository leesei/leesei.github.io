---
title: Web Assembly Runtimes
description: "Runtimes for Web Assembly"
created: 2023-03-28
tags:
  - wasm
  - wasm/runtime
---

[appcypher/awesome-wasm-runtimes: A list of webassemby runtimes](https://github.com/appcypher/awesome-wasm-runtimes)
[WebAssembly runtimes compared - LogRocket Blog](https://blog.logrocket.com/webassembly-runtimes-compared/)

## WASI

> tools/articles common to the WASI ecosystem

[WASI](https://wasi.dev/)

- can also replace the Emscripten driven runtime in browser
- sandboxing idea similar to [[deno]]

[bytecodealliance/wizer: The WebAssembly Pre-Initializer](https://github.com/bytecodealliance/wizer)

[Standardizing WASI: A system interface to run WebAssembly outside the web - Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/)
[Bringing WebAssembly outside the web with WASI by Lin Clark - YouTube](https://www.youtube.com/watch?v=fh9WXPu0hw8)

### Package Manager

[WAPM - WebAssembly Package Manager](https://wapm.io/)

[WASM Components: The Interchangeable Parts of Software - YouTube](https://www.youtube.com/watch?v=ZxEqvtGUGLY)

## Wasmtime

[Wasmtime](https://wasmtime.dev/)
[Introduction - Wasmtime](https://docs.wasmtime.dev/introduction.html)
[bytecodealliance/wasmtime: A fast and secure runtime for WebAssembly](https://github.com/bytecodealliance/wasmtime)
stand-alone WebAssembly runtime that can be used as a CLI tool or embedded into other systems. It's very configurable and scalable so that it can serve as the base for many use-case specific runtimes, from small IoT devices all the way up to cloud data centers. Uses [Cranelift](https://github.com/bytecodealliance/wasmtime/tree/main/cranelift) for code generation.

[Alfonso de la Rocha: @adlrocha - Playing with Wasmtime and Web Assembly's linear memory](https://adlrocha.substack.com/p/adlrocha-playing-with-wasmtime-and)

[WebAssembly Reference Types Implemented in wasmtime, Lets Wasm Modules Handle Complex Types](https://www.infoq.com/news/2020/09/wasm-reference-types-wasmtime/)

### Wamr

[bytecodealliance/wasm-micro-runtime: WebAssembly Micro Runtime (WAMR)](https://github.com/bytecodealliance/wasm-micro-runtime)
another use-case specific runtime. It's ideal for small embedded devices that have extremely limited resources. It provides a small footprint and uses an interpreter to keep memory overhead low.

## WasmEdge

[WasmEdge Runtime](https://wasmedge.org/)
[WasmEdge/WasmEdge: WasmEdge is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. It powers serverless apps, embedded functions, microservices, smart contracts, and IoT devices.](https://github.com/WasmEdge/WasmEdge)

## wasm3

[wasm3/wasm3: 🚀 A fast WebAssembly interpreter and the most universal WASM runtime](https://github.com/wasm3/wasm3)

## Others

[as-wasi - npm](https://www.npmjs.com/package/as-wasi) WASI runtime for AssemblyScript

[WASM to WASI - DEV Community 👩‍💻👨‍💻](https://dev.to/jeikabu/wasm-to-wasi-5866)
[Running WASI in the Browser and Node.js with Wasmer-JS](https://www.infoq.com/news/2019/10/wasmer-js-wasi-wasm-browser/)

## WAGI

[Updates on WAGI, the WebAssembly Gateway Interface - Deis Labs](https://deislabs.io/posts/wagi-updates/) 2021-05
[Introducing WAGI: The Easiest Way to Build WebAssembly Microservices - Deis Labs](https://deislabs.io/posts/introducing-wagi-easiest-way-to-build-webassembly-microservices/)
[deislabs/wagi: Write HTTP handlers in WebAssembly with a minimal amount of work](https://github.com/deislabs/wagi)

[Understanding WAGI, the WebAssembly Gateway Interface | InfoWorld](https://www.infoworld.com/article/3632865/understanding-wagi-the-webassembly-gateway-interface.html)
[Wasm, WASI, Wagi: What are they? | Fermyon • Experience the next wave of cloud computing.](https://www.fermyon.com/blog/wasm-wasi-wagi)

## Docker

[Introducing the Docker+Wasm Technical Preview](https://www.docker.com/blog/docker-wasm-technical-preview/)
[Build, Share, and Run WebAssembly Apps Using Docker](https://www.docker.com/blog/build-share-run-webassembly-apps-docker/)
[Docker+Wasm (Beta) | Docker Documentation](https://docs.docker.com/desktop/wasm/)

## Rust

[wasmi - Rust](https://paritytech.github.io/wasmi/wasmi/index.html)
[paritytech/wasmi: Wasm interpreter in Rust](https://github.com/paritytech/wasmi)
