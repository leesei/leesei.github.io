---
title: Web Push Technologies
description: ""
created: 2024-03-12
updated: 2025-12-03
tags:
  - server-send-event
  - web
---

[Push technology - Wikiwand](https://www.wikiwand.com/en/Push_technology#/Long_polling)
[php - What are Long-Polling, Websockets, Server-Sent Events (SSE) and Comet? - Stack Overflow](https://stackoverflow.com/questions/11077857/what-are-long-polling-websockets-server-sent-events-sse-and-comet)

[Webhooks vs Websockets vs HTTP Streaming - Which Event-Driven API to use? - YouTube](https://www.youtube.com/watch?v=6RvlKYgRFYQ)
[HTTP Polling vs SSE vs WebSocket vs WebHooks - YouTube](https://www.youtube.com/watch?v=JQoPuXAf92U)

[[grpc]]
[[web-socket]]
[[web-rtc]]

[Centrifugo – scalable real-time messaging server in a language-agnostic way. Set up once and forever. | Centrifugo](https://centrifugal.dev/)
[centrifugal/centrifugo: Scalable real-time messaging server in a language-agnostic way. Self-hosted alternative to Pubnub, Pusher, Ably, socket.io, Phoenix.PubSub, SignalR. Set up once and forever.](https://github.com/centrifugal/centrifugo)
[Centrifugo v4 released – a little revolution | Centrifugo](https://centrifugal.dev/blog/2022/07/19/centrifugo-v4-released)

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
Intermediaries may buffer response leading to high latency

---

# Server-sent Events (SSE)

[Server-sent events - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
[Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/#feat=eventsource)
[Server-sent events - Wikiwand](https://www.wikiwand.com/en/Server-sent_events)

[Server-Sent Events Crash Course - YouTube](https://www.youtube.com/watch?v=4HlNv1qpZFY)

[Stream Updates with Server-Sent Events  |  Articles  |  web.dev](https://web.dev/articles/eventsource-basics)
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

## ntfy.sh

[ntfy.sh | Send push notifications to your phone via PUT/POST](https://ntfy.sh/)
[binwiederhier/ntfy: Send push notifications to your phone or desktop using PUT/POST](https://github.com/binwiederhier/ntfy)

[Open Source Push Notifications! Get notified of any event you can imagine. Triggers abound! - YouTube](https://www.youtube.com/watch?v=WJgwWXt79pE)

## Native Notify

> free up to 10 push notification subscriber

[Push Notifications Made Simple | React Native Expo | Flutter | Native Notify](https://nativenotify.com/)

## OneSignal

> 10,000/mth Free Email Sends, Unlimited Mobile Push Sends

[Push Notification Software to Improve Customer Engagement - OneSignal](https://onesignal.com/)

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
[Using WebTransport  |  Capabilities  |  Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
[What is WebTransport and can it replace WebSockets?](https://ably.com/blog/can-webtransport-replace-websockets)

[WebTransport is a Game Changer Protocol - YouTube](https://www.youtube.com/watch?v=SEF8VBYlLik)
