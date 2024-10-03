---
title: Bulma
description: The modern CSS framework that just works
created: 2023-09-01
updated: 2023-12-01
tags:
  - bulma
  - css
  - web
  - web/dev
---

> component CSS, but with many functional/atomic CSS helper

[Bulma: Free, open source, and modern CSS framework based on Flexbox](https://bulma.io/)
[jgthms/bulma: Modern CSS framework based on Flexbox](https://github.com/jgthms/bulma)
[Documentation | Bulma: Free, open source, and modern CSS framework based on Flexbox](https://bulma.io/documentation/)

- No default Styling
- Powerful Flexbox Grid
- Small Size in Kbs
- Reusable and You can modify Sass
- No Javascript only CSS
- Reusable Components (which you can customize)

[Bulma cheatsheet](https://devhints.io/bulma) ❗!important
[Responsiveness | Bulma: Free, open source, and modern CSS framework based on Flexbox](https://bulma.io/documentation/overview/responsiveness/)

| Breakpoints  | Screen sizes         |
| ------------ | -------------------- |
| `mobile`     | width <= 768         |
| `tablet`     | 769 <= width < 1024  |
| `desktop`    | 1024 <= width < 1216 |
| `widescreen` | 1216 <= width < 1408 |
| `fullhd`     | 1408 <= width        |

[Get started with Bulma | Creative Bloq](https://www.creativebloq.com/how-to/get-started-with-bulma)
[All Bulma CSS classes list](https://bulma.dev/classes)
[Bulma CSS Framework Crash Course - YouTube](https://www.youtube.com/watch?v=IiPQYQT2-wg)
[Bulma CSS Framework - complete tutorial - YouTube](https://www.youtube.com/watch?v=LBzZLzu2GKo)
[Setting up Bulma with SASS (SCSS) using NPM - YouTube](https://www.youtube.com/watch?v=iK0Y9eW7N8E) customize

[Introduction to Bulma with React](https://alligator.io/react/intro-react-bulma-components/)
[Bulma-Extensions](https://wikiki.github.io/)
[Free Bulma templates](https://bulmatemplates.github.io/bulma-templates/)

[Bulma Layouts - Sections, Containers, Columns, and Levels - YouTube](https://www.youtube.com/watch?v=ouI1_tZ1yK4)
[Columns | Bulma: Free, open source, and modern CSS framework based on Flexbox](https://bulma.io/documentation/columns/)
[Layout | Bulma: Free, open source, and modern CSS framework based on Flexbox](https://bulma.io/documentation/layout/)

[couds/react-bulma-components: React components for Bulma framework](https://github.com/couds/react-bulma-components)
[Buefy: lightweight UI components for Vue.js based on Bulma](https://buefy.github.io/#/)

[How to Increase Your Page Size by 1,500% with webpack and Vue | CSS-Tricks](https://css-tricks.com/how-to-increase-your-page-size-by-1500-with-webpack-and-vue/)

#### Customization

[Customize | Bulma: Free, open source, and modern CSS framework based on Flexbox](https://bulma.io/documentation/customize/)

[Change the Navbar Colors/Font/Size – Press Customizr](https://presscustomizr.com/snippet/change-navbar-colorsfontsize/)
[Bulma Customizer – Create your own bespoke Bulma build](https://bulma-customizer.bstash.io/)

#### Tips and Tricks

[Bulma Burger Dropdown rendering under other elements · Issue #1655 · jgthms/bulma](https://github.com/jgthms/bulma/issues/1655)

The `select` class set z-index of arrow to 4. Use this to override:

```css
.select:not(.is-multiple):not(.is-loading):hover::after {
  z-index: 4;
}

.select:not(.is-multiple):not(.is-loading)::after {
  z-index: 0;
}
```
