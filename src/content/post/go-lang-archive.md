---
title: The Go Programming Language (Archives)
description: Archived Go Programming Language notes
created: 2023-03-30
updated: 2025-01-09
tags:
  - archived
  - comp/lang
  - go-lang
  - package-manager
---

[Go 1.17 Release Notes - The Go Programming Language](https://go.dev/doc/go1.17)
[Go 1.18 Release Notes - The Go Programming Language](https://go.dev/doc/go1.18)
[Go 1.19 Release Notes - The Go Programming Language](https://go.dev/doc/go1.19)
[Go 1.19 Release Notes - The Go Programming Language](https://go.dev/doc/go1.20)

## Modules

> previously `vgo`, "versioned Go"
> alternative to GOPATH, added in Go 1.11 (2018-08)
> control with GO111MODULE environment variable
> default on if `go.mod` exists in Go 1.14 (2020-02)
> package and binary management before Go 1.16 is quite messy

[Go Modules in 2019 - go.dev](https://go.dev/blog/modules2019) plan for 2019
[Using Go Modules - go.dev](https://go.dev/blog/using-go-modules) 2019-03, 1.11 5 part series

[Go 1.11 Rocket Tutorial](https://getstream.io/blog/go-1-11-rocket-tutorial/)
[跳出 Go module 的泥潭 | 鸟窝](https://colobu.com/2018/08/27/learn-go-module/) 1.11
[Go module 再回顾 | 鸟窝](https://colobu.com/2019/09/23/review-go-module-again/) 1.13

[Modules Part 01: Why And What](https://www.ardanlabs.com/blog/2019/10/modules-01-why-and-what.html)
[Modules Part 02: Projects, Dependencies and Gopls](https://www.ardanlabs.com/blog/2019/12/modules-02-projects-dependencies-gopls.html)
[Modules Part 03: Minimal Version Selection](https://www.ardanlabs.com/blog/2019/12/modules-03-minimal-version-selection.html)
[Modules Part 04: Mirrors, Checksums and Athens](https://www.ardanlabs.com/blog/2020/02/modules-04-mirros-checksums-athens.html)
[Modules Part 05: Gopls Improvements](https://www.ardanlabs.com/blog/2020/04/modules-05-gopls-improvements.html)
[Modules Part 06: Vendoring](https://www.ardanlabs.com/blog/2020/04/modules-06-vendoring.html)

### dep

> obsolete

[Dependency Management Tool - Google Docs](https://docs.google.com/document/d/1qnmjwfMmvSCDaY4jxPmLAccaaUI5FfySNE90gB0pTKQ/edit#)

[golang/dep: Go dependency management tool experiment (deprecated)](https://github.com/golang/dep)
[Go 1.11 Modules (vgo) vs dep · Issue #1959 · golang/dep](https://github.com/golang/dep/issues/1959)

### Vendoring

> 1.5's vendoring is obsolete, `go mod` can use `vendor/` though
> vendoring is good for locking dependencies in production build

[Go Modules Reference - go.dev](https://go.dev/ref/mod#vendoring) `vendor/modules.txt` in `go.mod`

Go's `vendor/` = Node's `node_modules/`
import from project local instead of `GOPATH`
default in Go 1.7

[Go 1.5 Vendor Experiment](https://go.googlesource.com/proposal/+/master/design/25719-go15vendor.md)

## Packages

### Web

#### Martini

[go-martini/martini: Classy web framework for Go](https://github.com/go-martini/martini) no longer maintained
[gorilla/mux: A powerful URL router and dispatcher for golang.](https://github.com/gorilla/mux) no longer maintained, only routing
[Build Server With Go Under 10 minutes - DEV Community 👩‍💻👨‍💻](https://dev.to/aniket762/build-server-with-go-under-10-minutes-1i9m) with mux
[Build a CRUD Rest API in Go using Mux, Postgres, Docker and Docker Compose - DEV Community](https://dev.to/francescoxx/build-a-crud-rest-api-in-go-using-mux-postgres-docker-and-docker-compose-2a75)

[This Go package was archived. What do we do now? - YouTube](https://www.youtube.com/watch?v=j584uJhWWhE)
[Gorilla Toolkit for Golang is revived! But is it too late? - YouTube](https://www.youtube.com/watch?v=v6gnINA1d6k)
