---
title: Computer Fundamentals
description: ""
created: 2023-04-14
tags:
  - comp.hardware
  - comp.lang
---

# Computer Fundamentals

[Computer Science - YouTube](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo)
[How do computers read code? - YouTube](https://www.youtube.com/watch?v=QXjU9qTsYCc) compiling source code to machine code

[Programming Languages - YouTube](https://www.youtube.com/playlist?list=PL7141DE955793D3F0)
[Hardware Basics - YouTube](https://www.youtube.com/watch?v=9-KUm9YpPm0)
[Operating System Basics - YouTube](https://www.youtube.com/watch?v=9GDX-IyZ_C8)
[Basics of OS | Chapter-1 | Operating System - YouTube](https://www.youtube.com/playlist?list=PLBlnK6fEyqRhDsKg2oXhVuN5z_1ysjJyg)

[[floating-point-number]]
[[unicode]]

[Imperative vs Declarative Scenarios in User Stories • Ben Mabey](http://benmabey.com/2008/05/19/imperative-vs-declarative-scenarios-in-user-stories.html)
[Threads vs. Processes: A Look At How They Work Within Your Program](https://www.backblaze.com/blog/whats-the-diff-programs-processes-and-threads/)

Computerphile
[Multi Programming - Computerphile - YouTube](https://www.youtube.com/watch?v=MB0yDMQj1lU)
[OS Context Switching - Computerphile - YouTube](https://www.youtube.com/watch?v=DKmBRl8j3Ak)
[Multithreading Code - Computerphile - YouTube](https://www.youtube.com/watch?v=7ENFeb-J75k)
[Multiple Processor Systems - Computerphile - YouTube](https://www.youtube.com/watch?v=3RvkfuXUv1c)
[GUI Programming Introduction - Computerphile - YouTube](https://www.youtube.com/watch?v=odjdWym0t4I)
[GUI: Under the Hood - Computerphile - YouTube](https://www.youtube.com/watch?v=ptcHHXp1PEU)

[An Analysis of Hash Map Implementations in Popular Languages](https://rcoh.me/posts/hash-map-analysis/)
[Why Linked Lists vs Arrays isn’t a real choice - YouTube](https://www.youtube.com/watch?v=34ky600VTN0)
[Hash Tables, Associative Arrays, and Dictionaries (Data Structures and Optimization) - YouTube](https://www.youtube.com/watch?v=S5NY1fqisSY)

## Computer History

[【亦】唠唠计算机与 AI 的童年：大器晚成！六一儿童节特别篇 - YouTube](https://www.youtube.com/watch?v=-kGy0_8n68Y) history of computer
[Intel predicted the future - YouTube](https://www.youtube.com/watch?v=5-eFLcCDNo8) Intel's education material from 1996

[GeekLogic / 极客逻辑 - YouTube](https://www.youtube.com/@geeklogic)
[XMF-I Restoration: A Chinese Apple II Clone 35 Years Ago / 极限修复！35 年前清华大学研制点错科技树的中文电脑 - YouTube](https://www.youtube.com/watch?v=EGc8j9_w4FQ)

## How program runs

[[reverse-engineering#ELF]]
[[reverse-engineering#PE format]]

[CppCon 2018: Matt Godbolt “The Bits Between the Bits: How We Get to main()” - YouTube](https://www.youtube.com/watch?v=dOfucXtyEsU) ELF

[Chris's Wiki :: blog/linux/32BitProgramOn64BitSystem](https://utcc.utoronto.ca/~cks/space/blog/linux/32BitProgramOn64BitSystem)

## Memory Hierarchy/Memory Management

[How Computer Memory Works - YouTube](https://www.youtube.com/playlist?list=PLzH6n4zXuckoxFPyhsMOYMGqyZOeN2SDJ)
[What's Virtual Memory? - Computerphile - YouTube](https://www.youtube.com/watch?v=5lFnKYCZT5o)

[How does Computer Memory Work? 💻🛠 - YouTube](https://www.youtube.com/watch?v=7J7X7aZvMXQ)
[Building the Bits and Qubits - YouTube](https://www.youtube.com/watch?v=F8U1d2Hqark)

[Memory, Cache Locality, and why Arrays are Fast (Data Structures and Optimization) - YouTube](https://www.youtube.com/watch?v=247cXLkYt2M)
[The Origins of Process Memory | Exploring the Use of Various Memory Allocators in Linux C - YouTube](https://www.youtube.com/watch?v=c7xf5dvUb_Q)

[What's a Memory Allocator Anyway? - Benjamin Feng - YouTube](https://www.youtube.com/watch?v=vHWiDx_l4V0)
[Garbage Collection (Mark & Sweep) - Computerphile - YouTube](https://www.youtube.com/watch?v=c32zXYAK7CI)

[🚀 Demystifying memory management in modern programming languages | Technorage](https://deepu.tech/memory-management-in-programming/)
[🚀 Visualizing memory management in Golang | Technorage](https://deepu.tech/memory-management-in-golang/)
[🚀 Visualizing memory management in V8 Engine (JavaScript, NodeJS, Deno, WebAssembly) | Technorage](https://deepu.tech/memory-management-in-v8/)

## Endianness

[Endianness - Wikiwand](https://www.wikiwand.com/en/Endianness)
[Number format - Microsoft MakeCode](https://makecode.microbit.org/types/buffer/number-format)

'0xA0 0xB0' in memory could be:  
signed LE: -20320
unsigned LE: 45216
signed BE: -24400
unsigned BE: 41136

```python
f =  open('test.bin','wb')
f.write(b'\xA0\xB0')
f.close()
```
