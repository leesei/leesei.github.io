---
title: Free SSL/TLS Certificates
description: ""
created: 2023-05-16
updated: 2026-01-05
tags:
  - security
  - ssl
  - tls
  - web
---

[Let's Encrypt](https://letsencrypt.org/)
[Free SSL Certificates and SSL Tools - ZeroSSL](https://zerossl.com/)
[SSL For Free - Free SSL Certificates in Minutes](https://www.sslforfree.com/)

[How To Get A Trusted SSL Certificate for FREE (Works 2020) - YouTube](https://www.youtube.com/watch?v=K90RxdQp9OE)
[Do I Need an SSL Certificate? How SSL Can Protect Your Site](https://www.hostinger.com/tutorials/ssl-benefits)

[Roland Bracewell Shoemaker: Let's Encrypt -- What launching a free CA looks like - YouTube](https://www.youtube.com/watch?v=g2_wbp5vxNs)
[Let's Encrypt with J.C. Jones - YouTube](https://www.youtube.com/watch?v=S7CIHwrroec)

## Automatic Certificate Management Environment (ACME)

[Automatic Certificate Management Environment - Wikiwand](https://www.wikiwand.com/en/articles/Automatic_Certificate_Management_Environment)
[RFC 8555 - Automatic Certificate Management Environment (ACME)](https://datatracker.ietf.org/doc/html/rfc8555/)
[An In-Depth Symbolic Security Analysis of the ACME Standard](https://eprint.iacr.org/2021/1457) formal proof

[How It Works - Let's Encrypt](https://letsencrypt.org/how-it-works/)
[Challenge Types - Let's Encrypt](https://letsencrypt.org/docs/challenge-types/)
[Multi-Perspective Validation Improves Domain Validation Security - Let's Encrypt](https://letsencrypt.org/2020/02/19/multi-perspective-validation)

### http-01

Server visits `http://<domain.name>/.well-known/acme-challenge/<TOKEN>`

### dns-01

[A Technical Deep Dive: Securing the Automation of ACME DNS Challenge Validation | Electronic Frontier Foundation](https://www.eff.org/deeplinks/2018/02/technical-deep-dive-securing-automation-acme-dns-challenge-validation)
[dns-01-challenge · GitHub Topics](https://github.com/topics/dns-01-challenge) plugin for certbots

[Automating Let's Encrypt Certificate Renewal using DNS Challenge Type — Chariot Solutions](https://chariotsolutions.com/blog/post/automating-lets-encrypt-certificate-renewal-using-dns-challenge-type/)

Dynamic DNS updates on Hostinger server by API:

```sh
curl https://developers.hostinger.com/api/dns/v1/zones/<domain.name> \ --request PUT \ --header 'Content-Type: application/json' \ --header 'Authorization: Bearer <API_KEY>' \ --data '{ "overwrite": true, "zone": [ { "name": "_acme-challenge", "records": [ { "content": "<TOKEN>" } ], "ttl": 300, "type": "TXT" } ] }'
```

### tls-alpn-01

[RFC 8737 - Automated Certificate Management Environment (ACME) TLS Application-Layer Protocol Negotiation (ALPN) Challenge Extension](https://datatracker.ietf.org/doc/html/rfc8737)

## Let's Encrypt

[Let's Encrypt](https://letsencrypt.org/)
[How It Works](https://letsencrypt.org/howitworks/)
[Technology](https://letsencrypt.org/howitworks/technology/)
[letsencrypt](https://github.com/letsencrypt/)

[Let's Debug](https://letsdebug.net/)
[Let's Encrypt Status](https://letsencrypt.status.io/)

[The CA's Role in Fighting Phishing and Malware - Let's Encrypt - Free SSL/TLS Certificates](https://letsencrypt.org/2015/10/29/phishing-and-malware.html)

[Automatic HTTPS — Caddy Documentation](https://caddyserver.com/docs/automatic-https#acme-challenges)

[Rate Limits - Let's Encrypt - Free SSL/TLS Certificates](https://letsencrypt.org/docs/rate-limits/)
[Staging Environment - Let's Encrypt - Free SSL/TLS Certificates](https://letsencrypt.org/docs/staging-environment/)
`https://acme-staging-v02.api.letsencrypt.org/directory`

[Let's Encrypt the web with Jacob Hoffman-Andrews (Changelog Interviews #243)](https://changelog.com/podcast/243)

[Let's Encrypt Demo - YouTube](https://www.youtube.com/watch?v=Gas_sSB-5SU)
[Let’s Encrypt Your Docker Dan’s Trial & Errno](https://blog.danivovich.com/2016/01/28/lets-encrypt-your-docker/)
[Docker, Nginx & Letsencrypt: Easy & Secure Reverse Proxy](https://medium.com/@ksiig/docker-nginx-letsencrypt-easy-secure-reverse-proxy-40165ba3aee2)
[How to setup your website for that sweet, sweet HTTPS with Docker, Nginx, and letsencrypt](https://www.freecodecamp.org/news/docker-compose-nginx-and-letsencrypt-setting-up-website-to-do-all-the-things-for-that-https-7cb0bf774b7e)
[SSL with Docker Swarm, Let's Encrypt and Nginx](https://finnian.io/blog/ssl-with-docker-swarm-lets-encrypt-and-nginx/)
[Nginx and Let’s Encrypt with Docker in Less Than 5 Minutes](https://medium.com/@pentacent/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71)
[How To Secure a Containerized Node Application with Let's Encrypt | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose)
[Enabling HTTPS with Let's Encrypt on Docker - BROS - Medium](https://medium.com/bros/enabling-https-with-lets-encrypt-over-docker-9cad06bdb82b)
[Generate free SSL certificates with Docker and LetsEncrypt | Tit Petrič](https://scene-si.org/2016/01/23/generate-free-ssl-certificates-with-docker-and-letsencrypt/)
[How to Set Up Free SSL Certificates from Let's Encrypt using Docker and Nginx](https://www.humankode.com/ssl/how-to-set-up-free-ssl-certificates-from-lets-encrypt-using-docker-and-nginx)

[nginx-proxy/acme-companion: Automated ACME SSL certificate generation for nginx-proxy](https://github.com/nginx-proxy/acme-companion)
[linuxserver/docker-swag: Nginx webserver and reverse proxy with php support and a built-in Certbot (Let's Encrypt) client. It also contains fail2ban for intrusion prevention.](https://github.com/linuxserver/docker-swag)
[JonasAlfredsson/docker-nginx-certbot: Automatically create and renew website certificates for free using the Let's Encrypt certificate authority.](https://github.com/JonasAlfredsson/docker-nginx-certbot/)

[Two domains on one droplet with one SSL certificate | DigitalOcean](https://www.digitalocean.com/community/questions/two-domains-on-one-droplet-with-one-ssl-certificate)
[How To Secure Nginx with Let's Encrypt on Ubuntu 16.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)

[如何免费的让网站启用 HTTPS | | 酷 壳 - CoolShell](https://coolshell.cn/articles/18094.html)
[Complete guide to configure SSL on Nginx with Let's Encrypt (Ubuntu/Centos/RHEL) - LinuxTechLab](https://linuxtechlab.com/complete-guide-to-configure-ssl-on-nginx-with-lets-encrypt-ubuntu-centos-rhel/)
[Let's Encrypt with HAProxy](https://coolaj86.com/articles/lets-encrypt-with-haproxy/)
[Let's Encrypt on Raspberry Pi](https://coolaj86.com/articles/lets-encrypt-on-raspberry-pi/)
[adventures in haproxy: tcp, tls, https, ssh, openvpn](https://coolaj86.com/articles/adventures-in-haproxy-tcp-tls-https-ssh-openvpn/)
[Setting up HTTPS on Nginx using Let’s Encrypt – Frederik Banke – Medium](https://medium.com/@frederikbanke/setting-up-https-on-nginx-using-lets-encrypt-b5eb78cd689d) with Docker and certbot
[How to configure Nginx with free Let’s Encrypt SSL certificate on Debian or Ubuntu Linux](http://www.cyberciti.biz/faq/how-to-configure-nginx-with-free-lets-encrypt-ssl-certificate-on-debian-or-ubuntu-linux/)

## Clients

> integrating Let's Encrypt client into a private DNS server is cool

[ACME Client Implementations - Let's Encrypt](https://letsencrypt.org/docs/client-options/)
[draft-aaron-acme-profiles-01 - Automated Certificate Management Environment (ACME) Profiles Extension](https://datatracker.ietf.org/doc/html/draft-aaron-acme-profiles/)

[Certbot](https://certbot.eff.org/) [docs](https://certbot.eff.org/docs/) previously `letsencrypt`/`letsencrypt-auto`
[User Guide — Certbot.documentation](https://certbot.eff.org/docs/using.html)
[certbot/certbot: Certbot is EFF's tool to obtain certs from Let's Encrypt and (optionally) auto-enable HTTPS on your server. It can also act as a client for any other CA that uses the ACME protocol.](https://github.com/certbot/certbot)

[zerossl/zerossl-bot: The repository for the ZeroSSL certbot wrapper](https://github.com/zerossl/zerossl-bot)

[Lego :: Let’s Encrypt client and ACME library written in Go.](https://go-acme.github.io/lego/)
[go-acme/lego: Let's Encrypt/ACME client and library written in Go](https://github.com/go-acme/lego) Used in Caddy

[diafygi/acme-tiny: A tiny script to issue and renew TLS certs from Let's Encrypt](https://github.com/diafygi/acme-tiny)

### acme-client

[kelunik/acme-client: Let's Encrypt / ACME client written in PHP for the CLI.](https://github.com/kelunik/acme-client)

[Enabling free SSL on Hostinger shared hosting | Kenrick's Notes](https://blog.kenrick95.org/2016/07/enabling-free-ssl-on-hostinger-shared-hosting/)
[iamshreeram/php-ssl-installer: Installing SSL certificate in hostinger](https://github.com/iamshreeram/php-ssl-installer)

```sh
php bin/acme issue --domains [colon-separated domain names] --path [colon-separated full path to domain root]
```

### acme.sh

[acmesh-official/acme.sh: A pure Unix shell script implementing ACME client protocol](https://github.com/acmesh-official/acme.sh)
[LetsEncrypt SSL cert on GoDaddy Shared Hosting with No Root and No nc](https://tryingtobeawesome.com/encryptdaddy/) `--deploy`, then add cron jobs

```sh
acme.sh --issue -d $DOMAIN -w /home/wwwroot/$DOMAIN
# acme.sh --deploy -d example.com --deploy-hook cpanel_uapi
~/.acme.sh/$DOMAIN/$DOMAIN.cer  # cert
~/.acme.sh/$DOMAIN/$DOMAIN.key  # private key
```

```sh
~/.acme.sh/acme.sh --cron --home ~/.acme.sh --force 2>&1 >> ~/.acme.sh/cronlog.txt
```

### Cloudflare

[How to Get a FREE SSL Certificate with Hostinger - YouTube](https://www.youtube.com/watch?v=gsELqvQfAyM)

- create Cloudflare account
- point to a domain with records
- enable Let's Encrypt

CloudFlare Protection on Hostinger
For 1 CloudFlare Protection plan, you can only use it for 1 website/domain and all its subdomains as long as the domain/website is pointed to us.
We use Cloudflare’s free plan here at Hostinger. It does provide you with these features:

- DDoS attack mitigation
- Global Content Delivery Network (CDN)

The main differences between using Cloudflare with Hostinger directly with and Cloudflare.com are:

- DNS zone can be fully managed from Hostinger side – so you don’t need to worry about updating DNS Records in different places: all of your domain’s DNS management will be in one place
- All main setting of Cloudflare can be found in hPanel – so changing security level will only take a few clicks
- One time activation fee – and Cloudflare will secure your domain and all of your subdomains as long as your domain is hosted with us 💜
