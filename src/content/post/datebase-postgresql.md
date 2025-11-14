---
title: PostgreSQL
description: The World's Most Advanced Open Source Relational Database
created: 2023-06-18
updated: 2025-10-17
tags:
  - comp/database
  - postgresql
  - sql
---

[[psql-snippets]]

[PostgreSQL: The world's most advanced open source database](https://www.postgresql.org/)
[PostgreSQL - Wikiwand](https://www.wikiwand.com/en/PostgreSQL)
[PostgreSQL History - 2ndQuadrant | PostgreSQL](https://www.2ndquadrant.com/en/postgresql/postgresql-story/)

[99% of Developers Don't Get PostgreSQL - YouTube](https://www.youtube.com/watch?v=P8rrhZTPEAQ) MVCC, WAL
[I replaced my entire tech stack with Postgres... - YouTube](https://www.youtube.com/watch?v=3JW732GrMdg)
[PostgreSQL 12 Top Features Explained - YouTube](https://www.youtube.com/watch?v=PfbzNdrecv4)
[PostgreSQL 13 Has Some Performance Boosts! Let us discuss it! - YouTube](https://www.youtube.com/watch?v=wMbTHFXImzI)
[PostgreSQL v14 Is Faster, and Friendly to Developers – The New Stack](https://thenewstack.io/postgresql-v14-is-faster-and-friendly-to-developers/)
[PostgreSQL 16 advances query parallelism | InfoWorld](https://www.infoworld.com/article/3697752/postgresql-16-advances-query-parallelism.html)
[Get Excited About Postgres 18 | Crunchy Data Blog](https://www.crunchydata.com/blog/get-excited-about-postgres-18)

[dhamaniasad/awesome-postgres: A curated list of awesome PostgreSQL software, libraries, tools and resources, inspired by awesome-mysql](https://github.com/dhamaniasad/awesome-postgres)
[pg-tr/awesome-postgres: A curated list of awesome PostgreSQL software, libraries, tools and resources, forked from dhamaniasad/awesome-postgres](https://github.com/pg-tr/awesome-postgres)

[Why Postgres? | Crunchy Data](https://www.crunchydata.com/why-postgres)
[Why old-school PostgreSQL is so hip again | InfoWorld](https://www.infoworld.com/article/3240064/sql/why-old-school-postgresql-is-so-hip-again.html)
[Wait... PostgreSQL can do WHAT? - YouTube](https://www.youtube.com/watch?v=VEWXmdjzIpQ)

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
[PostgreSQL: Documentation: 13.3. Explicit Locking](https://www.postgresql.org/docs/current/explicit-locking.html)
[Understanding PostgreSQL Locks: A Comprehensive Guide 101](https://hevodata.com/learn/postgresql-locks/)
[Richard Clayton - Distributed Locking with Postgres Advisory Locks](https://rclayton.silvrback.com/distributed-locking-with-postgres-advisory-locks)
[How do PostgreSQL advisory locks work - Vlad Mihalcea](https://vladmihalcea.com/how-do-postgresql-advisory-locks-work/)

[Rob Conery | Designing a PostgreSQL Document API](http://rob.conery.io/2015/08/20/designing-a-postgresql-document-api/)
[Rob Conery | PostgreSQL Document API Part 2: Full Text Search and Bulk Save](http://rob.conery.io/2015/08/22/postgresql-document-api-part-2-full-text-search-and-bulk-save/)
[Rob Conery | PostgreSQL Document API Part 3: Finding Things](http://rob.conery.io/2015/08/25/postgresql-document-api-part-3-finding-things/)
[Rob Conery | PostgreSQL Document API Part 4: Complex Queries](http://rob.conery.io/2015/09/01/postgresql-document-api-part-4-complex-queries/)
[Rob Conery | Embracing SQL In Postgres](http://rob.conery.io/2015/02/24/embracing-sql-in-postgres/)

[PG Casts](https://www.pgcasts.com/)
[SE-Radio Episode 362: Simon Riggs on Advanced Features of PostgreSQL : Software Engineering Radio](https://www.se-radio.net/2019/04/se-radio-episode-362-simon-riggs-on-advanced-features-of-postgresql/)

## Clients

[Postgres Databases and Schemas](https://www.crunchydata.com/blog/postgres-databases-and-schemas) URL Schema
[PL Matrix - PostgreSQL wiki](https://wiki.postgresql.org/wiki/PL_Matrix)

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

## Extensions

[Trunk](https://tembo-io.github.io/trunk/)
[Postgres Extensions in Rust | Depth-First](https://depth-first.com/articles/2021/08/25/postgres-extensions-in-rust/)
[PostgreSQL: Documentation: Appendix F. Additional Supplied Modules and Extensions](https://www.postgresql.org/docs/current/contrib.html)

[Top 10 PostgreSQL Extensions You Should Know About | Airbyte](https://airbyte.com/data-engineering-resources/postgresql-extensions)
[Wait... PostgreSQL can do WHAT? - YouTube](https://www.youtube.com/watch?v=VEWXmdjzIpQ)

[PostgREST Documentation](https://postgrest.org/)
[PostgREST/postgrest: REST API for any Postgres database](https://github.com/PostgREST/postgrest)

[pramsey/pgsql-http: HTTP client for PostgreSQL, retrieve a web page from inside the database.](https://github.com/pramsey/pgsql-http)
[michelp/pgjwt: PostgreSQL implementation of JWT (JSON Web Tokens)](https://github.com/michelp/pgjwt)
[mkaski/pg_render: Render HTML in SQL. PostgreSQL extension.](https://github.com/mkaski/pg_render)
[AbdulYadi/pgqr: PostgreSQL extension to generate QR code](https://github.com/AbdulYadi/pgqr)
[PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/)

### Omnigres

[Omnigres documentation](https://docs.omnigres.org/)
[omnigres/omnigres: Postgres as a Platform](https://github.com/omnigres/omnigres)

### Key-Value

[PostgreSQL: Documentation: F.18. hstore](https://www.postgresql.org/docs/current/hstore.html) key-value store

### Document database

[PostgreSQL: Documentation: 8.14. JSON Types](https://www.postgresql.org/docs/current/datatype-json.html)
[PostgreSQL: Documentation: 9.16. JSON Functions and Operators](https://www.postgresql.org/docs/current/functions-json.html)

[PostgreSQL JSON Tutorial](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-json/)
[PostgreSQL and JSON – How to Use JSON Data in PostgreSQL](https://www.freecodecamp.org/news/postgresql-and-json-use-json-data-in-postgresql/)
[JSONB PostgreSQL: How To Store & Index JSON Data](https://scalegrid.io/blog/using-jsonb-in-postgresql-how-to-effectively-store-index-json-data-in-postgresql/)
[Working with JSON in PostgreSQL vs MongoDB - YouTube](https://www.youtube.com/watch?v=n_wkARSxtK4)
[Bye bye Mongo, Hello Postgres | Information | The Guardian](https://www.theguardian.com/info/2018/nov/30/bye-bye-mongo-hello-postgres)

### Message queue

[tembo-io/pgmq: A lightweight message queue. Like AWS SQS and RSMQ but on Postgres.](https://github.com/tembo-io/pgmq)
[SQL Maxis: Why We Ditched RabbitMQ And Replaced It With A Postgres Queue](https://www.prequel.co/blog/sql-maxis-why-we-ditched-rabbitmq-and-replaced-it-with-a-postgres-queue)

### Pub/Sub

[PostgreSQL: Documentation: NOTIFY](https://www.postgresql.org/docs/current/sql-notify.html) pub
[PostgreSQL: Documentation: LISTEN](https://www.postgresql.org/docs/current/sql-listen.html) sub

### Time series

[PostgreSQL ++ for time series and events | Timescale](https://www.timescale.com/)
[timescale/timescaledb: An open-source time-series SQL database optimized for fast ingest and complex queries. Packaged as a PostgreSQL extension.](https://github.com/timescale/timescaledb)

### Logging Database

[logfellow/logstash-logback-encoder: Logback JSON encoder and appenders](https://github.com/logfellow/logstash-logback-encoder)

[PostgreSQL: Documentation: 12.11. Limitations](https://www.postgresql.org/docs/current/textsearch-limitations.html)
[Why we replaced Elasticsearch with Postgres Full-Text Search](https://blog.blockost.com/why-we-replaced-elasticsearch-with-postgres-full-text-search)

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

[Postgres Logging for Performance Optimization | Crunchy Data Blog](https://www.crunchydata.com/blog/postgres-logging-for-performance-optimization)

## Data types

[PostgreSQL: Documentation: Chapter 8. Data Types](https://www.postgresql.org/docs/current/datatype.html)

[PostgreSQL as a Schemaless Database](http://thebuild.com/presentations/pg-as-nosql-pgday-fosdem-2013.pdf)

[the-art-of-the-terminal/postgresql-is-not-a-database/02-object-features.sql at master · vivus-ignis/the-art-of-the-terminal](https://github.com/vivus-ignis/the-art-of-the-terminal/blob/master/postgresql-is-not-a-database/02-object-features.sql) custom data type and inheritance

[PostGIS — Spatial and Geographic Objects for PostgreSQL](http://postgis.net/)

### JSONB

[Rob Conery | JSONB and PostgreSQL: Work Faster By Ditching Migrations](http://rob.conery.io/2016/02/27/jsonb-and-postgresql/) 9.4+
[When to use unstructured datatypes in Postgres–Hstore vs. JSON vs. JSONB](https://www.citusdata.com/blog/2016/07/14/choosing-nosql-hstore-json-jsonb/)
[Indexing JSONB in Postgres | Crunchy Data Blog](https://www.crunchydata.com/blog/indexing-jsonb-in-postgres)

### pgvector/pgvectorscale

[pgvector/pgvector: Open-source vector similarity search for Postgres](https://github.com/pgvector/pgvector)

[timescale/pgvectorscale: A complement to pgvector for high performance, cost efficient vector search on large workloads.](https://github.com/timescale/pgvectorscale)
[timescale/pgai: A suite of tools to develop RAG, semantic search, and other AI applications more easily with PostgreSQL](https://github.com/timescale/pgai)

[Vector Databases Are the Wrong Abstraction](https://www.timescale.com/blog/vector-databases-are-the-wrong-abstraction/)

[The Problem with Vector Databases (and how to fix it) - YouTube](https://www.youtube.com/watch?v=8oTnUtFYAes)

## Forward Data Wrappers (FDW)

> FDW allows Postgres as a "frontend" for other database

[A tour of Postgres' Foreign Data Wrappers - Craig Kerstiens](http://www.craigkerstiens.com/2016/09/11/a-tour-of-fdws/)
[Understanding Foreign Data Wrappers in Postgres and postgres_fdw](https://www.crunchydata.com/blog/understanding-postgres_fdw)
[PostgreSQL: Documentation: F.38. postgres_fdw](https://www.postgresql.org/docs/current/postgres-fdw.html)

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
