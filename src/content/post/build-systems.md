---
title: Build Systems
description: ""
created: 2015-06-11
updated: 2025-02-16
tags:
  - bazel
  - buck
  - comp/lang
  - gn
  - gyn
  - lake
  - make
  - meson
  - pants
---

[Build Tools: Make, Rake, Ant, Sbt - Hyperpolyglot](http://hyperpolyglot.org/build)
[The 13 Things That Make a Good Build System | SignalFx](https://www.signalfx.com/blog/the-13-things-that-make-a-good-build-system/)

## GNU Make

[[cmake]]

[Make - GNU Project - Free Software Foundation](http://www.gnu.org/software/make/)
[GNU make](https://www.gnu.org/software/make/manual/make.html)
[跟我一起写 Makefile](https://seisman.github.io/how-to-write-makefile/) [source](https://github.com/seisman/how-to-write-makefile)
[Makefile Tutorial by Example](http://makefiletutorial.com/)
[Linux Fu: The Great Power Of Make | Hackaday](https://hackaday.com/2018/06/22/linux-fu-the-great-power-of-make/)
[Self-documenting Makefiles - by Julio Merino](https://blogsystem5.substack.com/p/make-help)
[帶有 make help 說明的 Makefile – Gea-Suan Lin's BLOG](https://blog.gslin.org/archives/2025/01/12/12201/%e5%b8%b6%e6%9c%89-make-help-%e8%aa%aa%e6%98%8e%e7%9a%84-makefile/)

[The joy of make at jsconfeu](http://codeofrob.com/entries/the-joy-of-make-at-jsconfeu.html)
[Practical Makefiles, by example](http://nuclear.mutantstargoat.com/articles/make/)
[Building Web Applications With Make – Smashing Magazine](http://www.smashingmagazine.com/2015/10/building-web-applications-with-make/)
[Building JavaScript projects with Make – The If Works](https://blog.jcoglan.com/2014/02/05/building-javascript-projects-with-make/)
[Makefiles – Mrbook's Stuff](http://mrbook.org/blog/tutorials/make/)
[The Lost Art of the Makefile](https://www.olioapps.com/blog/the-lost-art-of-the-makefile/)
[Makefile instead of hoop jumping](https://remysharp.com/2014/12/02/makefile) [gist](https://gist.github.com/remy/274232f8b47dfa163324)

[Creating configuration scripts and Makefiles using autoconf & automake](http://www.ifnamemain.com/posts/2014/Mar/13/autoconf_automake/)

[Jobserver Implementation | GNU make](http://make.mad-scientist.net/papers/jobserver-implementation/)

[GNU make: Automatic Variables](https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html)
[GNU Autoconf, Automake and Libtool](http://www.sourceware.org/autobook/)

```sh
# show rules
make -pn

# shows how make works
make --debug=v
```

### mmake

[Modernizing Make - TJ Holowaychuk - Medium](https://medium.com/@tjholowaychuk/modern-make-b55d53cf80d9)
[tj/mmake: Modern Make](https://github.com/tj/mmake)

### non-recursive make

[Recursive Make Considered Harmful](http://c2.com/cgi/wiki?RecursiveMakeConsideredHarmful)
[Recursive make Reloaded | Linux Magazine](http://www.linux-mag.com/id/2101/)
[Implementing non-recursive make](http://evbergen.home.xs4all.nl/nonrecursive-make.html)

I evaluated two implementations: [aostruszka/nonrec-make](https://github.com/aostruszka/nonrec-make/) and [dmoulding-boilermake · GitHub](https://github.com/dmoulding/boilermake) on these grounds:

- simple to modify and maintain
- fast to compile
- auto .h dependencies checking
  allows for external dependencies (support libraries built out of the build - system)
- separate storage for object code generated

`boilermake` is quite restrictive in that each .mk only supports one target, so a module could contain multiple `.mk` to build multiple libs and test app. To add a dependency, we need:

```make
TGT_PREREQS += lib/libfoo.a
TGT_LDLIBS  += -lfoo
```

`nonrec-make` is easier in including multiple sub-makefiles and supports expanding rule for source files (akin to \*.c). It also added support for [external build system](https://github.com/aostruszka/nonrec-make/commit/0aaae67b1c67aeef28e6ca3a692fc4619878ba23).

Examples:

- [GHC](https://ghc.haskell.org/trac/ghc/wiki/Building/Architecture/Idiom/NonRecursiveMake) (Haskell compiler)
- Android [1](http://www.netmite.com/android/mydroid/development/pdk/docs/build_system.html) [2](http://elinux.org/Android_Build_System) [3](http://www.programering.com/a/MDN5EDNwATM.html) [4](https://docs.google.com/document/d/1jDmWgVgorTY_njX68juH5vt0KY_FXWgxkxmi2v_W_a4/edit)

## build2

[build2 | C/C++ Build Toolchain](https://build2.org/)

## Task

> Task is a task runner / build tool that aims to be simpler and easier to use than, for example, GNU Make.

[Home | Task](https://taskfile.dev/)
[go-task/task: A task runner / simpler Make alternative written in Go](https://github.com/go-task/task)

## Pants

[Pants](https://www.pantsbuild.org/)
[How does Pants work?](https://www.pantsbuild.org/docs/how-does-pants-work)

[Build Tools with Benjy Weinberger - Software Engineering Daily](https://softwareengineeringdaily.com/2022/01/17/build-tools-with-benjy-weinberger/)

## just

> task runner rather than a build system

[Introduction - Just Programmer's Manual](https://just.systems/man/en/)
[casey/just: 🤖 Just a command runner](https://github.com/casey/just)

## Buck

[Buck: A fast build tool](https://buckbuild.com/) by Facebook

[7 Reasons to Use Buck Build – Hacker Noon](https://hackernoon.com/7-reasons-to-use-buck-build-5b44d7413585)
[(Even) More Reasons to Use Buck Build – Hacker Noon](https://hackernoon.com/even-more-reasons-to-use-buck-build-9e2f6bf451d4)
[How to Create a Buck-based C/C++ Project – Hacker Noon](https://hackernoon.com/how-to-create-a-buck-based-c-c-project-38b85273d6a6)
[Generating a Single-Include C++ Header File Using Buck](https://hackernoon.com/generating-a-single-include-c-header-file-using-buck-827f20be3f9d)
[Lessons Learned from Porting 300 C/C++ Projects to Buck Build](https://hackernoon.com/lessons-learned-from-porting-300-projects-to-buck-build-ff6463b65142)

## BuildInfer

[BuildInfer — Next Generation C/C++ Build Acceleration](https://buildinfer.loopperfect.com/)
[Why Not Make? – Hacker Noon](https://hackernoon.com/why-not-make-db142ccb2081)

## Meson

[The Meson Build system](https://mesonbuild.com/)

## Invoke

[Welcome to Invoke! — Invoke documentation](https://www.pyinvoke.org/) write tasks in Python

## Lake

[Lake – a Lua-based Build Engine](http://stevedonovan.github.io/lake/topics/index.md.html)
[stevedonovan/Lake: A Lua-based Build Tool](https://github.com/stevedonovan/Lake)

## nobuild

used by [[cross-platform-apps-desktop#Olive.c]]

[tsoding/nobuild: Header only library for writing build recipes in C.](https://github.com/tsoding/nobuild)

## Gradle

[[gradle]]

## Node.js ecosystem

[[build-systems-node-js]]

## Bazel

[Bazel](http://bazel.build/), supported [languages](http://bazel.build/docs/build-encyclopedia.html#rules)

## gyp

gyp was the build system used by Chromium and Node.
But Chromium has since moved to GN.

[gyp-UserDocumentation.md](https://chromium.googlesource.com/external/gyp/+/HEAD/docs/UserDocumentation.md)
[Converting a C library to gyp — n8.io](https://n8.io/converting-a-c-library-to-gyp/)

## Ninja

[Ninja, a small build system with a focus on speed](https://ninja-build.org/)
[Using GN build - Google Slides](https://docs.google.com/presentation/d/15Zwb53JcncHfEwHpnG_PoIbbzQ3GQi_cpujYwbpcbZo/edit#slide=id.g119d702868_0_12)
[The Performance of Open Source Software | Ninja](https://aosabook.org/en/posa/ninja.html)
[Building Like (a) Ninja [Pt1]](https://vector-of-bool.github.io/2018/12/20/build-like-ninja-1.html)

[docs - gn - Git at Google](https://gn.googlesource.com/gn/+/master/docs/) GN is a meta-build system that generates build files for Ninja.

[saghul/gyn](https://github.com/saghul/gyn)

## NUKE

[Smart automation for DevOps teams and CI/CD pipelines | NUKE](https://nuke.build/)
[nuke-build/nuke: 🏗 The AKEless Build System for C#/.NET](https://github.com/nuke-build/nuke)

[10 Ingredients for an AKEless Build System. Matthias Koch .NET Fest 2019 - YouTube](https://www.youtube.com/watch?v=SVD70QYvQ6I)

## Pants

[Pants Build](https://pantsbuild.github.io/)
Pants is a build system written by Twitter to build Python and Java codes.

[Getting Started with the Pants Build System - YouTube](https://www.youtube.com/playlist?list=PLDVc2EaAVPg8ACDeLfN2KWkPZi0Th5d04)

## Mule

[algorand/mule: General automation framework](https://github.com/algorand/mule/tree/develop)
[Automating with the Mule framework | by Brice Rising | Algorand | Medium](https://medium.com/algorand/automating-with-the-mule-framework-f9b34789920a)

## tup

[tup | Home](http://gittup.org/tup/)

## Buildout

[Buildout, an automation tool written in and extended with Python — Buildout documentation](http://docs.buildout.org/en/latest/)

## Waf

[Waf: the meta build system](https://waf.io/)
[The Waf Book](https://waf.io/book/)
[waf-project/waf: The Waf build system](https://github.com/waf-project/waf)

## Make-It-Quick (MIQ)

[c3d/make-it-quick: A simple auto-configuring make-only build system](https://github.com/c3d/make-it-quick)
