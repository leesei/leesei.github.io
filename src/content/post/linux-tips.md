---
title: Linux Tips and Tricks
description: ""
created: 2016-03-11
updated: 2025-07-29
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
[Michael Tunnell - YouTube](https://www.youtube.com/@michael_tunnell/)

David Bombal
[Linux for Hackers Tutorial (And Free Courses) - YouTube](https://www.youtube.com/watch?v=YJUVNlmIO6E)
[Linux for Hackers Tutorial with OTW! - YouTube](https://www.youtube.com/watch?v=8z-s5KQ9DbI)
[Linux Networking that you need to know (Episode 3) - YouTube](https://www.youtube.com/watch?v=t96iOUxC27M)

## Check kernel config

```sh
zcat /proc/config.gz
```

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

[hakavlad/nohang: A sophisticated low memory handler for Linux](https://github.com/hakavlad/nohang)

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

## Mounting storage

[fstab: static information about the filesystems | util-linux File Formats | Man Pages | ManKier](https://www.mankier.com/5/fstab)
`blkid`/`lsblk -f` to check partition id  
The second last field (dump) should always be `0`  
The last field is filesystem check sequence at boot, 1 for rfs, 2 for other file system, 0 to skip

[systemd时代的/etc/fstab - Systemd系列文章](https://systemd-book.junmajinlong.com/systemd_fstab.html)

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
printf "\n${SWAPFILE} swap swap sw 0 0\n" >> /etc/fstab
```

[kernel - Why is swap being used even though I have plenty of free RAM? - Ask Ubuntu](https://askubuntu.com/questions/157793/why-is-swap-being-used-even-though-i-have-plenty-of-free-ram)
[Linux Add a Swap File – Howto](http://www.cyberciti.biz/faq/linux-add-a-swap-file-howto/)
[hakavlad/nohang: A sophisticated low memory handler for Linux](https://github.com/hakavlad/nohang)

### swappiness

[Tales from responsivenessland: why Linux feels slow, and how to fix that — Rudd-O.com in English](https://rudd-o.com/linux-and-free-software/tales-from-responsivenessland-why-linux-feels-slow-and-how-to-fix-that)
[All about Linux swap space | Linux.com | The source for Linux information](https://www.linux.com/news/all-about-linux-swap-space)

"the swap partition is really just a fall back, where i dont care about performance, i just care about not crashing."

`/etc/sysctl.d/sysctl.conf`:

```ini
# decrease swappiness, can be higher for swapping on SSD
vm.swappiness = 30

# prefer file system (inode/dentry) cache
vm.vfs_cache_pressure = 70
```

### zswap

[Zswap vs zram in 2023, what's the actual practical difference? : r/linux](https://www.reddit.com/r/linux/comments/11dkhz7/zswap_vs_zram_in_2023_whats_the_actual_practical)
[Zswap or Zram: at this time, which one is more efficient? : r/archlinux](https://www.reddit.com/r/archlinux/comments/13ujemv/zswap_or_zram_at_this_time_which_one_is_more/)
[kernel - zram vs zswap vs zcache Ultimate guide: when to use which one - Ask Ubuntu](https://askubuntu.com/questions/471912/zram-vs-zswap-vs-zcache-ultimate-guide-when-to-use-which-one/472227#472227)

```sh
cat /sys/module/zswap/parameters/enabled

zcat /proc/config.gz | grep -i zswap
```

## Network buffer

This modify the buffer sizes temporarily. Change `sysctl.conf` to make the change permanent.

```sh
echo 1048576 > /proc/sys/net/core/rmem_max
echo 1048576 > /proc/sys/net/core/rmem_default
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

### auditd

[Audit](https://people.redhat.com/sgrubb/audit/)
[linux-audit/audit-userspace: Linux audit userspace repository](https://github.com/linux-audit/audit-userspace)
[Chapter 7. System Auditing | Red Hat Product Documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/security_guide/chap-system_auditing)

[What Is Auditd in Linux: A Brief Tutorial - Sematext](https://sematext.com/glossary/auditd)
[Linux auditd for Threat Detection [Part 1] | by IzyKnows | Medium](https://izyknows.medium.com/linux-auditd-for-threat-detection-d06c8b941505)
[Linux auditd for Threat Detection [Part 2] | by IzyKnows | Medium](https://izyknows.medium.com/linux-auditd-for-threat-hunting-part-2-c75500f591e8)
[Linux auditd for Threat Detection [Final] | by IzyKnows | Medium](https://izyknows.medium.com/linux-auditd-for-threat-detection-final-9d5173706b3f)

[Linux Audit Framework - Linux Audit](https://linux-audit.com/linux-audit-framework/)

[auditd: The Linux Audit daemon | audit System Administration | Man Pages | ManKier](https://www.mankier.com/8/auditd)
[auditd.conf: audit daemon configuration file | audit File Formats | Man Pages | ManKier](https://www.mankier.com/5/auditd.conf)
[auditctl: a utility to assist controlling the kernel's audit system | audit-rules System Administration | Man Pages | ManKier](https://www.mankier.com/8/auditctl)
[audit.rules: a set of rules loaded in the kernel audit system | audit-rules Miscellanea | Man Pages | ManKier](https://www.mankier.com/7/audit.rules)
[ausearch: a tool to query audit daemon logs | audit System Administration | Man Pages | ManKier](https://www.mankier.com/8/ausearch)
[aureport: a tool that produces summary reports of audit daemon logs | audit System Administration | Man Pages | ManKier](https://www.mankier.com/8/aureport)

[Auditd Manager | Documentation](https://www.elastic.co/docs/current/integrations/auditd_manager)
[Auditing Docker Containers in a DevOps Environment » ADMIN Magazine](http://www.admin-magazine.com/Archive/2018/43/Auditing-Docker-Containers-in-a-DevOps-Environment/) `auditd`

#### audit.rules

[7.5. Defining Audit Rules | Red Hat Product Documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/security_guide/sec-defining_audit_rules_and_controls)

[bfuzzy1/auditd-attack: A Linux Auditd rule set mapped to MITRE's Attack Framework](https://github.com/bfuzzy1/auditd-attack) more update than `bfuzzy/auditd-attack`
[Neo23x0/auditd: Best Practice Auditd Configuration](https://github.com/Neo23x0/auditd)
[set-element/auditdBroFramework: The Auditd Framework logs and applies security policy to linux auditd data](https://github.com/set-element/auditdBroFramework) `log_normalizer`
[sigma/rules/linux/auditd at master · SigmaHQ/sigma · GitHub](https://github.com/SigmaHQ/sigma/tree/master/rules/linux/auditd)

```sh
# modify files in `/etc/audit/rules.d/`

# this generates `/etc/audit/audit.rules` and reload it
augenrules --load
```

#### Analyzing `audit.log`

[7.6. Understanding Audit Log Files | Red Hat Product Documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/security_guide/sec-understanding_audit_log_files)
[RHEL Audit System Reference - Red Hat Customer Portal](https://access.redhat.com/articles/4409591) ❗!important
[people.redhat.com/sgrubb/audit/record-fields.html](https://people.redhat.com/sgrubb/audit/record-fields.html)

[stevegrubb/audit-explorer: This is an R shiny app that visualizes audit data using many tools all in one app.](https://github.com/stevegrubb/audit-explorer/)

#### Articles

[What You Need to Know About Linux Audit Framework](https://goteleport.com/blog/linux-audit/)
[Linux auditd: What Is It and How Do You Use It? - United Kingdom](https://www.insentragroup.com/gb/insights/geek-speak/modern-workplace/mastering-auditd-in-rhel-ensuring-security-through-auditing/)

[(PDF) Auditd: Rule Writing for better Threat Detection on \*nix Devices](https://www.researchgate.net/publication/355181208_Auditd_Rule_Writing_for_better_Threat_Detection_on_nix_Devices)

[Linux auditd for Threat Detection [Part 1] | by IzyKnows | Medium](https://izyknows.medium.com/linux-auditd-for-threat-detection-d06c8b941505)
[Linux auditd for Threat Detection [Part 2] | by IzyKnows | Medium](https://izyknows.medium.com/linux-auditd-for-threat-hunting-part-2-c75500f591e8)
[Linux auditd for Threat Detection [Final] | by IzyKnows | Medium](https://izyknows.medium.com/linux-auditd-for-threat-detection-final-9d5173706b3f)

[exeronn/auditd-python-parser: A python library to parse raw auditd events generated on a linux system](https://github.com/exeronn/auditd-python-parser/) output pandas Dataframe
[jhb/auditd_tools: Python tools for handling auditd events](https://github.com/jhb/auditd_tools/tree/main) requires `auparser`

### go-audit

[slackhq/go-audit: go-audit is an alternative to the auditd daemon that ships with many distros](https://github.com/slackhq/go-audit)

### eBPF

[eBPF for security: a beginner's guide | Red Canary](https://redcanary.com/blog/threat-detection/ebpf-for-security/)
[Master Linux Security with Tetragon and Wazuh: Real-Time Monitoring and Seamless SIEM Integration - YouTube](https://www.youtube.com/watch?v=Mfnrp3X1E-k)

### logrotate

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
