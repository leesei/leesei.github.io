---
title: Enigma Machine
description: ""
created: 2023-03-06
updated: 2023-09-29
tags:
  - crypto
  - cryptography
  - enigma
  - security
---

[Enigma machine - Wikiwand](https://www.wikiwand.com/en/Enigma_machine)
[Cryptanalysis of the Enigma - Wikiwand](https://www.wikiwand.com/en/Cryptanalysis_of_the_Enigma)

M1 and M3 have 3 rotor slots, M4 has 4 rotor slots.
Each rotor slot houses one of the eight _Rotors_ (labeled in Roman numerals, the extra one for M4 labeled with Greek letters). The right _Rotor_ steps each time a letter is typed. Each _Rotor_ have notches at different positions to cause the _Rotor_ on the left to step when itself done a full revolution, the middle rotor has optional "double stepping" which will also step itself when doing so. The starting _Rotor_ location and order is called _Ground/Order Settings_. The inner ring of each _Rotor_ can be set to a different offset, this is the _Ring Settings_.
There are three choices of _Reflector_ (A, B and C) that takes the input and feed it through the _Rotors_ again.
There is also a _Plugboard_ which will swap two letters before feeding into the _Fixed Rotor_.
The _Reflector_ and _Rotors_ selected, _Ground Settings_, _Ring Settings_ and the _Plugboard_ config have to be kept in sync when encoding and decoding the message. The setting is changed daily and the setting table will change monthly. The operator will send his own _Rotor_ settings using the _Ground Settings_ before each message.
Enigma machine is essentially a symmetric cryptography with the initial setup as key.

[How Enigma Machines Work](http://enigma.louisedade.co.uk/howitworks.html)
[TechStuff Ponders an Enigma | TechStuff Podcast](https://www.techstuffpodcast.com/podcasts/techstuff-ponders-an-enigma.htm)
[Further Reading about Enigma and Codebreaking](http://enigma.louisedade.co.uk/furtherreading.html)

[BBC - History - Enigma (pictures, video, facts & news)](http://www.bbc.co.uk/history/topics/enigma)
[Enigma History](http://www.cryptomuseum.com/crypto/enigma/hist.htm)
[Cipher Machines](https://ciphermachines.com/enigma)
[Enigma Museum – All Things Enigma](https://enigmamuseum.com/)
[The Enigma cipher machine](https://www.codesandciphers.org.uk/enigma/index.htm)
[AMS :: Feature Column from the AMS](https://www.ams.org/publicoutreach/feature-column/fcarc-enigma)

[烽火後的暗戰，密碼學家之戰的頂尖交鋒，打破德國最驕傲的機器 - YouTube](https://www.youtube.com/watch?v=yqfg02ThSWw) Poland has been decrypting Enigma messages with the Bomb Machine in 2 hours during 1933-38, MI6 continued the work after the Enigma upgrade in 1938 and Poland was invaded
[Marian Rejewski - Wikiwand](https://www.wikiwand.com/en/Marian_Rejewski)
[Polish Mathematicians Finding Patterns in Enigma Messages](https://maa.org/sites/default/files/pdf/upload_library/22/Allendoerfer/christensen247.pdf) PDF

[Bletchley Park | Home](https://bletchleypark.org.uk/) the villa where the team of Mathematicians breaks the Enigma machine
[The Enigma and the Bombe](http://www.ellsbury.com/enigmabombe.htm)
[The Turing Bombe](https://bombe.org.uk/)
[Alan Turing and Enigma - YouTube](https://www.youtube.com/playlist?list=PLzH6n4zXuckodsatCTEuxaygCHizMS0_I) Computerphile

[【计算机博物志】战争密码（上集）如何复刻一台恩格玛机 - YouTube](https://www.youtube.com/watch?v=pWwyb64az9M)
[【计算机博物志】战争密码（中集）蝴蝶的翅膀 - YouTube](https://www.youtube.com/watch?v=pwwGzJAmJWk)
[【计算机博物志】战争密码（下集）炸弹机 - YouTube](https://www.youtube.com/watch?v=819seFJGohY)

[The Inner Workings of an Enigma Machine - YouTube](https://www.youtube.com/watch?v=mcX7iO_XCFA)
[How did the Enigma Machine work? - YouTube](https://www.youtube.com/watch?v=ybkkiGtJmkM) hardware
[【不止遊戲】二戰德軍號稱「謎」的密碼機，究竟是如何使用的？ - YouTube](https://www.youtube.com/watch?v=kE3Xb-XH8NU)

Numberphile
[158,962,555,217,826,360,000 (Enigma Machine) - Numberphile - YouTube](https://www.youtube.com/watch?annotation_id=annotation_777706&feature=iv&src_vid=V4V2bpZlqx8&v=G2_Q9FoD-oQ)
[Flaw in the Enigma Code - Numberphile - YouTube](https://www.youtube.com/watch?v=V4V2bpZlqx8)

## Emulator

[Enigma Machine Emulator](http://enigma.louisedade.co.uk/)
[Emulator Help](http://enigma.louisedade.co.uk/help.html) How the emulator worked
[JavaScript Source Code for the Enigma Machine](http://enigma.louisedade.co.uk/jssource.html)

[Enigma Simulation in Javascript/HTML](http://people.physik.hu-berlin.de/~palloks/js/enigma/index_en.html) also lots of info

[The Enigma machine: Encrypt and decrypt online — Cryptii](https://cryptii.com/enigma-machine)
[Enigma decoder: Decrypt and translate enigma online — Cryptii](https://cryptii.com/enigma-decoder)

[mikepound/enigma: A java implementation of Enigma, and a modern attack to decrypt it.](https://github.com/mikepound/enigma)

## Modern attempts

[Cracking Enigma in 2021 - Computerphile - YouTube](https://www.youtube.com/watch?v=RzWB5jL5RX0)

[How 2,000 Droplets Broke the Enigma Code in 13 Minutes](https://blog.digitalocean.com/how-2000-droplets-broke-the-enigma-code-in-13-minutes/)
[How we cracked the Enigma code using Artificial Intelligence | Lukasz Kuncewicz | Pulse | LinkedIn](https://www.linkedin.com/pulse/how-we-cracked-enigma-code-using-artificial-lukasz-kuncewicz/)
[Cracking the world famous Enigma Machine with artificial intelligence in just 13 minutes - BT](http://home.bt.com/tech-gadgets/enigma-machine-cracking-artificial-intelligence-11364235568160)

## DIY

[OctaPi: brute-force Enigma - Introduction | Raspberry Pi Projects](https://projects.raspberrypi.org/en/projects/octapi-brute-force-enigma/)
[Put an Arduino Enigma in Your Pocket | Hackaday](https://hackaday.com/2019/03/28/put-an-arduino-enigma-in-your-pocket/)
[Building an Enigma – Skippy's Random Ramblings](https://skippy.org.uk/building-an-enigma/)
[Enigma-E](https://www.cryptomuseum.com/kits/enigma/)
