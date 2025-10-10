---
title: Cryptography
description: ""
created: 2016-01-21
updated: 2025-10-09
tags:
  - crypto
  - cryptography
  - security
---

> crypto does not mean [[blockchain#Cryptocurrency]]

[[enigma-machine]]
[[crypto-shangmi]]
[[crypto-pqc]]

[A Crash Course in Everything Cryptographic – Noteworthy - The Journal Blog](https://blog.usejournal.com/a-crash-course-in-everything-cryptographic-50daa0fda482) ❗!important
[The Genius Math of Modern Encryption - YouTube](https://www.youtube.com/watch?v=XSJLyK9LlnY)

[Crypto Forum (cfrg)](https://datatracker.ietf.org/rg/cfrg/documents/) ❗!important, IETF
[Limited Additional Mechanisms for PKIX and SMIME (lamps)](https://datatracker.ietf.org/wg/lamps/documents/) ❗!important, IETF
[Cryptology ePrint Archive](https://eprint.iacr.org/) ❗!important
[Welcome | Practical Cryptography for Developers](https://cryptobook.nakov.com/)
[nakov/Practical-Cryptography-for-Developers-Book: Practical Cryptography for Developers: Hashes, MAC, Key Derivation, DHKE, Symmetric and Asymmetric Ciphers, Public Key Cryptosystems, RSA, Elliptic Curves, ECC, secp256k1, ECDH, ECIES, Digital Signatures, ECDSA, EdDSA](https://github.com/nakov/practical-cryptography-for-developers-book)

[科普园地\_国家密码管理局](https://www.oscca.gov.cn/sca/zxfw/kpyd.shtml)
[密码学报](http://www.jcr.cacrnet.org.cn/CN/home) 中国密码学会
[中国密码学会 - 密评工作](https://www.cacrnet.org.cn/site/term/123.html)

Course
[Journey into cryptography | Computer science | Computing | Khan Academy](https://www.khanacademy.org/computing/computer-science/cryptography)
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

## Asymmetric Cryptography

[Asymmetric Encryption: An Introduction To Asymmetric Cryptography](https://komodoplatform.com/en/academy/asymmetric-encryption/)

There are generally three things asymmetric algorithms can do:

- Encrypt/decrypt
- Sign/verify
- Key exchange

However, not all algorithms can perform all functions:

- RSA: Used for encryption, decryption, signing, and verifying.
- DSA: Used for signing and verifying.
- Diffie-Hellman: Used for key exchange.
- ECC: Used for signing and verifying (ECDSA), key exchange (ECDH), and encryption and decryption (EC ElGamal)

## Ciphertext indistinguishability

[Ciphertext indistinguishability - Wikiwand](https://www.wikiwand.com/en/articles/Ciphertext_indistinguishability)
[Chosen-plaintext attack - Wikiwand](https://www.wikiwand.com/en/articles/Chosen-plaintext_attack)
[Chosen-ciphertext attack - Wikiwand](https://www.wikiwand.com/en/articles/Chosen_ciphertext_attack) CCA
[Adaptive chosen-ciphertext attack - Wikiwand](https://www.wikiwand.com/en/articles/Adaptive_chosen_ciphertext_attack)

- indistinguishability under chosen plaintext attack (IND-CPA)
- indistinguishability under (non-adaptive) chosen ciphertext attack (IND-CCA1)
- indistinguishability under adaptive chosen ciphertext attack (IND-CCA2)

## Public-Key Cryptography Standards (PKCS)

[PKCS - Wikiwand](https://www.wikiwand.com/en/PKCS)
[What are Public-Key Cryptography Standards (PKCS)?](https://www.techtarget.com/searchsecurity/definition/Public-Key-Cryptography-Standards)
[Guide to Public Key Cryptography Standards in Cyber Security | RSI Security](https://blog.rsisecurity.com/guide-to-public-key-cryptography-standards-in-cyber-security/)

PKCS #1: RSA (RFC8017)
PKCS #3: Diffie–Hellman Key Agreement Standard

[RFC 8018 - PKCS #5: Password-Based Cryptography Specification Version 2.1](https://datatracker.ietf.org/doc/html/rfc8018)
[PBKDF2 - Wikiwand](https://www.wikiwand.com/en/articles/PBKDF2)

[PKCS 7 - Wikiwand](https://www.wikiwand.com/en/articles/PKCS_7)
[RFC 2315 - PKCS #7: Cryptographic Message Syntax Version 1.5](https://datatracker.ietf.org/doc/html/rfc2315)
[RFC 5652 - Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/html/rfc5652) IETF picked up CMS

[Certificate signing request - Wikiwand](https://www.wikiwand.com/en/articles/Certificate_signing_request)
[RFC 2986 - PKCS #10: Certification Request Syntax Specification Version 1.7](https://datatracker.ietf.org/doc/html/rfc2986)

[PKCS 12 - Wikiwand](https://www.wikiwand.com/en/articles/PKCS_12)
[RFC 7292 - PKCS #12: Personal Information Exchange Syntax v1.1](https://datatracker.ietf.org/doc/html/rfc7292)

### PKCS #11

[PKCS 11 - Wikiwand](https://www.wikiwand.com/en/articles/PKCS_11) Cryptoki, C API to communicate with HSM or smart cards
[PKCS #11 Specification Version 3.1](https://docs.oasis-open.org/pkcs11/pkcs11-spec/v3.1/pkcs11-spec-v3.1.html)
[oasis-tcs/pkcs11: OASIS PKCS 11 TC: Repository to support version control for development of technical files associated with the OASIS PKCS11 specification](https://github.com/oasis-tcs/pkcs11)

[An Introduction to PKCS#11](https://www.thalesdocs.com/gphsm/ptk/5.7/docs/Content/PTK-C_Program/intro_PKCS11.htm)

[pkcs11-spec-v3.2-wd13.docx uploaded | OASIS PKCS 11 TC](https://groups.oasis-open.org/discussion/pkcs11-spec-v32-wd13docx-uploaded)

#### Clients

[ThalesGroup/crypto11: Implement crypto.Signer and crypto.Decrypter for HSM-protected keys via PKCS#11](https://github.com/ThalesGroup/crypto11) Go binding

[Java PKCS#11 Reference Guide](https://docs.oracle.com/javase/7/docs/technotes/guides/security/p11guide.html)
[SimpleMethod/PKCS11-Java-Wrapper: A comprehensive Java library for interacting with PKCS#11 (Cryptoki) compatible hardware security modules (HSMs) and smart cards. This wrapper simplifies cryptographic operations while maintaining high security standards.](https://github.com/SimpleMethod/PKCS11-Java-Wrapper) GPL v3

[OpenSC/OpenSC: Open source smart card tools and middleware. PKCS#11/MiniDriver/Tokend](https://github.com/OpenSC/OpenSC) LGPL v2.1

[openCryptoki - An Open Source Implementation of PKCS #11 - IBM Documentation](https://www.ibm.com/docs/en/linux-on-systems?topic=support-opencryptoki-open-source-pkcs-11)
[opencryptoki/opencryptoki: PKCS#11 library and tools for Linux and AIX. Includes tokens supporting IBM crypto hardware as well as a software token.](https://github.com/opencryptoki/opencryptoki)

[c - OpenSC vs openCryptoKI - Stack Overflow](https://stackoverflow.com/a/8658866/665507)
OpenSC is a software stack for smart cards. And it includes a PKCS#11 module. OpenCryptoki is "just" a PKCS#11 module (meaning software-only-module, except for some IBM PCI cards, apparently) that has nothing to do with (most) smart cards.

#### Software implementations

[softhsm/SoftHSMv2: SoftHSM version 2](https://github.com/softhsm/SoftHSMv2)
[SoftHSMv2 · Cloudflare SSL/TLS docs](https://developers.cloudflare.com/ssl/keyless-ssl/hardware-security-modules/softhsmv2/)

[corePKCS11: Overview](https://freertos.github.io/corePKCS11/main/)
[FreeRTOS/corePKCS11: Software implementation of the PKCS #11 standard.](https://github.com/FreeRTOS/corePKCS11)

`yay -S softhsm opensc`

```sh
> softhsm2-util --show-slots
Available slots:
Slot 0
    Slot info:
        Description:      SoftHSM slot ID 0x0
        Manufacturer ID:  SoftHSM project
        Hardware version: 2.6
        Firmware version: 2.6
        Token present:    yes
    Token info:
        Manufacturer ID:  SoftHSM project
        Model:            SoftHSM v2
        Hardware version: 2.6
        Firmware version: 2.6
        Serial number:
        Initialized:      no
        User PIN init.:   no
        Label:

> softhsm2-util --init-token --slot 0 --label Token1
=== SO PIN (4-255 characters) ===
Please enter SO PIN: ******
Please reenter SO PIN: ******
=== User PIN (4-255 characters) ===
Please enter user PIN: ******
Please reenter user PIN: ******
error registering mldsa44 with no hash
The token has been initialized and is reassigned to slot 491172432
A Graduate Course in Applied Cryptography
> pkcs11-tool --show-info --module /usr/lib/softhsm/libsofthsm2.so
error registering mldsa44 with no hash
Cryptoki version 2.40
Manufacturer     SoftHSM
Library          Implementation of PKCS11 (ver 2.6)
Using slot 0 with a present token (0x1d46b250)

> pkcs11-tool --list-slots --module /usr/lib/softhsm/libsofthsm2.so
error registering mldsa44 with no hash
Available slots:
Slot 0 (0x1d46b250): SoftHSM slot ID 0x1d46b250
  token label        : Token1
  token manufacturer : SoftHSM project
  token model        : SoftHSM v2
  token flags        : login required, rng, token initialized, PIN initialized, other flags=0x20
  hardware version   : 2.6
  firmware version   : 2.6
  serial num         : 628ee7169d46b250
  pin min/max        : 4/255
  uri                : pkcs11:model=SoftHSM%20v2;manufacturer=SoftHSM%20project;serial=628ee7169d46b250;token=Token1
Slot 1 (0x1): SoftHSM slot ID 0x1
  token state:   uninitialized
```

## Classical Cryptography

[Classical Cryptography - YouTube](https://www.youtube.com/playlist?list=PLrm9Y---qlNyIhxp6PQp-PQ5CePPc3JhI)

[The Unbreakable Kryptos Code - YouTube](https://www.youtube.com/watch?v=jVpsLMCIB0Y) Vigenère cipher, substitution Cipher

## Algorithms

Bit security measures the number of trials required to brute-force a key. 128 bit security means 2128 trials to break.

[Cryptographic nonce - Wikiwand](https://www.wikiwand.com/en/Cryptographic_nonce)
[Comparison of cryptography libraries - Wikiwand](https://www.wikiwand.com/en/Comparison_of_cryptography_libraries)

[cryptography - Do any security experts recommend bcrypt for password storage? - Information Security Stack Exchange](http://security.stackexchange.com/questions/4781/do-any-security-experts-recommend-bcrypt-for-password-storage)
[BCrypt Explained - DEV Community 👩‍💻👨‍💻](https://dev.to/sylviapap/bcrypt-explained-4k5c)

[Computer and Network Security by Avi Kak](https://engineering.purdue.edu/kak/compsec/)

[lukeed/salteen: A snappy and lightweight (259B) utility to encrypt and decrypt values with salt.](https://github.com/lukeed/salteen)

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

[SP 800-56C Rev. 2, Recommendation for Key-Derivation Methods in Key-Establishment Schemes | CSRC](https://csrc.nist.gov/pubs/sp/800/56/c/r2/final)
[SP 800-108 Rev. 1, Recommendation for Key Derivation Using Pseudorandom Functions | CSRC](https://csrc.nist.gov/pubs/sp/800/108/r1/upd1/final)
[SP 800-227, Recommendations for Key-Encapsulation Mechanisms | CSRC](https://csrc.nist.gov/pubs/sp/800/227/ipd)

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

[scrypt - Wikiwand](https://www.wikiwand.com/en/Scrypt)
[RFC 7914 - The scrypt Password-Based Key Derivation Function](https://datatracker.ietf.org/doc/html/rfc7914.html)

[bcrypt - Wikiwand](https://www.wikiwand.com/en/Bcrypt)
[Bcrypt, a Popular Password Hashing Algorithm, Starts Its Long Goodbye | WIRED](https://www.wired.com/story/bcrypt-password-hashing-25-years/)

[PBKDF2 - Wikiwand](https://www.wikiwand.com/en/PBKDF2)
[PBKDF2 Hashing Algorithm. Before moving into the PBKDF2 hashing… | by Nishothan Vettivel | Medium](https://nishothan-17.medium.com/pbkdf2-hashing-algorithm-841d5cc9178d)
[PBKDF2 and Encrypting Data. What keeps your wireless access point… | by Prof Bill Buchanan OBE FRSE | Jan, 2025 | Medium](https://billatnapier.medium.com/pbkdf2-and-encrypting-data-d50a98056dfe)
[RFC 2898 - PKCS #5: Password-Based Cryptography Specification Version 2.0](https://datatracker.ietf.org/doc/html/rfc2898)

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

[The Linux Crypto API for user applications](https://blog.cloudflare.com/the-linux-crypto-api-for-user-applications/)
This is slower than OpenSSL

[Welcome to pyca/cryptography — Cryptography documentation](https://cryptography.io/en/latest/)
[pyca/cryptography: cryptography is a package designed to expose cryptographic primitives and recipes to Python developers.](https://github.com/pyca/cryptography)

[PyNaCl: Python binding to the libsodium library — PyNaCl documentation](https://pynacl.readthedocs.io/en/latest/)
[pyca/pynacl: Python binding to the Networking and Cryptography (NaCl) library](https://github.com/pyca/pynacl)
[Introduction | libsodium](https://doc.libsodium.org/)
[jedisct1/libsodium: A modern, portable, easy to use crypto library.](https://github.com/jedisct1/libsodium)

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

[PKCS #3: Diffie-Hellman Key-Agreement Standard](https://www.teletrust.de/fileadmin/files/oid/oid_pkcs-3v1-4.pdf)
[Intro to PKCS #3: Diffie-Hellman Key Agreement Standard – wolfSSL](https://www.wolfssl.com/intro-to-pkcs-3-diffie-hellman-key-agreement-standard-2/)

[Diffie–Hellman key exchange - Wikiwand](https://www.wikiwand.com/en/articles/Diffie%E2%80%93Hellman_key_exchange)
[Elliptic-curve Diffie–Hellman - Wikiwand](https://www.wikiwand.com/en/articles/Elliptic-curve_Diffie%E2%80%93Hellman)

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

> used by many technologies that are protected by IPsec, e.g.L VPN, SFTP, SSH and Point-to-Point Protocol (PPP).

[IPsec - Wikiwand](https://www.wikiwand.com/en/articles/IPsec)
[Internet Key Exchange - Wikiwand](https://www.wikiwand.com/en/articles/Internet_Key_Exchange)
[What is Internet Key Exchange (IKE) and How Does It Work? | Definition from TechTarget](https://www.techtarget.com/searchsecurity/definition/Internet-Key-Exchange)
[what is Internet Key Exchange Protocol Version 2 (IKEv2)? - Phind](https://www.phind.com/search/cm8408zf200002v6qsxn7kfbz)

[RFC 4306 - Internet Key Exchange (IKEv2) Protocol](https://datatracker.ietf.org/doc/html/rfc4306/)
[RFC 8784 - Mixing Preshared Keys in the Internet Key Exchange Protocol Version 2 (IKEv2) for Post-quantum Security](https://datatracker.ietf.org/doc/html/rfc8784)
[RFC 9242 - Intermediate Exchange in the Internet Key Exchange Protocol Version 2 (IKEv2)](https://datatracker.ietf.org/doc/html/rfc9242/) allow large-sized keys
[RFC 9370 - Multiple Key Exchanges in the Internet Key Exchange Protocol Version 2 (IKEv2)](https://datatracker.ietf.org/doc/html/rfc9370/) allows multiple rounds of key exchanges
[Internet Key Exchange Version 2 (IKEv2) Parameters](https://www.iana.org/assignments/ikev2-parameters/ikev2-parameters.xhtml)

[SIGMA: The ‘SIGn-and-MAc’ Approach to Authenticated Diffie-Hellman and Its Use in the IKE Protocols | SpringerLink](https://link.springer.com/chapter/10.1007/978-3-540-45146-4_24)

[Quantum Security Made Easy with RFC 8784 Standard | Palo Alto Networks](https://live.paloaltonetworks.com/t5/community-blogs/quantum-security-made-easy-with-rfc-8784-standard/ba-p/574825) intermediate solution using preshared keys IDs, hiding the DH parameters
[Palo Alto Networks Extends Support for Quantum Safe VPN with RFC 9242, RFC 9370 Standards, and Hybrid KEYs | Palo Alto Networks](https://live.paloaltonetworks.com/t5/community-blogs/palo-alto-networks-extends-support-for-quantum-safe-vpn-with-rfc/ba-p/585492)

### PQC Keyex

[tldr.fail](https://tldr.fail/)

[draft-ietf-tls-hybrid-design-12 - Hybrid key exchange in TLS 1.3](https://datatracker.ietf.org/doc/html/draft-ietf-tls-hybrid-design/) ❗!important, define the way multiple keys (traditional and next gen) are packed in TLS extension structs, allows key reuse (or duplication?) in ClientHello
[draft-ietf-tls-ecdhe-mlkem-00 - Post-quantum hybrid ECDHE-MLKEM Key Agreement for TLSv1.3](https://datatracker.ietf.org/doc/html/draft-ietf-tls-ecdhe-mlkem/) ❗!important, X25519MLKEM768, SecP256r1MLKEM768, and SecP384r1MLKEM1024
[draft-irtf-cfrg-hybrid-kems-03](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hybrid-kems/#kdf)

[Post Quantum Cryptography: A short update. | LinkedIn](https://www.linkedin.com/pulse/post-quantum-cryptography-short-update-klaus-haller-cdd0f/) 2024-12

Cloudflare enabled PQC for their customers as described in a 2023 blog. That handles the server side.
[Post-Quantum Key Agreement at Cloudflare](https://pq.cloudflareresearch.com/) Modern browsers support X25519MLKEM768 in TLS
https://blog.cloudflare.com/post-quantum-to-origins/ 2023-09
https://blog.cloudflare.com/post-quantum-for-all/ 2022-10
https://blog.cloudflare.com/making-protocols-post-quantum/ 2022-02, KEX in TLS and KEMTLS for auth
https://blog.cloudflare.com/pq-2024/ 2024-03,❗!important, history, KEX and signature
https://developers.cloudflare.com/ssl/post-quantum-cryptography/pqc-support/

Then Google deployed default support for PQC in desktop Chrome installs for TLS 1.3 and QUIC and on Google's servers. Few people seem to have had problems (or even noticed)!
[Chromium Blog: Protecting Chrome Traffic with Hybrid Kyber KEM](https://blog.chromium.org/2023/08/protecting-chrome-traffic-with-hybrid.html)
[Chromium Blog: Advancing Our Amazing Bet on Asymmetric Cryptography](https://blog.chromium.org/2024/05/advancing-our-amazing-bet-on-asymmetric.html) performance
[Google Online Security Blog: Post-Quantum Cryptography: Standards and Progress](https://security.googleblog.com/2024/08/post-quantum-cryptography-standards.html)

[Apple's New iMessage, Signal, & Post-Quantum Crypto | CSA](https://cloudsecurityalliance.org/blog/2024/05/17/apple-s-new-imessage-signal-and-post-quantum-cryptography)
[Blog - iMessage with PQ3: The new state of the art in quantum-secure messaging at scale - Apple Security Research](https://security.apple.com/blog/imessage-pq3/)
[Signal >> Blog >> Quantum Resistance and the Signal Protocol](https://signal.org/blog/pqxdh/)

[Go Post-Quantum with Caddy | Sam Burns' Tech Blog](https://sam-burns.com/posts/go-post-quantum-with-caddy/)
[cloudflare/go: Go with Cloudflare experimental patches](https://github.com/cloudflare/go)

## Homomorphic Encryption

> ciphertext that can be processed or analyzed

[Homomorphic encryption - Wikiwand](https://www.wikiwand.com/en/articles/Homomorphic_encryption)
[Homomorphic Encryption: How It Works | Splunk](https://www.splunk.com/en_us/blog/learn/homomorphic-encryption.html)
[What Is Homomorphic Encryption?](https://www.techtarget.com/searchsecurity/definition/homomorphic-encryption)

[3 Homomorphic Encryption Trends for 2025](https://www.itprotoday.com/data-privacy/three-homomorphic-encryption-trends-for-2025)

## Block Ciphers

> contrast "stream ciphers", where encrypted strings are the same length as the plaintext

[Symmetric-key algorithm - Wikiwand](https://www.wikiwand.com/en/Symmetric-key_algorithm)

[Lecture3 Lecture 3: Block Ciphers and the Data Encryption Standard](https://engineering.purdue.edu/kak/compsec/NewLectures/Lecture3.pdf)

[Anatomy of a password disaster – Adobe’s giant-sized cryptographic blunder – Naked Security](https://nakedsecurity.sophos.com/2013/11/04/anatomy-of-a-password-disaster-adobes-giant-sized-cryptographic-blunder/) study of Adobe's leaked password database

[Feistel Cipher - Computerphile - YouTube](https://www.youtube.com/watch?v=FGhj3CGxl8I)

### Modes of operation

[Block cipher mode of operation - Wikiwand](https://www.wikiwand.com/en/Block_cipher_mode_of_operation)

Block ciphers, as the name suggests, encrypts blocks. The methods of segmenting data into blocks is called "modes of operation".

[Modes of Operation - Computerphile - YouTube](https://www.youtube.com/watch?v=Rk0NIQfEXBA)
**ECB**: simply divides a message into 16 byte blocks, preserves pattern (for experts only: ECB should never be used except in some very specific cases)
**CBC**: first block XORed with Initialization Vector (IV) (nonce), every other block XORed with the ciphertext of the block preceding it; however this introduces dependency on previous block and encryption cannot be parallelized
**CTR**: uses counter and nonce (similar to IV) per block to allow each block to be encrypted concurrently

CBC mode is suspectable to [Padding oracle attack (Vaudenay Attack)](https://www.wikiwand.com/en/articles/Padding_oracle_attack)
[Moxie Marlinspike >> Blog >> The Cryptographic Doom Principle](https://moxie.org/2011/12/13/the-cryptographic-doom-principle.html)
Always Encrypt-then-MAC, so that verifying the MAC does not invole decryption

[Authenticated encryption - Wikiwand](https://www.wikiwand.com/en/Authenticated_encryption) GCM, CCM, protects against chosen ciphertext attack on decryption oracle
[Authenticated Encryption in .NET with AES-GCM](https://www.scottbrady91.com/c-sharp/aes-gcm-dotnet)

### DES

> Even Triple DES (3-DES) is not recommended

[Data Encryption Standard - Wikiwand](https://www.wikiwand.com/en/articles/Data_Encryption_Standard)
[【计算机博物志】DES的生与死 - YouTube](https://www.youtube.com/watch?v=uD_zCOKuYPc)

### AES

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

### Commands

[opessl](https://askubuntu.com/a/60713) openssl is for proof of concept

```sh
man enc  # show ciphers

# encryption
openssl aes-256-cbc -in attack-plan.txt -out message.enc

# decryption
openssl aes-256-cbc -d -in message.enc -out plain-text.txt
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

## Stream Ciphers

### Chacha Cipher

> alternative to AES

[Chacha Cipher - Computerphile - YouTube](https://www.youtube.com/watch?v=UeIpq-C-GSA)
[RFC 8439 - ChaCha20 and Poly1305 for IETF Protocols](https://datatracker.ietf.org/doc/html/rfc8439)
ARX cipher: add, rotate, xor

## Public Key Cryptography

[Public-key cryptography - Wikiwand](https://www.wikiwand.com/en/Public-key_cryptography)
Public Key crypto simply works with numbers. This means that any messages would have to be converted into a number before being encrypted.

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

[Pretty Good Privacy (PGP) and Digital Signatures | Linux Journal](https://www.linuxjournal.com/content/pretty-good-privacy-pgp-and-digital-signatures)

[Passive SSH Key Compromise via Lattices | Proceedings of the 2023 ACM SIGSAC Conference on Computer and Communications Security](https://dl.acm.org/doi/10.1145/3576915.3616629)

### ECC

### age

[FiloSottile/age: A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.](https://github.com/FiloSottile/age)

## Attribute-Based Encryption

[A Gentle Introduction to Attribute-Based Encryption](https://medium.com/@dbkats/a-gentle-introduction-to-attribute-based-encryption-edca31744ac6)

## Signature

[What are Digital Signatures? - Computerphile - YouTube](https://www.youtube.com/watch?v=s22eJ1eVLTU)

[RFC 8032 - Edwards-Curve Digital Signature Algorithm (EdDSA)](https://datatracker.ietf.org/doc/html/rfc8032)

## Framework/Library

[[openssl]]

[cryptlib Encryption Toolkit](https://www.cs.auckland.ac.nz/~pgut001/cryptlib/index.html)
[cryptlib/cryptlib: cryptlib security toolkit](https://github.com/cryptlib/cryptlib)

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

## Zero-knowledge proof/ZKP

[Zero-knowledge proof - Wikiwand](https://www.wikiwand.com/en/Zero-knowledge_proof)
把問題和答案的關聯轉變成機率問題, 透過趨近無窮次的試驗，使猜對的機率趨近 0

[Introduction | ZKDocs](https://www.zkdocs.com/)
[trailofbits/zkdocs: Interactive documentation on zero-knowledge proof systems and related primitives.](https://github.com/trailofbits/zkdocs)

[Zero Knowledge Proofs: An illustrated primer – A Few Thoughts on Cryptographic Engineering](https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/)
[Zero-Knowledge Proof (ZKP) — Explained | Chainlink](https://blog.chain.link/what-is-a-zero-knowledge-proof-zkp/)
[Zero-knowledge proofs explained in 3 examples](https://www.circularise.com/blogs/zero-knowledge-proofs-explained-in-3-examples)
[I can prove I’ve solved this Sudoku without revealing it - YouTube](https://www.youtube.com/watch?v=Otvcbw6k4eo)

[The Magic of Zero-Knowledge Proofs #SoME3 - YouTube](https://www.youtube.com/watch?v=FfeXX6OLq8w)

- SNARKs
- STARKs
- Bulletproofs
- Folding Schemes
- Lookup

[Zero Knowledge Proofs - YouTube](https://www.youtube.com/watch?v=V5uVKZn3F_4)
[神奇的零知识证明！既能保守秘密，又让别人信你！ - YouTube](https://www.youtube.com/watch?v=FuKEpOhiVPg)

### zkVMs

[The different types of ZK-EVMs](https://vitalik.eth.limo/general/2022/08/04/zkevm.html)

[The Evolution of Rust inside zkVMs - Erik Kadena | RISC Zero - YouTube](https://www.youtube.com/watch?v=6yVNyuY7lDY)
[Zeroing into zkVMs — Taiko Labs](https://taiko.mirror.xyz/e_5GeGGFJIrOxqvXOfzY6HmWcRjCjRyG0NQF1zbNpNQ)
