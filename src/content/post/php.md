---
title: PHP
description: ""
created: 2021-05-28
tags:
  - comp.lang
  - php
---

[PHP: Hypertext Preprocessor](https://www.php.net/)
[PHP - ArchWiki](https://wiki.archlinux.org/title/PHP)
[ziadoz/awesome-php: A curated list of amazingly awesome PHP libraries, resources and shiny things.](https://github.com/ziadoz/awesome-php)

[How to Learn PHP](https://code.tutsplus.com/articles/how-to-learn-php--cms-37726)
[learning-zone/php-basics: PHP Basics ( v8.x )](https://github.com/learning-zone/php-basics)
[Learn Laravel | Laracasts](https://laracasts.com/) also courses on other topics

[The Definitive PHP 7.2, 7.3, 7.4, 8.0, and 8.1 Benchmarks (2023)](https://kinsta.com/blog/php-benchmarks/)
[Modern tools for PHP developers - LogRocket Blog](https://blog.logrocket.com/modern-tools-php-developers/) > 7.0 in 2015
[security-checklist/php-security-check-list: PHP Security Check List [ EN ] 🌋 ☣️](https://github.com/security-checklist/php-security-check-list)

[Is PHP Dead? No! At Least Not According to PHP Usage Statistics](https://kinsta.com/blog/is-php-dead/)
[PHP in decline: The rise and fall of a programming language - JAXenter](https://jaxenter.com/php-tiobe-sept-2019-162096.html)

## Installation

[AUR (en) - php81](https://aur.archlinux.org/packages/php81)

```sh
yay -S php81-cli php81-phar php81-mysql php81-mbstring php81-fpm php81-cgi
```

## Basic

```sh
$ php -a
Interactive shell

php > echo 5+8;
13

php > echo phpinfo();
....
```

```sh
# php -S <ip:port> -t <root> <PHP file>
$ php -S 0.0.0.0:8080 -t public public/index.php
```

### Config

[PHP: Description of core php.ini directives - Manual](https://www.php.net/manual/en/ini.core.php)

```sh
$ php --ini
Configuration File (php.ini) Path: /etc/php7
Loaded Configuration File:         /etc/php7/php.ini
Scan for additional .ini files in: /etc/php7/conf.d
Additional .ini files parsed:      (none)
```

## PHP-FPM

[Difference between PHP-CGI and PHP-FPM | BaseZap](https://www.basezap.com/difference-php-cgi-php-fpm/)
[PHP: FastCGI Process Manager (FPM) - Manual](https://www.php.net/manual/en/install.fpm.php) `php-fpm`
[PHP: Configuration - Manual](https://www.php.net/manual/en/install.fpm.configuration.php)

[PHP-FPM - HTTPD - Apache Software Foundation](https://cwiki.apache.org/confluence/display/httpd/PHP-FPM)

Use `cgi-fcgi` for testing your PHP FPM endpoints.  
[inanzzz | Testing PHP-FPM without having a web server](http://www.inanzzz.com/index.php/post/653v/testing-php-fpm-without-having-a-web-server)  
[Directly connect to PHP-FPM](https://easyengine.io/tutorials/php/directly-connect-php-fpm/)

## Learn

[PHP: PHP Manual - Manual](https://www.php.net/manual/en/index.php)

```sh
echo '<?php phpinfo(); ?>' > /srv/http/phpinfo.php
http://localhost/phpinfo.php
```

[27 Best Tutorials to Learn PHP in 2021 (Free and Paid Resources)](https://kinsta.com/blog/php-tutorials/)

[PHP Training Courses - Learn the world's most popular web programming language from the PHP Experts.](http://www.zend.com/en/services/training#PHP%20Courses)
[PHP - Getting started with PHP | php Tutorial](https://riptutorial.com/php)

[The Best Way to Learn PHP - Tuts+ Code Tutorial](http://code.tutsplus.com/tutorials/the-best-way-to-learn-php--net-22287)
[8 Awesome and Free PHP Books - Tutorialzine](https://tutorialzine.com/2018/03/8-awesome-and-free-php-books)

[PHP: The Right Way](https://www.phptherightway.com/)
[PHP & MySQL: Novice to Ninja, 6th Edition - Installation](https://www.sitepoint.com/premium/books/php-mysql-novice-to-ninja-6th-edition/read/1)

## the bad

[Is PHP a badly designed programming language? - Quora](https://www.quora.com/Is-PHP-a-badly-designed-programming-language)
[Why is PHP hated by so many developers? - Quora](https://www.quora.com/Why-is-PHP-hated-by-so-many-developers)
[PHP: a fractal of bad design / fuzzy notepad](http://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/)
[PHP Sadness](http://phpsadness.com/)
[The PHP Singularity](http://blog.codinghorror.com/the-php-singularity/)

## Dev Environment

### Homestead

[Laravel Homestead - Laravel - The PHP Framework For Web Artisans](https://laravel.com/docs/10.x/homestead)

### Docker Homestead

[用 Docker 取代 Laravel Homestead 開發環境 | Laravel | Laravel China 社区](https://learnku.com/laravel/t/1855/replacing-laravel-homestead-development-environment-with-docker)
[laraedit/laraedit-docker: Dockerized version of Laravel Homestead](https://github.com/laraedit/laraedit-docker) PHP7

[shincoder/homestead - Docker Image | Docker Hub](https://hub.docker.com/r/shincoder/homestead) PHP7.3
[jaouadk/homestead-docker: Multi app development container.](https://github.com/jaouadk/homestead-docker)

[Laradock](http://laradock.io/)
[laradock/laradock: Full PHP development environment for Docker.](https://github.com/Laradock/laradock)

### Docker PHP FPM

[jniltinho/caddy-php-fpm: Caddy v2 + PHP-FPM 7.2.x + Composer built on Ubuntu](https://github.com/jniltinho/caddy-php-fpm)
[Yavin/docker-alpine-php-fpm: Docker image for php-fpm based on alpine linux that makes it small](https://github.com/Yavin/docker-alpine-php-fpm) 7.2, with extensions

[phpdockerio/php74-fpm](https://hub.docker.com/r/phpdockerio/php74-fpm/)

```sh
mkdir -p ~/php/php-fpm/logs ~/php/php-fpm/conf
docker run -p 9000:9000 --name myphp-fpm \
  -v (pwd):/www \
  -v $HOME/php/php-fpm/conf:/usr/local/etc/php \
  -v $HOME/php/php-fpm/logs:/phplogs \
  phpdockerio/php74-fpm
```

## HHVM/Hack

[HHVM | HHVM](http://hhvm.com/) JIT VM for Hack, PHP 5 and majority of PHP 7.
[The Hack Programming Language | Hack](http://hacklang.org/)

Zend PHP 7.3 outperforms HHVM in PHP

## Variables

[PHP: $\_SERVER - Manual](https://www.php.net/manual/en/reserved.variables.server.php)

[PHP: Variables From External Sources - Manual](https://www.php.net/manual/en/language.variables.external.php)
[PHP: $\_GET - Manual](https://www.php.net/manual/en/reserved.variables.get.php) query param
[PHP: $\_POST - Manual](https://www.php.net/manual/en/reserved.variables.post.php) support array, not dots (`.`)
[PHP: $\_REQUEST - Manual](https://www.php.net/manual/en/reserved.variables.request.php)

[How to receive JSON POST with PHP - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-receive-json-post-with-php/)

```php
// Takes raw data from the request
if ($_REQUEST["CONTENT_TYPE"] === "application/json") {
	$body = file_get_contents('php://input');

	// Converts it into a PHP object
	$data = json_decode($body);
}
```

## stdlib

[PHP: Function Reference - Manual](https://www.php.net/manual/en/funcref.php)

## Packages

### Composer

[Composer](https://getcomposer.org/) 2012, inspired by `npm`, with `composer.json` and per-project `./vendor/`
[Composer Docs](https://getcomposer.org/doc/)
[jakoch/awesome-composer: A curated awesome list for Composer, Packagist, Satis, Plugins, Scripts, Composer related resources, tutorials.](https://github.com/jakoch/awesome-composer)
[Composer (software) - Wikiwand](<https://www.wikiwand.com/en/Composer_(software)>)
[How to Install and Use PHP Composer on Linux Distributions](https://www.ubuntupit.com/how-to-install-and-use-php-composer-on-linux-distributions/)

```json
{
  "require": {
    "vendor/package": "1.3.2",
    "vendor/package2": "1.*",
    "vendor/package3": "^2.0.3"
  }
}
```

[Basic usage - Composer](https://getcomposer.org/doc/01-basic-usage.md)

```sh
composer diagnose

# add package
composer require <pacakage>

# add global package
composer global require <pacakage>
```

Global package location:

- Windows: `%USERPROFILE%\AppData\Roaming\Composer\vendor\bin`
- macOS: `$HOME/.composer/vendor/bin`
- GNU / Linux Distributions: `$HOME/.config/composer/vendor/bin` or `$HOME/.composer/vendor/bin`

[Packagist](https://packagist.org/) repository

[PSR-4: Autoloader - PHP-FIG](https://www.php-fig.org/psr/psr-4/)
[Basic usage Autoloading - Composer](https://getcomposer.org/doc/01-basic-usage.md#autoloading)
[Autoloader optimization - Composer](https://getcomposer.org/doc/articles/autoloader-optimization.md)

```php
<?php

require __DIR__ . "/vendor/autoload.php";

// your app code

?php>
```

### PEAR

[PEAR - PHP Extension and Application Repository](https://pear.php.net/) 1999, global `pear/`
[PEAR - Wikiwand](https://www.wikiwand.com/en/PEAR)

### ReactPHP

[ReactPHP: Event-driven, non-blocking I/O with PHP - ReactPHP](https://reactphp.org/)
[reactphp/react: Event-driven, non-blocking I/O with PHP.](https://github.com/reactphp/react)
[Category Archive "ReactPHP Series" — Cees-Jan Kiewiet's blog](https://blog.wyrihaximus.net/categories/reactphp-series/)
[FLOSS Weekly 486 ReactPHP](https://twit.tv/shows/floss-weekly/episodes/486)

### Scraping

[PHP: DOMDocument::loadHTML - Manual](https://www.php.net/manual/en/domdocument.loadhtml.php)
[How to Parse HTML using PHP Native Classes](https://codingreflections.com/php-parse-html/)

[PHP Scraper - An opinionated web-scraping library for PHP](https://phpscraper.de/)

[paquettg/php-html-parser: An HTML DOM parser. It allows you to manipulate HTML. Find tags on an HTML page with selectors just like jQuery.](https://github.com/paquettg/php-html-parser)

[PHP Simple HTML DOM Parser](https://simplehtmldom.sourceforge.io/)

### Database/ORM

[Medoo - The lightweight PHP database framework to accelerate development.](https://medoo.in/)

## App Frameworks

#web-framework

[php-framework · GitHub Topics](https://github.com/topics/php-framework?o=desc&s=stars)
[Top 5 PHP REST API Frameworks | Moesif Blog](https://www.moesif.com/blog/api-product-management/api-analytics/Top-5-PHP-REST-API-Frameworks/)

### Symfony

[Symfony, High Performance PHP Framework for Web Development](https://symfony.com/)
[symfony/symfony: The Symfony PHP framework](https://github.com/symfony/symfony)

### Laravel

[Laravel - The PHP Framework For Web Artisans](https://laravel.com/)
[Laravel - Wikiwand](https://www.wikiwand.com/en/Laravel)

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

#### Apiato

> API framework made out of Laravel

[Welcome to Apiato | Apiato](http://apiato.io/)
[apiato/apiato: PHP Framework for building scalable API's on top of Laravel.](https://github.com/apiato/apiato)

#### PhalApi

> API server with docs

[PhalApi(派框架) - PHP 轻量级开源接口框架 - 接口，从简单开始！](http://www.phalapi.net/)
[phalapi/phalapi: PhalApi 开源接口框架，简称 π 框架，一个轻量级 PHP 开源接口框架，专注于接口服务开发。接口，从简单开始！](https://github.com/phalapi/phalapi)

[前言 - PhalApi 2.x 开源接口框架 开发文档](http://docs.phalapi.net/#/v2.0/tutorial)

#### Lumen

> lightweight micro-API framework made out of Laravel
> not recommended

[Installation - Lumen - PHP Micro-Framework By Laravel](https://lumen.laravel.com/docs/9.x)

### Laminas

> previously Zend Framework

[Home - Laminas Project - Enterprise PHP Framework](https://getlaminas.org/)
[Laminas API Tools](https://api-tools.getlaminas.org/) not very active

### Nette

> collection of libraries rather than framework

[Nette – Comfortable and Safe Web Development in PHP](https://nette.org/en/)

### Yii

[Yii PHP Framework](https://www.yiiframework.com/)
[Getting Started: Installing Yii | The Definitive Guide to Yii 2.0 | Yii PHP Framework](https://www.yiiframework.com/doc/guide/2.0/en/start-installation)

### Leaf PHP

> lightweight

[Leaf PHP - Simple and elegant PHP | Leaf PHP](https://leafphp.dev/)
[Modules | Leaf PHP](https://leafphp.dev/modules/)
[leafsphp/leaf: 🍁 The easiest way to create clean, simple but powerful web apps and APIs quickly](https://github.com/leafsphp/leaf#-the-leaf-ecosystem-modules)

[Leaf MVC](https://mvc.leafphp.dev/)
[Leaf API](https://api.leafphp.dev/)

### Yaf

[PHP: Yaf - Manual](https://www.php.net/manual/en/book.yaf.php)
[laruence/yaf: Fast php framework written in c, built in php extension](https://github.com/laruence/yaf)

### Epiphany

> Routing, Caching and API Helpers (private)
