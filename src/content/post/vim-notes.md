---
title: Aim notes
description: A screen-oriented text editor originally created for the Unix operating system
created: 2015-01-14
updated: 2023-04-09
tags:
  - app
  - shell-tool
  - vim
---

[vim](<https://en.wikipedia.org/wiki/Vim_(text_editor)>)

[Vim documentation: help](http://vimdoc.sourceforge.net/htmldoc/help.html)

[Vimcasts - Free screencasts about the text editor Vim](http://vimcasts.org/)
[A guide to getting started with Vim](http://www.integralist.co.uk/posts/vim-1.html)
[Vim Workflow](http://www.integralist.co.uk/posts/vim-2.html)
[Vim Workflow (Part Deux)](http://www.integralist.co.uk/posts/vim-3.html)
[Vim workflows](http://mrmrs.io/writing/2013/12/21/vim-workflows/)
[简明 Vim 练级攻略 | 酷 壳 - CoolShell.cn](http://coolshell.cn/articles/5426.html)
[无插件 Vim 编程技巧 | 酷 壳 - CoolShell.cn](http://coolshell.cn/articles/11312.html)
[Interactive Vim tutorial](http://www.openvim.com/tutorial.html)
[How to Learn Vim](http://mrmrs.io/writing/2013/12/19/how-to-learn-vim/)
[Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/)
[Learn Vim For the Last Time: A Tutorial and Primer - Daniel Miessler](https://danielmiessler.com/study/vim/)
[How To Learn Vim: A Four Week Plan – Actualize – Medium](https://medium.com/actualize-network/how-to-learn-vim-a-four-week-plan-cd8b376a9b85)
[vimtutor(1): Vim tutor - Linux man page](https://linux.die.net/man/1/vimtutor)

[Vim Cheat Sheet - English](https://vim.rtorr.com/)
[VimGolf - real Vim ninjas count every keystroke!](http://www.vimgolf.com/)
[Learn VIM while playing a game - VIM Adventures](https://vim-adventures.com/)
[ThePrimeagen/vim-be-good: vim-be-good is a nvim plugin designed to make you better at Vim Movements.](https://github.com/ThePrimeagen/vim-be-good)

## Vim Motion

Vim Motion vs Vim the editor
Vim Motion is applicable in other editors (as vim mode or vim plugin)

- normal mode
  `{command} {count} {motion}`
  command: `d`, `c`, `y`, `v`, `u`
  motion: `h`, `j`, `k`, `l`, `w`, `b`, `G`, `^`, `$`, `+`, `-`
- insert mode (`i`/`a`)
- visual mode (`v`)
  `shift+v`: visual line Modeling
- command mode

[vim motions](https://www.phind.com/search?cache=588ad35e-8713-4f93-b0ba-6d0844af5f71)
[Vim documentation: motion](https://vimdoc.sourceforge.net/htmldoc/motion.html)
[Moving Blazingly Fast With The Core Vim Motions | Barbarian Meets Coding](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/moving-blazingly-fast-with-the-core-vim-motions/)
[Why Vim Is More than Just an Editor – Vim Language, Motions, and Modes Explained](https://www.freecodecamp.org/news/vim-language-and-motions-explained/)
[vim Tutorial => Basic Motion](https://riptutorial.com/vim/example/5512/basic-motion)

## ThePrimeagen

[Vim As Your Editor - YouTube](https://www.youtube.com/playlist?list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R)

[Vim As Your Editor - Introduction - YouTube](https://www.youtube.com/watch?v=X6AR2RMB5tE)
[Vim As Your Editor - Horizontal - YouTube](https://www.youtube.com/watch?v=5JGVtttuDQA)
[Vim As Your Editor - Vertical Movements - YouTube](https://www.youtube.com/watch?v=KfENDDEpCsI)

## hex mode

Enter hex mode: `:%!xxd`
Exit hex mode: `:%!xxd -r`

## diff mode

`vimdiff file1 file2`

```
Ctrl+w Ctrl+w - change focus
]c          - next difference
[c          - previous difference
do          - diff obtain
dp          - diff put
zo          - open folded text
zc          - close folded text
:diffupdate, :diffu - re-scan the files for differences
:set [no]scrollbind - disable/enable scroll binding
```

[Vim documentation: diff](http://vimdoc.sourceforge.net/htmldoc/diff.html)
[chrisbra/vim-diff-enhanced](https://github.com/chrisbra/vim-diff-enhanced)
[vimdiff - How do I use vim as a diff tool? - Vi and Vim Stack Exchange](https://vi.stackexchange.com/questions/625/how-do-i-use-vim-as-a-diff-tool)

## paste

[editor - Turning off auto indent when pasting text into vim - Stack Overflow](http://stackoverflow.com/questions/2514445/turning-off-auto-indent-when-pasting-text-into-vim)
[coderwall.com : establishing geek cred since 1305712800](https://coderwall.com/p/if9mda/automatically-set-paste-mode-in-vim-when-pasting-in-insert-mode)

enter paste mode: `:set paste`
exit paste mode: `:set nopaste`

You can toggle paste mode with key by adding this to your `.vimrc`:

```
set pastetoggle=<F9>
```

## VimScript

This is the bad part of Vim for introducing another language for plugin, and for breaking changes

[aharris88/learn-vimscript: My solutions to the exercises in Learn Vimscript the Hard Way](https://github.com/aharris88/learn-vimscript)

## Vim Distros

[spf13-vim - The Ultimate Vim Distribution](https://vim.spf13.com/)

[Home | SpaceVim](https://spacevim.org/)

### Neovim

Vim uses VimScript, Neovim embed Lua/MicroPython

[Home - Neovim](https://neovim.io/)
[Why Neovim? with TJ DeVries, Neovim core maintainer (The Changelog #457) |> Changelog](https://changelog.com/podcast/457)
[Modern Neovim — init.lua. Craft a modernized development… | by alpha2phi | Medium](https://alpha2phi.medium.com/modern-neovim-init-lua-ab1220e3ecc1)
ThePrimeagen
[Using Vim 2023 - YouTube](https://www.youtube.com/watch?v=FrMRyXtiJkc)
[0 to LSP : Neovim RC From Scratch - YouTube](https://www.youtube.com/watch?v=w7i4amO_zaE)

[Turn VIM into a full featured IDE with only one command - YouTube](https://www.youtube.com/watch?v=Mtgo-nP_r8Y)

[Vim - YouTube](https://www.youtube.com/playlist?list=PLmcTCfaoOo_grgVqU7UbOx7_RG9kXPgEr) DevOps Toolbox

[Neovim lua plugins](https://nvimluau.dev/)

[neovim/nvim-lspconfig: Quickstart configurations for the Nvim LSP client](https://github.com/neovim/nvim-lspconfig)
[nvim-telescope/telescope.nvim: Find, Filter, Preview, Pick. All lua, all the time.](https://github.com/nvim-telescope/telescope.nvim)
[nvim-lualine/lualine.nvim: A blazing fast and easy to configure neovim statusline plugin written in pure lua.](https://github.com/nvim-lualine/lualine.nvim)
[lualine.nvim/THEMES.md at master · nvim-lualine/lualine.nvim · GitHub](https://github.com/nvim-lualine/lualine.nvim/blob/master/THEMES.md)

[L3MON4D3/LuaSnip: Snippet Engine for Neovim written in Lua.](https://github.com/L3MON4D3/LuaSnip)

#### Neovim Distros

[Exploring the Top Neovim Distributions: LazyVim, LunarVim, AstroVim, and NVChad — Which One Reigns Supreme? | by Adam Poniatowski | Mar, 2023 | Medium](https://medium.com/@adaml.poniatowski/exploring-the-top-neovim-distributions-lazyvim-lunarvim-astrovim-and-nvchad-which-one-reigns-3adcdbfa478d)

[🚀 Getting Started | LazyVim](https://www.lazyvim.org/)
[LazyVim/LazyVim: Neovim config for the lazy](https://github.com/LazyVim/LazyVim)

[Getting Started | AstroNvim](https://astronvim.com/)
[Neovim With AstroNvim | Your New Advanced Development Editor - YouTube](https://www.youtube.com/watch?v=GEHPiZ10gOk)

[LunarVim | LunarVim](https://www.lunarvim.org/)
