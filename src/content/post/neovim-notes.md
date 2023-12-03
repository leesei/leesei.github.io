---
title: Neovim notes
description: hyperextensible Vim-based text editor
created: 2023-10-23
updated: 2023-11-14
tags:
  - app
  - neovim
  - shell-tool
---

Vim uses VimScript, Neovim embed Lua/MicroPython

[Home - Neovim](https://neovim.io/)
[Documentation - Neovim](https://neovim.io/doc/)

[Why Neovim? with TJ DeVries, Neovim core maintainer (The Changelog #457) |> Changelog](https://changelog.com/podcast/457)
[Modern Neovim — init.lua. Craft a modernized development… | by alpha2phi | Medium](https://alpha2phi.medium.com/modern-neovim-init-lua-ab1220e3ecc1)
[Basic Neovim Commands/Crash Course - DEV Community](https://dev.to/arafat4693/basic-neovim-commands-4hmi)

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

[ggandor/leap.nvim: Neovim's answer to the mouse 🦘](https://github.com/ggandor/leap.nvim)
[Become A Neovim Kangaroo - YouTube](https://www.youtube.com/watch?v=2KLFjhGjmbI)

[folke/flash.nvim: Navigate your code with search labels, enhanced character motions and Treesitter integration](https://github.com/folke/flash.nvim)
[The neovim motions plugin we've been waiting for - YouTube](https://www.youtube.com/watch?v=GcWYUumEsZo)

[folke/which-key.nvim: 💥 Create key bindings that stick. WhichKey is a lua plugin for Neovim 0.5 that displays a popup with possible keybindings of the command you started typing.](https://github.com/folke/which-key.nvim)

[neovim/nvim-lspconfig: Quickstart configurations for the Nvim LSP client](https://github.com/neovim/nvim-lspconfig)
[nvim-telescope/telescope.nvim: Find, Filter, Preview, Pick. All lua, all the time.](https://github.com/nvim-telescope/telescope.nvim)
[nvim-lualine/lualine.nvim: A blazing fast and easy to configure neovim statusline plugin written in pure lua.](https://github.com/nvim-lualine/lualine.nvim)
[lualine.nvim/THEMES.md at master · nvim-lualine/lualine.nvim · GitHub](https://github.com/nvim-lualine/lualine.nvim/blob/master/THEMES.md)

[mfussenegger/nvim-dap: Debug Adapter Protocol client implementation for Neovim](https://github.com/mfussenegger/nvim-dap)
[rcarriga/nvim-dap-ui: A UI for nvim-dap](https://github.com/rcarriga/nvim-dap-ui)

[L3MON4D3/LuaSnip: Snippet Engine for Neovim written in Lua.](https://github.com/L3MON4D3/LuaSnip)

[jose-elias-alvarez/null-ls.nvim: Use Neovim as a language server to inject LSP diagnostics, code actions, and more via Lua.](https://github.com/jose-elias-alvarez/null-ls.nvim) linter, formatter

## Configuration

```sh
# config
~/.config/nvim
# cache
~/local/share/nvim
```

[0 to LSP : Neovim RC From Scratch - YouTube](https://www.youtube.com/watch?v=w7i4amO_zaE)
[Effective Neovim: Instant IDE - YouTube](https://www.youtube.com/watch?v=stqUbv-5u2s)
[Awesome Neovim Setup From Scratch - Full Guide - YouTube](https://www.youtube.com/watch?v=JWReY93Vl6g) vim-plug

[Neovim Is Better](https://christitus.com/neovim-is-better/)
[Neovim is Better - YouTube](https://www.youtube.com/watch?v=6VbOLOuiHUI)

[The perfect Neovim setup for Python - YouTube](https://www.youtube.com/watch?v=4BnVeOUeZxc)

[folke (folke) / Repositories · GitHub](https://github.com/folke?tab=repositories&type=source)
[folke/lazy.nvim: 💤 A modern plugin manager for Neovim](https://github.com/folke/lazy.nvim)
[folke/neoconf.nvim: 💼 Neovim plugin to manage global and project-local settings](https://github.com/folke/neoconf.nvim)
[folke/neodev.nvim: 💻 Neovim setup for init.lua and plugin development with full signature help, docs and completion for the nvim lua API.](https://github.com/folke/neodev.nvim)

[junegunn/vim-plug: :hibiscus: Minimalist Vim Plugin Manager](https://github.com/junegunn/vim-plug)

[wbthomason/packer.nvim: A use-package inspired plugin manager for Neovim. Uses native packages, supports Luarocks dependencies, written in Lua, allows for expressive config](https://github.com/wbthomason/packer.nvim)

[williamboman/mason.nvim: Portable package manager for Neovim that runs everywhere Neovim runs. Easily install and manage LSP servers, DAP servers, linters, and formatters.](https://github.com/williamboman/mason.nvim) manages lsp and DAP

[nvim-lua/kickstart.nvim: A launch point for your personal nvim configuration](https://github.com/nvim-lua/kickstart.nvim)

[ChrisTitusTech/neovim](https://github.com/ChrisTitusTech/Neovim)

## Neovim Distros

[Exploring the Top Neovim Distributions: LazyVim, LunarVim, AstroVim, and NVChad — Which One Reigns Supreme? | by Adam Poniatowski | Mar, 2023 | Medium](https://medium.com/@adaml.poniatowski/exploring-the-top-neovim-distributions-lazyvim-lunarvim-astrovim-and-nvchad-which-one-reigns-3adcdbfa478d)

[🚀 Getting Started | LazyVim](https://www.lazyvim.org/)
[LazyVim/LazyVim: Neovim config for the lazy](https://github.com/LazyVim/LazyVim)

[LunarVim | LunarVim](https://www.lunarvim.org/)

[Getting Started | AstroNvim](https://astronvim.com/)
[Neovim With AstroNvim | Your New Advanced Development Editor - YouTube](https://www.youtube.com/watch?v=GEHPiZ10gOk)

[NvChad](https://nvchad.com/)
[NvChad/NvChad: Blazing fast Neovim config providing solid defaults and a beautiful UI, enhancing your neovim experience.](https://github.com/NvChad/NvChad)

[Neovide - Neovide](https://neovide.dev/)
[neovide/neovide: No Nonsense Neovim Client in Rust](https://github.com/neovide/neovide)
[Neovide Is A Graphical Neovim Client Written In Rust - YouTube](https://www.youtube.com/watch?v=Vd5AACp6GG0)
