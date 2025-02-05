---
title: Zsh shell
description: ""
created: 2014-12-08
updated: 2025-01-09
tags:
  - linux
  - oh-my-zsh
  - settings
  - shell
  - zsh
---

I've been using Zsh for a several years and customized it with themes and `oh-my-zsh`.
The makes Zsh a bit sluggish and I found [Starship](https://starship.rs/) to place Spaceship.
That's when I jumped ship to [[shell-fish]].

[Zsh](http://www.zsh.org/)
[ZshWiki](http://zshwiki.org/home/)
[zsh: Table of Contents](http://zsh.sourceforge.net/Doc/Release/zsh_toc.html)
[Zsh - ArchWiki](https://wiki.archlinux.org/title/Zsh)
[zsh-users](https://github.com/zsh-users/)

[unixorn/awesome-zsh-plugins: A collection of ZSH frameworks, plugins & themes inspired by the various awesome list collections out there.](https://github.com/unixorn/awesome-zsh-plugins)

[Minimalistic, powerful and extremely customizable Zsh prompt - Spaceship](https://spaceship-prompt.sh/)
[spaceship-prompt/spaceship-prompt: Minimalistic, powerful and extremely customizable Zsh prompt](https://github.com/spaceship-prompt/spaceship-prompt)

[Command Line Power User - YouTube](https://www.youtube.com/playlist?list=PLu8EoSxDXHP7tXPJp5ZmUpuT7sFvrswzf) video series by Web Bos
[Master Your Z Shell with These Outrageously Useful Tips - Blog - Reason I Am Here - Nacho Caballero](http://reasoniamhere.com/2014/01/11/outrageously-useful-tips-to-master-your-z-shell/)
[Supercharge your Terminal with Zsh – Callstack Engineers](https://blog.callstack.io/supercharge-your-terminal-with-zsh-8b369d689770)

[Zsh/Bash startup files loading order (.bashrc, .zshrc etc.) | The Lumber Room](https://shreevatsa.wordpress.com/2008/03/30/zshbash-startup-files-loading-order-bashrc-zshrc-etc/)

## oh-my-zsh

```sh
curl -L http://install.ohmyz.sh | sh
```

[ohmyzsh/ohmyzsh: 🙃 A delightful community-driven (with 2,000+ contributors) framework for managing your zsh configuration. Includes 300+ optional plugins (rails, git, macOS, hub, docker, homebrew, node, php, python, etc), 140+ themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.](https://github.com/ohmyzsh/ohmyzsh)
[Home · ohmyzsh/ohmyzsh Wiki](https://github.com/ohmyzsh/ohmyzsh/wiki)
[Plugins · ohmyzsh/ohmyzsh Wiki](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

[FLOSS Weekly 411 Oh My Zsh | TWiT](https://twit.tv/shows/floss-weekly/episodes/411)
[d’Oh My Zsh](https://medium.freecodecamp.com/d-oh-my-zsh-af99ca54212c#.su80q8anf)

[zshthem.es](http://zshthem.es/)

[Improve Your oh-my-zsh Startup Time (Maybe) - Patshead.com Blog](http://blog.patshead.com/2011/04/improve-your-oh-my-zsh-startup-time-maybe.html)

## antigen

[antigen.sharats.me](http://antigen.sharats.me/)
[zsh-users/antigen: A plugin manager for zsh, inspired by oh-my-zsh and vundle.](https://github.com/zsh-users/antigen)

## default shell

With oh-my-zsh installed and `~/.zshrc` updated, you may change your default shell to zsh.

```sh
chsh -s $(which zsh) ${USER}
```

## Completion

[Compleat: Bash completion for human beings](https://limpet.net/mbrubeck/2009/10/30/compleat.html)
[mbrubeck/compleat: Generate command-line completions using a simple DSL.](https://github.com/mbrubeck/compleat)
[zsh-users/zsh-completions: Additional completion definitions for Zsh.](https://github.com/zsh-users/zsh-completions)

## history

[Low Level Manager: zsh history: extend and persist](http://www.lowlevelmanager.com/2012/04/zsh-history-extend-and-persist.html)
[Low Level Manager: Zsh history expansion](http://www.lowlevelmanager.com/2012/05/zsh-history-expansion.html)
[examples:zhisthack [ZshWiki]](http://zshwiki.org/home/examples/zhisthack)

## prompt

[config:prompt [ZshWiki]](http://zshwiki.org/home/config/prompt)

[Low Level Manager: Smile! with a Zsh prompt happy/sad face](http://www.lowlevelmanager.com/2012/03/smile-zsh-prompt-happysad-face.html)
[jimeh/git-aware-prompt](https://github.com/jimeh/git-aware-prompt)
[sindresorhus/pure](https://github.com/sindresorhus/pure)

[How to: Change / Setup bash custom prompt (PS1)](http://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html)

[nojhan/liquidprompt](https://github.com/nojhan/liquidprompt)

Hide extra info for presentation:
<https://gist.github.com/BretFisher/78a90d4e39e79d5f3c9769d4002f67a7>
