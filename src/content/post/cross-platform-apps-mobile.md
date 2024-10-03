---
title: Cross Platform Apps (Mobile)
description: ""
created: 2015-04-03
updated: 2024-06-14
tags:
  - app
  - appcelerator
  - cordova
  - crosswalk
  - ionic
  - mobile
  - nativescript
  - phonegap
---

[[react-native]]
[[cross-platform-apps-desktop#Quasar]]

[Cross-platform - Wikipedia, the free encyclopedia](http://en.wikipedia.org/wiki/Cross-platform)

It is difficult to develop and maintain apps which support multiple mobile platforms. Luckily there are abstraction layers which developers can write code on and deploy to multiple platforms.

```
     |================|================|
  web apps       hybrid apps      native apps
```

With "hybrid apps", we can use the abstraction layer for fast development and the native SDK for performance critical modules to get the best of both world.

The abstraction layer is _usually_ HTML5 which is to be run on a browser. There will also be API's on the abstraction SDK to call native APIs.

[Cross-Platform's Future is Native & Building a Case for Kotlin Multiplatform](https://touchlab.co/future-cross-platform-native/)
The new Cross-Platform is to share business logic, compile to native code and binding to native UI widget (rather than using browser as runtime)

> TODO: merge `Cross-platform App Tools for Consumer and Enterprise Market.ppt` here

[Pros and Cons of the Top 5 Cross-Platform Tools - Developer Economics](http://www.developereconomics.com/pros-cons-top-5-cross-platform-tools/)
[Tools to Build your Mobile App | Developer Economics](http://www.developereconomics.com/search/tools/to/build/#q//sector/47/license//technology//platform//app_category//p/1)
[Native vs HTML5 - You're Asking The Wrong Question](http://blogs.telerik.com/platform/posts/14-02-21/native-vs-html5---you're-asking-the-wrong-question)
[Hybrid vs. Native: Choosing a Mobile Strategy](http://www.infoq.com/presentations/hybrid-native-mobile-strategy)
[android - Struggling between native and phonegap, simple app requirements - Stack Overflow](http://stackoverflow.com/questions/14065610/struggling-between-native-and-phonegap-simple-app-requirements)
[Web vs. native: let’s concede defeat - QuirksBlog](http://www.quirksmode.org/blog/archives/2015/05/web_vs_native_l.html)
[DHH 谈混合移动应用开发 | | 酷 壳 - CoolShell](https://coolshell.cn/articles/12225.html)

[Downloads Archive - VisionMobile](http://www.visionmobile.com/product/)
[Free Reports | research2guidance](http://research2guidance.com/product-category/free/)

[weblancaster/awesome-IoT-hybrid: The missing awesome list - collection of awesome IoT and Hybrid Apps frameworks, tools, resources, videos and shiny things.](https://github.com/weblancaster/awesome-IoT-hybrid)

## In the Wild

[How photo app Polarr topped the App Store the uncommon way - CNET](http://www.cnet.com/news/how-photo-app-polarr-topped-the-app-store-the-uncommon-way/)
[HTML5 is dead. Long live HTML5! - CNET](http://www.cnet.com/news/html5-is-dead-long-live-html5/)
[Your favourite app isn’t native](http://kennethormandy.com/journal/your-favourite-app-isnt-native) also feature some UI frameworks

## Comparison

[Examining performance differences between Native, Flutter, and React Native mobile development.](https://thoughtbot.com/blog/examining-performance-differences-between-native-flutter-and-react-native-mobile-development)
[Flutter and Kotlin Multiplatform – Aldy Chrissandy – Medium](https://medium.com/@aldychris/flutter-and-kotlin-multiplatform-47d27ff08c1d)
[Flutter and Kotlin Multiplatform relationship – Kt. Academy](https://blog.kotlin-academy.com/flutter-and-kotlin-multiplatform-relationship-890616005f57)

[Ionic vs. React Native: Performance Comparison - Ionic Blog](https://ionic.io/blog/ionic-vs-react-native-performance-comparison)

[What are the main differences between ReactJS and React-Native? – Medium](https://medium.com/@alexmngn/from-reactjs-to-react-native-what-are-the-main-differences-between-both-d6e8e88ebf24)
[What are the key difference between ReactNative and NativeScript? - Quora](https://www.quora.com/What-are-the-key-difference-between-ReactNative-and-NativeScript)

[Flutter vs Native vs React-Native: Examining performance](https://medium.com/swlh/flutter-vs-native-vs-react-native-examining-performance-31338f081980)
[React Native VS Flutter – What’s Best for You? – SurajOnDev](https://surajondev.com/2021/12/12/react-native-vs-flutter-whats-best-for-you/)
[React native vs Flutter 2020 comparison - Kriss](https://kriss.io/react-native-vs-flutter-202-comparison/)
[React Native vs Flutter - I built the same chat app with both - YouTube](https://www.youtube.com/watch?v=X8ipUgXH6jw)
[React Native vs Flutter vs Native - Let's Talk Engines - YouTube](https://www.youtube.com/watch?v=3_FcxGCCnUs) 2022

[40 | React Native、Flutter 等，这些跨端方案怎么选？](https://time.geekbang.org/column/article/100733)

## PhoneGap/Cordova

[Cordova](http://cordova.apache.org/) is the open source version of [PhoneGap](http://phonegap.com/).

It basically

- packs the HTML5 application to native app package
- opens a **WebView** to load the HTML5 app
- exposes native API to the WebView

[PhoneGap API Documentation](http://docs.phonegap.com/en/edge/index.html)
[apache/cordova-cli](https://github.com/apache/cordova-cli)

[Phonegap/Cordova Workshop](http://wrenr.github.io/cordova-workshop/#/)
[JS.LA - Native Mobile Apps in JS - Just Add Cordova!](http://wrenr.github.io/jsla-cordova-2015-08/#/)

[Phonegap/Cordova vs Native Application](http://www.slideshare.net/hakimrie/phonegapcordova-vs-native-application)
[Phonegap vs Native - A 12 Month Review » Chel Ramsey Productions](http://chelramsey.com/series/phonegap-vs-native-a-12-month-review/) 2013
[Cordova : Devgirl's Weblog](http://devgirl.org/category/cordova/)
[2 Quick Tips When Adding PhoneGap/Cordova Plugins : Devgirl's Weblog](http://devgirl.org/2014/07/15/2-quick-tips-when-adding-phonegapcordova-plugins/)
[Learning Cordova while rewriting an app](https://www.chenhuijing.com/blog/learning-cordova-while-refactoring-legacy-code/)

[Verified Plugins Marketplace | Cordova/PhoneGap Plugins](http://plugins.telerik.com/cordova)
[Cocoon.io](https://cocoon.io/)

### Adobe PhoneGap v Apache Cordova

PhoneGap was purchased by Adobe in 2011. Adobe donated PhoneGap to Apache Foundation and it was renamed to Cordova.
Adobe retained the trademark of PhoneGap and provide service around it.

[The Last Word on Cordova and PhoneGap | The Official Ionic Blog](http://blog.ionic.io/what-is-cordova-phonegap/)
[Cordova and PhoneGap Insights](http://www.slideshare.net/monaca_mobi/cordova-and-phone-gap)
[Cordova/PhoneGap Version Confusion : Devgirl's Weblog](http://devgirl.org/2014/11/07/cordovaphonegap-version-confusion/)
[cordova-coho/versioning-and-release-strategy.md at master · apache/cordova-coho](https://github.com/apache/cordova-coho/blob/master/docs/versioning-and-release-strategy.md)

### Jittering

Some client UI framework (especially jq\* derivatives) use JavaScript to drive the animations, which is known to cause jittering.
Mordern mobile webpage should use [CSS3 animation](http://caniuse.com/#feat=css-animation) or [requestAnimationFrame](http://caniuse.com/#feat=requestanimationframe) to achieve smooth animation.

### Mixing native components

Since WebView may be sluggish in certain interactive components, there is a move to use native components with the WebView.
But this means the developer have the write code for the native components on **each supported platform**

[Mixing Cordova/PhoneGap Components with Native iOS – Part 1 : Devgirl's Weblog](http://devgirl.org/2014/07/22/mixing-cordova-phonegap-components-with-nativ/)

### Ionic Framework

> obsolete

[Build Amazing Native Apps and Progressive Web Apps with Ionic Framework and Angular](https://ionicframework.com/)
[Free Mobile App Development: Getting Started with Ionic Apps](https://ionicframework.com/getting-started)

Ionic Framework includes

- UI widget (can also be used for web apps)
- Angular seed
- `ionic`: CLI program for testing and deploy (`cordova` wrapper)

[Ionic Native - Ionic Native](https://ionicframework.com/docs/native/)

### Manifold

[Manifold JS](http://www.manifoldjs.com/)

Converts your website to an "app", uses Cordova/Crosswalk as polyfill if needed.

[Simplify Android Development Using manifoldJS With Crosswalk - Tuts+ Code Tutorial](http://code.tutsplus.com/tutorials/simplify-android-development-using-manifoldjs-with-crosswalk--cms-24790)

### Crosswalk

Embedding the latest Chromium WebView to your app instead of using the system's WebView.

[Crosswalk - build world class hybrid apps](https://crosswalk-project.org/)
[Crosswalk - Cordova](https://crosswalk-project.org/documentation/cordova.html)

## Ionic

### Ionic 4

[Introducing Ionic 4: Ionic for Everyone | The Ionic Blog](https://blog.ionicframework.com/introducing-ionic-4-ionic-for-everyone/)
[Announcing Ionic React | The Ionic Blog](https://ionicframework.com/blog/announcing-ionic-react/)

[Ionic 4 & Angular Tutorial For Beginners - Crash Course - YouTube](https://www.youtube.com/watch?v=r2ga-iXS5i4)
[Ionic + React - Tutorial for Beginners 2020 - YouTube](https://www.youtube.com/watch?v=_03VKmdrxV8)

Uses Stencil to compile to Web Components and supports multiple frameworks

### Capacitor

By Ionic team, inspired by React Native.
Invoke native SDKs on iOS, Android, Electron, and the Web with one code base.

[Capacitor: Cross-platform native runtime for web apps](https://capacitorjs.com/)

[Capacitor in 2019: Native Progressive Web Apps for All | The Ionic Blog](https://blog.ionicframework.com/capacitor-in-2019-native-progressive-web-apps-for-all/)

## Fabric

[Fabric - Twitter's Mobile Development Platform](https://get.fabric.io/)
[Introducing Fabric | Twitter Blogs](https://blog.twitter.com/2014/introducing-fabric)

[Building First Class SDKs: A Fabric Case Study - YouTube](https://www.youtube.com/watch?v=3LvEgFAdWvc)
[Building Fabric for Android Apps - YouTube](https://www.youtube.com/watch?v=H9RLFoqTqOQ)

## Electrode

[Electrode | Universal React and Node.js Application Platform @WalmartLabs Powered](http://www.electrode.io/)
[What is Electrode? | Electrode](http://www.electrode.io/docs/what_is_electrode.html)
[Electrode](https://github.com/electrode-io) GitHub Org

## Flutter

[[flutter]]

## Codename One

> Flutter for Java, Swing API!
> started as a Sun internal project

[Codename One: Cross-Platform App Development with Java/Kotlin](https://www.codenameone.com/)

[Codename One with Steve Hannah - Software Engineering Daily](https://softwareengineeringdaily.com/2022/01/02/codename-one-with-steve-hannah/)

## Kotlin Multiplatform

[Multiplatform Projects - Kotlin Programming Language](https://kotlinlang.org/docs/reference/multiplatform.html)

[Kotlin Multiplatform for iOS Developers](https://www.infoq.com/articles/kotlin-multiplatform-ios-developers)
[Multiplatform Project: iOS and Android - Kotlin Programming Language](https://kotlinlang.org/docs/tutorials/native/mpp-ios-android.html)

## React Native

[[react-native]]

## Jasonette

[Jasonette - Native App over HTTP](https://jasonette.com/)
[Jasonette](https://github.com/Jasonette)

[How to Turn Your Website into a Mobile App with 7 Lines of JSON](https://www.freecodecamp.org/news/how-to-turn-your-website-into-a-mobile-app-with-7-lines-of-json-631c9c9895f5/)

## Vue.js

[WEEX](https://weex.apache.org/)
[Native Mobile Apps with Weex and VueJS 2.0 – Hacker Noon](https://hackernoon.com/how-to-create-a-weex-vue2-project-6b94981bee4e)

[Vue Native](https://vue-native.io/)
[Introducing Vue Native – GeekyAnts Blog](https://blog.geekyants.com/introducing-vue-native-b66f71d50438)

[Native apps with Vue.js: Weex or NativeScript? — chapter I](https://hackernoon.com/native-apps-with-vue-js-weex-or-nativescript-8d8f0bac041d)
[Native apps with Vue.js: Weex or NativeScript? — chapter II](https://hackernoon.com/native-apps-with-vue-js-weex-or-nativescript-chapter-ii-6d1776da090d)

## NativeScript

[Cross-Platform Native Development with Javascript](https://www.nativescript.org/)
[Docs](http://docs.nativescript.org/) [source](https://github.com/NativeScript/docs)
[Docs: Android](http://docs.nativescript.org/runtimes/android/)
[Docs: iOS](http://docs.nativescript.org/runtimes/ios)

[Would Airbnb Have Fared Better With NativeScript Instead of React Native?](https://www.nativescript.org/blog/would-airbnb-have-fared-better-with-nativescript-instead-of-react-native) NativeScript take to solve Airbnb's problem with React Native
[NativeScript 2.0 - the best way to build cross-platform native mobile apps](https://www.nativescript.org/blog/nativescript-2.0---the-best-way-to-build-cross-platform-native-mobile-apps) 2016-05

[Technical Overview - NativeScript Docs](https://docs.nativescript.org/core-concepts/technical-overview)
[An Introduction to NativeScript](https://code.tutsplus.com/articles/an-introduction-to-nativescript--cms-26771) 2016-07
[Creating Mobile Native Apps in JavaScript with NativeScript](http://www.infoq.com/news/2015/03/nativescript) 2015-03

## Haxe

[Haxe - The Cross-platform Toolkit](http://haxe.org/)

> Haxe is an open source toolkit based on a modern, high level, strictly typed programming language, a cross-compiler, a complete cross-platform standard library and ways to access each platform's native capabilities.

The language itself is similar to JavaScript. The `.hx` can be compiled to [multiple targets](http://haxe.org/documentation/introduction/compiler-targets.html).
[Standard libraries](http://haxe.org/documentation/introduction/stdlib-introduction.html) are separated to three categories: standard, system and target specific. A package manager [Haxelib](http://lib.haxe.org/) is available.
[Haxe Manual](http://haxe.org/manual/)
[Haxe API](http://api.haxe.org/)

[HaxeCheckstyle/haxe-checkstyle: Haxe Checkstyle](https://github.com/HaxeCheckstyle/haxe-checkstyle)

[haxe: compile time macros](http://notes.underscorediscovery.com/haxe-compile-time-macros/)
[Haxe from 1000ft](http://notes.underscorediscovery.com/haxe-from-1000ft/)
[Haxe Entry Point](http://notes.underscorediscovery.com/haxe-entry-point/)
[Learn Haxe](http://haxe.us/haxe_tutorial.html)

## OpenFL

[OpenFL - Creative expression for desktop, mobile, web and console platforms](http://www.openfl.org/) Flash API on modern web

## TotalCross

[TotalCross | Open Source GUI Creator For Embedded, Mobile](https://totalcross.com/)
[TotalCross Overview - TotalCross Platform](https://learn.totalcross.com/) also for embedded devices

[TotalCross/KnowCodeXML: Library to allow developers to run Android XML UI + TotalCross on Linux ARM, iOS, Android and more...](https://github.com/TotalCross/KnowCodeXML) use Android XML for layout,

[A new way to build cross-platform UIs for Linux ARM devices | Opensource.com](https://opensource.com/article/20/5/linux-arm-ui)

## Qt

[[qt]]

[Create high performance embedded systems | Qt](https://www.qt.io/qt-for-device-creation/)
[Qt - Qt for Mobile App Development](http://www.qt.io/mobile-app-development/)

[QT Supported Platforms](https://doc.qt.io/qt-5/supported-platforms.html)
[Qt for Device Creation](https://doc.qt.io/QtForDeviceCreation/index.html)
[Target Devices](https://doc.qt.io/QtForDeviceCreation/qtdc-supported-platforms.html)

Part Four of Seif Project

[[seif]]

### Cross Compiling

[Boot to Qt Software Stack](https://doc.qt.io/QtForDeviceCreation/qtb2-index.html)

[Cross-Compiling Qt for Embedded Linux Applications](https://doc.qt.io/archives/qt-4.8/qt-embedded-crosscompiling.html)

## .NET

[[cross-platform-apps-desktop#.NET]]

## Djinni

[dropbox/djinni: A tool for generating cross-language type declarations and interface bindings.](https://github.com/dropbox/djinni) expose C library to Android and iOS

## Appcelerator

[Appcelerator](http://www.appcelerator.com/) expose unified (across devices) JavaScript API, coupled with native-platform-specific features.
Not using WebView to render, UI codes compiles to **native components**.
Supports premium (paid) and free addons.

[Products - Appcelerator Inc](https://www.appcelerator.com/mobile-app-development-products/)
[Appcelerator Documentation](https://docs.appcelerator.com/)

[Getting To Know Alloy (Part One)](http://www.appcelerator.com/blog/2012/11/gtka-one/)
[Getting To Know Alloy (Part Two)](http://www.appcelerator.com/blog/2012/11/gtka-two/)

## Node.js

[JXcore · a Node.JS distribution with additional features](http://jxcore.com/home/)
[jxcore·io](http://jxcore.io/)

[InstantWebP2P/node-android: Run Node.js on Android by rewrite Node.js in Java](https://github.com/InstantWebP2P/node-android)
[paddybyers/anode](https://github.com/paddybyers/anode) no update since 2014

[Building a Node.js application on Android](https://medium.freecodecamp.com/building-a-node-js-application-on-android-part-2-express-and-nedb-ced04caea7bb#.4t4ojh9qs)

### Android JS

[Android JS](https://android-js.github.io/) by GitHub
[How To Build Android Apps With Node JS Using Android JS](https://blog.usejournal.com/how-to-build-android-apps-with-node-js-using-android-js-2aa4643be87b)

## Go

[gomobile - GoDoc](https://godoc.org/golang.org/x/mobile/cmd/gomobile)
[Mobile · golang/go Wiki](https://github.com/golang/go/wiki/Mobile)

## Rust

[Building an iOS App in Rust, Part 1: Getting Started with Rust | Big Nerd Ranch](https://www.bignerdranch.com/blog/building-an-ios-app-in-rust-part-1/)
[Building an iOS App in Rust, Part 2: Passing Primitive Data Between Rust and iOS | Big Nerd Ranch](https://www.bignerdranch.com/blog/building-an-ios-app-in-rust-part-2/)
[Building an iOS App in Rust, Part 3: Passing Owned Objects between Rust and iOS | Big Nerd Ranch](https://www.bignerdranch.com/blog/building-an-ios-app-in-rust-part-3/)
[Building an iOS App in Rust, Part 4: A Basic View Model in Rust | Big Nerd Ranch](https://www.bignerdranch.com/blog/building-an-ios-app-in-rust-part-4/)

## Honorable Mentions

[Gideros Mobile](http://giderosmobile.com/) develop with Lua
[MoSync](http://www.mosync.com/)
[RhoMobile Suite](http://rhomobile.com/)
[HockeyApp - The Platform for Your Apps](http://hockeyapp.net/features/)
[EZoApp - Best tool for the rapid development of mobile apps](https://ezoui.com/app/index.html)
[Cross-Platform Mobile App Development for iOS, Android - Corona Labs](https://coronalabs.com/)

## Testing

[Appium: Mobile App Automation Made Awesome.](http://appium.io/)

Appium is an open source test automation framework for use with native, hybrid and mobile web apps.
It drives iOS and Android apps using the WebDriver protocol.

[wix/Detox: Gray box end-to-end testing and automation framework for mobile apps](https://github.com/wix/Detox)
