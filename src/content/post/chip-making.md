---
title: Chip Making
description: ""
created: 2023-06-13
updated: 2025-09-03
tags:
  - comp/hardware
  - manufacturing
---

[SemiAnalysis | Dylan Patel | Substack](https://www.semianalysis.com/)
[Chips and Cheese – The Devil is in the Details](https://chipsandcheese.com/)
[Ken Shirriff's blog](https://www.righto.com/) IC reverse engineering
[High Yield - YouTube](https://www.youtube.com/@HighYield)
[老石谈芯 - YouTube](https://www.youtube.com/@laoshi_tec)
[谈三圈 - YouTube](https://www.youtube.com/@tan3quan)

[Semiconductor device fabrication - Wikiwand](https://www.wikiwand.com/en/articles/Semiconductor_device_fabrication)
[Why making chips is so hard - YouTube](https://www.youtube.com/watch?v=CkNn98WE5_k)
[半導體 - YouTube](https://www.youtube.com/playlist?list=PLBbGP5YXTYgknNgVZX3oQ7yRnxk_XslFe) PanSci

[How are Microchips Made? - YouTube](https://www.youtube.com/watch?v=dX9CGRZwD-w)
[How are microchips made? - YouTube](https://www.youtube.com/watch?v=g8Qav3vIv9s)
[How Chips are Manufactured – with Optics from ZEISS - YouTube](https://www.youtube.com/watch?v=bUJiMJweI8M)
[From Sand to Silicon: the Making of a Chip | Intel - YouTube](https://www.youtube.com/watch?v=Q5paWn7bFg4)
[From Sand to Silicon: The Making of a Microchip | Intel - YouTube](https://www.youtube.com/watch?v=_VMYPLXnd7E)
[Intel: The Making of a Chip with 22nm/3D Transistors | Intel - YouTube](https://www.youtube.com/watch?v=d9SWNLZvA8g)
[Semiconductors Explained - YouTube](https://www.youtube.com/playlist?list=PL9jh-CW6ZfSW3Ehx-rTy60sKwZ5_ezsZ7) Samsung Semiconductor Newsroom
[The Amazing, Humble Silicon Wafer - YouTube](https://www.youtube.com/watch?v=sIRfWyyOFPg)
[日美科技战：半导体巅峰之争背后的秘密 - YouTube](https://www.youtube.com/watch?v=FwXQSQcyWGQ)
[I Can Die Now. - YouTube](https://www.youtube.com/watch?v=2ehSCWoaOqQ) 2022, Intel Israel Fab

[【全网最深度解读】小米玄戒O1：一场输不起的芯片战争 - YouTube](https://www.youtube.com/watch?v=xEF4RkMvMMQ)

- spec and architecture definition
  define performance, power and cost requirements
- frontend design
  RTL functional design
- backend design
  RTL -> physical design with EDA tools, physical and electrical integrity

硬件茶谈
[【硬件科普】带你认识 CPU 第 00 期——什么是 MOSFET - YouTube](https://www.youtube.com/watch?v=P91wpwVGH6M)
[【硬件科普】带你认识 CPU 第 01 期——什么是逻辑门 - YouTube](https://www.youtube.com/watch?v=bk1-KqUq4gQ)

[ASML 遭遇生存危机？全新光刻机技术让芯片成本大跳水 - YouTube](https://www.youtube.com/watch?v=SsUXlw30LRQ) pattern shaping

[中兴禁令之芯片为什么这么难做？芯片的基本原理是什么？李永乐老师带你了解！（2018 最新） - YouTube](https://www.youtube.com/watch?v=7MFly82e46Q)
[为什么你的电脑还没用上国产 CPU？丨科普丨冷知识丨柴知道 ChaiKnows - YouTube](https://www.youtube.com/watch?v=_5txTIdG53c)

[了解历史，才知道中国芯片如何胜出 | 袁岚峰 - 知乎](https://zhuanlan.zhihu.com/p/147525190)
[中国芯能否登顶？从芯片产业发展史找答案 | 跟陶叔学编程](https://mp.weixin.qq.com/s?__biz=MzI0NzQzMjU3Ng==&mid=2247500354&idx=2&sn=51b60b74e021bcbd89e38665493db28b&token=1506619420&lang=zh_CN&scene=21)
[台积电为什么这么重要？美国可以透过台积电限制华为芯片吗，对中国的军工有什么影响 - YouTube](https://www.youtube.com/watch?v=dRRPDooMeKQ)
[三十年前，美国整垮日本芯片，可惜这次对手是中国 - YouTube](https://www.youtube.com/watch?v=cWG3N7WrZME)
[【Fun 科技】国产 CPU 战平 i5-7400？兆芯 KX-U6780A 首发评测!中国芯崛起！ - YouTube](https://www.youtube.com/watch?v=I0N3sqnKIxA)

[How Chip Giant AMD Finally Caught Intel - YouTube](https://www.youtube.com/watch?v=_gLm0Jo0cnk)
[How ASML, TSMC And Intel Dominate The Chip Market | CNBC Marathon - YouTube](https://www.youtube.com/watch?v=2kJDTzFtUr4)

[Chips - Real World Tech](https://www.realworldtech.com/category/chips/)

## Functional Types

[Application-specific integrated circuit - Wikiwand](https://www.wikiwand.com/en/Application-specific_integrated_circuit) ASIC: high performance, fixed pipeline, high one-time cost
[Structured ASIC platform - Wikiwand](https://www.wikiwand.com/en/Structured_ASIC_platform) hybrid
[Gate array - Wikiwand](https://www.wikiwand.com/en/Gate_array)
[Field-programmable gate array - Wikiwand](https://www.wikiwand.com/en/Field-programmable_gate_array) FPGA: high performance, programmable pipeline, low one-time cost

[These Chips Are Better Than CPUs - YouTube](https://www.youtube.com/watch?v=7Elgs5HzIbE)
[Difference Between ASIC and FPGA | Difference Between](http://www.differencebetween.net/technology/difference-between-asic-and-fpga/)
[FPGA vs ASIC: Differences between them and which one to use? | Numato Lab Help Center](https://numato.com/blog/differences-between-fpga-and-asics)
[Learn FPGA Fast With Hackaday’s FPGA Boot Camp | Hackaday](https://hackaday.com/2018/08/06/learn-fpga-fast-with-hackadays-fpga-boot-camp/)
[Why FPGAs Are Amazing for Retro Gaming Emulation](https://www.howtogeek.com/783770/why-fpgas-are-amazing-for-retro-gaming-emulation/)
[The History of the FPGA: The Ultimate Flex - YouTube](https://www.youtube.com/watch?v=m-8G1Yixb34)
[What are FPGAs and How Do They Work - Ulrich Drepper - code::dive 2018 - YouTube](https://www.youtube.com/watch?v=bReSjVGMDRs)
[How remouldable computer hardware is speeding up science](https://www.nature.com/articles/d41586-021-03627-8)

[gateware-ts](https://gateware-ts.github.io/gateware-ts/)
[Building FPGA Hardware Using TypeScript: Driving An RGB LED Panel - YouTube](https://www.youtube.com/watch?v=Otx96lJnLeo)

老石谈芯
[性能至上？聊聊人工智能芯片的 5 个评价标准 - YouTube](https://www.youtube.com/watch?v=KICKrJZMoKA)
[FPGA - YouTube](https://www.youtube.com/playlist?list=PLZbVf-X2rhjYlnuV7wgWqRAaJdFI3d3Jh)

## Transistors

[Power Transistor : Structure, Operation, & VI Characteristics](https://www.elprocus.com/what-is-a-power-transistor-types-and-its-working/)
[Bipolar Junction Transistors (BJT) and Its Applications](https://www.elprocus.com/bipolar-junction-transistors-working-principle-and-applications/)
[What is the MOSFET: Basics, Working Principle and Applications](https://www.elprocus.com/mosfet-as-a-switch-circuit-diagram-free-circuits/)
[Insulated Gate Bipolar Transistor Characteristics](https://www.elprocus.com/insulated-gate-bipolar-transistor-circuit-and-characteristics/)
[Transistors - Major Difference between BJT and MOSFET](https://www.elprocus.com/difference-between-bjt-and-mosfet/)
[The Future of the Transistor](https://www.semianalysis.com/p/the-future-of-the-transistor)

[Transistors - The Invention That Changed The World - YouTube](https://www.youtube.com/watch?v=OwS9aTE2Go4)
[Transistors Explained - How transistors work - YouTube](https://www.youtube.com/watch?v=J4oO7PT_nzQ)
[Incredible Engineering- Inventing the Transistor - YouTube](https://www.youtube.com/watch?v=YUJ3FTb3Bf0)

[MOSFET - Wikiwand](https://www.wikiwand.com/en/MOSFET)
[CMOS - Wikiwand](https://www.wikiwand.com/en/CMOS) Complementary MOSFET

## Photolithography

[How CPUs Are Made As Fast As Possible - YouTube](https://www.youtube.com/watch?v=N7ut61pSLwk)
[EUV: Lasers, plasma, and the sci-fi tech that will make chips faster | Upscaled - YouTube](https://www.youtube.com/watch?v=oIiqVrKDtLc)
[Introduction to Photolithography - ( Negative or Positive Photoresist ) - YouTube](https://www.youtube.com/watch?v=IF2pDoPBv10)
[How Photolithography works (ZEISS) - YouTube](https://www.youtube.com/playlist?list=PLB_IY29eVwsVZqvesN78qewu75kakmITJ)
[How Extreme Ultraviolet Lithography works (ZEISS) - YouTube](https://www.youtube.com/playlist?list=PLB_IY29eVwsXzs45HeIu_85UHcF966IMm)

[芯片制造的核心：光刻机！中芯国际在购得 EUV 光刻机后差距还有多大？梁孟松的传奇（58） - YouTube](https://www.youtube.com/watch?v=-w2Cvd3rxsU)
[Vol.137 如何在纳米尺度雕刻芯片？ - YouTube](https://www.youtube.com/watch?v=Co7-_d1NjkM)

[EUV 光刻太贵了：替代技术正加快速度转正-快科技-科技改变生活](https://m.mydrivers.com/newsview/870055.html?ref=https%3A//www.google.com/)
[撼動晶片業！日本推出便宜EUV！？台積電不用當盤子了！？極紫外光EUV大解密！ - YouTube](https://www.youtube.com/watch?v=3_oFWrsfvDs)
[EUV With Fewer Mirrors? - YouTube](https://www.youtube.com/watch?v=hzsWO-juoQQ)
[How does EUV Lithography Work? Inside the Most Advanced Machine Ever Made 🛠️⚙️🤯 - YouTube](https://www.youtube.com/watch?v=B2482h_TNwg)

Atomic Layer Deposition (ALD) is used to deposit thin films on the wafer.
[2奈米以下要靠它？秒懂最強薄膜技術ALD原子層沉積！用超薄材料造出最小電晶體 - YouTube](https://www.youtube.com/watch?v=6QxFJHPhD88)

[用 GPU 榨干光刻机性能！英伟达计算光刻要改写芯片历史？ - YouTube](https://www.youtube.com/watch?v=N8gb_nABdWs)
[You Didn’t Build your PC… This Did. - YouTube](https://www.youtube.com/watch?v=pfU20SAR21A) ASML's EUV machine

@Asianometry
[How Carl Zeiss Crafts Optics for a $150 Million EUV Machine - YouTube](https://www.youtube.com/watch?v=V__HbVlnICc)
[How ASML Builds a $150 Million EUV Machine - YouTube](https://www.youtube.com/watch?v=jJIO7aRXUCg)
[“The Decision of the Century”: Choosing EUV Lithography - YouTube](https://www.youtube.com/watch?v=RmgkV83OhHA)
[The Extreme Engineering of ASML’s EUV Light Source - YouTube](https://www.youtube.com/watch?v=5Ge2RcvDlgw)
[Can You Do 7nm Chips Without EUV? - YouTube](https://www.youtube.com/watch?v=Th4E-0VFaEA)
[What ASML Has Next After EUV - YouTube](https://www.youtube.com/watch?v=en7hhFJBrAI) High-NA EUV
[ASML's High-NA and Hyper-NA EUV: An Update - YouTube](https://www.youtube.com/watch?v=Fc_lEzGiClk)
before EUV, etching is done with 193nm light; EUV uses 13.5nm light
immersion lithography (ArFi) (2007, N42) and multiple patterning (repeated exposure at lower resolutions) (N22) are used til first batch of N7 A12 from Apple

## Process node

[Technology Node - WikiChip](https://en.wikichip.org/wiki/technology_node)
[How Are Process Nodes Defined? - ExtremeTech](https://www.extremetech.com/computing/296154-how-are-process-nodes-defined)
[Semiconductor device fabrication - Wikiwand](https://www.wikiwand.com/en/Semiconductor_device_fabrication)
A process node upgrade is meant to double the number of transistors, hence halving the area, so the distance decrease is square root of 0.5 = 0.7071
90nm -> 65nm -> 45nm -> 32nm -> 22nm -> 14nm -> 10nm -> 7nm -> 5nm
Laser cannot achieve required half pitch after 28nm. 3D techniques (FinFET) are used.

[Die Per Wafer Calculator -](https://caly-technologies.com/die-yield-calculator/)

[Should You Believe CPU Marketing? - YouTube](https://www.youtube.com/watch?v=ROS008Av4E4)
gate distance -> cell distance (Pentium III) -> not measuring transistor size anymore (FinFET)
Transistor density is better measure

[Intel 10nm Delay Explained & AMD's "7nm" | Ft. David Kanter - YouTube](https://www.youtube.com/watch?v=dtiBEHH7mEA)
[Intel Ditches "Nanometers," Renames 10nm to "7" & 7nm to "4" - YouTube](https://www.youtube.com/watch?v=wxKGFxmwcDo)
[14nm and 7nm are NOT what you think it is - Visiting Tescan Part 3/3 - YouTube](https://www.youtube.com/watch?v=1kQUXpZpLXI)
[2nm 先進製程 Nanosheet 是怎麼從 1947 年點接觸式電晶體演化過來的？【電晶體進化史 1947 - 2025】 - YouTube](https://www.youtube.com/watch?v=IOwc-llJxVQ)
[放大20万倍,这是3纳米芯片最深层的秘密【玄戒O1解剖报告】 - YouTube](https://www.youtube.com/watch?v=Q9oJnTmpMg8)

[Next-Gen CPUs/GPUs have a HUGE problem! - YouTube](https://www.youtube.com/watch?v=vQ5JPqeFitM) SRAM for cache does not scale with process node, and next-gen CPUs/GPUs are using larger cache => greatly increased price; chiplet/tile design help ease this problem for the core and cache can be using different process node

[Is a smaller manufacturing process always better? Intel's 10nm SuperFin suggests otherwise | VentureBeat](https://venturebeat.com/2020/09/21/is-smaller-always-better-in-chips-intels-new-10nm-superfin-technology-suggests-otherwise/amp/)

### 3D Transistors

[The 3-D Transistor Transition - YouTube](https://www.youtube.com/watch?v=i3dDslo9ibw) FinFET and Gate All Around (GAA)
This increase the contact surface area of the control signal (in the form of magnetic fields) towards the gate.

[FinFET - Wikiwand](https://www.wikiwand.com/en/FinFET)
[Beyond 7nm - the race to 4nm is Samsung's to lose - Android Authority](https://www.androidauthority.com/4nm-processing-node-812959/)
[Tech Brief: FinFET Fundamentals | Lam Research](https://blog.lamresearch.com/tech-brief-finfet-fundamentals/)
[The secret behind FinFET process node scaling - YouTube](https://www.youtube.com/watch?v=9vQ0T1fOvIA) FinFlex, fin depopulation (reducing the number of fins)
FinFET is used for nodes < 28nm

[Multigate device - Wikiwand](https://www.wikiwand.com/en/Gate-all-around)
[Samsung Unveils 3nm Gate-All-Around Design Tools - ExtremeTech](https://www.extremetech.com/computing/291507-samsung-unveils-3nm-gate-all-around-design-tools)
[The Gate-All-Around Transistor is Coming - YouTube](https://www.youtube.com/watch?v=5RPFfPtgw7g)
[Gate-All-Around — The Future of Transistors - YouTube](https://www.youtube.com/watch?v=bfkIp_j0Iv8)
GAA/RibbonFET is used for nodes < 3nm

## Packaging

[A Brief History of Semiconductor Packaging - YouTube](https://www.youtube.com/watch?v=nNpuiJitKwk)

- Plastic Encapsulation
- Dual Inline Package (DIP): leads of 2.54mm apart, through hole mounting
- Surface Mounting Technology (SMT): smaller leads catered for Very Large Scale Integration (VLSI); allow use of both side of PCB
  - Small-Outline Integrated circuit (SOIC): gull-wing leads
  - Quad Flat Package (QFP): lead pitch of 0.65 to 1 mm; Shrink QFP, Very Small QFP, Thin QFP variants
  - [How Motherboards Are Made (2019) | Taiwan Automated Factory Tour, ft. Gigabyte - YouTube](https://www.youtube.com/watch?v=cnAFTMaS5R0) fully auto SMT soldering
- Pin Grid Array (PGA)
- Ball Grid Array (BGA): surface mount version of PGA
- Flip Chip: the chip is flipped and wire bonding is ditched
- Chip scale packaging: package with a die occupying > 80% of the total packaging area
  - Wafer Level Package: die interconnects are hooked up before being cut out of the wafer
- Advanced Packaging
  wire bonding and grid array uses larger area and have high latency
  chiplets, multi chip modules, hybrid circuits, system in packages, mixing process nodes; TSMC SoIC, 3D IC (different chips stacked), 2.5D IC (chip stacked on interposer)

System-in-Package (SiP): packaging multiple dies and passive components (with prelim packaging) in a single package
System-on-Chip (SoC): Multiple (naked) chips cut from wafer are integrated to the same substrate

[Redistribution Layers (RDLs) - Semiconductor Engineering](https://semiengineering.com/knowledge_centers/packaging/redistribution-layers-rdls/)
[IC Packaging | 3D IC | Cadence](https://resources.pcb.cadence.com/ic-packaging)

[全网遥遥领先，彻底讲懂芯片封装，封装到底是个啥？ - YouTube](https://www.youtube.com/watch?v=crOq5jmoO6Q)
[全网最简单清晰！15分钟彻底讲清楚芯片封装技术！ - YouTube](https://www.youtube.com/watch?v=v4ypqCOU5z0) ❗!important, Wire Bonding, Flip Chip Bonding, Chip-scale packaging (CSP) (Redistribution Layer (RDL), Fan-in WLCSP, Fan-out WLCSP), 2.5D and 3D Packaging (Through-silicon via (TSV), Chiplet)
[并非无解！先进封装技术，能打破国产芯片的困局吗？ - YouTube](https://www.youtube.com/watch?v=6UKPFcD2Ihc)

[The RDL Layer Revolution | Advanced PCB Design Blog | Cadence](https://resources.pcb.cadence.com/blog/2023-redistribution-layer-process-flow-for-3d-ics)
[Redistribution Layers (RDLs) - Semiconductor Engineering](https://semiengineering.com/knowledge_centers/packaging/redistribution-layers-rdls/)

### Advanced Packaging

[【亦】唠唠苹果 M1 Ultra：半导体新时代！ - YouTube](https://www.youtube.com/watch?v=lri6O8EBnlI)
[Why AMD's Chiplets Work - YouTube](https://www.youtube.com/watch?v=-x9nGo0Ge70)
[AMD ZEN 6 — Next-gen Chiplets & Packaging - YouTube](https://www.youtube.com/watch?v=ex_gPeWVAo0)

- silicon interposer replaces tiny copper wires on the PCB  
  the interposer has higher bandwidth, lower latency, and lower power consumption than the PCB  
  but it is much more expensive to make
- silicon bridge  
  archive the benefits of the interposer with lower complexity and lower cost
- organic RDL (Redistribution Layer)  
  organic material is used instead of silicon, fanout interconnections in the RDL  
  already used by Navi 31 and Navi 32 GPUs

[Advanced Packaging Part 1 – Pad Limited Designs, Breakdown Of Economic Semiconductor Scaling, Heterogeneous Compute, and Chiplets](https://www.semianalysis.com/p/advanced-packaging-part-1-pad-limited)
[Advanced Packaging Part 2 - Review Of Options/Use From Intel, TSMC, Samsung, AMD, ASE, Sony, Micron, SKHynix, YMTC, Tesla, and Nvidia](https://www.semianalysis.com/p/advanced-packaging-part-2-review)
[Advanced Packaging Part 3 – Intel’s Curious Bet on Thermocompression Bonding, ASM Pacific, Kulicke and Soffa, and Besi TCB Tool Landscape](https://www.semianalysis.com/p/advanced-packaging-part-3-intels)
[The Future Of Packaging Gets Blurry – Fanouts, ABF, Organic Interposers, Embedded Bridges – Advanced Packaging Part 4](https://www.semianalysis.com/p/the-future-of-packaging-gets-blurry)

[靠「封裝」超越摩爾定律極限？CoWoS 是什麼？蘋果Ｍ系晶片為什麼小又快？台積電的先進封裝聯盟！ - YouTube](https://www.youtube.com/watch?v=MjYBkQ5_uxs)

### Backside Power Delivery

To separate the signal network from the power network, they have different requirements and can be optimized separately. With less layer of metal in the power network, the power delivery is more efficient. Reduced elements on the frontside also allows for reducing complexity of the signal network and futher optimization of signal network and the transistors. So we will have a more efficient chip with better performance and lower power consumption at a reduced cost.

[Intel’s Next Breakthrough: Backside Power Delivery - YouTube](https://www.youtube.com/watch?v=fc_xzN6UErI) PowerVia is the first Backside Power Delivery technology used in production
[Why next-gen chips separate Data & Power - YouTube](https://www.youtube.com/watch?v=hyZlQY2xmWQ)
