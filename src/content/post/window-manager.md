---
title: Window Manager
description: ""
created: 2014-12-12
updated: 2023-07-27
tags:
  - desktop
  - linux
  - shell-tool
  - window-tiling
  - windows-manager
  - wmctrl
  - x11
---

[Window manager - ArchWiki](https://wiki.archlinux.org/title/Window_Manager)
[Window manager - Wikiwand](https://www.wikiwand.com/en/Window_manager)
[Dynamic window manager - Wikiwand](https://www.wikiwand.com/en/Dynamic_window_manager)
[Extended Window Manager Hints](http://standards.freedesktop.org/wm-spec/wm-spec-latest.html)

[Window Managers in Linux - Everything you NEED to know! - YouTube](https://www.youtube.com/watch?v=7NLtw26qJtU)
[How-to: Picking a Window Manager in Linux](http://www.engadget.com/2012/10/30/how-to-picking-a-window-manager-linux/)
[What are the best window managers for Linux? - Slant](https://www.slant.co/topics/390/~window-managers-for-linux)

[r/unixporn - the home for \*NIX customization!](https://www.reddit.com/r/unixporn/)
[unixporn](https://unixporn.github.io/)
[r/unixporn · GitHub](https://github.com/unixporn)

[Adding Glue To a Desktop Environment](https://venam.nixers.net/blog/unix/2019/01/07/win-automation.html)

## Tiling WM

> TODO: merge with [[#Window Tiling on Shell]]?

DistroTube
[My Tier List For Tiling Window Managers - YouTube](https://www.youtube.com/watch?v=xysISs0mcj8)
[The Killer Feature Of Tiling Window Managers Isn't Tiling - YouTube](https://www.youtube.com/watch?v=yTzFoJfEXyU)
[Why Desktop Environment Users Don't Understand Tiling Window Managers - YouTube](https://www.youtube.com/watch?v=-VzqJnlJg3U)
[Standardized Keybindings Across All Tiling Window Managers](https://distro.tube/articles/standardized-keybindings-tiling.html)

[A Comprehensive Guide To Tiling Window Managers - YouTube](https://www.youtube.com/watch?v=Obzf9ppODJU) 1:02:26, DistroTube

- list base: predetermined layouts
- tree base: manually specify spawning position for the new window

[Force Your Terminal To Swallow - YouTube](https://www.youtube.com/watch?v=mBNLzHcUtTo)
[GitHub - salman-abedin/devour: X11 window swallower](https://github.com/salman-abedin/devour/)
app launched from terminal replaces the terminal
use `xdg-open` instead?

[How To Make Your Tiling Window Manager Look Amazing - YouTube](https://www.youtube.com/watch?v=dBFyhdgu280)

[10 Best Tiling Window Managers for Linux](https://www.tecmint.com/best-tiling-window-managers-for-linux/amp/)
[Best Tiling Window Manager for Noobs - YouTube](https://www.youtube.com/watch?v=1sHmWhVvYjc)
[Why I Use Tiling Window Managers - And Why You Should Too - YouTube](https://www.youtube.com/watch?v=K_W0ia2QjU8)
[Comparison of tiling window managers - ArchWiki](https://wiki.archlinux.org/title/Comparison_of_tiling_window_managers)
[Tiling Window Managers suck. Here's why - YouTube](https://www.youtube.com/watch?v=5n_rl9jWUMo)

[Way Cooler](http://way-cooler.org/) awesome tiling Wayland WM, Rust, with Lua integration

[StumpWM](https://stumpwm.github.io/)
[conformal/spectrwm: A small dynamic tiling window manager for X11.](https://github.com/conformal/spectrwm)
[xmonad | the tiling window manager that rocks](http://xmonad.org/) Haskell config

### i3

- usable out of the box
- with tabs
- best documentation
- scratchpad is for making a window float temporarily
- manual tiling

[i3 - improved tiling wm](https://i3wm.org/)
[i3: i3 User’s Guide](https://i3wm.org/docs/userguide.html)
[i3 - Reference Card](https://i3wm.org/docs/refcard.html)

[i3 - ArchWiki](https://wiki.archlinux.org/title/i3)
[Getting started with the i3 tiling window manager - Fedora Magazine](https://fedoramagazine.org/getting-started-i3-window-manager/)

[5 Hidden Features of i3WM - YouTube](https://www.youtube.com/watch?v=PQCggApEl3Y)
[Ricing and Scripting i3wm for Fun and Profit - LIVE! - YouTube](https://www.youtube.com/watch?v=mskia5tpxQU)
[Customizing i3Blocks For the Ultimate Status Bar on i3WM - YouTube](https://www.youtube.com/watch?v=Jil4nqMw6ak)

[i3-gnome/i3-gnome: Use i3wm/i3-gaps with GNOME Session infrastructure.](https://github.com/i3-gnome/i3-gnome)

[Get a Preconfigured Tiling Window Manager on Ubuntu With Regolith](https://itsfoss.com/regolith-linux-desktop/)

### Qtile

[Qtile – A hackable tiling window manager written in Python | Qtile.org](http://www.qtile.org/)
[Qtile - ArchWiki](https://wiki.archlinux.org/title/Qtile)
[qtile/qtile: :cookie: A full-featured, hackable tiling window manager written and configured in Python (X11 + Wayland)](https://github.com/qtile/qtile)
[Everything you need to know about Qtile — Qtile documentation](https://qtile.readthedocs.io/en/latest/index.html)
[Qtile Versus i3 Window Manager - YouTube](https://www.youtube.com/watch?v=vXFuhNbGgZg)

- clone of Xmonad
- config and plugins in Python
- prefers to swap workspace to current monitor
- supports key chords
- good scratchpad implementation
- good taskbar implementation
- good documentation (best if you know Python)

[qtile/qtile-examples: Example configurations and scripts for Qtile](https://github.com/qtile/qtile-examples)
settings from Linux Cast, DistroTub

DistroTube
[The Qtile Window Manager - YouTube](https://www.youtube.com/playlist?list=PL5--8gKSku15-C4mBKRpQVcaat4zwe4Gu)

The Linux Cast
[Things I Love About Qtile - YouTube](https://www.youtube.com/watch?v=WElNc4D35y0)
[Qtile: First Impressions - YouTube](https://www.youtube.com/watch?v=ub64GlpAGEU)
[10 Things You Need To Know About Qtile - YouTube](https://www.youtube.com/watch?v=Qdsk2LJUFK8)

[Qtile + Catppuccin = Awesome? - Ricing Qtile - YouTube](https://www.youtube.com/watch?v=V7PMxN4z82s)
[Customizing Qtile status bar with custom script widget - YouTube](https://www.youtube.com/watch?v=6BesVNW7VNU)
[Qtile Keybindings And Groups - Gettting Started With Qtile #qtile - YouTube](https://www.youtube.com/watch?v=K5lx9t6L5HA)

### bspwm

[bspwm - ArchWiki](https://wiki.archlinux.org/title/Bspwm)
[baskerville/bspwm: A tiling window manager based on binary space partitioning](https://github.com/baskerville/bspwm)

- configure with Bash
- bad documentation (man page only)
- tree base, manual tiling
- `bspc` for commands
- no key binding management (use `xshkd`)

[Bspwm Ricing - YouTube](https://www.youtube.com/playlist?list=PLRjzjpJ02WDP7wkGi5FptXM7axEcVy0-W)

### awesome window manager

[awesome window manager](https://awesomewm.org/)

- dwm fork
- works out of the box
- configure with Lua

[My first Awesome](https://awesomewm.org/apidoc/documentation/07-my-first-awesome.md.html)
[Default configuration file documentation](https://awesomewm.org/doc/api/documentation/05-awesomerc.md.html)
[awesome API documentation](https://awesomewm.org/doc/api/)
[AwesomeWM: Let's Make Keyboard Control Comfy - YouTube](https://www.youtube.com/watch?v=4PA-ZpK2i_M)
[Awesome Window Rules Make Your Life More Awesome - YouTube](https://www.youtube.com/watch?v=mP3_zrVs1wAp)

[[SOLVED] Properly configuring Dual monitors and AwesomeWM / Applications & Desktop Environments / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=99213)
[Is there any guide to setup multiple monitors using awesome wm i have display on and wallpaper is showing up and all but no program is running on 2nd monitor : awesomewm](https://www.reddit.com/r/awesomewm/comments/vnzu0i/is_there_any_guide_to_setup_multiple_monitors/)

[AwesomeWM Made My Workflow Even More Awesome - YouTube](https://www.youtube.com/watch?v=99KB9ct-e-A) scripted windows spawning
[Getting Started With Awesome Window Manager - YouTube](https://www.youtube.com/watch?v=qKtit_B7Keo)
[.config/awesome · master · Derek Taylor / Dotfiles · GitLab](https://gitlab.com/dwt1/dotfiles/-/tree/master/.config/awesome)

### dwm

[dwm - dynamic window manager | suckless.org software that sucks less](https://dwm.suckless.org/)

- not friendly to new users
- release is (in)famously limited to 2000 loc
- need to patch and recompile for configuration/customization
- anti-documentation

### SwayWM

> i3 on Wayland

[Sway](http://swaywm.org/)
[Sway - A Tiling Wayland i3-Compatible Compositor](https://www.fossmint.com/sway-a-tiling-wayland-i3-compatible-compositor/)
[Manjaro Sway Edition - Wayland Tiling Window Manager - YouTube](https://www.youtube.com/watch?v=34DIO61GxAE)
[SwayWM First Impressions - Is it Good? - YouTube](https://www.youtube.com/watch?v=FmEaMntQDzM)

### Hyprland

> Wayland

[Hyprland - A wayland compositor that doesn't sacrifice on its looks!](https://hyprland.org/)
[Hyprland - ArchWiki](https://wiki.archlinux.org/title/Hyprland)
[hyprwm/Hyprland: Hyprland is a highly customizable dynamic tiling Wayland compositor that doesn't sacrifice on its looks.](https://github.com/hyprwm/Hyprland)

[Is Hyprland Good? - A Brief First Look - YouTube](https://www.youtube.com/watch?v=IKDqtGVrIsY)

### Supporting Components

[[desktop-apps#Scratchpad]]

Since tiling WM replaces DE, panel and notification have to be handled separately.
These also allows for storing you desktop configs with dotfiles and sharing them.
i3, qTile and dwm have panel built-in.
Many components from Xfce are used as they don't have much depdencies.

[noctuid/tdrop: A Glorified WM-Independent Dropdown Creator](https://github.com/noctuid/tdrop)
[Turn Your Window Manager Into A Desktop Environment - YouTube](https://www.youtube.com/watch?v=FX26s8INUYo)

[Eww - Widgets for everyone! - eww documentation](https://elkowar.github.io/eww/)
[elkowar/eww: ElKowars wacky widgets](https://github.com/elkowar/eww)

[Polybar - A fast and easy-to-use tool for creating status bars](https://polybar.github.io/) resource intensive
[polybar/polybar: A fast and easy-to-use status bar](https://github.com/polybar/polybar)
[adi1090x/polybar-themes: A huge collection of polybar themes with different styles, colors and variants.](https://github.com/adi1090x/polybar-themes)
[How to Install and Customize Polybar- Ultimate Polybar Beginner's Guide - YouTube](https://www.youtube.com/watch?v=tOBDUBEMAKM)

notification
[Desktop notifications - ArchWiki](https://wiki.archlinux.org/title/Desktop_notifications)
[How To Receive Desktop Notifications With A Window Manager - YouTube](https://www.youtube.com/watch?v=NPhELbgYwV8)
[Home · Dunst](https://dunst-project.org/)
[dunst-project/dunst: Lightweight and customizable notification daemon](https://github.com/dunst-project/dunst)
[Dunst - ArchWiki](https://wiki.archlinux.org/title/Dunst)
[Dunst: How To Make Your Notifications Actually Look Good - YouTube](https://www.youtube.com/watch?v=-Ky9YgvUa40)
[How To Receive Desktop Notifications With A Window Manager - YouTube](https://www.youtube.com/watch?v=NPhELbgYwV8)

[Notify OSD in Launchpad](https://launchpad.net/notify-osd)

[florentc/xob: A lightweight overlay volume (or anything) bar for the X Window System.](https://github.com/florentc/xob)
[Xob: Bar Overlays Add Extra Flair To Any Linux Desktop - YouTube](https://www.youtube.com/watch?v=ill5AhZFa4U)

[phuhl/linux_notification_center: A notification daemon/center for linux](https://github.com/phuhl/linux_notification_center)
[Deadd: Windows Like Desktop Independent Notification Center - YouTube](https://www.youtube.com/watch?v=jhp8Xb1190g)

wallpaper
[Nitrogen - ArchWiki](https://wiki.archlinux.org/title/nitrogen)
[Nitrogen & Feh — ArchLabs Linux Documentation](https://archlabslinux.gitlab.io/docs/customization/nitrogen_and_feh.html)

compositors:
for transparency, shadows
[chjj/compton: A compositor for X11.](https://github.com/chjj/compton)
[yshui/picom: A lightweight compositor for X11](https://github.com/yshui/picom)
[Picom: Window Blur Should Always Be This Easy - YouTube](https://www.youtube.com/watch?v=_RrJSKr-o8A)

[cdown/clipmenu: Clipboard management using dmenu](https://github.com/cdown/clipmenu)

slock, betterlockscreen: screen lock
[Linux: How To Setup A Lockscreen To Run On Sleep/Suspend - YouTube](https://www.youtube.com/watch?v=-jA2OzttHQI)
[Betterlockscreen: The Pretty Minimal Lock Screen For Lazy People - YouTube](https://www.youtube.com/watch?v=QLYQOA2iRJ0)

apcid: power management
volume-icon: volume control
setxkbmap: keyboard layout
udiskie: drive management
app launcher
pcmanfm, thunar: file manager
trayer: system tray
xshkd: key binding
coldfix/udiskie: automount usb storage

## Window Tiling as DE extension

| Package              | Remark          |
| -------------------- | --------------- |
| [gTile][]            | For Cinnomon    |
| [Tiling-Assistant][] | GNOME extension |
| [xtile][]            |                 |
| [ctrlwm][]           |                 |
| [PyGrid][]           |                 |
| [pytyle3][]          |                 |
| [QuickTile][]        | no UI           |
| [wumwum][]           |                 |

See also [WinSplit Revolution][] (Windows), [Divvy][] (Windows/Mac).

[Bluetile - full-featured tiling for the GNOME desktop environment](https://bluetile.org/)

[gTile (Cinnamon)](http://cinnamon-spices.linuxmint.com/extensions/view/21)
[gTile/gTile: A window tiling extension for Gnome. This is the new official home of the vibou.gTile extension.](https://github.com/gTile/gTile)
[emasab/shelltile: A tiling window extension for GNOME Shell](https://github.com/emasab/shelltile)
[shellshape - a tiling window extension for gnome-shell](http://gfxmonk.net/shellshape/)
[codic12/worm: A dynamic, tag-based window manager written in Nim](https://github.com/codic12/worm)

[paperwm/PaperWM: Tiled scrollable window management for Gnome Shell](https://github.com/paperwm/PaperWM)
[PaperWM, the Tiling Window Manager for GNOME](https://itsfoss.com/paperwm/)

[Material Shell - A new desktop experience](https://material-shell.com/)
[Tiling Window Manager for Everyone - Material Shell GNOME Extension - YouTube](https://www.youtube.com/watch?v=E2BZJYNfmiI)

[gtile]: https://github.com/shuairan/gTile
[quicktile]: https://github.com/ssokolow/quicktile
[xtile]: http://www.giuspen.com/x-tile/
[ctrlwm]: http://gtk-apps.org/content/show.php/ctrlwm?content=114565
[wmctrl]: http://tomas.styblo.name/wmctrl/
[pygrid]: https://github.com/pkkid/pygrid
[pytyle3]: https://github.com/BurntSushi/pytyle3
[wumwum]: http://wumwum.sourceforge.net/
[winsplit revolution]: http://winsplit-revolution.com/screenshots
[divvy]: http://alternativeto.net/software/divvy/
[tiling-assistant]: https://github.com/Leleat/Tiling-Assistant

### Material Shell

[Material Shell - A new desktop experience](https://material-shell.com/)
[material-shell/material-shell: A modern desktop interface for Linux. Improve your user experience and get rid of the anarchy of traditional desktop workflows. Designed to simplify navigation and reduce the need to manipulate windows in order to improve productivity. It's meant to be 100% predictable and bring the benefits of tools coveted by professionals to everyone.](https://github.com/material-shell/material-shell)
['Material Shell' is an Impressive Tiling GNOME Shell Extension - OMG! Ubuntu!](https://www.omgubuntu.co.uk/2019/07/material-shell-tiling-gnome-shell-extension/amp)
[DistroTube - YouTube](https://www.youtube.com/@DistroTube)

### Pop Shell

[pop-os/shell: Pop!\_OS Shell](https://github.com/pop-os/shell)
[How To Install Pop Shell Window Tiling Extension On Ubuntu 20.04, 20.10 Or 21.04, Fedora 32, 33 Or 34, Debian Bullseye Or Sid, And Arch Linux Or Manjaro - Linux Uprising Blog](https://www.linuxuprising.com/2020/05/how-to-install-pop-shell-tiling.html)
[How to Install Pop Shell Window Tiling Extension on Ubuntu 20.04](https://linoxide.com/how-to-install-pop-shell-window-tiling-extension-on-ubuntu-20-04/)
[Pop!\_Shell - Window Tiling Extension for GNOME - YouTube](https://www.youtube.com/watch?v=UUrvF0Y9AUg)

### KDE

[Bismuth-Forge/bismuth: KDE Plasma add-on, that tiles your windows automatically and lets you manage them via keyboard, similarly to i3, Sway or dwm.](https://github.com/Bismuth-Forge/bismuth)
[EASY Window Tiling in KDE Plasma with Bismuth - YouTube](https://www.youtube.com/watch?v=-PO5gqexi8c)

[esjeon/krohnkite: A dynamic tiling extension for KWin](https://github.com/esjeon/krohnkite)
[Window Manager Script for KDE Plasma! - Krohnkite (DWM) - YouTube](https://www.youtube.com/watch?v=sa7gzTRA-BA)

[kwin-scripts/kwin-tiling: Tiling script for kwin](https://github.com/kwin-scripts/kwin-tiling)

### `xdotool`

[jordansissel/xdotool: fake keyboard/mouse input, window management, and more](https://github.com/jordansissel/xdotool)
[Linux Fu: X Command | Hackaday](https://hackaday.com/2017/09/21/linux-fu-x-command/)
[xdotool - fake keyboard/mouse input, window management, and more - semicomplete](https://www.semicomplete.com/projects/xdotool/)
[Ubuntu Manpage: xdotool - command-line X11 automation tool](http://manpages.ubuntu.com/manpages/trusty/man1/xdotool.1.html)

## xwm

[mcpcpc/xwm: A tiny XCB floating window manager.](https://github.com/mcpcpc/xwm)
[xwm: a tiny XCB floating window manager | xwm Commands | Man Pages | ManKier](https://www.mankier.com/1/xwm)

## `wmctrl`

[wmctrl - man page - ManKier](https://www.mankier.com/1/wmctrl)
http://tomas.styblo.name/wmctrl/
http://spiralofhope.com/wmctrl-examples.html
http://www.linuxjournal.com/magazine/hack-and-automate-your-desktop-wmctrl
http://ubuntuforums.org/showthread.php?t=1282386

[stiler](https://github.com/TheWanderer/stiler/tree/grid), [forum](https://bbs.archlinux.org/viewtopic.php?id=64100)

[Tiling in XFCE | Sjaak van den Berg](https://svdb.co/articles/2015/07/19/tiling-in-xfce/)

[Linux Fu: X Command | Hackaday](https://hackaday.com/2017/09/21/linux-fu-x-command/) `wmctrl` + `xdotool` for windows control

```sh
#!/bin/sh

# Single window to 66% width
set -- $(xwininfo -root| awk -F '[ :]+' '/ (Width|Height):/ { print $3 }')
width=$1
height=$2

wmctrl -r :ACTIVE: -e 0,0,0,$((width*2/3)),$height
```

```sh
#!/bin/sh

# Two windows each to 50% width
set -- $(xwininfo -root| awk -F '[ :]+' '/ (Width|Height):/ { print $3 }')
width=$1
height=$2

win1=$(xwininfo| awk '/^xwininfo: W/ { print $4 }')
win2=$(xwininfo| awk '/^xwininfo: W/ { print $4 }')

wmctrl -i -r $win1 -e 0,0,0,$((width/2)),$height
wmctrl -i -r $win2 -e 0,$((width/2)),0,$((width/2)),$height
```

[gnome - How to make application windows always on top in Linux mint? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/180790/how-to-make-application-windows-always-on-top-in-linux-mint)
`wmctrl -r :SELECT: -b add,above`

## Node X11 interface

[sidorares/node-x11](https://github.com/sidorares/node-x11/)
[AirWM/AirWM](https://github.com/AirWM/AirWM)
[Airblader/node-tinywm](https://github.com/Airblader/node-tinywm)
[anko/basedwm](https://github.com/anko/basedwm)
[bu/OdieWM](https://github.com/bu/OdieWM)
[dominictarr/tiles](https://github.com/dominictarr/tiles)
[santigimeno/node-ewmh](https://github.com/santigimeno/node-ewmh)

## Python X11 interface

[BurntSushi/xpyb: A clone of xorg-xpyb.](https://github.com/BurntSushi/xpyb) 😴inactive
[tych0/xcffib: A drop-in replacement for xpyb based on cffi](https://github.com/tych0/xcffib#installation)

## OS X

[OS X Window Manager Apps | CSS-Tricks](https://css-tricks.com/os-x-window-manager-apps/)

[Mizage - Divvy](http://mizage.com/divvy/)

[sdegutis/mjolnir: Lightweight automation and productivity app for OS X](https://github.com/sdegutis/mjolnir)
[nathankot/mjolnir.tiling: Add tiling window management powers to your mjolnir](https://github.com/nathankot/mjolnir.tiling)
[koekeishiya/yabai: A tiling window manager for macOS based on binary space partitioning](https://github.com/koekeishiya/yabai)
[Hammerspoon Team](https://github.com/hammerspoon)
