---
title: Vim notes
description: A screen-oriented text editor originally created for the Unix operating system
created: 2015-01-14
updated: 2024-07-04
tags:
  - app
  - shell-tool
  - vim
---

[[neovim-notes]]

[vim](<https://en.wikipedia.org/wiki/Vim_(text_editor)>)
[Vim: help.txt](https://vimhelp.org/)
[Vim Tips Wiki | Fandom](https://vim.fandom.com/wiki/Vim_Tips_Wiki)

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
[Vim Tutorial for Beginners - YouTube](https://www.youtube.com/watch?v=RZ4p-saaQkc) freeCodeCamp, 1:14:28
[VIM The Ultimate Editor - YouTube](https://www.youtube.com/watch?v=P88ydZVcm1s)
[50+ Vim Tips and Tricks from Beginner to Expert - YouTube](https://www.youtube.com/watch?v=ZEIpdC_klDI)
[Vim Tips - YouTube](https://www.youtube.com/playlist?list=PL0tgH22U2S3GN7MdobsdWV44qw-P5g7RJ)

[Learn Vim For the Last Time: A Tutorial and Primer - Daniel Miessler](https://danielmiessler.com/study/vim/)
[How To Learn Vim: A Four Week Plan – Actualize – Medium](https://medium.com/actualize-network/how-to-learn-vim-a-four-week-plan-cd8b376a9b85)
[vimtutor(1): Vim tutor - Linux man page](https://linux.die.net/man/1/vimtutor)

[《Practical Vim》 - PegasusWang的读书笔记](https://pegasuswang.readthedocs.io/zh/latest/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/practical_vim/practical_vim/)

[VimGolf - real Vim ninjas count every keystroke!](http://www.vimgolf.com/)
[Learn VIM while playing a game - VIM Adventures](https://vim-adventures.com/)
[ThePrimeagen/vim-be-good: vim-be-good is a nvim plugin designed to make you better at Vim Movements.](https://github.com/ThePrimeagen/vim-be-good)

## Vim Motion

Vim Motion vs Vim the editor
Vim Motion is applicable in other editors (as vim mode or vim plugin)

- `:help jump-motions`
- normal mode
  `{command} {count}{modifier} {motion/text-object}`
  command: `d`, `c`, `y`, `v`, `u`, `x`
  modifier: `i`inside, `a`around (including), `t` till (excluding), `s` surround
  motion: `h`, `j`, `k`, `l`, `G`, `^`, `$`, `+`, `-`, `\_`, `%`
  text-object (used with modifier): `w` word (separated by token), `W` WORD (separated by space), `{`/`}`/`p` paragraph, `b`/`(` parentheses = (), `B`/`{` braces = {}, `[` bracket, {literal character}
  `ctrl` + `o` to escape to normal mode for one command
- insert mode
  `i`: insert before cursor
  `a`: append after cursor
  `I`: insert at beginning of line
  `A`: append to end of line
  `s`: substitute characters
  `S`: substitute line
  `o`: open line below
  `O`: open line above
- replace mode
  `R`: replace mode
  `r`: replace character
- visual mode (`v`)
  `v`: visual mode
  `V`: visual line
- cheatsheet
  - `f(` find next bracket (find)
  - `t(` find character before next bracket (until)
  - `F(` find previous bracket
  - `T(` find previous bracket before next bracket
  - `ci(`/`ci)` replace within next bracket (change inside = delete + insert mode)
  - `di(`/`di)` delete between next bracket (delete inside)
  - `f(ci(` find next bracket, replace within next bracket
  - `df)` delete to next bracket (including bracket)
  - `dt(` delete to next bracket (excluding bracket)
  - `daw` delete a word (delete around word)
  - `caw` change a word (delete around word and enter insert mode)
  - `;` repeat last `f`/`t`/`F`/`T` command
  - `,` repeat last `f`/`t`/`F`/`T` command in opposite direction
  - `gf` goto file (open file under cursor)
  - `gF` goto file (open file under cursor in new tab)
  - `gd` goto definition (open definition under cursor)
  - `gD` goto definition (open definition under cursor in new tab)
  - `g;`/`gi` goto last edit
  - `ds"` delete surrounding quotes
  - `/<tring>` search forward for string
  - `?<string>` search backward for string
  - `cs*tem>` change surrounding \* for the \<em> tag
  - `ysiw"` surround word under the cursor with quotes

[Vim Cheat Sheet - English](https://vim.rtorr.com/)
[vi-vim-cheat-sheet](http://www.viemu.com/vi-vim-cheat-sheet.gif)

[vim motions](https://www.phind.com/search?cache=588ad35e-8713-4f93-b0ba-6d0844af5f71)
[Vim: motion.txt](https://vimhelp.org/motion.txt.html)
[Moving Blazingly Fast With The Core Vim Motions | Barbarian Meets Coding](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/moving-blazingly-fast-with-the-core-vim-motions/)
[Why Vim Is More than Just an Editor – Vim Language, Motions, and Modes Explained](https://www.freecodecamp.org/news/vim-language-and-motions-explained/)
[vim Tutorial => Basic Motion](https://riptutorial.com/vim/example/5512/basic-motion)
[Vim Tips - YouTube](https://www.youtube.com/playlist?list=PL0tgH22U2S3GN7MdobsdWV44qw-P5g7RJ) Nir Lichtman
[SPEED UP your Vim navigation skills! - YouTube](https://www.youtube.com/watch?v=GYVbYCST_Yc)
[The SECRET to Learning Neovim - YouTube](https://www.youtube.com/watch?v=HhZJ1kbzkj0)
[Vim Tutorial - YouTube](https://www.youtube.com/watch?v=IiwGbcd8S7I) 1:04:44
[VIM ALPHABET - YouTube](https://www.youtube.com/playlist?list=PLnc_NxpmOxaNqdGvUg8RBi8ZTaZGPdqBD) chantastic

## VSCode

[Vim - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) "Use system clipboard", "Enable EasyMotion"
[VSCodeVim/Vim: :star: Vim for Visual Studio Code](https://github.com/VSCodeVim/Vim)

Free up keys:
[VS code VIM extension copy and paste - Stack Overflow](https://stackoverflow.com/questions/58306002/vs-code-vim-extension-copy-and-paste)
[visual studio code - When I use Shift + Alt + UpArrow or DownArrow in VScode it goes into Multi-Cursor mode - Stack Overflow](https://stackoverflow.com/questions/69939030/when-i-use-shift-alt-uparrow-or-downarrow-in-vscode-it-goes-into-multi-curso)

[Boost Your Coding Fu With VSCode and Vim - The Book | Barbarian Meets Coding](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim)
[Boost Your Coding Fu With VSCode and Vim - Table Of Contents | Barbarian Meets Coding](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/table-of-contents)
[Boost Your Coding Fu With VSCode and Vim - Cheatsheet | Barbarian Meets Coding](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/cheatsheet/)
[Vim in VSCode - YouTube](https://www.youtube.com/playlist?list=PLWkmatwYW3nE0bhFmV3zxtqHGTowomCRY) Jaime González García

[Getting Started with Vim in Visual Studio Code - YouTube](https://www.youtube.com/watch?v=h-epcklOC_g)

[10 VS Code Vim Tricks to Boost Your Productivity ⚡ - DEV Community](https://dev.to/ansonh/10-vs-code-vim-tricks-to-boost-your-productivity-1b0n)

Melkey
[Why I am LEAVING Neovim After 4 Years For VSCode - YouTube](https://www.youtube.com/watch?v=PLxpyUYvC_o)
[Mastering VIM Motions in VSCode (Mouseless development) - YouTube](https://www.youtube.com/watch?v=GST8we5uABo)

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
[《Learn vim scrpt the hard way》 - PegasusWang的读书笔记](https://pegasuswang.readthedocs.io/zh/latest/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/learn_vim_the_hard_way/)

## Vim Distros

[spf13-vim - The Ultimate Vim Distribution](https://vim.spf13.com/)

[Home | SpaceVim](https://spacevim.org/)

## Plugins

[junegunn/vim-plug: :hibiscus: Minimalist Vim Plugin Manager](https://github.com/junegunn/vim-plug)

[Vim Awesome](https://vimawesome.com/)
