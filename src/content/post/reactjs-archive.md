---
title: React.js Archives
description: "Archived React.js notes"
created: 2023-03-21
tags:
  - frontend
  - javascript
  - reactjs
  - web
  - web-dev
---

# Archive

## Smart and Dump Components

> this split is mostly moot with hooks
> dependencies can be consumed through hooks easily on any component

Smart and Dump
Container and Presentational
View/Page/Screen and Component
Fat and Skinny

[Presentational and Container Components — Medium](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Presentational and Container Components in Redux docs](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)
[Smart and Dumb Components in React | Jake Trent](https://jaketrent.com/post/smart-dumb-components-react/)
[Leveling Up With React: Container Components | CSS-Tricks](https://css-tricks.com/learning-react-container-components/)
[Categorizing Components Into Smart & Dumb Components, in React ← Alligator.io](https://alligator.io/react/smart-dumb-components/)

## Render Props/HoC

> abstracting behavior in hooks is much better

[Render Props – React](https://legacy.reactjs.org/docs/render-props.html)
[Michael Jackson - Never Write Another HoC - YouTube](https://www.youtube.com/watch?v=BcVAq3YFiuc) inversion of control, higher component invokes render props function
[Render Props in React – Byteconf – Medium](https://medium.com/byteconf/render-props-in-react-6081b6fa3593)
[An Overview of Render Props in React | CSS-Tricks](https://css-tricks.com/an-overview-of-render-props-in-react/)
[Using Render Props In React | React Resources](https://reactresources.com/topics/render-props)

[How to Use React Higher-Order Components - Ross Bulat - Medium](https://medium.com/@rossbulat/how-to-use-react-higher-order-components-c0be6821eb6c)

[React Higher-Order Components](https://tylermcginnis.com/react-higher-order-components/)
[Andrew Clark - Recomposing your React application at react-europe 2016 - YouTube](https://www.youtube.com/watch?v=zD_judE-bXk)
[Use Render Props with React | egghead.io](https://egghead.io/lessons/react-use-render-props-with-react)

[React Render Props](https://tylermcginnis.com/react-render-props/)
[Use a Render Prop! – componentDidBlog](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)
[When to NOT use Render Props](https://kentcdodds.com/blog/when-to-not-use-render-props/)

[Introduction to higher order components (HOC) in React](https://medium.com/@soorajchandran/introduction-to-higher-order-components-hoc-in-react-383c9343a3aa)
[How Are Function Components Different from Classes? — Overreacted](https://overreacted.io/how-are-function-components-different-from-classes/)
[Container Components and Stateless Functional Components in React – Zsolt Nagy](http://www.zsoltnagy.eu/container-components-and-stateless-functional-components-in-react/)

[Why I stopped spreading props on React Components - DEV Community 👩‍💻👨‍💻](https://dev.to/aurelio/why-i-stopped-spreading-props-on-react-components-o3f)

### React PowerPlug

[React PowerPlug](https://renatorib.github.io/react-powerplug/#/docs-components-focus)
[renatorib/react-powerplug: Renderless Containers](https://github.com/renatorib/react-powerplug)
[Rapid Prototyping Made Easy with React PowerPlug | DigitalOcean](https://www.digitalocean.com/community/tutorials/react-react-powerplug)

## James K Nelson

[Interacting with the DOM in React.js, By Example](http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/)
[Interacting with the DOM in React.js, By Example](http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/)
[Learn React By Itself -- no JSX, no Flux, no ES6, no Webpack.](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)
[Structuring React Applications: Higher-Order Components - James K Nelson](http://jamesknelson.com/structuring-react-applications-higher-order-components/#more-338)

## dan_abramov

[Mixins Are Dead. Long Live Composition — Medium](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) higher-order component vs mixin
[Two React Tips — Medium](https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375#.oggyawin6)

- Beware of multiple React instances
- Always put a root `<div>` into `<body>` and mount React to it.

The new terms are "Container" (connected) and "Presentational Components" (not connected, can be stateful or pure).

## Router

> use app framework like Next.js

[React Router Mega Demo](http://react-router-mega-demo.herokuapp.com/)

[Building a Router with Raw React](http://jamesknelson.com/routing-with-raw-react/)
[React and pushState: You're doing it wrong](http://jamesknelson.com/push-state-vs-hash-based-routing-with-react-js/)
[Simple Routing with Redux and React](http://jamesknelson.com/simple-routing-redux-react/)

[ReactDOM.render and the Top Level React API | React](http://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html) you need to call `unmountComponentAtNode()` if you ever change the root component

[Remixing React Router | Remix](https://remix.run/blog/remixing-react-router) 2022-03, handle data in router
[The Holy Grail of React Router transitions on the web](https://itnext.io/the-holy-grail-of-react-router-transitions-on-the-web-4b29a74861df)

[You might not need React Router](https://medium.freecodecamp.com/you-might-not-need-react-router-38673620f3d#.opx7tmqtk)

[molefrog/wouter: A minimalistic (~1KB) routing for React. Nothing extra, just HOOKS.](https://github.com/molefrog/wouter)

### TanStack Router

> was React Location

[TanStack Router | React Router, Solid Router, Svelte Router, Vue Router](https://tanstack.com/router/v1)
[Comparison | TanStack Router vs React Router | TanStack Router Docs](https://tanstack.com/router/v1/docs/comparison)
[What Is TanStack Router And Why I Love It - YouTube](https://www.youtube.com/watch?v=OwoZtv6u9p4)

### Reach Router

[Reach Router - Overview](https://reach.tech/router)

[Battle of the Routers: Reach Router vs React Router ← Alligator.io](https://alligator.io/react/reach-router-vs-react-router/)

### React Router

> 202302: all react-router pre-v6 (2021-11) tutorials are obsolete

[React Router](https://reactrouter.com/en/main) [source](https://github.com/remix-run/react-router)
[Leveling Up With React: React Router | CSS-Tricks](https://css-tricks.com/learning-react-router/)

[A guide to using React Router v6 in React apps - LogRocket Blog](https://blog.logrocket.com/react-router-v6/)
[Complete guide to authentication with React Router v6 - LogRocket Blog](https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/)
[A Complete Guide to React Router: Everything You Need to Know](https://ui.dev/react-router-tutorial)

### other

[acdlite/redux-router: Redux bindings for React Router – keep your router state inside your Redux store](https://github.com/acdlite/redux-router)
[react-router-component :: viewdocs.io](http://strml.viewdocs.io/react-router-component)
[router5/react-router5](https://github.com/router5/react-router5)
[callum/redux-routing: Universal routing built on top of redux](https://github.com/callum/redux-routing)
[FormidableLabs/redux-little-router: A tiny router for Redux that lets the URL do the talking.](https://github.com/FormidableLabs/redux-little-router)

[An Introduction to the Redux-First Routing Model – freeCodeCamp](https://medium.freecodecamp.org/an-introduction-to-the-redux-first-routing-model-98926ebf53cb)
[mksarge/redux-first-routing: A minimal, framework-agnostic API for accomplishing Redux-first routing.](https://github.com/mksarge/redux-first-routing)
[mksarge/redux-json-router: Declarative, Redux-first routing for React/Redux browser applications.](https://github.com/mksarge/redux-json-router)

[flexdinesh/react-render-in-browser: A React component to render browser specific content](https://github.com/flexdinesh/react-render-in-browser)

[MoOx/react-topbar-progress-indicator: `topbar` progress indicator as a React component](https://github.com/MoOx/react-topbar-progress-indicator)
[topbar by buunguyen](https://buunguyen.github.io/topbar/)

### Pure JavaScript

[router5 | HTML5 router for reactive applications](http://router5.github.io/)
[Routie | Javascript hash router](http://projects.jga.me/routie/)
[visionmedia/page.js](https://github.com/visionmedia/page.js)
[tildeio/router.js](https://github.com/tildeio/router.js/)
[glassresistor/i40](https://github.com/glassresistor/i40)
[bevacqua/ruta3](https://github.com/bevacqua/ruta3)
[leeluolee/stateman](https://github.com/leeluolee/stateman)

## create-react-app

> [STOP USING CREATE REACT APP - YouTube](https://www.youtube.com/watch?v=7m14f0ZzMyY)
> tool for yesteryear

[Create React App · Set up a modern web app by running one command.](https://create-react-app.dev/)
[facebook/create-react-app: Set up a modern web app by running one command.](https://github.com/facebook/create-react-app) must have
[create-react-app/packages/react-scripts at master · facebook/create-react-app](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts)
[npm dependency is breaking some React apps today — here's the fix](https://www.bleepingcomputer.com/news/security/npm-dependency-is-breaking-some-react-apps-today-heres-the-fix/)

[10 Fun Facts About Create React App - Better Programming - Medium](https://medium.com/better-programming/10-fun-facts-about-create-react-app-eb7124aa3785)
[create-react-app/CHANGELOG.md at master · facebook/create-react-app](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md) latest
[Create React App 2.0: Babel 7, Sass, and More – React Blog](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)

[My Awesome Custom React Environment Variables Setup](https://medium.com/@robertsavian/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac)
[Feature/different env config files #1343 by tuchk4 · Pull Request #1344 · facebook/create-react-app](https://github.com/facebook/create-react-app/pull/1344)
[bkeepers/dotenv: A Ruby gem to load environment variables from `.env`.](https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use)

[Customizing create-react-app: How to Make Your Own Template](https://auth0.com/blog/how-to-configure-create-react-app/)

Fix `react-scripts` issue when running on Dropbox's synced folder:
`ln -sf ../react-scripts/bin/react-scripts.js node_modules/.bin/react-scripts`

`npx create-react-app my-app --template typescript` since 3.3
[create-react-app/packages/cra-template-typescript at master · facebook/create-react-app](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript)
[cra-template-\* - npm search](https://www.npmjs.com/search?q=cra-template-*)
[rafrex/spa-github-pages: Host single page apps with GitHub Pages](https://github.com/rafrex/spa-github-pages) React Router `<BrowserRouter />` and custom `404.html`

[From create-react-app to PWA - LogRocket Blog](https://blog.logrocket.com/from-create-react-app-to-pwa/)

[JetBrains/create-react-kotlin-app: Create React apps using Kotlin with no build configuration](https://github.com/JetBrains/create-react-kotlin-app)

[Create Apps with No Configuration - React Blog](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)
[Getting started with create-react-app, Redux, React Router & Redux Thunk](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f)
[notrab/create-react-app-redux: Basic starter kit for using React Router & Redux with create-react-app](https://github.com/notrab/create-react-app-redux)
[Beyond Create React App: React Router, Redux, Redux Saga, and More](https://auth0.com/blog/beyond-create-react-app-react-router-redux-saga-and-more/)
[btg5679/react-redux-prod-starter: A ReactJS/Redux Production ready project foundation](https://github.com/btg5679/react-redux-prod-starter)
[How to build a React project from scratch using Webpack 4 and Babel](https://hackernoon.com/how-to-build-a-react-project-from-scratch-using-webpack-4-and-babel-56d4a26afd32)
[v4 Create React + Redux app structure with build configurations. What’s new?](https://medium.com/@shystruk/v4-create-react-redux-app-structure-with-build-configurations-whats-new-523bdec328c6)

### Extending CRA

[How to Use the Optional Chaining Operator in Your React App Right Now - DEV Community 👩‍💻👨‍💻](https://dev.to/aumayeung/how-to-use-the-optional-chaining-operator-in-your-react-app-right-now-1ocj)
[10 Fun Facts About Create React App - Better Programming - Medium](https://medium.com/better-programming/10-fun-facts-about-create-react-app-eb7124aa3785)

[dilanx/craco: Create React App Configuration Override, an easy and comprehensible configuration layer for Create React App.](https://github.com/dilanx/craco) override CRA settings, not supporting CRA 5
[javascript - How to make an import shortcut/alias in create-react-app? - Stack Overflow](https://stackoverflow.com/questions/63067555/how-to-make-an-import-shortcut-alias-in-create-react-app)

[arackaf/customize-cra: Override webpack configurations for create-react-app 2.0](https://github.com/arackaf/customize-cra)

[timarney/react-app-rewired: Override create-react-app webpack configs without ejecting](https://github.com/timarney/react-app-rewired)
[Customize Create React App (CRA) without ejecting using react-app-rewired from @dceddia on @eggheadio](https://egghead.io/lessons/react-customize-create-react-app-cra-without-ejecting-using-react-app-rewired)
[Override Create React App conf w/react-app-rewired - Today I Learned](https://til.hashrocket.com/posts/ihkbvw5zfv-override-create-react-app-conf-wreact-app-rewired)

### Proxy

Easiest way: add "proxy" key to `package.json` (for simple proxying)

```json
{
  "proxy": "http://myhost.com:4000"
}
```

[Proxying API Requests in Development | Create React App](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually) `src/setupProxy.js` since 2.0

Or install `http-proxy-middleware` and add `src/setupProxy.js` to the project.

```js
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api1",
    proxy({
      target: "http://myhost1:4000",
      changeOrigin: true,
    })
  );
  app.use(
    "/api2",
    proxy({
      target: "http://myhost2:5000",
      changeOrigin: true,
    })
  );
};
```