---
title: Computer Memory
description: ""
created: 2016-04-26
updated: 2025-11-23
tags:
  - comp/hardware
  - ddr
  - ram
---

[RAM Explained - Random Access Memory - YouTube](https://www.youtube.com/watch?v=PVad0c2cljo)
[B-Die Finder](https://benzhaomin.github.io/bdiefinder/)

[DDR DRAM FAQs And Troubleshooting Guide | Tom's Hardware](https://www.tomshardware.com/reviews/ddr-dram-faq,4154.html)
[DDR Memories Comparison and Overview|NXP](http://www.nxp.com/pages/ddr-memories-comparison-and-overview:784_LPBB_DDR)
[Everything You Need To Know About DDR, DDR2 and DDR3 Memories - Hardware Secrets](http://www.hardwaresecrets.com/everything-you-need-to-know-about-ddr-ddr2-and-ddr3-memories/)
[Laptop DDR4 caveats - x8 layout versus x16 versus single and dual channel](https://rk.edu.pl/en/laptop-ddr4-caveats-x8-layout-versus-x16-versus-single-and-dual-channel/) channels, x8 and x16 layout
[5 reasons you need to be more careful with RAM on Ryzen](https://www.xda-developers.com/ryzen-memory-compatibility-stinks-but-so-does-arrow-lake/)

## History

[DRAM 記憶體 60 年 : 最殘酷的半導體戰爭 - YouTube](https://www.youtube.com/watch?v=eB8SdLQNAmc)

Redknot-乔红
[CPU中寄存器的原理 - YouTube](https://www.youtube.com/watch?v=XuWpV1eFZAw)
[一次性搞懂锁存器，触发器，寄存器 - YouTube](https://www.youtube.com/watch?v=z1IrTEdljK8) L2/L3 cache
[用最好的动画为你讲解--内存的原理 - YouTube](https://www.youtube.com/watch?v=bqImyyk1bMQ)
[内存和显存的区别 - YouTube](https://www.youtube.com/watch?v=xenDvvSGfwA)

[Flip-flop (electronics) - Wikiwand](<https://www.wikiwand.com/en/articles/Flip-flop_(electronics)>)
[锁存器 - Wikiwand](https://www.wikiwand.com/zh-cn/articles/%E9%94%81%E5%AD%98%E5%99%A8)
[触发器 - Wikiwand](https://www.wikiwand.com/zh-tw/articles/%E8%A7%A6%E5%8F%91%E5%99%A8)

[HOW TRANSISTORS REMEMBER DATA - YouTube](https://www.youtube.com/watch?v=rM9BjciBLmg) SRAM/latch
[Capacitors are terrible at remembering data. But for this reason we continue doing it. - YouTube](https://www.youtube.com/watch?v=7WnbIeMgWYA) DRAM

[How does Computer Memory Work? 💻🛠 - YouTube](https://www.youtube.com/watch?v=7J7X7aZvMXQ)

[Dynamic Random Access Memory (DRAM). Part 1: Memory Cell Arrays - YouTube](https://www.youtube.com/watch?v=-Df09el4yDU)
[Dynamic Random Access Memory (DRAM). Part 2: Read and Write Cycles - YouTube](https://www.youtube.com/watch?v=x3jGqOrXXc8)

### Magnetic Core Memory

> this brings us the "core dump"

[Magnetic Core Memory From Soviet Russia - YouTube](https://www.youtube.com/shorts/mrBz9-9qgGw)
[Core Memory Explained and Demonstrated - YouTube](https://www.youtube.com/watch?v=AwsInQLmjXc)
[Apollo Core Rope Memory (Apollo Guidance Computer Part 30) - YouTube](https://www.youtube.com/watch?v=hckwxq8rnr0)

## Timing/Latency

true latency
= time per cycle X number of cycles
= CL (clock cycles) / MHz

[How Do Memory Timings Work? - YouTube](https://www.youtube.com/watch?v=Yed-a9vqTYc)
[【硬件科普】高频内存为什么要打开 XMP？详解内存条 SPD 与 XMP - YouTube](https://www.youtube.com/watch?v=KC4CVyWXjRM)
[Why I get NO POST with XMP??? 👉 ULTIMATE RAM + XMP Guide - YouTube](https://www.youtube.com/watch?v=wzVZgTP2204) How Rank, Density and Population affects transfer rate (in that order)

AMD's EXPO (for DDR5 on AM5) allow modules to run at lower clock speed upon idle (voltage won't change as of 2024-10)
[What Is AMD EXPO and How Does It Compare to Intel's XMP?](https://www.makeuseof.com/what-is-amd-expo/)

[Don't waste money chasing RAM speed for gaming on AMD or Intel | PC Gamer](https://www.pcgamer.com/does-ram-speed-matter-gaming-amd-intel/) DDR4@3600MHz is still the sweet spot in 2022

[Understanding RAM Timings - Hardware Secrets](http://www.hardwaresecrets.com/understanding-ram-timings/)
[RANT: THE CAS LATENCY TIMING DOESN'T MATTER AS MUCH AS YOU THINK IT DOES - YouTube](https://www.youtube.com/watch?v=pgb8N23tsfA)
[What Are Memory Timings? CAS Latency, tRCD, tRP, & tRAS (Pt 1) | GamersNexus - Gaming PC Builds & Hardware Benchmarks](https://www.gamersnexus.net/guides/3333-memory-timings-defined-cas-latency-trcd-trp-tras)
[What Are Memory Timings? CAS Latency, tRCD, tRP, & tRAS (Pt 1) - YouTube](https://www.youtube.com/watch?v=o59V3_4NvPM)

[板廠沒有說的祕密:記憶體體質是怎樣定義?在不同的主機板又有什麼樣的差異?DRAGON ALLIANCE記憶體之星聯盟是什麼?記憶體體質是怎樣定義?記憶體相容性要注意那些? - YouTube](https://www.youtube.com/watch?v=JTcIlt-zbsw)
[為什麼大家官網記憶體頻率越寫越高?是記憶體控制器?是顆粒?還是走線優化? 先講講AB通差異以及天花板變化 - YouTube](https://www.youtube.com/watch?v=P7cfegG9BKU)
[記憶體頻率天花板之二!記憶體顆粒的差異造成頻率天花板的變化! - YouTube](https://www.youtube.com/watch?v=RUCmAALUL2w)

[RAM Latency Calculator](https://notkyon.moe/ram-latency2.htm)

## Single-Channel vs Dual-Channel

[RAM Performance Benchmark: Single-Channel vs. Dual-Channel - Does It Matter? | GamersNexus - Gaming PC Builds & Hardware Benchmarks](https://www.gamersnexus.net/guides/1349-ram-how-dual-channel-works-vs-single-channel?showall=1)
[Single-Channel vs Dual-Channel RAM: Which One is Better for Gaming? | Hardware Times](https://www.hardwaretimes.com/single-channel-vs-dual-channel-ram-which-one-is-better-for-gaming/)
[Everything You Need to Know About the Dual-, Triple-, and Quad-Channel Memory Architectures - Hardware Secrets](http://www.hardwaresecrets.com/everything-you-need-to-know-about-the-dual-triple-and-quad-channel-memory-architectures/)
[Single- and Multichannel Memory Modes](https://www.intel.com/content/www/us/en/support/articles/000005657/boards-and-kits.html)

## DDR5

[Does RAM Speed REALLY Matter?? (DDR5 Edition) - YouTube](https://www.youtube.com/watch?v=b-WFetQjifc)
latency is more crucial

[DDR5 is FINALLY HERE... and I've got it - YouTube](https://www.youtube.com/watch?v=aJEq7H4Wf6U)
[DDR5 導讀~邁入新世代記憶體 DDR5 入門篇 - YouTube](https://www.youtube.com/watch?v=cKqq4O7qVTU)
[DDR5進階必懂篇~什麼是JEDEC規範?什麼是POR頻率?為什麼DDR5電壓有1.435V限制?常見電壓破解又是怎麼一回事?? - YouTube](https://www.youtube.com/watch?v=0hookxhPyjI)
[不建议插满4根DDR5，主板为啥要设计4个内存插槽？【差评君】Why does the motherboard have 4 memory slots? - YouTube](https://www.youtube.com/watch?v=kTEEV6FlnBg)

## CAMM2

[Upgradable RAM is Back – CAMM2 Explained - YouTube](https://www.youtube.com/watch?v=PMwt3A02WU8)
[New Laptop Memory Is Here! LPCAMM2 Changes Everything! - YouTube](https://www.youtube.com/watch?v=K3zB9EFntmA)
[不看你可能會翻車!!!次世代DDR5記憶體概念入門~想搞懂甚麼是CU-DIMM甚麼是CAMM2嗎?來慢慢聊聊天 - YouTube](https://www.youtube.com/watch?v=ImqoHmkIrbo)

[Computer RAM gets biggest upgrade in 25 years but it may be too little, too late — LPCAMM2 won't stop Apple, Intel and AMD from integrating memory directly on the CPU | TechRadar](https://www.techradar.com/pro/computer-ram-gets-biggest-upgrade-in-25-years-but-it-may-be-too-little-too-late-lpcamm2-wont-stop-apple-intel-and-amd-from-integrating-memory-directly-on-the-cpu)
[SO-DIMM laptop memory sticks to disappear as CAMM poised to take over — new RAM format comes to market, but may be a mere stopgap before tech industry moves to on-chip system memory à la Apple | TechRadar](https://www.techradar.com/pro/so-dimm-laptop-memory-sticks-to-disappear-as-camm-poised-to-take-over-new-ram-format-comes-to-market-but-may-be-a-mere-stopgap-before-tech-industry-moves-to-on-chip-system-memory-a-la-apple)

[What is CAMM2? Meet the faster, smaller, upgradeable new memory standard | Tom's Hardware](https://www.tomshardware.com/pc-components/motherboards/what-is-camm2)
[Why manufacturers are testing CAMM2 on the desktop | PCWorld](https://www.pcworld.com/article/2363771/why-msi-asus-and-asrock-are-testing-camm2-on-desktop.html)
[MSI Highlights Benefits of CAMM2 DDR5 Memory For Desktop PCs: Shorter Traces Lead To Higher Speeds & Lower Latencies, Cooler & Innovative Designs](https://wccftech.com/msi-benefits-camm2-ddr5-memory-desktop-pcs-shorter-traces-higher-speeds-lower-latencies-cooler-innovative-designs/)
[Compression-mounted laptop RAM is fast, efficient, and upgradeable - The Verge](https://www.theverge.com/2024/5/7/24151369/lpcamm2-laptop-memory-ram-lenovo-ifixit)

## UDIMM vs RDIMM

## Unified Memory

[How “Unified Memory” Speeds Up Apple’s M1 ARM Macs](https://www.howtogeek.com/701804/how-unified-memory-speeds-up-apples-m1-arm-macs/amp/)
[Unified Memory for CUDA Beginners | NVIDIA Developer Blog](https://developer.nvidia.com/blog/unified-memory-cuda-beginners/)

## Motherboard Topology

[板廠沒有說的秘密~迎接下一世代~再次科普記憶體走線的差異! - YouTube](https://www.youtube.com/watch?v=Ypg4WP0tr7Y) AMD Ryzen and Intel post-Z390 are using daisy chain, one of the bank has better quality if using only one DIMM per channel
[板廠沒有說的秘密~與記憶體廠的各種互動~記憶體超頻是怎樣的形成 - YouTube](https://www.youtube.com/watch?v=sum0GRK9jTY)

[【硬件科普】为什么装机内存条推荐安装到第 24 槽而不是 13 槽？为什么 ITX 主板超频内存更容易？ - YouTube](https://www.youtube.com/watch?v=aRZcm4WvJEc)
T-Topology
Direct Topology
Daisy-Chain Topology

[Rambling about motherboard memory layouts. - YouTube](https://www.youtube.com/watch?v=3vQwGGbW1AE)
