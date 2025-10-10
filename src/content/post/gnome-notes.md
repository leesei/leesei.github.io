---
title: Gnome notes
description: ""
created: 2024-09-10
updated: 2025-07-07
tags:
  - desktop
  - gnome
  - linux
---

> Do use Gnome on X11 (select in Login screen) for `sxhkd` and `xev` is not working well with Wayland

[GNOME – Simple, beautiful, elegant.](https://www.gnome.org/)

[Hari Rana / Refine · GitLab](https://gitlab.gnome.org/TheEvilSkeleton/Refine)

## Settings

**Multitasking**
Disable Hot Corner
Fixed Number of Workspaces: 3
Workspaces on all displays
Include apps from the current workspace only

**Appearance**
Style: Dark

**Apps**
Default Apps

**Keyboard**
Compose Key: Scroll Lock
Keyboard Shortcuts

**Accessibility**
On/Off Shapes
Large Text

**System**
Time Format: 24-hour
Clock and Calendar: Week Day, Date, Week Numbers
Secure Shell

### Tweaks

**Fonts**
Antialiasing: Subpixel
Scaling Factor: 1.25

**Keyboard**
Meta map to Win
Capslock to Esc, Shift+Capslock to Capslock

**Windows**
Titlebar Buttons
Window Action Key: Alt

### dconf backup

[[linux-desktop#dconf]]

```sh
dconf dump /org/gnome/ > org.gnome.dconf
dconf dump /org/gtk/ > org.gtk.dconf
dconf dump /org/cinnamon/ > org.cinnamon.dconf
dconf dump /org/nemo/ > org.nemo.dconf
dconf dump /org/guake/ > org.guake.dconf
dconf dump /org/gnome/Ptyxis/ > Ptyxis.conf

dconf load /org/gnome/ < org.gnome.dconf
dconf load /org/gtk/ < org.gtk.dconf
dconf load /org/cinnamon/ < org.cinnamon.dconf
dconf load /org/nemo/ < org.nemo.dconf
dconf load /org/guake/ < org.guake.dconf
dconf load /org/gnome/Ptyxis/ < Ptyxis.conf
```

```
/org/gnome/desktop/a11y/
/org/gnome/desktop/background/
/org/gnome/desktop/calendar/
/org/gnome/desktop/datetime/
# compose key, capslock remap
/org/gnome/desktop/input-sources/
# locate pointer, font
/org/gnome/desktop/interface/
# keybindings, window title bar, workspace
/org/gnome/desktop/wm/
# workspace, keybindings
/org/gnome/mutter/
/org/gnome/shell/app-switcher/
/org/gnome/shell/keybindings/
/org/gnome/shell/window-switcher/
/org/gtk/gtk4/settings/file-chooser/
/org/gtk/settings/file-chooser/
```

### Solid Background Color

[Ubuntu 20.04 change background to solid colour - Ask Ubuntu](https://askubuntu.com/questions/1272120/ubuntu-20-04-change-background-to-solid-colour)

```sh
gsettings list-keys org.gnome.desktop.background

gsettings set org.gnome.desktop.background picture-uri none
gsettings set org.gnome.desktop.background picture-uri-dark none
gsettings set org.gnome.desktop.background primary-color '#000000'

# to restore
# or set un Tweaks' Appearance
gsettings set org.gnome.desktop.background picture-uri 'file:///usr/share/endeavouros/backgrounds/endeavouros-wallpaper.png'
gsettings set org.gnome.desktop.background picture-uri-dark 'file:///usr/share/endeavouros/backgrounds/endeavouros-wallpaper.png'
```

### Locate pointer

[gnome - How to change keyboard shortcut of "Show location of pointer"? - Ask Ubuntu](https://askubuntu.com/questions/725508/how-to-change-keyboard-shortcut-of-show-location-of-pointer)

Locate pointer is quite useful, but the default binding of Ctrl_L breaks focus of rename edit box
Change the key binding like so:

```
gsettings set org.gnome.mutter locate-pointer-key Shift_R
gsettings set org.gnome.desktop.interface locate-pointer true
```

## Debugging

[Projects/GnomeShell/Debugging – GNOME Wiki Archive](<https://wiki.gnome.org/Projects(2f)GnomeShell(2f)Debugging.html>)

[GNOME/Debugging - Funtoo](https://www.funtoo.org/GNOME/Debugging) `/etc/gdm/custom.conf`

```
gdm restart
```

## Shell Extensions

[GNOME Shell Extensions](https://extensions.gnome.org/)
[GNOME Shell Extensions - Documentation](https://docs.rockylinux.org/desktop/gnome/gnome-extensions/)

Install browser extension [GNOME Shell integration](https://chromewebstore.google.com/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep) and `yay -Sy gnome-browser-connector`

### Installed Extensions

[AppIndicator and KStatusNotifierItem Support - GNOME Shell Extensions](https://extensions.gnome.org/extension/615/appindicator-support/)
[Clipboard Indicator - GNOME Shell Extensions](https://extensions.gnome.org/extension/779/clipboard-indicator/)
[Dash to Panel - GNOME Shell Extensions](https://extensions.gnome.org/extension/1160/dash-to-panel/) panel that allow ungrouping of multi-windows
[Removable Drive Menu - GNOME Shell Extensions](https://extensions.gnome.org/extension/7/removable-drive-menu/)
[Tiling Shell - GNOME Shell Extensions](https://extensions.gnome.org/extension/7065/tiling-shell/) alt-right click on window title, or alt+space
[Grand Theft Focus - GNOME Shell Extensions](https://extensions.gnome.org/extension/5410/grand-theft-focus/) focus ready windows
