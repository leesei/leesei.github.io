---
title: OpenSSL
description: ""
created: 2015-09-29
updated: 2025-01-09
tags:
  - app
  - openssl
  - ssl
---

[OpenSSL](https://www.openssl.org/) is a toolkit for the TLS and SSL.
[OpenSSL - Wikiwand](https://www.wikiwand.com/en/articles/BoringSSL)
[ossl-guide-introduction - OpenSSL Documentation](https://docs.openssl.org/master/man7/ossl-guide-introduction/)

[Symmetric Key Decryption Methods (AES, ARIA, Blowfish, Camellia, ChaCha20, Cast, DES, 3DES, IDEA, RC2 and RC4)](https://asecuritysite.com/openssl/openssl3) CLI command generator
[The Most Common OpenSSL Commands](https://www.sslshopper.com/article-most-common-openssl-commands.html)
[Some list of openssl commands for check and verify your keys](https://gist.github.com/Hakky54/b30418b25215ad7d18f978bc0b448d81)
[OpenSSL command cheatsheet](https://www.freecodecamp.org/news/openssl-command-cheatsheet-b441be1e8c4a/)
[OpenSSL Quick Reference Guide](https://knowledge.digicert.com/general-information/openssl-quick-reference-guide)

[jbp.io :: TLS performance: rustls versus OpenSSL](https://jbp.io/2019/07/01/rustls-vs-openssl-performance.html)

## key/cert types

[X.509 - Wikiwand](https://www.wikiwand.com/en/X.509)
[RFC 2585 - Internet X.509 Public Key Infrastructure Operational Protocols: FTP and HTTP](https://datatracker.ietf.org/doc/html/rfc2585)
[DER vs. CRT vs. CER vs. PEM Certificates and How To Convert Them](http://info.ssl.com/article.aspx?id=12149)
[PEM, DER, CRT, and CER: X.509 Encodings and Conversions - SSL.com](https://www.ssl.com/guide/pem-der-crt-and-cer-x-509-encodings-and-conversions/)

[PKCS - Wikiwand](https://www.wikiwand.com/en/PKCS)
[What are Public-Key Cryptography Standards (PKCS)?](https://www.techtarget.com/searchsecurity/definition/Public-Key-Cryptography-Standards)
[Guide to Public Key Cryptography Standards in Cyber Security | RSI Security](https://blog.rsisecurity.com/guide-to-public-key-cryptography-standards-in-cyber-security/)

key: no meta data, just the prime numbers and modulus
cert: with meta data

X.509 is the PKI protocol and defines the actual certificate
DER, PEM, PKCS#7, PKCS#8, PKCS#12 are encoding standards

PEM (Privacy Enhanced Mail) base64 DER, with text headers and footers
File extensions: `.pem`, `.key`, `.csr`, `.crt`
DER (Distinguished Encoding Rules), binary without text headers and footers
File extensions: `.der`, `.cer`
PKCS (Public-Key Cryptography Standards)
File extensions: `.p7b` (PKCS#7), `.pfx`, `.p12` (PKCS#12 binary), `.csr` (PKCS#10 base64)

`openssl x509 -in cert.pem -text -noout` to view cert

## cert generation

[🔐 HTTPS certificate generation explained! Now setup HTTPS for local development environment (without sudo) | Blog](https://blog.atulr.com/localhost-https/)
[How to create a .pfx/.p12 certificate file using OpenSSL – SSL Information and FAQ](https://info.ssl.com/how-to-create-a-pfx-p12-certificate-file-using-openssl/)
[HOWTO: Generate a CSR for OpenSSL – (see tools.ssl.com) – SSL Information and FAQ](https://info.ssl.com/howto-generate-a-csr-for-openssl-see-tools-ssl-com/)
[ssl - How to create a self-signed certificate with openssl? - Stack Overflow](http://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl)
[OpenSSL CSR Tool - Create Your CSR Faster | DigiCert.com](https://www.digicert.com/easy-csr/openssl.htm)

[How To Create a Self-Signed SSL Certificate for Nginx in Ubuntu 16.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04)

[Manage sensitive data with Docker secrets | Docker Documentation](https://docs.docker.com/engine/swarm/secrets/#intermediate-example-use-secrets-with-a-nginx-service)

[Five Tips for Using Self Signed SSL Certificates with iOS | HttpWatch BlogHttpWatch Blog](https://blog.httpwatch.com/2013/12/12/five-tips-for-using-self-signed-ssl-certificates-with-ios/) also on own CA

```sh
auth.cert

# private key and cert (CSR in the pipeline)
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout selfsigned.key -out selfsigned.crt

openssl genrsa -out privatekey.pem 2048 # key only
openssl req -new -key privatekey.pem -out CSR.csr # CSR only
# private key and CSR
openssl req -nodes -new -newkey rsa:2048 -keyout privatekey.key -out CSR.csr
# then sign SSH certificate (.crt) with csr
openssl x509 -req -days 365 -in CSR.csr -signkey privatekey.key -out selfsigned.crt

openssl genpkey -algorithm RSA -out privatekey.pem -pkeyopt rsa_keygen_bits:2048 # private key only
openssl rsa -pubout -in privatekey.pem -out publickey.pem

openssl genrsa -out rsa_1024_priv.pem 1024
openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
```

## query cert

[How to examine the metadata of an SSL (HTTPS/TLS) cert](https://coolaj86.com/articles/how-to-examine-an-ssl-https-tls-cert/)
[SSL Certificate Tools](https://www.sslshopper.com/ssl-certificate-tools.html)

```sh
# X.509
openssl x509 -text -noout -in certificate.pem
openssl x509 -text -noout -in certificate.cert

# DER
openssl req -text -noout -in certificate.csr

# PKCS#12 (.pfx or .p12)
openssl pkcs12 -info -in key.p12

# read RSA key
openssl rsa -in private.key -text -noout
openssl rsa -RSAPublicKey_in -in public.key -text -noout
```

## conversion

[SSL Converter - Convert SSL Certificates to different formats](https://www.sslshopper.com/ssl-converter.html)
[Converting OpenSSH public keys - Odd Bits](http://blog.oddbit.com/2011/05/08/converting-openssh-public-keys/)

```sh
# DER (.crt .cer .der) -> PEM
openssl x509 -inform der -in certificate.cer -out certificate.pem
# PEM -> DER
openssl x509 -outform der -in certificate.pem -out certificate.der
# PKCS#12 -> PEM
openssl pkcs12 -in keyStore.pfx -out keyStore.pem -nodes
#  You can add -nocerts to only output the private key or add -nokeys to only output the certificates.
# PEM -> PKCS#12
openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile CACert.crt
```

## troubleshooting

```sh
sudo su
sudo tcpdump -vvv -s 0 -nni <interface> -w <file> host <host> and port <port> &
openssl s_client -connect <host>:<port> -state -msg

# e.g.
sudo su
sudo tcpdump -vvv -s 0 -nni eno1 -w internal.cap host 10.6.64.170 and port 443 &
openssl s_client -connect 10.6.64.170:443 -state -msg
```

[SOL15475 - Troubleshooting SSL/TLS renegotiation](https://support.f5.com/kb/en-us/solutions/public/15000/400/sol15475.html)
[SOL15292 - Troubleshooting SSL/TLS handshake failures](https://support.f5.com/kb/en-us/solutions/public/15000/200/sol15292.html)
[SOL10209 - Overview of packet tracing with the ssldump utility](https://support.f5.com/kb/en-us/solutions/public/10000/200/sol10209.html)

---

# Alternate Implementations

## LibreSSL

> fork of OpenSSL by OpenBSD

[LibreSSL](https://www.libressl.org/)
[LibreSSL - Wikiwand](https://www.wikiwand.com/en/articles/LibreSSL)

## Tink

> Google originally forked OpenSSL as BoringSSL

[Tink  |  Google for Developers](https://developers.google.com/tink)
[Goodbye OpenSSL, and Hello To Google Tink | by Prof Bill Buchanan OBE FRSE | ASecuritySite: When Bob Met Alice | Medium](https://medium.com/asecuritysite-when-bob-met-alice/goodbye-openssl-and-hello-to-google-tink-583163cfd76c)

[Tink Cryptography Library](https://github.com/tink-crypto)

## wolfSSL

[wolfSSL – Embedded SSL/TLS Library](https://www.wolfssl.com/)
[WolfSSL - Wikiwand](https://www.wikiwand.com/en/articles/WolfSSL)
[wolfSSL/wolfssl: The wolfSSL library is a small, fast, portable implementation of TLS/SSL for embedded devices to the cloud. wolfSSL supports up to TLS 1.3 and DTLS 1.3!](https://github.com/wolfssl/wolfssl) GPL

## CFSSL

[Introducing CFSSL - CloudFlare's PKI toolkit](https://blog.cloudflare.com/introducing-cfssl/)

[cloudflare/cfssl: CFSSL: Cloudflare's PKI and TLS toolkit](https://github.com/cloudflare/cfssl)
[kubernetes-the-hard-way/02-client-tools.md at master · kelseyhightower/kubernetes-the-hard-way](https://github.com/kelseyhightower/kubernetes-the-hard-way/blob/master/docs/02-client-tools.md)

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
