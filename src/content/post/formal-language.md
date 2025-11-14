---
title: Formal Language
description: ""
created: 2019-06-18
updated: 2025-10-10
tags:
  - comp/lang
  - formal-language
---

[[bnf]]
[[regex]]

[Compiler-compiler - Wikiwand](https://www.wikiwand.com/en/Compiler-compiler)
[A Guide To Parsing: Algorithms And Terminology](https://tomassetti.me/guide-parsing-algorithms-terminology/)

[Parsing expression grammar - Wikiwand](https://www.wikiwand.com/en/Parsing_expression_grammar) PEG

[Earley parser - Wikiwand](https://www.wikiwand.com/en/Earley_parser)
[LR parser - Wikiwand](https://www.wikiwand.com/en/LR_parser)
[Simple LR parser - Wikiwand](https://www.wikiwand.com/en/SLR_parser)
[LALR parser - Wikiwand](https://www.wikiwand.com/en/LALR_parser)

[LALR parser generator - Wikiwand](https://www.wikiwand.com/en/LALR_parser_generator)
[Comparison of parser generators - Wikiwand](https://www.wikiwand.com/en/Comparison_of_parser_generators)

[Parser Combinators are Easy - DEV Community 👩‍💻👨‍💻](https://dev.to/deciduously/parser-combinators-are-easy-4bjm)

[Create Your Own Expression Parser - Level Up Coding](https://levelup.gitconnected.com/create-your-own-expression-parser-d1f622077796)
[cosinekitty/parser: Parse math expressions and render them using MathJax.](https://github.com/cosinekitty/parser)
[Expression Parser Demo](https://doncross.net/parser/)

[PEG Parsing Series Overview. My series of blog posts about PEG… | by Guido van Rossum | Medium](https://medium.com/@gvanrossum_83706/peg-parsing-series-de5d41b2ed60)

## Tree-sitter

[Tree-sitter ｜ Introduction](https://tree-sitter.github.io/tree-sitter/) able to parse invalid input, various language bindings

[smacker/go-tree-sitter: Golang bindings for tree-sitter https://github.com/tree-sitter/tree-sitter](https://github.com/smacker/go-tree-sitter)
[tree-sitter/py-tree-sitter: Python bindings to the Tree-sitter parsing library](https://github.com/tree-sitter/py-tree-sitter)

## ANTLR

[ANTLR](https://www.antlr.org/)
[antlr/antlr4-tools: Tools to run antlr4 w/o needing to install java or antlr4!](https://github.com/antlr/antlr4-tools) Python implementation
[antlr4/doc/getting-started.md at master · antlr/antlr4](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)
[The ANTLR Mega Tutorial](https://tomassetti.me/antlr-mega-tutorial/)

[antlr/grammars-v4: Grammars written for ANTLR v4; expectation that the grammars are free of actions.](https://github.com/antlr/grammars-v4)

[Antlr grammars in Rust : rust](https://www.reddit.com/r/rust/comments/cobadh/antlr_grammars_in_rust/)

[yaklang/common/suricata at main · yaklang/yaklang](https://github.com/yaklang/yaklang/tree/main/common/suricata)

```sh
antlr -Dlanguage=Go ./SuricataRuleLexer.g4 ./SuricataRuleParser.g4 -o parser -no-listener -visitor
```

## Lark

> Python

[lark-parser/lark: Lark is a parsing toolkit for Python, built with a focus on ergonomics, performance and modularity.](https://github.com/lark-parser/lark)
[Welcome to Lark’s documentation! — Lark documentation](https://lark-parser.readthedocs.io/en/stable/)

[lark-parser/lark_cython: Cython plugin for Lark, reimplementing the LALR parser & lexer for better performance](https://github.com/lark-parser/lark_cython)

[Python Lark Parser introduction - DEV Community](https://dev.to/vicentemaldonado/python-lark-parser-introduction-2g4e)
[How to write a DSL (in Python with Lark) • Infinitely Abstract](http://blog.erezsh.com/how-to-write-a-dsl-in-python-with-lark/)
[Writing a parser for CS:GO files - Rico’s blog](https://blog.rico-j.de/writing-a-parser/)

[parsuricata/parsuricata/\_parser.py at master · theY4Kman/parsuricata](https://github.com/theY4Kman/parsuricata/blob/master/parsuricata/_parser.py)

## TatSu

> Python

[竜 TatSu — 竜 TatSu documentation](https://tatsu.readthedocs.io/en/stable/)

## Boost Spirit

[Boost Spirit](https://www.boost.org/doc/libs/1_85_0/libs/spirit/doc/html/spirit/introduction.html)

## GNU Bison

[GNU Bison - Wikiwand](https://www.wikiwand.com/en/GNU_Bison)
[Bison - GNU Project - Free Software Foundation](https://www.gnu.org/software/bison/)

## Go

[ebnf package - golang.org/x/exp/ebnf - Go Packages](https://pkg.go.dev/golang.org/x/exp/ebnf)
[ebnf package - github.com/PuerkitoBio/ebnf - Go Packages](https://pkg.go.dev/github.com/PuerkitoBio/ebnf)

## nearley

[Home - nearley.js - JS Parsing Toolkit](https://nearley.js.org/)
[kach/nearley: 📜🔜🌲 Simple, fast, powerful parser toolkit for JavaScript.](https://github.com/kach/nearley)

[Writing a parser - nearley.js - JS Parsing Toolkit](https://nearley.js.org/docs/grammar)

## Lax/Yacc

> replaced by Bison/Flex?

[Lex (software) - Wikiwand](<https://www.wikiwand.com/en/articles/Lex_(software)>)
[Yacc - Wikiwand](https://www.wikiwand.com/en/articles/Yacc)

[编译原理工具系列(1)——lex | 楚权的世界](https://chuquan.me/2022/06/22/compiler-principle-tool-lex/)
[编译原理工具系列(2)——yacc | 楚权的世界](https://chuquan.me/2022/07/10/compiler-principle-tool-yacc/)

[Introduction to YACC | GeeksforGeeks](https://www.geeksforgeeks.org/introduction-to-yacc/)
[凹语言版本 yacc 简介 - 以表达式解析为例 | 凹语言](https://wa-lang.org/smalltalk/st0021.html)

---

## Log Parsing

### Rust

[Parsing logs 230x faster with Rust](https://www.cloudcity.io/blog/2018/11/08/parsing-logs-230x-faster-with-rust/)
[Geal/nom: Rust parser combinator framework](https://github.com/Geal/nom)

### Python

[Logparser’s Documentation — logparser 0.1 documentation](https://logparser.readthedocs.io/en/latest/README.html)
[logpai/logparser: A toolkit for automated log parsing [ICSE'19, TDSC'18, DSN'16]](https://github.com/logpai/logparser)

[logparser/demo at master · logpai/logparser](https://github.com/logpai/logparser/tree/master/demo) usage

[BlueLionLogram/Logram: Efficient Log Parsing Using n-Gram Dictionaries](https://github.com/BlueLionLogram/Logram)
[[2001.03038] Logram: Efficient Log Parsing Using n-Gram Dictionaries](https://arxiv.org/abs/2001.03038)

[pylogsparser · PyPI](https://pypi.org/project/pylogsparser/)
