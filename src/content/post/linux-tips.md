---
title: Linux Tips and Tricks
description: ""
created: 2016-03-11
tags:
  - app
  - desktop
---

These tips and tricks shall be promoted to its own post when the topic has accumulated enough contents.

[Linux Kernel Newbies - Linux Kernel Newbies](https://kernelnewbies.org/)
[Embedded Linux, kernel and real-time presentations - Bootlin](https://bootlin.com/docs/) Formerly Free Electrons

[25 Free Books To Learn Linux For Free | It's FOSS](https://itsfoss.com/learn-linux-for-free/)
[9 Free Linux Training Courses For Everyone | It's FOSS](https://itsfoss.com/free-linux-training-courses/)

[Linux Newbie Guide: Shortcuts And Commands](http://www.unixguide.net/linux/linuxshortcuts.shtml)
[Homepage - howtouselinux](https://www.howtouselinux.com/)

[Best Way to Learn Linux 🎮](https://blog.joberty.de/games-to-learn-linux/)
[Home | Linux Journey](https://linuxjourney.com/)
[OverTheWire: Wargames](https://overthewire.org/wargames/)
[Linux Survival | Where learning Linux is easy](https://linuxsurvival.com/)
[Terminus](https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)

## Check system install time

[How do I find how long ago a Linux system was installed? - Unix & Linux Stack Exchange](http://unix.stackexchange.com/questions/9971/how-do-i-find-how-long-ago-a-linux-system-was-installed)
[How To Find Exact Installation Date And Time Of Your Linux OS](https://www.ostechnix.com/find-exact-installation-date-time-linux-os/)

We need several tools:

- `df` to look up the device path of `/`
- `tune2fs` to query the file system's info
- GNU tools for command line magic ;-)

```sh
# commands to query file system
$ df /
Filesystem      Size  Used Avail Use% Mounted on
/dev/sdb3       184G   18G  164G  10% /
$ sudo tune2fs -l /dev/sdb3
...
<fs info>
Filesystem created:       Tue Aug 25 18:15:09 2015
<fs info>
...

# apply command line magic
$ sudo tune2fs -l $(df / | sed -n '2 p' | cut -d' ' -f1) | grep 'Filesystem created:'
Filesystem created:       Tue Aug 25 18:15:09 2015
```

Alternatively, you can use `lshw`:

```sh
$ sudo lshw -C volume
...
  *-volume:1
       description: EXT4 volume
       vendor: Linux
       physical id: 2
       bus info: nvme@0:1,2
       logical name: /dev/nvme0n1p2
       logical name: /
       version: 1.0
       serial: ee2e31d0-9a88-4c14-8d99-4a4e3c149734
       size: 459GiB
       capacity: 459GiB
       capabilities: journaled extended_attributes large_files huge_files dir_nlink recover 64bit extents ext4 ext2 initialized
       configuration: created=2021-01-02 09:17:28 filesystem=ext4 lastmountpoint=/ modified=2023-03-18 16:51:17 mount.fstype=ext4 mount.options=rw,noatime mounted=2023-03-18 16:51:17 state=mounted
...
  *-volume:2
       description: Windows NTFS volume
       vendor: Windows
       physical id: 3
       bus info: nvme@2:1,3
       logical name: /dev/nvme2n1p3
       version: 3.1
       serial: 2a0a5da8-5504-324d-92e8-d634ad2ce2b8
       size: 476GiB
       capacity: 476GiB
       capabilities: ntfs initialized
       configuration: clustersize=4096 created=2020-08-15 19:16:55 filesystem=ntfs name=Basic data partition state=clean
...
```

## Check file system

[How to force fsck to check filesystem after system reboot on Linux - LinuxConfig.org](https://linuxconfig.org/how-to-force-fsck-to-check-filesystem-after-system-reboot-on-linux)  
Modify `PASS` in `/etc/fstab` and set "Maximum mount count".

```sh
sudo tune2fs -l /dev/sdX1 | grep Last\ c
sudo tune2fs -c 10 /dev/sdX1
```

[boot - Automatically force fsck -fy when encountering "UNEXPECTED INCONSISTENCY; RUN fsck MANUALLY." - Ask Ubuntu](https://askubuntu.com/a/1007323/165018)  
Add "fsck.mode=force fsck.repair=yes" to boot param

## Check process info

```sh
ls -l /proc/$pid/exe
ls -l /proc/$pid/cwd

ps aux | grep $pid
```

## CPU

[Linux 下如何開啟或關閉 Intel CPU 的 Turbo Boost 功能？ | MagicLen](https://magiclen.org/linux-intel-cpu/)

## Freezes

[Bug #159356 “System freeze on high memory usage” : Bugs : linux package : Ubuntu](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/159356)

Some suggested adding this to `/etc/rc.local`:

```sh
sysctl vm.vfs_cache_pressure=100000
```

## drop caches

```sh
free -m
echo 3 > /proc/sys/vm/drop_caches
# check cached column
free -m
```

## Swap

```sh
sudo su
SWAPFILE=/swapfile
dd if=/dev/zero of=${SWAPFILE} bs=1G count=16 status=progress
chmod 600 ${SWAPFILE}
mkswap ${SWAPFILE}
# test
swapoff -a; swapon ${SWAPFILE}
free -h
# commit to fstab
printf "\n${SWAPFILE} none swap sw 0 0\n" >> /etc/fstab
```

[Linux Add a Swap File – Howto](http://www.cyberciti.biz/faq/linux-add-a-swap-file-howto/)

### swappiness

[Tales from responsivenessland: why Linux feels slow, and how to fix that — Rudd-O.com in English](https://rudd-o.com/linux-and-free-software/tales-from-responsivenessland-why-linux-feels-slow-and-how-to-fix-that)
[All about Linux swap space | Linux.com | The source for Linux information](https://www.linux.com/news/all-about-linux-swap-space)

`/etc/sysctl.d/sysctl.conf`:

```ini
# decrease swappiness, can be higher for swapping on SSD
vm.swappiness = 30

# prefer file system (inode/dentry) cache
vm.vfs_cache_pressure = 70
```

## Network buffer

This modify the buffer sizes temporarily. Change `sysctl.conf` to make the change permanent.

```sh
echo 1048576 >/proc/sys/net/core/rmem_max
echo 1048576 >/proc/sys/net/core/rmem_default
```

## Kernel Modules

[What is the Linux Kernel and What Does It Do?](http://www.howtogeek.com/howto/31632/what-is-the-linux-kernel-and-what-does-it-do/)

```sh
# show available modules and drivers (`uname -r` show kernel release)
ls /lib/modules/$(uname -r)
ls /lib/modules/$(uname -r)/kernel/drivers/

# show loaded modules
lsmod

# load moduleX
modprobe moduleX
# unload moduleX
modprobe -r moduleX
```

## mount `.iso` without root

[Script: mountiso « IgnorantGuru's Blog](https://igurublog.wordpress.com/downloads/script-mountiso/)

[HOW TO: Allow Mounting Of ISO Files By A Regular User « IgnorantGuru's Blog](https://igurublog.wordpress.com/2011/01/22/how-to-allow-mounting-of-iso-files-by-a-regular-user/)

## Enterprise Hum

[Emulate the Enterprise Hum... : LinuxActionShow](https://www.reddit.com/r/LinuxActionShow/comments/37bjr1/emulate_the_enterprise_hum/)

> requires `sox`

```sh
play -n -c1 synth whitenoise lowpass -1 120 lowpass -1 120 lowpass -1 120 gain +14
```

## Logging

[journalctl](https://www.freedesktop.org/software/systemd/man/journalctl.html)
[How To Use Journalctl to View and Manipulate Systemd Logs | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs)

[Auditing Docker Containers in a DevOps Environment » ADMIN Magazine](http://www.admin-magazine.com/Archive/2018/43/Auditing-Docker-Containers-in-a-DevOps-Environment/) `auditd`

[auditctl(8) - Linux man page](https://linux.die.net/man/8/auditctl)
[ausearch(8): query audit daemon logs - Linux man page](https://linux.die.net/man/8/ausearch)
[aureport(8) - Linux man page](https://linux.die.net/man/8/aureport)

## logrotate

[logrotate(8) - Linux man page](https://linux.die.net/man/8/logrotate)
[Understanding logrotate utility](https://support.rackspace.com/how-to/understanding-logrotate-utility/)
[鳥哥的 Linux 私房菜 -- 第十八章、認識與分析登錄檔](http://linux.vbird.org/linux_basic/0570syslog.php#rotate)

## Generating and Applying Patch

```sh
diff -u oldfile newfile > patch.diff
patch < patch.diff  # `patch` will lookup `oldfile`

# diff whole tree
diff -Naur /usr/src/openvpn-2.3.2 /usr/src/openvpn-2.3.4 > openvpn.patch
# patch whole tree, striping 3 slashes with `-p`
patch -p3 < /root/openvpn.patch
```

[7 Patch Command Examples to Apply Diff Patch Files in Linux](https://www.thegeekstuff.com/2014/12/patch-command-examples/)
[Unified Diff Format](https://www.artima.com/weblogs/viewpost.jsp?thread=164293)
