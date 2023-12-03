---
title: Nim
description: "Efficient, expressive, elegant"
created: 2023-09-29
tags:
  - comp/lang
  - nim
  - package-manager
---

> transpile to C/C++ code
> [[v-lang]] seems a better choice

[Nim Programming Language](https://nim-lang.org/)
[Nim Docs](https://nim-lang.org/documentation.html)
[Nim in 100 Seconds - YouTube](https://www.youtube.com/watch?v=WHyOHQ_GkNo)
[Nim Programming Language - YouTube](https://www.youtube.com/channel/UCDAYn_VFt0VisL5-1a5Dk7Q)

[Nim Manual](https://nim-lang.org/docs/manual.html) pragmas (`{. .}`)
[Nim Standard Library](https://nim-lang.org/docs/lib.html)

```sh
nim c -r app.nim
# -d:release release build
# -d:danger  disable all runtime checks
```

[Nim Compiler User Guide](https://nim-lang.org/docs/nimc.html)
[Nim Backend Integration](https://nim-lang.org/docs/backends.html#introduction)

[NimConf 2020 - YouTube](https://www.youtube.com/playlist?list=PLxLdEZg8DRwTIEzUpfaIcBqhsj09mLWHx)

[HookRace - a Nim blog for now](http://hookrace.net/)
[What is special about Nim? · HookRace - a Nim blog for now](http://hookrace.net/blog/what-is-special-about-nim/)
[What makes Nim practical? · HookRace - a Nim blog for now](http://hookrace.net/blog/what-makes-nim-practical/)
[Nim Adventures · HookRace - a Nim blog for now](http://hookrace.net/blog/nim-adventures/)
[Nim · How I Start.](https://howistart.org/posts/nim/1/index.html)
[Nim for Beginners - YouTube](https://www.youtube.com/playlist?list=PLvwc2YT9MFOlPPexrsY-t7BNTdg2Vsx06)

[Could Nim Replace Python? - Towards Data Science](https://towardsdatascience.com/could-nim-replace-python-547145afcfd5)
[Nim language draws from best of Python, Rust, Go, and Lisp | InfoWorld](http://www.infoworld.com/article/3157745/application-development/nim-language-draws-from-best-of-python-rust-go-and-lisp.html) state as of 2017-01

### Libraries

[nim-lang/nimble: Package manager for the Nim programming language.](https://github.com/nim-lang/nimble)

[Nim package directory](https://nimble.directory/)
[Curated Packages · nim-lang/Nim Wiki](https://github.com/nim-lang/Nim/wiki/Curated-Packages)
[xflywind/awesome-nim: A curated list of awesome Nim frameworks, libraries and software.](https://github.com/xflywind/awesome-nim)

[nim-lang/nimble: Creating Packages](https://github.com/nim-lang/nimble/#creating-packages)

```sh
nimble init
```

[doc/testament](https://nim-lang.github.io/Nim/testament.html)

### Memory model

[Nim's Memory Management](https://nim-lang.org/docs/gc.html)
[The Nim memory model](http://zevv.nl/nim-memory/)

### FFI

[Chapter 8. Interfacing with other languages - Nim in Action](https://livebook.manning.com/book/nim-in-action/chapter-8/)
[Nim Manual - Dynlib pragma for import](https://nim-lang.org/docs/manual.html#foreign-function-interface-dynlib-pragma-for-import)
[Binding to C Libraries with Nim](https://gist.github.com/zacharycarter/846869eb3423e20af04dea226b65c18f)
[What makes Nim practical? · HookRace Blog](http://hookrace.net/blog/what-makes-nim-practical/)
[Nim wrapping C - Roads Less Taken](http://goran.krampe.se/2014/10/16/nim-wrapping-c/)

```c
int printf(const char *format, ...);
```

```nim
proc printf(format: cstring): cint {.importc, varargs, header: "stdio.h", discardable.}
printf("My name is %s and I am %d years old!\n", "Ben", 30)

proc init*(flags: uint32): cint {.importc: "SDL_Init", dynlib: libName.}
```

[nim-lang/c2nim: c2nim is a tool to translate Ansi C code to Nim. The output is human-readable Nim code that is meant to be tweaked by hand before and after the translation process.](https://github.com/nim-lang/c2nim)
[nimterop/nimterop: Nimterop is a Nim package that aims to make C/C++ interop seamless](https://github.com/nimterop/nimterop)
