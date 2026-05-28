---
title: Cinnamon notes
description: ""
created: 2015-05-04
updated: 2026-04-14
tags:
  - cinnamon
  - desktop
  - linux
---

> I've been using Cinnamon as my desktop environment for 7+ years.
> But Cinnamon 6 has been a bit buggy, so I'm switching to Gnome in Fall 2024 (also to enjoy its vast extensions).
> Then Gnome dropped X11 support in 2025-09 so I switched back to Cinnamon.

Applets, extensions are installed at `~/.local/share/cinnamon/`.
User configs are at `~/.cinnamon/`.

## GDM issue

> [Cinnamon (X11) fails to load after update / Applications & Desktop Environments / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=313015)

Since 2026-04, GDM not working for X11 even with `WaylandEnable=false` in `/etc/gdm/custom.conf`
**Only used GDM for GNOME session**

```sh
sudo pacman -S lightdm lightdm-gtk-greeter lightdm-gtk-greeter-settings
sudo systemctl disable gdm
sudo systemctl enable lightdm # reboot or add `--now`
```

## Writing Extensions

[How to make a Cinnamon theme : Cinnamon](http://cinnamon.linuxmint.com/?p=144)
[How to make a Cinnamon applet (Force Quit applet tutorial) : Cinnamon](http://cinnamon.linuxmint.com/?p=156)

[Cinnamon 1.8 settings API – some lesser-known bits ← Segfault](http://segfault.linuxmint.com/2013/05/cinnamon-1-8-settings-api-some-lesser-known-bits/)
[Applet, Desklet, Extension Settings API – a brief example. ← Segfault](http://segfault.linuxmint.com/2013/05/applet-desklet-extension-settings-api-a-brief-example/)
[Cinnamon 1.8 Applet, Desklet, Extension and Theme packaging guidelines ← Segfault](http://segfault.linuxmint.com/2013/05/cinnamon-1-8-applet-desklet-extension-and-theme-packaging-guidelines/)
[Cinnamon 1.8 Theme Notes ← Segfault](http://segfault.linuxmint.com/2013/05/cinnamon-1-8-theme-notes/)

## Nemo Actions

Write a `.nemo_action` file in

- `/usr/share/nemo/actions/`
- `~/.local/share/nemo/actions/`

[Nemo Actions - ArchWiki](https://wiki.archlinux.org/title/Nemo#Nemo_Actions)
[nemo/files/usr/share/nemo/actions at master · linuxmint/nemo](https://github.com/linuxmint/nemo/tree/master/files/usr/share/nemo/actions)
[[Solved: Github nemo patch available]:nemo actions: problem with single quotes in filenames? - Linux Mint Forums](https://forums.linuxmint.com/viewtopic.php?t=248214)
[smurphos/nemo_actions_and_cinnamon_scripts: A collection of custom context menu items for the Nemo file manager, along with some miscellaneous feature scripts intended for the Cinnamon desktop environment.](https://github.com/smurphos/nemo_actions_and_cinnamon_scripts)

[AUR (en) - nemo-meld-compare](https://aur.archlinux.org/packages/nemo-meld-compare)

## Nemo Scripts

Located at

- `/usr/share/nemo/scripts/`
- `~/.local/share/nemo/scripts/`

[Creating a new Nemo script - Linux Mint Forums](https://forums.linuxmint.com/viewtopic.php?f=42&t=254648)
[nemo scripts pack - Gnome-look.org](https://www.gnome-look.org/p/1007482/)
[The Ultimate Nautilus/Nemo Scripts Pack - linux-apps.com](https://www.linux-apps.com/content/show.php/The+Ultimate+Nautilus+Nemo+Scripts+Pack?content=163470)
