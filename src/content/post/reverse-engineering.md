---
title: Reverse Engineering
description: ""
created: 2023-03-01
updated: 2024-09-29
tags:
  - security
---

[[learn-to-code#ABI]]
[[learn-to-code#Assembly]]

[Reverse Engineering - Computerphile - YouTube](https://www.youtube.com/watch?v=9tZmSFjoOm4)
[Quarkslab's blog - Reverse-Engineering](https://blog.quarkslab.com/category/reverse-engineering.html)

Low Level Learning
[Reverse Engineering Adventures - YouTube](https://www.youtube.com/playlist?list=PLc7W4b0WHTAUonBygdM0Lh5iO2tgX64ew)
[reverse engineering makes you a better programmer (let’s try it out) - YouTube](https://www.youtube.com/watch?v=1d-6Hv1c39c)

# Binary Analysis/Malware Analysis/Reverse Engineering

[[learn-to-code#Assembly]]

[Malpedia (Fraunhofer FKIE)](https://malpedia.caad.fkie.fraunhofer.de/)
[rshipp/awesome-malware-analysis: A curated list of awesome malware analysis tools and resources.](https://github.com/rshipp/awesome-malware-analysis)

[[2007.14266] SoK: All You Ever Wanted to Know About x86/x64 Binary Disassembly But Were Afraid to Ask](https://arxiv.org/abs/2007.14266)

["Reverse Engineering for Beginners" free book](http://beginners.re/) [source](https://github.com/dennis714/RE-for-beginners)

[Reverse Engineering 101 - Reverse Engineering - 0x00sec - The Home of the Hacker](https://0x00sec.org/t/reverse-engineering-101/1233)

[Reverse engineering visual novels 101 – Hacker Noon](https://hackernoon.com/reverse-engineering-visual-novels-101-d0bc3bf7ab8)
[Reverse engineering visual novels 101, part 2 – Hacker Noon](https://hackernoon.com/reverse-engineering-visual-novels-101-part-2-9258f547262a)

[Intro to Game Hacking: DEFCON 32 - YouTube](https://www.youtube.com/watch?v=Y0O3SHrBFbE)

[Level Up Your Reverse Engineering Skills – Angular In Depth](https://blog.angularindepth.com/level-up-your-reverse-engineering-skills-8f910ae10630)
[Practical application of reverse-engineering guidelines and principles](https://medium.com/react-in-depth/practical-application-of-reverse-engineering-guidelines-and-principles-784c004bb657)

[Compiler Explorer](https://godbolt.org/) check disassembled code for various languages

John Hammond
[Binary Exploitation Deep Dive: Return to LIBC (with Matt) - YouTube](https://www.youtube.com/watch?v=tMN5N5oid2c) `pwninit`, `patchelf`, `gdb`+`gef`, Ghidra
[Google CTF - BEGINNER Reverse Engineering w/ ANGR - YouTube](https://www.youtube.com/watch?v=RCgEIBfnTEI)
[Malware - YouTube](https://www.youtube.com/playlist?list=PL1H1sBF1VAKWMn_3QPddayIypbbITTGZv)
[Snip3 Crypter/RAT Loader - DcRat MALWARE ANALYSIS - YouTube](https://www.youtube.com/watch?v=ElqmQDySy48)

[Intel® XED](https://intelxed.github.io/)
[intelxed/xed: x86 encoder decoder](https://github.com/intelxed/xed)

[io12/pwninit: pwninit - automate starting binary exploit challenges](https://github.com/io12/pwninit)

[angr](http://angr.io/)
[angr/angr: A powerful and user-friendly binary analysis platform!](https://github.com/angr/angr)

[CyberChef](https://gchq.github.io/CyberChef/)
[gchq/CyberChef: The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis](https://github.com/gchq/CyberChef)

[010 Editor - Pro Text/Hex Editor | Edit 250+ Formats | Fast & Powerful | Reverse Engineering](https://www.sweetscape.com/010editor/)
[010 Editor - Script Repository - Download Scripts](https://www.sweetscape.com/010editor/repository/scripts/)

[OFRAK](https://ofrak.com/docs/)

[mandiant/flare-floss: FLARE Obfuscated String Solver - Automatically extract obfuscated strings from malware.](https://github.com/mandiant/flare-floss)

[Vaughan Hilts - Experimentation with Reverse Engineering - Trails in the Sky (FC / SC) Extracting Sprite Data w/ Unix Tools & Kaitai Struct](http://vaughanhilts.me/blog/2016/11/16/reverse-engineering-trails-in-the-sky-ed-6-game-engine.html)
[Introduction · Radare2 Book](https://radare.gitbooks.io/radare2book/content/)

[Reverse Engineering A Modern IP Camera | Hackaday](https://hackaday.com/2019/03/28/reverse-engineering-a-modern-ip-camera/)
[Reverse Engineering Shimano Bike Electronics | Hackaday](https://hackaday.com/2019/03/26/reverse-engineering-shimano-bike-electronics/)

[Unpatchable 0-day in surveillance cam is being exploited to install Mirai | Ars Technica](https://arstechnica.com/security/2024/08/unpatchable-0-day-in-surveillance-cam-is-being-exploited-to-install-mirai/)
[this is extremely frustrating... - YouTube](https://www.youtube.com/watch?v=OTLAnpsAnEI) IP Camera firmware, `binwalk`, `jffs2`

[KOVTER Malware Analysis - Fileless Persistence in Registry - YouTube](https://www.youtube.com/watch?v=DXlqAH1IV6A)

- loading another user's HKCU (`NTUSER.dat`)
- shellcode, speakeasy

[cojocar/bin2llvm: A binary to LLVM translator](https://github.com/cojocar/bin2llvm)

## Trail of Bits

[Trail of Bits | Open Source](https://www.trailofbits.com/opensource/)

[lifting-bits/remill: Library for lifting machine code to LLVM bitcode](https://github.com/lifting-bits/remill)
[lifting-bits/anvill: anvill forges beautiful LLVM bitcode out of raw machine code](https://github.com/lifting-bits/anvill) uses Remill
[lifting-bits/mcsema: Framework for lifting x86, amd64, aarch64, sparc32, and sparc64 program binaries to LLVM bitcode](https://github.com/lifting-bits/mcsema) 🗃️archived, uses Remill
[lifting-bits/vmill](https://github.com/lifting-bits/vmill) 🗃️archived, uses Remill
[lifting-bits/rellic: Rellic produces goto-free C output from LLVM bitcode](https://github.com/lifting-bits/rellic)

[Magnifier: An Experiment with Interactive Decompilation | Trail of Bits Blog](https://blog.trailofbits.com/2022/08/25/magnifier-an-experiment-with-interactive-decompilation/)
[trailofbits/magnifier](https://github.com/trailofbits/magnifier) 🗃️archived, uses Rellic

## IDA

[IDA Freeware](https://hex-rays.com/ida-free/)

[EVERYONE in Cyber Security Should Understand Reversing (its EASY) - YouTube](https://www.youtube.com/watch?v=gh2RXE9BIN8) ❗!important, C calling convention
[EVERYONE in Cyber Security Should Understand Reversing (its EASY) - YouTube](https://www.youtube.com/watch?v=gh2RXE9BIN8) ❗!important, C calling convention

## Ghidra

[Ghidra](https://ghidra-sre.org/)
[NationalSecurityAgency/ghidra: Ghidra is a software reverse engineering (SRE) framework](https://github.com/NationalSecurityAgency/ghidra)
[lifting-bits/sleigh: Unofficial CMake build for Ghidra SLEIGH](https://github.com/lifting-bits/sleigh)

[Auditing system calls for command injection vulnerabilities using Ghidra's PCode - YouTube](https://www.youtube.com/watch?v=UVNeg7Vqytc) Python integration
[How Ghidra changed my life - Chris Eagle - YouTube](https://www.youtube.com/watch?v=KL1jE9dxas0)
[Getting Started Reversing C++ Objects with Ghidra - YouTube](https://www.youtube.com/watch?v=ir2B1trR0fE)
[HackadayU: Reverse Engineering with Ghidra Class 1 - YouTube](https://www.youtube.com/watch?v=d4Pgi5XML8E)
[Ghidra - Journey from Classified NSA Tool to Open Source - YouTube](https://www.youtube.com/watch?v=kx2xp7IQNSc)
[Reversing WannaCry - YouTube](https://www.youtube.com/playlist?list=PLniOzp3l9V83Yf52IXJTvW9rjstdqkduP)

## Hopper Disassembler

[Hopper](https://www.hopperapp.com/)

## Shellcode

[Shellcode - Wikiwand](https://omni.wikiwand.com/en/Shellcode)
[What is shellcode and how is it used? | TechTarget](https://www.techtarget.com/searchsecurity/answer/What-is-the-relationship-between-shellcode-and-exploit-code)

[Emulation of Malicious Shellcode With Speakeasy | Mandiant](https://www.mandiant.com/resources/blog/emulation-of-malicious-shellcode-with-speakeasy)
[mandiant/speakeasy: Windows kernel and user mode emulation.](https://github.com/mandiant/speakeasy)

## Cutter

[Cutter](https://cutter.re/)

## ELF

[Executable and Linkable Format - Wikiwand](https://omni.wikiwand.com/en/Executable_and_Linkable_Format)
[Global Offset Table - Wikiwand](https://omni.wikiwand.com/en/Global_Offset_Table)

[Making our own executable packer](https://fasterthanli.me/series/making-our-own-executable-packer)
[In-depth: ELF - The Extensible & Linkable Format - YouTube](https://www.youtube.com/watch?v=nC1U1LJQL8o)
[No really, how does Linux run executables? - YouTube](https://www.youtube.com/watch?v=Ia5jyz8sOCM)

[elf: format of Executable and Linking Format (ELF) files | File Formats | Man Pages | ManKier](https://www.mankier.com/5/elf)
[vdso: overview of the virtual ELF dynamic shared object | Miscellanea | Man Pages | ManKier](https://www.mankier.com/7/vdso)
[ld.so: dynamic linker/loader | System Administration | Man Pages | ManKier](https://www.mankier.com/8/ld.so)

[ELF - A Common Lisp library for manipulating ELF files](https://grammatech.github.io/elf/)
[GrammaTech/elf: A Common Lisp library for manipulating ELF files](https://github.com/grammatech/elf)

[Understanding the ELF specimen | Packt Hub](https://hub.packtpub.com/understanding-elf-specimen/)

```sh
readelf <binary>

objdump -d -Mintel <binary>
```

## Windows

[Resource Hacker](https://www.angusj.com/resourcehacker/)

### PE format

[Portable Executable - Wikiwand](https://omni.wikiwand.com/en/Portable_Executable)

[Libpe - a Fast PE32/PE32+ Parsing Library.](https://www.evilsocket.net/2014/02/21/libpe-A-fast-PE32-PE32-parsing-library/)
[evilsocket/libpe: A C/C++ library to parse Windows portable executables written with speed and stability in mind.](https://github.com/evilsocket/libpe)
[gdabah/distorm: Powerful Disassembler Library For x86/AMD64](https://github.com/gdabah/distorm)
[Home · gdabah/distorm Wiki](https://github.com/gdabah/distorm/wiki)

[trailofbits/pe-parse: Principled, lightweight C/C++ PE parser](https://github.com/trailofbits/pe-parse)
[pe-parse/pepy at master · trailofbits/pe-parse](https://github.com/trailofbits/pe-parse/tree/master/pepy)

[Winitor](https://www.winitor.com/download) pestudio
[pestudio-features.pdf](https://www.winitor.com/tools/pestudio/current/pestudio-features.pdf) compute entropy, string extraction
[PeStudio Overview: Setup, Tutorial and Tips](https://www.varonis.com/blog/pestudio)

[Exeinfo PE for Windows - Download it from Uptodown for free](https://exeinfo-pe.en.uptodown.com/windows) detect packing

## C Sharp

[I show you how to Crack a .NET Application (3 clicks) - DEV Community](https://dev.to/dotnetsafer/i-show-you-how-to-crack-a-net-application-3-clicks-47ke)
[dnSpy/dnSpy: .NET debugger and assembly editor](https://github.com/dnSpy/dnSpy)
[Kani](https://decompiler.dotnetsafer.com/) Web decompiler

[icsharpcode/ILSpy: .NET Decompiler with support for PDB generation, ReadyToRun, Metadata (&more) - cross-platform!](https://github.com/icsharpcode/ILSpy)
[Debugging a .NET assembly without the source code with Visual Studio - Meziantou's blog](https://www.meziantou.net/debugging-a-dotnet-assembly-without-the-original-source-code-with-visual-studio.htm)

`ildasm.exe` disasmbler

## Java

[fesh0r/fernflower: Unofficial mirror of FernFlower Java decompiler (All pulls should be submitted upstream)](https://github.com/fesh0r/fernflower)

[mstrobel/procyon: Procyon is a suite of Java metaprogramming tools, including a rich reflection API, a LINQ-inspired expression tree API for runtime code generation, and a Java decompiler.](https://github.com/mstrobel/procyon)
[Java Decompiler · mstrobel/procyon Wiki](https://github.com/mstrobel/procyon/wiki/Java-Decompiler)

[Java Decompiler](http://java-decompiler.github.io/)
[Java Decompiler](https://github.com/java-decompiler)

[Parsing Java Bytecode with Python - YouTube](https://www.youtube.com/watch?v=67FmRyv8jTM) 2:25:53

## Android

[Apktool | Apktool](https://apktool.org/)
[iBotPeaches/Apktool: A tool for reverse engineering Android apk files](https://github.com/iBotPeaches/Apktool)

[skylot/jadx: Dex to Java decompiler](https://github.com/skylot/jadx)
[pxb1988/dex2jar: Tools to work with android .dex and java .class files](https://github.com/pxb1988/dex2jar)

[Java Decompiler](https://java-decompiler.github.io/)
[java-decompiler/jd-gui: A standalone Java Decompiler GUI](https://github.com/java-decompiler/jd-gui)
[jd-wrapper/jd-cli: JD-CLI, a standalone command line Java sources from CLASS files](https://github.com/jd-wrapper/jd-cli)
[intoolswetrust/jd-cli: Command line Java Decompiler](https://github.com/intoolswetrust/jd-cli)

[charles2gan/GDA-android-reversing-Tool: the fastest and most powerful android decompiler(native tool working without Java VM) for the APK, DEX, ODEX, OAT, JAR, AAR, and CLASS file. which supports malicious behavior detection, privacy leaking detection, vulnerability detection, path solving, packer identification, variable tracking, deobfuscation, python&java scripts, device memory extraction, data decryption, and encryption, etc.](https://github.com/charles2gan/GDA-android-reversing-Tool)

[ChickenHook/Anubis-pandemidestek: Anubis malware variant for turkish market - full analysis - SHA256: 231d970ea3195b3ba3e11e390b6def78a1c8eb5f0a8b7dccc0b4ec4aee9292ec](https://github.com/ChickenHook/Anubis-pandemidestek/tree/master)
[Reverse Engineering of the Anubis Malware - ”pandemistek” – intended for the Turkish market – AndroidReverse](https://androidreverse.wordpress.com/2020/06/30/reverse-engineering-of-the-anubis-malware%e2%80%8a-%e2%80%8apandemistek-intended-for-the-turkish-market/)
[Reverse Engineering of the Anubis Malware — Part 1 | by Elliot Alderson | Medium](https://medium.com/@fs0c131y/reverse-engineering-of-the-anubis-malware-part-1-741e12f5a6bd)
[Infection and removal of Android Malware that uses Accessibility services - YouTube](https://www.youtube.com/watch?v=VCCgc7dib7I)

[Android Applications Reversing 101](https://www.evilsocket.net/2017/04/27/Android-Applications-Reversing-101/)
[r0ysue/AndroidSecurityStudy: 安卓应用安全学习](https://github.com/r0ysue/AndroidSecurityStudy)
[Frida 脱壳、自动化、objection、Wallbreaker插件、fridaUiTools-CSDN博客](https://blog.csdn.net/freeking101/article/details/107749541)
[Writing your first Frida script for Android | Cognisys Labs](https://labs.cognisys.group/posts/Writing-your-first-Frida-script-for-Android/)

## Wasm

[What’s in that .wasm? Introducing: wasm-decompile · V8](https://v8.dev/blog/wasm-decompile)

# Dynamic Analysis

[x64dbg](https://x64dbg.com/)

[Cheat Engine](https://www.cheatengine.org/)

[ANY.RUN - Interactive Online Malware Sandbox](https://any.run/)
[Exploring the Latest Malware Samples - YouTube](https://www.youtube.com/watch?v=loZ5fEldBGA)

- MITRE Attack labels
- Malware report

## Frida

[Frida • A world-class dynamic instrumentation toolkit | Observe and reprogram running programs on Windows, macOS, GNU/Linux, iOS, watchOS, tvOS, Android, FreeBSD, and QNX](https://frida.re/)
[frida/frida: Clone this repo to build Frida](https://github.com/frida/frida)
[JavaScript API | Frida • A world-class dynamic instrumentation toolkit](https://frida.re/docs/javascript-api/)
[Go API | Frida • A world-class dynamic instrumentation toolkit](https://frida.re/docs/go-api/)

[dweinstein/awesome-frida: Awesome Frida - A curated list of Frida resources http://www.frida.re/ (https://github.com/frida/frida)](https://github.com/dweinstein/awesome-frida)

[Frida CodeShare](https://codeshare.frida.re/browse)
[rsenet/FriList: Collection of useful FRIDA Mobile Scripts](https://github.com/rsenet/FriList)
[TheBountyBox/Awesmoe-Frida-Scripts: A collection of Awesome Frida Scripts for MAPT](https://github.com/TheBountyBox/Awesmoe-Frida-Scripts)

[0xdea/frida-scripts: A collection of my Frida.re instrumentation scripts to facilitate reverse engineering of mobile apps.](https://github.com/0xdea/frida-scripts)
[Tracing arbitrary Methods and Function calls on Android and iOS | @Mediaservice.net Technical Blog](https://web.archive.org/web/20200623001844/https://techblog.mediaservice.net/2017/09/tracing-arbitrary-methods-and-function-calls-on-android-and-ios/)

[federicodotta/Brida: The new bridge between Burp Suite and Frida!](https://github.com/federicodotta/Brida)

## Kernel Monitor/Sandbox

[Process Monitor - Windows Sysinternals | Microsoft Docs](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon)

[Ghetto Forensics: Noriben - The Portable Sandbox System](https://www.ghettoforensics.com/2013/04/noriben-your-personal-portable-malware.html)
[Rurik/Noriben: Noriben - Portable, Simple, Malware Analysis Sandbox](https://github.com/Rurik/Noriben)

[Fibratus](https://www.fibratus.io/#/)
[rabbitstack/fibratus: Tool for exploration and tracing of the Windows kernel](https://github.com/rabbitstack/fibratus)
[Fibratus Video Teaser – Rabbit Stack](https://rabbitstack.github.io/operating%20systems/fibratus-video-teaser/) run filter or Python filaments
[Fibratus Teaser - YouTube](https://www.youtube.com/watch?v=7Isrn-eb8Ws)

## ReClass.NET

[ReClassNET/ReClass.NET: More than a ReClass port to the .NET platform.](https://github.com/ReClassNET/ReClass.NET)

[Reclass Tutorial - ReClass.NET - How To Reverse Structures - YouTube](https://www.youtube.com/watch?v=vQb21RM9-5M)

## gdb

[[learn-to-code#Debugging]]

[nakst/gf: A GDB frontend for Linux.](https://github.com/nakst/gf)

[cyrus-and/gdb-dashboard: Modular visual interface for GDB in Python](https://github.com/cyrus-and/gdb-dashboard)

[hugsy/gef: GEF (GDB Enhanced Features) - a modern experience for GDB with advanced debugging capabilities for exploit devs & reverse engineers on Linux](https://github.com/hugsy/gef)
[GEF - GDB Enhanced Features documentation](https://hugsy.github.io/gef/)

# USB Protocol

[USB Reverse Engineering: A Universal Guide | Hackaday](https://hackaday.com/2018/05/25/usb-reverse-engineering-a-universal-guide/)
[USB Reverse Engineering: Down the rabbit hole | /dev/alias – Hack. Dev. Transcend.](https://www.devalias.net/devalias/2018/05/13/usb-reverse-engineering-down-the-rabbit-hole/)

[Reverse engineering a USB device with Rust | Harry Gill](https://gill.net.in/posts/reverse-engineering-a-usb-device-with-rust/)
[mygnu/rcue: Corsair H150i PRO, usb userspace driver](https://github.com/mygnu/rcue)

[27c3: USB and libusb (en) - YouTube](https://www.youtube.com/watch?v=SodMHKpykXw&feature=youtu.be)
[28c3: Reverse Engineering USB Devices - YouTube](https://www.youtube.com/watch?v=jMf55KVDPaE)
[Debugging Usually Slightly Broken (USB) Devices and Drivers - Krzysztof Opasiak, Samsung - YouTube](https://www.youtube.com/watch?v=6UHqtbiJX94)
