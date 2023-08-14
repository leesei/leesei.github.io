---
title: SQL
description: ""
created: 2017-06-02
updated: 2023-08-13
tags:
  - comp/lang
  - sql
---

> mysql and mariadb are the most popular dialects

[SQL - Wikiwand](https://www.wikiwand.com/en/SQL)
[We Can Do Better Than SQL](https://edgedb.com/blog/we-can-do-better-than-sql/)

[List of SQLite Syntax Diagrams](https://www.sqlite.org/syntax.html)
[SQLite Syntax: sql-stmt](https://www.sqlite.org/syntax/sql-stmt.html)
[WWW SQL Designer](https://ondras.zarovi.cz/sql/demo/)
[Database.Guide](https://database.guide/)

[The Magic of SQL - YouTube](https://www.youtube.com/c/TheMagicofSQL)
[Basic SQL queries - SQL programming for beginners - YouTube](https://www.youtube.com/watch?v=tK-HXzuUunI)
[you need to learn SQL RIGHT NOW!! (SQL Tutorial for Beginners) - YouTube](https://www.youtube.com/watch?v=xiUTqnI6xk8)
[SQL basics and creating a simple database - SQL programming for beginners - YouTube](https://www.youtube.com/watch?v=sHQhc5Jz6SQ)
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

[harelba/q: q - Run SQL directly on CSV or TSV files](https://github.com/harelba/q)

## Tips and Tricks

[Stop using COUNT(id) to count rows - YouTube](https://www.youtube.com/watch?v=H6juZ8c_Nu8) `SELECT COUNT(*)` allows the optimizer to choose the best way to compute the value

[Falling in Love with SQL Again. By harnessing the power of Common Table… | by Jeremy Dorn | Oct, 2021 | Towards Data Science](https://towardsdatascience.com/falling-in-love-with-sql-again-169d7fa56e47) creating temporary tables,

```sql
WITH
  cte1 as (SELECT …),
  cte2 as (SELECT …)
SELECT * FROM cte1 JOIN cte2
```

## SQL injection

[SQL injection - Wikiwand](http://www.wikiwand.com/en/SQL_injection)
[SQL injection techniques - Getting started with SQL injection - YouTube](https://www.youtube.com/watch?v=05SmIqGX4zQ)
[Step-by-step SQL injection guide to bypassing basic login screen - Mastering SQL injection - YouTube](https://www.youtube.com/watch?v=SJgYdTckMBY)
[Web Security Academy - SQL Injection (Long Version) - YouTube](https://www.youtube.com/playlist?list=PLuyTk2_mYISLaZC4fVqDuW_hOk0dd5rlf)

[7 essential SQL Server security tips | InfoWorld](http://www.infoworld.com/article/2953834/database/7-essential-sql-server-security-tips.html#tk.ifw-infsb)

[Preventing SQL Injection Attacks With Python – Real Python](https://realpython.com/prevent-python-sql-injection/)

[sqlmap: automatic SQL injection and database takeover tool](https://sqlmap.org/)

## Clients/IDE

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

### Sqlite

[DB Browser for SQLite](http://sqlitebrowser.org/)
[SQLiteStudio](https://sqlitestudio.pl/)
