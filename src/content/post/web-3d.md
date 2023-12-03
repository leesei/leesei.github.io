---
title: 3D Drawing on the Web
description: ""
created: 2016-04-08
updated: 2023-10-06
tags:
  - web
  - web-gl
  - web-gpu
---

[A brief history of graphics on the web and WebGPU - Ashley's blog](https://www.construct.net/en/blogs/ashleys-blog-2/brief-history-graphics-web-1517)

[mattdesl/graphics-resources: a list of graphic programming resources](https://github.com/mattdesl/graphics-resources)
[The Pixel Factory](http://acko.net/files/gltalks/pixelfactory/online.html) on computer graphic, 3D and WebGL

[gpu.js - GPU Accelerated JavaScript](http://gpu.rocks/)
[TensorFire](https://tenso.rs/) neural networks in the browser using WebGL

[pmndrs/detect-gpu: Classifies GPUs based on their 3D rendering benchmark score allowing the developer to provide sensible default settings for graphically intensive applications.](https://github.com/pmndrs/detect-gpu)

## WebGL

[WebGL - Wikiwand](https://www.wikiwand.com/en/WebGL)

[WebGL Stats](http://webglstats.com/)
[get.webgl.org](http://get.webgl.org/) test if your browser supports WebGL
chrome://gpu/
chrome://flags/

[Techniques for Rendering Text with WebGL | CSS-Tricks](https://css-tricks.com/techniques-for-rendering-text-with-webgl/)
OpenGL 2 allows programmer to use shaders (GLSL) to control the pipeline. WebGL is a subset of OpenGL that works in browsers.

[Basics of building 3D games on the Web ★ Mozilla Hacks – the Web developer blog](https://hacks.mozilla.org/2016/06/basics-of-building-3d-games-on-the-web/)
[Basics of building 3D games on the Web ★ Mozilla Hacks – the Web developer blog](https://hacks.mozilla.org/2016/06/basics-of-building-3d-games-on-the-web/)

[A brief introduction to WebGL - DEV Community](https://dev.to/santosharron/a-brief-introduction-to-webgl-20md)
[WebGL Essentials - Tuts+ Code Tutorials](http://code.tutsplus.com/series/webgl-essentials--net-35335)

[WebGL Insights](http://webglinsights.com/) book

[[NodeUp] 72 - A WebGL Show.](http://nodeup.com/seventytwo)

[TojiCode: What's coming in WebGL 2.0](http://blog.tojicode.com/2013/09/whats-coming-in-webgl-20.html)
[TojiCode: Using WebGL on Chrome (AKA: "Why don't I have the WebGLs?!?")](http://blog.tojicode.com/2013/11/the-state-of-webgl-on-chrome-aka-why.html)
[TojiCode: Holistic WebGL](http://blog.tojicode.com/2013/08/holistic-webgl.html)

[TojiCode: How Blink has affected WebGL?](http://blog.tojicode.com/2013/05/how-blink-has-affected-webgl.html)
[TojiCode: How Blink has affected WebGL, Part 2](http://blog.tojicode.com/2014/02/how-blink-has-affected-webgl-part-2.html)

[Making WebGL Dance — Acko.net](http://acko.net/tv/webglmath/)
[3Dparallax/insight: A helpful Chrome extension for WebGL development](https://github.com/3Dparallax/insight/)

## WebGPU

Replacement of WebGL and Three.js

[Introducing WebGPU: Unlocking modern GPU access for JavaScript - YouTube](https://www.youtube.com/watch?v=m6T-Mq1BPXg)
[WebGPU: Unlocking modern GPU access in the browser - Chrome Developers](https://developer.chrome.com/blog/webgpu-io2023/)
[Chrome ships WebGPU - Chrome Developers](https://developer.chrome.com/blog/webgpu-release/)

[WebGPU :: Rendering the future in Real-Time - YouTube](https://www.youtube.com/watch?v=YinfynTz77s)
[WebGPU Tutorial - Advanced Graphics on the Web Course - YouTube](https://www.youtube.com/watch?v=KTFFdZSDiTU) freeCodeCamp, 2:06:29

## Three.js

Three.js has internal float point representation of models, cannot be optimized
Have problem working with shaders (for lighting)

[three.js - JavaScript 3D library](http://threejs.org/)
[Introduction To Polygonal Modeling And Three.js – Smashing Magazine](http://www.smashingmagazine.com/2013/09/introduction-to-polygonal-modeling-and-three-js/)
[three.js sketches - jagracar](https://jagracar.com/threejsSketches.php)
[unconed/threestrap: Minimal Three.js Bootstrapper](https://github.com/unconed/threestrap)
[pmndrs/three-stdlib: 📚 Stand-alone library of threejs examples designed to run without transpilation in node & browser](https://github.com/pmndrs/three-stdlib)

[three.js - Transparent objects in Threejs - Stack Overflow](https://stackoverflow.com/questions/15994944/transparent-objects-in-threejs) WebGL have issue doing alpha blending of two semi transparent objects
[Understand 3D in Javascript (ThreeJS) in 5 minutes - Je suis un dev](https://www.jesuisundev.com/en/understand-threejs/)
[Build a Mindblowing 3D Portfolio Website // Three.js Beginner’s Tutorial - YouTube](https://www.youtube.com/watch?v=Q7AOvWpIVHU)
[Creating a game in Three.js - LogRocket Blog](https://blog.logrocket.com/creating-game-three-js/)
[Getting Started With Three.js. Importing your first 3D model into… | by Ilolo Izu | Apr, 2022 | Better Programming](https://betterprogramming.pub/getting-started-with-three-js-7a9031379847)

### Ecosystem

[Theatre.js - animation toolbox for the web](https://www.theatrejs.com/)

[LunchboxJS](https://lunchboxjs.com/) Vue 3 custom renderer for Three.js
[Build 3D visuals in Vue with Lunchbox.js - LogRocket Blog](https://blog.logrocket.com/build-3d-visuals-vue-lunchbox-js/)

[WhitestormJS Framework](https://github.com/WhitestormJS)
[WhitestormJS/whs.js: 🌪 Super-fast 3D framework for Web Applications 🥇 & Games 🎮. Based on Three.js](https://github.com/WhitestormJS/whs.js)

## TWGL.js

[TWGL.js, a tiny WebGL helper library](https://twgljs.org/)
[greggman/twgl.js: A Tiny WebGL helper Library](https://github.com/greggman/twgl.js/)
[Intro to WebGL Programming using twgl. / Sumant Pattanaik / Observable](https://observablehq.com/@spattana/intro-to-webgl-programming-using-twgl)

## curtains.js

[curtains.js | Home](https://www.martin-laxenaire.fr/libs/curtainsjs/) easy WebGL tool to animate images and videos
[Animate Images and Videos with curtains.js | CSS-Tricks](https://css-tricks.com/animate-images-and-videos-with-curtains-js/)

## Autonomous Visualization System (AVS)

[AVS Home](https://avs.auto/#/)

[streetscape.gl](https://avs.auto/#/streetscape.gl/overview/introduction)
[aurora-opensource/xviz: A protocol for real-time transfer and visualization of autonomy data](https://github.com/aurora-opensource/xviz)

## Others

[Zdog · Round, flat, designer-friendly pseudo-3D engine for canvas and SVG](https://zzz.dog/)

[regl.party](http://regl.party/)

[CopperLicht - JavaScript/WebGL 3D library](https://www.ambiera.com/copperlicht/index.html)

## Game Engines

> also capable of WebXR

[PlayCanvas | 3D HTML5 & WebGL Game Engine](https://playcanvas.com/)

[BabylonJS - 3D engine based on WebGL/Web Audio and JavaScript](http://www.babylonjs.com/)

## Svelte

[Svelte Cubed](https://svelte-cubed.vercel.app/)

## React.js

[d-Threeact: How the Sift Science Console Team Made d3 and React the Best of Friends — Sift Science Blog](http://blog.siftscience.com/blog/2015/4/6/d-threeact-how-sift-science-made-d3-react-besties)
[D3 and React - the future of charting components? - Binary Consulting](http://10consulting.com/2014/02/19/d3-plus-reactjs-for-charting/)
[React-d3 · Eric S. Bullington](https://ericbullington.com/blog/2014/11/16/react-d3-charts/)
[React: Integrating 3rd-party visual components](http://yaymedia.net/?p=1571)
[Stateful Peanut Butter and SVG-elly: A React + D3 Tutorial](https://codeburst.io/stateful-peanut-butter-and-svg-elly-a-react-d3-tutorial-c959f5a9ed49)
[How to construct a heat map in React](https://www.freecodecamp.org/news/a-heat-map-implementation-in-typescript/amp/)

### React Three Fiber

[Poimandres](https://github.com/pmndrs?type=source) many WebGL related libraries

[React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
[pmndrs/react-three-fiber: 🇨🇭 A React renderer for Three.js](https://github.com/pmndrs/react-three-fiber)
[pmndrs/drei: 🥉 useful helpers for react-three-fiber](https://github.com/pmndrs/drei)

[pmndrs/react-three-next: React Three Fiber, Nextjs, Tailwind and Styled-components starter](https://github.com/pmndrs/react-three-next)

[@react-three/cannon](https://cannon.pmnd.rs/#/)
[pmndrs/use-cannon: 👋💣 physics based hooks for @react-three/fiber](https://github.com/pmndrs/use-cannon)

[@react-three/p2](https://p2.pmnd.rs/)
[pmndrs/use-p2: 👋💣 2d physics hooks for @react-three/fiber](https://github.com/pmndrs/use-p2)

[pmndrs/react-three-flex: 💪📦 Flexbox for react-three-fiber](https://github.com/pmndrs/react-three-flex)

[Implementing 3D graphics in React](https://blog.openreplay.com/implementing-3d-graphics-in-react/)
[Build a 3D World in React with ThreeJS and React Three Fiber - YouTube](https://www.youtube.com/watch?v=9ZEjSxDRIik)

[Animate a Camera Fly-through on Scroll Using Theatre.js and React Three Fiber | Codrops](https://tympanus.net/codrops/2023/02/14/animate-a-camera-fly-through-on-scroll-using-theatre-js-and-react-three-fiber/)

### VisGL

[Vis.gl](https://github.com/visgl?type=source)
Frameworks for WebGL-powered large-scale data visualization (powering Uber)

[Home | deck.gl](https://deck.gl/)
[visgl/deck.gl: WebGL2 powered visualization framework](https://github.com/visgl/deck.gl) high-performance visualizations of large data sets

[luma.gl](https://luma.gl/)
[visgl/luma.gl: High-performance Toolkit for WebGL-based Data Visualization](https://github.com/visgl/luma.gl)

[visgl/hubble.gl: A client-side JavaScript library for animating data visualizations and rendering videos.](https://github.com/visgl/hubble.gl)

## MathBox

[Steven Wittens / mathbox · GitLab](https://gitgud.io/unconed/mathbox)
[MathBox² — Acko.net](http://acko.net/blog/mathbox2/)
[MathBox² — Acko.net](http://acko.net/blog/mathbox2-pt2/) part 2

## Voxel

[voxel.js \* blocks in yo browser](http://voxeljs.com/)
[maxogden/voxel-engine: 3D HTML5 voxel game engine](https://github.com/maxogden/voxel-engine#api)
[s-macke/VoxelSpace: Terrain rendering algorithm in less than 20 lines of code](https://github.com/s-macke/VoxelSpace)
[voxel.css](http://www.voxelcss.com/)

[Voxel Rendering Techniques – Michael Fogleman – Medium](https://medium.com/@fogleman/voxel-rendering-techniques-fa8d869457ca)

[MagicaVoxel](https://ephtracy.github.io/#ss-carousel_ss)
[Voxel Critter Creator](http://voxelbuilder.com/)

[Plotz Model Selection](https://www.plotz.co.uk/)

## Showcase

[Hackery, Math & Design — Acko.net](http://acko.net/)
[How I built a wind map with WebGL – Points of interest](https://blog.mapbox.com/how-i-built-a-wind-map-with-webgl-b63022b5537f)
