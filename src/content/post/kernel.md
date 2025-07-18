---
title: Kernel
description: ""
created: 2016-03-27
updated: 2025-03-09
tags:
  - comp
  - linux
  - microkernel
  - unikernel
---

## Operating Systems

[Think OS – Green Tea Press](http://greenteapress.com/wp/think-os/)
[cs4414: Operating Systems](http://rust-class.org/index.html) write a kernel in Rust

[Workplace OS History: IBM’s \$2 Billion Microkernel of Failure](https://tedium.co/2019/02/28/ibm-workplace-os-taligent-history/) OS2

[achilleasa/gopher-os: A proof of concept OS kernel written in Go](https://github.com/achilleasa/gopher-os)
[jjyr/bootgo: A barebones OS kernel written in go](https://github.com/jjyr/bootgo)

[Operating Systems and Middleware: Supporting Controlled Interaction](https://gustavus.edu/mcs/max/os-book/) stopped updating

[Optimizing for Workloads: Linux Spinlocks vs. Mutexes | Nathan Petersen](https://nathanpetersen.com/2019/02/17/optimizing-for-workloads-linux-spinlocks-vs-mutexes/)

[Is It Time to Rewrite the Operating System in Rust? - YouTube](https://www.youtube.com/watch?v=HgtRAbE1nBM) history of OS

## Linux Kernel

[Linux kernel - Wikiwand](https://www.wikiwand.com/en/Linux_kernel)
[The Linux Kernel documentation — The Linux Kernel documentation](https://docs.kernel.org/index.html)
[The Linux Documentation Project: Guides](http://www.tldp.org/guides.html)
[The Linux Kernel](http://www.tldp.org/LDP/tlk/tlk.html)
[The Linux Programmer's Guide](http://www.tldp.org/LDP/lpg/)
[Anatomy of the Linux kernel](https://www.ibm.com/developerworks/library/l-linux-kernel/)
[25 Years Later: Interview with Linus Torvalds | Linux Journal](https://www.linuxjournal.com/content/25-years-later-interview-linus-torvalds)
[10 moments that shaped Linux history | Opensource.com](https://opensource.com/article/19/4/top-moments-linux-history?utm_campaign=intrel)
[FOSDEM 2019 - 2019 - Fifty years of Unix and Linux advances](https://fosdem.org/2019/schedule/event/keynote_fifty_years_unix/)

[Linux_Kernel_Newbies - Linux Kernel Newbies](https://kernelnewbies.org/)
[Getting to Know the Linux Kernel: A Beginner's Guide - Kelsey Steele & Nischala Yelchuri, Microsoft - YouTube](https://www.youtube.com/watch?v=QatE61Ynwrw)
[A Beginner’s Guide to Linux Kernel Development (LFD103) - Linux Foundation - Training](https://training.linuxfoundation.org/training/a-beginners-guide-to-linux-kernel-development-lfd103/)

[Unix vs Linux - YouTube](https://www.youtube.com/watch?v=jowCUo_UGts)
[Is Linux an OS, a kernel or both? (Linux vs GNU/Linux) - YouTube](https://www.youtube.com/watch?v=RNeKYjWx-s4)

[Linux Rootkits for Red-Blue Teams - YouTube](https://www.youtube.com/playlist?list=PLzKIBgD3ky21tpFya5oWTbD4Rxnj7-7OY)

[Welcome to LWN.net [LWN.net]](https://lwn.net/)
[Linux Kernel Newbies - Linux Kernel Newbies](https://kernelnewbies.org/)
[Exploring the Linux kernel: The secrets of Kconfig/kbuild | Opensource.com](https://opensource.com/article/18/10/kbuild-and-kconfig)
[people.kernel.org Reader](https://people.kernel.org/read)

[What are good ways to understand the Linux kernel? - Quora](https://www.quora.com/What-are-good-ways-to-understand-the-Linux-kernel)
[What is a Linux 'oops'? | Network World](https://www.networkworld.com/article/3254778/linux/what-is-a-linux-oops.html)
[Difference Between the macOS and Linux Kernels [Explained] | It's FOSS](https://itsfoss.com/mac-linux-difference/)

[How to compile a Linux kernel in the 21st century | Opensource.com](https://opensource.com/article/19/8/linux-kernel-21st-century)
[DIY: Build a Custom Minimal Linux Distribution from Source | Linux Journal](https://www.linuxjournal.com/content/diy-build-custom-minimal-linux-distribution-source)
[Build a Custom Minimal Linux Distribution from Source, Part II | Linux Journal](https://www.linuxjournal.com/content/build-custom-minimal-linux-distribution-source-part-ii)

[Zero Copy I: User-Mode Perspective | Linux Journal](http://www.linuxjournal.com/article/6345)

[Beej's Guide to Unix IPC](http://beej.us/guide/bgipc/output/html/multipage/index.html)
[How is a message queue implemented in the Linux kernel? - Unix & Linux Stack Exchange](http://unix.stackexchange.com/questions/6930/how-is-a-message-queue-implemented-in-the-linux-kernel)

[Why we're migrating (many of) our servers from Linux to FreeBSD](https://it-notes.dragas.net/2022/01/24/why-were-migrating-many-of-our-servers-from-linux-to-freebsd/)

### Memory/Virtual Memory

[What every programmer should know about memory, Part 1 [LWN.net]](http://lwn.net/Articles/250967/)
[Memory part 2: CPU caches [LWN.net]](http://lwn.net/Articles/252125/)
[Memory part 3: Virtual Memory [LWN.net]](http://lwn.net/Articles/253361/)
[What Is Swappiness on Linux? (and How to Change It)](https://www.howtogeek.com/449691/what-is-swapiness-on-linux-and-how-to-change-it/amp/)

[But, what is Virtual Memory? - YouTube](https://www.youtube.com/watch?v=A9WLYbE0p-I)
[What's Virtual Memory? - Computerphile - YouTube](https://www.youtube.com/watch?v=5lFnKYCZT5o) swapping
[_(char_)0 = 0; - What Does the C++ Programmer Intend With This Code? - JF Bastien - C++ on Sea 2023 - YouTube](https://www.youtube.com/watch?v=dFIqNZ8VbRY) CPU's Translation Lookaside Buffer (TLB), virt2phys, page table

[How does KERNEL memory allocation work? //Source Dive// 004 - YouTube](https://www.youtube.com/watch?v=NC_qkXznvkg)
[The mechanics of VIRTUAL MEMORY //Source Dive// 005 - YouTube](https://www.youtube.com/watch?v=iTic6EV4DP8)

### Books

[Linux Inside · GitBook](https://www.gitbook.com/book/0xax/linux-insides/details)
[Linux Kernel in a Nutshell](http://www.kroah.com/lkn/) 2.6.18 @2006
[Linux Device Drivers, Third Edition [LWN.net]](https://lwn.net/Kernel/LDD3/) 2.6.10 @2005

### System Calls

[The Definitive Guide to Linux System Calls | Packagecloud Blog](https://blog.packagecloud.io/the-definitive-guide-to-linux-system-calls/)
[syscall man page - System Calls | ManKier](https://www.mankier.com/2/syscall)

[Unix system calls (1/2) - YouTube](https://www.youtube.com/watch?v=xHu7qI1gDPA)
[Unix system calls (2/2) - YouTube](https://www.youtube.com/watch?v=2DrjQBL5FMU)

[Syscalls, Kernel vs. User Mode and Linux Kernel Source Code - bin 0x09 - YouTube](https://www.youtube.com/watch?v=fLS99zJDHOc)
[Searchable Linux Syscall Table for x86 and x86_64 | PyTux](https://filippo.io/linux-syscall-table/)

### Scheduler

CFS: completely fair scheduler

[OS Scheduling with Nest: Keeping Tasks Close Together on Warm Cores](https://hal.inria.fr/hal-03612592/document)
[nest-public / nest-artifact · GitLab](https://gitlab.inria.fr/nest-public/nest-artifact)
[THIS NEW Linux Scheduler BOOSTS Performance of the CPU!! (UP TO 200%) - YouTube](https://www.youtube.com/watch?v=s5-UbeuJfbk)

[how greedy are your processes? | Linux niceness - YouTube](https://www.youtube.com/watch?v=GsF8R6DBxSg) niceness, -20 to 19, higher nice value means lower priority

[硬科技：x86處理器的電源管理簡史 省電篇 #ACPI (167786) - Cool3c](https://www.cool3c.com/article/167786)

### Compression

[Ubuntu Moving Ahead With Compressing Their Kernel Image Using LZ4 - Phoronix](https://www.phoronix.com/scan.php?page=news_item&px=LZ4-Initramfs-Ubuntu-Go-Ahead)
[Facebook Looking To Add Zstd Support To The Linux Kernel, Btrfs - Phoronix](https://www.phoronix.com/scan.php?page=news_item&px=Facebook-Linux-Zstd)

As used by mkinitramfs:

- lz4 is faster to compress than gzip
- lz4 is blazingly fast to decompress
- lzma is dog slow to compress and decompress, but is tiny
- lz4 size weight over gzip is marginal (14%) but imho worth the improved boot time & initrd creation time
- xz is potentially even slower and even smaller than lzma
- zstd compress at speeds approaching lz4, decompressions at speeds more than twice as fast as zlib, and quality approaching lzma

### Device Drivers

[Writing a Linux Kernel Module — Part 1: Introduction | derekmolloy.ie](http://derekmolloy.ie/writing-a-linux-kernel-module-part-1-introduction/)
[Writing a Linux Kernel Module — Part 2: A Character Device | derekmolloy.ie](http://derekmolloy.ie/writing-a-linux-kernel-module-part-2-a-character-device/)
[Writing a Linux Loadable Kernel Module (LKM) - Interfacing to GPIOs | derekmolloy.ie](http://derekmolloy.ie/kernel-gpio-programming-buttons-and-leds/)
[exploringBB/extras/kernel at master · derekmolloy/exploringBB](https://github.com/derekmolloy/exploringBB/tree/master/extras/kernel/)

[Understanding the Structure of a Linux Kernel Device Driver - Sergio Prado, Toradex - YouTube](https://www.youtube.com/watch?v=pIUTaMKq0Xc)

[What are those /dev/ Files? | Linux.org](https://www.linux.org/threads/what-are-those-dev-files.9142/)

[The disaster of MIPI cameras on Linux » Linux Magazine](https://www.linux-magazine.com/Issues/2023/270/MIPI-Cameras-and-Linux)

### Kernel modules

`/etc/modules-load.d/`
`/usr/lib/modules-load.d/`

```sh
systemctl status systemd-modules-load.service
```

### Device mapper

> mapping block devices to other higher-level block devices

[Device mapper - Wikiwand](https://www.wikiwand.com/en/Device_mapper)
[Kernel index [LWN.net]](https://lwn.net/Kernel/Index/#Device_mapper)
[Right To Your Own Devices LG #114](https://linuxgazette.net/114/kapil.html)

### DKMS

[Dynamic Kernel Module Support - Wikiwand](https://www.wikiwand.com/en/Dynamic_Kernel_Module_Support)
[Dynamic Kernel Module Support - ArchWiki](https://wiki.archlinux.org/title/Dynamic_Kernel_Module_Support)
[Kernel Korner - Exploring Dynamic Kernel Module Support (DKMS) | Linux Journal](https://www.linuxjournal.com/article/6896)

Recompiles drivers against kernel header on host on every driver update OR kernel update.

### Device Tree

[Index of /doc/Documentation/devicetree/](https://www.kernel.org/doc/Documentation/devicetree/)
[Open Firmware and Devicetree — The Linux Kernel documentation](https://docs.kernel.org/devicetree/index.html)
[Device tree - Wikiwand](https://www.wikiwand.com/en/Device_tree)

[Device Tree Tutorial (ARM) – Linux Kernel For Newbies](https://saurabhsengarblog.wordpress.com/2015/11/28/device-tree-tutorial-arm/)
[Device Tree Reference - eLinux.org](https://elinux.org/Device_Tree_Reference)
[Device Tree for Dummies](https://elinux.org/images/f/f9/Petazzoni-device-tree-dummies_0.pdf) (PDF)

[A Tutorial on the Device Tree (Zynq) -- Part I | xillybus.com](http://xillybus.com/tutorials/device-tree-zynq-1)
[A Tutorial on the Device Tree (Zynq) -- Part II | xillybus.com](http://xillybus.com/tutorials/device-tree-zynq-2)
[A Tutorial on the Device Tree (Zynq) -- Part III | xillybus.com](http://xillybus.com/tutorials/device-tree-zynq-3)
[A Tutorial on the Device Tree (Zynq) -- Part IV | xillybus.com](http://xillybus.com/tutorials/device-tree-zynq-4)
[A Tutorial on the Device Tree (Zynq) -- Part V | xillybus.com](http://xillybus.com/tutorials/device-tree-zynq-5)

### USB subsystem

[Ubuntu Buzz !: Reset USB 2.0 (ehci) & USB 3.0 (xhci) Without Reboot in Linux Kernel](http://www.ubuntubuzz.com/2016/06/reset-usb-20-ehci-usb-30-xhci-without-reboot-linux.html?m=1)
[Linux USB FAQ](http://www.linux-usb.org/FAQ.html)

### Audio subsystem

[PipeWire](https://pipewire.org/)
[PipeWire - ArchWiki](https://wiki.archlinux.org/title/PipeWire)
[PipeWire: The Linux audio/video bus [LWN.net]](https://lwn.net/Articles/847412/)

[PulseAudio](https://www.freedesktop.org/wiki/Software/PulseAudio/)
[PulseAudio - ArchWiki](https://wiki.archlinux.org/title/PulseAudio)

[Home | JACK Audio Connection Kit](https://jackaudio.org/)
[JACK Audio Connection Kit - ArchWiki](https://wiki.archlinux.org/title/JACK_Audio_Connection_Kit)

[Linux Audio Explained (ALSA vs PulseAudio vs JACK vs Pipewire Explained) - YouTube](https://www.youtube.com/watch?v=HxEXMHcwtlI)
[What are the advantages of PipeWire over PulseAudio? : r/Fedora](https://www.reddit.com/r/Fedora/comments/m8nod5/what_are_the_advantages_of_pipewire_over/)

### GPIO/sysfs

One way of accessing GPIO is to modify the device tree and write a device driver for it.
We could also expose the GPIO via Sysfs interface (`pinctrl` driver) (`/sys/class/gpio`) to allow access on user space.

[GPIO - eLinux.org](https://elinux.org/GPIO)
[Access GPIO from Linux user space](https://falsinsoft.blogspot.com/2012/11/access-gpio-from-linux-user-space.html)
[Working with GPIO on the Wandboard and Writing an Android Driver for GPIO Interrupts – Using Android in Industrial Automation](http://android.serverbox.ch/?p=972) with `poll()`
[关于 /sys/class/gpio 简介 - cjsycyl 的专栏 - CSDN 博客](https://blog.csdn.net/cjsycyl/article/details/46310939)
[GPIO 接口解析-wangbaolin719-ChinaUnix 博客](http://blog.chinaunix.net/uid-27717694-id-3701921.html)
[Controlling GPIO from Linux User Space](https://www.emcraft.com/stm32f429discovery/controlling-gpio-from-linux-user-space)
[RK3399 用户空间 IO 控制 - zhuyong006 的博客 - CSDN 博客](https://blog.csdn.net/zhuyong006/article/details/80907718?utm_source=blogxgwz0)
[New GPIO User Space Subsystem since kernel 4.8 – SZ Lin with Cybersecurity & Embedded Linux](https://szlin.me/2018/01/31/new-gpio-user-space-subsystem-since-kernel-4-8/)
[GPIO Programming: Exploring the libgpiod Library | ICS](https://www.ics.com/blog/gpio-programming-exploring-libgpiod-library)

[Index of /doc/Documentation/gpio/](https://www.kernel.org/doc/Documentation/gpio/)
[https://www.kernel.org/doc/Documentation/gpio/sysfs.txt](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt) Sysfs GPIO interface is deprecated
[https://www.kernel.org/doc/Documentation/gpio/gpio-legacy.txt](https://www.kernel.org/doc/Documentation/gpio/gpio-legacy.txt)
[https://www.kernel.org/doc/Documentation/ABI/obsolete/sysfs-gpio](https://www.kernel.org/doc/Documentation/ABI/obsolete/sysfs-gpio)
[linux/tools/gpio at master · torvalds/linux](https://github.com/torvalds/linux/tree/master/tools/gpio) new interface

[vitiral/gpio: python gpio module for linux using the sysfs file access (/sys/class/gpio). Mimics similar Raspberry Pi IO libraries](https://github.com/vitiral/gpio)

```sh
# get GPIO number in kernel
# 1. refer to spec
# 2. check debug info
cat /sys/kernel/debug/gpio

# export a GPIO pin to userspace
echo $GPIO_NUMBER > /sys/class/gpio/export

echo $GPIO_DIRECTION > /sys/class/gpio/gpio$GPIO_NUMBER/direction  # "in" or "out"
# read and write to pin
cat /sys/class/gpio/gpio$GPIO_NUMBER/value
echo 1 > /sys/class/gpio/gpio$GPIO_NUMBER/value

# clean up
echo $GPIO_NUMBER > /sys/class/gpio/unexport
```

```sh
# debug
mount -t debugfs debugfs /sys/kernel/debug
cat /sys/kernel/debug/gpio
```

### I2C

[Index of /doc/Documentation/i2c/](https://www.kernel.org/doc/Documentation/i2c/)
[https://www.kernel.org/doc/Documentation/i2c/smbus-protocol](https://www.kernel.org/doc/Documentation/i2c/smbus-protocol)
On Linux with proper driver installed, it is exposed as `/dev/i2c-N`

[bjornt/pysmbus](https://github.com/bjornt/pysmbus)
[kplindegaard/smbus2: A drop-in replacement for smbus-cffi/smbus-python in pure Python](https://github.com/kplindegaard/smbus2)

### SPI

[Index of /doc/Documentation/spi/](https://www.kernel.org/doc/Documentation/spi/)
[https://www.kernel.org/doc/Documentation/spi/spi-summary](https://www.kernel.org/doc/Documentation/spi/spi-summary)

On Linux with proper driver installed, it is exposed as `/dev/spidevX.Y`

### Video Driver

Proprietary (non-free) drivers is a source of problem. You will have to rebuild the driver every time the kernel is updated. Otherwise X will fail to start.
If performance is not an issue it is [recommended](https://wiki.archlinux.org/title/Enhance_system_stability#Choose_open-source_drivers) to use the free drivers.

[Bumblebee - ArchWiki](https://wiki.archlinux.org/title/bumblebee)

#### Hybrid graphics

[Hybrid graphics - ArchWiki](https://wiki.archlinux.org/title/hybrid_graphics)
[Bumblebee - ArchWiki](https://wiki.archlinux.org/title/bumblebee)
[NVIDIA Optimus - ArchWiki](https://wiki.archlinux.org/title/NVIDIA_Optimus)

[Optimus Technology|NVIDIA](https://www.nvidia.com/object/optimus_technology.html)
[HybridGraphics - Community Help Wiki](https://help.ubuntu.com/community/HybridGraphics)
[How To Switch Between Intel and Nvidia Graphics Card on Ubuntu](https://www.linuxbabe.com/desktop-linux/switch-intel-nvidia-graphics-card-ubuntu)

[The State of NVIDIA Optimus on Linux | The Linux Rain](http://www.thelinuxrain.com/articles/the-state-of-nvidia-optimus-on-linux)

[wildtruc/nvidia-prime-select: This a fork of FedoraPrime enhanced for all linux distributions](https://github.com/wildtruc/nvidia-prime-select)

### File Locks

[flock - apply or remove an advisory lock on an open file](https://www.mankier.com/2/flock) ("BSD Locks")
[fcntl - manipulate file descriptor - System Calls | ManKier](https://www.mankier.com/2/fcntl) ("POSIX Locks")

[lockf - apply, test or remove a POSIX lock on an open file](https://www.mankier.com/3/lockf)
[lsof - list open files - man page | ManKier](https://www.mankier.com/1/lsof)

Checking locked files:

```sh
sudo lsof -n <file>
sudo lsof +f -- /dev/mapper/cachedev1
```

### RPi

[Department of Computer Science and Technology – Raspberry Pi: Baking Pi – Operating Systems Development](https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/)
[Tutorial | Building an Operating System for the Raspberry Pi](https://jsandler18.github.io/)
[dwelch67/raspberrypi: Raspberry Pi ARM based bare metal examples](https://github.com/dwelch67/raspberrypi)

### Embedded System

[Yocto Project | Open Source embedded Linux build system, package metadata and SDK generator](https://www.yoctoproject.org/)
[Bootlin – Embedded Linux and kernel engineering](https://bootlin.com/)

[Mastering Embedded Linux • &> /dev/null](https://www.thirtythreeforty.net/series/mastering-embedded-linux/)

### Real-time

[RTLinux - Wikiwand](https://www.wikiwand.com/en/RTLinux)
[preempt-rt-slides.pdf](https://bootlin.com/doc/training/preempt-rt/preempt-rt-slides.pdf)

[Real-time Ubuntu | Ubuntu](https://ubuntu.com/real-time)
[What is real-time Linux? Part I | Ubuntu](https://ubuntu.com/blog/what-is-real-time-linux-i)
[What is real-time Linux? Part II | Ubuntu](https://ubuntu.com/blog/what-is-real-time-linux-ii)
[Real-time Linux: a comprehensive guide | Ubuntu](https://ubuntu.com/blog/real-time-linux-whitepaper)
[Technical deep-dive into a real-time kernel | Ubuntu](https://ubuntu.com/blog/real-time-kernel-technical)

[What Is a Real-Time Operating System, and Who Needs One?](https://www.itprotoday.com/cloud-computing-and-edge-computing/what-real-time-operating-system-and-who-needs-one)
[【原创】为什么Linux不是实时操作系统 - 沐多 - 博客园](https://www.cnblogs.com/wsg1100/p/17985934)

## Pseudo file Systems

[sysfs, procfs, sysctl, debugfs and other similar kernel interfaces | John's Blog](https://johnsofteng.wordpress.com/2013/11/20/sysfs-procfs-sysctl-debugfs-and-other-similar-kernel-interfaces/)
[Sysfs and Configfs | Linux.org](https://www.linux.org/threads/sysfs-and-configfs.9353/)
[Virtual filesystems in Linux: Why we need them and how they work | Opensource.com](https://opensource.com/article/19/3/virtual-filesystems-linux)

[Configfs - Wikiwand](https://www.wikiwand.com/en/Configfs) creating kernel objects at runtime

### Sysfs/Configfs/sysctl

[sysfs - Wikiwand](https://www.wikiwand.com/en/sysfs)

[sysfs - _The_ filesystem for exporting kernel objects — The Linux Kernel documentation](https://docs.kernel.org/filesystems/sysfs.html)
[sysfs(5) - Linux manual page](https://man7.org/linux/man-pages/man5/sysfs.5.html)

[sysctl - read/write system parameters - System Calls](https://www.mankier.com/2/sysctl)
[Sysctl Explorer](https://sysctl-explorer.net/)

### procfs

[procfs - Wikiwand](https://www.wikiwand.com/en/Procfs)
[procfs - ArchWiki](https://wiki.archlinux.org/title/Procfs)
[The /proc Filesystem — The Linux Kernel documentation](https://docs.kernel.org/filesystems/proc.html)
[proc(5) - Linux manual page](https://man7.org/linux/man-pages/man5/procfs.5.html)

[/proc Talk » Linux Magazine](http://www.linuxpromagazine.com/Issues/2018/217/Exploring-proc/)
[Troubleshoot using the proc filesystem on Linux | Opensource.com](https://opensource.com/article/20/4/proc-filesystem)
[Procfs and the Proc Directory | Linux.org](http://www.linux.org/threads/procfs-and-the-proc-directory.4928/)

### `/dev`

[Device file - Wikiwand](https://www.wikiwand.com/en/Device_file)

[devfsd - Wikiwand](https://www.wikiwand.com/en/Devfsd) devfs has been succeeded by udev and devtmpfs since Linux 2.5

[udev - Wikiwand](https://www.wikiwand.com/en/Udev)
[udev - ArchWiki](https://wiki.archlinux.org/title/Udev)

[driver-core: devtmpfs - driver core maintained /dev tmpfs [LWN.net]](https://lwn.net/Articles/330985/)
[【linux kernel】devtmpfs文件系统分析-CSDN博客](https://blog.csdn.net/iriczhao/article/details/123966816)

User space permissions and hooks
[Writing udev rules](http://www.reactivated.net/writing_udev_rules.html)
[Scripting with udev - jasonwryan.com](http://jasonwryan.com/blog/2014/01/20/udev/)

## Windows

[Windows: Under the Covers - From Hello World to Kernel Mode by a Windows Developer - YouTube](https://www.youtube.com/watch?v=Gf-dwrwVcMs)

[A Syscall Journey in the Windows Kernel - Alice Climent-Pommeret](https://alice.climent-pommeret.red/posts/a-syscall-journey-in-the-windows-kernel/)

## Unikernel

[Unikernel - Wikiwand](https://www.wikiwand.com/en/Unikernel)

[oscarlab/graphene: Graphene / Graphene-SGX Library OS - a library OS for Linux multi-process applications, with Intel SGX support](https://github.com/oscarlab/graphene)
[Mini-OS-DevNotes - Xen](https://wiki.xenproject.org/wiki/Mini-OS-DevNotes)

[Unikernels [Book]](https://www.safaribooksonline.com/library/view/unikernels/9781492042815/)

[Joyent | Unikernels are unfit for production](https://www.joyent.com/blog/unikernels-are-unfit-for-production)

### Unikernel Linux

[Unikernel Linux - Red Hat Research](https://research.redhat.com/blog/research_project/unikernel-linux/)
[Unikernel Linux - YouTube](https://www.youtube.com/watch?v=Hu268xq9gMk)

[Experimental Patches Adapt Linux For A Unikernel Design - Phoronix](https://www.phoronix.com/news/Linux-Unikernel-RFC)
[Turning Linux Into A Library Operating System??? - YouTube](https://www.youtube.com/watch?v=VNFtXNgq8ms)

### Unikernel

[Unikernels - Rethinking Cloud Infrastructure](http://unikernel.org/) (bought by Docker)
[Projects | Unikernels](http://unikernel.org/projects/) Kernel as a lib

[Unikernel Systems Joins Docker | Docker Blog](https://blog.docker.com/2016/01/unikernel/)
[Docker’s Unikernel Experiment Begins Paying Off with Mac OS Libraries - The New Stack](http://thenewstack.io/dockers-unikernel-experiment-begins-paying-off-mac-os-libraries/)
[Improving Docker with Unikernels: Introducing HyperKit, VPNKit and DataKit | Docker Blog](https://blog.docker.com/2016/05/docker-unikernels-open-source/)
[docker/hyperkit: A toolkit for embedding hypervisor capabilities in your application](https://github.com/docker/hyperkit)

[IncludeOS](http://www.includeos.org/)

[Unikernels with Idit Levine | Software Engineering Daily](http://softwareengineeringdaily.com/2016/09/14/unikernels-with-idit-levine/) Mirage, Rump, UniK

### MirageOS

[MirageOS](https://mirage.io/) build unikernel for network applications, deploy minimum app, written in OCaml
[Episode 204: Anil Madhavapeddy on the Mirage Cloud Operating System and the OCaml Language : Software Engineering Radio](http://www.se-radio.net/2014/05/episode-204-anil-madhavapeddy-on-the-mirage-cloud-operating-system-and-the-ocaml-language/)
[My Other Internet is a Mirage](https://www.infoq.com/presentations/mirage-os)

Boots domain 0 OS

### Qubes OS

[Qubes OS: A reasonably secure operating system | Qubes OS](https://www.qubes-os.org/)

### Rump

POSIX compatible unikernel
[Rump Kernels](http://rumpkernel.org/)
[rumpkernel/rumprun: The Rumprun unikernel and toolchain for various platforms](https://github.com/rumpkernel/rumprun)

### UniK

[unikernels and unik with Scott Weiss | Software Engineering Daily](http://softwareengineeringdaily.com/2016/08/11/unikernels-and-unik-with-scott-weiss/)

[emc-advanced-dev/unik: The Unikernel Compilation and Deployment Platform](https://github.com/emc-advanced-dev/unik) Kubernetes for unikernel, supports different providers

[Unikernel power comes to Java, Node.js, Go, and Python apps | InfoWorld](http://www.infoworld.com/article/3082051/open-source-tools/unikernel-power-comes-to-java-nodejs-go-and-python-apps.html)

## Light kernel

> see `mobile-os.md#google-fuchsia`

[littlekernel/lk: LK embedded kernel](https://github.com/littlekernel/lk)

## Microkernel

[Microkernel - Wikiwand](https://www.wikiwand.com/en/Microkernel)
[Is Linux kernel design outdated? : linux](https://www.reddit.com/r/linux/comments/69umqo/is_linux_kernel_design_outdated/)
