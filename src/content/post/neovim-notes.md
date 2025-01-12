---
title: Neovim notes
description: hyperextensible Vim-based text editor
created: 2023-10-23
updated: 2025-01-09
tags:
  - app
  - neovim
  - shell-tool
---

[[vim-notes#Vim Motion]]

Vim uses VimScript, Neovim embed Lua/MicroPython

[Home - Neovim](https://neovim.io/)
[Documentation - Neovim](https://neovim.io/doc/)

[Why Neovim? with TJ DeVries, Neovim core maintainer (The Changelog #457) |> Changelog](https://changelog.com/podcast/457)
[Modern Neovim — init.lua. Craft a modernized development… | by alpha2phi | Medium](https://alpha2phi.medium.com/modern-neovim-init-lua-ab1220e3ecc1)
[Basic Neovim Commands/Crash Course - DEV Community](https://dev.to/arafat4693/basic-neovim-commands-4hmi)

[Elijah Manor - YouTube](https://www.youtube.com/@ElijahManor) LazyVim author
[Neovim 0.9 New Features - YouTube](https://www.youtube.com/watch?v=3TRouzuWOuQ)

[Andrew Courter - YouTube](https://www.youtube.com/@ascourter)

TJ DeVries
[Neovim & Extensibility - My Talk from Jane Street - YouTube](https://www.youtube.com/watch?v=MQBr9hwf0BY)
[Automatically Execute _Anything_ in Nvim - YouTube](https://www.youtube.com/watch?v=9gUatBHuXE0)
[Magically format embedded languages in Neovim - YouTube](https://www.youtube.com/watch?v=v3o9YaHBM4Q) treesitter, sqlparse

ThePrimeagen
[Using Vim 2023 - YouTube](https://www.youtube.com/watch?v=FrMRyXtiJkc)

DevOps Toolbox
[Vim - YouTube](https://www.youtube.com/playlist?list=PLmcTCfaoOo_grgVqU7UbOx7_RG9kXPgEr)
[Turn VIM into a full featured IDE with only one command - YouTube](https://www.youtube.com/watch?v=Mtgo-nP_r8Y)
[DEBUG in Neovim. Like a BOSS. - YouTube](https://www.youtube.com/watch?v=RziPWdTzSV8)
[Level Up Your Vim Game with These Hidden Tricks - YouTube](https://www.youtube.com/watch?v=ixJWAP1L6jc)

[SPEED UP your Vim navigation skills! - YouTube](https://www.youtube.com/watch?v=GYVbYCST_Yc)

DistroTube
[The Vim Lifestyle - YouTube](https://www.youtube.com/playlist?list=PL5--8gKSku15tivUyt0D-mERePLEzrWUz)

## Plugins

[Neovim lua plugins](https://nvimluau.dev/)

[folke/which-key.nvim: 💥 Create key bindings that stick. WhichKey is a lua plugin for Neovim 0.5 that displays a popup with possible keybindings of the command you started typing.](https://github.com/folke/which-key.nvim)

[numToStr/Comment.nvim: :brain: // Smart and powerful comment plugin for neovim. Supports treesitter, dot repeat, left-right/up-down motions, hooks, and more](https://github.com/numToStr/Comment.nvim)
[smoka7/multicursors.nvim: A multi cursor plugin for Neovim.](https://github.com/smoka7/multicursors.nvim)

[stevearc/oil.nvim: Neovim file explorer: edit your filesystem like a buffer](https://github.com/stevearc/oil.nvim) good for batch file rename?
[I found my favorite neovim plugin - YouTube](https://www.youtube.com/watch?v=93R9Gk_nI2A)

[sheerun/vim-polyglot: A solid language pack for Vim.](https://github.com/sheerun/vim-polyglot)

[L3MON4D3/LuaSnip: Snippet Engine for Neovim written in Lua.](https://github.com/L3MON4D3/LuaSnip)

### Navigation

[nvim-telescope/telescope.nvim: Find, Filter, Preview, Pick. All lua, all the time.](https://github.com/nvim-telescope/telescope.nvim) file finder

[ThePrimeagen/harpoon at harpoon2](https://github.com/ThePrimeagen/harpoon/tree/harpoon2) file bookmark
[Harpoon : Vim Conference 2021 - YouTube](https://www.youtube.com/watch?v=Qnos8aApa9g)

[ggandor/leap.nvim: Neovim's answer to the mouse 🦘](https://github.com/ggandor/leap.nvim)
[Become A Neovim Kangaroo - YouTube](https://www.youtube.com/watch?v=2KLFjhGjmbI)
[folke/flash.nvim: Navigate your code with search labels, enhanced character motions and Treesitter integration](https://github.com/folke/flash.nvim)
[The neovim motions plugin we've been waiting for - YouTube](https://www.youtube.com/watch?v=GcWYUumEsZo)

[mg979/vim-visual-multi: Multiple cursors plugin for vim/neovim](https://github.com/mg979/vim-visual-multi)
[Multiline Editing in Neovim - YouTube](https://www.youtube.com/watch?v=p4D8-brdrZo)
[Advanced Multiline Editing in Neovim - YouTube](https://www.youtube.com/watch?v=N-X_zjU5INs)

### Selection

[kylechui/nvim-surround: Add/change/delete surrounding delimiter pairs with ease. Written with in Lua.](https://github.com/kylechui/nvim-surround)
[echasnovski/mini.surround: Neovim Lua plugin with fast and feature-rich surround actions. Part of 'mini.nvim' library.](https://github.com/echasnovski/mini.surround)

### Syntax

[Tree-sitter｜Introduction](https://tree-sitter.github.io/tree-sitter/) AST parser, syntax highlight
[nvim-treesitter/nvim-treesitter: Nvim Treesitter configurations and abstraction layer](https://github.com/nvim-treesitter/nvim-treesitter)

[sheerun/vim-polyglot: A solid language pack for Vim.](https://github.com/sheerun/vim-polyglot)

### LSP/Linting

[williamboman/mason.nvim: Portable package manager for Neovim that runs everywhere Neovim runs. Easily install and manage LSP servers, DAP servers, linters, and formatters.](https://github.com/williamboman/mason.nvim) manages lsp and DAP
[neovim/nvim-lspconfig: Quickstart configurations for the Nvim LSP client](https://github.com/neovim/nvim-lspconfig) language server protocol
[How I Setup LSP In Neovim For An Amazing Dev Experience - Full Guide - YouTube](https://www.youtube.com/watch?v=NL8D8EkphUw)

[What the hell is NULL-LS | FREE COURSE // EP 4 - YouTube](https://www.youtube.com/watch?v=SxuwQJ0JHMU)

[jose-elias-alvarez/null-ls.nvim: Use Neovim as a language server to inject LSP diagnostics, code actions, and more via Lua.](https://github.com/jose-elias-alvarez/null-ls.nvim) 🗃️archived, lsp wrapper for linter, formatter
[nvimtools/none-ls.nvim: null-ls.nvim reloaded / Use Neovim as a language server to inject LSP diagnostics, code actions, and more via Lua.](https://github.com/nvimtools/none-ls.nvim)

[mfussenegger/nvim-dap: Debug Adapter Protocol client implementation for Neovim](https://github.com/mfussenegger/nvim-dap)
[rcarriga/nvim-dap-ui: A UI for nvim-dap](https://github.com/rcarriga/nvim-dap-ui)

### Statusline

[nvim-lualine/lualine.nvim: A blazing fast and easy to configure neovim statusline plugin written in pure lua.](https://github.com/nvim-lualine/lualine.nvim)
[lualine.nvim/THEMES.md at master · nvim-lualine/lualine.nvim · GitHub](https://github.com/nvim-lualine/lualine.nvim/blob/master/THEMES.md)

[echasnovski/mini.statusline: Neovim Lua plugin with minimal and fast statusline. Part of 'mini.nvim' library.](https://github.com/echasnovski/mini.statusline)
[echasnovski/mini.tabline: Neovim Lua plugin with minimal and fast tabline. Part of 'mini.nvim' library.](https://github.com/echasnovski/mini.tabline)

### Autocomplete

[hrsh7th/nvim-cmp: A completion plugin for neovim coded in Lua.](https://github.com/hrsh7th/nvim-cmp) autocomplete: CoPilot, preview for CSS class

## Version manager

[MordechaiHadad/bob: A version manager for neovim](https://github.com/MordechaiHadad/bob)

```sh
cargo-binstall bob-nvim
bob install 0.9.0
```

## Configuration

```sh
# config
~/.config/nvim
# cache
~/local/share/nvim
```

```sh
# uses ~/.config/nvim.custom
NVIM_APPNAME="nvim.custom" nvim
```

[0 to LSP : Neovim RC From Scratch - YouTube](https://www.youtube.com/watch?v=w7i4amO_zaE) ThePrimeagen
[Effective Neovim: Instant IDE - YouTube](https://www.youtube.com/watch?v=stqUbv-5u2s) TJ DeVries
[Awesome Neovim Setup From Scratch - Full Guide - YouTube](https://www.youtube.com/watch?v=JWReY93Vl6g) vim-plug
[Neovim for Newbs. FREE NEOVIM COURSE - YouTube](https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn) typecraft
[Neovim from Scratch - YouTube](https://www.youtube.com/playlist?list=PLhoH5vyxr6Qq41NFL4GvhFp-WLd5xzIzZ) chris@machine
[Effective Neovim setup for web development towards 2024 - YouTube](https://www.youtube.com/watch?v=fFHlfbKVi30) 1:00:27

[Neovim Is Better](https://christitus.com/neovim-is-better/)
[Neovim is Better - YouTube](https://www.youtube.com/watch?v=6VbOLOuiHUI)

[The perfect Neovim setup for Python - YouTube](https://www.youtube.com/watch?v=4BnVeOUeZxc)

[folke (folke) / Repositories · GitHub](https://github.com/folke?tab=repositories&type=source)
[folke/lazy.nvim: 💤 A modern plugin manager for Neovim](https://github.com/folke/lazy.nvim)
[folke/neoconf.nvim: 💼 Neovim plugin to manage global and project-local settings](https://github.com/folke/neoconf.nvim)
[folke/neodev.nvim: 💻 Neovim setup for init.lua and plugin development with full signature help, docs and completion for the nvim lua API.](https://github.com/folke/neodev.nvim)
[How To Use lazy.nvim For A Simple And Amazing Neovim Config - YouTube](https://www.youtube.com/watch?v=6mxWayq-s9I)

[junegunn/vim-plug: :hibiscus: Minimalist Vim Plugin Manager](https://github.com/junegunn/vim-plug)

[wbthomason/packer.nvim: A use-package inspired plugin manager for Neovim. Uses native packages, supports Luarocks dependencies, written in Lua, allows for expressive config](https://github.com/wbthomason/packer.nvim)
[nvim-lua/kickstart.nvim: A launch point for your personal nvim configuration](https://github.com/nvim-lua/kickstart.nvim) packer
[Kickstart Your Neovim Config - YouTube](https://www.youtube.com/watch?v=hnTXJGm8VBA)

[ChrisTitusTech/neovim](https://github.com/ChrisTitusTech/Neovim)
[ThePrimeagen/init.lua](https://github.com/ThePrimeagen/init.lua)
[Melkeydev/NvimConfig](https://github.com/Melkeydev/NvimConfig) TJ DeVries

## Commentaries

[How to ACTUALLY switch from VS Code to Neovim - YouTube](https://www.youtube.com/watch?v=aCgDs8Nv-jo)
[The 5 Stages of Vim - YouTube](https://www.youtube.com/watch?v=uYXlgZKdsFM)

[Why I Switched From Neovim To VSCode](https://www.nexxel.dev/blog/neovim-to-vscode)

## Writing Plugins

[Automatically Execute _Anything_ in Nvim - YouTube](https://www.youtube.com/watch?v=9gUatBHuXE0)

- `vim.api.nvim_buf_set_lines()`
- `:help autocmd` events

[Neovim Lua Plugin From Scratch - YouTube](https://www.youtube.com/watch?v=n4Lp4cV8YR0)

## Neovim Distros

[Exploring the Top Neovim Distributions: LazyVim, LunarVim, AstroVim, and NVChad — Which One Reigns Supreme? | by Adam Poniatowski | Mar, 2023 | Medium](https://medium.com/@adaml.poniatowski/exploring-the-top-neovim-distributions-lazyvim-lunarvim-astrovim-and-nvchad-which-one-reigns-3adcdbfa478d)
[I tried Neovim Distributions so you don't have to - YouTube](https://www.youtube.com/watch?v=bbHtl0Pxzj8)

[🚀 Getting Started | LazyVim](https://www.lazyvim.org/) lazy.vim
[LazyVim/LazyVim: Neovim config for the lazy](https://github.com/LazyVim/LazyVim)
[Elijah Manor - YouTube](https://www.youtube.com/@ElijahManor)
[Zero to IDE with LazyVim - YouTube](https://www.youtube.com/watch?v=N93cTbtLCIM)
[LazyVim: Tailwind CSS Support - YouTube](https://www.youtube.com/watch?v=_NiWhZeR-MY)
`opts` shortcut to call `setup(opts)` as `config()`

[NvChad](https://nvchad.com/) lazy.vim
[NvChad/NvChad: Blazing fast Neovim config providing solid defaults and a beautiful UI, enhancing your neovim experience.](https://github.com/NvChad/NvChad)

[LunarVim | LunarVim](https://www.lunarvim.org/) lazy.vim
[LunarVim/LunarVim: 🌙 LunarVim is an IDE layer for Neovim. Completely free and community driven.](https://github.com/lunarvim/lunarvim)

[Getting Started | AstroNvim](https://astronvim.com/) lazy.vim
[AstroNvim/AstroNvim: AstroNvim is an aesthetic and feature-rich neovim config that is extensible and easy to use with a great set of plugins](https://github.com/AstroNvim/AstroNvim)
[Neovim With AstroNvim | Your New Advanced Development Editor - YouTube](https://www.youtube.com/watch?v=GEHPiZ10gOk)

[Neovide - Neovide](https://neovide.dev/)
[neovide/neovide: No Nonsense Neovim Client in Rust](https://github.com/neovide/neovide)
[Neovide Is A Graphical Neovim Client Written In Rust - YouTube](https://www.youtube.com/watch?v=Vd5AACp6GG0)

[nvim-lua/kickstart.nvim: A launch point for your personal nvim configuration](https://github.com/nvim-lua/kickstart.nvim)
[nvim-lua/plenary.nvim: plenary: full; complete; entire; absolute; unqualified. All the lua functions I don't want to write twice.](https://github.com/nvim-lua/plenary.nvim)
[The Only Video You Need to Get Started with Neovim - YouTube](https://www.youtube.com/watch?v=m8C0Cq9Uv9o)
[Configure Golang in Kickstart.nvim - YouTube](https://www.youtube.com/watch?v=CNYqPnaCgJw)
