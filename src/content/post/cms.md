---
title: Content Management Systems
description: ""
created: 2022-07-09
tags:
  - business
  - cms
---

[Why you should change your CMS today - DEV Community](https://dev.to/matfrana/why-you-should-change-your-cms-today-539j) JAM CMS
[21 Best CMS Software to Build a Website (And Manage Content) in 2022](https://kinsta.com/blog/cms-software/)
[14 Best Blogging Platforms & Sites 2022 - Both Free and Paid](https://makeawebsitehub.com/choose-right-blogging-platform/)

[cms-backend · GitHub Topics](https://github.com/topics/cms-backend)

[Why Frontend Developers Should Definitely Use a Headless CMS](https://strapi.io/blog/frontend-developers-headless-cms)
[Headless CMS Explained](https://bejamas.io/discovery/headless-cms/)
[Why Headless CMS Needs Page Management - DZone Web Dev](https://dzone.com/articles/why-headless-cms-needs-page-management)
[Why, When & How to Use Headless CMS](https://www.unitygroup.com/blog/why-when-how-to-use-headless-cms/)
[Know when to use a headless CMS and when it's not worth it](https://searchcontentmanagement.techtarget.com/tip/Know-when-to-use-a-headless-CMS-and-when-its-not-worth-it)

## Comparisons

[Joomla vs WordPress: Aspect of Comparison - YouTube](https://www.youtube.com/watch?v=iK9A2ea7D30)
[Wordpress vs Joomla vs Drupal (Infographic): Which Is The Best in 2020](https://capsicummediaworks.com/wordpress-vs-joomla-vs-drupal/)

## CRM

[Top 12 Best Open Source CRM Software [2021]](https://itsfoss.com/best-open-source-crm/)

[Monica: An Open-Source App for Personal Relationship Management](https://itsfoss.com/monica/)

## Generic Data Model

> headless, API for data, database wrapper

[RecaMedia/JayDMS-Dev: The development repository of JayDMS (JSON Development Management System).](https://github.com/RecaMedia/JayDMS-Dev) one-off, AGPL

[medusajs/medusa: The open-source Shopify alternative ⚡️](https://github.com/medusajs/medusa)

### ROAPI

> fuse multiple data sources as Arrow table, expose as Postgres/REST/GraphQL API

[Overview - ROAPI Documentation](https://roapi.github.io/docs/index.html)

### Baserow

[Baserow: Open source no-code database and Airtable alternative](https://baserow.io/) built on Django

```sh
docker run -d --name baserow \
 -e BASEROW_PUBLIC_URL=http://localhost:8080 -e SYNC_TEMPLATES_ON_STARTUP=false \
 -v $HOME/baserow_data:/baserow/data -p 8080:80 -p 8443:443 --restart unless-stopped baserow/baserow:1.10.2
```

[Baserow - an Open Source, Self Hosted, No Code Database alternative to Airtable. - YouTube](https://www.youtube.com/watch?v=woTUh-6sEns)

### NocoDB

[NocoDB | Turns your SQL database into a Nocode platform. Free & Open Source.](https://www.nocodb.com/)
[NocoDB Documentation - NocoDB](https://docs.nocodb.com/)
[nocodb/nocodb: 🔥 🔥 🔥 Open Source Airtable Alternative](https://github.com/nocodb/nocodb)

### Appsmith

[Appsmith | Build & self-host internal tools](https://www.appsmith.com/)
[Introduction - Appsmith](https://docs.appsmith.com/getting-started/readme)
[Appsmith, an Open Source Low-Code Framework to Build Internal Apps – The New Stack](https://thenewstack.io/appsmith-an-open-source-low-code-framework-to-build-internal-apps/)

[Tutorial](https://www.appsmith.com/blog-categories/tutorial)
[Build a CMS for Your Company in Under an Hour](https://www.appsmith.com/blog/build-a-cms-for-your-company-in-under-an-hour)
[Building an Admin Panel with Appsmith](https://www.appsmith.com/blog/building-an-admin-panel-with-appsmith)
[Building an Admin Panel with MongoDB using Appsmith](https://www.appsmith.com/blog/building-an-admin-panel-with-mongodb-using-appsmith)

### Strapi

[Strapi - Open source Node.js Headless CMS 🚀](https://strapi.io/) Koa.js + Knex + React Admin Panel
[strapi/strapi: 🚀 Open source Node.js Headless CMS to easily build customisable APIs](https://github.com/strapi/strapi)
[strapi/packages/core/strapi at master · strapi/strapi](https://github.com/strapi/strapi/tree/master/packages/core/strapi)
[strapi/packages/core/admin at master · strapi/strapi](https://github.com/strapi/strapi/tree/master/packages/core/admin)

[Strapi Developer Docs](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
[Strapi User Guide](https://docs.strapi.io/user-docs/latest/getting-started/introduction.html)

#### Auth

[Authenticated request - Strapi Developer Docs](https://docs.strapi.io/developer-docs/latest/guides/auth-request.html)
[Roles & Permissions - Strapi Developer Docs](https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html)

[Make authenticated requests | Strapi](https://strapi.io/video-library/making-authenticated-requests)

#### Customization

[Back-end customization - Strapi Developer Docs](https://docs.strapi.io/developer-docs/latest/development/backend-customization.html)

[Auto-generate fields with values | Strapi](https://strapi.io/video-library/auto-generated-field-value) gen slug to title

[Implement Strapi side Database index creation · Issue #9913 · strapi/strapi](https://github.com/strapi/strapi/issues/9913#issuecomment-811014560) add index with Knex

#### Docker

[Docker with Strapi V4](https://blog.dehlin.dev/docker-with-strapi-v4) non-official
[How to Run Strapi 4 in a Docker Container Using Docker Compose](https://razinj.dev/how-to-run-strapi-4-in-a-docker-container-using-docker-compose/)
[naskio/strapi - Docker Hub](https://hub.docker.com/r/naskio/strapi)

### Directus

[Open-Source Headless CMS & API — Directus](https://directus.io/)
[directus/directus: The Modern Data Stack 🐰 — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database.](https://github.com/directus/directus)

[directus/directus - Docker Image | Docker Hub](https://hub.docker.com/r/directus/directus)
[directus/docker at main · directus/directus](https://github.com/directus/directus/tree/main/docker)

### KeystoneJS

[KeystoneJS](https://keystonejs.com/)
[keystonejs/keystone: node.js cms and web app framework](https://github.com/keystonejs/keystone)

### Tina

> was TinaCMS, Forestry.io migration

[Build contextual editing into your site | Tina](https://tina.io/)
Tina is an open-source site editing toolkit for React-based frameworks — Gatsby & Next.js

[Self Hosted Tina | TinaCMS Docs](https://tina.io/docs/self-hosted/overview/)
[Self-Hosting the Tina Data Layer | Tina Blog](https://tina.io/blog/self-hosted-datalayer/)

### PHP

[cms-backend · GitHub Topics](https://github.com/topics/cms-backend?l=php)
[Best PHP CMS For Developers in 2022](https://www.cloudways.com/blog/best-php-cms/)

[PyroCMS › The PHP CMS built for Laravel.](https://pyrocms.com/)
[pyrocms/pyrocms: Pyro is an experienced and powerful Laravel PHP CMS.](https://github.com/pyrocms/pyrocms)

[Symphony. An open source CMS.](https://www.getsymphony.com/)
[symphonycms/symphonycms: This is the official Symphony CMS repository.](https://github.com/symphonycms/symphonycms)

[Backdrop CMS | Free Open Source CMS built in PHP](https://backdropcms.org/)
[backdrop/backdrop: Backdrop core code repository.](https://github.com/backdrop/backdrop)

[Introduction - Snipe-IT](https://snipe-it.readme.io/docs) IT assets management

## Blog

[[wordpress]]
[[joomla]]
[[ghost]]

[Crafter CMS | Open Source, Git-based Dynamic CMS](https://craftercms.org/)

[Open Source CMS](https://www.dotcms.com/open-source-cms)

[Builder.io - Drag and drop experience builder](https://www.builder.io/)

[Umbraco CMS: The open-source version of Umbraco](https://umbraco.com/products/umbraco-cms/)

[Welcome | Lektor Static Content Management System](https://www.getlektor.com/) flat-file database

[Grav - A Modern Flat-File CMS | Grav CMS](https://getgrav.org/) flat-file database

### Django CMS

[django CMS - Enterprise Content Management with Django - django CMS](https://www.django-cms.org/en/)
[Django Content Management System | Wagtail CMS](https://wagtail.io/)
[Python CMS Framework Review: Wagtail vs Django-CMS | AccordBox](https://www.accordbox.com/blog/python-cms-framework-review-wagtail-vs-django-cms/)

### Netlify CMS

[Netlify CMS | Open-Source Content Management System](https://www.netlifycms.org/)
[Start with a Template | Netlify CMS | Open-Source Content Management System](https://www.netlifycms.org/docs/start-with-a-template/)
[Netlify CMS with Gatsby - Best Option with Some Quirks - DEV Community 👩‍💻👨‍💻](https://dev.to/p4lm/netlify-cms-with-gatsby-best-option-with-some-quirks-3p5i)

### Pantheon

[High Performance Hosting & Agile WebOps Platform | Pantheon](https://pantheon.io/) as backend for other blogging platform
[Pantheon Complete Course | Pantheon a DevOps Tool | Solution for CI/CD - YouTube](https://www.youtube.com/watch?v=qTb3Hrt11Cg)

### Payload CMS

[Payload CMS | Node & React TypeScript Headless CMS](https://payloadcms.com/)
[payloadcms/payload: Free and Open-source Headless CMS and Application Framework built with TypeScript, Node.js, React and MongoDB](https://github.com/payloadcms/payload)
[Payload is now completely free and open source | Blog | Payload CMS](https://payloadcms.com/blog/open-source)

### WonderCMS

[WonderCMS - smallest flat file CMS - Home](https://www.wondercms.com/)
[WonderCMS/wondercms: Fast and small flat file CMS (5 files). Built with PHP, JSON database.](https://github.com/WonderCMS/wondercms)

[WonderCMS - smallest flat file CMS - Features](https://www.wondercms.com/features)

## Wiki

### MediaWiki

[MediaWiki](https://www.mediawiki.org/wiki/MediaWiki)
[Manual:Installation guide - MediaWiki](https://www.mediawiki.org/wiki/Manual:Installation_guide)

### Tiki Wiki

[HomePage](https://tiki.org/HomePage)

### Outline

[Outline – Team knowledge base & wiki](https://www.getoutline.com/)

[vicalloy/outline-docker-compose: Install a self-hosted Outline wiki instance in a couple of minutes](https://github.com/vicalloy/outline-docker-compose)

### Wiki.js

[Wiki.js](https://js.wiki/)
[linuxserver/wikijs - Docker Hub](https://hub.docker.com/r/linuxserver/wikijs)

[WikiJS - Long request,I'm finally covering WikiJS - an Open Source, Self Hosted, Powerful Wiki! - YouTube](https://www.youtube.com/watch?v=Dd8_plibBYk)

## LMS

[eLearning Management System (LSM) - Weblogic Botswana](https://weblogic.co.bw/learning-management-system/)

### Moodle LMS

[Moodle - Open-source learning platform | Moodle.org](https://moodle.org/)
[Moodle LMS: Open Source Online Learning | Moodle](https://moodle.com/lms/)

[Teach a virtual class with Moodle on Linux | Opensource.com](https://opensource.com/article/20/10/moodle) learning management system (LMS)

## Hosted

[[google-cloud-platform#FireStore]]

> services here usually have free tier

[Using Google Drive as a CMS | CSS-Tricks](https://css-tricks.com/using-google-drive-as-a-cms/)

[Airtable | Create apps that perfectly fit your team's needs](https://www.airtable.com/)

[Craft CMS](https://craftcms.com/) blog, Twig template or bring you own with GraphQL
[What I Like About Craft CMS | CSS-Tricks](https://css-tricks.com/what-i-like-about-craft-cms/)

[API-first Headless CMS to Build Instant GraphQL Content APIs | GraphCMS](https://graphcms.com/) generic data model
[Building with SvelteKit and GraphCMS - Jamstack Explorers](https://explorers.netlify.com/learn/building-with-sveltekit-and-graphcms)

[API-First CMS to Power All Digital Products | Contentful](https://www.contentful.com/) blog
[Using a headless CMS with React - LogRocket Blog](https://blog.logrocket.com/using-a-headless-cms-with-react/)

[Build with Structured Content](https://www.sanity.io/) blog

[Start your blog with a Dev.to backend - DEV Community 👩‍💻👨‍💻](https://dev.to/codespent/start-your-blog-with-a-dev-to-backend-13e2)

### Storyblok

[API-based & Headless CMS as a Service - Storyblok](https://www.storyblok.com/) blog
[Nuxt.js & Storyblok - Building a Complete Blog - YouTube](https://www.youtube.com/playlist?list=PL55RiY5tL51pk1RvaQOxI6sJ-yZzExzJn)

### Pricing

[WordPress.com Pricing – Compare WordPress Plans](https://wordpress.com/pricing/)
[WordPress.com Plans – Support](https://wordpress.com/support/plan-features/)
[Plugins – Support](https://wordpress.com/support/plugins/)

Personal HK$30*12*3 = $1080

- 6GB
- basic plugins
- no-ads

Premium HK$63*12*3 = $2268

- 13GB
- Jetpack essentials
- premium themes
- social media and monetization
- [custom design](https://wordpress.com/support/customizer/) (CSS editing)

Business HK$199*12*3 = $7164

- 200GB
- support plugins
- upload themes

[WordPress Web Hosting - Secure, Affordable & Reliable - Bluehost](https://www.bluehost.com/wordpress/wordpress-hosting#pricing-cards)
[Shared Web Hosting Plans Cost Comparison - Bluehost](https://my.bluehost.com/hosting/help/141)

Plus US$(5.95*12*3)*8 = HK$1713.6 (first term)
Plus US$(10.99*12*3)\*8 = HK$3165.12

- unlimited storage
- unlimited bandwidth
- premium themes
- support plugins

[WordPress Hosting - EasyWP Managed WordPress - Namecheap](https://www.namecheap.com/wordpress/)

Starter US$(22.88*12+29.88*12*2)*8 = HK$7933.44

- first month US\$0.01
- 10GB
- 50k views/month

Turbo US$(44.88*12+68.88*12*2)*8 = HK$17533.44

- 50GB
- 200k views/month

[Ghost(Pro) Pricing - Hosting from the creators of Ghost](https://ghost.org/pricing/)

Starter US$(29*12*3)\*8 = HK$8352

- 100k views/month
- 2 staff users