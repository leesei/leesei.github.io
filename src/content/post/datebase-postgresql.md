---
title: PostgreSQL
description: The World's Most Advanced Open Source Relational Database
created: 2023-06-18
updated: 2023-09-29
tags:
  - comp/database
  - postgresql
  - sql
---

[[psql-snippets]]

[PostgreSQL: The world's most advanced open source database](https://www.postgresql.org/)
[PostgreSQL - Wikiwand](https://www.wikiwand.com/en/PostgreSQL)
[PostgreSQL History - 2ndQuadrant | PostgreSQL](https://www.2ndquadrant.com/en/postgresql/postgresql-story/)

[PostgreSQL 12 Top Features Explained - YouTube](https://www.youtube.com/watch?v=PfbzNdrecv4)
[PostgreSQL 13 Has Some Performance Boosts! Let us discuss it! - YouTube](https://www.youtube.com/watch?v=wMbTHFXImzI)
[PostgreSQL v14 Is Faster, and Friendly to Developers – The New Stack](https://thenewstack.io/postgresql-v14-is-faster-and-friendly-to-developers/)
[PostgreSQL 16 advances query parallelism | InfoWorld](https://www.infoworld.com/article/3697752/postgresql-16-advances-query-parallelism.html)

[Why Postgres? | Crunchy Data](https://www.crunchydata.com/why-postgres)
[Why old-school PostgreSQL is so hip again | InfoWorld](https://www.infoworld.com/article/3240064/sql/why-old-school-postgresql-is-so-hip-again.html)

- Multi-version concurrent control, new record created upon write
- Heavy rely on process, each client is a process
- Provides extension API, provides low layer data store abstraction
- Rows are stored in heap according to row index (think of it as a hidden primary key), create and update are always O(1)
- Indices points to offset in heap and may become stale (needs to be vacuumed)

[PG4E - Postgres for Everybody](https://www.pg4e.com/)
[PostgreSQL for Everybody | Coursera](https://www.coursera.org/specializations/postgresql-for-everybody)

[PostgreSQL Tools for the Visually Inclined – Rob Conery](https://rob.conery.io/2019/03/04/postgresql-tools-for-the-visually-inclined/) `psql` tutorial

[PostgreSQL for Everybody | Coursera](https://www.coursera.org/specializations/postgresql-for-everybody)
[PostgreSQL for Everybody - YouTube](https://www.youtube.com/playlist?list=PLlRFEj9H3Oj7Oj3ndXmNS1FFOUyQP-gEa)
[Intermediate PostgreSQL | Coursera](https://www.coursera.org/learn/intermediate-postgresql)
[Learn PostgreSQL Tutorial - Full Course for Beginners - YouTube](https://www.youtube.com/watch?v=qw--VYLpxG4)

[Postgres Architecture Explained - YouTube](https://www.youtube.com/watch?v=Q56kljmIN14) ❗!important
[All Postgres Locks Explained | A Deep Dive - YouTube](https://www.youtube.com/watch?v=URwmzTeuHdk)

[Home - Postgres Conference](https://postgresconf.org/)
[Postgres Guide](http://postgresguide.com/)

[PostgreSQL tutorial: Get started with PostgreSQL 10 | InfoWorld](https://www.infoworld.com/article/3300799/database/postgresql-tutorial-get-started-with-postgresql-10.html)
[Datadog’s PostgreSQL Cheatsheet](https://www.datadoghq.com/resources/datadog-postgresql-cheatsheet/)

[Python vs SQL: Comparison for Data Pipelines – Towards Data Science](https://towardsdatascience.com/python-vs-sql-comparison-for-data-pipelines-8ca727b34032)
[How Postgres Makes Transactions Atomic — Brandur Leach](https://brandur.org/postgres-atomicity)
[Hacking SQL — Tools, Utilities, and Work flow. – codeburst](https://codeburst.io/hacking-sql-tools-utilities-and-work-flow-e158795008b1)
[Handling backup and recovery in PostgreSQL 10 [Tutorial] | Packt Hub](https://hub.packtpub.com/handling-backup-and-recovery-in-postgresql-10/)
[PostgreSQL: Feature Matrix](https://www.postgresql.org/about/featurematrix/)
[Postgres hidden gems - Craig Kerstiens](http://www.craigkerstiens.com/2018/01/31/postgres-hidden-gems/)

[Postgres Indexes for Newbies](https://blog.crunchydata.com/blog/postgres-indexes-for-newbies)
[Data Loading in Postgres for Newbies](https://www.crunchydata.com/blog/data-loading-in-postgres-for-newbies)
[Postgres Insider Terminology](https://www.crunchydata.com/blog/challenging-postgres-terminology)

Advisory Locks
[PostgreSQL: Documentation: 15: 13.3. Explicit Locking](https://www.postgresql.org/docs/current/explicit-locking.html)
[Understanding PostgreSQL Locks: A Comprehensive Guide 101](https://hevodata.com/learn/postgresql-locks/)
[Richard Clayton - Distributed Locking with Postgres Advisory Locks](https://rclayton.silvrback.com/distributed-locking-with-postgres-advisory-locks)
[How do PostgreSQL advisory locks work - Vlad Mihalcea](https://vladmihalcea.com/how-do-postgresql-advisory-locks-work/)

[Postgres Extensions in Rust | Depth-First](https://depth-first.com/articles/2021/08/25/postgres-extensions-in-rust/)

[Rob Conery | Designing a PostgreSQL Document API](http://rob.conery.io/2015/08/20/designing-a-postgresql-document-api/)
[Rob Conery | PostgreSQL Document API Part 2: Full Text Search and Bulk Save](http://rob.conery.io/2015/08/22/postgresql-document-api-part-2-full-text-search-and-bulk-save/)
[Rob Conery | PostgreSQL Document API Part 3: Finding Things](http://rob.conery.io/2015/08/25/postgresql-document-api-part-3-finding-things/)
[Rob Conery | PostgreSQL Document API Part 4: Complex Queries](http://rob.conery.io/2015/09/01/postgresql-document-api-part-4-complex-queries/)
[Rob Conery | Embracing SQL In Postgres](http://rob.conery.io/2015/02/24/embracing-sql-in-postgres/)

[PG Casts](https://www.pgcasts.com/)
[SE-Radio Episode 362: Simon Riggs on Advanced Features of PostgreSQL : Software Engineering Radio](https://www.se-radio.net/2019/04/se-radio-episode-362-simon-riggs-on-advanced-features-of-postgresql/)

## Clients

[Postgres Databases and Schemas](https://www.crunchydata.com/blog/postgres-databases-and-schemas) URL Schema
[PostgREST Documentation](https://postgrest.org/)

[robconery/massive-js: A simple relational data access tool for NodeJS.](https://github.com/robconery/massive-js)
[porsager/postgres: Postgres.js - The Fastest full featured PostgreSQL client for Node.js and Deno](https://github.com/porsager/postgres)
[robconery/moebius: A functional query tool for Elixir](https://github.com/robconery/moebius)

[PostgreSQL driver for Python — Psycopg](https://www.psycopg.org/)
[Welcome to PyGreSQL](http://www.pygresql.org/index.html)
[General PyGreSQL programming information — PyGreSQL](http://www.pygresql.org/contents/general.html)

[MagicStack/asyncpg: A fast PostgreSQL Database Client Library for Python/asyncio.](https://github.com/MagicStack/asyncpg)
[athenianco/asyncpg-rkt: A fast PostgreSQL Database Client Library for Python/asyncio.](https://github.com/athenianco/asyncpg-rkt) fork that returns dataframe
[I Forked “Asyncpg” — And It Parses Database Records to Numpy 20x Faster | by Vadim Markovtsev | Jun, 2022 | Better Programming](https://betterprogramming.pub/i-forked-asyncpg-and-it-parses-database-records-to-numpy-20x-faster-e71024a84bff)

[Quicker serverless Postgres connections - Neon](https://neon.tech/blog/quicker-serverless-postgres) websocket, TLS

## GUI

[pgAdmin - PostgreSQL Tools](https://www.pgadmin.org/)

```
\e edit
\timing
```

[DBeaver Community | Free Universal Database Tool](https://dbeaver.io/)

## #perfmatters

[How we optimized PostgreSQL queries 100x | by Vadim Markovtsev | Towards Data Science](https://towardsdatascience.com/how-we-optimized-postgresql-queries-100x-ff52555eabe)
[Fastest Way to Load Data Into PostgreSQL Using Python | Haki Benita](https://hakibenita.com/fast-load-data-python-postgresql)

## Data types

[PostgreSQL as a Schemaless Database](http://thebuild.com/presentations/pg-as-nosql-pgday-fosdem-2013.pdf)

[Rob Conery | JSONB and PostgreSQL: Work Faster By Ditching Migrations](http://rob.conery.io/2016/02/27/jsonb-and-postgresql/) 9.4+
[When to use unstructured datatypes in Postgres–Hstore vs. JSON vs. JSONB](https://www.citusdata.com/blog/2016/07/14/choosing-nosql-hstore-json-jsonb/)
[PostGIS — Spatial and Geographic Objects for PostgreSQL](http://postgis.net/)

## Forward Data Wrappers (FDW)

> FDW allows Postgres as a "frontend" for other database

[A tour of Postgres' Foreign Data Wrappers - Craig Kerstiens](http://www.craigkerstiens.com/2016/09/11/a-tour-of-fdws/)
[Understanding Foreign Data Wrappers in Postgres and postgres_fdw](https://www.crunchydata.com/blog/understanding-postgres_fdw)
[PostgreSQL: Documentation: 15: F.38. postgres_fdw](https://www.postgresql.org/docs/current/postgres-fdw.html)

[Creating a Postgres Foreign Data Wrapper | DoltHub Blog](https://www.dolthub.com/blog/2022-01-26-creating-a-postgres-foreign-data-wrapper/)
[PostgreSQL FDW aggregation pushdown part I: modifying Multicorn | Splitgraph](https://www.splitgraph.com/blog/postgresql-fdw-aggregation-pushdown-multicorn-part-1)

## Computed Values

[PostgreSQL: Documentation: 14: CREATE AGGREGATE](https://www.postgresql.org/docs/current/sql-createaggregate.html)

[PostgreSQL: Documentation: 14: 2.7. Aggregate Functions](https://www.postgresql.org/docs/current/tutorial-agg.html)
[PostgreSQL: Documentation: 14: 9.21. Aggregate Functions](https://www.postgresql.org/docs/current/functions-aggregate.html)

## Monitoring

[Key metrics for PostgreSQL monitoring](https://www.datadoghq.com/blog/postgresql-monitoring/)
[Collecting metrics with PostgreSQL monitoring tools](https://www.datadoghq.com/blog/postgresql-monitoring-tools/)
[How to collect and monitor PostgreSQL data with Datadog](https://www.datadoghq.com/blog/collect-postgresql-data-with-datadog/)

## Bloating

[The Unexpected Find That Freed 20GB of Unused Index Space | Haki Benita](https://hakibenita.com/postgresql-unused-index-size)
Nullable foreign keys are good candidates for partial index
[70GB of Unused Bloated Index Space Freed on Postgres, Here is how they did it - YouTube](https://www.youtube.com/watch?v=Zow5-Pa46MY)
[PostgreSQL: Why and How WAL Bloats - DZone Database](https://dzone.com/articles/postgresql-why-and-how-wal-bloats)
