---
title: Web Socket
description: ""
created: 2024-03-12
updated: 2026-01-15
tags:
  - comp/lang
  - rpc/web-socket
  - web-dev
---

[[web-push]]

A persistent connection between the client and the server and both parties can start sending data at any time.

[[feathersjs]]
[[go-lang#Iris]]

[WebSockets handbook | WebSocket.org](https://websocket.org/)
[The Road to WebSockets | WebSocket.org](https://websocket.org/guides/road-to-websockets)

[WebSockets - YouTube](https://www.youtube.com/playlist?list=PLQnljOFTspQUGjfGdg8UvL3D_K9ACL6Qh) Hussein Nasser

[RFC 6455 - The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)
[WebSockets - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
[WebSockets - A Conceptual Deep-Dive | Ably Realtime](https://www.ably.io/concepts/websockets)
[Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/#feat=websockets)

[facundofarias/awesome-websockets: A curated list of Websocket libraries and resources.](https://github.com/facundofarias/awesome-websockets)
[Introduction to WebSockets](https://flaviocopes.com/websockets/)
[Introducing WebSockets - Bringing Sockets to the Web  |  Articles  |  web.dev](https://web.dev/articles/websockets-basics)
[An Introduction to WebSockets - Treehouse Blog](https://blog.teamtreehouse.com/an-introduction-to-websockets)
[Developing Real-Time Web Applications with Server-Sent EventsButton - CloseLearn More](https://auth0.com/blog/developing-real-time-web-applications-with-server-sent-events/)
[WebSockets for fun and profit - Stack Overflow Blog](https://stackoverflow.blog/2019/12/18/websockets-for-fun-and-profit/)

[Using WebSockets in React - DEV Community 👩‍💻👨‍💻](https://dev.to/finallynero/using-websockets-in-react-4fkp)

## Kalm

[Kalm - The socket manager](http://kalm.js.org/)
[kalm/kalm.js: The socket manager](https://github.com/kalm/kalm.js)

## Socio

[Rolands-Laucis/Socio: A WebSocket Real-Time Communication (RTC) API framework](https://github.com/Rolands-Laucis/Socio)

## Server

> Bun and Node.js has built-in support

[8 best WebSocket libraries for Node](https://ably.com/blog/websocket-libraries-for-node) 2023-29

[websockets/ws: Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js](https://github.com/websockets/ws)
[WebSockets tutorial: How to go real-time with Node and React - LogRocket Blog](https://blog.logrocket.com/websocket-tutorial-real-time-node-react/)

[uNetworking/uWebSockets: Simple, secure & standards compliant web server for the most demanding of applications](https://github.com/uNetworking/uWebSockets) C/C++, different bindings ❗!important
[uNetworking/uWebSockets.js: μWebSockets for Node.js back-ends :metal:](https://github.com/uNetworking/uWebSockets.js)
[The story of “uws” so far. µWebSockets (“uws”) is an open source… | by uNetworking AB | Medium](https://unetworkingab.medium.com/the-story-of-uws-so-far-493ac0c05ccb)

[crossws · Packages · UnJS](https://unjs.io/packages/crossws)
[h3js/crossws: 🔌 Cross-platform WebSocket Servers for Node.js, Deno, Bun and Cloudflare Workers.](https://github.com/h3js/crossws)

[kataras/neffos: A modern, fast and scalable websocket framework with elegant API written in Go](https://github.com/kataras/neffos)

[primus/primus: Primus, the creator god of the transformers & an abstraction layer for real-time to prevent module lock-in.](https://github.com/primus/primus) 😴inactive
[faye/faye-websocket-node: Standards-compliant WebSocket client and server](https://github.com/faye/faye-websocket-node) 😴inactive
[soketi/soketi: Just another simple, fast, and resilient open-source WebSockets server. 📣](https://github.com/soketi/soketi) 😴inactive

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

[Site Contents — autobahn documentation](https://autobahn.readthedocs.io/en/latest/contents.html)
[crossbario/autobahn-testsuite: Autobahn WebSocket protocol testsuite](https://github.com/crossbario/autobahn-testsuite)

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

## Socket.io

> avoid, old code, inefficient and memory leak

[Socket.IO](https://socket.io/)
[WebSocket and Socket.IO](https://davidwalsh.name/websocket)
[Beyond REST: Using WebSockets for two-way communication in your React app](https://blog.logrocket.com/beyond-rest-using-websockets-for-two-way-communication-in-your-react-app-884eff6655f5)
[Using hapi.js with Socket.io](http://matt-harrison.com/using-hapi-js-with-socket-io/)
[WebSocket + Node.js + Express — Step by step using Typescript](https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4)

[Node.js: Better Performance With Socket.IO and doT](https://code.tutsplus.com/tutorials/nodejs-better-performance-with-socketio-and-dot--net-35076)
[Understanding Socket.IO - NodeSource](https://nodesource.com/blog/understanding-socketio)
[Adding Socket.io to multi-threaded Node.js](https://www.freecodecamp.org/news/how-to-add-socket-io-to-multi-threaded-node-js-df404b424276)
[Understanding the basics of Socket.io - DEV Community 👩‍💻👨‍💻](https://dev.to/uf4no/understanding-the-basics-of-socket-io-3a0e)

[WebSockets in 100 Seconds & Beyond with Socket.io - YouTube](https://www.youtube.com/watch?v=1BfCnjr_Vjg)
[Realtime Chat With Users & Rooms - Socket.io, Node & Express - YouTube](https://www.youtube.com/watch?v=jD7FnbI76Hg)

### On the contrary

[Why you don’t need Socket.IO. Asynchronous communication between… | by Ivan Vanderbyl | codeburst](https://codeburst.io/why-you-don-t-need-socket-io-6848f1c871cd) 2016
[node.js - Differences between socket.io and websockets - Stack Overflow](https://stackoverflow.com/questions/10112178/differences-between-socket-io-and-websockets/38558531#38558531)

## Sock.js

> avoid, fallback no longer needed

[sockjs/sockjs-client: WebSocket emulation - Javascript client](https://github.com/sockjs/sockjs-client)
[sockjs/sockjs-node: WebSocket emulation - Node.js server](https://github.com/sockjs/sockjs-node)
[substack/shoe: streaming sockjs for node and the browser](https://github.com/substack/shoe)

[WebSockets in React, the component way! – Practo Engineering – Medium](https://medium.com/practo-engineering/websockets-in-react-the-component-way-368730334eef)
