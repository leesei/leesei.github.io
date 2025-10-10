---
title: Post Quantum Cryptography
description: ""
created: 2025-03-24
updated: 2025-10-10
tags:
  - crypto
  - cryptography
  - post-quantum
  - pqc
  - security
---

[Post-quantum cryptography - Wikiwand](https://www.wikiwand.com/en/articles/Post-quantum_cryptography)
[后量子密码学 - Wikiwand](https://www.wikiwand.com/zh-hk/articles/%E5%90%8E%E9%87%8F%E5%AD%90%E5%AF%86%E7%A0%81%E5%AD%A6)

CRQC: Cryptographically Relevant Quantum Computer
Q-Day: when CRQC is widely available

[How NIST's New PQC Algorithms Impact You | Encryption Consulting](https://www.encryptionconsulting.com/whats-the-impact-on-you-with-nists-new-release-of-pqc-algorithms/)
[PQC for non-cryptographers – Key Material](https://keymaterial.net/2024/08/30/pqc-for-non-cryptographers/)
[PQC-Almanac.pdf](https://downloads.bouncycastle.org/java/docs/PQC-Almanac.pdf) 2025-04-11
[The state of the post-quantum Internet](https://blog.cloudflare.com/pq-2024/) 2024-03,❗!important, history, KEX and signature

[10 Step Checklist For Tech Leaders: Simplify Your Transition to New NIST Algorithms](https://www.keyfactor.com/resources/content/10-step-checklist-simplify-your-transition-to-new-nist-algorithms)
[SoK: How (not) to Design and Implement Post-Quantum Cryptography](https://eprint.iacr.org/2021/462)

[Post-Quantum Use In Protocols (pquip)](https://datatracker.ietf.org/wg/pquip/documents/) ❗!important, IETF
[draft-ietf-pquip-pqc-engineers - Post-Quantum Cryptography for Engineers](https://datatracker.ietf.org/doc/html/draft-ietf-pquip-pqc-engineers/) timeline
[draft-ietf-pquip-hybrid-signature-spectrums - Hybrid signature spectrums](https://datatracker.ietf.org/doc/html/draft-ietf-pquip-hybrid-signature-spectrums/)
[draft-ietf-pquip-pqc-hsm-constrained - Adapting Constrained Devices for Post-Quantum Cryptography](https://datatracker.ietf.org/doc/html/draft-ietf-pquip-pqc-hsm-constrained/)

[Chromium Blog: Advancing Our Amazing Bet on Asymmetric Cryptography](https://blog.chromium.org/2024/05/advancing-our-amazing-bet-on-asymmetric.html)
[Closure | Post-quantum cryptography is too damn big.](https://dadrian.io/blog/posts/pqc-signatures-2024/)

Factoring problem, the discrete logarithm problem, and the period-finding problem, can be solved efficiently (in polynomial time) with general-purpose quantum computer, known as a Cryptographically Relevant Quantum Computer (CRQC).
This makes asymmetric cryptographic algorithms like RSA, ECC, DH vulnerable to CRQC's attack.
[Shor's algorithm - Wikiwand](https://www.wikiwand.com/en/articles/Shor's_algorithm)
[Demonstration of Shor’s factoring algorithm for N $$=$$ 21 on IBM quantum processors | Scientific Reports](https://www.nature.com/articles/s41598-021-95973-w)
[How Quantum Computers Break Encryption | Shor's Algorithm Explained - YouTube](https://www.youtube.com/watch?v=lvTqbM5Dq4Q)
[How Quantum Computers Break The Internet... Starting Now - YouTube](https://www.youtube.com/watch?v=-UrdExQW0cs) RSA and Shor's Algorithm, Lattice PQC
[Cost analysis of hash collisions: Will quantum computers make SHARCS obsolete?](https://cr.yp.to/hash/collisioncost-20090823.pdf)

Authenticated cipher (AEAD) such as AES-GCM are considered quantum resilient with enough key length.

[KEMs and Post-Quantum age](https://words.filippo.io/dispatches/post-quantum-age/)
[Understanding Post-Quantum Cryptography | Entrust](https://www.entrust.com/resources/learn/post-quantum-cryptography)
[Post-quantum Cryptography (PQC): New Algorithms for a New Era - Rambus](https://www.rambus.com/blogs/post-quantum-cryptography-pqc-new-algorithms-for-a-new-era/)
[How to prepare for post quantum cryptography | McKinsey](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/when-and-how-to-prepare-for-post-quantum-cryptography)
[What are quantum-resistant algorithms—and why do we need them? | MIT Technology Review](https://www.technologyreview.com/2022/09/14/1059400/explainer-quantum-resistant-algorithms/)
[Quantum_FAQs_20210804.PDF](https://media.defense.gov/2021/Aug/04/2002821837/-1/-1/1/Quantum_FAQs_20210804.PDF)

[The White House Roundtable: Preparing for PQC Migration](https://quantumxc.com/blog/white-house-roundtable-pqc-migration/)
[Cryptographic Agility & the Cost of Implementing PQC](https://quantumxc.com/blog/cryptographic-agility-the-cost-of-implementing-quantum-cryptography/)
[draft-hoffman-c2pq-07 - The Transition from Classical to Post-Quantum Cryptography](https://datatracker.ietf.org/doc/html/draft-hoffman-c2pq/) expired

[Why Quantum Computers Can Break RSA But Not Lattice Cryptography](https://www.linkedin.com/pulse/why-quantum-computers-can-break-rsa-lattice-timothy-hollebeek-vi8re)
[【商密前沿】后量子密码最新进展（2024年2月） - 沃通WoTrus安全资讯站](https://www.wosign.com/article/zixun/2332.html)

## PQ/T Hybrid

[PQC Roundtable: When (and When Not to Use) Hybrid Encryption](https://quantumxc.com/blog/white-house-pqc-roundtable-hybrid-encryption/)

[RFC 9794 - Terminology for Post-Quantum Traditional Hybrid Schemes](https://datatracker.ietf.org/doc/html/rfc9794/) ❗!important
[draft-ietf-pquip-hybrid-signature-spectrums-07 - Hybrid signature spectrums](https://datatracker.ietf.org/doc/html/draft-ietf-pquip-hybrid-signature-spectrums/)

[Transitioning to a Quantum-Resistant Public Key Infrastructure](https://eprint.iacr.org/2017/460) unforgeability, non-separability
[A Note on Hybrid Signature Schemes](https://eprint.iacr.org/2023/423) defines weak separability, strong separability, backwards/forwards compatibility, simultaneous verification, hybrid generality

[RFC 9180 - Hybrid Public Key Encryption](https://datatracker.ietf.org/doc/html/rfc9180/) ❗!important
[An Analysis of Hybrid Public Key Encryption](https://eprint.iacr.org/2020/243)

## Algorithms

[Post-Quantum Cryptography | CSRC](https://csrc.nist.gov/projects/post-quantum-cryptography/selected-algorithms-2022)

- [Lattice-based cryptography - Wikiwand](https://www.wikiwand.com/en/articles/Lattice-based_cryptography)
- [Multivariate cryptography - Wikiwand](https://www.wikiwand.com/en/articles/Multivariate_cryptography)
- [Hash-based cryptography - Wikiwand](https://www.wikiwand.com/en/articles/Hash-based_cryptography)
- Code-based cryptography
- Isogeny-based cryptography
- Symmetric key quantum resistance

[CRYSTALS](https://pq-crystals.org/) hard problems over module lattices, learning with errors (LWE)

### Standardized Algorithms

[Federal Register :: Announcing Issuance of Federal Information Processing Standards (FIPS) FIPS 203, Module-Lattice-Based Key-Encapsulation Mechanism Standard, FIPS 204, Module-Lattice-Based Digital Signature Standard, and FIPS 205, Stateless Hash-Based Digital Signature Standard](https://www.federalregister.gov/documents/2024/08/14/2024-17956/announcing-issuance-of-federal-information-processing-standards-fips-fips-203-module-lattice-based) comments for the standards

[Post-Quantum signatures zoo](https://pqshield.github.io/nist-sigs-zoo/)

#### FIPS 203: ML-KEM

- [FIPS 203 Module-Lattice-Based Key-Encapsulation Mechanism Standard](https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.203.pdf)
- hard problems over module lattices, LWE
- originally [Kyber](https://pq-crystals.org/kyber/index.shtml)
- `pqcrystals-kyber` library is also replaced by `ml-kem`
- almost drop in replacement for ECDH
- ECDH is a NIKE (Non-Interactive Key Exchange) whereas ML-KEM is a KEM

[what is Module-Lattice-Based Key-Encapsulation Mechanism Standard (ML-KEM) - Phind](https://www.phind.com/search/cm6w3qlg300002v6qjwms374d)
[In-Depth Overview of FIPS 203: The Module-Lattice-Based Key-Encapsulation Mechanism Standard | Encryption Consulting](https://www.encryptionconsulting.com/overview-of-fips-203/)
[An Overview about FIPS 203: Module-Lattice-based Key-Encapsulation-Mechanism - HackMD](https://hackmd.io/@Giapppp/mlkem)

#### FIPS 204: ML-DSA

- [FIPS 204 Module-Lattice-Based Digital Signature Standard](https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.204.pdf)
- hard problems over module lattices, LWE
- originally [Dilithium](https://pq-crystals.org/dilithium/index.shtml)
- `pqcrystals-dilithium` library is also replaced by `ml-dsa`
- almost drop-in replacement for RSA and ECDSA
- outperforms SLH-DSA in both signature generation and validation time, as well as in signature size

[what is Module-Lattice-Based Digital Signature Standard (ML-DSA) - Phind](https://www.phind.com/search/cm6wmlirv00012v6q7f3g0sva)
[In-Depth Overview of FIPS 204: Module-Lattice-Based Digital Signature Standard](https://www.encryptionconsulting.com/understanding-fips-204/)

[HashML-DSA considered harmful – Key Material](https://keymaterial.net/2024/11/05/hashml-dsa-considered-harmful/)
[Address external mu and PH modes · Issue #131 · lamps-wg/draft-composite-sigs](https://github.com/lamps-wg/draft-composite-sigs/issues/131)
[Don't use a prehashed version of ML-DSA · Issue #54 · chipsalliance/adams-bridge](https://github.com/chipsalliance/adams-bridge/issues/54)

#### FIPS 205: SLH-DSA

- [FIPS 205 Stateless Hash-Based Digital Signature Standard](https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.205.pdf)
- stateless signature, hash-based
- originally [SPHINCS+](https://sphincs.org/)
- has limit on the max number of signatures per signing key (e.g. 2^64)
- smaller key sizes, strong cryptographic assurances
- long-lived TLS sessions

[what is Stateless Hash-Based Digital Signature Standard (SLH-DSA) - Phind](https://www.phind.com/search/cm6wn1zfb00022v6q9qb7hatn)
[In-Depth Overview of FIPS 205: Stateless Hash-Based Digital Signature Standard](https://www.encryptionconsulting.com/in-depth-analysis-of-fips-205/)
[On Protecting SPHINCS+ Against Fault Attacks | IACR Transactions on Cryptographic Hardware and Embedded Systems](https://icscm.ub.rub.de/index.php/TCHES/article/view/10278)
[draft-ietf-lamps-cms-sphincs-plus-19](https://datatracker.ietf.org/doc/html/draft-ietf-lamps-cms-sphincs-plus) overview of SLH-DSA

[SPHINCS-α: A Compact Stateless Hash-Based Signature Scheme](https://eprint.iacr.org/2022/059)

#### FIPS 206: FN-DSA (not final)

- FFT (Fast-Fourier transform) over NTRU-Lattice-Based Digital Signature Algorithm
- stateless signature, NTRU lattice, requires floating point when signing
- originally [Falcon](https://falcon-sign.info/)
- https://csrc.nist.gov/csrc/media/Presentations/2024/falcon/images-media/prest-falcon-pqc2024.pdf

#### Stateful Signature

state is considered a part of private key
[RFC 8391 - XMSS: eXtended Merkle Signature Scheme](https://datatracker.ietf.org/doc/html/rfc8391) hash-based signatures
[XMSS/xmss-reference: Repository for the XMSS reference code, accompanying RFC 8391, XMSS: eXtended Merkle Signature Scheme](https://github.com/XMSS/xmss-reference)
[RFC 8554 - Leighton-Micali Hash-Based Signatures](https://datatracker.ietf.org/doc/html/rfc8554) LMS, hash-based signatures
[cisco/hash-sigs: A full-featured implementation of of the LMS and HSS Hash Based Signature Schemes from draft-mcgrew-hash-sigs-07.](https://github.com/cisco/hash-sigs)

## Research

Public Key Encryption + Key encapsulation mechanism
[BIKE - Bit Flipping Key Encapsulation](https://bikesuite.org/) QC-MDPC (Quasi-Cyclic Moderate Density Parity-Check)
[Classic McEliece: Intro](https://classic.mceliece.org/) binary Goppa codes, very large (268kB) public key, very small ciphertexts (128 bytes)
[NTS-KEM](https://nts-kem.io/) merged with Classic McEliece
[FrodoKEM](https://frodokem.org/) LWE
[HQC](https://pqc-hqc.org/) Syndrome decoding of structure codes (Hamming Quasi-Cyclic)
[NTRU Prime: Intro](https://ntruprime.cr.yp.to/) NTRU lattice
[SIKE – Supersingular Isogeny Key Encapsulation](https://sike.org/) isogeny-based, 💀pawned do not use

Stateless Signature
[CROSS crypto](https://www.cross-crypto.com/) random linear code
[MAYO](https://pqmayo.org/) structured multivariable quadratic equations, balanced signature (321/180 bytes) and public key (1.1/5.4kB) sizes
[Hawk](https://hawk-sign.info/) NTRU lattice
[PQCRainbow](https://www.pqcrainbow.org/) structured multivariable quadratic equations, 💀pawned do not use

[BIKE - Bit Flipping Key Encapsulation](https://bikesuite.org/)
[awslabs/bike-kem: Additional implementation of BIKE (Bit Flipping Key Encapsulation)](https://github.com/awslabs/bike-kem)
[Bit Flipping Key Encapsulation for the Post-Quantum Era | IEEE Journals & Magazine | IEEE Xplore](https://ieeexplore.ieee.org/document/10143624)

[draft-wiggers-hbs-state-02](https://datatracker.ietf.org/doc/html/draft-wiggers-hbs-state/)

Chinese Algorithms
[Aigis密钥封装算法多平台高效实现与优化](https://crad.ict.ac.cn/cn/article/id/4512) Aigis-enc (KEM)
[基于模格的密钥封装方案的比较分析与优化](https://crad.ict.ac.cn/article/doi/10.7544/issn1000-1239.2020.20200452) KEM
[Analysis on Aigis-Enc: asymmetrical and symmetrical.pdf](https://eprint.iacr.org/2020/036.pdf)
[Analysis of Key Reuse for Aigis-Enc Scheme](http://www.jcr.cacrnet.org.cn/EN/10.13868/j.cnki.jcr.000750)
[紧凑的Aigis-sig数字签名方案软硬件协同实现方法-【维普期刊官网】- 中文期刊服务平台](https://qikan.cqvip.com/Qikan/Article/Detail?id=7104309375)
[Aitps：基于非对称模格问题的两方协同签名方案](https://crad.ict.ac.cn/article/doi/10.7544/issn1000-1239.202220533)

## Adoption

[Latency from post-quantum cryptography shrinks as data increases - Amazon Science](https://www.amazon.science/blog/delays-from-post-quantum-cryptography-may-not-be-so-bad) MLKEM+MLDSA, uses TTLB
[The impact of data-heavy, post-quantum TLS 1.3 on the Time-To-Last-Byte of real-world connections](https://eprint.iacr.org/2024/176)
[The impact of ML-KEM and ML-DSA on mTLS connection Time-to-Last-Byte - YouTube](https://www.youtube.com/watch?v=CwP6iBdygRc)

[PQC support · Cloudflare SSL/TLS docs](https://developers.cloudflare.com/ssl/post-quantum-cryptography/pqc-support/)
Modern browsers support ML-KEM in TLS

[Cloudflare now uses post-quantum cryptography to talk to your origin server](https://blog.cloudflare.com/post-quantum-to-origins/)
[Chromium Blog: Protecting Chrome Traffic with Hybrid Kyber KEM](https://blog.chromium.org/2023/08/protecting-chrome-traffic-with-hybrid.html)
[Automatically Secure: how we upgraded 6,000,000 domains by default to get ready for the Quantum Future](https://blog.cloudflare.com/automatically-secure/)

[Apple's New iMessage, Signal, & Post-Quantum Crypto | CSA](https://cloudsecurityalliance.org/blog/2024/05/17/apple-s-new-imessage-signal-and-post-quantum-cryptography)
[Blog - iMessage with PQ3: The new state of the art in quantum-secure messaging at scale - Apple Security Research](https://security.apple.com/blog/imessage-pq3/)
[Signal >> Blog >> Quantum Resistance and the Signal Protocol](https://signal.org/blog/pqxdh/)

[Go Post-Quantum with Caddy | Sam Burns' Tech Blog](https://sam-burns.com/posts/go-post-quantum-with-caddy/)
[cloudflare/go: Go with Cloudflare experimental patches](https://github.com/cloudflare/go)

## Framework/Library

[Home | Open Quantum Safe](https://openquantumsafe.org/) Another project under Post-Quantum Cryptography Alliance, focuses on the application of PQC
[Open Quantum Safe](https://github.com/open-quantum-safe) adopts PQClean implementations
[open-quantum-safe/oqs-provider: OpenSSL 3 provider containing post-quantum algorithms](https://github.com/open-quantum-safe/oqs-provider)
[provider - OpenSSL Documentation](https://docs.openssl.org/master/man7/provider/)
[open-quantum-safe/liboqs: C library for prototyping and experimenting with quantum-resistant cryptography](https://github.com/open-quantum-safe/liboqs) ❗!important

[主页 | PQMagic](https://pqcrypto.dev/)
[pqcrypto-cn/PQMagic: Post-Quantum Magic Project. See more at https://pqcrypto.dev/ . We also open-sourced at https://gitee.com/pqcrypto/pqmagic.](https://github.com/pqcrypto-cn/PQMagic) Aigis-Enc、Aigis-Sig（PKC 2020）, 国密 hashing

[microsoft/SymCrypt: Cryptographic library](https://github.com/Microsoft/SymCrypt)
[microsoft/SymCrypt-OpenSSL: OpenSSL engine for use with SymCrypt cryptographic library](https://github.com/microsoft/SymCrypt-OpenSSL)
[Microsoft's quantum-resistant cryptography is here | Microsoft Community Hub](https://techcommunity.microsoft.com/blog/microsoft-security-blog/microsofts-quantum-resistant-cryptography-is-here/4238780)

[PQClean/PQClean: Clean, portable, tested implementations of post-quantum cryptography](https://github.com/PQClean/PQClean) impose requirements on C implementations
[backbone-hq/pqcrypto: 👻 Post-quantum cryptography for Python.](https://github.com/backbone-hq/pqcrypto) Python binding for PQClean

[lean cryptography in every aspect](https://leancrypto.org/index.html)
[smuellerDD/leancrypto: Lean cryptographic library usable for bare-metal environments](https://github.com/smuellerDD/leancrypto)

[PQ Code Package](https://github.com/pq-code-package) Another project under Post-Quantum Cryptography Alliance
[Benchmarks](https://pq-code-package.github.io/mlkem-native/dev/bench/)
[pq-code-package/mlkem-native: High-assurance, high-performance C90 implementation of ML-KEM](https://github.com/pq-code-package/mlkem-native)
[pq-code-package/mldsa-native](https://github.com/pq-code-package/mldsa-native)

[cloudflare/circl: CIRCL: Cloudflare Interoperable Reusable Cryptographic Library](https://github.com/cloudflare/circl)
[Kyber and SIKE PQC Key Exchange Mechanism (KEM) with CIRCL](https://asecuritysite.com/circl/circl_kyber)
[Kyber, SIKE and Hybrid PQC Key Exchange](https://asecuritysite.com/circl/circl_hybrid)
[[2501.09568] Quantum Diffie-Hellman key exchange](https://arxiv.org/abs/2501.09568)

[mupq/mupq: Provides common files for instances of mupq, e.g., for pqm4 and pqriscv](https://github.com/mupq/mupq)
[mupq/pqm4: Post-quantum crypto library for the ARM Cortex-M4](https://github.com/mupq/pqm4)
[mupq/pqriscv](https://github.com/mupq/pqriscv)
Supports Open Quantum Safe and `liboqs`, `pqm4`

[colinxu2020/slhdsa: The pure python implement of the slh-dsa algorithm.](https://github.com/colinxu2020/slhdsa)
