---
title: Web Assembly Runtimes
description: Runtimes for Web Assembly
created: 2023-03-28
updated: 2023-09-29
tags:
  - wasm
  - wasm/runtime
---

[appcypher/awesome-wasm-runtimes: A list of webassemby runtimes](https://github.com/appcypher/awesome-wasm-runtimes)
[WebAssembly runtimes compared - LogRocket Blog](https://blog.logrocket.com/webassembly-runtimes-compared/)

## WASI

> ABI and standard library to WebAssembly runtime
> tools/articles common to the WASI ecosystem

[WASI](https://wasi.dev/)
[Wasm, WASI, Wagi: What are they? | Fermyon • Experience the next wave of cloud computing.](https://www.fermyon.com/blog/wasm-wasi-wagi)

- can also replace the Emscripten driven runtime in browser
- sandboxing idea similar to [[deno]]

[Let's Talk About WebAssembly and WASI - YouTube](https://www.youtube.com/watch?v=2qV-1JhxWeE) 2021-05, 2:09:33
[Bringing WebAssembly outside the web with WASI by Lin Clark - YouTube](https://www.youtube.com/watch?v=fh9WXPu0hw8) 2019-06
[Standardizing WASI: A system interface to run WebAssembly outside the web - Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/) 2019-03

[bytecodealliance/wizer: The WebAssembly Pre-Initializer](https://github.com/bytecodealliance/wizer) for faster startup of WASM program

### SDK

[WebAssembly/wasi-sdk: WASI-enabled WebAssembly C/C++ toolchain](https://github.com/WebAssembly/wasi-sdk)
[Package wasi-sdk](https://github.com/WebAssembly/wasi-sdk/pkgs/container/wasi-sdk)

### WASIX

[WASIX - The Superset of WASI](https://wasix.org/)

[Announcing WASIX](https://wasmer.io/posts/announcing-wasix)
[New Wasm Platform And Standard WASIX?? - YouTube](https://www.youtube.com/watch?v=d94s2z6S130)

## Package Manager

[WASM Components: The Interchangeable Parts of Software - YouTube](https://www.youtube.com/watch?v=ZxEqvtGUGLY)

### WAPM

> universal packages

[WAPM - WebAssembly Package Manager](https://wapm.io/) Wasmer？
[WebAssembly On The Server??? Why? - YouTube](https://www.youtube.com/watch?v=OHmycSgFAUs)
[WebAssembly Runtime 開源專案 Wasmer 3.0 簡化 WAPM 套件安裝與使用 | iThome](https://www.ithome.com.tw/news/154415)

## Wasmer

[Wasmer - The Universal WebAssembly Runtime](https://wasmer.io/) compiling multiple languages to WASM, WAT and to native binary
[wasmerio/wasmer-js: Monorepo for Javascript WebAssembly packages by Wasmer](https://github.com/wasmerio/wasmer-js) provides `@wasmer/wasi`

[WebAssembly.sh](https://webassembly.sh/)
[Announcing WebAssembly.sh - Wasmer - Medium](https://medium.com/wasmer/webassembly-sh-408b010c14db)

[Compile WebAssembly on Linux to native Windows using Wasmer & Zig - YouTube](https://www.youtube.com/watch?v=VbYy2gqjnJI)

## Wasmtime

[Wasmtime](https://wasmtime.dev/) JIT compiler
[Introduction - Wasmtime](https://docs.wasmtime.dev/introduction.html)
[bytecodealliance/wasmtime: A fast and secure runtime for WebAssembly](https://github.com/bytecodealliance/wasmtime)
stand-alone WebAssembly runtime that can be used as a CLI tool or embedded into other systems. It's very configurable and scalable so that it can serve as the base for many use-case specific runtimes, from small IoT devices all the way up to cloud data centers. Uses [Cranelift](https://github.com/bytecodealliance/wasmtime/tree/main/cranelift) for code generation.

[Bytecode Alliance — Wasmtime 1.0: A Look at Performance](https://bytecodealliance.org/articles/wasmtime-10-performance)
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
[Introducing WAGI: The Easiest Way to Build WebAssembly Microservices - Deis Labs](https://deislabs.io/posts/introducing-wagi-easiest-way-to-build-webassembly-microservices/) 2020-10
[deislabs/wagi: Write HTTP handlers in WebAssembly with a minimal amount of work](https://github.com/deislabs/wagi)

[Introduction to WAGI by Rainer Stropek & Stefan Baumgartner - Rust Linz, March 2022 - YouTube](https://www.youtube.com/watch?v=9NDwHBjLlhQ) 1:00:46 (53:22 with content), WAGI app, dev environment, `wasm-to-oci`
[rust-samples/hello-wagi at master · rstropek/rust-samples](https://github.com/rstropek/rust-samples/tree/master/hello-wagi)

[Understanding WAGI, the WebAssembly Gateway Interface | InfoWorld](https://www.infoworld.com/article/3632865/understanding-wagi-the-webassembly-gateway-interface.html)
[Wasm, WASI, Wagi: What are they? | Fermyon • Experience the next wave of cloud computing.](https://www.fermyon.com/blog/wasm-wasi-wagi)

## Docker

[Introducing the Docker+Wasm Technical Preview](https://www.docker.com/blog/docker-wasm-technical-preview/)
contained + WasmEdge
[Build, Share, and Run WebAssembly Apps Using Docker](https://www.docker.com/blog/build-share-run-webassembly-apps-docker/)
[Docker+Wasm (Beta) | Docker Documentation](https://docs.docker.com/desktop/wasm/)

[What is WebAssembly? And what's it got to do with Docker? | WASM vs Docker | KodeKloud - YouTube](https://www.youtube.com/watch?v=7553XZ0T6pM)

[engineerd/wasm-to-oci: Use OCI registries to distribute Wasm modules](https://github.com/engineerd/wasm-to-oci)
[Use OCI containers to run WebAssembly workloads | Opensource.com](https://opensource.com/article/22/10/wasm-containers)
[Distributing WebAssembly modules using OCI registries | radu's blog](https://radu-matei.com/blog/wasm-to-oci/)

## Rust

[wasmi - Rust](https://paritytech.github.io/wasmi/wasmi/index.html)
[paritytech/wasmi: Wasm interpreter in Rust](https://github.com/paritytech/wasmi)
