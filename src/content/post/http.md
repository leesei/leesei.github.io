---
title: HTTP
description: ""
created: 2022-08-23
tags:
  - http
  - web
---

[[http-agents]]

## HTTP/1.1

2817 HTTP Upgrade to TLS
[RFC 5861: HTTP Cache-Control Extensions for Stale Content](https://www.rfc-editor.org/rfc/rfc5861)
6266 Content-Disposition in HTTP
6585 Additional HTTP Status Codes
7230 HTTP/1.1 Message Syntax and Routing
7231 HTTP/1.1 Semantics and Content
7232 HTTP/1.1 Conditional Requests
7233 HTTP/1.1 Range Requests
7235 HTTP/1.1 Authentication
7237 HTTP/1.1 Caching
[RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
[RFC 9111: HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111)
[RFC 9112: HTTP/1.1](https://www.rfc-editor.org/rfc/rfc9112)

[How I learned to (stop worrying and) love HTTP](https://codewords.recurse.com/issues/two/how-i-learned-to-stop-worrying-and-love-http)
[Hypertext Transfer Protocol (HTTP) Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
[http — HTTP modules — Python documentation](https://docs.python.org/3/library/http.html)
[File:Http-headers-status.gif - Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3aHttp-headers-status.gif)
[Flow Chart for HTTP return code - Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3aHttp-headers-status.gif)
[for-GET/http-decision-diagram: An activity diagram to describe the resolution of HTTP response status codes, given various headers.](https://github.com/for-GET/http-decision-diagram)

[Three ways to reduce the costs of your HTTP(S) API on AWS - GameAnalytics](https://gameanalytics.com/blog/reduce-costs-https-api-aws.html/amp) HTTP headers trimming

### April Fools joke

[RFC 2324 - Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0)](https://tools.ietf.org/html/rfc2324)
[Larry Masinter Musings: HTTP Status Cat: 418 - I'm a teapot](http://masinter.blogspot.hk/2011/12/http-status-cat-418-i-teapot.html)
[Strange Brew: How the Web's 418 Error Code Became Steeped in Controversy - The New Stack](https://thenewstack.io/tempest-teapot-error-compleat-history-418-return-code/)

## HTTP/2

[RFC 9113: HTTP/2](https://www.rfc-editor.org/rfc/rfc9113)

TCP fast open, put TLS data in syn ack response, but most firewall don't support this

[What is HTTP/2 - The Ultimate Guide by Kinsta](https://kinsta.com/learn/what-is-http2/)
[How to Use HTTP/2 to Speed Up Your Websites and Apps - The New Stack](http://thenewstack.io/take-advantage-http2-speed-web-sites-apps/)
[What you need to know about HTTP/2](https://fly.io/articles/http2-for-devs/)
[Pinboard: bookmarks for rmurphey tagged 'http2'](https://pinboard.in/u:rmurphey/t:http2/)
[Building for HTTP/2](http://rmurphey.com/blog/2015/11/25/building-for-http2)
[Chrome HTTP/2 Log Parser](http://rmurphey.com/blog/2015/11/28/chrome-http2-log-parser)
[7 Tips to Improve HTTP2 Performance | NGINX](https://www.nginx.com/blog/7-tips-for-faster-http2-performance/)
[Introduction | http2 explained](https://bagder.gitbooks.io/http2-explained/content/)
[Best Practice for HTTP2 Front-end deployments](http://blog.cloud66.com/best-practice-for-http2-front-end-deployments/)
[QUIC Next generation multiplexed transport over UDP - YouTube](https://www.youtube.com/watch?v=cSNT88_gedw)

[#161: HTTP/2 with Ilya Grigorik - The Changelog](https://changelog.com/161/) podcast
[HTTP/2 is here, let's optimize! - Velocity SC 2015 - Google Slides](https://docs.google.com/presentation/d/1r7QXGYOLCh4fcUq0jDdDwKJWNqWK1o4xMtYpKZCJYjM/present?slide=id.p19)
[Google's Ilya Grigorik on HTTP 2.0](http://www.slideshare.net/heavybit/heavybit-presents-ilya-grigorik-on)

### servers

> see `nginx.md#http2`
> see `web-reverse-proxy.md#algernon`
> see `web-reverse-proxy.md#caddy`
> see `web-reverse-proxy.md#h2o`

### tools

[Nghttp2: HTTP/2 C Library - nghttp2.org](https://nghttp2.org/)
[Tools for debugging, testing and using HTTP/2](https://blog.cloudflare.com/tools-for-debugging-testing-and-using-http-2/)

## HTTP/3 (QUIC)

HTTP/2 is coupled to TCP features, HTTP/3 reimplemented HTTP/2 features on top of QUIC, a UDP-based protocol

QUIC itself reimplements most TCP features on top of UDP, and deeply integrates TLS
This makes most of the payload opaque to firewalls so they won't mess up the packet

Server Push is deprecated, use 103 Early Hints instead.

[RFC 9114: HTTP/3](https://www.rfc-editor.org/rfc/rfc9114)
[RFC 9204: QPACK: Field Compression for HTTP/3](https://www.rfc-editor.org/rfc/rfc9204)
[RFC 9218: Extensible Prioritization Scheme for HTTP](https://www.rfc-editor.org/rfc/rfc9218) HTTP/2 and HTTP/3

[QUIC Working Group](https://quicwg.org/)
[QUIC - Wikiwand](https://www.wikiwand.com/en/QUIC)
[QUIC, a multiplexed stream transport over UDP - The Chromium Projects](https://www.chromium.org/quic)
[The QUIC transport protocol: design and Internet-scale deployment | the morning paper](https://blog.acolyer.org/2017/10/26/the-quic-transport-protocol-design-and-internet-scale-deployment/)
[Unlocking QUIC’s proxying potential with MASQUE](https://blog.cloudflare.com/unlocking-quic-proxying-potential/)

[HTTP/3 From A To Z: Core Concepts — Smashing Magazine](https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/)
[HTTP/3: Performance Improvements (Part 2) — Smashing Magazine](https://www.smashingmagazine.com/2021/08/http3-performance-improvements-part2/)
[HTTP/3: Practical Deployment Options (Part 3) — Smashing Magazine](https://www.smashingmagazine.com/2021/09/http3-practical-deployment-options-part3/)

[The Changelog #299: Curl turns 20, HTTP/2, and QUIC with Daniel Stenberg | News and podcasts for developers | Changelog](https://changelog.com/podcast/299)

[The Internet just changed. - YouTube](https://www.youtube.com/watch?v=cdb7M37o9sU)
[Is this the future of the Internet? UDP Deep Dive. - YouTube](https://www.youtube.com/watch?v=kVSCFBuh9xs)
[HTTP/3 - HTTP over QUIC is the next generation by Daniel Stenberg - YouTube](https://www.youtube.com/watch?v=idViw4anA6E)

## Rate Limiting

[Understanding and implementing rate limiting in Node.js - LogRocket Blog](https://blog.logrocket.com/rate-limiting-node-js/)
[Ratelimiting Your APIs With Redis (The Theo-Proof Way) - YouTube](https://www.youtube.com/watch?v=yfGCmSjGIxk)