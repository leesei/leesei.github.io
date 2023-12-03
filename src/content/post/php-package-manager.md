---
title: PHP Package Manager
description: ""
created: 2023-03-27
updated: 2023-09-29
tags:
  - comp/lang
  - php
---

## Composer

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

### Autoloader

[PSR-0: Autoloading Standard - PHP-FIG](https://www.php-fig.org/psr/psr-0/)
[PSR-4: Autoloader - PHP-FIG](https://www.php-fig.org/psr/psr-4/)
[Basic usage Autoloading - Composer](https://getcomposer.org/doc/01-basic-usage.md#autoloading)
[Autoloader optimization - Composer](https://getcomposer.org/doc/articles/autoloader-optimization.md)

```php
<?php

require __DIR__ . "/vendor/autoload.php";

// your app code

?php>
```

## PEAR

> obsolete

[PEAR - PHP Extension and Application Repository](https://pear.php.net/) 1999, global `pear/`
[PEAR - Wikiwand](https://www.wikiwand.com/en/PEAR)
