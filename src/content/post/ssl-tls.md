---
title: SSL/TLS
description: ""
created: 2015-04-02
updated: 2025-01-09
tags:
  - security
  - ssl
  - tls
  - web
---

[[ssl-tls-free-certs]]

[Transport Layer Security](http://www.wikiwand.com/en/Transport_Layer_Security) (TLS) and its predecessor, [Secure Sockets Layer](https://www.digicert.com/ssl.htm) (SSL), are cryptographic protocols designed to provide communications security over a computer network.
[Server Name Indication - Wikiwand](https://www.wikiwand.com/en/Server_Name_Indication) used to host multiple sites on the same IP

The authentication relied on Certificate Authorities (CA) and a public key infrastructure using [X.509](http://www.wikiwand.com/en/X.509) certificates.
The server register with a CA and sign its public key with the key of CA for a fee. The client, after receiving the public key from server, verifies it with the CA.

[Creating Secure Web Apps: What Every Developer Needs to Know About HTTPS Today | Heroku](https://www.heroku.com/tech-sessions/creating-secure-web-apps)
[Exploring HTTPS With Python – Real Python](https://realpython.com/python-https/)
[What are SSL/TLS Certificates? Why do we Need them? and How do they Work? - YouTube](https://www.youtube.com/watch?v=r1nJT63BFQ0)

[Transport Layer Security (TLS) - Computerphile - YouTube](https://www.youtube.com/watch?v=0TLDTodL7Lc)
[TLS Handshake Explained - Computerphile - YouTube](https://www.youtube.com/watch?v=86cQJ0MMses)

[Transport Layer Security, TLS 1.2 and 1.3 (Explained by Example) - YouTube](https://www.youtube.com/watch?v=AlE5X1NlHgg)
[The SSL/TLS Handshake: an Overview – SSL Information and FAQ](https://info.ssl.com/tls-handshake/)
[File:Ssl handshake with two way authentication with certificates.png - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ssl_handshake_with_two_way_authentication_with_certificates.png)
[TLS 1.3 » ADMIN Magazine](http://www.admin-magazine.com/Articles/TLS-1.3-and-the-return-of-common-sense)

[Wireshark - YouTube](https://www.youtube.com/playlist?list=PLhfrWIlLOoKMO9-7NxYN3TxCdcDecwOtj) TLS/QUIC decryption with Wireshark and SSL key logs
[Decrypt SSL with Wireshark - HTTPS Decryption: Step-by-Step Guide](https://www.comparitech.com/net-admin/decrypt-ssl-with-wireshark/)
[HTTPS Decryption with Wireshark // Website TLS Decryption - YouTube](https://www.youtube.com/watch?v=GMNOT1aZmD8)
[Decrypting TLS, HTTP/2 and QUIC with Wireshark - YouTube](https://www.youtube.com/watch?v=yodDbgoCnLM)
[pan-unit42/wireshark-tutorial-decrypting-HTTPS-traffic](https://github.com/pan-unit42/wireshark-tutorial-decrypting-HTTPS-traffic)

[HTTPS: an awesome, secure tale (pt 1) | by Omer Goldberg | Bits and Pieces](https://blog.bitsrc.io/https-an-awesome-secure-tale-pt-1-32d2ba5ac0c1)

[ESNI: A Privacy-Protecting Upgrade to HTTPS | Electronic Frontier Foundation](https://www.eff.org/deeplinks/2018/09/esni-privacy-protecting-upgrade-https)
[Server Name Indication - Wikiwand](https://www.wikiwand.com/en/Server_Name_Indication) multi-tenant on the same IP

Toolkits:

- [[openssl]]
- [GmSSL](http://gmssl.org/docs/quickstart.html)
- [Botan: Crypto and TLS for Modern C++ — Botan](https://botan.randombit.net/)

[HTTPS Is Easy!](https://httpsiseasy.com/)
[Is TLS Fast Yet?](https://istlsfastyet.com/)
[ImperialViolet - Overclocking SSL](https://www.imperialviolet.org/2010/06/25/overclocking-ssl.html) HTTPS is fast since 2010
[ImperialViolet - Public key pinning](https://www.imperialviolet.org/2011/05/04/pinning.html)
[Survival Guide - TLS/SSL and SSL (X.509) Certificates (CA-signed and Self-Signed)](http://www.zytrax.com/tech/survival/ssl.html)
[Rolling out Public Key Pinning with HPKP Reporting — Google Web Updates](https://developers.google.com/web/updates/2015/09/HPKP-reporting-with-chrome-46)
[SSL: it’s hard to do right | The Recompiler](https://recompilermag.com/issues/issue-1/ssl-its-hard-to-do-right/)
[Nick Craver - HTTPS on Stack Overflow: The End of a Long Road](https://nickcraver.com/blog/2017/05/22/https-on-stack-overflow/)

[How the NSA (may have) put a backdoor in RSA’s cryptography: A technical primer | Ars Technica](http://arstechnica.com/security/2014/01/how-the-nsa-may-have-put-a-backdoor-in-rsas-cryptography-a-technical-primer/)
[Critics slam SSL authority for minting certificate for impersonating sites | Ars Technica](http://arstechnica.com/business/2012/02/critics-slam-ssl-authority-for-minting-cert-used-to-impersonate-sites/)

[Web served, part 2: Securing things with SSL/TLS | Ars Technica](http://arstechnica.com/information-technology/2012/11/securing-your-web-server-with-ssltls/)

[BetterCrypto⋅org](https://bettercrypto.org/)
[Cipherli.st - Strong Ciphers for Apache, nginx and Lighttpd](https://cipherli.st/)
[Generate Mozilla Security Recommended Web Server Configuration Files](https://mozilla.github.io/server-side-tls/ssl-config-generator/)

[Deploying HTTPS: The Green Lock and Beyond (Chrome Dev Summit 2015) - YouTube](https://www.youtube.com/watch?v=9WuP4KcDBpI)
[Mythbusting HTTPS: Squashing security’s urban legends - Google I/O 2016 - YouTube](https://www.youtube.com/watch?v=YMfW1bfyGSY)

## HSTS

[HTTP Strict Transport Security - Wikiwand](http://www.wikiwand.com/en/HTTP_Strict_Transport_Security): always use HTTPS
[HSTS Preload List Submission](https://hstspreload.appspot.com/)

## Mutual TLS/mTLS

[A Kubernetes engineer's guide to mTLS](https://buoyant.io/mtls-guide/)
[Mutual TLS | The Backend Engineering Show - YouTube](https://www.youtube.com/watch?v=KwpV-ICpkc4)

[The Cloudflare mTLS vulnerability - A Deep Dive Analysis - YouTube](https://www.youtube.com/watch?v=xsLqf1Qomn0)

## Revocation

[Online Certificate Status Protocol vs Certificate Revocation Lists](https://www.encryptionconsulting.com/ocsp-vs-crl/#:~:text=OCSP%20can%20be%20used%20to,link%20or%20an%20LDAP%20server.)

[Certificate revocation list - Wikiwand](https://www.wikiwand.com/en/Certificate_revocation_list) CRL

[RFC 6960 - X.509 Internet Public Key Infrastructure Online Certificate Status Protocol - OCSP](https://datatracker.ietf.org/doc/html/rfc6960)
[Online Certificate Status Protocol - Wikiwand](https://www.wikiwand.com/en/Online_Certificate_Status_Protocol) alternative to CRL, less data, response of status of a particular cert signed by CA

[Chrome does certificate revocation better | ZDNET](https://www.zdnet.com/article/chrome-does-certificate-revocation-better/)
Chrome don't use OSCP

## SSL checkers

[Best SSL Testing Tools for your Website - Grace Themes](https://gracethemes.com/best-ssl-testing-tools-for-your-website/amp/)
[Online Tool to Test SSL, TLS and Latest Vulnerability - Geekflare](https://geekflare.com/ssl-test-certificate/)

[/bin/bash based SSL/TLS tester: testssl.sh](https://testssl.sh/) offline tool
[crt.sh | Certificate Search](https://crt.sh/)
[Qualys SSL Labs](https://www.ssllabs.com/)
[Free SSL Checker Tool - Check SSL Certificate](https://www.thesslstore.com/ssltools/ssl-checker.php)
[SSL Certificate Checker - Diagnostic Tool | DigiCert.com](https://www.digicert.com/help/)
[SSL Security Test | Scan Web and Email Server SSL TLS STARTTLS Encryption](https://www.immuniweb.com/ssl/)
[SSL Checker](https://www.sslshopper.com/ssl-checker.html?hostname=)

[trimstray/htrace.sh: My simple Swiss Army knife for http/https troubleshooting and profiling.](https://github.com/trimstray/htrace.sh)

[Welcome to pyca/cryptography — Cryptography documentation](https://cryptography.io/en/latest/)

[sslyze | Kali Linux Tools](https://www.kali.org/tools/sslyze/)
[nabla-c0d3/sslyze: Fast and powerful SSL/TLS scanning library.](https://github.com/nabla-c0d3/sslyze)

## Man-in-the-Middle (MITM)

[Monsters in the Middleboxes: Introducing Two New Tools for Detecting HTTPS Interception](https://blog.cloudflare.com/monsters-in-the-middleboxes/amp/)

[mitmproxy - an interactive HTTPS proxy](https://mitmproxy.org/)
[mitmproxy - Introduction](https://docs.mitmproxy.org/stable/)
[mitmproxy/mitmproxy: An interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers.](https://github.com/mitmproxy/mitmproxy)
[How to Man in the Middle HTTPS Using mitmproxy - Earthly Blog](https://earthly.dev/blog/mitmproxy/)

[c2FmZQ/tlsproxy: A simple TLS proxy, Reverse proxy, and Web server that uses Let's Encrypt automatically.](https://github.com/c2FmZQ/tlsproxy)

[PolarProxy TLS proxy](https://www.netresec.com/?page=PolarProxy) decrypt up to 10 GB of data or 10 000 TLS sessions per day

[Intercept, debug & mock HTTP with HTTP Toolkit](https://httptoolkit.com/)
[HTTP Toolkit](https://github.com/httptoolkit)

[Fiddler Everywhere | Debugging Proxy for Mac, Linux, Windows](https://www.telerik.com/fiddler/fiddler-everywhere) forward TLS proxy, paid
[Charles Web Debugging Proxy • HTTP Monitor / HTTP Proxy / HTTPS & SSL Proxy / Reverse Proxy](https://www.charlesproxy.com/) forward TLS proxy, paid

[HTTPS/TLS Proxy | NetworkAcademy.io](https://www.networkacademy.io/ccie-enterprise/sdwan/https-tls-proxy)
[What is a TLS Proxy? Definition & FAQs | Avi Networks](https://avinetworks.com/glossary/tls-proxy/)

[Rebex TLS Proxy (free) - Rebex.NET](https://www.rebex.net/tls-proxy/)

[iPhone and Android WiFi Man-in-the-middle attack // PYTHON Scapy scripts for attacking networks - YouTube](https://www.youtube.com/watch?v=O1jpck31Ask)

## Perfect Forward Secrecy (PFS)

[SSL Enabling Forward Secrecy | DigiCert.com](https://www.digicert.com/ssl-support/ssl-enabling-perfect-forward-secrecy.htm)

## Issues

[How to Change Certificate Without Downtime - DZone DevOps](https://dzone.com/articles/How-To-Change-Certificate-Without-Downtime)

### CA

As it turns out, CA may not be trust-worthy after all. There are many instances of CA issuing fraudulent certificates (willingly or being hacked).

[https 技术鉴赏 - YouTube](https://www.youtube.com/watch?v=vVbLSba6vOI)
[How CT Works : Certificate Transparency](https://certificate.transparency.dev/howctworks/) the issuance of cert is accompanied by a SCT record on blockchain
[RFC 9162: Certificate Transparency Version 2.0](https://www.rfc-editor.org/rfc/rfc9162.html)
[certificate-transparency/docs/SCTValidation.md at master · google/certificate-transparency · GitHub](https://github.com/google/certificate-transparency/blob/master/docs/SCTValidation.md)
[How CT Works : Certificate Transparency](https://certificate.transparency.dev/howctworks/)
[Engineering deep dive: Encoding of SCTs in certificates - Let's Encrypt](https://letsencrypt.org/2018/04/04/sct-encoding.html)
[What is Certificate Transparency? - SSL Certificates - Namecheap.com](https://www.namecheap.com/support/knowledgebase/article.aspx/9588/38/what-is-certificate-transparency/)

[How the Comodo certificate fraud calls CA trust into question | Ars Technica](http://arstechnica.com/security/2011/03/how-the-comodo-certificate-fraud-calls-ca-trust-into-question/)

[Google warns of unauthorized TLS certificates trusted by almost all OSes [Updated] | Ars Technica](http://arstechnica.com/security/2015/03/google-warns-of-unauthorized-tls-certificates-trusted-by-almost-all-oses/)
[Google Chrome will banish Chinese certificate authority for breach of trust | Ars Technica](http://arstechnica.com/security/2015/04/google-chrome-will-banish-chinese-certificate-authority-for-breach-of-trust/)

[Another fraudulent certificate raises the same old questions about certificate authorities | Ars Technica](http://arstechnica.com/security/2011/08/earlier-this-year-an-iranian/)

[Trust issues: Know the limits of SSL certificates | InfoWorld](http://www.infoworld.com/article/3187174/internet/trust-issues-know-the-limits-of-ssl-certificates.html)
[Free public certificate authorities: Nice idea, big flaw | InfoWorld](http://www.infoworld.com/article/3185484/security/free-public-certificate-authorities-nice-idea-big-flaw.html)

<http://arstechnica.com/search/?ie=UTF-8&q=+Certificate+Authorities>

### Heartbleed (2014)

> see `web-security.md#heartbleed`

### Renegotiation Gap (2009)

[Truth in SOA: Really Understanding the SSL/TLS Vulnerability (Part 1)](http://soatruth.blogspot.hk/2009/12/really-understanding-ssltls.html)

## Localhost certs

[FiloSottile/mkcert: A simple zero-config tool to make locally-trusted development certificates with any names you'd like.](https://github.com/FiloSottile/mkcert) add local CA to system
[Why and How to Use HTTPS in Your Local Development Environment](https://auth0.com/blog/using-https-in-your-development-environment/)

## Free SSL/TLS Certs

[[ssl-tls-free-certs]]

## Standards

[RFC 2986 - PKCS #10: Certification Request Syntax Specification Version 1.7](http://tools.ietf.org/html/rfc2986)
[RFC 3447 - Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1](http://tools.ietf.org/html/rfc3447)
[RFC 5958 - Asymmetric Key Packages](http://tools.ietf.org/html/rfc5958)
[RFC 6101 - The Secure Sockets Layer (SSL) Protocol Version 3.0](http://tools.ietf.org/html/rfc6101)
[RFC 7525 - Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)](https://tools.ietf.org/html/rfc7525)
[RFC 7292 - PKCS #12: Personal Information Exchange Syntax v1.1](http://tools.ietf.org/html/rfc7292)
