---
title: Google Analytics
description: ""
created: 2023-05-20
updated: 2023-08-01
tags:
  - google
  - web
---

[Analytics Mania - Google Tag Manager and Google Analytics](https://www.analyticsmania.com/)

## Obsoleting Universal Analytics

> remove post for Google Analytics (Universal Analytics)
> use Tag Manager and Google Analytics 4

[Prepare for the future with Google Analytics 4](https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/)
[Universal Analytics is going away - Analytics Help](https://support.google.com/analytics/answer/11583528)

## Google Tag Manager (GTM)

[Google Tag Manager](https://tagmanager.google.com/#/home) it helps deployment of analytics as "tags"
[About Google Tag Manager | Google for Developers](https://developers.google.com/tag-platform/tag-manager)

[Google Tag Manager vs Google Analytics explained (2023)](https://www.analyticsmania.com/post/google-tag-manager-vs-google-analytics/)
[Google Tag Manager vs Google Analytics - Big Picture - Medium](https://medium.com/@thebigpicturebiz/google-tag-manager-vs-google-analytics-143fb1554eb1)
[Google Tag Manager vs. Google Analytics - Which one to use and when - YouTube](https://www.youtube.com/watch?v=qm28tjEqZXA)

[How to track website analytics for your freelance business website using Google Tag Manager in 2021 | Tiiny Host Blog](https://tiiny.host/blog/google-analytics-freelance-business/)
[How to Set Up Google Analytics in 5 Simple Steps](https://blog.hootsuite.com/how-to-set-up-google-analytics/)

It's also easy to add other integrations as different "tags"

[Mixpanel: Event Analytics for Mobile, Web & More](https://mixpanel.com/home)

### Google Analytics 4

It's recommended to create and manage Measurements in GA and use GTM for deployment.

[Analytics](https://analytics.google.com/analytics/web/)
[Get started with Analytics - Analytics Help](https://support.google.com/analytics/answer/1008015?hl=en)
[Google Analytics 4 : Google](https://skillshop.exceedlms.com/student/catalog/list?category_ids=6431-google-analytics-4)

[Enhanced Measurement in Google Analytics 4 (GA4) - Analytics Mania](https://www.analyticsmania.com/post/enhanced-measurement-in-google-analytics-4-the-guide/)

## Universal Analytics

> OBSOLETE

[Get started with Analytics - Analytics Help](https://support.google.com/analytics/answer/1008015?hl=en)
[How to Set Up Google Analytics in 5 Simple Steps](https://blog.hootsuite.com/how-to-set-up-google-analytics/)
[Google Analytics for Beginners](https://analytics.google.com/analytics/academy/course/6)

[react-ga/react-ga: React Google Analytics Module](https://github.com/react-ga/react-ga)
[lukeed/ganalytics: A tiny (312B) client-side module for tracking with Google Analytics](https://github.com/lukeed/ganalytics)

```html
<!-- Google Analytics: change UA-XXXXX-Y to be your site's ID -->
<script>
  window.ga = function () {
    ga.q.push(arguments);
  };
  ga.q = [];
  ga.l = +new Date();
  ga("create", "UA-XXXXX-Y", "auto");
  ga("set", "anonymizeIp", true);
  ga("set", "transport", "beacon");
  ga("send", "pageview");
</script>
<script src="https://www.google-analytics.com/analytics.js" async></script>
```

## Alternatives

[Plausible Analytics | Simple, privacy-friendly Google Analytics alternative](https://plausible.io/)

[GoatCounter – open source web analytics](https://www.goatcounter.com/)

[Scarf I Home](https://about.scarf.sh/)
[Open Source Analytics With Scarf](https://twit.tv/shows/floss-weekly/episodes/693) also for software/lib (npm hook)
