---
title: SQLite
description: ""
created: 2023-09-26
updated: 2025-10-10
tags:
  - comp/database
  - postgresql
  - sql
---

[SQLite Home Page](https://www.sqlite.org/)
[SQLite - Wikiwand](https://www.wikiwand.com/en/sqlite#Media/File:Sqlite3_command_screenshot.png)

[SQLite Tutorial - An Easy Way to Master SQLite Fast](https://www.sqlitetutorial.net/)
[SQLite Tutorial - Tutorialspoint](https://www.tutorialspoint.com/sqlite/index.htm)

[Many Small Queries Are Efficient In SQLite](https://www.sqlite.org/np1queryprob.html)
[The SQLite OS Interface or "VFS"](https://www.sqlite.org/vfs.html)
[JSON Functions And Operators](https://www.sqlite.org/json1.html) included in 3.38 (2022-02)
[List of SQLite Syntax Diagrams](https://www.sqlite.org/syntax.html)
[SQLite Syntax: sql-stmt](https://www.sqlite.org/syntax/sql-stmt.html)

[How does SQLite work? Part 1: pages! - Julia Evans](http://jvns.ca/blog/2014/09/27/how-does-sqlite-work-part-1-pages/)
[The Origin of SQLite, the World’s Most Widely-Used Database – The New Stack](https://thenewstack.io/the-origin-story-of-sqlite-the-worlds-most-widely-used-database-software/)
[Why you should use SQLite | InfoWorld](https://www.infoworld.com/article/3331923/database/why-you-should-use-sqlite.html)
[Why SQLite may become foundational for digital progress | VentureBeat](https://venturebeat.com/2022/05/20/why-sqlite-may-become-foundational-for-digital-progress/)
[A Guide to Working with SQLite Databases in Python - KDnuggets](https://www.kdnuggets.com/a-guide-to-working-with-sqlite-databases-in-python)

[A hands-on tutorial of SQLite3 | Opensource.com](https://opensource.com/article/21/2/sqlite3-cheat-sheet)
[SQLite Tutorial - An Easy Way to Master SQLite Fast](https://www.sqlitetutorial.net/)

[kripken/sql.js: SQLite compiled to JavaScript through Emscripten](https://github.com/kripken/sql.js)
[mapbox/node-sqlite3: Asynchronous, non-blocking SQLite3 bindings for Node.js](https://github.com/mapbox/node-sqlite3)
[Using SQLite /w Node.js for Rapid Prototyping — Medium](https://medium.com/@tarkus/node-js-and-sqlite-for-rapid-prototyping-bc9cf1f26f10#.3l86qh41a)

[sqlite-utils documentation](https://sqlite-utils.datasette.io/en/stable/) Python

[Why SQLite succeeded as a database with Richard Hipp, creator of SQLite (Changelog Interviews #201)](https://changelog.com/podcast/201)

## libSQL

[SQLite and its weird new fork “libSQL” - YouTube](https://www.youtube.com/watch?v=PGpL5hYpY1o)

## GUI Client

> prefer multi-db client [[database#UI Client]]

[SqliteMan](https://sqliteman.dev/)
[SQLiteStudio](https://sqlitestudio.pl/)
[DB Browser for SQLite](http://sqlitebrowser.org/)

[db<>fiddle](https://dbfiddle.uk/) SQL fiddle

### Datasette

[simonw/datasette: A tool for exploring and publishing data](https://github.com/simonw/datasette)
[Datasette — Datasette documentation](https://docs.datasette.io/en/stable/#)
[Simon Willison: Datasette and Datasette Publish - YouTube](https://www.youtube.com/watch?v=_uwrqB--eM4)
[Datasette: instantly create and publish an API for your SQLite databases](https://simonwillison.net/2017/Nov/13/datasette/)

[Datasette Lite](https://lite.datasette.io/) runs Datasette in browser with Pyodide
[Datasette Lite: a server-side Python web application running in a browser](https://simonwillison.net/2022/May/4/datasette-lite/)

## CLI client

[Command Line Shell For SQLite](https://www.sqlite.org/cli.html)
[SQLite commands and general usage](https://www.pantz.org/software/sqlite/sqlite_commands_and_general_usage.html)
[SQLite - the sqlite3 command line tool](https://zetcode.com/db/sqlite/tool/)

```
sqlite> .mode
Error: mode should be one of: ascii column csv html insert line list tabs tcl
sqlite> .mode LIST
sqlite> .headers ON
sqlite> .tables
sqlite> PRAGMA table_info(Table);
```

Or specify when invoking `sqlite`: `sqlite3 -list -header <db>`

[LiteCLI](https://litecli.com/)
[dbcli/litecli: CLI for SQLite Databases with auto-completion and syntax highlighting](https://github.com/dbcli/litecli)
[LiteCLI - SQLite Client with Autocomplete](https://www.i-programmer.info/news/90-tools/12477-litecli-sqlite-client-with-auto-completion.html)

[sqlite-utils command-line tool - sqlite-utils](https://sqlite-utils.datasette.io/en/stable/cli.html)

## Application

[crawshaw - 2018-07-30](https://crawshaw.io/blog/one-process-programming-notes)

[I'm All-In on Server-Side SQLite · The Fly Blog](https://fly.io/blog/all-in-on-sqlite-litestream/)

## Scaling

[Litestream - Streaming SQLite Replication](https://litestream.io/)
[How it works - Litestream](https://litestream.io/how-it-works/)

[I'm All-In on Server-Side SQLite · Fly](https://fly.io/blog/all-in-on-sqlite-litestream/)

[superfly/litefs: FUSE-based file system for replicating SQLite databases across a cluster of machines](https://github.com/superfly/litefs)
[litefs/ARCHITECTURE.md at main · superfly/litefs](https://github.com/superfly/litefs/blob/main/docs/ARCHITECTURE.md)
[Introducing LiteFS · Fly](https://fly.io/blog/introducing-litefs/)
