---
title: Post Quantum Cryptography
description: ""
created: 2025-03-24
updated: 2025-11-14
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
[State of the post-quantum Internet in 2025](https://blog.cloudflare.com/pq-2025/) 2025-10  
[The state of the post-quantum Internet](https://blog.cloudflare.com/pq-2024/) 2024-03,❗!important, history, KEX and signature

[Post-Quantum Cryptography Conference Austin 2025 - YouTube](https://www.youtube.com/playlist?list=PL-BLLaXQJAfTLuRXJYwAAiJmZRGzhOvFd)  
Post-Quantum Cryptography Conference Kuala Lumpur 2025  
[Wednesday - Plenary (grand function) - Post-Quantum Cryptography Conference Kuala Lumpur - YouTube](https://www.youtube.com/watch?v=OwHWAxJh3eQ)  
[Thursday - Plenary - Post-Quantum Cryptography Conference Kuala Lumpur - YouTube](https://www.youtube.com/watch?v=J12yGQlnU2w)

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
[Kyber and Dilithium – Cryptography 101 with Alfred Menezes](https://cryptography101.ca/kyber-dilithium/)

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

[SP 800-208, Recommendation for Stateful Hash-Based Signature Schemes | CSRC](https://csrc.nist.gov/pubs/sp/800/208/final)

state is considered a part of private key, use of HSM is mandated  
[RFC 8391 - XMSS: eXtended Merkle Signature Scheme](https://datatracker.ietf.org/doc/html/rfc8391) hash-based signatures  
[XMSS/xmss-reference: Repository for the XMSS reference code, accompanying RFC 8391, XMSS: eXtended Merkle Signature Scheme](https://github.com/XMSS/xmss-reference)

[RFC 8554 - Leighton-Micali Hash-Based Signatures](https://datatracker.ietf.org/doc/html/rfc8554) LMS, hash-based signatures  
[cisco/hash-sigs: A full-featured implementation of of the LMS and HSS Hash Based Signature Schemes from draft-mcgrew-hash-sigs-07.](https://github.com/cisco/hash-sigs)

[Post-Quantum Readiness](https://docs.keyfactor.com/ejbca/9.0/post-quantum-readiness)  
[RFC 8708 - Use of the HSS/LMS Hash-Based Signature Algorithm in the Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/rfc8708/)

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

[Apple's New iMessage, Signal, & Post-Quantum Crypto | CSA](https://cloudsecurityalliance.org/blog/2024/05/17/apple-s-new-imessage-signal-and-post-quantum-cryptography)  
[Blog - iMessage with PQ3: The new state of the art in quantum-secure messaging at scale - Apple Security Research](https://security.apple.com/blog/imessage-pq3/)  
[Signal >> Blog >> Quantum Resistance and the Signal Protocol](https://signal.org/blog/pqxdh/)

[cloudflare/go: Go with Cloudflare experimental patches](https://github.com/cloudflare/go)

### PQC Key Exchange adoption

> IPSec, VPN

[RFC 9180 - Hybrid Public Key Encryption](https://datatracker.ietf.org/doc/html/rfc9180/)
[RFC 9370 - Multiple Key Exchanges in the Internet Key Exchange Protocol Version 2 (IKEv2)](https://datatracker.ietf.org/doc/html/rfc9370) allows for PQC protocol

[Quantum Security Made Easy with RFC 8784 Standard | Palo Alto Networks](https://live.paloaltonetworks.com/t5/community-blogs/quantum-security-made-easy-with-rfc-8784-standard/ba-p/574825) intermediate solution using preshared keys IDs, hiding the DH parameters
[Palo Alto Networks Extends Support for Quantum Safe VPN with RFC 9242, RFC 9370 Standards, and Hybrid KEYs | Palo Alto Networks](https://live.paloaltonetworks.com/t5/community-blogs/palo-alto-networks-extends-support-for-quantum-safe-vpn-with-rfc/ba-p/585492)

## PQC Certs X.509 adoption

[draft-ietf-lamps-pq-composite-sigs - Composite ML-DSA for use in X.509 Public Key Infrastructure and CMS](https://datatracker.ietf.org/doc/html/draft-ietf-lamps-pq-composite-sigs/) ❗!important, used by draft-reddy-tls-composite-mldsa, replaced draft-ounsworth-pq-composite-kem  
[RFC 9881 - Internet X.509 Public Key Infrastructure -- Algorithm Identifiers for the Module-Lattice-Based Digital Signature Algorithm (ML-DSA)](https://datatracker.ietf.org/doc/html/rfc9881) used by draft-ietf-tls-mldsa  
[RFC 9802 - Use of the HSS and XMSS Hash-Based Signature Algorithms in Internet X.509 Public Key Infrastructure](https://datatracker.ietf.org/doc/html/rfc9802)  
[draft-ietf-lamps-x509-slhdsa - Internet X.509 Public Key Infrastructure: Algorithm Identifiers for SLH-DSA](https://datatracker.ietf.org/doc/html/draft-ietf-lamps-x509-slhdsa/) used by draft-reddy-tls-slhdsa

[draft-davidben-tls-merkle-tree-certs - Merkle Tree Certificates](https://datatracker.ietf.org/doc/html/draft-davidben-tls-merkle-tree-certs/)  
[davidben/merkle-tree-certs](https://github.com/davidben/merkle-tree-certs)

[draft-truskovsky-lamps-pq-hybrid-x509](https://datatracker.ietf.org/doc/html/draft-truskovsky-lamps-pq-hybrid-x509/) expired, does not present a generic encoding  
[ITU-T Recommendation database](https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=X.509) 2019 version allows two keys to be placed in a certificate but only one used at a time

[RFC 9882 - Use of the ML-DSA Signature Algorithm in the Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/rfc9882/)

[draft-uri-lake-pquake - PQuAKE - Post-Quantum Authenticated Key Exchange](https://datatracker.ietf.org/doc/html/draft-uri-lake-pquake/) expired, integration to IKEv2  
[draft-ietf-lamps-pq-composite-kem - Composite ML-KEM for use in X.509 Public Key Infrastructure and CMS](https://datatracker.ietf.org/doc/html/draft-ietf-lamps-pq-composite-kem/)  
[RFC 9629 - Using Key Encapsulation Mechanism (KEM) Algorithms in the Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/rfc9629/)

Key Factor's EJBCA  
[Hybrid CA](https://docs.keyfactor.com/ejbca/9.0/hybrid-ca)  
[Creating a Hybrid CA](https://docs.keyfactor.com/ejbca/9.0/creating-a-hybrid-ca)  
[Post-Quantum Cryptography Keys and Signatures](https://docs.keyfactor.com/ejbca/9.0/post-quantum-cryptography-keys-and-signatures)

[Preparing for a Quantum World: Examining the Migration Path of Hybrid Certificates | Keyfactor](https://www.keyfactor.com/blog/preparing-for-a-quantum-world-examining-the-migration-path-of-hybrid-certificates/)  
[Quantum-Safe Certificates – What Are They and What Do They Want From Us? | Keyfactor](https://www.keyfactor.com/blog/quantum-safe-certificates-what-are-they-and-what-do-they-want-from-us/)  
[EJBCA Enterprise | PKI by Keyfactor](https://www.keyfactor.com/products/ejbca-enterprise/)

[Roadmap Request: Post Quantum Cryptography - Feature Requests - Let's Encrypt Community Support](https://community.letsencrypt.org/t/roadmap-request-post-quantum-cryptography/231143/) PKI is of lower priority (can only be broken live, no store now, decrypt later issue), requires HSM, CA/Browser Forum Baseline Requirements  
[Preparing for quantum safe crypto systems - Feature Requests - Let's Encrypt Community Support](https://community.letsencrypt.org/t/preparing-for-quantum-safe-crypto-systems/204611/)  
[Mixed Certificate Chains for the Transition to Post-Quantum Authentication in TLS 1.3](https://eprint.iacr.org/2021/1447.pdf)  
[CA/Browser Forum - Certificate Issuers, Certificate Consumers, and Interested Parties Working to Secure the Web](https://cabforum.org/)

[DigiCert Labs | DigiCert](https://www.digicert.com/digicert-labs)
[IETF-Hackathon/pqc-certificates: Post-quantum cryptography certificates](https://github.com/IETF-Hackathon/pqc-certificates)

### PQC SSH adoption

[TLS | Open Quantum Safe](https://openquantumsafe.org/applications/tls.html#oqs-openssl-provider) OpenSSL provider for OpenSSH

[draft-ietf-sshm-ntruprime-ssh - Secure Shell (SSH) Key Exchange Method Using Hybrid Streamlined NTRU Prime sntrup761 and X25519 with SHA-512: sntrup761x25519-sha512](https://datatracker.ietf.org/doc/html/draft-ietf-sshm-ntruprime-ssh/) added in v9.0  
[draft-ietf-sshm-mlkem-hybrid-kex - PQ/T Hybrid Key Exchange in SSH](https://datatracker.ietf.org/doc/html/draft-ietf-sshm-mlkem-hybrid-kex/)  
[open-quantum-safe/oqs-provider: OpenSSL 3 provider containing post-quantum algorithms](https://github.com/open-quantum-safe/oqs-provider#note-on-openssl-versions) limitation: CMS not working for < 3.2, TLS working for < 3.2

[draft-kampanakis-curdle-ssh-pq-ke - PQ/T Hybrid Key Exchange in SSH](https://datatracker.ietf.org/doc/html/draft-kampanakis-curdle-ssh-pq-ke/) obsolete  
[open-quantum-safe/openssh: Fork of OpenSSH that includes prototype quantum-resistant key exchange and authentication in SSH based on liboqs. PROJECT INACTIVE. CONTRIBUTORS WANTED.](https://github.com/open-quantum-safe/openssh) OpenSSH v9.7_p1, based on `kampanakis-curdle-ssh-pq-ke` and `liboqs` based on OpenSSL 1.1.1 (pre-provider)  
[open-quantum-safe/libssh: [DEPRECATED — See notice in README.md] Fork of libssh that includes prototype quantum-resistant algorithms based on liboqs.](https://github.com/open-quantum-safe/libssh) works with `OQS-OpenSSH` above

[Quantum Computing & Post-Quantum Algorithms](https://www.ssh.com/academy/cryptography/quantum-computing-resilient-algorithms#hybrid-approach) why hybrid

### PQC TLS adoption

[tldr.fail](https://tldr.fail/)
[Post Quantum Cryptography (PQC): You May Already Be Using It! - DomainTools | Start Here. Know Now.](https://www.domaintools.com/resources/blog/post-quantum-cryptography-pqc-you-may-already-be-using-it/) 2024-10

[Post-Quantum Key Agreement at Cloudflare](https://pq.cloudflareresearch.com/) Modern browsers support X25519MLKEM768 in TLS
[Post Quantum Cryptography: A short update. | LinkedIn](https://www.linkedin.com/pulse/post-quantum-cryptography-short-update-klaus-haller-cdd0f/) 2024-12

This document models key agreement as key encapsulation mechanisms (KEMs), which consist of three algorithms:

- `KeyGen() -> (pk, sk)`: A probabilistic key generation algorithm, which generates a public key `pk` and a secret key `sk`.
- `Encaps(pk) -> (ct, ss)`: A probabilistic encapsulation algorithm, which takes as input a public key `pk` and outputs a ciphertext `ct` and shared secret `ss`.
- `Decaps(sk, ct) -> ss`: A decapsulation algorithm, which takes as input a secret key `sk` and ciphertext `ct` and outputs a shared secret `ss`, or in some cases a distinguished error value.

DH Exchange can be modeled as KEM, where

- `KeyGen() -> (pk = g^x, sk = x)`
- `Encaps(pk = g^x) -> (ct = g^y, ss = g^xy)`
- `Decaps(sk = x, ct = g^y) -> ss = g^xy`

[draft-ietf-tls-hybrid-design-13 - Hybrid key exchange in TLS 1.3](https://datatracker.ietf.org/doc/html/draft-ietf-tls-hybrid-design/) ❗!important, define the way multiple keys (traditional and next gen) are packed in TLS extension structs, allows key reuse (or duplication?) in ClientHello
[draft-ietf-tls-ecdhe-mlkem - Post-quantum hybrid ECDHE-MLKEM Key Agreement for TLSv1.3](https://datatracker.ietf.org/doc/html/draft-ietf-tls-ecdhe-mlkem/) ❗!important, X25519MLKEM768, SecP256r1MLKEM768, and SecP384r1MLKEM1024, replaced draft-kwiatkowski-tls-ecdhe-mlkem
[draft-connolly-cfrg-xwing-kem - X-Wing: general-purpose hybrid post-quantum KEM](https://datatracker.ietf.org/doc/html/draft-connolly-cfrg-xwing-kem/)
[draft-tls-westerbaan-xyber768d00](https://datatracker.ietf.org/doc/html/draft-tls-westerbaan-xyber768d00/) deprecated, X25519Kyber768Draft00

[draft-ietf-tls-mlkem - ML-KEM Post-Quantum Key Agreement for TLS 1.3](https://datatracker.ietf.org/doc/html/draft-ietf-tls-mlkem/) pure PQC, replaced draft-connolly-tls-mlkem-key-agreement

[Post Quantum Encryption with NGINX on Ubuntu 24.04 | Linode Docs](https://www.linode.com/docs/guides/post-quantum-encryption-nginx-ubuntu2404/)
[Go Post-Quantum with Caddy | Sam Burns' Tech Blog](https://sam-burns.com/posts/go-post-quantum-with-caddy/)
[Review PR - Implement Generic Hybrid (KEM) support · Issue #25884 · openssl/openssl](https://github.com/openssl/openssl/issues/25884)

[Introduction](https://aws.github.io/s2n-tls/usage-guide/)
[Introducing s2n-tls, a New Open Source TLS Implementation | AWS Security Blog](https://aws.amazon.com/blogs/security/introducing-s2n-a-new-open-source-tls-implementation/)
[aws/s2n-tls: An implementation of the TLS/SSL protocols](https://github.com/aws/s2n-tls)

Cloudflare enabled PQC for their customers as described in a 2023 blog. That handles the server side.
[Adoption & Usage Worldwide | Cloudflare Radar](https://radar.cloudflare.com/adoption-and-usage#post-quantum-encryption-adoption) PQC adoption
[Automatically Secure: how we upgraded 6,000,000 domains by default to get ready for the Quantum Future](https://blog.cloudflare.com/automatically-secure/) 2025-09
[Cloudflare now uses post-quantum cryptography to talk to your origin server](https://blog.cloudflare.com/post-quantum-to-origins/) 2023-09
[Defending against future threats: Cloudflare goes post-quantum](https://blog.cloudflare.com/post-quantum-for-all/) 2022-10
[Making protocols post-quantum](https://blog.cloudflare.com/making-protocols-post-quantum/) 2022-02, KEX in TLS and KEMTLS for auth
[PQC support · Cloudflare SSL/TLS docs](https://developers.cloudflare.com/ssl/post-quantum-cryptography/pqc-support/)

Then Google deployed default support for PQC in desktop Chrome installs for TLS 1.3 and QUIC and on Google's servers. Few people seem to have had problems (or even noticed)!
[Chromium Blog: Protecting Chrome Traffic with Hybrid Kyber KEM](https://blog.chromium.org/2023/08/protecting-chrome-traffic-with-hybrid.html)
[Chromium Blog: Advancing Our Amazing Bet on Asymmetric Cryptography](https://blog.chromium.org/2024/05/advancing-our-amazing-bet-on-asymmetric.html) performance
[Google Online Security Blog: Post-Quantum Cryptography: Standards and Progress](https://security.googleblog.com/2024/08/post-quantum-cryptography-standards.html)

[TLS → Post-Quantum TLS: Inspecting the TLS landscape for PQC adoption on Android | Thom Wiggers](https://thomwiggers.nl/publication/tls-on-android/) 2023-07, use resumption, alternative proposals

#### TLS cert

[draft-reddy-tls-composite-mldsa - Use of Composite ML-DSA in TLS 1.3](https://datatracker.ietf.org/doc/html/draft-reddy-tls-composite-mldsa/) ❗!important
[draft-ietf-tls-mldsa - Use of ML-DSA in TLS 1.3](https://datatracker.ietf.org/doc/html/draft-ietf-tls-mldsa/) replaced draft-tls-westerbaan-mldsa

[draft-reddy-tls-slhdsa - Use of SLH-DSA in TLS 1.3](https://datatracker.ietf.org/doc/html/draft-reddy-tls-slhdsa/) expired

#### KEMTLS

[Publications | Thom Wiggers](https://thomwiggers.nl/publication/)
[Post-Quantum TLS without handshake signatures | Thom Wiggers](https://thomwiggers.nl/publication/kemtls/) 2020-05, [2022-03](https://eprint.iacr.oxrg/2020/534)
[thomwiggers/kemtls-experiment: Experimental implementation of KEMTLS in Rustls](https://github.com/thomwiggers/kemtls-experiment) Rust
[Implementing and Measuring KEMTLS | Thom Wiggers](https://thomwiggers.nl/publication/measuring-kemtls/) 2021-09, Go implementation, KEMTLS over the internet, review TLS 1.3 and `tls-ecdhe-mlkem`
[A tale of two models: formal verification of KEMTLS in Tamarin | Thom Wiggers](https://thomwiggers.nl/publication/kemtls-tamarin/) 2022-08, formal proof, Tamarin model of KEMTLS(-PDK)
[kemtls/Tamarin-multi-stage-model: Tamarin proof for the KEMTLS protocol using the multi-stage AKE model](https://github.com/kemtls/Tamarin-multi-stage-model)
[KEMTLS vs. Post-Quantum TLS: Performance on Embedded Systems | Thom Wiggers](https://thomwiggers.nl/publication/kemtls-embedded/) 2022-12
[Post-Quantum TLS | Thom Wiggers](https://thomwiggers.nl/publication/thesis/) 2024-01
[More efficient post-quantum KEMTLS with pre-distributed public keys | Thom Wiggers](https://thomwiggers.nl/publication/kemtlspdk/) 2021-09, pre-distributed public keys (PDK)

[KEMTLS: Post-quantum TLS without signatures](https://blog.cloudflare.com/kemtls-post-quantum-tls-without-signatures/)
[draft-celi-wiggers-tls-authkem-04 - KEM-based Authentication for TLS 1.3](https://datatracker.ietf.org/doc/draft-celi-wiggers-tls-authkem/)

#### Performance

[Latency from post-quantum cryptography shrinks as data increases - Amazon Science](https://www.amazon.science/blog/delays-from-post-quantum-cryptography-may-not-be-so-bad) MLKEM+MLDSA, uses TTLB
[The impact of data-heavy, post-quantum TLS 1.3 on the Time-To-Last-Byte of real-world connections](https://eprint.iacr.org/2024/176)
[The impact of ML-KEM and ML-DSA on mTLS connection Time-to-Last-Byte - YouTube](https://www.youtube.com/watch?v=CwP6iBdygRc)
[THU_BREAKOUT_1200_Mila-Anastasova_The-impact-of-ML-KEM-and-ML-DSA-on-mTLS-connection-Time-To-Last-Byte.pdf](https://pkic.org/events/2025/pqc-conference-austin-us/THU_BREAKOUT_1200_Mila-Anastasova_The-impact-of-ML-KEM-and-ML-DSA-on-mTLS-connection-Time-To-Last-Byte.pdf)
[Performance Impact of PQC KEMs on TLS 1.3 Under Varying Network Characteristics | SpringerLink](https://link.springer.com/chapter/10.1007/978-3-031-49187-0_14)

[Optimizations and Practicality of High-Security CSIDH | Thom Wiggers](https://thomwiggers.nl/publication/secsidh/) 2024-04, isogeny-based non-interactive key exchange, too-large handshake latency (tens of seconds)

[pq-tls-benchmark-framework · main · PQC Benchmarking / Benchmarking PQC in TLS · GitLab](https://code.fbi.h-da.de/pqc-benchmarking/benchmarking-pqc-in-tls/) TLS key exchange
[ImperialViolet - Post-quantum confidentiality for TLS](https://www.imperialviolet.org/2018/04/11/pqconftls.html)
[crt26/pqc-evaluation-tools: A comprehensive suite of automated tools designed for performance benchmarking and evaluation of Post-Quantum Cryptography (PQC) algorithms. This tool aims to make utilising the OQS project easier for research purposes. The suite includes automation scripts for the configuration, testing, and parsing of PQC computational and networking data.](https://github.com/crt26/pqc-evaluation-tools)

[A Long Goodbye to RSA and ECDSA, and Quick Hello to SLH-DSA | by Prof Bill Buchanan OBE FRSE | ASecuritySite: When Bob Met Alice | Medium](https://medium.com/asecuritysite-when-bob-met-alice/a-long-goodbye-to-rsa-and-ecdsa-and-quick-hello-to-slh-dsa-3e53e36a941b) Performance and key sizes

## Framework/Library

[kriskwiatkowski/pqc: Reference implementations of post-quantum cryptographic primitives](https://github.com/kriskwiatkowski/pqc) clean and AVX2 implementations

[Paul Miller — Noble cryptography](https://paulmillr.com/noble/)  
[paulmillr/noble-post-quantum: Auditable & minimal JS implementation of public-key post-quantum cryptography](https://github.com/paulmillr/noble-post-quantum)

[SLH-DSA·PyPI](https://pypi.org/project/SLH-DSA/)  
[colinxu2020/slhdsa: The pure python implement of the slh-dsa algorithm.](https://github.com/colinxu2020/slhdsa)

### Open Quantum Safe

> Another project under Post-Quantum Cryptography Alliance, focuses on the application of PQC

[Home | Open Quantum Safe](https://openquantumsafe.org/)  
[Open Quantum Safe](https://github.com/open-quantum-safe) adopts PQClean implementations  
[open-quantum-safe/liboqs: C library for prototyping and experimenting with quantum-resistant cryptography](https://github.com/open-quantum-safe/liboqs) ❗!important

### OpenSSL

[ossl-guide-libraries-introduction - OpenSSL Documentation](https://docs.openssl.org/master/man7/ossl-guide-libraries-introduction/#introduction)

[provider - OpenSSL Documentation](https://docs.openssl.org/master/man7/provider/)  
[openssl/README-PROVIDERS.md at master · openssl/openssl](https://github.com/openssl/openssl/blob/master/README-PROVIDERS.md)

[openquantumsafe/oqs-ossl3 - Docker Image | Docker Hub](https://hub.docker.com/r/openquantumsafe/oqs-ossl3)

[open-quantum-safe/oqs-provider: OpenSSL 3 provider containing post-quantum algorithms](https://github.com/open-quantum-safe/oqs-provider)
[oqs-provider/USAGE.md at main · open-quantum-safe/oqs-provider](https://github.com/open-quantum-safe/oqs-provider/blob/main/USAGE.md)
[oqs-provider/ALGORITHMS.md at main · open-quantum-safe/oqs-provider](https://github.com/open-quantum-safe/oqs-provider/blob/main/ALGORITHMS.md)
[oqs-provider/STANDARDS.md at main · open-quantum-safe/oqs-provider](https://github.com/open-quantum-safe/oqs-provider/blob/main/STANDARDS.md)
[oqs-provider/USAGE.md at main · open-quantum-safe/oqs-provider](https://github.com/open-quantum-safe/oqs-provider/blob/main/USAGE.md#creating-keys-and-certificates) X.509

### PQ Code Package

> Another project under Post-Quantum Cryptography Alliance

[PQ Code Package](https://github.com/pq-code-package)  
[pq-code-package/mlkem-native: High-assurance, high-performance C90 implementation of ML-KEM](https://github.com/pq-code-package/mlkem-native)  
[pq-code-package/mldsa-native](https://github.com/pq-code-package/mldsa-native)

### PQClean

[PQClean/PQClean: Clean, portable, tested implementations of post-quantum cryptography](https://github.com/PQClean/PQClean) impose requirements on C implementations, clean and AVX2 implementations  
[backbone-hq/pqcrypto: 👻 Post-quantum cryptography for Python.](https://github.com/backbone-hq/pqcrypto) Python binding for PQClean

### mupq

[mupq/mupq: Provides common files for instances of mupq, e.g., for pqm4 and pqriscv](https://github.com/mupq/mupq)  
[mupq/pqm4: Post-quantum crypto library for the ARM Cortex-M4](https://github.com/mupq/pqm4)  
[mupq/pqriscv](https://github.com/mupq/pqriscv)  
Supports Open Quantum Safe and `liboqs`, `pqm4`

## PQMagic

[主页 | PQMagic](https://pqcrypto.dev/)  
[pqcrypto-cn/PQMagic: Post-Quantum Magic Project. See more at https://pqcrypto.dev/ . We also open-sourced at https://gitee.com/pqcrypto/pqmagic.](https://github.com/pqcrypto-cn/PQMagic) Aigis-Enc、Aigis-Sig（PKC 2020）, 国密 hashing

### leancrypto

[lean cryptography in every aspect](https://leancrypto.org/index.html)  
X.509 and PKCS#7 generator and parser support  
[leancrypto/asn1/tests/testcerts at master · smuellerDD/leancrypto](https://github.com/smuellerDD/leancrypto/tree/master/asn1/tests/testcerts)

[smuellerDD/leancrypto: Lean cryptographic library usable for bare-metal environments](https://github.com/smuellerDD/leancrypto)

### WolfSSL

[wolfCrypt Post Quantum | Products – wolfSSL](https://www.wolfssl.com/products/wolfcrypt-post-quantum/)
[What are FIPS 203, 204, and 205? – wolfSSL](https://www.wolfssl.com/what-are-fips-203-204-and-205/)

### CIRCL

[cloudflare/circl: CIRCL: Cloudflare Interoperable Reusable Cryptographic Library](https://github.com/cloudflare/circl)  
[Kyber and SIKE PQC Key Exchange Mechanism (KEM) with CIRCL](https://asecuritysite.com/circl/circl_kyber)  
[Kyber, SIKE and Hybrid PQC Key Exchange](https://asecuritysite.com/circl/circl_hybrid)  
[[2501.09568] Quantum Diffie-Hellman key exchange](https://arxiv.org/abs/2501.09568)

### SymCrypt

[microsoft/SymCrypt: Cryptographic library](https://github.com/Microsoft/SymCrypt)  
[microsoft/SymCrypt-OpenSSL: OpenSSL engine for use with SymCrypt cryptographic library](https://github.com/microsoft/SymCrypt-OpenSSL)  
[Microsoft's quantum-resistant cryptography is here | Microsoft Community Hub](https://techcommunity.microsoft.com/blog/microsoft-security-blog/microsofts-quantum-resistant-cryptography-is-here/4238780)

### Commercial

[Quantum-safe & Quantum-resistant Software, Hardware & Upgrades](https://pqshield.com/products/)
[PQCryptoLib-Core | PQShield](https://pqshield.com/products/pqc-cor/) FIPS 140-3 certified

[ISARA Radiate™ Quantum-safe Toolkit - ISARA Corporation](https://www.isara.com/products/isara-radiate.html)

[AgileSec™ SDK - Manage Crypto-agile Apps Through a Cryptographic API](https://www.infosecglobal.com/products/agilesec-sdk)
[InfoSec Global - YouTube](https://www.youtube.com/@InfoSecGlobal)

## PQC Migration

[10 Step Checklist For Tech Leaders: Simplify Your Transition to New NIST Algorithms](https://www.keyfactor.com/resources/content/10-step-checklist-simplify-your-transition-to-new-nist-algorithms)  
[SoK: How (not) to Design and Implement Post-Quantum Cryptography](https://eprint.iacr.org/2021/462)
