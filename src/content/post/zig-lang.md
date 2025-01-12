---
title: Zig Programming Language
description: General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.
created: 2023-03-24
updated: 2025-01-09
tags:
  - comp/lang
  - package-manager
---

Yet another system language wanted to replace C.

- Interoperable by design
  C friendly ABI
  uses Clang for parsing header and compiling C code
  uses llvm as backend for optimization
  [[#zig as a C compiler]]
- Many supported targets
- No system libc dependency (Zig ships with many libc)
- `errdefer` (more advanced than `defer` in Go)
  typical pattern is to `deinit()` in defer
- Compile-time code execution
- Made [[bun]]

[Home ⚡ Zig Programming Language](https://ziglang.org/)
[ziglang/zig: General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.](https://github.com/ziglang/zig)
[Zig (programming language) - Wikiwand](<https://www.wikiwand.com/en/Zig_(programming_language)>)
[zigtools](https://github.com/zigtools) `zls` (language server)

```sh
zig init-exe

zig init-lib

zig env
zig zen
```

[catdevnull/awesome-zig: A list of awesome projects related to Zig](https://github.com/catdevnull/awesome-zig)
[C-BJ/awesome-zig: 📜Zig Learning Guide & Project Lists](https://github.com/C-BJ/awesome-zig)
[nrdmn/awesome-zig](https://github.com/nrdmn/awesome-zig) 😴inactive
[build system terminology update: package, project, module, dependency · Issue #14307 · ziglang/zig](https://github.com/ziglang/zig/issues/14307)

[Zig in 100 Seconds - YouTube](https://www.youtube.com/watch?v=kxT8-C1vmd4)
[Zig for Impatient Devs - YouTube](https://www.youtube.com/watch?v=5I4ZkmMS4-0)
[CppCast Episode 342: Zig with Andrew Kelley - YouTube](https://www.youtube.com/watch?v=AdP6seB4sp4) 2022

[Prime Reacts: Is This NEW Language BETTER Than Rust? C++? (Zig First Impressions) - YouTube](https://www.youtube.com/watch?v=alp_Sx5qhn0)
[Zig is FASTER and SAFER than Rust | Prime Reacts - YouTube](https://www.youtube.com/watch?v=CbQVR4v5PZw)
[What's Zig got that C, Rust and Go don't have? (with Loris Cro) - YouTube](https://www.youtube.com/watch?v=5_oqWE9otaE)
[i changed my mind about zig - YouTube](https://www.youtube.com/watch?v=pnnx1bkFXng) Low Level Learning

[Loris Cro's Personal Website](https://kristoff.it/)
[Andrew Kelley](https://andrewkelley.me/)

## Roadmap

[The Road to Zig 1.0 - Andrew Kelley - YouTube](https://www.youtube.com/watch?v=Gv2I7qTux7g) 2019-05
[Zig Roadmap 2023 - Andrew Kelley - YouTube](https://www.youtube.com/watch?v=AqDdWEiSwMM) 2022-04, history
[Zig Status Update & Demo - Cross Compilation & Async Functions - YouTube](https://www.youtube.com/watch?v=1U7Yy2XgcrE)

[Goodbye to the C++ Implementation of Zig ⚡ Zig Programming Language](https://ziglang.org/news/goodbye-cpp/) 2022-12
[Zig Is Bootstrapping With WASM, Why? - YouTube](https://www.youtube.com/watch?v=MCfD7aIl-_E)

## Learn

[Documentation - The Zig Programming Language](https://ziglang.org/documentation/master/)
[Learn ⚡ Zig Programming Language](https://ziglang.org/learn/)
[ratfactor/ziglings: Learn the Zig programming language by fixing tiny broken programs.](https://github.com/ratfactor/ziglings)

[Chapter 0 - Getting Started | ziglearn.org](https://ziglearn.org/)
[How To Zig?](https://www.nmichaels.org/zig/)
[Zig Crash Course - Gamedev Guide](https://ikrima.dev/dev-notes/zig/zig-crash-course/)
[In-depth Overview ⚡ Zig Programming Language](https://ziglang.org/learn/overview/)

[ziglings/exercises: Learn the ⚡Zig programming language by fixing tiny broken programs. - Codeberg.org](https://codeberg.org/ziglings/exercises/)

[Zig in 30 minutes](https://gist.github.com/ityonemo/769532c2017ed9143f3571e5ac104e50)
[Zig tutorial series - YouTube](https://www.youtube.com/playlist?list=PLLRM7ROnmA9GNl8t_02kTa6Xqp7leH7lN) Matt Freire

[Introduction to the Zig Programming Language - Andrew Kelley](http://andrewkelley.me/post/intro-to-zig.html) 2019
[Intro to the Zig Programming Language • Andrew Kelley • GOTO 2022 - YouTube](https://www.youtube.com/watch?v=YXrb-DqsBNU)
[Understanding the Zig Programming Language | The Startup](https://medium.com/swlh/zig-the-introduction-dcd173a86975)

[Zig - YouTube](https://www.youtube.com/playlist?list=PLkj9QI818ttdeWrktvY4iQ2rhm0ku3Uqb) Context Free
[Zig SHOWTIME - YouTube](https://www.youtube.com/@ZigSHOWTIME) semi-official Youtube channel

[making a game in zig (i have never used zig) LIVE! - YouTube](https://www.youtube.com/watch?v=ajbYYgbDXGk)

## Commentaries

[Zig language: a WAY better C! - YouTube](https://www.youtube.com/watch?v=J6ZxxnSp_fY) 2021
[3 things you might like about Zig - YouTube](https://www.youtube.com/watch?v=3DxjZmLBizI)

[Is Zig the Long Awaited C Replacement? | by Erik Engheim | Medium](https://erik-engheim.medium.com/is-zig-the-long-awaited-c-replacement-c8eeace1e692)
[Software Reliability C++ vs Zig. A tiny comparison of C++ and Zig in… | by Erik Engheim | Medium](https://erik-engheim.medium.com/software-reliability-c-vs-zig-dbb2d0005b9c)
[C++ vs Zig Template Based Programming | by Erik Engheim | Level Up Coding](https://levelup.gitconnected.com/c-vs-zig-template-based-programming-d3e248885aa)

[When Zig is safer and faster than Rust](https://zackoverflow.dev/writing/unsafe-rust-vs-zig/)
[Zig is FASTER and SAFER than Rust | Prime Reacts - YouTube](https://www.youtube.com/watch?v=CbQVR4v5PZw)
[Zig And Rust](https://matklad.github.io/2023/03/26/zig-and-rust.html)

[Why I Chose Rust Over Zig - YouTube](https://www.youtube.com/watch?v=Vxq6Qc-uAmE)
[P99 CONF - Zig vs Rust - YouTube](https://www.youtube.com/watch?v=7czcewOnaYg)

[The search for easier safe systems programming](https://www.sophiajt.com/search-for-easier-safe-systems-programming/)
[A Review of the Zig Programming Language (using Advent of Code 2021) :: Neil Henning](https://www.neilhenning.dev/posts/2021-aoc-zig/) 2021
[My Zig Experience | Prime Reacts - YouTube](https://www.youtube.com/watch?v=SBe8DgBCjTc)

## Internals

[Zig Compiler Internals - Andrew Kelley - YouTube](https://www.youtube.com/watch?v=8MbREuiLQrM) Zig code tour

[What's a Memory Allocator Anyway? - Benjamin Feng - YouTube](https://www.youtube.com/watch?v=vHWiDx_l4V0)

## zig as a C compiler

[use zig as a c compiler · Issue #490 · ziglang/zig](https://github.com/ziglang/zig/issues/490)

```
ar
cc
c++
dlltool
lib
ranlib
```

[`zig cc`: a Powerful Drop-In Replacement for GCC/Clang - Andrew Kelley](https://andrewkelley.me/post/zig-cc-powerful-drop-in-replacement-gcc-clang.html)

[Chapter 3 - Build system | ziglearn.org](https://ziglearn.org/chapter-3/)
[zig build explained Series' Articles - Zig NEWS](https://zig.news/xq/series/2)
[Zig Build - Gamedev Guide](https://ikrima.dev/dev-notes/zig/zig-build/)

[Zig Build System - In-depth Overview ⚡ Zig Programming Language](https://ziglang.org/learn/overview/#zig-build-system)
[Maintain it With Zig | Loris Cro's Blog](https://kristoff.it/blog/maintain-it-with-zig/)
[Compile a C/C++ Project with Zig - Zig NEWS](https://zig.news/kristoff/compile-a-c-c-project-with-zig-368j)
[Make Zig Your C/C++ Build System - Zig NEWS](https://zig.news/kristoff/make-zig-your-c-c-build-system-28g5)
[Extend a C/C++ Project with Zig - Zig NEWS](https://zig.news/kristoff/extend-a-c-c-project-with-zig-55di)

[Updating libc · ziglang/zig Wiki](https://github.com/ziglang/zig/wiki/Updating-libc)

[make the main zig executable no longer depend on LLVM, LLD, and Clang libraries · Issue #16270 · ziglang/zig · GitHub](https://github.com/ziglang/zig/issues/16270)

### Cross Compile

```sh
zig targets
zig targets | jq ". | keys"
zig targets | jq .arch
zig targets | jq .libc  # this would be the target triple

zig build -Dtarget=x86_64-windows
```

[Zig Makes CGo Cross-compilation Just Work - Loris Cro - YouTube](https://www.youtube.com/watch?v=nBLFMwoDDaY)
[How Zig is used at Uber - Motiejus Jakštys - YouTube](https://www.youtube.com/watch?v=SCj2J3HcEfc)
[Cross-compiling is a first-class use case - In-depth Overview ⚡ Zig Programming Language](https://ziglang.org/learn/overview/#cross-compiling-is-a-first-class-use-case)
[Cross-compile a C/C++ Project with Zig - Zig NEWS](https://zig.news/kristoff/cross-compile-a-c-c-project-with-zig-3599)

[Zig Makes Go Cross Compilation Just Work - DEV Community](https://dev.to/kristoff/zig-makes-go-cross-compilation-just-work-29ho)
[Building SQLite with CGo for (almost) every OS - Zig NEWS](https://zig.news/kristoff/building-sqlite-with-cgo-for-every-os-4cic)
[Reliably Cross Compiling Go using Zig - fREW Schmidt's Foolish Manifesto](https://blog.afoolishmanifesto.com/posts/golang-zig-cross-compilation/)
[Cross Compile a Go Project With CGO Dependencies Using Zig · Luca Corbo](https://lucor.dev/post/cross-compile-golang-fyne-project-using-zig/)

### ziglibc

[Ziglibc: Sweeping out the rug from underneath C - Jonathan Marler - Software You Can Love 2022 - YouTube](https://www.youtube.com/watch?v=1N85yU6RMcY)
[marler8997/ziglibc](https://github.com/marler8997/ziglibc)

[implement libc in zig · Issue #514 · ziglang/zig](https://github.com/ziglang/zig/issues/514)

## Windows binding

[Showing Zig how to see through Bill Gate's Windows - Jonathan Marler - YouTube](https://www.youtube.com/watch?v=HsnWZxrf5VE)

[marlersoft/zigwin32: Zig bindings for Win32 generated by https://github.com/marlersoft/zigwin32gen](https://github.com/marlersoft/zigwin32)
[marlersoft/zigwin32gen: Complete Autogenerated Zig bindings for Windows.](https://github.com/marlersoft/zigwin32gen)
[marlersoft/win32jsongen: Generates the JSON Win32 metadata files for: https://github.com/marlersoft/win32json](https://github.com/marlersoft/win32jsongen)

## Package Manager

[Zigmod Documentation | zigmod](https://nektro.github.io/zigmod/)
[nektro/zigmod: 📦 A package manager for the Zig programming language.](https://github.com/nektro/zigmod)

[Zig Package Index - Aquila](https://aquila.red/)
[zpm](https://zig.pm/)

[Zig Pkg](https://kassane.github.io/2023/05/03/zig-pkg/)
[silversquirl/deps.zig: A simple dependency manager for Zig](https://github.com/silversquirl/deps.zig)

[Zig libraries | Everything I Know](https://wiki.nikiv.dev/programming-languages/zig/zig-libraries)
[ZigLibs](https://github.com/ziglibs)
[ziglibs/repository: A community-maintained repository of zig packages](https://github.com/ziglibs/repository)

## Libraries/Packages

[std - Zig](https://ziglang.org/documentation/master/std/)

[thebsv/zitertools: An improved rewrite of the python itertools library to Zig.](https://github.com/thebsv/zitertools)
[KilianVounckx/zitertools: zig iterators](https://github.com/KilianVounckx/zitertools)

[alexnask/ctregex.zig: Compile time regular expressions in zig](https://github.com/alexnask/ctregex.zig)

[ibokuri/concepts: Compile-time validation of type constraints](https://github.com/ibokuri/concepts)
[hmusgrave/byol: Bring Your Own Loop -- A memory-efficient, straggler-avoiding, cache-friendly scheduler](https://github.com/hmusgrave/byol) (shelved till async is re-released with Zig 0.12)

### GUI

[david-vanderson/dvui](https://github.com/david-vanderson/dvui)
[david-vanderson/dvui-demo: examples for using gui](https://github.com/david-vanderson/dvui-demo)

[Capy UI - Cross Platform GUI Toolkit](https://capy-ui.org/)
[capy-ui/capy: 💻Build one codebase and get native UI on Windows, Linux and Web](https://github.com/capy-ui/capy)
[capy-ui/zig-template: Simple template for creating a Capy app in Zig](https://github.com/capy-ui/zig-template)

### CLI

[Hejsil/zig-clap: Simple command line argument parsing library](https://github.com/Hejsil/zig-clap)
[prajwalch/yazap: 🔧 The ultimate Zig library for seamless command line parsing. Effortlessly handles options, subcommands, and custom arguments with ease.](https://github.com/prajwalch/yazap)
[sam701/zig-cli: A simple package for building command line apps in Zig](https://github.com/sam701/zig-cli)

### Serde

[Arwalk/zig-protobuf: a protobuf 3 implementation for zig.](https://github.com/Arwalk/zig-protobuf)
[kubkon/protozig: The protozig(uana), or protocol buffers implementation in Zig](https://github.com/kubkon/protozig)
[zigtools/protobruh: Protobuf for Zig](https://github.com/zigtools/protobruh)
[mlugg/zigpb: Simple Protobuf encoder and decoder in Zig](https://github.com/mlugg/zigpb)

[gruebite/zzz: Simple and boring human readable data format for Zig.](https://github.com/gruebite/zzz)
[iddev5/inon: :floppy_disk: Data serialization format in Zig](https://github.com/iddev5/inon)

[getty-zig/getty: A (de)serialization framework for Zig](https://github.com/getty-zig/getty)
[getty-zig/json: A serialization library for JSON](https://github.com/getty-zig/json)

[kubkon/zig-yaml: YAML parser for Zig](https://github.com/kubkon/zig-yaml)
[aeronavery/zig-toml: A TOML parser written in Zig](https://github.com/aeronavery/zig-toml)

[travisstaloch/simdjzon: simdjson port to zig](https://github.com/travisstaloch/simdjzon)
[xyaman/zjson: Minimal json library with zero allocations](https://github.com/xyaman/zjson)
[ziglibs/eggzon: 🥚Zon - A DOM based Zig Object Notation parser](https://github.com/ziglibs/eggzon)

[clickingbuttons/arrow-zig: Apache Arrow implementation](https://github.com/clickingbuttons/arrow-zig)

### Database/ORM

### Network

[MasterQ32/zig-network: A smallest-common-subset of socket functions for crossplatform networking, TCP & UDP](https://github.com/MasterQ32/zig-network)

### Date/Time

### Logging

[candrewlee14/zlog: A zero-allocation log library for Zig](https://github.com/candrewlee14/zlog)

### Templates

[batiati/mustache-zig: Logic-less templates for Zig](https://github.com/batiati/mustache-zig)

### Math

[kooparse/zalgebra: Linear algebra library for games and real-time graphics.](https://github.com/kooparse/zalgebra)
[Traxar/numz](https://github.com/Traxar/numz)
[Hejsil/mecha: A parser combinator library for Zig](https://github.com/Hejsil/mecha)

## Gamedev

[michal-z/zig-gamedev: Building game development ecosystem for @ziglang!](https://github.com/michal-z/zig-gamedev)

[Jack-Ji/jok: A minimal 2d/3d game framework for @ziglang.](https://github.com/Jack-Ji/jok)

### Mach engine

[Mach engine - game engine & graphics toolkit for the future](https://machengine.org/)
[hexops/mach: Mach is a game engine & graphics toolkit for the future.](https://github.com/hexops/mach)
[hexops/mach-ecs: Entity Component System from first-principles designed for Zig](https://github.com/hexops/mach-ecs)
