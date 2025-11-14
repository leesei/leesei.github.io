---
title: Tailwind CSS
description: Rapidly build modern websites without ever leaving your HTML
created: 2023-09-01
updated: 2025-11-14
tags:
  - css
  - tailwind
  - web
  - web/dev
---

> functional/atomic CSS
> remove pre-v4 articles

[Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)
[tailwindlabs/tailwindcss: A utility-first CSS framework for rapid UI development.](https://github.com/tailwindlabs/tailwindcss)
[tailwindlabs/tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography)

[Tailwind CSS - A Utility-First CSS Framework for Rapid UI Development](https://tailwindcss.com/docs/)
[Framework guides - Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides)
[Responsive design - Core concepts - Tailwind CSS](https://tailwindcss.com/docs/responsive-design)
[Tailwind Labs - YouTube](https://www.youtube.com/@TailwindLabs)

```html
<script src="https://cdn.tailwindcss.com"></script>
```

[Tailwind CSS v4.0 - Tailwind CSS](https://tailwindcss.com/blog/tailwindcss-v4) released 2025-04
[Tailwind V4 Is Bigger Than Expected 👀 - YouTube](https://www.youtube.com/watch?v=ueQRCTbiJOE)
Uses Lightning CSS (Rust compiler and bundler)
[Upgrade guide - Getting started - Tailwind CSS](https://tailwindcss.com/docs/upgrade-guide)
[Migrating from Tailwind CSS v3 to v4: A Complete Developer's Guide - DEV Community](https://dev.to/elechipro/migrating-from-tailwind-css-v3-to-v4-a-complete-developers-guide-cjd)

[10 Tailwind Classes I Wish I Knew Earlier - YouTube](https://www.youtube.com/watch?v=x1RJ5Q09PqM)
[Tailwind and the beauty of ugly code](https://boot-and-shoe.vercel.app/posts/skeptics-guide-to-tailwind)
[Tailwindcss breakpoint inspector, initial idea from https://gist.github.com/jonsugar/6bce22bd7d3673294caad36046c2b7cb · GitHub](https://gist.github.com/Lelectrolux/8f9a78491a5c9617078a73c091e01415)

[Tailwind CSS is the worst… - YouTube](https://www.youtube.com/watch?v=lHZwlzOUOZ4)

[Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
[Tailwind CSS Cheat Sheet](https://www.creative-tim.com/twcomponents/cheatsheet/)
[Watching Tailwind Tutorials Is A Waste Of Time - YouTube](https://www.youtube.com/watch?v=Ksn1tThNTjI) use cheatsheet

[Automatic Class Sorting with Prettier - Tailwind CSS](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
[tailwindlabs/prettier-plugin-tailwindcss: A Prettier plugin for Tailwind CSS that automatically sorts classes based on our recommended class order.](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
[Tailwind class sorter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=vdanchenkov.tailwind-class-sorter) language agnostic

## Customization

[Theme variables - Core concepts - Tailwind CSS](https://tailwindcss.com/docs/theme)
[Functions and directives - Core concepts - Tailwind CSS](https://tailwindcss.com/docs/functions-and-directives)

[How the PROS Use Tailwind - YouTube](https://www.youtube.com/watch?v=QY2Sj7-MMgM) replace rather than extend

## On the contrary

[The Tailwind Conspiracy | Theo Reacts - YouTube](https://www.youtube.com/watch?v=yGBjXsrwK4M) attack on Tailwind (component-based development actually) and Theo's defense

[Thoughts on Tailwind 4](https://nmn.sh/blog/2024-11-30-thoughts-on-tailwind-4) v4 features breaks "atomicity"
[This new Tailwind feature is scarier than I thought - YouTube](https://www.youtube.com/watch?v=ArSPic3EbCo)

[Is Tailwind really the right default? - YouTube](https://www.youtube.com/watch?v=oL0_PITvFto)

## Ecosystem

[Twind.style](https://twind.style/) runtime compiler
[tw-in-js/twind: The smallest, fastest, most feature complete Tailwind-in-JS solution in existence.](https://github.com/tw-in-js/twind)

[vimeshjs/vimesh-style: Vimesh Style is a full-featured tiny javascript library alternative to Tailwind CSS. Automatically work with any frontend frameworks, including React, Vue, AngularJS ect.](https://github.com/vimeshjs/vimesh-style) zero build CSS classes

[The story behind Tailwind's CN function](https://tigerabrodi.blog/the-story-behind-tailwinds-cn-function)
[SGLara/cn: A utility function that combines the power of `clsx` and `tailwind-merge` for seamless management of Tailwind CSS class names.](https://github.com/SGLara/cn)
[cn() - Every Tailwind Coder Needs It (clsx + twMerge) - YouTube](https://www.youtube.com/watch?v=re2JFITR7TI)

```js
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

[dcastil/tailwind-merge: Merge Tailwind CSS classes without style conflicts](https://github.com/dcastil/tailwind-merge)
[Tailwind-Merge Is Incredibly Useful — And Here's Why! - YouTube](https://www.youtube.com/watch?v=tfgLd5ZSNPc)

[Typewind – Typesafe Tailwind](https://typewind.dev/)

## Component Libraries

[Utility-first CSS - You have to try it first! - DEV Community 👩‍💻👨‍💻](https://dev.to/mzanggl/utility-first-css-you-have-to-try-it-first-3m85)
[Utility-First CSS With Tailwind - DZone Web Dev](https://dzone.com/articles/utility-first-css-with-tailwind-nearform)
[Functional CSS: Meet Tailwind CSS - Better Programming - Medium](https://medium.com/better-programming/functional-css-meet-tailwind-css-3897da4b63a2)

[Tailwind CSS tips for creating reusable React components - LogRocket Blog](https://blog.logrocket.com/tailwind-css-tips-for-creating-reusable-react-components/)
[Building Reusable React Components Using Tailwind — Smashing Magazine](https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/)

## UI kits

> usually as Tailwind plugin

[daisyUI — Tailwind CSS Components](https://daisyui.com/)
[Building React components with DaisyUI](https://blog.openreplay.com/building-react-components-with-daisyui/)
[I Found the Perfect Component Library - YouTube](https://www.youtube.com/watch?v=tZbOO97urWs)

[Versoly UI - Tailwind CSS Components](https://versoly.com/versoly-ui)

[The best Tailwind templates & UI kits on the internet | Tailwind Awesome](https://www.tailwindawesome.com/)

### Flowbite

> multiple frameworks

[Flowbite - Build websites even faster with components on top of Tailwind CSS](https://flowbite.com/)
[Flowbite - Plugins and Resources for Tailwind CSS](https://flowbite.com/resources/)
[themesberg/flowbite: The most popular and open-source library of Tailwind CSS components](https://github.com/themesberg/flowbite)

[Flowbite React - UI Component Library](https://www.flowbite-react.com/)
[themesberg/flowbite-react: Official React components built for Flowbite and Tailwind CSS](https://github.com/themesberg/flowbite-react)

## UI kits (Copy and paste)

[Explore 3000+ Free UI Elements: CSS & Tailwind](https://uiverse.io/) Tailwind or pure CSS
[Tailwind CSS Component Library | WindUI](https://wind-ui.com/)
[Tailwind CSS Components. Examples and templates](https://tailwindcomponents.com/)
[Home | Collection of Tailwindcss Templates & Components](https://tailwindtemplates.io/)
[Tailwind Toolbox - Free Starter Templates and Components for Tailwind CSS](https://www.tailwindtoolbox.com/)
[Tailwind Layouts](https://tailwind-layouts.vercel.app/)
[Myna UI](https://mynaui.com/)
[Tailblocks — Ready-to-use Tailwind CSS blocks](https://tailblocks.cc/)

### shadcn/ui

> Radix headless UI + Tailwind CSS
> [[css-tailwindcss#v0]]

[shadcn/ui - Beautifully designed components built with Radix UI and Tailwind CSS.](https://ui.shadcn.com/)
[shadcn/ui: Beautifully designed components built with Radix UI and Tailwind CSS.](https://github.com/shadcn/ui)

[The anatomy of shadcn/ui](https://manupa.dev/blog/anatomy-of-shadcn-ui)
[Breaking Down The Most Hyped Component Library - YouTube](https://www.youtube.com/watch?v=AqmMx_JidGo)

[This might change how we build UI forever - YouTube](https://www.youtube.com/watch?v=c5OPn_dyNcc) `npx shadcn init`
new CLI that updates instead of replacing your files, you can see the diff

[Best UI kit for Next.js 13 | shadcn ui tutorial - YouTube](https://www.youtube.com/watch?v=-UE_lWgVpes)
[Let's Build a Component Library Using Shadcn's UI Components - YouTube](https://www.youtube.com/watch?v=ChjoKSNWiBo)
[The Best UI Components that EVERYONE is Using! - YouTube](https://www.youtube.com/watch?v=DTGRIaAJYIo) 54:05

[Watch this if you use shadcn/ui - YouTube](https://www.youtube.com/watch?v=vHFZFXtjKNE) Radix team has issues maintaining the project
[shadcn's thought on Radix / X](https://x.com/shadcn/status/1936082723904565435)

### Aceternity

> Framer Motion + Tailwind CSS

[Aceternity UI](https://ui.aceternity.com/)
[Components - Aceternity UI](https://ui.aceternity.com/components)

[This UI component library is mind-blowing - YouTube](https://www.youtube.com/watch?v=RPa3_AD1_Vs)

### v0

> UI generation with prompt
> generates shadcn/ui and Tailwind CSS code, `v0` CLI to install the components

[v0.dev by Vercel](https://v0.dev/)
[v0.dev - WOW!! This IS WILD - YouTube](https://www.youtube.com/watch?v=nhTyuuDZe4w)
