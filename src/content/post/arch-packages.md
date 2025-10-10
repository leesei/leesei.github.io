---
title: Arch Post Install
description: ""
created: 2021-01-08
updated: 2025-07-10
tags:
  - arch-linux
  - desktop
  - linux
---

> desktop agnostic installations (but expects GTK-based ones)
> try to automate these after installing packages

[[cinnamon-setup]]
[[gnome-notes]]

- Copy old Dropbox folder
- Copy old Google Drive folder

```fish
ln -sf ~/Dropbox/caravan ~/caravan
ln -sf ~/Dropbox/caravan/wip ~/wip
ln -sf ~/Dropbox/caravan/seasoned.bits ~/seasoned.bits
ln -sf ~/Dropbox/commonroom ~/commonroom

# the script also create symlinks
ln -sf ~/Dropbox/caravan ~/caravan
set -x CARAVAN_ENV [home|64.48]
~/caravan/home/0-install-caravan.sh $CARAVAN_ENV
```

- merge `~/caravan/home/rfs`, `~/caravan/home/rfs.$CARAVAN_ENV`, `~/caravan/home/.local`, `~/caravan/home/$CARAVAN_ENV.local`
- setup pCloud Sync `~/blog` <-> `pCloudDrive/caravan/blog`

The packages are to be installed with `yay -S --needed` (aliased to `yinst`).
Look them up in [Arch](https://www.archlinux.org/packages/) and [AUR](https://aur.archlinux.org/packages/) repo to find info about them if you are using other distro/OS.

See [pigmonkey/spark: Arch Linux Provisioning with Ansible](https://github.com/pigmonkey/spark)
[Create A List Of Installed Packages And Install Them Later From The List In Arch Linux - OSTechNix](https://www.ostechnix.com/create-list-installed-packages-install-later-list-arch-linux/)

```sh
# priority packages
# console tools
yay -S --needed --noconfirm eza fish guake kitty ttf-firacode-nerd noto-fonts-cjk noto-fonts-emoji sshfs starship tmux tree neovim vim xsel yq
yay -S --needed --noconfirm colordiff diff-so-fancy fpp hadolint jshon plocate shellcheck-bin zoxide
# new way to rebind mouse/keyboard keys (rather than using X11 conf)
yay -S --needed --noconfirm sxhkd xautomation xev xdo xdotool
yay -S --needed --noconfirm dropbox pcloud-drive google-chrome sublime-text-3 visual-studio-code-bin p7zip-full-bin nemo nemo-compare

# admin tools
baobab dconf dconf-editor htop lnav mimeo
# system tools
at base-devel ccache clang cmake docker docker-buildx docker-compose lshw nethogs sysstat
#  udev-browse-git

# runtime
jre-openjdk-headless jre11-openjdk-headless
dotnet-sdk nuget
go zig zls

# browser
firefox google-chrome profile-sync-daemon gnome-browser-connector
# cloud storage
dropbox pcloud-drive
# graphics
drawio-desktop gimp imagemagick inkscape pinta viewnior
# zathura zathura-pdf-mupdf
# yed pencil-bin
# ui tools
nemo
zenity goldendict
rofi rofi-power-menu rofimoji
meld sublime-merge
mediainfo mediainfo-gui mpv subtitleeditor
# office tools
onlyoffice-bin teamviewer turbovnc
# ebook
calibre
# communication tools
teams signal-desktop

# network
openconnect networkmanager-openconnect networkmanager-pptp tailscale

# server tools
# electron30 is very large, use electron30-bin
# use `yay -Rss -dd electron30` to remove existing one
electron30-bin dbgate-bin #studio-3t sqlitestudio
```

```sh
# image viewers, need review
meh
feh

pdfchain  # gcc 4.8
lostfiles
```

## `/etc/`

Increase inotify count for Dropbox, and possibly more.
When Dropbox seems to fail to sync files, start Dropbox in CLI, see if it reports "Unable to monitor entire Dropbox folder hierarchy."

Permanently:

```sh
su
cd ~/caravan/home/$CARAVAN_ENV.rfs
cp hosts /etc/

cp ./home.rfs/etc/systemd/journald.conf /etc/systemd/journald.conf
cp ./home.rfs/etc/sysctl.d/* /etc/sysctl.d/
sysctl --system
```

Temporarily:

```sh
cat /proc/sys/fs/inotify/max_user_watches
sudo echo 150000 > /proc/sys/fs/inotify/max_user_watches
```

## Terminal

```sh
# setup dotfiler
git clone https://github.com/svetlyak40wt/dotfiler ~/.dotfiles

cd ~/.dotfiles
# create symlinks to this folder
./bin/dot update
```

```sh
chsh -s $(which fish) $USER

fish
curl -sL https://git.io/fisher | source && fisher install jorgebucaran/fisher
fisher update
```

## Profile sync

[Profile-sync-daemon - ArchWiki](https://wiki.archlinux.org/title/Profile-sync-daemon)
[How To Sync Browser Profile Into Tmpfs (RAM) In Linux](https://ostechnix.com/how-to-sync-browser-profile-into-tmpfs-ram-in-linux/)

[graysky2/profile-sync-daemon: Symlinks and syncs browser profile dirs to RAM thus reducing HDD/SDD calls and speeding-up browsers.](https://github.com/graysky2/profile-sync-daemon)

```sh
sudo cp ~/caravan/home/home.rfs/etc/sudoers.d/10-psd-overlay-helper /etc/sudoers.d
# such that this command does not requires password
sudo -n /usr/bin/psd-overlay-helper

psd preview
# quit all browsers first
systemctl --user enable --now psd
```

## Dracula theme

[Dark theme for Gnome Terminal and 142+ apps — Dracula](https://draculatheme.com/gnome-terminal)
[Dark theme for Gedit and 142+ apps — Dracula](https://draculatheme.com/gedit/)

```sh
cd /tmp && git clone https://github.com/dracula/gnome-terminal
cd gnome-terminal && ./install.sh

cd /tmp && wget https://raw.githubusercontent.com/dracula/gedit/master/dracula.xml
mkdir -p $HOME/.local/share/gedit/styles/
cp dracula.xml $HOME/.local/share/gedit/styles/
```

## overGrive

Add `~/caravan/applications/overGrive-3.3.9-x86_64.AppImage` to startup

## Sublime Text

`sublime-text-3` is installed as `subl3`

```sh
subl3

# use my settings in Dropbox/caravan
mv ~/.config/sublime-text-3/Packages ~/.config/sublime-text-3/Packages.bak
ln -s ~/caravan/home/apps.conf/sublime-text-3/Packages/ ~/.config/sublime-text-3/Packages
```

## Visual Studio Code

> use built-in Settings Sync

[[vscode#Settings Sync]]

## SSH Server

[OpenSSH - ArchWiki](https://wiki.archlinux.org/title/OpenSSH)

```sh
sudo systemctl enable --now sshd
```

## Java

[Java - ArchWiki](https://wiki.archlinux.org/title/Java)

Use `archlinux-java` to select Java Runtime

## Samba

[Samba - ArchWiki](https://wiki.archlinux.org/title/Samba#Troubleshooting)
[smb.conf.default](https://git.samba.org/samba.git/?p=samba.git;a=blob_plain;f=examples/smb.conf.default;hb=HEAD)

```sh
yay -S samba
cd ~/caravan/home.rfs
sudo cp etc/samba/smb.conf /etc/samba/
sudo testparm -d 5 etc/samba/smb.conf # this should pass
sudo systemctl enable --now smb.service

# add samba user
sudo smbpasswd -a $USER
# list users
sudo pdbedit -L -v
```

```sh
# show shares
smbclient -L <server> -U%
```

## display driver

Proprietary (non-free) drivers is a source of problem. You will have to rebuild the driver every time the kernel is updated. Otherwise X will fail to start.
If performance is not an issue it is [recommended](https://wiki.archlinux.org/title/Enhance_system_stability#Choose_open-source_drivers) to use the free drivers.

[Install Video Drivers on Arch Linux | DominicM](http://dominicm.com/install-video-drivers-on-arch-linux/)

[Vulkan - Industry Forged](https://www.khronos.org/vulkan/)
[Vulkan (API) - Wikiwand](<https://www.wikiwand.com/en/Vulkan_(API)>)
[Vulkan - ArchWiki](https://wiki.archlinux.org/title/Vulkan)

[Install And Test Vulkan On Linux](https://linuxconfig.org/install-and-test-vulkan-on-linux) `vulkaninfo` in `vulkan-tools`

[arunsivaramanneo/GPU-Viewer: A front-end to glxinfo, vulkaninfo, clinfo and es2_info - Linux](https://github.com/arunsivaramanneo/GPU-Viewer) `gpu-viewer`

[Hybrid graphics - ArchWiki](https://wiki.archlinux.org/title/Hybrid_graphics#Fully_Power_Down_Discrete_GPU)
[Complete disable of discrete GPU : linux](https://www.reddit.com/r/linux/comments/78is1r/complete_disable_of_discrete_gpu/)

### AMD

[AMD: Download Drivers](http://support.amd.com/en-us/download)
[AMDGPU - ArchWiki](https://wiki.archlinux.org/title/AMDGPU)
[AMDGPU PRO - ArchWiki](https://wiki.archlinux.org/title/AMDGPU_PRO)

```sh

mesa xf86-video-amdgpu
vulkan-radeon # MESA Vulkan, better performance
amdvlk  # AMD Vulkan
libva-mesa-driver mesa-vdpau # video acceleration

lib32-mesa
lib32-vulkan-radeon # MESA Vulkan, better performance
lib32-amdvlk  # AMD Vulkan
```

```sh
lspci -k

# kernel driver should show amdgpu
```

### nVidia

[NVIDIA - ArchWiki](https://wiki.archlinux.org/title/NVIDIA)
[NVIDIA/Tips and tricks - ArchWiki](https://wiki.archlinux.org/title/NVIDIA/Tips_and_tricks#Fixing_terminal_resolution)
[Nvidia installer – Discovery](https://discovery.endeavouros.com/nvidia/nvidia-installer/2021/03/)

[Nvidia glx is not loading / Kernel & Hardware / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=249344)
`(EE) NVIDIA: Failed to load module "glxserver_nvidia" (module does not exist, 0)` in `Xorg.0.log`, `glxinfo` shows MESA driver

[ubuntu-mate/mate-optimus: NVIDIA Optimus GPU switcher](https://github.com/ubuntu-mate/mate-optimus)

```sh
# drivers
nvidia nvidia-lts nvidia-utils nvidia-libgl lib32-nvidia-utils lib32-nvidia-libgl
```

[How to set Nvidia GPU Power Limit (nvidia-smi)? - Software & Operating Systems / Linux - Level1Techs Forums](https://forum.level1techs.com/t/how-to-set-nvidia-gpu-power-limit-nvidia-smi/131467)

```sh
# query power limit
sudo nvidia-smi -q -d POWER
# apply power limit
sudo nvidia-smi -pl (base power limit+11)
# `-pm` to persist settings
# `-i N` for N-th GPU
```

```sh
# uninstall
yay -R nvidia nvidia-lts
# need alternate vulkan driver before uninstalling
yay -R nvidia-utils nvidia-libgl lib32-nvidia-utils lib32-nvidia-libgl
# [How to Fix - Failed to Start Light Display Manager Error [Solved]](https://www.debugpoint.com/failed-to-start-lightdm/)
# !important, regenerate X conf and replace `/etc/X11/xorg.conf`
sudo X --configure
```

### Intel

[Intel graphics - ArchWiki](https://wiki.archlinux.org/title/intel_graphics)
`man intel`

`xf86-video-intel` now used DRI3 by default, modify `/etc/X11/xorg.conf.d/20-intel.conf` to change to DRI2:

```
Section "Device"
  Identifier  "Intel Graphics"
  Driver      "intel"
  Option      "DRI" "2"             # DRI3 is now default
  #Option      "AccelMethod"  "sna" # default
  #Option      "AccelMethod"  "uxa" # fallback
EndSection
```

### Hardware acceleration

[Hardware video acceleration - ArchWiki](https://wiki.archlinux.org/title/Hardware_video_acceleration)
[HardwareVideoAcceleration - Debian Wiki](https://wiki.debian.org/HardwareVideoAcceleration)
There are two APIs for hardware video acceleration: VA-API and VDPAU. It's better to install both.

Note: mpv's wiki says both are old and not needed for hardware decoding

```sh
# tools
# libva-* or driver for graphic card
libvdpau-va-gl      # VDPAU backend for VA-API
libva-vdpau-driver  # VA-API backend for VDPAU
libva-utils vdpauinfo
```

## ~~pacman repo~~

> not needed for modern distro like Endeavour OS

[Multilib - ArchWiki](https://wiki.archlinux.org/title/Multilib)

```sh
sudo vi /etc/pacman.conf
# Uncomment `[multilib]` section

# update mirrorlist
sudo su
sudo pacman-mirrors -i # or -g

sudo pacman -Syy

# update
pacman -Syyu
```

## IME

[黑眼珠 2: GNOME3： 選擇您的輸入法(openSUSE 13.1)](http://swyear.blogspot.hk/2013/12/gnome3-opensuse-131.html)

### fcitx

[Fcitx - Fcitx](https://fcitx-im.org/wiki/Fcitx)
[Fcitx - ArchWiki](https://wiki.archlinux.org/title/Fcitx)

[Fcitx5 - ArchWiki](https://wiki.archlinux.org/title/Fcitx5)
[hosxy/Fcitx5-Material-Color: 一款使用 Material Design 配色的 fcitx5 皮肤，喜欢的话给个 star 吧 ヾ(≧ へ ≦)〃 😉](https://github.com/hosxy/Fcitx5-Material-Color)
[fcitx/fcitx5-table-extra](https://github.com/fcitx/fcitx5-table-extra)

[Fcitx: Input Method Editor Made Easy On Linux - YouTube](https://www.youtube.com/watch?v=lJoXhS4EUJs)

```sh
yay -S --needed --noconfirm fcitx5-im fcitx5-table-extra

# reload
fcitx5 -r
# dump settings and environments
fcitx5-diagnose
```

```sh
$ vi ~/.xprofile
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
export SDL_IM_MODULE=fcitx
export GLFW_IM_MODULE=ibus
```

Settings

- "Global Options" -> "Hotkey" -> "Trigger Input Method" -> <kbd>Super</kbd> + <kbd>Space</kbd>
- "Global Options" -> "Behavior" -> Check "Show info when changing focus"
- "Addons" -> "Clipboard" -> "Trigger Key" -> <kbd>Super</kbd> + <kbd>H</kbd>
- These config for "Cangjie3" and "SmartCangJie6"
  - "Input Method" -> "Cangjie3" -> "Order Policy" -> "No"
  - "Input Method" -> "Cangjie3" -> "Candidate List Orientation" -> "Horizontal"

"Cangjie3" has <kbd>\</kbd> as Pinyin shortcut and <kbd>?</kbd> as wildcard

### Mozc

[google/mozc: Mozc - a Japanese Input Method Editor designed for multi-platform](https://github.com/google/mozc)
[Mozc - ArchWiki](https://wiki.archlinux.org/title/mozc)
[Mozc: How To Start Typing With Japanese Input - YouTube](https://www.youtube.com/watch?v=wsSTyYfomxs)

### gcin

[Gcin - ArchWiki](https://wiki.archlinux.org/title/Gcin)
[Chinese input in terminal w Gcin issue / ArchBang Forums](http://bbs.archbang.org/viewtopic.php?id=457)

```sh
$ vi ~/.xprofile
export GTK_IM_MODULE=gcin
export XMODIFIERS=@im=gcin
export LC_CTYPE=zh_TW.UTF-8
gcin &
```

## Bluetooth

[Bluetooth - ArchWiki](https://wiki.archlinux.org/title/Bluetooth)
[Bluetooth – EndeavourOS](https://endeavouros.com/docs/hardware-and-network/bluetooth/)
[Get bluetooth auto-connected with A2DP – EndeavourOS](https://endeavouros.com/docs/hardware-and-network/bluetooth/get-bluetoth-auto-connected-with-a2dp/)

## Remove indexer (Antergos only?)

```sh
yay -Rs tracker bijiben gnome-music gnome-online-miners totem zeitgeist
```

## Network

[systemd-networkd - ArchWiki](https://wiki.archlinux.org/title/Systemd-networkd)

### DNS resolver

`~/caravan/home/rfs/etc/resolv.conf`

[Get Started | Public DNS | Google Developers](https://developers.google.com/speed/public-dns/docs/using#linux)

### Static IP

Edit `/etc/systemd/network/wired.network`:

```ini
[Match]
Name=enp63s0

[Network]
Address=10.6.64.48/24
Gateway=10.6.64.1
```

Revert to DHCP:

```ini
[Match]
Name=enp63s0

[Network]
DHCP=ipv4
```

```sh
sudo systemctl enable systemd-networkd
sudo systemctl restart systemd-networkd
```

You can lookup interface name with `ifconfig`/`ls /sys/class/net`.
[Network configuration - ArchWiki](https://wiki.archlinux.org/title/Network_configuration)
[systemd-networkd - ArchWiki](https://wiki.archlinux.org/title/Systemd-networkd#Basic_DHCP_network)

## virtualbox

`virtualbox` may require new kernel, update kernel before installing it

add `/etc/modules-load.d/virtualbox.conf`:

```
vboxdrv
vboxnetadp
vboxnetflt
vboxpci
```

## Steam

[Steam - ArchWiki](https://wiki.archlinux.org/title/Steam)
[You can now move your game install folders using Steam](https://windowsreport.com/move-games-install-folders-steam/)
[Moving a Steam Installation and Games - General Troubleshooting - Knowledge Base - Steam Support](https://support.steampowered.com/kb_article.php?ref=7418-YUBN-8129)

[5 Reasons Why This Linux Gaming OS Is Great For Your Living Room](https://www.forbes.com/sites/jasonevangelho/2020/03/31/5-reasons-why-this-linux-gaming-os-is-great-for-your-living-room/amp/)
[gamer-os/steam-tweaks: Various tools for tweaking Steam/game settings](https://github.com/gamer-os/steam-tweaks)

```sh
flatpak --user remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak --user install flathub com.valvesoftware.Steam
# to allow using $HOME
sudo flatpak override com.valvesoftware.Steam --filesystem=$HOME
flatpak run com.valvesoftware.Steam
```

```sh
linux-steam-integration steam-native-runtime
```

install 32 bits graphic drivers!!!

```sh
# use native runtime
STEAM_RUNTIME=0 steam
```

## teamviewer

```sh
sudo systemctl enable --now teamviewerd
```

## mlocate

```sh
sudo updatedb
```

## add user to group

```sh
# for wireshark
sudo usermod -a -G wireshark $USER

# for nginx
# enable `user http;` in `/etc/nginx/nginx.conf`
sudo usermod -a -G http $USER
chgrp -R http /www/public/

# for /dev/tty*
sudo usermod -a -G uucp $USER
```
