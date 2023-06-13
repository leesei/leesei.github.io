---
title: The Go Programming Language
description: "Build simple, secure, scalable systems with Go"
created: 2015-02-16
updated: 2023-06-10
tags:
  - comp.lang
  - go-lang
  - package-manager
---

> materials before 2019 should probably be removed

[The Go Programming Language](https://go.dev/)
[Go (programming language) - Wikiwand](<https://www.wikiwand.com/en/Go_(programming_language)>)
[Go: A Documentary](https://golang.design/history/)
[What reasons are there to not use Go (programming language)? - Quora](https://www.quora.com/What-reasons-are-there-to-not-use-Go-programming-language)
[The Why of Go - YouTube](https://www.youtube.com/watch?v=bmZNaUcwBt4)

[Go 1 and the Future of Go Programs - go.dev](https://go.dev/doc/go1compat)
[How to Write Go Code - go.dev](https://go.dev/doc/code)
[Learn Go Programming - Golang Tutorial for Beginners - YouTube](https://www.youtube.com/watch?v=YS4e4q9oBaU) 2019-06, 6:29
[Golang Tutorial for Beginners | Full Go Course - YouTube](https://www.youtube.com/watch?v=yyUHQIec83I) 2021-12, 3:24
[Getting started with VS Code Go - YouTube](https://www.youtube.com/watch?v=1MXIGYrMk80) 2021-01

[Awesome Go](https://awesome-go.com/)
[avelino/awesome-go: A curated list of awesome Go frameworks, libraries and software](https://github.com/avelino/awesome-go)
[tenntenn/gopher-stickers: gopher stickers](https://github.com/tenntenn/gopher-stickers)
[travis-ci/gimme: Install go, yay!](https://github.com/travis-ci/gimme) `nvm` for Go

[Tap the power of Google's Go language | InfoWorld](http://www.infoworld.com/article/3190210/application-development/tap-the-power-of-googles-go-language.html)
[Understand Go in 5 minutes - Je suis un dev](https://www.jesuisundev.com/en/understand-go-in-5-minutes/)
[Practical Go | Dave Cheney](https://dave.cheney.net/practical-go)

[go command - cmd/go - pkg.go.dev](https://pkg.go.dev/cmd/go)
[Go command and packages cheat sheet | Opensource.com](https://opensource.com/article/18/10/go-command-and-packages-cheat-sheet)

```sh
go mod init <package>

go run a.go
go build a.go
go run -x -v a.go
go build -x -v a.go
go build -v PACKAGE
go build -ldflags="-s -w" a.go # trim binary

go run folder
go build folder
# if `go get` has network issue
go env -w GOPROXY=<https://goproxy.io,direct>
```

`GOPATH` was required before Go 1.14 (2020-02), see `#GOPATH`
Now it defaults to `$HOME/go` and stores packages and `GOBIN`

## Version Manager

[kevincobain2000/gobrew: Go version manager. Superr simple tool to install and manage Go versions. Install go without root. Gobrew doesn't require shell rehash.](https://github.com/kevincobain2000/gobrew)
[Go Version manager — gobrew. Install and manage Go versions on Mac… | by pulkit kathuria | web-developer | Medium](https://medium.com/web-developer/go-version-manager-gobrew-c8750157dfe6)

[stefanmaric/g: Simple go version manager, gluten-free](https://github.com/stefanmaric/g)

[syndbg/goenv: Like pyenv and rbenv, but for Go.](https://github.com/syndbg/goenv)

[moovweb/gvm: Go Version Manager](https://github.com/moovweb/gvm) requires several host tools

## Go 2

[Toward Go 2 - go.dev](https://go.dev/blog/toward-go2)
[Go2 · golang/go Wiki](https://github.com/golang/go/wiki/Go2)
[Go 2 Draft Designs - go.dev](https://go.dev/blog/go2draft)
[Go 2 Draft Designs](https://go.googlesource.com/proposal/+/master/design/go2draft.md)

[Go team proposes parametric polymorphism • DEVCLASS](https://devclass.com/2019/07/30/go-team-proposes-parametric-polymorphism/)

## Tools

### Linting

[Introduction | golangci-lint](https://golangci-lint.run/)
[golangci/golangci-lint: Fast linters Runner for Go](https://github.com/golangci/golangci-lint)
[A Complete Guide to Linting Go Programs](https://freshman.tech/linting-golang/)

```sh
go install github.com/golangci/golangci-lint/cmd/golangci-lint
```

### Docs

```sh
godoc -http=":6060"
# docs for all installed packages at http://localhost:6060/pkg

godoc pkg Label  # look up function/type
```

[Godoc: documenting Go code - go.dev](https://go.dev/blog/godoc)
[Go Doc Comments - The Go Programming Language](https://go.dev/doc/comment)
[Static analysis features of godoc - go.dev](https://go.dev/lib/godoc/analysis/help)

[Godocs - Effortless documentation for your go packages - YouTube](https://www.youtube.com/watch?v=80VT3xexcWs)
[godoctricks package - github.com/fluhus/godoc-tricks - Go Packages](https://pkg.go.dev/github.com/fluhus/godoc-tricks)
[godoc: Tips & Tricks. Go has a great emphasis on simple… | by Elliot Chance | Medium](https://elliotchance.medium.com/godoc-tips-tricks-cda6571549b)

[Golds -Go 101](https://go101.org/apps-and-libs/golds.html)
[go101/golds: An experimental Go local docs server/generator and code reader implemented with some fresh ideas.](https://github.com/go101/golds)

### Editor/IDE

[The best Go language IDEs and editors | InfoWorld](http://www.infoworld.com/article/3171158/application-development/the-best-go-language-ides-and-editors.html)

[Gopls on by default in the VS Code Go extension - The Go Programming Language](https://go.dev/blog/gopls-vscode-go)
[golang/vscode-go: Go extension for VS Code](https://github.com/golang/vscode-go/)
[vscode-go/features.md at master · golang/vscode-go](https://github.com/golang/vscode-go/blob/master/docs/features.md)
[GopherCon 2019: Rebecca Stambler - Go, pls stop breaking my editor - YouTube](https://www.youtube.com/watch?v=EFJfdWzBHwE) old way -> `gopls`

[LiteIDE X](http://liteide.org/en/)
[visualfc/liteide: LiteIDE is a simple, open source, cross-platform Go IDE.](https://github.com/visualfc/liteide)

## Commentary

[Comparing Elixir and Go - via @codeship | via @codeship](https://blog.codeship.com/comparing-elixir-go/)
[The success of Go heralds that of Rust - George Hosu - Medium](https://medium.com/@george3d6/the-success-of-go-heralds-that-of-rust-73cb2e4c0500)
[Go: the Good, the Bad and the Ugly](https://bluxte.net/musings/2018/04/10/go-good-bad-ugly/)
[What Go Programming Language does and does not have](https://medium.com/@amritpandey/what-go-programming-language-does-and-does-not-have-ed6a9f83ab2d)
[Why Go gets exceptions right | Dave Cheney](https://dave.cheney.net/2012/01/18/why-go-gets-exceptions-right)
[My reflections on Golang - DEV Community 👩‍💻👨‍💻](https://dev.to/deepu105/my-reflections-on-golang-38jk)
[Rust vs. Go: How to choose | InfoWorld](https://www.infoworld.com/article/3436960/rust-vs-go-how-to-choose.html)
[Why Go Is Not Good :: Will Yager](http://yager.io/programming/go.html)

[Golang is BAD for SMART PEOPLE - YouTube](https://www.youtube.com/watch?v=rWJ1tPCnVJI)

## Compile

[containous/yaegi: Yaegi is Another Elegant Go Interpreter](https://github.com/containous/yaegi)

[How a Go Program Compiles down to Machine Code - Hacker Noon](https://hackernoon.com/how-a-go-program-compiles-down-to-machine-code-e4532dc8b8ca)

Use `-ldflags=-w` flag to disable DWARF to reduce binary size

[vladimirvivien/go-cshared-examples: Calling Go Functions from Other Languages using C Shared Libraries](https://github.com/vladimirvivien/go-cshared-examples) build `.so`

[gopherjs/gopherjs: A compiler from Go to JavaScript for running Go code in a browser](https://github.com/gopherjs/gopherjs)

[[web-assembly#Go]]

[How to Use //go:generate · The Ethically-Trained Programmer](https://blog.carlmjohnson.net/post/2016-11-27-how-to-use-go-generate/)
[How to Use //go:embed · The Ethically-Trained Programmer](https://blog.carlmjohnson.net/post/2021/how-to-use-go-embed/)

[GoReleaser - GoReleaser](https://goreleaser.com/)

### Cross Compile

[Cross compilation with Go 1.5 | Dave Cheney](https://dave.cheney.net/2015/08/22/cross-compilation-with-go-1-5)
[Cross compilation just got a whole lot better in Go 1.5 | Dave Cheney](https://dave.cheney.net/2015/03/03/cross-compilation-just-got-a-whole-lot-better-in-go-1-5)
[Cross-compiling made easy with Golang | Opensource.com](https://opensource.com/article/21/1/go-cross-compiling)
[Golang 跨平台交叉编译 | Tony Bai](https://tonybai.com/2014/10/20/cross-compilation-with-golang/)
[How to cross-compile Go programs for Windows, macOS, and Linux](https://freshman.tech/snippets/go/cross-compile-go-programs/)

```sh
go tool dist list
GOOS=linux GOARCH=arm64 go build -v PACKAGE
GOOS=darwin GOARCH=amd64 go build
GOOS=windows GOARCH=amd64 go build -o app.exe app/main.go
# use `upx` is binary is too large
```

[mitchellh/gox: A dead simple, no frills Go cross compile tool](https://github.com/mitchellh/gox)

### Cgo

- Cgo has slower build time
- cross compilation is difficult
  alleviated by [[zig-lang#Cross Compile]]
- many Go tools are unavailable
- performance penalty

[C? Go? Cgo! - go.dev](https://go.dev/blog/cgo)
[cgo command - cmd/cgo - pkg.go.dev](https://pkg.go.dev/cmd/cgo)
[cgo · golang/go Wiki](https://github.com/golang/go/wiki/cgo)

[cgo is not Go | Dave Cheney](https://dave.cheney.net/2016/01/18/cgo-is-not-go)
[Statically compiled Go programs, always, even with cgo, using musl — Dominik Honnef](https://honnef.co/articles/statically-compiled-go-programs-always-even-with-cgo-using-musl/) using Zig is easier

[Go 与 C 语言的互操作 | Tony Bai](https://tonybai.com/2012/09/26/interoperability-between-go-and-c/)
[探讨 docker 容器对共享内存的支持情况 | Tony Bai](https://tonybai.com/2014/10/12/discussion-on-shared-mem-support-in-docker/)
[Python and Go : Part IV - Using Python in Memory](https://www.ardanlabs.com/blog/2020/09/using-python-memory.html)

```sh
CGO_ENABLED=1 go build
CGO_ENABLED=1 GOOS=linux go build
# zig produces static linked executable, with your choice of libc
CGO_ENABLED=1 GOOS=linux CC="zig cc -target aarch64-linux-musl" go build
```

[runtime: provide centralized facility for managing (c)go pointer handles · Issue #37033 · golang/go](https://github.com/golang/go/issues/37033)

## Package Manager

[Deprecation of 'go get' for installing executables - The Go Programming Language](https://go.dev/doc/go-get-install-deprecation)
Use `go get` for package management of `go.mod`
Use `go install` for executables

```sh
go install example.com/cmd@latest
```

[Managing dependencies - The Go Programming Language](https://go.dev/doc/modules/managing-dependencies)
[PackageManagementTools · golang/go Wiki](https://github.com/golang/go/wiki/PackageManagementTools)
[The Saga of Go Dependency Management GopherAcademy](https://blog.gopheracademy.com/advent-2016/saga-go-dependency-management/)

### Modules

> previously `vgo`, "versioned Go"
> alternative to GOPATH, added in Go 1.11 (2018-08)
> control with GO111MODULE environment variable
> default on if `go.mod` exists in Go 1.14 (2020-02)
> package and binary management before Go 1.16 is quite messy

[Modules · golang/go Wiki](https://github.com/golang/go/wiki/Modules)
[Go Modules Reference - The Go Programming Language](https://go.dev/ref/mod)

[Packages and Modules in Go (Golang) - Part 1 - Welcome To Golang By Example](https://golangbyexample.com/packages-modules-go-first/)
[Packages and Modules in Go (Golang) - Part 2 - Welcome To Golang By Example](https://golangbyexample.com/packages-modules-go-second/)

[Go update all modules - Stack Overflow](https://stackoverflow.com/questions/67201708/go-update-all-modules)
[Go Modules | RheinardKorf.com](https://rheinardkorf.com/go-modules/)

```sh
go mod init  # init project
go mod tidy  # sync `go.mod` with project

go get [MODULE]  # get/upgrade dependency
go install # build and install commands

go list -m -u all # list upgrades
go get -u # upgrade dependencies to latest
go get -u=patch # upgrade dependencies limited to patch version
go get -u -t # upgrade test dependencies
go get -u ./... # upgrade recursively in any subdirectories
go mod tidy ./... # after upgrade
```

### Environment Variables

[go command - cmd/go - Go Packages](https://pkg.go.dev/cmd/go#hdr-Environment_variables)

```sh
go env
```

#### GOPATH

[How to Write Go Code (with GOPATH) - The Go Programming Language](https://go.dev/doc/gopath_code)
[Why is GO111MODULE everywhere, and everything about Go Modules (updated with Go 1.17) - DEV Community 👩‍💻👨‍💻](https://dev.to/maelvls/why-is-go111module-everywhere-and-everything-about-go-modules-24k)

- `go get` installs to `$GOPATH/src` before 1.11
- `GO111MODULE=on go get` deprecated in 1.17, use `go install` instead

[The App Engine SDK and workspaces (GOPATH) - go.dev](https://go.dev/blog/appengine-gopath)

## stdlib

[Standard library - pkg.go.dev](https://pkg.go.dev/std)
[fmt package - fmt - pkg.go.dev](https://pkg.go.dev/fmt)
[log package - log - pkg.go.dev](https://pkg.go.dev/log)
[strings package - strings - pkg.go.dev](https://pkg.go.dev/strings)
[strconv package - strconv - pkg.go.dev](https://pkg.go.dev/strconv)
[reflect package - reflect - pkg.go.dev](https://pkg.go.dev/reflect)

[json package - encoding/json - pkg.go.dev](https://pkg.go.dev/encoding/json)
[Golang JSON Gotchas That Drove Me Crazy But I Have Learned to Deal With](https://okigiveup.net/blog/golang-json-gotchas-that-drove-me-crazy-but-i-have-learned-to-deal-with/)

[fs package - io/fs - pkg.go.dev](https://pkg.go.dev/io/fs)
[Walking with filesystems: Go's new fs.FS interface — Bitfield Consulting](https://bitfieldconsulting.com/golang/filesystems) build memory fs

## Packages

`go get` can install dependencies given the URL
std package are located at `$GOROOT/pkg/<platform>/`
no std package are located at `$GOROOT/src/`

[Go Packages - Go Packages](https://pkg.go.dev/) repository
[godocs.io](https://godocs.io/)
[Go Report Card | Go project code quality report cards](https://goreportcard.com/)

[Projects · golang/go Wiki](https://github.com/golang/go/wiki/Projects)
[golang-standards/project-layout: Standard Go Project Layout](https://github.com/golang-standards/project-layout)
[Package names - go.dev](https://go.dev/blog/package-names)

[The Go Programming Language Specification - go.dev](https://go.dev/ref/spec#Package_initialization) Package initialization
[The Go init Function | TutorialEdge.net](https://tutorialedge.net/golang/the-go-init-function/)
[go 打包机制 | 李乾坤的博客](https://qiankunli.github.io/2020/03/15/go_package.html)

[Write packages, not programs — Bitfield Consulting](https://bitfieldconsulting.com/golang/packages)
[From packages to commands — Bitfield Consulting](https://bitfieldconsulting.com/golang/commands)

[mobile module - golang.org/x/mobile - Go Packages](https://pkg.go.dev/golang.org/x/mobile)
[mobile module - go.dev/x/mobile - pkg.go.dev](https://pkg.go.dev/golang.org/x/mobile)
[golang/mobile: [mirror] Go on Mobile](https://github.com/golang/mobile/)

[jefferyjob/go-easy-utils: Quick toolbox for common data processing developed by Go language。Go 语言开发的常用数据处理的快捷工具箱。](https://github.com/jefferyjob/go-easy-utils)
[GitHub - go-vgo/gt: Commonly used functions and tools for the Go programming language](https://github.com/go-vgo/gt)

[mitchellh/protostructure: Encode and decode Go (golang) struct types via protocol buffers.](https://github.com/mitchellh/protostructure)

[ulikunitz/xz: Pure golang package for reading and writing xz-compressed files](https://github.com/ulikunitz/xz)
[mholt/archiver: Easily create & extract archives, and compress & decompress files of various formats](https://github.com/mholt/archiver)

[afero package - github.com/spf13/afero - pkg.go.dev](https://pkg.go.dev/github.com/spf13/afero)
[spf13/afero: A FileSystem Abstraction System for Go](https://github.com/spf13/afero)

[rate package - golang.org/x/time/rate - Go Packages](https://pkg.go.dev/golang.org/x/time/rate)

[uber-go/zap: Blazing fast, structured, leveled logging in Go.](https://github.com/uber-go/zap)
[stats_api package - gopkg.in/fukata/golang-stats-api-handler.v1 - Go Packages](https://pkg.go.dev/gopkg.in/fukata/golang-stats-api-handler.v1)

[Masterminds/squirrel: Fluent SQL generation for golang](https://github.com/Masterminds/squirrel)

[google/gopacket: Provides packet processing capabilities for Go](https://github.com/google/gopacket)
[dreadl0ck/gopcap: Fast Golang PCAP Reader & Benchmark Comparison](https://github.com/dreadl0ck/gopcap) recommends `pcapgo`, benchmarks, not using `binary.Read()`

### import

[goimports command - golang.org/x/tools/cmd/goimports - pkg.go.dev](https://pkg.go.dev/golang.org/x/tools/cmd/goimports)

[理解 Go import |虞双齐的博客](https://www.yushuangqi.com/blog/2016/understanding-golang-import-package.html)
[理解 Golang 包导入 | Tony Bai](https://tonybai.com/2015/03/09/understanding-import-packages/)

```go
// import declaration       Local name of Sin
import   "lib/math"         math.Sin
import m "lib/math"         m.Sin
import . "lib/math"         Sin  // include symbols to local namespace
import _ "lib/math"         // suppress unused warning, run init, no load symbol
```

### Print Formatting

[fmt package - fmt - Go Packages](https://pkg.go.dev/fmt)
[Go 学习笔记：Println 与 Printf 的区别，以及 Printf 的详细用法\_zgh0711 的博客-CSDN 博客](https://blog.csdn.net/zgh0711/article/details/78843361)

```go
fmt.Printf("%T\n", variable)  // print type of variable

// The next line prints: coco
fmt.Printf("%[2]v%[1]v%[2]v%[1]v", "o", "c")
```

```txt
# General
%v the value in a default format
   when printing structs, the plus flag (%+v) adds field names
%#v a Go-syntax representation (with GoStringer interface, like Python's `__repr__`) of the value.
%T a Go-syntax representation of the type of the value

# %v default
bool:                    %t
int, int8 etc.:          %d
uint, uint8 etc.:        %d, %#x if printed with %#v
float32, complex64, etc: %g
string:                  %s
chan:                    %p
pointer:                 %p

# Boolean
%t the word true or false

# Integer
%b base 2
%c the character represented by the corresponding Unicode code point
%d base 10
%o base 8
%O base 8 with 0o prefix
%q a single-quoted character literal safely escaped with Go syntax.
%x base 16, with lower-case letters for a-f
%X base 16, with upper-case letters for A-F
%U Unicode format: U+1234; same as "U+%04X"

# Floating Point
%b decimalless scientific notation with exponent a power of two,
 in the manner of strconv.FormatFloat with the 'b' format,
 e.g. -123456p-78
%e scientific notation, e.g. -1.234456e+78
%E scientific notation, e.g. -1.234456E+78
%f decimal point but no exponent, e.g. 123.456
%F synonym for %f
%g %e for large exponents, %f otherwise. Precision is discussed below.
%G %E for large exponents, %F otherwise
%x hexadecimal notation (with decimal power of two exponent), e.g. -0x1.23abcp+20
%X upper-case hexadecimal notation, e.g. -0X1.23ABCP+20

%f     default width, default precision
%9f    width 9, default precision
%.2f   default width, precision 2
%9.2f  width 9, precision 2
%9.f   width 9, precision 0

# String/Slice of byte
%s the uninterpreted bytes of the string or slice
%q a double-quoted string safely escaped with Go syntax
%x base 16, lower-case, two characters per byte
%X base 16, upper-case, two characters per byte

# Slice
%p address of 0th element in base 16 notation, with leading 0x

# Pointer
%p base 16 notation, with leading 0x
The %b, %d, %o, %x and %X verbs also work with pointers,
formatting the value exactly as if it were an integer.
```

### Templates

[template package - text/template - Go Packages](https://pkg.go.dev/text/template)
[valyala/fasttemplate: Simple and fast template engine for Go](https://github.com/valyala/fasttemplate)

### HTTP client

[http package - net/http - Go Packages](https://pkg.go.dev/net/http)
[Go by Example: HTTP Client](https://gobyexample.com/http-client)
[An API client in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/api-client)

[Req - Simple Go HTTP client with Black Magic](https://req.cool/)
[imroc/req: Simple Go HTTP client with Black Magic](https://github.com/imroc/req)

[carlmjohnson/requests: HTTP requests for Gophers](https://github.com/carlmjohnson/requests)

[bozd4g/go-http-client: An enhanced http client for Golang](https://github.com/bozd4g/go-http-client)

### web

[This Go package was archived. What do we do now? - YouTube](https://www.youtube.com/watch?v=j584uJhWWhE)
compares Gin, Echo, Chi
[Gorilla Toolkit Open Source Project Becomes Abandonware - The New Stack](https://thenewstack.io/gorilla-toolkit-open-source-project-becomes-abandonware/)

[RESTful routing in Go](https://www.openmymind.net/RESTful-routing-in-Go/)
[Go actions responses](https://www.openmymind.net/Go-action-responses/)
[REST Servers in Go: Part 1 - standard library - Eli Bendersky's website](https://eli.thegreenplace.net/2021/rest-servers-in-go-part-1-standard-library/)

[rheinardkorf/go-api: A collection of Go API patterns. These are useful as a reference to quickly look up a pattern that you want to implement.](https://github.com/rheinardkorf/go-api)

[codazoda/https-basic-auth-go: A template for using HTTP Basic Authentication in Go](https://github.com/codazoda/https-basic-auth-go)

[speedwheel/awesome-go-web-frameworks: You may not need a web framework if you design a small application for yourself, but if you're going production then you definitely will need one, a good one.](https://github.com/speedwheel/awesome-go-web-frameworks)

[Golang: 6 must-have web frameworks for the Google Go language | InfoWorld](https://www.infoworld.com/article/3274464/web-development/6-must-have-web-frameworks-for-the-google-go-language.html)
[go-bootstrap: Generates a lean and mean Go web project](http://go-bootstrap.io/)

[swaggo/swag: Automatically generate RESTful API documentation with Swagger 2.0 for Go.](https://github.com/swaggo/swag) supports multiple frameworks
[Automatically generate RESTful API documentation in GoLang | by Santosh Shrestha | wesionaryTEAM | Medium](https://medium.com/wesionary-team/automatically-generate-restful-api-documentation-in-golang-76927f8f8935)

[Welcome - Fiber](https://docs.gofiber.io/) Express-inspired, `fasthttp`
[gofiber/fiber: ⚡️ Express inspired web framework written in Go](https://github.com/gofiber/fiber)
[gofiber/swagger: 🧬 fiber middleware to automatically generate RESTful API documentation with Swagger](https://github.com/gofiber/swagger)
[Create a Restful API with Golang from scratch - DEV Community](https://dev.to/pacheco/create-a-restful-api-with-golang-from-scratch-42g2)
[NEW FRAMEWORK Makes Remix And NextJS Feel Slow?? Fresh by Deno is FAST - YouTube](https://www.youtube.com/watch?v=1pcBlSGW_Sk)

[Flamingo: Blazingly fast frontends and web apps](https://www.flamingo.me/flamingo.html#Home)
[Flamingo Documentations](https://docs.flamingo.me/)
[i-love-flamingo/flamingo: Flamingo Framework and Core Library. Flamingo is a go based framework for pluggable web projects. It is used to build scalable and maintainable (web)applications.](https://github.com/i-love-flamingo/flamingo)
[i-love-flamingo/swagger: Adds Swagger UI (open API) support](https://github.com/i-love-flamingo/swagger)

[Echo - High performance, minimalist Go web framework](https://echo.labstack.com/) HTTP/2, auto TLS
[labstack/echo: High performance, minimalist Go web framework](https://github.com/labstack/echo)
[swaggo/echo-swagger: echo middleware to automatically generate RESTful API documentation with Swagger 2.0.](https://github.com/swaggo/echo-swagger)
[pangpanglabs/echoswagger: Swagger UI generator for Echo framework](https://github.com/pangpanglabs/echoswagger)

[savsgio/atreugo: High performance and extensible micro web framework. Zero memory allocations in hot paths.](https://github.com/savsgio/atreugo) `fasthttp`
[Nerzal/atreugo-swagger: swagger handler for atreugo](https://github.com/Nerzal/atreugo-swagger)

[goadesign/goa: Design-based APIs and microservices in Go](https://github.com/goadesign/goa)

[go-zero](https://go-zero.dev/) stack, API and RPC
[zeromicro/go-zero: go-zero is a web and rpc framework written in Go. It's born to ensure the stability of the busy sites with resilient design. Builtin goctl greatly improves the development productivity.](https://github.com/zeromicro/go-zero)
[熔断原理与实现 Golang 版 - InfoQ 写作平台](https://xie.infoq.cn/article/3b8bd23dd808e28b8e230d527)

[Getting Started | httpin Docs](https://ggicci.github.io/httpin/)

[valyala/fasthttp: Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http](https://github.com/valyala/fasthttp)
[panjf2000/gnet: 🚀 gnet is a high-performance, lightweight, non-blocking, event-driven networking framework written in pure Go./ gnet 是一个高性能、轻量级、非阻塞的事件驱动 Go 网络框架。](https://github.com/panjf2000/gnet)

[chi](https://go-chi.io/#/) routing, middleware, render and docgen

### web scraping

[antchfx/antch: Antch, a fast, powerful and extensible web crawling & scraping framework for Go](https://github.com/antchfx/antch) 😴inactive
[antchfx/antch-getstarted](https://github.com/antchfx/antch-getstarted)

[antchfx/htmlquery: htmlquery is golang XPath package for HTML query.](https://github.com/antchfx/htmlquery)
[antchfx/xpath: XPath package for Golang, supports HTML, XML, JSON document query.](https://github.com/antchfx/xpath)

[bitfield/weaver: A simple link checker in Go](https://github.com/bitfield/weaver) rate limiting

#### Goa Design

[Goa :: Design first.](https://goa.design/)
[Goa](https://github.com/goadesign)

#### Gin

[Gin Web Framework](https://gin-gonic.com/)
[gin-gonic/gin: Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin.](https://github.com/gin-gonic/gin)

[gin package - github.com/gin-gonic/gin - Go Packages](https://pkg.go.dev/github.com/gin-gonic/gin)
[gin-gonic/examples: A repository to host examples and tutorials for Gin.](https://github.com/gin-gonic/examples)

[swaggo/gin-swagger: gin middleware to automatically generate RESTful API documentation with Swagger 2.0.](https://github.com/swaggo/gin-swagger)
[Building microservices in Go with Gin - LogRocket Blog](https://blog.logrocket.com/building-microservices-go-gin/)
[Simple REST service in Golang with OpenAPI spec and ORM | by Tamas Ragoncsa | Dev Genius](https://blog.devgenius.io/simple-rest-service-in-golang-with-openapi-spec-and-orm-a447b1086e21) gin, viper, gorm, gin-swagger

- [validator](https://github.com/go-playground/validator)

#### Gower

[falling-ts/gower: Go 语言开发 Web 的一种快速启动目录，默认使用模板集成模式，非前后端分离。Go language development Web a quick start directory, the default use of template integration mode, not front-end separation.](https://github.com/falling-ts/gower)
[Home - Wiki - Gitee.com](https://gitee.com/falling-ts/gower/wikis/Home)

- based on Gin
- Laravel-inspires
- frontend packaging with Vite

#### Buffalo

[Buffalo - Rapid Web Development in Go](https://gobuffalo.io/en/)
[Buffalo - The Go Web Eco-System](https://github.com/gobuffalo?type=source)

[gobuffalo/plugins](https://github.com/gobuffalo/plugins)
[buffalo-cli/cli/internal/plugins at master · gobuffalo/buffalo-cli](https://github.com/gobuffalo/buffalo-cli/tree/master/cli/internal/plugins)
[swaggo/buffalo-swagger: Buffalo middleware to automatically generate RESTful API documentation with Swagger 2.0.](https://github.com/swaggo/buffalo-swagger)

#### Iris

[Iris Web Framework](https://iris-go.com/)
[kataras/iris: 感谢中国开发者 - https://bit.ly/謝謝 | The fastest community-driven web framework for Go. Webassembly, Automatic HTTPS with Public Domain, MVC, Sessions, Caching, Versioning API, Problem API, Websocket, Dependency Injection and more. Fully compatible with the standard library and 3rd-party middleware packages. | https://bit.ly/iriscandothat1 | https://bit.ly/iriscandothat3 |](https://github.com/kataras/iris)
[kataras/iris-cli: [WIP] Iris Command Line Interface](https://github.com/kataras/iris-cli)

### CLI

[Writing Friendly Command Line Applications | Gopher Academy Blog](https://blog.gopheracademy.com/advent-2019/cmdline/)
[Fun With Flags | Gopher Academy Blog](https://blog.gopheracademy.com/advent-2019/flags/)
[Building an Awesome CLI App in Go - OSCON 2017 - spf13.com](https://spf13.com/presentation/building-an-awesome-cli-app-in-go-oscon/)
[flag package - flag - pkg.go.dev](https://pkg.go.dev/flag) CLI args parser
[Writing Go CLIs With Just Enough Architecture · The Ethically-Trained Programmer](https://blog.carlmjohnson.net/post/2020/go-cli-how-to-and-advice/)

[Cobra. Dev](https://cobra.dev/)
[spf13/cobra: A Commander for modern Go CLI interactions](https://github.com/spf13/cobra)
[spf13/viper: Go configuration with fangs](https://github.com/spf13/viper)
[Building an Awesome CLI App in Go - OSCON 2017 - spf13.com](https://spf13.com/presentation/building-an-awesome-cli-app-in-go-oscon/) From slide 134

[gdamore/tcell: Tcell is an alternate terminal package, similar in some ways to termbox, but better in others.](https://github.com/gdamore/tcell)
[marcusolsson/tui-go: A UI library for terminal applications.](https://github.com/marcusolsson/tui-go)
[rivo/tview: Rich interactive widgets for terminal-based UIs written in Go](https://github.com/rivo/tview)

[Charm](https://charm.sh/)
[charmbracelet/charm: The Charm Tool and Library 🌟](https://github.com/charmbracelet/charm)
[charmbracelet/gum: A tool for glamorous shell scripts 🎀](https://github.com/charmbracelet/gum)
[charmbracelet/bubbles: TUI components for Bubble Tea 🍡](https://github.com/charmbracelet/bubbles)
[charmbracelet/bubbletea: A powerful little TUI framework 🏗](https://github.com/charmbracelet/bubbletea)

[hanslub42/rlwrap: A readline wrapper](https://github.com/hanslub42/rlwrap)

[muesli/termenv: Advanced ANSI style & color support for your terminal applications](https://github.com/muesli/termenv)

[AlecAivazis/survey: A golang library for building interactive prompts with full support for windows and posix terminals.](https://github.com/AlecAivazis/survey)

[urfave/cli: A simple, fast, and fun package for building command line apps in Go](https://github.com/urfave/cli)

[bitfield/script: Making it easy to write shell-like scripts in Go](https://github.com/bitfield/script)
[Scripting with Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/scripting)

[meowgorithm/babyenv: Go environment var parsing, for babies](https://github.com/meowgorithm/babyenv)

### GUI

[GUI - Awesome Go / Golang](https://awesome-go.com/gui/)

[Fyne](https://fyne.io/)
[Create GUI Apps with Go | Fyne Toolkit | Awesome Go - YouTube](https://www.youtube.com/watch?v=l9TGGU79Y04)

[Gio UI](https://gioui.org/)

### Resource embedding

[embed package - embed - pkg.go.dev](https://pkg.go.dev/embed)

[v0x.nl - Portable apps with Go and Next.js](https://v0x.nl/articles/portable-apps-go-nextjs)

[A better way than “ldflags” to add a build version to your Go binaries | by Andrew Hayes | Jan, 2022 | Level Up Coding](https://levelup.gitconnected.com/a-better-way-than-ldflags-to-add-a-build-version-to-your-go-binaries-2258ce419d2d)

```go
// get_version.sh will generate version.txt
//go:generate bash get_version.sh
//go:embed version.txt
var version string
```

```sh
go generate
go build -v
```

[GeertJohan/go.rice: go.rice is a Go package that makes working with resources such as html,js,css,images,templates, etc very easy.](https://github.com/GeertJohan/go.rice)

[gobuffalo/packr: The simple and easy way to embed static files into Go binaries.](https://github.com/gobuffalo/packr)
[Introducing Pkger — Static File Embedding in Go | by Mark Bates | Buffalo — Rapid Web Development in Go](https://blog.gobuffalo.io/introducing-pkger-static-file-embedding-in-go-1ce76dc79c65)

### Database/ORM

[sql - The Go Programming Language](https://go.dev/pkg/database/sql/)
[Go database/sql tutorial](http://go-database-sql.org/index.html)
[go-pg/pg: Golang ORM with focus on PostgreSQL features and performance](https://github.com/go-pg/pg)

[jmoiron/sqlx: general purpose extensions to golang's database/sql](https://github.com/jmoiron/sqlx)

[rocketlaunchr/dbq: Zero boilerplate database operations for Go](https://github.com/rocketlaunchr/dbq)

[GORM - The fantastic ORM library for Golang, aims to be developer friendly.](https://gorm.io/)

[Working with SQLite using Go and Python](https://www.ardanlabs.com/blog/2020/11/working-with-sqlite-using-go-python.html)

[A Billion Dollar Go Mistake | Neenad Ingole | ITNEXT](https://itnext.io/a-billion-dollar-go-mistake-820338199998) proper transaction

- rollback in `defer` with error check (more boilerplate)
- can use service layer to abstract that logic

### RPC

[RPCX](https://rpcx.io/)

[Quick start | Go | gRPC](https://grpc.io/docs/languages/go/quickstart/)
[grpc package - google.golang.org/grpc - Go Packages](https://pkg.go.dev/google.golang.org/grpc)

### Log

[Send Logs from Go to Logstash in the ELK Stack with Docker Setup - DEV Community](https://dev.to/karanjagtiani/send-logs-from-go-to-logstash-in-the-elk-stack-with-docker-setup-16eo)

### Clipboard

[golang-design/clipboard: 📋 cross-platform clipboard package that supports accessing text and image in Go (macOS/Linux/Windows/Android/iOS)](https://github.com/golang-design/clipboard)
[changkun/midgard: ⛰️ Universal clipboard sharing service (supports macOS/Linux/Windows/iOS)](https://github.com/changkun/midgard)

## Installed Packages

With Docker:
[Go + Docker = ♥](https://jpetazzo.github.io/2016/09/09/go-docker/)

# Learn

## Official

[Documentation - The Go Programming Language](https://go.dev/doc/)
[The Go Programming Language Specification - The Go Programming Language](https://go.dev/ref/spec)
[DevDocs/Go](https://devdocs.io/go/) standard library

[Talks - The Go Programming Language](https://go.dev/talks/)

[Get Started - go.dev](https://go.dev/learn/)
[A Tour of Go](https://go.dev/tour/), [solutions](https://github.com/golang/tour/tree/master/solutions)
[How to Write Go Code - The Go Programming Language](https://go.dev/doc/code)
[Effective Go - The Go Programming Language](https://go.dev/doc/effective_go)
[Frequently Asked Questions (FAQ) - The Go Programming Language](https://go.dev/doc/faq)
[Home · golang/go Wiki](https://github.com/golang/go/wiki)
[quii/learn-go-with-tests: Learn Go with test-driven development](https://github.com/quii/learn-go-with-tests)

[The How and Why of Go, Part 1: Tooling](https://okigiveup.net/tutorials/the-how-and-why-of-go-part-1-tooling/)
[Go Dynamic Tools](https://go.dev/talks/2015/dynamic-tools.slide)

[Advanced Golang - YouTube](https://www.youtube.com/playlist?list=PLKOhSssLmvQQPFv-QqbRZ10rn3UdBLvVC) Code With Ryan

[Golang University 101 - Learn Golang - YouTube](https://www.youtube.com/playlist?list=PLEcwzBXTPUE9V1o8mZdC9tNnRZaTgI-1P)
[Golang UK Conference 2015 - Andrew Gerrand - Stupid Gopher Tricks - YouTube](https://www.youtube.com/watch?v=UECh7X07m6E) [slides](https://go.dev/talks/2015/tricks.slide)

## Bitfield Consulting

[Bitfield Consulting](https://bitfieldconsulting.com/)
[bitfield (bitfield) / Repositories](https://github.com/bitfield?tab=repositories&type=source)
[Let's Code - YouTube](https://www.youtube.com/playlist?list=PLEcwzBXTPUE_vweMi8hOxiz6lj_A_-0HQ)

[The Tao of Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/tao-of-go)
[Ten commandments of Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/commandments)
[So you're ready for green belt? — Bitfield Consulting](https://bitfieldconsulting.com/golang/green-belt)

## Design

Golang `map[string]struct{}` can be used as a Set type where every element is unique.

[Go at Google: Language Design in the Service of Software Engineering - go.dev](https://go.dev/talks/2012/splash.article)
[Analysis of the Go runtime scheduler](http://www1.cs.columbia.edu/~aho/cs6998/reports/12-12-11_DeshpandeSponslerWeiss_GO.pdf)
[Scalable Go Scheduler Design Doc - Google Docs](https://docs.google.com/document/d/1TTj4T2JO42uD5ID9e89oa0sLKhJYD0Y_kqxDv3I3XMw/edit)

[The Why of Go - YouTube](https://www.youtube.com/watch?v=bmZNaUcwBt4)

[Keeping up with the Gophers](https://go.dev/talks/2015/keeping-up.slide#1)

[Principles of designing Go APIs with channels - inconshreveable](https://inconshreveable.com/07-08-2014/principles-of-designing-go-apis-with-channels/)

[GopherCon 2015: Andrew Gerrand - Closing Keynote - YouTube](https://www.youtube.com/watch?v=0ht89TxZZnk) [How Go was made](https://go.dev/talks/2015/how-go-was-made.slide#2)

## Data Structures

[research!rsc: Go Data Structures](https://research.swtch.com/godata)
[research!rsc: Data Structures Go Programs](https://research.swtch.com/godata2)

[Arrays, Slices and Maps in Go -Go 101](https://go101.org/article/container.html)

[The results of `reflect.DeepEqual(x, y)` and `x == y` may be different. -Go 101](https://go101.org/article/details.html#reflect-deep-equal)

Function values are equal only if both are nil and their types are identical.

[Building A Queue - Part 1](https://www.openmymind.net/Building-A-Queue-Part-1/)
[Building A Queue - Part 2](https://www.openmymind.net/Building-A-Queue-Part-2/)
[Building A Queue - Part 3](https://www.openmymind.net/Building-A-Queue-Part-3/)
[Building A Queue - Part 4](https://www.openmymind.net/Building-A-Queue-Part-4/)

### `new()` and `make()`

[allocation - Effective Go - The Go Programming Language](https://go.dev/doc/effective_go#allocation_new)

`new(T)` allocates zeroed storage for a new item of type `T` and returns its address, a value of type `*T`
Convension of `func newFile(path str) *File` can be used for constructor
`make(T, args)` creates _slices_, _maps_, and _channels_ only, and it returns an initialized (not zeroed) value of type `T` (not `*T`).

### Array/Slices

[Arrays, slices (and strings): The mechanics of 'append' - go.dev](https://go.dev/blog/slices)
[Go Slices: usage and internals - go.dev](https://go.dev/blog/slices-intro)

### Maps

[Go maps in action - go.dev](https://go.dev/blog/maps)

[Maps -Go 101](https://go101.org/optimizations/6-map.html)

- using pointers (`string` included) in key/value adds pressure to GC
- `delete(m. key)` will not free up the backing array

[map — Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/tag/map)
[Go maps FAQ — Bitfield Consulting](https://bitfieldconsulting.com/golang/map-faq)

[dictionary - Computing the memory footprint (or byte length) of a map - Stack Overflow](https://stackoverflow.com/questions/31847549/computing-the-memory-footprint-or-byte-length-of-a-map) 2015

### Struct

[Structs in Go -Go 101](https://go101.org/article/struct.html)

```go
type S = struct {
 X byte
 _ [7]byte  // blank field for padding
 Y int32
}
```

## Videos

[The Go Programming Language - YouTube](https://www.youtube.com/watch?v=rKnDgT73v8s&feature=related) Rob Pike 2009
[Go Programming - YouTube](https://www.youtube.com/watch?v=CF9S4QZuV30)
[Go Language Programming Practical Basics Tutorial - YouTube](https://www.youtube.com/playlist?list=PLQVvvaa0QuDeF3hP0wQoSxpkqgRcgxMqX)
[Go Programming Language Tutorials - Todd McLeod - YouTube](https://www.youtube.com/playlist?list=PL6cactdCCnTI1RH7kGY7nGT13gj6yMzvX)
[Writing, building, installing, and testing Go code - YouTube](https://www.youtube.com/watch?v=XCsL89YtqCs)
[Google I/O 2011: Writing Web Apps in Go - YouTube](https://www.youtube.com/watch?v=-i0hat7pdpk&feature=relmfu)
[Learn Go Programming by Building 11 Projects – Full Course - YouTube](https://www.youtube.com/watch?v=jFfo23yIWac) 8:24:39

[Golang Dojo - YouTube](https://www.youtube.com/channel/UCEXtPiqFrcdzFRKqwazI1NA)

## Playground

[Go Playground - The Go Programming Language](https://go.dev/play/)
[Introducing the Go Playground - The Go Programming Language](https://go.dev/blog/playground-intro)
[Inside the Go Playground - go.dev](https://go.dev/blog/playground)

[Better Go Playground](https://goplay.tools/)

[DevBits Playground](https://devbits.app/play)

## Whitepaper

> collection of whitepaper-ish articles in Go Blog

[Article index - go.dev](https://go.dev/blog/all)
[Text normalization in Go - go.dev](https://go.dev/blog/normalization)
[Strings, bytes, runes and characters in Go - go.dev](https://go.dev/blog/strings)
[Gobs of data - go.dev](https://go.dev/blog/gob)
[JSON and Go - go.dev](https://go.dev/blog/json)
[Go's Declaration Syntax - go.dev](https://go.dev/blog/declaration-syntax)

## Book

[Books · golang/go Wiki · GitHub](https://github.com/golang/go/wiki/Books)

[dariubs/GoBooks: List of Golang books](https://github.com/dariubs/GoBooks)
[stormtrooper96/books](https://github.com/stormtrooper96/books)

[Go Bootcamp | Softcover.io](http://www.golangbootcamp.com/book/_single-page) ❗!important, concise, reference to official doc
[Go 101 - Go 101: an online Go programming book + knowledge base](https://go101.org/article/101.html) ❗!important
[An Introduction to Programming in Go | Go Resources](http://www.golang-book.com/books/intro)
[Introducing Go -O'Reilly Media](http://shop.oreilly.com/product/0636920046516.do)
[The Little Go Book](https://www.openmymind.net/The-Little-Go-Book/)
[karlseguin/the-little-go-book](https://github.com/karlseguin/the-little-go-book)

[开源图书在线阅读 - Go 语言中文网 - Golang 中文社区](https://books.studygolang.com/)

## Third party

[10 Free Resources To Learn Go Programming Language](https://analyticsindiamag.com/10-free-resources-to-learn-go-programming-language/amp/)
[The Top 10 Places to Learn Go - DEV Community 👩‍💻👨‍💻](https://dev.to/pluralsight/the-top-10-places-to-learn-go-3lhp)
[Golang Tutorial Guide - A List of Free Courses to Learn the Go Programming Language](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/amp/)
[cdarwin/go-koans: koans for go](https://github.com/cdarwin/go-koans)
[Aniket762/namaste-go: A repository to learn the basics of Go Programming.](https://github.com/Aniket762/namaste-go)
[Golang-challenge - We offers the best mobile tutorials for android and ios devices.](https://golang-challenge.com/)
[Gophercises - Coding exercises for budding gophers](https://gophercises.com/)
[Golang examples and solutions from different packages of the standard library. - golangprograms.com](https://www.golangprograms.com/golang-package-examples.html)
[Go · How I Start.](https://howistart.org/posts/go/1/)

[Go by Example](https://gobyexample.com/)
[Golang Advanced Tutorial - Welcome To Golang By Example](https://golangbyexample.com/golang-comprehensive-tutorial/)
[Go 101 -Go 101](https://go101.org/article/101.html)
[Learn Go in Y Minutes](http://learnxinyminutes.com/docs/go/)
[GoLang Tutorials](http://golangtutorials.blogspot.hk/2011/05/table-of-contents.html)
[Go on Exercism](https://exercism.org/tracks/go)
[GopherCasts](https://gophercasts.io/)
[Home - Practical Go Lessons Book](https://www.practical-go-lessons.com/)
[Gopher Academy Blog](https://blog.gopheracademy.com/)
[Go (Golang) Programming Blog - Ardan Labs](https://www.ardanlabs.com/blog/)
[Learn Go Programming: A Tutorial with Code Examples | Toptal](https://www.toptal.com/go/go-programming-a-step-by-step-introductory-tutorial)
[Go Language Patterns](http://www.golangpatterns.info/)
[Go go-to guide · YourBasic](https://yourbasic.org/golang/)
[Golang tutorial: Table Of Contents](https://golangbot.com/learn-golang-series/)
[Go Code Tutorials by Envato Tuts+](https://code.tutsplus.com/categories/go)
[Getting started with Go for frontend developers - LogRocket Blog](https://blog.logrocket.com/getting-started-with-go-for-frontend-developers/)
[Practical Go | Dave Cheney](https://dave.cheney.net/practical-go)
[Let's Eat GO ! 實務開發雜談 by Golang :: 第 11 屆 iThome 鐵人賽](https://ithelp.ithome.com.tw/users/20080192/ironman/2194)
[golang](https://freshman.tech/tags/golang/) snippets

[Applied Go · Applied Go](https://appliedgo.net/)
[Programming with Google Go | Coursera](https://www.coursera.org/specializations/google-golang)

[aodin/golang-for-pythonistas: Advanced topics for Python programmers looking to use Go](https://github.com/aodin/golang-for-pythonistas)

[Golang for JavaScript developers - Part 1 - DEV Community 👩‍💻👨‍💻](https://dev.to/deepu105/golang-for-javascript-developers-part-1-38je)
[Golang for JavaScript developers - Part 2 - DEV Community 👩‍💻👨‍💻](https://dev.to/deepu105/golang-for-javascript-developers-part-2-p3p)

[mholt/meetupchat: Simple chat using TCP, as a quick workshop for beginner (Go) programmers](https://github.com/mholt/meetupchat)

[The Go Blog - go.dev](https://go.dev/blog/)
[Go | Dave Cheney](https://dave.cheney.net/category/golang)
[Go (Golang) Programming Blog - Ardan Labs](https://www.ardanlabs.com/categories/go-programing/)
[Golang Development | TutorialEdge.net](https://tutorialedge.net/golang/)

## Internals

[src/ - go.dev](https://go.dev/src/)

[Scheduling In Go : Part I - OS Scheduler](https://www.ardanlabs.com/blog/2018/08/scheduling-in-go-part1.html)
[Scheduling In Go : Part II - Go Scheduler](https://www.ardanlabs.com/blog/2018/08/scheduling-in-go-part2.html)
[Scheduling In Go : Part III - Concurrency](https://www.ardanlabs.com/blog/2018/12/scheduling-in-go-part3.html)

### defer

[research!rsc: Broken abstractions in Go](https://research.swtch.com/goabstract) `go` and `defer` implementation
[Demystifying 'defer' — Bitfield Consulting](https://bitfieldconsulting.com/golang/defer)
[Don't defer Close() on writable files – joe shaw](https://www.joeshaw.org/dont-defer-close-on-writable-files/)

## `==`

> How `==` works?

```go
var a, b interface{} = []int{1, 2}, []int{1, 2}
fmt.Println(reflect.DeepEqual(a, b)) // true
fmt.Println(a == b)                  // panic
```

`x == y` will panic if the two operands are both interface values and their dynamic types are _identical_ and _incomparable_.

```go
var s2 = "abc"[0:0]
fmt.Println(s2 == "") // true
fmt.Println(*(*uintptr)(unsafe.Pointer(&s2))) // 4869856
fmt.Println(s1 == s2) // true
```

```go
func returnsError() error {
 var p *MyError = nil
 if bad() {
  p = ErrBad
 }
 return p // Will always return a non-nil error.
}
```

Following types don't support comparisons:

- map
- slice
- function
- struct types containing incomparable fields
- array types with incomparable element types

Types which don't support comparisons can't be used as the key type of map types.

Please note,

- although map, slice and function types don't support comparisons, their values can be compared to the bare `nil` identifier.
- [comparing two interface values](https://go101.org/article/interface.html#comparison) with `==` will panic at run time if the two dynamic types of the two interface values are identical and incomparable.

On why slice, map and function types don't support comparison, please read [this answer](https://go.dev/doc/faq#map_keys) in the official Go FAQ.

### Memory

[The Go Memory Model - The Go Programming Language](https://go.dev/ref/mem)
[research!rsc: Memory Models](https://research.swtch.com/mm)
[go 内存管理 | 李乾坤的博客](https://qiankunli.github.io/2020/11/22/go_mm.html)
[Memory Layouts -Go 101](https://go101.org/article/memory-layout.html)
[Memory Blocks -Go 101](https://go101.org/article/memory-block.html)
[A visual guide to Go Memory Allocator from scratch (Golang) | by Ankur Anand | Medium](https://medium.com/@ankur_anand/a-visual-guide-to-golang-memory-allocator-from-ground-up-e132258453ed)
[🚀 Visualizing memory management in Golang | Technorage](https://deepu.tech/memory-management-in-golang/)

[Getting to Go: The Journey of Go's Garbage Collector - go.dev](https://go.dev/blog/ismmkeynote)
[Go GC: Prioritizing low latency and simplicity - go.dev](https://go.dev/blog/go15gc)
[A Guide to the Go Garbage Collector - The Go Programming Language](https://go.dev/doc/gc-guide) 1.19
[Go’s march to low-latency GC — Twitch Blog](https://blog.twitch.tv/gos-march-to-low-latency-gc-a6fa96f06eb7)

[Garbage Collection In Go : Part I - Semantics](https://www.ardanlabs.com/blog/2018/12/garbage-collection-in-go-part1-semantics.html)
[Garbage Collection In Go : Part II - GC Traces](https://www.ardanlabs.com/blog/2019/05/garbage-collection-in-go-part2-gctraces.html)
[Garbage Collection In Go : Part III - GC Pacing](https://www.ardanlabs.com/blog/2019/07/garbage-collection-in-go-part3-gcpacing.html)

[Manual Memory Management in Go using jemalloc - Dgraph Blog](https://dgraph.io/blog/post/manual-memory-management-golang-jemalloc/)

## Receivers

[Methods - Effective Go - The Go Programming Language](https://go.dev/doc/effective_go#methods)
[Should I define methods on values or pointers? - The Go Programming Language](https://go.dev/doc/faq#methods_on_values_or_pointers)

[Neither self nor this: Receivers in Go | Heroku](https://blog.heroku.com/neither-self-nor-this-receivers-in-go)
[Don't Get Bitten by Pointer vs Non-Pointer Method Receivers in Golang | I care, I share, I'm Nathan LeClaire.](https://nathanleclaire.com/blog/2014/08/09/dont-get-bitten-by-pointer-vs-non-pointer-method-receivers-in-golang/)

## Concurrency

[[learn-to-code#Concurrency and Parallelism]]

[Concurrency is not parallelism - go.dev](https://go.dev/blog/waza-talk)
[Advanced Go Concurrency Patterns - go.dev](https://go.dev/blog/io2013-talk-concurrency)
[Go Concurrency Patterns: Pipelines and cancellation - go.dev](https://go.dev/blog/pipelines)
[Go Concurrency Patterns: Timing out, moving on - go.dev](https://go.dev/blog/go-concurrency-patterns-timing-out-and)

[Concurrency is not Parallelism by Rob Pike - YouTube](https://www.youtube.com/watch?v=oV9rvDllKEg) [slides](https://go.dev/talks/2012/waza.slide)
[Go: code that grows with grace on Vimeo](https://vimeo.com/53221560) [slides](https://go.dev/talks/2012/chat.slide) using channels for chat, copy interface, matcher
[Google I/O 2012 - Go Concurrency Patterns - YouTube](https://www.youtube.com/watch?v=f6kdp27TYZs) [slides](https://go.dev/talks/2012/concurrency.slide)
[Google I/O 2013 - Advanced Go Concurrency Patterns - YouTube](https://www.youtube.com/watch?v=QDDwwePbDtw) [slide](https://go.dev/talks/2013/advconc.slide)
[Concurrency Patterns In Go - YouTube](https://www.youtube.com/watch?v=YEKjSzIwAdA)
[Master Go Programming With These Concurrency Patterns (in 40 minutes) - YouTube](https://www.youtube.com/watch?v=qyM8Pi1KiiM)
[Concurrency Made Easy (Practical Tips For Effective Concurrency In Go) - YouTube](https://www.youtube.com/watch?v=DqHb5KBe7qI)
[dotgo applied concurrency in go](https://matt.aimonetti.net/posts/2015-12-dotgo-applied-concurrency-in-go/)
[On using Go channels like Python generators · The Ethically-Trained Programmer](https://blog.carlmjohnson.net/post/on-using-go-channels-like-python-generators/)
[Locks versus channels in concurrent Go | Opensource.com](https://opensource.com/article/18/7/locks-versus-channels-concurrent-go)

use `chan struct{}` to signify that this is a channel for event/signal

[Curious Channels | Dave Cheney](https://dave.cheney.net/2013/04/30/curious-channels)
[Channel Axioms | Dave Cheney](https://dave.cheney.net/2014/03/19/channel-axioms)

[Go Concurrency from the Ground Up | doxsey.net](https://www.doxsey.net/blog/go-concurrency-from-the-ground-up/)
[Visualizing Concurrency in Go · divan's blog](http://divan.github.io/posts/go_concurrency_visualize/)
[Goroutine IDs · Scott Mansfield](http://blog.sgmansfield.com/2015/12/goroutine-ids/)
[Share Memory By Communicating - go.dev](https://go.dev/blog/codelab-share)
[Codewalk: Share Memory By Communicating - go.dev](https://go.dev/doc/codewalk/sharemem/)
[Share memory by communicating · The Ethically-Trained Programmer](https://blog.carlmjohnson.net/post/share-memory-by-communicating/)

[The Behavior Of Channels](https://www.ardanlabs.com/blog/2017/10/the-behavior-of-channels.html)
[Goroutine Leaks - The Forgotten Sender](https://www.ardanlabs.com/blog/2018/11/goroutine-leaks-the-forgotten-sender.html)
[Goroutine Leaks - The Abandoned Receivers](https://www.ardanlabs.com/blog/2018/12/goroutine-leaks-the-abandoned-receivers.html)
[Concurrency Trap #2: Incomplete Work](https://www.ardanlabs.com/blog/2019/04/concurrency-trap-2-incomplete-work.html)

[An Intro to Concurrency Patterns in Go - via @codeship | via @codeship](http://blog.codeship.com/an-intro-to-concurrency-patterns-in-go/)
[Concurrency in Go Part II - via @codeship | via @codeship](https://blog.codeship.com/concurrency-in-go-part-ii/)
[Patterns for scalable web services in Go](https://rcrowley.org/talks/strange-loop-2013.html)

[Go Microservices blog series, part 1. | Callista Enterprise](http://callistaenterprise.se/blogg/teknik/2017/02/17/go-blog-series-part1/)

[go - Multiple goroutines listening on one channel - Stack Overflow](https://stackoverflow.com/questions/15715605/multiple-goroutines-listening-on-one-channel)
[rheinardkorf/go-concurrency: A collection of Go concurrency patterns. These are useful as a reference to quickly look up a pattern that you want to implement.](https://github.com/rheinardkorf/go-concurrency)

[Introduction to Go - let's build a network application! | Go User Group Berlin](http://synflood.at/tmp/golang-slides/mrmcd2012.html)
[Directional Channels in Go | Gopher Academy Blog](https://blog.gopheracademy.com/advent-2019/directional-channels/)

### Context

[context package - context - pkg.go.dev](https://pkg.go.dev/context)

[Go Concurrency Patterns: Context - go.dev](https://go.dev/blog/context)
[Context Package Semantics In Go](https://www.ardanlabs.com/blog/2019/09/context-package-semantics-in-go.html)

[Context is for cancelation | Dave Cheney](https://dave.cheney.net/2017/01/26/context-is-for-cancelation)
[Context isn’t for cancellation | Dave Cheney](https://dave.cheney.net/2017/08/20/context-isnt-for-cancellation)

- `context.Value()` is goroutine thread local storage
- `context.Background()` returns a non-nil, empty Context that has no values and no deadline
- used by `rate` for rate limiting

### Data Race

[Introducing the Go Race Detector - go.dev](https://go.dev/blog/race-detector)
[Data races explained · YourBasic Go](https://yourbasic.org/golang/data-races-explained/)
[Data races in Go(Golang) and how to fix them](https://www.sohamkamani.com/golang/data-races/)
[Wednesday pop quiz: spot the race | Dave Cheney](https://dave.cheney.net/2015/11/18/wednesday-pop-quiz-spot-the-race)
[谈谈 Golang 中的 Data Race - poslua | ms2008 Blog](https://ms2008.github.io/2019/05/12/golang-data-race/)

## Date time

[time package - time - pkg.go.dev](https://pkg.go.dev/time)
[time package - Duration - pkg.go.dev](https://pkg.go.dev/time?utm_source=godoc#Duration)

Use reference time (`2006-01-02T15:04:05Z07:00`) to define layout
[src/time/format.go - The Go Programming Language](https://go.dev/src/time/format.go)

[Time Conversion in Go (Golang) - Welcome To Golang By Example](https://golangbyexample.com/time-conversion-in-golang/)

## regex

[[regex#Go]]

## Typing/Reflection

[Go Type System Overview -Go 101](https://go101.org/article/type-system-overview.html)
[Value Conversion, Assignment and Comparison Rules in Go -Go 101](https://go101.org/article/value-conversions-assignments-and-comparisons.html)

```go
var x any
//...
// note: there's no `fallthrough` in type swtich
switch i := x.(type) {
case int:
    fmt.Printf("x is an integer: %d\n", i)
case string:
    fmt.Printf("x is a string: %q\n", i)
case nil:
    fmt.Println("x is nil")
default:
    fmt.Println("x is some other type")
}
```

[reflect package - reflect - pkg.go.dev](https://pkg.go.dev/reflect)
[Effective Go - go.dev](https://go.dev/doc/effective_go#type_switch) Type switch/guard with type `T.(type)`
[The Laws of Reflection - go.dev](https://go.dev/blog/laws-of-reflection)
[A GIF decoder: an exercise in Go interfaces - go.dev](https://go.dev/blog/gif-decoder-exercise-in-go-interfaces)

[research!rsc: Go Data Structures: Interfaces](https://research.swtch.com/interfaces)
[How to use interfaces in Go - jordan orelli](https://jordanorelli.com/post/32665860244/how-to-use-interfaces-in-go)
[Reflection in Go: Use cases and tutorial - LogRocket Blog](https://blog.logrocket.com/reflection-go-use-cases-tutorial/)
[reflection - How get pointer of struct's member from interface{} - Stack Overflow](https://stackoverflow.com/questions/27992821/how-get-pointer-of-structs-member-from-interface)

Under the covers, interfaces are implemented as two elements, a type T and a value V.
An interface value is `nil` only if the `V` and `T` are both unset, (`T=nil`, `V` is not set), In particular, a `nil` interface will always hold a `nil` type. If we store a `nil` pointer of type `*int` inside an interface value, the inner type will be `*int` regardless of the value of the pointer: (`T=*int`, `V=nil`). Such an interface value will therefore be non-`nil` _even when the pointer value `V` inside is_ `nil`.

```go
var r io.Reader
tty, err := os.OpenFile("/dev/tty", os.O_RDWR, 0)
r = tty

var w io.Writer
w = r.(io.Writer)  // type assertion
```

Type assertion is applicable to interface when you know the concrete type.
Type assertion is performed at runtime.
[Effective Go - go.dev](https://go.dev/doc/effective_go#interface_conversions)
[go - What is the difference between type conversion and type assertion? - Stack Overflow](https://stackoverflow.com/questions/20494229/what-is-the-difference-between-type-conversion-and-type-assertion)
[Type Assertions vs Type Conversions in Golang](https://www.sohamkamani.com/golang/type-assertions-vs-type-conversions/)

## Pointer

[Don't fear the pointer — Bitfield Consulting](https://bitfieldconsulting.com/golang/pointers)

```go
// `unsafe.Pointer` for casting
x := 12
p := unsafe.Pointer(&x)
y := (*float64)(p)
fmt.Printf("%T\n", y)
// *float64
```

## Generics

> generics landed in Go 1.18 in 2022-03

[Generics can make your Go code slower](https://planetscale.com/blog/generics-can-make-your-go-code-slower)
[On Go's Generics Implementation and Performance](https://www.infoq.com/news/2022/04/go-generics-performance/)

[samber/lo: 💥 A Lodash-style Go library based on Go 1.18+ Generics (map, filter, contains, find...)](https://github.com/samber/lo)

[spec: add generic programming using type parameters · Issue #43651 · golang/go](https://github.com/golang/go/issues/43651)
[Type Parameters Proposal](https://go.googlesource.com/proposal/+/refs/heads/master/design/43651-type-parameters.md)

[Why Generics? - The Go Programming Language](https://go.dev/blog/why-generics)
[An Introduction To Generics - The Go Programming Language](https://go.dev/blog/intro-generics)
[Tutorial: Getting started with generics - The Go Programming Language](https://go.dev/doc/tutorial/generics)
[[ generics] Moving forward with the generics design draft](https://groups.google.com/g/golang-nuts/c/iAD0NBz3DYw/m/VcXSK55XAwAJ)
[Generics and parentheses](https://groups.google.com/g/golang-nuts/c/7t-Q2vt60J8/m/daacBE2tBQAJ?pli=1)
[Summary of Go Generics Discussions](https://docs.google.com/document/d/1vrAy9gMpMoS3uaVphB32uVXX4pi-HnNjkMEgyAHX4N4/mobilebasic)

[Go Generics 101 -Go 101](https://go101.org/generics/101.html)
[Generics in Go Explained with Code Examples](https://www.freecodecamp.org/news/generics-in-golang/)

[Type parameters in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/type-parameters)
[Generics in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/generics)
[Functional programming in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/functional)
[A generic Set type in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/generic-set)

[Generics Part 01: Basic Syntax](https://www.ardanlabs.com/blog/2020/07/generics-01-basic-syntax.html)
[Generics Part 02: Underlying Types](https://www.ardanlabs.com/blog/2020/08/generics-02-underlying-types.html)
[Generics Part 03: Struct Types and Data Semantics](https://www.ardanlabs.com/blog/2020/09/generics-03-struct-types-and-data-semantics.html)

[Who needs generics? Use ... instead! · Applied Go](https://appliedgo.net/generics/)

[What’s New in Go 1.20, Part I: Language Changes · The Ethically-Trained Programmer](https://blog.carlmjohnson.net/post/2023/golang-120-language-changes/) fix `comparable` type

## Decorators

[Go 语言的修饰器编程 | | 酷 壳 - CoolShell](https://coolshell.cn/articles/17929.html)

## Testing

```sh
# skip test cache
go test -count=1
```

[testing package - testing - Go Packages](https://pkg.go.dev/testing)

[Testing and Test-Driven-Development in Snap — Intel SDI — Medium](https://medium.com/intel-sdi/testing-and-test-driven-development-in-snap-d66359485561#.oc123kqcq)
[Testing and Test Driven Development in Snap (Part 2) — Intel SDI — Medium](https://medium.com/intel-sdi/testing-and-test-driven-development-in-snap-part-2-6304effa6b22#.ufy3wul7t)

[Getting Started In Testing Your Go Application | Toptal](https://www.toptal.com/go/your-introductory-course-to-testing-with-go)

[Go Testing with Test Driven Development - DEV Community](https://dev.to/eternaldev/go-testing-with-test-driven-development-c88)
[Writing table driven tests in Go | Dave Cheney](https://dave.cheney.net/2013/06/09/writing-table-driven-tests-in-go)

[An Introduction to Testing in Go | TutorialEdge.net](https://tutorialedge.net/golang/intro-testing-in-go/)
[Advanced Go Testing Tutorial | TutorialEdge.net](https://tutorialedge.net/golang/advanced-go-testing-tutorial/)
[Improving Your Go Tests and Mocks With Testify | TutorialEdge.net](https://tutorialedge.net/golang/improving-your-tests-with-testify-go/)

[Integration Testing in Go: Part I - Executing Tests with Docker](https://www.ardanlabs.com/blog/2019/03/integration-testing-in-go-executing-tests-with-docker.html)
[Integration Testing in Go: Part II - Set-up and Writing Tests](https://www.ardanlabs.com/blog/2019/10/integration-testing-in-go-set-up-and-writing-tests.html)
[george-e-shaw-iv/integration-tests-example: An example project showcasing how Ardan Labs writes integration tests](https://github.com/george-e-shaw-iv/integration-tests-example)

[astubbs/testdox: TestDox creates simple documentation from the method names in JUnit test cases.](https://github.com/astubbs/testdox)
[bitfield/gotestdox: Show Go test results as readable sentences](https://github.com/bitfield/gotestdox)

[Test-driven development with Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/tdd)
[Random testing in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/random-testing)
[Fuzz tests in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/fuzz-tests)
[Writing a Go fuzz target — Bitfield Consulting](https://bitfieldconsulting.com/golang/fuzz-target)

### testscript

[testscript package - github.com/rogpeppe/go-internal/testscript - Go Packages](https://pkg.go.dev/github.com/rogpeppe/go-internal/testscript)
[Test scripts in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/test-scripts) series

## Tips and Tricks

[The Zen of Go](https://the-zen-of-go.netlify.app/)
[The Zen of Go / Dave Cheney - YouTube](https://www.youtube.com/watch?v=yd_rtwYaXps)
[The Zen of Go with Dave Cheney (Go Time #122) |> Changelog](https://changelog.com/gotime/122)

[Golang UK Conference 2016 - Mat Ryer - Idiomatic Go Tricks - YouTube](https://www.youtube.com/watch?v=yeetIgNeIkc)

[Go Proverbs](https://go-proverbs.github.io/)
[Go Proverbs - Rob Pike - Gopherfest - November 18, 2015 - YouTube](https://www.youtube.com/watch?v=PAAkCSZUG1c)

[Organizing Go code - go.dev](https://go.dev/blog/organizing-go-code)
[Go best practices, six years in](http://peter.bourgon.org/go-best-practices-2016/)
[Golang 新手开发需要注意的七个细节 |虞双齐的博客](https://www.yushuangqi.com/blog/2015/7_things-you-may-not-pay-attation-to-in-go.html)
[when nil is not nil - spf13.com](http://spf13.com/post/when-nil-is-not-nil/)
[7 common mistakes in Go (2015) - spf13.com](http://spf13.com/presentation/7-common-mistakes-in-go-2015/)
[★ Ultimate Visual Guide to Go Enums ★ - Learn Go Programming](https://blog.learngoprogramming.com/golang-const-type-enums-iota-bc4befd096d3)
[Trying Clean Architecture on Golang - Hacker Noon](https://hackernoon.com/golang-clean-archithecture-efd6d7c43047)
[The ultimate guide to writing a Go tool · Fatih Arslan](https://arslan.io/2017/09/14/the-ultimate-guide-to-writing-a-go-tool/)

[Go FAQ 101 - Go 101: an online Go programming book + knowledge base](https://go101.org/article/unofficial-faq.html)
[Go Tips 101 -Go 101](https://go101.org/article/tips.html)
[Go Details 101 -Go 101](https://go101.org/article/details.html)
[Go Details & Tips 101 -Go 101](https://go101.org/details-and-tips/101.html)

[The Top 10 Most Common Mistakes I’ve Seen in Go Projects](https://itnext.io/the-top-10-most-common-mistakes-ive-seen-in-go-projects-4b79d4f6cd65)
The part that passing 0.3KB data by value is faster than by reference is surprising

[Lessons learned from programming in Go | Opensource.com](https://opensource.com/article/19/12/go-common-pitfalls)
[7 common mistakes in Go and when to avoid them by Steve Francia (Docker) - YouTube](https://www.youtube.com/watch?v=29LLRKIL_TI)

[One to use context with an io.Reader or io.Writer.](https://gist.github.com/dchapes/6c992bf3e943934462509338cd213e99) Cancellable io.Reader example
[io package - io - pkg.go.dev](https://pkg.go.dev/io#TeeReader)
[io package - io - pkg.go.dev](https://pkg.go.dev/io#MultiWriter)

### Versioning

[gopkg.in - Stable APIs for the Go language](https://labix.org/gopkg.in)

### Docker

[Docker Images : Part I - Reducing Image Size](https://www.ardanlabs.com/blog/2020/02/docker-images-part1-reducing-image-size.html)

[Building a Golang Docker image — Bitfield Consulting](https://bitfieldconsulting.com/golang/docker-image)

```dockerfile
FROM golang:1.20-alpine AS build

WORKDIR /src/
COPY main.go go.* /src/
RUN CGO_ENABLED=0 go build -o /bin/demo

FROM scratch
COPY --from=build /bin/demo /bin/demo
ENTRYPOINT ["/bin/demo"]
```

### Handling Errors

[pkg/errors: Simple error handling primitives](https://github.com/pkg/errors)

[Errors are values - go.dev](https://go.dev/blog/errors-are-values) Error handling does not obscure the flow of control.
[Error handling and Go - go.dev](https://go.dev/blog/error-handling-and-go)
[Defer, Panic, and Recover - go.dev](https://go.dev/blog/defer-panic-and-recover)
[Working with Errors in Go 1.13 - go.dev](https://go.dev/blog/go1.13-errors) error wrapping
[How to compare Go errors - Stack Overflow](https://stackoverflow.com/a/57613539/665507)
[Go: Creating Custom Error Wrapper and Do Proper Error Equality Check - DEV Community](https://dev.to/tigorlazuardi/go-creating-custom-error-wrapper-and-do-proper-error-equality-check-11k7)
[Comparing error or error equality in Go (Golang) - Welcome To Golang By Example](https://golangbyexample.com/comparing-error-go/) error wrapping
[How to get stacktraces from errors in Golang with go-errors/errors | Bugsnag Blog](https://www.bugsnag.com/blog/go-errors)
[Creating Domain Specific Error Helpers in Go With errors.As · The Ethically-Trained Programmer](https://blog.carlmjohnson.net/post/2020/working-with-errors-as/)

[Testing errors in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/testing-errors)
[Comparing Go error values — Bitfield Consulting](https://bitfieldconsulting.com/golang/comparing-errors)
[Error wrapping in Go — Bitfield Consulting](https://bitfieldconsulting.com/golang/wrapping-errors)

[Creating Domain Specific Error Helpers in Go With errors.As · The Ethically-Trained Programmer](https://blog.carlmjohnson.net/post/2020/working-with-errors-as/)
[Mastering Your Error Domain · The Ethically-Trained Programmer](https://blog.carlmjohnson.net/post/2022/fosdem-talk-error-domain/)

```go
// error wrapping
func Open(path string) (*DB, error) {
 db, err := bolt.Open(path, 0600, &bolt.Options{Timeout: 1 * time.Second})
 if err != nil {
  return nil, fmt.Errorf("opening bolt db: %w", err)
 }
 return &DB{db}, nil
}
```

Use `error.Is()` since Go 1.13 (2019-09)

```go
_, err := os.Stat("a-nonexistent-file.abcxyz")
fmt.Println(errors.Is(err, os.ErrNotExist)) // true
fmt.Println(err == os.ErrNotExist) // false
```

```go
// akin to catch for the function context
defer func() {
 if err := recover(); err != nil {
  fmt.Println("Error:", err)
  log.Println("stacktrace from panic: \n" + string(debug.Stack()))
 }
}()
```

## Debugging

[go-delve/delve: Delve is a debugger for the Go programming language.](https://github.com/go-delve/delve)
[Stop debugging Go with Println and use Delve instead | Opensource.com](https://opensource.com/article/20/6/debug-go-delve)

## Visualization

[hirokidaichi/goviz: a visualization tool for golang project dependency](https://github.com/hirokidaichi/goviz)
[TrueFurby/go-callvis: Visualize call graph of your Go program using dot format.](https://github.com/TrueFurby/go-callvis)

## #perfmatters

[Profiling Go Programs - go.dev](https://go.dev/blog/pprof)
[GopherCon 2019: Dave Cheney - Two Go Programs, Three Different Profiling Techniques - YouTube](https://www.youtube.com/watch?v=nok0aYiGiYA)
[Profiling and Optimizing Go - YouTube](https://www.youtube.com/watch?v=N3PWzBeLX2M)

[Profiling Go programs with pprof](https://jvns.ca/blog/2017/09/24/profiling-go-with-pprof/)
[Go Performance Case Studies | DoltHub Blog](https://www.dolthub.com/blog/2022-10-14-golang-performance-case-studies/)

[Go Optimizations 101 -Go 101](https://go101.org/optimizations/101.html)

[Nitro : A quick and simple profiler for golang - spf13.com](http://spf13.com/project/nitro)
[profefe/profefe: Continuously collect profiling data for long-term postmortem analysis](https://github.com/profefe/profefe)

[Profile-guided optimization - The Go Programming Language](https://go.dev/doc/pgo) use `-pgo=auto` compiler option and `default.pgo` file
