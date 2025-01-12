---
title: Compiler
description: How source code is turned into machine code
created: 2023-04-14
updated: 2025-01-09
tags:
  - comp/hardware
  - comp/lang
---

[Compiler - Wikiwand](https://www.wikiwand.com/en/Compiler)

1. Tokenize source into tokens
2. Parse tokens into AST
3. Generate Intermediate Representation (IR) from AST nodes
4. Optimization on IR
5. Render IR into object files (machine code)
6. Linking of object files

[KEYNOTE: What Everyone Should Know About How Amazing Compilers Are - Matt Godbolt [C++ on Sea 2019] - YouTube](https://www.youtube.com/watch?v=w0sz5WbS5AM)
[How A Compiler Works: GNU Toolchain](http://www.slideshare.net/jserv/how-a-compiler-works-gnu-toolchain)
[I wrote a programming language. Here’s how you can, too.](https://www.freecodecamp.org/news/the-programming-language-pipeline-91d3f449c919/)
[Oops, I Wrote a C++ Compiler](https://praeclarum.org/2018/08/27/oops-i-wrote-a-c-compiler.html) C/C++ compiler/interpreter in .NET

[Create Your Own Programming Language Series' Articles - DEV Community](https://dev.to/jasonsbarr/series/23100)

[When Zig Outshines Rust - Memory Efficient Enum Arrays](https://alic.dev/blog/dense-enums) Zig comptime for staged compilation
[Modernizing Compiler Design for Carbon Toolchain - Chandler Carruth - CppNow 2023 - YouTube](https://www.youtube.com/watch?v=ZI198eFghJk) parsed AST consumes 50x more memory than the source code

[ThePrimeagen/ts-rust-zig-deez](https://github.com/ThePrimeagen/ts-rust-zig-deez) interpreter in different languages

## Just In Time Compiler

[Just-in-time compilation - Wikiwand](https://www.wikiwand.com/en/Just-in-time_compilation)

[Just In Time (JIT) Compilers - Computerphile - YouTube](https://www.youtube.com/watch?v=d7KHAVaX_Rs)

## Cross Compiler

[Cross compiler - Wikiwand](https://www.wikiwand.com/en/Cross_compiler)
[Introduction to cross-compiling for Linux](https://landley.net/writing/docs/cross-compiling.html)
[交叉编译是什么？在我们已有的 Linux 系统上如何创建一个简单易用的交叉编译环境？希望这一期视频能够帮上大家 - YouTube](https://www.youtube.com/watch?v=zDeBg6BDJC4)

Many modern compiled languages (Go, Rust, Zig) have cross compilation built-in its toolchain.

### Target Triplet

[compiler construction - Does a list of all known target triplets in use exist? - Stack Overflow](https://stackoverflow.com/questions/13819857/does-a-list-of-all-known-target-triplets-in-use-exist)

[Target Triplet - OSDev Wiki](https://wiki.osdev.org/Target_Triplet)
`machine-vendor-operatingsystem`:

- `machine`: [[computer-cpu#Instruction Set Architecture (ISA)]]
- `vendor`: `pc`, `apple`, `unknown`
- `operatingsystem`: OS and libc runtime

[Cross-compilation using Clang — Clang documentation](https://clang.llvm.org/docs/CrossCompilation.html)
The triple has the general format `<arch><sub>-<vendor>-<sys>-<env>`, where:

- `arch` = `x86_64`, `i386`, `arm`, `thumb`, `mips`, etc.
- `sub` = for ex. on ARM: `v5`, `v6m`, `v7a`, `v7m`, etc.
- `vendor` = `pc`, `apple`, `nvidia`, `ibm`, `unknown`, etc.
- `sys` = `none`, `linux`, `win32`, `darwin`, `cuda`, `unknown`, etc.
- `env` = `eabi`, `gnu`, `android`, `macho`, `elf`, etc.

```sh
$ zig version
0.10.1

$ zig targets | jq -c ". | keys"
["abi","arch","cpuFeatures","cpus","glibc","libc","native","os"]

$ zig targets | jq  -c ".arch"
["arm","armeb","aarch64","aarch64_be","aarch64_32","arc","avr","bpfel","bpfeb","csky","dxil","hexagon","loongarch32","loongarch64","m68k","mips","mipsel","mips64","mips64el","msp430","powerpc","powerpcle","powerpc64","powerpc64le","r600","amdgcn","riscv32","riscv64","sparc","sparc64","sparcel","s390x","tce","tcele","thumb","thumbeb","i386","x86_64","xcore","nvptx","nvptx64","le32","le64","amdil","amdil64","hsail","hsail64","spir","spir64","spirv32","spirv64","kalimba","shave","lanai","wasm32","wasm64","renderscript32","renderscript64","ve","spu_2"]

$ zig targets | jq  -c ".libc"
["aarch64_be-linux-gnu","aarch64_be-linux-musl","aarch64_be-windows-gnu","aarch64-linux-gnu","aarch64-linux-musl","aarch64-windows-gnu","aarch64-macos-none","aarch64-macos-none","aarch64-macos-none","armeb-linux-gnueabi","armeb-linux-gnueabihf","armeb-linux-musleabi","armeb-linux-musleabihf","armeb-windows-gnu","arm-linux-gnueabi","arm-linux-gnueabihf","arm-linux-musleabi","arm-linux-musleabihf","thumb-linux-gnueabi","thumb-linux-gnueabihf","thumb-linux-musleabi","thumb-linux-musleabihf","arm-windows-gnu","csky-linux-gnueabi","csky-linux-gnueabihf","i386-linux-gnu","i386-linux-musl","i386-windows-gnu","m68k-linux-gnu","m68k-linux-musl","mips64el-linux-gnuabi64","mips64el-linux-gnuabin32","mips64el-linux-musl","mips64-linux-gnuabi64","mips64-linux-gnuabin32","mips64-linux-musl","mipsel-linux-gnueabi","mipsel-linux-gnueabihf","mipsel-linux-musl","mips-linux-gnueabi","mips-linux-gnueabihf","mips-linux-musl","powerpc64le-linux-gnu","powerpc64le-linux-musl","powerpc64-linux-gnu","powerpc64-linux-musl","powerpc-linux-gnueabi","powerpc-linux-gnueabihf","powerpc-linux-musl","riscv64-linux-gnu","riscv64-linux-musl","s390x-linux-gnu","s390x-linux-musl","sparc-linux-gnu","sparc64-linux-gnu","wasm32-freestanding-musl","wasm32-wasi-musl","x86_64-linux-gnu","x86_64-linux-gnux32","x86_64-linux-musl","x86_64-windows-gnu","x86_64-macos-none","x86_64-macos-none","x86_64-macos-none"]

# mapping of features for specific CPU, not listed here
$ zig targets | jq  -c ".cpus"
$ zig targets | jq ".cpus | map_values(keys)"
```

### Cross compile for Windows

[MXE (M cross environment)](http://mxe.cc/)
[MXE - build-pkg by starius](http://pkg.mxe.cc/)

[Install The Mingw Cross-Compiler - WxWiki](https://wiki.wxwidgets.org/Install_The_Mingw_Cross-Compiler)
[The Beez' speaks..: Cross compilers, the new wave](https://thebeezspeaks.blogspot.com/2009/04/cross-compilers-new-wave.html)

## Bootstrapping

[Bootstrapping (compilers) - Wikiwand](<https://www.wikiwand.com/en/Bootstrapping_(compilers)>)
[Bootstrapping in Compiler Design - GeeksforGeeks](https://www.geeksforgeeks.org/bootstrapping-in-compiler-design/)

From a compiler that I trust, to a compiler (or toolchain) that can compile source code that I have.

[Bootstrapping EDSAC: Initial Orders - Computerphile - YouTube](https://www.youtube.com/watch?v=nc2q4OOK6K8)
[What is Bootstrapping? - Computerphile - YouTube](https://www.youtube.com/watch?v=nslY1s0U9_c)
[Compilers with Professor Brailsford - YouTube](https://www.youtube.com/playlist?list=PLzH6n4zXuckoJaMwuI1fhr5n8cJL18hYd)

[trust_stack_slides.pdf](http://web.mit.edu/6.033/2014/wwwdocs/assignments/quizzes/trust_stack_slides.pdf)
[Countering "Trusting Trust" - Schneier on Security](https://www.schneier.com/blog/archives/2006/01/countering_trus.html)
[Reflections on Trusting Trust](https://www.win.tue.nl/~aeb/linux/hh/thompson/trust.html)
[Backdoor (computing) - Wikiwand](https://www.wikiwand.com/en/Trusting%20trust)

## C

[ccache — Compiler cache](https://ccache.dev/)
[2 tips to make your C++ projects compile 3 times faster - Red Hat Developer Blog](https://developers.redhat.com/blog/2019/05/15/2-tips-to-make-your-c-projects-compile-3-times-faster/)

[mozilla/sccache: sccache is ccache with cloud storage](https://github.com/mozilla/sccache)

[distcc: a fast, free distributed C/C++ compiler](https://distcc.github.io/)

[How the GNU C Library handles backward compatibility - Red Hat Developer Blog](https://developers.redhat.com/blog/2019/08/01/how-the-gnu-c-library-handles-backward-compatibility/)

[C 语言全局变量那些事儿 | 酷 壳 - CoolShell](https://coolshell.cn/articles/10115.html)

[GCC optimization - Gentoo Wiki](https://wiki.gentoo.org/wiki/GCC_optimization)
[i386 and x86-64 Options - Using the GNU Compiler Collection (GCC)](https://gcc.gnu.org/onlinedocs/gcc-4.5.3/gcc/i386-and-x86_002d64-Options.html)
`CFLAG="-O3 -march=native"`

```sh
gcc --help=target
# -c: no linkage
# -Q: shows options
gcc -c -Q -march=native --help=target
# show compile flags
gcc -### -march=native /usr/include/stdlib.h
```

## LLVM

> LLVM defines an intermediate representation (IR) and a backend that targets and optimizes for any instruction set architecture (ISA)

[LLVM - Wikiwand](https://www.wikiwand.com/en/LLVM)
[The LLVM Compiler Infrastructure Project](http://llvm.org/)
[LLVM | Everything I Know](https://wiki.nikiv.dev/compilers/llvm)

[The Architecture of Open Source Applications (Volume 1) LLVM](https://aosabook.org/en/v1/llvm.html)
[A Brief Introduction to LLVM - YouTube](https://www.youtube.com/watch?v=a5-WaD8VV38)
[LLVM, in Greater Detail](https://www.cs.cmu.edu/afs/cs/academic/class/15745-s13/public/lectures/L6-LLVM-Detail-1up.pdf) PDF
[SE-Radio Episode 291: Morgan Wilde on LLVM : Software Engineering Radio](http://www.se-radio.net/2017/05/se-radio-episode-291-morgan-wilde-on-llvm/)

[LLVM Tutorial](https://llvm.org/docs/tutorial/)
[My First Language Frontend with LLVM Tutorial — LLVM documentation](https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html)

[LLVM Language Reference Manual — LLVM documentation](https://llvm.org/docs/LangRef.html)
[llir/grammar: EBNF grammar of LLVM IR assembly.](https://github.com/llir/grammar)
[Welcome to llir/llvm · llir/llvm](https://llir.github.io/document/)
[Mapping High Level Constructs to LLVM IR — Mapping High Level Constructs to LLVM IR documentation](https://mapping-high-level-constructs-to-llvm-ir.readthedocs.io/en/latest/index.html)

### Tools

> see [[reverse-engineering#Trail of Bits]]

[LLVM IR and Go | Gopher Academy Blog](https://blog.gopheracademy.com/advent-2018/llvm-ir-and-go/) ❗!important
[Welcome to llir/llvm · llir/llvm](https://llir.github.io/document/) better than `go-llvm` as each node has corresponding Go struct, rather than a single catchall struct
[llir/llvm: Library for interacting with LLVM IR in pure Go.](https://github.com/llir/llvm)

[tinygo-org/go-llvm: Go bindings to a system-installed LLVM. Used as part of TinyGo.](https://github.com/tinygo-org/go-llvm) CGO, originally from LLVM source tree

[rsms/llvmbox: Self contained, fully static llvm tools & libs](https://github.com/rsms/llvmbox)

`llvm-as`: `.ll` to `.bc`
`llvm-dis`: `.bc` to `.ll`

### Clang

> Clang is the C frontend for LLVM

[Clang C Language Family Frontend for LLVM](https://clang.llvm.org/)
[Clang - Wikiwand](https://www.wikiwand.com/en/Clang)

[c++ - LLVM vs clang on OS X - Stack Overflow](https://stackoverflow.com/questions/5708610/llvm-vs-clang-on-os-x)
[GCC 11 vs. LLVM Clang 12 Compilers On The AMD EPYC 7763 - Phoronix](https://www.phoronix.com/review/gcc11-clang12-epyc7763)

## Dynamic Dispatch

[Two Ways To Do Dynamic Dispatch - YouTube](https://www.youtube.com/watch?v=wU8hQvU8aKM) Rust and C++
[Better Code: Runtime Polymorphism - Sean Parent - YouTube](https://www.youtube.com/watch?v=QGcVXgEVMJg) C++

## Cranelift

[Cranelift](https://cranelift.dev/)
[wasmtime/cranelift at main · bytecodealliance/wasmtime · GitHub](https://github.com/bytecodealliance/wasmtime/tree/main/cranelift)
