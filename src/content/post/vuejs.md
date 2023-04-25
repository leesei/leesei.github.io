---
title: Vue.js
description: ""
created: 2016-05-17
updated: 2023-03-20
tags:
  - frontend
  - javascript
  - vuejs
  - web
  - web-dev
---

> Vue 3 is release at 2020-09-18, default at 2022-02-07

> Vue is a web framework that is as if you rewrote AngularJS 1, kept the good parts (remember those?), and integrated what we learned from React.
>
> - Nate Murray (Fullstack React)

[[nuxtjs]]

[Vue.js - The Progressive JavaScript Framework | Vue.js](https://vuejs.org/)
[Introduction | Vue.js](https://vuejs.org/guide/introduction.html)
[vuejs/core: 🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.](https://github.com/vuejs/core)

[Vue.js: The Documentary - YouTube](https://www.youtube.com/watch?v=OrxmtDw4pVI)
[What to Expect from Vue in 2023 and How it Differs from React - The New Stack](https://thenewstack.io/vue-2023/)
[Design Principles of Vue 3.0 by Evan You - YouTube](https://www.youtube.com/watch?v=WLpLYhnGqPA&t=2s)
[The New Vue by Evan You - YouTube](https://www.youtube.com/watch?v=2KBHvaAWJOA)

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<!-- version lock -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.min.js"></script>
```

```html
v-bind:attribute="expression" :attribute="expression"
v-on:eventName="expression" @eventName="expression"
```

[Examples - vue.js](http://vuejs.org/examples/)
[Vue.js Examples](https://vuejsexamples.com/)

[OverVue](https://www.overvue.io/)
[OverVue 5.0: Get Started With Vue 3 — FAST | by Ross Lamerson | Jan, 2022 | JavaScript in Plain English](https://javascript.plainenglish.io/overvue-5-0-get-started-with-vue-3-fast-873d8c3dcfa5)

[#184: Discussing Vue.js and Personal Projects With Evan You - The Changelog](https://changelog.com/184/)

## Vue 3

[Props typing with Vue 3 and TypeScript - Get Help - Vue Forum](https://forum.vuejs.org/t/props-typing-with-vue-3-and-typescript/106978)

[Design Principles of Vue 3.0 by Evan You - YouTube](https://www.youtube.com/watch?v=WLpLYhnGqPA)
[Vue 3 - What's New? What Changed? - YouTube](https://www.youtube.com/watch?v=A5cVyjrKx_Q)
[Learn Which Exciting Features Vue 3 Brings to The Table - Vue School Vue.js Tutorials](https://vueschool.io/articles/vuejs-tutorials/exciting-new-features-in-vue-3/)
[An Early Look at the Vue 3 Composition API in the Wild | CSS-Tricks](https://css-tricks.com/an-early-look-at-the-vue-3-composition-api-in-the-wild/)
[Reactivity: Vue 2 vs Vue 3 | Vue Mastery](https://www.vuemastery.com/blog/Reactivity-Vue2-vs-Vue3/)

[An Introduction to Vue Teleport — A New Feature in Vue3 | by Matt Maribojoc | Sep, 2020 | Medium](https://medium.com/@mattmaribojoc/an-introduction-to-vue-teleport-a-new-feature-in-vue3-e9ddbf58dd25)
[Take your first steps with Vue.js - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/paths/vue-first-steps/)

[Vue 3 Migration Build: safely upgrade your app to Vue 3 (Pt. 1) | Vue Mastery](https://www.vuemastery.com/blog/vue-3-migration-build/)
[Vue 3 Migration Changes: Replace, Rename, and Remove (Pt. 2) | Vue Mastery](https://www.vuemastery.com/blog/migration/)
[Why I Love Vue 3's Composition API - Michael Hoffmann (Mokkapps) - Senior Frontend Developer (Freelancer)](https://www.mokkapps.de/blog/why-i-love-vue-3-s-composition-api/)
[Cheatsheet vuemasteryx11](https://www.vuemastery.com/pdf/Migration-Guide-Cheat-Sheet.pdf)

## Ecosystem

[vuejs/awesome-vue: A curated list of awesome things related to Vue.js](https://github.com/vuejs/awesome-vue)

### create-vue

> Vite-based

[vuejs/create-vue: 🛠️ The recommended way to start a Vite-powered Vue project](https://github.com/vuejs/create-vue)

### vue-cli

> Webpack-based

`npm install -g @vue/cli`

[Vue CLI 3](https://cli.vuejs.org/)
[vuejs/vue-cli](https://github.com/vuejs/vue-cli) is a tool built by the Vue.js team to help build Vue applications rapidly. By running a single command, we can generate an entire Webpack-powered Vue application that has features like hot-reloading.

[Configuration Reference | Vue CLI 3](https://cli.vuejs.org/config/)
[How the new Vue CLI simplifies development - Pusher Blog](https://blog.pusher.com/new-vue-cli-simplifies-development/)

[Introduction · vue-loader](https://vue-loader-v14.vuejs.org/en/)

### Plugin

[Plugins | Vite](https://vitejs.dev/plugins/)

### Animations

Vue provides hooks for CSS/JavaScript animation
[Enter/Leave & List Transitions — Vue.js](https://vuejs.org/v2/guide/transitions.html)

[Animating VueJS with Sarah Drasner | Software Engineering Daily](https://softwareengineeringdaily.com/2017/12/01/animating-vuejs-with-sarah-drasner/)

[sdras/animating-vue-workshop: Animated Interfaces with Vue.js Workshop Materials](https://github.com/sdras/animating-vue-workshop)

### Template

[Vue Template Explorer](https://template-explorer.vuejs.org/)

[Using JSX with Vue - LogRocket Blog](https://blog.logrocket.com/using-jsx-with-vue/)

## Learn

[The Vue Handbook](https://vuehandbook.com/)
[The Vue Handbook: a thorough introduction to Vue.js](https://www.freecodecamp.org/news/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446)
[The Vue.js Handbook](https://flaviocopes.com/page/vue-handbook/)

[Vue Mastery | The best way to learn Vue.js](https://www.vuemastery.com/)
[Intro to Vue 3 - Intro to Vue 3 | Vue Mastery](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3/)

[Up and Running with Vue.js - via @codeship | via @codeship](https://blog.codeship.com/up-and-running-with-vue-js/)
[Vue.js: a (re)introduction](http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/)
[The Best Vue.js Tutorials and Screencasts](https://vuereactor.com/)
[Develop Basic Web Apps with Vue.js from @GearUp3D on @eggheadio](https://egghead.io/courses/develop-basic-web-apps-with-vue-js)
[Building a Simple Notes Manager with Vue.js - via @codeship | via @codeship](https://blog.codeship.com/building-a-simple-notes-manager-with-vue-js/)
[Fun with Vue: A Quick Overview](https://www.telerik.com/blogs/fun-with-vue-a-quick-overview)
[Replacing jQuery With Vue.js: No Build Step Necessary — Smashing Magazine](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/)
[30 Days of Vue -- Fullstack.io](https://www.fullstack.io/30-days-of-vue/)
[Accessing the virtual DOM using render functions in Vue JS - LogRocket Blog](https://blog.logrocket.com/accessing-the-virtual-dom-using-render-functions-in-vue-js/)

[How I Built Space Awesome with Vue.JS](https://blog.fontawesome.com/how-i-built-a-tbg-learning-vuejs/)

[sdras/intro-to-vue: Workshop Materials for my Introduction to Vue.js Workshop](https://github.com/sdras/intro-to-vue)

[Vue.js Tutorials - YouTube](https://www.youtube.com/playlist?list=PLoYCgNOIyGADZuvKJweutZDOO9VI9YiJ9)

### Internal

[Reactivity in Depth | Vue.js](https://vuejs.org/guide/extras/reactivity-in-depth.html)

### Composition API (Functional Component)

[Composition API RFC | Vue Composition API](https://vue-composition-api-rfc.netlify.com/)
[Vue Composition API vs. React Hooks | Syncfusion Blogs](https://www.syncfusion.com/blogs/post/vue-composition-api-vs-react-hooks.aspx/amp)
[vuejs/composition-api: Vue2 plugin for the Composition API.](https://github.com/vuejs/composition-api)
[kefranabg/awesome-vue-composition-api: 🚀 A curated list of awesome things related to vue composition api](https://github.com/kefranabg/awesome-vue-composition-api)
[How to build applications with Vue's composition API - LogRocket Blog](https://blog.logrocket.com/how-to-build-applications-with-vues-composition-api/)
[How the Vue Composition API Replaces Vue Mixins | CSS-Tricks](https://css-tricks.com/how-the-vue-composition-api-replaces-vue-mixins/)

[Vue 3 Composition API Introduction [FULL TUTORIAL] - YouTube](https://www.youtube.com/watch?v=bwItFdPt-6M)

[MrSung/vue-composition-api-ts-todo: ToDo app with Vue Composition API and TypeScript](https://github.com/MrSung/vue-composition-api-ts-todo)

### Video

[VueConf US 2019 | Vue Mastery](https://www.vuemastery.com/conferences/vueconf-us-2019/)

## Layout

[Vue tricks: smart layouts for VueJS | by Manu Ustenko | Nov, 2020 | ITNEXT](https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b)

## Tips and Tricks

[A Vue pattern for idiomatic, performant component registration you might not know about](https://itnext.io/vue-a-pattern-for-idiomatic-performant-component-registration-you-might-not-know-about-9f3c091846f5)
[7 Secret Patterns Vue Consultants Don’t Want You to Know - YouTube](https://www.youtube.com/watch?v=7YZ5DwlLSt8)

[Common mistakes to avoid while working with Vue.js](https://www.freecodecamp.org/news/common-mistakes-to-avoid-while-working-with-vue-js-10e0b130925b)
[Update Array and Object in Vuejs – Milad Meidanshahi – Medium](https://medium.com/@miladmeidanshahi/update-array-and-object-in-vuejs-a283983fe5ba)
[Solving Common Vue Problems - Level Up Coding](https://levelup.gitconnected.com/solving-common-vue-problems-8018095804b9)

[Authentication Best Practices for Vue - Sqreen Blog](https://blog.sqreen.com/authentication-best-practices-vue/)

[Vue.js App Performance Optimization: part 1 — Introduction to performance optimization and lazy…](https://itnext.io/vue-js-app-performance-optimization-part-1-introduction-to-performance-optimization-and-lazy-29e4ff101019)
[Vue.js App Performance Optimization: part 2- Lazy loading routes and vendor bundle anti-pattern](https://itnext.io/vue-js-app-performance-optimization-part-2-lazy-loading-routes-and-vendor-bundle-anti-pattern-4a62236e09f9)
[Vue.js App Performance Optimization: part 3— Lazy loading Vuex modules](https://itnext.io/vue-js-app-performance-optimization-part-3-lazy-loading-vuex-modules-ed67cf555976)

### TypeScript

[Why You Should Use TypeScript With Vue - Better Programming - Medium](https://medium.com/better-programming/why-you-should-use-typescript-with-vue-33f4942e03c9)

## State

[Managing State in Vue.js | recallact.com](https://www.recallact.com/presentation/managing-state-vuejs)

### Pinia

> for Vue 3 and beyond,

[Pinia | The intuitive store for Vue.js](https://pinia.vuejs.org/)

### Vuex

> for Vue 2

[Vuex](https://vuex.vuejs.org/en/) _was_ Vue's official state management library, and it will feel familiar if you've ever used Redux. Vuex was built by the Vue.js team to provide a fluid and intuitive experience to integrate flux-like state management onto a Vue application.
[Anyway, should I nest data or should I not in Vue JS?](https://itnext.io/anyway-should-i-nest-data-or-should-i-not-in-vue-js-8536c86a612f)

## Testing

[Vue Test Utils](https://test-utils.vuejs.org/) is another Vue-supported library that provides useful methods to help test Vue components.

## Form

[Getting started | Vuelidate](https://vuelidate-next.netlify.app/) model-based validation
[VeeValidate: Painless Vue.js forms](https://vee-validate.logaretm.com/v4/) template-based validation

[Vue Form Validation | recallact.com](https://www.recallact.com/presentation/vue-form-validation)

## UI framework

[The best UI frameworks for Vue 3 - LogRocket Blog](https://blog.logrocket.com/the-best-ui-frameworks-for-vue-3/)

[Naive UI: A Vue 3 Component Library](https://www.naiveui.com/en-US/light)
[Quasar Framework](https://quasar.dev/)
[PrimeVue - Vue UI Component Library](https://primevue.org/)
[Vuetify — A Vue Component Framework](https://vuetifyjs.com/en/)
[Bootstrap 5 & Vue - Free Material Design UI KIT](https://mdbootstrap.com/docs/vue/)
[Ant Design Vue — An enterprise-class UI components based on Ant Design and Vue.js](https://www.antdv.com/docs/vue/introduce/)

[Materio - Free Vuetify Vuejs 3 Admin Template - ThemeSelection](https://themeselection.com/item/materio-free-vuetify-vuejs-admin-template/)
[Materio Open-source Vuejs Admin Template Is Out Now...!!🤩 - DEV Community](https://dev.to/theme_selection/materio-open-source-vuejs-admin-template-is-out-now-49p2)

[VueJS + TailwindCSS = A match made in heaven - VueTailwind](https://vuetailwind.com/)

## Ecosystem

[Plugins | Vue.js](https://vuejs.org/guide/reusability/plugins.html)

[VueUse | VueUse](https://vueuse.org/)
[vueuse/vueuse: Collection of essential Vue Composition Utilities for Vue 2 and 3](https://github.com/vueuse/vueuse)

[Vue Router | The official Router for Vue.js](https://router.vuejs.org/)
Vue Router 4 (for Vue 3) is Vue's official routing library. vue-router provides items needed to map an application's components to different browser URL routes.
[Course: Vue Router 4 for Everyone](https://vueschool.io/courses/vue-router-4-for-everyone)
[Storing and Using the Last Known Route in Vue - ITNEXT](https://itnext.io/storing-and-using-the-last-known-route-in-vue-d889f5538e3f)

[tangbc/vue-virtual-scroll-list: ⚡️ A vue component support big amount data list with high scroll performance.](https://github.com/tangbc/vue-virtual-scroll-list#readme)

[Useful Vue Directives — Tooltips and Scroll Lock - The Startup - Medium](https://medium.com/swlh/useful-vue-directives-tooltips-and-scroll-lock-1621daeab625)

### UI Components

[Vue-Multiselect | Vue Select Library](https://vue-multiselect.js.org/)

[Vue-Toastification](https://vue-toastification.maronato.dev/)

[justjavac/vue-cli-renderer](https://github.com/justjavac/vue-cli-renderer)

## Vue 2

[Vue.js](https://v2.vuejs.org/)
[Introduction — Vue.js](https://v2.vuejs.org/v2/cookbook/)
[Style Guide — Vue.js](https://v2.vuejs.org/v2/style-guide/)
[Cookbook — Vue.js](https://v2.vuejs.org/v2/cookbook/index.html)

[vuejs/vue: This is the repo for Vue 2. For Vue 3, go to https://github.com/vuejs/core](https://github.com/vuejs/vue)

[Vue documentation guide](https://scrimba.com/learn/vuedocs)
[Scrimba - Playlist Vue.js documentation](https://scrimba.com/playlist/pXKqta) screencasts which mirrors the official Vue.js guide, Vue 2?

[The Vue Instance - Intro to Vue 2 | Vue Mastery](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/)
[Vue JS tutorial: Learn Vue.js for free | Scrimba](https://scrimba.com/learn/learnvue) Vue 2

[Intro to Vue.js: Rendering, Directives, and Events | CSS-Tricks](https://css-tricks.com/intro-to-vue-1-rendering-directives-events/)
