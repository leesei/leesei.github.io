---
title: React.js
description: React.js state
created: 2023-03-21
updated: 2023-09-29
tags:
  - frontend
  - javascript
  - reactjs
  - reactjs-state
  - web
  - web-dev
---

> TODO: remove pre-hook articles

3 camps:

- Flux (Redux, Zustand)
  see [[flux]], [[flux-alternatives]]
- Proxy (Mobx, Valtio)
- Atomic (Recoil, Jotai)

[GantMan/ReactStateMuseum: A whirlwind tour of React state management systems by example](https://github.com/GantMan/ReactStateMuseum)
[React State Management – Intermediate JavaScript Course - YouTube](https://www.youtube.com/watch?v=-bEzt5ISACA) 2022-11
[Top 6 React state management libraries for 2022](https://blog.openreplay.com/top-6-react-state-management-libraries-for-2022) 2022-01
[Application State Management – kentcdodds](https://blog.kentcdodds.com/application-state-management-66de608ccb24) 2020-07
[Changing children's state from another component with React Hooks](https://itnext.io/changing-children-state-from-another-component-with-react-hooks-5c982c042e8) `forwardRef()` and context
[How to Manage State in a React App – With Hooks, Redux, and More](https://www.freecodecamp.org/news/how-to-manage-state-in-a-react-app/#howtousetheusestatehook)

[4 options to prevent extra rerenders with React context · Daishi Kato's blog](https://blog.axlight.com/posts/4-options-to-prevent-extra-rerenders-with-react-context/)
[Global state with React | Basefactor](https://www.basefactor.com/global-state-with-react)
[Four patterns for global state with React hooks: Context or Redux](https://itnext.io/four-patterns-for-global-state-with-react-hooks-context-or-redux-cbc2dc787380)
[An overview of State Management solutions for React and NextJS - React inDepth](https://indepth.dev/posts/1487/deep-dive-into-state-management-with-react-and-nextjs)

[React — Why useContext() will clean your code – Michael Majdanski – Medium](https://medium.com/@mmajdanski/react-why-usecontext-will-clean-your-code-ca2b185e23f5)
[Simple Painter in ReactJS — useContext, useState – Prima – Medium](https://medium.com/@anMagpie/simple-painter-in-reactjs-usecontext-usestate-2f7c1dfc898d)
[The modern guide to React state patterns - LogRocket Blog](https://blog.logrocket.com/modern-guide-react-state-patterns/)

[React Tracked](https://react-tracked.js.org/)
[dai-shi/react-tracked: State usage tracking with Proxies. Optimize re-renders for useState/useReducer, React Redux, Zustand and others.](https://github.com/dai-shi/react-tracked)

[Pullstate · Simple state stores using immer and React hooks](https://lostpebble.github.io/pullstate/)
[lostpebble/pullstate: Simple state stores using immer and React hooks - re-use parts of your state by pulling it anywhere you like!](https://github.com/lostpebble/pullstate)

## Storeon

> library-agnostic

[Storeon: "Redux" in 173 bytes — Martian Chronicles, Evil Martians’ team blog](https://evilmartians.com/chronicles/storeon-redux-in-173-bytes)
[storeon/storeon: 🌩 A tiny (185 bytes) event-based Redux-like state manager for React, Preact, Angular, Vue, and Svelte](https://github.com/storeon/storeon)
[Event-driven state management in React using Storeon - LogRocket Blog](https://blog.logrocket.com/event-driven-state-management-in-react-using-storeon/)

## Context API

> since 16.3
> TODO: clean-up trivial posts

[Context - React](https://reactjs.org/docs/context.html)
Store states local to a compound component, alleviate the need for Redux

[diegohaz/awesome-react-context: 😎 A curated list of stuff related to the new React Context API](https://github.com/diegohaz/awesome-react-context)

[Heres how React's New Context API Works - YouTube](https://www.youtube.com/watch?v=XLJN4JfniH4)
[What can the React Context API do for you? Multi-language text, Modals, and Themes](https://codeburst.io/what-can-react-context-api-do-for-you-multi-language-text-modals-and-theme-switchers-9cfbc8e5ee5e)

[diegohaz/constate: React Context + State](https://github.com/diegohaz/constate)

[Digging Into React Context | CSS-Tricks](https://css-tricks.com/digging-into-react-context/)
[Understanding the React Context API | DigitalOcean](https://www.digitalocean.com/community/tutorials/react-context-api)
[Nesting and overriding new React Context API - DEV Community 👩‍💻👨‍💻](https://dev.to/iamandrewluca/nesting-and-overriding-new-react-context-api-220i)
[An Introduction To React’s Context API — Smashing Magazine](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/)
[Redux vs. The React Context API](https://daveceddia.com/context-api-vs-redux/)
[React's Context API explained: Provider and Consumer - RWieruch](https://www.robinwieruch.de/react-context-api)
[React Context API – Zsolt Nagy](http://www.zsoltnagy.eu/react-context-api/)
[React Context API - A Replacement for Redux? – Bits and Pieces](https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3)
[React Context API vs Redux — the eternal dichotomy – SoftwareMill Tech Blog](https://blog.softwaremill.com/react-context-api-vs-redux-the-eternal-dichotomy-24639907fc98)
[React Context and Re-Renders: React Take the Wheel - Ryan Florence - Medium](https://medium.com/@ryanflorence/react-context-and-re-renders-react-take-the-wheel-cd1d20663647) use state and `setState()` as value for Provider, usable with Hooks

In the old days, most React routers (and Redux) use the undocumented `this.context`
[React.js: Communication between Components with Contexts - JScrambler Blog](https://blog.jscrambler.com/react-js-communication-between-components-with-contexts/)

## Hook as Redux alternative

> don't do this, use Redux Toolkit

[[reduxjs#Hooks API]]

Hooks provides some helper functions that can make it an alternative to introducing Redux to your project.
But React Hooks and Redux are not mutually exclusive!!

[Stop Asking if React Hooks Replace Redux - The Startup - Medium](https://medium.com/swlh/stop-asking-if-react-hooks-replace-redux-448c54d79551)
[Redux-less context-based useSelector hook that has same performance as React-Redux](https://itnext.io/redux-less-context-based-useselector-hook-that-has-same-performance-as-react-redux-450b1853f744)
[React Global State without Redux - RWieruch](https://www.robinwieruch.de/react-global-state-without-redux)
[React State with Hooks: useReducer, useState, useContext - RWieruch](https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext) ❗!important
[Passing callbacks down with React Hooks - Trabe - Medium](https://medium.com/trabe/passing-callbacks-down-with-react-hooks-4723c4652aff) `useContext()`, with `useMemo()`, `useCallback()` to make the callback stable

```js
import React, { useReducer } from "react";
export const Store = React.createContext();

const initialState = {
  counter: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.types) {
    case "ADD":
      return { ...state, counter: state.counter + 1 };
    case "SUB":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
```

## Recoil

> larger footprint

[Recoil](https://recoiljs.org/)

[Recoil - a New State Management Library for React](https://www.infoq.com/news/2020/05/recoil-react-state-management/)
[Recoil: State Management for Today's React - Dave McCabe aka @mcc_abe at @ReactEurope 2020 - YouTube](https://www.youtube.com/watch?v=_ISAA_Jt9kI)
[React: Intro to Recoil - YouTube](https://www.youtube.com/watch?v=So4ny9Aa7Oo)

## Jotai

> like Recoil, but smaller; better memory footprint with `WeakMap`

[Jotai, primitive and flexible state management for React](https://jotai.org/)
[Utils — Jotai, primitive and flexible state management for React](https://jotai.org/docs/api/utils) cover most use cases

[pmndrs/jotai: 👻 Primitive, flexible state management for React](https://github.com/pmndrs/jotai)
[jotai/xstate.md at master · pmndrs/jotai · GitHub](https://github.com/pmndrs/jotai/blob/master/docs/api/xstate.md)

[Manage Application State with Jotai Atoms | egghead.io](https://egghead.io/courses/manage-application-state-with-jotai-atoms-2c3a29f0)
[Jotai, a New Granular State Management Library for React](https://www.infoq.com/news/2020/09/jotai-react-state-management/)
[Jotai: The ultimate React State Management | Blog 100mslive](https://www.100ms.live/blog/jotai-react-state-management)
[Redux-Free State Management with Jotai | by Nathan Sebhastian | Bits and Pieces](https://blog.bitsrc.io/redux-free-state-management-with-jotai-2c8f34a6a4a)
[Jotai vs. Recoil: What are the differences? - LogRocket Blog](https://blog.logrocket.com/jotai-vs-recoil-what-are-the-differences/)

## Zustand

> like Redux; small footprint

[Zustand](https://zustand-demo.pmnd.rs/)
[Zustand Documentation](https://docs.pmnd.rs/zustand/)
[Working with Zustand | TkDodo's blog](https://tkdodo.eu/blog/working-with-zustand)

## Hookstate

[Hookstate: supercharged React.useState hook | Hookstate](https://hookstate.js.org/)

## Nano Stores

[nanostores/nanostores: A tiny (334 bytes) state manager for React/RN/Preact/Vue/Svelte with many atomic tree-shakable stores](https://github.com/nanostores/nanostores)

## Proxy-based

[pmndrs/valtio: 💊 Valtio makes proxy-state simple for React and Vanilla](https://github.com/pmndrs/valtio) Suspense compatible

[bennyg123/entangle: Global state management tool for react hooks inspired by RecoilJS and Jotai using proxies.](https://github.com/bennyg123/entangle)
