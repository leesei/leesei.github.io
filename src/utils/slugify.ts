import { slug as slugger } from "github-slugger";

// my posts' slug (filename) are URL friendly, no need to generate from frontmatter
// these functions are used for tags

export const slugifyStr = (str: string) => slugger(str);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export const slugify = slugger;
