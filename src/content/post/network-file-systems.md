---
title: Network File Systems
description: ""
created: 2015-05-20
updated: 2025-10-10
tags:
  - file-system
  - linux
  - storage
---

> [[cloud-backup#Private Cloud Solution]]

[Key Considerations for Planning a PC Storage Refresh](https://www.itprotoday.com/high-speed-storage/how-i-planned-my-storage-hardware-refresh)

[Network share: Performance differences between NFS & SMB](https://ferhatakgun.com/network-share-performance-differences-between-nfs-smb/)
[Comparison of NFS vs. others - Linux NFS](http://wiki.linux-nfs.org/wiki/index.php/Comparison_of_NFS_vs._others)

[NAS / 路由器 / 網絡相關 - YouTube](https://www.youtube.com/playlist?list=PLXvhiMRRLHkN5LwW18zKryt22UbQza4i3) Mostly for Synology products

## NFS

[Network File System - Wikiwand](https://www.wikiwand.com/en/Network_File_System)

[RFC 1094 - NFS: Network File System Protocol specification](https://datatracker.ietf.org/doc/html/rfc1094)
[RFC 1813 - NFS Version 3 Protocol Specification](https://datatracker.ietf.org/doc/html/rfc1813)
[RFC 7530 - Network File System (NFS) Version 4 Protocol](https://datatracker.ietf.org/doc/html/rfc7530)
[RFC 7931 - NFSv4.0 Migration: Specification Update](https://datatracker.ietf.org/doc/html/rfc7931)
[RFC 8178 - Rules for NFSv4 Extensions and Minor Versions](https://datatracker.ietf.org/doc/html/rfc8178)
[RFC 8881 - Network File System (NFS) Version 4 Minor Version 1 Protocol](https://datatracker.ietf.org/doc/html/rfc8881)

[Shared Storage with NFS and SSHFS » ADMIN Magazine](http://www.admin-magazine.com/HPC/Articles/Shared-Storage-with-NFS-and-SSHFS)
[Optimizing Your NFS Filesystem » ADMIN Magazine](http://www.admin-magazine.com/HPC/Articles/Useful-NFS-Options-for-Tuning-and-Management)

[ServeTheHome: Server, Storage, Networking, and Software Reviews](https://www.servethehome.com/)
[Linux Home Server HOWTO - Network File System](http://www.brennan.id.au/19-Network_File_System.html)
[SettingUpNFSHowTo - Community Help Wiki](https://help.ubuntu.com/community/SettingUpNFSHowTo)
[Linux NFS-HOWTO](http://nfs.sourceforge.net/nfs-howto/)

[vSphere 6: NFS 4.1 Finally Has a Use? - Stephen Foskett, Pack Rat](https://web.archive.org/web/20250101151742/https://blog.fosketts.net/2015/02/03/vsphere-6-nfs-41-finally/)
[Using NFS to Share Data Between UNIX and Mac OS X - Stephen Foskett, Pack Rat](http://blog.fosketts.net/2015/03/20/using-nfs-to-share-data-between-unix-and-mac-os-x/)

[Mastering NFS v4 Identity Mapping | by Thilina Viraj | Medium](https://thilinaviraj.medium.com/mastering-nfs-v4-identity-mapping-72146e931a38)

[Mount an NFS Share on Windows 11 with PowerShell – 4sysops](https://4sysops.com/archives/mount-an-nfs-share-on-windows-11-with-powershell/)

## Samba/CIFS/Windows Share Folder

SMB3 > SMB2 > AFP ~ CIFS = SMB1

[Server Message Block - Wikiwand](https://www.wikiwand.com/en/Server_Message_Block)

[Samba - ArchWiki](https://wiki.archlinux.org/title/Samba)
[Samba - opening windows to a wider world](https://www.samba.org/samba/)
[Using Samba](https://www.samba.org/samba/docs/using_samba/toc.html)
[smb.conf](https://www.samba.org/samba/docs/man/manpages/smb.conf.5.html)
[Samba Troubleshooting » ADMIN Magazine](http://www.admin-magazine.com/Articles/Samba-pitfalls-in-daily-operation)
[Samba Cheatsheet | Programster's Blog](https://blog.programster.org/samba-cheatsheet)

[Why You Should Never Again Utter The Word, "CIFS" - Stephen Foskett, Pack Rat](https://web.archive.org/web/20250415065008/https://blog.fosketts.net/2012/02/16/cifs-smb/)
[From LAN Manager and SMB to CIFS: The Evolution of Prehistoric PC Network Protocols - Stephen Foskett, Pack Rat](https://web.archive.org/web/20240910153246/https://blog.fosketts.net/2012/03/22/lan-manager-smb-cifs-history/)
[A Fairy Tale of Two Storage Protocols - Stephen Foskett, Pack Rat](https://web.archive.org/web/20241105073733/https://blog.fosketts.net/2014/09/23/fairy-tale-storage-protocols/)

```sh
# samba.service is for AD domain controller
# use this to control the samba share on Linux server
sudo systemctl start nmb.service
```

[linux - Mount cifs Network Drive: write permissions and chown - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/68079/mount-cifs-network-drive-write-permissions-and-chown) Must specify `uid` and `gid` mount option

```sh
sudo mount -t cifs -o rw,username=$USER,password=$PWD,uid=$(id -u),forceuid,gid=$(id -g),forcegid \
    $SAMBA_PATH $TARGET_FOLDER

# credential file
# username={{user}}
# password={{password}}
sudo mount -t cifs -o rw,credentials={{CREDENTIAL_FILE}},uid=$(id -u),forceuid,gid=$(id -g),forcegid \
    $SAMBA_PATH $TARGET_FOLDER
```

```sh
smbclient $SAMBA_PATH --user $USER
```

[linux - Windows 10 Password Error with Samba Share - Super User](https://superuser.com/questions/1125438/windows-10-password-error-with-samba-share)

### Clearing credentials on Windows

[clear out windows 10 network credentials without rebooting - Super User](https://superuser.com/questions/1069475/clear-out-windows-10-network-credentials-without-rebooting)
[How to Clear Saved Credentials for Network Share or Remote Desktop Connection | Password Recovery](https://www.top-password.com/blog/clear-saved-credentials-for-network-share-or-remote-desktop/)

```
net use \\server\share /delete
klist purge
```

### follow symlink

```ini
[global]
follow symlinks = yes
wide links = yes
unix extensions = no
```

## WekaFS

[The Data Platform for Cloud & AI | WEKA - WEKA](https://www.weka.io/)
[Data Management Platform: How It Works - WEKA](https://www.weka.io/data-platform/how-our-data-management-platform-works/)
[10 Reasons to Deploy WekaFS Parallel File System - WEKA](https://www.weka.io/resources/solution-brief/10-reasons-to-deploy-wekafs-parallel-file-system/)

[csi-wekafs | WekaFS Container Storage Interface (CSI) Plugin](https://weka.github.io/csi-wekafs/)

---

[NitroShare](https://nitroshare.net/)
