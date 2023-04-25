---
title: Computer Graphics (Hardware)
description: Computer Graphics on the hardware side
created: 2016-10-18
updated: 2023-03-23
tags:
  - comp.hardware
  - graphics/hardware
---

The requirements for computer graphics stems from rendering games.
See [[computer-graphics-software]] for the software side.

[GPU Hierarchy - Comparison of Graphics Cards for Gaming](http://www.tomshardware.com/reviews/gpu-hierarchy,4388.html)
[GPU Database | TechPowerUp](https://www.techpowerup.com/gpu-specs/) performance comparison

[How Do Graphics Cards Work? - ExtremeTech](https://www.extremetech.com/gaming/269335-how-graphics-cards-work)

RAM of GPU matters the most on high texture and output resolution.

[A REVOLUTION in graphics is coming - YouTube](https://www.youtube.com/watch?v=i537qwchiAw)
[A REVOLUTION in graphics #2 - YouTube](https://www.youtube.com/watch?v=h8H_7VguCzg)
[The History of the Modern Graphics Processor](https://www.techspot.com/article/650-history-of-the-gpu/)
[GPU 博物館給獨立團隊送電腦啦！還採訪了獨立遊戲大佬！ - YouTube](https://www.youtube.com/watch?v=JYJJqzvWd90)

[Scratchapixel](https://www.scratchapixel.com/index.php) Learn Computer Graphics From Scratch!

[ICTGraphicsLab - YouTube](https://www.youtube.com/channel/UCOgm-72B_tibAM2I5j-mBiQ)

## History

> some will touch on game graphics

Ahoy
[A Brief History of Graphics - YouTube](https://www.youtube.com/watch?v=QyjyWUrHsFc)
[A Brief History of Graphics - YouTube](https://www.youtube.com/playlist?list=PLOQZmjD6P2HlOoEVKOPaCFvLnjP865X1f) series

[The 30 Year History of AMD Graphics, In Pictures](http://www.tomshardware.com/picturestory/735-history-of-amd-graphics.html)
[The History Of Nvidia GPUs](http://www.tomshardware.com/picturestory/715-history-of-nvidia-gpus.html)

[GPU Tier List - Nvidia Edition! - YouTube](https://www.youtube.com/watch?v=ykDuoq-MpHg)

[【科技杂谈 79】从 GTX 到 RTX，NVIDIA GEFORCE 显卡家族的历史（1999-2019） - YouTube](https://www.youtube.com/watch?v=UUxUCVlXV0A)
[The Evolution of Nvidia GeForce Graphics (1999-2022) - YouTube](https://www.youtube.com/watch?v=as-aVVm9JZI)

极客湾 Geekerwan
[20 年前的游戏与 PC：探秘 3D 游戏史上最辉煌的岁月（上） - YouTube](https://www.youtube.com/watch?v=TeJ2IFae2-0)
[N 卡是如何崛起的？20 年前的 PC 和游戏（下） - YouTube](https://www.youtube.com/watch?v=JsVfKeJKJu0)
[A 卡崛起之路：重现当年 AN 显卡巅峰对决！ - YouTube](https://www.youtube.com/watch?v=BlI9PVQA8ZA)

## Rendering/Compositor

[Immediate mode (computer graphics) - Wikiwand](<https://www.wikiwand.com/en/Immediate_mode_(computer_graphics)>)
[Retained mode - Wikiwand](https://www.wikiwand.com/en/Retained_mode)

[linebender/2d.graphics: Repo for an ideational book on 2D graphics, plus tools to make images](https://github.com/linebender/2d.graphics)

[2D Graphics on Modern GPU | Raph Levien’s blog](https://raphlinus.github.io/rust/graphics/gpu/2019/05/08/modern-2d.html)
[The compositor is evil | Raph Levien’s blog](https://raphlinus.github.io/ui/graphics/2020/09/13/compositor-is-evil.html)
[Swapchains and frame pacing | Raph Levien’s blog](https://raphlinus.github.io/ui/graphics/gpu/2021/10/22/swapchain-frame-pacing.html)
[How to think about the compositor in 2022 · Issue #77 · raphlinus/raphlinus.github.io](https://github.com/raphlinus/raphlinus.github.io/issues/77)

## Font Rendering

[Text layout is a loose hierarchy of segmentation | Raph Levien’s blog](https://raphlinus.github.io/text/2020/10/26/text-layout.html)
[Minikin retrospective | Raph Levien’s blog](https://raphlinus.github.io/text/2022/11/08/minikin.html)
[Project Minikin](https://raphlinus.github.io/assets/Project_Minikin.pdf)
[Rethinking text layout in Android and beyond [LWN.net]](https://lwn.net/Articles/662569/)

## Antialiasing/Up-sampling/Up-scaling

[Anti-aliasing - Wikiwand](http://www.wikiwand.com/en/Anti-aliasing)
[Spatial anti-aliasing - Wikiwand](http://www.wikiwand.com/en/Spatial_anti-aliasing)
[Glossary:Anti-aliasing (AA) - PCGamingWiki PCGW - bugs, fixes, crashes, mods, guides and improvements for every PC game](<https://www.pcgamingwiki.com/wiki/Glossary:Anti-aliasing_(AA)>)
[TweakGuides.com - Crysis 3 Tweak Guide](http://www.tweakguides.com/Crysis3_6.html)

[upscayl/upscayl: 🆙 Upscayl - Free and Open Source AI Image Upscaler for Linux, MacOS and Windows built with Linux-First philosophy.](https://github.com/upscayl/upscayl)

[Tech Focus: Anti-Aliasing - What Is It And Why Do We Need It? - YouTube](https://www.youtube.com/watch?v=NbrA4Nxd8Vo)

FXAA does AA on full screen post-processing and may introduce blurriness
SMAA based on MLAA post-processing and may add temporal AA to the mix (which causes shadows for slow moving objects) \*
TSSAA/TXAA uses temporal information (previous frames) to do AA, but the averaging may cause blurring/ghosting
MSAA is the traditional approach but takes more resources, only super sample on polygon edges
SSAA super sample AA, super sample on all pixels
DLAA Deep learning Super Sampling (nVidia) AA
DSR Dynamic Super Resolution

[【硬件科普】免费提升画质和帧数？详解 DLSS2.0 的工作原理与作用 - YouTube](https://www.youtube.com/watch?v=Hi5vbf7sdVQ)
[NVIDIA Killed Their Own Premium Products - Can we tell if DLSS 2.0 is on? - YouTube](https://www.youtube.com/watch?v=_s9EFWjM6bg)
[Did Nvidia Just Do Us A Favor? - DLDSR Explained - YouTube](https://www.youtube.com/watch?v=BgL8G1XjrMk)
[免费的性能增强是怎么来的？DLSS/NIS/FSR 技术解析 - YouTube](https://www.youtube.com/watch?v=QN3SAxTSt94)

[GDC 2023: Introducing the FidelityFX SDK with new technologies, an early look at FSR 3 + more! - AMD GPUOpen](https://gpuopen.com/gdc-2023-fidelityfx-sdk-fsr3/)
[AMD FidelityFX Super Resolution, FSR 測試 / 效能提升 畫質稍減 邊緣重建 | XFastest News](https://news.xfastest.com/amd/96855/amd-fidelityfx-super-resolution-fsr/)
[What Is AMD's FSR and What Does it Do?](https://www.makeuseof.com/amd-fsr-explained/)
[AMD FidelityFX Super Resolution Quality Comparison & Benchmarks (FSR) - YouTube](https://www.youtube.com/watch?v=KCzjQ4qP124)
[AMD Radeon Super Resolution vs. FidelityFX Usability & Image Quality Comparison - YouTube](https://www.youtube.com/watch?v=AgFGI8JFo8g)
FSR is opt-in by game dev. RSR is a driver feature.
FSR > RSR
[AMD FSR Based on Modified Lanczos Upscaler, Can Be Enabled On NVIDIA GPUs Using Control Panel For Similar Results In Games](https://wccftech.com/amd-fsr-based-on-modified-lanczos-upscaler-enabled-on-nvidia-gpus-using-control-panel-in-all-games/)

[FSR 2.0 is the complete reboot AMD's upscaling needed | Digital Trends](https://www.digitaltrends.com/computing/fsr-2-complete-reboot-amd-upscaling-needed/)
[After testing AMD FSR 2.0, I'm almost ready to ditch DLSS | Digital Trends](https://www.digitaltrends.com/computing/after-testing-amd-fsr-2-im-almost-ready-to-ditch-dlss/)

[Steam Deck - AMD FidelityFX Super Resolution Upscaling In Any Game... With Gamescope! - YouTube](https://www.youtube.com/watch?v=wxcQFq3k9XI)

## Hardware Scheduling

[Faster Gaming for FREE - Hardware GPU Scheduling Explained - YouTube](https://www.youtube.com/watch?v=47VDnHyCUig)

## Resizable BAR

You'll need

- CPU：10th gen Intel or AMD 5000 series
- GPU：GeForce RTX 3000 or Radeon RX6000 series
- updated BIOS

[GeForce RTX 30 Series Performance Accelerates With Resizable BAR Support | GeForce News | NVIDIA](https://www.nvidia.com/en-us/geforce/news/geforce-rtx-30-series-resizable-bar-support/)
[Resizable BAR explained: How and why it makes your graphics card faster | PCWorld](https://www.pcworld.com/article/394720/faster-gaming-frame-rates-for-free-resizable-bar-explained.html)
[What is Resizable BAR, and should you use it? | Rock Paper Shotgun](https://www.rockpapershotgun.com/what-is-resizable-bar-and-should-you-use-it)
[NVIDIA Resizable BAR 雙平台實測：AMD 加速幅度大，Intel 遊戲表現仍優 | 4Gamers](https://www.4gamers.com.tw/news/detail/47317/nvidia-resizable-bar-performance-test)

## API

[[khronos-group#Vulkan]]

The next gen API all focus on exposing the low level GPU hardware to software developer.

[Reaching Console Performance: Shader Intrinsic Functions | techPowerUp](https://www.techpowerup.com/226960/closer-to-the-metal-shader-intrinsic-functions)
[WTF is going on with DX12 and Vulkan? - YouTube](https://www.youtube.com/watch?v=r0fgEVEgK_k)
[Does DirectX 12 Suck? - YouTube](https://www.youtube.com/watch?v=ApvTaSAG--4)

[WTF is going on with SLI? - YouTube](https://www.youtube.com/watch?v=A91BPapLK38)
Adapters are linked if they are close to the same hardware, unlinked otherwise.
Implicit Mode (linked implicitly) (IMA, Implicit Multiadaptor) is SLI/Crossfire.
Explicit Modes (EMA, Explicit Multiadaptor) can work on linked and unlinked hardware.

[Bridging the synchronization gap on Linux](https://www.collabora.com/news-and-blog/blog/2022/06/09/bridging-the-synchronization-gap-on-linux/) explicit sync for Vulcan API, compositor expects implicit sync

### DX12

[Exclusive: The Nvidia and AMD DirectX 12 Editorial - Complete DX12 Graphic Card List with Specifications, Asynchronous Shaders and Hardware Features Explained](http://wccftech.com/nvidia-amd-directx-12-graphic-card-list-features-explained/) !important
[DirectX 12 tested: An early win for AMD and disappointment for Nvidia | Ars Technica](http://arstechnica.com/gaming/2015/08/directx-12-tested-an-early-win-for-amd-and-disappointment-for-nvidia/)
[Multi-GPU DirectX 12 shootouts show AMD with performance lead over Nvidia | Ars Technica](http://arstechnica.com/gaming/2016/02/directx-12-amd-and-nvidia-gpus-finally-work-together-but-amd-still-has-the-lead/)
[Direct3D 12 Glossary (Windows)](https://msdn.microsoft.com/en-us/library/windows/desktop/dn899119(v=vs.85%29.aspx)

Asynchronous compute shaders in DX12 benefits the most when CPU is the bottleneck

### Mental

[Mantle Graphics API | AMD](http://www.amd.com/mantleen-us/innovations/software-technologies/technologies-gaming/mantle)

[Gaming: One of Mantle's Futures: Vulkan | Community](https://community.amd.com/community/gaming/blog/2015/05/12/one-of-mantles-futures-vulkan) Chronos Group has chosen the best and brightest parts of Mantle to serve as the foundation for "Vulkan"
[Gaming: On APIs and the future of Mantle | Community](https://community.amd.com/community/gaming/blog/2015/05/12/on-apis-and-the-future-of-mantle) AMD recommends DX12 or Vulcan
[Mantle is a Vulkan: AMD's dead graphics API rises from the ashes in OpenGL's successor | PCWorld](http://www.pcworld.com/article/2894036/mantle-is-a-vulkan-amds-dead-graphics-api-rises-from-the-ashes-as-opengls-successor.html)
[AMD's Mantle 1.0 is dead; long live DirectX | PCWorld](http://www.pcworld.com/article/2891672/amds-mantle-10-is-dead-long-live-directx.html)

---

# Hardware

> TODO: merge [[mobile-devices]]'s info here

[GPU Benchmarks Hierarchy - Graphics Card Rankings | Tom's Hardware](https://www.tomshardware.com/reviews/gpu-hierarchy,4388.html)
[Ancient Gameplays - YouTube](https://www.youtube.com/channel/UClxgKTFDjv90AQ_MYWiB1PA)

[Nvidia Ampere vs. AMD RDNA 2: Battle of the Architectures | TechSpot](https://www.techspot.com/article/2151-nvidia-ampere-vs-amd-rdna2/)
[GPU Architecture Deep Dive: AMD RDNA 3, Intel Arc Alchemist and Nvidia Ada Lovelace | TechSpot](https://www.techspot.com/article/2570-gpu-architectures-nvidia-intel-amd/)

[Nvidia Ampere vs. AMD RDNA 2: Battle of the Architectures | TechSpot](https://www.techspot.com/article/2151-nvidia-ampere-vs-amd-rdna2/)
[Deep Dive: AMD RDNA 3, Intel Arc Alchemist and Nvidia Ada Lovelace GPU Architecture | TechSpot](https://www.techspot.com/article/2570-gpu-architectures-nvidia-intel-amd/)

[【Jing 打細算】雙風扇跟三風扇的顯示卡要如何選擇? OC 版本真的值得嗎? - YouTube](https://www.youtube.com/watch?v=BxkG_OizT_Q)
3 fan has 2-4 FPS (~3%) advantage

## NVIDIA

[List of Nvidia graphics processing units - Wikiwand](https://www.wikiwand.com/en/List_of_Nvidia_graphics_processing_units)
[NVIDIA GeForce RTX 3080/3080 Ti: more VRAM, way faster and CHEAPER?!](https://www.tweaktown.com/news/68455/nvidia-geforce-rtx-3080-ti-more-vram-way-faster-cheaper/amp.html)
[NVIDIA 40 系顯卡性能翻倍無壓力：4060 打贏 3080、4070 打贏 3090，價格只是略微上漲「超極氪」 - YouTube](https://www.youtube.com/watch?v=-fdrr8e2YzE)

[NVIDIA 控制面板最佳設置！讓顯卡性能暴漲、遊戲幀數提升的保姆級教程 - YouTube](https://www.youtube.com/watch?v=VqpvqU2I07c)

[什么是「显卡测不准原理」 - YouTube](https://www.youtube.com/watch?v=w8brLACltTw)
1000 Maxwell mixed cores
2000 Turing int + fp cores
3000 Ampere int/fp mixed cores + fp cores

### Multi-Instance GPU (MIG)

[Multi-Instance GPU (MIG) | NVIDIA](https://www.nvidia.com/en-us/technologies/multi-instance-gpu/)
[Multi-Instance GPU — NVIDIA Cloud Native Technologies documentation](https://docs.nvidia.com/datacenter/cloud-native/mig/mig.html)
[Multi-Instance GPU (MIG) :: CUDA Toolkit Documentation](https://docs.nvidia.com/cuda/mig/index.html)

[Multi-Instance GPU (MIG) 設定 | 不務正業工程師的家](https://roychou121.github.io/2020/10/29/nvidia-A100-MIG/)
[透過 MIG-PARTED 管理 MIG | 不務正業工程師的家](https://roychou121.github.io/2021/05/22/nvidia-mig-parted/)

### CLARA

[Healthcare Developer Resources | NVIDIA Developer](https://developer.nvidia.com/industries/healthcare)
[Intelligent Computing for Healthcare | NVIDIA Clara](https://www.nvidia.com/en-us/clara/)
[Build and Deploy AI for Medical Imaging | NVIDIA Clara Imaging](https://www.nvidia.com/en-us/clara/medical-imaging/)
[NVIDIA Clara Documentation](https://docs.nvidia.com/clara/)

[CLARA SDK 介紹 | 不務正業工程師的家](https://roychou121.github.io/2021/02/15/nvidia-clara/)
[Clara Imaging - AIAA 介紹與範例 | 不務正業工程師的家](https://roychou121.github.io/2021/02/15/nvidia-clara-imaging-aiaa/)

### Triton

[Triton Inference Server | NVIDIA Developer](https://developer.nvidia.com/nvidia-triton-inference-server)
[triton-inference-server/server: The Triton Inference Server provides an optimized cloud and edge inferencing solution.](https://github.com/triton-inference-server/server)
[Triton Inference Server: The Basics and a Quick Tutorial](https://www.run.ai/guides/machine-learning-engineering/triton-inference-server)

[Triton Inference Server 介紹與範例 | 不務正業工程師的家](https://roychou121.github.io/2020/07/20/nvidia-triton-inference-server/)
[Triton 分類推論輸出轉成可讀性類別名稱 | 不務正業工程師的家](https://roychou121.github.io/2021/05/22/nvidia-triton-label/)
[Triton 模型壓力測試 | 不務正業工程師的家](https://roychou121.github.io/2021/05/22/nvidia-triton-model-analyzer/)

## AMD

[AMD's next-gen Navi GPU confirmed to support ray tracing](https://www.tweaktown.com/news/65582/amds-next-gen-navi-gpu-confirmed-support-ray-tracing/index.html)

2022's RX6000 series (6nm Navi 24 and Rembrandt) is 2x faster than MX550 at the same TDP.
Radeon's DX11 driver was rewritten in 2022-07 which greatly improved stability and performance

[How to Optimize AMD Radeon Settings For GAMING & Performance The Ultimate GUIDE 2023 - YouTube](https://www.youtube.com/watch?v=E-F7VQSAZuA)
[AMD Says You’re Doing it Wrong. - Best settings for AMD GPUs - YouTube](https://www.youtube.com/watch?v=RxjRyN-4VdI) ReBAR, FSR

[AMD RDNA3 GPU Architecture Deep-Dive: 7900 XTX Drivers, Rasterization, & Ray Tracing - YouTube](https://www.youtube.com/watch?v=9iEDpXyFLFU)

## Intel Integrated Graphics

[Intel UHD Graphics 620 GPU Review - Benchmarks and Specs - NotebookCheck.net Tech](https://www.notebookcheck.net/Intel-UHD-Graphics-620-GPU-Review-Benchmarks-and-Specs.239936.0.html)

[Intel Iris Plus Graphics 655 vs Intel HD Graphics 4600](https://www.notebookcheck.net/Iris-Plus-Graphics-655-vs-HD-Graphics-4600_8828_3567.247598.0.html)
[Iris Plus Graphics 655 vs HD Graphics 4600 [in 6 benchmarks]](https://technical.city/en/video/Iris-Plus-Graphics-655-vs-HD-Graphics-4600)
[UserBenchmark: Intel HD Graphics P4600 vs Iris Plus 655](https://gpu.userbenchmark.com/Compare/Intel-Iris-Plus-Graphics-655-vs-Intel-HD-Graphics-P4600/m543592vsm18483)

## Overclocking/Underclocking

[Nvidia is Clearly Better, Right? - YouTube](https://www.youtube.com/watch?v=mkfFvEeVC4w) Hydra 1.2, RX 6000 undervolt

[AMD RMP 神級超頻工具，讓老 6800XT 顯示卡也能優化媲美 3090Ti | T 客邦](https://www.techbang.com/posts/100496-amd-rmp-overclocking-tool-god-optimizes-6800xt-display-card)
[Hydra 1.2 AMD Ryzen Overclocking & Tuning Utility Ready For Zen 4 CPUs, Now Features 'RX-TUNER' For GPU Tuning Too](https://wccftech.com/hydra-1-2-amd-ryzen-overclocking-tuning-utility-zen-4-cpus-features-rx-tuner-radeon-gpu-tuning-too/)
[[Official] HYDRA (and HYDRA PRO) Thread | Overclock.net](https://www.overclock.net/threads/official-hydra-and-hydra-pro-thread.1796800/)

[How to UNDERVOLT AMD RX 6000 Series GPUs - YouTube](https://www.youtube.com/watch?v=vnWFvKbyA4A)

- ASRock 6700XT: 1100mV, 2400MHz (underclock, the speed at which thermal throttle)
- Try VRAM's "Fast Timing" (may not work)
- Overclock VRAM to 2112MHz
- Increase Power Limit

[This GPU is HOT. Let's fix it for free! (and make it faster while saving you money on electricity) - YouTube](https://www.youtube.com/watch?v=x0dC-VC2lYs)

[Quick & Easy Undervolting | MSI Afterburner Tutorial - YouTube](https://www.youtube.com/watch?v=kh1QsSCt4Xk)
[GTX 1080 undervolted and overclocked : overclocking](https://www.reddit.com/r/overclocking/comments/l409oz/gtx_1080_undervolted_and_overclocked/)

[How To Overclock Your GPU - The Ultimate Easy Guide 2021 🔧 - YouTube](https://www.youtube.com/watch?v=bICK0CFlu9w)
[How To Overclock GPU: From easy to pro! - YouTube](https://www.youtube.com/watch?v=Gdw5jR-XNog)
