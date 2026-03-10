---
title: Public-Key Cryptography Standard
description: ""
created: 2016-01-21
updated: 2026-02-12
tags:
  - crypto
  - cryptography
  - pkcs
  - security
---

[PKCS - Wikiwand](https://www.wikiwand.com/en/PKCS)
[What are Public-Key Cryptography Standards (PKCS)?](https://www.techtarget.com/searchsecurity/definition/Public-Key-Cryptography-Standards)
[Guide to Public Key Cryptography Standards in Cyber Security | RSI Security](https://blog.rsisecurity.com/guide-to-public-key-cryptography-standards-in-cyber-security/)

PKCS #1: RSA (RFC8017)
PKCS #3: Diffie–Hellman Key Agreement Standard

[RFC 8018 - PKCS #5: Password-Based Cryptography Specification Version 2.1](https://datatracker.ietf.org/doc/html/rfc8018)
[PBKDF2 - Wikiwand](https://www.wikiwand.com/en/articles/PBKDF2)

[Certificate signing request - Wikiwand](https://www.wikiwand.com/en/articles/Certificate_signing_request)
[RFC 2986 - PKCS #10: Certification Request Syntax Specification Version 1.7](https://datatracker.ietf.org/doc/html/rfc2986)

[PKCS 12 - Wikiwand](https://www.wikiwand.com/en/articles/PKCS_12)
[RFC 7292 - PKCS #12: Personal Information Exchange Syntax v1.1](https://datatracker.ietf.org/doc/html/rfc7292)

## PKCS 7/CMS

[PKCS 7 - Wikiwand](https://www.wikiwand.com/en/articles/PKCS_7)
[RFC 2315 - PKCS #7: Cryptographic Message Syntax Version 1.5](https://datatracker.ietf.org/doc/html/rfc2315)
[RFC 5652 - Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/html/rfc5652) IETF picked up CMS, obsoletes 3852

- SignedData
- EnvelopedData
- EncryptedData
- DigestedData
- AuthenticatedData

[RFC 5083 - Cryptographic Message Syntax (CMS) Authenticated-Enveloped-Data Content Type](https://datatracker.ietf.org/doc/html/rfc5083)

- AuthEnvelopedData

[RFC 3274 - Compressed Data Content Type for Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/html/rfc3274)

- CompressedData

[RFC 4073 - Protecting Multiple Contents with the Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/html/rfc4073)

- ContentCollection
- ContentWithAttributes

[RFC 4108 - Using Cryptographic Message Syntax (CMS) to Protect Firmware Packages](https://datatracker.ietf.org/doc/html/rfc4108)
[RFC 5958 - Asymmetric Key Packages](https://datatracker.ietf.org/doc/html/rfc5958) obsoletes RFC5208 PKCS#8
[RFC 6010 - Cryptographic Message Syntax (CMS) Content Constraints Extension](https://datatracker.ietf.org/doc/html/rfc6010)
[RFC 6160 - Algorithms for Cryptographic Message Syntax (CMS) Protection of Symmetric Key Package Content Types](https://datatracker.ietf.org/doc/html/rfc6160)
[RFC 6211 - Cryptographic Message Syntax (CMS) Algorithm Identifier Protection Attribute](https://datatracker.ietf.org/doc/html/rfc6211)
[RFC 7468 - Textual Encodings of PKIX, PKCS, and CMS Structures](https://datatracker.ietf.org/doc/html/rfc7468)
[RFC 8696 - Using Pre-Shared Key (PSK) in the Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/html/rfc8696)

## PKCS 11

[PKCS 11 - Wikiwand](https://www.wikiwand.com/en/articles/PKCS_11) Cryptoki, C API to communicate with HSM or smart cards
[PKCS #11 Specification Version 3.1](https://docs.oasis-open.org/pkcs11/pkcs11-spec/v3.1/pkcs11-spec-v3.1.html)
[oasis-tcs/pkcs11: OASIS PKCS 11 TC: Repository to support version control for development of technical files associated with the OASIS PKCS11 specification](https://github.com/oasis-tcs/pkcs11)

[An Introduction to PKCS#11](https://www.thalesdocs.com/gphsm/ptk/5.7/docs/Content/PTK-C_Program/intro_PKCS11.htm)

[pkcs11-spec-v3.2-wd13.docx uploaded | OASIS PKCS 11 TC](https://groups.oasis-open.org/discussion/pkcs11-spec-v32-wd13docx-uploaded)

### Clients

[ThalesGroup/crypto11: Implement crypto.Signer and crypto.Decrypter for HSM-protected keys via PKCS#11](https://github.com/ThalesGroup/crypto11) Go binding

`jdk.crypto.cryptoki` implementation of the SunPKCS11 security provider
[Java PKCS#11 Reference Guide](https://docs.oracle.com/javase/7/docs/technotes/guides/security/p11guide.html)
[SimpleMethod/PKCS11-Java-Wrapper: A comprehensive Java library for interacting with PKCS#11 (Cryptoki) compatible hardware security modules (HSMs) and smart cards. This wrapper simplifies cryptographic operations while maintaining high security standards.](https://github.com/SimpleMethod/PKCS11-Java-Wrapper) GPL v3

[OpenSC/OpenSC: Open source smart card tools and middleware. PKCS#11/MiniDriver/Tokend](https://github.com/OpenSC/OpenSC) LGPL v2.1

[openCryptoki - An Open Source Implementation of PKCS #11 - IBM Documentation](https://www.ibm.com/docs/en/linux-on-systems?topic=support-opencryptoki-open-source-pkcs-11)
[opencryptoki/opencryptoki: PKCS#11 library and tools for Linux and AIX. Includes tokens supporting IBM crypto hardware as well as a software token.](https://github.com/opencryptoki/opencryptoki)

[c - OpenSC vs openCryptoKI - Stack Overflow](https://stackoverflow.com/a/8658866/665507)
OpenSC is a software stack for smart cards. And it includes a PKCS#11 module. OpenCryptoki is "just" a PKCS#11 module (meaning software-only-module, except for some IBM PCI cards, apparently) that has nothing to do with (most) smart cards.

### Software implementations

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
