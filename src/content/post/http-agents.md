---
title: HTTP agents
description: ""
created: 2014-12-11
updated: 2025-08-27
tags:
  - curl
  - har
  - hipp
  - http-agent
  - httpie
  - postman
  - shell-tool
  - web
  - web-dev
  - wget
  - xh
---

[Intercept, debug & mock HTTP with HTTP Toolkit](https://httptoolkit.tech/)

## Mimicking Cross Origin Request

```sh
curl -H "Origin: http://example.com" --verbose \
  https://www.googleapis.com/discovery/v1/apis?fields=

# CORS preflight, should include "Access-Control-Allow-Methods"
curl -H "Origin: http://example.com" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: X-Requested-With" \
  -X OPTIONS --verbose \
  https://www.googleapis.com/discovery/v1/apis?fields=
```

```sh
# CORS preflight
http --print -Hh OPTIONS \
    https://www.googleapis.com/discovery/v1/apis\?fields\= \
    Origin:http://example.com \
    Access-Control-Request-Method:POST \
    Access-Control-Request-Headers:X-Requested-With
```

## cURL

[17 Years of curl with Daniel Stenberg (Changelog Interviews #153)](https://changelog.com/podcast/153)
[Everything curl - GitBook](https://www.gitbook.com/book/bagder/everything-curl/details)
[Chapter 3: cURL | Conquering the Command Line | Softcover.io](http://conqueringthecommandline.com/book/curl)
[lexiforest/curl-impersonate: An active fork of curl-impersonate with more versions and build targets. A series of patches that make curl requests look like Chrome and Firefox.](https://github.com/lexiforest/curl-impersonate)

```sh
curl
    -X '{HTTP_METHOD}'
    -H '${KEY}: ${VALUE}' # header
    -B 'NAME1=VALUE1; NAME2=VALUE2' # cookie or cookie file
    -d '${BODY}' # body text (or file with '@')
    -L # follow redirects
    ${URL}
```

```sh
curl --data "param1=value1&param2=value2" ${URL}
curl --form "fileupload=@my-file.txt" ${URL}
curl -F "NAME1=VALUE1" -F "NAME2=VALUE2" ${URL}
curl -X POST -H "Content-Type: application/json" -d '{"type": "json"}' ${URL}
```

[curl - How To Use](https://curl.haxx.se/docs/manpage.html)
[curl - Manual](https://curl.haxx.se/docs/manual.html)
[curl - Tutorial](https://curl.haxx.se/docs/httpscripting.html)

[15 Practical Linux cURL Command Examples (cURL Download Examples)](https://www.thegeekstuff.com/2012/04/curl-examples/)
[POST Form Data with cURL](https://davidwalsh.name/curl-post-file)

[Embed curl - Embeddable curl commands for your web site.](https://www.embedcurl.com/)
[Parsing curl Commands with shlex - YouTube](https://www.youtube.com/watch?v=QnJ22Kgmb5M)
[Hurl.it - Make HTTP requests](https://www.hurl.it/)

[curl vs libcurl](https://daniel.haxx.se/docs/curl-vs-libcurl.html)
[curl vs Wget](https://daniel.haxx.se/docs/curl-vs-wget.html)

### curlify

Converts browser/Node request to `curl` command line.

[Node curlify](https://github.com/azproduction/node-request-as-curl)
[Chrome DevTools](https://developer.chrome.com/devtools/docs/network#copying-requests-as-curl-commands)
[Firefox DevTools](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor#Copy_as_cURL)

[Convert curl commands to code](https://curlconverter.com/)
[curlconverter/curlconverter: Transpile curl commands into Python, JavaScript and 27 other languages](https://github.com/curlconverter/curlconverter)

## wget

[The Ultimate Wget Download Guide With 15 Awesome Examples](https://www.thegeekstuff.com/2009/09/the-ultimate-wget-download-guide-with-15-awesome-examples/)
[rockdaboot/wget2: The successor of GNU Wget](https://github.com/rockdaboot/wget2)

[wget - man page - ManKier](https://www.mankier.com/1/wget)
[Linux Commands – Parallel Downloading with wget | Baeldung on Linux](https://www.baeldung.com/linux/wget-parallel-downloading)

```sh
wget -p -k -nd -q -E -r -R js,txt,css -nc %pg%

# no upwards
get all images, etc. needed to display HTML page
recursively
make links in downloaded HTML point to local files
don't create directories
quiet
save HTML documents with `.html` extension
comma-separated list of rejected extensions: js,txt,css
skip downloads that would download to existing files

# clone website (form Just Enough Linux)
wget -e robots=off -r -np -nc -k -c <URL>
# -e robots=off: ignore we are a robot
# -r,--recursive: recursive retrieving
# -np,--no-parent: do not ascend to the parent directory when `-r`
# -nc,--no-clobber: don't redownload
# -k,--convert-links: convert links suitable for local viewing
# -c,--continue: continue getting a partially-downloaded file.

# my wget_all.sh
wget -r -l inf -nH -np -k -c -U "${SCRIPT_NAME}" ${URL}
# -m,--mirror: mirroring, equivalent to `-r -N -l inf --no-remove-listing`
# -N: ignore timestamp, conflicts with -nc
# -l: recursion depth
# -nH,--no-host-directories: do not generate directory with host name
# -U,--user-agent: set user agent
```

```sh
# download all links in file, to specific folder
wget -P./download -i list.txt
```

## xh

[ducaale/xh: Friendly and fast tool for sending HTTP requests](https://github.com/ducaale/xh)
[HTTPie feature parity checklist · Issue #4 · ducaale/xh · GitHub](https://github.com/ducaale/xh/issues/4)

It's a re-implementation of `httpie`:

- prints header and response by default
- written in Rust, should be faster

```sh
# wget replacement
xh --download URL

# automatically uses POST
xh URL foo=bar number:=7 query==value
# headers
xh URL header:value remove-header: header-without-value;

cat body.json | xh POST URL
xh POST URL <<EOF
{
  "user": "user",
  "password": "password"
}
EOF

# to support cookie
xh --session session.json URL
```

## httpYac

[httpYac](https://httpyac.github.io/)

- CLI app, also have VS Code extension  
  [httpYac - Rest Client - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=anweber.vscode-httpyac)  
  [httpBook - Rest Client - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=anweber.httpbook)
- supports `.http` file like Rest Client
  partial support for Rest Client's System Variables
- supports OAuth2 and custom auth flow
- supports GraphQL, gRPC, WebSocket, MQTT, AMQP/RabbitMQ
- supports scripts and plugins
- [Feature comparisons | httpYac](https://httpyac.github.io/guide/#feature-comparisons)  
  better than Rest Client in some aspects  
  but there is no "exchange" mode (showing all conversions between client and server, akin to `xh -v`)

## aria2

[aria2](https://aria2.github.io/)
[aria2/aria2: aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink.](https://github.com/aria2/aria2)

```sh
aria2c -x 4 -k 1M [url]  # 4 connections
```

## HTTrack

[HTTrack Website Copier - Free Software Offline Browser (GNU GPL)](https://www.httrack.com/)

```sh
httrack -c8 [url]
```

## httpie

> use `xh` instead

HTTP client for CLI, more sensible than cURL
[HTTPie – command-line HTTP client for the API era](https://httpie.io/)
[HTTPie demo](https://httpie.io/run)
[jkbrzt/httpie](https://github.com/jkbrzt/httpie)

[httpie cheatsheet](https://devhints.io/httpie)
[httpie: A CLI http client that will make you smile (by @radekpazdera)](http://radek.io/2015/10/20/httpie/)
[HTTPie - HTTP for Humans – Mitesh Shah](https://miteshshah.github.io/sysadmin/httpie-http-for-humans/)
[httpie: A CLI http client that will make you smile (by @radekpazdera)](https://radek.io/2015/10/20/httpie/)

[eliangcs/http-prompt: HTTPie + prompt_toolkit = an interactive command-line HTTP client featuring autocomplete and syntax highlighting](https://github.com/eliangcs/http-prompt)

```sh
# create session to store cookies
http --session dpms85 POST http://10.6.64.85/sso token=${DPMS_TOKEN}
```

```sh
# test CORS
http POST http://api.server/login \
  Origin:http://example.com \
  Access-Control-Request-Method:POST \
  Access-Control-Request-Headers:X-Requested-With <<EOF
{
  "user": "user",
  "password": "password"
}
EOF
```

```sh
# use with Here Doc
TOKEN=$(http -b POST https://api.server/auth username=admin password=password)
http -b POST https://api.server/tokens "Authorization: Bearer ${TOKEN}" <<EOF
{
    "foo": "bar"
    "tokens": [
        "82b8d60bb4434b0083a9",
        "20458cb886154d618095",
        "c0b8191918a64e60967a",
        "3ce30cd4f5e340d09585",
        "871142606b564ce2b1de"
    ]
}
EOF
```

## GUI App

> I recommend REST Client on VSCode or scripts using xh/HTTPie/curl
> then you own your collections without depending on SaaS

[Hurl - Run and Test HTTP Requests](https://hurl.dev/) similar to REST Client, but more powerful

[Download HTTPie for Desktop – HTTPie](https://httpie.io/download)

[Graphing COVID time series data using Chart.js and Postman | by Joyce Lin | Better Practices | Medium](https://medium.com/better-practices/graphing-covid-time-series-data-using-chart-js-and-postman-5d13eff44761)
[How to visualize data in Postman - YouTube](https://www.youtube.com/playlist?list=PL6yYBvW22vbqiyhb_U-RWfxuZNv0DKBP8)

[Inspector](https://inspector.swagger.io/builder?url=https%3A%2F%2Fswapi.co%2Fapi%2Fpeople) web GUI from Swagger

### Bruno

[bruno](https://www.usebruno.com/)

[usebruno/bruno: Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)](https://github.com/usebruno/bruno)

### REST Client

[REST Client - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
[Huachao/vscode-restclient: REST Client Extension for Visual Studio Code](https://github.com/Huachao/vscode-restclient)

[System Variables](https://github.com/Huachao/vscode-restclient#system-variables)

[Show request headers as well as response · Issue #99 · Huachao/vscode-restclient](https://github.com/Huachao/vscode-restclient/issues/99#issuecomment-332139174)
Set `previewOption` to `exchange` (default `full`) to view requests

[I Abandoned Postman for This NEW VS Code Extension | Build, Test & Sell APIs 🤑 - YouTube](https://www.youtube.com/watch?v=MTrj3tNf9jA)
[Bye bye Postman ! Let's share your REST API calls in team, easily ! - DEV Community 👩‍💻👨‍💻](https://dev.to/monisnap/bye-bye-postman-let-s-share-your-rest-api-calls-in-team-easily-h6l)
[REST Client for your early Rest API-based project using Visual Studio Code - DEV Community](https://dev.to/dendihandian/rest-client-for-your-early-rest-api-based-project-using-visual-studio-code-4p1i)
[VS Code’s REST Client Plugin is All You Need to Make API Calls | by Paige Niedringhaus | Bits and Pieces](https://blog.bitsrc.io/vs-codes-rest-client-plugin-is-all-you-need-to-make-api-calls-e9e95fcfd85a)
[[VSCode 插件推荐] REST Client: 也许是比 Postman 更好的选择 - 知乎](https://zhuanlan.zhihu.com/p/54266685)

[In VS Code REST CLIENT plugin - how do you store variables from data retrieved from a request? - Stack Overflow](https://stackoverflow.com/a/71553765)

### Thunder Client

> POSTMan in VS Code

[Thunder Client - Lightweight Rest API Client Extension for VS Code](https://www.thunderclient.com/) import OpenAPI, OAuth2 client
[Thunder Client - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

### RapidAPI Client

[RapidAPI Client - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=RapidAPI.vscode-rapidapi-client) HTTP requests in plain text, generate types

Desktop app available on macOS

### Hoppscotch

[Hoppscotch - Open source API development ecosystem](https://hoppscotch.io/) open source port of Postman, originally Postwoman
[hoppscotch/hoppscotch: 👽 Open source API development ecosystem https://hoppscotch.io](https://github.com/hoppscotch/hoppscotch)
[I created Postwoman 👽 - An online, open source API request builder - DEV Community 👩‍💻👨‍💻](https://dev.to/liyasthomas/i-created-postwoman-an-online-open-source-api-request-builder-41md)

### Not recommended

[Postman - A powerful HTTP client to test web services](http://www.getpostman.com/)
[REST Client | Postman API Platform [Free Download]](https://www.postman.com/product/rest-client/) also supports GraphQL
[Postman Docs](https://www.getpostman.com/docs)
Postman NOT recommended as it is cloud-required (2023-10 with the deprecation of Scratchpad)

[Newman v3 – Postman Blog](http://blog.getpostman.com/2016/08/12/newman-v3/)
[postmanlabs/newman: Newman is a command-line collection runner for Postman](https://github.com/postmanlabs/newman)

[Review: Postman Client Makes RESTful API Exploration a Breeze](http://blog.programmableweb.com/2014/01/27/review-postman-client-makes-restful-api-exploration-a-breeze/)

[Insomnia REST Client](https://insomnia.rest/) open source, also supports GraphQL, NOT recommended as it is cloud-required (2023-10)
[Use Insomnia for API Requests](https://apis.support.brightcove.com/general/use-insomnia-api-requests.html)

## Node.js

[zeke/npm-collection-http-clients: A review of HTTP clients for Node.js and browsers](https://github.com/zeke/npm-collection-http-clients)

[fetch API](https://davidwalsh.name/fetch) WHATWG standard
[Fetch - from simple to scalable implementation - DEV Community](https://dev.to/nombrekeff/think-like-a-pro-grammer-10k1)
[How to monitor the progress of a Javascript fetch - request and cancel it on demand. - DEV Community](https://dev.to/tqbit/how-to-monitor-the-progress-of-a-javascript-fetch-request-and-cancel-it-on-demand-107f)
[posva/mande: 600 bytes convenient and modern wrapper around fetch with smart extensible defaults](https://github.com/posva/mande)

[HTTP Requests Compared: Why Axios Is Better Than Node-Fetch (Automatic Transformations, More…](https://medium.com/@jeffrey.allen.lewis/http-requests-compared-why-axios-is-better-than-node-fetch-more-secure-can-handle-errors-better-39fde869a4a6)
[Axios vs Fetch — Which To Use in 2019 | by Malcolm Laing | Frontend Digest | Medium](https://medium.com/frontend-digest/axios-vs-fetch-which-to-use-in-2019-6678c083c5c)

[Axios](https://axios-http.com/)
[axios/axios: Promise based HTTP client for the browser and node.js](https://github.com/axios/axios)
[How To Use Axios in an Optimized and Scalable Way With React - DEV Community](https://dev.to/nilanth/how-to-use-axios-in-an-optimized-and-scalable-way-with-react-518n)
[The Modern Way to Use Promise- Based HTTP Requests: axios-hooks](https://medium.com/better-programming/the-modern-way-to-use-promise-based-http-requests-axios-hooks-f00791345a37)
[Handling Errors With Axios](https://stackabuse.com/handling-errors-with-axios/)
[Axios Tutorials - Mastering JS](https://masteringjs.io/axios)

Isomorphic (through bundler):
[sindresorhus/ky: 🌳 Tiny & elegant JavaScript HTTP client based on the browser Fetch API](https://github.com/sindresorhus/ky) reduce boilerplate
[visionmedia/superagent](https://github.com/visionmedia/superagent)
[lukeed/httpie: A Node.js HTTP client as easy as pie! 🥧](https://github.com/lukeed/httpie)

Server:
[bitinn/node-fetch](https://github.com/bitinn/node-fetch)
[tomas/needle](https://github.com/tomas/needle)
[hapijs/wreck](https://github.com/hapijs/wreck) previously `nipple`
[sindresorhus/got](https://github.com/sindresorhus/got)
`

## Go

[API Clients for Humans | Gopher Academy Blog](https://blog.gopheracademy.com/advent-2019/api-clients-humans/)

## Python

[psf/requests: A simple, yet elegant HTTP library.](https://github.com/psf/requests) no async support
[Requests: HTTP for Humans™ — Requests documentation](https://requests.readthedocs.io/en/latest/)
[Python’s Requests Library (Guide) – Real Python](https://realpython.com/python-requests/)

[Python’s Requests Library (Guide) – Real Python](https://realpython.com/python-requests/#request-headers)
[Advanced usage of Python requests - timeouts, retries, hooks](https://hodovi.ch/blog/advanced-usage-python-requests-timeouts-retries-hooks/)

[HTTPX](https://www.python-httpx.org/) also `httpx[cli]`
asynchronous client library that supports HTTP/1.1 and HTTP/2
[encode/httpx: A next generation HTTP client for Python. 🦋](https://github.com/encode/httpx)
[HTTPX Tutorial - A next-generation HTTP client for Python - YouTube](https://www.youtube.com/watch?v=qAh5dDODJ5k)
[Asynchronous HTTP Requests in Python with HTTPX and asyncio](https://www.twilio.com/blog/asynchronous-http-requests-in-python-with-httpx-and-asyncio)

[kennethreitz/requests3: Requests 3.0, for Humans and Machines, alike. 🤖](https://github.com/kennethreitz/requests3)
[encode/httpcore](https://github.com/encode/httpcore)

## Rust

[hyper.rs | hyper](https://hyper.rs/)
[reqwest - Rust](https://docs.rs/reqwest/)
[hyperium/h2: HTTP 2.0 client & server implementation for Rust.](https://github.com/hyperium/h2)

## PHP

[Guzzle, PHP HTTP client — Guzzle Documentation](https://docs.guzzlephp.org/en/stable/) Caching and Batching

# HAR

[HAR 1.2 Spec | Software is hard](http://www.softwareishard.com/blog/har-12-spec/)
[HTTP Archive Viewer](http://www.softwareishard.com/har/viewer/)
[HAR Resources | A community curated list of resources, tools, projects and applications that support HTTP Archive (HAR)](https://ahmadnassri.github.io/har-resources/)
[HAR Adopters | Software is hard](http://www.softwareishard.com/blog/har-adopters/)

[Mashape/harplayer: Replay HAR logs](https://github.com/Mashape/harplayer)
[kkovacs/har-replay: A small, basic tool to replay requests from a HTTP Archive (HAR) file, for load testing](https://github.com/kkovacs/har-replay)
[pilsna/replay-har: A command line tool for replaying HTTP archive files.](https://github.com/pilsna/replay-har) Python
[formalin14/WWW-HarWalk: Replay HTTP requests from HAR ( HTTP Archive ) file](https://github.com/formalin14/WWW-HarWalk) Perl

[Stuk/server-replay: Replay server responses from a HAR file](https://github.com/Stuk/server-replay)
[Netflix/pollyjs: Record, Replay, and Stub HTTP Interactions.](https://github.com/Netflix/pollyjs)

[YSlow - Official Open Source Project Website](http://yslow.org/command-line-har/) get YSlow score with HAR
[pcapperf](http://pcapperf.appspot.com/) get PageSpeed score with PCAP/HAR, PCAP -> HAR
[shaunakv1/node-chrome-har-replay: A node.js script that takes chorme HAR network log file, replays it and generates performance benchmark](https://github.com/shaunakv1/node-chrome-har-replay)

# Others

[fstab/h2c: http2client](https://github.com/fstab/h2c)
[hazbo/httpu: The terminal-first http client](https://github.com/hazbo/httpu)

[antoinechalifour/memento: Memento is a development-only tool that caches HTTP calls once they have been executed.](https://github.com/antoinechalifour/memento)

# Load Testing

[Load Testing: An Unorthodox Guide](https://www.marcobehler.com/guides/load-testing)

[Locust - A modern load testing framework](https://locust.io/)
[locustio/locust: Write scalable load tests in plain Python 🚗💨](https://github.com/locustio/locust/)
[alteryx/locust-grasshopper: a load testing tool extended from locust](https://github.com/alteryx/locust-grasshopper)
[Introducing Grasshopper - An Open Source Python Library for Load Testing](https://innovation.alteryx.com/introducing-grasshopper-an-open-source-python-library-for-load-testing/)

[fcsonline/drill: Drill is an HTTP load testing application written in Rust](https://github.com/fcsonline/drill) ❗!important, YAML config for headers and payloads
[h2load - HTTP/2 benchmarking tool - HOW-TO — nghttp2 documentation](https://nghttp2.org/documentation/h2load-howto.html)
[mcollina/autocannon: fast HTTP/1.1 benchmarking tool written in Node.js](https://github.com/mcollina/autocannon)
[hatoo/oha: Ohayou(おはよう), HTTP load generator, inspired by rakyll/hey with tui animation.](https://github.com/hatoo/oha)❗!important
[wreck - hapi.dev](https://hapi.dev/module/wreck/)

[k6.io - Performance testing for developers, like unit-testing, for performance](https://k6.io/)
[grafana/k6: A modern load testing tool, using Go and JavaScript - https://k6.io](https://github.com/grafana/k6)

[SmokePing - About SmokePing](https://oss.oetiker.ch/smokeping/index.en.html) deluxe latency measurement tool

[ab - Apache HTTP server benchmarking tool - Apache HTTP Server](https://httpd.apache.org/docs/current/programs/ab.html)
Use `ab -k` (keepalive) to avoid testing connections (kernel responsibility)
[Simultaneously benchmark many URLs with ApacheBench and GNU parallel · Simon Holywell](https://www.simonholywell.com/post/2015/06/parallel-benchmark-many-urls-with-apachebench/)

[wg/wrk: Modern HTTP benchmarking tool](https://github.com/wg/wrk) 😴inactive
[giltene/wrk2: A constant throughput, correct latency recording variant of wrk](https://github.com/giltene/wrk2) 😴inactive
[rakyll/hey: HTTP load generator, ApacheBench (ab) replacement](https://github.com/rakyll/hey) 😴inactive
[alexfernandez/loadtest: Runs a load test on the selected URL. Easy to extend minimally for your own ends.](https://github.com/alexfernandez/loadtest) 😴inactive
[codesenberg/bombardier: Fast cross-platform HTTP benchmarking tool written in Go](https://github.com/codesenberg/bombardier) 😴inactive, no header config?

## Gatling

[Gatling - Professional Load Testing Tool](https://gatling.io/)
[gatling/gatling: Modern Load Testing as Code](https://github.com/gatling/gatling)
[Gatling - Reference](https://gatling.io/docs/gatling/reference/current/)
[52-technologies-in-2016/10-gatling](https://github.com/shekhargulati/52-technologies-in-2016/blob/master/10-gatling/README.md)
[Load Testing APIs and Websites with Gatling: It’s Never Too Late to Get Started](https://www.infoq.com/articles/load-testing-apis-gatling/)
[Gatling vs JMeter - What to Use for Performance Testing](https://www.infoq.com/articles/performance-testing/)

[Stresstests with Gatling by Niko Köbler - YouTube](https://www.youtube.com/watch?v=gOZvtBYzIVc)
[Stéphane Landelle - Load Testing Done Right with Gatling - YouTube](https://www.youtube.com/watch?v=VUPTaPms210)

```scala
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ParameterizedSimulation extends Simulation {
  val url = System.getenv("GATLING_URL")
  val requests = Integer.parseInt(System.getenv("GATLING_REQUESTS"))
  val users = Integer.parseInt(System.getenv("GATLING_USERS"))
  val reqs_per_user = requests / users
  val rampTime = Integer.parseInt(System.getenv("GATLING_RAMP_TIME"))
  val scn = scenario("My scenario").repeat(reqs_per_user) {
    exec(
      http("Dinosaur")
        .get(url)
        .check(status.in(Seq(200,304)))
    )
  }

  setUp(scn.inject(rampUsers(users) over (rampTime seconds)))
}
```

```sh
./gatling.sh -s <class> -on <result-basename> -rd <description>
```

## OpenReplay

[OpenReplay | Open-Source Session Replay](https://openreplay.com/)
[openreplay/openreplay: OpenReplay is developer-friendly, open-source session replay.](https://github.com/openreplay/openreplay)

# Dumping HTTP request/response

[Hookbin - Capture and Inspect HTTP Requests](https://hookbin.com/)
[Hookbin - Capture and Inspect HTTP Requests | CSS-Tricks](https://css-tricks.com/hookbin-capture-inspect-http-requests/)

[Mockbin by Mashape](https://mockbin.com/)
[Mockable: Quickly create REST and SOAP mocks](https://www.mockable.io/)

[RequestBin — A modern request bin to collect, inspect and debug HTTP requests and webhooks - Pipedream](https://pipedream.com/requestbin)
[PipedreamHQ/pipedream: Connect APIs, remarkably fast. Free for developers.](https://github.com/PipedreamHQ/pipedream) hosted
[Webhook.site - Test, process and transform emails and HTTP requests](https://webhook.site/#!/04199650-1606-47ce-9c38-a97502687bd9)

[httpbin.org](https://httpbin.org/)
[postmanlabs/httpbin: HTTP Request & Response Service, written in Python + Flask.](https://github.com/postmanlabs/httpbin)

[go-httpbin(1): HTTP Client Testing Service](https://httpbingo.org/)
[mccutchen/go-httpbin: A reasonably complete and well-tested golang port of httpbin, with zero dependencies outside the go stdlib.](https://github.com/mccutchen/go-httpbin)

[httpbin-rs](https://httpbin.rs/)
[duskmoon314/httpbin-rs: HTTP Request & Response Service pretty like [httpbin](http://httpbin.org) but powered by Rust](https://github.com/duskmoon314/httpbin-rs)

## httpbin.js

> my code 😃

[leesei/httpbin.js: HTTPbin-like server implemented in Node.js](https://github.com/leesei/httpbin.js)

```sh
# https://github.com/jakubroztocil/httpie
brew install httpie

# https://www.npmjs.com/package/httpbin.js
npm install -g httpbin.js
npm install -g bunyan
```

### Term1 (server)

```sh
httpbin.js | bunyan
```

### Term2 (http agent)

```sh
# check request header and body
http -v --json POST http://localhost:35000/prq/xyz?a=b\&c=d key=value foo=bar
http -v --form POST http://localhost:35000/prq/xyz?a=b\&c=d key=value foo=bar
```
