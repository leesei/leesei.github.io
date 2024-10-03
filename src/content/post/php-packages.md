---
title: PHP Packages
description: ""
created: 2023-03-27
updated: 2024-09-28
tags:
  - comp/lang
  - php
---

# PHP Packages

## Standard Library and Extensions

[PHP: Function Reference - Manual](https://www.php.net/manual/en/funcref.php)
[PHP: Other Basic Extensions - Manual](https://www.php.net/manual/en/refs.basic.other.php)

[PHP: SPL - Manual](https://www.php.net/book.spl) Standard PHP Library

## Async/Concurrency

[Asynchronous Multitasking PHP | AMPHP](https://amphp.org/)
[AMPHP](https://github.com/amphp)

### Swoole

[Coroutines Async Programming Framework | Swoole PHP](https://www.swoole.com/)
[swoole/swoole-src: 🚀 Coroutine-based concurrency library for PHP](https://github.com/swoole/swoole-src)

[deminy/swoole-by-examples: Learn Swoole by Examples](https://github.com/deminy/swoole-by-examples)

### ReactPHP

[ReactPHP: Event-driven, non-blocking I/O with PHP - ReactPHP](https://reactphp.org/)
[reactphp/react: Event-driven, non-blocking I/O with PHP.](https://github.com/reactphp/react)

[Category Archive "ReactPHP Series" — Cees-Jan Kiewiet's blog](https://blog.wyrihaximus.net/categories/reactphp-series/)
[FLOSS Weekly 486 ReactPHP](https://twit.tv/shows/floss-weekly/episodes/486)

## Datetime

[Chronos - 2.x](https://book.cakephp.org/chronos/2/en/index.html) immutable date
[cakephp/chronos: A standalone DateTime library originally based off of Carbon](https://github.com/cakephp/chronos)

[Carbon - A simple PHP API extension for DateTime.](https://carbon.nesbot.com/)

## Database/ORM

[[sql#ORM (or not)]]

[Medoo - The lightweight PHP database framework to accelerate development.](https://medoo.in/)

## App Frameworks

#web-framework

[[cakephp]]

[php-framework · GitHub Topics](https://github.com/topics/php-framework?o=desc&s=stars)
[Top 5 PHP REST API Frameworks | Moesif Blog](https://www.moesif.com/blog/api-product-management/api-analytics/Top-5-PHP-REST-API-Frameworks/)

## Symfony

[Symfony, High Performance PHP Framework for Web Development](https://symfony.com/)
[symfony/symfony: The Symfony PHP framework](https://github.com/symfony/symfony)

## Laravel

[Laravel - The PHP Framework For Web Artisans](https://laravel.com/)
[Laravel - Wikiwand](https://omni.wikiwand.com/en/Laravel)

[Laracasts](https://laracasts.com/)
[Installation - Laravel - The PHP Framework For Web Artisans](https://laravel.com/docs/)

[Introduction | Laravel Jetstream](https://jetstream.laravel.com/2.x/introduction.html)

[Livewire | Laravel Livewire](https://laravel-livewire.com/) Meteor-like, send HTML-partials
[Inertia.js - The Modern Monolith](https://inertiajs.com/)
[Lumen - PHP Micro-Framework By Laravel](https://lumen.laravel.com/) Express-like

[Eloquent ORM - Laravel - The PHP Framework For Web Artisans](https://laravel.com/docs/5.0/eloquent)
[Laravel Eloquent Tutorial With Examples – Stackify](https://stackify.com/laravel-eloquent-tutorial/amp/)
[calebporzio/sushi: Eloquent's missing "array" driver.](https://github.com/calebporzio/sushi)
[Eloquent Performance: 4 Examples of N+1 Query Problems | Laravel News](https://laravel-news.com/laravel-n1-query-problems)

### Apiato

> API framework made out of Laravel

[Welcome to Apiato | Apiato](http://apiato.io/)
[apiato/apiato: PHP Framework for building scalable API's on top of Laravel.](https://github.com/apiato/apiato)

```sh
# use PHPDocker.io's stack
composer create-project apiato/apiato application

# enter php-fpm
rm composer.lock;
composer require --dev barryvdh/laravel-ide-helper
composer update
chmod -R 777 storage
php artisan key:generate
```

### PhalApi

> API server with docs
> [XSS](https://github.com/phalapi/phalapi/issues/142) not fixed for months

[PhalApi(派框架) - PHP 轻量级开源接口框架 - 接口，从简单开始！](http://www.phalapi.net/)
[phalapi/phalapi: PhalApi 开源接口框架，简称 π 框架，一个轻量级 PHP 开源接口框架，专注于接口服务开发。接口，从简单开始！](https://github.com/phalapi/phalapi)

[前言 - PhalApi 2.x 开源接口框架 开发文档](http://docs.phalapi.net/#/v2.0/tutorial)

### Lumen

> lightweight micro-API framework made out of Laravel
> not recommended

[Installation - Lumen - PHP Micro-Framework By Laravel](https://lumen.laravel.com/docs/9.x)

## Laminas

> previously Zend Framework

[Home - Laminas Project - Enterprise PHP Framework](https://getlaminas.org/)
[Laminas API Tools](https://api-tools.getlaminas.org/) not very active

## Nette

> collection of libraries rather than framework

[Nette – Comfortable and Safe Web Development in PHP](https://nette.org/en/)

## Yii

[Yii PHP Framework](https://www.yiiframework.com/)
[Getting Started: Installing Yii | The Definitive Guide to Yii 2.0 | Yii PHP Framework](https://www.yiiframework.com/doc/guide/2.0/en/start-installation)

## Leaf PHP

> lightweight

[Leaf PHP - Simple and elegant PHP | Leaf PHP](https://leafphp.dev/)
[Modules | Leaf PHP](https://leafphp.dev/modules/)
[leafsphp/leaf: 🍁 The easiest way to create clean, simple but powerful web apps and APIs quickly](https://github.com/leafsphp/leaf#-the-leaf-ecosystem-modules)

[Leaf MVC](https://mvc.leafphp.dev/)
[Leaf API](https://api.leafphp.dev/)

## Yaf

[PHP: Yaf - Manual](https://www.php.net/manual/en/book.yaf.php)
[laruence/yaf: Fast php framework written in c, built in php extension](https://github.com/laruence/yaf)

## Epiphany

> micro PHP framework ,Routing, Caching and API Helpers (private)

[jmathai/epiphany: A micro PHP framework that's fast, easy, clean and RESTful. The framework does not do a lot of magic under the hood. It is, by design, very simple and very powerful.](https://github.com/jmathai/epiphany) 😴inactive
