---
title: Router
description: ""
created: 2016-04-12
updated: 2025-07-07
tags:
  - comp/hardware
---

[TechInfoDepot](http://en.techinfodepot.shoutwiki.com/wiki/Main_Page) hardware spec

[9 things to check after installing wireless access points | Computerworld](http://www.computerworld.com/article/3112958/wireless-networking/9-things-to-check-after-installing-wireless-access-points.html)

[What is Microsoft Virtual WiFi Miniport Adapter?](https://helpdeskgeek.com/windows-7/what-is-microsoft-virtual-wifi-miniport-adapter/) using it as access point

## Firmwares

[FreshTomato – Alternative open source firmware for Broadcom based routers](https://freshtomato.org/)

[DD-WRT](http://www.dd-wrt.com/) archaic

[Tarifa](http://tarifa.sourceforge.net/) for old WRT54GL router
[HyperWRT - Wikiwand](https://www.wikiwand.com/en/HyperWRT) for old WRT54GS router
[Tomato Firmware | polarcloud.com](http://www.polarcloud.com/tomato) for old WRT54GS router, with built-in ad-blocker

[【全网最细】小白2分钟，快速构建编译专属openwrt固件，超级简单，适用于官方openwrt、immortalwrt - YouTube](https://www.youtube.com/watch?v=t0PCzfhwuXQ)

[DD-WRT vs. OpenWrt: Which open-source router firmware should you pick?](https://www.xda-developers.com/dd-wrt-vs-openwrt/)

### OpenWRT

[[OpenWrt Wiki] Welcome to the OpenWrt Project](https://openwrt.org/)
[[OpenWrt Wiki] 歡迎來到 OpenWrt 項目](https://openwrt.org/zh-tw/)
[OpenWrt - Wikiwand](https://www.wikiwand.com/en/OpenWrt)
[[OpenWrt Wiki] Table of Hardware](https://openwrt.org/toh/start) not Broadcom friendly

[X-Wrt - Wikiwand](https://www.wikiwand.com/en/X-Wrt)
[X-Wrt](https://bitsum.com/xwrt.htm)
[X-Wrt, for IoT, a custom Distribution for OpenWrt](https://x-wrt.com/)
a set of packages and patches to enhance the end user experience of OpenWrt
[x-wrt/x-wrt: This repository is a fork of https://git.openwrt.org/openwrt/openwrt.git](https://github.com/x-wrt/x-wrt)

[Gargoyle Router Management Utility](https://www.gargoyle-router.com/) based on OpenWrt

[LEDE - Linux Embedded Development Environment](https://www.lede-project.org/) OpenWrt fork, merged back to OpenWrt in 2018
[LEDE - Wikiwand](https://www.wikiwand.com/en/LEDE)

[You're doing routers wrong... Use OpenWRT instead! - YouTube](https://www.youtube.com/watch?v=XGefV0Rf9QQ)

### Merlin

Asus has been using Tomato-RT-based firmware on its routers, Merlin is an improvement of the open source firmware.

[Home | Asuswrt-Merlin](https://www.asuswrt-merlin.net/)
[RMerl/asuswrt-merlin.ng: Third party firmware for Asus routers (newer codebase)](https://github.com/RMerl/asuswrt-merlin.ng)

[5 Reasons why I prefer ASUSWRT-Merlin to ASUSWRT Firmware [RT-AC68U] - YouTube](https://www.youtube.com/watch?v=XykUML3T2VA)
[About Asuswrt · RMerl/asuswrt-merlin.ng Wiki](https://github.com/RMerl/asuswrt-merlin.ng/wiki/About-Asuswrt/)

[Xwrt-Vortex](http://xvtx.ru/xwrt/) a third party alternative firmware based on Asuswrt-Merlin project

### Firmware comparison

For Asus router, use [[#Merlin]] if possible

[Which one is the best firmware for my wireless router? - YouTube](https://www.youtube.com/watch?v=5Onz9YTCMzY)

[DD-WRT vs OpenWrt: The Better Router Firmware in 2023?](https://approvedmodems.org/dd-wrt-vs-openwrt/)
[DD-WRT vs. OpenWrt: Which router firmware should you use? | Windows Central](https://www.windowscentral.com/dd-wrt-vs-openwrt)

## Compile/Cross-compile

[RMerl/am-toolchains: Asuswrt-Merlin toolchains](https://github.com/RMerl/am-toolchains)
[gnuton/asuswrt-merlin-toolchains-docker - Docker Image | Docker Hub](https://hub.docker.com/r/gnuton/asuswrt-merlin-toolchains-docker)
`configure` with `--host=armv7-a`
[Cross-compiling collectd for ASUSWRT « irq5.io](https://irq5.io/2019/05/31/cross-compiling-collectd-for-asuswrt/) 2019

[[OpenWrt Wiki] Creating packages](https://openwrt.org/docs/guide-developer/packages)
[[OpenWrt Wiki] Using the SDK](https://openwrt.org/docs/guide-developer/toolchain/using_the_sdk)
[OpenWrt build system – Usage [Old OpenWrt Wiki]](https://oldwiki.archive.openwrt.org/doc/howto/build)
[Cross Compile [Old OpenWrt Wiki]](https://oldwiki.archive.openwrt.org/doc/devel/crosscompile)
[Suricata6: initial commit by Grommish · Pull Request #13924 · openwrt/packages](https://github.com/openwrt/packages/pull/13924)

[Spot suspicious activity on your local network with Suricata Intrusion Detection System (IDS) on Raspberry Pi – Juliana Fajardini](https://jufajardini.wordpress.com/2021/02/15/suricata-on-your-raspberry-pi/) native compile

## Ad-blocking

[Diversion - the Router Ad-Blocker - Diversion](https://diversion.ch/)

[PiHole directly on Routers (Tomato, MerlinWRT, DD-WRT, openWRT) - Feature Requests - Pi-hole Userspace](https://discourse.pi-hole.net/t/pihole-directly-on-routers-tomato-merlinwrt-dd-wrt-openwrt/1314)

[Run PiHole directly on Asus-Merlin/DD-WRT Router - General / Customizing Pi-hole - Pi-hole Userspace](https://discourse.pi-hole.net/t/run-pihole-directly-on-asus-merlin-dd-wrt-router/182)
[Run PiHole directly on Asus-Merlin/DD-WRT Router (from jonesaaronj)](https://gist.github.com/outlyer/1d0a99ef5a76252342a611a85751a5c1)

[Configuring the Pi Hole with Asus Routers (Merlin or John's Fork) | Carlos Felicio](https://web.archive.org/web/20201004175701/https://carlosfelic.io/network/configuring-the-pi-hole-with-asus-routers-merlin-or-johns-fork/)
[Guide for Asuswrt-merlin users with screenshots (forcing all traffic to Pi-hole) : pihole](https://www.reddit.com/r/pihole/comments/dfm5j4/guide_for_asuswrtmerlin_users_with_screenshots/)

## Entware/Opkg

> package manager for softwares/add-ons

[Ultimate repo for embedded devices | A software repository for network attached storages, routers and other embedded devices](https://entware.net/)
[Entware/Entware: Ultimate repo for embedded devices](https://github.com/Entware/entware)

[Home · Entware/Entware Wiki](https://github.com/Entware/Entware/wiki)
[Entware · RMerl/asuswrt-merlin.ng Wiki](https://github.com/RMerl/asuswrt-merlin.ng/wiki/Entware)
[Entware: the ultimate repo for embedded devices - My Cloud OS 5 Personal & Network Attached Storage / Community Developed Apps - WD Community](https://community.wd.com/t/entware-the-ultimate-repo-for-embedded-devices/259909)

[[OpenWrt Wiki] Opkg package manager](https://openwrt.org/docs/guide-user/additional-software/opkg)
[openwrt/packages: Community maintained packages for OpenWrt. Documentation for submitting pull requests is in CONTRIBUTING.md](https://github.com/openwrt/packages)

Repo feed is stored in `/etc/opkg/distfeeds.conf`, `/etc/opkg/customfeeds.conf`.
Repo cache are located in `/var/opkg-lists/`.

---

## TP-Link

[TL-WDR7661 千兆易展版 A1900 双频千兆无线路由器 - TP-LINK 官方网站](https://www.tp-link.com.cn/product_1586.html) ¥ 185/\$211@2020-09
[下载中心 | 搜索结果 - TP-LINK 服务支持](https://service.tp-link.com.cn/search_download.html?level1=0&level2=0&prodcut=0&kw=TL-WDR7661%E5%8D%83%E5%85%86%E7%89%88)
[TL-WDR7650 千兆易展版套装 AC1900 双频千兆无线路由器 - TP-LINK 官方网站](https://www.tp-link.com.cn/product_1368.html)
[300 块不到的 mesh 无线路由器套装，TPLINK TL-WDR7650 详细评测 - YouTube](https://www.youtube.com/watch?v=pghYYFk70rw)

[TL-WDR6300 AC1200 双频无线路由器 - TP-LINK 官方网站](https://www.tp-link.com.cn/product_363.html)
[TL-WDR6300 拆机和刷 LEDE/OpenWrt 固件 | Zhifeng Hu's Blog](https://blog.huzhifeng.com/2018/05/20/TL-WDR6300/)

## Asus

RT-AX88U
RT-AX86U
RT-AX58U/RT-AX3000

[Compare ASUS RT-AX3000 vs ASUS RT-AX88U vs ASUS ROG Rapture GT-AX11000](https://www.bhphotovideo.com/c/compare/ASUS_RT-AX3000_vs_ASUS_RT-AX88U_vs_ASUS_ROG_Rapture_GT-AX11000/BHitems/1554741-REG_1435992-REG_1451692-REG)

[開箱 RT-AX86U 無線路由器 分享器 以及華碩 WiFi 6 路由器選購分析 - Wilson 說給你聽 - YouTube](https://www.youtube.com/watch?v=JDFcmm_74As&t=198)

[TUF Gaming AX3000 | Networking | ASUS Global](https://www.asus.com/Networking/TUF-Gaming-AX3000/)
[【华硕系列】TUF-AX3000 SWRT 5.1.5 提升功率 全区域解锁 4t4r-梅林固件-恩山无线论坛 - Powered by Discuz!](https://www.right.com.cn/forum/thread-3247229-1-1.html)
[Firmware Download | Supported_Devices](https://www.swrt.site/Firmware_Download)
[SWRT-dev/swrt-gpl: support bcm470x ipq40xx mt7621 mt7986](https://github.com/SWRT-dev/swrt-gpl)
[ASUS 無線路由器 TUF-AX3000 開啟 5Ghz 頻道 4T4R 韌體下載與更新教學 @ 傻瓜狐狸的雜碎物品 :: 痞客邦 ::](https://www.fox-saying.com/blog/post/47698713-tuf-ax3000) 5.1.4 official

TUF Gaming AX3000 HW: ver A1
Broadcom BCM6750 3 core@1.5Mhz
2.4GHz 2x2
5Ghz 4x4
USB3 x 1

[ASUS RT-AX58U - TechInfoDepot](http://en.techinfodepot.shoutwiki.com/wiki/ASUS_RT-AX58U)
[ASUS RT-AX3000 - TechInfoDepot](http://en.techinfodepot.shoutwiki.com/wiki/ASUS_RT-AX3000)

[[Troubleshooting] Firmware update failed | Official Support | ASUS Global](https://www.asus.com/support/FAQ/1030652/)

[ASUS RT-AC68U [BEST WIRELESS ROUTER I've ever had] - YouTube](https://www.youtube.com/watch?v=ahm4hszpSk0&list=PLzCWb3z_t2bIkhbJizvyXiwQGJY0DuYIB)

[WLAN 的常用维护命令\_51CTO 博客\_wlan 配置命令](https://blog.51cto.com/u_11282904/1951987)
`dis wlan client status`

## Netgear

Nighthawk RAX80

## Wifi Adapters

Broadcom BCM94313HMGB 802.11n Mini PCIe
Atheros Ar5bhb63 802.11g Mini PCIe

### TP-Link

TL-WN826N 802.11n USB

### Intel

AX200 802.11ax M.2

## XiaoMi AX3600

[Xiaomi AIoT Wireless Router AX3600 Review « irq5.io](https://irq5.io/2020/07/13/xiaomi-aiot-wireless-router-ax3600-review/)
[Custom Firmware for the Xiaomi AX3600 Wireless Router « irq5.io](https://irq5.io/2020/08/10/custom-firmware-for-the-xiaomi-ax3600-wireless-router/)

## Picks

[12 款 WiFi6 路由器测评，谁是最强王者！【4K】 - YouTube](https://www.youtube.com/watch?v=f6Q1iH6ff8s)
[【测评】四款入门 WIFI 6 路由器横评 接近 1000 元的差价差距有多大？小米 AX3600 华硕 AX3000 网件 RAX40 TP-Link tl3020 - YouTube](https://www.youtube.com/watch?v=vTO7etVhGJc)

[慳成千蚊？！2020 從大陸網購平價又安全的路由器 Router！？ - by Upsangel](https://upsangel.com/router-2/half-price-router-on-taobao-2020/)
[Wi-Fi6 分享器推薦，讓你網路飛起來的 6 款超狂分享器! | HANK 瘋網路](https://hanknetwork.com/wifi6-router-recommend/)

[Review: 6 slick open source routers | InfoWorld](http://www.infoworld.com/article/3106865/networking/review-6-slick-open-source-routers.html)

Most AX mobile in 2020 are 2x2 MIMO @80MHz

3000Mbps+
2.4/5G AX/Wifi6
Gigabit Ethernet
160MHz
Mesh
Not Intel chip
Not Chinese brand

(optional) USB 3.0
(optional) HW Wifi Switch
(optional) Guest login
