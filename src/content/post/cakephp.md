---
title: CakePHP
description: ""
created: 2023-03-27
tags:
  - php
  - web
  - web-dev
  - web-framework
---

# CakePHP

[CakePHP - Build fast, grow solid | PHP Framework | Home](https://cakephp.org/)
[Home — Bakery](https://bakery.cakephp.org/) blog
[Overview | CakePHP 4.4](https://api.cakephp.org/4.4/)
[CakePHP](https://github.com/cakephp/)

[Welcome - 4.x](https://book.cakephp.org/4/en/index.html)
[Content Management Tutorial - 4.x](https://book.cakephp.org/4/en/tutorials-and-examples/cms/installation.html)
[Validation - 4.x](https://book.cakephp.org/4/en/core-libraries/validation.html)

[FriendsOfCake/awesome-cakephp: A curated list of amazingly awesome CakePHP plugins, resources and shiny things.](https://github.com/FriendsOfCake/awesome-cakephp)
[Packages](https://plugins.cakephp.org/)
[CakePHP - YouTube](https://www.youtube.com/user/CakePHP)

[Tag: cakephp | Fax Modem](https://faxmodem.eu/faxmodem/blog/tag/cakephp/)

## Running in docker

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

[Create Api With Cakephp - DEV Community](https://dev.to/maymeow/create-api-with-cakephp-2j8d) skip auth, skip Csrf
[vudp/cakephp-rest-api - Packagist](https://packagist.org/packages/vudp/cakephp-rest-api)
