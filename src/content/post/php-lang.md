---
title: PHP
description: ""
created: 2021-05-28
updated: 2023-03-27
tags:
  - comp.lang
  - php
---

[PHP: Hypertext Preprocessor](https://www.php.net/)
[PHP - ArchWiki](https://wiki.archlinux.org/title/PHP)
[ziadoz/awesome-php: A curated list of amazingly awesome PHP libraries, resources and shiny things.](https://github.com/ziadoz/awesome-php)

[The Definitive PHP 7.2, 7.3, 7.4, 8.0, and 8.1 Benchmarks (2023)](https://kinsta.com/blog/php-benchmarks/)
[Modern tools for PHP developers - LogRocket Blog](https://blog.logrocket.com/modern-tools-php-developers/) > 7.0 in 2015, > 8.1 in 2022
[security-checklist/php-security-check-list: PHP Security Check List [ EN ] 🌋 ☣️](https://github.com/security-checklist/php-security-check-list)
[Upgrading your site to PHP 8 - The Joomla Community Magazine](https://magazine.joomla.org/all-issues/december-2022/upgrading-your-site-to-php-8) Frameworks takes time to port to latest PHP, try upgrading in May-Aug for the Dec PHP release

[Create a PHP REST API : Write a RESTful API from Scratch using Plain, Object-Oriented PHP and MySQL - YouTube](https://www.youtube.com/watch?v=X51KOJKrofU)

## Commentary

[Is PHP Dead? No! At Least Not According to PHP Usage Statistics](https://kinsta.com/blog/is-php-dead/)
[PHP in decline: The rise and fall of a programming language - JAXenter](https://jaxenter.com/php-tiobe-sept-2019-162096.html)

[Does PHP Suck?! - The Answer May Surprise You! - YouTube](https://www.youtube.com/watch?v=NdCkwiyIYLU)
[Does PHP Suck? | Prime React - YouTube](https://www.youtube.com/watch?v=Hh72yCYlaww)

### the bad

[Is PHP a badly designed programming language? - Quora](https://www.quora.com/Is-PHP-a-badly-designed-programming-language)
[Why is PHP hated by so many developers? - Quora](https://www.quora.com/Why-is-PHP-hated-by-so-many-developers)
[PHP: a fractal of bad design / fuzzy notepad](http://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/)
[PHP Sadness](http://phpsadness.com/)
[The PHP Singularity](http://blog.codinghorror.com/the-php-singularity/)

## Installation

[[#Docker PHP FPM]]

[AUR (en) - php81](https://aur.archlinux.org/packages/php81)

```sh
yay -S php81-cli php81-phar
```

## Config

[PHP: Description of core php.ini directives - Manual](https://www.php.net/manual/en/ini.core.php)

```sh
$ php --ini
Configuration File (php.ini) Path: /etc/php7
Loaded Configuration File:         /etc/php7/php.ini
Scan for additional .ini files in: /etc/php7/conf.d
Additional .ini files parsed:      (none)
```

```sh
php -m  # show modules

echo '<?php phpinfo(); ?>' > /srv/http/phpinfo.php
# visit http://localhost/phpinfo.php

cat << 'EOF' > version.php
<?php
// prints e.g. 'Current PHP version: 4.1.1'
echo 'Current PHP version: ' . phpversion();

// prints e.g. '2.0' or nothing if the extension isn't enabled
echo phpversion('tidy');
?>
EOF
```

## Version Manager

### phpbrew

[phpbrew/phpbrew: Brew & manage PHP versions in pure PHP at HOME](https://github.com/phpbrew/phpbrew)

## Dev Environment

### Homestead

[Laravel Homestead - Laravel - The PHP Framework For Web Artisans](https://laravel.com/docs/10.x/homestead)

### Docker Homestead/Laradock

[用 Docker 取代 Laravel Homestead 開發環境 | Laravel | Laravel China 社区](https://learnku.com/laravel/t/1855/replacing-laravel-homestead-development-environment-with-docker)
[laraedit/laraedit-docker: Dockerized version of Laravel Homestead](https://github.com/laraedit/laraedit-docker) PHP7

[shincoder/homestead - Docker Image | Docker Hub](https://hub.docker.com/r/shincoder/homestead) PHP7.3
[jaouadk/homestead-docker: Multi app development container.](https://github.com/jaouadk/homestead-docker)

[Laradock](http://laradock.io/)
[laradock/laradock: Full PHP development environment for Docker.](https://github.com/Laradock/laradock)

### Docker PHP FPM

[PHPDocker.io - Generator](https://phpdocker.io/) !important, project creator
[phpdockerio/php - Docker Image | Docker Hub](https://hub.docker.com/r/phpdockerio/php)
[phpdocker-io/base-images: Base docker images for PHPDocker.io](https://github.com/phpdocker-io/base-images)

[richarvey/nginx-php-fpm: Nginx and php-fpm for dockerhub builds](https://github.com/richarvey/nginx-php-fpm) PHP 8

[jniltinho/caddy-php-fpm: Caddy v2 + PHP-FPM 7.2.x + Composer built on Ubuntu](https://github.com/jniltinho/caddy-php-fpm)
[Yavin/docker-alpine-php-fpm: Docker image for php-fpm based on alpine linux that makes it small](https://github.com/Yavin/docker-alpine-php-fpm) 7.2, with extensions

### HHVM/Hack

[HHVM | HHVM](http://hhvm.com/) JIT VM for Hack, PHP 5 and majority of PHP 7.
[The Hack Programming Language | Hack](http://hacklang.org/)

Zend PHP 7.3 outperforms HHVM in PHP

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
[PHP: The Right Way](https://www.phptherightway.com/) !important
[learning-zone/php-basics: PHP Basics ( v8.x )](https://github.com/learning-zone/php-basics)
[PHP Best Practices: a short, practical guide for common and confusing PHP tasks](https://phpbestpractices.org)

[27 Best Tutorials to Learn PHP in 2021 (Free and Paid Resources)](https://kinsta.com/blog/php-tutorials/)
[8 Awesome and Free PHP Books - Tutorialzine](https://tutorialzine.com/2018/03/8-awesome-and-free-php-books)
[Learn Laravel | Laracasts](https://laracasts.com/) also courses on other topics
[PHP Tutorial for Beginners: Free 7-Hour Course](https://code.tutsplus.com/tutorials/php-tutorial-for-beginners--cms-93000)

[How to Learn PHP](https://code.tutsplus.com/articles/how-to-learn-php--cms-37726)
[PHP Tutorial => Getting started with PHP](https://riptutorial.com/php) <= 7.1

## Basic

[The Basics - PHP: The Right Way](https://phptherightway.com/pages/The-Basics.html)

```sh
$ php -a
Interactive shell

php > echo 5+8;
13

php > $a = array(1, 2, array("a", "b", "c"));
php > var_dump($a);

php > echo phpinfo();
....
```

```sh
# php -S <ip:port> -t <root> <PHP file>
$ php -S 0.0.0.0:8080 -t public public/index.php
```

## Builtin types

[PHP: Types - Manual](https://www.php.net/manual/en/language.types.php)
[PHP: Function Reference - Manual](https://www.php.net/manual/en/funcref.php)

### Array

Array are actually map/dict of keys to values.
Key may be a `string` or an `int`, value can be any type.

[PHP: Array Functions - Manual](https://www.php.net/manual/en/ref.array.php)
[array_column](https://www.php.net/manual/en/function.array-column.php) `object.pick()`
[array_keys](https://www.php.net/manual/en/function.array-keys.php), [array_values](https://www.php.net/manual/en/function.array-values.php)
[array_combine](https://www.php.net/manual/en/function.array-combine.php) `zip()`
[compact](https://www.php.net/manual/en/function.compact.php) lookup local variable and construct map

```php
$array[] = 'ValueX'; // Append 'ValueX' to the end of the array
$array += ['keyX' => 'valueX', 'keyY' => 'valueY']; // adding/overwrite elements

```

```php
$fruits = ['banana', 'apple'];
var_dump(in_array('banana', $fruits)); // true
var_dump(array_key_exists(2, $fruits)); // false
var_dump(array_search('apple', $fruits));  // return key or false
```

```php
$colors = ["red", "green", "blue"]; // keys default to 0,1,2,...
foreach ($colors as $color) {
    echo "I am the color $color<br>";
}

$foods = ["healthy" => "Apples", "bad" => "Ice Cream"]; // explicit keys
foreach ($foods as $key => $food) {
    echo "Eating $food is $key";
}
```

Array in loop by value won't change during the loop, loop with reference with change will affect later iterations
[Concurrency](https://riptutorial.com/php/example/20267/using-foreach#undefined)

```php
foreach ($array as $key => $value) {
}

foreach ($array as $key => &$value) {
}
```

### Class/Object

[PHP: Classes/Objects - Manual](https://www.php.net/manual/en/book.classobj.php)

## Variables

[PHP: Variable handling - Manual](https://www.php.net/manual/en/book.var.php)
[PHP: Variables From External Sources - Manual](https://www.php.net/manual/en/language.variables.external.php)

[PHP: $\_SERVER - Manual](https://www.php.net/manual/en/reserved.variables.server.php)
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

### Validation

> works with strings

[PHP: filter_var - Manual](https://www.php.net/manual/en/function.filter-var.php)
[PHP: filter_var_array - Manual](https://www.php.net/manual/en/function.filter-var-array.php)
[PHP: Types of filters - Manual](https://www.php.net/manual/en/filter.filters.php)

## CLI

[PHP: Command line usage - Manual](https://www.php.net/manual/en/features.commandline.php)

```php
<?php
if ($argc !== 2) {
    echo "Usage: php hello.php <name>" . PHP_EOL;
    exit(1);
}
$name = $argv[1];
echo "Hello, $name" . PHP_EOL;
```

## Linter/Style

[PER Coding Style - PHP-FIG](https://www.php-fig.org/per/coding-style/)

[Intelephense](https://intelephense.com/)

---

# Typst

[Typst: Compose papers faster](https://typst.app/)
[Typst: The LaTeX alternative in Rust - YouTube](https://www.youtube.com/watch?v=sWmlbMh3ol8)
