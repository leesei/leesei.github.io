---
title: SQL
description: On the Query Language
created: 2017-06-02
updated: 2024-10-03
tags:
  - comp/lang
  - sql
---

> mysql and mariadb are the most popular dialects
> see [[cyber-security#SQL injection]] for security concerns

[SQL - Wikiwand](https://omni.wikiwand.com/en/SQL)
[We Can Do Better Than SQL](https://edgedb.com/blog/we-can-do-better-than-sql/)

[WWW SQL Designer](https://ondras.zarovi.cz/sql/demo/)
[Database.Guide](https://database.guide/)

[PlanetScale - YouTube](https://www.youtube.com/@PlanetScale) many SQL tricks
[PlanetScale 🤝 YouTube — PlanetScale](https://planetscale.com/youtube) SQL course

[Roadmap for Learning SQL - YouTube](https://www.youtube.com/watch?v=yMqldbY2AAg)
[Secret To Optimizing SQL Queries - Understand The SQL Execution Order - YouTube](https://www.youtube.com/watch?v=BHwzDmr6d7s)

[The Magic of SQL - YouTube](https://www.youtube.com/c/TheMagicofSQL)
[Basic SQL queries - SQL programming for beginners - YouTube](https://www.youtube.com/watch?v=tK-HXzuUunI)
[you need to learn SQL RIGHT NOW!! (SQL Tutorial for Beginners) - YouTube](https://www.youtube.com/watch?v=xiUTqnI6xk8)
[SQL basics and creating a simple database - SQL programming for beginners - YouTube](https://www.youtube.com/watch?v=sHQhc5Jz6SQ)
[SQL for Data Analytics - Learn SQL in 4 Hours - YouTube](https://www.youtube.com/watch?v=7mz73uXD9DA)

[Intro to SQL: Querying and managing data | Khan Academy](https://www.khanacademy.org/computing/computer-programming/sql)
[Learn SQL | Codecademy](https://www.codecademy.com/learn/learn-sql)
[Using SQL for Lightweight Data Analysis | School of Data - Evidence is Power](http://schoolofdata.org/2013/03/26/using-sql-for-lightweight-data-analysis/)
[SQL Tutorial](http://www.tutorialspoint.com/sql/)
[SQL Structure and Commands - MariaDB Knowledge Base](https://mariadb.com/kb/en/mariadb/sql-structure-and-commands/)
[SQL Tutorial | Database Tutorial | Examples](http://www.dofactory.com/sql/tutorial)
[SQL Tutorial - w3resource](https://www.w3resource.com/sql/tutorials.php)
[MySQL Resources | resources for mysql and mariadb admins and developers who are squealing for help](http://mysqlresources.com/)

[A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
[me talking out loud » Blog Archive » “Getting” Joins](http://www.khankennels.com/blog/index.php/archives/2007/04/20/getting-joins/)

[SQL Fundamentals from @iamtylerwclark on @eggheadio](https://egghead.io/courses/sql-fundamentals)
[SQL Riddles to Test Your Wits. Timestamps, dependent filters, and… | by Matt Sosna | Feb, 2023 | Towards Data Science](https://towardsdatascience.com/sql-riddles-to-test-your-wits-8ce31202ae7f)

[SQL Fiddle](http://sqlfiddle.com/)
[Format SQL Server Queries Easily - Online SQL Formatter | Devart](http://www.sql-format.com/) "Subquery" -> "Indent subquery"
[Online SQL Formatter](http://www.tutorialspoint.com/online_sql_formatter.htm)

[MySQL :: MySQL Documentation](https://dev.mysql.com/doc/)
[MySQL :: MySQL 5.7 Reference Manual :: 13 SQL Statement Syntax](https://dev.mysql.com/doc/refman/5.7/en/sql-syntax.html)

[Stop Writing SQL transactions THIS WAY! Dangerous Mistake you’re Making - YouTube](https://www.youtube.com/watch?v=R2a3soJcMU8) There are 4 transaction isolation levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE. Do a write first to actually lock the data (SERIALIZABLE). Or use `BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE`.

[harelba/q: q - Run SQL directly on CSV or TSV files](https://github.com/harelba/q)

## ORM (or not)

[SQL vs ORMs vs Query Builders | Compare | Prisma's Data Guide](https://www.prisma.io/dataguide/types/relational/comparing-sql-query-builders-and-orms)

[Why you should avoid ORMs (with examples in Node.js)](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5)
Low level: Database Driver
Middle Level: Query Builder
High Level: ORM

[What ORMs have taught me: just learn SQL](https://wozniak.ca/blog/2014/08/03/1/index.html?utm_source=tuicool&amp%3Butm_medium=referral)
[DONT USE AN ORM | Prime Reacts - YouTube](https://www.youtube.com/watch?v=bpGvVI7NM_k)
[The Only Database Abstraction You Need | Prime Reacts - YouTube](https://www.youtube.com/watch?v=nWchov5Do-o)

[Raw SQL, SQL Query Builder, or ORM? - YouTube](https://www.youtube.com/watch?v=x1fCJ7sUXCM)
[Object-relational Mappers (ORMs) - Full Stack Python](https://www.fullstackpython.com/object-relational-mappers-orms.html)
[Why should you use an ORM (Object Relational Mapper)? - HedgeDoc](https://monadical.com/posts/why-use-orm.html)

## Tips and Tricks

[Stop using COUNT(id) to count rows - YouTube](https://www.youtube.com/watch?v=H6juZ8c_Nu8) `SELECT COUNT(*)` allows the optimizer to choose the best way to compute the value

[Falling in Love with SQL Again. By harnessing the power of Common Table… | by Jeremy Dorn | Oct, 2021 | Towards Data Science](https://towardsdatascience.com/falling-in-love-with-sql-again-169d7fa56e47) creating temporary tables,

```sql
WITH
  cte1 as (SELECT …),
  cte2 as (SELECT …)
SELECT * FROM cte1 JOIN cte2
```

## Formatter

[sequel fumpt](https://sqlfum.pt/)
[maddyblue/sqlfmt: SQL formatter with width-aware output](https://github.com/maddyblue/sqlfmt)

## Indices

[Easy database indexing strategies - YouTube](https://www.youtube.com/watch?v=IcIkjfXoHV4)

- functional indices
- generated columns

## JOINs

left join, right join
inner join, outer join

[You don't always need JOINs - YouTube](https://www.youtube.com/watch?v=5hsl47I3svw)

- old way: join and deduplication
- new way: nested query/sub query
- `SELECT * FROM user WHERE id IN (SELECT id FROM post WHERE views > 10000)`
- `SELECT * FROM user WHERE EXISTS (SELECT id FROM post WHERE views > 10000 AND user.id = user_id)` exploiting the outside-in execution strategy

## Execution Order

[Secret To Optimizing SQL Queries - Understand The SQL Execution Order 🚀 - DEV Community](https://dev.to/kanani_nirav/secret-to-optimizing-sql-queries-understand-the-sql-execution-order-28m1)

## JSON support

[You don't need NoSQL (use MySQL) - YouTube](https://www.youtube.com/watch?v=QZBxgX2OWbI)

- SQL databases supports JSON field
- Using EAV to mimic object
  entity, attribute, value: `[(1, "type", "cat"), (1, "size", "small"),(2, "type", "dog"), (1, "size", "large")]`
- Convert EAV into JSON with `JSON_OBJECTAGG("col1", "col2") GROUP BY id`
- `'col'->'$.keypath'`: `JSON_EXTRACT()`
- `'col'->>'$.keypath'`: `JSON_UNQUOTE(JSON_EXTRACT())`
- functional indices on JSON attribute
- generated columns, stored generated columns
- set JSON column invisible (from `SELECT *`)

## Clients/IDE

[[sqlite#GUI Client]]

[Alecaddd/sequeler: SQL Client built in Vala](https://github.com/Alecaddd/sequeler)

[DbGate | Open Source (no)SQL Database Client](https://dbgate.org/) ❗!important
[dbgate/dbgate: Database manager for MySQL, PostgreSQL, SQL Server, MongoDB, SQLite and others. Runs under Windows, Linux, Mac or as web application](https://github.com/dbgate/dbgate)

[Adminer - Database management in a single PHP file](https://www.adminer.org/)
[adminer - Official Image | Docker Hub](https://hub.docker.com/_/adminer)

[DBeaver | Free Universal Database Tool](https://dbeaver.io/)
[dbeaver/dbeaver: Free universal database tool and SQL client](https://github.com/dbeaver/dbeaver)

[Sqlectron - One single DB client for any relational DB](https://sqlectron.github.io/) 😴inactive
[ohwgiles/sequeljoe: SQL administration GUI](https://github.com/ohwgiles/sequeljoe) 😴inactive

[tora-tool/tora: TOra is an open source SQL IDE for Oracle, MySQL and PostgreSQL dbs](https://github.com/tora-tool/tora) 😴inactive
[Home · tora-tool/tora Wiki](https://github.com/tora-tool/tora/wiki)

[RazorSQL - SQL Query Tool and SQL Editor for Mac, Windows, and Linux](https://razorsql.com/)

[BlocklySQL Demo: Generating SQL Code with Blocks](https://www.dbinf.informatik.uni-wuerzburg.de/google-blockly-4efa0da/sql/index.html)
[nicolaipoehner/blocklysql: The web-based visual programming editor with SQL blocks execute database queries.](https://github.com/nicolaipoehner/blocklysql) 😴inactive
