---
title: Database
description: ""
created: 2015-08-03
updated: 2025-09-26
tags:
  - comp/database
---

> TODO: merge `caravan/database/` here
> split `datebase-mysql`, `datebase-redis`, `datebase-tikv-tidb`, `datebase-graph`, `datebase-as-a-service`, `datebase-transactional`, `datebase-kv`, `datebase-document`, `datebase-lightweight`, `datebase-multimodal`, `datebase-vector`

[Database - Wikiwand](https://www.wikiwand.com/en/Database)
[Databases 101 - Thomas LaRock](https://thomaslarock.com/2018/07/databases-101/)
[Introduction :: LearnDB](https://learndb.net/basics/intro/)

[Why We Disable Linux's THP Feature for Databases - DZone Database](https://dzone.com/articles/why-we-disable-linuxs-thp-feature-for-databases)
[Database Tutorials - YouTube](https://www.youtube.com/playlist?list=PLiMWaCMwGJXnhmmh5pu9sdWekdRwAzV5f)

# Theory

[ACID vs. BASE: The Shifting pH of Database Transaction Processing | Big Data Articles | DATAVERSITY](http://www.dataversity.net/acid-vs-base-the-shifting-ph-of-database-transaction-processing/)
[ACID - Wikiwand](https://www.wikiwand.com/en/ACID)
[Eventual consistency - Wikiwand](https://www.wikiwand.com/en/Eventual_consistency)
[Myth: Eric Brewer on Why Banks are BASE Not ACID - Availability Is Revenue - High Scalability -](http://highscalability.com/blog/2013/5/1/myth-eric-brewer-on-why-banks-are-base-not-acid-availability.html)
[Building Robust Systems With ACID and Constraints — Brandur Leach](https://brandur.org/acid)
[Relational Database ACID Transactions (Explained by Example) - YouTube](https://www.youtube.com/watch?v=pomxJOFVcQs)

[XML database - Wikiwand](https://www.wikiwand.com/en/XML_database)

[NoSQL 数据库不应该放弃 Consistency](https://www.infoq.cn/article/rhzs0KI2G*Y2r9PMdeNv)
[Don't Get Stuck in the CON Game (V3) - by Pat Helland](https://pathelland.substack.com/p/dont-get-stuck-in-the-con-game-v3)

[Database Theory - MariaDB Knowledge Base](https://mariadb.com/kb/en/library/database-theory/)
[Linearizability versus Serializability | Peter Bailis](https://www.bailis.org/blog/linearizability-versus-serializability/)

[VoltDB and the Jepsen Test: What we learned about data accuracy and consistency - VoltDB](https://www.voltdb.com/files/voltdb-jepsen-test/)

## CAP Theorem

[CAP theorem - Wikiwand](https://www.wikiwand.com/en/CAP_theorem)
[Brewer's CAP Theorem <= :julianbrowne](http://www.julianbrowne.com/article/viewer/brewers-cap-theorem)
[CAP Twelve Years Later: How the "Rules" Have Changed](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed)
[Blog | Plan setup, pause-minority, mirrored nodes and the CAP theorem - CloudAMQP, RabbitMQ as a Service](https://www.cloudamqp.com/blog/2015-12-29-cloudamqp-plan-setup-pause-minority-mirrored-nodes-and-the-cap-theorem.html)
[Spanner, TrueTime and the CAP Theorem – Google AI](https://ai.google/research/pubs/pub45855)

[Episode 227: Eric Brewer: The CAP Theorem, Then and Now : Software Engineering Radio](https://www.se-radio.net/2015/05/the-cap-theorem-then-and-now/)

## RUM Conjecture

Read, Update, Memory amplification

[RUM Conjecture Series' Articles - DEV Community](https://dev.to/frosnerd/series/8854)
[The RUM Conjecture | Codementor](https://www.codementor.io/@arpitbhayani/the-rum-conjecture-16z2ckqte9)
[EDBT-RUM-Conjecture-public](https://cs-people.bu.edu/mathan/publications/slides/edbt2016-RUM-Conjecture-slides-public.pdf)

## Data Modeling

[Making The Invalid Impossible - Choosing The Right Data Model - DEV Community](https://dev.to/frosnerd/making-the-invalid-impossible---choosing-the-right-data-model-9e6)
[Developer: Data Modeling - Neo4j Graph Database](https://neo4j.com/developer/data-modeling/) (Neo4j)
[A beginner's guide to database table relationships - Vlad Mihalcea](https://vladmihalcea.com/database-table-relationships/)

[Intro, Data Modeling, Databases | Prisma's Data Guide](https://www.prisma.io/dataguide/)

[Database Keys Made Easy - Primary, Foreign, Candidate, Surrogate, & Many More - YouTube](https://www.youtube.com/watch?v=8wUUMOKAK-c)
[Third normal form - Wikiwand](https://www.wikiwand.com/en/Third_normal_form)
[An Introduction to Database Normalization — Mike Hillyer's Personal Webspace](https://mikehillyer.com/articles/an-introduction-to-database-normalization/)
[The Basics of Database Normalization](https://www.lifewire.com/database-normalization-basics-1019735)
[Database Normalization Explained - DEV Community 👩‍💻👨‍💻](https://dev.to/nexttech/database-normalization-explained-5b1a)
[Database Normalization Explained in Simple English - Essential SQL](https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)
[Learn Database Normalization - 1NF, 2NF, 3NF, 4NF, 5NF - YouTube](https://www.youtube.com/watch?v=GFQaEYEc8_8)

[Learn Boyce-Codd Normal Form (BCNF) - YouTube](https://www.youtube.com/watch?v=VWnKUKH4tLg)

Boyce-Codd Normal Form:
every attribute should depend on the key, the whole key, and nothing but the key

BCNF is stronger the 3NF but in practice 99.99% of 3NF are BCNF.

[The Troublesome Active Record Pattern](http://calpaterson.com/activerecord.html)

### DBML

[DBML - Database Markup Language | DBML](https://www.dbml.org/home/)
[dbdiagram.io - Database Relationship Diagrams Design Tool](https://dbdiagram.io/home)

### Concurrent Update

[How To Build a High-Concurrency Ticket Booking System With Prisma - DEV Community](https://dev.to/zenstack/how-to-build-a-high-concurrency-ticket-booking-system-with-prisma-184n) Optimistic Concurrency Control(OCC)

[What is SELECT FOR UPDATE in SQL (with examples)?](https://www.cockroachlabs.com/blog/select-for-update/) SQL support this with built-in

## Use case

[How does Stack Overflow do pagination? - Meta Stack Overflow](https://meta.stackoverflow.com/questions/322164/how-does-stack-overflow-do-pagination)
[Pagination: You're (Probably) Doing It Wrong. (Example)](https://coderwall.com/p/lkcaag/pagination-you-re-probably-doing-it-wrong)

## CRDT

[Conflict-free replicated data type - Wikiwand](https://www.wikiwand.com/en/Conflict-free_replicated_data_type)
[Readings in conflict-free replicated data types](http://christophermeiklejohn.com/crdt/2014/07/22/readings-in-crdts.html) ❗!important
[A Look at Conflict-Free Replicated Data Types (CRDT) – Medium](https://medium.com/@istanbul_techie/a-look-at-conflict-free-replicated-data-types-crdt-221a5f629e7e#.hn2ru5vr5)
[ljwagerfield/crdt: CRDT Tutorial for Beginners (a digestible explanation with less math!)](https://github.com/ljwagerfield/crdt)
[Summary of CRDTs](https://vaughnvernon.co/?p=1012)

[SE-Radio Episode 252: Christopher Meiklejohn on CRDTs : Software Engineering Radio](https://www.se-radio.net/2016/03/se-radio-episode-252-christopher-meiklejohn-on-crdts/)
[Decentralized Objects with Martin Kleppman | Software Engineering Daily](https://softwareengineeringdaily.com/2017/12/08/decentralized-objects-with-martin-kleppman/)

[dominictarr/crdt: Commutative Replicated Data Types for easy collaborative/distributed systems.](https://github.com/dominictarr/crdt) is this the same?

This replaces operational transformation for collaborative editing.
[Operational transformation - Wikiwand](https://www.wikiwand.com/en/Operational_transformation)
[Operational Transformation – OT Explained](https://operational-transformation.github.io/)
[Operation Transformation - Google Slides](https://docs.google.com/presentation/d/1soRtddFXH-zATvr8vvwTvfGvgqlDw0RaclcOKjOcxCk/present?slide=id.i14)
[Operational Transformation or How Google Docs Works - David Chu @CocoaHeads Taipei - YouTube](https://www.youtube.com/watch?v=u2_yccaHbQk)

# Comparisons

[DB-Engines - Knowledge Base of Relational and NoSQL Database Management Systems](https://db-engines.com/en/) ❗!important
[Database of Databases - Home](https://dbdb.io/)
[Explore Databases - GitHub Reviews](https://githubreviews.com/explore/databases)

[7 Database Paradigms - YouTube](https://www.youtube.com/watch?v=W2Z7fbCLSTw)
[15 futuristic databases you’ve never heard of - YouTube](https://www.youtube.com/watch?v=jb2AvF8XzII)
[为什么关系数据库的挑战者都没有好下场【让编程再次伟大#25】 - YouTube](https://www.youtube.com/watch?v=IUUpxfa1SSw)

[Did I Pick The Right Database??? - YouTube](https://www.youtube.com/watch?v=cC6HFd1zcbo)

- avoid Firebase, Firestore, Hasura and FaunaDB (for being proprietary)
- reconsider MongoDB
- DX for SQL improved
- database is the wrong place to stay on bleeding edge

[DB-Engines Ranking - popularity ranking of database management systems](http://db-engines.com/en/ranking)
[DB-Engines Ranking - popularity ranking of document stores](http://db-engines.com/en/ranking/document+store)

[Seven Databases in Seven Days - a Cloud Data Services journey](https://www.compose.com/articles/seven-databases-in-seven-days-a-cloud-data-services-journey/)

[How To Choose The Right Database? - YouTube](https://www.youtube.com/watch?v=kkeFE6iRfMM)
[How to Choose the Right Database? - MongoDB, Cassandra, MySQL, HBase - Frank Kane - YouTube](https://www.youtube.com/watch?v=v5e_PasMdXc)
[Hitchhiker's guide to database types - DEV Community 👩‍💻👨‍💻](https://dev.to/pythonmeister/hitchhikers-guide-to-database-types-1bpg)

[A Comparison of Advanced, Modern Cloud Databases — Brandur Leach](https://brandur.org/cloud-databases)
[Comparing databases for Vercel and Netlify](https://fauna.com/blog/comparing-databases-for-vercel-and-netlify)

[Cassandra vs MongoDB vs CouchDB vs Redis vs Riak vs HBase vs Couchbase vs Hypertable vs ElasticSearch vs Accumulo vs VoltDB vs Scalaris comparison -- Software architect Kristof Kovacs](http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis)
[CouchDB Vs MongoDB](http://www.slideshare.net/gabriele.lana/couchdb-vs-mongodb-2982288)
[Couchbase vs CouchDB | Couchbase](http://www.couchbase.com/couchbase-vs-couchdb)
[NoSQL - MongoDB vs CouchDB - Stack Overflow](https://stackoverflow.com/questions/3375494/nosql-mongodb-vs-couchdb)
[NoSQL grudge match: MongoDB vs. Couchbase Server | InfoWorld](https://www.infoworld.com/article/3190696/application-development/nosql-grudge-match-mongodb-vs-couchbase-server.html)
[nosql - When to use CouchDB over MongoDB and vice versa - Stack Overflow](https://stackoverflow.com/questions/12437790/when-to-use-couchdb-over-mongodb-and-vice-versa)
[Riyad Kalla - Google+ - -Should I use MongoDB or CouchDB (or Redis)--…](https://plus.google.com/107397941677313236670/posts/LFBB233PKQ1)
[Riyad Kalla's answer to How does MongoDB compare to CouchDB- What are the advantages and disadvantages of each- - Quora](http://www.quora.com/How-does-MongoDB-compare-to-CouchDB-What-are-the-advantages-and-disadvantages-of-each/answer/Riyad-Kalla)

[Benchmarking LevelDB vs. RocksDB vs. HyperLevelDB vs. LMDB](https://www.influxdata.com/blog/benchmarking-leveldb-vs-rocksdb-vs-hyperleveldb-vs-lmdb-performance-for-influxdb/)
[LevelDB vs. RocksDB Comparison](https://db-engines.com/en/system/LevelDB%3BRocksDB)

RocksDB log structure merge tree, fast for write and append workload
Innodb B-tree, fast for read and update workload

## Storage Engines

[[algorithm#Database Data Structures]]

[Database engine - Wikiwand](https://www.wikiwand.com/en/Database_engine)
[Comparison of MySQL database engines - Wikiwand](https://www.wikiwand.com/en/Comparison_of_MySQL_database_engines)
[MySQL Storage Engines » ADMIN Magazine](http://www.admin-magazine.com/Articles/A-storage-engine-for-every-use-case)

[Should you move from MyISAM to Innodb ? - MySQL Performance Blog](https://www.percona.com/blog/2009/01/12/should-you-move-from-myisam-to-innodb/)
[MySQL Engines - MyISAM vs Innodb](https://support.rackspace.com/how-to/mysql-engines-myisam-vs-innodb/)

[InnoDB - Wikiwand](https://www.wikiwand.com/en/InnoDB) Relational
[The physical structure of InnoDB index pages – Jeremy Cole](https://blog.jcole.us/2013/01/07/the-physical-structure-of-innodb-index-pages/)
[TokuDB - Wikiwand](https://www.wikiwand.com/en/TokuDB) Relational
[Percona TokuDB](https://www.percona.com/software/mysql-database/percona-tokudb)
[TokuDB Introduction](https://www.percona.com/doc/percona-server/LATEST/tokudb/tokudb_intro.html)

[WiredTiger - Wikiwand](https://www.wikiwand.com/en/WiredTiger) Document

[RocksDB - Wikiwand](https://www.wikiwand.com/en/RocksDB) KV

[Database Pages — A deep dive. The Physical storage of rows and… | by Hussein Nasser | Medium](https://medium.com/@hnasr/database-pages-a-deep-dive-38cdb2c79eb5)

[How Discord Stores Trillions of Messages | Deep Dive - YouTube](https://www.youtube.com/watch?v=xynXjChKkJc)

## SQL family

[BretFisher/sysbench-docker-hpe: Sysbench Dockerfiles and Scripts for VM and Container benchmarking MySQL](https://github.com/BretFisher/sysbench-docker-hpe)

[SQLite vs MySQL vs PostgreSQL: A Comparison Of Relational Database Management Systems | DigitalOcean](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
[What are pros and cons of PostgreSQL and MySQL? - Quora](https://www.quora.com/What-are-pros-and-cons-of-PostgreSQL-and-MySQL)
[MySQL vs PostgreSQL: Why MySQL Is Superior To PostgreSQL](https://blog.udemy.com/mysql-vs-postgresql/)

Uber's migration from PostgreSQL (back) to MySQL
[Project Mezzanine: The Great Migration at Uber Engineering - Uber Engineering Blog](https://eng.uber.com/mezzanine-migration/)
[Why Uber Engineering Switched from Postgres to MySQL - Uber Engineering Blog](https://eng.uber.com/mysql-migration/)
[Opening Old Wounds - Why Uber Engineering Switched from Postgres to MySQL - YouTube](https://www.youtube.com/watch?v=_E43l5EbNI4)

## Timezones

[MySQL :: MySQL 8.0 Reference Manual :: 5.1.13 MySQL Server Time Zone Support](https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html)
[time - Should MySQL have its timezone set to UTC? - Stack Overflow](https://stackoverflow.com/questions/19023978/should-mysql-have-its-timezone-set-to-utc/19075291)
[timezone - How do I set the time zone of MySQL? - Stack Overflow](https://stackoverflow.com/questions/930900/how-do-i-set-the-time-zone-of-mysql)

`jdbc:mysql://localhost:3306/dbname?serverTimezone=UTC` also works

---

# RDBMS/Transactional Database

[Relational database management system - Wikiwand](https://www.wikiwand.com/en/Relational_database_management_system)

Most call this categories of DBMS as SQL DB.

Provides ACID consistency.

[Why SQL is neither legacy, nor low-level, nor difficult, nor the wrong place for (business) data logic, but is simply awesome!](http://www.vertabelo.com/blog/notes-from-the-lab/why-sql-is-neither-legacy-nor-low-level-but-simply-awesome)
[8 no-bull reasons why SQL Server on Linux is huge for Microsoft | InfoWorld](http://www.infoworld.com/article/3041450/sql/8-no-bull-reasons-why-sql-server-on-linux-is-huge-for-microsoft.html)

[Using SQL for Lightweight Data Analysis | School of Data - Evidence is Power](http://schoolofdata.org/2013/03/26/using-sql-for-lightweight-data-analysis/)

[prahladyeri/VisualAlchemist: Open source web-based database diagramming and automation tool](https://github.com/prahladyeri/VisualAlchemist)

[SQL Server Performance Achieving Massive Scalability with SQL Server](http://www.sql-server-performance.com/massive-scalability/)
[Advanced scaling strategies: Achieving massive scale with SQL](https://go.mariadb.com/GLBL-WBN_2019-04-11Advancedscalingstrategies_Registration-LP.html)
[Is 20M of rows still a valid soft limit of MySQL table in 2023? – Yisheng's blog](https://yishenggong.com/2023/05/22/is-20m-of-rows-still-a-valid-soft-limit-of-mysql-table-in-2023/)

[A Deep Dive in How Slow SELECT \* is - YouTube](https://www.youtube.com/watch?v=wybjsKtA9hI)
[How Slow is SELECT \* ? (A deep dive) | by Hussein Nasser | Apr, 2023 | Medium](https://medium.com/@hnasr/how-slow-is-select-8d4308ca1f0c)

[Why Does EVERYONE Still Do This To Their DBs??? - YouTube](https://www.youtube.com/watch?v=jeWrbAiA1D0) migration files

## SQL

[[sql]]

## Indexes

[Database Indexing for Dumb Developers - YouTube](https://www.youtube.com/watch?v=lYh6LrSIDvY)

[Database Indexing Explained (with PostgreSQL) - YouTube](https://www.youtube.com/watch?v=-qNSXK7s7_w)
[Indexing in PostgreSQL vs MySQL - YouTube](https://www.youtube.com/watch?v=T9n_-_oLrbM)

[The effect of Random UUID on database performance - YouTube](https://www.youtube.com/watch?v=OAOQ7U0XAi0)ranom UUID causes lots of pages look up and split
[How Shopify’s engineering improved database writes by 50% with ULID - YouTube](https://www.youtube.com/watch?v=f53-Iw_5ucA)

[UUIDs are Popular, but Bad for Performance — Let’s Discuss - Percona Database Performance Blog](https://www.percona.com/blog/2019/11/22/uuids-are-popular-but-bad-for-performance-lets-discuss/)
[UUIDs are Bad for Performance in MySQL - Is Postgres better? Let us Discuss - YouTube](https://www.youtube.com/watch?v=Y5mWz4vK10A)
MySQL's data clustering means the primary key affects data I/O; Postgres does not have this issue

## Datalog

[Datalog - Wikiwand](https://www.wikiwand.com/en/Datalog)

[Datalog: Deductive Database Programming](https://docs.racket-lang.org/datalog/)
[pyDatalog](https://sites.google.com/site/pydatalog/)

[google/mangle](https://github.com/google/mangle)

## R2DBC

[R2DBC](https://r2dbc.io/) Reactive Relational Database Connectivity, reactive variant of the JDBC API

[Unleash the Power of Reactive Programming with R2DBC and MariaDB](https://go.mariadb.com/21Q3-WBN-GLBL-OSSG-Unleash-Reactive-Programming-R2DBC-2021-05-27_Registration-LP.html)

## Schemaless SQL

[Designing Schemaless, Uber Engineering's Scalable Datastore Using MySQL - Uber Engineering Blog](https://eng.uber.com/schemaless-part-one-mysql-datastore/)
[The Architecture of Schemaless, Uber Engineering's Trip Datastore Using MySQL - Uber Engineering Blog](https://eng.uber.com/schemaless-part-two-architecture/)
[Using Triggers On Schemaless, Uber Engineering's Datastore Using MySQL - Uber Engineering Blog](https://eng.uber.com/schemaless-part-three-datastore-triggers/)
[Code Migration in Production: Rewriting the Sharding Layer of Uber’s Schemaless Datastore](https://eng.uber.com/schemaless-rewrite/)

[rbastic/go-schemaless: An open-source sharded database framework based on Uber's Schemaless](https://github.com/rbastic/go-schemaless)

## Scaling

[Rise of Globally Distributed SQL Databases - Redefining Transactional Stores for Cloud Native Era - The Distributed SQL Blog](https://blog.yugabyte.com/rise-of-globally-distributed-sql-databases-redefining-transactional-stores-for-cloud-native-era/)

[LONG LIVE SQL - YouTube](https://www.youtube.com/watch?v=j_QH5wF9XBg)
[When should you shard your database? - YouTube](https://www.youtube.com/watch?v=iHNovZUZM3A)
[Horizontal vs Vertical Database Partitioning - YouTube](https://www.youtube.com/watch?v=QA25cMWp9Tk)
[Avoid premature Database Sharding - YouTube](https://www.youtube.com/watch?v=aXD4tWbkoJo)
sharding should be the last resort, consider partitioning first

[ProxySQL](http://www.proxysql.com/)
[Load balancing with ProxySQL](https://www.percona.com/doc/percona-xtradb-cluster/LATEST/howtos/proxysql.html)

[GitHub Engineering Adopts New Architecture for MySQL High Availability](https://www.infoq.com/news/2018/07/github-mysql-high-availability)
[MySQL High Availability at GitHub | GitHub Engineering](https://githubengineering.com/mysql-high-availability-at-github/)

[MariaDB MaxScale | Database Proxy - Database Security, HA](https://mariadb.com/products/technology/maxscale) works with MySQL
[MariaDB MaxScale | MariaDB](https://mariadb.com/resources/datasheets-guides/mariadb-maxscale) datasheet

[Postgres-XL | Open Source Scalable SQL Database Cluster](https://www.postgres-xl.org/)
[PgBouncer - lightweight connection pooler for PostgreSQL](https://www.pgbouncer.org/)
[levkk/pgcat: Meow. PgBouncer rewritten in Rust, with sharding, load balancing and failover support.](https://github.com/levkk/pgcat)

[Citus Data](https://github.com/citusdata) PostgreSQL extension, no need for application level sharding
[Scalable PostgreSQL with Real-Time Analytics | Citus Data](https://www.citusdata.com/)
[Scaling PostgreSQL with Citus Data's Ozgun Erdogan - Software Engineering Daily](https://softwareengineeringdaily.com/2016/06/01/scaling-postgresql-citus-datas-ozgun-erdogan/)
[Citus: Scale-Out Clustering and Sharding for PostgreSQL](https://www.xaprb.com/blog/citus/)

[Presto | Distributed SQL Query Engine for Big Data](https://prestosql.io/)
[Presto: The Definitive Guide](https://prestosql.io/blog/2020/04/11/the-definitive-guide.html)
[Presto_SQL_on_Everything.pdf](https://prestosql.io/Presto_SQL_on_Everything.pdf)
Presto replace Hive, SQL on anything

[Vitess | A database clustering system for horizontal scaling of MySQL](https://vitess.io/) MySQL wrapper middleware, no need for application level sharding, used by YouTube before Google's acquisition
[Vitess: Scaling MySQL with Sugu Sougoumarane - Software Engineering Daily](https://softwareengineeringdaily.com/2018/05/15/vitess-scaling-mysql-with-sugu-sougoumarane/)
[Vitess: Scaling MySQL Through Distributed Sharding](https://www.xaprb.com/blog/vitess/)

[PlanetScale](https://planetscale.com/) built on Vitess
[PlanetScale: Sharded Database Management with Jiten Vaidya and Dan Kozlowski - Software Engineering Daily](https://softwareengineeringdaily.com/2019/02/21/planetscale-sharded-database-management-with-jiten-vaidya-and-dan-kozlowski/)

[HAProxy - The Reliable, High Performance TCP/HTTP Load Balancer](http://www.haproxy.org/)
HAProxy recipes

[Deploying Active-Active PostgreSQL on Kubernetes](https://info.crunchydata.com/blog/active-active-on-kubernetes)
[PostgreSQL: Documentation: 10: Chapter 26. High Availability, Load Balancing, and Replication](https://www.postgresql.org/docs/current/static/high-availability.html)
[How to Set Up PostgreSQL for High Availability and Replication with Hot Standby | Google Cloud Platform Community](https://cloud.google.com/community/tutorials/setting-up-postgres-hot-standby)
[Scaling Postgres with Read Replicas & Using WAL to Counter Stale Reads — Brandur Leach](https://brandur.org/postgres-reads)
[An Easy Recipe for Creating a PostgreSQL Cluster with Docker Swarm](http://info.crunchydata.com/blog/an-easy-recipe-for-creating-a-postgresql-cluster-with-docker-swarm)

[Understanding Database Failover in the Cloud and Across Regions - Heimdall Blog](http://blog.heimdalldata.com/2016/04/11/understanding-database-failover-in-the-cloud-and-across-regions-2/)
[Understanding Database Failover: Part 2 - Amazon - Heimdall Blog](http://blog.heimdalldata.com/2016/04/12/understanding-database-failover-in-the-cloud-and-across-regions-amazon/)
[Understanding Database Failover: Part 3 - MySQL - Heimdall Blog](http://blog.heimdalldata.com/2016/04/18/understanding-database-failover-in-the-cloud-and-across-regions-mysql/)
[Understanding Database Failover: Part 4 - PostgreSQL - Heimdall Blog](http://blog.heimdalldata.com/2016/04/21/understanding-database-failover-in-the-cloud-and-across-regions-postgresql/)
[Database Scaling with Read/Write Split - Heimdall Blog](http://blog.heimdalldata.com/2017/12/06/database-scaling-read-write-split/)

### ClusterControl

[ClusterControl | Open Source Database Management System](https://severalnines.com/product/clustercontrol)
[severalnines/docker: ClusterControl docker image](https://github.com/severalnines/docker)

[ClusterControl on Docker | Severalnines](https://severalnines.com/blog/clustercontrol-docker)

### Java issues

[Problems with MySQL master/slave allowMasterDownConnections · Issue #625 · brettwooldridge/HikariCP](https://github.com/brettwooldridge/HikariCP/issues/625) slave down will cause server down
[Failover and High availability with MariaDB Connector/J - MariaDB Knowledge Base](https://mariadb.com/kb/en/library/failover-and-high-availability-with-mariadb-connector-j/)

### Replication Lag

[What Causes Replication Lag? | Oracle Learning MySQL Blog](https://blogs.oracle.com/jsmyth/what-causes-replication-lag)
[Goodbye Replication Lag! | MariaDB](https://mariadb.com/resources/blog/goodbye-replication-lag)/
[How to identify and cure MySQL replication slave lag](https://www.percona.com/blog/2014/05/02/how-to-identify-and-cure-mysql-replication-slave-lag/)

[Database replication lag | Dries Buytaert](https://dri.es/database-replication-lag)

[Context aware MySQL pools via HAProxy | GitHub Engineering](https://githubengineering.com/context-aware-mysql-pools-via-haproxy/)
[Mitigating replication lag and reducing read load with freno | GitHub Engineering](https://githubengineering.com/mitigating-replication-lag-and-reducing-read-load-with-freno/)

### OctoBase

[OctoBase - Local-first, yet collaborative database](https://octobase.pro/)
[toeverything/OctoBase: 🐙 OctoBase is the open-source database behind AFFiNE, local-first, yet collaborative. A light-weight, scalable, data engine written in Rust.](https://github.com/toeverything/octobase)

## MySQL

[MySQL](https://www.mysql.com/)
[MySQL - Wikiwand](https://www.wikiwand.com/en/MySQL)

[Course introduction — MySQL for Developers — PlanetScale](https://planetscale.com/courses/mysql-for-developers/introduction/course-introduction)
[Learn MySQL - YouTube](https://www.youtube.com/playlist?list=PLQiYtJSQdSEDH7TCBxm6tgdTc8rbKoX6K) PlanetScale

[千疮百孔的MySQL，世界上最流行的数据库【让编程再次伟大#番外1】 - YouTube](https://www.youtube.com/watch?v=KpJCHsRcZ1g)
[有些数据库是蠢，有些是坏，它是又蠢又坏【让编程再次伟大#番外2】 - YouTube](https://www.youtube.com/watch?v=ConMAwL-cmk)

[Top 5 open source tools for MySQL administrators | InfoWorld](https://www.infoworld.com/article/3241730/database/top-5-open-source-tools-for-mysql-administrators.html)

```sh
# connect to server
mysql -u${user} -p${password} -h ${server} --database ${database}

# within mysql client
use {database};
desc {table};
explain select * from {table};
```

### with Docker

[MySQL on Docker | Severalnines](https://severalnines.com/blog?series=745) from basic to setting up cluster

[MySQL on Docker: Swarm Mode Limitations for Galera Cluster in Production Setups | Severalnines](https://severalnines.com/blog/mysql-docker-swarm-mode-limitations-galera-cluster-production-setups)
[MySQL on Docker: Running ProxySQL as a Helper Container on Kubernetes | Severalnines](https://severalnines.com/blog/mysql-docker-running-proxysql-helper-container-kubernetes)
[MySQL on Docker: Running ProxySQL as Kubernetes Service | Severalnines](https://severalnines.com/blog/mysql-docker-running-proxysql-kubernetes-service)
[MySQL on Docker: Running Galera Cluster on Kubernetes | Severalnines](https://severalnines.com/blog/mysql-docker-running-galera-cluster-kubernetes)

Basics:

[MySQL Docker Containers: Understanding the basics | Severalnines](https://severalnines.com/blog/mysql-docker-containers-understanding-basics) intro to Docker
[MySQL on Docker: Building the Container Image | Severalnines](https://severalnines.com/blog/mysql-docker-building-container-image) building image and pushing to Docker Hub
[MySQL on Docker: Single Host Networking for MySQL Containers | Severalnines](https://severalnines.com/blog/mysql-docker-single-host-networking-mysql-containers)
[MySQL on Docker: Introduction to Docker Swarm Mode and Multi-Host Networking | Severalnines](https://severalnines.com/blog/mysql-docker-introduction-docker-swarm-mode-and-multi-host-networking)

[10 Tips for Building Resilient Payment Systems (2023)](https://shopify.engineering/building-resilient-payment-systems)
[How Shopify’s engineering improved database writes by 50% with ULID - YouTube](https://www.youtube.com/watch?v=f53-Iw_5ucA)

### Dolt

[DoltHub Home |DoltHub](https://www.dolthub.com/) MySQL + Git
[dolthub/dolt: Dolt – Git for Data](https://github.com/dolthub/dolt)

## Drop-in replacements

[MariaDB.org - Continuity and open collaboration](https://mariadb.org/) may not be so since it adds proprietary and open source extensions
[MariaDB TX | Enterprise Open Source Database Platform (DBMS)](https://mariadb.com/products/solutions/oltp-database-tx)
[Library - MariaDB Knowledge Base](https://mariadb.com/kb/en/library/)
[MariaDB on Vimeo](https://vimeo.com/mariadb)
[Sessions | M|18](https://m18.mariadb.com/sessions)
[Sessions | M|17](https://m17.mariadb.com/sessions)
[MariaDB vs MySQL: What is the Difference Between MariaDB and MySQL](https://www.guru99.com/mariadb-vs-mysql.html)

[Percona Server– An enhanced, drop-in MySQL Replacement](https://www.percona.com/software/mysql-database/percona-server)

[PostgreSQL: The world's most advanced open source database](http://www.postgresql.org/)

[H2 Database Engine](http://www.h2database.com/html/main.html)
[HSQLDB](http://hsqldb.org/)

---

# NoSQL

[[sql#JSON support]]

[NoSQL - Wikiwand](https://www.wikiwand.com/en/NoSQL)
[NOSQL Databases](http://nosql-database.org/)
[NoSQL: Past, Present, Future](https://www.infoq.com/presentations/NoSQL-History)
[Visual Guide To NoSQL Systems](http://blog.nahurst.com/visual-guide-to-nosql-systems)
[Why SQL Database? - VoltDB](https://www.voltdb.com/product/features-benefits/sql-database/)
[The basics of NoSQL databases — and why we need them](https://www.freecodecamp.org/news/nosql-databases-5f6639ed9574)
[SQL vs NoSQL: The Differences — SitePoint](https://www.sitepoint.com/sql-vs-nosql-differences/)
[When SQL Isn’t the Right Answer - Better Programming - Medium](https://medium.com/better-programming/when-sql-isnt-the-right-answer-7d06902bc940)
[NoSQL Databases: Why You Don’t Need Them](https://www.singlestore.com/blog/why-nosql-databases-wrong-tool-for-modern-application/)

Next Generation Databases mostly addressing _some of the points_: being non-relational, distributed, open-source and horizontally scalable.

[Picking SQL or NoSQL? – A Compose View](https://compose.io/articles/picking-sql-or-nosql-a-compose-view/)
[SQL vs NoSQL: when to use?](https://www.imaginarycloud.com/blog/sql-vs-nosql/)
[Mathias Meyer - 'Don’t Use NoSQL' on Vimeo](https://vimeo.com/49713827)
[Elasticsearch as a NoSQL Database | Elastic](https://www.elastic.co/blog/found-elasticsearch-as-nosql)
[NoSQL standouts: The best document databases | InfoWorld](https://www.infoworld.com/article/3201884/nosql/nosql-standouts-the-best-document-databases.html)
[NoSQL standouts: The best key-value databases | InfoWorld](https://www.infoworld.com/article/3223728/nosql/nosql-standouts-the-best-key-value-databases.html)

[NoSQL vs. NewSQL\_ Evaluating Database Technologies for 2019 on Vimeo](https://vimeo.com/305493000)

Usually provides BASE eventual consistency (eventual convergence may be a better term).

[MongoDB vs. PostgreSQL vs. ScyllaDB: Tractian’s Experience - The New Stack](https://thenewstack.io/mongodb-vs-postgresql-vs-scylladb-tractians-experience/)

Category in data type/arrangement:

- Key Value (Redis, Memcache)
- Columnar Database (BigTable, Apache HBase, Cassandra)
- Document (MongoDB, OrientDB, CouchDB, RethinkDB, Couchbase, ElasticSearch)
- Graph (Neo4j, OrientDB, ArangoDB)

Category in architecture:

- in-memory
- sharded
- distributed
- replicated
- Realtime (RethinkDB, Firebase)

The first three supports relationship by a second index lookup, `JOIN`-like operation of SQL.

[SQL is Dead, Hail to Flux – devconnected](http://devconnected.com/sql-is-dead-hail-to-flux/)
[Monitoring systemd services in realtime with Chronograf – devconnected](http://devconnected.com/monitoring-systemd-services-in-realtime-with-chronograf/)

## UI Client

[DbGate | Open Source (no)SQL Database Client](https://dbgate.org/) ❗!important
[dbgate/dbgate: Database manager for MySQL, PostgreSQL, SQL Server, MongoDB, SQLite and others. Runs under Windows, Linux, Mac or as web application](https://github.com/dbgate/dbgate)

[FastoNoSQL - cross-platform GUI Manager for Redis, Memcached, SSDB, LevelDB, RocksDB, LMDB, Unqlite, ForestDB, Pika, Dynomite and KeyDB databases.](https://fastonosql.com/)
[fastogt/fastonosql: FastoNoSQL is a crossplatform Redis, Memcached, SSDB, LevelDB, RocksDB, UnQLite, LMDB, ForestDB, Pika, Dynomite, KeyDB GUI management tool.](https://github.com/fastogt/fastonosql/)

---

# Key-Value Database

## Redis (Remote DIctionary Server)

[Redis](https://redis.io/)
[Redis documentation](https://redis.io/documentation)
[Get Started with Redis Modules on AWS - Redis](https://redis.com/modules/get-started/)
[Redis 7.0 Is Near With "Significant Performance Optimizations" - Phoronix](https://www.phoronix.com/scan.php?page=news_item&px=Redis-7.0-rc1)

[Redis Adopts Dual Source-Available Licensing | Redis](https://redis.com/blog/redis-adopts-dual-source-available-licensing/) License change in 2024-03
[Redis Licensing Overview | Redis](https://redis.com/legal/licenses/)
[This sucks. - YouTube](https://www.youtube.com/watch?v=9kpZ1vdQJsE)
[There Is So Much Here.. - YouTube](https://www.youtube.com/watch?v=o4QEwAqV0BQ)
[Redis video sources.md · GitHub](https://gist.github.com/t3dotgg/5032e273267caae18efcd708a2298d34)
[Everyone's Racing To Replace Redis - Who Will Win? - YouTube](https://www.youtube.com/watch?v=ESKDxvPeUUE) Redis is dead

[Learn Redis with Free Online Courses | Redis University](https://university.redis.com/)
[RU203: Querying, Indexing, and Full-Text Search | Redis University](https://university.redis.com/courses/ru203/)

[Redis In-memory Database Crash Course - YouTube](https://www.youtube.com/watch?v=sVCZo5B8ghE)
[I've been using Redis wrong this whole time... - YouTube](https://www.youtube.com/watch?v=WQ61RL1GpEE)

- Redis has Snapshot and Append Only File (similar to Write Ahead Log in Postgres) for persistence
- Redis's data structure can replicate RDB refeatur

[The Little Redis Book](http://openmymind.net/2012/1/23/The-Little-Redis-Book/) at the time of v3.0.3, for core concept only
[AppsInTheOpen](http://appsintheopen.com/posts/23-one-large-redis-or-many-smaller-shards)

[编程技术宇宙 - YouTube](https://www.youtube.com/@user-gq5ss1vi6i/) Redis animations

[Introduction to Redis - DEV Community 👩‍💻👨‍💻](https://dev.to/divyanshutomar/introduction-to-redis-3m2a)
[Introduction to Redis: Installation, CLI Commands, and Data Types](https://auth0.com/blog/introduction-to-redis-install-cli-commands-and-data-types/)
[An introduction to Redis data types and abstractions – Redis](https://redis.io/topics/data-types-intro)
[Redis Crash Course - YouTube](https://www.youtube.com/watch?v=jgpVdJB2sKQ)
[Redis In-Memory Database Crash Course - YouTube](https://www.youtube.com/watch?v=V7FPk4J10KI)

[Redis persistence demystified](http://oldblog.antirez.com/post/redis-persistence-demystified.html)
[Scaling a High-traffic Rate Limiting Stack With Redis Cluster — Brandur Leach](https://brandur.org/redis-cluster)
[How to Use Redis With Python – Real Python](https://realpython.com/python-redis/)
[Using Redis with docker and docker-compose for local development a step-by-step tutorial](https://geshan.com.np/blog/2022/01/redis-docker/)

[Redis Sentinel Documentation – Redis](https://redis.io/topics/sentinel) monitoring, automatic failover, provides HA
[Redis cluster tutorial – Redis](https://redis.io/topics/cluster-tutorial) distributed data store, automatic failover, data sharding
[projecteru/redis-trib.py: Redis Cluster lib in Python](https://github.com/projecteru/redis-trib.py)

[How to use Redis Streams | InfoWorld](https://www.infoworld.com/article/3320021/database/how-to-use-redis-streams.html)
[How to build a Redis Streams application | InfoWorld](https://www.infoworld.com/article/3323064/how-to-use-redis-streams.html)
[How to build a Redis Streams application | InfoWorld](https://www.infoworld.com/article/3323064/how-to-use-redis-streams.html)

[Our failure story with Redis operator for K8s (+ a brief look at Redis data analysis tools)](https://medium.com/flant-com/redis-kubernetes-operator-and-data-analysis-tools-afce55b02123)

[Redis 单线程不行了，快来割 VM/ BIO/ IO 多线程的韭菜！(附源码）-InfoQ](https://www.infoq.cn/article/bYc7yxVW074ySgiwa1c5)

### Ecosystem

[rbmkio/radish: Desktop client for Redis (Windows, macOS, Linux)](https://github.com/rbmkio/radish)

[Introduction · Hydra](https://www.hydramicroservice.com/) using Redis as message queue
[fetlife/redis-analyzer: Redis Memory Analyzer written in Rust](https://github.com/fetlife/redis-analyzer)

[arq — arq v0.25.0 documentation](https://arq-docs.helpmanual.io/)
[samuelcolvin/arq: Fast job queuing and RPC in python with asyncio and redis.](https://github.com/samuelcolvin/arq)

[OptimalBits/bull: Premium Queue package for handling distributed jobs and messages in NodeJS.](https://github.com/OptimalBits/bull)
[nodeca/idoit: Redis-backed task queue engine with advanced task control and eventual consistency](https://github.com/nodeca/idoit)

[twitter/twemproxy: A fast, light-weight proxy for memcached and redis](https://github.com/twitter/twemproxy)

## Valkey

> Redis compatible, forked from 7.2.4

[valkey-io/valkey: A new project to resume development on the formerly open-source Redis project. We're calling it Valkey, since it's a twist on the key-value datastore.](https://github.com/valkey-io/valkey)

[Stop Using Redis. Use Open Source Instead - YouTube](https://www.youtube.com/watch?v=npnagMgbruc)
[Linux Foundation Launches Open Source Valkey Community](https://www.linuxfoundation.org/press/linux-foundation-launches-open-source-valkey-community)

## Garnet

> Redis compatible, written in C#

[Hello from Garnet | Garnet](https://microsoft.github.io/garnet/)
[microsoft/garnet: Garnet is a remote cache-store from Microsoft Research that offers strong performance (throughput and latency), scalability, storage, recovery, cluster sharding, key migration, and replication features. Garnet can work with existing Redis clients.](https://github.com/microsoft/garnet)

## KeyDB

> Redis compatible, focus on performance improvements but lacked 7.0 features

[KeyDB - The faster Redis Alternative](https://keydb.dev/)
[JohnSully/KeyDB: A Multithreaded Fork of Redis](https://github.com/JohnSully/KeyDB)
[KeyDB - Database of Databases](https://dbdb.io/db/keydb)

[KeyDB as a [possible] replacement for Redis - Flant - Medium](https://medium.com/flant-com/keydb-replacement-for-redis-fd9bd159fa9e)
[Redis Should Be Multi-threaded - John Sully - Medium](https://medium.com/@john_63123/redis-should-be-multi-threaded-e28319cab744)

## Dragonfly

[Dragonfly](https://dragonflydb.io/)
[dragonflydb/dragonfly: A modern replacement for Redis and Memcached](https://github.com/dragonflydb/dragonfly)
[Dragonfly - Database of Databases](https://dbdb.io/db/dragonfly)

## Skytable

[Skytable: A free and open-source realtime NoSQL database for building modern apps](https://skytable.io/)
[Introduction | Skytable Documentation](https://docs.skytable.io/)
[skytable/skytable: Skytable is an extremely fast, secure and reliable real-time NoSQL database with automated snapshots and TLS](https://github.com/skytable/skytable)

## Riak

[Key Value Database | NoSQL Key Value Database | Riak KV | Basho](http://basho.com/products/riak-kv/)
[Riak - Database of Databases](https://dbdb.io/db/riak)

## Badger DB

[Golang Key-Value Store - Badger DB | Dgraph](https://dgraph.io/badger)
[dgraph-io/badger: Fast key-value DB in Go.](https://github.com/dgraph-io/badger)

## LMDB

[LMDB: Lightning Memory-Mapped Database Manager (LMDB)](http://www.lmdb.tech/doc/index.html) B+ tree, faster than log based for small tree size
[Lightning Memory-Mapped Database - Wikiwand](https://www.wikiwand.com/en/Lightning_Memory-Mapped_Database)
[Kolab Now Blog: A short guide to LMDB](https://blogs.kolabnow.com/2018/06/07/a-short-guide-to-lmdb)
[LMDB: Getting Started](http://www.lmdb.tech/doc/starting.html)
[LMDB/lmdb: Read-only mirror of official repo on openldap.org.](https://github.com/LMDB/lmdb)
[LMDB - Database of Databases](https://dbdb.io/db/lmdb)

[Symas Lightning Memory-mapped Database | Symas Corporation](https://symas.com/lmdb/)

## Yugabyte DB

[YugaByte DB](https://www.yugabyte.com/) bult on Postgres, multicloud
[Introducing YugaByte DB | YugaByte DB](https://www.yugabyte.com/resources/online-talks/introducing-yugabytedb/)
[Architecture | YugabyteDB Docs](https://docs.yugabyte.com/latest/architecture/)

[YugaByte review: Planet-scale Cassandra and Redis | InfoWorld](https://www.infoworld.com/article/3284357/database/yugabyte-review-planet-scale-cassandra-and-redis.html)
[Review: YugabyteDB does PostgreSQL proud | InfoWorld](https://www.infoworld.com/article/3660060/review-yugabytedb-does-postgresql-proud.html)

[Strong Consistency with YugabyteDB - Vlad Mihalcea](https://vladmihalcea.com/strong-consistency-yugabytedb/)

## LevelDB

> see [[#PouchDB]] for higher level API

[LevelDB.org](http://leveldb.org/)
[google/leveldb: LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values.](https://github.com/google/leveldb)
[Database of Databases - LevelDB](https://dbdb.io/db/leveldb)

[Node.js LevelDB](https://github.com/Level) GitHub org
[Resources · Level/levelup Wiki](https://github.com/Level/levelup/wiki/Resources)
[workshopper/levelmeup: Level Me Up Scotty! An intro to Node.js databases via a set of self-guided workshops.](https://github.com/workshopper/levelmeup)
[LevelDB Review (in 18 parts, seriously) « Another Word For It](https://tm.durusau.net/?p=41113)
[substack/leveldb-handbook: how to modularly database with leveldb](https://github.com/substack/leveldb-handbook)
[[r.va.gg] Should I use a single LevelDB or many to hold my data?](https://r.va.gg/2013/10/should-i-use-a-single-leveldb-or-many-to-hold-my-data.html)

[syndtr/goleveldb: LevelDB key/value database in Go.](https://github.com/syndtr/goleveldb)
[oodrive/leveldb.net: LevelDB for Windows and .NET standard](https://github.com/oodrive/leveldb.net)

[Poor Man's Firebase: LevelDB, REST, and WebSockets](http://procbits.com/2014/01/06/poor-mans-firebase-leveldb-rest-and-websockets)

### Ecosystem

[LevelUp Ecosystem](https://nodejsconfit.levelgraph.io/#13)
[Modules · Level/levelup Wiki](https://github.com/Level/levelup/wiki/Modules)
[[r.va.gg] All the levels!](https://r.va.gg/2013/10/all-the-levels.html)

[Level/levelup: A node.js wrapper for abstract-leveldown compliant stores](https://github.com/Level/levelup)
[Level/leveldown: Pure C++ Node.js LevelDB binding serving as the back-end to LevelUP](https://github.com/Level/leveldown)
[Level/level-js: An abstract-leveldown compliant store on top of IndexedDB.](https://github.com/Level/level-js)
[Level/memdown: In-memory abstract-leveldown store for Node.js and browsers.](https://github.com/Level/memdown)

[levelgraph/levelgraph: Graph database JS style for Node.js and the Browser. Built upon LevelUp and LevelDB.](https://github.com/levelgraph/levelgraph)
[levelgraph/levelgraph-jsonld: The Object Document Mapper for LevelGraph based on JSON-LD](https://github.com/levelgraph/levelgraph-jsonld)

[mafintosh/hypergraph: Yet another Merkle DAG](https://github.com/mafintosh/hypergraph)
[substack/level-create-batch: insert a batch of keys if and only if none of the keys already exist](https://github.com/substack/level-create-batch)
[substack/level-lock: in-memory advisory read/write locks for leveldb keys](https://github.com/substack/level-lock)

[hxoht/lev: The complete REPL & CLI for managing LevelDB instances.](https://github.com/hxoht/lev)
[maxogden/superlevel: a minimalist cli utility for leveldb databases](https://github.com/maxogden/superlevel)

[hxoht/levelui: A GUI for LevelDB management based on atom-shell.](https://github.com/hxoht/levelui)
[ricardobeat/levelhud: Graphical front-end for exploring data stored in LevelDB.](https://github.com/ricardobeat/levelhud)

### Presentations

[A Real Database Rethink](https://r.va.gg/presentations/nodeconfeu.2013/)
[JavaScript Databases II](https://r.va.gg/presentations/lxjs2013/)

[Optimizing LevelDB for Performance and Scale (RICON East 2013) - Speaker Deck](https://speakerdeck.com/basho/optimizing-leveldb-for-performance-and-scale-ricon-east-2013)
[How to Cook a Graph Database in a Night](https://nodejsconfit.levelgraph.io/)
[Build your own database with LevelDB and Node.js](https://mcollina.github.io/levelup-talk-cloudconf/)

## PouchDB

[PouchDB, the JavaScript Database that Syncs!](https://pouchdb.com/)
CouchDB, LevelDB and browsers compatible

[pouchdb/pouchdb: - PouchDB is a pocket-sized database.](https://github.com/pouchdb/pouchdb)

### Ecosystem

[[#LevelDB]]

[PouchDB Community](https://github.com/pouchdb-community)
[Adapters](https://pouchdb.com/adapters.html)
[Plugins and External Projects](https://pouchdb.com/external.html)

[pouchdb-community/pouchdb-load: Load documents into CouchDB/PouchDB from a dumpfile](https://github.com/pouchdb-community/pouchdb-load)

## RocksDB

[RocksDB | A persistent key-value store | RocksDB](https://rocksdb.org/) forked from LevelDB 1.5, allows multiple writers, reduces stalls and write amplification

[Getting started | RocksDB](https://rocksdb.org/docs/getting-started.html)
[Home · facebook/rocksdb Wiki](https://github.com/facebook/rocksdb/wiki)
[RocksDB Basics · facebook/rocksdb Wiki](https://github.com/facebook/rocksdb/wiki/RocksDB-Basics)
[Features Not in LevelDB · facebook/rocksdb Wiki](https://github.com/facebook/rocksdb/wiki/Features-Not-in-LevelDB)
[Administration and Data Access Tool · facebook/rocksdb Wiki](https://github.com/facebook/rocksdb/wiki/Administration-and-Data-Access-Tool) `ldb` CLI tool

[Under the Hood: Building and open-sourcing RocksDB](https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-and-open-sourcing-rocksdb/10151822347683920)

[facebook/rocksdb: A library that provides an embeddable, persistent key-value store for fast storage.](https://github.com/facebook/rocksdb)
[warrenfalk/rocksdb-sharp: .net bindings for the rocksdb by facebook](https://github.com/warrenfalk/rocksdb-sharp)
[Welcome to python-rocksdb’s documentation! — python-rocksdb documentation](https://python-rocksdb.readthedocs.io/en/latest/index.html)

[MyRocks: A space- and write-optimized MySQL database | Engineering Blog | Facebook Code](https://code.facebook.com/posts/190251048047090/myrocks-a-space-and-write-optimized-mysql-database/)
[facebook/mysql-5.6: Facebook's branch of the Oracle MySQL v5.6 database. This includes MyRocks.](https://github.com/facebook/mysql-5.6)

[SEHException thrown after disposal and reopen · Issue #5 · curiosity-ai/rocksdb-sharp](https://github.com/curiosity-ai/rocksdb-sharp/issues/5) C# binding's library may crash on CPU without AVX2 (now fixed)

## YottaDB

[YottaDB | Rock Solid. Lightning Fast. Secure.](https://yottadb.com/)
[Documentation - YottaDB](https://yottadb.com/resources/documentation/)

- Multi-Language Database Access
- Daemon-less Database Engine
- Optimistic Concurrency Control

[YottaDB · GitLab](https://gitlab.com/YottaDB)

## TiKV

[[#TiDB]]

## GunDB

[GUN - Graph Database](https://gun.eco/)
A key-value database written in Node.js that supports:

- graph relationship
- realtime support
- distributed
- offline

[amark/gun: A realtime, decentralized, offline-first, graph database engine.](https://github.com/amark/gun)
[The Changelog #236: GunDB, Venture Backed and Decentralized with Mark Nadal | Changelog](https://changelog.com/podcast/236)
[GunDB, Venture Backed and Decentralized with Mark Nadal (Changelog Interviews #236)](https://changelog.com/podcast/236)

---

# Document Database

[Why the Document Model Is More Cost-Efficient Than RDBMS - The New Stack](https://thenewstack.io/why-the-document-model-is-more-cost-efficient-than-rdbms/)

RDBMS not suitable for high-velocity online transaction processing (OLTP) workloads for its data being normalized.
But modern processors are powerful enough that we get away with it anyways.
RDBMS solutions rely on cheap CPU cycles to enable efficient solutions. NoSQL solutions rely on efficient data models to minimize the amount of CPU required to execute common queries.

## CouchDB

[Apache CouchDB](https://couchdb.apache.org/)
[#bbuzz: Jan Lehnard "The CouchDB Implementation" - YouTube](https://www.youtube.com/watch?v=edbi9jJZkpg)

[robertkowalski/learnyoucouchdb: Learn you CouchDB for great good!](https://github.com/robertkowalski/learnyoucouchdb)

## RethinkDB

[RethinkDB: the open-source database for the realtime web](https://rethinkdb.com/)
[Frequently asked questions - RethinkDB](https://rethinkdb.com/faq/)

[RethinkDB - Wikiwand](https://www.wikiwand.com/en/RethinkDB)
[rethinkdb/rethinkdb: The open-source database for the realtime web.](https://github.com/rethinkdb/rethinkdb)
[Ten-minute guide with RethinkDB and JavaScript - RethinkDB](https://rethinkdb.com/docs/guide/javascript/)
[Jepsen: RethinkDB 2.1.5](https://aphyr.com/posts/329-jepsen-rethinkdb-2-1-5)
[Jepsen: RethinkDB 2.2.3 reconfiguration](https://aphyr.com/posts/330-jepsen-rethinkdb-reconfiguration)

Originally designed as database for SSD, then re-targets realtime application
Push model, live query forms a pub/sub stream ([changefeeds](https://rethinkdb.com/docs/changefeeds/javascript/))
Document store with [table joins](https://rethinkdb.com/docs/table-joins/)
ACID guarantee, durable by default (commit to disk before ack)
Value consistency, unless client explicitly requesting stale data
[ReQL](https://rethinkdb.com/docs/introduction-to-reql/), python like, chain-able query

The company behind RethinkDB shutdown in 2016-10. CNCF bought the rights to the open source project and donated it to The Linux Foundation in 2017-02.
[RethinkDB is shutting down - RethinkDB](https://rethinkdb.com/blog/rethinkdb-shutdown/)
[RethinkDB joins The Linux Foundation - RethinkDB](https://rethinkdb.com/blog/rethinkdb-joins-linux-foundation/)

[RethinkDB with Slava Akhmechet (Changelog Interviews #114)](https://changelog.com/podcast/114)
[RethinkDB, Databases, the Realtime Web with Slava Akhmechet (Changelog Interviews #181)](https://changelog.com/podcast/181)
[SE-Radio Episode 243: RethinkDB with Slava Akhmechet : Software Engineering Radio](https://www.se-radio.net/2015/12/se-radio-episode-243-rethinkdb-with-slava-akhmechet/)

### Horizon

[Horizon](https://horizon.io/) is a JavaScript backend built with RethinkDB

## Xodus

[JetBrains/xodus: JetBrains Xodus is a Java transactional schema-less embedded database used by JetBrains YouTrack and JetBrains Hub.](https://github.com/JetBrains/xodus)
[Home · JetBrains/xodus Wiki](https://github.com/JetBrains/xodus/wiki)

[How to use the Xodus database in Kotlin applications](https://www.freecodecamp.org/news/how-to-use-the-xodus-database-in-kotlin-applications-3f899896b9df)

## RavenDB

[RavenDB - ACID NoSQL Document Database](https://ravendb.net/)
[ravendb/ravendb: A linq enabled document database for .NET](https://github.com/ravendb/ravendb)

## Elasticsearch

[[elastic-elasticsearch]]

## CrateDB

[Real-time Unified Data Layer for Analytics, Search and AI](https://cratedb.com/)
[CrateDB](https://github.com/crate/) GitHub org
[CrateDB: Guide](https://cratedb.com/docs/guide/)
[CrateDB: Reference](https://cratedb.com/docs/crate/reference/en/latest/)
[CrateDB Academy Course Overview](https://learn.cratedb.com/course-overview)

SQL over Elasticsearch, works for both operation database and analytic (OLTP to OLAP).
Containerized deployment, meant for scale.

## MongoDB

[[mongodb]]

## ToroDB

MongoDB protocol and APIs backed by PostgreSQL.

[ToroDB | ToroDB](https://www.torodb.com/)
[torodb/server: ToroDB Server is an open source NoSQL database that runs on top of a RDBMS. Compatible with MongoDB protocol and APIs, but with support for native SQL, atomic operations and reliable and durable backends like PostgreSQL](https://github.com/torodb/server)
[torodb/stampede: The ToroDB solution to provide better analytics on top of MongoDB and make it easier to migrate from MongoDB to SQL](https://github.com/torodb/stampede) Transform your NoSQL data from a MongoDB replica set into a relational database in PostgreSQL.

[torodb/mongowp: Mongo Wire Protocol layer to create server applications](https://github.com/torodb/mongowp) Wraps data source as Mongo compatible server

## EdgeDB

EdgeQL/GraphQL and REST backed by PostgreSQL.

[EdgeDB—The next generation database](https://edgedb.com/)
[edgedb/edgedb: A graph-relational database with declarative schema, built-in migration system, and a next-generation query language](https://github.com/edgedb/edgedb)

---

# Columnar Database/Wide Column Store

[Column vs Row Oriented Databases Explained - YouTube](https://www.youtube.com/watch?v=Vw1fCeD06YI)

## Apache HBase

[Apache HBase – Apache HBase™ Home](https://hbase.apache.org/)
[Apache HBase - Wikiwand](https://www.wikiwand.com/en/Apache_HBase)
implements Google's BigTable with Hadoop and HDFS

[Configuring and deploying HBase [Tutorial] | Packt Hub](https://hub.packtpub.com/configuring-and-deploying-hbase-tutorial/)
[How to interact with HBase using HBase shell [Tutorial] | Packt Hub](https://hub.packtpub.com/interact-with-hbase-using-hbase-shell-tutorial/)

## Apache Cassandra

[The Apache Cassandra Project](https://cassandra.apache.org/)
[Apache Cassandra - Wikiwand](https://www.wikiwand.com/en/Apache_Cassandra)

[Top 5 reasons to use Apache Cassandra Database | IT Svit Blog](https://itsvit.com/blog/top-5-reasons-use-apache-cassandra-database/)

[#bbuzz: Sylvain Lebresne "On Cassandra's evolutions" - YouTube](https://www.youtube.com/watch?v=HuUu2MgbiT8)
[How Discord Stores Trillions of Messages | Deep Dive - YouTube](https://www.youtube.com/watch?v=xynXjChKkJc&t=10s)

[DataStax Academy: Free Cassandra Tutorials and Training](https://academy.datastax.com/)

[Running Cassandra in Kubernetes: challenges and solutions](https://medium.com/flant-com/running-cassandra-in-kubernetes-challenges-and-solutions-9082045a7d93)

## Scylla

[ScyllaDB](https://www.scylladb.com/)
[Scylla (database) - Wikiwand](<https://www.wikiwand.com/en/Scylla_(database)>)
Cassandra compatible with higher throughputs and lower latencies

[scylladb/scylla: NoSQL data store using the seastar framework, compatible with Apache Cassandra](https://github.com/scylladb/scylla)

[Scylla Care-Pet Example | ScyllaDB Docs](https://iot.scylladb.com/stable/)
[scylladb/care-pet: Care Pet IoT ScyllaDB example](https://github.com/scylladb/care-pet)
[Build your First ScyllaDB Application: New Rust, Python & PHP Tutorials - ScyllaDB](https://www.scylladb.com/2023/05/31/build-your-first-scylladb-application-new-rust-python-php-tutorials/)

[Cassandra Compliant ScyllaDB with Dor Laor | Software Engineering Daily](https://softwareengineeringdaily.com/2016/06/28/cassandra-compliant-scylladb-with-dor-laor/)
Column store, without join, no atomic transaction (no 2 phase commit, not strongly consistent), schemaful, highly scalable, CQL
Acknowledge client after reaching quorum in cluster
Append only, fast write in expense of read
Java tuning and GC pause
Sharding per core, localize memory and lockless

[Seastar - Seastar](https://seastar.io/)
C++ framework for high-performance server applications on modern hardware

## BigTable

[Bigtable - Scalable NoSQL Database Service | Google Cloud](https://cloud.google.com/bigtable/)
[Bigtable - Wikiwand](https://www.wikiwand.com/en/Bigtable)

[Bigtable: A Distributed Storage System for Structured Data – Google AI](https://ai.google/research/pubs/pub27898)

---

# Full-text search

[[mongodb#Text Search]]

[SQLite FTS5 Extension](https://www.sqlite.org/fts5.html) full-text search

## Lyra

[Lyra](https://lyrajs.io/)
[LyraSearch/lyra: 🌌 Fast, in-memory, typo-tolerant, full-text search engine written in TypeScript.](https://github.com/LyraSearch/lyra)

[Lyra: Disrupting full Text Search industry with JavaScript - YouTube](https://www.youtube.com/watch?v=B0MfK-rBK90)

---

# In-memory/Lite Database

[[#LevelDB]]

[In-memory database - Wikiwand](https://www.wikiwand.com/en/In-memory_database)
[Adding a cache is not as simple as it may seem... - YouTube](https://www.youtube.com/watch?v=bFf-A27Rc9s)

[Lightweight javascript in-memory database: LokiJS](http-agents.md://techfort.github.io/LokiJS/) Mongo API
[techfort/LokiJS: javascript embeddable / in-memory database](https://github.com/techfort/LokiJS/)
[LokiJS-Forge/LokiDB: blazing fast, feature-rich in-memory database written in TypeScript](https://github.com/LokiJS-Forge/LokiDB) LokiDB is the official successor of LokiJS, but updated less frequently than LokiJS

[louischatriot/nedb: The JavaScript Database, for Node.js, nw.js, electron and the browser](https://github.com/louischatriot/nedb) not actively maintained, Mongo API
[Database of Databases - NeDB](https://dbdb.io/db/nedb)

[TerminusDB an open-source in-memory document graph database](https://terminusdb.com/)
[TerminusDB Internals - Part 1: Smaller, Faster, Stronger](https://terminusdb.com/blog/terminusdb-internals)
[TerminusDB Internals - Part 2: Change is Gonna Come](https://terminusdb.com/blog/terminusdb-internals-2/)

[node.js - What (in_memory) graph DB if modeling data is focused - Stack Overflow](https://stackoverflow.com/questions/31565386/what-in-memory-graph-db-if-modeling-data-is-focused)

---

# Lightweight Database

Single file/folder, cross-platform, in process database with persistence.

KV:

[Database of Databases - LMDB](https://dbdb.io/db/lmdb)
[Database of Databases - LevelDB](https://dbdb.io/db/leveldb)
[Database of Databases - RocksDB](https://dbdb.io/db/rocksdb)
[Database of Databases - BadgerDB](https://dbdb.io/db/badgerdb)
[Database of Databases - ForestDB](https://dbdb.io/db/forestdb)

[Database of Databases - Sled](https://dbdb.io/db/sled)
[sled - Rust](https://docs.rs/sled/0.34.6/sled/)
[KodrAus/rust-csharp-ffi: An example Rust + C# hybrid application](https://github.com/KodrAus/rust-csharp-ffi)

SQL:

[[sqlite]]
[DuckDB - An in-process SQL OLAP database management system](https://duckdb.org/)
[Firebird: The true open source database for Windows, Linux, Mac OS X and more](https://firebirdsql.org/)
[LiteDB :: A .NET embedded NoSQL database](https://www.litedb.org/)

## Bolt

[boltdb/bolt: An embedded key/value database for Go.](https://github.com/boltdb/bolt) 😴inactive
[etcd-io/bbolt: An embedded key/value database for Go.](https://github.com/etcd-io/bbolt) active fork
[asdine/storm: Simple and powerful toolkit for BoltDB](https://github.com/asdine/storm)

---

# Graph Database

[Why relationships are cool but "join" sucks](http://www.slideshare.net/lvca/why-relationships-are-cool-but-join-sucks-28997951)
[10 good reasons to use graph databases - NaNLABS](https://www.nan-labs.com/blog/10-good-reasons-use-graph-databases/)
[Why you should use a graph database | InfoWorld](https://www.infoworld.com/article/3251829/nosql/why-you-should-use-a-graph-database.html)
[What is a graph database? A better way to store connected data | InfoWorld](https://www.infoworld.com/article/3263764/database/what-is-a-graph-database-a-better-way-to-store-connected-data.html)
[On Graph Databases | The Backend Engineering Show - YouTube](https://www.youtube.com/watch?v=tvuZ-wqSTi0)

## Dgraph

[Dgraph — A Distributed, Fast Graph Database](https://dgraph.io/)

## eBay Akutan

[Akutan: A Distributed Knowledge Graph Store](https://tech.ebayinc.com/engineering/akutan-a-distributed-knowledge-graph-store/)
[eBay/akutan: A distributed knowledge graph store](https://github.com/eBay/akutan) archived

## Apache TinkerPop

The _Standard_ API for interacting with GraphDB.

[Apache TinkerPop](http://tinkerpop.apache.org/)
[TinkerPop3 Documentation](http://tinkerpop.apache.org/docs/current/reference/)

## Neo4j

[Neo4j: The World's Leading Graph Database](https://neo4j.com/)
[Review: Neo4j supercharges graph analytics | InfoWorld](https://www.infoworld.com/article/3256064/database/review-neo4j-graph-database-supercharges-graph-analytics.html)
[Learn to Build Graph Databases with Neo4j (Full Course)](https://www.freecodecamp.org/news/learn-neo4j-database-course/)

## Memgraph

[Memgraph - Open Source Graph Database](https://memgraph.com/)
[memgraph/memgraph: Open-source graph database, built for real-time streaming data, compatible with Neo4j.](https://github.com/memgraph/memgraph)

## FlockDB

[twitter-archive/flockdb: A distributed, fault-tolerant graph database](https://github.com/twitter-archive/flockdb)

## Crux

[Crux](https://opencrux.com/main/index.html) general purpose database with bitemporal SQL & Datalog
[JUXT Blog - Kotlin Adventures With Crux](https://www.juxt.pro/blog/crux-kotlin)

## AnzoGraph

[AnzoGraph™](https://www.cambridgesemantics.com/product/anzograph/)
[AnzoGraph review: A graph database for deep analytics | InfoWorld](https://www.infoworld.com/article/3388649/anzograph-a-graph-database-for-deep-analytics.html)
[AnzoGraph: A W3C Standards-Based Graph Database – Towards Data Science](https://towardsdatascience.com/anzograph-a-w3c-standards-based-graph-database-9836fa64087e)

## TigerGraph

[Home - TigerGraph](https://www.tigergraph.com/) free for non-commercial use
[TigerGraph review: A graph database designed for deep analytics | InfoWorld](https://www.infoworld.com/article/3328438/tigergraph-review-a-graph-database-designed-for-deep-analytics.html)

---

# Vector Database

> [[datebase-postgresql#pgvector/pgvectorscale]]

[WTF Is a Vector Database: A Beginner's Guide! - DEV Community](https://dev.to/pavanbelagatti/wtf-is-a-vector-database-a-beginners-guide-16p)
[The Power of Vector Databases For Knowledge Search - YouTube](https://www.youtube.com/watch?v=awIm3rQOBxE)
[Why are they suddenly so popular? - YouTube](https://www.youtube.com/watch?v=IvyAMw7B39k)
[Vector Databases and the Future of AI-powered Search - Sam Partee - YouTube](https://www.youtube.com/watch?v=g2bNHLeKlAg) Redis Vector Search

[All You Need to Know about Vector Databases and How to Use Them to Augment Your LLM Apps | by Dominik Polzer | Sep, 2023 | Towards Data Science](https://towardsdatascience.com/all-you-need-to-know-about-vector-databases-and-how-to-use-them-to-augment-your-llm-apps-596f39adfedb)
[Which Vector Database Should I Use? A Comparison Cheatsheet | by Navid Rezaei | Medium](https://navidre.medium.com/which-vector-database-should-i-use-a-comparison-cheatsheet-cb330e55fca)
[Vector Database Comparison Cheatsheet - Google Sheets](https://docs.google.com/spreadsheets/d/1oAeF4Q7ILxxfInGJ8vTsBck3-2U9VV8idDf3hJOozNw/edit#gid=0)
[Pgvector vs. Pinecone: Vector Database Comparison](https://www.timescale.com/blog/pgvector-vs-pinecone/)

[Document-Oriented Agents: Vector Databases, LLMs, Langchain, FastAPI, and Docker | Towards Data Science](https://towardsdatascience.com/document-oriented-agents-a-journey-with-vector-databases-llms-langchain-fastapi-and-docker-be0efcd229f4)
[Explaining Vector Databases in 3 Levels of Difficulty | by Leonie Monigatti | Towards Data Science](https://towardsdatascience.com/explaining-vector-databases-in-3-levels-of-difficulty-fc392e48ab78)
[How to implement a vector database for AI - LogRocket Blog](https://blog.logrocket.com/implement-vector-database-ai/)

[【上集】向量数据库技术鉴赏 - YouTube](https://www.youtube.com/watch?v=W_ZUUDJsUtA)
[【下集】向量数据库技术鉴赏 - YouTube](https://www.youtube.com/watch?v=ct20Kv8yn0U)

## Top lists

[Top 5 Vector Database Solutions for Your AI Project - The New Stack](https://thenewstack.io/top-5-vector-database-solutions-for-your-ai-project/)
[The 5 Best Vector Databases | A List With Examples | DataCamp](https://www.datacamp.com/blog/the-top-5-vector-databases)
[6 open-source Pinecone alternatives for LLMs](https://blog.apify.com/pinecone-alternatives/)
[12 Vector Databases For 2023: A Review](https://lakefs.io/blog/12-vector-databases-2023/)
[Vector Database - A Comprehensive Guide | by Navid Rezaei | Towards Data Science](https://towardsdatascience.com/vector-database-a-comprehensive-guide-2b1a3b0a8b9f)
[Best Vector Database Software in 2023 | G2](https://www.g2.com/categories/vector-database)
[Vector databases - a look at the AI database market with a comprehensive comparison matrix](https://objectbox.io/vector-database/)

## Qdrant

[Qdrant - Vector Database](https://qdrant.tech/)
[Qdrant Documentation - Qdrant](https://qdrant.tech/documentation/) Similarity search
[qdrant/qdrant: Qdrant - High-performance, massive-scale Vector Database for the next generation of AI. Also available in the cloud https://cloud.qdrant.io/](https://github.com/qdrant/qdrant)

## Milvus

[Vector database - Milvus](https://milvus.io/)
[Milvus documentation](https://milvus.io/docs) Similarity search
[milvus-io/milvus: A cloud-native vector database, storage for next generation AI applications](https://github.com/milvus-io/milvus)

## Weaviate

[Welcome | Weaviate - vector database](https://weaviate.io/)
[Introduction | Weaviate - vector database](https://weaviate.io/developers/weaviate) Similarity search
[weaviate/weaviate: Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.](https://github.com/weaviate/weaviate)

## Vespa

[Vespa - the big data serving engine](https://vespa.ai/)
[Vespa Documentation](https://docs.vespa.ai/) nearest neighbor search, approximate nearest neighbor search
[vespa-engine/vespa: The open big data serving engine. https://vespa.ai](https://github.com/vespa-engine/vespa)

## Faiss

[Welcome to Faiss Documentation — Faiss documentation](https://faiss.ai/) similarity search, approximate similarity search
[facebookresearch/faiss: A library for efficient similarity search and clustering of dense vectors.](https://github.com/facebookresearch/faiss)

## Chroma

[Chroma](https://www.trychroma.com/)
[chroma-core/chroma: the AI-native open-source embedding database](https://github.com/chroma-core/chroma)

## NucliaDB

[Nuclia vector database](https://nuclia.com/vector-database/)
[nuclia/nucliadb: NucliaDB, The vector database optimized for documents and video search](https://github.com/nuclia/nucliadb)

## LlamaIndex

[LlamaIndex 🦙](https://docs.llamaindex.ai/en/stable/)
[run-llama/llama_index: LlamaIndex (formerly GPT Index) is a data framework for your LLM applications](https://github.com/run-llama/llama_index)

## Pinecone

[Vector Database for Vector Search | Pinecone](https://www.pinecone.io/)
[【人工智能】爆肝万字介绍向量数据库和 Pinecone | 向量搜索的演化过程 | LLM 是人类的大脑，向量数据库就是海马体 | Pinecone 的发展历程 | Pinecone 直接和潜在竞争对手有哪些 - YouTube](https://www.youtube.com/watch?v=u03AZlmZF_8)

---

# NewSQL

[[datebase-postgresql]]

[NewSQL - Wikiwand](https://www.wikiwand.com/en/NewSQL)
[NoSQL vs. NewSQL: Choosing the Right Tool - VoltDB](https://www.voltdb.com/blog/2015/04/09/nosql-vs-newsql-choosing-right-tool/)

[NoSQL Is Dead](https://www.infoq.com/presentations/nosql-commonalities)
[Thank You for Your Help NoSQL, but We Got It From Here - DZone Database](https://dzone.com/articles/thank-you-for-your-help-nosql-but-we-got-it-from-h)

NewSQL are relational databases that scales easily horizontally
[What is Distributed SQL? - The Distributed SQL Blog](https://blog.yugabyte.com/what-is-distributed-sql/)
[Distributed SQL vs. NewSQL - The Distributed SQL Blog](https://blog.yugabyte.com/distributedsql-vs-newsql/)

Better performance than RMDBS
ACID guarantee of RMDBS
Better scaling strategy than RMDBS
=> Performance and Scale Without Compromise

## VoltDB

[In-Memory Database | VoltDB](https://www.voltdb.com/) a NewSQL database that combines the scale + performance of NoSQL with immediate consistency + ACID transactions
[VoltDB - Wikiwand](https://www.wikiwand.com/en/VoltDB)

[Jepsen: VoltDB 6.3](https://aphyr.com/posts/331-jepsen-voltdb-6-3)

[VoltDB and In-Memory Databases with John Hugg - Software Engineering Daily](https://softwareengineeringdaily.com/2016/02/23/voltdb-and-in-memory-databases-with-john-hugg/)
[Episode 199: Michael Stonebraker on Current Developments in Databases : Software Engineering Radio](https://www.se-radio.net/2013/12/episode-199-michael-stonebraker/)

[Intelligent Real-Time Decisions with VoltDB and Apache Kafka](https://embed.vidyard.com/share/t4fPngEM2A3X5e9MY5xZti)

Row based, each row is stored as a record of proprietary format on storage
adjacent rows are stored consecutively on block device
Write ahead lock to support rollback and crash recovery
Query language of choice is SQL
B-tree index
Query optimizers and query executor
Multithreaded, lock b-tree

HA is a byproduct of scaling out to multiple node

X record level locking
Multiversion concurrency control
Optimiztic, write to new location, assuming transaction is successful, resolve if conflict exist
timestamp ordering
Require time sync
X lock for crash recovery
Command logging, slower recovery
HA by default, recovery from command log is rare case
X buffer pool
not in main memory database
X multithreading
Sharding with cores
Latchfree data structure

Critics on NoSQL:

- Eventual consistency will garbage the db and settle to an unacceptable state (negative stock)
  Correct way:
  Active active replication, execute command on each replica
  Active passive replication, execute command on master, reliably send the log to secondary replica and fast forward
  AA is faster, all or nothing execution
- Jeff Dean
  Spanner, nosql with ACID
  Nosql switched to high level query language much like SQL and ditching some of the low-level record language they initially provide
  Nosql, not only SQL, not yet sql

Hdfs, map reduce, hive and pig (sql like)
Hive long running job, resume interrupted computation

## MemSQL

[MemSQL: The Database For Real-Time Applications](https://www.memsql.com/)
[MemSQL - Wikiwand](https://www.wikiwand.com/en/MemSQL)

## CockroachDB

[Cockroach Labs](https://www.cockroachlabs.com/)
[Cockroach Labs - Wikiwand](https://www.wikiwand.com/en/Cockroach_Labs)

CockroachDB is a cloud-native SQL database for building global, scalable cloud services that survive disasters.

[Open source SQL database CockroachDB hits 1.0 | InfoWorld](http://www.infoworld.com/article/3195773/database/open-source-sql-database-cockroachdb-hits-10.html)
[Be Flexible & Consistent: JSON Comes to CockroachDB | Cockroach Labs](https://www.cockroachlabs.com/blog/json-coming-to-cockroach/)

## SpacetimeDB

> built for MMORPG

[SpacetimeDB](https://spacetimedb.com/)
[clockworklabs/SpacetimeDB: Multiplayer at the speed of light](https://github.com/clockworklabs/SpacetimeDB)

[A breakthrough in game dev - SpacetimeDB 1.0 - YouTube](https://www.youtube.com/watch?v=kzDnA_EVhTU)

## TiDB

[Home| PingCAP](https://pingcap.com/en/)
[TiDB | PingCAP](https://pingcap.com/products/tidb/)
[pingcap/tidb: TiDB is a distributed HTAP database compatible with the MySQL protocol](https://github.com/pingcap/tidb)

[TiDB Academy | PingCAP](https://pingcap.com/tidb-academy/)
[How we build TiDB| PingCAP](https://pingcap.com/blog/2016-10-17-how-we-build-tidb/)
[TiDB 社区技术月刊 | TiDB Books](https://tidb.net/book/tidb-monthly/)

[TiDB Operator 1.0 GA: Database Cluster Deployment and Management Made Easy with Kubernetes | TiDB](https://pingcap.com/blog/database-cluster-deployment-and-management-made-easy-with-kubernetes/)
[How to save time with TiDB | Opensource.com](https://opensource.com/article/19/3/how-save-time-tidb)
[5 key differences between MySQL and TiDB | Opensource.com](https://opensource.com/article/18/11/key-differences-between-mysql-and-tidb)
[Implementing Distributed Transactions the Google Way: Percolator vs. Spanner - The Distributed SQL Blog](https://blog.yugabyte.com/implementing-distributed-transactions-the-google-way-percolator-vs-spanner/)

[Kubernetes Podcast from Google: Episode 121 - TiKV, TiDB and PingCAP, with Ed Huang](https://kubernetespodcast.com/episode/121-tikv-tidb-and-pingcap/)
[TiKV | A distributed transactional key-value database](https://tikv.org/) contrinbuted to CNCF

[TiDB 的后花园](https://zhuanlan.zhihu.com/newsql)

### TiKV

[pingcap/tikv: Distributed transactional key value database powered by Rust and Raft](https://github.com/pingcap/tikv) uses Rust, Raft, RocksDB
[A Deep Dive into TiKV| PingCAP](https://pingcap.com/blog/2016-11-09-Deep-Dive-into-TiKV/)
[A TiKV Source Code Walkthrough - Raft in TiKV| PingCAP](https://pingcap.com/blog/2017-07-28-raftintikv/)
[RocksDB in TiKV| PingCAP](https://pingcap.com/blog/2017-09-15-rocksdbintikv/)

[TiKV 源码初探](https://zhuanlan.zhihu.com/p/24564094)

[TiKV - building a distributed key-value store with Rust A transactional key-value store powered by … - YouTube](https://www.youtube.com/watch?v=fhXsPubj4HE)

## Google Cloud Spanner

[Cloud Spanner | Automatic Sharding with Transactional Consistency at Scale | Google Cloud](https://cloud.google.com/spanner/)
[Spanner (database) - Wikiwand](<https://www.wikiwand.com/en/Spanner_(database)>)

[Google's Cloud Spanner: how does it stack up? | ZDNet](https://www.zdnet.com/article/google-spanner-and-how-it-compares-to-microsofts-cosmos-db/)
[Spanner vs. Calvin: Distributed Consistency at Scale](https://fauna.com/blog/distributed-consistency-at-scale-spanner-vs-calvin)

---

# Transactional Database

## Tiger Beetle

[TigerBeetle - Track Financial Transactions at Scale | TigerBeetle](https://tigerbeetle.com/)
[tigerbeetle/tigerbeetle: The distributed financial transactions database designed for mission critical safety and performance.](https://github.com/tigerbeetle/tigerbeetle)
[The FASTEST and SAFEST Database - YouTube](https://www.youtube.com/watch?v=sC1B3d9C_sI)

---

# Multi Model

[Data modeling with multi-model databases - O'Reilly Radar](http://radar.oreilly.com/2015/07/data-modeling-with-multi-model-databases.html)
[SE-Radio Episode 353: Max Neunhoffer on Multi-model databases and ArangoDB : Software Engineering Radio](https://www.se-radio.net/2019/01/se-radio-episode-353-max-neunhoffer-on-multi-model-databases-and-arangodb/)

## SurrealDB

> written in Rust; SQL; ACID; schemaless or schemafull; relational, graph and document

[SurrealDB | The ultimate serverless cloud database](https://surrealdb.com/)
[surrealdb/surrealdb: A scalable, distributed, collaborative, document-graph database, for the realtime web](https://github.com/surrealdb/surrealdb)
[SurrealDB in 100 Seconds - YouTube](https://www.youtube.com/watch?v=C7WFwgDRStM)
[Beyond Surreal? A closer look at NewSQL Relational Data - YouTube](https://www.youtube.com/watch?v=LCAIkx1p1k0)
[Rust Powered Database SurrealDB (It's Pretty Ambitious) - YouTube](https://www.youtube.com/watch?v=DPQbuW9dQ7w)
[Getting started with SurrealDB!! Future of cloud databases (maybe)? - YouTube](https://www.youtube.com/watch?v=D41jb4DDIdA)

## OrientDB

[OrientDB - Distributed Graph/Document Multi-Model Database](http://orientdb.com/)
[OrientDB - Wikiwand](https://www.wikiwand.com/en/OrientDB)

Multi-model database supporting graph, document, key/value, and object models.
Relationships are managed by graph.

[Why OrientDB | Open Source NoSQL Multi-model Database | OrientDB](https://orientdb.com/why-orientdb/)
[OrientDB - Getting Started | Udemy](https://www.udemy.com/orientdb-getting-started/)

## ArangoDB

[ArangoDB - highly available multi-model NoSQL database](https://www.arangodb.com/)
[ArangoDB - Wikiwand](https://www.wikiwand.com/en/ArangoDB)
Document, Graph, KV
Supports JavaScript (V8 Engine)

[Data modeling with multi-model databases - O'Reilly Radar](http://radar.oreilly.com/2015/07/data-modeling-with-multi-model-databases.html)

## FoundationDB

[FoundationDB | Home](https://www.foundationdb.org/)
[Announcing The FoundationDB Record Layer](https://www.foundationdb.org/blog/announcing-record-layer/) SQL/FoundationDB

[FoundationDB](https://apple.github.io/foundationdb/index.html)
[apple/foundationdb: FoundationDB - the open source, distributed, transactional key-value store](https://github.com/apple/foundationdb/)

## CosmoDB

[Azure Cosmos DB – Globally Distributed Database Service (formerly DocumentDB) | Microsoft Azure](https://azure.microsoft.com/en-us/services/cosmos-db/)
[Cosmos DB - Wikiwand](https://www.wikiwand.com/en/Cosmos_DB)
[Introduction to Azure Cosmos DB | Microsoft Docs](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction)

multi data model, multi API, multi consistencies database as a service by Microsoft

## FaunaDB

[Fauna | The data API for client-serverless applications](https://fauna.com/)
Define a GraphQL schema and it will handle the rest
distributed ACID document DB

[Fauna is rethinking the database with Evan Weaver, Co-founder and CTO at Fauna (Changelog Interviews #461)](https://changelog.com/podcast/461)
[FaunaDB Basics - The Database of your Dreams - YouTube](https://www.youtube.com/watch?v=2CipVwISumA)

---

# Time Series

[What Are Time Series Databases, and Why Do You Need Them? - The New Stack](https://thenewstack.io/what-are-time-series-databases-and-why-do-you-need-them/)
[4 Best Time Series Databases To Watch in 2019 – devconnected](http://devconnected.com/4-best-time-series-databases-to-watch-in-2019/)
[Time Series Analysis For Beginners - Towards Data Science](https://towardsdatascience.com/time-series-analysis-for-beginners-8a200552e332)

Time series database is also good for logging

[Time Series Analysis Introduction — A Comparison of ARMA, ARIMA, SARIMA Models | by Destin Gong | Nov, 2022 | Towards Data Science](https://towardsdatascience.com/time-series-analysis-introduction-a-comparison-of-arma-arima-sarima-models-eea5cbf43c73)

[Time Series Database | NoSQL Time Series Database | Riak TS | Basho](http://basho.com/products/riak-ts/)
[OpenTSDB - A Distributed, Scalable Monitoring System](http://opentsdb.net/)

[Timescale | an open-source time-series SQL database optimized for fast ingest, complex queries and scale.](https://www.timescale.com/) Postgres extension
[Solving one of PostgreSQL's biggest weaknesses. - YouTube](https://www.youtube.com/watch?v=ruUlK6zRwS8)

[LinkedIn 開源時間序列預測函式庫 Greykite | iThome](https://www.ithome.com.tw/news/144430)
[Greykite: A flexible, intuitive, and fast forecasting library | LinkedIn Engineering](https://engineering.linkedin.com/blog/2021/greykite--a-flexible--intuitive--and-fast-forecasting-library)
[linkedin/greykite: A flexible, intuitive and fast forecasting library](https://github.com/linkedin/greykite)

[Greptime: Cloud-scale, Fast and Efficient Time Series Data Infrastructure | Greptime](https://greptime.com/)
[GreptimeTeam/greptimedb: GreptimeDB, an open-source, cloud-native, distributed time-series database.](https://github.com/GreptimeTeam/greptimedb)

[Apache IoTDB](https://iotdb.apache.org/)

[Telegraf Open Source Server Agent | InfluxData](https://www.influxdata.com/time-series-platform/telegraf/)

[[elastic-elasticsearch]]

## InfluxDB

[Home InfluxDB | InfluxData](https://www.influxdata.com/home/)
[InfluxDB - Wikiwand](https://www.wikiwand.com/en/InfluxDB)
[influxdata/influxdb: Scalable datastore for metrics, events, and real-time analytics](https://github.com/influxdata/influxdb)
InfluxDB 2.0 is cloud based, the battle tested features goes to the open source version, more like a downstream
IOX (InfluxDB 3.0?) separated the DB part as open source product,the control plane is the closed source commercial part

[The Definitive Guide To InfluxDB In 2019 – devconnected](http://devconnected.com/the-definitive-guide-to-influxdb-in-2019/)
[Getting Started with Python and InfluxDB – The New Stack](https://thenewstack.io/getting-started-with-python-and-influxdb/)

[InfluxData Documentation](https://docs.influxdata.com/)

[Query data stored in InfluxDB | InfluxDB Cloud Documentation](https://docs.influxdata.com/influxdb/cloud/query-data/)
[Use the Flux Visual Studio Code extension | InfluxDB Cloud Documentation](https://docs.influxdata.com/influxdb/cloud/tools/flux-vscode/)

[InfluxDB (TICK Stack) — Part1. Overview | by Nidhin kumar | CodingTown | Medium](https://medium.com/codingtown/influxdb-tick-stack-part1-28bd04d10a18)
[InfluxDB (TICK Stack) — Part2. Overview | by Nidhin kumar | CodingTown | Medium](https://medium.com/codingtown/influxdb-tick-stack-part2-ce8612c73a5c)

## M3DB

[M3: Open Source Metrics Engine](https://m3db.io/) wire compatible with InfluxDB, built for Prometheus and Grafana
[M3 vs other time series databases](https://aiven.io/blog/m3-vs-other-time-series-databases)

# Real Time

RethinkDB
GunDB
MemSQL
VoltDB

[Introduction · RxDB - Documentation](https://rxdb.info/)

[Fluid Framework](https://fluidframework.com/)
[Solving real time collaboration using Eventual Consistency](https://matt.aimonetti.net/posts/2020-09-solving-real-time-collaboration-using-eventual-consistency/)

[Druid | Database for modern analytics applications](https://druid.apache.org/)
[Introduction to Apache Druid | Apache® Druid](https://druid.apache.org/docs/latest/design/)

# AIDB

[Machine Learning In Your Database Using SQL](https://mindsdb.com/)
[mindsdb/mindsdb: A low-code Machine Learning platform to help developers build AI solutions](https://github.com/mindsdb/mindsdb)

# Hacky DB

[mapbox/hubdb: a github-powered database](https://github.com/mapbox/hubdb)
[jadeallencook/gDoc.js: Use Google Spreadsheets as your CMS](https://github.com/jadeallencook/gDoc.js)
[Sheetsee.js](http://jlord.us/sheetsee.js/) Uses Google Spreadsheets

# DBaaS

[PlanetScale Pricing](https://planetscale.com/pricing) MySQL-compatible, with free tier

[Connves | Plans and Pricing](https://www.convex.dev/pricing) with free tier

[Pricing | Cockroach Labs](https://www.cockroachlabs.com/pricing/) distributed SQL, with free tier

[Pricing | Railway](https://railway.app/pricing) can host SQL, Redis, Mongo, $5 credit per month

[Turso | Pricing](https://turso.tech/pricing) SQLite on the edge, generous free tier

[Pricing and Plans | Fauna](https://fauna.com/pricing) distributed ACID document DB

[Neon — Serverless, Fault-Tolerant, Branchable Postgres](https://neon.tech/) built on Postgres

[Pricing | MongoDB](https://www.mongodb.com/pricing) with free tier

[Upstash: Serverless Data for Redis® and Kafka®](https://www.upstash.com/#section-pricing) with free tier, cheap

[Pricing & fees | Supabase](https://supabase.com/pricing) Firebase alternative, with free tier

[Fauna | Pricing](https://fauna.com/pricing) generous free tier

[The open-source alternative to Vercel Storage | JavaScript in Plain English](https://javascript.plainenglish.io/dodging-the-vercel-storage-tax-there-are-better-open-source-alternatives-ef04e537b598)
[Vercel Storage | Vercel Docs](https://vercel.com/docs/storage)
[Vercel Postgres | Vercel Docs](https://vercel.com/docs/storage/vercel-postgres) powered by Neon
[Vercel KV | Vercel Docs](https://vercel.com/docs/storage/vercel-kv) Redis compatible KB store, replacible by Upstash
[Vercel Blob | Vercel Docs](https://vercel.com/docs/storage/vercel-blob) S3 compatible storage powered by Cloudflare R2
