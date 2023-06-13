---
title: Reverse Engineering
description: ""
created: 2023-03-01
tags:
  - security
---

[[learn-to-code#ABI]]
[[learn-to-code#Assembly]]

[Reverse Engineering - Computerphile - YouTube](https://www.youtube.com/watch?v=9tZmSFjoOm4)
[Quarkslab's blog - Reverse-Engineering](https://blog.quarkslab.com/category/reverse-engineering.html)

# Binary Analysis/Malware Analysis/Reverse Engineering

[[learn-to-code#Assembly]]

[rshipp/awesome-malware-analysis: A curated list of awesome malware analysis tools and resources.](https://github.com/rshipp/awesome-malware-analysis)

["Reverse Engineering for Beginners" free book](http://beginners.re/) [source](https://github.com/dennis714/RE-for-beginners)

[Reverse engineering visual novels 101 – Hacker Noon](https://hackernoon.com/reverse-engineering-visual-novels-101-d0bc3bf7ab8)
[Reverse engineering visual novels 101, part 2 – Hacker Noon](https://hackernoon.com/reverse-engineering-visual-novels-101-part-2-9258f547262a)

[Level Up Your Reverse Engineering Skills – Angular In Depth](https://blog.angularindepth.com/level-up-your-reverse-engineering-skills-8f910ae10630)
[Practical application of reverse-engineering guidelines and principles](https://medium.com/react-in-depth/practical-application-of-reverse-engineering-guidelines-and-principles-784c004bb657)

[Compiler Explorer](https://godbolt.org/) check disassembled code for various languages

[Binary Exploitation Deep Dive: Return to LIBC (with Matt) - YouTube](https://www.youtube.com/watch?v=tMN5N5oid2c) `pwninit`, `patchelf`, `gdb`+`gef`, Ghidra
[Google CTF - BEGINNER Reverse Engineering w/ ANGR - YouTube](https://www.youtube.com/watch?v=RCgEIBfnTEI)
[Snip3 Crypter/RAT Loader - DcRat MALWARE ANALYSIS - YouTube](https://www.youtube.com/watch?v=ElqmQDySy48)

[io12/pwninit: pwninit - automate starting binary exploit challenges](https://github.com/io12/pwninit)

[angr](http://angr.io/)
[angr/angr: A powerful and user-friendly binary analysis platform!](https://github.com/angr/angr)

[CyberChef](https://gchq.github.io/CyberChef/)
[gchq/CyberChef: The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis](https://github.com/gchq/CyberChef)

[OFRAK](https://ofrak.com/docs/)

[Vaughan Hilts - Experimentation with Reverse Engineering - Trails in the Sky (FC / SC) Extracting Sprite Data w/ Unix Tools & Kaitai Struct](http://vaughanhilts.me/blog/2016/11/16/reverse-engineering-trails-in-the-sky-ed-6-game-engine.html)

[Introduction · Radare2 Book](https://radare.gitbooks.io/radare2book/content/)

[Reverse Engineering A Modern IP Camera | Hackaday](https://hackaday.com/2019/03/28/reverse-engineering-a-modern-ip-camera/)
[Reverse Engineering Shimano Bike Electronics | Hackaday](https://hackaday.com/2019/03/26/reverse-engineering-shimano-bike-electronics/)

## IDA

[IDA Freeware](https://hex-rays.com/ida-free/)

[EVERYONE in Cyber Security Should Understand Reversing (its EASY) - YouTube](https://www.youtube.com/watch?v=gh2RXE9BIN8) ❗!important, C calling convention
[EVERYONE in Cyber Security Should Understand Reversing (its EASY) - YouTube](https://www.youtube.com/watch?v=gh2RXE9BIN8) ❗!important, C calling convention

## Ghidra

[Ghidra](https://ghidra-sre.org/)
[NationalSecurityAgency/ghidra: Ghidra is a software reverse engineering (SRE) framework](https://github.com/NationalSecurityAgency/ghidra)
[Auditing system calls for command injection vulnerabilities using Ghidra's PCode - YouTube](https://www.youtube.com/watch?v=UVNeg7Vqytc) Python integration
[How Ghidra changed my life - Chris Eagle - YouTube](https://www.youtube.com/watch?v=KL1jE9dxas0)
[Getting Started Reversing C++ Objects with Ghidra - YouTube](https://www.youtube.com/watch?v=ir2B1trR0fE)
[HackadayU: Reverse Engineering with Ghidra Class 1 - YouTube](https://www.youtube.com/watch?v=d4Pgi5XML8E)
[Ghidra - Journey from Classified NSA Tool to Open Source - YouTube](https://www.youtube.com/watch?v=kx2xp7IQNSc)
[Reversing WannaCry - YouTube](https://www.youtube.com/playlist?list=PLniOzp3l9V83Yf52IXJTvW9rjstdqkduP)

## Cutter

[Cutter](https://cutter.re/)

## ELF

[Executable and Linkable Format - Wikiwand](https://www.wikiwand.com/en/Executable_and_Linkable_Format)
[Executable and Linkable Format - Wikiwand](https://www.wikiwand.com/en/Executable_and_Linkable_Format)
[Global Offset Table - Wikiwand](https://www.wikiwand.com/en/Global_Offset_Table)

[In-depth: ELF - The Extensible & Linkable Format - YouTube](https://www.youtube.com/watch?v=nC1U1LJQL8o)

[elf: format of Executable and Linking Format (ELF) files | File Formats | Man Pages | ManKier](https://www.mankier.com/5/elf)
[vdso: overview of the virtual ELF dynamic shared object | Miscellanea | Man Pages | ManKier](https://www.mankier.com/7/vdso)
[ld.so: dynamic linker/loader | System Administration | Man Pages | ManKier](https://www.mankier.com/8/ld.so)

[ELF - A Common Lisp library for manipulating ELF files](http://eschulte.github.io/elf/)
[eschulte/elf: Actively maintained at https://github.com/grammatech/elf](https://github.com/eschulte/elf)

[Understanding the ELF specimen | Packt Hub](https://hub.packtpub.com/understanding-elf-specimen/)

```sh
readelf <binary>

objdump -d -Mintel <binary>
```

## PE format

[Portable Executable - Wikiwand](https://www.wikiwand.com/en/Portable_Executable)

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

[Java Decompiler](http://java-decompiler.github.io/)
[Java Decompiler](https://github.com/java-decompiler)

[Parsing Java Bytecode with Python - YouTube](https://www.youtube.com/watch?v=67FmRyv8jTM) 2:25:53

## Android

[skylot/jadx: Dex to Java decompiler](https://github.com/skylot/jadx)

[ChickenHook/Anubis-pandemidestek: Anubis malware variant for turkish market - full analysis - SHA256: 231d970ea3195b3ba3e11e390b6def78a1c8eb5f0a8b7dccc0b4ec4aee9292ec](https://github.com/ChickenHook/Anubis-pandemidestek/tree/master)
[Reverse Engineering of the Anubis Malware - ”pandemistek” – intended for the Turkish market – AndroidReverse](https://androidreverse.wordpress.com/2020/06/30/reverse-engineering-of-the-anubis-malware%e2%80%8a-%e2%80%8apandemistek-intended-for-the-turkish-market/)

[Reverse Engineering of the Anubis Malware — Part 1 | by Elliot Alderson | Medium](https://medium.com/@fs0c131y/reverse-engineering-of-the-anubis-malware-part-1-741e12f5a6bd)
[Infection and removal of Android Malware that uses Accessibility services - YouTube](https://www.youtube.com/watch?v=VCCgc7dib7I)

## Wasm

[What’s in that .wasm? Introducing: wasm-decompile · V8](https://v8.dev/blog/wasm-decompile)

# Dynamic Analysis

[x64dbg](https://x64dbg.com/)

[Cheat Engine](https://www.cheatengine.org/)

## ReClass.NET

[ReClassNET/ReClass.NET: More than a ReClass port to the .NET platform.](https://github.com/ReClassNET/ReClass.NET)

[Reclass Tutorial - ReClass.NET - How To Reverse Structures - YouTube](https://www.youtube.com/watch?v=vQb21RM9-5M)

## GEF

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
