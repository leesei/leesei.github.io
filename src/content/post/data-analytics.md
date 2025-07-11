---
title: Data Analytics
description: ""
created: 2016-09-21
updated: 2025-06-24
tags:
  - big-data
---

[[devops]]
[[database]]
[[elastic-stack]]
[[elastic-kibana]]
[[jupyter]]

[Analytics - Wikiwand](http://www.wikiwand.com/en/Analytics)
[Data Analytics Reference Stack | Clear Linux\* Project](https://clearlinux.org/stacks/data-analytics)
[Data Science Timeline - Noteworthy - The Journal Blog](https://blog.usejournal.com/data-science-timeline-305ef75dceb6)
[Data Analyst VS Data Scientist – What's the Difference?](https://www.freecodecamp.org/news/data-analyst-vs-data-scientist-whats-the-difference/)

[Software analytics - Wikiwand](http://www.wikiwand.com/en/Software_analytics)
[Web analytics - Wikiwand](https://www.wikiwand.com/en/Web_analytics)
[IT operations analytics - Wikiwand](http://www.wikiwand.com/en/IT_operations_analytics)
[Session (web analytics) - Wikiwand](<http://www.wikiwand.com/en/Session_(web_analytics)>)

[Behavioral analytics - Wikiwand](https://www.wikiwand.com/en/Behavioral_analytics)
not to be confused with User Behavioral Analytics, used in security context for threat detection
[Business intelligence - Wikiwand](https://www.wikiwand.com/en/Business_intelligence)
[Cohort analysis - Wikiwand](https://www.wikiwand.com/en/Cohort_analysis)
[10 Steps To Get You Started With Behavioral Analytics](https://amplitude.com/blog/2016/06/14/10-steps-behavioral-analytics/)
[Six Ways to Create Better Customer Behavior Analytics | Datameer](https://www.datameer.com/blog/six-ways-create-better-customer-behavior-analytics/)

[What is Operational Analytics? - Definition from Techopedia](https://www.techopedia.com/definition/29495/operational-analytics)
[Operations Analytics | Coursera](https://www.coursera.org/learn/wharton-operations-analytics)
First data, logs or events triggered by applications and services, must be collected and store on some data store.

[How to Learn Math for Data Science: A Roadmap for Beginners - KDnuggets](https://www.kdnuggets.com/how-to-learn-math-for-data-science-a-roadmap-for-beginners)
[4 free maths courses to do in quarantine and level up your Data Science skills | by Gonzalo Ferreiro Volpi | Towards Data Science](https://towardsdatascience.com/4-free-maths-courses-to-do-in-quarantine-and-level-up-your-data-science-skills-f815daca56f7?source=friends_link&sk=e21d4439fe6e60160c25668377f66936)
[Machine Learning and Data Science free online courses to do in quararantine | Towards Data Science](https://towardsdatascience.com/machine-learning-free-online-courses-from-beginner-to-advanced-f50982dce950)
[Training for Data Analysts | Microsoft Learn](https://learn.microsoft.com/en-us/training/career-paths/data-analyst)
[Training for Data Engineers | Microsoft Learn](https://learn.microsoft.com/en-us/training/career-paths/data-engineer)
[Training for Data Scientists | Microsoft Learn](https://learn.microsoft.com/en-us/training/career-paths/data-scientist)

[From unstructured data to actionable intelligence: Using machine learning for threat intelligence - Microsoft Security](https://www.microsoft.com/security/blog/2019/08/08/from-unstructured-data-to-actionable-intelligence-using-machine-learning-for-threat-intelligence/)

[The Best Free Data Science eBooks - Towards Data Science](https://towardsdatascience.com/the-best-free-data-science-ebooks-b671691e5231)
[10 Free Data Science Books For 2025 - KDnuggets](https://www.kdnuggets.com/10-free-data-science-books-for-2025)

[Introducing Application Insights Analytics - Brian Harry's Blog](https://devblogs.microsoft.com/bharry/introducing-application-analytics/)

[Apache Hadoop Ecosystem and Open Source Big Data Projects | Hortonworks](https://hortonworks.com/ecosystems/) ❗!important

[Prefect Docs](https://docs.prefect.io/) Workflow Orchestration For Resilient Data Platforms
[101 Machine Learning Algorithms for Data Science with Cheat Sheets | R-bloggers](https://www.r-bloggers.com/101-machine-learning-algorithms-for-data-science-with-cheat-sheets/amp/)
[7 Open Source Data Science Projects | Machine Learning Projects](https://www.analyticsvidhya.com/blog/2020/07/7-open-source-data-science-projects-add-resume/)

## Use cases

[OLTP vs. OLAP](http://datawarehouse4u.info/OLTP-vs-OLAP.html)

[Online transaction processing - Wikiwand](https://www.wikiwand.com/en/Online_transaction_processing) OLTP
[What is OLTP (online transaction processing)? - Definition from WhatIs.com](https://searchdatacenter.techtarget.com/definition/OLTP)
[Online analytical processing - Wikiwand](https://www.wikiwand.com/en/Online_analytical_processing) OLAP
[What is OLAP (online analytical processing)? - Definition from WhatIs.com](https://searchdatamanagement.techtarget.com/definition/OLAP)
[Hybrid transactional/analytical processing - Wikiwand](https://www.wikiwand.com/en/Hybrid_transactional/analytical_processing) NoSQL/NewSQL database can serve this purpose
RTA
[Data warehouse - Wikiwand](https://www.wikiwand.com/en/Data_warehouse)
[Extract, transform, load - Wikiwand](https://www.wikiwand.com/en/Extract,_transform,_load)
[ETL](http://datawarehouse4u.info/ETL-process.html)
[ETLs vs ELTs: Why are ELTs Disrupting the Data Market? | by SeattleDataGuy | Coriers | Mar, 2021 | Medium](https://medium.com/coriers/etls-vs-elts-why-are-elts-disrupting-the-data-market-5c2e0dc76d29)

[A good nudge trumps a good prediction - O'Reilly Radar](http://radar.oreilly.com/2014/07/a-good-nudge-trumps-a-good-prediction.html)

> Whether prediction should be user friendly or business friendly

## Stream Architecture

[What is Stream Processing? - data Artisans](https://data-artisans.com/what-is-stream-processing)
[How a Stream Works - DZone Big Data](https://dzone.com/articles/how-a-stream-works)
[What is a Streaming Database?](https://materialize.com/guides/streaming-database/)

The state can be built from events

["Turning the database inside out with Apache Samza" by Martin Kleppmann - YouTube](https://www.youtube.com/watch?v=fU9hR3kiOK0)
["Transactions: myths, surprises and opportunities" by Martin Kleppmann - YouTube](https://www.youtube.com/watch?v=5ZjhNTM8XU8)

[Streaming Architecture with Ted Dunning | Software Engineering Daily](https://softwareengineeringdaily.com/2018/02/19/streaming-architecture-with-ted-dunning/)
Spark: Batch first, then stream; ELT job, working set in memory
Flink: Stream first, then batch; exactly one event processing

Streaming pipeline:

| Type           | Example        | Storage Media | Usage                                                 |
| -------------- | -------------- | ------------- | ----------------------------------------------------- |
| Message bus    | Redis, Kafka   | RAM, Disk     | low latency data ingest                               |
| Datalake       | S3/HDFS        | Disk          | high capacity low cost long term storage              |
| Data warehouse | Elasticsearch  | RAM           | data structuring and indexing, fast interactive query |
| Database       | MySQL, MongoDB | RAM, Disk     | data access with indexing                             |

[Apache Flink vs. Apache Spark - DZone Big Data](https://dzone.com/articles/apache-flink-vs-apache-spark-brewing-codes)
[Apache Flink: Does the world need another streaming engine? | ZDNet](https://www.zdnet.com/article/apache-flink-does-the-world-need-another-streaming-engine/)
[Choose your real-time weapon: Storm or Spark? | InfoWorld](https://www.infoworld.com/article/2854894/application-development/spark-and-storm-for-real-time-computation.html)

[ksqlDB: The database purpose-built for stream processing applications.](https://ksqldb.io/)

[Apache Flink: Scalable Stream and Batch Data Processing](https://flink.apache.org/)
[How Netflix Optimized Flink for Massive Scale on AWS](https://www.datanami.com/2018/04/30/how-netflix-optimized-flink-for-massive-scale-on-aws/)
[Why Apache Flink - data Artisans](https://data-artisans.com/why-apache-flink)

[Apache Kafka](https://kafka.apache.org/)
[Apache Kafka - Hortonworks](https://hortonworks.com/apache/kafka/)
[Kafka Design Patterns with Gwen Shapira | Software Engineering Daily](https://softwareengineeringdaily.com/2018/02/20/kafka-design-patterns-with-gwen-shapira/)
[Best Practices for Apache Kafka® in Production: Confluent Online Talk Series - Confluent](https://www.confluent.io/online-talk/best-practices-for-apache-kafka-in-production-confluent-online-talk-series)
[How to install Kafka using Docker - ITNEXT](https://itnext.io/how-to-install-kafka-using-docker-a2b7c746cbdc)
[Apache Kafka, Data Pipelines, and Functional Reactive Programming with Node.js | Heroku](https://blog.heroku.com/kafka-data-pipelines-frp-node)
[Apache Kafka Crash Course - YouTube](https://www.youtube.com/watch?v=R873BlNVUB4)
[Top 10 Problems When Using Apache Kafka - Pandio](https://pandio.com/blog/top-10-problems-when-using-apache-kafka/)

[Apache Pulsar](https://pulsar.apache.org/) Apache Pulsar is an open-source distributed pub-sub messaging system
[Comparing Apache Kafka and Apache Pulsar | by Jaroslaw Kijanowski | SoftwareMill Tech Blog](https://blog.softwaremill.com/comparing-apache-kafka-and-apache-pulsar-3bd44e00f304)
[7 Reasons We Chose Apache Pulsar over Apache Kafka | DataStax](https://www.datastax.com/blog/2019/05/7-reasons-we-chose-apache-pulsar-over-apache-kafka)
[5 More Reasons to Choose Apache Pulsar over Kafka | DataStax](https://www.datastax.com/blog/2019/10/5-more-reasons-choose-apache-pulsar-over-kafka)

[Apache NiFi](https://nifi.apache.org/)
[Apache NiFi - Hortonworks](https://hortonworks.com/apache/nifi/)

[Apache Storm](http://storm.apache.org/)
[Apache Storm - Hortonworks](https://hortonworks.com/apache/storm/)
[Apache Storm: Architecture - DZone Big Data](https://dzone.com/articles/apache-storm-architecture)

[Apache Spark™ - Unified Analytics Engine for Big Data](https://spark.apache.org/)
[Apache Spark - Hortonworks](https://hortonworks.com/apache/spark/)
[Spark and Streaming with Matei Zaharia | Software Engineering Daily](https://softwareengineeringdaily.com/2018/02/26/spark-and-streaming-with-matei-zaharia/)
[Apache Spark Tutorials - Frank Kane - YouTube](https://www.youtube.com/playlist?list=PL6cactdCCnTJ2XZYIQYIwLperpbKB86jv)
[Apache Spark 2 using Python 3 - YouTube](https://www.youtube.com/playlist?list=PLf0swTFhTI8qtIYxVoPOjA2fYzBFiNMue)
[Spark SQL: An Introductory Guide - DZone Big Data](https://dzone.com/articles/spark-sql-an-introductory-guide-for-beginners)
[We interrupt this revolution: Apache Spark changes the rules of the game | ZDNet](https://www.zdnet.com/article/we-interrupt-this-revolution-apache-spark-changes-the-rules-of-the-game/)

[Apache Beam](https://beam.apache.org/)
[Apache Beam - Wikiwand](https://www.wikiwand.com/en/Apache_Beam)
stream API to abstract streaming warehouse, abstracts Flink, Spark, Dataflow
Beam is introducing a framework through which APIs in languages other than Java can be supported, and Python is the first one.

[Cloud Dataflow - Stream & Batch Data Processing | Google Cloud](https://cloud.google.com/dataflow/)
[Hadoop and Spark: A tale of two cities | ZDNet](https://www.zdnet.com/article/hadoop-and-spark-a-tale-of-two-cities/)

[Benthos | Benthos](https://www.benthos.dev/)

[The Streaming Database | Materialize](https://materialize.com/)

## Batch Architecture

[Apache Hadoop](https://hadoop.apache.org/)
[Big Data: What is Hadoop - An Easy Explanation For Absolutely Anyone](https://www.bernardmarr.com/default.asp?contentID=1080)

[Is Hadoop Officially Dead?](https://www.datanami.com/2018/10/18/is-hadoop-officially-dead/)
[Why is Hadoop dying? | Packt Hub](https://hub.packtpub.com/why-is-hadoop-dying/)

## Big data

[onurakpolat/awesome-bigdata: A curated list of awesome big data frameworks, ressources and other awesomeness.](https://github.com/onurakpolat/awesome-bigdata)

[The Data Science Venn Diagram — Drew Conway](http://drewconway.com/zia/2013/3/26/the-data-science-venn-diagram)
[The Third Wave Data Scientist – Towards Data Science](https://towardsdatascience.com/the-third-wave-data-scientist-1421df7433c9)

[Data Skeptic](https://dataskeptic.com/)
[A data cleaner's cookbook - About](https://www.polydesmida.info/cookbook/index.html)
[Chris Albon](https://chrisalbon.com/)

[OpenRefine | OpenRefine](https://openrefine.org/)
[OpenRefine/OpenRefine: OpenRefine is a free, open source power tool for working with messy data and improving it](https://github.com/OpenRefine/OpenRefine)

[Pachyderm - Scalable, Reproducible Data Science](http://www.pachyderm.io/)
[Containerized data analytics at scale, with Minio and Pachyderm](https://blog.minio.io/containerized-data-analytics-at-scale-with-minio-and-pachyderm-1b9256c86c5b)

[Data Science eBook by Analyticbridge - 2nd Edition - Data Science Central](https://www.datasciencecentral.com/profiles/blogs/data-science-ebook-2nd-edition-table-of-content)

[Extracting value from the IoT - O'Reilly Radar](http://radar.oreilly.com/2014/06/extracting-value-from-the-iot.html)

> Collecting data and loading it into a data warehouse is not sufficient. You also need capabilities for accessing, modeling, and analyzing your data.

[Awesome Data Science Repository - Data Science Central](http://www.datasciencecentral.com/group/research/forum/topics/awesome-data-science-repository)
[Nyandwi/machine_learning_complete: A comprehensive machine learning repository containing 30+ notebooks on different concepts, algorithms and techniques.](https://github.com/Nyandwi/machine_learning_complete)

[PredictionIO Open Source Machine Learning Server](https://prediction.io/)

[The Art and Science of Data-Driven Journalism](http://towcenter.gitbooks.io/the-art-and-science-of-data-driven-journalism/content/)

[Comparison of top data science libraries for Python, R and Scala [Infographic] - Data Science Central](https://www.datasciencecentral.com/profiles/blogs/comparison-of-top-data-science-libraries-for-python-r-and-scala)

[Kaggle: Your Home for Data Science](https://www.kaggle.com/)
[Introduction to Data Science](http://www.infoq.com/presentations/introduction-data-science)
[Explore Your Data: The Fundamentals of Network Analysis](http://www.infoq.com/presentations/network-analysis)

[Design vs. Data: Enemies or Friends?](http://www.infoq.com/presentations/design-data) how to evolve and extent a code base.

[Cathy O'Neil on Weapons of Math Destruction | EconTalk | Library of Economics and Liberty](http://www.econtalk.org/archives/2016/10/cathy_oneil_on_1.html) crucial decision made based on machine learn statistics is unreliable as no one really know how the algorithm works

[An expert's guide to big data storage architecture](https://searchstorage.techtarget.com/essentialguide/An-experts-guide-to-big-data-storage-architecture)
[Big data tutorial: Everything you need to know](https://searchstorage.techtarget.com/essentialguide/Big-data-tutorial-Everything-you-need-to-know)

### Apache

[a49a/bigdata-sql-benchmark: Flink, Presto, Trino TPC-DS benchmark](https://github.com/a49a/bigdata-sql-benchmark)
[Apache Iceberg](https://iceberg.apache.org/) The open table format for analytic datasets, supports SQL and Spark, Trino, Flink, Presto engine

[Apache Airflow](https://airflow.apache.org/) data pipeline in Python, SQL-like query
[A Practical Guide to Modern Airflow - KDnuggets](https://www.kdnuggets.com/a-practical-guide-to-modern-airflow)

## Datasets

[Fueling the Gold Rush: The Greatest Public Datasets for AI](https://medium.com/startup-grind/fueling-the-ai-gold-rush-7ae438505bc2)
[Data Asset eXchange – IBM Developer](https://developer.ibm.com/exchanges/data/)
[Open Data Kit](https://opendatakit.org/)
[Computer Vision Datasets](https://public.roboflow.com/)

[Access Free Google Cloud Public Dataset with Python](https://towardsdatascience.com/access-free-google-cloud-public-dataset-with-python-42eb378be72c)

[Datasets – Google Research](https://research.google/tools/datasets/)
[Dataset Search](https://datasetsearch.research.google.com/)
[Find Open Datasets and Machine Learning Projects | Kaggle](https://www.kaggle.com/datasets)
[Google just published 25 million free datasets - Towards Data Science](https://towardsdatascience.com/google-just-published-25-million-free-datasets-d83940e24284)

[COCO - Common Objects in Context](https://cocodataset.org/)
[An Introduction to the COCO Dataset](https://blog.roboflow.com/coco-dataset/)

[資料一線通 | DATA.GOV.HK](https://data.gov.hk/tc/)
[Open Data Hong Kong - 香港開放數據 | Hong Kong's Open Data community](https://www.opendatahk.com/)
[g0vhk.io - Home | Facebook](https://www.facebook.com/g0vhk.io)

[70 Amazing Free Data Sources You Should Know](https://www.kdnuggets.com/2017/12/big-data-free-sources.html)
[Datasets for Data Mining and Data Science](https://www.kdnuggets.com/datasets/index.html)

[Downloading The Kinetics Dataset For Human Action Recognition in Deep Learning](https://towardsdatascience.com/downloading-the-kinetics-dataset-for-human-action-recognition-in-deep-learning-500c3d50f776)
[Analysis of the MRNet Knee MRI dataset | The Startup](https://medium.com/swlh/deep-learning-and-medical-imaging-part-1-explore-the-mrnet-mri-dataset-of-knee-injuries-f519d063165)

[Label Studio](https://labelstud.io/) Open-source data labeling, annotation and exploration tool

## Business Analytics

### Commercial

[Big Data Integration and Analytics | Hitachi Vantara](https://www.hitachivantara.com/en-us/products/big-data-integration-analytics.html)
[Business Intelligence and Analytics | Tableau Software](https://www.tableau.com/)
[Introduction to Tableau - Learn The Part - Medium](https://medium.com/learn-the-part/introduction-to-tableau-a3ab92d0851f)

[Data Visualization | Microsoft Power BI](https://powerbi.microsoft.com/en-us/)
[15 分鐘上手 Power BI！我一旦認真起來連我自己都會害怕 ~ - YouTube](https://www.youtube.com/watch?v=9RcQUhlIb_Y)

[The 5 best self-service BI tools compared | CIO](https://www.cio.com/article/3281372/business-intelligence/the-5-best-self-service-bi-tools-compared.html)

[15 分鐘上手 Power BI！我一旦認真起來連我自己都會害怕 ~ - YouTube](https://www.youtube.com/watch?v=9RcQUhlIb_Y)

### Open source

[Apache Superset (incubating) — Apache Superset documentation](http://superset.apache.org/)
[Redash helps you make sense of your data | Redash](https://redash.io/)
[Metabase](https://www.metabase.com/)

[Easy analytics with Grafana, Postgres, and Kubernetes.](https://medium.com/@MailSlurp/easy-analytics-with-grafana-postgres-and-kubernetes-a9451f41d0be)

---

## Data Generation

### JavaScript

[Chance](https://chancejs.com/)
[chancejs/chancejs: Chance - Random generator helper for JavaScript](https://github.com/chancejs/chancejs)

[aharris88/awesome-ipsum](https://github.com/aharris88/awesome-ipsum)
[dejavu1987/jabber: Simple random word / paragraph / lorem ipsum / dummy text generator.](https://github.com/dejavu1987/jabber)

[Marak/faker.js](https://github.com/marak/Faker.js/)
[drewbrokke/chance-token-replacer](https://github.com/drewbrokke/chance-token-replacer)
[ngneat/falso: All the Fake Data for All Your Real Needs 🙂](https://github.com/ngneat/falso)
[adleroliveira/dreamjs: A lightweight json data generator.](https://github.com/adleroliveira/dreamjs)
[json-schema-faker/json-schema-faker: JSON-Schema + Faker](https://github.com/json-schema-faker/json-schema-faker)
[danibram/mocker-data-generator](https://github.com/danibram/mocker-data-generator/)

### Python

[Welcome to Faker’s documentation! — Faker documentation](https://faker.readthedocs.io/en/master/)
[joke2k/faker: Faker is a Python package that generates fake data for you.](https://github.com/joke2k/faker)

[Mimesis: Fake Data Generator — Mimesis 17.1.0 documentation](https://mimesis.name/master/)
[lk-geimfari/mimesis: Mimesis is a robust data generator for Python that can produce a wide range of fake data in multiple languages.](https://github.com/lk-geimfari/mimesis)
[Getting Started with Mimesis: A Modern Approach to Synthetic Data Generation](https://www.statology.org/getting-started-mimesis-modern-approach-synthetic-data-generation/)

[chris1610/barnum-proj: Python application for generating pseudo-random data](https://github.com/chris1610/barnum-proj)

## Data Processing

[Tabula: Extract Tables from PDFs](https://tabula.technology/)
[香港地址解析器 Hong Kong Address Parser](https://g0vhk-io.github.io/HKAddressParser/#/)
[Data Analytics Reference Stack | Clear Linux\* Project](https://clearlinux.org/stacks/data-analytics)

[AugLy: A new data augmentation library to help build more robust AI models](https://ai.facebook.com/blog/augly-a-new-data-augmentation-library-to-help-build-more-robust-ai-models/)
[facebookresearch/AugLy: A data augmentations library for audio, image, text, and video.](https://github.com/facebookresearch/AugLy)

## Data Build Tool/dbt

[What is dbt? | dbt Developer Hub](https://docs.getdbt.com/docs/introduction)

[Transform Your Data Like a Pro With dbt (Data Build Tool) - DEV Community](https://dev.to/grayhat/transform-your-data-like-a-pro-with-dbt-data-build-tool-39kd)

## DataStation

[DataStation | The Data IDE for Developers](https://datastation.multiprocess.io/)
[multiprocessio/datastation: Easily query, script, and visualize data from every database, file, and API.](https://github.com/multiprocessio/datastation)
[multiprocessio/dsq: Commandline tool for running SQL queries against JSON, CSV, Excel, Parquet, and more.](https://github.com/multiprocessio/dsq)

## Python

[[data-analytics-python]]

## JavaScript

[Danfo.js Documentation - Danfo.js](https://danfo.jsdata.org/) Pandas for JavaScript
[Hello from Scikit.js | Scikit.js](https://scikitjs.org/) Scikit Learn for JavaScript
[JSdata](https://github.com/orgs/javascriptdata/repositories?type=source)

[Crossfilter](http://crossfilter.github.io/crossfilter/) Pandas for JavaScript
[How to Create an Interactive Dashboard with Crossfilter and Dc.Js](https://blog.sicara.com/interactive-dashboard-crossfilter-dcjs-tutorial-7f3a3ea584c2)

[scijs](https://github.com/scijs?type=source)
[ndarray](http://mikolalysenko.github.io/ndarray-presentation/#/1/5)
[Implementing Multidimensional Arrays in JavaScript | 0 FPS](https://0fps.net/2013/05/22/implementing-multidimensional-arrays-in-javascript/)

[tidy.js](https://pbeshai.github.io/tidy/)
[tidy.js – Intro & Demo / Peter Beshai / Observable](https://observablehq.com/@pbeshai/tidy-js-intro-demo)

## C

[Articles on Mathematics, Physics and Computer Science](https://beltoforion.de/en/index.php)

[muparser - fast math parser library](https://beltoforion.de/en/muparser/)

## Go

[DataFrames in Go with gota, qframe, and dataframe-go - MungingData](https://mungingdata.com/go/dataframes-gota-qframe/)

[gonum](https://github.com/gonum)
[plot package - gonum.org/v1/plot - pkg.go.dev](https://pkg.go.dev/gonum.org/v1/plot)

[tobgu/qframe: Immutable data frame for Go](https://github.com/tobgu/qframe)
[go-gota/gota: Gota: DataFrames and data wrangling in Go (Golang)](https://github.com/go-gota/gota)
[rocketlaunchr/dataframe-go: DataFrames for Go: For statistics, machine-learning, and data manipulation/exploration](https://github.com/rocketlaunchr/dataframe-go)

## Rust

[Vector | A lightweight, ultra-fast tool for building observability pipelines](https://vector.dev/)

### Polars

[Polars](https://www.pola.rs/)
[Pandas vs. Polars: A Syntax and Speed Comparison | by Leonie Monigatti | Jan, 2023 | Towards Data Science](https://towardsdatascience.com/pandas-vs-polars-a-syntax-and-speed-comparison-5aa54e27497e)
[Why Polars uses less memory than Pandas](https://pythonspeed.com/articles/polars-memory-pandas/)
[Polars for initial data analysis, Polars for production](https://pythonspeed.com/articles/polars-exploratory-data-analysis-vs-production/)
[Replacing Pandas with Polars. A Practical Guide. - Confessions of a Data Guy](https://www.confessionsofadataguy.com/replacing-pandas-with-polars-a-practical-guide/)
[Working With Python Polars – Real Python](https://realpython.com/courses/working-with-python-polars/)
[Polars for Pandas Users: A Blazing Fast DataFrame Alternative - KDnuggets](https://www.kdnuggets.com/polars-for-pandas-users-a-blazing-fast-dataframe-alternative)
