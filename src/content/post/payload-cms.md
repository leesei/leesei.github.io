---
title: Payload CMS
description: A code first CMS that works the way you do
created: 2023-04-30
updated: 2025-07-01
tags:
  - cms
  - typescript
---

# Payload CMS

> TODO: Payload v3 (around 2024-11) revamped architecture and based on Next.js
> remove v1 and v2 docs

[Payload: The fastest growing open-source headless CMS](https://payloadcms.com/)
[payloadcms/payload: Payload is the open-source, fullstack Next.js framework, giving you instant backend superpowers. Get a full TypeScript backend and admin panel instantly. Use Payload as a headless CMS or for building powerful applications.](https://github.com/payloadcms/payload)

[I tried Payload 3.0. Beta for 40 hours so you don’t have to | by MouCZnik | Medium](https://medium.com/@moucznik6/i-tried-payload-3-0-beta-for-40-hours-so-you-dont-have-to-34fa83a304fd)

[Compare Payload to Strapi | Strapi Alternatives | Payload](https://payloadcms.com/compare/strapi)

- Strapi only supports RBAC
- Payload support more flexible function-based access control (RBAC is trivial)

[Payload is now completely free and open source | Blog | Payload](https://payloadcms.com/blog/open-source) 2022-05
[I'm CEO of Payload CMS—which recently switched to a fully open-source model. I'm here to talk about open-source vs. proprietary software, bootstrapping vs. taking VC, growing a digital design agency, and more. AMA! : Entrepreneur](https://www.reddit.com/r/Entrepreneur/comments/wealgo/im_ceo_of_payload_cmswhich_recently_switched_to_a/)

## Project Templates

```sh
npx create-payload-app@latest --use-bun -t website -n payload-website
npx create-payload-app@latest --use-bun -t blank -n payload-blank
npx create-payload-app@latest --use-bun --example tailwind-shadcn-ui -n example-shadcn
npx create-payload-app@latest --use-bun --example auth -n example-auth
```

[payload/templates at main · payloadcms/payload](https://github.com/payloadcms/payload/tree/main/templates)
[payload-template · GitHub Topics](https://github.com/topics/payload-template)
[payload/examples at main · payloadcms/payload](https://github.com/payloadcms/payload/tree/main/examples)

[drago1520/simple-payload-starter: A simplified version of the official Payload Website Template with simpler page-building (blocks-only), improved folder structure, live preview, blog posts, SEO optimization and --turbopack.](https://github.com/drago1520/simple-payload-starter) less bloat than website?

## Learn

[Payload CMS - YouTube](https://www.youtube.com/@payloadcms)
[Learn advanced Next.js with Payload's website template - YouTube](https://www.youtube.com/playlist?list=PLjy3Q_oHlvcxA641jUt8cktHqFKXr0iKo) 2024-12, official
~~[Building a Professionally Designed Website with NextJS, TypeScript, and Payload CMS - YouTube](https://www.youtube.com/playlist?list=PLjy3Q_oHlvcx_jtUDtGc7xWNsp9gZdm1d)~~ old

[AllAboutPayload - YouTube](https://www.youtube.com/@AllAboutPayload)

[Payload: The Complete Backend for NextJS - YouTube](https://www.youtube.com/watch?v=121FJ9mov-4&t=751s)

Aaron Saunders
[PAYLOAD CMS - YouTube](https://www.youtube.com/playlist?list=PL2PY2-9rsgl3o_RwTgZ17E2_Z5SuseDbo)
[Payload CMS Fullstack To Do - YouTube](https://www.youtube.com/playlist?list=PL2PY2-9rsgl2YAgCbrvzxAj5Eqpuhob62)
[From Zero to Landing Page: A Hands-On Payload CMS Blocks Tutorial (Beginner's Guide) - YouTube](https://www.youtube.com/watch?v=qSkSKlw_fW8) 2025-03

West Side Technology Solutions
[How Payload CMS Works: Payload CMS Architecture Explained Simply - YouTube](https://www.youtube.com/watch?v=PXSIOatR1jQ) ❗!important
[Payload CMS vs Strapi in 2025: Which Saves Small Businesses More Money & Time? - YouTube](https://www.youtube.com/watch?v=gHyJldg8NwQ)
[Payload CMS Tutorials - YouTube](https://www.youtube.com/playlist?list=PL5LCNNklWquVYVhTE5fTJScqTqCiGwViq)

Sam Thoyre
[Mastering Payload CMS 3: Building Modern Full-Stack Applications 🚀 - YouTube](https://www.youtube.com/playlist?list=PLm8mpUfGYwyGbRua00MjCDT7YwHpKFHAQ)

### Collection

[Collection Configs | Documentation | Payload](https://payloadcms.com/docs/configuration/collections)
[Fields Overview | Documentation | Payload](https://payloadcms.com/docs/fields/overview)
[Relationship Field | Documentation | Payload](https://payloadcms.com/docs/fields/relationship)
[Learn More about Virtual Fields | Blog | Payload CMS](https://payloadcms.com/posts/blog/learn-how-virtual-fields-can-help-solve-common-cms-challenges)
[Versions | Documentation | Payload](https://payloadcms.com/docs/versions/overview)

### Rest API

[REST API | Documentation | Payload](https://payloadcms.com/docs/rest-api/overview)

#### Custom Endpoints

Custom Endpoints can be added to collection without the need to change `server.ts`.
[REST API | Documentation | Payload](https://payloadcms.com/docs/rest-api/overview#custom-endpoints)

### Local API

For writing apps based on Payload CMS, can overrides access control (default true)

[Local API | Documentation | Payload](https://payloadcms.com/docs/local-api/overview)
[Using Payload outside Next.js | Documentation | Payload](https://payloadcms.com/docs/local-api/outside-nextjs)

## Access control/Authorization

> flexible function-based access control

[Access Control | Documentation | Payload](https://payloadcms.com/docs/access-control/overview)

[Overview of Payload CMS Access Control - YouTube](https://www.youtube.com/watch?v=DoPLyXG26Dg)
[Build Your Own Role-Based Access Control in Payload | by Elliot DeNolf | Payload | Medium](https://medium.com/payload-cms/build-your-own-role-based-access-control-in-payload-4e72b3bdc418)

## Authentication

[Authentication Overview | Documentation | Payload](https://payloadcms.com/docs/authentication/overview)
[Authentication Config | Documentation | Payload](https://payloadcms.com/docs/authentication/config)

[How to get authenticated user in custom express routes? · payloadcms/payload · Discussion #675](https://github.com/payloadcms/payload/discussions/675)

- register Payload Auth Middleware in Express
- use collection's custom API

[Login with Username instead of Email (Extend authentication parameters) · payloadcms/payload · Discussion #1196](https://github.com/payloadcms/payload/discussions/1196) my question

[PayloadCMS with AuthJS : Part 1 — Custom AuthJS adapter | by Vladimir Topolev | Numatic Ventures | Medium](https://medium.com/numatic-ventures/payloadcms-with-authjs-part-1-custom-authjs-adapter-f598d414cd7a)
[PayloadCMS with AuthJS: Part 2 — PayloadCMS custom strategy | by Vladimir Topolev | Numatic Ventures | Medium](https://medium.com/numatic-ventures/payloadcms-with-authjs-part-2-payloadcms-custom-strategy-fa8ac02b969a)

[thgh/payload-plugin-oauth: Add oAuth sign in to your Payload CMS site](https://github.com/thgh/payload-plugin-oauth) Payload 3 ready?
[finkinfridom/payload-auth0-plugin: Extends payloadcms with Auth0 integration](https://github.com/finkinfridom/payload-auth0-plugin) Payload 3 ready?

## Migration

[How to migrate from Wordpress to Payload - YouTube](https://www.youtube.com/watch?v=t1du7NKb60Y)
[How to migrate from Wordpress to Payload: Part 2 - YouTube](https://www.youtube.com/watch?v=dnvQLFAXKw0)

## Plugins

[Plugins | Documentation | Payload](https://payloadcms.com/docs/plugins/overview)
[payload-plugin · GitHub Topics](https://github.com/topics/payload-plugin)

[thgh/payload-plugin-oauth: Add oAuth sign in to your Payload CMS site](https://github.com/thgh/payload-plugin-oauth)
[finkinfridom/payload-auth0-plugin: Extends payloadcms with Auth0 integration](https://github.com/finkinfridom/payload-auth0-plugin)
[ScottEAdams/payload-plugin-google-one-tap](https://github.com/ScottEAdams/payload-plugin-google-one-tap)

[payloadcms/plugin-form-builder: The official form builder plugin for Payload](https://github.com/payloadcms/plugin-form-builder)
[Overview of the Payload Form Builder Plugin - YouTube](https://www.youtube.com/watch?v=Fm4YaG__EHg)

[payloadcms/plugin-password-protection: The official password protection plugin for Payload](https://github.com/payloadcms/plugin-password-protection)
[NouanceLabs/payload-simple-rbac: A simple plugin to help you manage permissions in Payload with user roles.](https://github.com/NouanceLabs/payload-simple-rbac)

[thgh/payload-components: Some custom Payload components](https://github.com/thgh/payload-components)
[thgh/payload-plugin-resolve-alias: Shorthand to add common webpack aliases](https://github.com/thgh/payload-plugin-resolve-alias)
[thgh/payload-plugin-body-classname](https://github.com/thgh/payload-plugin-body-classname)

[Teyras/payload-oapi: A Payload CMS plugin for OpenAPI (3.0, 3.1) specification generation](https://github.com/Teyras/payload-oapi/)

## Deployment

[Production Deployment | Documentation | Payload](https://payloadcms.com/docs/production/deployment)
[Security Best Practices for Express in Production](https://expressjs.com/en/advanced/best-practice-security.html)

[Payload CMS & Astro 🚀 Astro Documentation](https://docs.astro.build/en/guides/cms/payload/)
[Remix, Payload in a Single Express Server Monorepo](https://payloadcms.com/blog/remix-payload-express-monorepo)

### Next.js

[Building a Professionally Designed Website with NextJS, TypeScript, and Payload CMS - YouTube](https://www.youtube.com/playlist?list=PLjy3Q_oHlvcx_jtUDtGc7xWNsp9gZdm1d)

[Discord Thread | Community Help | Payload](https://payloadcms.com/community-help/discord/separate-nextjs-payload-apps-or-use-the-custom-nextjs-server) nextjs-custom-server vs next-payload

[NextJS, Payload, and TypeScript in a Single Express Server Boilerplate | Blog | Payload](https://payloadcms.com/blog/nextjs-payload-typescript-single-express-server-boilerplate)
[payloadcms/nextjs-custom-server: A TypeScript boilerplate for combining Payload and Next.js into a single Express server](https://github.com/payloadcms/nextjs-custom-server)
NextJS custom server is a combination where you run an express server and NextJS app simultaneously.

[payloadcms/next-payload: A utility to deploy Payload serverlessly within a Next.js app](https://github.com/payloadcms/next-payload)
The next-payload is a setup where you can deploy Payload "serverlessly" on for example Vercel (which is pretty awesome) directly from your NextJS project

### Astro

[Payload CMS & Astro 🚀 Astro Documentation](https://docs.astro.build/en/guides/cms/payload/)

[Lambdo-Labs/payloadcms-astro-template: Payload CMS and Astro template](https://github.com/Lambdo-Labs/payloadcms-astro-template/tree/main)
