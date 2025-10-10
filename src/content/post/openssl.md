---
title: OpenSSL
description: ""
created: 2015-09-29
updated: 2025-07-15
tags:
  - app
  - openssl
  - ssl
---

[[x-509]]

[OpenSSL](https://www.openssl.org/) is a toolkit for the TLS and SSL.
[OpenSSL - Wikiwand](https://www.wikiwand.com/en/articles/OpenSSL)
[ossl-guide-introduction - OpenSSL Documentation](https://docs.openssl.org/master/man7/ossl-guide-introduction/)
[How SSL Certificates Use Digital Signatures](https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art012)

[OpenSSL Cookbook | Feisty Duck](https://www.feistyduck.com/books/openssl-cookbook/) ❗!important

[OpenSSL PKI Tutorial v2.0 — OpenSSL PKI Tutorial](https://pki-tutorial.readthedocs.io/)
[OpenSSL Essentials: Working with SSL Certificates, Private Keys and CSRs | DigitalOcean](https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs)
[Symmetric Key Decryption Methods (AES, ARIA, Blowfish, Camellia, ChaCha20, Cast, DES, 3DES, IDEA, RC2 and RC4)](https://asecuritysite.com/openssl/openssl3) CLI command generator
[The Most Common OpenSSL Commands](https://www.sslshopper.com/article-most-common-openssl-commands.html)
[Some list of openssl commands for check and verify your keys](https://gist.github.com/Hakky54/b30418b25215ad7d18f978bc0b448d81)
[OpenSSL command cheatsheet](https://www.freecodecamp.org/news/openssl-command-cheatsheet-b441be1e8c4a/)
[OpenSSL Quick Reference Guide](https://knowledge.digicert.com/general-information/openssl-quick-reference-guide)

[jbp.io :: TLS performance: rustls versus OpenSSL](https://jbp.io/2019/07/01/rustls-vs-openssl-performance.html)

## Troubleshooting

```sh
sudo su
sudo tcpdump -vvv -s 0 -nni <interface> -w <file> host <host> and port <port> &
openssl s_client -connect <host>:<port> -state -msg

openssl s_client -connect www.feistyduck.com:443 -CApath /etc/ssl/certs/ # TLS1.2
openssl s_client -connect toco.hk:443 -CApath /etc/ssl/certs/ # cert error

# e.g.
sudo su
sudo tcpdump -vvv -s 0 -nni eno1 -w internal.cap host 10.6.64.170 and port 443 &
openssl s_client -connect 10.6.64.170:443 -state -msg
```

[Test an SSL Connection Using OpenSSL s_client | Liquid Web](https://www.liquidweb.com/blog/how-to-test-ssl-connection-using-openssl/)

[Troubleshooting SSL/TLS renegotiation](https://my.f5.com/manage/s/article/K15475)
[Troubleshooting SSL/TLS handshake failures](https://my.f5.com/manage/s/article/K15292)
[Overview of packet tracing with the ssldump utility](https://my.f5.com/manage/s/article/K10209)

---

# Alternate Implementations

[Win32/Win64 OpenSSL Installer for Windows - Shining Light Productions](https://slproweb.com/products/Win32OpenSSL.html)

## LibreSSL

> fork of OpenSSL by OpenBSD

[LibreSSL](https://www.libressl.org/)
[LibreSSL - Wikiwand](https://www.wikiwand.com/en/articles/LibreSSL)

## Tink/BoringSSL

> Google originally forked OpenSSL as BoringSSL

[Tink  |  Google for Developers](https://developers.google.com/tink)
[Goodbye OpenSSL, and Hello To Google Tink | by Prof Bill Buchanan OBE FRSE | ASecuritySite: When Bob Met Alice | Medium](https://medium.com/asecuritysite-when-bob-met-alice/goodbye-openssl-and-hello-to-google-tink-583163cfd76c)

[Tink Cryptography Library](https://github.com/tink-crypto)
[boringssl - Git at Google](https://boringssl.googlesource.com/boringssl/)

## mbedtls

> implements cryptographic primitives, X.509 certificate manipulation and the SSL/TLS and DTLS protocols

[Mbed TLS](https://www.trustedfirmware.org/projects/mbed-tls/)
[Mbed-TLS/mbedtls: An open source, portable, easy to use, readable and flexible TLS library, and reference implementation of the PSA Cryptography API. Releases are on a varying cadence, typically around 3 - 6 months between releases.](https://github.com/Mbed-TLS/mbedtls)
[Mbed TLS documentation hub — Mbed TLS documentation](https://mbed-tls.readthedocs.io/en/latest/)

Implements PSA Crypto API
[PSA Certified Crypto API 1.2 — PSA Certified Crypto API 1.2](https://arm-software.github.io/psa-api/crypto/1.2/)

## wolfSSL

[wolfSSL – Embedded SSL/TLS Library](https://www.wolfssl.com/)
[WolfSSL - Wikiwand](https://www.wikiwand.com/en/articles/WolfSSL)
[wolfSSL/wolfssl: The wolfSSL library is a small, fast, portable implementation of TLS/SSL for embedded devices to the cloud. wolfSSL supports up to TLS 1.3 and DTLS 1.3!](https://github.com/wolfssl/wolfssl) GPL

## SymCrypt

[microsoft/SymCrypt: Cryptographic library](https://github.com/Microsoft/SymCrypt)
[microsoft/SymCrypt-OpenSSL: OpenSSL engine for use with SymCrypt cryptographic library](https://github.com/microsoft/SymCrypt-OpenSSL)

## Botan

[Botan — Botan](https://botan.randombit.net/)

## Network Security Services (NSS)

[Network Security Services (NSS) — Firefox Source Docs documentation](https://firefox-source-docs.mozilla.org/security/nss/index.html)

```
certutil
cmsutil
crlutil
modutil
nss-config
pk12util
shlibsign
signtool
signver
ssltap
```

## CFSSL

[Introducing CFSSL - CloudFlare's PKI toolkit](https://blog.cloudflare.com/introducing-cfssl/)

[cloudflare/cfssl: CFSSL: Cloudflare's PKI and TLS toolkit](https://github.com/cloudflare/cfssl)

`myca.json`:

```json
{
  "CN": "k3s",
  "hosts": ["k3s"],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "SG",
      "ST": "SG",
      "L": "Singapore"
    }
  ]
}
```

```sh
cfssl gencert -initca myca.json | cfssljson -bare myca
```

`serverRuest.json`

```sh
{
   "CN": "registry",
   "hosts": [ "ubuntu" ],
   "key": {
      "algo": "rsa",
      "size": 2048
   }
}
```

```sh
cfssl gencert -ca=myca.pem -ca-key=myca-key.pem -config=ca-config.json -profile=server -hostname=ubuntu serverRequest.json | cfssljson -bare registry
```

## GnuTLS

> pretty outdated, not recommend

[GnuTLS](https://www.gnutls.org/)
