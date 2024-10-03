---
title: Computer Memory
description: ""
created: 2016-04-26
updated: 2024-09-28
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

## Timing/Latency

true latency
= time per cycle X number of cycles
= CL (clock cycles) / MHz

[How Do Memory Timings Work? - YouTube](https://www.youtube.com/watch?v=Yed-a9vqTYc)
[【硬件科普】高频内存为什么要打开 XMP？详解内存条 SPD 与 XMP - YouTube](https://www.youtube.com/watch?v=KC4CVyWXjRM)
[Why I get NO POST with XMP??? 👉 ULTIMATE RAM + XMP Guide - YouTube](https://www.youtube.com/watch?v=wzVZgTP2204) How Rank, Density and Population affects transfer rate (in that order)

AMD's EXPO (for DDR5 on AM5) allow modules to run at lower clock speed upon idle (voltage won't change as of 2024-10)

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

## CAMM2

[Upgradable RAM is Back – CAMM2 Explained - YouTube](https://www.youtube.com/watch?v=PMwt3A02WU8)
[New Laptop Memory Is Here! LPCAMM2 Changes Everything! - YouTube](https://www.youtube.com/watch?v=K3zB9EFntmA)
[不看你可能會翻車!!!次世代DDR5記憶體概念入門~想搞懂甚麼是CU-DIMM甚麼是CAMM2嗎?來慢慢聊聊天 - YouTube](https://www.youtube.com/watch?v=ImqoHmkIrbo)

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
