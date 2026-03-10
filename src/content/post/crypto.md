---
title: Cryptography
description: ""
created: 2016-01-21
updated: 2026-03-10
tags:
  - crypto
  - cryptography
  - security
---

> back in my days, crypto does not mean [[blockchain#Cryptocurrency]]

[[enigma-machine]]
[[crypto-shangmi]]
[[crypto-pqc]]
[[crypto-pkcs]]

[A Crash Course in Everything Cryptographic – Noteworthy - The Journal Blog](https://blog.usejournal.com/a-crash-course-in-everything-cryptographic-50daa0fda482) ❗!important
[Survival Guide - Encryption, Authentication, Digests, MAC and Signatures](https://www.zytrax.com/tech/survival/encryption.html) ❗!important
[The Genius Math of Modern Encryption - YouTube](https://www.youtube.com/watch?v=XSJLyK9LlnY)

[Category:Theory of cryptography - Wikipedia](https://en.wikipedia.org/wiki/Category:Theory_of_cryptography)

[Crypto Forum (cfrg)](https://datatracker.ietf.org/rg/cfrg/documents/) ❗!important, IETF
[Limited Additional Mechanisms for PKIX and SMIME (lamps)](https://datatracker.ietf.org/wg/lamps/documents/) ❗!important, IETF
[Cryptology ePrint Archive](https://eprint.iacr.org/) ❗!important
[Welcome | Practical Cryptography for Developers](https://cryptobook.nakov.com/)
[nakov/Practical-Cryptography-for-Developers-Book: Practical Cryptography for Developers: Hashes, MAC, Key Derivation, DHKE, Symmetric and Asymmetric Ciphers, Public Key Cryptosystems, RSA, Elliptic Curves, ECC, secp256k1, ECDH, ECIES, Digital Signatures, ECDSA, EdDSA](https://github.com/nakov/practical-cryptography-for-developers-book)
[Cryptography 101 with Alfred Menezes – Video lectures, notes, and exercises in all areas of applied cryptography](https://cryptography101.ca/)
[Cryptography 101 - YouTube](https://www.youtube.com/@cryptography101-alfred)

[The International Association for Cryptologic Research](https://www.iacr.org/)
[IACR - YouTube](https://www.youtube.com/@TheIACR)

[科普园地\_国家密码管理局](https://www.oscca.gov.cn/sca/zxfw/kpyd.shtml)
[密码学报](http://www.jcr.cacrnet.org.cn/CN/home) 中国密码学会
[中国密码学会 - 密评工作](https://www.cacrnet.org.cn/site/term/123.html)

Course
[Cryptography | Computer science theory | Computing | Khan Academy](https://www.khanacademy.org/computing/computer-science/cryptography)
[Cryptography I | Coursera](https://www.coursera.org/learn/crypto)
[The Cryptopals Crypto Challenges](http://cryptopals.com/)
[The Joy of Cryptography](https://joyofcryptography.com/) ❗!important, course
[A Graduate Course in Applied Cryptography](https://toc.cryptobook.us/) ❗!important, course
[Crypto 101](https://www.crypto101.io/)
[ECE407/CS407: Cryptography](https://soc1024.ece.illinois.edu/teaching/ececs407/fa21/)
[7 Cryptography Concepts EVERY Developer Should Know - YouTube](https://www.youtube.com/watch?v=NuyzuNBFWxQ)
[Secret Codes: A History of Cryptography (Part 1) - YouTube](https://www.youtube.com/watch?v=9pp9YpginNg)
[More Secret Codes: A History of Cryptography (Part 2) - YouTube](https://www.youtube.com/watch?v=aHSt_lzRIxw)

[An Overview of Cryptography](https://www.garykessler.net/library/crypto.html)

In cryptography, these entities are usually used:

- Alice, Bob, Charles, Douglas: authentic users
- Eve: eavesdropper
- Mallory: MITM attacker
- Satan: malicious user/hacker

[Education Center | Explore Now | Encryption Consulting](https://www.encryptionconsulting.com/education-center/)

## Classical Cryptography

[Classical Cryptography - YouTube](https://www.youtube.com/playlist?list=PLrm9Y---qlNyIhxp6PQp-PQ5CePPc3JhI)

[The Unbreakable Kryptos Code - YouTube](https://www.youtube.com/watch?v=jVpsLMCIB0Y) Vigenère cipher, substitution Cipher

## Benchmarks

[eBACS: ECRYPT Benchmarking of Cryptographic Systems](https://bench.cr.yp.to/)
[PQ Code Package Benchmarks](https://pq-code-package.github.io/mlkem-native/dev/bench/)

## Symmetric Cryptography

[Symmetric-key algorithm - Wikiwand](https://www.wikiwand.com/en/articles/Symmetric-key_algorithm)
[密码学学习笔记*04*对称加密 - 知乎](https://zhuanlan.zhihu.com/p/558881344)

### Block Ciphers

> contrast "stream ciphers", where encrypted strings are the same length as the plaintext

[Lecture3 Lecture 3: Block Ciphers and the Data Encryption Standard](https://engineering.purdue.edu/kak/compsec/NewLectures/Lecture3.pdf)

[Anatomy of a password disaster – Adobe’s giant-sized cryptographic blunder – Naked Security](https://nakedsecurity.sophos.com/2013/11/04/anatomy-of-a-password-disaster-adobes-giant-sized-cryptographic-blunder/) study of Adobe's leaked password database

[Feistel Cipher - Computerphile - YouTube](https://www.youtube.com/watch?v=FGhj3CGxl8I)

#### Modes of operation

[Block cipher mode of operation - Wikiwand](https://www.wikiwand.com/en/Block_cipher_mode_of_operation)

Block ciphers, as the name suggests, encrypts blocks. The methods of segmenting data into blocks is called "modes of operation".

[The Third NIST Workshop on Block Cipher Modes of Operation 2023 | CSRC](https://csrc.nist.gov/Events/2023/third-workshop-on-block-cipher-modes-of-operation)

[Modes of Operation - Computerphile - YouTube](https://www.youtube.com/watch?v=Rk0NIQfEXBA)
**ECB**: simply divides a message into 16 byte blocks, preserves pattern (for experts only: ECB should never be used except in some very specific cases)
**CBC**: first block XORed with Initialization Vector (IV) (nonce), every other block XORed with the ciphertext of the block preceding it; however this introduces dependency on previous block and encryption cannot be parallelized
**CTR**: uses counter and nonce (similar to IV) per block to allow each block to be encrypted concurrently

CBC mode is suspectable to [Padding oracle attack (Vaudenay Attack)](https://www.wikiwand.com/en/articles/Padding_oracle_attack)
[Moxie Marlinspike >> Blog >> The Cryptographic Doom Principle](https://moxie.org/2011/12/13/the-cryptographic-doom-principle.html)
Always Encrypt-then-MAC, so that verifying the MAC does not involve decryption

**Counter mode** transforms a block cipher into a stream cipher.

[Authenticated encryption - Wikiwand](https://www.wikiwand.com/en/Authenticated_encryption) GCM, CCM, protects against chosen ciphertext attack on decryption oracle
[Authenticated Encryption in .NET with AES-GCM](https://www.scottbrady91.com/c-sharp/aes-gcm-dotnet)

#### DES

> Even Triple DES (3-DES) is not recommended

[Data Encryption Standard - Wikiwand](https://www.wikiwand.com/en/articles/Data_Encryption_Standard)
[【计算机博物志】DES的生与死 - YouTube](https://www.youtube.com/watch?v=uD_zCOKuYPc)

#### AES

[Advanced Encryption Standard - Wikiwand](https://www.wikiwand.com/en/Advanced_Encryption_Standard)
[Lecture 8: AES: The Advanced Encryption Standard](https://engineering.purdue.edu/kak/compsec/NewLectures/Lecture8.pdf)
[Protect your TCP tunnel by implementing AES encryption with Python [Tutorial] | Packt Hub](https://hub.packtpub.com/protect-tcp-tunnel-implementing-aes-encryption-with-python/)

[Crypto competitions: AES: the Advanced Encryption Standard](http://competitions.cr.yp.to/aes.html)
[AES Explained (Advanced Encryption Standard) - Computerphile - YouTube](https://www.youtube.com/watch?v=O4xNJsjtN6E)
[AES GCM (Advanced Encryption Standard in Galois Counter Mode) - Computerphile - YouTube](https://www.youtube.com/watch?v=-fpVv_T4xwA)
[One Encryption Standard to Rule Them All! - Computerphile - YouTube](https://www.youtube.com/watch?v=VYech-c5Dic)
[Almost All Web Encryption Works Like This (SP Networks) - Computerphile - YouTube](https://www.youtube.com/watch?v=DLjzI5dX8jc)
[AES: How to Design Secure Encryption - YouTube](https://www.youtube.com/watch?v=C4ATDMIz5wc)

CTR mode, also known as Counter mode, is a stream cipher mode of AES encryption. With stream cipher encryption, it is not necessary to encrypt the plaintext in fixed blocks like AES in CBC mode, which encrypts data in 16-byte blocks. If the plaintext to be encrypted is smaller than the block size, padding is required to process a complete 16-byte block.

#### ARIA

[ARIA (cipher) - Wikiwand](<https://www.wikiwand.com/en/articles/ARIA_(cipher)>)

[RFC 5794 - A Description of the ARIA Encryption Algorithm](https://datatracker.ietf.org/doc/html/rfc5794/)

[AES-256 vs ARIA-256 | Popular Encryption Standards Comparison](https://mojoauth.com/compare-encryption-algorithms/aes-256-vs-aria-256)

#### Commands

[opessl](https://askubuntu.com/a/60713) openssl is for proof of concept

```sh
man enc  # show ciphers

# encryption
openssl aes-256-cbc -in attack-plan.txt -out message.enc

# decryption
openssl aes-256-cbc -d -in message.enc -out plain-text.txt

# speed comparison
openssl speed -aes-256-cbc -aria-256-cbc
```

[gpg](https://askubuntu.com/a/449647)

```sh
# encryption
gpg --cipher-algo AES256 --symmetric filename.tar.gz

# decryption
gpg --output filename.tar.gz --decrypt filename.tar.gz.gpg
```

[AES Crypt](https://www.aescrypt.com/download/)
[aescrypt](https://askubuntu.com/a/60875)

### Stream Ciphers

#### Chacha Cipher

> alternative to AES

[Chacha Cipher - Computerphile - YouTube](https://www.youtube.com/watch?v=UeIpq-C-GSA)
[RFC 8439 - ChaCha20 and Poly1305 for IETF Protocols](https://datatracker.ietf.org/doc/html/rfc8439)
ARX cipher: add, rotate, xor

[The design of Chacha20](https://loup-vaillant.fr/tutorials/chacha20-design) encryption
[The design of Poly1305](https://loup-vaillant.fr/tutorials/poly1305-design) MAC

## Asymmetric Cryptography

[Public-key cryptography - Wikiwand](https://www.wikiwand.com/en/articles/Public-key_cryptography)
[Asymmetric Encryption: An Introduction To Asymmetric Cryptography](https://komodoplatform.com/en/academy/asymmetric-encryption/)
Public Key crypto simply works with numbers. This means that any messages would have to be converted into a number before being encrypted.

There are generally three things asymmetric algorithms can do:

- Encrypt/decrypt
- Sign/verify
- Key exchange

However, not all algorithms can perform all functions:

- RSA: Used for encryption, decryption, signing, and verifying.
- DSA: Used for signing and verifying.
- Diffie-Hellman: Used for key exchange.
- ECC: Used for signing and verifying (ECDSA), key exchange (ECDH), and encryption and decryption (EC ElGamal)

[密码学学习笔记*05*公钥密码系统 - 知乎](https://zhuanlan.zhihu.com/p/562371235)

### Backdoors in Asymmetric Cryptography

[Why I don’t Trust NIST P-256 | Credelius](https://credelius.com/credelius/?p=97)
[How to manipulate curve standards: a white paper for the black hat](https://eprint.iacr.org/2014/571.pdf)

[How the NSA (may have) put a backdoor in RSA’s cryptography: A technical primer](https://blog.cloudflare.com/how-the-nsa-may-have-put-a-backdoor-in-rsas-cryptography-a-technical-primer/)

NIST's P-256, P-384, P-521 curves are distrusted
Curve25519, Curve448 are used by the community

### RSA

[[crypto-rsa-example]]

[RSA (cryptosystem) - Wikiwand](<https://www.wikiwand.com/en/RSA_(cryptosystem)>)
[How does RSA work? – Hacker Noon](https://hackernoon.com/how-does-rsa-work-f44918df914b)

[PKCS 1 - Wikiwand](https://www.wikiwand.com/en/articles/PKCS_1)
[RFC 8017 - PKCS #1: RSA Cryptography Specifications Version 2.2](https://datatracker.ietf.org/doc/html/rfc8017)

[RSA Signing is Not RSA Decryption](https://www.cs.cornell.edu/courses/cs5430/2015sp/notes/rsa_sign_vs_dec.php) optimal asymmetric encryption padding (OAEP) is used for pre/post-processing before RSA

[Prime Numbers & RSA Encryption Algorithm - Computerphile - YouTube](https://www.youtube.com/watch?v=JD72Ry60eP4)
[Breaking RSA - Computerphile - YouTube](https://www.youtube.com/watch?v=-ShwJqAalOk)
[The RSA Encryption Algorithm (1 of 2: Computing an Example) - YouTube](https://www.youtube.com/watch?v=4zahvcJ9glg)
[The RSA Encryption Algorithm (2 of 2: Generating the Keys) - YouTube](https://www.youtube.com/watch?v=oOcTVTpUsPQ)
[How prime numbers protect your privacy #SoME2 - YouTube](https://www.youtube.com/watch?v=BScMvVH6U4E)

- Generate two large co-prime numbers, p and q.
- Find n = pq and phi = (p-1) (q-1)
- Select e such that 1 < e < phi, and e is coprime of phi
- Find d, which is the multiplicative inverse of e modulo phi.
- The couple (e, n) is the public key
- The couple (d, n) is the private key
- Ciphertext c = m^e mod n
- Plaintext m = c^d mod n

- RSA keypair is actually a trio of numbers `e`, `n` and `d` related such that `m^de%n=m`
- public key: `(e, n)`, private key: `d`
- `s = h^d%n`, `s` = signature, `h` = hash of message `m`
- To verify, check if `s^e%n` equals `h`

[Pretty Good Privacy (PGP) and Digital Signatures | Linux Journal](https://www.linuxjournal.com/content/pretty-good-privacy-pgp-and-digital-signatures)

[Passive SSH Key Compromise via Lattices | Proceedings of the 2023 ACM SIGSAC Conference on Computer and Communications Security](https://dl.acm.org/doi/10.1145/3576915.3616629)

### Elliptic Curve Cryptography (ECC)

[ANSI X9.62-2005_317.pdf](https://img.antpedia.com/standard/pdf/A11/1610/ANSI%20X9.62-2005_317.pdf) The Elliptic Curve Digital Signature Algorithm
[FIPS 186-5, Digital Signature Standard (DSS) | CSRC](https://csrc.nist.gov/pubs/fips/186-5/final) P-192, P-256, P-384 curves
[RFC 5639 - Elliptic Curve Cryptography (ECC) Brainpool Standard Curves and Curve Generation](https://datatracker.ietf.org/doc/html/rfc5639) avoid potential patent issues associated other ECC curves

[RFC 6979 - Deterministic Usage of the Digital Signature Algorithm (DSA) and Elliptic Curve Digital Signature Algorithm (ECDSA)](https://datatracker.ietf.org/doc/html/rfc6979)
[RFC 6605 - Elliptic Curve Digital Signature Algorithm (DSA) for DNSSEC](https://datatracker.ietf.org/doc/html/rfc6605)
[A (Relatively Easy To Understand) Primer on Elliptic Curve Cryptography](https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/)
[Elliptic Curve Cryptography: a gentle introduction - Andrea Corbellini](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/)
[how does ECDSA works - Phind](https://www.phind.com/search/cm779cpp600012v6s6jieo57z)
[Paul Miller — Learning fast elliptic-curve cryptography](https://paulmillr.com/posts/noble-secp256k1-fast-ecc/)
[ECDSA: Elliptic Curve Signatures | Practical Cryptography for Developers](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages)
[EdDSA and Ed25519 | Practical Cryptography for Developers](https://cryptobook.nakov.com/digital-signatures/eddsa-and-ed25519)
[Elliptic Curves over Finite Fields | By RareSkills – RareSkills](https://rareskills.io/post/elliptic-curves-finite-fields) basic ZKP

[RFC 8032 - Edwards-Curve Digital Signature Algorithm (EdDSA)](https://datatracker.ietf.org/doc/html/rfc8032)
[EdDSA Keys and Signatures](https://docs.keyfactor.com/ejbca/9.0/eddsa-keys-and-signatures)

[Ed25519: high-speed high-security signatures](https://ed25519.cr.yp.to/) highly efficient algo with strengh similar to RSA with ~3000-bit keys
[A Deep dive into Ed25519 Signatures](https://cendyne.dev/posts/2022-03-06-ed25519-signatures.html)

[ECDSA vs EdDSA - Sefik Ilkin Serengil](https://sefiks.com/2023/08/31/ecdsa-vs-eddsa/) EdDSA is more effient and secure than ECDSA
[cryptography - SSH Key: Ed25519 vs RSA - Information Security Stack Exchange](https://security.stackexchange.com/questions/90077/ssh-key-ed25519-vs-rsa)

### age

[FiloSottile/age: A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.](https://github.com/FiloSottile/age)

## Ciphertext indistinguishability

[Ciphertext indistinguishability - Wikiwand](https://www.wikiwand.com/en/articles/Ciphertext_indistinguishability)
[Chosen-plaintext attack - Wikiwand](https://www.wikiwand.com/en/articles/Chosen-plaintext_attack)
[Chosen-ciphertext attack - Wikiwand](https://www.wikiwand.com/en/articles/Chosen_ciphertext_attack) CCA
[Adaptive chosen-ciphertext attack - Wikiwand](https://www.wikiwand.com/en/articles/Adaptive_chosen_ciphertext_attack)

- indistinguishability under chosen plaintext attack (IND-CPA)
- indistinguishability under (non-adaptive) chosen ciphertext attack (IND-CCA1)
- indistinguishability under adaptive chosen ciphertext attack (IND-CCA2)

These are useful for proving the protocol is Universal Composable.
[Universal composability - Wikipedia](https://en.wikipedia.org/wiki/Universal_composability)
[Universally Composable Security: A New Paradigm for Cryptographic Protocols](https://eprint.iacr.org/2000/067)
[encryption - What is universal composability guaranteeing, specifically? Where does it apply, and where does it not? - Cryptography Stack Exchange](https://crypto.stackexchange.com/questions/85739/what-is-universal-composability-guaranteeing-specifically-where-does-it-apply)

## Algorithms

Bit security measures the number of trials required to brute-force a key. 128 bit security means 2128 trials to break.

[Cryptographic nonce - Wikiwand](https://www.wikiwand.com/en/Cryptographic_nonce)
[Comparison of cryptography libraries - Wikiwand](https://www.wikiwand.com/en/Comparison_of_cryptography_libraries)

[Computer and Network Security by Avi Kak](https://engineering.purdue.edu/kak/compsec/)

### Hashing/Key Derivation Function

[Key derivation function - Wikiwand](https://www.wikiwand.com/en/articles/Key_derivation_function)
[HKDF - Wikiwand](https://www.wikiwand.com/en/articles/HKDF) HMAC (keyed cryptographic hash functions) are candidates KDF
[Cryptographic Extraction and Key Derivation: The HKDF Scheme](https://eprint.iacr.org/2010/264)

[KEM Combiners](https://eprint.iacr.org/2018/024.pdf) secure pseudorandom function (PRF)
[X-Wing](https://eprint.iacr.org/2024/039.pdf) IND-CCA KEM
[On Robust Combiners for Oblivious Transfer and Other Primitives | SpringerLink](https://link.springer.com/chapter/10.1007/11426639_6)
[draft-irtf-cfrg-hybrid-kems-03 - Hybrid PQ/T Key Encapsulation Mechanisms](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hybrid-kems/) hybrid KEM schemes, security considerations

[Secure Hash Algorithms - Wikiwand](https://www.wikiwand.com/en/articles/Secure_Hash_Algorithms) SHA
[SHA: Secure Hashing Algorithm - Computerphile - YouTube](https://www.youtube.com/watch?v=DMtFhACPnTY)

[SHA-1 - Wikiwand](https://www.wikiwand.com/en/articles/SHA-1)
[FIPS 180-1, Secure Hash Standard | CSRC](https://csrc.nist.gov/pubs/fips/180-1/final)

[SHA-2 - Wikiwand](https://www.wikiwand.com/en/articles/SHA-2)
[FIPS 180-4, Secure Hash Standard (SHS) | CSRC](https://csrc.nist.gov/pubs/fips/180-4/upd1/final)
[SHA2 Fatal Flaw? (Hash Length Extension Attack) - Computerphile - YouTube](https://www.youtube.com/watch?v=gOIBUe1fjX0)
[Coding a SHA2 Length Extension Attack - Computerphile - YouTube](https://www.youtube.com/watch?v=XQo6rLdFlCg)

[SHA-3 - Wikiwand](https://www.wikiwand.com/en/articles/SHA-3) Kaccak, SHAKE
[FIPS 202, SHA-3 Standard: Permutation-Based Hash and Extendable-Output Functions | CSRC](https://csrc.nist.gov/pubs/fips/202/final)
SHAKE (Sponge Function) allows for hashing arbitrary length input and generating arbitrary length output
[SHA-3, Keccak and SHAKE (Sponge Function) - YouTube](https://www.youtube.com/watch?v=bTOJ9An9wpE)

[RFC 6194 - Security Considerations for the SHA-0 and SHA-1 Message-Digest Algorithms](https://datatracker.ietf.org/doc/html/rfc6194) 💀 deprecated
[RFC 6234 - US Secure Hash Algorithms (SHA and SHA-based HMAC and HKDF)](https://datatracker.ietf.org/doc/html/rfc6234) SHA-2
[RFC 5869 - HMAC-based Extract-and-Expand Key Derivation Function (HKDF)](https://datatracker.ietf.org/doc/html/rfc5869)
[RFC 7693 - The BLAKE2 Cryptographic Hash and Message Authentication Code (MAC)](https://datatracker.ietf.org/doc/html/rfc7693.html)
[RFC 4418 - UMAC: Message Authentication Code using Universal Hashing](https://datatracker.ietf.org/doc/html/rfc4418) UHASH is very efficient on 32-bits CPU (embedded systems)

[SP 800-56C Rev. 2, Recommendation for Key-Derivation Methods in Key-Establishment Schemes | CSRC](https://csrc.nist.gov/pubs/sp/800/56/c/r2/final)
[SP 800-108 Rev. 1, Recommendation for Key Derivation Using Pseudorandom Functions | CSRC](https://csrc.nist.gov/pubs/sp/800/108/r1/upd1/final)
[SP 800-227, Recommendations for Key-Encapsulation Mechanisms | CSRC](https://csrc.nist.gov/pubs/sp/800/227/ipd)

[Key derivation function - Wikiwand](https://www.wikiwand.com/en/articles/Key_derivation_function)
[Key Derivation Functions vs. Password Hashing Schemes - Cryptography Stack Exchange](https://crypto.stackexchange.com/questions/70716/key-derivation-functions-vs-password-hashing-schemes)
[encryption - What is the difference between Key Derivation Function and (salted) Hash? - Information Security Stack Exchange](https://security.stackexchange.com/questions/95410/what-is-the-difference-between-key-derivation-function-and-salted-hash)

#### Storing password/Password hashing

> the (password) hashing function should be relatively expensive to calculate in case of brute-force attacks
> it takes a password, a salt, and a cost factor as inputs then generate a password hash for storage

[How To Safely Store A Password | codahale.com](https://codahale.com/how-to-safely-store-a-password/) `bcrypt`
[Secure Salted Password Hashing - How to do it Properly](https://crackstation.net/hashing-security.htm)
[The difference between Encryption, Hashing and Salting](https://www.thesslstore.com/blog/difference-encryption-hashing-salting/)
[Best practices for password hashing and storage - draft-ietf-kitten-password-storage](https://datatracker.ietf.org/doc/html/draft-ietf-kitten-password-storage/) expired 2022-03-31
[Serious Security: How to store your users’ passwords safely – Naked Security](https://nakedsecurity.sophos.com/2013/11/20/serious-security-how-to-store-your-users-passwords-safely/)
[How Dropbox securely stores your passwords | Dropbox Tech Blog](https://blogs.dropbox.com/tech/2016/09/how-dropbox-securely-stores-your-passwords/)
[Salt (cryptography) - Wikiwand](<https://www.wikiwand.com/en/Salt_(cryptography)>)

[cryptography - Do any security experts recommend bcrypt for password storage? - Information Security Stack Exchange](http://security.stackexchange.com/questions/4781/do-any-security-experts-recommend-bcrypt-for-password-storage)
[BCrypt Explained - DEV Community 👩‍💻👨‍💻](https://dev.to/sylviapap/bcrypt-explained-4k5c)

[scrypt - Wikiwand](https://www.wikiwand.com/en/Scrypt)
[RFC 7914 - The scrypt Password-Based Key Derivation Function](https://datatracker.ietf.org/doc/html/rfc7914.html)

[bcrypt - Wikiwand](https://www.wikiwand.com/en/Bcrypt)
[Bcrypt, a Popular Password Hashing Algorithm, Starts Its Long Goodbye | WIRED](https://www.wired.com/story/bcrypt-password-hashing-25-years/)

[PBKDF2 - Wikiwand](https://www.wikiwand.com/en/PBKDF2)
[PBKDF2 Hashing Algorithm. Before moving into the PBKDF2 hashing… | by Nishothan Vettivel | Medium](https://nishothan-17.medium.com/pbkdf2-hashing-algorithm-841d5cc9178d)
[PBKDF2 and Encrypting Data. What keeps your wireless access point… | by Prof Bill Buchanan OBE FRSE | Jan, 2025 | Medium](https://billatnapier.medium.com/pbkdf2-and-encrypting-data-d50a98056dfe)
[RFC 2898 - PKCS #5: Password-Based Cryptography Specification Version 2.0](https://datatracker.ietf.org/doc/html/rfc2898)

[lukeed/salteen: A snappy and lightweight (259B) utility to encrypt and decrypt values with salt.](https://github.com/lukeed/salteen)

[multiformats/multihash: Self describing hashes - for future proofing](https://github.com/multiformats/multihash)

[Argon2 - Wikiwand](https://www.wikiwand.com/en/Argon2)
[P-H-C/phc-winner-argon2: The password hash Argon2, winner of PHC](https://github.com/P-H-C/phc-winner-argon2)
[How to enable Argon2 KDF in Bitwarden - gHacks Tech News](https://www.ghacks.net/2023/02/15/bitwarden-password-manager-introduces-support-for-argon2-kdf-iterations/)

### Authenticity

[Hash vs. Message Authentication Code | Baeldung on Computer Science](https://www.baeldung.com/cs/hash-vs-mac)

MAC ~= hashing with shared key
less prune to replay attack

[Message authentication code - Wikiwand](https://www.wikiwand.com/en/Message_authentication_code) MAC
[Hash-based message authentication code - Wikiwand](https://www.wikiwand.com/en/Hash-based_message_authentication_code) HMAC, hash with secret key
[Moxie Marlinspike >> Blog >> The Cryptographic Doom Principle](http://www.thoughtcrime.org/blog/the-cryptographic-doom-principle/) Encrypt-then-MAC
[Mandatory Access Control](https://www.cs.cornell.edu/courses/cs5430/2015sp/notes/mac.php)

[HMAC - Wikiwand](https://www.wikiwand.com/en/articles/HMAC)
[Securing Stream Ciphers (HMAC) - Computerphile - YouTube](https://www.youtube.com/watch?v=wlSG3pEiQdc)
[RFC 2104 - HMAC: Keyed-Hashing for Message Authentication](https://datatracker.ietf.org/doc/html/rfc2104)

If both encryption and authentication are required, consider [authenticated encryption](https://www.wikiwand.com/en/articles/Authenticated_encryption) and authenticated encryption with associated data (AEAD), such as AES-GCM.

[draft-irtf-cfrg-aead-limits-10 - Usage Limits on AEAD Algorithms](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-aead-limits-10)

Digital Signatures: encrypt a known data (nonce or message hash) with sender's private key
Certificate Authorities: a trusted third party that will digitally sign and publish the public key bound to a user or entity

## Implementation

Most TLS library provides crypto layer
[[openssl]]
[[openssl#Alternate Implementations]]

[[openssl]]

[The Linux Crypto API for user applications](https://blog.cloudflare.com/the-linux-crypto-api-for-user-applications/)
This is slower than OpenSSL

[Welcome to pyca/cryptography — Cryptography documentation](https://cryptography.io/en/latest/)
[pyca/cryptography: cryptography is a package designed to expose cryptographic primitives and recipes to Python developers.](https://github.com/pyca/cryptography)

[NaCl](https://nacl.cr.yp.to/)
[Introduction | libsodium](https://doc.libsodium.org/)
[jedisct1/libsodium: A modern, portable, easy to use crypto library.](https://github.com/jedisct1/libsodium)

[PyNaCl: Python binding to the libsodium library — PyNaCl documentation](https://pynacl.readthedocs.io/en/latest/)
[pyca/pynacl: Python binding to the Networking and Cryptography (NaCl) library](https://github.com/pyca/pynacl)

[cryptlib Encryption Toolkit](https://www.cs.auckland.ac.nz/~pgut001/cryptlib/html)
[cryptlib/cryptlib: cryptlib security toolkit](https://github.com/cryptlib/cryptlib)

[Welcome to PyCryptodome’s documentation](https://www.pycryptodome.org/) `pycryptodome` provides `Crypto` package (to replace PyCrypto), `pycryptodomex` provides `Cryptodome` package
[Legrandin/pycryptodome: A self-contained cryptographic library for Python](https://github.com/Legrandin/pycryptodome)

[AES instruction set - Wikiwand](https://www.wikiwand.com/en/AES_instruction_set)

## Key Exchange

[Key Exchange Problems - Computerphile - YouTube](https://www.youtube.com/watch?v=vsXMMT2CqqE)
[RFC 9142 - Key Exchange (KEX) Method Updates and Recommendations for Secure Shell (SSH)](https://datatracker.ietf.org/doc/html/rfc9142)

[End to End Encryption (E2EE) - Computerphile - YouTube](https://www.youtube.com/watch?v=jkV1KEJGKRA)
[How Signal Instant Messaging Protocol Works (& WhatsApp etc) - Computerphile - YouTube](https://www.youtube.com/watch?v=DXv1boalsDI)

[SP 800-56A Rev. 3, Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography | CSRC](https://csrc.nist.gov/pubs/sp/800/56/a/r3/final)
[SP 800-56B Rev. 2, Recommendation for Pair-Wise Key-Establishment Using Integer Factorization Cryptography | CSRC](https://csrc.nist.gov/pubs/sp/800/56/b/r2/final)

### Non-Interactive Key Exchange (NIKE)

no challenges are presented to be validated
[Random oracle - Wikiwand](https://www.wikiwand.com/en/articles/Random_oracle)

[Understanding Non-Interactive Key Exchange in Cryptography !🔐🌐 | by Samuel Guxegdsa | Medium](https://medium.com/@quxegdsa/understanding-non-interactive-key-exchange-in-cryptography-682e604dfff3) only sends a single, asynchronous message from each party
[Non-Interactive Key Exchange | SpringerLink](https://link.springer.com/chapter/10.1007/978-3-642-36362-7_17)
[Non-Interactive Key Exchange](https://www.iacr.org/archive/pkc2013/77780251/77780251.pdf)
[Cryptographic algorithms as interactive and non-interactive proofs | by Filza | Xord | Medium](https://medium.com/xord/cryptographic-algorithms-as-interactive-and-non-interactive-proofs-263183d87e25)

### Diffie–Hellman key exchange

[Diffie–Hellman key exchange - Wikiwand](https://www.wikiwand.com/en/articles/Diffie%E2%80%93Hellman_key_exchange)
[Elliptic-curve Diffie–Hellman - Wikiwand](https://www.wikiwand.com/en/articles/Elliptic-curve_Diffie%E2%80%93Hellman)
[Implementation of Diffie-Hellman Algorithm - GeeksforGeeks](https://www.geeksforgeeks.org/implementation-diffie-hellman-algorithm/)

Traditional DH:

- one party choose and announce `g`, `p`
- party A choose secret `a` and announce public key `A = g^a mod p`
- party B choose secret `b` and announce public `B = g^b mod p`
- party A compute `B^a mod p`, party B compute `A^b mod p`
- the number should be the same (note `B^a = A^b = g^ab` in `mod p` group) and can be used as session key (or pre-master key)

ECDH:

- party A choose secret key `d_a`, public key `H_a` on Elliptic-curve with base point `G`
- party B choose secret key `d_b`, public key `H_b` on Elliptic-curve with the same base point `G`
- the public keys `H_a` and `H_b` are announced
- party A compute `d_a*H_b`, party B compute `d_b*H_a`,
- the number should be the same (note `d_a*H_b = d_a*(d_b*G) = d_b*(d_a*G) = d_b*H_a`) and can be used as session key (or pre-master key)

[PKCS #3: Diffie-Hellman Key-Agreement Standard](https://www.teletrust.de/fileadmin/files/oid/oid_pkcs-3v1-4.pdf)
[Intro to PKCS #3: Diffie-Hellman Key Agreement Standard – wolfSSL](https://www.wolfssl.com/intro-to-pkcs-3-diffie-hellman-key-agreement-standard-2/)

[RFC 2631 - Diffie-Hellman Key Agreement Method](https://datatracker.ietf.org/doc/html/rfc2631)
[RFC 7919 - Negotiated Finite Field Diffie-Hellman Ephemeral Parameters for Transport Layer Security (TLS)](https://datatracker.ietf.org/doc/html/rfc7919)
[RFC 8422 - Elliptic Curve Cryptography (ECC) Cipher Suites for Transport Layer Security (TLS) Versions 1.2 and Earlier](https://datatracker.ietf.org/doc/html/rfc8422)

[Secret Key Exchange (Diffie-Hellman) - Computerphile - YouTube](https://www.youtube.com/watch?v=NmM9HA2MQGI)
[Diffie Hellman -the Mathematics bit- Computerphile - YouTube](https://www.youtube.com/watch?v=Yjrfm_oRO0w)
[Diffie-Hellman Key Exchange: How to Share a Secret - YouTube](https://www.youtube.com/watch?v=85oMrKd8afY)

[Double Ratchet Messaging Encryption - Computerphile - YouTube](https://www.youtube.com/watch?v=9sO2qdTci-s) Extended Triple Diffie–Hellman (X3DH)
[Signal >> Specifications >> The X3DH Key Agreement Protocol](https://signal.org/docs/specifications/x3dh/)

Signal's protocol, requires identity key
[Post-Quantum Extended Diffie–Hellman - Wikiwand](https://www.wikiwand.com/en/articles/Post-Quantum_Extended_Diffie%E2%80%93Hellman)
[Cryspen | An Analysis of Signal's PQXDH](https://cryspen.com/post/pqxdh/)

[[2501.09568] Quantum Diffie-Hellman key exchange](https://arxiv.org/abs/2501.09568) Quantum system

### Internet Key Exchange (IKE)

> used by many technologies that are protected by IPsec, e.g. VPN, SFTP, SSH and Point-to-Point Protocol (PPP).

[IPsec - Wikiwand](https://www.wikiwand.com/en/articles/IPsec)
[Internet Key Exchange - Wikiwand](https://www.wikiwand.com/en/articles/Internet_Key_Exchange)
[What is Internet Key Exchange (IKE) and How Does It Work? | Definition from TechTarget](https://www.techtarget.com/searchsecurity/definition/Internet-Key-Exchange)
[what is Internet Key Exchange Protocol Version 2 (IKEv2)? - Phind](https://www.phind.com/search/cm8408zf200002v6qsxn7kfbz)

[RFC 4306 - Internet Key Exchange (IKEv2) Protocol](https://datatracker.ietf.org/doc/html/rfc4306/)
[RFC 4754 - IKE and IKEv2 Authentication Using the Elliptic Curve Digital Signature Algorithm (ECDSA)](https://datatracker.ietf.org/doc/html/rfc4754)
[RFC 8784 - Mixing Preshared Keys in the Internet Key Exchange Protocol Version 2 (IKEv2) for Post-quantum Security](https://datatracker.ietf.org/doc/html/rfc8784)
[RFC 9242 - Intermediate Exchange in the Internet Key Exchange Protocol Version 2 (IKEv2)](https://datatracker.ietf.org/doc/html/rfc9242/) allow large-sized keys
[RFC 9370 - Multiple Key Exchanges in the Internet Key Exchange Protocol Version 2 (IKEv2)](https://datatracker.ietf.org/doc/html/rfc9370/) allows multiple rounds of key exchanges
[Internet Key Exchange Version 2 (IKEv2) Parameters](https://www.iana.org/assignments/ikev2-parameters/ikev2-parameters.xhtml)

[SIGMA: The ‘SIGn-and-MAc’ Approach to Authenticated Diffie-Hellman and Its Use in the IKE Protocols | SpringerLink](https://link.springer.com/chapter/10.1007/978-3-540-45146-4_24)

## Attribute-Based Encryption

[A Gentle Introduction to Attribute-Based Encryption](https://medium.com/@dbkats/a-gentle-introduction-to-attribute-based-encryption-edca31744ac6)

## Signature

[What are Digital Signatures? - Computerphile - YouTube](https://www.youtube.com/watch?v=s22eJ1eVLTU)

[RSA and Digital Signatures - GeeksforGeeks](https://www.geeksforgeeks.org/rsa-and-digital-signatures/)
[Digital Signature Algorithm (DSA) - GeeksforGeeks](https://www.geeksforgeeks.org/digital-signature-algorithm-dsa/)
[Blockchain - Elliptic Curve Digital Signature Algorithm (ECDSA) - GeeksforGeeks](https://www.geeksforgeeks.org/blockchain-elliptic-curve-digital-signature-algorithm-ecdsa/)

Complexity of ECDSA is not deterministic

[[#RSA]]
[[#Elliptic Curve Cryptography (ECC)]]

### BLS

[BLS digital signature - Wikiwand](https://www.wikiwand.com/en/articles/BLS_digital_signature)
[BLS Signature for Busy People](https://gist.github.com/paulmillr/18b802ad219b1aee34d773d08ec26ca2)
[Crypto Pills #11: BLS Signatures. BLS (Boneh–Lynn–Shacham) signatures… | by Guilherme Balena Versiani | Medium](https://medium.com/@guibv.avatar/crypto-pills-11-bls-signatures-6d492618960c)

## Steganography

[Steganography - Wikiwand](https://www.wikiwand.com/en/Steganography)
[隐写术鉴赏 - YouTube](https://www.youtube.com/watch?v=AmqOrrOv5Uw)

[Outguess – Rbcafe](https://www.rbcafe.com/software/outguess/)
[OutGuess - Wikiwand](https://www.wikiwand.com/en/articles/OutGuess)
[resurrecting-open-source-projects/outguess: Universal steganographic tool](https://github.com/resurrecting-open-source-projects/outguess)

[StegCloak](https://stegcloak.surge.sh/)
[KuroLabs/stegcloak: Hide secrets with invisible characters in plain text securely using passwords 🧙🏻‍♂️⭐](https://github.com/KuroLabs/stegcloak)
[How to Hide Secrets in Strings— Modern Text hiding in JavaScript | by Mohan Sundar | Bits and Pieces](https://blog.bitsrc.io/how-to-hide-secrets-in-strings-modern-text-hiding-in-javascript-613a9faa5787)

[resurrecting-open-source-projects/outguess: Universal steganographic tool](https://github.com/resurrecting-open-source-projects/outguess)

## Homomorphic Encryption

> ciphertext that can be processed or analyzed

[Homomorphic encryption - Wikiwand](https://www.wikiwand.com/en/articles/Homomorphic_encryption)
[Fully Homomorphic Encryption | We are a community of researchers and developers interested in advancing homomorphic encryption and other secure computation techniques.](https://fhe.org/)

[Fully Homomorphic Encryption | Resources](https://fhe.org/resources/) ❗!important
[[2503.05136] The Beginner's Textbook for Fully Homomorphic Encryption](https://arxiv.org/abs/2503.05136)
[The Beginner’s Textbook for Fully Homomorphic Encryption](https://fhetextbook.github.io/) online version

[Homomorphic Encryption: How It Works | Splunk](https://www.splunk.com/en_us/blog/learn/homomorphic-encryption.html)
[What Is Homomorphic Encryption?](https://www.techtarget.com/searchsecurity/definition/homomorphic-encryption)

[3 Homomorphic Encryption Trends for 2025](https://www.itprotoday.com/data-privacy/three-homomorphic-encryption-trends-for-2025)

[How a 7-Year-Old Can Understand FHE / Fully Homomorphic Encryption | by Nothing Research | Medium](https://medium.com/@Nothing_Research/how-a-7-year-old-can-understand-fhe-fully-homomorphic-encryption-2134505e82d1)
[Advanced FHE Protocols for the Blockchain (RWC 2024) - YouTube](https://www.youtube.com/watch?v=O6jXe8Wsfi8)

## Homomorphic Encryption vs Zero Knowledge

[Fully Homomorphic Encryption and Zero Knowledge: Data security secrets | by Illy’s Web3 blog | Medium](https://web3illy.medium.com/fully-homomorphic-encryption-and-zero-knowledge-data-security-secrets-70d760c4de3d)
[FHE Vs ZK Vs MPC, what are the differences between the three encryption technologies? | Odaily星球日报 on Binance Square](https://www.binance.com/en/square/post/10991094781793)

## Privacy

> see [[crypto#Zero-knowledge proof/ZKP]]

[Privacy-Preserving Data Science, Explained – OpenMined](https://openmined.org/blog/private-machine-learning-explained/)

[crypt.fyi - Open-Source Zero-Knowledge Post-Quantum End-to-End Encrypted One-Time Secret Sharing](https://www.crypt.fyi/)
Zero-Knowledge sharing

[Lattice-based_Zero-knowledge_Proofs_for_Blockchain_Confidential_Transactions.pdf](https://www4.comp.polyu.edu.hk/~shanggao//publications/Lattice-based_Zero-knowledge_Proofs_for_Blockchain_Confidential_Transactions.pdf)

## Zero-knowledge proof/ZKP

[Zero-knowledge proof - Wikiwand](https://www.wikiwand.com/en/Zero-knowledge_proof)
把問題和答案的關聯轉變成機率問題, 透過趨近無窮次的試驗，使猜對的機率趨近 0
[Non-interactive zero-knowledge proof - Wikiwand](https://www.wikiwand.com/en/articles/Non-interactive_zero-knowledge_proof)

[Introduction | ZKDocs](https://www.zkdocs.com/)
[trailofbits/zkdocs: Interactive documentation on zero-knowledge proof systems and related primitives.](https://github.com/trailofbits/zkdocs)

[Zero-Knowledge Proofs: A Beginner's Guide](https://www.dock.io/post/zero-knowledge-proofs)
[Zero Knowledge Proofs: An illustrated primer – A Few Thoughts on Cryptographic Engineering](https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/)
[Zero-knowledge proofs explained in 3 examples](https://www.circularise.com/blogs/zero-knowledge-proofs-explained-in-3-examples)
[What are Zero Knowledge Proofs? – OpenMined](https://openmined.org/blog/zero-knowledge-proof/)
[Zero-knowledge Proof: IZKs, NIZKs, SNARKS, STARKS Explained. | by Mayowa Olatunji (@web3MIO) | Coinmonks | Medium](https://medium.com/coinmonks/zero-knowledge-proof-izks-nizks-snarks-starks-5bc06c96c7ee)

[I can prove I’ve solved this Sudoku without revealing it - YouTube](https://www.youtube.com/watch?v=Otvcbw6k4eo)
[Zero Knowledge Proofs: A Technical Deep Dive - YouTube](https://www.youtube.com/watch?v=JOCUTtEeXyk)
[Zero Knowledge Proofs - YouTube](https://www.youtube.com/watch?v=V5uVKZn3F_4)
[神奇的零知识证明！既能保守秘密，又让别人信你！ - YouTube](https://www.youtube.com/watch?v=FuKEpOhiVPg)

[The Magic of Zero-Knowledge Proofs #SoME3 - YouTube](https://www.youtube.com/watch?v=FfeXX6OLq8w)

- zk-SNARKs (Succinct Non-Interactive Argument of Knowledge)
  [scipr-lab/libsnark: C++ library for zkSNARKs](https://github.com/scipr-lab/libsnark)
  [OpenMined/PyZPK: Python wrapper for open source Zero Proof Knowledge Library](https://github.com/OpenMined/PyZPK)
- zk-STARKs (Scalable Transparent ARguments of Knowledge)
- Bulletproofs
- Folding Schemes
- Lookup

[Full Guide to Understanding zk-SNARKs and zk-STARKS](https://www.cyfrin.io/blog/a-full-comparison-what-are-zk-snarks-and-zk-starks)

[Leveraging Verifiable Credentials and Zero Knowledge Proofs with Sindri GSP1302 - YouTube](https://www.youtube.com/watch?v=fYGwj7mxXZI)
[Zero Knowledge Selective Disclosure (ZK-SD-VCs) | IOTA Documentation](https://docs.iota.org/developer/iota-identity/how-tos/verifiable-credentials/zero-knowledge-selective-disclosure)
[General-Purpose Zero-Knowledge Proofs for Verifiable Credentials](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/education/theses/masters-thesis_damiano-mombelli.pdf) PDF
[rwot9-prague/topics-and-advance-readings/verifiable-credentials-and-zero-knowledge-proof-systems.md at master · WebOfTrustInfo/rwot9-prague](https://github.com/WebOfTrustInfo/rwot9-prague/blob/master/topics-and-advance-readings/verifiable-credentials-and-zero-knowledge-proof-systems.md)

[LeastAuthority/moonmath-manual: A resource for anyone interested in understanding and unlocking the potential of zk-SNARKs, from beginners to experts.](https://github.com/LeastAuthority/moonmath-manual)
[ZK Math Explained: Homomorphisms](https://web.archive.org/web/20251007205447/https://www.cyfrin.io/blog/zk-math-101-homomorphisms)
[ZK Math Explained: Understanding Elliptic Curves](https://web.archive.org/web/20251119082137/https://www.cyfrin.io/blog/zk-math-101-understanding-elliptic-curves)
[ZK Math Explained: The Elliptic Curve Discrete Logarithm Problem](https://web.archive.org/web/20251119073556/https://www.cyfrin.io/blog/zk-math-101-the-elliptic-curve-discrete-logarithm-problem)

ZPK uses different signatures
[draft-irtf-cfrg-bbs-signatures - The BBS Signature Scheme](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bbs-signatures/)
[decentralized-identity/bbs-signature: The BBS Signature Scheme](https://github.com/decentralized-identity/bbs-signature)
[Short Randomizable Signatures](https://eprint.iacr.org/2015/525.pdf) "PS" signature
[Zhiyi-Zhang/PS-Signature-and-EL-PASSO: A C++ Implementation of Short Randomizable Signatures (PS Signatures) and EL PASSO (Privacy-preserving, Asynchronous Single Sign-On)](https://github.com/Zhiyi-Zhang/PS-Signature-and-EL-PASSO)
[Practical Post-Quantum Signatures for Privacy](https://eprint.iacr.org/2024/131.pdf)
[Signatures with efficient protocols](https://grokipedia.com/page/signatures_with_efficient_protocols) Camenisch-Lysyanskaya signature (CL signature), obsolete, signature size linear to message size

[LaZer: a Lattice Library for Zero-Knowledge and Succinct Proofs (RWC 2024) - YouTube](https://www.youtube.com/watch?v=NlQNOPlxFOQ)
[zk-creds: Flexible Anonymous Credentials from zkSNARKs and Existing Identity... (RWC 2024) - YouTube](https://www.youtube.com/watch?v=TKudtC481g4)

[Zero-Knowledge Proofs: How it Works & Use Cases in 2026](https://aimultiple.com/zero-knowledge-proofs)
[Zero-Knowledge Proof (ZKP) — Explained | Chainlink](https://chain.link/education/zero-knowledge-proof-zkp)
[Zero-Knowledge Proof: Applications & Use Cases - Chainlink](https://chain.link/education-hub/zero-knowledge-proof-use-cases)
[(PDF) Zero-knowledge proof framework for privacy-preserving financial compliance](https://www.researchgate.net/publication/390476626_Zero-knowledge_proof_framework_for_privacy-preserving_financial_compliance)

### zkVMs

[The different types of ZK-EVMs](https://vitalik.eth.limo/general/2022/08/04/zkevm.html)

[The Evolution of Rust inside zkVMs - Erik Kadena | RISC Zero - YouTube](https://www.youtube.com/watch?v=6yVNyuY7lDY)
[Zeroing into zkVMs — Taiko Labs](https://taiko.mirror.xyz/e_5GeGGFJIrOxqvXOfzY6HmWcRjCjRyG0NQF1zbNpNQ)
