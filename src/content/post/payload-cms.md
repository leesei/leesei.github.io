---
title: Payload CMS
description: A code first CMS that works the way you do
created: 2023-04-30
updated: 2024-08-22
tags:
  - cms
  - typescript
---

# Payload CMS

[Payload CMS | Node & React TypeScript Headless CMS](https://payloadcms.com/)
[payloadcms/payload: Free and Open-source Headless CMS and Application Framework built with TypeScript, Node.js, React and MongoDB](https://github.com/payloadcms/payload)

[Payload - YouTube](https://www.youtube.com/@payloadcms)
[Let's Checkout... Payload CMS - YouTube](https://www.youtube.com/watch?v=wCZsKrF5elM)
[MongoDB + Payload: The Future of CMS - YouTube](https://www.youtube.com/watch?v=8dlgJLiGJQ0)

[Compare Payload to Strapi | Strapi Alternatives | Payload CMS](https://payloadcms.com/compare/strapi)

- Strapi only supports RBAC
- Payload support more flexible function-based access control (RBAC is trivial)

[Payload is now completely free and open source | Blog | Payload CMS](https://payloadcms.com/blog/open-source) 2022-05
[I'm CEO of Payload CMS—which recently switched to a fully open-source model. I'm here to talk about open-source vs. proprietary software, bootstrapping vs. taking VC, growing a digital design agency, and more. AMA! : Entrepreneur](https://www.reddit.com/r/Entrepreneur/comments/wealgo/im_ceo_of_payload_cmswhich_recently_switched_to_a/)

## Learn

[Payload CMS - YouTube](https://www.youtube.com/@payloadcms)
[Building a Professionally Designed Website with NextJS, TypeScript, and Payload CMS - YouTube](https://www.youtube.com/playlist?list=PLjy3Q_oHlvcx_jtUDtGc7xWNsp9gZdm1d)

[Payload CMS Introduction - Closing the Gap Between Headless CMS and Application Frameworks - YouTube](https://www.youtube.com/watch?v=In_lFhzmbME)[payloadcms/custom-website-series: A fully custom website built with Payload and Next.js](https://github.com/payloadcms/custom-website-series)
[payloadcms/learn-with-jason-cms: The CMS used for the Learn With Jason episode](https://github.com/payloadcms/learn-with-jason-cms)

[Using Payload CMS to build a blog - LogRocket Blog](https://blog.logrocket.com/using-payload-cms-build-blog/)

[Build a scalable design system for enterprise websites with Payload CMS & Next.js](https://www.learnwithjason.dev/build-a-scalable-design-system-for-enterprise-websites)
[payloadcms/learn-with-jason-website: The website that corresponds to Payload's Learn with Jason episode](https://github.com/payloadcms/learn-with-jason-website)

### Custom Endpoints

Custom Endpoints can be added to collection without the need to change `server.ts`.
[REST API | Documentation | Payload CMS](https://payloadcms.com/docs/rest-api/overview#custom-endpoints)

Since the webpack config is shared by Admin panel and backend server, if your endpoint/hooks are supposed to be server-only:

- pull it out as a module
- define an alias to mock it for front end (Admin panel)
- may need to `rm -rf node_modules/.cache/webpack` after update

[Webpack | Documentation | Payload CMS](https://payloadcms.com/docs/admin/webpack#aliasing-server-only-modules)
[Webpack polyfills for Node Core Modules · payloadcms/payload · Discussion #910](https://github.com/payloadcms/payload/discussions/910)
[Error when adding a webpack plugin · payloadcms/payload · Discussion #2190](https://github.com/payloadcms/payload/discussions/2190)

### Rest API

[REST API | Documentation | Payload CMS](https://payloadcms.com/docs/rest-api/overview)

### Local API

For writing apps based on Payload CMS, can overrides access control (default true)

[Local API | Documentation | Payload CMS](https://payloadcms.com/docs/local-api/overview)

## Access control/Authorization

> flexible function-based access control

[Access Control | Documentation | Payload CMS](https://payloadcms.com/docs/access-control/overview)

[Overview of Payload CMS Access Control - YouTube](https://www.youtube.com/watch?v=DoPLyXG26Dg)
[Build Your Own Role-Based Access Control in Payload | by Elliot DeNolf | Payload CMS | Medium](https://medium.com/payload-cms/build-your-own-role-based-access-control-in-payload-4e72b3bdc418)

## Authentication

[Authentication Config | Documentation | Payload CMS](https://payloadcms.com/docs/authentication/config)
[Using the Payload Auth Middleware | Documentation | Payload CMS](https://payloadcms.com/docs/authentication/using-middleware)

[Handling authentication in NextJS on Payload CMS | Blog | Payload CMS](https://payloadcms.com/blog/nextjs-payload-cms-auth)
[payload/examples/auth/cms at master · payloadcms/payload · GitHub](https://github.com/payloadcms/payload/tree/master/examples/auth/cms)
[payload/examples/auth/nextjs at master · payloadcms/payload · GitHub](https://github.com/payloadcms/payload/tree/master/examples/auth/nextjs)

[Authentication in Nuxt 3 w/ Payload CMS - YouTube](https://www.youtube.com/watch?v=HTU5d4sJdwI)

[How to get authenticated user in custom express routes? · payloadcms/payload · Discussion #675](https://github.com/payloadcms/payload/discussions/675)

- register Payload Auth Middleware in Express
- use collection's custom API

[Login with Username instead of Email (Extend authentication parameters) · payloadcms/payload · Discussion #1196](https://github.com/payloadcms/payload/discussions/1196)

## Migration

[How to migrate from Wordpress to Payload - YouTube](https://www.youtube.com/watch?v=t1du7NKb60Y)
[How to migrate from Wordpress to Payload: Part 2 - YouTube](https://www.youtube.com/watch?v=dnvQLFAXKw0)

## Plugins

[Plugins | Documentation | Payload CMS](https://payloadcms.com/docs/plugins/overview)
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

[Production Deployment | Documentation | Payload CMS](https://payloadcms.com/docs/production/deployment)
[Security Best Practices for Express in Production](https://expressjs.com/en/advanced/best-practice-security.html)

[Payload CMS & Astro 🚀 Astro Documentation](https://docs.astro.build/en/guides/cms/payload/)
[Remix, Payload in a Single Express Server Monorepo](https://payloadcms.com/blog/remix-payload-express-monorepo)

### Next.js

[Building a Professionally Designed Website with NextJS, TypeScript, and Payload CMS - YouTube](https://www.youtube.com/playlist?list=PLjy3Q_oHlvcx_jtUDtGc7xWNsp9gZdm1d)

[Discord Thread | Community Help | Payload CMS](https://payloadcms.com/community-help/discord/separate-nextjs-payload-apps-or-use-the-custom-nextjs-server) nextjs-custom-server vs next-payload

[NextJS, Payload, and TypeScript in a Single Express Server Boilerplate | Blog | Payload CMS](https://payloadcms.com/blog/nextjs-payload-typescript-single-express-server-boilerplate)
[payloadcms/nextjs-custom-server: A TypeScript boilerplate for combining Payload and Next.js into a single Express server](https://github.com/payloadcms/nextjs-custom-server)
NextJS custom server is a combination where you run an express server and NextJS app simultaneously.

[payloadcms/next-payload: A utility to deploy Payload serverlessly within a Next.js app](https://github.com/payloadcms/next-payload)
The next-payload is a setup where you can deploy Payload "serverlessly" on for example Vercel (which is pretty awesome) directly from your NextJS project

### Astro

[Payload CMS & Astro 🚀 Astro Documentation](https://docs.astro.build/en/guides/cms/payload/)

[Lambdo-Labs/payloadcms-astro-template: Payload CMS and Astro template](https://github.com/Lambdo-Labs/payloadcms-astro-template/tree/main)
