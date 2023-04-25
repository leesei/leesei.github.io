---
title: Window Manager
description: ""
created: 2014-12-12
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

[Linux Fu: X Command | Hackaday](https://hackaday.com/2017/09/21/linux-fu-x-command/) `wmctrl` + `xdotool` for windows control

[How-to: Picking a Window Manager in Linux](http://www.engadget.com/2012/10/30/how-to-picking-a-window-manager-linux/)
[What are the best window managers for Linux? - Slant](https://www.slant.co/topics/390/~window-managers-for-linux)

[Adding Glue To a Desktop Environment](https://venam.nixers.net/blog/unix/2019/01/07/win-automation.html)

## Tiling WM

[10 Best Tiling Window Managers for Linux](https://www.tecmint.com/best-tiling-window-managers-for-linux/amp/)

[Way Cooler](http://way-cooler.org/) awesome tiling Wayland WM, Rust, with Lua integration

[i3 - improved tiling wm](https://i3wm.org/)
[i3: i3 User’s Guide](https://i3wm.org/docs/userguide.html)
`compton` to set opacity

[baskerville/bspwm: A tiling window manager based on binary space partitioning](https://github.com/baskerville/bspwm)
[StumpWM](https://stumpwm.github.io/)
[conformal/spectrwm: A small dynamic tiling window manager for X11.](https://github.com/conformal/spectrwm)
[Bluetile - full-featured tiling for the GNOME desktop environment](https://bluetile.org/)
[xmonad | the tiling window manager that rocks](http://xmonad.org/) Haskell
[Qtile – A hackable tiling window manager written in Python | Qtile.org](http://www.qtile.org/)
[Bismuth-Forge/bismuth: KDE Plasma add-on, that tiles your windows automatically and lets you manage them via keyboard, similarly to i3, Sway or dwm.](https://github.com/Bismuth-Forge/bismuth)

[pop-os/shell: Pop!\_OS Shell](https://github.com/pop-os/shell)
[How To Install Pop Shell Window Tiling Extension On Ubuntu 20.04, 20.10 Or 21.04, Fedora 32, 33 Or 34, Debian Bullseye Or Sid, And Arch Linux Or Manjaro - Linux Uprising Blog](https://www.linuxuprising.com/2020/05/how-to-install-pop-shell-tiling.html)
[How to Install Pop Shell Window Tiling Extension on Ubuntu 20.04](https://linoxide.com/how-to-install-pop-shell-window-tiling-extension-on-ubuntu-20-04/)

[Material Shell - A new desktop experience](https://material-shell.com/)
[material-shell/material-shell: A modern desktop interface for Linux. Improve your user experience and get rid of the anarchy of traditional desktop workflows. Designed to simplify navigation and reduce the need to manipulate windows in order to improve productivity. It's meant to be 100% predictable and bring the benefits of tools coveted by professionals to everyone.](https://github.com/material-shell/material-shell)
['Material Shell' is an Impressive Tiling GNOME Shell Extension - OMG! Ubuntu!](https://www.omgubuntu.co.uk/2019/07/material-shell-tiling-gnome-shell-extension/amp)

[bspwm - ArchWiki](https://wiki.archlinux.org/title/Bspwm)
[baskerville/bspwm: A tiling window manager based on binary space partitioning](https://github.com/baskerville/bspwm)

[Sway](http://swaywm.org/) i3 on Wayland
[Sway - A Tiling Wayland i3-Compatible Compositor](https://www.fossmint.com/sway-a-tiling-wayland-i3-compatible-compositor/)

## awesome window manager

[awesome window manager](https://awesomewm.org/) Lua

[My first Awesome](https://awesomewm.org/apidoc/documentation/07-my-first-awesome.md.html)
[Default configuration file documentation](https://awesomewm.org/doc/api/documentation/05-awesomerc.md.html)
[awesome API documentation](https://awesomewm.org/doc/api/)

## Window Tiling on X

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

See also [WinSplit Revolution][] (Windows), [Divvy][] (Mac).

[esjeon/krohnkite: A dynamic tiling extension for KWin](https://github.com/esjeon/krohnkite)
[kwin-scripts/kwin-tiling: Tiling script for kwin](https://github.com/kwin-scripts/kwin-tiling)

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

### `xdotool`

[jordansissel/xdotool: fake keyboard/mouse input, window management, and more](https://github.com/jordansissel/xdotool)
[Linux Fu: X Command | Hackaday](https://hackaday.com/2017/09/21/linux-fu-x-command/)
[xdotool - fake keyboard/mouse input, window management, and more - semicomplete](https://www.semicomplete.com/projects/xdotool/)
[Ubuntu Manpage: xdotool - command-line X11 automation tool](http://manpages.ubuntu.com/manpages/trusty/man1/xdotool.1.html)

## `wmctrl`

[wmctrl - man page - ManKier](https://www.mankier.com/1/wmctrl)
http://tomas.styblo.name/wmctrl/
http://spiralofhope.com/wmctrl-examples.html
http://www.linuxjournal.com/magazine/hack-and-automate-your-desktop-wmctrl
http://ubuntuforums.org/showthread.php?t=1282386

[stiler](https://github.com/TheWanderer/stiler/tree/grid), [forum](https://bbs.archlinux.org/viewtopic.php?id=64100)

[Tiling in XFCE | Sjaak van den Berg](https://svdb.co/articles/2015/07/19/tiling-in-xfce/)

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

[BurntSushi/xpyb: A clone of xorg-xpyb.](https://github.com/BurntSushi/xpyb) inactive
[tych0/xcffib: A drop-in replacement for xpyb based on cffi](https://github.com/tych0/xcffib#installation)
