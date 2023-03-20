---
title: Web Push Technologies
description: ""
created: 2019-03-04
tags:
  - server-send-event
  - web
  - web-socket
---

[Push technology - Wikiwand](https://www.wikiwand.com/en/Push_technology#/Long_polling)
[php - What are Long-Polling, Websockets, Server-Sent Events (SSE) and Comet? - Stack Overflow](https://stackoverflow.com/questions/11077857/what-are-long-polling-websockets-server-sent-events-sse-and-comet)

[Webhooks vs Websockets vs HTTP Streaming - Which Event-Driven API to use? - YouTube](https://www.youtube.com/watch?v=6RvlKYgRFYQ)

[[rpc#gRPC]]

---

# Web Socket

A persistent connection between the client and the server and both parties can start sending data at any time.

[[feathersjs]]
[[go-notes#Iris]]

[websocket.org - Powered by Kaazing](https://www.websocket.org/)
[HTML5 WebSocket - A Quantum Leap in Scalability for the Web](http://websocket.org/quantum.html)
[About HTML5 WebSocket - Powered by Kaazing](https://www.websocket.org/aboutwebsocket.html)
[HTML5 WebSocket - A Quantum Leap in Scalability for the Web](https://websocket.org/quantum.html)

Hussein Nasser
[WebSockets Crash Course - Handshake, Use-cases, Pros & Cons and more - YouTube](https://www.youtube.com/watch?v=2Nt-ZrNP22A)
[What Really Happens During a WebSockets Connection - Wiresharking WebSockets - YouTube](https://www.youtube.com/watch?v=5tBmkxpeTyE)
[Scaling Websockets with Redis, HAProxy and Node JS - High-availability Group Chat Application - YouTube](https://www.youtube.com/watch?v=gzIcGhJC8hA) scaling

[WebSockets - A Conceptual Deep Dive | Ably Realtime](https://ably.com/topic/websockets)

[RFC 6455 - The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)
[WebSockets - A Conceptual Deep-Dive | Ably Realtime](https://www.ably.io/concepts/websockets)
[WebSockets - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
[Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/#feat=websockets)

[facundofarias/awesome-websockets: A curated list of Websocket libraries and resources.](https://github.com/facundofarias/awesome-websockets)
[Introduction to WebSockets](https://flaviocopes.com/websockets/)
[Introducing WebSockets: Bringing Sockets to the Web - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/websockets/basics/)
[An Introduction to WebSockets - Treehouse Blog](https://blog.teamtreehouse.com/an-introduction-to-websockets)
[Developing Real-Time Web Applications with Server-Sent EventsButton - CloseLearn More](https://auth0.com/blog/developing-real-time-web-applications-with-server-sent-events/)
[WebSockets for fun and profit - Stack Overflow Blog](https://stackoverflow.blog/2019/12/18/websockets-for-fun-and-profit/)

[Using WebSockets in React - DEV Community 👩‍💻👨‍💻](https://dev.to/finallynero/using-websockets-in-react-4fkp)

[NodeUp: fortytwo - a scaling websockets show](http://nodeup.com/fortytwo)

## Kalm

[Kalm - The socket manager](http://kalm.js.org/)
[kalm/kalm.js: The socket manager](https://github.com/kalm/kalm.js)

## Server

[8 Node.js Web Socket Libraries For 2018 – Bits and Pieces](https://blog.bitsrc.io/8-node-js-web-socket-libraries-for-2018-818e7e5b67cf)

[websockets/ws: Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js](https://github.com/websockets/ws)
[How to Build a Chat Application using React, Redux, Redux-Saga, and Web Sockets](https://medium.freecodecamp.org/how-to-build-a-chat-application-using-react-redux-redux-saga-and-web-sockets-47423e4bc21a)

[uNetworking/uWebSockets: Simple, secure & standards compliant web server for the most demanding of applications](https://github.com/uNetworking/uWebSockets) C/C++
[uNetworking/uWebSockets.js: TypeScript web server - 15x faster than Deno](https://github.com/uNetworking/uWebSockets.js)
[soketi/soketi: Just another simple, fast, and resilient open-source WebSockets server. 📣](https://github.com/soketi/soketi)

[primus/primus: Primus, the creator god of the transformers & an abstraction layer for real-time to prevent module lock-in.](https://github.com/primus/primus)
[hugmanrique/turbo-ws: Blazing fast low-level WebSocket server](https://github.com/hugmanrique/turbo-ws)
[faye/faye-websocket-node: Standards-compliant WebSocket client and server](https://github.com/faye/faye-websocket-node)

[Implementing a WebSocket Server with Node.js – Hacker Noon](https://hackernoon.com/implementing-a-websocket-server-with-node-js-d9b78ec5ffa8) from scratch
[Node.js & WebSocket — Simple chat tutorial – Martin Sikora – Medium](https://medium.com/@martin.sikora/node-js-websocket-simple-chat-tutorial-2def3a841b61)
[Building a chat application with Spring Boot and WebSocket | CalliCoder](https://www.callicoder.com/spring-boot-websocket-chat-example/)

## HTTP server integration

```js
const server = new Hapi.Server();
const app = require("http").createServer(handler);
// `server.listener` is equivalent to `app`
```

## WAMP

[Web Application Messaging Protocol - Wikiwand](https://www.wikiwand.com/en/Web_Application_Messaging_Protocol) MessagePack/JSON over WebSocket
[The Web Application Messaging Protocol — Web Application Messaging Protocol version 2 documentation](https://wamp-proto.org/)

[Introduction to WAMP, a protocol enabling PUB/SUB and RPC over Websoc…](https://www.slideshare.net/sametmax/intro-wamp)

[Crossbar.io](https://crossbar.io/) Server
[Crossbar.io - autobahn](https://crossbar.io/autobahn/) Client

## Socket.io

> avoid, old code and memory leak

[Socket.IO](https://socket.io/)
[WebSocket and Socket.IO](https://davidwalsh.name/websocket)
[Beyond REST: Using WebSockets for two-way communication in your React app](https://blog.logrocket.com/beyond-rest-using-websockets-for-two-way-communication-in-your-react-app-884eff6655f5)
[Using hapi.js with Socket.io](http://matt-harrison.com/using-hapi-js-with-socket-io/)
[WebSocket + Node.js + Express — Step by step using Typescript](https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4)

[Node.js: Better Performance With Socket.IO and doT](https://code.tutsplus.com/tutorials/nodejs-better-performance-with-socketio-and-dot--net-35076)
[Understanding Socket.IO - NodeSource](https://nodesource.com/blog/understanding-socketio)
[StrongLoop - Real-time Engines in Node.js](https://strongloop.com/strongblog/real-time-engines-in-node-js/)
[Adding Socket.io to multi-threaded Node.js – freeCodeCamp.org](https://medium.freecodecamp.org/how-to-add-socket-io-to-multi-threaded-node-js-df404b424276)
[Understanding the basics of Socket.io - DEV Community 👩‍💻👨‍💻](https://dev.to/uf4no/understanding-the-basics-of-socket-io-3a0e)

[WebSockets in 100 Seconds & Beyond with Socket.io - YouTube](https://www.youtube.com/watch?v=1BfCnjr_Vjg)
[Realtime Chat With Users & Rooms - Socket.io, Node & Express - YouTube](https://www.youtube.com/watch?v=jD7FnbI76Hg)

### On the contrary

[Why you don’t need Socket.IO – codeburst](https://codeburst.io/why-you-don-t-need-socket-io-6848f1c871cd) 2016
[node.js - Differences between socket.io and websockets - Stack Overflow](https://stackoverflow.com/questions/10112178/differences-between-socket-io-and-websockets/38558531#38558531)

## Sock.js

> avoid, fallback no longer needed

[sockjs/sockjs-client: WebSocket emulation - Javascript client](https://github.com/sockjs/sockjs-client)
[sockjs/sockjs-node: WebSocket emulation - Node.js server](https://github.com/sockjs/sockjs-node)
[substack/shoe: streaming sockjs for node and the browser](https://github.com/substack/shoe)

[WebSockets in React, the component way! – Practo Engineering – Medium](https://medium.com/practo-engineering/websockets-in-react-the-component-way-368730334eef)

## Authentication

[javascript - Web Socket connection with Basic Access Authentication - Stack Overflow](https://stackoverflow.com/questions/46998781/web-socket-connection-with-basic-access-authentication)
[Securing WebSocket using wss and HTTPS/TLS (Tech Tip #50)](http://blog.arungupta.me/securing-websocket-wss-https-tls-techtip50/)
[Securing WebSockets using Username/Password and Servlet Security (Tech Tip #49)](http://blog.arungupta.me/securing-websockets-username-password-servlet-security-techtip49/)

## Scaling

[SocketCluster](https://socketcluster.io/#!/) scalable server implementation
[observing/balancerbattle: WebSocket loadbalancer battle](https://github.com/observing/balancerbattle)

[ClusterWS](https://clusterws.github.io/)
[ClusterWS/ClusterWS: Lightweight, fast and powerful framework for building scalable WebSocket applications in Node.js.](https://github.com/ClusterWS/ClusterWS)

[Scaling WebSockets – Hacker Noon](https://hackernoon.com/scaling-websockets-9a31497af051)
[Scaling Node.js Socket Server with Nginx and Redis | Jscrambler Blog](https://blog.jscrambler.com/scaling-node-js-socket-server-with-nginx-and-redis/)
[Horizontally Scaling Node.js and WebSockets with Redis - GoldFire Studios](https://goldfirestudios.com/blog/136/Horizontally-Scaling-Node.js-and-WebSockets-with-Redis)
[Load Balancing Websocket Connections](https://deepstreamhub.com/blog/load-balancing-websocket-connections/)

[Websockets and scalability - Stack Overflow](https://stackoverflow.com/questions/47268038/websockets-and-scalability)
[node.js - Load balancing sockets on a horizontally scaling WebSocket server? - Stack Overflow](https://stackoverflow.com/questions/47321335/load-balancing-sockets-on-a-horizontally-scaling-websocket-server)

### Session Persistence

[Enforcing a single web socket connection per user with Node.js, Socket.IO, and Redis](https://hackernoon.com/enforcing-a-single-web-socket-connection-per-user-with-node-js-socket-io-and-redis-65f9eb57f66a)
[Distributed locks with Redis – Redis](https://redis.io/topics/distlock)

---

# Pre-Web Socket

## Polling

Poll at fixed interval
Excessive updates
High latency

## Long Polling

Server awaits event before sending respond
More responsive but worst than polling on high volume events
Turns into an unthrottled, continuous loop of immediate polls.

[What is HTTP Long Polling? | PubNub](https://www.pubnub.com/blog/2014-12-01-http-long-polling/)
[Long Polling - Concepts and Considerations | Ably Realtime](https://www.ably.io/concepts/long-polling)
[WebSockets vs Long Polling | Ably Blog: Data in Motion](https://ably.com/blog/websockets-vs-long-polling)

[Long Polling and how it differs from Push, Poll and SSE - The Backend Engineering Show - YouTube](https://www.youtube.com/watch?v=J0okraIFPJ0)

[rousan/comet: A http long polling comet implementation for nodejs and browser](https://github.com/rousan/comet)

## Streaming

Server not completing response
Intermediatries may buffer response leading to high latency

---

# Server-sent Events (SSE)

[Server-sent events - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
[Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/#feat=eventsource)
[Server-sent events - Wikiwand](https://www.wikiwand.com/en/Server-sent_events)

[Server-Sent Events Crash Course - YouTube](https://www.youtube.com/watch?v=4HlNv1qpZFY)

[Stream Updates with Server-Sent Events - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/eventsource/basics/)
[A Look at Server-Sent Events – Conectric Networks – Medium](https://medium.com/conectric-networks/a-look-at-server-sent-events-54a77f8d6ff7)
[Using SSE Instead Of WebSockets For Unidirectional Data Flow Over HTTP/2 — Smashing Magazine](https://www.smashingmagazine.com/2018/02/sse-websockets-data-flow-http2/)
[Using Server-Sent Events in Node.js to Build a Realtime App ← Alligator.io](https://alligator.io/nodejs/server-sent-events-build-realtime-app/)
[Realtime newsfeed using server-sent events(SSE) with react.js, Node.js & Mongodb - YouTube](https://www.youtube.com/watch?v=d06PFSHfdzM)
[Using Fetch Event Source for server-sent events in React - LogRocket Blog](https://blog.logrocket.com/using-fetch-event-source-server-sent-events-react/)
[Fastify Server-Sent Events(SSE). Hi friends, In this blog, I will… | by Edison Devadoss | Medium](https://edisondevadoss.medium.com/fastify-server-sent-events-sse-93de994e013b)

[Server-sent events vs. WebSockets - LogRocket Blog](https://blog.logrocket.com/server-sent-events-vs-websockets/)
[Server-Sent Events explained with usecases](https://streamdata.io/blog/server-sent-events/)
[Push: SSE vs Websockets - Streamdata.io](https://streamdata.io/blog/push-sse-vs-websockets/)
[Polling vs SSE vs WebSocket— How to choose the right one](https://codeburst.io/polling-vs-sse-vs-websocket-how-to-choose-the-right-one-1859e4e13bd9)

---

# Push API

[Push API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
[How Push Works | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/push-notifications/how-push-works)

[🚀🔔 Beginners guide to Web Push Notifications using Service Workers | Blog](https://blog.atulr.com/web-notifications/)

## Notifire

[Notifire - Notification management simplified.](https://www.notifire.co/)
[notifirehq/notifire: 🚀 Open-source notification infrastructure for products](https://github.com/notifirehq/notifire)

[Building the first open-source notification infrastructure - DEV Community](https://dev.to/scopsy/building-the-first-open-source-notification-infrastructure-5h9k)

## Webhooks

[Should You Build a Webhooks API? — Brandur Leach](https://brandur.org/webhooks)
[WebHooks vs WebSub: Which Is Better For Real-Time Event Streaming? | Nordic APIs |](https://nordicapis.com/webhooks-vs-websub-which-one-is-better-to-stream-your-events-in-real-time/)

[webhookthing](https://webhookthing.com/)

[CloudEvents](https://cloudevents.io/)

---

# WebSub

[WebSub - Wikiwand](https://www.wikiwand.com/en/WebSub) formerly PubSubHubbub
[PubSubHubbub](https://github.com/pubsubhubbub)

---

# WebTransport

[WebTransport](https://www.w3.org/TR/webtransport/)
[w3c/webtransport: WebTransport is a web API for flexible data transport](https://github.com/w3c/webtransport)

[Experimenting with WebTransport](https://web.dev/webtransport/)
[Experimenting with QUIC and WebTransport in Go - Centrifugo](https://centrifugal.github.io/centrifugo/blog/quic_web_transport/)

[What is WebTransport and can it replace WebSockets? | Ably Blog: Data in Motion](https://ably.com/blog/can-webtransport-replace-websockets)
