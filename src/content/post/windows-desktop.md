---
title: Windows Desktop
description: ""
created: 2015-01-15
updated: 2023-08-13
tags:
  - app
  - desktop
  - windows
---

[Windows Central | News, Forums, Reviews, Help for Windows 10 and all things Microsoft.](https://www.windowscentral.com/)
[MSPoweruser - Microsoft and Technology News](https://mspoweruser.com/)
[OnMSFT.com](https://www.onmsft.com/)
[The ultimate Windows 10 information hub: Everything you need in one place | ZDNet](https://www.zdnet.com/article/free-how-to-help-windows-10-ed-botts-tech-support-troubleshooting-guide/)

[Ninite - Install or Update Multiple Apps at Once](https://ninite.com/)
[Slimware Utilities - Download SlimDrivers FREE](https://www.slimwareutilities.com/slimdrivers.php)
[The Leading Driver Updater and Manager for Windows 10, 8.1, 8, 7 | Driver Talent](http://www.drivethelife.com/free-drivers-download-utility.html)
[Front Page | ReactOS Project](http://reactos.org/) Reimplementation of Windows NT on Linux

[The Rebirth Of Microsoft - How Satya Nadella Saved It (Or Did He?) - YouTube](https://www.youtube.com/watch?v=tbItn2ec67A)
[Windows 1.0 to 10: The changing face of Microsoft's landmark OS | ZDNet](http://www.zdnet.com/pictures/windows-1-0-to-10-the-changing-face-of-microsofts-landmark-os/)

[Windows 10 | Windows Central](https://www.windowscentral.com/windows-10)

[Sysinternals Utilities - Windows Sysinternals | Microsoft Docs](https://docs.microsoft.com/en-us/sysinternals/downloads/)
[Files App - Microsoft Store Apps](https://apps.microsoft.com/store/detail/files-app/9NGHP3DX8HDX)
[SetUserFTA: UserChoice Hash defeated – Set File Type Associations per User or Group on Windows 8/10 and 2012/2016/2019 – the kolbicz blog](https://kolbi.cz/blog/2017/10/25/setuserfta-userchoice-hash-defeated-set-file-type-associations-per-user/)

## CLI

[Windows Command-Line: Backgrounder – Windows Command Line Tools For Developers](https://blogs.msdn.microsoft.com/commandline/2018/06/20/windows-command-line-backgrounder/)
[Windows Command-Line: The Evolution of the Windows Command-Line – Windows Command Line Tools For Developers](https://blogs.msdn.microsoft.com/commandline/2018/06/27/windows-command-line-the-evolution-of-the-windows-command-line/)
[Windows Command-Line: Inside the Windows Console – Windows Command Line Tools For Developers](https://blogs.msdn.microsoft.com/commandline/2018/07/10/windows-command-line-inside-the-windows-console/)

[Clink](https://chrisant996.github.io/clink/clink.html) `CMD.exe` + `readline`

[How to use unicode characters in Windows command line? - Stack Overflow](https://stackoverflow.com/questions/388490/how-to-use-unicode-characters-in-windows-command-line)

[40 Windows Commands you NEED to know (in 10 Minutes) - YouTube](https://www.youtube.com/watch?v=Jfvg3CS1X3A)

```powershell
chcp   # return current code page
chcp 65001
```

## Maintenance

[The One Command Every Windows User Should Know And How To Use It](https://hothardware.com/news/windows-system-file-checker-guide)

```powershell
sfc /scannow
dism /online /cleanup-image /restorehealth
chkdsk /f
```

## Remote Desktop

Only Windows 10 Professional and Enterprise supports RDP server and it only allows single session

[Microsoft may soon add multi-session remote access to Windows 10 Enterprise | Computerworld](https://www.computerworld.com/article/3296363/microsoft-may-soon-add-multi-session-remote-access-to-windows-10-enterprise.html)

[stascorp/rdpwrap: RDP Wrapper Library](https://github.com/stascorp/rdpwrap)
[How to Allow Multiple RDP Sessions in Windows 10? | Windows OS Hub](http://woshub.com/how-to-allow-multiple-rdp-sessions-in-windows-10/)
[Allowing Multiple RDP Sessions In Windows 10 Using The RDP Wrapper Library - Ehi Kioya](https://ehikioya.com/multiple-rdp-sessions-in-windows-rdp-wrapper-library/)
[Listener state: Not listening [not supported] · Issue #999 · stascorp/rdpwrap](https://github.com/stascorp/rdpwrap/issues/999)

## PowerToys

[Microsoft PowerToys | Microsoft Docs](https://docs.microsoft.com/en-us/windows/powertoys/)

[Microsoft brings PowerToys back to let anyone improve Windows 10 for power users - The Verge](https://www.theverge.com/platform/amp/2019/5/8/18536773/microsoft-windows-10-powertoys-apps-open-source-github-release)
[microsoft/PowerToys: Windows system utilities to maximize productivity](https://github.com/Microsoft/PowerToys)
[Windows 10's first PowerToys app allows custom Snap resizing and looks amazing | PCWorld](https://www.pcworld.com/article/3436599/windows-10-powertoys-app-tutorial-for-beginners.html)

[Windows 10 PowerToys: How to use and configure FancyZones - TechRepublic](https://www.techrepublic.com/article/windows-10-powertoys-how-to-use-and-configure-fancyzones/)
[FancyZones Overview · microsoft/PowerToys Wiki · GitHub](https://github.com/microsoft/PowerToys/wiki/FancyZones-Overview)

[微軟竟給 Windows 量身打造了一套生產力小工具？看在這誠意的份上我只好安裝了 PowerToys - YouTube](https://www.youtube.com/watch?v=EAoIGJjWdbA)

## CMD Shell/Batch Script (.bat)

[Commands by Server role | Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/commands-by-server-role)

[Batch Script Tutorial](https://www.tutorialspoint.com/batch_script/)

[Windows CMD Command Syntax - SS64.com](https://ss64.com/nt/syntax.html)
[variable substring - Windows CMD - SS64.com](https://ss64.com/nt/syntax-substring.html)
[CMD Variable edit replace - Windows CMD - SS64.com](https://ss64.com/nt/syntax-replace.html)

[Getting started with batch files](https://www.robvanderwoude.com/batchstart.php)

## Crapware/Debloating

Beware of where you download from, especially don't use download.com.
[Here’s What Happens When You Install the Top 10 Download.com Apps](http://www.howtogeek.com/198622/heres-what-happens-when-you-install-the-top-10-download.com-apps/)
[Crapware Is a Horrible Problem and It's Our Fault](http://lifehacker.com/crapware-is-a-horrible-problem-and-its-all-our-fault-1705794628)

[AtlasOS — Home](https://atlasos.net/)
[DaddyMadu/Windows10GamingFocus: This is the Ultimate Windows 10 Debloat and Gaming Tweaks Optimization based on ChrisTitusTechScript which is based on multiple debloat scripts and gists from github.](https://github.com/DaddyMadu/Windows10GamingFocus) use this over `Windows10Debloater`
[Sycnex/Windows10Debloater: Script to remove Windows 10 bloatware.](https://github.com/Sycnex/Windows10Debloater)

[Microsoft Provides New Performance Tips for Windows 11 Gamers | Tom's Hardware](https://www.tomshardware.com/news/microsoft-windows-11-gaming-boost-tips)
[Options to Optimize Gaming Performance in Windows 11](https://prod.support.services.microsoft.com/en-us/windows/options-to-optimize-gaming-performance-in-windows-11-a255f612-2949-4373-a566-ff6f3f474613)

## Windows 11

[Hate Windows 11? Try this. - YouTube](https://www.youtube.com/watch?v=GZPRrYLGrhI)

[Debloating Windows 11 The Easy Way! - YouTube](https://www.youtube.com/watch?v=8ReoMuCUdKE)
[builtbybel/ThisIsWin11: The real PowerToys for Windows 11](https://github.com/builtbybel/ThisIsWin11)

[How to Restore Classic Start Menu in Windows 11 with Classic Taskbar](https://winaero.com/how-to-restore-classic-start-menu-in-windows-11-and-get-back-live-tiles/)

[How to enable taskbar ungrouping and labels in Windows 11](https://www.xda-developers.com/how-enable-taskbar-ungrouping-labels-windows-11/)
[Ungroup items on the Taskbar in Windows 11 - Page 2 - Microsoft Community Hub](https://techcommunity.microsoft.com/t5/windows-11/ungroup-items-on-the-taskbar-in-windows-11/m-p/2585176/page/2)

```ps1
# Ungroup Taskbar Icons / Enable Text Labels in Windows 11
New-Item -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer"
New-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer" -Name "NoTaskGrouping" -PropertyType DWord -Value "00000001";
Set-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer" -Name "NoTaskGrouping" -Value "00000001";

taskkill /f /im explorer.exe;
CMD /Q /C START /REALTIME explorer.exe;
```

### On Phone

[给手机装 Windows11！还能玩大型游戏？！ - YouTube](https://www.youtube.com/watch?v=4QnVNkZVnfc)

[Renegade Project](https://renegade-project.org/#/)
[Renegade Project](https://github.com/edk2-porting)

[Renegade Project](https://renegade-project.org/#/zh/devices/sdm845/enchilada/status)
[如何在骁龙 845 设备上安装 Windows - Windows / Installation - Renegade Project](https://forum.renegade-project.org/t/845-windows/36)
[一加 6 刷入 windows 教程 - Windows / Installation - Renegade Project](https://forum.renegade-project.org/t/6-windows/194)

## Windows 10 updates

[Now Windows 10 Has C, B, and D Updates. What is Microsoft Smoking?](https://www.howtogeek.com/398226/now-windows-10-has-c-b-and-d-updates.-what-is-microsoft-smoking/)
[Windows 10: A guide to the updates | Computerworld](http://www.computerworld.com/article/3199077/microsoft-windows/windows-10-a-guide-to-the-updates.html)
[Windows 10 Anniversary Update: The good, the bad and the 'meh' (with video) | Computerworld](http://www.computerworld.com/article/3101968/microsoft-windows/review-windows-10-anniversary-update-good-bad-meh-video.html)
[Review: Windows 10 Creators Update is here and worth the download (with video) | Computerworld](http://www.computerworld.com/article/3187586/microsoft-windows/review-windows-10-creators-update-is-here-and-worth-the-download-with-video.html)

[Hide Windows Updates or driver updates](https://support.microsoft.com/en-us/help/4026726/windows-10-hide-updates-or-driver-updates)
[How to stop a Windows 10 update | TechRadar](https://www.techradar.com/uk/how-to/how-to-stop-a-windows-10-update)
[Save yourself a headache: Make sure Windows automatic update is off | Computerworld](https://www.computerworld.com/article/3400953/save-yourself-a-headache-make-sure-windows-automatic-update-is-off.amp.html)
[The May Update For Windows 10 Offers Fool's Gold About User Control Over Automatic Updates](https://www.forbes.com/sites/kevinmurnane/2019/05/05/the-may-update-for-windows-10-offers-fools-gold-about-user-control-over-automatic-updates/#attachment_18440)
[How to fix high CPU usage after installing update KB4512941 on Windows 10 | Windows Central](https://www.windowscentral.com/how-fix-high-cpu-usage-after-installing-update-kb4512941-windows-10?amp) disable Cortana
[Windows 10 KB5001330: Microsoft issues emergency fix for performance issues](https://www.windowslatest.com/2021/04/24/microsoft-issues-emergency-windows-10-april-fix-for-performance-issues/)

## Windows 10 privacy

[Windows 10 violates your privacy by default, here's how you can protect yourself - TechRepublic](http://www.techrepublic.com/article/windows-10-violates-your-privacy-by-default-heres-how-you-can-protect-yourself/)
[Windows 10 quick tips: How to protect your privacy | Computerworld](http://www.computerworld.com/article/3025709/microsoft-windows/windows-10-quick-tips-how-to-protect-your-privacy.html)
[One Tip A Day Tech Blog: Windows 10 A free upgrade, paid for by your data - Tweak Windows 10 to protect your privacy](http://savvygeektips.blogspot.hk/2015/08/windows-10-free-upgrade-paid-for-by.html)
[How to Disable All of Windows 10’s Built-in Advertising](https://www.howtogeek.com/269331/how-to-disable-all-of-windows-10s-built-in-advertising/)

[Prevent Windows 10 Spying On You, Privacy & Security Matter! - YouTube](https://www.youtube.com/watch?v=u1kGMCfb2xw)
[How to Disable “Let’s Finish Setting Up Your Device” on Windows](https://www.howtogeek.com/795140/how-to-disable-lets-finish-setting-up-your-device-on-windows/)

[Spybot Anti-Beacon for Windows](https://www.safer-networking.org/spybot-anti-beacon/) now paid app?
[O&O ShutUp10 -Free antispy tool for Windows 10](https://www.oo-software.com/en/shutup10)

Go through "Privacy" in "Setting", disable most of the options.
Also disable Background Apps.

Disable search in Start Menu:
[windows 10 - How to disable internet search results in start menu post Creators Update? - Super User](https://superuser.com/questions/1196618/how-to-disable-internet-search-results-in-start-menu-post-creators-update)

```powershell
REG ADD HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Search /f /v BingSearchEnabled /t REG_DWORD /d 0
REG ADD HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Search /f /v AllowSearchToUseLocation /t REG_DWORD /d 0
REG ADD HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Search /f /v CortanaConsent /t REG_DWORD /d 0
```

## Windows 10 License

The Windows 10 license is bound to your PC and stored online. Meaning that you don't need to input key upon installation and the new install will be activated automatically.
In 2016's Anniversary Update (1607), the Windows 10 license can be bound to a Microsoft account and the Windows is activated automatically as you login with Microsoft account.
[Activation in Windows 10 - Windows Help](https://support.microsoft.com/en-us/help/12440/windows-10-activation)
[Microsoft quietly rewrites its activation rules for Windows 10 | ZDNet](http://www.zdnet.com/article/microsoft-quietly-rewrites-its-activation-rules-for-windows-10/)

[How to Get Rid of the Activate Windows Watermark [Windows 10 PC Activation Message Removal]](https://www.freecodecamp.org/news/how-to-get-rid-of-the-activate-windows-watermark-windows-10-pc-activation-message-removal/)

[Windows 10 editions - Wikiwand](https://www.wikiwand.com/en/Windows_10_editions)
[Compare Windows 10 business editions - Windows](https://www.microsoft.com/en-us/windowsforbusiness/compare/)
[Every Single Windows 10 Version You Must Know About](https://www.makeuseof.com/tag/windows-10-version-overview/)
[Windows 10 Pro vs. Enterprise: What Is the Difference? | Lakeside Software](https://www.lakesidesoftware.com/blog/windows-10-pro-vs-enterprise)
[Can I legally use a Home version of Windows 10 for commercial purposes at home? I will be making websites on it, coding, and doing other stuff to earn money. - Quora](https://www.quora.com/Can-I-legally-use-a-Home-version-of-Windows-10-for-commercial-purposes-at-home-I-will-be-making-websites-on-it-coding-and-doing-other-stuff-to-earn-money)

[Windows 7,8,10 Activators - Download activators for Windows](http://windows-activator.net/)
[Windows 10 Activator - windows10activator.org](http://windows10activator.org/)
Re-loader Activator

[5 块钱的 win10 激活码能用么？淘宝密钥背后的秘密：盗版系统有什么危害？ - YouTube](https://www.youtube.com/watch?v=o2qdRlmofMg)
[花了两块钱就是在用正版 Windows 系统？科普某宝密钥是怎么一回事 - YouTube](https://www.youtube.com/watch?v=sz26bnZD7cQ)
Developer Key
MAK Key (volume key for corporates)
OEM Key
[Releases · zbezj/HEU_KMS_Activator · GitHub](https://github.com/zbezj/HEU_KMS_Activator/releases)

[LTSC: What is it, and when should it be used? - Microsoft Tech Community - 293181](https://techcommunity.microsoft.com/t5/Windows-IT-Pro-Blog/LTSC-What-is-it-and-when-should-it-be-used/ba-p/293181)
[What is Windows 10 LTSC? - YouTube](https://www.youtube.com/watch?v=h5NPPUtptV0) LTSB renamed as LTSC

### Retrieving Product Key

Use this to get keys of products installed in your PC.
[ProduKey - Recover lost product key (CD-Key) of Windows/MS-Office/SQL Server](http://www.nirsoft.net/utils/product_cd_key_viewer.html)
[Win Keyfinder 2.1 A Free Windows Product Key Viewer](https://www.winkeyfinder.com/)
[terjew/VSKeyExtractor: A small tool to extract the license key that was used to activate your local installation of Visual Studio](https://github.com/terjew/VSKeyExtractor)

However, Windows 10 upgrade version provides only generic product keys:

- TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 for Windows 10 Home
- VK7JG-NPHTM-C97JM-9MPGT-3V66T for Windows 10 Pro edition

[GatherOSState.exe Provides Win10 License Info for Clean Install – Win10.Guru](https://win10.guru/gatherosstate-exe-provides-win10-license-info-for-clean-install/)

[Windows 10 Product Key And Activation: How To Find It And How It Works | Redmond Pie](http://www.redmondpie.com/windows-10-product-key-and-activation-how-to-find-it-and-how-it-works/)
[How to find Windows 10 product key | How to extract Windows 10 key - How-To - PC Advisor](http://www.pcadvisor.co.uk/how-to/windows/how-view-your-product-key-in-windows-10-3632749/)
[How to Find Your Original Windows 10 Product Key - TechSpot](https://www.techspot.com/amp/guides/1760-find-your-windows-product-key/)

### License Transfer

_OEM license is not transferable._

In **administrator** command prompt:
Check license info: `slmgr.vbs /dlv`
Remove product key: `slmgr.vbs /upk`
Register product key: `slmgr.vbs /ipk <key>`
Trigger activation manually: `slui 4`

[How to Transfer your Windows 10 License to a New Computer](https://www.groovypost.com/howto/transfer-windows-10-license-new-pc/)
[How to transfer a Windows 10 license to a new computer or hard drive | Windows Central](https://www.windowscentral.com/how-transfer-windows-10-license-new-computer-or-hard-drive?amp)
[How to Transfer a Windows 10 or 11 License to Another PC | Tom's Hardware](https://www.tomshardware.com/how-to/transfer-windows-license-to-new-pc)

[KeyFinder | Magical Jelly Bean](https://www.magicaljellybean.com/keyfinder/)

## Windows Store

[Fix Error Code 0x803F8001 Game is currently not available in your account. Here’s the error code. - YouTube](https://www.youtube.com/watch?v=Jr3J3wztUTE)

## Boot

[Visual BCD Editor - graphical bcdedit for Windows 7-10](https://www.boyans.net/)
[Visual BCD Editor: Edit Windows 7 Boot Configuration Data](https://www.intowindows.com/visual-bcd-editor-edit-windows-7-boot-configuration-data/)

## Reserved file names

[What’s the deal with those reserved filenames like NUL and CON? – The Old New Thing](https://blogs.msdn.microsoft.com/oldnewthing/20031022-00/?p=42073)

[foone on Twitter: "It is 2018 and this error message is a mistake from 1974. This limitation, which is still found in the very latest Windows 10, dates back to BEFORE STAR WARS. This bug is as old as Watergate. https://t.co/pPbkZiE57t" / Twitter](https://mobile.twitter.com/Foone/status/1058676834940776450)

## Registry

[Useful Registry Keys - WineHQ Wiki](https://wiki.winehq.org/Useful_Registry_Keys)
[Best Free PC Registry Cleaner Software Download. Fix Errors Now!](https://www.auslogics.com/en/software/registry-cleaner/)

[reg commands | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/reg)
[Reg - Edit Registry - Windows CMD - SS64.com](https://ss64.com/nt/reg.html)

[Working with registry entries - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-entries?view=powershell-7.3)
[New-ItemProperty (Microsoft.PowerShell.Management) - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-itemproperty)

```powershell
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" `
-Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```

### Protocol Registration

```powershell
REG ADD HKEY_CLASSES_ROOT\rtsp /f /v EditFlags /t REG_BINARY /d 02000000
REG ADD HKEY_CLASSES_ROOT\rtsp /f /v "URL Protocol" /t REG_SZ
REG ADD HKEY_CLASSES_ROOT\rtsp\shell\open\command /f /ve /d "\"C:\Program Files\VideoLAN\VLC\vlc.exe\" %%1"
```

### Shell Right Click Registration

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Folder\shell\sublime]
@="Open with Sublime Text..."

[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Folder\shell\sublime\command]
@="\"C:\\Program Files\\Sublime Text 3\\subl.exe\" \"%1\""
```

### Disable AntiSpyware

The `Antimalware Service Executable` is hogging CPU even after Windows Defender is disabled. You can disable it via Registry.

1. Type `regedit` in the search box > hit Enter to launch the Registry Editor.
2. Go to: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender`
3. Right click on `Windows Defender` > select `New` > `DWORD`
4. Double click the newly created `DWORD` > name it `DisableAntiSpyware` > set the value to 1.

## Kernel Monitor

[Process Monitor - Windows Sysinternals | Microsoft Docs](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon)

[Fibratus](https://www.fibratus.io/#/)
[rabbitstack/fibratus: Tool for exploration and tracing of the Windows kernel](https://github.com/rabbitstack/fibratus)
[Fibratus Video Teaser – Rabbit Stack](<https://rabbitstack.github.io/operating systems/fibratus-video-teaser/>) run filter or Python filaments
[Fibratus Teaser - YouTube](https://www.youtube.com/watch?v=7Isrn-eb8Ws)

## Network

[Making Sense of Windows Routing Tables](http://techgenix.com/making-sense-windows-routing-tables/)

```sh
ipconfig /all
route print
```

[How to Clear Saved Credentials for Network Share or Remote Desktop Connection | Password Recovery](https://www.top-password.com/blog/clear-saved-credentials-for-network-share-or-remote-desktop/)

## Per-User Executable

[Open Sourcing Metapod, Personalized Executable for All. | Rainway](https://rainway.com/blog/2019/05/14/open-source-metapod/)
[RainwayApp/MetaPod: A cross-platform library for creating digitally signed portable executables with custom metadata.](https://github.com/RainwayApp/MetaPod)

## Linux FS on Windows

### ExtFS

[Access Ext2 and Ext3 from Windows using Ext2Fsd | USB Pen Drive Linux](http://www.pendrivelinux.com/access-ext2-and-ext3-from-windows/)
[Ext2 IFS For Windows](http://www.fs-driver.org/)
[chrysocome.net - Explore2fs](http://www.chrysocome.net/explore2fs)

### NFS

[RFC 1094 - NFS: Network File System Protocol specification](https://tools.ietf.org/html/rfc1094)
[RFC 1813 - NFS Version 3 Protocol Specification](https://tools.ietf.org/html/rfc1813)
[RFC 7530 - Network File System (NFS) Version 4 Protocol](https://tools.ietf.org/html/rfc7530)
[RFC 7931 - NFSv4.0 Migration: Specification Update](https://tools.ietf.org/html/rfc7931)

[nfsadmin | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nfsadmin)

## GNU tools

The tools for windows is no match for GNU tools.
You can go all the way to install [Cygwin](https://www.cygwin.com/) or use
[bmatzelle/gow](https://github.com/bmatzelle/gow)/ [Git for Windows](https://git-scm.com/download/win).

## WSA (Windows Subsystem for Android)

[ADeltaX/WSAGAScript: Scripts to install Google Apps into a WSA image. Plus optional ADB root](https://github.com/ADeltaX/WSAGAScript)

## WSL (Windows Subsystem for Linux)

WSL is (initially) a Ubuntu userland ("Bash for Windows") running on a POSIX -> Windows emulation layer (sort of inverse of [WINE](https://www.winehq.org/)). It is debuted in Windows 10 Anniversary Update (aka 1607) in 2017-03. Windows 10 update will ship a full Linux kernel (4.19) in WSL2 in 2019-06.

> TODO: WSL2 GA in 2022-11
> remove WSL1 articles

[An overview on the the Windows Subsystem for Linux | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/)

[Windows Command Line](https://devblogs.microsoft.com/commandline/)
[Windows Subsystem for Linux – The underlying technology enabling the Windows Subsystem for Linux](https://blogs.msdn.microsoft.com/wsl/) old

[Comparing WSL Versions | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/compare-versions)

[sirredbeard/Awesome-WSL: Awesome list dedicated to Windows Subsystem for Linux](https://github.com/sirredbeard/Awesome-WSL)
[A Windows Subsystem for Linux Subreddit](https://www.reddit.com/r/bashonubuntuonwindows/)
[Sysinternals/SysmonForLinux](https://github.com/Sysinternals/SysmonForLinux)

[Microsoft/WSL: Issues found on WSL](https://github.com/Microsoft/WSL)
[Windows 10 WSL - Phoronix](https://www.phoronix.com/scan.php?page=search&q=Windows+10+WSL)

[What is WSL? — Whitewater Foundry](https://www.whitewaterfoundry.com/what-is-wsl)
[Windows Subsystem for Linux » ADMIN Magazine](https://www.admin-magazine.com/Articles/WSL-puts-Linux-on-Windows-desktops)

[File System Improvements to the Windows Subsystem for Linux | Microsoft Learn](https://learn.microsoft.com/en-us/archive/blogs/wsl/file-system-improvements-to-the-windows-subsystem-for-linux)
[What’s new for WSL in Windows 10 version 1903? | Windows Command Line Tools For Developers](https://devblogs.microsoft.com/commandline/whats-new-for-wsl-in-windows-10-version-1903/) 9P file server for Windows to access WSL file system (`\\wsl$\`)
[Windows/WSL Interop with AF_UNIX | Windows Command Line Tools For Developers](https://devblogs.microsoft.com/commandline/windowswsl-interop-with-af_unix/)
[Very slow performance - is this normal for WSL? : bashonubuntuonwindows](https://www.reddit.com/r/bashonubuntuonwindows/comments/a23nul/very_slow_performance_is_this_normal_for_wsl/) this IO issue is not yet fixed

[When We Brought Linux to Windows - Microsoft Open Source Stories - Medium](https://medium.com/microsoft-open-source-stories/when-linux-came-to-windows-204cf9abb3d6)
[How to Export and Import Your Linux Systems on Windows 10](https://www.howtogeek.com/426562/how-to-export-and-import-your-linux-systems-on-windows-10/amp/)
[DirectX ❤ Linux | DirectX Developer Blog](https://devblogs.microsoft.com/directx/directx-heart-linux/)

### Installation

[Install WSL | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/install)
[Solved "WslRegisterDistribution failed with error: 0x80370114" | CyberITHub](https://www.cyberithub.com/solved-wslregisterdistribution-failed-with-error-0x80370114/)
[Set up a WSL development environment | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/setup/environment) best practices
[Troubleshooting Windows Subsystem for Linux | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/troubleshooting)

```sh
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

wsl --install # since Windows 10 build 2004

wsl --list # list distros
```

### Distros

[WSL - Microsoft Store](https://www.microsoft.com/en-us/search/shop/apps?q=wsl)

[RoliSoft/WSL-Distribution-Switcher: Scripts to replace the distribution behind Windows Subsystem for Linux with any other Linux distribution published on Docker Hub.](https://github.com/RoliSoft/WSL-Distribution-Switcher)
[Switching the distribution behind the Windows Subsystem for Linux](https://lab.rolisoft.net/blog/switching-the-distribution-behind-the-windows-subsystem-for-linux.html)

### WSL2

[WSL 2 | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/wsl2-index)
[Announcing WSL 2 | Windows Command Line Tools For Developers](https://devblogs.microsoft.com/commandline/announcing-wsl-2/)
[WSL 2 is now available in Windows Insiders | Windows Command Line Tools For Developers](https://devblogs.microsoft.com/commandline/wsl-2-is-now-available-in-windows-insiders/)
[Windows Subsystem for Linux 2 (WSL 2) Released to Insiders](https://www.bleepingcomputer.com/news/microsoft/windows-subsystem-for-linux-2-wsl-2-released-to-insiders/)
[An introduction to WSL 2 | InfoWorld](https://www.infoworld.com/article/3412063/an-introduction-to-wsl-2.html)
[Trying the New WSL 2. It's Fast! (Windows Subsystem for Linux) ― Scotch.io](https://scotch.io/bar-talk/trying-the-new-wsl-2-its-fast-windows-subsystem-for-linux)
[WSL 2 Post BUILD FAQ | Windows Command Line Tools For Developers](https://devblogs.microsoft.com/commandline/wsl-2-post-build-faq/)
[How Windows and Chrome quietly made 2019 the year of Linux on the desktop | PCWorld](https://www-pcworld-com.cdn.ampproject.org/v/s/www.pcworld.com/article/3394680/how-windows-and-chrome-quietly-made-2019-the-year-of-linux-on-the-desktop.amp.html)
[Windows Subsystem for Linux Brings the Full 4.19 Kernel to Windows - The New Stack](https://thenewstack.io/windows-subsystem-for-linux-brings-the-full-4-19-kernel-to-windows/)
[The new Windows subsystem for Linux architecture: a deep dive - BRK3068 - YouTube](https://www.youtube.com/watch?v=lwhMThePdIo) WSL2
[WSL2 will be generally available in Windows 10, version 2004 | Windows Command Line](https://devblogs.microsoft.com/commandline/wsl2-will-be-generally-available-in-windows-10-version-2004/)
[Linux on Windows - take two (WSL 2) - Avenga](https://www.avenga.com/magazine/linux-on-windows-take-two-wsl-2/)
[Automating a Linux in Windows dev setup](https://matt.aimonetti.net/posts/2020-08-automating-a-linux-in-windows-dev-setup/)
[Kali Linux APPS on Windows in 5min (WSLg) - YouTube](https://www.youtube.com/watch?v=27Wn921q_BQ)

[Version control for your WSL distribution with a Dockerfile | radu's blog](https://radu-matei.com/blog/wsl-versioned-filesystem-docker/)

[Windows 10 WSL2 Now Allows You to Configure Global Options](https://www.bleepingcomputer.com/news/microsoft/windows-10-wsl2-now-allows-you-to-configure-global-options/)
[mloskot/wsl-config: dotfiles and configs for development environments on Windows Subsystem for Linux (Ubuntu, Debian, etc.)](https://github.com/mloskot/wsl-config)
[Manage Linux Distributions | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/wsl-config)
[How to backup WSL2 Linux distro in Windows 11](https://www.mobigyaan.com/backup-linux-distro-wsl-windows-11)

[Background Task Support in WSL - Windows Command Line](https://devblogs.microsoft.com/commandline/background-task-support-in-wsl/)
[Systemd support is now available in WSL! - Windows Command Line](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/)

[Using bridged networking to get outside access to, and IPv6 under, WSL 2 : bashonubuntuonwindows](https://www.reddit.com/r/bashonubuntuonwindows/comments/hdmspt/using_bridged_networking_to_get_outside_access_to/) workaround

### WSLg

[WSLg Architecture - Windows Command Line](https://devblogs.microsoft.com/commandline/wslg-architecture/)
[microsoft/wslg: Enabling the Windows Subsystem for Linux to include support for Wayland and X server related scenarios](https://github.com/microsoft/wslg)

[Hands on with WSLg: Running Linux GUI apps in Windows 10](https://www.bleepingcomputer.com/news/microsoft/hands-on-with-wslg-running-linux-gui-apps-in-windows-10/)
[Running Linux Apps In Windows Is Now A Reality](https://news.itsfoss.com/linux-gui-apps-wsl/)

[Running Linux desktop apps on the Windows Subsystem for Linux | Ctrl blog](https://www.ctrl.blog/entry/how-to-x-on-wsl.html) X on WSL1, should work in WSL2 natively

[X410 - X Server for Windows 10 and Beyond](https://x410.dev/)
[Using X410 with WSL2 - X410.dev](https://x410.dev/cookbook/wsl/using-x410-with-wsl2/)

### Background service

[Background Task Support in WSL | Windows Command Line](https://devblogs.microsoft.com/commandline/background-task-support-in-wsl/)
[troytse/wsl-autostart: Support for starting the Linux services in Windows Subsystem for Linux (WSL) on Windows startup](https://github.com/troytse/wsl-autostart)
[How to auto start service · Issue #511 · microsoft/WSL](https://github.com/microsoft/WSL/issues/511)

### Utils

[WSL Utilites](https://wslu.patrickwu.space/) [GitHub org](https://github.com/wslutilities)
[wslutilities/wslu: A collection of utilities for Windows 10 Linux Subsystems](https://github.com/wslutilities/wslu)

[Introducing ubuntu-wsl, the package making Ubuntu better and better on WSL | Obsessed with reality](https://balintreczey.hu/blog/introducing-ubuntu-wsl-the-package-making-ubuntu-better-and-better-on-wsl/)

[Opsview WSLTools Beta is a go! | Opsview](https://www.opsview.com/resources/application/blog/opsview-wsltools-beta-go)

[xilun/cbwin: Launch Windows programs from "Bash on Ubuntu on Windows" (WSL)](https://github.com/xilun/cbwin) not needed for 1703

### Tips and Tricks

[Troubleshooting Windows Subsystem for Linux | Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/troubleshooting)
[Windows 10 WSL2 Now Allows You to Configure Global Options](https://www.bleepingcomputer.com/news/microsoft/windows-10-wsl2-now-allows-you-to-configure-global-options/)

[LongLiveCHIEF/wsl2-docker-for-win: Get docker setup on WSL2 now!](https://github.com/LongLiveCHIEF/wsl2-docker-for-win)

[Developing in the Windows Subsystem for Linux with Visual Studio Code](https://code.visualstudio.com/docs/remote/wsl)
[Tips and Tricks for Linux development with WSL and Visual Studio Code | Windows Command Line Tools For Developers](https://devblogs.microsoft.com/commandline/tips-and-tricks-for-linux-development-with-wsl-and-visual-studio-code/)
[Remote - WSL - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

### Pengwin

[Pengwin by Whitewater Foundry](https://www.pengwin.dev/)
[WhitewaterFoundry/Pengwin: A Linux distro optimized for WSL based on Debian.](https://github.com/WhitewaterFoundry/Pengwin)
[Pengwin: A Linux specifically for Windows Subsystem for Linux | ZDNet](https://www.zdnet.com/article/pengwin-a-linux-specifically-for-windows-subsystem-for-linux/)

## Windows ISO

[Download Windows 10 Disc Image (ISO File)](https://www.microsoft.com/en-us/software-download/windows10ISO) only available for non-Windows 10

Use DevTools to set user agent
[How to Download a Windows 10 ISO By Impersonating Other Devices](https://www.bleepingcomputer.com/news/microsoft/how-to-download-a-windows-10-iso-by-impersonating-other-devices/)
[How to Download a Windows 10 ISO Without the Media Creation Tool](https://www.howtogeek.com/427223/how-to-download-a-windows-10-iso-without-the-media-creation-tool/)

[USB install media with WIM file larger than 4GB – Win10.Guru](https://win10.guru/usb-install-media-with-larger-than-4gb-wim-file/)

## VM ISO (for IE)

[Virtual Machine (VM), Windows Virtual PC & BrowserStack](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/linux/)
[xdissent/ievms: Automated installation of the Microsoft IE App Compat virtual machines](https://github.com/xdissent/ievms)

IE7 on Win7 20141027
Edge Stable on Win10 20160322

---

## Settings

[Special folder - Wikiwand](https://www.wikiwand.com/en/Special_folder)
[What Is the AppData Folder in Windows?](https://www.howtogeek.com/318177/what-is-the-appdata-folder-in-windows/)

```
%windir% → C:\Windows
%USERPROFILE% → C:\Users\[userName]
%APPDATA% → C:\Users\[userName]\Application Data
%LOCALAPPDATA% → C:\Users\[userName]\AppData\Local

Start menu (all): %APPDATA%\Microsoft\Windows\Start Menu\Programs
Start menu (user): %APPDATA%\Microsoft\Windows\Start Menu
Sent To targets: %APPDATA%\Microsoft\Windows\SendTo
```

`Control Panel\System and Security\Security and Maintenance`
Disable Windows Defender, Firewall and their warnings

### Explorer's right click menu

[How to Manually Edit the Right Click Menu in Windows](https://www.online-tech-tips.com/computer-tips/windows-right-click-context-menu)

[ShellMenuView: Disable / enable context menu items of Explorer](https://www.nirsoft.net/utils/shell_menu_view.html)
[ShellExView - Shell Extension Manager For Windows](https://www.nirsoft.net/utils/shexview.html)

#### Editing

Files:

```reg
HKEY_CLASSES_ROOT\*\shellex\ContextMenuHandlers\
HKEY_CLASSES_ROOT\*\shell
HKEY_CLASSES_ROOT\AllFileSystemObjects\ShellEx\ContextMenuHandlers
```

Folders:

```reg
HKEY_CLASSES_ROOT\Folder\shellex\ContextMenuHandlers\
HKEY_CLASSES_ROOT\Directory\shell
```

#### Adding item

```reg
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\Open Thing Here\command]
@="C:\\thing.exe \"%1\""
```

[WindowsDevTools/cmd_here_windows_10-reg at master · yanglr/WindowsDevTools](https://github.com/yanglr/WindowsDevTools/tree/master/cmd_here_windows_10-reg)

### Audio panel

[Get EarTrumpet - Microsoft Store](https://www.microsoft.com/en-us/p/eartrumpet/9nblggh516xp?activetab=pivot:overviewtab)

### Hibernation

Hibernation needs to be enabled manually
Windows 11 disabled the UI setting for hibernate automatically after idle timeout.

[Shut down, sleep, or hibernate your PC - Microsoft Support](https://support.microsoft.com/en-us/windows/shut-down-sleep-or-hibernate-your-pc-2941d165-7d0a-a5e8-c5ad-8c972e8e6eff)
[How to set Windows 11 to hibernate automatically (hibernate - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/all/how-to-set-windows-11-to-hibernate-automatically/84231535-7f8f-49aa-9b26-fa8d25bb6fcc)

```powershell
# in admin shell

# enable hibernation
powercfg /HIBERNATE ON

# query power plan
powercfg /Q
# look for Hibernate after (HIBERNATEIDLE) block

# set hibernation timeout on battery to 20 minutes
powercfg /x  hibernate-timeout-dc 20

# set hibernation timeout on power to 60 minutes
powercfg /x  hibernate-timeout-ac 60
```

[how to create a hibernate shortcut on my desktop in Windows 10 - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/windows_10-start-winpc/how-to-create-a-hibernate-shortcut-on-my-desktop/ff0f8f3d-324e-4cc7-b0e5-7ecbc47ea74e)

### Passwordless login

[Users must enter a user name and password checkbox missing from netplwiz in Windows 10 Fix](https://thegeekpage.com/users-must-enter-a-user-name-and-password-checkbox-missing-from-netplwiz-in-windows-10-fix/)
[Windows 10 auto login: Quick guide to setting it up - IONOS](https://www.ionos.com/digitalguide/server/configuration/windows-10-automatic-login/)

Uncheck "Users must enter a user name and password to use this computer" in `netplwiz`

### Start Menu items

Current user (`Win`+`R`, `shell:startup`): `%appdata%\Microsoft\Windows\Start Menu\Programs`
All user: `C:\ProgramData\Microsoft\Windows\Start Menu\Programs`

[How to Organize and Add Shortcuts to the All Apps List on Windows 10](https://www.howtogeek.com/225654/how-to-organize-and-add-shortcuts-to-the-all-apps-list-on-windows-10/)

[How to Create a Desktop Shortcut for Locking Your Windows 10 PC](https://www.howtogeek.com/689287/how-to-create-a-desktop-shortcut-for-locking-your-windows-10-pc/amp/)

Create shortcut for Shutdown

```powershell
$env:windir\System32\shutdown.exe /s /t 0
```

### Taskbar

Small taskbar button
Never combine

### Dev setup

```
7zip
autohotkey.portable
chocolatey
dotnet-sdk
git
GoogleChrome
lockhunter
microsoft-windows-terminal
nerd-fonts-FiraCode
notepad2-mod
sumatrapdf.install
tightvnc
visualstudio2019community
vscode
winmerge
```

## Tips and Tricks

[[新手教學]Windows 10 上倉頡/速成的小技巧 – We Love Windows .HK](http://welovewindows.hk/post23353)
[我要再將倉頡發揚光大 | LIHKG](https://lihkg.com/thread/1038006/page/1)

[Windows News, Videos, Reviews and Gossip - Lifehacker](http://lifehacker.com/tag/windows)
[Windows Maintenance Tips: The Good, Bad, and Useless](http://lifehacker.com/5520447/windows-maintenance-tips-the-good-bad-and-useless)
[Microsoft Windows 10 - YouTube](https://www.youtube.com/playlist?list=PLEbaEyM-xt9m_3PLH6QOfbb2b79XRakZs)
[How to Use Windows 10: Tips, Tricks, and More | Digital Trends](https://www.digitaltrends.com/computing/how-to-use-windows-10/)

[100 common Windows 10 problems and how to solve them | TechRadar](https://www.techradar.com/uk/how-to/100-common-windows-10-problems)
[Top tips and tricks to keep Windows 10 running smoothly | Computerworld](https://www.computerworld.com/article/3205864/microsoft-windows/the-best-enterprise-tips-and-tricks-to-get-the-most-from-windows-10.html)
[10 things to disable in Windows 10 - CNET](https://www.cnet.com/how-to/10-things-to-disable-in-windows-10/)
[Seven Windows 10 annoyances (and how to fix them) | ZDNet](https://www.zdnet.com/google-amp/article/seven-windows-10-annoyances-and-how-to-fix-them/)
[New PC? Change These Windows 10 Settings Right Away | Tom's Hardware](https://www.tomshardware.com/how-to/windows-10-settings-to-change)
[Windows 10 help, tips and tricks | Windows Central](https://www.windowscentral.com/windows-10-help)
[7 free and cheap ways to learn about Windows administration | Computerworld](https://www.computerworld.com/article/3236423/microsoft-windows/7-free-and-cheap-ways-to-learn-about-windows-administration.html#tk.ctw_nsdr_ndxprmomod)
[Windows 10 quick tips: 10 ways to speed up your PC | Computerworld](https://www.computerworld.com/article/3029168/microsoft-windows/windows-10-quick-tips-10-ways-to-speed-up-your-pc.html)
[How to fix six Windows 10 headaches | Computerworld](https://www.computerworld.com/article/3182846/microsoft-windows/how-to-fix-six-windows-10-headaches.html)

[How to create a guest account on Windows 10 in 6 steps - Business Insider](https://www.businessinsider.com/how-to-create-a-guest-account-on-windows-10)

[Change default code page of Windows console to UTF-8 - Super User](https://superuser.com/questions/269818/change-default-code-page-of-windows-console-to-utf-8)

[How to Find the Missing 'System' Control Panel in Windows 10](https://lifehacker.com/how-to-find-the-missing-system-control-panel-in-windows-1846036161/amp)

[How to list all installed third-party drivers on Windows PCs - gHacks Tech News](https://www.ghacks.net/2019/10/21/how-to-list-all-installed-third-party-drivers-on-windows-pcs/)

[How to Automatically Run Programs and Set Reminders With the Windows Task Scheduler](https://www.howtogeek.com/123393/how-to-automatically-run-programs-and-set-reminders-with-the-windows-task-scheduler/)
[Use The Windows 10 Task Scheduler To Automate Almost Anything](https://helpdeskgeek.com/windows-10/use-the-windows-10-task-scheduler-to-automate-almost-anything/)

[Automatically log in to your Windows 10 PC - CNET](https://www.cnet.com/tech/services-and-software/automatically-log-in-to-your-windows-10-pc/) `netplwiz`

[Five Windows 10 features you really should be using | ZDNet](https://www.zdnet.com/google-amp/article/five-windows-10-features-you-really-should-be-using/)
[Windows 10: My five favorite free utilities | ZDNet](https://www.zdnet.com/article/windows-10-my-five-favorite-free-utilities/)

[100 common Windows 10 problems and how to solve them | TechRadar](https://www.techradar.com/uk/how-to/100-common-windows-10-problems)
[100% Disk Usage in Windows 10 Fixed With 14 Tricks](https://www.makeuseof.com/tag/4-tips-fix-100-disk-usage-improve-windows-performance/)

[8 Annoying Windows 10 Issues & How to Fix Them](https://www.makeuseof.com/tag/8-annoying-windows-10-issues-fix/)
[Windows 10's best tricks, tips, and tweaks | PCWorld](https://www.pcworld.com/article/2875600/windows-10-the-best-tips-tricks-and-tweaks.html)
[10 truly helpful Windows 10 tools you might not know about | PCWorld](https://www.pcworld.com/article/3387950/10-truly-helpful-windows-10-tools-you-might-not-know-about.amp.html)
[Windows 7 GodMode: Tips, Tricks, Tweaks | PCWorld](https://www.pcworld.com/article/220753/windows_7_god_mode_tips_tricks_tweaks.html)
[How to use God Mode in Windows 10 - TechRepublic](https://www.techrepublic.com/google-amp/article/how-to-use-god-mode-in-windows-10/)

[Windows help](https://support.microsoft.com/en-us/products/windows?os=windows-10)
[Windows 10 cheat sheet | Computerworld](https://www.computerworld.com/article/3014286/microsoft-windows/windows-10-cheat-sheet.html)
[Windows 10 tips and tricks for Wi-Fi and networking | InfoWorld](http://www.infoworld.com/article/3155417/microsoft-windows/windows-10-tips-and-tricks-for-wi-fi-and-networking.html)

[How to Mirror Your iPhone or iPad’s Screen on Your Windows PC](https://www.howtogeek.com/247573/how-to-mirror-your-iphone-or-ipads-screen-on-your-windows-pc/)
[How to Cast Your Windows or Android Display to a Windows 10 PC](https://www.howtogeek.com/269093/how-to-cast-your-windows-or-android-display-to-a-windows-10-pc/)

Shortcuts to admin interfaces:

- Service Manager: `services.msc`
- Group policy: `gpedit.msc`
- System Configuration: `msconfig`
- System Properties: `sysdm.cpl`
- Add/Remove Programs: `appwiz.cpl`
- On-screen keyboard: `osk`

Trim Windows 10:
Disable `IPHelper` in Service Manager (IPv6)
Disable `HomeGroup Provider` in Service Manager
Disable `Windows Search` in Service Manager

Start admin cmd:
Start and type `cmd`, followed by <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd>

### Fast Startup

Windows's Fast Startup (since 8) will make NTFS volumes dirty and not writable in Linux.
It also skips loading driver and causes GPU issues.
Goto "Power Settings" and disable the feature in "Shutdown settings".

[Solve Windows Partition Mount Problem In Ubuntu Dual Boot - It's FOSS](https://itsfoss.com/solve-ntfs-mount-problem-ubuntu-windows-8-dual-boot/)

### Long Path

[Maximum Path Length Limitation - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=registry)

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem]
"LongPathsEnabled"=dword:00000001
```

```powershell
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" `
-Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```

[How to Make Windows 10 Accept File Paths Over 260 Characters](https://www.howtogeek.com/266621/how-to-make-windows-10-accept-file-paths-over-260-characters/))

### System Check

[System file check (SFC) Scan and Repair System Files & - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/windows_10-update/system-file-check-sfc-scan-and-repair-system-files/bc609315-da1f-4775-812c-695b60477a93)
[Use the System File Checker tool to repair missing or corrupted system files](https://support.microsoft.com/en-us/topic/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system-files-79aa86cb-ca52-166a-92a3-966e85d4094e)

### Disable Features

[How to Disable Bing in the Windows 10 Start Menu](https://www.howtogeek.com/224159/how-to-disable-bing-in-the-windows-10-start-menu/)
[How to Disable All of Windows 10’s Built-in Advertising](https://www.howtogeek.com/269331/how-to-disable-all-of-windows-10s-built-in-advertising/)

[关掉这些，让 WIN10 快成一道闪电](https://market.m.taobao.com/apps/market/content/index.html?contentId=200560217110)
[Windows 10 quick tips: 13 ways to speed up your PC | Computerworld](https://www.computerworld.com/article/3029168/windows-10-quick-tips-13-ways-to-speed-up-your-pc.amp.html)

Disable autorun:
[How to disable the Autorun functionality in Windows](https://support.microsoft.com/en-hk/help/967715/how-to-disable-the-autorun-functionality-in-windows)
[How do i disable AUTORUN windows 7 - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/windows_7-security/how-do-i-disable-autorun-windows-7/7ba51974-c009-44ad-9067-f3968744175b)

Disable Edge tab from new Alt+Tab (Windows 20H2):
Settings > System > Multitasking > Alt + Tab
[A closer look at Windows 10's new Alt+Tab experience](https://www.windowslatest.com/2020/07/08/windows-10-alt-tab-browser-tabs-experience/)

### Keyboard Shortcuts

[Windows 10 常用快捷鍵組合 – We Love Windows .HK](http://welovewindows.hk/post24975)
[Windows Keyboard Shortcuts 101: The Ultimate Guide](https://www.makeuseof.com/tag/windows-shortcuts-101-ultimate-keyboard-shortcut-guide/)
[Keyboard shortcuts in Windows](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec)
[Keyboard shortcuts in Windows - Windows Help](https://support.microsoft.com/en-us/help/12445/windows-keyboard-shortcuts)
[Keyboard Shortcuts and System Commands for Popular Programs | TurboFuture](https://turbofuture.com/computers/keyboard-shortcut-keys)

| Function                | Shortcut                                                                   |
| ----------------------- | -------------------------------------------------------------------------- |
| Expo (Task View)        | <kbd>⊞</kbd>+<kbd>↹</kbd> <br> Manages [Virtual Desktop](#virtual-desktop) |
| Switch Desktop          | <kbd>⊞</kbd>+<kbd>Ctrl</kbd>+<kbd>←</kbd>/<kbd>→</kbd>                     |
| Add Virtual Desktop     | <kbd>⊞</kbd>+<kbd>Ctrl</kbd>+<kbd>D</kbd>                                  |
| Connect Devices         | <kbd>⊞</kbd>+<kbd>K</kbd>                                                  |
| Preview Desktop         | <kbd>⊞</kbd>+<kbd>+</kbd>                                                  |
| Projector               | <kbd>⊞</kbd>+<kbd>P</kbd>                                                  |
| Notification Center     | <kbd>⊞</kbd>+<kbd>A</kbd>                                                  |
| Snip and Sketch         | <kbd>⊞</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd> <br> Screenshot tool <br>       |
| Emoji Keyboard          | <kbd>⊞</kbd>+<kbd>.</kbd>                                                  |
| Clipboard history       | <kbd>⊞</kbd>+<kbd>V</kbd>                                                  |
| Magnifier               | <kbd>⊞</kbd>+<kbd>+</kbd>                                                  |
| IME Toggle              | <kbd>⊞</kbd>+<kbd>Spacebar</kbd>                                           |
| Restart Graphics Driver | <kbd>⊞</kbd>+<kbd>Ctrl</kbd>++<kbd>Shift</kbd>+<kbd>B</kbd>                |

### Windows Defender

[著名黑客 h0ek 教路，只需在 Windows Defender 加上一點就可以得到企業級的保護 - Qooah](https://qooah.com/2022/03/14/famous-hacker-h0ek-teaches-the-way-to-get-enterprise-grade-protection-with-just-a-little-bit-of-windows-defender/)
[Turn on cloud protection in Microsoft Defender Antivirus | Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/enable-cloud-protection-microsoft-defender-antivirus?view=o365-worldwide)

## Package Managers

### WinGet

[Windows Package Manager | Microsoft Learn](https://learn.microsoft.com/en-us/windows/package-manager/)
[Using Native Package Manager (WinGet) on Windows 10 | Windows OS Hub](http://woshub.com/using-winget-package-manager-windows/)
[Windows FINALLY Got a Package Manager - Here's Why It's Awesome - YouTube](https://www.youtube.com/watch?v=uxr7m8wDeGA)

[microsoft/winget-cli: Windows Package Manager CLI (aka winget)](https://github.com/microsoft/winget-cli)
[microsoft/winget-pkgs: The Microsoft community Windows Package Manager manifest repository](https://github.com/microsoft/winget-pkgs)

[Microsoft announces official Windows package manager. 'Not a package manager' users snap back • The Register](https://www.theregister.com/2020/05/20/microsoft_announces_official_windows_package/)
[winget-cli/doc/troubleshooting at master · microsoft/winget-cli · GitHub](https://github.com/microsoft/winget-cli/tree/master/doc/troubleshooting)

[winstall - GUI for Windows Package Manager](https://winstall.app/)

```powershell
winget search app
winget install app -V version
winget install --manifest manifest
winget upgrade --all
winget export -o c:\installed.txt
winget settings
```

```powershell
7zip.7zip
AutoHotkey.AutoHotkey
CPUID.CPU-Z
Git.Git
Kitware.CMake
Microsoft.DotNet.SDK.7
Microsoft.VisualStudioCode
Microsoft.VisualStudio.2022.Community
Python.Python.3.11
RustDesk.RustDesk
Starship.Starship
WinMerge.WinMerge
```

#### App not found in CLI

[Cannot use Winget. Winget Not Recognized Error. · Issue #725 · microsoft/winget-cli](https://github.com/microsoft/winget-cli/issues/725#issuecomment-835394620) add `%LOCALAPPDATA%\Microsoft\WindowsApps` to `$env:Path`

Or toggle setting in "App execution aliases"

#### Creating package

`wingetcreate`, generated at `c:\manifest`

[microsoft/winget-create: The Windows Package Manager Manifest Creator command-line tool (aka wingetcreate)](https://github.com/microsoft/winget-create)
[Create your package manifest | Microsoft Learn](https://learn.microsoft.com/en-us/windows/package-manager/package/manifest?tabs=minschema%2Cversion-example)
[Alexandre Nédélec - Producing packages for Windows Package Manager](https://www.techwatching.dev/posts/wingetcreate)

### Scoop

[Scoop](https://scoop.sh/)
[ScoopInstaller/Scoop: A command-line installer for Windows.](https://github.com/ScoopInstaller/Scoop)

```powershell
iwr -useb get.scoop.sh | iex
```

[ScoopInstaller](https://github.com/ScoopInstaller?type=source) "buckets" are repos for Scoop

### webi (webinstall.dev)

> without `sudo` or admin right
> cross platform

[webinstall.dev](https://webinstall.dev/)

```powershell
curl.exe -A "MS" https://webinstall.dev/webi | powershell
```

### Chocolatey

[Chocolatey](https://chocolatey.org/) package manager for Windows
[Get to know the Chocolatey package manager for Windows | Computerworld](https://www.computerworld.com/article/3236406/enterprise-applications/get-to-know-the-chocolatey-package-manager-for-windows.html#tk.ctw_nsdr_ndxprmomod)
[majkinetor/au: Chocolatey Automatic Package Updater Module](https://github.com/majkinetor/au)

[bcurran3/ChocolateyPackages: My published Chocolatey packages](https://github.com/bcurran3/ChocolateyPackages)
[ChocolateyPackages/choco-cleaner at master · bcurran3/ChocolateyPackages](https://github.com/bcurran3/ChocolateyPackages/tree/master/choco-cleaner)

```sh
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

```sh
choco install -y --allowEmptyChecksums calibre envince
choco install -y vscode
choco uninstall -y package

choco search query
```

```sh
# list installed packages
chocolatey list -localonly
choco list -lo
clist -lo
# upgrade installed packages
choco upgrade all -y
cup all -y
```

```
7zip
arduino
autohotkey.portable
calibre
chocolatey
choco-cleaner
comicrack
crystaldiskmark
dotnet
filezilla
FiraCode-ttf
Firefox
GoogleChrome
google-backup-and-sync
microsoft-windows-terminal
KB2919355
KB2919442
KB2999226
KB3033929
KB3035131
mpv
notepad2-mod
Office365Business
procmon
siv
sumatrapdf.install
sublimemerge
teamviewer
vcredist140
vscode
visualstudio2019community
winmerge
wireshark
```

Gaming setup

```
7zip
autohotkey.portable
cpu-z
gsmartcontrol
crystaldiskmark
crystaldiskinfo
openhardwaremoniter
steam
epicgameslauncher
origin
```

Work setup

```
cinst -y 7zip autohotkey.portable chocolatey dotnet FiraCode-ttf GoogleChrome mediainfo microsoft-windows-terminal notepad2-mod sumatrapdf.install tigervnc vscode visualstudio2019professional winmerge
```

---

## Windows Install Issue

Windows 7 and 10 is notorious for "unable to create a new system partition".
This is reproduced on a standard config:

- booted with USB
- install to a SSD, one of the multiple SATA devices

I then changed the boot priority of the installation device to be the first in BIOS.
Remove all partition and install to the new disk, Windows setup's partitioner should create a 100MB "System Reserved" partition first and you can use the rest.

[Setup was unable to create a new system partition: Fix for Windows](https://neosmart.net/wiki/setup-was-unable-to-create-a-new-system-partition/)
[Setup was unable to create a new system partition or locate an existing system partition - Can't install Windows 7 - Super User](http://superuser.com/questions/789255/setup-was-unable-to-create-a-new-system-partition-or-locate-an-existing-system-p)
[FULL FIX: We couldn’t create a new partition error on Windows 10, 8.1, 7 - Windows Report](https://windowsreport.com/we-couldnt-create-a-new-partition/) Solution 4

[How To Setup Windows 10 Without a Microsoft Account](https://helpdeskgeek.com/windows-10/how-to-setup-windows-10-without-a-microsoft-account/)
[How To Setup Windows 10 WITHOUT a Microsoft Account in 2020! - YouTube](https://www.youtube.com/watch?v=P9oquwkVkpM) unplug network and reload page

## Windows Task Scheduler

> cronjob

[How to create an automated task using Task Scheduler on Windows 10 | Windows Central](https://www.windowscentral.com/how-create-automated-task-using-task-scheduler-windows-10)

## Virtual Desktop

Windows 10 have Virtual Desktop built-in
[How to use multiple desktops in Windows 10 - CNET](https://www.cnet.com/how-to/how-to-use-multiple-desktops-in-windows-10/)
[How to Use Virtual Desktops in Windows 10](https://www.howtogeek.com/197625/how-to-use-virtual-desktops-in-windows-10/)
[How to Add an Indicator to See What Virtual Desktop You’re On in Windows 10](https://www.howtogeek.com/254857/how-to-add-an-indicator-to-see-what-virtual-desktop-youre-on-in-windows-10/)
[How to Open an App or File in a New Virtual Desktop on Windows 10](https://www.howtogeek.com/259860/how-to-open-an-app-or-file-in-a-new-virtual-desktop-on-windows-10/)

Windows Key + Tab, 3 or 4 fingers swipe up to open Task View.
Windows Key + Ctrl + D to create new desktop.
Windows Key + Ctrl + Left/Right Arrow and 3 or 4 fingers swipe to switch desktop.

[The Best Free Programs for Using Virtual Desktops in Windows](https://www.howtogeek.com/130650/the-best-free-programs-for-using-virtual-desktops-in-windows/)
[Virtual Dimension](http://virt-dimension.sourceforge.net/)
If you messed up with the hotkeys, reset at `HKEY_CURRENT_USER\Software\Typz Software\Virtual Dimension`

[octalmage/mDesktop](https://github.com/octalmage/mDesktop) virtual desktops with AHK

[Finestra Virtual Desktops - Z-Systems](http://www.z-sys.org/products/vvdm.aspx)
[octalmage/mDesktop: mDesktop is a lightweight application that allows the user to utilize multiple virtual desktops.](https://github.com/octalmage/mdesktop) difficult to sent windows to desktop
[Dexpot | Virtual desktops for Windows](https://dexpot.de/?lang=en) free for home use
