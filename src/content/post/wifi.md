---
title: Wifi
description: ""
created: 2019-02-25
updated: 2025-03-20
tags:
  - comp/hardware
  - wifi
---

[[router]]

[Wi-Fi - Wikiwand](https://www.wikiwand.com/en/Wi-Fi)
[Router 路由器 集中討論區(30) 記住睇#1 新用家勿買煙條 CPU Router | LIHKG](https://lihkg.com/thread/2098608/page/1)
[Router 路由器 集中討論區(19)發問前請細閱置頂 | LIHKG](https:/d/lihkg.com/thread/1698364/page/1)
[连拆 70 台！Wi-Fi6 路由器的终极秘密是？知电路由器选购指南 2023 - YouTube](https://www.youtube.com/watch?v=uQ2nDcdCE4U)

[Behfor - YouTube](https://www.youtube.com/@Behfor)

[WiFi's Hidden \_\_\_\_ Problem - Computerphile - YouTube](https://www.youtube.com/watch?v=UgQM0rVDIQE)

- client sense multiple access not working if clients are far away from each other
- use RTS (request to send) packet to reserve channel
- router broadcast CTS (clear to send) packet to all clients

[How to Improve Your Wifi - YouTube](https://www.youtube.com/watch?v=Cs3syRK7kII)

[FREE WiFi Site Survey Software for MAC OS X & Windows](https://www.netspotapp.com/)
[Get WiFi Analyzer - Microsoft Store](https://www.microsoft.com/en-us/p/wifi-analyzer/9nblggh33n0n?activetab=pivot%3Aoverviewtab)

[Wi-Fi now has version numbers, and Wi-Fi 6 comes out next year - The Verge](https://www.theverge.com/2018/10/3/17926212/wifi-6-version-numbers-announced)
Wi-Fi 1: 802.11b (1999)
Wi-Fi 2: 802.11a (1999)
Wi-Fi 3: 802.11g (2003)
Wi-Fi 4: 802.11n (2009)
Wi-Fi 5: 802.11ac (2014)
Wi-Fi 6/6e: 802.11ax (2019)
Wi-Fi 7: 802.11be (2024)

[Wi-Fi 6, explained: how fast it really is - The Verge](https://www.theverge.com/platform/amp/2019/2/21/18232026/wi-fi-6-speed-explained-router-wifi-how-does-work)
[5-Minute Breakdown: Wi-Fi 6 | Network World](https://www.networkworld.com/article/3390239/5-minute-breakdown-wi-fi-6.html)
[Wi-Fi 6 [802.11 ax] Explained - YouTube](https://www.youtube.com/watch?v=Bnnf8GWVhHw)
[What is Wi-Fi 6? Fundamentals of 802.11ax / wifi 6 - YouTube](https://www.youtube.com/watch?v=uZMA4p00c9g)
[WiFi 6 詳細教學以及 WiFi 6 Router 總介紹：TP-LINK、LINKSYS、ASUS、Netgear - 數碼科技 - 香港格價網 Price.com.hk](https://www.price.com.hk/news.php?id=15622)
[硬核讲解 WiFi 7，聊聊 WiFi 技术的现状与展望【白呀白 Talk】 - YouTube](https://www.youtube.com/watch?v=Vu5fGDgKufc)
[「邦尼評測」必看！請直上 Wi-Fi 7！解析 Wi-Fi 7 強在哪裡？TP-Link Archer GE800 開箱評測（2024路由器選購指南！MLO, 6E vs Wi-Fi 7 值不值得買？ - YouTube](https://www.youtube.com/watch?v=QZT4GEQwMlE)

[What is MU-MIMO | MU-MIMO router | Faster internet MU-MIMO - Feature - PC Advisor](http://www.pcadvisor.co.uk/feature/network-wifi/what-is-mu-mimo-3644171/)
[10 things you need to know about MU-MIMO Wi-Fi | Network World](https://www.networkworld.com/article/3256905/13-things-you-need-to-know-about-mu-mimo-wi-fi.html)
[How to set up a router as a repeater - How-To - PC Advisor](http://www.pcadvisor.co.uk/how-to/network-wifi/how-set-up-router-as-repeater-summary-3633135/)
[Is Your Router LYING To You? - YouTube](https://www.youtube.com/watch?v=cKTbNRTmzhY) MU-MIMO is not practical
[Wireless AC Wave 2 As Fast As Possible - YouTube](https://www.youtube.com/watch?v=JhAuROEEZD4) MU-MIMO, 1300MB on 5Ghz + 600MB on 2.4Ghz
[Tri Band WiFi as Fast As Possible - YouTube](https://www.youtube.com/watch?v=hM8gZzSDKrw)
[你不了解的「WiFi」从技术原理 应用 讲到行业的未来 一个视频彻底讲清楚 「硬核无线技术」系列视频 WiFi 篇 - YouTube](https://www.youtube.com/watch?v=4w6_zWSrZw4)

[The Wi-Fi Market and the genesis of 802.11ax](https://www.arubanetworks.com/assets/wp/WP_802.11AX.pdf) PDF

## Security

[Everything You Should Know About Wi-Fi Security](https://smallstep.com/blog/everything-wifi-security/)

[A brief history of Wi-Fi security protocols from “oh my, that’s bad” to WPA3 | Ars Technica](https://arstechnica.com/gadgets/2019/03/802-eleventy-who-goes-there-wpa3-wi-fi-security-and-what-came-before-it/2/)

## Windows

Dump Wifi password:

```ps
netsh wlan show profile
netsh wlan show profile name="<SSID>" key=clear | findstr Key
```

[How to Extract Plaintext Wi-Fi Passwords (with Rust) - YouTube](https://www.youtube.com/watch?v=auGJJOfmrMM)

## Linux

`iwd` (iNet wireless daemon) is a wireless daemon for Linux written by Intel that aims to replace WPA supplicant.

[iwd - ArchWiki](https://wiki.archlinux.org/title/iwd)

[WPA supplicant - ArchWiki](https://wiki.archlinux.org/title/WPA_supplicant)

[uoaerg/wavemon: wavemon is an ncurses-based monitoring application for wireless network devices on Linux.](https://github.com/uoaerg/wavemon)

## Signal Boosting

[What's the difference: WiFi Booster, Repeater or Extender?](https://www.waveform.com/pages/wifi-booster-repeater-extender-differences)
[The differences between a WiFi extender, WiFi booster and WiFi repeater.](https://www.actiontec.com/wifihelp/wifibooster/differences-wifi-booster-wifi-extender-wifi-repeater/)
[WiFi Repeater Vs Extender - All You Need To Know](https://www.wifiattendance.com/blog/wifi-repeater-vs-extender/)
[Mesh Wi-Fi vs. Extenders: I Tried Both, and Here’s Why Mesh Came Out on Top](https://www.makeuseof.com/mesh-wi-fi-vs-extenders-why-mesh-came-out-on-top/)

Mesh allows hopping to AP with strongest signal

### Repeater

Since WiFi is single duplex, repeater will half the bandwidth and increase latency
[Wireless repeater - Wikiwand](https://www.wikiwand.com/en/Wireless_repeater)
[2.4 GHz Wi-Fi Repeaters Explained [TP-Link TL-WA855RE] - YouTube](https://www.youtube.com/watch?v=VUx_va_3020)

[Dual-Band Repeaters Explained - YouTube](https://www.youtube.com/watch?v=XuJlxD3kLL0)

- dedicate one band for backhaul link
- or prefer 5Ghz band

### Mesh

[What is Mesh Wifi (& Why You Should Absolutely Get One) - YouTube](https://www.youtube.com/watch?v=ie4imVwn9vk)
[Mesh Routers VS Powerline Adapters and Wi-Fi Extenders - YouTube](https://www.youtube.com/watch?v=sghfkyd8P5U)
[SLOW WIFI SOLUTIONS! Router vs. Extender vs. Mesh! 24Ghz vs. 5Ghz - YouTube](https://www.youtube.com/watch?v=ULgsgs7rXAg)
Mesh network supports seamless transition
[五组 MESH 路由器横评，发现了一个可怕的问题！！ - YouTube](https://www.youtube.com/watch?v=zmjrIsVpvDM)

[Testing ASUS [AiMesh] [Repeater] [Access Point] Whole-home WiFi - YouTube](https://www.youtube.com/watch?v=5sagIw6_ofE)
[AiMesh vs. Repeater vs. Access Point [ASUS RT-AC68U Operation Modes] - YouTube](https://www.youtube.com/watch?v=ic0bgo_ueQ0)

[2021 年 Mesh 分佈式 WiFi 系統 6 大購買重點 - MESH 選購 Part.2 - by Upsangel](https://upsangel.com/router-2/6-key-points-buying-mesh-wifi-system/)
[MESH WIFI 的無縫自動切換是怎麼做到的？MESH 選購 Part.3](https://upsangel.com/router-2/mesh-wifi-roaming-seamless-switch/)
[為什麼我買了 Mesh 但 WiFi 還是不快 - Mesh 選購 Part.4 - by Upsangel](https://upsangel.com/router-2/why-mesh-wifi-slow/)
[Wi-Fi Roaming Secrets Revealed - SmallNetBuilder](https://www.smallnetbuilder.com/wireless/wireless-features/33195-wi-fi-roaming-secrets-revealed)
[6 ways to improve WiFi Roaming [Seamless Roaming] - YouTube](https://www.youtube.com/watch?v=GDCD3t8CU3Y)

[完美無線網路自己佈!!市售 2 大 Wifi 系統 Mesh/Unifi Thin AP 徹底比較【4K】 - YouTube](https://www.youtube.com/watch?v=tmPkwdx4EpY&t=434s)

[兩千訂閱解密 無線中繼器 電力線網路 與 WiFi Mesh 分佈式路由 WiFi 分享器 差別在哪裡? - Wilson 說給你聽 - YouTube](https://www.youtube.com/watch?v=RVd9ZJ3rF4c)
[無線橋接 WiFi 分享器訊號? 教你如何將一般家用 AP 改成無線網卡給電視盒以及電腦使用 - Wilson 說給你聽 - YouTube](https://www.youtube.com/watch?v=WNR4E1aPq0U) router running at bridge/client mode
[DD-WRT 中繼模式的配置教程 - 每日頭條](https://kknews.cc/tech/yj9pzb.html)
