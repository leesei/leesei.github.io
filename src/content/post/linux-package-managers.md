---
title: Linux Package Managers
description: ""
created: 2017-05-10
updated: 2024-09-23
tags:
  - desktop
  - linux
  - nix
---

Cross platform Linux package manager

[List of software package management systems - Wikiwand](https://omni.wikiwand.com/en/List_of_software_package_management_systems)
[So you want to write a package manager | by sam boyer | Medium](https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527)

[asdf - An extendable version manager](https://asdf-vm.com/#/)

[What to Expect (and Not Expect) from Linux Universal Packages - The New Stack](https://thenewstack.io/expect-not-expect-linux-universal-packages/) !important
[Modern Package Formats » ADMIN Magazine](http://www.admin-magazine.com/Archive/2018/45/Flatpak-Snap-and-AppImage)
[Linux Package Managers Compared - AppImage vs Snap vs Flatpak](https://www.ostechnix.com/linux-package-managers-compared-appimage-vs-snap-vs-flatpak/)

[Flatpak vs Snaps vs Appimage vs Packages - Linux packaging formats compared - YouTube](https://www.youtube.com/watch?v=9HuExVD56Bo)
[What are the differences between snaps, appimage, flatpak and others? - Ask Ubuntu](https://askubuntu.com/questions/866511/what-are-the-differences-between-snaps-appimage-flatpak-and-others)
[A technical comparison between the snap and the Flatpak formats](https://readyspace.com.hk/a-technical-comparison-between-the-snap-and-the-flatpak-formats/)
[Flatpak vs Snaps vs Appimage vs Packages - Linux packaging formats compared - YouTube](https://www.youtube.com/watch?v=9HuExVD56Bo)
[FLATPAK is the FUTURE of LINUX application distribution - YouTube](https://www.youtube.com/watch?v=zs9QpPKDw74)

[Subuser - Portability, Security, Maintainability](http://subuser.org/) using Docker Container
[Subuser uses Docker containers to deliver desktop apps for Linux | InfoWorld](http://www.infoworld.com/article/3088574/desktop-apps/subuser-uses-docker-containers-to-deliver-desktop-apps-for-linux.html)

[Orbital Apps - A New generation of Linux Apps](https://www.orbital-apps.com/)
[AppStream](https://www.freedesktop.org/wiki/Distributions/AppStream/)
[ximion/appstream: Tools and libraries to work with AppStream metadata](https://github.com/ximion/appstream)

[Repology: all metapackages](https://repology.org/)

[Arsen6331/lure - lure - Gitea: Git with a cup of tea](https://gitea.arsenm.dev/Arsen6331/lure) Linux User REpository

[vinifmor/bauh: Graphical user interface for managing your Linux applications. Supports AppImage, Arch (repositories/AUR), Flatpak, Snap and native Web applications.](https://github.com/vinifmor/bauh)
[Manage AppImages, AUR, Flatpaks And Snaps With Bauh - OSTechNix](https://ostechnix.com/manage-appimages-aur-flatpaks-and-snaps-with-bauh/)
[Bauh - Manage Snaps, Flatpaks and AppImages from One Interface - It's FOSS](https://itsfoss.com/bauh-package-manager/)

There is a distro dependent package format, then there is the native manager, then there is a frontend for the manager.

pacman (Arch)
apk (Alphine)
apt (Debian)
yum (RHEL, Fedora <22, CentOS)
dnf (Fedora 22+)

[Category:Linux package management-related software - Wikiwand](https://omni.wikiwand.com/en/Category:Linux_package_management-related_software)
[Category:Free package management systems - Wikiwand](https://omni.wikiwand.com/en/Category:Free_package_management_systems)

## Snap

> sandboxed image

[snap: command reference - Snaps are universal Linux packages](https://snapcraft.io/docs/reference/snap-command) Shared runtimes between each applications.
[snapcore/snapd: The snapd and snap tools enable systems to work with .snap files.](https://github.com/snapcore/snapd)
[snapcore/snapcraft: Snapcraft is a delightful packaging tool](https://github.com/snapcore/snapcraft)
[Snap - ArchWiki](https://wiki.archlinux.org/title/Snap)

[FOSDEM 2019 - Good Will Snapping](https://fosdem.org/2019/schedule/event/behind_snapcraft/)

[uApp Explorer](https://uappexplorer.com/apps?type=snappy)

[Use the snap command - Snaps are universal Linux packages](https://snapcraft.io/docs/core/usage)
[Basic snap usage | Ubuntu tutorials](https://tutorials.ubuntu.com/tutorial/basic-snap-usage#0)
[Advanced snap usage | Ubuntu tutorials](https://tutorials.ubuntu.com/tutorial/advanced-snap-usage#0)

[snapcraft - Snaps are universal Linux packages](http://snapcraft.io/)
[Snap a python application | Ubuntu tutorials](https://tutorials.ubuntu.com/tutorial/snap-python-app#0)
[Snap – I’ve got the package! | OCS-Mag](http://www.ocsmag.com/2016/05/14/snap-ive-got-the-package/)
[Get started with Snapcraft - YouTube](https://www.youtube.com/watch?v=ZsUV9xnrkTA)

["cannot locate core snap" error - snapd - snapcraft.io](https://forum.snapcraft.io/t/cannot-locate-core-snap-error/)

cannot mount squashfs image using “squashfs”:

```sh
mkdir /tmp/foo && echo bar > /tmp/foo/bar
mksquashfs /tmp/foo /tmp/foo.img -all-root
mkdir /tmp/foo-mount-point
sudo mount -t squashfs /tmp/foo.img /tmp/foo-mount-point
```

## Flatpak

> sandboxed image

[Flatpak - the future of application distribution](http://flatpak.org/)
Flatpak has been around the longest and the most mature. Uses OSTree. No shared runtimes between each applications.
Uses [portals](https://github.com/flatpak/flatpak/wiki/Portals) for desktop integration.
[Flatpak - ArchWiki](https://wiki.archlinux.org/title/Flatpak)
[Welcome to Flatpak’s documentation! — Flatpak documentation](http://docs.flatpak.org/en/latest/index.html)

[Flatpak Is Not the Future](https://ludocode.com/blog/flatpak-is-not-the-future)
[On Flatpak disk usage and deduplication – Will Thompson and the Blog of Atlantis](https://blogs.gnome.org/wjjt/2021/11/24/on-flatpak-disk-usage-and-deduplication/)

[Flathub - An app store and build service for Linux](https://flathub.org/home)
[Using Flatpak on Ubuntu and Other Linux [Complete Guide] | It's FOSS](https://itsfoss.com/flatpak-guide/)
[Explore Flatpak in Fedora 24 - Fedora Magazine](https://fedoramagazine.org/explore-flatpak-fedora-24/)

```sh
sudo pacman -S flatpak
# add repo
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
# install app
flatpak install <remote_repository> <application_id>
flatpak install flathub org.libreoffice.LibreOffice

# from flatpakref
flatpak install --from https://flathub.org/repo/appstream/com.spotify.Client.flatpakref
flatpak install <path_of_flatpakref_file>

flatpak list
flatpak run <package-name>
flatpak uninstall <application_id>
flatpak update
```

[Maintaining a flatpak repository – Alexander Larsson](https://blogs.gnome.org/alexl/2017/02/10/maintaining-a-flatpak-repository/)
[Flatseal—Linux Apps on Flathub](https://flathub.org/apps/details/com.github.tchx84.Flatseal)

[Hello World](http://flatpak.org/hello-world.html)
[flatpak-bundler](https://www.npmjs.com/package/flatpak-bundler)
[electron-installer-flatpak](https://www.npmjs.com/package/electron-installer-flatpak)

## AppImage

> includes system libraries

[AppImage | Linux apps that run anywhere](http://appimage.org/)
App as executable image without the need to install.
[index.html – AppImages](https://appimage.github.io/)

[AppImages · AppImage/AppImageKit Wiki](https://github.com/AppImage/AppImageKit/wiki/AppImages) catalog and their source
[Dashboard [Jenkins]](http://aci.pangea.pub/) catalog, [source](https://github.com/appimage-packages)

[Creating AppImages · AppImage/AppImageKit Wiki](https://github.com/AppImage/AppImageKit/wiki/Creating-AppImages)
[AppImages/recipes at master · AppImage/AppImages](https://github.com/AppImage/AppImages/tree/master/recipes)

[probonopd/linuxdeployqt: Makes Linux applications self-contained by copying in the libraries and plugins that the application uses, and optionally generates an AppImage. Can be used for Qt and other applications](https://github.com/probonopd/linuxdeployqt)

[AppImage Community](https://github.com/AppImageCommunity)
[AppImageCommunity/awesome-appimage: Lovingly crafted AppImage tools and resources](https://github.com/AppImageCommunity/awesome-appimage)
[AppImageCommunity/pkg2appimage: Tool and recipes to convert existing deb packages to AppImage](https://github.com/AppImageCommunity/pkg2appimage/tree/master)

[PKGBUILD - aur.git - AUR Package Repositories](https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=simplest-file-renamer-bin) extract app image

## OSTree

OSTree is git for bootable filesystem trees.

[OSTree](https://ostree.readthedocs.io/en/latest/)
[OSTree Manual](https://developer.gnome.org/ostree/stable/)
[The Fundamentals of OSTree | Sam Thursfield's Blog](https://samthursfield.wordpress.com/2014/01/16/the-fundamentals-of-ostree/)

## Nix

> cross platform package manager

[Welcome to nix.dev](https://nix.dev/) An opinionated guide for developers getting things done using the Nix ecosystem.

[NixOS - Nix manual](https://nixos.org/manual/nix/stable/)
[Nixpkgs Reference Manual](https://nixos.org/manual/nixpkgs/stable/)

[Nix: The Purely Functional Package Manager](https://nixos.org/nix/)
[I was WRONG! This is the BEST Package Manager. - YouTube](https://www.youtube.com/watch?v=Ty8C2B910EI)
[Nix Package Manager](https://christitus.com/nix-package-manager/)

[The Nix Packages collection](https://nixos.org/nixpkgs/)
[Noogle - Simply find Nix API reference documentation.](https://noogle.dev/)
[nmattia/niv: Easy dependency management for Nix projects](https://github.com/nmattia/niv)
[tweag/trustix: Trustix: Distributed trust and reproducibility tracking for binary caches](https://github.com/tweag/trustix)

[First look at Nix package manager - YouTube](https://www.youtube.com/watch?v=sqzOPPWUc5)
["Learning Nix pkg mgr: Revolutionize Your Software Manager Game!" - [ 3 easy tips ] - YouTube](https://www.youtube.com/watch?v=qob19j2gWh4)

[So, tell me about Nix | Mattia Gheda](https://ghedam.at/15490/so-tell-me-about-nix)
[Quality of Life Scripts - NixOS Discourse](https://discourse.nixos.org/t/quality-of-life-scripts/2673)
[justinwoo/nix-shorts: A collection of short notes about Nix, down to what is immediately needed for users.](https://github.com/justinwoo/nix-shorts)

[NixOS - Nix Pills](https://nixos.org/guides/nix-pills/index.html)
[nix-community/home-manager: Manage a user environment using Nix [maintainer=@rycee]](https://github.com/nix-community/home-manager)
[Tutorial: Getting started with Home Manager for Nix | Mattia Gheda](https://ghedam.at/24353/tutorial-getting-started-with-home-manager-for-nix)
[sioodmy/dotfiles: Beautiful catppuccin themed NixOS configuration, with built in impermanence, full disk encryption and many more!](https://github.com/sioodmy/dotfiles)

[Nix on Microsoft Windows 10 | Nathan Bijnens](https://nathan.gs/2019/04/12/nix-on-windows/)
[Brand New Package » Linux Magazine](https://www.linux-magazine.com/Issues/2021/248/Nix-and-NixOS)

[Thoughts about computer technologies: Cheap Docker images with Nix](http://lethalman.blogspot.com/2016/04/cheap-docker-images-with-nix_15.html?m=1)

`sudo nixos-rebuild switch`

### Flake

> replaces Channels, uses lockfile

[Flakes - NixOS Wiki](https://nixos.wiki/wiki/Flakes)
[NixOS 40: Converting an Existing NixOS Configuration To Flakes - YouTube](https://www.youtube.com/watch?v=Hox4wByw5pY)
[You Should Use Flakes Right Away in NixOS! - YouTube](https://www.youtube.com/watch?v=ACybVzRvDhs)

```
nix.settings.experimental-features = [ "nix-command" "flakes" ]
```

`sudo nixos-rebuild switch --flake .`

[librephoenix/nixos-config: Nix noob trying to build his system](https://github.com/librephoenix/nixos-config)
[Emmet / nixos-config · GitLab](https://gitlab.com/librephoenix/nixos-config)

## On RPi

[lucernae/nixos-pi: How to install NixOS on raspberry PI](https://github.com/lucernae/nixos-pi)
[NixOS on ARM/Raspberry Pi - NixOS Wiki](https://nixos.wiki/wiki/NixOS_on_ARM/Raspberry_Pi)
[Installing NixOS on a Raspberry Pi — nix.dev documentation](https://nix.dev/tutorials/installing-nixos-on-a-raspberry-pi)

## GoFish

[GoFish](https://gofi.sh/index.html)
[fishworks/gofish: Keep your fish fresh!](https://github.com/fishworks/gofish)

## Zero Install

[Zero Install](https://0install.net/)

## webi (webinstall.dev)

> without `sudo` or admin right
> cross platform

[webinstall.dev](https://webinstall.dev/)

## Distri

[distri: a Linux distribution to research fast package management](https://distr1.org/)
[Delivery Service » Linux Magazine](https://www.linux-magazine.com/Issues/2021/247/Distri)
