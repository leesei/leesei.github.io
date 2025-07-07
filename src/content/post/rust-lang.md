---
title: Rust
description: Static typed, GC-free system language created by Mozilla.
created: 2015-11-19
updated: 2025-02-04
tags:
  - comp/lang
  - package-manager
  - rust-lang
---

[The Rust Programming Language](http://www.rust-lang.org/)
[The Rust Reference](https://doc.rust-lang.org/reference.html)
[Style Guidelines](http://doc.rust-lang.org/nightly/style/)
[Rust Playground](https://play.rust-lang.org/)
[The Alternative Rust Playground](https://play.integer32.com/) by Integer 32

GitHub org:
[The Rust Programming Language](https://github.com/rust-lang)
[rust-lang-nursery](https://github.com/rust-lang-nursery)
[rust-lang-deprecated](https://github.com/rust-lang-deprecated)

[Getting started - Rust Programming Language](https://www.rust-lang.org/learn/get-started)
[Other Installation Methods - Rust Forge](https://forge.rust-lang.org/infra/other-installation-methods.html)
[murarth/rusti: REPL for the Rust programming language](https://github.com/murarth/rusti)

[Rust tutorial: Get started with Rust, the language for safer code](https://www.infoworld.com/article/3234929/application-development/get-started-with-rust-the-language-for-safer-code.html)
[Are we (I)DE yet?](https://areweideyet.com/)

[Why the Rust language is on the rise | InfoWorld](https://www.infoworld.com/article/3451296/why-the-rust-language-is-on-the-rise.html)
[Rust 2018 is here… but what is it? - Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2018/12/rust-2018-is-here/)
[A brief history of Rust at Facebook - Engineering at Meta](https://engineering.fb.com/2021/04/29/developer-tools/rust/)
[Rust: Turtles all the way down - YouTube](https://www.youtube.com/watch?v=PuMXWc0xrK0)
`unsafe` block and macro makes Rust self contained

[Rust in 2018 - In Pursuit of Laziness](https://manishearth.github.io/blog/2018/01/10/rust-in-2018/)
[Announcing Rust 1.30 - The Rust Programming Language Blog](https://blog.rust-lang.org/2018/10/25/Rust-1.30.0.html)
[State Of Rust](https://forge.rust-lang.org/state-of-rust.html)
[Five Years of Rust | Rust Blog](https://blog.rust-lang.org/2020/05/15/five-years-of-rust.html)

[All Rust features explained - YouTube](https://www.youtube.com/watch?v=784JWR4oxOI) ❗!important
[Introduction to Rust Part 1 - YouTube](https://www.youtube.com/watch?v=WnWGO-tLtLA)
[Introduction to Rust Part 2 - YouTube](https://www.youtube.com/watch?v=lLWchWTUFOQ)
[Intel and Rust: the Future of Systems Programming: Josh Triplett - YouTube](https://www.youtube.com/watch?v=l9hM0h6IQDo)
[why rust libraries may never exist. - YouTube](https://www.youtube.com/watch?v=769VqNup21Q) Rust don't have an ABI

[zkat/rust-notes: Personal notes while learning Rust. Mainly documenting pain points along the way.](https://github.com/zkat/rust-notes)
[C vs. Rust: Which to choose for programming hardware abstractions | Opensource.com](https://opensource.com/article/20/1/c-vs-rust-abstractions)

[Rust - YouTube](https://www.youtube.com/channel/UCaYhcUwRBNscFNUKTjgPFiA)
[No Boilerplate - YouTube](https://www.youtube.com/@NoBoilerplate)
[The Rust Programming Language - YouTube](https://www.youtube.com/watch?v=d1uraoHM8Gg)
[C++Now 2017: Niko Matsakis "Rust: Hack Without Fear!" - YouTube](https://www.youtube.com/watch?v=lO1z-7cuRYI)

[#151: Rust with Steve Klabnik and Yehuda Katz - The Changelog](https://changelog.com/151/)
[SE-Radio Episode 279: Florian Gilcher on Rust : Software Engineering Radio](http://www.se-radio.net/2017/01/se-radio-episode-279-florian-gilcher-on-rust/)
[Rust in Production](https://www.infoq.com/presentations/rust-production)

## Getting Started

[Getting Started - The Rust Programming Language](https://doc.rust-lang.org/book/ch01-00-getting-started.html)

[rustup.rs - The Rust toolchain installer](https://www.rustup.rs/) NVM for Rust
[Rustup - ArchWiki](https://wiki.archlinux.org/title/Rust#Using_rustup)

```sh
yay -S rustup

rustup show
rustup toolchain install stable
rustup update
rustup default stable

# install tools
rustup component add rustfmt rls

rustup install nightly
```

```sh
cargo-binstall irust # like ipython
```

### Cargo

[Getting started with the Rust package manager, Cargo | Opensource.com](https://opensource.com/article/20/3/rust-cargo)
[The Cargo Book](https://doc.rust-lang.org/cargo/index.html)
[Configuration - The Cargo Book](https://doc.rust-lang.org/cargo/reference/config.html)
[Environment Variables - The Cargo Book](https://doc.rust-lang.org/cargo/reference/environment-variables.html)
[My top 7 Rust commands for using Cargo | Opensource.com](https://opensource.com/article/20/11/commands-rusts-cargo)

```sh
cargo new project # bin at ./project/
cargo new --lib library  # lib at ./library/
cargo init # at pwd

cargo build
RUSTFLAGS='-C target-feature=+crt-static' cargo build --release

cargo run
RUSTFLAGS='-C target-feature=+crt-static' cargo run --release

cargo bench
cargo test
```

```sh
cargo-binstall sccache
RUSTC_WRAPPER=sccache cargo build
```

[dtolnay/semver-trick: How to avoid complicated coordinated upgrades](https://github.com/dtolnay/semver-trick)
[Specifying Dependencies - The Cargo Book](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html)
[Cargo: predictable dependency management - The Rust Programming Language Blog](https://blog.rust-lang.org/2016/05/05/cargo-pillars.html)
[How Rust Solved Dependency Hell - Stephen Coakley](https://stephencoakley.com/2019/04/24/how-rust-solved-dependency-hell)

[Cargo Workspaces - The Rust Programming Language](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html)
[Specifying Dependencies - The Cargo Book](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#working-with-an-unpublished-minor-version)

[dimensionhq/fleet: 🚀 The blazing fast build tool for Rust.](https://github.com/dimensionhq/fleet)

#### Cargo tools

## Editions

[The Edition Guide](https://doc.rust-lang.org/edition-guide/introduction.html)

The source code is compiled to High level intermediate representation, then mid level, then LLVM IR, then machine code. Editions mostly affect MIR.

[rust-lang/rustfix: Automatically apply the suggestions made by rustc](https://github.com/rust-lang/rustfix)

## Rust Libz Blitz

[The Rust Libz Blitz - The Rust Programming Language Blog](https://blog.rust-lang.org/2017/05/05/libz-blitz.html)
[brson/rust-api-guidelines](https://github.com/brson/rust-api-guidelines)

## Learn

[Learn Rust - Rust Programming Language](https://www.rust-lang.org/learn)
[rust-lang/rustlings: Small exercises to get you used to reading and writing Rust code!](https://github.com/rust-lang/rustlings/) code kata

[Rust Developer Bootcamp Free Training](https://letsgetrusty.com/bootcamp/) ❗!important

[Learn Rust Programming Course – Interactive Rust Language Tutorial on Replit](https://www.freecodecamp.org/news/rust-in-replit/)
[Rust Programming Course for Beginners - Tutorial - YouTube](https://www.youtube.com/watch?v=MsocPEZBd-M)

[[#Books]]

[How to learn Rust: A resources guide for developers - TechRepublic](https://www.techrepublic.com/article/how-to-learn-rust-a-resources-guide-for-developers/)
[Latest News - Hello, Rust!](https://www.hellorust.com/)
[How not to learn Rust](https://dystroy.org/blog/how-not-to-learn-rust/)

[Let's Get Rusty – Let's Get Rusty](https://letsgetrusty.com/)
[Let's Get Rusty - YouTube](https://www.youtube.com/@letsgetrusty)

No Boilerplate
[How to Learn Rust - YouTube](https://www.youtube.com/watch?v=2hXNd6x9sZs)
[Rust Is Easy - YouTube](https://www.youtube.com/watch?v=CJtvnepMVAU) the compiler teaches you
[Rust is not a faster horse - YouTube](https://www.youtube.com/watch?v=4YU_r70yGjQ)

[Learning Rust the wrong way - Ólafur Waage - NDC TechTown 2022 - YouTube](https://www.youtube.com/watch?v=DL9LANLg5EA)

Getting started:
[Getting started with Rust](https://fettblog.eu/getting-started-with-rust/)
[You Want to Learn Rust but You Don’t Know Where to Start | by Shinichi Okada | Towards Data Science](https://towardsdatascience.com/you-want-to-learn-rust-but-you-dont-know-where-to-start-fc826402d5ba)
[Learn about Rust and how to get started | Opensource.com](https://opensource.com/article/20/4/getting-started-rust)
[Get started with Rust in Windows programming | InfoWorld](https://www.infoworld.com/article/3410796/get-started-with-rust-in-windows-programming.html)
[A Tour of Rust - YouTube](https://www.youtube.com/watch?v=iU21KZ4i6bU)
[Rust Crash Course | Rustlang - YouTube](https://www.youtube.com/watch?v=zF34dRivLOw)
[Intro to Rust - YouTube](https://www.youtube.com/playlist?list=PLJbE2Yu2zumDF6BX6_RdPisRVHgzV02NW)
[Learning Rust](https://learning-rust.github.io/)
[Learn Rust in Y Minutes](https://learnxinyminutes.com/docs/rust/)
[A half-hour to learn Rust](https://fasterthanli.me/articles/a-half-hour-to-learn-rust) 2020-01
[bradtraversy/rust_sandbox: Fundamentals of the Rust language](https://github.com/bradtraversy/rust_sandbox)

[Rust for the impatient - YouTube](https://www.youtube.com/watch?v=br3GIIQeefY)
[Rust Talks - YouTube](https://www.youtube.com/playlist?list=PLZaoyhMXgBzoM9bfb5pyUOT3zjnaDdSEP)
[Rust Tutorial Full Course - YouTube](https://www.youtube.com/watch?v=ygL_xcavzQ4) 2022-07
[Let's Get Rusty - YouTube](https://www.youtube.com/c/LetsGetRusty)
[Rust Programming Tutorial - YouTube](https://www.youtube.com/playlist?list=PLzMcBGfZo4-nyLTlSRBvo0zjSnCnqjHYQ)

[Hello Rust!](https://hello-rust.show/) a lighthearted live-programming channel
[Hello Rust! - YouTube](https://www.youtube.com/channel/UCZ_EWaQZCZuGGfnuqUoHujw)
[Hello Rust!](https://github.com/hello-rust) GitHub org
[Declarative Programming in Rust - YouTube](https://www.youtube.com/watch?v=Des3zZuTbhk)
[12 Things to Help You Learn Rust - YouTube](https://www.youtube.com/watch?v=a8abW3RlOn8)
[Let's Build Snake with Rust](https://blog.scottlogic.com/2020/10/08/lets-build-snake-with-rust.html)
[Rust in the Browser for JavaScripters: New Frontiers, New Possibilities - YouTube](https://www.youtube.com/watch?v=ohuTy8MmbLc)
[Rust | Opensource.com](https://opensource.com/tags/rust)

[Rustaceans](http://www.rustaceans.org/) the community of Rust users
[rust-unofficial/awesome-rust: A curated list of Rust code and resources.](https://github.com/rust-unofficial/awesome-rust)
[gamazeps/Useful-Rust-Projects: List of community wanted libraries](https://github.com/gamazeps/Useful-Rust-Projects)
[ctjhoa/rust-learning: A bunch of links to blog posts, articles, videos, etc for learning Rust](https://github.com/ctjhoa/rust-learning)
[mankyKitty/rust-koans: Learn Rust by making tests pass](https://github.com/mankyKitty/rust-koans)
[Mercateo/rust-for-node-developers: An introduction to the Rust programming language for Node developers.](https://github.com/Mercateo/rust-for-node-developers)
[fanderzon/rust-for-nodejs-devs: Example code for the `Rust for Node.js developers` series](https://github.com/fanderzon/rust-for-nodejs-devs)

[From Python to Rust - YouTube](https://www.youtube.com/playlist?list=PLpSOMAcxEB_i81xOdcgL8-Lp8lbrTxEI3)
[From Python To Rust Series Archives - rebelScience](https://rebelscience.club/category/from-python-to-rust/)
[rochacbruno/py2rs: A quick reference guide for the Pythonista in the process of becoming a Rustacean](https://github.com/rochacbruno/py2rs)
[Learning Rust by Converting Python to Rust | by Shinichi Okada | Towards Data Science](https://towardsdatascience.com/learning-rust-by-converting-python-to-rust-259e735591c6)
[A Gentle Introduction to Rust for Python Programmers - KDnuggets](https://www.kdnuggets.com/gentle-introduction-rust-python-programmers)

[Introduction | Rust for C++ Programmers](https://aminb.gitbooks.io/rust-for-c/content/) [nrc/r4cppp: Rust for C++ programmers](https://github.com/nrc/r4cppp)
[Introduction | Rust for C++ Programmers](https://aminb.gitbooks.io/rust-for-c/content/)
[rust-4-cpp2.pdf](https://events.static.linuxfound.org/sites/events/files/slides/rust-4-cpp2.pdf)
[30 minutes of Introduction to Rust for C++ programmers](https://vnduongthanhtung.gitbooks.io/migrate-from-c-to-rust/content/)
[C++ Developer Learns Rust (aka Oxidizing C++ Skills For Fun and Profit) - YouTube](https://www.youtube.com/watch?v=q-hcqOa4ddU)

[Rust Your Own Lisp - DEV Community 👩‍💻👨‍💻](https://dev.to/deciduously/rust-your-own-lisp-50an)

[Rust Archives - Knoldus Blogs](https://blog.knoldus.com/category/tech-blogs/functional-programming/rust/)
[fasterthanli.me](https://fasterthanli.me/tags/rust)
[Rust review Series - Julio Merino](http://julio.meroh.net/series.html#Rust%20review)

[into_rust(): screencasts for learning Rust](http://intorust.com/) 2016

[skyzh/type-exercise-in-rust: Learn Rust generics by implementing basic types in database systems](https://github.com/skyzh/type-exercise-in-rust)

[rust-analyzer](https://rust-analyzer.github.io/) Rust LSP

## Compiler

```sh
rustc --print cfg
```

[Rust Creator Graydon Hoare Recounts the History of Compilers - The New Stack](https://thenewstack.io/rust-creator-graydon-hoare-recounts-the-history-of-compilers/)

[Cargo refused to build my project - A Rust debugging story!](https://dev.to/rrampage/cargo-refused-to-build-my-project---a-rust-debugging-story-25e9)
[The Rust compiler is still getting faster | Nicholas Nethercote](https://blog.mozilla.org/nnethercote/2019/07/25/the-rust-compiler-is-still-getting-faster/)
[Rustlog : Why is a Rust executable large?](https://lifthrasiir.github.io/rustlog/why-is-a-rust-executable-large.html)

[How to speed up the Rust compiler | Nicholas Nethercote](https://blog.mozilla.org/nnethercote/2016/10/14/how-to-speed-up-the-rust-compiler/)
[How to alleviate the pain of Rust compile times](https://vfoley.xyz/rust-compile-speed-tips/)

[google/rerast: A tool for transforming Rust code using rules](https://github.com/google/rerast)

[Kindelia/HVM: A massively parallel, optimal functional runtime in Rust](https://github.com/Kindelia/HVM)

[Winning the fight against the Rust compiler (Coherence in Rust, feat. rustc sources)](https://ohadravid.github.io/posts/2023-05-coherence-and-errors/) only allow one specific implementation, compiler hacking

[Get under the hood of Rust Language with Assembly!! Rust Programming Tutorial - YouTube](https://www.youtube.com/watch?v=lRV_5IBUTes)

```sh
RUSTFLAGS='--emit asm' cargo build
cargo install cargo-show-asm
cargo asm <bin>::main --dev --rust
```

### Conditional Compiling

[The Manifest Format - The Cargo Book](https://doc.rust-lang.org/cargo/reference/manifest.html#the-features-section)
[Can someone explain how features work in Cargo? : rust](https://www.reddit.com/r/rust/comments/7o7ov7/can_someone_explain_how_features_work_in_cargo/)

[cfg - Rust By Example](https://doc.rust-lang.org/rust-by-example/attribute/cfg.html)
[Conditional compilation - The Rust Reference](https://doc.rust-lang.org/reference/conditional-compilation.html)

### Linkage

```sh
RUSTFLAGS='-C target-feature=+crt-static' cargo build
# musl is static by default
cargo build --target x86_64-unknown-linux-musl
RUSTFLAGS='-C target-feature=+crt-static' cargo build --release
```

[Linkage - The Rust Reference](https://doc.rust-lang.org/reference/linkage.html)

[rust - How to generate statically linked executables? - Stack Overflow](https://stackoverflow.com/questions/31770604/how-to-generate-statically-linked-executables)
["cannot produce proc-macro for `crate` as the target `x86_64-unknown-linux-gnu` does not support these crate types" with +crt-static · Issue #78210 · rust-lang/rust](https://github.com/rust-lang/rust/issues/78210)
[Static Build of Rust Executables | Ivanovo](http://zderadicka.eu/static-build-of-rust-executables/)
[Building static Rust binaries for Linux | Harsh Shandilya](https://msfjarvis.dev/posts/building-static-rust-binaries-for-linux/)
[MUSL support for fully static binaries - The Edition Guide](https://doc.rust-lang.org/edition-guide/rust-2018/platform-and-target-support/musl-support-for-fully-static-binaries.html)

[Linkage - The Rust Reference](https://doc.rust-lang.org/reference/linkage.html)
[1721-crt-static - The Rust RFC Book](https://rust-lang.github.io/rfcs/1721-crt-static.html)
[Enabling `+crt-static` in a blanket way breaks dynamic libraries including proc macros · Issue #71651 · rust-lang/rust](https://github.com/rust-lang/rust/issues/71651)

Striping:

| Target              | Size |
| ------------------- | ---- |
| dynamic debug gnu   | 4.3M |
| static debug gnu    | 4.3M |
| static release gnu  | 5.8M |
| `strip -s`          | 1.2M |
| strip = "debuginfo" | 1.4M |
| static debug musl   | 4.4M |
| strip = "symbols"   | 1.2M |
| static release musl | 412k |

### Cross compile

```sh
## print supported targets
rustc --print target-list
rustup target list

rustup target install i686-pc-windows-msvc x86_64-apple-darwin

rustup target add armv7-unknown-linux-musleabi
RUSTFLAGS='-C target-feature=+crt-static --emit asm' cargo build --release --target armv7-unknown-linux-musleabi
```

[cross-rs/cross: “Zero setup” cross compilation and “cross testing” of Rust crates](https://github.com/cross-rs/cross)

[warricksothr/RustBuild](https://github.com/warricksothr/RustBuild)
[zinc.rs](https://zinc.rs/)

[japaric/rust-everywhere: Use CI services to generate binary releases of your Rust program for Linux, Mac and Windows](https://github.com/japaric/rust-everywhere)
[japaric/trust: Travis CI and AppVeyor template to test your Rust crate on 5 architectures and publish binary releases of it for Linux, macOS and Windows](https://github.com/japaric/trust)
[japaric/cross: "Zero setup" cross compilation and "cross testing" of Rust crates](https://github.com/japaric/cross)

[kennytm/rust-ios-android: Example project for building a library for iOS + Android in Rust.](https://github.com/kennytm/rust-ios-android)
[Geal/rust_on_mobile](https://github.com/Geal/rust_on_mobile)

[japaric/ruststrap](https://github.com/japaric/ruststrap)
[Rust bare metal on ARM microcontroller](http://antoinealb.net/programming/2015/05/01/rust-on-arm-microcontroller.html)
[ARM v6 and v7 target · Issue #34 · richfelker/musl-cross-make](https://github.com/richfelker/musl-cross-make/issues/34) "hf" stands for "hard float"

[Zero cost stack overflow protection for ARM Cortex-M devices | Embedded in Rust](http://blog.japaric.io/stack-overflow-protection/)

#### Android

[Rust nightly for android - The Rust Programming Language Forum](https://users.rust-lang.org/t/rust-nightly-for-android/645)
[Building for Android · servo/servo Wiki](https://github.com/servo/servo/wiki/Building-for-Android)

### Deployment

[shuttle](https://www.shuttle.rs/)
[shuttle-hq/shuttle: Build & ship backends without writing any infrastructure files.](https://github.com/shuttle-hq/shuttle)

[Examples - Shuttle](https://docs.shuttle.rs/shuttle-next/getting-started)

## Syntax

[Karol Kuczmarski's Blog – patterns](http://xion.io/post/code/rust-patterns-ref.html)

[Rust Means Never Having to Close a Socket](http://blog.skylight.io/rust-means-never-having-to-close-a-socket/)

### String

[std::string::String - Rust](https://doc.rust-lang.org/std/string/struct.String.html)
[Strings - Rust By Example](https://doc.rust-lang.org/rust-by-example/std/str.html)

[String Types in Rust - Suspect Semantics](http://www.suspectsemantics.com/blog/2016/03/27/string-types-in-rust/)
[Rust: str vs String](https://www.ameyalokare.com/rust/2017/10/12/rust-str-vs-String.html)
[What are the differences between Rust's `String` and `str`? - Stack Overflow](https://stackoverflow.com/questions/24158114/what-are-the-differences-between-rusts-string-and-str/24159933#24159933)
[All Rust string types explained - YouTube](https://www.youtube.com/watch?v=CpvzeyzgQdw)

```rust
let face: char = '\u{1F600}' // char is unicode code point

a_str.to_string();  // str -> String
let a_String = String::from(a_str);  // str -> String

a_String.as_str();  // String -> str
```

### Print Formatting

[std::fmt - Rust](https://doc.rust-lang.org/std/fmt/)
[std::fmt::Display - Rust](https://doc.rust-lang.org/std/fmt/trait.Display.html)
[std::format - Rust](https://doc.rust-lang.org/std/macro.format.html) `format!`
[Formatted print - Rust By Example](https://doc.rust-lang.org/rust-by-example/hello/print.html)
[Display - Rust By Example](https://doc.rust-lang.org/rust-by-example/hello/print/print_display.html)

```rust
println!("{}", a); // requires object to have Display trait
println!("{name}"); // named argument
println!("{:?}", (12, true, "hello")); // debug print
// add `#[derive(Debug)]` to your struct to enable `{:?}` output
```

## Rc/Arc

[Optimizing Immutable Strings in Rust - DEV Community](https://dev.to/somedood/optimizing-immutable-strings-in-rust-2ahj)
`Arc::clone()` cloning the smart pointer, `Arc::From<String>` (returns `Arc<str>`) real only reference to buffer
[Arc in std::sync - Rust](https://doc.rust-lang.org/std/sync/struct.Arc.html)
[Arc - Rust By Example](https://doc.rust-lang.org/rust-by-example/std/arc.html)

[Use Arc Instead of Vec - YouTube](https://www.youtube.com/watch?v=A4cKi7PTJSs)

- immutable data
- for struct fields, in array or collection
- especially those with `Clone` trait
- `Arc` has constant time `Clone`
- implements `Deref` trait  
  can be used as drop-in replace of `Vec`
- `Rc` is even lighter weight for single thread use

### Containers

[Lists, Arrays, Vectors: linear containers in Python, Ruby and Rust (part 3) - DEV Community 👩‍💻👨‍💻](https://dev.to/dandyvica/lists-arrays-vectors-linear-containers-in-python-ruby-and-rust-part-3-19jc)

### Iterators

[std::iter - Rust](https://doc.rust-lang.org/stable/std/iter/index.html)
[std::iter::Iterator - Rust](https://doc.rust-lang.org/stable/std/iter/trait.Iterator.html)

### Traits

[Traits and Trait Objects in Rust · joshleeb](https://joshleeb.com/posts/rust-traits-and-trait-objects/)
[Traits from the Ground Up](https://killercup.github.io/presentation-traits-from-the-ground-up/index.html#/)

`#[derive(Trait)]`

### Option

[std::option - Rust](https://doc.rust-lang.org/std/option/) nullable in other languages
[Option in std::option - Rust](https://doc.rust-lang.org/std/option/enum.Option.html) `Option<T> = Some(value:T) | None`

[Option - Rust By Example](https://doc.rust-lang.org/rust-by-example/std/option.html)
[Option & unwrap - Rust By Example](https://doc.rust-lang.org/rust-by-example/error/option_unwrap.html)

```rust
let optional: Option<float>;

optional.unwrap(); // float or panic
optional.expect("this should be a float"); // custom error message
optional.unwrap_or(0.0) // default value
// comprehensive
let f = match optional {
  None() => panic!("this should be a float")
  Some(f) => f,
}

let inner:float = optional?; // another (more elegant) way to unwrap (or return None to propagate error up the call stack)
```

[Option.map() in std::option - Rust](https://doc.rust-lang.org/std/option/enum.Option.html#method.map) map the container to different type

```rust
fn process(food: Option<Food>) -> Option<Cooked> {
    food.map(|f| Peeled(f))
        .map(|Peeled(f)| Chopped(f))
        .map(|Chopped(f)| Cooked(f))
}
```

### Results

[std::result - Rust](https://doc.rust-lang.org/std/result/index.html)

Like `Option<T>` but for is an `OK<T>` type

[Rust's Most Important Containers 📦 10 Useful Patterns - YouTube](https://www.youtube.com/watch?v=f82wn-1DPas)
`.unwraps()` takes the value, if present; `.ok_*()` converts between `Result` and `Option`

[Result.map() in std::result - Rust](https://doc.rust-lang.org/std/result/enum.Result.html#method.map) map the container to different type

[`Option.ok_or()`](https://doc.rust-lang.org/std/option/enum.Option.html#method.ok_or), [`Option.ok_or-else()`](https://doc.rust-lang.org/std/option/enum.Option.html#method.ok_or_else) converts `Option` to `Result`

`?` operator do unwrap and return error (replacing `try!` macro), simplifying error handling
[The ? operator for easier error handling - The Edition Guide](https://doc.rust-lang.org/edition-guide/rust-2018/error-handling-and-panics/the-question-mark-operator-for-easier-error-handling.html)

```rust
f.read_to_string(&mut s)?;
// is equivalent to
match f.read_to_string(&mut s) {
    Ok(_) => Ok(s),
    Err(e) => Err(e),
}
```

### Closures

[Closures](https://doc.rust-lang.org/book/closures.html)
[Closures - Rust By Example](https://doc.rust-lang.org/rust-by-example/fn/closures.html)
[Finding Closure in Rust | Huon on the internet](http://huonw.github.io/blog/2015/05/finding-closure-in-rust/)

`|val| val + x` : x is captured

- `||` instead of `()`
- `{}` are optional for single expression

### Modules

Local Module: `mod cat;` will look for `./cat.rs` or `cat/mod.rs`
This will create a namespace `cat`, use `cat::mod` and `cat::function()` to access submodules and functions.
[Modules - The Rust Programming Language](https://doc.rust-lang.org/1.29.0/book/second-edition/ch07-00-modules.html)
[RustConf 2019 - The Rust 2018 Module System by Josh Triplett - YouTube](https://www.youtube.com/watch?v=AN9FoZgLcFg)

```rust
// just use `use` to import macro after 1.30
// https://doc.rust-lang.org/1.29.0/book/first-edition/macros.html?highlight=macro_use#scoping-and-macro-importexport
#[macro_use]
extern crate log;

use log::{debug, error, info, trace, warn};
```

### Macros

`cargo expand` generate files with macros expand

[macro_rules! - Rust By Example](https://doc.rust-lang.org/rust-by-example/macros.html)
[Ace Rust Macros ♠️ the declarative kind - YouTube](https://www.youtube.com/watch?v=IsCBibC0PZE)

[Attributes - Rust By Example](https://doc.rust-lang.org/rust-by-example/attribute.html)

[Procedural Macros (and custom derive) - The Rust Programming Language](https://doc.rust-lang.org/book/first-edition/procedural-macros.html) as compiler plugin, used in Rocket
[Procedural macros by nrc · Pull Request #1566 · rust-lang/rfcs](https://github.com/rust-lang/rfcs/pull/1566)
[Procedural Macros in Rust · joshleeb](https://joshleeb.com/posts/rust-procedural-macros/)
[dtolnay/proc-macro-hack: Procedural macros in expression position](https://github.com/dtolnay/proc-macro-hack)
[The Little Book of Rust Macros](https://danielkeep.github.io/tlborm/book/)
[6 useful Rust macros that you might not have seen before](https://medium.com/@benmcdonald_11671/6-useful-rust-macros-that-you-might-not-have-seen-before-59d1386f7bc5)

## Rhai

> "RustScript"

[Rhai – Embedded Scripting for Rust](https://rhai.rs/)

## Books

[Learn Rust - Rust Programming Language](https://www.rust-lang.org/learn#learn-use)
Docs that is available locally with `rustup doc`

First party
[The Rust Programming Language](https://doc.rust-lang.org/book/index.html) The Book
[Experiment Introduction - The Rust Programming Language](https://rust-book.cs.brown.edu/) The Book with exercises
[Rust By Example](https://doc.rust-lang.org/rust-by-example/index.html)
[The Edition Guide](https://doc.rust-lang.org/stable/edition-guide/introduction.html)
[Rust Forge](https://forge.rust-lang.org/)
[The Rust Reference](https://doc.rust-lang.org/stable/reference/index.html)
[Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/)

[Rust API Guidelines](https://rust-lang.github.io/api-guidelines/)
[The Rustonomicon](https://doc.rust-lang.org/nomicon/) unsafe Rust
[What is rustdoc? - The rustdoc book](https://doc.rust-lang.org/rustdoc/index.html)
[What is rustc? - The rustc book](https://doc.rust-lang.org/rustc/index.html)
[Rust Compiler Development Guide](https://rustc-dev-guide.rust-lang.org/)
[Rust Compiler Error Index](https://doc.rust-lang.org/error-index.html)
[Command Line Applications in Rust](https://rust-cli.github.io/book/index.html)
[Asynchronous Programming in Rust](https://rust-lang.github.io/async-book/)
[Rust RFCs](https://rust-lang.github.io/rfcs/)

[The Little Book of Rust Macros](https://danielkeep.github.io/tlborm/book/README.html)
[Learning Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/index.html) Rust's type safety makes this has to be done in unsafe mode
[24 days of Rust](https://zsiciarz.github.io/24daysofrust/index.html)
[Introduction to Programming Using Rust](http://gradebot.org/doc/ipur/)
[Rust Design Patterns](https://rust-unofficial.github.io/patterns/)
[vinodotdev/node-to-rust](https://github.com/vinodotdev/node-to-rust)

[The Rust Language & Ecosystem - The Rust eBookshelf](https://rams3s.github.io/rust-ebookshelf/)
[Tracking issue for RFC 1828: Rust Bookshelf · Issue #39588 · rust-lang/rust](https://github.com/rust-lang/rust/issues/39588)
[Download 'The Rust Programming Language' E-Books (PDF, EPUB, MOBI)](https://killercup.github.io/trpl-ebook/) OBSOLETE

## Tips and Tricks

[Speedy Desktop Apps With GTK and Rust | Nora Codes](https://nora.codes/tutorial/speedy-desktop-apps-with-gtk-and-rust/)
[ENOSPC](https://eno.space/blog/2018/02/Ferrous-oxide-for-jaguars-and-incremented-crocodiles) pitfalls

[Pascal Hertleif - Writing Idiomatic Libraries in Rust - YouTube](https://www.youtube.com/watch?v=0zOg8_B71gE)

[Things you can’t do in Rust (and what to do instead) - LogRocket Blog](https://blog.logrocket.com/what-you-cant-do-in-rust-and-what-to-do-instead/)

[tidunguyen/flexible-fn-rs: Demonstration of flexible function calls in Rust with function overloading, named arguments and optional arguments](https://github.com/tidunguyen/flexible-fn-rs)

[5 Better ways to code in Rust - YouTube](https://www.youtube.com/watch?v=BU1LYFkpJuk) VS Code setup

## backtrace

[std::backtrace - Rust](https://doc.rust-lang.org/std/backtrace/index.html)
[backtrace - Rust](https://docs.rs/backtrace/latest/backtrace/)

```sh
RUST_BACKTRACE=1 my_rust_app
RUST_BACKTRACE=1 cargo run --bin my_binary

# for debugging compile error
RUST_BACKTRACE=1 cargo build
```

[debugging - What is RUST_BACKTRACE supposed to tell me? - Stack Overflow](https://stackoverflow.com/questions/43335937/what-is-rust-backtrace-supposed-to-tell-me)

## Rust Lang Server

[Introducing Rust Language Server, source release - tools and infrastructure - Rust Internals](https://internals.rust-lang.org/t/introducing-rust-language-server-source-release/4209)
[rust-lang-nursery/rls: Repository for the Rust Language Server (aka RLS)](https://github.com/rust-lang-nursery/rls)
[RLS now available on nightly](http://www.jonathanturner.org/2017/04/rls-now-in-nightly.md.html)
[The Rust IDE and editor setup guide](https://rls.booyaa.wtf/)

## Internals

[Fearless Concurrency with Rust - The Rust Programming Language Blog](https://blog.rust-lang.org/2015/04/10/Fearless-Concurrency.html)
[Introducing MIR - The Rust Programming Language Blog](https://blog.rust-lang.org/2016/04/19/MIR.html)
[Mozilla's Rust language doubles down on speed and simplicity | InfoWorld](http://www.infoworld.com/article/3062936/application-development/mozillas-rust-language-doubles-down-on-speed-and-simplicity.html)
[rust-lang/miri: An interpreter for Rust's mid-level intermediate representation](https://github.com/rust-lang/miri)

[Visualizing memory layout of Rust's data types - YouTube](https://www.youtube.com/watch?v=rDoqT-a6UFg)

[How debuggers really work | Opensource.com](https://opensource.com/article/18/1/how-debuggers-really-work)
[Using unsafe tricks to examine Rust data structure layout](https://pramode.in/2016/09/13/using-unsafe-tricks-in-rust/)

[The Tale of a Bug in Arc: Synchronization and Data Races](https://www.ralfj.de/blog/2018/07/13/arc-synchronization.html) Arc = Atomically Reference Counted

[Ownership in Rust, Part 1 – Thomas Countz – Medium](https://medium.com/@thomascountz/ownership-in-rust-part-1-112036b1126b)
[Ownership in Rust, Part 2 – Thomas Countz – Medium](https://medium.com/@thomascountz/ownership-in-rust-part-2-c3e1da89956e)

[Rust Concurrency with Alex Crichton | Software Engineering Daily](https://softwareengineeringdaily.com/2016/11/23/rust-concurrency-with-alex-crichton/) on ownership

## Ownership Model

[Understanding Ownership - The Rust Programming Language](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)

| Type   | Ownership         | Alias? | Mutate?                          |
| ------ | ----------------- | ------ | -------------------------------- |
| T      | Owned             |        | ✔                               |
| &T     | Shared Reference  | ✔     | ✗ (while aliasing)               |
| &mut T | Mutable Reference |        | ✔ (original reference disabled) |

Passing variables to funtion moves ownership to the function by default.
Closures borrow references by default.

- use `Clone` trait
  explicit pass by `.clone()`
- use `Copy` trait (`Clone` is required)
  implicititly make `.clone()` the default when calling functions
- pass a read only reference (borrowing)

```rust
let r: &'l Book = &book; // explicitly define lifetime

// return value have same lifetime as input Vector
fn first<'l>(v: &'l Vec<Book>) -> &'l String {
  return &v[0];
}
// shorthand
fn first(v: &Vec<Book>) -> &String {
  return &v[0];
}
```

[rust-lang/polonius: Defines the Rust borrow checker.](https://github.com/rust-lang/polonius)
[What is Polonius? - Polonius](https://rust-lang.github.io/polonius/)

[Rust: What is Ownership and Borrowing? - YouTube](https://www.youtube.com/watch?v=79phqVpE7cU)
[The Rust Survival Guide - YouTube](https://www.youtube.com/watch?v=usJDUSrcwqI)
[Rust Demystified 🪄 Simplifying The Toughest Parts - YouTube](https://www.youtube.com/watch?v=TJTDTyNdJdY) borrowing, references and lifetime
[Rust Mutability, Borrows, and Moves - the ULTIMATE Tutorial! - YouTube](https://www.youtube.com/watch?v=vtUMT-GNaYE) 50 mins

[Why Rust's ownership/borrowing is hard](http://softwaremaniacs.org/blog/2016/02/12/ownership-borrowing-hard/en/)
[Why Rust's ownership/borrowing is hard | Hacker News](https://news.ycombinator.com/item?id=11093389)
[Graphical depiction of ownership and borrowing in Rust - Rufflewind's Scratchpad](https://rufflewind.com/2017-02-15/rust-move-copy-borrow)
[Fear not the Rust Borrow Checker](http://squidarth.com/rc/rust/2018/05/31/rust-borrowing-and-ownership.html)
[Ownership in Rust, Part 1 - Thomas Countz - Medium](https://medium.com/@thomascountz/ownership-in-rust-part-1-112036b1126b)
[Ownership in Rust, Part 2 - Thomas Countz - Medium](https://medium.com/@thomascountz/ownership-in-rust-part-2-c3e1da89956e)
[A closer look at Ownership in Rust | Articles by thoughtram](https://blog.thoughtram.io/ownership-in-rust/)
[Rust Mutability, Moving and Borrowing - The Straight Dope - tutorials - The Rust Programming Language Forum](https://users.rust-lang.org/t/rust-mutability-moving-and-borrowing-the-straight-dope/22166)
[Rust's Ownership model for JavaScript developers | Articles by thoughtram](https://blog.thoughtram.io/rust/2015/05/11/rusts-ownership-model-for-javascript-developers.html)
[Rust's Rules Are Made to Be Broken | Warp](https://www.warp.dev/blog/rules-are-made-to-be-broken)

### Lifetimes

- only relavent for reference

  ```rust
  struct SomeStruct<'l> {
    num: &'l i32
  }

  fn biggest<'l>(a: &'l Type, b: &'l Type) -> &'l Type {
    //...
  }
  ```

- does not change the lifetimes of the parameters
- can sometimes be inferred

[Understanding lifetimes - help - The Rust Programming Language Forum](https://users.rust-lang.org/t/understanding-lifetimes/6401/11)
[Validating References with Lifetimes - The Rust Programming Language](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html)
[Lockout, Part 1: Everything you know about lifetimes is wrong. | The Diagonal Device](https://exphp.github.io/blog/2018/09/16/lockout-part-1.html)

### Pinning

[Pin, Unpin, and why Rust needs them](https://blog.cloudflare.com/pin-and-unpin-in-rust/) self-referential object
[Pin and suffering - fasterthanli.me](https://fasterthanli.me/articles/pin-and-suffering)

---

## Testing

[mitsuhiko/insta: A snapshot testing library for rust](https://github.com/mitsuhiko/insta)

## Servo

[[1505.07383] Experience Report: Developing the Servo Web Browser Engine using Rust](https://arxiv.org/abs/1505.07383)
[Programming Servo: A ‘script’ event-loop – Programming Servo – Medium](https://medium.com/programming-servo/programming-servo-the-script-event-loop-be687b985b3e)

## Derivatives

[willcrichton/lia: A high-level language for Rust](https://github.com/willcrichton/lia)

[How Rust can replace C, with Python's help | InfoWorld](http://www.infoworld.com/article/3208391/python/how-rust-can-replace-c-with-pythons-help.html)

## Commentaries

[Rustlog](https://lifthrasiir.github.io/rustlog/)

[Pascal’s scribbles - Pascal’s Scribbles](https://deterministic.space/)
[Fun facts about Rust's growing popularity](https://www.jntrnr.com/fun-facts-about-rust-growth/) 2017

[Rust is being destroyed from the inside - YouTube](https://www.youtube.com/watch?v=QEnuzwCWpgQ)

[Rust: A Language for the Next 40 Years - Carol Nichols - YouTube](https://www.youtube.com/watch?v=A3AdN7U24iU) [slides](https://gitlab.com/carols10cents/rust-next-40-years)

[When Zero Cost Abstractions Aren’t Zero Cost | Considerations on Codecrafting](https://blog.polybdenum.com/2021/08/09/when-zero-cost-abstractions-aren-t-zero-cost.html)
[Using Rust at a startup: A cautionary tale](https://scribe.rip/using-rust-at-a-startup-a-cautionary-tale-42ab823d9454)
[Don't Learn Rust - YouTube](https://www.youtube.com/watch?v=kOFWIvNowXo)

[Rust: Built to Last](https://www.welcometothejungle.com/en/articles/btc-rust-programming-language)
[What is the Rust language? Safe, fast, and easy software development | InfoWorld](https://www.infoworld.com/article/3218074/what-is-rust-safe-fast-and-easy-software-development.html)
[What you need to know about Rust in 2020 | Opensource.com](https://opensource.com/article/20/1/rust-resources)
[Why to choose Rust as your next programming language | Opensource.com](https://opensource.com/article/19/10/choose-rust-programming-language)
[An In-Depth Comparison of Rust and C++ | by Adiákopi Mními | Better Programming](https://betterprogramming.pub/in-depth-comparison-of-rust-and-cpp-579b1f93a5e9)

[Why Discord is switching from Go to Rust - Discord Blog](https://blog.discordapp.com/why-discord-is-switching-from-go-to-rust-a190bbca2b1f)
[My first impressions of Rust - DEV Community 👩‍💻👨‍💻](https://dev.to/deepu105/my-first-impressions-of-rust-1a8o)
[What is Rust and why is it so popular? - Stack Overflow Blog](https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular/)
[How do Rust and Go compare against each other? - Quora](http://www.quora.com/How-do-Rust-and-Go-compare-against-each-other)
[Rust vs. Go: Why They’re Better Together – The New Stack](https://thenewstack.io/rust-vs-go-why-theyre-better-together/)
[Rust vs Go in 2023 — Bitfield Consulting](https://bitfieldconsulting.com/golang/rust-vs-go)
[Rust and Go — Medium](https://medium.com/@adamhjk/rust-and-go-e18d511fbd95)
[How Rust Compares to Other Programming Languages - The New Stack](http://thenewstack.io/safer-future-rust/)
[Adventures in Rust](https://dev.to/tmr232/adventures-in-rust-56fc)
[The Observation Deck » Falling in love with Rust](http://dtrace.org/blogs/bmc/2018/09/18/falling-in-love-with-rust/) Statemaps of `dtrace`
[Interview with Steve Klabnik: How Rust Compares to Other Languages and More | Codementor](https://www.codementor.io/rust/tutorial/steve-klabnik-rust-vs-c-go-ocaml-erlang)
[Why I ❤ Rust // Speaker Deck](https://speakerdeck.com/jvns/why-i-rust)
[My Key Learnings after 30,000 LOC in Rust – Dotan Nahum – Medium](https://medium.com/@jondot/my-key-learnings-after-30-000-loc-in-rust-a553e6403c19)
[Programming in Rust: the good, the bad, the ugly. – Hacker Noon](https://hackernoon.com/programming-in-rust-the-good-the-bad-the-ugly-d06f8d8b7738)
[“Rust is the future of systems programming, C is the new Assembly”: Intel principal engineer, Josh Triplett | Packt Hub](https://hub.packtpub.com/rust-is-the-future-of-systems-programming-c-is-the-new-assembly-intel-principal-engineer-josh-triplett/amp/)
[Rust 语言的编程范式 | 酷 壳 - CoolShell](https://coolshell.cn/articles/20845.html)
[Rust](https://blog.frankel.ch/tag/rust/) from the view of a Java geek

[Why I think C++ is still a desirable coding platform compared to Rust](https://lucisqr.substack.com/p/why-i-think-c-is-still-a-very-attractive)
[Why i think C++ is better than rust - YouTube](https://www.youtube.com/watch?v=Wz0H8HFkI9U)

[Should you use RUST as your FIRST programming language? - YouTube](https://www.youtube.com/watch?v=L576AckqIZg)
[Why You SHOULDN'T Learn Rust - YouTube](https://www.youtube.com/watch?v=kOFWIvNowXo)
[Prime Learns The Truth About Rust - YouTube](https://www.youtube.com/watch?v=Wy-y75mMRg4)
Theo Line, The Line of Prime
Don't choose Rust when requirement is flexible

### Dwelo

[We Rewrote Our IoT Platform in Rust and Got Away With It](https://medium.com/dwelo-r-d/we-rewrote-our-iot-platform-in-rust-and-got-away-with-it-2c8867c61b67)
[Abusing Fire for Light - Dwelo Research and Development - Medium](https://medium.com/dwelo-r-d/abusing-fire-for-light-a6e6774289fd)

### Codeship

[Coming to Rust from Ruby - via @codeship | via @codeship](https://blog.codeship.com/coming-rust-ruby/)
[Rust: Systems Programming with a Safety Net - via @codeship | via @codeship](https://blog.codeship.com/rust-systems-programming-with-a-safety-net/)

### Armin Ronacher

[Entries tagged “rust” | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/tags/rust/)

[Such a Little Thing: The Semicolon in Rust | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/2012/10/18/such-a-little-thing/)
[UCS vs UTF-8 as Internal String Encoding | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/2014/1/9/ucs-vs-utf8/)
[Revenge of the Types | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/2014/8/24/revenge-of-the-types/)
[A Fresh Look at Rust | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/2014/10/1/a-fresh-look-at-rust/)
[On Error Handling in Rust | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/2014/10/16/on-error-handling/)
[Don't Panic! The Hitchhiker's Guide to Unwinding | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/2014/10/30/dont-panic/)
[Improved Error Handling in Rust | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/2014/11/6/error-handling-in-rust/)
[Rust for Python Programmers | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/2015/5/27/rust-for-pythonistas/)
[Rust and Rest | Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org/2016/7/10/rust-rest/)

### [Joel's Journal](http://joelmccracken.github.io/)

[A Simple Web App in Rust, Part 1](http://joelmccracken.github.io/entries/a-simple-web-app-in-rust-pt-1/)
[A Simple Web App in Rust, Part 2a](http://joelmccracken.github.io/entries/a-simple-web-app-in-rust-pt-2a/)
[A Simple Web App in Rust, Part 2b](http://joelmccracken.github.io/entries/a-simple-web-app-in-rust-pt-2b/)
[A Simple Web App in Rust, Part 3 -- Integration](http://joelmccracken.github.io/entries/a-simple-web-app-in-rust-pt-3/)
[A Simple Web App in Rust, Part 4 -- CLI Option Parsing](http://joelmccracken.github.io/entries/a-simple-web-app-in-rust-pt-4--cli-option-parsing/)

### Niko Matsakis

[Baby Steps](http://smallcultfollowing.com/babysteps/)

[nikomatsakis/rust-tutorials-keynote: Keynote versions of my Rust tutorials.](https://github.com/nikomatsakis/rust-tutorials-keynote)
[www.rust-tutorials.com/exercises/](http://www.rust-tutorials.com/exercises/)
[www.rust-tutorials.com/RustConf16/](http://www.rust-tutorials.com/RustConf16/)

### Matt Gathu

[Writing a Command Line Tool in Rust](http://mattgathu.github.io/writing-cli-app-rust/)
[Testing a Rust Command Line Tool](https://mattgathu.github.io/testing-rust-cli-apps/)
[Rust for Python Programmers by Matt Gathu](http://slides.com/mattgathu/pyrusty#/)

---

## Crates

[crates.io: Rust Package Registry](https://crates.io/)
[Lib.rs — home for Rust crates // Lib.rs](https://lib.rs/)
[Crate List - Blessed.rs](https://blessed.rs/crates)

[The best Rust frameworks to check out in 2019 - LogRocket Blog](https://blog.logrocket.com/the-best-rust-frameworks-to-check-out-in-2019/)
[Rust blueprint project - announcements - The Rust Programming Language Forum](https://users.rust-lang.org/t/rust-blueprint-project/6500)

[Diesel](http://diesel.rs/) Safe, Extensible ORM and Query Builder
[launchbadge/sqlx: 🧰 The Rust SQL Toolkit.](https://github.com/launchbadge/sqlx)
[tafia/quick-xml: Rust high performance xml reader and writer](https://github.com/tafia/quick-xml) reference the design
[botika/yarte: Yarte stands for Yet Another Rust Template Engine, is the fastest template engine](https://github.com/botika/yarte)
[typenum Docs.rs](https://docs.rs/crate/typenum/) bits and int parser

[12 Killer Rust Libraries You Should Try – Dotan Nahum – Medium](https://medium.com/@jondot/12-killer-rust-libraries-you-should-know-c60bab07624f)
[Rust Must-Know Crates - DEV Community 👩‍💻👨‍💻](https://dev.to/cad97/rust-must-know-crates-5ad8)

### Standard Library

[std - Rust](https://doc.rust-lang.org/std/index.html)
[async_std - Rust](https://docs.rs/async-std/0.99.3/async_std/)
[async-rs/async-std: Async version of the Rust standard library](https://github.com/async-rs/async-std)

### HTTP/HTML

[hyper.rs](http://hyper.rs/) An http library for Rust
[Skip the Framework: Build A Simple Rust API with Hyper - DEV Community 👩‍💻👨‍💻](https://dev.to/deciduously/skip-the-framework-build-a-simple-rust-api-with-hyper-4jf5)

[utkarshkukreti/select.rs: A Rust library to extract useful data from HTML documents, suitable for web scraping.](https://github.com/utkarshkukreti/select.rs)
[SimonSapin/kuchiki: (朽木) HTML/XML tree manipulation library for Rust](https://github.com/SimonSapin/kuchiki)

[Templating in rust » AWWY?](http://www.arewewebyet.org/topics/templating/)
[sunng87/handlebars-rust: Rust templating with Handlebars](https://github.com/sunng87/handlebars-rust)
[djc/askama: Type-safe, compiled Jinja-like templates for Rust](https://github.com/djc/askama)
[Keats/tera: A template engine for Rust based on Jinja2/Django](https://github.com/Keats/tera)

### Web Backend

[Are we web yet? Getting there.](http://arewewebyet.org/)

[A web application completely in Rust – Sascha Grunert – Medium](https://medium.com/@saschagrunert/a-web-application-completely-in-rust-6f6bdb6c4471)
[saschagrunert/webapp.rs: A web application completely written in Rust.](https://github.com/saschagrunert/webapp.rs)

[Practical Rust Web Development - API Rest - DEV Community 👩‍💻👨‍💻](https://dev.to/werner/practical-rust-web-development-api-rest-29g1)
[Build an API in Rust with JWT Authentication using Nickel.rs](https://auth0.com/blog/build-an-api-in-rust-with-jwt-authentication-using-nickelrs/)
[Wiki - ActuallyUsingIron](https://wiki.alopex.li/ActuallyUsingIron)
[Creating Expedient Microservices in Rust and Diesel - via @codeship | via @codeship](https://blog.codeship.com/creating-expedient-microservices-in-rust-and-diesel/)
[Intro to Web Development with Rust for NodeJS Developers - DEV Community 👩‍💻👨‍💻](https://dev.to/gruberb/intro-to-web-programming-in-rust-for-nodejs-developers-lp) series
[Auth Web Microservice with rust using Actix-Web 1.0 - Complete Tutorial - Harry Gill](https://gill.net.in/posts/auth-microservice-rust-actix-web1.0-diesel-complete-tutorial/)
[Rust 🦀 CRUD Rest API with Docker 🐳 - DEV Community](https://dev.to/francescoxx/rust-crud-rest-api-3n45)

[Iron - Rust web application framework](http://ironframework.io/)
[Rustless - API micro-framework for Rust](http://rustless.org/)
[nickel.rs - web application framework for rust](http://nickel.rs/)
[pencil - Rust](https://fengsp.github.io/pencil/pencil/) inspired by Flask
[warp - crates.io: Rust Package Registry](https://crates.io/crates/warp)
[gotham - crates.io: Rust Package Registry](https://crates.io/crates/gotham)

[actix - Rust](https://actix.rs/)
[Build A Rust Backend (Really FAST Web Services with Actix Web) - YouTube](https://www.youtube.com/watch?v=L8tWKqSMKUI)

[axum - Rust](https://docs.rs/axum/latest/axum/)
[axum - crates.io: Rust Package Registry](https://crates.io/crates/axum)
[tokio-rs/axum: Ergonomic and modular web framework built with Tokio, Tower, and Hyper](https://github.com/tokio-rs/axum)
[Rust + Htmx + Askama : Is This Better Than GO?? - YouTube](https://www.youtube.com/watch?v=rcZSOLAI1lM)

[Rocket: Web Framework for Rust](https://rocket.rs/)
[show_notes::cysk::rocket - Rust](http://www.newrustacean.com/show_notes/cysk/rocket/)
[Rust Rocket Series Series' Articles - DEV Community](https://dev.to/davidedelpapa/series/9626)
[Build Web Apps With RUST (aka Intro Into Web Framework ‘Rocket’) - YouTube](https://www.youtube.com/watch?v=nJWN0wrPHRo)

[http-rs/tide: Fast and friendly HTTP server framework for async Rust](https://github.com/http-rs/tide)
[Tide is perhaps my favorite Rust web app framework. - YouTube](https://www.youtube.com/watch?v=ZbhzLP3vnkg)

[Writing a proxy in Rust and why it is the language of the future - Medium](https://medium.com/swlh/writing-a-proxy-in-rust-and-why-it-is-the-language-of-the-future-265d8bf7c6d2)
[MovingGauteng/shorty-rs: A simple URL shortener, written in Rust and gRPC](https://github.com/MovingGauteng/shorty-rs)

### Web Frontend

> see `web-assembly.md#rust`

[The Path to Rust on the Web](http://asquera.de/blog/2017-04-10/the-path-to-rust-on-the-web/)
[A web application completely in Rust – Sascha Grunert – Medium](https://medium.com/@saschagrunert/a-web-application-completely-in-rust-6f6bdb6c4471)

[koute/stdweb: A standard library for the client-side Web](https://github.com/koute/stdweb)
[koute/cargo-web: A Cargo subcommand for the client-side Web](https://github.com/koute/cargo-web)

[leptos - Rust](https://docs.rs/leptos/latest/leptos/)
[gbj/leptos: Build fast web applications with Rust.](https://github.com/gbj/leptos)

[Introduction | Yew](https://yew.rs/)
[yewstack/yew: Rust / Wasm framework for building client web apps](https://github.com/yewstack/yew)
[Yew Megatutorial Series' Articles - DEV Community](https://dev.to/davidedelpapa/series/5838)
[davidedelpapa/yew-tutorial: Tutorial for WASM using Rust and Yew](https://github.com/davidedelpapa/yew-tutorial)
[Patternfly Yew Quickstart](https://ctron.github.io/)
[A Rusty frontend: Patternfly & Yew — ctron's blog](https://dentrassi.de/2021/01/08/rusty-frontend-patternfly-yew/)
[Build A Rust Frontend (Really FAST Web Apps with Yew) - YouTube](https://www.youtube.com/watch?v=MddGbXgIt2E)

### CLI

[Getting Started with Systems Programming with Rust (Part 1) - DEV Community](https://dev.to/bexxmodd/getting-started-with-systems-programming-with-rust-part-1-2i13)
[Getting Started with Systems Programming with Rust (Part 2) - DEV Community](https://dev.to/bexxmodd/getting-started-with-systems-programming-with-rust-part-2-2lei)

[Rust2018 And The Great Cli Awakening](https://vitiral.github.io/2018/01/17/rust2018-and-the-great-cli-awakening.html)
[rust-crates/ergo: the ergo crate ecosystem: making rust's ecosystem more ergonomic, therefore more fun.](https://github.com/rust-crates/ergo)

[clap.rs – Fast. Configurable. Argument Parsing for Rust](https://clap.rs/)
[clap-rs/clap: A full featured, fast Command Line Argument Parser for Rust](https://github.com/clap-rs/clap)

[Get started with quicli](https://killercup.github.io/quicli/)
[killercup/quicli: Quickly build cool CLI apps in Rust.](https://github.com/killercup/quicli)
[Writing CLIs in Rust is awesome](https://killercup.github.io/talk-rust-all-hands-cli/#/) obsoleted by clap.rs 3?

[structopt - Rust](https://docs.rs/structopt/)
[TeXitoi/structopt: Parse command line argument by defining a struct.](https://github.com/TeXitoi/structopt)

[redox-os/termion: Mirror of https://gitlab.redox-os.org/redox-os/termion](https://github.com/redox-os/termion)
[cpjreynolds/rustty: A terminal UI library](https://github.com/cpjreynolds/rustty)

[Ratatui | Ratatui](https://ratatui.rs/)
[ratatui/ratatui: A Rust crate for cooking up terminal user interfaces (TUIs) 👨‍🍳🐀 https://ratatui.rs](https://github.com/ratatui/ratatui)

### Logger

[log - Rust](https://docs.rs/log/0.4.14/log/)
[pretty_env_logger - Rust](https://docs.rs/pretty_env_logger/0.4.0/pretty_env_logger/)
[log4rs - Rust](https://docs.rs/log4rs/1.0.0/log4rs/)
[syslog - Rust](https://docs.rs/syslog/5.0.0/syslog/)

[Geal/nom: Rust parser combinator framework](https://github.com/Geal/nom)

### Image Processing

[silvia-odwyer/photon: ⚡ Rust/WebAssembly image processing library](https://github.com/silvia-odwyer/photon)
[imazen/imageflow: High-performance image manipulation for web servers. Includes imageflow_server, imageflow_tool, and libimageflow](https://github.com/imazen/imageflow)
[magiclen/image-convert: A high level library for image identification, conversion, interlacing and high quality resizing.](https://github.com/magiclen/image-convert)
[nlfiedler/magick-rust: Rust bindings for ImageMagick](https://github.com/nlfiedler/magick-rust)

### GUI

[Are we GUI yet?](https://www.areweguiyet.com/) 2019
[Rust GUI: Introduction, a.k.a. the state of Rust GUI libraries (As of January 2021) - DEV Community](https://dev.to/davidedelpapa/rust-gui-introduction-a-k-a-the-state-of-rust-gui-libraries-as-of-january-2021-40gl)
[Why is building a UI in Rust so hard? | Warp](https://www.warp.dev/blog/why-is-building-a-ui-in-rust-so-hard)

[Rust 2020: GUI and community | Raph Levien’s blog](https://raphlinus.github.io/rust/druid/2019/10/31/rust-2020.html)
[Advice for the next dozen Rust GUIs | Raph Levien’s blog](https://raphlinus.github.io/rust/gui/2022/07/15/next-dozen-guis.html)

[iced - A cross-platform GUI library for Rust](https://iced.rs/)
[iced-rs/iced: A cross-platform GUI library for Rust, inspired by Elm](https://github.com/iced-rs/iced)

[Overview - Druid](https://linebender.org/druid/)
[linebender/druid: A data-first Rust-native UI design toolkit.](https://github.com/linebender/druid)

[audulus/rui: Experimental Rust UI library](https://github.com/audulus/rui)

[fruiframework/frui: A developer-friendly framework for building user interfaces in Rust](https://github.com/fruiframework/frui)

[rust-windowing/winit: Window handling library in pure Rust](https://github.com/rust-windowing/winit)

[CXX-Qt Documentation](https://kdab.github.io/cxx-qt/book/)
[KDAB/cxx-qt: Safe interop between Rust and Qt](https://github.com/KDAB/cxx-qt)

[leptos-rs/leptos: Build fast web applications with Rust.](https://github.com/leptos-rs/leptos)

#### GPUI

> used by Zed editor

[GPUI](https://www.gpui.rs/)
[GPUI 2 is now in production](https://zed.dev/blog/gpui-2-on-preview)
[Ownership and data flow in GPUI](https://zed.dev/blog/gpui-ownership)
[Leveraging Rust and the GPU to render user interfaces at 120 FPS](https://zed.dev/blog/videogame)

#### Dioxus

[Dioxus | An elegant GUI library for Rust](https://dioxuslabs.com/)
[Introduction](https://dioxuslabs.com/docs/0.3/guide/en/)[Demonthos/sledgehammer_bindgen](https://github.com/Demonthos/sledgehammer_bindgen) Rust binding to JSDOM

#### Xilem

> targets to be a cross-platform, cross-language rendering engine

[linebender/xilem: An experimental Rust native UI framework](https://github.com/linebender/xilem)
[linebender/piet-gpu: An experimental GPU compute-centric 2D renderer.](https://github.com/linebender/piet-gpu)

[Xilem: an architecture for UI in Rust | Raph Levien’s blog](https://raphlinus.github.io/rust/gui/2022/05/07/ui-architecture.html)
[linebender/xilem: An experimental Rust native UI framework](https://github.com/linebender/xilem)
[High Performance Rust UI - YouTube](https://www.youtube.com/watch?v=zVUTZlNCb8U)

### Data Science

[rust-ndarray](https://github.com/rust-ndarray?type=source)
[ndarray - crates.io: Rust Package Registry](https://crates.io/crates/ndarray)
[Rust for Data Science: Tutorial 1 - DEV Community](https://dev.to/davidedelpapa/rust-for-data-science-tutorial-1-4g5j)

## Concurrency

[rayon-rs/rayon: Rayon: A data parallelism library for Rust](https://github.com/rayon-rs/rayon)
[How Rust makes Rayon's data parallelism magical - Red Hat Developer](https://developers.redhat.com/blog/2021/04/30/how-rust-makes-rayons-data-parallelism-magical/?sc_cid=7013a000002w7hSAAQ)

[MAY - Rust Stackful Coroutine Library | Xudong-Huang's Blog](https://blog.zhpass.com/2017/12/23/may-announcement/)
[Rust parallelism for non-C/C++ developers – NEAR Protocol – Medium](https://medium.com/nearprotocol/rust-parallelism-for-non-c-c-developers-ec23f48b7e56)
[Fearless Concurrency - The Rust Programming Language](https://doc.rust-lang.org/book/ch16-00-concurrency.html)
[Rust Concurrency Explained - YouTube](https://www.youtube.com/watch?v=Dbytx0ivH7Q)

[Weld](https://www.weld.rs/)
[Interview with Weld’s main contributor: accelerating numpy, scikit and pandas as much as 100x with Rust and LLVM](https://notamonadtutorial.com/weld-accelerating-numpy-scikit-and-pandas-as-much-as-100x-with-rust-and-llvm-12ec1c630a1)

## File I/O

[Getting Started with Rust: Working with Files and Doing File I/O | Linux Journal](https://www.linuxjournal.com/content/getting-started-rust-working-files-and-doing-file-io)

## Async/Future

[👋🏽 Welcome - wg-async](https://rust-lang.github.io/wg-async/welcome.html)

[Explained: How does async work in Rust? – Levelup Your Coding](https://levelup.gitconnected.com/explained-how-does-async-work-in-rust-c406f411b2e2)
[Getting Started - Asynchronous Programming in Rust](https://rust-lang.github.io/async-book/)
[Async Rust in Practice: Performance, Pitfalls, Profiling - The New Stack](https://thenewstack.io/async-rust-in-practice-performance-pitfalls-profiling/)
[Intro to async/.await in Rust - YouTube](https://www.youtube.com/watch?v=K8LNPYNvT-U)

[futures - Rust](http://alexcrichton.com/futures-rs/futures/index.html)
[Explained: Rust Futures for Web Development – ITNEXT](https://itnext.io/explained-rust-futures-for-web-development-b1d0632490e7)
[Understanding Futures In Rust -- Part 1 | Viget](https://www.viget.com/articles/understanding-futures-in-rust-part-1/)
[Understanding Futures in Rust -- Part 2 | Viget](https://www.viget.com/articles/understanding-futures-is-rust-part-2/)

[Byron/github-star-counter: A playground to test ergonomics of Rust async programming](https://github.com/Byron/github-star-counter)

[bytedance/monoio: Rust async runtime based on io-uring.](https://github.com/bytedance/monoio)

[Rust's Journey to Async/Await - YouTube](https://www.youtube.com/watch?v=lJ3NC-R3gSI)
Rust has `Future` and `await` built-in but lacks an async runtime (executor), use `tokio`

[DataDog/glommio: Glommio is a thread-per-core framework that aims to make the task of writing highly parallel asynchronous applications in a thread-per-core architecture easier for rustaceans.](https://github.com/DataDog/glommio/) coroutine on io-uring

### Tokio

[Tokio](https://tokio.rs/) fast asynchronous I/O framework, uses io-uring
[Tokio internals: Understanding Rust's asynchronous I/O framework from the bottom up : Caffeinated Bitstream](https://cafbit.com/post/tokio_internals/)
[Creating a Chat Server with async Rust and Tokio - YouTube](https://www.youtube.com/watch?v=Iapc-qGTEBQ)

[mio - Rust](https://docs.rs/mio/latest/mio/)
[tokio-rs/mio: Metal IO library for Rust](https://github.com/tokio-rs/mio)

```rust
use std::time:Duration;
use tokio::time::sleep;

#[tokio::main]
async fn main() {
  let handles: Vec<JoinHandle<()>> = vec![]

  for i: i32 n 0..2{
    let handle: JoinHandle<()> = tokio::spawn(future: async move {
      my_function.await(i);
    });

    handles.push(handle);
  }
}

async fn my_function(i: i32) {
  sleep(Duration::from_millis(50)).await;
  // tokio's sleep current Future instead of entire thread
  return i+1;
}
```

[tokio-rs/console: a debugger for async rust!](https://github.com/tokio-rs/console)

## Linters

[rust-lang-nursery/rustfmt: Format Rust code](https://github.com/rust-lang-nursery/rustfmt)
[rust-lang-nursery/rust-clippy: A bunch of lints to catch common mistakes and improve your Rust code](https://github.com/rust-lang-nursery/rust-clippy)

[regexident/rustfmt-configs-guide: A visual guide for rustfmt's configs](https://github.com/regexident/rustfmt-configs-guide)

## #perfmatters

[rustc performance data](http://perf.rust-lang.org/)
[Is It Time to Rewrite the Operating System in Rust? - YouTube](https://www.youtube.com/watch?v=HgtRAbE1nBM)

[Benchmark tests](https://doc.rust-lang.org/book/benchmark-tests.html)
[Benchmarking in Rust — Llogiq on stuff](https://llogiq.github.io/2015/06/16/bench.html)
[Performance Tuning in Rust using Benchmarking and Perf](https://www.worthe-it.co.za/programming/2018/09/23/performance-tuning-in-rust.html)

[rust-lang/rustc-perf: Website for graphing performance of rustc](https://github.com/rust-lang/rustc-perf)

[bheisler/criterion.rs: Statistics-driven benchmarking library for Rust](https://github.com/bheisler/criterion.rs)

[Measuring Memory Usage in Rust](https://rust-analyzer.github.io/blog/2020/12/04/measuring-memory-usage-in-rust.html) with `rust-analyzer`

[SIMD for faster computing - The Edition Guide](https://doc.rust-lang.org/edition-guide/rust-2018/simd-for-faster-computing.html) with [`#[cfg()]`](https://doc.rust-lang.org/rust-by-example/attribute/cfg.html) and [`std::arch`](https://doc.rust-lang.org/1.29.1/std/arch/index.html)

["NTFS really isn't that bad" - Robert Collins (LCA 2020) - YouTube](https://www.youtube.com/watch?v=qbKGw8MQ0i8) optimizing `rustup` in WSL2

## GPU

[termoshtt/accel: GPGPU Framework for Rust](https://github.com/termoshtt/accel)

[Running Rust on the GPU with Accel | bheisler.github.io](https://bheisler.github.io/post/rust-on-the-gpu-with-accel/)
[Writing a GPU-Accelerated Path Tracer in Rust - Part 1 | bheisler.github.io](https://bheisler.github.io/post/writing-gpu-accelerated-path-tracer-part-1/)
[Writing a GPU-Accelerated Path Tracer in Rust - Part 2 | bheisler.github.io](https://bheisler.github.io/post/writing-gpu-accelerated-path-tracer-part-2/)

## Operating System

[Writing an OS in Rust](https://os.phil-opp.com/)
[Ashley Williams - intermezzOS: a teaching operating system - YouTube](https://www.youtube.com/watch?v=WxbrhruIAa8)
[Writing an Embedded Operating System in Rust - Alistair Francis, Western Digital - YouTube](https://www.youtube.com/watch?v=yT0cRctyZOE)

## Embedded system

[Platform Support - The rustc book](https://doc.rust-lang.org/nightly/rustc/platform-support.html)

[Rust Embedded](https://github.com/rust-embedded/)

[Embedded Rust documentation](https://docs.rust-embedded.org/)
[The Embedded Rust Book](https://docs.rust-embedded.org/book/)

[Use Rust for embedded development | Opensource.com](https://opensource.com/article/21/10/rust-embedded-development)

[Embassy](https://embassy.dev/)
[embassy-rs/embassy: Modern embedded framework, using Rust and async.](https://github.com/embassy-rs/embassy)

[miselin/rustic: Rustic Embedded Framework](https://github.com/miselin/rustic) Rust framework for embedded system, 😴inactive
[Program the real world using Rust on Raspberry Pi | Opensource.com](https://opensource.com/article/19/3/physical-computing-rust-raspberry-pi)

[Embedded Rust setup explained - YouTube](https://www.youtube.com/watch?v=TOAynddiu5M) for micro:bit

[Tock Embedded Operating System](https://www.tockos.org/)
[Tock Tutorial](https://book.tockos.org/)

[rust-embedded/cortex-m-quickstart: Template to develop bare metal applications for Cortex-M microcontrollers](https://github.com/rust-embedded/cortex-m-quickstart)
[Learn Embedded Rust WITHOUT Any Expensive Hardware | Rust ARM QEMU Cargo Tutorial - YouTube](https://www.youtube.com/watch?v=_sYnzFe9A6E)

### Redox

[Redox - Your Next(Gen) OS](http://www.redox-os.org/)
[Rust's Redox OS could show Linux a few new tricks | InfoWorld](http://www.infoworld.com/article/3046100/open-source-tools/rusts-redox-os-could-show-linux-a-few-new-tricks.html)

## Rust from C/Other languages

[Linkage - The Rust Reference](https://doc.rust-lang.org/reference/linkage.html) `cdylib`/`staticlib`
[The Rust FFI Omnibus](http://jakegoulding.com/rust-ffi-omnibus/)
`#[no_mangle]`, `extern`, write C header files
[Rust FFI: Sending strings to the outside world | Huy's Blog](https://thefullsnack.com/en/string-ffi-rust.html)
[Overview - The (unofficial) Rust FFI Guide](https://michael-f-bryan.github.io/rust-ffi-guide/overview.html)
[Exposing a Rust library to C](https://www.greyblake.com/blog/2017-08-10-exposing-rust-library-to-c/)
[Complex types with Rust’s FFI. Interop with object methods, structs… | by Jim Fleming | Jim Fleming | Medium](https://medium.com/jim-fleming/complex-types-with-rust-s-ffi-315d14619479)
[std::boxed::Box - Rust](https://doc.rust-lang.org/stable/std/boxed/struct.Box.html#method.from_raw) for non-cloning data

[rusty-binder / rusty-binder · GitLab](https://gitlab.com/rusty-binder/rusty-binder) not maintained
[Sean1708/rusty-cheddar: A Rust crate for automatically generating C header files from Rust source file.](https://github.com/Sean1708/rusty-cheddar) evloving to rusty-binder

[Day 23 - calling Rust from other languages | 24 days of Rust](http://zsiciarz.github.io/24daysofrust/book/vol1/day23.html)
[regex/regex-capi at master · rust-lang/regex](https://github.com/rust-lang/regex/tree/master/regex-capi)

[jameysharp/corrode: C to Rust translator](https://github.com/jameysharp/corrode)
[Project for porting C to Rust gains Mozilla's backing | InfoWorld](http://www.infoworld.com/article/3136934/open-source-tools/project-for-porting-c-to-rust-gains-mozillas-backing.html)

## C from Rust

[Unsafe Rust - The Rust Programming Language](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html#using-extern-functions-to-call-external-code)

[The `bindgen` User Guide](https://rust-lang.github.io/rust-bindgen/)
[rust-lang/rust-bindgen: Automatically generates Rust FFI bindings to C (and some C++) libraries.](https://github.com/rust-lang/rust-bindgen)
[Using C Libraries in Rust. A practical guide to FFI using bindgen… | by Jeff Hiner | Dwelo Research and Development | Medium](https://medium.com/dwelo-r-d/using-c-libraries-in-rust-13961948c72a)
[Wrapping Unsafe C Libraries in Rust | by Jeff Hiner | Dwelo Research and Development | Medium](https://medium.com/dwelo-r-d/wrapping-unsafe-c-libraries-in-rust-d75aeb283c65)

[libc - Rust](https://docs.rs/libc/)
[libloading - Rust](https://docs.rs/libloading/)
[alexcrichton/gcc-rs: Rust library for build scripts to compile C/C++ code into a Rust library](https://github.com/alexcrichton/gcc-rs)
[dtolnay/cxx: Safe interop between Rust and C++](https://github.com/dtolnay/cxx)

[Calling C from Rust - Julia Evans](http://jvns.ca/blog/2016/01/18/calling-c-from-rust/)
[A little C with your Rust - The Embedded Rust Book](https://rust-embedded.github.io/book/interoperability/c-with-rust.html)

---

[koute/pinky: An NES emulator written in Rust](https://github.com/koute/pinky)
[quickjs-zh/quickjs-rs: Rust bindings to QuickJS](https://github.com/quickjs-zh/quickjs-rs)
[dtolnay/async-trait: Type erasure for async trait methods](https://github.com/dtolnay/async-trait)
[ruffle-rs/ruffle: A Flash Player emulator written in Rust](https://github.com/ruffle-rs/ruffle)
