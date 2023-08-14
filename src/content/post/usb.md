---
title: USB
description: ""
created: 2019-01-29
updated: 2023-07-22
tags:
  - comp/hardware
---

[USB - Wikiwand](https://www.wikiwand.com/en/USB)
[USB in a NutShell](http://www.beyondlogic.org/usbnutshell/usb1.shtml)
[Front Page | USB-IF](https://www.usb.org/)

[Faster USB 3.0 Performance: Examining UASP And Turbo Mode](http://www.tomshardware.com/print/usb-3-uas-turbo,reviews-3215.html)
[Thunderbolt 4 vs USB4 vs Thunderbolt 3 - What's Changed? - YouTube](https://www.youtube.com/watch?v=cvbgI2YAEeE)
[USB4 来了，准备好换硬盘了吗？ - YouTube](https://www.youtube.com/watch?v=wK72vj-j8qQ)
[唠唠雷电 4：重新定义外接显卡 - YouTube](https://www.youtube.com/watch?v=gXEnJSoP3vM)
[万能的雷电接口为什么还没有普及？——Thunderbolt 雷电协议的前世今生【科技杂谈】 - YouTube](https://www.youtube.com/watch?v=BQWVrxq-fdQ)
[USB Is A Lie - YouTube](https://www.youtube.com/watch?v=Y7Y5gXfqVKE)
[USB4 is a Glorious Mess - YouTube](https://www.youtube.com/watch?v=C6aCCp-Umcw)
[What’s the Difference Between Thunderbolt 3, Thunderbolt 4, and USB4 – Plugable Technologies](https://plugable.com/blogs/news/what-s-the-difference-between-thunderbolt-3-thunderbolt-4-and-usb4)

| Standard                | Speed                 | Year | Remarks                                                                    |
| ----------------------- | --------------------- | ---- | -------------------------------------------------------------------------- |
| USB 4                   | 40Gbps                | 2019 | uses Thunderbolt 3 royalty-free                                            |
| Thunderbolt 3           | 40Gbps                | 2017 | supports more protocols (DP, PCIe)                                         |
| USB 3.2/USB 3.2 Gen 2x2 | 20Gbps                |      |                                                                            |
| USB 3.1/USB 3.2 Gen 2x1 | 10Gbps                | 2014 | Type C                                                                     |
| USB 3.0/USB 3.2 Gen 1   | 5Gbps<br>(SuperSpeed) | 2011 |                                                                            |
| USB 2                   | 480Mbps<br>(Hi-Speed) | 2000 | 2001 Mini A/B, OTG; 2007 Micro A/B                                         |
| USB 1.0                 | 12Mbps                | 1996 | Type A was meant for upstream host; Type B was meant for downstream device |

[Explaining USB: From 1.0 to USB4 V2.0 - YouTube](https://www.youtube.com/watch?v=PctX3kcTj5U)
[【科技杂谈 60】USB 发展史（1994-2019） - YouTube](https://www.youtube.com/watch?v=kg_Ej8YmmIg)
[Why Does USB Keep Changing? | Nostalgia Nerd - YouTube](https://www.youtube.com/watch?v=36CKsP9YQ1E)

## USB Protocol

[USB Made Simple](https://www.usbmadesimple.co.uk/index.html)

[libusb](https://libusb.info/)

[How does a USB keyboard work? - YouTube](https://www.youtube.com/watch?v=wdgULBpRoXk)
[How does USB device discovery work? - YouTube](https://www.youtube.com/watch?v=N0O5Uwc3C0o)

[Add USB To Your Electronics Projects! - The USB Protocol Explained - YouTube](https://www.youtube.com/watch?v=HbQ6q3skZgw)
[V-USB on an ATmega328! - V-USB and HID Explained - YouTube](https://www.youtube.com/watch?v=6U_bHTnFu-g)

4 data lines: 5V, D+, D-, GND
D+ and D- form a differential pair to reduce environmental noise, they can represent 4 states (in high speed mode):

|     | D+  | D-  |
| --- | --- | --- |
| J   | 1   | 0   |
| K   | 0   | 1   |
| SE0 | 0   | 0   |
| SE1 | 1   | 1   |

SE0: Single Ended Zero
SE1: Single Ended One

no transition -> 1
state transition -> 0
Start sync sequence: KJKJKJKK
End of Packet: JJ SE0

## USB Type C

[What is USB-C? It's Not As Simple As You Think! - YouTube](https://www.youtube.com/watch?v=mdwqZAkYWzQ)
[USB Type-C: Explained! - YouTube](https://www.youtube.com/watch?v=ZrZISyPucMg)

[It's 2018 and USB Type-C is still a mess - Android Authority](https://www.androidauthority.com/state-of-usb-type-c-870996/)

[Converting devices to USB Type-C - YouTube](https://www.youtube.com/watch?v=V-vFtiDYiIw)

## USB Audio

[What you need to know about USB-C audio - Android Authority](https://www.androidauthority.com/usb-c-audio-guide-headphone-jack-943393/amp/)
[USB Audio and USB Type-C headphones explained](https://www.soundguys.com/usb-audio-explained-18563/)

## USB OTG

[USB On-The-Go - Wikiwand](https://www.wikiwand.com/en/USB_On-The-Go)
[USB On-the-Go Basics - Tutorial - Maxim](https://www.maximintegrated.com/en/app-notes/index.mvp/id/1822)

[Simple guide for setting up OTG modes on the Raspberry Pi Zero](https://gist.github.com/gbaman/50b6cca61dd1c3f88f41)

## Cables

[USB hardware - Wikiwand](https://www.wikiwand.com/en/USB_hardware#/Connectors)

[Fastest charging cables - which one is best for you?](https://www.androidauthority.com/fastest-charging-cables-793649/)
[Google engineer challenges USB-C cables for sale at Amazon - ExtremeTech](https://www.extremetech.com/computing/217556-google-engineer-challenges-usb-c-cables-for-sale-at-amazon)
[Total Nightmare: USB-C and Thunderbolt 3 - Stephen Foskett, Pack Rat](http://blog.fosketts.net/2016/10/29/total-nightmare-usb-c-thunderbolt-3/)

[How to tell if your USB-C cable is USB only or supports Thunderbolt 3 | Macworld](https://www.macworld.com/article/3586187/how-to-tell-if-your-usb-c-cable-is-usb-only-or-supports-thunderbolt-3.amp.html)

[Dangers of Counterfeit USB-C and Type-C Cables](http://www.belkin.com/us/Resource-Center/USB-C/USB-C-counterfeits/)

## Check USB devices

```sh
sudo lsusb -t
```

## Mount USB storage

[USB storage devices - ArchWiki](https://wiki.archlinux.org/title/USB_storage_devices)

[udisks - ArchWiki](https://wiki.archlinux.org/title/Udisks)
[coldfix/udiskie: Automounter for removable media](https://github.com/coldfix/udiskie)
[How To: Easy USB Mounting On Linux With Udisks2 And Udiskie - YouTube](https://www.youtube.com/watch?v=eVZBvRkLqaE)
