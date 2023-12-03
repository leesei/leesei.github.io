---
title: Node.js settings
description: ""
created: 2014-12-11
updated: 2023-11-16
tags:
  - comp/lang
  - nodejs
  - npm
  - nvm
  - package-manager
  - settings
---

## Using `nvm`

[creationix/nvm: Node Version Manager - Simple bash script to manage multiple active node.js versions](https://github.com/creationix/nvm)
[jorgebucaran/nvm.fish: Node.js version manager lovingly made for Fish.](https://github.com/jorgebucaran/nvm.fish)
[nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)
[How to install and manage Node.js, sudo free, with NVM](http://www.nearform.com/nodecrunch/nodejs-sudo-free/)

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
# nvm installer will load nvm in your shell profile

# use git repo
git clone git://github.com/creationix/nvm.git ~/.nvm
# you have to source nvm in your shell proflie
# echo ". ~/.nvm/nvm.sh" >> ~/.bashrc
. ~/.nvm/nvm.sh
```

### Installing/updating Node.js

```sh
nvm ls # list local installed versions
nvm ls-remote # list remote versions

NODE_CURRENT=$(nvm current)
NODE_VERSION=v15  # new desired version
nvm install latest
# proper nvm
nvm alias default latest
nvm reinstall-packages ${NODE_CURRENT}
# nvm.fish
set --universal nvm_default_version (nvm current)

# add global module to NODE_PATH for require() to pick them up
NODE_PATH=$(npm root -g)
```

You have to reinstall all your global modules after update.
See [Node modules](#node-modules) or use `nvm reinstall-packages <prev-version>`.

## Using Volta

[Volta - The Hassle-Free JavaScript Tool Manager](https://volta.sh/)
[Introducing Volta - it manages your Node.js versions so you don't have to -- newline](https://www.newline.co/@paigen11/introducing-volta-it-manages-your-nodejs-versions-so-you-dont-have-to--eef49522)

## Using `fnm`

[Schniz/fnm: 🚀 Fast and simple Node.js version manager, built in Rust](https://github.com/Schniz/fnm)

## Using distro's package manager

> This is the recommended way to install Node.js for daemons.

[nodesource/distributions](https://github.com/nodesource/distributions)

---

[An abbreviated history of JavaScript package managers](https://medium.com/javascript-in-plain-english/an-abbreviated-history-of-javascript-package-managers-f9797be7cf0e)
[Understanding differences between npm, yarn and pnpm](https://www.alexkras.com/understanding-differences-between-npm-yarn-and-pnpm/#twitter-widget-0)
[Yarn determinism | Yarn Blog](https://legacy.yarnpkg.com/blog/2017/05/31/determinism/)

## Yarn

[Yarn](https://yarnpkg.com/)
[Compare Yarn Performance | Yarn](https://yarnpkg.com/en/compare)

[Installing Node Packages with Yarn - How To - Cloud9 Community](https://community.c9.io/t/installing-node-packages-with-yarn/10393)
[Yarn: A new package manager for JavaScript | Engineering Blog | Facebook Code](https://code.facebook.com/posts/1840075619545360)
[Yarn vs npm - The State of Node.js Package Managers | @RisingStack](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/)

[To Yarn and Back (to npm) Again | Mixmax Engineering Blog](https://mixmax.com/blog/to-yarn-and-back-again-npm)

[Plug'n'Play | Yarn - Package Manager](https://next.yarnpkg.com/features/pnp)
[PnP Overview | Yarn](https://yarnpkg.com/lang/en/docs/pnp/)
[Getting rid of node_modules with Yarn Plug’n’Play](https://www.freecodecamp.org/news/getting-rid-of-node-modules-with-yarn-plugn-play-a490e5e747d7/)
[Yarn Plug’n’Play – Thomas Reggi – Medium](https://medium.com/@thomasreggi/yarn-plugn-play-1c398bf3e417)

## Entropic

[Entropic - we federate packages](https://discourse.entropic.dev/)
[entropic-dev/entropic: 🦝 a package registry for anything, but mostly javascript 🦝 🦝 🦝](https://github.com/entropic-dev/entropic)

## pnpm

[pnpm · Fast, disk space efficient package manager](https://pnpm.js.org/)

[Why I Switched From NPM/Yarn to PNPM And Why You Should Too! - YouTube](https://www.youtube.com/watch?v=d1E31WPR70g)
[Life After Yarn - YouTube](https://www.youtube.com/watch?v=ZIKDJBrk56k)
[Why should we use pnpm? by @ZoltanKochan](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html)
[Flat node_modules is not the only way – pnpm – Medium](https://medium.com/pnpm/flat-node-modules-is-not-the-only-way-d2e40f7296a3)
[Why we switched from Yarn to pnpm - Data Orchestration for Composable Commerce](https://www.takeshape.io/articles/why-we-switched-from-yarn-to-pnpm/)

## npm

npm is included in node since v0.6.3

[The Ultimate Guide to Configuring NPM](http://stackabuse.com/the-ultimate-guide-to-configuring-npm/)
[npm Documentation](https://docs.npmjs.com/)
`npm help 7 config`
`npm help npmrc`

[The npm Blog — Next Generation Package Management](https://blog.npmjs.org/post/178027064160/next-generation-package-management)
[npm Commands and Features You Should Know ← Alligator.io](https://alligator.io/nodejs/npm-commands-you-should-know/)

[sindresorhus/awesome-npm: Awesome npm resources and tips](https://github.com/sindresorhus/awesome-npm)

### Behind GFW

```sh
npm config set registry https://registry.npm.taobao.org
```

### Disabling progress

Disabling progress with `npm set progress=false` yields faster `npm install`.
[Faster npm](https://davidwalsh.name/faster-npm)

### Project homepage

Use `home` to visit the homepage of a project hosted on NPM.

```sh
npm home nomnom
npm home lodash
```

### npmrc without sudo

> for system installs, not needed for `nvm`

[guides/npm-global-without-sudo.md at main · sindresorhus/guides · GitHub](https://github.com/sindresorhus/guides/blob/main/npm-global-without-sudo.md)
[03 - Fixing npm permissions | npm Documentation](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

Add this to `~/.npmrc`:

```
prefix = ${HOME}/.npm-packages
```

Then add this to `~/.profile` or `~/.bashrc`:

```
export PATH=${HOME}/.npm-packages/bin:$PATH
```

## `npx`

[npm/npx: npm package executor](https://github.com/npm/npx) included in `npm@5.2+`
[suarasaur/awesome-npx: 🌟 packages and resources that work really well with zkat/npx 🕶](https://github.com/suarasaur/awesome-npx)

[Introducing npx: an npm package runner – Kat Marchán – Medium](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
[How to use npx: the npm package runner](https://blog.scottlogic.com/2018/04/05/npx-the-npm-package-runner.html)
[What is NPX?](https://www.educative.io/edpresso/what-is-npx)

## Node modules

[How to Solve the Global npm Module Dependency Problem](http://www.sitepoint.com/solve-global-npm-module-dependency-problem/)

[sverweij/dependency-cruiser: Validate and visualize dependencies. Your rules. JavaScript, TypeScript, CoffeeScript. ES6, CommonJS, AMD.](https://github.com/sverweij/dependency-cruiser)

[module-alias - npm](https://www.npmjs.com/package/module-alias)

### `node-gyp` and Python 3

`node-gyp` does not supports Python 3, use these on system with Python 3 as default:

- `PYTHON=$(which python2) npm intall`
- `npm config set -g python $(which python2)`

> latest `nvm` supports command `nvm reinstall-packages <old-version>` to assist upgrade

Global modules:

```sh
# dev tools
npm install -g nesh nodemon
# project tools
npm install -g npm-check npm-remote-ls yarn
npx create-react-app fixpack
# linters
#  eslint-plugin-react
npm install -g jsonlint htmlhint prettier
# debug
npm install -g bench-rest node-inspector
# generators
# ionic yuidocjs
# npm install -g cordova
# doc tools
npm install -g bootprint bootprint-openapi dredd gitbook-cli raml1-doc ramlo
npm install -g doctoc markdown-tools
# data utils
npm install -g get-hrefs jq.node json pipeable-js yamljs
# servers
npm install -g serve fancy-server hotel json-server live-server
# bin
npm install -g rfc
# log tools
npm install -g bunyan logcat tap-spec faucet
# license tools
npm install -g license-generator license-sniffer license-spelunker
```

`~/.script/` modules:

```sh
cd ~/.script
# lib modules
npm install chalk chance commander ip jsop nomnom lodash request
# automation
npm install cheerio revenant

# with package.json
npm install
```

## List globally installed modules

To get a list for installing in another machine (or migration between Node version)

```sh
npm ls --location=global --depth 0
# OR
\ls $(npm root --location=global)

# shell independent
npm ls --location=global --depth 0 | grep -P '(?<= ).*(?=@)' -o | grep -v npm | tr '\n' ' ' && echo
```

```
# home
@google/clasp bunyan sslint fancy-server faucet fixpack github-commits-since-tag-cli hexo-cli htmlhint json jsonlint json-server licenseify live-server markdown-tools nodemon npm-check pipeable-js prettier pxt refine-manhuaren yarn

@google/clasp fixpack json-server licenseify nodemon prettier yarn

# work
csslint depcheck dredd ecstatic faucet fixpack htmlhint httpbin.js json jsonlint json-server licenseify live-server logcat markdown-tools netlify-cli nodemon prettier remarkable rfc tap-spec tldr typescript yamljs yarn

@google/clasp @leesei/imgmini bun corepack depcheck fixpack json-server licenseify nodemon prettier serve ts-node typescript yarn
```

## npm fails

Try clearing npm cache with:

```sh
npm cache clean
```

Hope that helps.

[when all else fails, clear you cache](http://codebetter.com/glennblock/2012/02/27/my-tale-of-npm-woe-when-all-else-fails-clear-you-cache/)

## Running Node alongside web servers

[guides/run-node-server-alongside-apache.md at master · sindresorhus/guides](https://github.com/sindresorhus/guides/blob/master/run-node-server-alongside-apache.md)

---

# Packages

[Chance](https://chancejs.com/)
[Papa Parse - Powerful CSV Parser for JavaScript](https://www.papaparse.com/)
[natergj/excel4node: Node module to allow for easy Excel file creation](https://github.com/natergj/excel4node)

[bitinn/node-fetch: A light-weight module that brings window.fetch to Node.js](https://github.com/bitinn/node-fetch) Node.js supports this in v18.0.0

[Voca: The JavaScript string library](https://vocajs.com/)
[panzerdp/voca: The ultimate JavaScript string library](https://github.com/panzerdp/voca)

[alexreardon/memoize-one: A memoization library which only remembers the latest invocation](https://github.com/alexreardon/memoize-one)

## Release

[vercel/pkg: Package your Node.js project into an executable](https://github.com/vercel/pkg)

[Introduction to snapshot flags in Node.js v18.8.0 - LogRocket Blog](https://blog.logrocket.com/snapshot-flags-node-js-v18-8/)

## Tokens

Unambiguous characters for token, good for OTP
Charset (base 30): "13456789ACDEFGHJKLMNPQRTUVWXYZ"

[nanoid: Docs, Tutorials, Reviews | Openbase](https://openbase.com/js/nanoid)
[Nano ID CC](https://zelark.github.io/nano-id-cc/)
[ai/nanoid: A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript](https://github.com/ai/nanoid)
[CyberAP/nanoid-dictionary: Predefined character sets to use with nanoid](https://github.com/CyberAP/nanoid-dictionary)

[chilts/node-coupon-code: Implementation of Perl's Algorithm::CouponCode for NodeJS](https://github.com/chilts/node-coupon-code)

[hirespace/token-gen: Generate unique human readable codes (e.g. vouchers, referrals, passwords, keys)](https://github.com/hirespace/token-gen)

[mcollina/hyperid: Uber-fast unique id generation, for Node.js and the browser](https://github.com/mcollina/hyperid)
[nwoltman/node-uid-generator: Generates cryptographically strong pseudo-random UIDs with custom size and base-encoding](https://github.com/nwoltman/node-uid-generator)

[lukeed/hexoid: A tiny (190B) and extremely fast utility to generate random IDs of fixed length](https://github.com/lukeed/hexoid)
[lukeed/uuid: A tiny (~230B)and fast UUID (V4) generator for Node and the browser](https://github.com/lukeed/uuid)

[short-uuid: Docs, Tutorials, Reviews | Openbase](https://openbase.com/js/short-uuid)

## CLI

### CLI argument parser

I need an option parser that auto generates the help page.

[lukeed/sade: Smooth (CLI) Operator 🎶](https://github.com/lukeed/sade) built on mri

[tj/commander.js: node.js command-line interfaces made easy](https://github.com/tj/commander.js) quirky (might have improved since then):

- [Can't use default together with coercion (example from front-page broken) · Issue #400 · tj/commander.js](https://github.com/tj/commander.js/issues/400)
- [Global Options · Issue #476 · tj/commander.js](https://github.com/tj/commander.js/issues/476)

[util.parseArgs() | Node.js Documentation](https://nodejs.org/api/util.html#utilparseargsconfig) added v18.3.0, v16.17.0

```js
import { parseArgs } from "node:util";
const { options, positionals } = parseArgs({
  options: {
    verbose: {
      type: "boolean",
      short: "v",
    },
  },
  allowPositionals: true,
});
console.log(options, positionals);
if (positionals.length === 0) {
  console.error("missing input");
  process.exit(1);
}
```

[nodeca/argparse: CLI arguments parser for node.js. JS port of python's argparse module.](https://github.com/nodeca/argparse)
[sindresorhus/meow: CLI app helper](https://github.com/sindresorhus/meow)
[hapijs/bossy: Command line options parser](https://github.com/hapijs/bossy)
[leo/args: Minimal toolkit for building CLIs](https://github.com/leo/args) 😴inactive, built on mri
[lukeed/mri: Quickly scan for CLI flags and arguments](https://github.com/lukeed/mri) 😴inactive
[75lb/command-line-args: A mature, feature-complete library to parse command-line options.](https://github.com/75lb/command-line-args) 😴inactive

[yargs/yargs: yargs the modern, pirate-themed successor to optimist.](https://github.com/yargs/yargs) [Docs](http://yargs.js.org/docs/index.html)
[Yargs cheatsheet](http://ricostacruz.com/cheatsheets/yargs.html)
I found yargs option are too complicated

[scottcorgan/nash: Craft command-line masterpieces in Node.js](https://github.com/scottcorgan/nash) 😴inactive
[minimistjs/minimist: parse argument options](https://github.com/minimistjs/minimist) naive, no help page
[harthur-nomnom](https://github.com/harthur/nomnom) DEPRECATED
[substack-node-optimist](https://github.com/substack/node-optimist) DEPRECATED, succeeded by yargs

#### CLI wrapper

[google/zx: A tool for writing better scripts](https://github.com/google/zx)
[JS-DevTools/ez-spawn: Simple, consistent, cross-platform process spawning](https://github.com/JS-DevTools/ez-spawn)
[sindresorhus/execa: Process execution for humans](https://github.com/sindresorhus/execa)
[sindresorhus/dargs: Reverse minimist. Convert an object of options into an array of command-line arguments](https://github.com/sindresorhus/dargs) Reverse minimist
[ShellJS](http://documentup.com/shelljs/shelljs)
[steelbrain/node-ssh: SSH2 with Promises](https://github.com/steelbrain/node-ssh)

#### config files/env

[davidtheclark/cosmiconfig: Find and load configuration from a package.json property, rc file, or CommonJS module](https://github.com/davidtheclark/cosmiconfig)
[AdrieanKhisbe/configue: Configue All the Things.js](https://github.com/AdrieanKhisbe/configue)
[Env](https://env.t3.gg/) from T3
[lorenwest/node-config: Node.js Application Configuration](https://github.com/lorenwest/node-config)
[indexzero-nconf](https://github.com/indexzero/nconf) load and merge config files
[bevry/envfile](https://github.com/bevry/envfile)
[defunctzombie/localenv](https://github.com/defunctzombie/localenv)
[motdotla/dotenv](https://github.com/motdotla/dotenv)
[zeke/local-env: Load your .env file into process.env](https://github.com/zeke/local-env)

[af/envalid: Environment variable validation for Node.js](https://github.com/af/envalid)
[dominictarr/rc: The non-configurable configuration loader for lazy people.](https://github.com/dominictarr/rc)
[MoOx/rc-loader: Runtime configuration loader that supports YAML, JSON or JS.](https://github.com/MoOx/rc-loader)

#### frameworks

[12 Factor CLI Apps – Jeff Dickey – Medium](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46) ❗!important
[Build CLIs with an open framework using Node.js | oclif](https://oclif.io/)
[Open Sourcing oclif, the CLI Framework that Powers Our CLIs | Heroku](https://blog.heroku.com/open-cli-framework)
[CLI Flags in Practice + How to Make Your Own CLI Command with oclif | Heroku](https://blog.heroku.com/cli-flags-get-started-with-oclif)
[Open CLI Framework: Create Command Line Tools Your Users Love - YouTube](https://www.youtube.com/watch?v=ZBRmOS7dmD0)

[weidagang-line-parser-js](https://github.com/weidagang/line-parser-js) configuration over implementation
[Omelette by f](http://f.github.io/omelette/) generates event from given command and you only have to implement the handlers
[dscape-frameless](https://github.com/dscape/frameless) event framework for CLI app
[vdemedes-sushi](https://github.com/vdemedes/sushi) Express for CLI

### sub-shell

These allows you to build a sub-shell or yeoman-like app.

[prompt](https://www.npmjs.org/package/prompt)
[readline-sync](https://www.npmjs.com/package/readline-sync)
[scottcorgan/nash: Craft command-line masterpieces in Node.js](https://github.com/scottcorgan/nash)
[scottcorgan/nash-usage: Help/usage display plugin for Nash command line masterpieces](https://github.com/scottcorgan/nash-usage)
[tj/nshell: scriptable command-line shell written with node.js](https://github.com/tj/nshell)
[enquirer/enquirer: Intuitive, plugin-based prompt system for node.js. Much faster alternative to Inquirer, with all the same prompt types and more.](https://github.com/enquirer/enquirer)
[SBoudrias/Inquirer.js: A collection of common interactive command line user interfaces.](https://github.com/SBoudrias/Inquirer.js/)
[anseki/readline-sync: Synchronous Readline for interactively running to have a conversation with the user via a console(TTY).](https://github.com/anseki/readline-sync)

[dthree-vorpal](https://github.com/dthree/vorpal) create REPL
[dthree-vantage](https://github.com/dthree/vantage)

### Terminal interface

The equivalent of [ncurses](https://www.wikiwand.com/en/Ncurses) in Linux.

[chjj/blessed: A high-level terminal interface library for node.js.](https://github.com/chjj/blessed)
[substack/node-charm: ansi control sequences for terminal cursor hopping and colors](https://github.com/substack/node-charm)
[substack/terminal-menu: retro ansi terminal menus for serious 80s technicolor business](https://github.com/substack/terminal-menu)

blessed derivative with markup support:
[yaronn/wopr: A simple markup language for creating rich terminal reports, presentations and infographics](https://github.com/yaronn/wopr)
[yaronn/blessed-contrib: Build terminal dashboards using ascii/ansi art and javascript](https://github.com/yaronn/blessed-contrib)
[Yomguithereal/react-blessed: A react renderer for blessed.](https://github.com/Yomguithereal/react-blessed)

[madbence-node-drawille](https://github.com/madbence/node-drawille) draw unicode braille characters
[sindresorhus/sparkly](https://github.com/sindresorhus/sparkly)

[node-js-libs/cli: Rapidly build command line apps](https://github.com/node-js-libs/cli)

[vadimdemedes/pastel: 🎨 Framework for effortlessly building Ink apps](https://github.com/vadimdemedes/pastel)
[vadimdemedes/ink: 🌈 React for interactive command-line apps](https://github.com/vadimdemedes/ink)
[Building rich command-line interfaces with Ink and React](https://vadimdemedes.com/posts/building-rich-command-line-interfaces-with-ink-and-react)
[Creating CLIs with Ink, React and a bit of magic](https://vadimdemedes.com/posts/creating-clis-with-ink-react-and-a-bit-of-magic)
[Add interactivity to your CLIs with React - LogRocket Blog](https://blog.logrocket.com/add-interactivity-to-your-clis-with-react/)

[Text to ASCII Art Generator (TAAG)](http://patorjk.com/software/taag/)
[patorjk/figlet.js: A FIG Driver written in JavaScript which aims to fully implement the FIGfont spec.](https://github.com/patorjk/figlet.js)

[Home - voici.js](https://lars-waechter.gitbook.io/voici.js/) data rendering

Workshop:
[workshopper/workshopper](https://github.com/workshopper/workshopper)
[substack/adventure](https://github.com/substack/adventure)

### Progress

[sindresorhus/ora: Elegant terminal spinner](https://github.com/sindresorhus/ora)
[visionmedia/node-progress: Flexible ascii progress bar for nodejs](https://github.com/visionmedia/node-progress)
[inikulin/elegant-status: Create elegant task status for CLI.](https://github.com/inikulin/elegant-status)
[SamVerschueren/listr: Terminal task list](https://github.com/SamVerschueren/listr)

### Colorizer

[chalk/chalk: 🖍 Terminal string styling done right](https://github.com/chalk/chalk)
[jorgebucaran/clorox: Node.js library for colorizing text using ANSI escape sequences.](https://github.com/jorgebucaran/clorox)
[lukeed/kleur: The fastest Node.js library for formatting terminal text with ANSI colors~!](https://github.com/lukeed/kleur)
[Marak/colors.js](https://github.com/Marak/colors.js) use chalk instead

[danielb2-purdy.js](https://github.com/danielb2/purdy.js) colored object inspect

## Logger

Requirements:

- log to console and file simultaneously
- log rotation
- debug level
- search (optional)

[Comparing Node.js logging tools - LogRocket Blog](https://blog.logrocket.com/comparing-node-js-logging-tools/) 2021
[NodeJS logging made right. Logging on steroids with CLS and Proxy | by Andrey Goncharov | ITNEXT](https://itnext.io/nodejs-logging-made-right-117a19e8b4ce) 2019

[trentm/node-bunyan](https://github.com/trentm/node-bunyan) 😴inactive
[Bunyan JSON Logs with Fluentd and Graylog – The JS Blog](https://jsblog.insiderattack.net/bunyan-json-logs-with-fluentd-and-graylog-187a23b49540)

[rvagg/bole](https://github.com/rvagg/bole) based on idea of bunyan generally, simple yet flexible API

[npm/npmlog: The logger that npm uses](https://github.com/npm/npmlog) npm's logger

[winstonjs/winston](https://github.com/winstonjs/winston)

[nuxt/consola: 🐨 Elegant Console Logger](https://github.com/nuxt/consola)
[klauscfhq/signale: 👋 Hackable console logger](https://github.com/klauscfhq/signale) fancy
[bevry/caterpillar](https://github.com/bevry/caterpillar)
[debug-js/debug: A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers](https://github.com/debug-js/debug) support DEBUG in env to toggle log
[expressjs/morgan: HTTP request logger middleware for node.js](https://github.com/expressjs/morgan) 😴inactive, express's logger

### Pino

[Pino - Super fast, all natural JSON logger for Node.js](https://getpino.io/#/)
[pinojs/pino: 🌲 super fast, all natural json logger](https://github.com/pinojs/pino)

[Ecosystem](https://getpino.io/#/docs/ecosystem)
[feugy/pino-roll: A Pino transport that automatically rolls your log files](https://github.com/feugy/pino-roll)

[A Complete Guide to Pino Logging in Node.js | Better Stack Community](https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-pino-to-log-node-js-applications/)
[PINO - The fastest Node.js logger for production - NearForm](https://www.nearform.com/blog/pino-the-fastest-node-js-logger-for-production/) 2016

## File system

### globbing

[isaacs/node-glob: glob functionality for node.js](https://github.com/isaacs/node-glob)
[Understanding the glob pattern in Node.js - LogRocket Blog](https://blog.logrocket.com/understanding-using-globs-node-js/)

[mrmlnc/fast-glob: It's a very fast and efficient glob library for Node.js](https://github.com/mrmlnc/fast-glob)

[JS-DevTools/readdir-enhanced: fs.readdir() with filter, recursion, absolute paths, promises, streams, and more!](https://github.com/JS-DevTools/readdir-enhanced)
[JS-DevTools/file-path-filter: Filters file paths using globs, regular expressions, or custom criteria](https://github.com/JS-DevTools/file-path-filter)

[micromatch/micromatch: Highly optimized wildcard and glob matching library. Faster, drop-in replacement to minimatch and multimatch. Used by square, webpack, babel core, yarn, jest, taro, bulma, browser-sync, documentation.js, stylelint, nyc, ava, and many others! Please follow micromatch's author: https://github.com/jonschlinkert](https://github.com/micromatch/micromatch)
[isaacs/minimatch: a glob matcher in javascript](https://github.com/isaacs/minimatch)

[sindresorhus/multimatch: Extends minimatch.match() with support for multiple patterns](https://github.com/sindresorhus/multimatch) 😴inactive
[sindresorhus/globby: User-friendly glob matching](https://github.com/sindresorhus/globby)

### file system watcher

[gajus/turbowatch: Extremely fast file change detector and task orchestrator for Node.js.](https://github.com/gajus/turbowatch)
[paulmillr/chokidar: Minimal and efficient cross-platform file watching library](https://github.com/paulmillr/chokidar)
[lukeed/watchlist: Recursively watch a list of directories & run a command on any file system changes](https://github.com/lukeed/watchlist) 😴inactive
[Conduitry/cheap-watch: If it works, why use something else?](https://github.com/Conduitry/cheap-watch) 😴inactive
[Qard/onchange: Use glob patterns to watch file sets and run a command when anything is added, changed or deleted.](https://github.com/Qard/onchange) 😴inactive

[remy/nodemon: Monitor for any changes in your node.js application and automatically restart the server - perfect for development](https://github.com/remy/nodemon/) chokidar and minimatch
[open-cli-tools/chokidar-cli: Fast cross-platform cli utility to watch file system changes](https://github.com/open-cli-tools/chokidar-cli)

```sh
nodemon diagram.plantuml -x \"plantuml\"
nodemon diagram.png -x \"xdg-open\"
nodemon.js -e ts --exec tsc
nodemon --watch 'src/**/*.ts' --exec node --inspect -r ts-node/register src/server.ts
```

`nodemon.json` to monitor more file types:

```json
{ "ext": "html,css,js,cjs,mjs,json,pug" }
```

## Database/ORM

[[prisma]]
[[sql#ORM (or not)]]

[I tried 8 different Postgres ORMs - YouTube](https://www.youtube.com/watch?v=4QN1BzxF8wM)
[Top 11 Node.js ORMs, Query Builders & Database Libraries in 2021](https://www.prisma.io/dataguide/database-tools/top-nodejs-orms-query-builders-and-database-libraries)
[The best TypeScript ORMs - LogRocket Blog](https://blog.logrocket.com/best-typescript-orms/)
[Which JavaScript ORM should you be using in 2018?](https://www.freecodecamp.org/news/a-comparison-of-the-top-orms-for-2018-19c4feeaa5f)
[From TypeORM to LoopBack: A Retrospective – Hacker Noon](https://hackernoon.com/from-typeorm-to-loopback-a-retrospective-188ea18527a2)

[Schniz/cuery: A composable SQL query builder using template literals](https://github.com/Schniz/cuery)
[Sequelize | The Node.js / io.js ORM for PostgreSQL, MySQL, SQLite and MSSQL](https://sequelize.readthedocs.io/)

[Knex.js - A SQL Query Builder for Javascript](http://knexjs.org/)
[Bookshelf.js](http://bookshelfjs.org/) built on Knex
[Objection.js](https://vincit.github.io/objection.js/) built on Knex

[Kysely | Kysely](https://kysely.dev/) inspred by Knex, model typing
[kysely-org/kysely: A type-safe typescript SQL query builder](https://github.com/kysely-org/kysely)

[MikroORM: TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns. | MikroORM](https://mikro-orm.io/)

[typeorm/typeorm: ORM for TypeScript and JavaScript (ES7, ES6, ES5). Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, WebSQL databases. Works in NodeJS, Browser, Ionic, Cordova and Electron platforms.](https://github.com/typeorm/typeorm)
[Setting up a basic TypeORM starter](https://daily-dev-tips.com/posts/setting-up-a-basic-typeorm-starter/)
[TypeORM: Object-relational mapping with Node.js - LogRocket Blog](https://blog.logrocket.com/typeorm-object-relational-mapping-node-js/)

[PlanetScale serverless driver for JavaScript — PlanetScale Documentation](https://planetscale.com/docs/tutorials/planetscale-serverless-driver)
[planetscale/database-js: A Fetch API-compatible PlanetScale database driver](https://github.com/planetscale/database-js) fixes Prisma's slow cold start problem
[Let's Talk About Database Performance - YouTube](https://www.youtube.com/watch?v=3P7jnolWfHw)

### Drizzel ORM

[DrizzleORM - next gen TypeScript ORM](https://orm.drizzle.team/)
[drizzle-team/drizzle-orm: TypeScript ORM for SQL](https://github.com/drizzle-team/drizzle-orm) Prisma alternative, less toolchain reliance

[I Have A New Favorite Database Tool - YouTube](https://www.youtube.com/watch?v=_SLxGYzv6jo)
[Drizzle ORM First impressions - migrations, relations, queries! - YouTube](https://www.youtube.com/watch?v=Qo-RXkSwOtc)
[This Drizzle ORM feature is a game changer! - YouTube](https://www.youtube.com/watch?v=O9zxsSl9zgE&pp=ygUHZHJpenpsZQ%3D%3D)
