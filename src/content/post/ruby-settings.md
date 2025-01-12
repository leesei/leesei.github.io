---
title: Ruby settings
description: ""
created: 2015-01-13
updated: 2025-01-09
tags:
  - comp/lang
  - gem
  - package-manager
  - python
  - rvm
  - settings
---

[My Ruby Development Environment](http://jimeh.me/blog/2011/11/01/my-ruby-development-environment/)

## Install `rvm`

[RVM: Ruby Version Manager](https://rvm.io/)

```sh
\curl -L https://get.rvm.io | bash -s stable
source ~/.rvm/bin/rvm
```

## Installing/updating Rubies

```sh
rvm list known

# ruby-latest have to be compiled
RUBY_VERSION=ruby-2.0.0
rvm install ${RUBY_VERSION}
rvm alias create default ${RUBY_VERSION}
```

## `rvm` basics

```sh
rvm list
rvm info    # general rvm info
rvm gemdir  # current gem directory
```

## modules

gem or rvm install?

```sh
gem install gitsu
gem install mdl

# redhat openshift
gem install rhc
```
