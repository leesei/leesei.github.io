---
title: vim notes
description: ""
created: 2015-01-14
tags:
  - app
  - shell-tool
  - vim
---

[vim](<https://en.wikipedia.org/wiki/Vim_(text_editor)>) is a screen-oriented text editor originally created for the Unix operating system

[Vim documentation: help](http://vimdoc.sourceforge.net/htmldoc/help.html)

[spf13-vim - The Ultimate Vim Distribution](https://vim.spf13.com/)
[Home | SpaceVim](https://spacevim.org/)

[Vimcasts - Free screencasts about the text editor Vim](http://vimcasts.org/)
[vimgifs](https://vimgifs.com/)
[A guide to getting started with Vim](http://www.integralist.co.uk/posts/vim-1.html)
[Vim Workflow](http://www.integralist.co.uk/posts/vim-2.html)
[Vim Workflow (Part Deux)](http://www.integralist.co.uk/posts/vim-3.html)
[Vim workflows](http://mrmrs.io/writing/2013/12/21/vim-workflows/)
[简明 Vim 练级攻略 | 酷 壳 - CoolShell.cn](http://coolshell.cn/articles/5426.html)
[无插件 Vim 编程技巧 | 酷 壳 - CoolShell.cn](http://coolshell.cn/articles/11312.html)
[Interactive Vim tutorial](http://www.openvim.com/tutorial.html)
[How to Learn Vim](http://mrmrs.io/writing/2013/12/19/how-to-learn-vim/)
[VimGolf - real Vim ninjas count every keystroke!](http://www.vimgolf.com/)
[Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/)
[Learn Vim For the Last Time: A Tutorial and Primer - Daniel Miessler](https://danielmiessler.com/study/vim/)
[How To Learn Vim: A Four Week Plan – Actualize – Medium](https://medium.com/actualize-network/how-to-learn-vim-a-four-week-plan-cd8b376a9b85)
[vimtutor(1): Vim tutor - Linux man page](https://linux.die.net/man/1/vimtutor)

[aharris88/learn-vimscript: My solutions to the exercises in Learn Vimscript the Hard Way](https://github.com/aharris88/learn-vimscript)
[Vim Cheat Sheet - English](https://vim.rtorr.com/)

## hex mode

Enter hex mod: `:%!xxd`
Exit hex mod: `:%!xxd -r`

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

## Neovim

[Home - Neovim](https://neovim.io/)
[Why Neovim? with TJ DeVries, Neovim core maintainer (The Changelog #457) |> Changelog](https://changelog.com/podcast/457)

[neovim/nvim-lspconfig: Quickstart configurations for the Nvim LSP client](https://github.com/neovim/nvim-lspconfig)
[nvim-telescope/telescope.nvim: Find, Filter, Preview, Pick. All lua, all the time.](https://github.com/nvim-telescope/telescope.nvim)

[L3MON4D3/LuaSnip: Snippet Engine for Neovim written in Lua.](https://github.com/L3MON4D3/LuaSnip)