---
title: File Systems
description: ""
created: 2015-05-20
updated: 2025-01-09
tags:
  - file-system
  - linux
  - storage
---

[File system - Wikiwand](http://www.wikiwand.com/en/File_system)
[List of file systems - Wikiwand](https://www.wikiwand.com/en/List_of_file_systems)

[Part I. File Systems](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Storage_Administration_Guide/part-file-systems.html)
[Virtual filesystems: Why we need them and how they work | Opensource.com](https://opensource.com/article/19/3/virtual-filesystems-linux)

[[distributed-file-systems]]

> TODO: add corruption info on NTFS and HFS+

## Well-known file systems

[Explaining File Systems: NTFS, exFAT, FAT32, ext4 & More - YouTube](https://www.youtube.com/watch?v=_h30HBYxtws)

[Be File System - Wikiwand](http://www.wikiwand.com/en/Be_File_System)
[exFAT - Wikiwand](http://www.wikiwand.com/en/ExFAT)
[ext4 - Wikiwand](http://www.wikiwand.com/en/Ext4)
[F2FS - Wikiwand](http://www.wikiwand.com/en/F2FS)
[HFS Plus - Wikiwand](http://www.wikiwand.com/en/HFS_Plus)
[NILFS - Wikiwand](http://www.wikiwand.com/en/NILFS)
[NTFS - Wikiwand](http://www.wikiwand.com/en/NTFS)

[marook/tagfs](https://github.com/marook/tagfs)
[NHFS - Nonhierarchical File System - 0815 Blog](https://rffr.de/nhfs-nonhierarchical-file-system/)

[Why Do Removable Drives Still Use FAT32 Instead of NTFS?](https://www.howtogeek.com/177529/htg-explains-why-are-removable-drives-still-using-fat32-instead-of-ntfs/)

### Comparison

> ReiserFS is dead (2023-09)

[How to Choose Your Red Hat Enterprise Linux File System - Red Hat Customer Portal](https://access.redhat.com/articles/3129891)

[Linux 4.0 Hard Drive Comparison With EXT4 / Btrfs / XFS / NTFS / NILFS2 / ReiserFS - Phoronix](http://www.phoronix.com/scan.php?page=article&item=linux-40-hdd&num=1)
[Linux 4.4 To 4.7 - EXT4 vs. F2FS vs. Btrfs Benchmarks - Phoronix](http://www.phoronix.com/scan.php?page=article&item=linux-44-47-fs&num=1)
[Linux 5.0 File-System Benchmarks: Btrfs vs. EXT4 vs. F2FS vs. XFS - Phoronix](https://www.phoronix.com/scan.php?page=article&item=linux-50-filesystems&num=1)
[Review EXT4 vs. Btrfs vs. XFS | Unixmen](http://www.unixmen.com/review-ext4-vs-btrfs-vs-xfs/)
[XFS vs ZFS | [H]ard|Forum](https://hardforum.com/threads/xfs-vs-zfs.1593111/)
[ZFS, BTRFS, XFS, EXT4 and LVM with KVM – a storage performance comparison](http://www.ilsistemista.net/index.php/virtualization/47-zfs-btrfs-xfs-ext4-and-lvm-with-kvm-a-storage-performance-comparison.html)
[XFS vs EXT4 – Comparing MongoDB Performance on AWS EC2](https://scalegrid.io/blog/xfs-vs-ext4-comparing-mongodb-performance-on-aws-ec2/) XFS is useful on high end systems with high bandwidth and concurrency
[Ext4 vs XFS - Which one to choose? | ComputingForGeeks](https://computingforgeeks.com/ext4-vs-xfs-complete-comparison/)

### ext

[The Smorgasbord of Linux File Systems, Part One: The Extended Family | Learning Tree Blog](https://blog.learningtree.com/the-smorgasbord-of-linux-file-systems-part-one-the-extended-family/)

[NYLUG Presents: Ted Ts'o on the ext4 Filesystem (Jan 10, 2013) (HD) - YouTube](https://www.youtube.com/watch?v=2mYDFr5T4tY)

### bcachefs

[The bcachefs filesystem [LWN.net]](https://lwn.net/Articles/655366/)
[bcache - Wikiwand](https://www.wikiwand.com/en/Bcache)
[Bcachefs](https://bcache.evilpiepirate.org/Bcachefs/)

[Linux File Systems: Heading Toward Btrfs | Learning Tree Blog](https://blog.learningtree.com/linux-file-systems-heading-toward-btrfs/)
[Kent Overstreet is creating bcachefs - a next generation Linux filesystem | Patreon](https://www.patreon.com/bcachefs)
[Getting started with btrfs for Linux | Opensource.com](https://opensource.com/article/20/11/btrfs-linux)

[bcachefs-principles-of-operation.pdf](https://bcachefs.org/bcachefs-principles-of-operation.pdf)

[Future Of BCacheFS In The Kernel Is Uncertain - YouTube](https://www.youtube.com/watch?v=QfyJNlMl1h4)

### Btrfs

[Btrfs - Wikiwand](http://www.wikiwand.com/en/Btrfs)

Btrfs is not stable for use outside a test system.
[btrfs Meltdown | LUP 87 | Jupiter Broadcasting](http://www.jupiterbroadcasting.com/80097/btrfs-meltdown-lup-87/)
[Churning Over Btrfs | LUP 88 | Jupiter Broadcasting](http://www.jupiterbroadcasting.com/80442/churning-over-btrfs-lup-88/)

### XFS

[XFS - Wikiwand](http://www.wikiwand.com/en/XFS)
[XFS: There and back ... and there again? [LWN.net]](http://lwn.net/Articles/638546/)
[Linux File Systems Part Two: The XFS File System | Learning Tree Blog](https://blog.learningtree.com/linux-file-systems-part-two-the-xfs-file-system/)

### ZFS

[ZFS - Wikiwand](http://www.wikiwand.com/en/ZFS)
ZFS provides bitrot protection.

[ZFS on Linux](http://zfsonlinux.org/)

[OpenZFS Documentation — OpenZFS documentation](https://openzfs.github.io/openzfs-docs/)
[openzfs/zfs: OpenZFS on Linux and FreeBSD](https://github.com/openzfs/zfs)

["The ZFS filesystem" - Philip Paeps (LCA 2020) - YouTube](https://www.youtube.com/watch?v=Hjpqa_kjCOI) configure ZFS on OSX
[What Is ZFS?: A Brief Primer - YouTube](https://www.youtube.com/watch?v=lsFDp-W1Ks0)
[
[From BFS to ZFS: past, present, and future of file systems – Ars Technica](https://arstechnica.com/gadgets/2008/03/past-present-future-file-systems/amp/)
[Ars walkthrough: Using the ZFS next-gen filesystem on Linux – Ars Technica](https://arstechnica.com/information-technology/2014/02/ars-walkthrough-using-the-zfs-next-gen-filesystem-on-linux/amp/)
[ZFS 101—Understanding ZFS storage and performance – Ars Technica](https://arstechnica.com/information-technology/2020/05/zfs-101-understanding-zfs-storage-and-performance/amp/)
[Ubuntu 20.04’s zsys adds ZFS snapshots to package management [Updated] – Ars Technica](https://arstechnica.com/gadgets/2020/03/ubuntu-20-04s-zsys-adds-zfs-snapshots-to-package-management/amp/)
[Create a ZFS volume on Ubuntu – JamesCoyle.net](http://www.jamescoyle.net/how-to/478-create-a-zfs-volume-on-ubuntu)

[How ZFS continues to be better than btrfs — Rudd-O.com in English](https://rudd-o.com/linux-and-free-software/ways-in-which-zfs-is-better-than-btrfs)
[The ZFS Story: Clearing Up the Confusion - Datamation](http://www.datamation.com/data-center/the-zfs-story-clearing-up-the-confusion-1.html)
[Why I do not use ZFS as a file system for my NAS](http://louwrentius.com/why-i-do-not-use-zfs-as-a-file-system-for-my-nas.html) in 2011
[Why I Do Use ZFS as a File System for My NAS](http://louwrentius.com/why-i-do-use-zfs-as-a-file-system-for-my-nas.html) in 2015

[An Introduction to the Implementation of ZFS (part 1 of 2) - YouTube](https://www.youtube.com/watch?v=UP_JfUUmDZo)
[An Introduction to the Implementation of ZFS (part 2 of 2) - YouTube](https://www.youtube.com/watch?v=l-RCLgLxuSc)

#### sanoid

[jimsalterjrs/sanoid: Policy-driven snapshot management and replication tools. Using ZFS for underlying next-gen storage.](https://github.com/jimsalterjrs/sanoid)
`syncoid`, a replication tool that facilitates the asynchronous incremental replication of ZFS filesystems
[ZFS backups - Sanoid and Syncoid help : zfs](https://www.reddit.com/r/zfs/comments/rnsf4w/zfs_backups_sanoid_and_syncoid_help/)

### techniques/internals

[inode - Wikiwand](https://www.wikiwand.com/en/Inode)
[Intro to Inodes | Linux.org](http://www.linux.org/threads/intro-to-inodes.4130/)
[LINUX Understanding inodes - YouTube](https://www.youtube.com/watch?v=_6VJ8WfWI4k)
[Detailed Understanding Of Linux Inodes With Example](https://linoxide.com/linux-command/linux-inode/)
[inode and its structure in linux](https://www.slashroot.in/inode-and-its-structure-linux)
Check inode usage: `df -i`

[Journal File System | Linux.org](https://www.linux.org/threads/journal-file-system.8630/)
[Journaling file system - Wikiwand](http://www.wikiwand.com/en/Journaling_file_system)

[Is the file table in the filesystem or in memory? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/21325/is-the-file-table-in-the-filesystem-or-in-memory)

[Hard and Soft Links in Linux - YouTube](https://www.youtube.com/watch?v=kYonC93SvpE)

[Direct I/O | Linux.org](https://www.linux.org/threads/direct-i-o.8705/)
[Intro to Extents | Linux.org](https://www.linux.org/threads/intro-to-extents.8625/)
[Extent (file systems) - Wikiwand](<https://www.wikiwand.com/en/Extent_(file_systems)>)

[Linux文件系统详解 - pipci - 博客园](https://www.cnblogs.com/pipci/p/11563028.html)

[Ext4 Wiki](https://ext4.wiki.kernel.org/index.php/Main_Page)

## Bit Rot

[Bit Rot: How Hard Drives and SSDs Die Over Time](https://www.howtogeek.com/660727/bit-rot-how-hard-drives-and-ssds-die-over-time/amp/)
[Bitrot and atomic COWs: Inside “next-gen” filesystems | Ars Technica](http://arstechnica.com/information-technology/2014/01/bitrot-and-atomic-cows-inside-next-gen-filesystems/amp/)
[What is Data Rot? - YouTube](https://www.youtube.com/watch?v=Ie9qomn3_3U)
[Microsoft introduces new robust “Resilient File System” for Windows Server 8 | Ars Technica](http://arstechnica.com/information-technology/2012/01/microsoft-introduces-new-robust-resilient-file-system-for-windows-server-8/amp/)

## Linux LVM

[Logical Volume Manager (Linux) - Wikiwand](<https://www.wikiwand.com/en/Logical_Volume_Manager_(Linux)>)

[LVM - ArchWiki](https://wiki.archlinux.org/title/LVM)
[Software RAID and LVM - ArchWiki](https://wiki.archlinux.org/title/Software_RAID_and_LVM)

[Linux lvm - Logical Volume Manager](https://linuxconfig.org/linux-lvm-logical-volume-manager)
[The Linux Logical Volume Manager | Red Hat](https://www.redhat.com/magazine/009jul05/features/lvm2/)
[A Beginner's Guide To LVM](https://www.howtoforge.com/linux_lvm)
[LVM HOWTO](http://www.tldp.org/HOWTO/LVM-HOWTO/)
[How to Set Up LVM Physical Volumes | Learning Tree Blog](https://blog.learningtree.com/set-lvm-physical-volumes/)

[Cool Solutions: Recovering a Lost LVM Volume Disk](https://www.novell.com/coolsolutions/appnote/19386.html)
[Recovery of LVM partitions](http://www.softpanorama.org/Commercial_linuxes/LVM/recovery_of_lvm_partitions.shtml)
[Recovery of LVM partitions](http://www.softpanorama.org/Commercial_linuxes/LVM/recovery_of_lvm_partitions.shtml)

[Restoring LVM volumes | Jethro Carr](https://www.jethrocarr.com/2013/11/23/restoring-lvm-volumes/)

[LVM快照 - pipci - 博客园](https://www.cnblogs.com/pipci/p/11568861.html)
[LVM管理 - pipci - 博客园](https://www.cnblogs.com/pipci/p/11477111.html)
[Linux系统中的Device Mapper学习 - pipci - 博客园](https://www.cnblogs.com/pipci/p/11419949.html)
[Linux 内核中的 Device Mapper 机制 - pipci - 博客园](https://www.cnblogs.com/pipci/p/11419737.html)

## File System integrity

### dm-crypt

> block level, depends on TPM

[dm-crypt - Wikiwand](https://www.wikiwand.com/en/Dm-crypt)

### dm-verity

> block level, depends on [[boot#Secure boot]]

[dm-verity — The Linux Kernel documentation](https://docs.kernel.org/admin-guide/device-mapper/verity.html)
[An Introduction to Dm-verity in Embedded Device Security — Star Lab Software](https://www.starlab.io/blog/dm-verity-in-embedded-device-security)
[Implementing dm-verity  |  Android Open Source Project](https://source.android.com/docs/security/features/verifiedboot/dm-verity)

### IMA/EVM

> file level, depends on [[boot#Secure boot]]

[Integrity Measurement Architecture (IMA) / Wiki / Home](https://sourceforge.net/p/linux-ima/wiki/Home/)

## FUSE

[libfuse/libfuse: The reference implementation of the Linux FUSE (Filesystem in Userspace) interface](https://github.com/libfuse/libfuse)
[Filesystems · libfuse/libfuse Wiki](https://github.com/libfuse/libfuse/wiki/Filesystems)

[Writing a Simple Filesystem Using FUSE in C](http://www.maastaar.net/fuse/linux/filesystem/c/2016/05/21/writing-a-simple-filesystem-using-fuse/)
[thawkins/fuse-examplefs: Automatically exported from code.google.com/p/fuse-examplefs](https://github.com/thawkins/fuse-examplefs)

### Rust

[Rust's Bindgen + Fuse in 2019 - DEV Community 👩‍💻👨‍💻](https://dev.to/kdrakon/rust-s-bindgen-fuse-in-2019-2e8l)

### Python

[Python + FUSE - YouTube](https://www.youtube.com/watch?v=DpvdOuTzOU0)
[fusepy/fusepy: Simple ctypes bindings for FUSE](https://github.com/fusepy/fusepy)

[Writing a FUSE filesystem in Python – The Python corner – Medium](https://medium.com/the-python-corner/writing-a-fuse-filesystem-in-python-5e0f2de3a813)
[Writing a FUSE filesystem in Python - Stavros' Stuff](https://www.stavros.io/posts/python-fuse-filesystem/)
[skorokithakis/python-fuse-sample: A sample FUSE filesystem in Python.](https://github.com/skorokithakis/python-fuse-sample)

### sshfs

[libfuse/sshfs: A network filesystem client to connect to SSH servers](https://github.com/libfuse/sshfs)

[How to Mount a Remote Folder using SSH on Ubuntu](http://www.howtogeek.com/howto/ubuntu/how-to-mount-a-remote-folder-using-ssh-on-ubuntu/)
[How to mount a remote directory over ssh on Linux - Xmodulo](http://xmodulo.com/how-to-mount-remote-directory-over-ssh-on-linux.html)
[How to use SSHFS to Mount Remote Directories over SSH | Linuxize](https://linuxize.com/post/how-to-use-sshfs-to-mount-remote-directories-over-ssh/)
[SSHFS for Shared Storage » ADMIN Magazine](https://www.admin-magazine.com/HPC/Articles/SSHFS-for-Shared-Storage)

[How to Use Linux SFTP Command to Transfer Files | Linuxize](https://linuxize.com/post/how-to-use-linux-sftp-command-to-transfer-files/) uses by SSHFS under the hood

```sh
# install sshfs (once)
sudo apt-get install sshfs

# mount sshfs
sshfs user@yourdomain.com:/path/to/remote local/path

# unmount sshfs
fusermount -u local_mountpoint
```

### Dokan (FUSE for Windows)

[Dokan - User mode file system library for windows with FUSE Wrapper](https://dokan-dev.github.io/)
[Are there a list of supported filesystems for Dokany? - Google Groups](https://groups.google.com/forum/#!topic/dokan/L0j8hOubT1Y)

### WinFsp

[WinFsp](https://winfsp.dev/) FUSE for Windows
[Scille/winfspy: WinFSP binding for Python](https://github.com/scille/winfspy)

## Mhddfs

[mhddfs: join several filesystems together to form a single larger one - rm's homepage](https://romanrm.net/mhddfs)
[Mhddfs - Combine Several Smaller Partition into One Large Virtual Storage](http://www.tecmint.com/combine-partitions-into-one-in-linux-using-mhddfs/)
[Install & Configure MHDDFS Virtual Storage Pool | DominicM](http://dominicm.com/install-and-configure-mhddfs-virtual-storage-pool/)
[Why I ditched RAID and Greyhole for MHDDFS | Zorn Software](http://zornsoftware.codenature.info/blog/why-i-ditched-raid-and-greyhole-for-mhddfs.html)

[Install MHDDFS on Arch Linux | DominicM](http://dominicm.com/install-configure-mhddfs-on-arch-linux/)

## > 2TB partition

http://www.thegeekstuff.com/2011/09/parted-command-examples/
http://www.systutorials.com/46294/making-gpt-partition-table-and-creating-partitions-with-parted-on-linux/
http://www.thegeekstuff.com/2012/08/2tb-gtp-parted/
