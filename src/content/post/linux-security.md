---
title: Linux Security
description: ""
created: 2016-05-30
tags:
  - linux
  - security
---

> more on Linux features and hardening

[CPU.fail](https://cpu.fail/)

[Linux Kernel Security (SELinux vs AppArmor vs Grsecurity)](http://www.cyberciti.biz/tips/selinux-vs-apparmor-vs-grsecurity.html)
[Security face-off: Red Hat's SELinux vs. SUSE AppArmor, others](http://searchenterpriselinux.techtarget.com/tip/Security-face-off-Red-Hats-SELinux-vs-SUSE-AppArmor-others)
[access control - Comparsion Between AppArmor and Selinux - Information Security Stack Exchange](http://security.stackexchange.com/questions/29378/comparsion-between-apparmor-and-selinux)

[Linux hardening: a 15-step checklist for a secure Linux server | Network World](https://www.networkworld.com/article/3143050/linux/linux-hardening-a-15-step-checklist-for-a-secure-linux-server.html#tk.nww-fsb)
[What is PAM? – Information & Technology – Medium](https://medium.com/information-and-technology/wtf-is-pam-99a16c80ac57)

[Linux Security - YouTube](https://www.youtube.com/playlist?list=PLk6GyAyNDZmBmVacGhQgMPlXLEzqtyjti)

[Blacklisting modules on Linux | Network World](https://www.networkworld.com/article/3270624/linux/blacklisting-modules-on-linux.html)
[22 essential Linux security commands | Network World](https://www.networkworld.com/article/3272286/open-source-tools/22-essential-security-commands-for-linux.html)

## ASLR

[How ASLR protects Linux systems from buffer overflow attacks | Network World](https://www.networkworld.com/article/3331199/linux/what-does-aslr-do-for-linux.amp.html)
[Address Space Isolation and the Linux Kernel | Linux Journal](https://www.linuxjournal.com/content/address-space-isolation-and-linux-kernel)

## Ubuntu Hardening

[Locking Down Linux: Using Ubuntu as Your Primary OS, Part 1 (Physical Attack Defense) « Null Byte :: WonderHowTo](https://null-byte.wonderhowto.com/how-to/locking-down-linux-using-ubuntu-as-your-primary-os-part-1-physical-attack-defense-0185565/)
[Locking Down Linux: Using Ubuntu as Your Primary OS, Part 2 (Network Attack Defense) « Null Byte :: WonderHowTo](https://null-byte.wonderhowto.com/how-to/locking-down-linux-using-ubuntu-as-your-primary-os-part-2-network-attack-defense-0185709/)
[Locking Down Linux: Using Ubuntu as Your Primary OS, Part 3 (Application Hardening & Sandboxing) « Null Byte :: WonderHowTo](https://null-byte.wonderhowto.com/how-to/locking-down-linux-using-ubuntu-as-your-primary-os-part-3-application-hardening-sandboxing-0185710/)
[Locking Down Linux: Using Ubuntu as Your Primary OS, Part 4 (Auditing, Antivirus & Monitoring) « Null Byte :: WonderHowTo](https://null-byte.wonderhowto.com/how-to/locking-down-linux-using-ubuntu-as-your-primary-os-part-4-auditing-antivirus-monitoring-0185572/)

## SELinux

[SELinux Wiki](https://selinuxproject.org/page/Main_Page)
[Security-Enhanced Linux - Wikiwand](https://www.wikiwand.com/en/Security-Enhanced_Linux)

[Your visual how-to guide for SELinux policy enforcement | Opensource.com](https://opensource.com/business/13/11/selinux-policy-guide)
<http://people.redhat.com/duffy/selinux/selinux-coloring-book_A4-Stapled.pdf>

## AppArmor

[AppArmor - Wikiwand](https://www.wikiwand.com/en/AppArmor)
[AppArmor - Ubuntu Wiki](https://wiki.ubuntu.com/AppArmor)
[Documentation · Wiki · AppArmor / apparmor · GitLab](https://gitlab.com/apparmor/apparmor/wikis/Documentation)
[Ubuntu Manpage: AppArmor - kernel enhancement to confine programs to a limited set of resources.](http://manpages.ubuntu.com/manpages/bionic/man7/apparmor.7.html)

[14.4. Introduction to AppArmor](https://debian-handbook.info/browse/stable/sect.apparmor.html)

```sh
sudo apt-get install apparmor-profiles apparmor-utils
sudo aa-enforce /etc/apparmor.d/*
```

[The Comprehensive Guide To AppArmor: Part 1 – Information & Technology – Medium](https://medium.com/information-and-technology/so-what-is-apparmor-64d7ae211ed)
[Linux Apparmor Security Tool](http://landoflinux.com/linux_apparmor_security.html)

## seccomp

[seccomp - Wikiwand](https://www.wikiwand.com/en/Seccomp)
[Sandboxing in Linux with zero lines of code](https://blog.cloudflare.com/sandboxing-in-linux-with-zero-lines-of-code/amp/)

## Namespace

[Linux namespaces - Wikiwand](https://www.wikiwand.com/en/Linux_namespaces)

[Introduction to Linux namespaces - Part 1: UTS | Yet another enthusiast blog!](https://blog.yadutaf.fr/2013/12/22/introduction-to-linux-namespaces-part-1-uts/)
[Introduction to Linux namespaces - Part 2: IPC | Yet another enthusiast blog!](https://blog.yadutaf.fr/2013/12/28/introduction-to-linux-namespaces-part-2-ipc/)
[Introduction to Linux namespaces - Part 3: PID | Yet another enthusiast blog!](https://blog.yadutaf.fr/2014/01/05/introduction-to-linux-namespaces-part-3-pid/)
[Introduction to Linux namespaces - Part 4: NS (FS) | Yet another enthusiast blog!](https://blog.yadutaf.fr/2014/01/12/introduction-to-linux-namespaces-part-4-ns-fs/)
[Introduction to Linux namespaces – Part 5: NET | Yet another enthusiast blog!](https://blog.yadutaf.fr/2014/01/19/introduction-to-linux-namespaces-part-5-net/)
[Docker for your users - Introducing user namespace | Yet another enthusiast blog!](https://blog.yadutaf.fr/2016/04/14/docker-for-your-users-introducing-user-namespace/)

[A deep dive into Linux namespaces – Chord Simple](http://ifeanyi.co/posts/linux-namespaces-part-1/)
[A deep dive into Linux namespaces, part 2 – Chord Simple](http://ifeanyi.co/posts/linux-namespaces-part-2/)
[A deep dive into Linux namespaces, part 3 – Chord Simple](http://ifeanyi.co/posts/linux-namespaces-part-3/)
[A deep dive into Linux namespaces, part 4 – Chord Simple](http://ifeanyi.co/posts/linux-namespaces-part-4/)

[Namespaces in operation, part 1: namespaces overview [LWN.net]](http://lwn.net/Articles/531114/)
[namespaces(7) - Linux manual page](http://man7.org/linux/man-pages/man7/namespaces.7.html)

## Cgroup

Control groups

[cgroups - Wikiwand](https://www.wikiwand.com/en/Cgroups)
[cgroups(7) - Linux manual page](https://man7.org/linux/man-pages/man7/cgroups.7.html)

[https://www.kernel.org/doc/Documentation/cgroup-v1/cgroups.txt](https://www.kernel.org/doc/Documentation/cgroup-v1/cgroups.txt)
[https://www.kernel.org/doc/Documentation/cgroup-v2.txt](https://www.kernel.org/doc/Documentation/cgroup-v2.txt)
[Control Group v2 — The Linux Kernel documentation](https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html)

## Containers

> see `docker-ecosystem.md#runc`
> see `docker-ecosystem.md#security`

Libcontainer exposes a easy interface to lower level Linux security features to "contain" the environment. It accesses five namespaces -- Process, Network, Mount, Hostname, and Shared Memory -- to work with Linux.

[Containers are Linux – OpenShift Blog](https://blog.openshift.com/containers-are-linux/)

[Linux Containers and the Future Cloud](http://media.wix.com/ugd/295986_d5059f95a78e451db5de3d54f711e45d.pdf) (PDF)
[Tutorial: "Namespaces and CGroups, the basis of Linux containers" (Rami Rosen) | Netdev 1.1](http://www.netdevconf.org/1.1/tutorial-namespaces-and-cgroups-basis-linux-containers-rami-rosen.html) [PDF](http://media.wix.com/ugd/295986_d73d8d6087ed430c34c21f90b0b607fd.pdf)
[FOSDEM 2016 - How containers work in Linux](https://fosdem.org/2016/schedule/event/namespaces_and_cgroups/)
