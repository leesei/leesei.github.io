---
title: CakePHP
description: ""
created: 2023-03-27
updated: 2025-01-09
tags:
  - php
  - web
  - web-dev
  - web-framework
---

[CakePHP - Build fast, grow solid | PHP Framework | Home](https://cakephp.org/)
[Home — Bakery](https://bakery.cakephp.org/) blog
[Overview | CakePHP 4.4](https://api.cakephp.org/4.4/)
[CakePHP](https://github.com/cakephp/)

[CakePHP Tutorial](https://www.tutorialspoint.com/cakephp/index.htm)

[Welcome - 4.x](https://book.cakephp.org/4/en/index.html)
[Content Management Tutorial - 4.x](https://book.cakephp.org/4/en/tutorials-and-examples/cms/installation.html)
[Validation - 4.x](https://book.cakephp.org/4/en/core-libraries/validation.html)

[FriendsOfCake/awesome-cakephp: A curated list of amazingly awesome CakePHP plugins, resources and shiny things.](https://github.com/FriendsOfCake/awesome-cakephp)
[Packages](https://plugins.cakephp.org/)
[CakePHP - YouTube](https://www.youtube.com/user/CakePHP)
[CakeFest 2022 - Virtual - YouTube](https://www.youtube.com/playlist?list=PLsrmQF03GOwDcNE_p6KXvru9JN3Ciw3Ix)

[CakePHP Version 4 - YouTube](https://www.youtube.com/playlist?list=PLLo-6h61K2VodB-nC_UMZgruk1DrNVash) Alimon Pito
[pitocms/CakePHP-version-4-tutorial-Source](https://github.com/pitocms/CakePHP-version-4-tutorial-Source)

[Tag: cakephp | Fax Modem](https://faxmodem.eu/faxmodem/blog/tag/cakephp/)

## Running in docker

[cnizzardini/cakephp-docker: A cakephp 4 template for Docker and Kubernetes.](https://github.com/cnizzardini/cakephp-docker)

These file/folders needs to be read, writable by the PHP process.
But the PHP process needs to be root, so chmod.

```sh
chmod 755 app/config/app.php
chmod -R 777 app/logs/ app/tmp/
```

## REST API

[REST - 4.x](https://book.cakephp.org/4/en/development/rest.html)
[Routing - 4.x](https://book.cakephp.org/4/en/development/routing.html#resource-routes)
[php - CakePHP 4 - How do I create a simple proof of concept REST API? - Stack Overflow](https://stackoverflow.com/questions/71349994/cakephp-4-how-do-i-create-a-simple-proof-of-concept-rest-api)

[REST API with CakePHP](https://www.slideshare.net/anoochit/rest-api-with-cakephp)
[Class RouteBuilder | CakePHP 4.4](https://api.cakephp.org/4.4/class-Cake.Routing.RouteBuilder.html)
`$routes->resources()`, `$routes->resourceMap()`

[MixerAPI - CakePHP RESTful API plugin](https://mixerapi.com/)

[Create Api With Cakephp - DEV Community](https://dev.to/maymeow/create-api-with-cakephp-2j8d) skip auth, skip Csrf
[vudp/cakephp-rest-api - Packagist](https://packagist.org/packages/vudp/cakephp-rest-api)

[How We built an API first Software in CakePHP 4 by Jiri Havlicek - YouTube](https://www.youtube.com/watch?v=z3018Fi9qHo)
[cnizzardini/cakephp-swagger-bake: Automatically generate OpenAPI, Swagger, and Redoc documentation from your existing CakePHP code.](https://github.com/cnizzardini/cakephp-swagger-bake)

## Embedding React App

[CakePHP 4 - Embedding a Create React App in a View (Development Setup) - YouTube](https://www.youtube.com/watch?v=MRHbp8xkBJ0)
[CakePHP 4 - InertiaJS and React using the cakephp-inertiajs adaptor by Ishan Vyas - YouTube](https://www.youtube.com/watch?v=BkdckCrG5A4)
