---
title: Unicode
description: ""
created: 2015-06-05
updated: 2025-02-16
tags:
  - comp/lang
  - emoji
  - unicode
---

[Unicode - Wikiwand](https://www.wikiwand.com/en/Unicode)
[Universal Character Set characters - Wikiwand](http://www.wikiwand.com/en/Universal_Character_Set_characters)
[Code point - Wikiwand](http://www.wikiwand.com/en/Code_point)
[BMP](<http://www.wikiwand.com/en/Plane_(Unicode)#/Basic_Multilingual_Plane>)
[SMP](<http://www.wikiwand.com/en/Plane_(Unicode)#/Supplementary_Multilingual_Plane>)
[Astral Planes](http://www.opoudjis.net/unicode/unicode_astral.html)

[𝚚𝚠𝚎𝚛𝚝𝚢.𝚍𝚎𝚟](https://qwerty.dev/)

[Plain Text • Dylan Beattie • GOTO 2023 - YouTube](https://www.youtube.com/watch?v=4mRxIgu9R70) ❗!important, 43:11, ASCII history, code page, Unicode, sorting, normalization, encoding, emoji, ligatures
[Plain Text - Dylan Beattie - NDC Copenhagen 2022 - YouTube](https://www.youtube.com/watch?v=gd5uJ7Nlvvo)
[Code page - Wikiwand](https://www.wikiwand.com/en/code%20page)
In ASCII days, code pages define what the top half of ASCII represents. It is sometimes bound to a particular use case/app.

[Characters, Symbols and the Unicode Miracle - Computerphile - YouTube](https://www.youtube.com/watch?v=MijmeoH9LT4)
[EXTRA BITS - UTF-8 'nearly' works - Computerphile - YouTube](https://www.youtube.com/watch?v=qBex3IDaUbU)
[Unicode, in friendly terms: ASCII, UTF-8, code points, character encodings, and more - YouTube](https://www.youtube.com/watch?v=ut74oHojxqo)
[These Keys Shouldn't Exist | Nostalgia Nerd - YouTube](https://www.youtube.com/watch?v=BktIY7VbrUs) ASCII and broken pipe character, lingering as non-ASCII (Code page 437) for IBM PCs
[Plain Text - Dylan Beattie - NDC Oslo 2021 - YouTube](https://www.youtube.com/watch?v=_mZBa3sqTrI) from encoding to Unicode, composition form, normalization form, UTF8, emoji
[锟斤拷 �⊠ 是怎样炼成的——中文显示「⼊」门指南【柴知道】 - YouTube](https://www.youtube.com/watch?v=zSstXi-j7Qc)

<kbd>Alt</kbd> + `Code point` to input unicode character

[Special Characters Ø, ©, ±, °… [PC] | Tim Bird](https://timbobtastic.com/hints-and-tips/special-characters-o-%C2%B1-pc/)

[Programming with Unicode — Programming with Unicode](http://unicodebook.readthedocs.io/index.html)
[The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!) – Joel on Software](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/) !important
[What every JavaScript developer should know about Unicode](https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/)
[Legacy Character Models and an Introduction to Unicode - Slide list](http://www.cip.ifi.lmu.de/~bolzer/unicode_intro/slides/Overview-5.html)

From Python PEP-261:

```md
**Character**

Used by itself, means the addressable units of a Python Unicode string.

**Code point**

A code point is an integer between 0 and TOPCHAR. If you imagine Unicode as a mapping from integers to characters, each integer is a code point. But the integers between 0 and TOPCHAR that do not map to characters are also code points. Some will someday be used for characters. Some are guaranteed never to be used for characters.

**Codec**

A set of functions for translating between physical encodings (e.g. on disk or coming in from a network) into logical Python objects.

**Encoding**

Mechanism for representing abstract characters in terms of physical bits and bytes. Encodings allow us to store Unicode characters on disk and transmit them over networks in a manner that is compatible with other Unicode software.

**Surrogate pair**

Two physical characters that represent a single logical character. Part of a convention for representing 32-bit code points in terms of two 16-bit code points.

**Unicode string**

A Python type representing a sequence of code points with "string semantics" (e.g. case conversions, regular expression compatibility, etc.) Constructed with the unicode() function.
```

[&what: Discover Unicode & HTML Character Entities](http://www.amp-what.com/)
[Math Unicode Entities](http://symbolcodes.tlt.psu.edu/bylanguage/mathchart.html)

[Unify – Unicode support on browsers and devices](http://unicode.johnholtripley.co.uk/)

[表意文字小組 - Wikiwand](https://www.wikiwand.com/zh/%E8%A1%A8%E6%84%8F%E6%96%87%E5%AD%97%E5%B0%8F%E7%B5%84)
[中日韓統一表意文字 - Wikiwand](https://www.wikiwand.com/zh/%E4%B8%AD%E6%97%A5%E9%9F%93%E7%B5%B1%E4%B8%80%E8%A1%A8%E6%84%8F%E6%96%87%E5%AD%97)
[UAX #38: Unicode Han Database (Unihan)](http://www.unicode.org/reports/tr38/)

## Tools

[Unicode Search 🔎](http://xahlee.info/comp/unicode_index.html?q=)
[c2nes/unichoose: Search Unicode characters using Rofi and fzf](https://github.com/c2nes/unichoose)

## Combining Marks/Normalization

[Combining character - Wikiwand](https://www.wikiwand.com/en/Combining_character)
[Zalgo Text Generator ― LingoJam](https://lingojam.com/ZalgoText) 😄funny

[FAQ - Normalization](http://www.unicode.org/faq/normalization.html)
[Unicode equivalence - Wikiwand](https://www.wikiwand.com/en/Unicode_equivalence)
[String.prototype.normalize() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)

[UAX #15: Unicode Normalization Forms](http://unicode.org/reports/tr15/)

Normal Form Decomposed (NFD): `é` (U+00E9) = `e` + ` ́` (U+0065 U+0301).

NFC — Normalization Form Canonical Composition, largest number of code points
NFD — Normalization Form Canonical Decomposition, smallest number of code points
NFKC — Normalization Form Compatibility Composition.
NFKD — Normalization Form Compatibility Decomposition.

[Unicode Normalization forms - C# - OneCompiler](https://onecompiler.com/csharp/3zs9ccwc6)
[dotnet_summit_by.cs](https://gist.github.com/dylanbeattie/336b6b8990f0db6dd00d238ad114092a)

[Unicode 相容字元 - Wikiwand](https://www.wikiwand.com/zh/Unicode%E7%9B%B8%E5%AE%B9%E5%AD%97%E7%AC%A6)
[Unicode compatibility characters - Wikiwand](https://www.wikiwand.com/en/Unicode_compatibility_characters)

Allows multiple glyphs for one code point
[異體字選擇器 - Wikiwand](https://www.wikiwand.com/zh/%E7%95%B0%E9%AB%94%E5%AD%97%E9%81%B8%E6%93%87%E5%99%A8)
[Variant form (Unicode) - Wikiwand](<https://www.wikiwand.com/en/Variant_form_(Unicode)>)

## Encoding

[UTF-8 - Wikiwand](http://www.wikiwand.com/en/UTF-8)
[UTF-16 - Wikiwand](http://www.wikiwand.com/en/UTF-16)
[Surrogates](http://www.wikiwand.com/en/Universal_Character_Set_characters#/Surrogates)

[RFC 3629 - UTF-8, a transformation format of ISO 10646](https://datatracker.ietf.org/doc/html/rfc3629)

[Byte order mark - Wikiwand](https://www.wikiwand.com/en/Byte_order_mark)
[FAQ - UTF-8, UTF-16, UTF-32 & BOM](http://www.unicode.org/faq/utf_bom.html#BOM)
[UTR#17: Unicode Character Encoding Model](https://www.unicode.org/reports/tr17/)

[research!rsc: UTF-8: Bits, Bytes, and Benefits](https://research.swtch.com/utf8)
[Hello World or Καλημέρα κόσμε or こんにちは 世界](https://9p.io/sys/doc/utf.html)

### Punycode Domain Name

[Punycode - Wikiwand](https://www.wikiwand.com/en/Punycode)

[RFC 3492 - Punycode: A Bootstring encoding of Unicode for Internationalized Domain Names in Applications (IDNA)](https://datatracker.ietf.org/doc/html/rfc3492)
[Punycode converter (IDN converter), Punycode to Unicode 🔧](https://www.punycoder.com/)

[Phishing with Unicode Domains - Xudong Zheng](https://www.xudongz.com/blog/2017/idn-phishing/)
[Internationalized Domain Names (IDN) in Google Chrome](https://chromium.googlesource.com/chromium/src/+/main/docs/idn.md)

[Why You Can't Visit 💀🎺.com - YouTube](https://www.youtube.com/watch?v=y4393bPetoU) emoji allowed in `.tk`, `.to`, `.ws`

## Emoji

[Emoji - Wikiwand](https://www.wikiwand.com/en/Emoji)
[How emoji conquered the world | The Verge](http://www.theverge.com/2013/3/4/3966140/how-emoji-conquered-the-world)
[The Oral History Of The Poop Emoji (Or, How Google Brought Poop To America) | Fast Company | Business + Innovation](http://www.fastcompany.com/3037803/the-oral-history-of-the-poop-emoji-or-how-google-brought-poop-to-america)
[Emoji and the Levitating Businessman - Computerphile - YouTube](https://www.youtube.com/watch?v=tITwM5GDIAI)

Black Woman Astronaut = Woman (U+1F469) + Dark Skin Tone (U+1F3FF) + Zero Width Joiner (U+200D) + Rocket (U+1FD80D)

[iEmoji.com](https://www.iemoji.com/)
[Emoji searcher](https://emoji.muan.co/)
[📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍](https://emojipedia.org/)
[😋 Get Emoji — List of all Emojis to ✂ Copy and 📋 Paste 👌](https://getemoji.com/)
[emojidex - custom emoji service and apps](https://www.emojidex.com/)
[Full Emoji List, v14.0](https://www.unicode.org/emoji/charts/full-emoji-list.html)

[🎁 Emoji cheat sheet for GitHub, Basecamp, Slack & more](https://www.webfx.com/tools/emoji-cheat-sheet/)

[Intro to Emoji URLs - DEV Community](https://dev.to/ra101/intro-to-emoji-urls-10c9)
[The 150 Most Popular Emojis Explained](https://www.makeuseof.com/top-emojis-explained-cheat-sheet/)

### Library

[muan/mojibar: Emoji searcher but as a menubar app.](https://github.com/muan/mojibar)

[Twemoji](https://twemoji.twitter.com/)
[twitter/twemoji: Emoji for everyone. https://twemoji.twitter.com/](https://github.com/twitter/twemoji)
[Open sourcing Twitter emoji for everyone](https://blog.twitter.com/developer/en_us/a/2014/open-sourcing-twitter-emoji-for-everyone)
[JoyPixels® - Freemium emoji icons. Emoji font licensing.](https://www.joypixels.com/)

[NeelShah18/emot: Open source Emoticons and Emoji detection library: emot](https://github.com/NeelShah18/emot)

[omnidan/node-emoji: simple emoji support for node.js projects](https://github.com/omnidan/node-emoji)
[denosaurs/emoji: 🦄 Emojis for dinosaurs](https://github.com/denosaurs/emoji)

### Font

[android - CSS reference to phone's Emoji font? - Stack Overflow](https://stackoverflow.com/questions/27688046/css-reference-to-phones-emoji-font)

[jslegers/emoji-icon-font: An experimental icon font](https://github.com/jslegers/emoji-icon-font)
[Twemoji Awesome | Like Font Awesome, but for Twitter Emoji.](http://ellekasai.github.io/twemoji-awesome/)
[EmojiSymbols Font](https://emojisymbols.com/)
[MorbZ/OpenSansEmoji: OpenSans based font which includes the full iOS Emoji set](https://github.com/MorbZ/OpenSansEmoji)
[EmojiSymbols Font](https://emojisymbols.com/)
[Google Noto Fonts - Noto Emoji](https://www.google.com/get/noto/#emoji-zsye)
[Google Noto Fonts - Noto Color Emoji](https://www.google.com/get/noto/#emoji-zsye-color)

[Emoji on the Web – Making Faces (and Other Emoji) – Medium](https://medium.com/making-faces-and-other-emoji/emoji-on-the-web-537c5769dffa)

## Character Table

[Unicode character table](http://unicode-table.com/en/)
[Unicode/UTF-8-character table](https://www.utf8-chartable.de/)
[Unicodinator](http://unicodinator.com/)
[Find all Unicode characters from Hieroglyphs to Dingbats – Codepoints](https://codepoints.net/)
[Unicode codepoint lookup/search tool](http://unicode.scarfboy.com/)
[&what: Discover Unicode & HTML Character Entities](http://www.amp-what.com/)
[Unicode Characters ☯ ⚡ ∑ ♥ 😄](http://xahlee.info/comp/unicode_index.html)
[&what: Discover Unicode & HTML Character Entities](http://www.amp-what.com/)
[Graphemica - For people who ♥ letters, numbers, punctuation, &c](http://graphemica.com/)
[Code Charts](http://www.unicode.org/charts/) (Unicode official one, PDFs)
[List of Unicode characters - Wikiwand](https://www.wikiwand.com/en/List_of_Unicode_characters)
[Unicode Table](http://www.tamasoft.co.jp/en/general-info/unicode.html)
[Unicode/UTF-8-character table](http://www.utf8-chartable.de/unicode-utf8-table.pl?number=1024&unicodeinhtml=hex)

[Typography Cheatsheet → A Comprehensive Guide to Smart Quotes, Dashes & Other Typographic Characters → Typewolf](http://www.typewolf.com/cheatsheet)
[Keycodes - Javascript Keyboard Codes, Character Codes, Unicode, HTML Entities](http://keycodes.atjayjo.com/)
[HTML Symbols – HTML Icon and Entity Code List](https://www.freecodecamp.org/news/html-symbols-html-icon-and-entity-code-list/)

[Shapecatcher: Draw the Unicode character you want!](http://shapecatcher.com/)

### Guobiao

[國家標準代碼 - Wikiwand](https://www.wikiwand.com/zh/国家标准代码)
[国标码查询；汉字国家标准编码：GB2312、GBK、GB18030](https://www.qqxiuzi.cn/bianma/guobiaoma.php)

2 bytes per character, with leading bit 1

## Sorting

[UTS #10: Unicode Collation Algorithm](http://www.unicode.org/reports/tr10/) sorting

[为什么汉字的“一二三四五六七八九十”的字典顺序和数字顺序不一致，而是“一七三九二五八六十四”？ - 知乎](https://www.zhihu.com/question/533802849/answer/2669904119)

| 汉字 | UTF编码  |
| ---- | -------- |
| 一   | `0x4e00` |
| 二   | `0x4e8c` |
| 三   | `0x4e09` |
| 四   | `0x56db` |
| 五   | `0x4e94` |
| 六   | `0x516d` |
| 七   | `0x4e03` |
| 八   | `0x516b` |
| 九   | `0x4e5d` |
| 十   | `0x5341` |
