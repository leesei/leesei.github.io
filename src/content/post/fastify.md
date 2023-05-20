---
title: Fastify
description: ""
created: 2021-12-29
tags:
  - backend
  - fastify
  - javascript
  - typescript
  - web
  - web-dev
  - web-framework
---

> fast API server, JSON schema for validation (ajv)

[Fastify, Fast and low overhead web framework, for Node.js](https://www.fastify.io/)
[Living the type-safe, well-documented REST API dream with TypeScript + Fastify](https://tech.ovoenergy.com/living-the-type-safe-well-documented-rest-api-dream-with-typescript-fastify/)
[Building a Fastify NodeJS server](https://daily-dev-tips.com/posts/building-a-fastify-nodejs-server/)
[Fastify Crash Course | Node.js Framework - YouTube](https://www.youtube.com/watch?v=Lk-uVEVGxOA)
[Getting Started With NodeJS Fastify and TypeScript + ESLint, Prettier, and Auto Format On Save - YouTube](https://www.youtube.com/watch?v=WHV57q6p3Lk)
[Fastify vs Express Which is Better? | Fastify TypeScript Tutorial - YouTube](https://www.youtube.com/watch?v=SlUNZZaZhFU) with TypeBox

[The Fastify Workshop - Slidev](https://nearform.github.io/the-fastify-workshop/1)
[nearform/the-fastify-workshop: A workshop about Fastify](https://github.com/nearform/the-fastify-workshop)

Jay Wolfe
[Rapid API Development with NodeJS, Fastify, Postgresql, and Swagger - YouTube](https://www.youtube.com/playlist?list=PLU_22oKqONin7yagFMm3x1tJihYaIVVwa)
[Twitter Bot With Fastify, AlpineJS, TailwindUI, and HandlebarsJS - YouTube](https://www.youtube.com/playlist?list=PLU_22oKqONimKqe-2LmsEG5MvaZcRL101)

[Learn Just Enough Fastify to be Productive - YouTube](https://www.youtube.com/watch?v=ZHLB4StAqPM) 29:46
[Build a RESTful API with Fastify, Prisma & TypeScript - YouTube](https://www.youtube.com/watch?v=LMoMHP44-xM) 2022-02, 1:21:34

[Plugins](https://www.fastify.io/docs/master/Reference/Plugins/)
[Decorators](https://www.fastify.io/docs/master/Reference/Decorators/)

## Validation

[Validation-and-Serialization](https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/)
[Fluent-Schema](https://www.fastify.io/docs/latest/Guides/Fluent-Schema/)

## Ecosystem

[Ecosystem](https://www.fastify.io/ecosystem/)
[Ecosystem](https://www.fastify.io/docs/latest/Guides/Ecosystem/)

[fastify/skeleton: Template repository to create standardized Fastify plugins.](https://github.com/fastify/skeleton)

[gquittet/graceful-server: Tiny (~5k), KISS, dependency-free Node.JS library to make your API more graceful](https://github.com/gquittet/graceful-server)

### Project

[fastify/fastify-cli: Run a Fastify application with one command!](https://github.com/fastify/fastify-cli)

```sh
fastify generate app --lang=ts
```

To use `nodemon` + `ts-node` for dev, add  
`"start:dev": "nodemon --watch 'src/**/*.ts' --exec node --inspect -r ts-node/register src/server.ts"`  
see <https://github.com/wolfejw86/blog-examples/blob/master/login-with-github-fastify/package.json>

[TypeScript](https://www.fastify.io/docs/latest/Reference/TypeScript/)
[How to build blazing fast APIs with Fastify and TypeScript](https://daily.dev/blog/how-to-build-blazing-fast-apis-with-fastify-and-typescript)

Included in `fastify-cli`:

- [fastify/fastify-autoload: Require all plugins in a directory](https://github.com/fastify/fastify-autoload)
- [fastify/fastify-sensible: Defaults for Fastify that everyone can agree on](https://github.com/fastify/fastify-sensible)
- [fastify/fastify-plugin: Plugin helper for Fastify](https://github.com/fastify/fastify-plugin)

[fastify/create-fastify: Rapidly generate a Fastify project](https://github.com/fastify/create-fastify) hooks `fastify-cli` to `npm init`

[gquittet/graceful-server: Tiny (~5k), KISS, dependency-free Node.JS library to make your API more graceful](https://github.com/gquittet/graceful-server)
[fastify/avvio: Asynchronous bootstrapping of Node applications](https://github.com/fastify/avvio)
[fastify/fastify-env: Fastify plugin to check environment variables](https://github.com/fastify/fastify-env)
[fastify/fastify-helmet: Important security headers for Fastify](https://github.com/fastify/fastify-helmet)
[fastify/fastify-error](https://github.com/fastify/fastify-error)
[fastify/fastify-routes: Decorates fastify instance with a map of routes](https://github.com/fastify/fastify-routes)

### Transport

[fastify/fastify-websocket: basic websocket support for fastify](https://github.com/fastify/fastify-websocket)

### Request Parsing

[fastify/fastify-multipart: Multipart support for Fastify](https://github.com/fastify/fastify-multipart)
[fastify/fastify-formbody: A Fastify plugin to parse x-www-form-urlencoded bodies](https://github.com/fastify/fastify-formbody)
[fastify/fastify-rate-limit: A low overhead rate limiter for your routes](https://github.com/fastify/fastify-rate-limit)

[fastify/fastify-cors: Fastify CORS](https://github.com/fastify/fastify-cors)

### File Upload

[fastify/fastify-multipart: Multipart support for Fastify](https://github.com/fastify/fastify-multipart) stream mode

[huangang/fastify-file-upload: Fastify plugin for uploading files](https://github.com/huangang/fastify-file-upload)

### Response

[fastify/fastify-static: Plugin for serving static file as fast as possible](https://github.com/fastify/fastify-static)
[fastify/fastify-caching: A Fastify plugin to facilitate working with cache headers](https://github.com/fastify/fastify-caching)
[fastify/fastify-etag: Automatically generate etags for HTTP responses, for Fastify](https://github.com/fastify/fastify-etag)
[fastify/fastify-compress: Fastify compression utils](https://github.com/fastify/fastify-compress)
[fastify/point-of-view: Template rendering plugin for Fastify](https://github.com/fastify/point-of-view)
[fastify/fastify-response-validation: A simple plugin that enables response validation for Fastify.](https://github.com/fastify/fastify-response-validation)

### Authentication

[fastify/fastify-auth: Run multiple auth functions in Fastify](https://github.com/fastify/fastify-auth) decorate (named callback functions)
[fastify/fastify-jwt: JWT utils for Fastify](https://github.com/fastify/fastify-jwt)
[fastify/fastify-bearer-auth: A Fastify plugin to require bearer Authorization headers](https://github.com/fastify/fastify-bearer-auth)

### OpenAPI

[fastify/fastify-swagger: Swagger documentation generator for Fastify](https://github.com/fastify/fastify-swagger)
[eropple/fastify-openapi3: Developer-friendly OpenAPI3 tooling for Fastify that's easy to use.](https://github.com/eropple/fastify-openapi3)
[ShogunPanda/fastify-openapi-docs: A simple plugin for Fastify that generates OpenAPI spec automatically.](https://github.com/ShogunPanda/fastify-openapi-docs)

[seriousme/fastify-openapi-glue: A plugin for Fastify to autogenerate a configuration based on a OpenApi(v2/v3) specification.](https://github.com/seriousme/fastify-openapi-glue) gen route from OpenAPI schema

## NestJS

[NestJS - A progressive Node.js web framework](https://nestjs.com/) opinionated TypeScript wrapper of Express/Fastify
[Documentation | NestJS - A progressive Node.js framework](https://docs.nestjs.com/)
[Performance (Fastify) | NestJS - A progressive Node.js framework](https://docs.nestjs.com/techniques/performance#performance-fastify)

[Nestjs🐺⚡ | The framework of Nodejs Series' Articles - DEV Community](https://dev.to/krtirtho/series/14048) 2021-08
[NestJs Course for Beginners - Create a REST API - YouTube](https://www.youtube.com/watch?v=GHTA143_b-s) 2022-02

[eropple/nestjs-openapi3: OpenAPI 3.x document generation and serving for NestJS.](https://github.com/eropple/nestjs-openapi3)
