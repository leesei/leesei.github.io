---
title: Caddy
description: Caddy 2 is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go
created: 2023-06-10
updated: 2023-09-29
tags:
  - nginx
  - reverse-proxy
  - web
---

## Caddy

> Caddy used to add Sponsor header and use different license for pre-built binaries
> <https://www.reddit.com/r/golang/comments/bgz0cd/announcing_caddy_10_caddy_2_and_caddy_enterprise/>
> Version 2.0 was released in May 2020, seems to have better community support

> TODO: remove v1 docs (prior to May 2020)

[Caddy - The Ultimate Server with Automatic HTTPS](https://caddyserver.com/)
prebuild library from download page are [licensed differently](https://caddy.community/t/caddy-server-its-free-for-live-server/3371)
[caddyserver/caddy: Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS](https://github.com/caddyserver/caddy)
[caddyserver/caddy-docker: Source for the official Caddy v2 Docker Image](https://github.com/caddyserver/caddy-docker)
[caddyserver/dist: Resources for packaging and distributing Caddy](https://github.com/caddyserver/dist) systemd unit file

```dockerfile
FROM caddy:2-builder-alpine AS builder

RUN xcaddy build \
 --with github.com/greenpau/caddy-auth-jwt \
 --with github.com/greenpau/caddy-auth-portal \
 --with github.com/aksdb/caddy-cgi \
 --with github.com/abiosoft/caddy-json-parse \
 --with github.com/greenpau/caddy-trace \
 --with github.com/RussellLuo/caddy-ext/ratelimit \
 --with github.com/chukmunnlee/caddy-openapi \
 --with github.com/lucaslorentz/caddy-docker-proxy/plugin \
 --with github.com/casbin/caddy-authz \
 --with github.com/mholt/caddy-l4 \
 --with github.com/mholt/caddy-ratelimit

FROM caddy:2-alpine

# overwrites caddy with my custom build
COPY --from=builder /usr/bin/caddy /usr/bin/caddy
```

```
https://caddyserver.com/download?\
  package=github.com%2Fgreenpau%2Fcaddy-auth-jwt&\
  package=github.com%2Fgreenpau%2Fcaddy-auth-portal&\
  package=github.com%2Faksdb%2Fcaddy-cgi%2Fv2&\
  package=github.com%2Fabiosoft%2Fcaddy-json-parse&\
  package=github.com%2Fgreenpau%2Fcaddy-trace&\
  package=github.com%2FRussellLuo%2Fcaddy-ext%2Fratelimit&\
  package=github.com%2Fchukmunnlee%2Fcaddy-openapi&\
  package=github.com%2Flucaslorentz%2Fcaddy-docker-proxy%2Fplugin%2Fv2&\
  package=github.com%2Fcasbin%2Fcaddy-authz%2Fv2&\
  package=github.com%2Fmholt%2Fcaddy-l4&\
  package=github.com%2Fmholt%2Fcaddy-ratelimit
```

[Welcome — Caddy Documentation](https://caddyserver.com/docs/)
[Getting Started — Caddy Documentation](https://caddyserver.com/docs/getting-started)
[Upgrading to Caddy 2 — Caddy Documentation](https://caddyserver.com/docs/v2-upgrade)
[Caddy Community](https://caddy.community/)
[Top Wiki topics - Caddy Community](https://caddy.community/c/wiki/13)

[Anyone else dislike v2? - Help - Caddy Community](https://caddy.community/t/anyone-else-dislike-v2/8191/10)
[For Mastodon Caddy Setting file. (Based on official Nginx configuration example) [Last Update: May 16, 2020]](https://gist.github.com/ehlxr/37764950fcb4d68d3a00b5f0000823e7) v1 -> v2
[Upgrading to Caddy 2 — Caddy Documentation](https://caddyserver.com/docs/v2-upgrade)

[Caddy offers TLS, HTTPS, and more in one dependency-free Go Web server – Ars Technica](https://arstechnica.com/gadgets/2020/05/caddy-offers-tls-https-and-more-in-one-dependency-free-go-web-server/amp/)

### Troubleshooting

> see `ssl-tls.md#ssl-checkers`

Do check SSL cert with SSL checkers as browser may allow revoked cert due to caching, but some anti-virus software will block it.

In case of Caddy not renewing revoked certificate, remove `~/.local/share/caddy/certificates/acme-v02.api.letsencrypt.org-directory/<domain>` manually.

### Config

[Caddyfile Quick-start — Caddy Documentation](https://caddyserver.com/docs/quick-starts/caddyfile)
[Caddyfile Tutorial — Caddy Documentation](https://caddyserver.com/docs/caddyfile-tutorial)
[The Caddyfile — Caddy Documentation](https://caddyserver.com/docs/caddyfile)
[Caddyfile Concepts — Caddy Documentation](https://caddyserver.com/docs/caddyfile/concepts)

[API Quick-start — Caddy Documentation](https://caddyserver.com/docs/quick-starts/api)
[API — Caddy Documentation](https://caddyserver.com/docs/api)

[JSON Config Structure - Caddy Documentation](https://caddyserver.com/docs/json/)

[Command Line — Caddy Documentation](https://caddyserver.com/docs/command-line)

```sh
caddy run --config /path/to/Caddyfile
caddy start --config /path/to/Caddyfile  # in background
caddy file-server browse
```

[Top Wiki topics - Caddy Community](https://caddy.community/c/wiki/13)
[So You Want to Write a Caddyfile - Wiki - Caddy Community](https://caddy.community/t/so-you-want-to-write-a-caddyfile/8205)
[Composing in the Caddyfile - Wiki - Caddy Community](https://caddy.community/t/composing-in-the-caddyfile/8291)

#### CORS

[Caddy v2.1 CORS whitelist](https://gist.github.com/ryanburnette/d13575c9ced201e73f8169d3a793c1a3) use `import` directive
[Implementing CORS whitelist in Caddy v2 - Help - Caddy Community](https://caddy.community/t/implementing-cors-whitelist-in-caddy-v2/8590) including 2.0 solution

### Videos

[Provo Linux User Group - 2/16/16 - Matt Holt - "Caddy" - YouTube](https://www.youtube.com/watch?v=ZyVA9tuif4s)
[Caddy server Git add-on tutorial. - YouTube](https://www.youtube.com/watch?v=dmat1MUT0fc)

### Docker

[Max Mehl | Docker2Caddy - An automatic Reverse Proxy for Docker containers](https://mehl.mx/blog/2022/docker2caddy-an-automatic-reverse-proxy-for-docker-containers/)
[fsfe-system-hackers/docker2caddy: Background script that checks Docker containers running on the host and creates their Caddy reverse proxy config - docker2caddy - FSFE Git Service](https://git.fsfe.org/fsfe-system-hackers/docker2caddy)

[Karan Sharma | How I expose services while self hosting](https://mrkaran.dev/posts/exposing-services/)

### Module/Plugin

[Extending Caddy — Caddy Documentation](https://caddyserver.com/docs/extending-caddy)

[Modules - Caddy Documentation](https://caddyserver.com/docs/modules/) built-in modules
[Download Caddy](https://caddyserver.com/download) select bundled modules
[caddyserver/xcaddy: Build Caddy with plugins](https://github.com/caddyserver/xcaddy)

[mholt/caddy-l4: Layer 4 (TCP/UDP) app for Caddy](https://github.com/mholt/caddy-l4)
[Combining the layer4 and http apps (SSL pass through + http file_server/reverse_proxy) - Help - Caddy Community](https://caddy.community/t/combining-the-layer4-and-http-apps-ssl-pass-through-http-file-server-reverse-proxy/12698/3)
[Https Termination · Issue #3 · mholt/caddy-l4](https://github.com/mholt/caddy-l4/issues/3)

[abiosoft/caddy-git: git middleware for Caddy](https://github.com/abiosoft/caddy-git) for deployment

[mholt/caddy-ratelimit: HTTP rate limiting module for Caddy 2](https://github.com/mholt/caddy-ratelimit)
[caddy-ext/ratelimit at master · RussellLuo/caddy-ext](https://github.com/RussellLuo/caddy-ext/tree/master/ratelimit)
[greenpau/caddy-auth-portal: Authentication Plugin for Caddy v2 implementing Form-Based, Basic, Local, LDAP, OpenID Connect, OAuth 2.0 (Github, Google, Facebook, Okta, etc.), SAML Authentication](https://github.com/greenpau/caddy-auth-portal)
[greenpau/caddy-auth-jwt: JWT Authorization Plugin for Caddy v2](https://github.com/greenpau/caddy-auth-jwt)
[lucaslorentz/caddy-docker-proxy: Caddy as a reverse proxy for Docker](https://github.com/lucaslorentz/caddy-docker-proxy)

[casbin/caddy-authz: Caddy-authz is a middleware for Caddy that blocks or allows requests based on access control policies.](https://github.com/casbin/caddy-authz)
[casbin/casbin: An authorization library that supports access control models like ACL, RBAC, ABAC in Golang](https://github.com/casbin/casbin)

[How to use DNS provider modules in Caddy 2 - Wiki - Caddy Community](https://caddy.community/t/how-to-use-dns-provider-modules-in-caddy-2/8148)
[caddy-dns](https://github.com/caddy-dns)
[mholt/caddy-dynamicdns: Caddy app that keeps your DNS records (A/AAAA) pointed at itself.](https://github.com/mholt/caddy-dynamicdns)

### Tips and Tricks

[Best practice tips/help - Help - Caddy Community](https://caddy.community/t/best-practice-tips-help/11093)

Cascading Caddy server results in empty 200 response
[Why does caddy return an empty 200 response for a non-configured host? - Help - Caddy Community](https://caddy.community/t/why-does-caddy-return-an-empty-200-response-for-a-non-configured-host/7685)

### v1

[Command Line Interface - Caddy](https://caddyserver.com/docs/cli) v1
[caddyserver/examples: Simple guided examples of how to use Caddy](https://github.com/caddyserver/examples) v1

[abiosoft/caddy](https://hub.docker.com/r/abiosoft/caddy/tags)
[zzrot/alpine-caddy](https://hub.docker.com/r/zzrot/alpine-caddy)

[Simply Secure » Linux Magazine](http://www.linux-magazine.com/Issues/2018/213/Caddy)
[Today I became a Go developer, with vim and Caddy](https://coolaj86.com/articles/today-i-became-a-golang-dev-with-vim-and-caddy/)
[A Look Inside Caddy, a Web Server Written in Go](https://blog.gopheracademy.com/caddy-a-look-inside/)

```sh
# OBSOLETE v1 instructions
curl https://getcaddy.com | bash -s personal http.cors,http.expires,http.filemanager,http.filter,http.forwardproxy,http.git,http.hugo,http.jwt,http.locale,http.login,http.minify

mkdir caddy; cd caddy
wget https://caddyserver.com/download/linux/amd64 -O caddy_linux_amd64.tar.gz
tar xzf caddy_linux_amd64.tar.gz

./caddy browse -log ./log -port 80 -root <WWW_ROOT>
```
