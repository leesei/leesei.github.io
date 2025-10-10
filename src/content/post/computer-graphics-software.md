---
title: Computer Graphics (Software)
description: Computer Graphics on the software side, the how and whys, also on how games are rendered
created: 2015-08-31
updated: 2025-07-07
tags:
  - games
  - graphics/software
---

The requirements for computer graphics stems from rendering games.
See [[computer-graphics-hardware]] for the hardware side.
See [[3d-graphics]] for tools and specific techniques.

## Rendering

[How Rendering Graphics Works in Games! - YouTube](https://www.youtube.com/watch?v=cvcAjgMUPUA)
[How do Video Game Graphics Work? - YouTube](https://www.youtube.com/watch?v=C8YtdC8mxTU)
[Video Game Graphics Peaked... 8 Years ago - YouTube](https://www.youtube.com/watch?v=WAH9kTG5C6w)

[Jasper - YouTube](https://www.youtube.com/@JasperRLZ) mostly on console rendering engine
[noclip](https://noclip.website/#) Nintendo game assets
[How scrolling textures gave Super Mario Galaxy 2 its charm - YouTube](https://www.youtube.com/watch?v=8rCRsOLiO7k)
[How The Wind Waker Redefined Cel Shading - YouTube](https://www.youtube.com/watch?v=mnxs6CR6Zrk)
[Why Did Link's Cel Shading Disappear? - YouTube](https://www.youtube.com/watch?v=By7qcgaqGI4)

Deferred Lighting/Deferred Shading

1. unlit rendering pass
   outputs 2D image and normal buffer/normal map (left/right, up/down, front/back normals encoded in each of RGB channels)
2. lighting pass

## The 8-bit Guy

[How "oldschool" graphics worked Part 1 - Commodore and Nintendo - YouTube](https://www.youtube.com/watch?v=Tfh0ytz8S0k)
[How "oldschool" graphics work, part 2 - Apple and Atari - YouTube](https://www.youtube.com/watch?v=_rsycfDliZU)
Color cells: segmenting the whole screen into smaller cells (say 8x8), each cells can render two colors.
Sprite: image rendered on separate layer

[CGA Graphics - Not as bad as you thought! - YouTube](https://www.youtube.com/watch?v=niKblgZupOc) composite and RGBI mode of the CGA era
[How Oldschool Sound/Music worked - YouTube](https://www.youtube.com/watch?v=q_3d1x2VPxk)

## Scaling

[Pixel Art Scaling Comparison Part I | Unindented](https://unindented.org/articles/pixel-art-scaling-comparison-part-1/)
[Pixel Art Scaling Comparison Part II | Unindented](https://unindented.org/articles/pixel-art-scaling-comparison-part-2/)

## Frame-rate and Fluency

[[displays#High Refresh Rate]]

[帧数和流畅的那些事（上） - YouTube](https://www.youtube.com/watch?v=O5w9odp3n48)

- motion blur
- input feedback
- stable frame time

[Frame Rates - YouTube](https://www.youtube.com/watch?v=Rjdmi7628GM)
[帧数与硬件的谍战：揭秘显卡掉帧陷阱！——帧数与流畅度 2【GAMKER】 - YouTube](https://www.youtube.com/watch?v=5mwMLSLcq1Q) ❗!important game setting

[超高幀數真能帶來優勢嗎？幀數超過刷新率是浪費嗎？【Gamker 攻殼】 - YouTube](https://www.youtube.com/watch?v=eUBZfpN2bG8)
[【极客周刊】玩游戏为何要 60 帧才流畅，电影却只需 24 帧？ - YouTube](https://www.youtube.com/watch?v=--OKrYxOb6Y)
[为什么 24 帧的电影很顺畅，30 帧的游戏没法儿玩？24 FPS Movie and 30 FPS Game【柴知道 ChaiKnows】【科普 Science】【冷知识 Trivia】 - YouTube](https://www.youtube.com/watch?v=5hKhEX7vODU)
[【聊電 Jing】什麼是 1% & 0.1% Lows 為何它比平均 FPS 還要更重要? - YouTube](https://www.youtube.com/watch?v=hR4zl3RKWH8)
[【硬件科普】游戏帧数越高越流畅？未必！详解1%low帧和流畅度 - YouTube](https://www.youtube.com/watch?v=2cnR0VhXcw0)
[影视飓风将停止制作25帧视频 - YouTube](https://www.youtube.com/watch?v=2JwPbNivR2k)

[手机插帧芯片 MEMC 有意义吗？「硬核显示技术第五期」详解一加 8Pro 的 MEMC 插帧补偿技术 - YouTube](https://www.youtube.com/watch?v=5hBy7VHC3Q4)
[Topaz Labs: AI Image Quality Software](https://www.topazlabs.com/)
[The ultimate guide to 60 fps frame rate conversion in 2022](https://www.topazlabs.com/learn/the-ultimate-guide-to-60-fps-frame-rate-conversion-in-2021)

[超高幀數真能帶來優勢嗎？幀數超過刷新率是浪費嗎？【Gamker 攻殼】 - YouTube](https://www.youtube.com/watch?v=eUBZfpN2bG8)
[【极客周刊】玩游戏为何要 60 帧才流畅，电影却只需 24 帧？ - YouTube](https://www.youtube.com/watch?v=--OKrYxOb6Y)
[为什么 24 帧的电影很顺畅，30 帧的游戏没法儿玩？24 FPS Movie and 30 FPS Game【柴知道 ChaiKnows】【科普 Science】【冷知识 Trivia】 - YouTube](https://www.youtube.com/watch?v=5hKhEX7vODU)
[【聊電 Jing】什麼是 1% & 0.1% Lows 為何它比平均 FPS 還要更重要? - YouTube](https://www.youtube.com/watch?v=hR4zl3RKWH8)

[Does High FPS make you a better gamer? Ft. Shroud - FINAL ANSWER - YouTube](https://www.youtube.com/watch?v=OX31kZbAXsA)
[Does 240Hz Matter for Gaming ft. Gav from Slow Mo Guys - YouTube](https://www.youtube.com/watch?v=tV8P6T5tTYs)
[What's the Resolution and Refresh Rate of Your Eyes? - YouTube](https://www.youtube.com/watch?v=e_CbbAbf7gE)
[PC Setup Customization: Refresh Rate - YouTube](https://www.youtube.com/watch?v=ruw36VMtAPQ)

[Game timers: Issues and solutions of variable framerate](http://fabiensanglard.net/timer_and_framerate/index.php)
[Tested: Graphics settings and how they affect performance - YouTube](https://www.youtube.com/watch?v=DW2m14vzFM8)

- Shadow, High+
- AA, SMAA, High+
- Occlusion, SSAO (HBAO, VXAO too demanding)
- Tessellation, Mid+
- Anisotropic Filtering, 16X or Max, works with texture quality

nVidia Settings

- Power management mode: Prefer maximum performance
- Texture filtering - Quality: High performance

### Frame Rate Monitoring

[How to See Your Frames Per Second (FPS) in Games | PCMag](https://www.pcmag.com/how-to/how-to-see-your-frames-per-second-fps-in-games)
MSI Afterburner w/ RivaTuner Statistics Server

[MangoHud · frostworx/steamtinkerlaunch Wiki](https://github.com/frostworx/steamtinkerlaunch/wiki/MangoHud) RivaTuner
[GOverlay](https://www.goverlay.com/)

[Intel's Major Overhaul for CPU & GPU Benchmarking | "GPU Busy" & Pipeline Technical Discussion - YouTube](https://www.youtube.com/watch?v=5hAy5V91Hr4)

[GameTechDev/PresentMon: Tool for collection and processing of ETW events related to frame presentation on Windows.](https://github.com/GameTechDev/PresentMon)
[Intel® Arc™ Graphics - PresentMon](https://game.intel.com/story/intel-presentmon/)
[MSI Afterburner Overlay Customization Guide | Gaming PC Builder](https://www.gamingpcbuilder.com/msi-afterburner-overlay-customization-guide/)

To backup OSD settings:

- `.\Profiles` overclocking settings
- `.\Bundle\OSDServer\Profiles` OSD settings

[DevTechProfile/CapFrameX: Frametime capture and analysis tool](https://github.com/DevTechProfile/CapFrameX)

[OCAT - GPUOpen](https://gpuopen.com/ocat/)

[CPU and GPU Bottleneck: A Detailed Guide to Bottlenecking in 2019](https://www.wepc.com/tips/cpu-gpu-bottleneck/)
