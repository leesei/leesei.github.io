import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://leesei.github.io/",
  author: "leesei",
  desc: "My Second Brain, powered by Astro and AstroPaper.",
  title: "leesei's Second Brain 🧠",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 46,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/leesei/",
    linkTitle: `${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/leesei/leesei.github.io",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/leesei/",
    linkTitle: `${SITE.author} on Steam`,
    active: true,
  },
];
